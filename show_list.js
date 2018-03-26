module.exports.async= (async)=>{
  
 
exports.list=function(req,res){
  console.log('hello')
  var  response = {
    FIRST_NAME:req.query.FIRST_NAME,
    LAST_NAME:req.query.LAST_NAME,
    AGE:req.query.AGE,
    EMAIL:req.query.EMAIL,
    PASS:req.query.PASS
 };
 async.waterfall([
  function(callback){
      connection.query('SELECT * FROM CUSTOMER ', function (err, result) {
          if (err) throw err;
          
          callback(null,result)
      })
  }
],
  function(err,result){
      if(err){console.log(err)}
      else{console.log(result);
      res.end()
     console.log('All Rows Printed')} 
  }
); 
}
}