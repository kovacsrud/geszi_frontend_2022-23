const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/api/telepulesek',require('./routes/telepulesRoutes'));
app.use('/api/megyek',require('./routes/megyeRoutes'));
app.use('/api/telepulestipus',require('./routes/jogallasRoutes'));

app.listen(8000,()=>{console.log("Running")});

app.get('/',(req,res)=>{
    res.send("Magyarország városai");
});