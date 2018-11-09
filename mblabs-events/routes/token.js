import jwt from "jwt-simple"

module.exports = app => {
  const cfg = app.config.config;
  const User = app.models.index.User;


  app.post("/token", (req, res) => {
    if (req.body.email && req.body.password) {
      const email = req.body.email;
      const password = req.body.password;
      User.findOne({where: {email: email}})
        .then(user => {
          if (user) {
            const payload = {id: user.id};
            res.json({
              token: jwt.encode(payload, cfg.jwtSecret)
            });
          } else {
            res.sendStatus(401);
          }
        })
        .catch(error => res.sendStatus(401));
    } else {
      res.sendStatus(401);
    }
  })
}
