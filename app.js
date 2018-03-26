const express = require('express');
const app = express();
const bodyParser= require('body-parser')
const async = require('async');
const mysql = require('mysql');




app.set('port',process.env.PORT ||5000)
const server=app.listen(app.get('port'), function(err,res){
    if(err) throw err;
  console.log('listen to port'+ app.get('port'))
})

let connect =require('./dbconnection')(mysql,async);
let list =   require('./show_list');list.async(async);
let login =  require('./login');login.async(async);
let signup = require('./signup');signup.async(async);
let update = require('./update');update.async(async);
let delet = require('./delete');delet.async(async);


app.use( bodyParser.json() );       // to support JSON-encoded bodies
 

app.get('/list', list.list);
app.get('/login',login.login);
app.post('/signup',signup.add);
app.put('/login/update',update.update);
app.delete('/login/delete',delet.delete);