let fs = require('fs');
let store = []; // 식당 정보

fs.readFile("착한가격업소.csv",'utf-8',function(err,data){
    let n = data.split('\n');
    let c = '';
    for(let i=0;i<n.length;i++){
      c = n[i].split(',');
      store.push({name:c[3], locate:c[4]});
    }
    console.log(store);
});

console.log(store);