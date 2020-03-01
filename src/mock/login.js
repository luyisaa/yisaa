import {paramToObj} from '@/utils';

const userMap = {
  admin: {
    roles: ['admin'],
    token: 'admin',
    name: 'Super Admin',
    introduction: '我是超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  },
  editor: {
    roles: ['editor'],
    token: 'editor',
    name: 'Normal Editor',
    introduction: '我是普通编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  }
}

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body);
    return userMap[username];
  },
  getUserInfo: config => {
    const { token } = paramToObj(config.url)
    if(userMap[token]) {
      return userMap[token];
    } else {
      return false;
    }
  },
  logout: () => 'success'
}
