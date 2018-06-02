//1、ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。

{
    let a = 6;
    console.log(a);
}

try {
    console.log(a);
} catch (ex) {
    console.log(ex);
}



let [e,f,g]=[1,2,3]
console.log(e);

