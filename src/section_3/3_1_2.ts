const input = ""
const user1 = {
  name: input ? input : "名無し",
  age: 20,
}

const userName = input ? input : "名無し"
const user2 = {
  name: userName,
  age: 20,
}

// プロパティと変数名が同じ場合は、プロパティ名を省略可能！
// 変数名をプロパティに利用することができる
const user3 = {
  userName,
  age: 20,
}

console.log(user1);
console.log(user2);
console.log(user3);

// { name: '名無し', age: 20 }
// { name: '名無し', age: 20 }
// { userName: '名無し', age: 20 }