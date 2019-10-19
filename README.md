# oracleLogin
oracle 自动登陆

* `npm install` or `yarn add`
* vim oracle and fill 
```
const Tenant = "";
const UserName = "";
const Password = "";
```
* `node oracle.js`

* crontab -e  add 每周执行 `0 0 * * 0 /path/to/node /path/to/oracle.js`
