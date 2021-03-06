import Sequelize from 'sequelize'
const sequelize = new Sequelize('audionekt', 'postgres', 'postgres', {
    dialect: 'postgres',
    define: {
      underscored: true
    }
})

const models = {
    User: sequelize.import('./user'),
    Channel: sequelize.import('./channel'),
    Band: sequelize.import('./band'),
    Message: sequelize.import('./message'),
};


Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  } 
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;