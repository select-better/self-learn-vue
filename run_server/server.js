const express = require('express');
// history需要，但也可以用nagix代理
const history = require('connect-history-api-fallback')
const app = express();

// 当hash的时候这样手动刷新页面不会有问题， 
// app.use(express.static(__dirname + '/static/hash'))

// 但是history的时候回找不到资源，因为会重新请求 需要配合上面的插件
app.use(history())
app.use(express.static(__dirname + '/static/dist'))

app.get('/student', (req,res)=>{
    res.send({
        name: 'wcl'
    })
})
app.listen(5001, ()=>{
    console.log('运行5001')
})