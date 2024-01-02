/*
 * @Author: wy
 * @Date: 2023-12-29 17:32:13
 * @LastEditors: wy
 * @LastEditTime: 2023-12-29 17:39:08
 * @FilePath: /笔记/web-cli/wy-ls/bin/fileDate.js
 * @Description:
 */
module.exports = function fileDate(stats) {
  const { birthtimeMs } = stats;
  const date = new Date(birthtimeMs);
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  let mouth = date.getMonth() + 1;
  mouth = mouth > 10 ? mouth : `0${mouth}`;

  return `${mouth}月  ${day}:${hour}:${hour}`;
};
