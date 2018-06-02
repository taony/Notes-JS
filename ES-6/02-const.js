// const声明一个只读的常量。一旦声明，常量的值就不能改变。

const PI=3.1415926;
console.log(PI);

// 不能给常量赋值
try {
    PI=3.1415927
} catch (ex) {
    //TypeError: Assignment to constant variable.
    console.log(ex);
}
