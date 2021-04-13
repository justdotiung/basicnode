const { createReadStream } = require('fs');
const stream = createReadStream('./content/big.txt', {
  highWaterMark: 90000,
  //   encoding: 'utf-8',
});

stream.on('data', (result) => {
  // 청크 단위 버퍼 이며 청크는 64킬로바이트다.
  console.log(result);
});
