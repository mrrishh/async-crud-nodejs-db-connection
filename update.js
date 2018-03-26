module.exports.async= (async)=>{

    exports.update=function(req,res){
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
            connection.query('UPDATE CUSTOMER SET ? WHERE EMAIL = ? ',[response, response.EMAIL], function (err, result) {
                if (err) throw err;
                
                callback(null,result)
            })
        },
        function(result,callback)
        {
            connection.query('SELECT * FROM CUSTOMER WHERE EMAIL = ? ',[response.EMAIL], function (err, result) {
                if (err) throw err;
                
                
            })
            callback(null,result)
        }
    ],
        function(err,result)
        {
            if(err) throw err;
            else{console.log('Update Successfully!!' +result);
        res.end();}
        }   
        )
    }
}
