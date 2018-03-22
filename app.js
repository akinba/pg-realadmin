const seq = require('sequelize');
const db = new seq('postgres://postgres:pi@akinba.com:5432/gadron');

// db
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });


  const  tables = db.define('tables', {
  	table_catalog: seq.STRING,
  	table_schema: seq.STRING,
  	table_name: {type: seq.STRING, primaryKey:true},
  	is_insertable_into: seq.ENUM('YES','NO')
  }, {
  	schema: 'information_schema',
  	freezeTableName: true,
  	timestamps: false
  });


  tables.findAll().then(data=> {console.log(data)});

