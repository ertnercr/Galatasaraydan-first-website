const mongoose=require('mongoose')
const Schema=mongoose.Schema
const HaberSchema=new Schema({
    Baslik:{type:String, required:true},
    ilk_Icerik:{type:String, required:true},
    Baslik2:{type:String},
    alt_Icerik:{type:String},
    Baslik3:{type:String},
    alt_Icerik2:{type:String},
    Karticerik:{type:String, required:true},
    Kategori:{type:String, required:true},
    post_image:{type:String}
    
})

const Habertemp=mongoose.model('Habertemp',HaberSchema)

module.exports=Habertemp