var express = require('express');
var request = require('request');
var router = express.Router();

// 使用express+request实现跨域代理操作

/* GET users listing. */
router.get('/users', function(req, res, next) {
  console.log('/api/users');
  // res.send('respond with a resource');
  // const url = 'http://jsonplaceholder.typicode.com/' + req.url;
  // 得到的结果：非正常 {}

  const url = 'http://jsonplaceholder.typicode.com' + req.url;// 数据正常
  console.log(url);
  req.pipe(request(url)).pipe(res);
});

module.exports = router;
