module.exports = {
    // apps : [{
    //     name           : "home",
    //     // script         : "./build/index.js",
    //     watch          : false,
    //     max_restarts   : 10,
    //     env            : {
    //         NODE_ENV : 'production',
    //         PORT : 3010,
    //     },
    // }],
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