const EventEmitter=require('events');

//ekane EventEmitter hosse class

const emitter=new EventEmitter();


//register lisener for bellring event


emitter.on('bellring',function(period){


    console.log('we need to run because'+period)
})

// raise an event
 //raise na korle event lisen hbe na


// emitter.emit('bellring')

setTimeout(() => {
    emitter.emit('bellring','second period ended')
}, 2000); //2 second por run hbe

//lisen er age raise dile kintu kaj korbe na

