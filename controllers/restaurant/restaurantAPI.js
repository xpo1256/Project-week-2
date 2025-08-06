const RESOURCE_PATH = '/restaurants'
const apiController = {
  index(req, res, next){
    res.json(res.locals.data.restaurants)
  },
  show(req, res, next){
    res.json(res.locals.data.restaurant)
  },
  destroy(req, res, next){
    res.status(204).json({msg: 'record sucessfully deleted'})
   }
}

module.exports = apiController