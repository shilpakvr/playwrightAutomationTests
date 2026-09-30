import { Locator, Page } from "playwright";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
    //1. Private locators:
    private readonly logoutLink: Locator;
    private readonly headers: Locator;


    //2. Constructor:
    constructor(page: Page) {
        super(page);
        this.logoutLink = page.getByRole('link', { name: 'Logout' })
        this.headers = page.getByRole('heading', { level: 2});
     }

     //3. Public page Page actions/methods / benefits of encapsulation:


    async getHomePageTitle(): Promise<string> {
        return await this.page.title();
    }

     async isLogoutLinkExist(): Promise<boolean> {
        return await this.logoutLink.isVisible();
    }   

    async getHomePageHeaders(): Promise<string[]> {
       return await this.headers.allInnerTexts();

    }


}   