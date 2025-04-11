import {test, expect} from '@playwright/test';

test.skip('Hover element', async ({page}) => {
    await page.goto('file:///Users/oscarrodriguez/Downloads/index.html');
    await page.hover('#hover-me');
    expect(await page.locator('#hover-me').textContent()).toContain('Text Changed!');
    await page.waitForTimeout(3000);
})

test.skip('Click Right', async ({page}) => {
    await page.goto('file:///Users/oscarrodriguez/Downloads/index.html');
    await page.click('#context-menu', {button: 'right'});
    expect(await page.getByText('Context Menu Appears!').textContent()).toContain('Context Menu Appears!');
    await page.dblclick('#double-click');
    expect(await page.locator('img').count()).toBe(2);
    await page.waitForTimeout(3000);
})

test.skip('Double Click', async ({page}) => {
    await page.goto('https://demoqa.com/buttons');
    await page.dblclick('#doubleClickBtn');
    expect(await page.locator('#doubleClickMessage').textContent()).toContain('You have done a double click');
    await page.waitForTimeout(3000);
})

test.skip('Drag and Drop', async ({page}) => {
    await page.goto('file:///Users/oscarrodriguez/Downloads/index.html');
    //await page.dragAndDrop('.drag-source', '.drop-target');
    await page.hover('.drag-source');
    await page.mouse.down();
    await page.locator('.drop-target').hover();
    await page.mouse.up();
    expect(await page.locator('.drop-target').textContent()).toContain('Success');
    await page.waitForTimeout(3000);
})

test.skip('Iframe', async ({page}) => {
    await page.goto('file:///Users/oscarrodriguez/Downloads/index.html');
    const iframeElement = await page.frame({name: 'iframe-name'});
    const inputSelector = '#iframe-input';

    if (iframeElement) {
        await iframeElement.type(inputSelector, 'Hello Playwright!');
        expect(await iframeElement.locator(inputSelector).inputValue()).toContain('Hello Playwright!');
    } else {
        console.error('Iframe not found');
    }
    await page.waitForTimeout(3000);
}
)