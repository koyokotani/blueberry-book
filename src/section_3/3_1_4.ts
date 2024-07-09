const user = {
  name: "uhyo",
  age: 25,
};

user.age = 27;
console.log(user.age);
console.log(user["age"]);
// 27
// 27

import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const message = {
  good: "0以上の数値が入力されました！",
  bad: "負の数値を入力しないでください",
};

rl.question("数値を入力してください:", (line) => {
  const num = Number(line);
  console.log(message[num >= 0 ? "good" : "bad"]);
  rl.close();
});
// 数値を入力してください:0
// 0以上の数値が入力されました！

// 数値を入力してください: -1;
// 負の数値を入力しないでください;
