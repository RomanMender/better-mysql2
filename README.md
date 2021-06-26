# better-mysql2

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

var smth = db.prepare('SELECT * FROM Bans WHERE GamerTag = ?')

smth.get("romanmender3164")
	.then(res  =>  console.log(res))
~~~
