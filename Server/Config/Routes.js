const express=require("express");
const userController=require("../App/Controller/User/userController")
const Auth=require("../App/Middleware/Auth")
const routes=express.Router()
routes.get("/hi",userController.hi)

//register
routes.post("/user/register",Auth.register,userController.register)

module.exports=routes