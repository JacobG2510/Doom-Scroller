const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const axios = require('axios');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(require("cors")())
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));





if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


app.post("/zillow",async(req,res)=>{
  const {address,minPrice,maxPrice}=req.body

  const options = {
    method: 'GET',
    url: 'https://zillow56.p.rapidapi.com/search',
    params: {
      location: address,
      price_min:minPrice,
      price_max:maxPrice
    },
    headers: {
      'X-RapidAPI-Key': '50c9640c4cmsha715b76c75b31a9p1c854bjsn08b9271cd4da',
      'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data)
    res.json(response.data)
  } catch (error) {
   res.json(error)
  }

})

// Create a new instance of an Apollo server with the GraphQL schema
/*
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer();*/
  app.listen(3001,()=>{
    console.log("server listen at port 3001")
  })
