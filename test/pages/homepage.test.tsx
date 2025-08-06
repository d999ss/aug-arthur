import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HomePage from '@/app/page';

describe('HomePage', () => {
  it('renders the main heading', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders hero section', () => {
    render(<HomePage />);
    expect(screen.getByText(/arthur companies/i)).toBeInTheDocument();
  });

  it('renders call-to-action buttons', () => {
    render(<HomePage />);
    const ctaButtons = screen.getAllByRole('link').filter(link => 
      link.textContent?.includes('Learn More') || 
      link.textContent?.includes('Contact') ||
      link.textContent?.includes('Get Started')
    );
    expect(ctaButtons.length).toBeGreaterThan(0);
  });

  it('renders services overview section', () => {
    render(<HomePage />);
    expect(screen.getByText(/services/i)).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(<HomePage />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
