require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const passport = require("passport");
var fs = require("fs");



const app = express();


// ***************** use middleware *****************

app.use(express.json());
app.use(cors())
app.use(cookieParser())


// Passport middleware
app.use(passport.initialize());

// Passport config
require("./utils/passport")(passport);

// *************** Routes **********************

app.use('/api', require('./routes/imageUploadRoute'))
app.use('/api', require('./routes/workRoute'))
app.use('/api', require('./routes/blogRoute'))
app.use('/api/users', require('./routes/userRoute'))


// *************** connect mongodb **********************

const URI = process.env.MONGO_URI;


mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log("connected to mongo db");
  
})



const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`server is running on ${PORT}`)
})