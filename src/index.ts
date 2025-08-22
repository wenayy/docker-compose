import { PrismaClient } from "@prisma/client";
 // ✅ matches your output path



import express from "express"

const app= express()
const prismaclient = new PrismaClient()

app.get("/",async (req,res)=>{
   const data =await prismaclient.user.findMany();
   res.json(data);
})
 

app.post("/data",async(req,res)=>{
     
    await prismaclient.user.create({
       data:{
         name:Math.random().toString(),
         mail:Math.random().toString(),
        password:Math.random().toString()
       }
       
    })
    res.send("created");
})

app.listen(3000);