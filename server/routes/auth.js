// Code co-created with chatGPT, Github Copilot, Passport.JS docs and various online tutorials
const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  // user.id is the id of the mongo record id, not the googleId
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
      .then(user => {
          done(null, user);
      });
});

// authentication with passport's Google Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({ googleId: profile.id })
      .then((existingUser) => {
          if (existingUser) {
              // User already exists
              done(null, existingUser);
          } else {
              // User does not already exist, make new record with this ID
              new User({ googleId: profile.id, 
                firstName: profile.name.givenName, 
                lastName: profile.name.familyName, 
                email: profile.emails[0].value 
              }).save()
                .then(user => done(null, user));
        }
    });
}));

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

router.get('/google/callback', passport.authenticate('google'), 
  (req, res) => {
    res.redirect('/account');
  });

module.exports = router;
