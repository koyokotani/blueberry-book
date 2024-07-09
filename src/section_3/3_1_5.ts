const obj1 = {
  bar: 456,
  baz: 789,
};

const obj2 = {
  foo: 123,
  ...obj1,
};

console.log(obj2);
// { foo: 123, bar: 456, baz: 789 }

const obj3 = {
  foo: 20000,
  bar: 456,
  baz: 789,
};

const obj4 = {
  ...obj3,
  foo: 123,
};

console.log(obj4);
// { foo: 123, bar: 456, baz: 789 }

const obj5 = {
  foo: 20000,
  bar: 456,
  baz: 789,
};

// ...obj3より前にfooを宣言するとコンパイルエラー
// fooが上書きされるのが決まっているため
// const obj6 = {
//   foo: 123,
//   ...obj3,
// };

const obj7 = {
  bar: 456,
  baz: 789,
};

const obj8 = {
  foo: 1000,
  baz: 3000,
};

const obj9 = {
  ...obj7,
  ...obj8,
};

console.log(obj9);
// { bar: 456, baz: 3000, foo: 1000 }
