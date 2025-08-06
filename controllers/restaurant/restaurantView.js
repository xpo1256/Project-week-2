const RESOURCE_PATH = '/restaurant'
const viewController = {
  signUp(req, res, next){
    res.render('/auth/SignUp')
  },
  signIn(req, res, next){
    res.render('/auth/SignIn')
  },
  index(req, res, next){
    res.render('restaurant/Index', res.locals.data)
  },
  show(req, res, next){
    res.render('restaurant/Show', res.locals.data)
  },
  edit(req, res, next){
    res.render('restaurant/Edit', res.locals.data)
  },
  newView(req, res, next){
    res.render('restaurant/New', res.locals.data)
  },
  redirectHome(req, res, next){
    if(res.locals.data.token){
      res.redirect(`${RESOURCE_PATH}?token=${res.locals.data.token}`)
    }else {
      res.redirect(RESOURCE_PATH)
    } 
  },
  redirectShow(req, res, next){
    res.redirect(RESOURCE_PATH + `/${req.params.id}`)
  },
  redirectNew(req,res,next){
    res.redirect(RESOURCE_PATH + `/${req.params.id}`)
  }
}

module.exports = viewController