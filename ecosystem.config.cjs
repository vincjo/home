module.exports = {
    deploy : {
        production : {
            user          : "vincjo",
            host          : [ "vincjo.fr -p 625" ],
            ref           : "origin/master",
            repo          : "git@github.com:vincjo/home.git",
            path          : "/home/vincjo/www/home",
            "post-deploy" : "npm install && npm run build"
        },
    }
}