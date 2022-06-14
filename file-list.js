import fs from "fs"

fs.readdirSync(process.cwd()).forEach(file => {
  fs.lstat(file,(err,ctx)=>{
    let fType = (ctx.isFile() && "FILE") || "DIR"
      console.log(`${fType}:${file}`)
  })
});