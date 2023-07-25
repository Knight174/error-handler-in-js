const colors = require('colors');
const fs = require('fs');

// get random file name, only './file.txt' is correct
const getRandomFileName = () => {
  const names = ['./file.txt', './file1.txt', './file2.txt'];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};

const getId = () => {
  const rand = Math.random();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rand > 0.5) {
        resolve('abcd-1234');
      } else {
        reject('No ID! <--- 1');
      }
    }, 500);
  });
};

const readFileAsync = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(filePath + ' 文件读取失败！<--- 2');
        return;
      }
      resolve(data);
    });
  });
};

const getName = () => {
  const rand = Math.random();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rand > 0.5) {
        resolve('name-eric');
      } else {
        reject('No Name! <--- 3');
      }
    }, 500);
  });
};

const main = async () => {
  console.log('main exec start...'.rainbow);
  try {
    console.log('finally, try-catch exec start...'.underline);

    const id = await getId();
    console.log('1. get id: '.bgGreen, id.green);

    const data = await readFileAsync(getRandomFileName());
    console.log('2. get file content:\n'.blue, data.blue);

    const name = await getName();
    console.log('3. get name: '.bgGreen, name.green);
  } catch (err) {
    console.error('Error Handler Catch The Error: '.bgRed, err.red);
  } finally {
    console.log('finally, try-catch exec end.'.underline);
  }
  console.log('main exec end.'.rainbow);
};
main();
