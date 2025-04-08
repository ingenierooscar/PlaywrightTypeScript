import {test} from 'playwright/test';

test.skip('Basic Navegation', async ({page}) => {
    await page.goto('https://github.com/ingenierooscar?tab=repositories');
    await page.waitForTimeout(2000);
    await page.reload();
})

test.skip('Interact with Web elemnt', async ({page}) => {
    await page.goto('https://about.gitlab.com/');
    await page.click('#onetrust-accept-btn-handler');
    await page.locator('#be-navigation-desktop').getByRole('link', {name: 'Get free trial'}).click();

    // fill the form
    //await page.locator('[data-testid="new-user-first-name-field"]').fill('Ingeniero');
    //await page.locator('[data-testid="new-user-last-name-field"]').fill('Oscar');
    await page.getByTestId('new-user-first-name-field').fill('Ingeniero');
    await page.getByTestId('new-user-last-name-field').fill('Oscar');ß
    await page.waitForTimeout(2000);
})

test('Using Various Locators Methods', async ({page}) => {
    await page.setViewportSize({ width: 700, height: 740 });
    await page.goto('https://about.gitlab.com/');
    await page.click('#onetrust-accept-btn-handler');
    await page.getByRole('button', {name: 'Main menu'}).click();
    await page.getByRole('link', {name: 'Sign in'}).click();
    await page.waitForTimeout(2000);
})

