const http = require("http");

var server= http.createServer((req,res)=>{
    res.write("GET OUTTA HERE U LIL Fuuuu!!!");
    res.end();
});

server.listen(5000); 