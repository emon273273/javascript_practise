const express=require("express")

const app=express()
//sub app

const admin=express.Router();
admin.get('/dashboard',(req,res)=>{

    res.send("we are in admin dashboard")

    // console.log(req.baseUrl) //base url ta dibe sub app er base ta disse


})

//sub app

app.use('/admin',admin)

//root
app.get('/user/id',(req,res)=>{

    res.send("hello world")

    console.log(req.secure) // network sequre ki na
    
})

app.listen(5000,()=>{

    console.log("lisening port 5000")
})