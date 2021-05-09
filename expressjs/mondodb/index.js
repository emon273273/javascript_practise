 const mongoclient=require('mongodb').MongoClient;


 const url="mongodb+srv://emonsab:2010123456em@cluster0.suj05.mongodb.net?retryWrites=true&w=majority";

const config={ useUnifiedTopology: true }//eta deyar karon hosse ekta run a problem hoy othoba oder future a arokom update asbe se jonno eta korsi and mondoclient.connect a pass kore disi na dileo hoy
mongoclient.connect(url,config,(err,mymongoclient)=>{

    if(err){

        console.log("errror")
    }else{

        console.log("sucess")
        // insertdata(mymongoclient)
    }
})


 //data insert data

  const insertdata=(mymongoclient)=>{

const mydatabase=mymongoclient.db("school");//database select
const mycollection=mydatabase.collection('students') //database er table dhorlam
const mydata={

    name:'emon',
    id:'201'
}
mycollection.insertOne(mydata,(err)=>{

    if(err){

        console.log("fail")
    }else{

        console.log("data inputsucess")
    }
})

 }

 delete data

 const deleteone=()=>{
    const mydatabase=mymongoclient.db("school");
    const mycollection=mydatabase.collection('students')

    const deleteitem={id:'201'}
    mycollection.deleteone(deleteitem,(err)=>{
if(err){

    console("data delete fail")
}else{
    console.log("data delete sucess")
}

    })  
 }

function deleteall(mongoclient){
 var mydatabase=mymongoclient.db("school")
    var mycollection=mydatabase.collection("students")
mycollection.deleteMany(function(err,result){
    if(err){

        console.log('all delete  not sucess')
    }else{

        console("delete sucess")
        console.log(result)
    }
})

}