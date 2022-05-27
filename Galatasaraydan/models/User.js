const mongoose=require('mongoose')
const Schema=mongoose.Schema
const UserSchema=new Schema({
    Username:{type:String, unique:true, required:true},
    UserPW:{type:String, required:true},
    userMail:{type:String, unique:true, required:true},
    isim:{type:String, required:true},
    soyad:{type:String, required:true},
    cinsiyet:{type:String, required:true},
    dTarih:{type:Date, required:true}
})

const User=mongoose.model('User',UserSchema)

module.exports=User