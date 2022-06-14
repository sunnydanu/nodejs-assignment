 
import fs from "fs"
const data =  process.argv[2] || "Dobby is free !";
 fs.writeFile(`${process.cwd()}/new-file.txt`,data,()=>{
     console.log("File created ")
 });
 
