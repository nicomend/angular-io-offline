'use strict';
let express = require('express');
let app = express();
let PORT = 9999;

app.use(express.static('www'));

app.listen(PORT, () => {
  console.log(`running angular.io docs on http://localhost:${PORT}`);
  console.log(`built by Nico :)`);
});
