import bcrypt from 'bcrypt'

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
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [5, 50],
          msg: 'The password needs to be between 5 and 50 characters long'
        }
      }
    }
  }, 
  {
    hooks: {
      afterValidate: async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 12)
        user.password = hashedPassword
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