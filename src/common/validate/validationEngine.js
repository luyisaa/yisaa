/**
 * 表单正则校验
 * @author lj l16076
 */
const validationEngine = {
  /* ********* 以下为文本类校验 **************** */
  /**
   * 表单校验-特殊字符校验1  (建议使用)
   * 只能输入中文、英文、数字、空格、下划线和连接线，且首部不能为空格，字符串中间可以为空格
   */
  specialWordValidateHead: function (val) {
    let reg = /^[\w\u4e00-\u9fa5\-_][\s\w\u4e00-\u9fa5\-_]*(?!\s)$/;
    return reg.test(val);
  },
  /**
   *  表单校验-特殊字符校验2
   * 只能输入中文、英文、数字、空格、下划线和连接线，且首尾不能为空格，字符串中间可以为空格
   */
  specialWordValidateLast: function (val) {
    let reg = /^[\w\u4e00-\u9fa5\-_][\s\w\u4e00-\u9fa5\-_]*[\w\u4e00-\u9fa5\-_]$/;
    return reg.test(val);
  },
  /**
   * 表单校验-特殊字符校验3
   * 只能输入汉字、数字、字母、下划线，其中不能以下划线开头和结尾
   * @param value
   * @returns bool
   */
  specialWordCheck: function (val) {
    let reg = /^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
    return reg.test(val);
  },
  /**
   * 表单校验-非汉字、特殊字符
   * 只能输入数字、26个英文字母或者下划线
   */
  nonChineseValidate: function (val) {
    let reg = /^[0-9a-zA-Z_]{1,}$/;
    return reg.test(val);
  },
  nonChineseValidate2: function (val) {
    let reg = /^\w+$/;
    return reg.test(val);
  },
  /**
   * 表单校验-汉字
   * 只能输入汉字
   */
  chineseValidate: function (val) {
    let reg = /^[\u0391-\uFFE5]+$/;
    return reg.test(val);
  },
  /**
   * 表单校验-英文字母
   * 只能输入26个英文字母
   */
  ZmValidate: function (val) {
    let reg = /^[a-zA-Z]*$/;
    return reg.test(val);
  },
  /**
   * 表单校验-大写英文字母校验
   * 只能输入26个大写英文字母
   */
  AZValidate: function (val) {
    let reg = /^[A-Z]+$/;
    return reg.test(val);
  },
  /**
   * 表单校验-小写英文字母校验
   * 只能输入26个小写英文字母
   */
  azValidate: function (val) {
    let reg = /^[a-z]+$/;
    return reg.test(val);
  },
  /* ********** 以上为文本类校验 ****************** */
  /* ********** 以下为数字类校验 ****************** */
  /**
   * 表单校验-数字
   * 只能输入数字
   */
  checkNumber: function (val) {
    let reg = /^[0-9]+$/;
    return reg.test(val);
  },
  /**
   * 表单校验-非负数校验
   * 只能输入非负整数（正整数 + 0 ）;
   */
  nonNegativeNumValidate: function (val) {
    let reg = /^\d+$/;
    return reg.test(val);
  },
  /**
   * 表单校验-正整数校验
   * 只能输入正整数;
   */
  positiveIntValidate: function (val) {
    let reg = /^[0-9]*[1-9][0-9]*$/;
    return reg.test(val);
  },
  /**
   * 表单校验-非正整数校验
   * 只能输入非正整数（负整数 + 0 ）;
   */
  nonPositiveIntValidate: function (val) {
    let reg = /^((-\d+)|(0+))$/;
    return reg.test(val);
  },
  /**
   * 表单校验-负整数校验
   * 只能输入负整数;
   */
  negativeIntValidate: function (val) {
    let reg = /^-[0-9]*[1-9][0-9]*$/;
    return reg.test(val);
  },
  /**
   * 表单校验-整数校验
   * 只能输入整数;
   */
  intValidate: function (val) {
    let reg = /^-?\d+$/;
    return reg.test(val);
  },
  /**
   * 表单校验-浮点数校验
   * 只能输入浮点数
   */
  floatValidate: function (val) {
    let reg = /^(-?\d+)(\.\d+)?$/;
    return reg.test(val);
  },
  /**
   * 表单校验-非负浮点数校验
   * 只能输入非负浮点数（正浮点数 + 0）
   */
  nonNegFloatValidate: function (val) {
    let reg = /^\d+(\.\d+)?$/;
    return reg.test(val);
  },
  /**
   * 表单校验-正浮点数校验
   * 只能输入正浮点数
   */
  positiveFloatValidate: function (val) {
    let reg = /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/;
    return reg.test(val);
  },
  /**
   * 表单校验-非正浮点数校验
   * 只能输入非正浮点数（负浮点数 + 0）
   */
  nonPosFloatValidate: function (val) {
    let reg = /^((-\d+(\.\d+)?)|(0+(\.0+)?))$/;
    return reg.test(val);
  },
  /**
   * 表单校验-负浮点数校验
   * 只能输入负浮点数
   */
  negativeFloatValidate: function (val) {
    let reg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;
    return reg.test(val);
  },
  
  /* ********** 以上为数字类校验 ****************** */
  /* ********** 以下为特殊格式校验 ****************** */
  /**
   * 表单校验-email地址校验
   * 只能输入email地址
   */
  emailValidate: function (val) {
    //let reg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    var reg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    return reg.test(val);
  },
  /**
   * 表单校验-URL检验（最全的URL匹配，推荐使用）
   * 只能输入url地址
   * @param value
   * @returns bool
   */
  fullUrlValidate: function (url) {
    var reg = '^((https|HTTPS|http|HTTP|ftp|FTP|rtsp|RTSP|mms|MMS)?://)'
      + '?(([0-9a-zA-Z_!~*\'().&=+$%-]+: )?[0-9a-zA-Z_!~*\'().&=+$%-]+@)?' //ftp的user@ 
      + '(([0-9]{1,3}.){3}[0-9]{1,3}' // IP形式的URL- 199.194.52.184 
      + '|' // 允许IP和DOMAIN（域名） 
      + '([0-9a-zA-Z_!~*\'()-]+.)*' // 域名- www. 
      + '([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].' // 二级域名 
      + '[a-zA-Z]{2,6})' // first level domain- .com or .museum 
      + '(:[0-9]{1,4})?' // 端口- :80 
      + '((/?)|' // a slash isn't required if there is no file name 
      + '(/[0-9a-zA-Z_!~*\'().;?:@&=+$,%#-]+)+/?)$';
    let strRegex = new RegExp(reg);
    return strRegex.test(url);
  },
  /**
   * 表单校验-url地址校验2
   * 只能输入url地址
   * @param value
   * @returns bool
   * 格式  http(s)://XXXX.www.com
   */
  urlValidate: function (val) {
    let reg = /^(http(s)?:\/\/)?([A-Za-z0-9]+\.)?[\w-]+\.\w{2,4}(\/)?$/;
    return reg.test(val);
  },
  /**
   * 表单校验-IP校验
   * 只能输入正确的ip(1.1.1.1-255.255.255.255)
   * @param value
   * @returns bool
   */
  ipValidate: function (val) {
    let regex = '^(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|[1-9])\\.'
      + '(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)\\.'
      + '(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)\\.'
      + '(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)$';
    let strRegex = new RegExp(regex);
    return strRegex.test(val);
  },
  /**
   * 表单校验-端口号校验
   * 只能输入正确的端口号（0-65535）
   * @param value
   * @returns bool
   */
  portValidate: function (val) {
    let reg = /^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/;
    return reg.test(val.toString());
  },
  /**
   * 表单校验-电话号码校验
   * 只能输入正确的电话号码,11位手机号（18679778662）或固话（037-1789868）
   * @param value
   * @returns bool
   */
  telValidate: function (val) {
    // let phone = /^[1][3,4,5,7,8][0-9]{9}$/;   //手机
    let phone = /^((13[0-9])|(14[5,7,9])|(15([0-3]|[5-9]))|(17[0,1,3,5,6,7,8])|(18[0-9])|(19[8|9]))\d{8}$/im ;
    // let mob = /^((0\d{2,3})-?)(\d{7,8})$/;     //座机
    let mob = /^(0[0-9]{2,3}-)?([2-9][0-9]{6,7})+(-[0-9]{1,4})?$/;
    return phone.test(val.toString()) || mob.test(val.toString());
  },
  /**
   * 表单校验-18位身份证号校验
   * 只能输入正确的18位身份证号
   * @param value
   * @returns bool
   */
  /** identityNumberValidate: function (val) {
    let reg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i;
    return reg.test(val.toString());
  },
  **/
  /**
   * 匹配身份证
   * @param value
   * @returns {number}
   */
  identityNumberPatternValidate: function (value) {
    var str = value.toString();
    const pattern = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i; // 18位身份证校验
    return (str.match(pattern) && this.identityNumberDaysPatternValidate(str.substr(6, 8)));
  },
  /**
   * 判断年月日是否合法
   * @param {*} yyyyMMdd
   */
  identityNumberDaysPatternValidate: function (value) {
    let days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      year = Number(value.substr(0, 4)),
      month = Number(value.substr(4, 2)),
      day = Number(value.substr(6, 2));

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      days[2] ++;
    }
    return day <= days[month];
  },
  
  /**
   * 表单校验-年-月-日校验
   * 只能输入正确的年-月-日(1879-09-29)
   * @param value
   * @returns bool
   */
  ymdValidate: function (val) {
    let reg = /^(\d{2}|\d{4})-((0([1-9]{1}))|(1[1|2]))-(([0-2]([1-9]{1}))|(3[0|1]))$/;
    return reg.test(val);
  },
  /**
   * 表单校验-空行校验
   * 只能输入正确的空行
   * @param value
   * @returns bool
   */
  blankLineValidate: function (val) {
    let reg = /^\n[\s| ]*\r$/;
    return reg.test(val);
  }
}
export default validationEngine;
