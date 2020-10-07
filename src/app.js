const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const requestHeaderParserRouter = require('./routes/requestHeaderParser');

dotenv.config();
const app = express();

app.use(cors({optionsSuccessStatus: 200}));
app.use('/api/whoami', requestHeaderParserRouter);

app.get('/',(req,res)=>{
    res.send('Request Header Parser')
})

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`Server is listning on port ${port}`));