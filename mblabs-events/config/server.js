import bodyParser from 'body-parser'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../swagger.json'


module.exports = app => {
    app.set("json spaces", 4);
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json());
    app.use(app.auth.initialize());
    app.models.index.sequelize.sync().then(function () {
      console.log("Database Configured");
    });
    app.use('/events-api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.listen(process.env.PORT || 8080, () => {
      console.log('Example app listening on port 3000!')
    })


  };
