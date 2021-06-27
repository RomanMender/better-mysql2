'use strict';

class prepare {
    constructor(sql, client) {
        this.query = sql
        this.connection = client
    }
    async run() {
        var inserts = []
        for (const property in arguments) {
            inserts.push(arguments[property])
        }
        return this.connection.promise().query(this.query, inserts).then(res => JSON.parse(JSON.stringify(res[0])))
    }
    async get() {
        var inserts = []
        for (const property in arguments) {
            inserts.push(arguments[property])
        }
        return this.connection.promise().query(this.query, inserts).then(res => JSON.parse(JSON.stringify(res[0]))[0])
    }
    async all() {
        var inserts = []
        for (const property in arguments) {
            inserts.push(arguments[property])
        }
        return this.connection.promise().query(this.query, inserts).then(res => JSON.parse(JSON.stringify(res[0])))
    }
}


module.exports = prepare