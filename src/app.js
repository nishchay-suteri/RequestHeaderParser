const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const requestHeaderParserRouter = require('./routes/requestHeaderParser');

dotenv.config();
const app = express();

app.use(cors({optionsSuccessStatus: 200}));
app.use('/api/whoami', requestHeaderParserRouter);

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server is listning on port ${port}`));