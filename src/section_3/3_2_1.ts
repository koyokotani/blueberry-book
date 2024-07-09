const obj: {
  foo: number;
  bar: string;
} = {
  foo: 123,
  bar: "Hello World!",
};
console.log(obj);
// { foo: 123, bar: 'Hello World!' }

// barを宣言しないとエラーとなる
// プロパティ 'bar' は型 '{ foo: number; }' にありませんが、型 '{ foo: number; bar: string; }' では必須です
