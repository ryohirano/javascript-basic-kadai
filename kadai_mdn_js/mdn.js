const today = new Date(2026,4,17);

const year = today.getFullYear();
const month =today.getMonth()+1;
const date =today.getDate();

console.log(year + "年" + month + "月" +date + "日");