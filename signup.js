module.exports.async= (async)=>{

    exports.add=function(req,res){
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
            connection.query('SELECT EMAIL FROM CUSTOMER WHERE EMAIL = ?',[response.EMAIL], function (err, result) {
                if (err) throw err;
                
                callback(null,result)
            })
        },
        function(result,callback)
        {
            if(result.length!=0){
                
                console.log("Email Already Exist !!!");
                res.end()
            }
            else{
            callback(null)}
        },
        function(callback)
        {
            var query = `INSERT INTO CUSTOMER values("${response.FIRST_NAME}",
            "${response.LAST_NAME}",
            "${response.AGE}",
            "${response.EMAIL}",
            "${response.PASS}")`;
            let email=`${response.EMAIL}`
            connection.query( query ,function (err, email) {
              if (err) throw err;
              
              
              console.log(`1 Row Added ${email}`);
          })
          callback(null,email)
        },
        function(email,callback)
        {
            connection.query('select * from CUSTOMER where EMAIL = ?',[email],function (err, result) {
                if (err) throw err;
                
                callback(null,result)
            }) 
        }
      ],
      function(err,result){
        if(err){console.log(err)}
        else{console.log(result);res.end()} 
    })
}
}