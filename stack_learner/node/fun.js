const fs=require('fs')
const http=require("http")



const server=http.createServer((req,res)=>{

    fs.readFile('./index.html',(err,data)=>{


        res.write(data)

        res.end()
    })
})

server.listen(4140,()=>{


    console.log("server is running")
})