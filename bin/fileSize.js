/*
 * @Author: wy
 * @Date: 2023-12-29 17:32:13
 * @LastEditors: wy
 * @LastEditTime: 2023-12-29 17:42:12
 * @FilePath: /笔记/web-cli/wy-ls/bin/fileSize.js
 * @Description:
 */
module.exports = function fileSize(stats) {
  const { size } = stats;

  return size;
};
