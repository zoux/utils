/**
 * doge
 * v1.0
 *
 * ------------
 *
 * 内容结构：
 *
 * --- 字符串模块
 * ------ trim(str, type)       去除空格
 *
 */


const doge = {
  /**
   * trim(str, type)
   *
   * @str   {string} 待处理的字符串
   * @type  {number} 1-前后空格 2-所有空格 3-前空格 4-后空格
   */
  trim(str, type = 1) {
    switch (type) {
      case 1:
        return str.replace(/(^\s*)|(\s*$)/g, '');
      case 2:
        return str.replace(/\s+/g, '');
      case 3:
        return str.replace(/(^\s*)/g, '');
      case 4:
        return str.replace(/(\s*$)/g, '');
      default:
        return str;
    }
  }
};

console.log(
  doge.trim('  1  23')
);
