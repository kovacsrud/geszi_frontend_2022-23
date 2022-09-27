let s1=[1,2,3,4,5];
let s2=[6,7,8,9,10];
//spread operátor =>...

let s3=[...s1,...s2];

console.log(s3);

s3=[...s3,112];

console.log(s3);

let ember={
    vezeteknev:"Nagy",
    keresztnev:"Géza"
}

let emberAdatok={
    szuletesiEv:1987,
    anyjaNeve:"Kovács Éva"
}

let dolgozo={...ember,...emberAdatok};

dolgozo={...dolgozo,fizetes:120000};

console.log(dolgozo);