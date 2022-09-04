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



/* Modifico los registros */
setTimeout(function(){
    User.update({ firstName: "Sebastian Daniel" }, {
        where: {
        lastName: 'Castro'
        }
    })
    User.update({ lastName: "Origlia" }, {
        where: {
        lastName: 'Origla'
        }
    })
    User.update({ lastName: "De Ribas" }, {
        where: {
        lastName: 'Ribas'
        }
 
    }).then(() => {
        console.log("Actualización de registros correcto");
    });

}, 4000);

/* Creo el registro*/ 
User.bulkCreate([
    { firstName: "Sebastian", lastName: "Castro" },
    { firstName: "Pablo", lastName: "Origla" },
    { firstName: "Leandro", lastName: "Ribas" },
  ]).then(() => console.log("Inserción de varios usuarios ok"));


