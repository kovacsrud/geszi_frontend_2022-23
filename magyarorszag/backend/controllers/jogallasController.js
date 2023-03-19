const sqlite3=require('sqlite3');
const db=new sqlite3.Database('./magyar_telepulesek.db');

const jogallaslista=(req,res)=>{
    db.all("SELECT jogallas from jogallas",(err,rows)=>{
        if(err){
            res.status(400).json(err);
        } else {
            res.status(200).json(rows);
        }
    });
}

const jogallastelepulesei=(req,res)=>{
    db.all(`SELECT
    t.nev as telepulesnev,
    AVG(t.lat) as lat,
    AVG(t.long) as lng,
    t.kshkod,
    t.terulet,
    t.nepesseg,
    t.lakasok,
    m.nev as megyenev,
    j.jogallas
    from telepulesek as t
    INNER JOIN jogallas as j ON j.suly=t.jogallas
    INNER JOIN megyek as m ON m.kod=t.megyekod
    WHERE j.jogallas=?
    GROUP BY t.nev`
    ,[req.params.jogallas]
    ,(err,rows)=>{
        if(err){
            res.status(400).json(err);
        } else {
            if(rows.length>0){
                
                res.status(200).json(rows);
            } else {
                res.status(400).json({message:"Nincs jogállás!"});
            }
            
        }

    })
}

module.exports={
    jogallaslista,
    jogallastelepulesei
}