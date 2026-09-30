import {test, expect} from "../../src/fixtures/pagefixtures";



test.beforeEach(async ({ loginPage }) => {
        await loginPage.goToLoginPage();
   
});

test('Navigate to Register Page test', async ({registerPage }) => {
    await registerPage.clickRegisterLink();
});

test('Register Page title test', async ({ registerPage }) => {
    let pageRegisterTitle = await registerPage.getRegisterPageTitle();
    console.log('Register Page title is:',  pageRegisterTitle);
    expect(pageRegisterTitle).toBe('Account Login');
});

test('Register with valid details test', async ({ registerPage }) => {
    await registerPage.clickRegisterLink();
    await registerPage.doRegister(
        process.env.FIRSTNAME!,
        process.env.LASTNAME!,
        process.env.EMAIL!,
        process.env.TELEPHONE!,
        process.env.PASSWORD!,
        process.env.CONFIRM_PASSWORD!

        );

    });