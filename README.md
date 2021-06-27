# Better-Mysql2

A Simple mysql Wrapper for javascript, If you want request more features add a feature request on [Github](https://github.com/RomanMender/better-mysql2).

## Installation
```shell
npm i better-mysql2
```

## Example

~~~JS
const mysql = require("better-mysql2")

var db = new mysql.database({
  "host":  "host",
  "user":  "user"
  "password":  "pass",
  "database":  "database"
})

const row = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
console.log(row.firstName, row.lastName, row.email);
~~~
