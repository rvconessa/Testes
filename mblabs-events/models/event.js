module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    eventStart: DataTypes.DATE,
    eventEnd: DataTypes.DATE,
    place: DataTypes.STRING,
    city: DataTypes.STRING,
  }, {})
  Event.associate = function(models) {
    Event.belongsToMany(models.User, { through: 'eventUser' })
  };
  return Event
}
