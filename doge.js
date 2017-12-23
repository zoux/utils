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
 *
 * --- 数字模块
 * ------ formatPrice(price, float) 格式化金额
 *
 * --- 日期模块
 * ------ pastTime(old, now)        距当前的时间（天/时/分）
 * ------ formatTime(time, gap)     时间格式化为 YYYY%MM%DD
 *
 * --- 数组模块
 * ------
 */


const doge = {
  /**
   * @method  trim(str, type)
   *
   * @param   {string}  str   待处理的字符串
   * @param   {string}  type  side-前后空格 all-所有空格 front-前空格 behind-后空格
   *
   * @return  {string}  处理后的字符串
   */
  trim(str = '', type = 'side') {
    if (typeof str !== 'string') str = str.toString() + '';

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
   * @param   {string}  str   待处理的字符串
   * @param   {string}  type  upper-全部大写 lower-全部小写 first-首字母大写 change-大小写转换
   *
   * @return  {string}  处理后的字符串
   */
  changeCase(str = '', type = 'upper') {
    if (typeof str !== 'string') str = str.toString() + '';

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
   * @param   {string}  str   待处理的字符串
   * @param   {string}  find  被替换的关键词
   * @param   {any}     rep   替换为什么
   *
   * @return  {string} 处理后的字符串
   */
  replace(str = '', find = '', rep = '') {
    if (typeof str !== 'string') str = str.toString() + '';

    const RegExpResult = new RegExp(find, 'g');
    return str.replace(RegExpResult, rep);
  },

  /**
   * @method  checkType(str, type)
   *
   * @param   {string | number} str   待判断的字符串
   * @param   {string}          type  判断的类型
   *
   * @return  {boolean} 判断的结果
   */
  checkType(str = '', type) {
    const strType = typeof str;
    if (!(strType === 'number' || strType === 'string')) return console.error('checkType: 请传入合法的参数 str');
    if (!type) return console.error('checkType: 请传入合法的参数 type');

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
        console.error('checkType: 参数 type 无效');
        return;
    }
  },

  /**
   * @method  passwordLevel(str)
   *
   * @param   {string}  str 待判断的密码
   *
   * @return  {number}  密码强度等级
   */
  passwordLevel(str = '') {
    const strType = typeof str;
    if (!(strType === 'number' || strType === 'string')) return console.error('checkType: 请传入合法的参数 str');

    let level = 0;
    if ((str + '').length < 6) return level;
    if (/[0-9]/.test(str)) level++;
    if (/[a-z]/.test(str)) level++;
    if (/[A-Z]/.test(str)) level++;
    if (/[\.|-|_]/.test(str)) level++;
    return level;
  },

  /**
   * @method  formatPrice(price, float)
   *
   * @param   {number}  price 待处理的金额
   * @param   {number}  float 留下的小数位
   *
   * @return  {string}  处理后的金额字符串
   */
  formatPrice(price = 0, float = 2) {
    const priceType = typeof price;
    if (!(priceType === 'number' || priceType === 'string')) return console.error('formatPrice: 请传入合法的参数 price');
    const floatType = typeof float;
    if (!(floatType === 'number' || floatType === 'string')) return console.error('formatPrice: 请传入合法的参数 float');

    price = price.toLocaleString('en-US');

    const priceSplit = price.split('.');
    if (priceSplit.length > 2) price = priceSplit.slice(0, 2).join('.');

    float = parseInt(float);
    if (float >= 0) {
      const priceSplit = price.split('.');
      let priceFloat = priceSplit[1];
      const priceFloatSplit = priceFloat.split('');
      if (float < priceFloatSplit.length) {
        priceFloat = priceFloatSplit.slice(0, float).join('');
        price = priceFloat.length ? [priceSplit[0], priceFloat].join('.') : priceSplit[0];
      }
    }

    return price;
  },

  /**
   * @method  pastTime(old, now)
   *
   * @param   {number}  old 之前的时间节点
   * @param   {number}  now 当前的时间节点
   *
   * @return  {string}  距当前的时间
   */
  pastTime(old = Date.now(), now = Date.now()) {
    let time;
    let label;
    const between = (Number(now) - Number(old)) / 1000;
    if (between < 3600) {
      time = ~~(between / 60);
      label = '分钟';
    } else if (between < 86400) {
      time = ~~(between / 3600);
      label = '小时';
    } else {
      time = ~~(between / 86400);
      label = '天';
    }
    return `${time}${label}前`;
  },

  /**
   * @method  formatTime(time, gap)
   *
   * @param   {number}  time 格式化前的时间
   * @param   {string}  gap 间隔类型
   *
   * @return  {string}  格式化后的时间
   */
  formatTime(time = Date.now(), gap = '-') {
    const date = new Date(time);
    const Y = date.getFullYear();
    const M = (date.getMonth() + 1 < 10 ? `0${(date.getMonth() + 1)}` : date.getMonth() + 1);
    const D = (date.getDate() < 10 ? `0${(date.getDate() + 1)}` : date.getDate());
    return `${Y}${gap}${M}${gap}${D}`;
  },
};

console.log(
  doge.formatTime()
);
