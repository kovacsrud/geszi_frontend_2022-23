const express=require('express');
const sqlite=require('sqlite3');
const cors=require('cors');
const db=new sqlite.Database('./vizes.db');

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(8000,()=>{console.log('Running')});

app.get('/',(req,res)=>{
    res.json({dbname:"Vizes adatbázis"});
});

app.get('/igazgatosagok',(req,res)=>{
    db.all('SELECT * FROM igazgatosag',(err,rows)=>{
        if(err){
            res.json(err);
        }else {
            res.json(rows);
        }
    });
});

app.get('/keszultseg',(req,res)=>{
    db.all('SELECT varos,ksz1,ksz2,ksz3 from vizmerce',(err,rows)=>{
        if(err){
            res.json(err);
        } else {
            res.json(rows);
        }

    });
});

app.get('/keszultseg/varos/:varos',(req,res)=>{
    const varos=req.params.varos;
    db.all('SELECT varos,ksz1,ksz2,ksz3 from vizmerce where varos=?'
    ,[varos],(err,rows)=>{
        if(err){
            res.json(err);
        } else {
            if(rows.length>0){
            res.json(rows);
            } else {
                res.json({message:"Nincs ilyen város!"});
            }
        }

    });
});
