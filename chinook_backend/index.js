const express=require('express');
const cors=require('cors');
const sqlite3=require('sqlite3');

const app=express();
const db=new sqlite3.Database('./chinook.db');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(8000,()=>{console.log("Running")});

app.get('/',(req,res)=>{
    res.send("Chinook adatbázis");
})

app.get('/artists',(req,res)=>{
    db.all("select * from artists"
    ,(error,rows)=>{
        if(error){
            res.status(400).json(error);
        }
        res.status(200).json(rows);

    });
});

app.get('/genres',(req,res)=>{
    db.all("select * from genres"
    ,(error,rows)=>{
        if(error){
            res.status(400).json(error);
        }
        res.status(200).json(rows);

    });

});

app.post('/genres',(req,res)=>{
    const name=req.body.name;
    db.run("insert into genres (Name) values(?)"
    ,[name]
    ,function (error){
        if(error){
            res.status(400).json(error.message);
        }
        console.log(this.lastID);
      
        res.status(201).json({message:"Beszúrás rendben "+this.lastID});
        

    });
});

app.post('/artist',(req,res)=>{
    const name=req.body.name;
    db.run("insert into artists (Name) values(?)"
    ,[name]
    ,function (error){
        if(error){
            res.status(400).json(error.message);
        }
        console.log(this.lastID);
      
        res.status(201).json({message:"Beszúrás rendben "+this.lastID});
        

    });

})

app.post('/album',(req,res)=>{
    const{title,artistId}=req.body;
    db.run("insert into albums (Title,ArtistId) values(?,?)"
    ,[title,artistId]
    ,function (error){
        if(error){
            res.status(400).json(error.message);
        }
        console.log(this.lastID);
      
        res.status(201).json({message:"Beszúrás rendben "+this.lastID});
        

    });


})

app.delete('/genres/:id',(req,res)=>{
    const id=req.params.id;
    db.run("delete from genres where GenreId=?"
    ,[id]
    ,function (error){
        
        if(error){
            res.status(404).json(error.message);
        }  
        console.log(this.changes);
        if(this.changes==1){
            res.status(204).send(`Törölve`);
        } else {
            res.status(200).json({message:"Nincs ilyen Id"});
        }

    });

});

app.get('/artist-albums/:artist',(req,res)=>{
    const artist=req.params.artist;

    db.all("select Title from albums,artists where albums.ArtistId=artists.ArtistId and artists.Name=?"
    ,[artist]
    ,(error,rows)=>{
        if(error){
            res.status(400).json(error.message);
        }
        if(rows.length>0){
            res.status(200).json(rows);     
        } else {
            res.status(200).json({message:"Az előadónak nincs albuma"});     
        }
                                                    
        
    });

});

app.get('/artistcount',(req,res)=>{
    db.all("select count(*) as db,name from artists,albums where artists.ArtistId=albums.ArtistId group by name"
    
    ,(error,rows)=>{
        if(error){
            res.status(400).json(error.message);
        }
        if(rows.length>0){
            res.status(200).json(rows);     
        } else {
            res.status(200).json({message:"Nincs ilyen!"});     
        }
                                                   
        
    });


});

app.get('/artist-albums-tracks/artist/:artist',(req,res)=>{
    const artist=req.params.artist;
    db.all(`select artists.Name,albums.Title as 'album',tracks.Name as 'track',genres.Name as 'genre'
    from artists,albums,tracks,genres,media_types
    where artists.ArtistId=albums.ArtistId
    and
    albums.AlbumId=tracks.AlbumId
    and
    tracks.GenreId=genres.GenreId
    and
    tracks.MediaTypeId=media_types.MediaTypeId
    and artists.Name=?`
    ,[artist]
    ,(error,rows)=>{
        if(error){
            res.status(400).json("Hiba"+error.message);
        }
        if(rows.length>0){
            
            res.status(200).json(rows);     
        } else {
            res.status(200).json({message:"Nincs ilyen!"});     
        }
                                                   
        
    });

})
