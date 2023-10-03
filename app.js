const express = require('express');
const router = require('./src/routes/api');
const app = new express();
const bodyParser = require('body-parser');

///// Middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const cors = require('cors');
const mongoose = require('mongoose');

let URL = "mongodb+srv://<username>:<password>@cluster0.fvxmrli.mongodb.net/Creaftshop?retryWrites=true&w=majority";
let option = {
    user:'mdakkas',
    pass:'mdakks234',
    autoIndex:true
}
mongoose.connect(URL,option).then((res)=>{
    console.log('database connected');
}).catch((err)=>{
    console.log(err);
})

/////security middleware 
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(bodyParser.json());
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
})
app.use(limiter);


app.use('/api', router);


////undefined route
app.use('*', (req, res) => {
    res.status(404).json({
        status: 'fail',
        data: 'route not found'
    })
})

module.exports=app;