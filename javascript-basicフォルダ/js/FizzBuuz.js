// letは変数1～100を表示
// 繰り返し処理
for(let i =1;i<=100; i++){
    // 繰り返し処理15の倍率
    if(i%15===0){
        // 15の倍率でFizzBuzzを表示
        console.log("FizzBuzz");
        // 5の倍率の繰り返し処理
    }else if(i % 5 === 0){
        // 5の倍率の時にBuzzを表示
        console.log("Buzz");
        // 3の倍率の繰り返し処理
    }else if(i % 3 === 0){
        // 3の倍率でFizzを表示
        console.log("Fizz");
    }else{

        console.log(i);
    }
}