//1、字符的 Unicode 表示法 
//JavaScript 允许采用\uxxxx形式表示一个字符，其中xxxx表示字符的 Unicode 码点。
console.log("/u0061");

console.log("/u0071");

//includes(), startsWith(), endsWith() § ⇧
//传统上，JavaScript 只有indexOf方法，可以用来确定一个字符串是否包含在

let str='hello world';
console.log(str.includes('hello')); 

console.log(str.padStart(20,"0"));





