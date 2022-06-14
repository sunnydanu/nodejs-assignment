import http from "http";

http.createServer((req,res)=>{
res.write("Success! I am listing on port: 3000");
res.end();
}).listen(3000)

