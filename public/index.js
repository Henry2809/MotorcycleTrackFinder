const express = require('express'); // import express
const app = express(); // create an app with express
const port = 5502;
app.listen(port, '127.0.0.1',  () =>  console.log(`Server is running on http://127.0.0.1:${port}`));


app.use(express.static('public'));