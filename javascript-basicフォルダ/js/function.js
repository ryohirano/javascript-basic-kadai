//朝のあいさつを出力する関数を定義する
const sayGoodMorning = () =>{
    console.log('おはようございます！');
    console.log('昨日はよく眠れましたか？');
    console.log('今日も一日頑張りましょう！');
}

//夜のあいさつを出力する関数を定義する
const sayGoodEvening =() => {
console.log('こんばんは！');
console.log('今日も一日お疲れさまでした．');
}
//朝のあいさつを出力する関数を呼び出す
sayGoodMorning();
//夜のあいさつを出力する関数を呼び出す
sayGoodEvening();

//与えられた引数priceに送料を加算し，その値を出力する
const calculateTotal =(price,shippingFee) => {
    console.log(price + shippingFee + '円');
}

//関数を呼び出し，引数として購入金額を渡す
calculateTotal(1200,1000);

const double = (num) => {
    return num*2;
}

// //定数を宣言する
// const userName = '侍太郎';
// //定数の値を出力する
// console.log(userName)
const userVariable = () =>{
    const userName ='侍太郎'
}
//関数を呼び出す
userVariable();
console.log(userName);