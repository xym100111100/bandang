import {
  userInfo,
  oderList,
  Menu,
  merchantsList,
  clientDetail,
  orderDetail
} from './mockData'


const MockData = {
  '/login/getAuthCode': (data) => { // 获取验证码
    if (userInfo[data.cell]) {
      return userInfo[data.cell]
    } else {
      return {
        code: 1,
        msg: '手机号码不正确'
      }
    }
  },
  '/login/userLogin': (data) => { // 登陆
    if (userInfo[data.cell]) {
      return userInfo[data.cell]
    } else {
      return {
        code: 1,
        msg: '手机号码不正确'
      }
    }
  },
  '/order/getOderList': (data) => { // 获取订单
    return {
      code: 0,
      data: oderList
    }
  },
  '/user/getMenu': (data) => { // 获取首页菜单
    return {
      code: 0,
      data: Menu
    }
  },
  '/user/getMerchantsList': (data) => { // 获取首页菜单
    return {
      code: 0,
      data: merchantsList
    }
  },
  '/order/getcClientDetail': (data) => { // 获取客户信息
    return {
      code: 0,
      data: clientDetail
    }
  },
  '/order/getOderDetail': (data) => { // 获取订单详情
    return {
      code: 0,
      data: orderDetail
    }
  },


}

function MockApi(url, data) {
  let res = MockData[url]
  if (res) {
    return res(data)
  } else {
    return {
      code: 1,
      msg: '404咯'
    }
  }
}



module.exports = MockApi