import { test, expect } from '@playwright/test';

test.describe('404 Page', () => {
  test('renders 404 page for non-existent routes', async ({ page }) => {
    await page.goto('/non-existent-page');
    
    // Check for 404 heading
    await expect(page.getByRole('heading', { name: /404/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /page not found/i })).toBeVisible();
    
    // Check for descriptive text
    await expect(page.getByText(/sorry, we couldn't find the page you're looking for/i)).toBeVisible();
    
    // Check for navigation options
    await expect(page.getByRole('link', { name: /go home/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /contact us/i })).toBeVisible();
  });

  test('404 page navigation works correctly', async ({ page }) => {
    await page.goto('/invalid-route');
    
    // Click "Go Home" button
    await page.getByRole('link', { name: /go home/i }).click();
    await expect(page).toHaveURL('/');
    await expect(page.getByRole('heading', { name: /where innovation grows/i })).toBeVisible();
  });

  test('404 page contact link works', async ({ page }) => {
    await page.goto('/another-invalid-route');
    
    // Click "Contact Us" button
    await page.getByRole('link', { name: /contact us/i }).click();
    await expect(page).toHaveURL('/contact');
    await expect(page.getByRole('heading', { name: /contact us/i })).toBeVisible();
  });

  test('404 page maintains header and footer', async ({ page }) => {
    await page.goto('/does-not-exist');
    
    // Header should be present
    await expect(page.getByRole('banner')).toBeVisible();
    await expect(page.getByRole('link', { name: /arthur companies/i }).first()).toBeVisible();
    
    // Footer should be present
    await expect(page.getByRole('contentinfo')).toBeVisible();
    await expect(page.getByText(/© 2024 arthur companies/i)).toBeVisible();
  });

  test('404 page is accessible', async ({ page }) => {
    await page.goto('/accessibility-test-404');
    
    // Check for proper heading hierarchy
    const h1 = page.getByRole('heading', { level: 1 });
    await expect(h1).toBeVisible();
    
    // Check for proper focus management
    await page.keyboard.press('Tab');
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
    
    // Check for skip link
    await expect(page.getByRole('link', { name: /skip to main content/i })).toBeVisible();
  });

  test('404 page works on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/mobile-404-test');
    
    // Content should be visible and properly formatted
    await expect(page.getByRole('heading', { name: /404/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /go home/i })).toBeVisible();
    
    // Mobile navigation should work
    await page.getByRole('button', { name: /menu/i }).click();
    await expect(page.getByRole('navigation').locator('[data-state="open"]')).toBeVisible();
  });

  test('404 page handles deep nested routes', async ({ page }) => {
    await page.goto('/very/deep/nested/route/that/does/not/exist');
    
    await expect(page.getByRole('heading', { name: /404/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /go home/i })).toBeVisible();
  });

  test('404 page handles routes with query parameters', async ({ page }) => {
    await page.goto('/invalid?param=value&another=test');
    
    await expect(page.getByRole('heading', { name: /404/i })).toBeVisible();
    
    // Navigation should still work
    await page.getByRole('link', { name: /go home/i }).click();
    await expect(page).toHaveURL('/');
  });

  test('404 page performance is acceptable', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/performance-test-404');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    // 404 page should load quickly
    expect(loadTime).toBeLessThan(2000);
  });

  test('search functionality on 404 page', async ({ page }) => {
    await page.goto('/search-test-404');
    
    // Check if search suggestions are present
    await expect(page.getByText(/popular pages/i)).toBeVisible();
    await expect(page.getByRole('link', { name: /about/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /services/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /contact/i })).toBeVisible();
  });
});
