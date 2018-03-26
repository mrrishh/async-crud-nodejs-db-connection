module.exports.async= (async)=>{
  
 
    exports.login=function(req,res){
      console.log('hello')
      var  response = {
       
        EMAIL:req.query.EMAIL,
        PASS:req.query.PASS
     };
     async.waterfall([
      function(callback){
        connection.query('SELECT * FROM CUSTOMER WHERE EMAIL = ?',[response.EMAIL], function (err, result) {
            if (err) throw err;
            
            callback(null,result)
        })
    },
    function(result,callback)
    {
        if(result.length>0)
        {
            console.log(`${req.query.PASS}`);
            if(result[0].PASS==response.PASS)
            {
            console.log("Login Successfully !!!");
            callback(null,result)
            }
            else{
            console.log('Email and Password does not match!!')
            }
            res.end();
         }
        else{
            console.log('Email  does not match!!')
            
        }
    }
     ],
     function(err,result){
        if(err){console.log(err)}
       else{ console.log(result);res.end();} 
     });  
    }
    }