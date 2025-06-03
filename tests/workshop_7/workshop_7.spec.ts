import { test, expect }  from '@playwright/test';

const selectors = {
    firstName: '#firstName',
    age: '#age',
    student: '#isStudent'
}

test.describe('Variable declaration', async () => {
    test.skip('Declaration and types', async ({ page }) => {
    let firstName: string = 'John';
    let age: number = 30;
    let isStudent: boolean = false;

    await page.goto('file:///Users/oscarrodriguez/Documents/playWright/tests/workshop_7/index (1).html');
    await page.fill(selectors.firstName, firstName);
    await page.fill(selectors.age, age.toString());
    await page.check('#isStudent');
    await page.click('#applyData');

    expect(await page.textContent('#displayFirstName')).toBe(firstName);
    expect(await page.textContent('#displayAge')).toBe(age.toString());
    expect(await page.isChecked('#isStudent')).toBe(true);
    })
});

test.describe('Type Dedinitions and interfaces', async () => {
    type User = {
        firstName: string;
        age: number;
        isStudent: boolean;
    };

    let user: User = {
        firstName: 'Jane',
        age: 25,
        isStudent: true
    };

    test.only('Type def and interfaces', async ({ page }) => {
    await page.goto('file:///Users/oscarrodriguez/Documents/playWright/tests/workshop_7/index (1).html');
    await page.fill(selectors.firstName, user.firstName);
    await page.fill(selectors.age, user.age.toString());
    await page.click('#applyData');

    expect(await page.textContent('#displayFirstName')).toBe(user.firstName);
    expect(await page.textContent('#displayAge')).toContain(user.age.toString());
    expect(await page.isChecked('#isStudent')).not.toBe(user.isStudent);
    await page.waitForTimeout(3000);
    })

});    


