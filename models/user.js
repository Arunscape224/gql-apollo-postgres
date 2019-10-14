export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
       type: DataTypes.STRING,
       unique: true,
       validate: {
         isAlphanumeric: {
           args: true,
           msg: 'The username must only contain letters and numbers'
         },
         len: {
           args: [4, 30],
           msg: 'The username must be between 4 to 30 characters'
         }
       }
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: {
            arg: true,
            msg: "Invalid email address"
          }
        }
     },
    password: DataTypes.STRING,
    instrument: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: {
          arg: true,
          msg: "Instrument must be a word"
        },
        notEmpty: {
          arg: true,
          msg: "Please enter an instrument"
        }
      }
    }
  })

  User.associate = (models) => {
    User.belongsToMany(models.Band, {
        through: 'member',
        foreignKey: {
          name:  'userId',
          field: 'user_id'
        }
    })

    User.belongsToMany(models.Channel, {
      through: 'channel_member',
      foreignKey: {
        name:  'userId',
        field: 'user_id'
      }
  })
  }

  return User;
}