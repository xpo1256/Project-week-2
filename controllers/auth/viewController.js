const RESOURCE_PATH= '/restaurant'
const viewController = {
    signUp(req,res ,next){
        res.render('auth/SignUp')
    },
    signIn(req,res,next){
        res.render('auth/SignIn')
    },
    redircetToLogin(req,res,next){
        res.redirect('/users/login')
    },
   redirectHome(req, res, next){
    if(res.locals.data.token){
      res.redirect(`${RESOURCE_PATH}?token=${res.locals.data.token}`)
    }else {
      res.redirect(RESOURCE_PATH)
    } },
    
}

module.exports = viewController;