const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

    if(JSON.parse(body)[0] === undefined) {
      callback('Breed info not found');
    } else {
      callback(null, JSON.parse(body)[0][`description`]);
    }
  });
}

module.exports = { fetchBreedDescription };