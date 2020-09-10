const puppeteer = require('puppeteer');
const dotenv = require("dotenv")
dotenv.config()
const Tenant = process.env.TENANT;
const UserName = process.env.USER_NAME;
const Password = process.env.PASSWORD;

(async () => {
    console.log("Tenant", Tenant.length)
    console.log("UserName", UserName.length)
    console.log("Password", Password.length)
    if (Tenant === "" || UserName === "" || Password === "") {
        console.log("请输入");
        process.exit(1);
        return
    }
    const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();

    console.log("等待页面加载 ");
    await page.goto("https://www.oracle.com/cloud/sign-in.html");
    await page.waitFor("#cloudAccountName");
    console.log("输入tenant");
    await page.type("#cloudAccountName", Tenant);
    var inputTypeSubmit = '#cloudAccountButton';
    console.log("点击确定");
    await page.click(inputTypeSubmit);
    console.log("等待下一页加载");

    let userNameInputed = false;
    while (userNameInputed){
        try {
            await page.waitFor("#idcs-signin-basic-signin-form-username", {timeout: 3000});
        } catch (e) {
            await sleep(20*1000)
        }
        console.log("输入用户名");
        try{
            await page.type("#idcs-signin-basic-signin-form-username", UserName);
            userNameInputed  = true
        }catch (e){
            console.log("输入用户名失败")
        }
    }
    console.log("输入密码");
    await page.type(".oj-inputpassword-input", Password);
    // await page.click(inputTypeSubmit);

    console.log("点击登录");

    await page.click(".oj-button-label");

    try {
        await page.waitFor(".oracle-logo__icon")
        console.log("登录成功")
        page.close();
        process.exit(0);

    } catch (e) {
        console.log("登录失败")
        page.close();
        process.exit(1);

    }

})();
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}