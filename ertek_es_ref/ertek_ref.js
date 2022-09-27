let a=12;
let b=a;

b=24;

console.log(a,b);

let s1=[1,2,3,4,5];
let s2=s1;


s2[0]=233;

let s3=[233,2,3,4,5];

console.log(s1,s2);
//Mi történt?

//két különböző működésű memóriát használ a program

//Stack memória

b=12;

if(a==b){
    console.log("Megegyeznek");
} else {
    console.log("Nem egyeznek meg");
}

if(s1==s2){
    console.log("Megegyeznek");
} else {
    console.log("Nem egyeznek meg");
}