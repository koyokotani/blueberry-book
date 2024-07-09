type PriceData = {
  [key: string]: number;
};

const obj: PriceData = {
  apple: 100,
  coffee: 200,
  bento: 500,
};

obj.chicken = 300;
obj.弁当 = 400;
// obj.banana = "banana"; コンパイルエラー numberしか受け付けない
