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