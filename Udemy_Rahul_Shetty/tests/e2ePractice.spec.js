const {test, expect}= require("@playwright/test");

test("E2E testing", async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client");

    await page.locator("#userEmail").type("eons@gmail.com");
    await page.locator("#userPassword").type("adminMx23!");
    await page.locator("#login").click();

    await page.waitForLoadState('networkidle');

    const expectedProduct= 'Laptop';
    const products= page.locator(".card-body");
    //const countProducts= await products.count();
    //console.log(countProducts);//not required
    
    const titles= await page.locator(".card-body b").allTextContents();//not required
    //console.log(titles);//not required
    
    const countProducts= await products.count();
    
    for(let i=0; i<countProducts; ++i)
    {
        if(await products.nth(i).locator("b").textContent() === expectedProduct)
        {
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }

    await page.locator("button[routerlink= '/dashboard/cart']").click();
    await page.locator("li.items").waitFor();
    const yesOrNo= await page.locator("h3:has-text('Laptop')").isVisible();
    expect(yesOrNo).toBeTruthy();

    await page.locator("xpath=//button[contains(text(),'Checkout')]").click();
    await page.locator("[placeholder= 'Select Country']").type("Mex", {delay:250});
    const dropdownInfo= page.locator(".ta-results");
    await dropdownInfo.waitFor();
    const optionsInDropdown= await page.locator("button").count();
    console.log(optionsInDropdown);
    //const optionsInDropdowntext= await page.locator("button").textContent();
    //console.log(optionsInDropdowntext);

    
    for(let i=0; i<optionsInDropdown; ++i)
    {
        let textInOption= await dropdownInfo.locator("button").nth(i).textContent();
        if(textInOption === " Mexico")
        {  //if(textInOption.trim() === "Mexico") if we need to remove de space before Mexico
            await dropdownInfo.locator("button").nth(i).click();
            break;
        }
    }

    //expect(await page.locator(".user__name label[type= 'text']").textContent()).toContain("anshika@gmail.com"); works too
    await expect(page.locator(".user__name label[type= 'text']")).toHaveText("anshika@gmail.com");
    await page.locator(".action__submit").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    let prodId= await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(prodId);

    await page.locator(".em-spacer-1 [routerlink= '/dashboard/myorders']").click();

    await page.locator("tbody").waitFor();
    const rows= page.locator("tbody tr");

    for(let i=0; i< await rows.count(); ++i)
    {
        const rowOrderId= await rows.nth(i).locator("th").textContent();
        if(prodId.includes(rowOrderId))
        {
            await rows.nth(i).locator("button").first().click();
            break;
        }     
    }
    const orderIdDetails= await page.locator(".col-text").textContent();
    expect(prodId.includes(orderIdDetails)).toBeTruthy(); //we do not need an await here because the textContend
    //currently has an auto-wait read playwright documentation...
    await page.pause();
});