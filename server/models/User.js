const snoowrap = require('snoowrap');
const path = require('path')
require("dotenv").config({ path: path.resolve(__dirname, '../.env') });

class User {
    newUser() {
        if (perms == "admin") {
            this.scope = ['edit', 'read', 'sumbit']
        }

        authCode = snoowrap.getAuthUrl({
            clientId: process.env.CLIENT_ID,
            scope: this.scope,
            redirectUri: process.env.REDIRECT_URI,
        })


    }
}

console.log(process.env.REDIRECT_URI)