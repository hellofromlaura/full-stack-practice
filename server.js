const express = require('express');

const app = express();
app.use(express.static('static')); //.use() mounts the middlewear
                                   //express.static, generates a middlewear
                                   //function that responds to a request tries
                                   //to match the request URL with a file.
                                   //if the file exists, it returns the contents
                                   //of the file

app.listen(3000, function() {
  console.log('App started on port 300');
});
