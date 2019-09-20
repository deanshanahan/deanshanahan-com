const request = require('request');
const config = require('../config');

const controller = {
    async home(req, res, next) {
        try {
            console.log("Wassup? %s", __dirname+"/index.html");
            res.sendFile(__dirname+"/index.html");
        } catch(e) {
            res.status(500);
        }
    },
};

//async home(req, res){
//        try{
//            console.log("I am here!");
//            res.sendFile(path.join(__dirname+'/index.html'));
//        } catch(e) {
//            res.status(500);
//        }
//    }
//};

module.exports = controller;

