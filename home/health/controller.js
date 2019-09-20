const request = require('request');
const config = require('../../config');

const controller = {
    async health(req, res, next) {
        res.status(200).json({ 
            status: "success", 
                request_body: {
                    'body': 'content'
                }
            });
	},
};

module.exports = controller;

