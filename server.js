const express = require('express');
const mongoose = require('mongoose');
const {MONGO_URI} = require('./config.js');

//routes
const postsRoutes = require('./routes/api/posts');

const app = express();

 //connect to MONGODB
mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


 .then(()=> console.log('MONGODB connected!'))
 .catch(err => console.log('err'));
 //user routes
 app.use('./api/posts', postsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`server run port ${PORT}`));