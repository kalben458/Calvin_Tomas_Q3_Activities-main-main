//1
let a = 0;
let b = -1;
let c = 4;

let sort;
if(a <= b && a <= c){
    if(b <= c){
    sort = [a,b,c];
}else{
    sort = [a,c,b];
}

}else if (b <= a && b <= c){
    if(a <= c){
        sort = [b, a, c];
    }else{
        sort = [b, c, a];
}

}else{
if(a <= b){
    sort = [c, a, b]
}else{
    sort = [c, b, a];
}

}
console.log(sort);




//2
let num = -5;
let num2 = -2;
let num3 = -6;
let num4 = 0;
let num5 = -1;
let largest = num;
if(num2 > largest) largest = num2;
if(num3 > largest) largest = num3;
if(num4 > largest) largest = num4;
if(num5 > largest) largest = num5;
console.log(largest);



//3
for(let i = 1; i <= 100; i++){
 if(i % 3 === 0 && i % 5 === 0){
  console.log("FizzBuzz");
 } else if (i % 3 === 0){
  console.log("Fizz");
 } else if (i % 5 === 0){
  console.log("Buzz");
 } else {
    console.log(i);
 }
}



