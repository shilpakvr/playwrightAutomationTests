
import {test, expect} from "../../src/fixtures/pagefixtures";



test.beforeEach(async ({ loginPage }) => {
    await loginPage.goToLoginPage();
    await loginPage.doLogin(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!);
});

test ('Home Page title test', async ({ homePage }) => {
    let pageHomeTitle = await homePage.getHomePageTitle();
    console.log('Home Page title is:',  pageHomeTitle);
    expect(pageHomeTitle).toBe('My Account');
    
});

test('Logout link exist test', async ({ homePage }) => {
    expect(await homePage.isLogoutLinkExist()).toBeTruthy();
});


test('Home Page Headers Exist test', async ({ homePage }) => {
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

