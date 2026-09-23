import App from "./App.js";

const port = 6050

App.get("/",(req,res)=>{
    return res.json({
        message:"Hello Sir",
        success:true,
        status:200,
        data:["apple","banana","mango","guava"]
    })
})

App.get("/one",(req,res)=>{
    return res.json(
        {
            message:"Hello ",
            success:true,
            status:200,
            data:["apple","banana","mango","guava"]
    })
})

App.get("/two",(req,res)=>{
    return req.json({
            message:"Hello ",
            success:true,
            status:200,
            data:["apple","banana","mango","guava"]
    })
})

App.get("/three",(req,res)=>{
    return req.json({
         message:"Hello ",
            success:true,
            status:200,
            data:["apple","banana","mango","guava"]
    })

})

App.get("/four",(req,res)=>{
    return res.json({
         message:"Hello ",
            success:true,
            status:200,
            data:["apple","banana","mango","guava"]
    })
})

App.listen(port,()=>{
    console.log(`THIS MESSGAE IF FROM ${port}`)
})