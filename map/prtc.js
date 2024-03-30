const fs = require('fs');   // file system 모듈 가져오기
let a = []
function c(a){
  fs.readFile('test.txt', 'utf8', function(err, data){
  // fs모듈의 readFile함수를 사용해 읽을 파일을 첫번째 인자로 가져오고 콜백함수의 두번째 인자(data)로 파일내용을 받음
    a.push(data);
    return a;
  });
};

let k = c(a);

console.log(k);