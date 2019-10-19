const puppeteer = require('puppeteer');

const loginUrl = "https://console.ap-seoul-1.oraclecloud.com";
const Tenant = "";
const UserName = "";
const Password = "";

(async () => {
    const browser = await puppeteer.launch({headless :true ,args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.goto(loginUrl);
    await page.waitFor("#tenant");
    await page.type("#tenant",Tenant);
    var inputTypeSubmit = 'input[type="submit"]';
    await page.click(inputTypeSubmit);
    await page.waitFor("#username");
    await page.type("#username",UserName);
    await page.type("#password",Password);
    // await page.click(inputTypeSubmit);
    await page.click("body > div.main-container > div.right-panel > table > tbody > tr:nth-child(3) > td:nth-child(3) > form > div:nth-child(14) > input[type=submit]");

})();