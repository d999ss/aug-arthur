import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Header } from '@/components/header';

// Mock the mobile hook
vi.mock('@/hooks/use-mobile', () => ({
  useIsMobile: () => false,
}));

describe('Header', () => {
  it('renders the Arthur Companies logo', () => {
    render(<Header />);
    expect(screen.getByText('Arthur Companies')).toBeInTheDocument();
  });

  it('renders main navigation links', () => {
    render(<Header />);
    
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /research/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /venture/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  it('has proper navigation structure', () => {
    render(<Header />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('renders mobile menu button on mobile', () => {
    vi.mocked(require('@/hooks/use-mobile').useIsMobile).mockReturnValue(true);
    render(<Header />);
    
    const menuButton = screen.getByRole('button', { name: /menu/i });
    expect(menuButton).toBeInTheDocument();
  });
});
