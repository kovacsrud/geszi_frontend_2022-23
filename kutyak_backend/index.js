const express=require('express');
const app=express();
const sqlite3=require('sqlite3');
const db=new sqlite3.Database('./kutyak.db');
const cors=require('cors');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.listen(8000,()=>{console.log("Fut a szerver")});

app.get('/',(req,res)=>{
    res.send("Kutya adatbázis");
});

app.get('/kutyafajtak',(req,res)=>{
    db.all("select * from kutyafajtak",(err,rows)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200).json(rows);
        }
    })
});

app.post('/kutyafajtak',(req,res)=>{
    console.log(req.body);
    db.run("insert into kutyafajtak (nev,eredetinev) values(?,?)"
    ,[req.body.nev,req.body.eredetinev],(err)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200).json({message:"Adat beszúrva!"})
        }
    })
})

app.patch('/kutyafajtak',(req,res)=>{
    const{id,nev,eredetinev}=req.body;
    console.log(req.body);
    db.run("UPDATE kutyafajtak SET nev=?,eredetinev=? WHERE id=?"
    ,[nev,eredetinev,id]
    ,(err)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200).json({message:"Adat módosítva!"})
        }
    });
});

app.delete('/kutyafajtak',(req,res)=>{
   const{id}=req.body;
   db.run("DELETE FROM kutyafajtak WHERE id=?"
   ,[id]
   ,(err)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200).json({message:"Adat törölve!"})
        }

   }); 
});