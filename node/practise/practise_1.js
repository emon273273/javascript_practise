// // // const express =require("express")
// // // const app=express()

// // const { reject } = require("lodash")

// // // app.get('/',(req,res)=>{

// // //     res.send("hi")

// // // })

// // // const server=app.listen(3000,()=>{

// // //     console.log("server is ready")



// // // })
// // // console.log(process.argv)

// // // process.on("SIGTERM",()=>{

// // //     server.close(()=>{

// // //         console.log("process terminated")

// // //     })


// // // })



// // // user theke input nite chaile and oita kono jaygay post korte chaile
// // // const readline=require("readline").createInterface({


// // //     input:process.stdin,
// // //     output:process.stdout
// // // })

// // // readline.question("what is your name:",name=>{

// // //     console.log(`hi ${name}!`)

// // //     readline.close()
// // // })


// // // You can install it using npm install inquirer, and then you can replicate the above code like this:

// // // const inqu=require("inquirer")
// // // const { assignWith } = require("lodash")

// // // const question=[

// // // {

// // //     type:"input",
// // //     name:'name',
// // //     Message:"what is your name?"
// // // }
// // // ]

// // // inqu.prompt(question).then(ans=>{

// // //     console.log(`hi ${ans['name']}`)
// // // })

// // //time out
// // //  const myfunction=(a,b)=>{

// // //     console.log(a+b)
// // //  }

// // //  setTimeout(myfunction,2000,10,30) 

// // //  setTimeout returns the timer id. This is generally not used, but you can store this id, and clear it if you want to delete this scheduled function execution:

// // // const id=setTimeout(()=>{
// // // console.log("helol")

// // // },2000)

// // // clearTimeout(id);
// // // console.log(id)

// // // setTimeout(() => {
// // //     console.log('after ')
// // //   }, 0)
  
// // //   console.log(' before ')


// //   //setInterval() bar bar cholbe

// // //   setInterval(()=>{

// // //     console.log("hello")
// // //   },3000)


// // //he function above runs every 2 seconds unless you tell it to stop, using clearInterval, passing it the interval id that setInterval returned:

// // // const id = setInterval(() => {
// // //     console.log()
// // //   }, 2000)
  
// // //   clearInterval(id)

// // // auto callback hote thakbe always


// // // const myFunction = () => {
// // //     console.log("aemon")
  
// // //     setTimeout(myFunction, 1000)
// // //   }
  
// // //   setTimeout(myFunction, 1000)


// // // promises


// // //Once a promise has been called, it will start in a pending state. This means that the calling function continues executing, while the promise is pending until it resolves, giving the calling function whatever data was being requested.

// // // const myPromise = new Promise((resolve, reject) => {
// // //     setTimeout(() => {
// // //       resolve('foo');
// // //     }, 300);
// // //   });
  
// // //   myPromise
// // //     .then(value=>{

// // //         return value + ' and bar'
// // //     })

// // //     .then(value=>{

// // //         console.log(value)
// // //     })
// // //     .catch(err=>{

// // //         console.log(err)
// // //     })


// // //resolving an array

// // // const p=Promise.resolve([1,2,3])
// // // p.then(function (v){

// // //     console.log(v[0])
// // // })

// // //resolving another promise

// // // const original= Promise.resolve(33);
// // // const cast = Promise.resolve(original)
// // // cast.then(function(value){

// // //   console.log("value"+value)
// // // })



// // // console.log('original===cast?' +(original===cast))//return true

// // //Promise.prototype.catch()

// // const promise= new Promise((resolve,reject)=>{

// //   throw "oh -oh"
// // })
// // promise.catch((err)=>{

// //   console.log(err)
// // })




// //The Node.js Event emitter

// //On the backend side, Node.js offers us the option to build a similar system using the events module.

// const eventemit=require('events')
// const e=new eventemit()
// e.on('start',(n)=>{

//   console.log("emit called so started" +n)
// })
// e.emit('start',243)

//http


//Lines 1 through 3 load modules provided by Node.js, roughly similar to imports.


//var http = require('http');
// var fs = require('fs');
// var path = require('path');

const express= require('express')

const app=express()


express.raw.()