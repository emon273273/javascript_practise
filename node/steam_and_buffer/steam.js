const fs=require("fs")
const http=require("http")
const server=http.createServer();

// server.on('request',(req,res)=>{

//     //create readable system
//     const rstream=fs.createReadStream('steam.txt');

//     //data call korbe steam er moto
//     rstream.on('data',(chunkdata)=>{

// res.write(chunkdata);

//     })


//     rstream.on("end",()=>{


//         res.end()
//     })

//     rstream.on('error',(err)=>{

//         console.log(err);
//         res.end("file not found")
//     })
// })

// server.listen("3000");



//stream.pipe() the method used to take a readable stream and connect it to a writable steam



//new way

server.on("request",(req,res)=>{

  const rstream=fs.createReadStream("steam.txt");
rstream.pipe(res);  
})



server.listen(3000);
