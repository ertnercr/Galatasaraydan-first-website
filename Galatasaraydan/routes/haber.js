const express = require('express')
const router = express.Router()

const Habertemp=require('../models/Habertemp')


router.get('/:id', (req, res) => {
    Habertemp.findById(req.params.id).lean().then(Habertemps=>{
       res.render('galatasaraydan/haberler',{Habertemps:Habertemps})
    })
    
    console.log(req.session)
 })



 module.exports = router