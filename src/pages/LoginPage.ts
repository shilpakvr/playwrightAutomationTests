
import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  //1. Private locators:
   private readonly emailId: Locator;
   private readonly password: Locator;
   private readonly loginButton: Locator;
   private readonly forgotPasswordLink: Locator;
    private readonly loginAlert: Locator;

   //2. Constructor:
   constructor(page: Page) {
      super(page);
      this.emailId = page.getByRole('textbox', { name: 'E-Mail Address' })
      this.password = page.getByRole('textbox', { name: 'Password' });
      this.loginButton = page.getByRole('button', { name: 'Login' });
      this.forgotPasswordLink = page.getByRole('link', { name: 'Forgotten Password' }).first();
      this.loginAlert = page.locator('.alert.alert-danger.alert-dismissible');    
   }


    //3. Public page Page actions/methods / benefits of encapsulation:
    async goToLoginPage(): Promise<void> {
        await this.page.goto('opencart/index.php?route=account/login');
    }

    async getLoginPageTitle(): Promise<string> {
        return await this.page.title();
    }

    async isForgotPasswordLinkExist(): Promise<boolean> {
        return await this.forgotPasswordLink.isVisible();
    }

    async doLogin(username: string, password: string): Promise<void> {
        console.log(`Login with username: ${username} and password: ${password}`);
        await this.emailId.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async getLoginAlertText(): Promise<boolean> {
        return await this.loginAlert.isVisible();

    }  
    
    async isInvalidLoginErrorDisplayed(): Promise<boolean> {
        return await this.loginAlert.isVisible();
    }

}