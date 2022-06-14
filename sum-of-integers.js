 
import fs from "fs"
 
 fs.readFile(`${process.cwd()}/data/integers.txt`,"utf8",(err,data)=>{
     
    console.log(data.split(",").reduce((a, b) => parseInt(a) + parseInt(b), 0))
});
 
