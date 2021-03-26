//asycchronous file system

//call back functiion require





const fs=require("fs")
fs.writeFile("emon.txt",'we are learnig asencronus',(err)=>{

console.log("completed") //eta terminal a show dibe

console.log(err);

})


//we pass them a function as an argument -a callback  that gets called when that task completes
// the callback has an argument that tells you whetever tha operatiion completed sucessfully
// now we need to say what to do when fs.writeFile has completed (even if its nothing) and start 
//cheeking for errors


//file append

fs.appendFile("emon.txt","this text is add",(err)=>{

    console.log("append completed")
})

//for reading

fs.readFile('emon.txt',(err,data)=>{


    console.log(data.toString())
})