module.exports  = {
  "development": {
    "username": "postgres",
    "password": null,
    "database": "mblabs_events",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": null,
    "database": "mblabs_events",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.SQL_USER,
    "password": process.env.SQL_PASSWORD,
    "database": process.env.SQL_DATABASE,
    "host": `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
    "dialect": "postgres",
    "dialectOptions": {
    	"socketPath": `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`
  	}
  }
}

