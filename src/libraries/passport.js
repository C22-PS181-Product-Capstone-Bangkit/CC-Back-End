const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


async function authenticate(email, password, done) {
  try {
    const user = new User();
    const authenticatedUser = await user.authenticate({ email, password });
    return done(null, authenticatedUser);
  } catch (error) {
    return done(null, null, error);
  }
}

passport.use(
  new LocalStrategy(
    {
      emailField: 'email',
      passwordField: 'password',
    },
    authenticate
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

module.exports = passport;
