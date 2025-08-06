import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('main navigation links work correctly', async ({ page }) => {
    // Test About link
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('/about');
    await expect(page.getByRole('heading', { name: /about arthur companies/i })).toBeVisible();
    
    // Test Services link
    await page.getByRole('link', { name: 'Services' }).click();
    await expect(page).toHaveURL('/services');
    
    // Test Research link
    await page.getByRole('link', { name: 'Research' }).click();
    await expect(page).toHaveURL('/research-development');
    
    // Test Venture link
    await page.getByRole('link', { name: 'Venture' }).click();
    await expect(page).toHaveURL('/venture');
    
    // Test Grain link
    await page.getByRole('link', { name: 'Grain' }).click();
    await expect(page).toHaveURL('/grain');
    
    // Test Grower Insights link
    await page.getByRole('link', { name: 'Grower Insights' }).click();
    await expect(page).toHaveURL('/grower-insights');
    
    // Test Contact link
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL('/contact');
    await expect(page.getByRole('heading', { name: /contact us/i })).toBeVisible();
  });

  test('dropdown menus work correctly', async ({ page }) => {
    // Test About dropdown
    await page.getByRole('button', { name: 'About' }).hover();
    await expect(page.getByRole('link', { name: 'History' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Leadership' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Newsroom' })).toBeVisible();
    
    // Click on History
    await page.getByRole('link', { name: 'History' }).click();
    await expect(page).toHaveURL('/about/history');
    
    // Test Services dropdown
    await page.goto('/');
    await page.getByRole('button', { name: 'Services' }).hover();
    await expect(page.getByRole('link', { name: 'Agronomy' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Soil Health' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Precision Agriculture' })).toBeVisible();
    
    // Click on Agronomy
    await page.getByRole('link', { name: 'Agronomy' }).click();
    await expect(page).toHaveURL('/services/agronomy');
  });

  test('mobile navigation works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Mobile menu should be closed initially
    await expect(page.getByRole('navigation').locator('[data-state="closed"]')).toBeVisible();
    
    // Open mobile menu
    await page.getByRole('button', { name: /menu/i }).click();
    await expect(page.getByRole('navigation').locator('[data-state="open"]')).toBeVisible();
    
    // Test mobile navigation links
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('/about');
    
    // Menu should close after navigation
    await expect(page.getByRole('navigation').locator('[data-state="closed"]')).toBeVisible();
  });

  test('logo link returns to homepage', async ({ page }) => {
    // Navigate to another page
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL('/contact');
    
    // Click logo to return home
    await page.getByRole('link', { name: /arthur companies/i }).first().click();
    await expect(page).toHaveURL('/');
    await expect(page.getByRole('heading', { name: /where innovation grows/i })).toBeVisible();
  });

  test('active navigation state is correct', async ({ page }) => {
    // Go to About page
    await page.getByRole('link', { name: 'About' }).click();
    
    // About link should have active state
    await expect(page.getByRole('link', { name: 'About' })).toHaveClass(/active/);
    
    // Other links should not have active state
    await expect(page.getByRole('link', { name: 'Services' })).not.toHaveClass(/active/);
  });

  test('keyboard navigation works', async ({ page }) => {
    // Tab through navigation
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab'); // Skip to first nav item
    
    // Should focus on first navigation link
    await expect(page.getByRole('link', { name: 'About' })).toBeFocused();
    
    // Tab to next item
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: 'Services' })).toBeFocused();
    
    // Press Enter to navigate
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL('/services');
  });

  test('breadcrumb navigation works', async ({ page }) => {
    // Navigate to a deep page
    await page.goto('/about/history');
    
    // Check breadcrumbs
    await expect(page.getByRole('navigation', { name: /breadcrumb/i })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByText('History')).toBeVisible();
    
    // Click breadcrumb to navigate
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('/about');
  });
});
