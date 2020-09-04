const API_HOST = "http://192.168.8.104:9055";
import {
    getToken
} from "./auth"
//const API_HOST = "https://riskwaste-appapi.gxfunc.com/release";
const Mock = require("./mockApi")

const DEBUG = true; //切换数据入口

// params没有参数请传一个空对象
function request(url, data, method, onSuccess, onFailed) {
   // console.log("请求",url, data)
    if (!DEBUG) {
        wx.request({
            url: API_HOST+url,
            method: method,
            data: data,
            header: {
                'X-Auth-Token': getToken()
            },
            success: function (res) {
                if(res.code ===0){
                    onSuccess(res.data);
                }else{
                    wx.showToast({
                      title: res.msg,
                    })
                }
                
            },
            fail: function (res) {
                onFailed && onFailed(res.data) 
            },
        });
    } else {
        // 模拟请求延迟
        setTimeout(() => {
            let obj = Mock(url,data)
            if(obj.code ===0){
                onSuccess(obj)
            }else{
                wx.showToast({
                  title: obj.msg,
                  icon:'none'
                })
            }
        }, 500);
    }
}
module.exports = {
    request: request
}