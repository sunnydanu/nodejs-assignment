 
import fs from "fs"
const search =  process.argv[2] || "scream";
 fs.readFile(`${process.cwd()}/data/demo.txt`,"utf8",(err,data)=>{
     
    console.log(data.split(" ").filter(word=>word == search).length)
});
 
