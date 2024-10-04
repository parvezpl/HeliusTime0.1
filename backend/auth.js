const LocalStrategy = require('passport-local').Strategy;
const SignUp = require('./schema/singup')
const weblinks = require('./schema/weblinks')
const passport = require('passport');


passport.use(new LocalStrategy(async (username, password, done)=>{
    try {
        const user = await weblinks.findOne({username: username});
        console.log(user)
        if (!user) {
            return done(null, false, {message:'incorrect user name'});
        }
        const isPasswordMatch = await user.comparePassword(password);
        console.log(isPasswordMatch)
        if (isPasswordMatch) {
            return done(null, user);
        } else {
            return done(null,false, {message:'incorrect password'});
        }

    } catch (error) {
        return done(error);
    }
}))


module.exports =passport;