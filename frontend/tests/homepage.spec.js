// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});

test.describe('New Workout', () => {
  test('should allow me to add new workout', async ({ page }) => {
    await page.getByRole('textbox', {name: 'Exersize Title:'}).type('test');
    await page.getByRole('spinbutton', {name: 'Load (in kg):'}).type('40');
    await page.getByRole('spinbutton', {name: 'Number of Reps:'}).type('10');

    await page.getByRole('button', {name: 'Add Workout'}).click();

    await expect(page.getByRole('heading', {name: 'test'})).toBeVisible()

    await page.getByRole('button', {name: 'Delete'}).first().click();
  });
  
  test('should allow me to add two new workouts', async ({ page }) => {
    await page.getByRole('textbox', {name: 'Exersize Title:'}).type('test');
    await page.getByRole('spinbutton', {name: 'Load (in kg):'}).type('40');
    await page.getByRole('spinbutton', {name: 'Number of Reps:'}).type('10');

    await page.getByRole('button', {name: 'Add Workout'}).click();

    await page.getByRole('textbox', {name: 'Exersize Title:'}).type('test 2');
    await page.getByRole('spinbutton', {name: 'Load (in kg):'}).type('10');
    await page.getByRole('spinbutton', {name: 'Number of Reps:'}).type('12');

    await page.getByRole('button', {name: 'Add Workout'}).click();

    await expect(page.getByRole('heading', {name: 'test'})).toBeVisible()
    await expect(page.getByRole('heading', {name: 'test 2'})).toBeVisible()

    await page.getByRole('button', {name: 'Delete'}).first().click();
    await page.getByRole('button', {name: 'Delete'}).first().click();
  });
});

test.describe('Validation', () => {
  test('Should flash error message when no workout details are input', async ({ page }) => {
    await page.getByRole('button', {name: 'Add Workout'}).click();

    await expect(page.getByRole('alert', {name: 'Error Message'})).toBeVisible()
  })
})