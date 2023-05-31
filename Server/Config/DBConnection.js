const mongoose=require("mongoose")

const Connect=()=>{
        mongoose.connect("mongodb://0.0.0.0:27017/E-Commerce")
                .then(()=>{
                    console.log("connected to database");
                })
                .catch((err)=>{
                    console.log({
                        "Error":err
                    })
                })
}
module.exports=Connect