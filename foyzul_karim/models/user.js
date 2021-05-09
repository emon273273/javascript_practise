import mongoose from "mongoose";

//scema

const userscema=new mongoose.Schema({

username:{

    type:String,unique:true,
    required:true
},
createAdt:{type:Date,required:true}

})