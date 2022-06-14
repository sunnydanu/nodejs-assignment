 
import fs from "fs"
const fileName =  process.argv[2] || "demo.txt";
 fs.readFile(`${process.cwd()}/data/${fileName}`,"utf8",(err,data)=>{
    console.log(data.split(" "))
});
 
