const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();
// const {Random, mock} = require('mockjs');

// const mongoose = require('mongoose');

// const User = mongoose.model('user', new mongoose.Schema({
//     name: String,
//     age: Number
//   }));


app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');
app.engine('html',ejs.renderFile);

app.use('/public',express.static(path.join(__dirname,'static')));

app.use('/api',require('./routers/ajaxRouter'));

app.use('/',require('./routers/htmlRouter'));




app.listen(3000, (error)=>{
    if(error) throw error;
    console.log('服务启动成功: http://localhost:3000');
  });