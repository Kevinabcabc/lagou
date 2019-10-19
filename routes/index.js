const {promisify} = require('util');
const fs = require('fs');
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const ejs = require('ejs');
const path = require('path');
const conf = require('../config');
const qs = require('querystring');


const tem = path.join(__dirname,'../tem/temp.html');
// console.log(tem);
const temp = fs.readFileSync(tem).toString();

// console.log(temp);


module.exports = async (req,res,fullPath)=>{

    try{

        const stats = await stat(fullPath);
        if(stats.isFile()){

            res.statusCode = 200;
            fs.createReadStream(fullPath).pipe(res);
            // console.log(fullPath);
            
        }else if(stats.isDirectory){

            res.statusCode = 200;
            let files = await readdir(fullPath);
            // console.log(files);
            
            const currentPath = path.relative(conf.root,fullPath);
            console.log(currentPath);
            
            const result = ejs.render(temp,{
                root:currentPath,
                start: currentPath === '' ? '' : `/${currentPath}`,
                files
            });

            res.end(result);

        }

    }catch(error){
        // console.log(error);
    }



}