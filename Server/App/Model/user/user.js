const mongoose=require("mongoose")
const isEmail= require("validator/lib/isEmail")
const passwordValidator=require("password-validator")
const verifyPassword= new passwordValidator()
                        verifyPassword.lowercase()
                        verifyPassword.uppercase()
                        verifyPassword.digits()
                        verifyPassword.symbols()
                        verifyPassword.not().spaces()

const Schema=mongoose.Schema
const userDB=new Schema({
    name:{
        type:String,
        required:[true,"name is  required"],
        minLength:5,
        unique:true
    },
    email:{
        type:String,
        unique:true,
        required:[true, "email is  required"],
        validate:{
            validator:function(value){
                return isEmail(value)
            },
            message:function(){
                return "Please enter a valid Email format"
            }
        }

    },
    password:{
        type:String,
        required:[true, "password is required"],
        minlength:8,
        maxLength:128,
        validate:{
            validator:function(value){
                return verifyPassword.validate(value);
            },
            message: function(){
                return "password should contain Alphabets, number and special Symbols"
            }
        }

    }
    
})
const user=mongoose.model("user",userDB)
module.exports=user