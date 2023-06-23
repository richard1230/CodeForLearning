
 function test2() {
  console.log(112);
  console.log("我是函数表达式，函数名不会被忽略");
   return "忽略"
};


// console.log(test2);

// console.log(test112());


console.log("===========我是分割线========");


//  (function test8() {
//   console.log("我是立即执行函数，函数名会被忽略");
//   return 118
// })();

// console.log(test8);

// console.log(test118());




var a = 10;
if (function b() {}) {//分析:一个函数如果被括号括起来,那么就是一个表达式
  //被当做表达式的时候,其函数名就可以被忽略
  //b只要被忽略,放到typeof中就是undefined
  //一般而言b不声明就会报referenceError,除非前面有typeof
  a += typeof (b);
}
console.log(a);//10undefined