import { test, expect } from '@playwright/test';

test.skip('open new window and navegate back', async ({ context, page }) => {
    await page.goto('file:///Users/oscarrodriguez/Downloads/index.html')
    const pagePromise = context.waitForEvent('page');
    await page.waitForTimeout(3000);
    await page.click('#openNewWindow');
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    console.log(await newPage.title());
    await expect(newPage.getByRole('heading', { name: 'Welcome to the New Page' })).toBeVisible();
    await page.waitForTimeout(3000);
})

test.skip('add cookie', async ({ page }) => {
    await page.goto('file:///Users/oscarrodriguez/Downloads/index.html')
    await page.click('#setCookie');
    const cookie = await page.context().cookies('file:///Users/oscarrodriguez/Downloads/index.html');
    const sessionCookie = cookie.find(cookies => cookies.name === 'session');
    console.log('Session Cookie', sessionCookie);
    await expect(sessionCookie).toBeDefined();
})

test.skip('delete cookie', async ({ page }) => {
    await page.goto('file:///Users/oscarrodriguez/Downloads/index.html')
    await page.click('#setCookie');
    const cookie = await page.context().cookies('file:///Users/oscarrodriguez/Downloads/index.html');
    const sessionCookie = cookie.find(cookies => cookies.name === 'session');
    console.log('Session Cookie', sessionCookie);

    // Delete the cookie
    await page.click('#deleteCookie');
    const cookieAfterDelete = await page.context().cookies('file:///Users/oscarrodriguez/Downloads/index.html');
    const delitedSessionCookie = cookieAfterDelete.find(cookies => cookies.name === 'session');
    console.log('Session Cookie After Delete', delitedSessionCookie);
    await expect(delitedSessionCookie).toBeUndefined();
})
