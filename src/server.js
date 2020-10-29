const express = require('express');
const routes = require('./routes');
const dotenv = require('dotenv');

const app = express();
dotenv.config();
app.use(express.json());
app.use(routes);  

app.listen(process.env.PORT || 3333);