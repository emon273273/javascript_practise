// //read stream

// //  const fs=require('fs');

// //  const ourreadstream=fs.createReadStream(`${__dirname}/myfile.txt`,);

// // ourreadstream.on('data',(chunk)=>{
// // console.log(chunk.toString());



// // }) 


// //server a rquest

// const http =require('http')
// const server=http.createServer((req,res)=>{
// if(req.url==='/'){
//     res.write('<html><head><title><Form></title></head>');

//     res.write('<body><form method ="post" action "/process"><input name ="message"/></form></body>')
//     res.end()


// } else if(req.url==='/process'&&req.method==='POST'){

// const body=[]
//    req.on('data',(chunk)=>{

// body.push(chunk)
  
//    })
//     req.on('end',()=>{

//         console.log('stream finish')

//         const parsebody=Buffer.concat(body).toString()
//         console.log(parsebody)
//     })

//     res.write('thankyou for submitting')
//     res.end()
// }

    
// })

// server.listen(1500)



