const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

app.post('/contact-client', cors(corsOptions), (req, res) => {
	console.log(req)
});

app.listen(port, () => {});
