
import { test as baseTest } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
export {expect} from '@playwright/test';

type pageFixtures = {
    basePage: BasePage,
    loginPage: LoginPage,
    homePage: HomePage,
    registerPage: RegisterPage,
    
};

//extend the playwright test: using baseTest.extend to create a new test with additional fixtures using INHERITANCE.

export let test = baseTest.extend<pageFixtures>({
   basePage: async ({page}, use) => {
        let basePage = new BasePage(page);
        await use(basePage);

    },
    loginPage: async({page}, use) => {
        let loginPage = new LoginPage(page);
        await use(loginPage);
    },
    homePage: async({page}, use) => {
        let homePage = new HomePage(page);
        await use(homePage);
    },
    registerPage: async({page}, use) => {
        let registerPage = new RegisterPage(page);
        await use(registerPage);
    }
});



