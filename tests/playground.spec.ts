import {expect, test} from "@playwright/test";

test('playground with cookies test',
    async ({page}) => {
        await page.goto('https://my-profile-qa.springernature.com/');
        expect(await page.screenshot({fullPage:true})).toMatchSnapshot('my_profile_before_cookies.png');
    });

test('playground after accept cookies test',
    async ({page}) => {
        await page.goto('https://my-profile-qa.springernature.com/');
        await page.click("text=Accept All")
        expect(await page.screenshot({fullPage:true})).toMatchSnapshot('my_profile.png');
    });