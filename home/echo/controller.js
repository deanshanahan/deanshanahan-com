const request = require('request');
const config = require('../../config');
const mongoClient = require("mongodb").MongoClient;

const controller = {
    async echo(req, res, next) {
        const { ...args } = req.body;
        const argList = []; // array of arguments to check post parameters
        // Ensure that all the arguments required are included in post body
        if (argList.map(arg => req.body.hasOwnProperty(arg)).includes(false)) {
            res.status(400).json({
                message: 'Incorrect parameters provided.'
            });
        } else { // Continue processing request if JSON body is valid.
             
            // Dummy response
            res.status(200).json({ 
                status: "success", 
                request_body: {
                    body: req.body
                }
            });
		}
    },
};

module.exports = controller;

