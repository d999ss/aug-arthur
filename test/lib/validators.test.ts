import { describe, it, expect } from 'vitest';
import { contactFormSchema, type ContactFormData } from '@/lib/validators';

describe('validators', () => {
  describe('contactFormSchema', () => {
    it('validates correct contact form data', () => {
      const validData: ContactFormData = {
        name: 'John Doe',
        email: 'john@example.com',
        company: 'Test Company',
        phone: '+1234567890',
        subject: 'Test Subject',
        message: 'This is a test message',
      };

      const result = contactFormSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('rejects invalid email addresses', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'invalid-email',
        subject: 'Test Subject',
        message: 'This is a test message',
      };

      const result = contactFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success && result.error.issues[0]) {
        expect(result.error.issues[0].path).toContain('email');
      }
    });

    it('requires name field', () => {
      const invalidData = {
        email: 'john@example.com',
        subject: 'Test Subject',
        message: 'This is a test message',
      };

      const result = contactFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues.some(issue => issue.path.includes('name'))).toBe(true);
      }
    });

    it('requires subject field', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a test message',
      };

      const result = contactFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues.some(issue => issue.path.includes('subject'))).toBe(true);
      }
    });

    it('requires message field', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Test Subject',
      };

      const result = contactFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues.some(issue => issue.path.includes('message'))).toBe(true);
      }
    });

    it('allows optional company and phone fields', () => {
      const validData = {
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Test Subject',
        message: 'This is a test message',
      };

      const result = contactFormSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('validates phone number format when provided', () => {
      const dataWithInvalidPhone = {
        name: 'John Doe',
        email: 'john@example.com',
        phone: 'invalid-phone',
        subject: 'Test Subject',
        message: 'This is a test message',
      };

      const result = contactFormSchema.safeParse(dataWithInvalidPhone);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues.some(issue => issue.path.includes('phone'))).toBe(true);
      }
    });

    it('trims whitespace from string fields', () => {
      const dataWithWhitespace = {
        name: '  John Doe  ',
        email: '  john@example.com  ',
        company: '  Test Company  ',
        subject: '  Test Subject  ',
        message: '  This is a test message  ',
      };

      const result = contactFormSchema.safeParse(dataWithWhitespace);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.name).toBe('John Doe');
        expect(result.data.email).toBe('john@example.com');
        expect(result.data.company).toBe('Test Company');
        expect(result.data.subject).toBe('Test Subject');
        expect(result.data.message).toBe('This is a test message');
      }
    });
  });
});
