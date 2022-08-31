const express = require('express'); 
const router = express.Router(); 
// posts Model 
const Posts = require('../../ models/Posts'); 
// @routes POST api/posts 
// @desc Create An post 
router.post('/', (req, res) => { 
    res.send(`Let's create post!`); 
}); 
     module.exports = router;