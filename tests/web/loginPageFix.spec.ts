

import {test, expect} from "../../src/fixtures/pagefixtures";
import { CsvHelper } from "../../src/utilis/CsvHelper";

const validUsername = process.env.TEST_USERNAME ?? process.env.USERNAME ?? 'shilpakala@gmail.com';
const validPassword = process.env.TEST_PASSWORD ?? process.env.PASSWORD ?? 'Password1';

test.beforeEach(async ({ loginPage }) => {
        await loginPage.goToLoginPage();
   
});

test('Login Page title test', async ({ loginPage }) => {

    let pageTitle = await loginPage.getLoginPageTitle();
    console.log('Login Page title is:',  pageTitle);
    expect(pageTitle).toBe('Account Login');
});


test('Forgot Password link exist test', async ({ loginPage }) => {
    expect(await loginPage.isForgotPasswordLinkExist()).toBeTruthy();
});


test('Login with valid credentials test', async ({ loginPage, homePage }) => {

    await loginPage.doLogin(validUsername, validPassword);
    // Add assertions for successful login
    expect(await homePage.isLogoutLinkExist()).toBeTruthy();
    expect(await homePage.getHomePageTitle()).toBe('My Account');
    
});

let testData = CsvHelper.readCsvFile(`src/testdata/logindata.csv`);
for (let row of testData){

test (`Login with invalid credentials test - ${row.username} - ${row.password}`, async ({ loginPage, homePage }) => {
    await loginPage.doLogin(row.username, row.password);
    // Add assertions for failed login
    expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
});
}

