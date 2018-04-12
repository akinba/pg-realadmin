const seq = require('sequelize');
const db = new seq('postgres://postgres:pi@akinba.com:5432/gadron');
//const db = new seq('postgres://postgres:ntc123*@192.168.2.188:5432/musgis');
const express = require('express')
const app = express()
const bodyparser = require("body-parser");

const port = process.env.PORT||3000;

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.set("view engine", "ejs");

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
    table_type: seq.STRING,
  	is_insertable_into: seq.ENUM('YES','NO')
  }, {
  	schema: 'information_schema',
  	freezeTableName: true,
  	timestamps: false
  });



app.get('/', (req, res) => {
  tables.findAll({where : {table_catalog:'gadron'}}).then(data=> {
    // console.log(data);
    res.render('index', {data: data}); 
  });

  });

  


app.listen(port,  ()=> {
  console.log(`App listening on port ${port}`);
  });
