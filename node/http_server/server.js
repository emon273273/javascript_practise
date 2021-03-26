const  http=require("http")

const server=http.createServer((req,res)=>{
 if(req.url==='/'){

    res.end('hello from the other side')

 }
 else if(req.url==='/about'){

    res.end('this is about')
 }

else{

    res.writeHead(404,{"content-type":"text/html"})
    res.end("<h1>page does not exit</h1>")
}

})

//lisen
server.listen(2020,()=>{

    console.log("lisening port 2020")
})