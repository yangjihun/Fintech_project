const fs = require('fs');

let store = [
  { name: "태평돈가스", locate: '경기 성남시 수정구 태평로 8 1층' },
  { name: "호식당", locate: '경기 성남시 수정구 태평로 3 SM해그린 108호' }
];

fs.readFile('test.txt', 'utf8', (err, data) => {
  let rows = data.split('\n');
  let loc;
  for (let i = 0; i < rows.length; i++) {
    let columns = rows[i].split('\t');
    
    loc = columns[6];
    store.push({ name: columns[2], locate: loc });
  }
  console.log(store);
});