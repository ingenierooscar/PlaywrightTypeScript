import {test, expect} from '@playwright/test';

test('Form submition', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    const newTodo = page.getByPlaceholder('What needs to be done?');
    await newTodo.fill('oscar');
    await newTodo.press('Enter');
    await newTodo.fill('alpha');
    await newTodo.press('Enter');

    const firstTodo = await page.getByTestId('todo-item').nth(0);
    await firstTodo.getByRole('checkbox').check();

    const secondTodo = await page.getByTestId('todo-item').nth(1);
    await expect(secondTodo).not.toHaveClass(/completed/);
    await expect(firstTodo).toHaveClass(/completed/);
    await page.waitForTimeout(3000);
})

test('Handling form', async ({page}) => { 
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    const placeHolder = '[placeholder="What needs to be done?"]';
    await page.locator(placeHolder).fill('oscar rodriguez');
    await page.locator(placeHolder).press('Enter');

    const checkbox = await page.locator('.toggle');
    await checkbox.check();
    await page.waitForTimeout(3000);
})

