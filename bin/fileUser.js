/*
 * @Author: wy
 * @Date: 2023-12-29 17:07:43
 * @LastEditors: wy
 * @LastEditTime: 2023-12-29 17:25:37
 * @FilePath: /笔记/web-cli/wy-ls/bin/fileUser.js
 * @Description:
 */

const cp = require('child_process'); // 子进程
module.exports = function fileUser(stats) {
  const { uid } = stats;
  const username = cp.execSync(`id -un ${uid}`).toString().trim(); // 获取用户名
  const groupName = cp.execSync(`id -gn ${uid}`).toString().trim();
  return `${username}  ${groupName}`;
};
