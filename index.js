const express = require('express')
const fs = require('fs')
const url = require('url')

const app = express()

app.post('/connectmelog', (req, res) => {

  var body = '';
  filePath = __dirname + '/connectmelogs/connectmelog.txt';
  req.on('data', function(data) {
      body += data;
  });

  req.on('end', function () {
      fs.appendFile(filePath, new Date().toUTCString() +  " :: " + body + '\n', function() {
        res.send('Logged it');
      });
  });

})

app.use(express.static('public'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
