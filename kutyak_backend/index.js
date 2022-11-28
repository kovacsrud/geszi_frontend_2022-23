const express=require('express');
const app=express();
const sqlite3=require('sqlite3');
const db=new sqlite3.Database('./kutyak.db');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

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