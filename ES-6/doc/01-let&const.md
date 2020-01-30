# 01-let&const

## （1）let 命令
ES6 新增了`let`命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。

 - （1）避免变量提升：var命令会发生“变量提升”现象，即变量可以在声明之前使用，值为undefined。let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。

```js
 {
    let a='a';
    var b='b';
 }
 console.log(b); //b 正常输出
 console.log(a); //a ReferenceError: a is not defined

```

 - （2）暂时性死区：只要块级作用域内存在'let'命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。

 - （3）不允许重复声明：let不允许在相同作用域内，重复声明同一个变量。



## （2）const 命令

`const`声明一个只读的常量。一旦声明，常量的值就不能改变。
const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。


```js
// const PI; // SyntaxError: Missing initializer in const declaration

const PI=3.1415926;

console.log(PI);

// PI=3.1415927; // TypeError: Assignment to constant variable.

```

