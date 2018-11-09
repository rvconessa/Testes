import passport from "passport"
import {Strategy, ExtractJwt} from "passport-jwt"

module.exports = app => {
  const User = app.models.index.User
  const cfg = app.config.config
  const params = {
    secretOrKey: cfg.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  };
  const strategy = new Strategy(params, (payload, done) => {
      User.findById(payload.id)
        .then(user => {
          if (user) {
            return done(null, {
              id: user.id,
              email: user.email
            })
          }
          return done(new Error("User not found"), null)
        })
        .catch(error => done(error, null))
    });
  passport.use(strategy)
  return {
    initialize: () => {
      return passport.initialize()
    },
    authenticate: () => {
      return passport.authenticate("jwt", cfg.jwtSession)
    }
  }
}
