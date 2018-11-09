import "@babel/polyfill";

module.exports = app => {
  const User = app.models.index.User
  const Event = app.models.index.Event

  app.post("/register", async (req, res) => {
    await User.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
              res.status(412).json({msg: error.message});
            })
  })

  app.get("/profile", app.auth.authenticate(), async (req, res) => {
    await User.findOne({
      where: {
        id: req.user.id
      },
      include: {
        model: Event,
        through: {
          attributes: ["eventUser"]
        }
      }
    })
    .then(result => {
      res.send(result)
    })
    .catch(error => {
      res.status(412).json({msg: error.message})
    })
  })
}
