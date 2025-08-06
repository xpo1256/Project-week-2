const express = require('express')
const morgan = require('morgan')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const userRoutes = require('./controllers/auth/routeController')
const restRoutes = require('./controllers/restaurant/restaurantRoutes')
const reviewRoutes = require('./controllers/review/reviewRouter')
const app = express()

const path = require("path")

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 
app.use(methodOverride('_method')) 
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', userRoutes)
app.use('/restaurant', restRoutes)
app.use('/reviews', reviewRoutes)

module.exports = app