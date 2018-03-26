module.exports= (mysql,async)=>{
    //console.log(req_type);
        global.connection= mysql.createConnection({
        host     : 'localhost', 
        user     : 'root', 
        password : 'root', 
        database : 'testdb' 
      })
      connection.connect(function(err) {
        if (err) throw err
        console.log('You are now connected...')
      });
    
    }
    
   