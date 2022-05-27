
const express = require('express')
const router = express.Router()
const User = require('../models/User')

/* GET FONKSIYONLARI */
router.get('/uyeol', (req, res) => {
    res.render('galatasaraydan/uyeol')
})
router.get('/girisYap', (req, res) => {
    res.render('galatasaraydan/girisyap')

})
router.get('/cikisyap', (req, res) => {
    req.session.destroy(()=>{
        res.redirect('/')
    })
    

})



/* POST FONKSIYONLARI */
router.post('/uyeol', (req, res) => {
    /* DB Kaydetme Bölümü */
    User.create(req.body, (error, user) => {
        if (error) {
            console.log("hata var " + error)
        }
        else {

            req.session.sessionFlash = {
                type: 'alert alert-success',
                message: 'Başarılı Bir Şekilde Üye Oldunuz.'
            }
            res.redirect('./girisyap')
            console.log(req.body)
        }
    })

})

router.post('/girisYap', (req, res) => {
    const { Username, UserPW } = req.body
    /* Kullanıcı Giriş Yap Bölümü */
    User.findOne({ Username }, (error, user) => {
        if (user) {
            if (user.UserPW == UserPW) {
                req.session.userID = user._id
                req.session.sessionFlash = {
                    type: 'alert alert-success',
                    message: 'Başarılı Bir Şekilde Giriş Yapıldı.'
                }

                res.redirect('/')
                console.log("Giriş Başarılı.");


            }
            else {
                req.session.sessionFlash = {
                    type: 'alert alert-danger',
                    message: 'Şifre Yanlış Tekrar Deneyin'
                }
                res.redirect('/users/girisyap')
            }
        }
        else {
            res.redirect('/users/uyeol')
        }
    })

})











module.exports = router