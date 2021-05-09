const express=require("express")
const mongoose=require("mongoose")

const router=express.Router()

const todosscema=require("../scema/todoscema")

const Todo= new mongoose.model("Todo",todosscema);



//get all the todos

router.get('/',async(req,res)=>{
await Todo.find({status:'active'},(err,data)=>{

    if(err){

        res.status(500).json({

            error:"there was a server side error "
        })
       
    } else{


        res.status(200).json({
result:data,
            message:"tget sucess"
        })
    }

})

})

router.get('/:id',async(req,res)=>{

    
})



router.post('/',async(req,res)=>{
const newTodo =new Todo(req.body);
await newTodo.save((err)=>{

    if(err){

        res.status(500).json({

            error:"there was a server side error "
        })
       
    } else{


        res.status(200).json({

            message:"todo was inserted sucessfully"
        })
    }
})
    
})




router.post('/all',async(req,res)=>{

   await Todo.insertMany(req.body,(err)=>{
if(err){

    res.status(500).json({

        error:"there was a server side error "
    })

}else{

    res.status(200).json({

        message:"todo was inserted sucessfully"
    })
}

   })
});


router.put('/:id',async(req,res)=>{
await Todo.updateOne({  //terminal a update dekhte chaile arekta function use korte hbe  seti hose findByIdAndUpdate()

    _id:req.params.id
},{$set:{


    status:'inactive',
    title:''
}},(err)=>{




    if(err){

        res.status(500).json({

            error:"there was a server side error "
        })
       
    } else{


        res.status(200).json({

            message:"todo was updated  sucessfully"
        })
    }

})
    
})



router.delete('/:id',async(req,res)=>{
await Todo.deleteOne({_id:req.params.id},(err)=>{

    if(err){

        res.status(500).json({

            error:"there was a server side error "
        })
       
    } else{


        res.status(200).json({

            message:"todo was delete sucessfully"
        })
    }

})
    
})

module.exports=router;

