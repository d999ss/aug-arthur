import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('loads successfully with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Arthur Companies/);
    
    // Check for main heading
    await expect(page.getByRole('heading', { name: /where innovation grows/i })).toBeVisible();
    
    // Verify page loads without console errors
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.waitForLoadState('networkidle');
    expect(errors).toHaveLength(0);
  });

  test('hero section displays correctly', async ({ page }) => {
    // Main hero heading
    await expect(page.getByRole('heading', { name: /where innovation grows/i })).toBeVisible();
    
    // Subtitle text
    await expect(page.getByText(/100 years in the field/i)).toBeVisible();
    
    // CTA buttons
    await expect(page.getByRole('link', { name: /view cash bids/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /learn more/i })).toBeVisible();
    
    // Hero image
    await expect(page.getByAltText(/agricultural field/i)).toBeVisible();
  });

  test('values section is present and complete', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /our values/i })).toBeVisible();
    
    // Check all four values
    await expect(page.getByText(/integrity/i)).toBeVisible();
    await expect(page.getByText(/service/i)).toBeVisible();
    await expect(page.getByText(/pioneering/i)).toBeVisible();
    await expect(page.getByText(/excellence/i)).toBeVisible();
    
    // Check value descriptions
    await expect(page.getByText(/honest and transparent/i)).toBeVisible();
    await expect(page.getByText(/dedicated to our customers/i)).toBeVisible();
    await expect(page.getByText(/innovation and progress/i)).toBeVisible();
    await expect(page.getByText(/highest standards/i)).toBeVisible();
  });

  test('services overview section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /our services/i })).toBeVisible();
    
    // Check service cards
    await expect(page.getByText(/agronomy/i)).toBeVisible();
    await expect(page.getByText(/grain marketing/i)).toBeVisible();
    await expect(page.getByText(/precision agriculture/i)).toBeVisible();
    await expect(page.getByText(/research & development/i)).toBeVisible();
  });

  test('footer is present and functional', async ({ page }) => {
    // Scroll to footer
    await page.getByRole('contentinfo').scrollIntoViewIfNeeded();
    
    await expect(page.getByRole('contentinfo')).toBeVisible();
    await expect(page.getByText(/© 2024 Arthur Companies/i)).toBeVisible();
    
    // Check footer links
    await expect(page.getByRole('link', { name: /privacy policy/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /terms of service/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /accessibility/i })).toBeVisible();
  });

  test('responsive design works on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Mobile menu button should be visible
    await expect(page.getByRole('button', { name: /menu/i })).toBeVisible();
    
    // Hero content should still be visible
    await expect(page.getByRole('heading', { name: /where innovation grows/i })).toBeVisible();
    
    // Values should stack vertically
    const valuesSection = page.locator('[data-testid="values-section"]');
    await expect(valuesSection).toBeVisible();
  });

  test('page performance is acceptable', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    // Page should load within 3 seconds
    expect(loadTime).toBeLessThan(3000);
    
    // Check for critical web vitals
    const lcp = await page.evaluate(() => {
      return new Promise((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          resolve(lastEntry?.startTime || 0);
        }).observe({ entryTypes: ['largest-contentful-paint'] });
      });
    });
    
    expect(lcp).toBeLessThan(2500); // LCP should be under 2.5s
  });
});
