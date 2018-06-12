//1、字符的 Unicode 表示法 
//JavaScript 允许采用\uxxxx形式表示一个字符，其中xxxx表示字符的 Unicode 码点。
console.log("/u0061");

console.log("/u0071");

//includes(), startsWith(), endsWith() § ⇧
//传统上，JavaScript 只有indexOf方法，可以用来确定一个字符串是否包含在

let str='hello world';
console.log(str.includes('hello')); 

//8.repeat() repeat方法返回一个新字符串，表示将原字符串重复n次。
console.log('x'.repeat(3)); //返回整数倍
console.log('x'.repeat(2.9)); //小数取整
try {
    console.log('x'.repeat(-1)); //负数会报错
} catch (e) {
    console.log(e);
}

//9.padStart(),padEnd()
console.log('x'.padStart(5,'a'));
console.log('y'.padEnd(5,'b'));
console.log('xxx'.padStart(2,'ab'));
console.log('xxx'.padEnd(2,'ab'));





