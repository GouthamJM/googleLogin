var passport = require('passport');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

let user ={}

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((user, cb) => {
    cb(null, user);
});


//Google Startegy...
passport.use(new GoogleStrategy({
    clientID:"549256600944-upsevvhrk743fhf27mpfknfdemrodu21.apps.googleusercontent.com",
    clientSecret:"-WCrT97qog6jRCqtCIP3iRfG",
    callbackURL: "http://localhost:5000/google/callback"
},
(accessToken, refreshToken, profile, done) => {
    user = { ...profile };
    done(null, profile);
}));






