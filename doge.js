/**
 * doge - v1.0
 *
 * ------------
 *
 * 内容结构：
 *
 * --- 字符串模块
 * ------ trim(str, type)           去除空格
 * ------ changeCase(str, type)     大小写转换
 * ------ replace(str, find, rep)   关键词替换
 * ------ checkType(str, type)      检测字符串类型
 * ------ passwordLevel(str)        检测密码强度
 */


const doge = {
  /**
   * @method  trim(str, type)
   *
   * @str     {string} 待处理的字符串
   * @type    {string} side-前后空格 all-所有空格 front-前空格 behind-后空格
   *
   * @return  {string} 处理后的字符串
   */
  trim(str = '', type = 'side') {
    if (typeof str !== 'string') str += '';
    switch (type) {
      case 'side':
        return str.replace(/(^\s*)|(\s*$)/g, '');
      case 'all':
        return str.replace(/\s+/g, '');
      case 'front':
        return str.replace(/(^\s*)/g, '');
      case 'behind':
        return str.replace(/(\s*$)/g, '');
      default:
        return str;
    }
  },

  /**
   * @method  changeCase(str, type)
   *
   * @str     {string} 待处理的字符串
   * @type    {string} upper-全部大写 lower-全部小写 first-首字母大写 change-大小写转换
   *
   * @return  {string} 处理后的字符串
   */
  changeCase(str = '', type = 'upper') {
    if (typeof str !== 'string') str += '';
    switch (type) {
      case 'upper':
        return str.toUpperCase();
      case 'lower':
        return str.toLowerCase();
      case 'first':
        return str.replace(/\b\w+\b/g, word => word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase());
      case 'change':
        const toggleCase = str => {
          let result = '';
          str.split('').forEach(item => {
            if (/^([a-z]+)/.test(item)) {
              result += item.toUpperCase();
            } else if (/^([A-Z]+)/.test(item)) {
              result += item.toLowerCase();
            } else {
              result += item;
            }
          });
          return result;
        };
        return toggleCase(str);
      default:
        return str;
    }
  },

  /**
   * @method  replace(str, find, rep)
   *
   * @str     {string} 待处理的字符串
   * @find    {string} 被替换的关键词
   * @rep     {any}    替换为什么
   *
   * @return  {string} 处理后的字符串
   */
  replace(str = '', find = '', rep = '') {
    if (typeof str !== 'string') str += '';
    const RegExpResult = new RegExp(find, 'g');
    return str.replace(RegExpResult, rep);
  },

  /**
   * @method  checkType(str, type)
   *
   * @str     {string | number} 待判断的字符串
   * @type    {string}  判断的类型
   *
   * @return  {boolean} 判断的结果
   */
  checkType(str = '', type) {
    if (!type) {
      console.error('checkType(): 请传入合法的参数 type');
      return;
    }
    switch (type) {
      case 'email':
        return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
      case 'phone':
        return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
      case 'tel':
        return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
      case 'text':
        return /^\w+$/.test(str);
      case 'number':
        return /^[0-9]$/.test(str);
      case 'english':
        return /^[a-zA-Z]+$/.test(str);
      case 'chinese':
        return /^[\u4E00-\u9FA5]+$/.test(str);
      case 'lower':
        return /^[a-z]+$/.test(str);
      case 'upper':
        return /^[A-Z]+$/.test(str);
      default:
        console.error('checkType(): 参数 type 无效');
        return;
    }
  },

  /**
   * @method  passwordLevel(str)
   *
   * @str     {string}  待判断的密码
   *
   * @return  {number}  密码强度等级
   */
  passwordLevel(str = '') {
    let level = 0;
    if ((str + '').length < 6) return level;
    if (/[0-9]/.test(str)) level++;
    if (/[a-z]/.test(str)) level++;
    if (/[A-Z]/.test(str)) level++;
    if (/[\.|-|_]/.test(str)) level++;
    return level;
  },
};

console.log(
  doge.passwordLevel('11111A.')
);
