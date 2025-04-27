import {test, expect} from '@playwright/test';

const testData = {
    firstName: 'Oscar',
    lastName: 'Rodriguez',
    address:`123 Main St`,
    number: '1234567890'
}

test.describe('User registration test', () => {
    test.beforeEach(async ({page})=>{
        await page.goto('file:///Users/oscarrodriguez/Downloads/index.html');
    })
    test.skip('Register with validate data', async ({ context, page }) => {
        await page.fill('#firstName', testData.firstName);
        await page.fill('#lastName', testData.lastName);
        await page.fill('#address', testData.address);
        await page.fill('#number', testData.number);
        await page.click('#register');
        await page.waitForTimeout(3000);ß

        const firstName = await page.locator('#displayFirstName').textContent();
        const lastName = await page.locator('#displayLastName').textContent();
        const address = await page.locator('#displayAddress').textContent();
        const number = await page.locator('#displayNumber').textContent();

        await expect(firstName).toBe(testData.firstName);
        await expect(lastName).toBe(testData.lastName);
        await expect(address).toBe(testData.address);
        await expect(number).toBe(testData.number);
        await page.waitForTimeout(3000);
    });

    test.skip('Register with empty data', async ({ page }) => {
        await page.fill('#firstName', testData.firstName);
        await page.fill('#lastName', testData.lastName);
        await page.click('#register');
        await page.waitForTimeout(3000);
        const error = await page.locator('#error p').textContent()
        expect(error).toBe('Please fill in all fields.')
    })

    test.skip('Register without any field', async ({ page }) => {
        await page.click('#register');
        const error = await page.locator('#error p').textContent()
        expect(error).toBe('Please fill in all fields.')
    })

});