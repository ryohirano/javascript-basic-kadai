 const btn =document.getElementById('btn');
    const text =document.getElementById('text');

    //ボタンがクリックされたら実行
    btn.addEventListener('click',() =>{
      text.textContent ="クリックされました";
    });