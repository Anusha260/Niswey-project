const csv=require("csv-parser")
const fs=require("fs")
const express = require("express")

const router = express.Router();

const results=[]
const list=[]

router.get("/salary",(req,res)=>{
    try{
        fs.createReadStream('salary_data.csv')
        .pipe(csv({}))
        .on('data',(data) => results.push(data))
        .on("end",()=>{
            
            // console.log(req.body)
            res.send(results)
            
        })

    }catch(err){
        console.error(err.message);
        res.status(401).send("data in not available")
    }
})

module.exports = router;