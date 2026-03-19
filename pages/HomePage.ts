import { Page,expect,Locator  } from "@playwright/test";

export class HomePage{

//Page
    private readonly page:Page;
//Locator

private readonly lnkMyAccount:Locator;
private readonly lnkRegister:Locator;
private readonly linkLogin:Locator;
private readonly txtSearchbox:Locator;
private readonly btnSearch:Locator;



//Constructors
constructor(page:Page)
{
    this.page=page;
    this.lnkMyAccount=page.locator('span:has-text("My Account")');
    this.lnkRegister=page.locator("//ul[@class='dropdown-menu dropdown-menu-right']//a[normalize-space()='Register']");
    this.linkLogin=page.locator('a').filter({ hasText: 'Login' }).first();
    this.txtSearchbox=page.getByPlaceholder('Search');
    this.btnSearch=page.locator('button.btn.btn-default.btn-lg');
}



//Action methods

    // Check if HomePage exists
    async isHomePageExists(){

        let title:string = await this.page.title();
        if(title)
        {
            return true;
        }
        return false;
    }
     //---------------
     // Click "My Account" link
    async clickMyAccount(){
        try {
            await this.lnkMyAccount.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'My Account': ${error}`);
            throw error;//It will throw error in command line
        }
    }

    // Click "Register" link
    async clickRegister(){
        try {
            await this.lnkRegister.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Register': ${error}`);
            throw error;
        }
    }
    
    // Click "Login" link
    async clickLogin(){
        try {
            await this.linkLogin.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Login': ${error}`);
            throw error;
        }
    }

    // Enter product name in the search box
    async enterProductName(pName: string){
        try {
            await this.txtSearchbox.fill(pName);
        } catch (error) {
            console.log(`Exception occurred while entering product name: ${error}`);
            throw error;
        }
    }

    // Click the search button
    async clickSearch(){
        try {
            await this.btnSearch.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Search': ${error}`);
            throw error;
        }
    }
    






}