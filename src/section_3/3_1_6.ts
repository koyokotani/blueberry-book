const foo = {
  num: 123,
};
const bar = foo;
console.log(bar.num);
// 123

bar.num = 0;
console.log(foo.num);
console.log(bar.num);
// 0
// 0

// スプレッド構文はオブジェクトを明示的にコピーしている
const foo2 = {
  num: 123,
};
const bar2 = { ...foo };
console.log(foo2.num);
// 123
bar.num = 0;
console.log(bar.num);
// 0
