var  http=require('http')
var fs=require('fs')
http.createServer(
    function(req,res){
        fs.readFile('example.txt',function(err,data){
            res.write(data)
            res.end()
        })
    }
).listen(8085)