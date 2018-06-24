//1、ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。

{
    let a = 6;
    console.log(a);
}

//代码块之外调用let声明的变量，会报异常  
//ReferenceError: a is not defined
try {
    console.log(a);
} catch (ex) {
    console.log(ex);
}



let [e,f,g]=[1,2,3]

console.log(e);


// 浏览器的 ES6 环境
function f() { console.log('I am outside!'); }

(function () {
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  f();
  
}());
// Uncaught TypeError: f is not a function
