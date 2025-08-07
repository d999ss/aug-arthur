import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ContactForm } from '@/components/contact-form';
import { Providers } from '@/lib/providers';

// Mock tRPC
const mockMutate = vi.fn();
vi.mock('@/lib/trpc/client', () => ({
  trpc: {
    contact: {
      submit: {
        useMutation: () => ({
          mutate: mockMutate,
          isPending: false,
          isError: false,
          error: null,
        }),
      },
    },
  },
}));

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <Providers>
      {component}
    </Providers>
  );
};

describe('ContactForm', () => {
  beforeEach(() => {
    mockMutate.mockClear();
  });

  it('renders all form fields', () => {
    renderWithProviders(<ContactForm />);
    
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/company/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('shows validation errors for required fields', async () => {
    const user = userEvent.setup();
    renderWithProviders(<ContactForm />);
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/invalid email address/i)).toBeInTheDocument();
      expect(screen.getByText(/subject is required/i)).toBeInTheDocument();
      expect(screen.getByText(/message is required/i)).toBeInTheDocument();
    });
  });

  it('validates email format', async () => {
    const user = userEvent.setup();
    renderWithProviders(<ContactForm />);
    
    const emailInput = screen.getByLabelText(/email/i);
    await user.type(emailInput, 'invalid-email');
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/invalid email address/i)).toBeInTheDocument();
    });
  });

  it('accepts valid form input and submits', async () => {
    const user = userEvent.setup();
    renderWithProviders(<ContactForm />);
    
    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/company/i), 'Test Company');
    await user.type(screen.getByLabelText(/phone/i), '+1234567890');
    await user.type(screen.getByLabelText(/subject/i), 'Test Subject');
    await user.type(screen.getByLabelText(/message/i), 'Test message content');
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'john@example.com',
        company: 'Test Company',
        phone: '+1234567890',
        subject: 'Test Subject',
        message: 'Test message content',
      });
    });
  });

  it('handles form submission errors gracefully', async () => {
    const user = userEvent.setup();
    
    // Mock error state
    vi.mocked(require('@/lib/trpc/client').trpc.contact.submit.useMutation).mockReturnValue({
      mutate: mockMutate,
      isPending: false,
      isError: true,
      error: { message: 'Network error' },
    });
    
    renderWithProviders(<ContactForm />);
    
    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/subject/i), 'Test Subject');
    await user.type(screen.getByLabelText(/message/i), 'Test message');
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/network error/i)).toBeInTheDocument();
    });
  });
});
