import axios from 'axios'
// import moment from "moment";
import store from '../store'
import { Message, MessageBox } from 'element-ui'
import qs from 'qs'
import { getToken, setToken, removeToken } from '@/utils/auth'
import md5 from "js-md5";

axios.defaults.timeout = 300000
axios.defaults.headers.post['Content-Type'] =
  'application/json;charset=UTF-8'

export function getLocalbaseURL() {
  if (window.location.host) {
    // return 'http://192.168.1.207:8099/'//任明轩
    // return 'https://gf.njguochu.com:9021/'//公网地址
    return 'http://localhost:3001/'
    // return 'https://zhsq.njguochu.com:8052/'//公网生产
  } else {
    return 'http://192.168.1.121:8080/scgz'
  }
}

// http 请求 拦截器
axios.interceptors.request.use(
  config => {
    let timestamp = Date.parse(new Date());
    const token = getToken()
    // const token = 'tokens'
    console.log(token,111111)
    // console.log(timestamp,222222)
    // console.log(timestamp + token,4444444444444)
    // console.log(md5(timestamp + token),33333)
    if (!!token) {
      config.headers.token = `${token}`
      // config.headers.token = '123'
      config.headers.sign = md5(timestamp + token)
      config.headers.timestamp = timestamp
      // config.headers['Content-Type'] =
      //   'application/x-www-form-urlencoded;charset=UTF-8'
    }

    return config
  },
  error => {
    return Promise.reject(err)
  }
)
// http 响应 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.code !== 200) {
      console.log(response,"responseresponseresponse")
      let Error = ''
      switch (response.data.code) {
        case -1:
          Error = '-1系统错误'
          Message({
            message: Error,
            type: 'error',
            duration: 5 * 1000
          })
          break
        case 503:
          router.push({ path: '/' })
          break
        case 1001:
          let IsOpen = false;
          if (!IsOpen) {
            IsOpen = true;
            MessageBox.confirm('身份验证失败，请重新登录！', 'Confirm logout', {
              confirmButtonText: '重新登录',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              store.dispatch('user/resetToken').then(() => {
                location.reload()
              })
            })
          }
          break
        default:
          break

      }
      return response
    } else {
      // Toast(response.data.error)
      return response
    }
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}) {
  axios.defaults.baseURL = getLocalbaseURL()
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function postforapply(url, data = {}) {
  data = Object.assign(data, {
    // userId: 'fa70a2220d9f45f290951a791a53709a',
    // requestId: moment().format("HHmmssSSS")
  })

  // data = qs.stringify(data) // 请求参数转换格式
  axios.defaults.baseURL = getLocalbaseURL()
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
  data = Object.assign(data, {
    // userId: 'fa70a2220d9f45f290951a791a53709a',
    // requestId: moment().format("HHmmssSSS")
  })

  // data = qs.stringify(data) // 请求参数转换格式
  // data["tenantGuid"] = store.state.user.unitGuid
  // console.log(data,"获取参数")
  axios.defaults.baseURL = getLocalbaseURL()
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}

export function post2(url, data) {
  data = Object.assign(data, {
  })
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
  }
  // data["tenantGuid"] = store.state.user.unitGuid
  // console.log(data,"datadatadatadata")
  data = qs.stringify(data)
  axios.defaults.baseURL = getLocalbaseURL()
  return new Promise((resolve, reject) => {
    axios.post(url, data, config).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}

export function post3(url, data) {
  var fd = new FormData()
  fd.append('files', data.files)
  fd.append('userId', data.userId)
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  axios.defaults.baseURL = getLocalbaseURL()
  return new Promise((resolve, reject) => {
    axios.post(url, fd, config).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}

export function post123(url, data = {}) {
  // data = Object.assign(data, {
  //   // userId: 'fa70a2220d9f45f290951a791a53709a',
  //   // requestId: moment().format("HHmmssSSS")
  // })
  // data = qs.stringify(data) // 请求参数转换格式
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  axios.defaults.baseURL = getLocalbaseURL()
  return new Promise((resolve, reject) => {
    // console.log('+++',data)
    axios.post(url, data,config).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}
