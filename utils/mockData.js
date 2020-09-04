export const userInfo = {
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

export  const oderList = [{
  dataSource: {
    tenderName: '章振',
    customerName: '张超',
    adminUserNo:1,
    certNo: '22',
    orderList: [{
      orderDate: '2020-01-04',
      mobile: '18278904219',
      bdName: '张经理',
      currBdOrder: true
    }]
  },
  loanNo: 1,
  boxType: 'order'
},
{
  dataSource: {
    tenderName: '章振',
    customerName: '张超',
    adminUserNo:2,
    certNo: '22',
    orderList: [{
      orderDate: '2020-01-04',
      mobile: '18278904219',
      bdName: '张经理',
      currBdOrder: true
    }]
  },
  loanNo: 1,
  boxType: 'order'
},
{
  dataSource: {
    tenderName: '章振',
    customerName: '张超2',
    adminUserNo:3,
    certNo: '22',
    orderList: [
      {
      orderDate: '2020-01-04',
      mobile: '18278904219',
      bdName: '张经理',
      currBdOrder: true
    },
      {
      orderDate: '2020-01-04',
      mobile: '18278904219',
      bdName: '张经理',
      currBdOrder: true
    },
  ]
  },
  loanNo: 1,
  boxType: 'order'
},
{
  dataSource: {
    tenderName: '章振',
    customerName: '张超',
    adminUserNo:4,
    certNo: '22',
    orderList: [{
      orderDate: '2020-01-04',
      mobile: '18278904219',
      bdName: '张经理',
      currBdOrder: true
    }]
  },
  loanNo: 1,
  boxType: 'order'
},
{
  dataSource: {
    tenderName: '章振',
    customerName: '张超',
    adminUserNo:5,
    certNo: '22',
    orderList: [{
      orderDate: '2020-01-04',
      mobile: '18278904219',
      bdName: '张经理',
      currBdOrder: true
    }]
  },
  loanNo: 1,
  boxType: 'order'
},
]

export const Menu =[{
  resourceName: '丽人贷办单',
  resourceCode: 'order',
  subMenu: [{
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

export const merchantsList =  [{
  iconInfos:{
    text:'商'
  },
  text:'广西南宁美容有限公司',
  partnerNo:1,
  showExpeditedCreditQRCode:true,
  showSupCreditQRCode:true,
  showNormalCreditQRCode:true,
}]

export const clientDetail = {
  clientName: '张超',
  age: '12',
  phone: '18278904219',
  certNo: '450521199602206131',
  address: '广西南宁龙光世纪',
  workIndustryName: '码农',
  contracts: [{
    contractName: '老爸',
    contractPhone: '127803348355',
    contractRelation:'父子'
  }]
}