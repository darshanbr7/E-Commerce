const express=require("express")
const Connect=require("./Config/DBConnection")
const routes=require("./Config/Routes")
const app=express()
const port=3090;
app.use(express.json())
app.use("/api",routes)
Connect()
app.listen(port,()=>{
    console.log(`Server is running on the port ${port}`)
})