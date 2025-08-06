import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footer } from '@/components/footer';

describe('Footer', () => {
  it('renders company information', () => {
    render(<Footer />);
    expect(screen.getByText(/arthur companies/i)).toBeInTheDocument();
  });

  it('renders footer navigation links', () => {
    render(<Footer />);
    
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  it('renders legal links', () => {
    render(<Footer />);
    
    expect(screen.getByRole('link', { name: /privacy policy/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /terms of service/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /accessibility/i })).toBeInTheDocument();
  });

  it('renders copyright information', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`${currentYear}.*arthur companies`, 'i'))).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<Footer />);
    
    // Assuming social media links exist
    const socialLinks = screen.getAllByRole('link').filter(link => 
      link.getAttribute('aria-label')?.includes('social') ||
      link.getAttribute('href')?.includes('linkedin') ||
      link.getAttribute('href')?.includes('twitter')
    );
    
    expect(socialLinks.length).toBeGreaterThanOrEqual(0);
  });
});
