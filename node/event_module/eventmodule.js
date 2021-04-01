//event module

// node js has a built in module called events

// where you can create  fire, and liseten for your own events 

// example 1: registering for the event to be fired only one time using once
// example 2: create an event emitter instance and register a couple of callbacks

// example 3: registering for the event with callback parameters

//create
// const  EventEmitter= require("events") //class

// const event=new EventEmitter();
// event.on('saymyname',()=>{

//     console.log("your name is emon")
// })

// //fire
// event.emit("saymyname")



//perameter hisebe kisu pathate chaile 

const  EventEmitter= require("events") //class

const event=new EventEmitter();
event.on('saymyname',(sc,msg)=>{

    console.log(`status code is ${sc} and the page is  ${msg}`);
})

//fire
event.emit("saymyname",200,"ok") //suporer call back a argument pass korsi
