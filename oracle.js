const puppeteer = require('puppeteer');

const loginUrl = process.env.LOGIN_URL;
const Tenant = "";
const UserName = "";
const Password = "";

(async () => {
    console.log("process.env",process.env.LOGIN_URL)
    if (Tenant === "" || UserName === "" || Password === "" || loginUrl === "") {
        console.log("请输入");
        process.exit(0);
        return
    }
    const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();

    console.log("等待页面加载 " + loginUrl);
    await page.goto(loginUrl);
    await page.waitFor("#tenant");
    console.log("输入tenant");
    await page.type("#tenant", Tenant);
    var inputTypeSubmit = 'input[type="submit"]';
    console.log("点击确定");
    await page.click(inputTypeSubmit);
    console.log("等待下一页加载");
    await page.waitFor("#username");
    console.log("输入用户名");
    await page.type("#username", UserName);
    console.log("输入密码");
    await page.type("#password", Password);
    // await page.click(inputTypeSubmit);

    console.log("点击登录");
    page.on("response", function (resp) {
        if (resp.url().indexOf("authorize") > -1) {
            console.log(resp.ok() ? "登录成功" : "登录失败");
            page.close();

            process.exit(0);
        }
    });
    await page.click("body > div.main-container > div.right-panel > table > tbody > tr:nth-child(3) > td:nth-child(3) > form > div:nth-child(14) > input[type=submit]");


})();
