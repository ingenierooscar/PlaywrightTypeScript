import {test, expect} from '@playwright/test';

test.skip('Handling alerts', async ({page}) => {
await page.goto('file:///Users/oscarrodriguez/Downloads/index%20(1).html');
    let alertMessage = '';
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        expect(dialog.message()).toBe('This is a simple alert.');
        alertMessage = dialog.message();
        await page.waitForTimeout(3000);
        dialog.accept();
    })

    await page.click('#show-alert');
    expect(alertMessage).toBe('This is a simple alert.');
})

test.skip('Confirm alert', async ({page}) => {
    await page.goto('file:///Users/oscarrodriguez/Downloads/index%20(1).html');
    let alertMessage = '';

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        alertMessage = dialog.message();
        await page.waitForTimeout(3000);
        dialog.dismiss();
    })

    await page.click('#show-confirm');
    expect(alertMessage).toBe('You clicked Cancel.');
})

test.skip('Handling Popup', async ({page}) => {
    await page.goto('file:///Users/oscarrodriguez/Downloads/index%20(1).html');
    const [Popup] = await Promise.all([ 
        page.waitForEvent('popup'),
        page.click('#open-popup'),
        await page.waitForTimeout(3000)
    ])

    await Popup.waitForLoadState();
    await Popup.close();
    
})
