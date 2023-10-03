const express = require('express');

const routes = require('./routes');



const path = require('path');



const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(require("cors")())


app.use(express.urlencoded({ extended: false }));
app.use(express.json());





if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}


app.use(routes);


  app.listen(PORT,()=>{
    console.log("server listen at port 3001")
  })
