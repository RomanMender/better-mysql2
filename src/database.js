'use strict';

const mysql2 = require("mysql2")
const prepare = require("./prepare/index")

class Database {
    constructor(options) {
        this.connection = mysql2.createConnection({
            host: options.host,
            user: options.user,
            password: options.password,
            database: options.database
        })
    }
    close() {
        return this.connection.end()
    }
    pause() {
        return this.connection.pause()
    }
    prepare(sql) {
        return new prepare(sql, this.connection)
    }
}

module.exports = Database;