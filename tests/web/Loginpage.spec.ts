import { expect, test } from "@playwright/test";
import { LoginPage } from "../../src/pages/LoginPage";
import { HomePage } from "../../src/pages/HomePage";

let loginPage: LoginPage;
let homePage: HomePage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    homePage = new HomePage(page);
});

test.skip('Login Page title test', async ({ page }) => {

    let pageTitle = await loginPage.getLoginPageTitle();
    console.log('Login Page title is:',  pageTitle);
    expect(pageTitle).toBe('Account Login');
});


test.skip('Forgot Password link exist test', async ({ page }) => {
    loginPage.isForgotPasswordLinkExist();
    expect(await loginPage.isForgotPasswordLinkExist()).toBeTruthy();
});


test.skip('Login with valid credentials test', async ({ page }) => {

    await loginPage.doLogin('shilpakala@gmail.com', 'Password1');
    // Add assertions for successful login
    expect(await homePage.isLogoutLinkExist()).toBeTruthy();
    expect(await homePage.getHomePageTitle()).toBe('My Account');
    
});