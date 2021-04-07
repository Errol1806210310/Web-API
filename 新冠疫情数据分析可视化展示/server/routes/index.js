var express = require('express');
var router = express.Router();
var cors = require('cors');
var request = require('request');
/* GET home page. */
router.get('/disease', cors(),function(req, res) {
	request.get({url:'https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5'}, function (error ,response, body) {
		// 返回的结果和 GET 一样
		res.send({
			body:body
		})
	})
});

module.exports = router;
