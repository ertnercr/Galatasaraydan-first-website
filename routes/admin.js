const express = require('express')
const router = express.Router()
const Habertemp = require('../models/Habertemp')
const path = require('path')


router.get('/panel', (req, res) => {

    res.render('galatasaraydan/admin')
})









router.post('/panel', (req, res) => {
   
   let post_image=req.files.post_image
   
   post_image.mv(path.resolve(__dirname, '../Haber Fotoğrafları',post_image.name))
    
   
    /* DB Kaydetme Bölümü */
    Habertemp.create({
        ...req.body,
        post_image:`/Haber Fotoğrafları/${post_image.name}`
    },) 
      req.session.sessionFlash={
          type:"alert alert-success",
          message:'Haber Başarıyla Eklendi.'
      }     

            res.redirect('/admin/panel')

        
    
})





module.exports = router