export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
       type: DataTypes.STRING,
       unique: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true
     },
    password: DataTypes.STRING
  });

  User.associate = (models) => {
    User.belongsToMany(models.Channel, {
        through: 'member',
        foreignKey: 'channelId'
    })
  };

  return User;
};