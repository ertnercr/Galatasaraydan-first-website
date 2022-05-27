
const mongoose = require('mongoose')

const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const port = 3000
const hostname = '127.0.0.1'
const bodyParser = require('body-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const fileupload=require('express-fileupload')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileupload())

/* Connect Mongo-Session */
app.use(session({
    secret: 'test',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1/galatasaraydan_db' })
}))
/* Body Parser */
app.use(bodyParser.json())


/* mongoose */
mongoose.connect('mongodb://127.0.0.1/galatasaraydan_db')




/* express  */
app.use(express.static(__dirname))
/* express-handlebars */
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')


/* Görüntüleme Seçenekleri */
app.use((req, res, next) => {
    const { userID } = req.session
    if (userID) {
        res.locals = {
            displayLink: true
        }
    }
    else {
        res.locals = {
            displayLink: false
        }
    }
    next()
})

/* SessionFlash 
custom middleware */
app.use((req,res,next)=>{
    res.locals.sessionFlash=req.session.sessionFlash
    delete req.session.sessionFlash
    next()
})



/* Yönlendirmeler */
const main = require('./routes/main')
app.use('/', main)
const users = require('./routes/users')
app.use('/users', users)
const admin=require('./routes/admin')
app.use('/admin',admin)
const haber=require('./routes/haber')
app.use('/haber',haber)

app.listen(port, hostname, () => {
    console.log(`Server Oluşturuldu... http://${hostname}:${port}/`)
})



