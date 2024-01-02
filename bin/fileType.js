/*
 * @Author: wy
 * @Date: 2023-12-29 17:00:51
 * @LastEditors: wy
 * @LastEditTime: 2024-01-02 10:17:40
 * @FilePath: /笔记/web-cli/wy-ls/bin/fileType.js
 * @Description:
 */
const fs = require('fs');
module.exports = function getFileType(mode) {
  const isDir = mode & fs.constants.S_IFDIR; // 文件夹
  const isFile = mode & fs.constants.S_IFREG; // 文件
  const isLink = mode & fs.constants.S_IFLNK; // 符号链接的文件

  if (isDir) {
    return 'd';
  } else if (isFile) {
    return '-';
  } else if (isLink) {
    return 'l';
  }
};
