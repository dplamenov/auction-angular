const express = require('express');
const mongoose = require('mongoose');
const cookie = require('cookie-parser');
const router = require('./router');

const app = express();

app.use(express.json());
// app.use(cookie());

app.use('/api', router);

mongoose.connect('mongodb://localhost:27017/auction-angular', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(3000);