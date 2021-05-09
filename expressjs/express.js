//  const express=require("express")
//  const app=express();

//  app.set('view engine','ejs');

// app.use(express.json())
//  app.get("/page",(req,res)=>{
   
// //render 

// res.render("ejs")


//    //  res.send("hello from the express") //raw node a end likhtam but ekhane send likhbo

//  })

//  app.get('/about',(req,res)=>{
// res.send("hello this is about")

//  }) 


//  //object pathale seta json a convert hoye jay

//  app.get('/temp',(req,res)=>{
//    res.send({

//       name:'emon',
//       id:201

//       //res.json o likha jay and atao also convert non-objects
//       // jamon null undefined, which are not valid JSON

      
//    })
//  })

// app.get('*',(req,res)=>{

//    res.render("404")


// }) //404 error er jonno


//  app.listen(3000,()=>{

//     console.log("lisening port at 3000")
//  })

//  //the callback function has 2 parameters , request (req) and response(res)
//  // the request object (req) represents the http request and has properties for the request query string ,parameters,body, http headers etc
//  //get==read
//  //post==create
//  //put==update
//  //delete==delete




















/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//rabil hasan




const express=require("express")
 const app=express();

 app.get('/',(req,res)=>{

   res.send("hello this is home page")
 })



 app.post('/about',(req,res)=>{

   res.send("hello this is about  page")
 })



 app.delete('/delete',(req,res)=>{

   res.send("hello this is delete  page")
 })


 app.put('/put',(req,res)=>{

   res.send("hello this is put  page")
 })

//status code change korte chaile
//  app.get('/there',(req,res)=>{
// res.status('201')
// res.end("unauthiraised")

//  })


//json response

app.get('/json',(req,res)=>{
  
  const myjosn=[{

   name:'emon',
   city:'dhaka',
   occupation:'student'
  },

  {
   name:'khalid',
   city:'gazipur',
   occupation:'student'
   
  }
]
   res.json(myjosn) 
   
    })

//response redicate akta link dile arektay chole jabe

//  app.get('/india',(req,res)=>{
// res.redirect("http://localhost:3000/bangla")

//  })

//  app.get('/bangla',(req,res)=>{
//    res.send("this is bangladesh")
   
//     })


//response header

//  app.get('/six',(req,res)=>{

//    res.append("name","emon") // header a chole jave
//    res.append("city","dhaka") 
  
   
//    res.status(201);
//    res.end("thello world");

//     })





//cookies


// app.get('/cook',(req,res)=>{

     
//    res.cookie('name',"emon")
//    res.end("cookie set sucess")
//        })


    
       //clear cookies


// app.get('/cookdel',(req,res)=>{

//      res.clearCookie('name')
//      res.end('delete')
  
//        })






//rquest url query

// app.get('/url',(req,res)=>{

//    const val=req.query.firstname;
//    const val1=req.query.lastname;

//    res.send(val+" " + val1)
//        })

// http://localhost:3000/url?firstname=emon&lastname=sab





 //get request er header
//  app.get('/header',(req,res)=>{
// const a=req.header("a")
// const b=req.header("b")

// res.send(a+ b)

//        })




//url query

//  app.get('/query',(req,res)=>{



//   const a=req.query.a;
//   const b=req.query.b;


//   res.send(a + b)

//        })








 app.listen(3000,()=>{

   console.log("server started")
 })




