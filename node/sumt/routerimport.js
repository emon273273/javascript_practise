const express=require("express")
const publicrouter=require('./router.js')
const app=express()

app.use('/admin',publicrouter);

app.listen(3000,()=>{
    console.log("serverstaretd")

})