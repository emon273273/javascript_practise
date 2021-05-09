const express=require("express")
const app=express()

app.set("view engine","ejs");
// app.get("/about",(req,res)=>{

//     // res.send("about page")

//     res.render("ejs",{

//         name:'bangladesh' 
//     })//second perameter akta value nay and seta amra ejs a kaje lagate pari


// })

//res.end() hose whitout data


//res.json()

// app.get("/about",(req,res)=>{

// // res.json({


// // name:"bangladesh"
// // })
    

// //status pathate chaile

// res.sendStatus(401)






// })



//res.format

//client ki chasse setar upor base kore amra response set korte pari



// app.get("/about",(req,res)=>{

// res.format({

//     "text/plain":()=>{

//         res.send("hi")
//     },
//     "text/html":()=>{

//         res.render("ejs",{

//             name:'bangladeshhiii'
//         })
//     },


//     'application/json':()=>{
// res.json({

//     message:"about",
// })

//     },

//     default:()=>{

//         res.status(406).send("not accept")
//     },
// })
    
    
    
    
    // })



    //res.cookie

    






//     app.get("/about",(req,res)=>{



// res.cookie('name',"this is emonsab");

// res.end()






// })


//redirect mane akta click korle arektay shift hbe




// app.get("/about",(req,res)=>{



//     res.redirect('text');
    
//     res.end()
    
    
    
    
    
    
//     })



//     app.get("/text",(req,res)=>{



//         res.send("this is text page man")
        
        
        
        
        
        
        
        
//         })







//res.set





app.get("/about",(req,res)=>{


//header a amra kisu key and value set kori res.set diye and get kori res.get diye
  res.set('platform',"emonsab er personal pc")
    
console.log(res.get("platform"))
    res.end()
    
    
    
    })



app.listen(3000,()=>{

    console.log("lisening on port 3000");

})