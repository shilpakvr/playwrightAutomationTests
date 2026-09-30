import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class RegisterPage extends BasePage {

    //1. Private locators:
    private readonly registerLink: Locator;
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly email: Locator;
    private readonly telephone: Locator;
    private readonly password: Locator;
    private readonly confirmPassword: Locator
    private readonly privacyPolicyCheckbox: Locator;
    private readonly continueButton: Locator    


    //2. Constructor:
    constructor(page: Page) {
        super(page);
        this.registerLink = page.getByRole('link', { name: 'Register' });
        this.firstName = page.getByRole('textbox', { name: '* First Name' });
        this.lastName = page.getByRole('textbox', { name: '* Last Name' });
        this.email = page.getByRole('textbox', { name: '* E-Mail' });
        this.telephone = page.getByRole('textbox', { name: '* Telephone' });
        
        this.password = page.getByRole('textbox', { name: '* Password', exact: true });
        this.confirmPassword = page.getByRole('textbox', { name: '* Confirm Password' });
        this.privacyPolicyCheckbox = page.getByRole('checkbox', { name: 'Privacy Policy' });
        this.continueButton = page.getByRole('button', { name: 'Continue' });

    }

        async getRegisterPageTitle(): Promise<string> {
        return await this.page.title();
    }

    async clickRegisterLink(): Promise<void> {
         await this.registerLink.click();
    }

    async doRegister(firstName: string, lastName: string, email: string, telephone: string, password: string, confirmPassword: string): Promise<void> {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.email.fill(email);
        await this.telephone.fill(telephone);
        await this.password.fill(password);
        await this.confirmPassword.fill(confirmPassword);
    }

}


function getByRole(arg0: string, arg1: { name: string; exact: boolean; }): Locator {
    throw new Error("Function not implemented.");
}

