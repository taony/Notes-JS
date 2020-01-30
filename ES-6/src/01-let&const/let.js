{
    let a='a';
    var b='b';
}

console.log(b); //b 正常输出
// console.log(a); //a ReferenceError: a is not defined

{
    let temp='temp-a';

    {
        let temp='temp-b';
        console.log('THIS temp is :'+ temp);
    }

    console.log('THIS temp is :'+ temp);
}


{
    let temp='temp-a';
    let temp='temp-b'; // SyntaxError: Identifier 'temp' has already been declared
}