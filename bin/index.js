#!/usr/bin/env node
/*
 * @Author: wy
 * @Date: 2023-12-29 14:06:31
 * @LastEditors: wy
 * @LastEditTime: 2023-12-29 18:09:05
 * @FilePath: /笔记/web-cli/wy-ls/bin/index.js
 * @Description:
 */
const fs = require('fs');
const auth = require('./auth');
const fileType = require('./fileType');
const fileUser = require('./fileUser');
const fileDate = require('./fileDate');
const fileSize = require('./fileSize');
const fileCount = require('./fileCount');
const parse = require('./parseArgs');

const { isAll, isList } = parse();

console.log(isAll, isList);

// 模拟ls命令
// 没有参数的时候，输出当前执行命令的路径的所有文件名
const outputFile = (isAll, isList) => {
  const pwd = process.cwd();
  let files = fs.readdirSync(pwd);
  let output = '';
  if (!isAll) {
    files = files.filter((file) => {
      return !file.startsWith('.'); // 排除所有以.开头的文件
    });
  }

  if (!isList) {
    files.forEach((file) => {
      output += `${file}             `;
    });
  } else {
    files.forEach((file, index) => {
      const stats = fs.statSync(file);
      const mode = stats.mode; // 文件权限的32位2进制，转化的10进制数
      const str = `${fileType(mode)}${auth(mode)}   ${fileCount(
        mode,
        file
      )} ${fileUser(stats)}   ${fileSize(stats)}  ${fileDate(stats)}  ${file}`;
      if (index !== files.length - 1) {
        output += `${str}\n`;
      } else {
        output += `${str}`;
      }
    });
  }

  return output;
};

console.log(outputFile(isAll, isList));
