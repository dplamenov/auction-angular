const express = require('express');
const config = require('./config');
const database = require('./database');
const router = require('./router');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);

database().then(() => {
    app.listen(config.port, () => console.log(`server listen on port ${config.port}`));
}).catch(() => {
    console.error('no database server');
});
