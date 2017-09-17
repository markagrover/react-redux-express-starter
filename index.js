const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
  res.send({
    data: 'This is some data'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log('Listening on PORT : ', PORT);
});
