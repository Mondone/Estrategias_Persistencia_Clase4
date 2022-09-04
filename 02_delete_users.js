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


/* Inserción y actualización de un registro.*/

setTimeout(function(){
    //elimina usuario con id =2
    User.destroy({
        where: {
        lastName: 'Vitola'
        }
    }).then(() => {
        console.log("Elimine Registro");
    });

}, 8000);

 
/* crea usuario*/
sequelize.sync()
  .then(() => User.create({
    firstName: 'Cristian',
    lastName: 'Vitola'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });



