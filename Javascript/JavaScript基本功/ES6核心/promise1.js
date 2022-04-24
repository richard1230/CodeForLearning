// var arr = [1, 2, 3,4];
//
// var str = '123';
//
// var obj = {a: 1, b: 2};
//
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }
//
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i])
// }
//
//
// arr.forEach(function (item) {
//   console.log(item)
// })
//
// for (var i in obj) {
//   console.log(i, obj[i]);
// }

//有没一种方式实现不同类型的数据用同一种遍历方法--->迭代


//遍历和迭代的区别


var obj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function* () {
    var index = 0;
    let map = new Map();
    map.set('a', 1);
    map.set('b', 2);
    map.set('c', 3);
    console.log(map)
    // return {
    //   next(){
    //     var mapEntries = [...map.entries()];
    //     if(index < map.size){
    //       return {
    //         value: mapEntries[index++],done:false
    //       }
    //     }
    //     return {value: undefined,done: true}
    //   }
    // }
    var mapEntries = [...map.entries()];
    while (index < mapEntries.length) {
      yield mapEntries[index++]
    }
    // if(index < map.size){
    //   return {
    //     value: mapEntries[index++],done:false
    //   }
    // }
    // return {value: undefined,done: true}
  }
}
//
for (const i in obj) {
  console.log(i);
}

// let map = new Map();
// map.set('a',1);
// map.set('b',2);
// map.set('c',3);
// console.log(map)//Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 } ;
// // 0: a → 1
// // 1: b → 2
// // 2: c → 3
//
// console.log(new Set([1,2,3,4,5]))//Set(5) { 1, 2, 3, 4, 5 }
// //0: 1
// // 1: 2
// // 2: 3
// // 3: 4
// // 4: 5
//


//生成器函数需要有关键字 *
function* test() {
  yield 5;
  yield 2;
  yield 3;
  yield 4;
}

var iter = test();

console.log(iter.next())//{ value: 5, done: false }
console.log(iter.next())//{ value: 2, done: false }


// for (const i of iter) {
//   console.log(i)
// }

console.log('=============================================')

function test0() {
  console.log(1)
}

var iter = test0();//有返回值


function* test01() {
  console.log(1)
  yield 5;
  console.log(2)
  yield 2;
  yield 3;
  yield 4;
}

var iter = test01();//没有任何返回值
console.log(iter.next())
// 1
// { value: 5, done: false }


console.log(iter.next())
// 2
// { value: 2, done: false }

//要想打印后面的数据必须调用iter.next()

console.log('=============================================')


function* test02() {
  console.log(1)
  return 1
}

var iter = test02();//没有任何返回值
console.log(iter)//不返回任何值,只返回迭代器对象: Object [Generator] {}
console.log(iter.next())//{ value: 1, done: true }


function* test03() {
  console.log(1)
  yield 1;
}

var iter = test03()
console.log(iter.next())//{ value: 1, done: false }
console.log(iter.next())//{ value: undefined, done: true }


//生成器函数中一般不要手动去return一个值


console.log('=============================================')


function* test04() {
  let val1 = yield 1;//this is val1:two
  console.log("this is val1:" + val1)
  let val2 = yield 2;// this is val2:this is three
  console.log("this is val2:" + val2)
  let val3 = yield 3;//this is val3:four
  console.log("this is val3:" + val3)
  let val4 = yield 4;// this is val4:five
  console.log("this is val4:" + val4)
}

var iter = test04()
console.log(iter.next('oneone'))//{ value: 1, done: false }

console.log(iter.next('two'))
// this is val1:two
// { value: 2, done: false }


console.log(iter.next('this is three'))
// this is val2:this is three
// { value: 3, done: false }


console.log(iter.next('four'))
// this is val3:four
// { value: 4, done: false }


console.log(iter.next('fivefive'))
// this is val4:fivefive
// { value: undefined, done: true }


