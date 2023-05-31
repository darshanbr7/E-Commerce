const user=require("../../Model/user/user")
const userController={}
userController.hi=(req,res)=>{
 res.json("hello user")
}
userController.register=(req,res)=>{
    const data=req.user
    new user(data).save()
                  .then((details)=>{
                    res.json(details)
                  }).catch((err)=>{
                    res.json(err)
                  })
    
}
module.exports=userController
