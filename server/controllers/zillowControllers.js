const axios = require('axios');
module.exports={
    zillowAPI:async(req,res)=>{
        const {address,minPrice,maxPrice}=req.body
        console.log(req.body)
      
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
            console.log(error)
         res.json(error)
        }
      
      }
}