//変数numに０～４までのランダムな整数を代入する
let num =Math.floor(Math.random()*5);

//変数numの最初の値を代入する（確認用）
console.log('最初の値は' + num + 'です');

//変数numの値が0以外である間，変数numの値を出力する
while (num !== 0){
    //変数numに0～4までのランダム整数を再代入する
    num = Math.floor(Math.random()*5);

    //次の条件式で比較される，変数numの現在の値を出力する
    console.log('現在の値' + num + 'です');
}

// //定数numに5を代入する
// const num =5 ;
// //条件式が常にtrueを返すので，無限ループになる
// while (num === 5){
//     console.log(num)
// }

for(let i = 1; i <= 10; i--){
    console.log(i);
}