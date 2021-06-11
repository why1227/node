const fs = require('fs');
const path = require('path');

console.log(path.join(__dirname, '01-hello_world.js'));
fs.readFile(path.join(__dirname, '01-hello_world.js'), 'utf8', (err, doc) => {
    console.log(err);
    // console.log(doc);
})