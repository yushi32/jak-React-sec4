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
const message2 = `私の名前は${name}です。年齢は${age}です。`;
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
 * }
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