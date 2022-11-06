const express=require('express');
const cors=require('cors');

const app=express();

app.use(cors());
app.use(express.json());

let autok=[
    {
      "id": 1,
      "marka": "Skoda",
      "tipus": "Fabia",
      "rendszam": "REK-121",
      "kor": 19
    },
    {
      "id": 2,
      "marka": "Suzuki",
      "tipus": "Swift",
      "rendszam": "KON-321",
      "kor": 11
    },
    {
      "id": 3,
      "marka": "Opel",
      "tipus": "Astra",
      "rendszam": "LET-996",
      "kor": 8
    },
    {
      "marka": "Dacia",
      "tipus": "Sandero",
      "rendszam": "GLK-556",
      "kor": 8,
      "id": 4
    },
    {
      "marka": "Dacia",
      "tipus": "Logan",
      "rendszam": "KLK-556",
      "kor": 6,
      "id": 5
    }
  ]




app.listen(8000,()=>{console.log("Fut a szerver!")});

app.get('/',(req,res)=>{
    res.send("Üdvözli a mini backend!");
});

app.get('/autok',(req,res)=>{
    res.json(autok);
});

app.post('/autok',(req,res)=>{
    const ujauto=req.body;
    console.log(ujauto);
    autok.push(ujauto);

});