const express = require("express")
const app = express()
const port = 3000
const path = require("path")

//ta su dung middleware static
app.use('/congkhai', express.static(path.join(__dirname,"/public")))

app.get("/",(req,res)=>{
    //res.send("hello world")
    var duongDanFile = path.join(__dirname, "home.html")
    res.sendFile(duongDanFile)
})

app.listen(port,()=>{
    console.log(`running at ${port}`)
})

