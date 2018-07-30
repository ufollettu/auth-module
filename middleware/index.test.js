const authCan = require('./index').authCan;

const faker = require('faker');
const utentiPermessi = require('../models').utentiPermessi

/**
 * Generate an object which container attributes needed
 * to successfully create a user instance.
 * 
 * @param  {Object} props Properties to use for the user.
 * 
 * @return {Object}       An object to build the user from.
 */
const data = async (props = {}) => {
  const defaultProps = {
    UP_U_ID: faker.random.number(),
    UP_P_ID: faker.random.number()
  };
  return Object.assign({}, defaultProps, props);
};

// beforeEach(() => {
//   const Sequelize = require('sequelize');
//   const sequelize = new Sequelize('auth_module_test', 'pasquale', 'radiohead', {
//     host: 'localhost',
//     dialect: 'mysql',
//     operatorsAliases: false,

//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     },

//   });

//   sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });
// });

describe('Test the authCan() method', () => {
  test('userId = 1 and permissionId = 1 should return', () => {
    expect(() => { authCan(1, 1) }).toThrow('no input fields')
  });
});
