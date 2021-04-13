const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
  // 동기적 코드 한번에 큰파일을 다읽어서 보여준다. (네트워크 해더의 파일크기가 크다. Content-Length: 파일크기)
  //   const stream = fs.readFileSync('./content/big.txt', {
  //     encoding: 'utf8',
  //   });
  //   res.end(stream);

  // 비동기 (네크워크 헤더의 크기가 청크로 보냄. Transfer-Encoding: chunked)
  const stream = fs.createReadStream('./content/big.txt', {
    encoding: 'utf8',
  });

  stream.on('open', () => {
    stream.pipe(res);
  });
  stream.on('error', (err) => console.log(err));
});

server.listen(5000, () => console.log('listen 5000 port'));
