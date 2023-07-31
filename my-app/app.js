const axios = require('axios');

require('dotenv').config();

const apiKey = 

const client = create({
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}` // Use the API key to authenticate the request
  }
});

const data = {
  
  prompt: 'Once upon a time',
  max_tokens: 10, 
  temperature: 0.5 
};


client.post('https://api.openai.com/v1/engines/davinci/completions', data)
  .then(response => {
    console.log(response.data.choices[0].text);
  })
  
  .catch(error => {
    console.error(error);
  });
