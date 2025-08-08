const express = require('express');
const morgan = require('morgan');
const jsxEngine = require('jsx-view-engine');
const methodOverride = require('method-override');
const path = require("path");

const userRoutes = require('./controllers/auth/routeController');
const restRoutes = require('./controllers/restaurant/restaurantRoutes');
const reviewRoutes = require('./controllers/review/reviewRouter');

const app = express();

// Set up JSX view engine
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'views')); // Optional: just to be sure
app.engine('jsx', jsxEngine());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.locals.data = {};
    next();
});

// Routes
app.use('/users', userRoutes);
app.use('/restaurant', restRoutes);
app.use('/reviews', reviewRoutes);


app.get('/', (req, res) => {
    res.render('auth/SignIn'); 
});


module.exports = app;
