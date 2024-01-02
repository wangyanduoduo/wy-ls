/*
 * @Author: wy
 * @Date: 2023-12-29 16:48:20
 * @LastEditors: wy
 * @LastEditTime: 2023-12-29 16:57:33
 * @FilePath: /笔记/web-cli/wy-ls/bin/auth.js
 * @Description:
 */
const fs = require('fs');
module.exports = function auth(mode) {
  let authString = '';
  // 当前登录用户权限
  const canUserRead = mode & fs.constants.S_IRUSR;
  const canUserWrite = mode & fs.constants.S_IWUSR;
  const canUserExecute = mode & fs.constants.S_IXUSR;

  // 当前登录用户所在分组权限
  const canUserGroupRead = mode & fs.constants.S_IRGRP;
  const canUserGroupWrite = mode & fs.constants.S_IWGRP;
  const canUserGroupExecute = mode & fs.constants.S_IXGRP;

  // 其他用户权限
  const canUserOtherRead = mode & fs.constants.S_IROTH;
  const canUserOtherWrite = mode & fs.constants.S_IWOTH;
  const canUserOtherExecute = mode & fs.constants.S_IXOTH;

  canUserRead ? (authString += 'r') : (authString += '-');
  canUserWrite ? (authString += 'w') : (authString += '-');
  canUserExecute ? (authString += 'x') : (authString += '-');

  canUserGroupRead ? (authString += 'r') : (authString += '-');
  canUserGroupWrite ? (authString += 'w') : (authString += '-');
  canUserGroupExecute ? (authString += 'x') : (authString += '-');

  canUserOtherRead ? (authString += 'r') : (authString += '-');
  canUserOtherWrite ? (authString += 'w') : (authString += '-');
  canUserOtherExecute ? (authString += 'x') : (authString += '-');

  return authString;
};
