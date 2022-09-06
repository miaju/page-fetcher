const input = process.argv.slice(2);
const URL = input[0];
const FILE = input[1];

const fs = require('fs');
const request = require("request");

const fetcher = function() {

  request(URL, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    fs.writeFile(FILE, body, () => {
      console.log(`Downloaded and saved ${body.length} bytes to ${FILE}`);
    });
  });

};

fetcher();
