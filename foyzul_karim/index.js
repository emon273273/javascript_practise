import express from "express";

const app=express();
app.use(express.json())

const port=3000;
app.get("/",(req,res)=>{

    const parms=(req.query.id);
res.send("hello world"+parms);
res.end()
})

app.post("/post",(req,res)=>{

    const body=req.body;
    console.log("heloo this is "+JSON.stringify(body.messa))
    res.end()
})

app.listen(port,()=>{

    console.log("lisening port :"+ port);
})
