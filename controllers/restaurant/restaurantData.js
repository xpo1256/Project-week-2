const Restaurant = require('../../models/restaurant')
const User = require('../../models/user');


const dataController = {}
dataController.index = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('restaurants');
    res.render('restaurant/Index', {
      restaurants: user.restaurants, // Pass populated array
      token: req.query.token || ''
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

dataController.destroy = async (req, res, next ) => {
    try {
         await Restaurant.findOneAndDelete({'_id': req.params.id }).then(() => {
            next()
         })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}

dataController.update = async (req, res, next) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else if(req.body.readyToEat !== true) {
        req.body.readyToEat = false;
    }
    try {
      res.locals.data.restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true })
      next()
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}

dataController.create = async (req, res, next) => {
  
    try {
      res.locals.data.restaurant = await Restaurant.create(req.body)
      req.user.restaurants.addToSet({_id: res.locals.data.restaurant._id })
      await req.user.save()
      next()
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}

dataController.show = async (req, res, next) => {

  try {
    res.locals.data.restaurant = await Restaurant.findById(req.params.id);
    if (!res.locals.data.restaurant) {
      throw new Error(`Could not locate a restaurant with the id ${req.params.id}`);
    }

    res.locals.data.token = req.query.token || res.locals.data.token || '';
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};



module.exports = dataController