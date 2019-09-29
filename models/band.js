export default (sequelize, DataTypes) => {
    const Band = sequelize.define('band', {
      name: {
        type: DataTypes.STRING,
        unique: true
      }
    })
  
    Band.associate = (models) => {
      Band.belongsToMany(models.User, {
          through: 'member',
          foreignKey: {
              name: 'bandId',
              field: 'band_id'
          }
      })
      Band.belongsTo(models.User, {
        foreignKey: 'owner'
    })
    }
    return Band
  }