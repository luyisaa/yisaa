import ValidationEngine from './validationEngine.js';

  // 特殊字符校验
const checkSpecialWord = (rule, value, callback) => {
  let matchRes = ValidationEngine.specialWordValidateHead(value);
  matchRes ? callback() : callback(new Error('请输入中文、英文、数字、空格、下划线和连接线，其中首部不能为空格'));
};
// 端口号校验
const checkPort = (rule, value, callback) => {
  let matchRes = ValidationEngine.portValidate(value);
  matchRes ? callback() : callback(new Error('请输入正确的端口号'));
};
// url校验
const checkUrl = (rule, value, callback) => {
  let matchRes = ValidationEngine.fullUrlValidate(value);
  matchRes ? callback() : callback(new Error('请输入正确的URL'));
};
// IP校验
const checkIp = (rule, value, callback) => {
  let matchRes = ValidationEngine.ipValidate(value);
  matchRes ? callback() : callback(new Error('请输入正确的IP'));
};
// 资源目录-信息项长度校验
const checkItemLength = (rule, value, callback) => {
  if (!value) {
    return callback();
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('信息项长度必须为[0,65535]之间的整数'));
    } else {
      if (value < 0 || value > 65535) {
        callback(new Error('请输入[0,65535]之间的整数'));
      } else {
        callback();
      }
    }
  }, 200);
};
// 资源目录-资源大普查非负数值校验
const checkTotalStorageNum = (rule, value, callback) => {
  if (!value) {
    return callback();
  }
  setTimeout(() => {
    if (!Number(value)) {
      callback(new Error('必须为数字值'));
    } else {
      if (value < 0) {
        callback(new Error('请输入非负数！'));
      } else {
        callback();
      }
    }
  }, 200);
};
//校验身份证号
const checkIdentityNumber = (rule, value, callback) => {
  var matchRes = ValidationEngine.identityNumberPatternValidate(value);
  matchRes ? callback() : callback(new Error('请输入正确的18位身份证号'));
};
//校验电话号码
const checkPhone = (rule, value, callback) => {
  var matchRes = ValidationEngine.telValidate(value);
  matchRes ? callback() : callback(new Error('请输入正确的联系电话'));
};
//校验email
const checkEmailAddress = (rule, value, callback) => {
  var matchRes = ValidationEngine.emailValidate(value);
  matchRes ? callback() : callback(new Error('请输入正确邮箱地址'));
};
//校验年龄
const checkAge = (rule, value, callback) => {
  var matchRes = ValidationEngine.positiveIntValidate(value);
  if(!value){
    callback();
  }
  setTimeout(() => {
    if (!matchRes) {
      callback(new Error('年龄必须为正整数数字'));
    } else {
      if (value > 150 || value < 1) {
        callback(new Error('请输入1--150的合理年龄'));
      } else {
        callback();
      }
    }
  }, 200);
};
export {
  checkSpecialWord,
  checkPort,
  checkUrl,
  checkIp,
  checkItemLength,
  checkTotalStorageNum,
  checkIdentityNumber,
  checkPhone,
  checkEmailAddress,
  checkAge
};
