const { readFile, writeFile } = require('fs').promises;

// const fileReader = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, result) => {
//       if (err) {
//         return reject(result);
//       }
//       return resolve(result);
//     });
//   });
// };

// const fileWriter = (first, second) => {
//   return new Promise((resolve, reject) => {
//     writeFile(
//       './content/result-async.txt',
//       `here is the result a: ${first} ${second}`,
//       (err, result) => {
//         if (err) {
//           return reject(err);
//         }
//         return resolve(true);
//       }
//     );
//   });
// };

async function print() {
  try {
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    await writeFile(
      './content/result-async.txt',
      `here is the result a: ${first} ${second}`,
      { flag: 'a' }
    );
  } catch (err) {
    console.log(err);
  }
}

print();
// readFile('./content/second.txt', (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(result);
//   //   return result;
// });

//   await writeFile(
//     './content/result-async2.txt',
//     `here is the result a: ${first} ${second}`,
//     (err, result) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       return result;
//     }
//   );
