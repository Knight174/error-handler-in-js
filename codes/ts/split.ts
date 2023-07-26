import colors from 'colors/safe';
import fs from 'fs';
import path from 'path';

// get random file name, only correctPath is correct
const getRandomFileName = (): fs.PathOrFileDescriptor => {
  const correctPath = path.resolve(__dirname, 'file.txt');
  const names = [correctPath, './file_x.txt', './file_y.txt'];
  const randomIndex: number = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};

const getId = (): Promise<string> => {
  const rand: number = Math.random();
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

const readFileAsync = (filePath: fs.PathOrFileDescriptor): Promise<string> => {
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

const getName = (): Promise<string> => {
  const rand: number = Math.random();
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

const main = async (): Promise<void> => {
  console.log(colors.rainbow('main exec start...'));

  try {
    console.log(colors.underline('1. finally, try-catch exec start...'));
    const id: string = await getId();
    console.log(colors.bgGreen('1. get id: '), colors.green(id));
  } catch (err) {
    console.error(
      colors.bgRed('Error Handler Catch The Error: '),
      colors.red(err)
    );
  } finally {
    console.log(colors.underline('1. finally, try-catch exec end.'));
  }

  try {
    console.log(colors.underline('2. finally, try-catch exec start...'));
    const data: string = await readFileAsync(getRandomFileName());
    console.log(colors.blue('2. get file content:\n'), colors.blue(data));
  } catch (err) {
    console.error(
      colors.bgRed('Error Handler Catch The Error: '),
      colors.red(err)
    );
  } finally {
    console.log(colors.underline('2. finally, try-catch exec end.'));
  }

  try {
    console.log(colors.underline('3. finally, try-catch exec start...'));
    const name: string = await getName();
    console.log(colors.bgGreen('3. get name: '), colors.green(name));
  } catch (err) {
    console.error(
      colors.bgRed('Error Handler Catch The Error: '),
      colors.red(err)
    );
  } finally {
    console.log(colors.underline('3. finally, try-catch exec end.'));
  }
  console.log(colors.rainbow('main exec end.'));
};

main();
