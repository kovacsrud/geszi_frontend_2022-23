const asyncHandler=require('express-async-handler');
const fs=require('fs');
const {dirname}=require('path');
const appDir=dirname(require.main.filename);
const Image=require('../models/Image');


const fileUpload=asyncHandler( async (req,res)=>{

    console.log(req.user.username);
    //console.log(req.files)
    if(!req.files){
        console.log("Nincs req files!");
    }

    if(req.files){
        const path=appDir+"/files/";
        if(!fs.existsSync(path+req.user.username)){
            fs.mkdir(path+req.user.username,err=>(console.log(err)));
            
        }
             

        for(prop in req.files){
            
            console.log(req.files[prop].name);
            console.log(appDir);
            await fs.writeFile(path+req.user.username+'/'+req.files[prop].name,req.files[prop].data,err=>{console.log(err)});
            try {
                const ujImage=await Image.create({
                    userid:req.user._id,
                    imageName:req.files[prop].name
                });
            } catch (error) {
                throw new Error("Lett már "+req.files[prop].name+" feltöltve!");
            }
        }
    }

    
    res.json({message:"Feltöltés kész!"});
});

module.exports={fileUpload};