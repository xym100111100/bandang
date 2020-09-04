const userInfo = {
  '1': {
    code: 0,
    data: {
      token: "14a2d93b-6ada-4cc2-aa8c-b3a6d67ba2a4",
      info: {
        phone: '18278904219',
        busiPass: 1,
        adminUserNo: "1268793259442966528",
        userName: '杰克',
        type: 1,
        roles: [{
          roleNo: "111",
          roleName: "admin",
        }]
      }
    }
  },
  '2': {
    code: 0,
    data: {
      token: "14a2d93b-6ada-4cc2-aa8c-b3a6d67ba2a4",
      info: {
        busiPass: 0,
        adminUserNo: "1268793259442966528",
        phone: '18278904218',
        type: 1,
        userName: '小明',
        roles: [{
          roleNo: "111",
          roleName: "edit",
        }]
      }
    }
  },
  '3': {
    code: 0,
    data: {
      token: "14a2d93b-6ada-4cc2-aa8c-b3a6d67ba2a4",
      info: {
        adminUserNo: "1268793259442966528",
        phone: '18278904218',
        type: 1,
        busiPass: 0,
        userName: '小明',
        roles: [{
          roleNo: "111",
          roleName: "edit",
        }]
      }
    }
  }
}
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
  '/login/userLogin': (data) => { // 获取验证码
    if (userInfo[data.cell]) {
      return userInfo[data.cell]
    } else {
      return {
        code: 1,
        msg: '手机号码不正确'
      }
    }
  },
  '/user/getMenu': (data) => { // 获取验证码
    return {
      code: 0,
      data: [{
          resourceName: '丽人贷办单',
          resourceCode: 'order',
          subMenu: [
            {
            resourceCode: 'partner',
            resourceName: '丽人贷商户'
          },
            {
            resourceCode: 'repayment',
            resourceName: '还款'
          },
            {
            resourceCode: 'credit',
            resourceName: '登记'
          },
            {
            resourceCode: 'order',
            resourceName: '进件管理'
          },
            {
            resourceCode: 'givingCredit',
            resourceName: '授信'
          },
            {
            resourceCode: 'orderQuery',
            resourceName: '订单查询'
          },
           
           
        ]
        },
        {
          resourceName: '丽人直通',
          resourceCode: 'zhitong',
          subMenu: [{
            resourceCode: 'credit',
            resourceName: '资源名称2'
          }]
        }
      ]
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