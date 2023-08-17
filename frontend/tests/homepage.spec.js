// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});



test.describe('New Workout', () => {
  test('should allow me to add new workout', async ({ page }) => {
    // create a new todo locator
    await page.getByRole('textbox', {name: 'Exersize Title:'}).type('Deadlift');
    await page.getByRole('spinbutton', {name: 'Load (in kg):'}).type('40');
    await page.getByRole('spinbutton', {name: 'Number of Reps:'}).type('10');

    await page.getByRole('button', {name: 'Add Workout'}).click();

    // Make sure the list only has one todo item.
    await expect(page.getByRole('heading', {name: 'Deadlift'})).toBeVisible()

    await page.getByRole('button', {name: 'Delete'}).first().click();
  });
  
});
