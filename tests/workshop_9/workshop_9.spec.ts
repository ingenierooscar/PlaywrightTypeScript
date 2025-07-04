import {test, expect} from '@playwright/test';

test('Automation form submissions @githubActions', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc/');
    
    
    const newTodo = await page.getByPlaceholder('what needs to be done?');
    await newTodo.fill('oscar rodriguez');
    await newTodo.press('Enter');
    await newTodo.fill('oscar gus');
    await newTodo.press('Enter');

    const firsrTodo = page.getByTestId('todo-item').nth(0);
    await firsrTodo.getByRole('checkbox').check()
    const secondTodo = page.getByTestId('todo-item').nth(1);
    await expect(firsrTodo).toHaveClass('completed');
    await expect(secondTodo).not.toHaveClass('completed');
})

test('Handling Form @githubAction', async({page})=>{
    await page.goto('https://demo.playwright.dev/todomvc/')
    await page.fill('[placeholder="What needs to be done?"]', 'John Doe');
    await page.locator('[placeholder="What needs to be done?"]').press('Enter')
    
    const checkbox = await page.locator('.toggle')
    await checkbox.check();

});

