const obj = {
  foo: 123,
  "↑↓": "",
};

console.log(obj);
// { foo: 123, '↑↓': '' }

const prppName = "foo";
const obj2 = {
  prppName: 123,
};

const obj3 = {
  [prppName]: 123,
};

console.log(obj2);
console.log(obj3);
// { prppName: 123 }
// { foo: 123 }
