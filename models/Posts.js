const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
title:{
    type: String,
    require:true,
},
body:{
    type:string,
    require:true,
},
date: {
    type:Date,
    default: Date.now,
}
});
module.exports - mongoose.model ('posts',PostSchema);