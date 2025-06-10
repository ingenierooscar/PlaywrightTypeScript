import {test, expect } from '@playwright/test'
import { PageObject } from './page/Page'

test.describe('Sample Test', ()=>{
    let pageObject: PageObject;

    test.beforeEach(async ({ browser })=>{
        const page = await browser.newPage()
        pageObject = new PageObject(page);
        await pageObject.open('file:///Users/oscarrodriguez/Documents/playWright/tests/workshop_7/index (1).html');
    })

    test.only('Test 1: Fill all inputs',async ()=>{
        await pageObject.fillFirstName('John');
        await pageObject.fillAge('30');
        await pageObject.checkIsStudent();
        await pageObject.applyData();

        expect(await pageObject.text(pageObject.displayFirstName)).toBe('John')
        expect(await pageObject.text(pageObject.displayAge)).toBe('30')
        expect(await pageObject.text(pageObject.displayIsStudent)).toBe('Yes')
    })
})