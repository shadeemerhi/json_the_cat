const request = require('request');

const breed = process.argv.slice(2).join(' ');

// DYNAMIC API ENDPOINT
let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {

  if(error) {
    console.error(error);
    process.exit();
  }

  const data = JSON.parse(body);
  if(Object.keys(data).length === 0) {
    console.log('Breed not found. Please try again');
    process.exit();
  }
  
  const desc = data[0].description;
  console.log(desc);
});