
import { expect, test } from "@playwright/test";
import { LoginPage } from "../../src/pages/LoginPage";
import { HomePage } from "../../src/pages/HomePage";

let loginPage: LoginPage;
let homePage: HomePage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.doLogin('shilpakala@gmail.com', 'Password1');
    homePage = new HomePage(page);
});

test.skip ('Home Page title test', async ({ page }) => {
    let pageHomeTitle = await homePage.getHomePageTitle();
    console.log('Home Page title is:',  pageHomeTitle);
    expect(pageHomeTitle).toBe('My Account');
    
});

test.skip('Logout link exist test', async ({ page }) => {
    expect(await homePage.isLogoutLinkExist()).toBeTruthy();
});


test.skip('Home Page Headers Exist test', async ({ page }) => {
    let allHeaders = await homePage.getHomePageHeaders();
    console.log('Home Page headers are:', allHeaders);
    expect.soft(allHeaders).toHaveLength(4);
    expect.soft(allHeaders).toEqual([
        'My Account', 
        'My Orders',
        'My Affiliate Account', 
        'Newsletter'
        
    ]);
});

