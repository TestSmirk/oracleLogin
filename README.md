# oracleLogin
oracle 自动登陆




* [安装node](https://nodejs.org/zh-cn/download/package-manager/)
* clone 到本地 or server, `git clone https://github.com/TestSmirk/oracleLogin.git`
* `npm install` or `yarn add` 要下载 Chromium带宽不高到国内机器可能会慢
* 修改 登陆连接 tenant 和用户名 密码 
```
const loginUrl = "";
const Tenant = ""; 
const UserName = "";
const Password = "";
```
* `node oracle.js` 运行

* crontab -e  add 每周执行 `0 0 * * 0 /path/to/node /path/to/oracle.js` 由于要多次启动和关闭Chromium可能会有僵尸进程占用cpu内存需要定时清理 `*/10 * * * * /usr/bin/killall -9 chrome`


---

加入登录成功判断  

* 失败:  
![](https://github.com/TestSmirk/oracleLogin/blob/master/imgs/TIM截图20191028140608.png)
* 成功:  
![](https://github.com/TestSmirk/oracleLogin/blob/master/imgs/TIM截图20191028141014.png)
