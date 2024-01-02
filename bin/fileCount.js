/*
 * @Author: wy
 * @Date: 2023-12-29 17:00:51
 * @LastEditors: wy
 * @LastEditTime: 2023-12-29 18:13:49
 * @FilePath: /笔记/web-cli/wy-ls/bin/fileCount.js
 * @Description:
 */
const fs = require('fs');
const fileTypeFn = require('./fileType.js');

module.exports = function fileCount(mode, file) {
  const fileType = fileTypeFn(mode);
  let count = 1;
  if (fileType === 'd') {
    const childDir = fs.readdirSync(file);
    count = childDir.length;
  }

  return count;
};
