interface FooBarObject {
  foo: number;
  bar: string;
}

const obj: FooBarObject = {
  foo: 123,
  bar: "Hello, World!",
};
console.log(obj);
// { foo: 123, bar: 'Hello, World!' }

// interfaceはobject専用の型宣言
// ほとんどの場合、Typeで代用できるためinterfaceを使わなくてもOK
