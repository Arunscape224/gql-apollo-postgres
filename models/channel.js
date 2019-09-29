export default (sequelize, DataTypes) => {
    const Channel = sequelize.define('channel', {
      name: DataTypes.STRING
    })
    Channel.associate = (models) => {
        //  one channel belongs to many bands
        Channel.belongsTo(models.Band, {
          foreignKey: {
            name: 'bandId',
            field: 'band_id'  
          }
      })
      // Depening on how many users are in a band, there many be N users within a band
        Channel.belongsToMany(models.User, {
          through: 'channel_member',
          foreignKey: {
            name: 'channelId',
            field: 'channel_id' 
          }
      })
    }
  
    return Channel
  }