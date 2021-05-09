const express=require("express")
const publicrouter=express.Router()
publicrouter.get('/emon',(req,res)=>{



    res.send('home')

})

module.exports=publicrouter;