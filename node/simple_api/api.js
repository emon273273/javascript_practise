//api ekta service er moto jekhane amra data request korte parbo

//json api er upor onek kaj a lage
//json stands for javascript object notation .json  is a lightweight format for storing and transporting data

// json is often used when data is sent from a serveer to web page


const  http=require("http")



const fs=require("fs")








const server=http.createServer((req,res)=>{
 if(req.url==='/'){

    res.end('hello from the home side')

 }
 else if(req.url==='/about'){

    res.end('this is about')
 }

 else if(req.url==='/userapi'){
fs.readFile("/home/emonsab/Documents/javascript/node/simple_api/api.json","utf-8",(err,data)=>{


    res.writeHead(200,{"content-type":"application/json"})
console.log(data);

res.end(data)
})
  

    
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
