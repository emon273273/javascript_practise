//normal function that have acess to req and res object and next function


const express=require("express")

const app=express();


app.use(express.json())
//my middleware homebuilt

// const mymiddle=(req,res,next)=>{

//    console.log(`${new Date(Date.now()).toLocaleString()}-${req.method}-${req.originalUrl}`)
// next();
// }

// app.use(mymiddle) //mymiddle ke use korte chaile call korte hb




// app.get("/about",(req,res)=>{

// res.send("about")
    
        
//         })
    
    
    
//     app.listen(3000,()=>{
    
//         console.log("lisening on port 4000");
    
//     })

const chekemon=(req,res,next)=>{

    const name=req.body.name;

    if(name==="emon"){

        res.json({error:"yo we dont allow emon here"})

    }
    else{

        next()
    }
}



app.get("/",(req,res)=>{


    res.json({message:"hello world"})


})

app.post("/",chekemon,(req,res)=>{

    res.send("you logged in")

})

app.listen(3001,()=>{

    console.log("server running")

})

