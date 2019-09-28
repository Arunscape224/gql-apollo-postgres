export default (sequelize, DataTypes) => {
    const Channel = sequelize.define('channel', {
      subject: DataTypes.STRING
    });
  
    Channel.associate = (models) => {
        Channel.belongsToMany(models.User, {
          through: 'member',
          foreignKey: 'userId'
      })
        Channel.belongsTo(models.User, {
          foreignKey: 'owner'
    })
    };
  
    return Channel;
  };