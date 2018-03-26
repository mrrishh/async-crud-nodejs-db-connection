module.exports.async= (async)=>{

    exports.delete=function(req,res){
        console.log('hello')
        const EMAIL=req.query.EMAIL;

        
        async.waterfall([
            function(callback){
                connection.query('DELETE FROM CUSTOMER WHERE EMAIL = ? ',[EMAIL], function (err, result) {
                    if (err) throw err;
                    
                    callback(null,result)
                })
            }
        ],
            function(err,result)
            {
                if(err) throw err;
                else{console.log('Delete Successfully!!' +result);
            res.end();}
            }   
            )
          
       
    }
}