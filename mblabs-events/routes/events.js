import "@babel/polyfill";

module.exports = app => {
  const Event = app.models.index.Event;

  app.get("/events", async (req, res) => {
    await Event.findAll()
    .then(result => res.json(result))
    .catch(error => {
      res.status(412).json({msg: error.message})
    })
  })

  app.get("/events/:id", async (req, res) => {
    await Event.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(result => {
      if (result) {
        res.json(result);
      } else {
        res.sendStatus(404);
      }
    })
    .catch(error => {
      res.status(412).json({msg: error.message});
    })
})

  app.get("/events/:id/subscrible", app.auth.authenticate(), async (req, res) => {
    await Event.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(async eventUser => {
      if (eventUser) {
        await eventUser.addUser(req.user.id)
          .then(result => {
            res.send(result)
          })
      } else {
        res.sendStatus(404);
      }
    })
    .catch(error => {
      res.status(412).json({msg: error.message});
    })
  })

  app.delete("/events/:id/unsubscrible", app.auth.authenticate(), async (req, res) => {
    await Event.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(async eventUser => {
      if (eventUser) {
        await eventUser.removeUser(req.user.id)
          .then(result => {
            res.sendStatus(204)
          })
      } else {
        res.sendStatus(404);
      }
    })
    .catch(error => {
      res.status(412).json({msg: error.message});
    })
  })
};
