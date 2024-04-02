// startsWith
let str="    Hello I am Nancy  ";
console.log(str);

console.log(str.startsWith("Hello"))
console.log(str.startsWith("Nancy"));

// endsWith
console.log(str.endsWith("Hello"))
console.log(str.endsWith("cy"))




// string part

let text="   Hello world  ";
// substring

let result=text.substring(1,7);
console.log(result);


// slice

let result1=text.slice(1,7);
console.log(result1);


// substr

let result2=text.substr(0,4);
console.log(result2);

// cancat

let str1="I am An Indian";
console.log(str, " " , str1)
console.log(str+str1);

// trim
console.log(str.trim(2));

// trimStart
console.log(str.trimStart());

// trim end
console.log(str.trimEnd());

// repeat

// let result3=text.repeat(5);
console.log(text.repeat(5));

// padstart
let numb=5;
let text1=numb.toString();
let padded=text1.padStart(4,"0");
console.log(padded);

// replace
let result4=text.replace("Nancy",)
let result5=text.replace("Nancy",)

