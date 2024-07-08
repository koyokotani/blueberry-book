# blueberry-book
プロを目指す人のためのTypeScript入門


### start
#### シェル
```
docker-compose exec node-dev sh
```

### コンパイル
```
npx tsc
```

### 確認
```
node dist/index.js
```

### 注意
トップレベルにcontを定義する関係上、変数名がファイル間で被ってエラーとなるため全てのファイルをモジュールとして扱っている
```
tsconfig.json

"moduleDetection": "force", 
```