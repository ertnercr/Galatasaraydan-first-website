const express = require('express')
const router = express.Router()
const path = require('path')
const Habertemp=require('../models/Habertemp')



router.get('/', (req, res) => {
   Habertemp.find({}).lean().then(Habertemps=>{
      res.render('galatasaraydan/anasayfa',{Habertemps:Habertemps})
   })
   
   console.log(req.session)
})


router.get('/basketbol', (req, res) => {
   Habertemp.find ({
      Kategori:'Basketbol'
   }).lean().then(Habertemps=>{
      res.render('galatasaraydan/basketbol',{Habertemps:Habertemps})
   })
   
   console.log(req.session)
})
router.get('/futbol', (req, res) => {
   Habertemp.find ({
      Kategori:'Futbol'
   }).lean().then(Habertemps=>{
      res.render('galatasaraydan/futbol',{Habertemps:Habertemps})
   })
   
   console.log(req.session)

})

router.get('/tarih', (req, res) => {
   res.render('galatasaraydan/tarih')

})
router.get('/tarih/nasil-kuruldu', (req, res) => {
   res.sendFile(path.resolve('galatasaraydan_tarih/galatasaraydan_nasilkuruldu.html'))

})
router.get('/tarih/kunye', (req, res) => {
   res.sendFile(path.resolve('galatasaraydan_tarih/galatasaraydan_kunye.html'))

})
router.get('/tarih/renklerin-oykusu', (req, res) => {
   res.sendFile(path.resolve('galatasaraydan_tarih/galatasaraydan_renkler.html'))

})
router.get('/tarih/ilk-yillar', (req, res) => {
   res.sendFile(path.resolve('galatasaraydan_tarih/galatasaraydan_ilkyillar.html'))

})
router.get('/tarih/logonun-dogusu', (req, res) => {
   res.sendFile(path.resolve('galatasaraydan_tarih/galatasaraydan_logo.html'))

})
router.get('/tarih/galatasaray-sehitleri', (req, res) => {
   res.sendFile(path.resolve('galatasaraydan_tarih/galatasaraydan_sehitler.html'))

})
router.get('/tarih/baskanlarimiz', (req, res) => {
   res.sendFile(path.resolve('galatasaraydan_tarih/galatasaraydan_baskanlar.html'))

})
router.get('/tarih/ataturk-ve-galatasaray', (req, res) => {
   res.sendFile(path.resolve('galatasaraydan_tarih/galatasaraydan_ataturkvegs.html'))

})
router.get('/tarih/ilk-stadimiz', (req, res) => {
   res.sendFile(path.resolve('galatasaraydan_tarih/galatasaraydan_ilkmabed.html'))

})
router.get('/tarih/galatasaray-lisesi', (req, res) => {
   res.sendFile(path.resolve('galatasaraydan_tarih/galatasaraydan_gslisesi.html'))

})



router.get('/voleybol', (req, res) => {
   Habertemp.find ({
      Kategori:'Voleybol'
   }).lean().then(Habertemps=>{
      res.render('galatasaraydan/voleybol',{Habertemps:Habertemps})
   })
   
   console.log(req.session)
})
router.get('/diger', (req, res) => {
   Habertemp.find ({
      Kategori:'Diğer'
   }).lean().then(Habertemps=>{
      res.render('galatasaraydan/diger',{Habertemps:Habertemps})
   })
   
   console.log(req.session)
})



module.exports = router