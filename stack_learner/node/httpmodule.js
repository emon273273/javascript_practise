const http=require('http')

const server=http.createServer((req,res)=>{

console.log(req.url)
res.end("<h1>hello nodejs</h1>")



})

server.listen(4141,()=>{

    console.log("connection sucess")
})