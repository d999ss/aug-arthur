import { test, expect } from '@playwright/test';

test.describe('Contact Page', () => {
  test('contact form is functional', async ({ page }) => {
    await page.goto('/contact');
    
    await expect(page.getByRole('heading', { name: /contact us/i })).toBeVisible();
    await expect(page.getByRole('form')).toBeVisible();
    
    // Fill out form
    await page.getByLabel(/name/i).fill('Test User');
    await page.getByLabel(/email/i).fill('test@example.com');
    await page.getByLabel(/subject/i).fill('Test Subject');
    await page.getByLabel(/message/i).fill('Test message content');
    
    // Submit form
    await page.getByRole('button', { name: /send message/i }).click();
    
    // Should show success message (mocked)
    await expect(page.getByText(/thank you/i)).toBeVisible({ timeout: 10000 });
  });

  test('form validation works', async ({ page }) => {
    await page.goto('/contact');
    
    // Try to submit empty form
    await page.getByRole('button', { name: /send message/i }).click();
    
    // Should show validation errors
    await expect(page.getByText(/name is required/i)).toBeVisible();
    await expect(page.getByText(/invalid email/i)).toBeVisible();
  });
});
