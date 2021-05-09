// const fs = require("fs");

// const testobj = {
//   name: "emon",

//   email: "emonsab@gmail.com",
//   adress: {
//     city: "dhaka",
//     country: "bd",
//   },
// };

// const data = JSON.stringify(testobj);

// fs.writeFile("test.json", data, (err) => {
//   if (err) {
//     console.log("error");
//   } else {
//     console.log("sucess");
//   }
// });



//readfile



const fs=require('fs')

fs.readFile("./test.json",(err,data)=>{


    if(err){

        console.log("errror")

    }
else{

    console.log("sucess")
    let obj=JSON.parse(data)
    console.log(obj)
}





})