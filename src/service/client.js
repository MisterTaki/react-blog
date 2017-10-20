import axios from 'axios';

const methods = ['get', 'post', 'delete', 'put'];

class Client {
  constructor() {
    methods.forEach((method) => {
      this[method] = (url, { params, data } = {}) =>
        new Promise((resolve, reject) => {
          axios({
            method,
            url,
            params,
            data,
          })
            .then((response) => {
              if (response.data.ret === true) {
                return resolve(response.data.data);
              }
              if (response.data.errcode === 2) {
                // 认证信息错误
              } else {
                // 后端接口错误
              }
              return reject(response.data.msg);
            })
            .catch(err => reject(err));
        });
    });
  }
}

export default new Client();
