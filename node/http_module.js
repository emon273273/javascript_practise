const http=require('http');

const server =http.createServer((req,res)=>{

    if(req.url==='/'){
res.write('hello world')

res.write("this is emon")
res.end();
    }

    else if(req.url==='/about'){
        res.write('this is about page')
res.end()
    }

    else{

        res.write("not found")
        res.end()
    }
});



server.listen(3000);
//  //lisener 
//eta terminal a response dibe

// server.on('connection',()=>{

// console.log('new connection')

// })
console.log('lisening on port 3000')

