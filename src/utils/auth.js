import Cookies from 'js-cookie'

const TokenKey = 'admin-token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  // 设置token，并填写有效期
  var maxAge = new Date(new Date().getTime() + 30 * 60 * 1000)
  return Cookies.set(TokenKey, token, {expires: maxAge})
};

export function removeToken() {
  return Cookies.remove(TokenKey)
}
