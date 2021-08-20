/**
 * 変数宣言周り
 */

// var val1 = "aaa";
// console.log(val1);

// val1 = "bbb";
// console.log(val1);

// let val2 = "aaa";
// console.log(val2);

// val2 = "bbb";
// console.log(val2);

// let var2 = "ccc";

/**
 * 分割代入
 */
// const myProfile = {
//   name: "itio",
//   age: 28
// };
// // 従来の方法
// // const messege1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// // console.log(messege1);

// // 分割代入
// const { name, age } = myProfile;
// const messege2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(messege2);

// 配列で分割代入
//まずは従来
// const myProfile = ["itio", 28];

// const messege3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(messege3);

// // 配列の場合
// const [name, age] = myProfile;

// const messege4 = `名前は${age}です。年齢は${name}歳です。`;
// console.log(messege4);

/**
 * デフォルト値、引数
 */
// const sayHello = (name) => console.log(`こんにちは！${name}さん！`);
// sayHello("asd");

// const sayHello = (name) => console.log(`こんにちは！${name}さん！`);
// sayHello("");
// // こんにちは！さん！

// const sayHello = (name) => console.log(`こんにちは！${name}さん！`);
// sayHello();
// // こんにちは！undefinedさん！
// // ↑バグの温床

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello();
// // こんにちは！ゲストさん！

// const ary1 = [1, 2];
// // console.log(ary1);
// // console.log(...ary1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(ary1[0], ary1[1]);
// sumFunc(...ary1);

// //　まとめる
// const ary2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...ary3] = ary2;
// console.log(num1);
// console.log(num2);
// console.log(ary3);

// 配列のコピーｍ結合
// const arry1 = [10, 20];
// const arry2 = [30, 40];

// const arry3 = [...arry2];
// console.log(arry3);

// const arry4 = [...arry1, ...arry2];
// console.log(arry4);

// 普通の配列から配列でも代入できるやん問題
//　参照先も書き換わっちゃう
//　まぁ、ポインタなんですねって感じ。

/**
 * map, filterを使った配列の処理
 */

// 従来
// const nameArr = ["田中", "山田", "いちお"];
// //  for (let index = 0; index < nameArr.length; index++){
// //    console.log(nameArr[index]);
// //  }

// // mapの基本的な構文
// // const nameArr2 = nameArr.map((name) => {
// //   return name;
// // });
// // console.log(nameArr2);

// // forと同じく表示してみよう
// nameArr.map((name) => console.log(name));

// h配列をループしてなにか処理する動きと、
// return された結果に基づいて新しい配列を生成する
// という二種類の使い方がある。

// const numAry = [1, 2, 3, 4, 5];
// const newNumAry = numAry.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumAry);

//従来
// const nameArr = ["田中", "山田", "いちお"];
// // for (let index = 0; index < nameArr.length; index++){
// //   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// // }

// // nameArr.map((name, index) => console.log(`${index + 1}番目は${nameArr[index]}です。`));

// const newNamemAry = nameArr.map((name) => {
//   if (name === "いちお") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNamemAry);
