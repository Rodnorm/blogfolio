const express = require('express');
const path = require('path');
 
const app = express();
 
app.use(express.static(__dirname + '/dist/blogfolio'));
 
app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname + '/dist/blogfolio/index.html'));
});

app.listen(process.env.PORT || 8080);