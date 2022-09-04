const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



class User extends Sequelize.Model {}
User.init({
  firstName: Sequelize.STRING,
  lastName:Sequelize.STRING
}, { sequelize, modelName: 'users' });


/* Inserción y actualización de varios registro.*/

setTimeout(function(){
/* actualizo el regristro*/
    User.update({ firstName: "Ezequiel Victor" }, {
        where: {
        lastName: 'Mondone'
        }
    }).then(() => {
        console.log("Done");
    });

}, 2000);

/* Creo el registro*/ 
sequelize.sync()
  .then(() => User.create({
      firstName: 'Ezequiel',
      lastName: 'Mondone'
  }))
  .then(jane => {
      console.log(jane.toJSON());
  });



