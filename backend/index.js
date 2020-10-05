const express = require('express');
const database = require('./database');
const router = require('./router');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);

database().then(() => {
    app.listen(3000, () => console.log('server listen on port ${port}'));
}).catch(() => {
    console.error('no database server');
});
