const { fetchBreedDescription } = require('./breedFetcher');

const breed = process.argv.slice(2).join(' ');

fetchBreedDescription(breed, (e, description) => {
  if (e) {
    console.log("Error fetch details:", e);
  } else {
    console.log('Here is the description:', description);
  }
});