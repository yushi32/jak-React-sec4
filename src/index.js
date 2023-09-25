/**
 * コメントアウト
 * 「//」でも可能
 */

/* 従来の変数宣言はvarのみ */
var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
var val1 = "var変数を上書き";
console.log(val1);

// var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);

// letは上書き可能、再宣言は不可
let val2 = "let変数";
console.log(val2);

// let val2 = "let変数を再宣言";
/** 
 * コメントアウトを外すと
 * Uncaught SyntaxError: Identifier 'val2' has already been declared
 * というエラーが出る
 */

// constは上書きも再宣言も不可能
const val3 = "const変数";
console.log(val3);

// val3 = "constを上書き"
/**
 * 上書きしようとすると
 * Uncaught TypeError: Assignment to constant variable.
 * というエラーが出る
 * 多分、定数への再代入という意味
 */

// const val3 = "constを再宣言"
/**
 * Uncaught SyntaxError: Identifier 'val3' has already been declared
 * 既に宣言されているというエラー
 */

// constで定義したオブジェクトの場合は、プロパティの変更が可能
// プロパティを追加することも可能
// なのでオブジェクトを定義する時はconstで定義するのが普通
const val4 = {
  name: "じゃけえ",
  age: 28,
};
val4.name = "jak";
val4.address = "Hiroshima";
console.log(val4);
// => {name: 'jak', age: 28, address: 'Hiroshima'}

// constで定義した配列も要素の変更や追加が可能
const val5 = ['dog', 'cat'];
val5[0] = 'bird';
val5.push('monkey');
console.log(val5);
// => ['bird', 'cat', 'monkey']


/**
 * テンプレート文字列
 */
const name = "じゃけえ";
const age = 28;
// 「私の名前はじゃけえです。年齢は28歳です。」と出力したい

//　従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

// テンプレート文字列
const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message2);


/**
 * アロー関数
 */

// 従来
function func1(str) {
  return str;
}
// 下のように、変数を定義してその中に関数を入れるという書き方もできる
/**
 * const func1 = function(str) {
 *   return str;
 * };
 */
console.log(func1("func1です"));

// アロー関数
// functionと定義せずに引数だけ書けばいい
// 引数が1つの場合、()を省略可能
// 関数内の処理が一行で終わる場合、returnを省略可能
// const func2 = str => str;　となる
// 波括弧（ブラケット）で囲った時は、returnが必要なので注意
// 従来の書き方とはthisの使い方も異なる
const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
// const func3 = (num1, num2) => num1 + num2; とも書ける
console.log(func3(10, 20));


/**
 * 分割代入
 * オブジェクト・配列からプロパティ・要素を抜き出して、他の変数に代入すること
 * 分割はオブジェクトから抜き出すの意で、抜き出すプロパティが1つでもok
 */

const myProfile = {
  myName: "じゃけえ",
  myAge: 28,
};

// const myMessage = `私は${myProfile.myName}です。年齢は${myProfile.myAge}歳です。`;
const { myName, myAge } = myProfile;
const myMessage = `私は${myName}です。年齢は${myAge}歳です。`;
console.log(myMessage)

// 配列の場合
// オブジェクトのようにプロパティがないので、要素が順番に代入される
const fruits = ["りんご", "ばなな"];
//const fruitsMessage = `お店にあるのは${fruits[0]}と${fruits[1]}です`
const [apple, banana] = fruits;
const fruitsMessage = `お店にあるのは${apple}と${banana}です`;
console.log(fruitsMessage);


/**
 * デフォルト値
 * 引数を定義する時、分割代入などで使える
 */

// 引数にデフォルト値を設定していない場合、引数を渡さずに関数を呼び出すとundefinedと表示される
// デフォルト値を設定しておけば、引数を渡さなかった時はデフォルト値が代入される
const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
sayHello("じゃけえ");
sayHello();


/**
 * スプレッド構文
 * 1. 配列の展開
 */

// 配列の展開
// 配列の要素を順に取り出す
const arr1 = [1, 2];
//console.log(arr1); // => [1, 2]
//console.log(...arr1); // => 1 2

const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// スプレッド構文で書き換えると以下
sumFunc(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arrs] = arr2;
console.log(num1); // => 1
console.log(num2); // => 2
console.log(arrs); // => [3, 4, 5] 配列をまとめて受け取っている

// 配列のコピー、結合
const arr3 = [10, 20];
const arr4 = [30, 40];

// それぞれの要素をコピー（展開して代入）して新しい配列に結合している
const arr5 = [...arr3, ...arr4];
console.log(arr5); // => [10, 20, 30, 40]

/**
 * mapやfilterを使った配列の処理
 */

// 従来はfor文
const nameArr = ["田中", "山田", "じゃけえ"];
for (let i = 0; i < nameArr.length; i++) {
  console.log(nameArr[i]);
}

// mapメソッド
// 配列の要素を1つずつ取り出して引数に与えられた関数（コールバック関数）を実行した結果からなる新しい配列を返す
const nameArr2 = nameArr.map((name)=>{
  return name;
})
console.log(nameArr2);
//　上のfor文をmapメソッドで書き換える
nameArr.map((name)=> console.log(name));
// インデックス番号を扱いたい場合は、第二引数で受け取る
nameArr.map((name, index) => {
  console.log(`${index + 1}番目は${name}です`);
})

// filter
// 条件に一致した（コールバック関数がtrueを返した）要素だけを返した新しい配列を生成する
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1 // 条件文を満たす要素だけが返る
})
console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "じゃけえ") {
    return name
  } else {
    return `${name}さん`
  }
})
console.log(newNameArr);

/**
 * 三項演算子 ? :
 */
// 条件式 ? trueの場合の処理 : falseの場合の処理
// 書き方
const vaa = 1 > 0 ? "trueです" : "falseです";
console.log(vaa);

// サンプル1
const num = 1300;
// toLocaleStringメソッド...3桁区切りでカンマを打つ
console.log(num.toLocaleString());

// num = "1300"と文字列だった場合
// toLacaleStringメソッドが機能せず1300と返される
//　これを三項演算子を利用して場合分けする
// typeof...オブジェクトのデータ型を判定する
const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
console.log(formattedNum);

// サンプル2
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です';
}
console.log(checkSum(50, 100));