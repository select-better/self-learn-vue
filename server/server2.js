const express = require('express')
const app = express()
const port = 5001


// 这里可以进行判断和拦截
app.use(function (req, res, next) {
    console.log('请求tou',req.headers.host)
    console.log('请求路径',req.originalUrl)
    next()
})

app.get('/cars', (req, res) => {

  console.log('请求进来了',req.originalUrl)
  
  // 设置都可以请求，或者设置相应的tou可以请求  默认是所有
  //   res.header('Access-Control-Allow-Origin', '*');
  // 这里设置了请求头
  res.header('Access-Control-Allow-Origin', 'http://localhost/5000');
  res.send([
    { id: 1, name: '奔驰', price: 189},
    { id: 2, name: '宝马', price: 289},
    { id: 3, name: '奥迪', price: 189},
  ])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/cars`)
})