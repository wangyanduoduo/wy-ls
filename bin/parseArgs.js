/*
 * @Author: wy
 * @Date: 2023-12-29 14:30:16
 * @LastEditors: wy
 * @LastEditTime: 2023-12-29 14:37:39
 * @FilePath: /笔记/web-cli/wy-ls/bin/parseArgs.js
 * @Description:
 */
module.exports = function parse() {
  let isAll = false;
  let isList = false;
  const args = process.argv.slice(2);
  args.forEach((arg) => {
    if (arg.indexOf('a') > 0) {
      isAll = true;
    }
    if (arg.indexOf('l') > 0) {
      isList = true;
    }
  });

  return {
    args,
    isAll,
    isList,
  };
};
