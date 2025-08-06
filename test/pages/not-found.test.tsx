import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import NotFound from '@/app/not-found';

describe('NotFound', () => {
  it('renders 404 heading', () => {
    render(<NotFound />);
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });

  it('renders not found message', () => {
    render(<NotFound />);
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });

  it('renders link to home page', () => {
    render(<NotFound />);
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(<NotFound />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
