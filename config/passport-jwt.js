const passport = require('passport');
const jwtstrategy = require('passport-jwt').Strategy;
const extrastrategy = require('passport-jwt').ExtractJwt;

const user = require('../models/user_model');

const opt = {
    jwtFromRequest: extrastrategy.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
}

passport.use('jwt', new jwtstrategy(opt, async (userdata, done) => {
    let data = await user.findById(userdata, tokenData.id);
    if (data) {
        return done(data, null);
    }
    return done(null, false);
}))

passport.serializeUser(async (user, done) => {
    return done(null, user.id);
})

passport.deserializeUser(async (id, done) => {
    let data = await user.findById(id);
    if (data) {
        return done(data, null);
    }
    return done(null, false);
})

module.exports = passport;