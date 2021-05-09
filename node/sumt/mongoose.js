const express=require("express")

const mongoose=require("mongoose")

const todohandler=require("./routeHandler/todohandler")
const app=express()
app.use(express.json())

//database connection with mongoose

mongoose.connect('mongodb+srv://emonsab:2010123456em@cluster0.suj05.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ useNewUrlParser: true , 
useUnifiedTopology: true 
})
.then(()=>{

    console.log("connection sucess")
})
.catch(()=>{

    console.log("connection not sucess")
})

//routing

app.use('/todo',todohandler)



//errorhandle

function errorhandler(err,req,res,next)
{

    if(res.headersSent){

        return next(err)

    }

    res.status(500).json({error:err});

}

app.listen(30000,()=>{

    console.log("app lisening on port 30000")
})