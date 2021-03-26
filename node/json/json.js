//json api er upor onek kaj a lage
//json stands for javascript object notation .json  is a lightweight format for storing and transporting data

// json is often used when data is sent from a serveer to web page

// const bio={

//     name:"emon",
//     age:23,

//     hobby:"programming"

// }
// console.log(bio.hobby)

// //object ke json a convert

// const jsondata=JSON.stringify(bio);
// console.log(jsondata)

// //json theke normal korte chaile

// const objdata=JSON.parse(jsondata)

// console.log(objdata)





//akta object ke akta file a nite chaile


const fs=require("fs")
const bio={

    name:"emon",
    age:23,

    hobby:"programming"

}

// const jsondata=JSON.stringify(bio);
//  fs.writeFile("json1.json",jsondata,(err)=>{

//     console.log("done")
    
//  })


 //read

 fs.readFile("json1.json",(err,data)=>{

    //json file ke object a 

    const orginaldata=JSON.parse(data);

    console.log(orginaldata)
 })