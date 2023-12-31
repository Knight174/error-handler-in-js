# error handler in js

**try...catch 语句用于捕获 JavaScript 异常，包括：**

- 同步代码中抛出的异常（使用 throw 关键字）
- 异步代码中**通过 Promise 对象**抛出的异常（使用 Promise.reject() 或返回一个被拒绝的 Promise 对象）
- 通过 throw 语句抛出的异常对象（例如 throw new Error('Something went wrong')）
- 通过 JavaScript 内置函数或 DOM API 抛出的异常（例如 JSON.parse() 解析无效 JSON 时抛出的异常）
- 通过自定义函数抛出的异常

**try...catch 语句捕获 JavaScript 异常的规则：**

> 如果 try 代码块中的第一个异步操作抛出异常，则 JavaScript 引擎会跳转到 catch 代码块中，并执行错误处理逻辑，此时第二个异步操作不会被执行。

示例代码：

```js
try {
  const result1 = await someAsyncOperation1(); // may throw error
  const result2 = await someAsyncOperation2(); // will not be executed if someAsyncOperation1() throws error
} catch (err) {
  console.error(err);
  // handle error
}
```

> 如果存在多个 try 代码块，每一个代码块依然遵循上面的规则。每一个 try 代码块中的异步操作如果抛出异常，JavaScript 引擎依然会跳转到 catch 代码块中，并执行错误处理逻辑。即上一个 try 中的代码出现异常并不影响下一个 try 的错误捕获。

示例代码：

```js
try {
  const result1 = await someAsyncOperation1(); // may throw error
} catch (err) {
  console.error(err);
  // handle error
}
try {
  const result2 = await someAsyncOperation2(); // may throw error
} catch (err) {
  console.error(err);
  // handle error
}
```

## install

```bash
npm i
npm install -g bun # use bun to run codes
```

## start

```bash
npm run start:js
# or ts version
npm run start:ts
npm run start:ts:split
```

You'll get three cases after executing `npm run start:js` or `npm run start:ts`.

- all passed
  ![all passed](/images/image.png)
- the first one error
  ![the first error](/images/image-1.png)
- the second one error
  ![the second error](/images/image-3.png)
- the third one error
  ![the third error](/images/image-2.png)

You'll get 8 cases after executing `npm run start:ts:split`.
