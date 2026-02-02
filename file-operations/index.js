const fs=require("fs");

fs.writeFile("message2.txt","hello from node.js",(err)=>{
if (err) throw err;
console.log("The file is saved!");
});

fs.readFile("./message.txt","utf-8",(err,data)=>{
    if (err) throw err;
    console.log(data);
})