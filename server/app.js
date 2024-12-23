const express = require("express")
const path = require("path")
const app = express();
const port = 8080

//开放跨域请求
app.use(function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "*");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method == "OPTIONS") res.sendStatus(200); //让options尝试请求快速结束
    else next();
});

app.use(express.json())

//指定静态资源路径
app.use(express.static(path.join(__dirname, "public")))


app.use("/test", require("./routers/TestRouter"))

app.get("/", (req, res) => {
    res.send("hello world");
})

app.listen(port, () => {
    console.log(`启动成功 : http://localhost:${port}/`)
})

