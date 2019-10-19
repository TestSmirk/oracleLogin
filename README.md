# oracleLogin
oracle 自动登陆


* [安装node](https://nodejs.org/zh-cn/download/package-manager/)
* clone 到本地 or server, `git clone https://github.com/TestSmirk/oracleLogin.git`
* `npm install` or `yarn add` 要下载 Chromium带宽不高到国内机器可能会慢
* 修改 登陆连接 tenant 和用户名 密码 
```
const Tenant = ""; 
const UserName = "";
const Password = "";
```
* `node oracle.js` 运行

* crontab -e  add 每周执行 `0 0 * * 0 /path/to/node /path/to/oracle.js`
