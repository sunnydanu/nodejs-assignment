 
import fs from "fs"
const filename =  process.argv[2] || "newFileCreated.txt"
const content =  process.argv[3] || "Dobby is free !";
 fs.writeFile(`${process.cwd()}/${filename}`,content,()=>{
     console.log("The file is saved  : ",filename,)
     console.log(content)
     
 });
 console.log("* You can pass filename and content as arg: node .\writing-on-txt.js  myFile.txt someContent")
