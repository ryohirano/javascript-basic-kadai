//output-btnというidを持つhtml要素を取得し．定数に代入する
const btn =document.getElementById('output-btn');

//html要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () =>{
    console.log('クリックされました！');
});

//add-btnというidを持つhtml要素を取得し，定数を代入する
const addBtn = document.getElementById('add-btn');
//parent-listというidを持つhtml要素を取得し，定数に代入する
const parentList =document.getElementById('parent-list');
// //parent-listにli要素を新しく作成
// const li = document.createElement('li');
// li.textContent ='これはリスト要素です';
// parentList.appendChild(li);
addBtn.addEventListener('click', () => {
    const childList = document.createElement('li');
    //作成したli要素に「これはリスト要素です」というテキストを追加する
childList.textContent = 'これはリスト要素です'
//作成したli要素ul要素の子要素として末尾に追加する
parentList.appendChild(childList);
});
