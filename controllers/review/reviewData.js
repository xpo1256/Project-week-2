const Review = require('../../models/reviews.js')

const dataController = {}
dataController.index = async (req, res, next) => {
  try {
    const user = await req.user.populate('reviews');
    res.locals.data = {
      reviews: user.reviews || [],
      token: req.query.token || '',
    };
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};


dataController.destroy = async (req, res, next ) => {
    try {
         await Review.findOneAndDelete({'_id': req.params.id }).then(() => {
            next()
         })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}

dataController.update = async (req, res, next) => {
    try {
      res.locals.data.reviews = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true })
      next()
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}

dataController.create = async (req, res, next) => {
    try {
      res.locals.data.reviews = await Review.create(req.body)
      req.user.reviews.addToSet({_id: res.locals.data.reviews._id })
      await req.user.save()
      next()
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}

// dataController.show = async (req, res, next) => {
//     try {
//         res.locals.data.reviews = await Review.findById(req.params.id)
//         if(!res.locals.data.reviews){
//             throw new error(`could not locate a review with the id ${req.params.id}`)
//         }
//         next()
//     } catch (error) {
//       res.status(400).send({ message: error.message })
//     }
// }

dataController.show = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      throw new Error(`Could not locate a review with the id ${req.params.id}`);
    }

    res.locals.data = {
      reviews: review.toObject(),  // safe plain object for JSX
      token: req.query.token || '',
    };
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};



module.exports = dataController