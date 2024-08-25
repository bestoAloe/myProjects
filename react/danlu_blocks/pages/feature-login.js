
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc168612 from '../components/Xbenchc168612'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import { Image } from 'expo-image'
import XbenchcPicker from '../../xbench/xbenchc/components/XbenchcPicker'
import XbenchcInput from '../../xbench/xbenchc/components/XbenchcInput'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

let action57remove = false
let action57lock = false
let action57storeLock = false
let action109lock = false
let action24lock = false
let action23lock = false
let action81lock = false
let action93lock = false
let action63lock = false
let action202lock = false
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action17 = state.is_ready = (false)
  const action126 = state.views = ([/**/  {/**/    id: "code",/**/    name: "验证码登录"/**/  },/**/  {/**/    id: "login",/**/    name: "密码登录"/**/  }/**/])
  const action41 = state.view = ('code')
  const action8 = state.username = ("")
  const action9 = state.password = ("")
  const action49 = state.password1 = ("")
  const action50 = state.password2 = ("")
  const action48 = state.code = ("")
  const action36 = state.agree = (true)
  const action11 = state.siteuser = (null)
  /* action53: 发送验证码 */
  const action52 = state.timeout = (60)
  const action54 = state.sending = (false)
  const action127 = state.ranges = ([/**/  {/**/    label: "+86",/**/    value: "+86"/**/  },/**/  {/**/    label: "+00",/**/    value: "+00"/**/  }/**/])
  const action128 = state.range = (0)
  const action162 = state.config = (null)
  const action164 = state.ready = (false)
  const action195 = state.focus_input = (null)
  const action196 = state.platform = (dw.platform)
  const action216 = state.mode = ("default")
  return state
}

const action2 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action56 = await store.dispatch("func11", {})
  const action163 = await store.dispatch("func20", {})
  const action165 = store.commit('setState', {["state.ready"]: true})
}

const action55 = actions['func11'] = async function (store, event) {
  const state = store.state
  
      if (!action57lock) {
        // console.log('action57定期执行：初始化')
        action57lock = true
        const action57func = async () => {
          // console.log('action57定期执行：开始执行')
          if (action57remove) return
          const stop = await (async () => {
    if (state.sending && state.timeout > 1) {
      const action61 = store.commit('setState', {["state.timeout"]: state.timeout - 1})
    } else if (state.sending && state.timeout == 1) {
      const action67 = store.commit('setState', {["state.timeout"]: 60, ["state.sending"]: false})
    }
  
          })()
          if (!stop) setTimeout(() => action57func(), 1000)
        }
        action57func()
      }
      if (!action57storeLock) {
        action57storeLock = true
        store.$store.subscribeAction({
          enter: (action, state) => {
            // console.log('enter', action, state)
            if (['onShow', 'created'].includes(action.type)) {
              // console.log('action57定期执行：onShow 重新开始')
              action57remove = false
              action57lock = false
            }
            if (['onHide', 'onUnload', 'beforeDestroy'].includes(action.type)) {
              // console.log('action57定期执行：onHide 停止执行')
              action57remove = true
              action57lock = false
            }
          }
        })
      }
      const action57 = undefined
      
}

const action4 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action109 = await (async () => {
  
      if (action109lock) return true
      action109lock = true
      try {
    let type = (event.context.eventData)
    const action111 = type
    const action110 = console.log('[func1#action110] type', type)
    const action113 = await (async (store, event) => {
return await dw.fetch('app/terms/terms_web.get_terms_url')
})(store, event)
    const action116 = console.log('[func1#action116] 打印(action113)的返回值', action113)
    if (!(action113.data && action113.data.mobile_urls && action113.data.mobile_urls[type])) {
      const action262 = await dw.showToast({"icon": "none", "mask": false, "image": "", "title": "加载失败，请安装并配置协议条款应用", "duration": 1500, "content": "加载失败，请安装并配置协议条款应用"})
    }
    let url = (action113.data.mobile_urls[type])
    const action117 = url
    const action118 = console.log('[func1#action118] 打印(url)的返回值', url)
    if (dw.app.is('rnapp')) {
      
        const action123 = dw.app.RnappBridge && await dw.app.RnappBridge.call('openBrowserAsync', {
          url: url
        })
        
    } else {
      const action125 = ((store, event) => {
window.open(url, "_blank")
})(store, event)
    }
  
      } catch (e) {
        throw e
      } finally {
        action109lock = false
      }
      
  })()
}

const action18 = actions['func5'] = async function (store, event) {
  const state = store.state
  const action24 = await (async () => {
  
      if (action24lock) return true
      action24lock = true
      try {
    
          const action19 = (dw.platform === 'dwapp' || dw.platform === 'rnapp')
          ? (await dw.logout())
          : (await app.SSOUtils.accoutLogout()).data
          
    dw.app.is('rnapp') && await dw.app.RnappBridge.clearStorage()
    const action21 = await dw.showToast({"icon": "success", "mask": false, "image": "", "title": "退出成功", "duration": 1500, "content": "退出成功"})
    const action22 = await dw.navigateBack({delta: 1})
  
      } catch (e) {
        throw e
      } finally {
        action24lock = false
      }
      
  })()
}

const action37 = actions['func6'] = function (store, event) {
  const state = store.state
  const action38 = store.commit('setState', {["state.agree"]: !state.agree})
}

const action42 = actions['func7'] = function (store, event) {
  const state = store.state
  const action44 = store.commit('setState', {["state.view"]: "code", ["state.password"]: ""})
}

const action43 = actions['func8'] = function (store, event) {
  const state = store.state
  const action45 = store.commit('setState', {["state.view"]: "signup"})
}

const action46 = actions['func9'] = function (store, event) {
  const state = store.state
  const action47 = store.commit('setState', {["state.view"]: "login", ["state.code"]: ""})
}

const action10 = actions['func3'] = async function (store, event) {
  const state = store.state
  const action23 = await (async () => {
  
      if (action23lock) return true
      action23lock = true
      try {
    
        dw.showLoading({
          title: "",
          mask: true
        })
        let action80
        try {
          action80 = await (async () => {
        
      if (!state.agree) {
        const action244 = await dw.showToast({"icon": "none", "mask": false, "image": "", "title": "请先阅读并同意协议", "duration": 1500, "content": "请先阅读并同意协议"})
      } else if (!state.username) {
        const action246 = await dw.showToast({"icon": "none", "mask": false, "image": "", "title": "请填写用户名/手机号", "duration": 1500, "content": "请填写用户名/手机号"})
      } else if (!state.password) {
        const action248 = await dw.showToast({"icon": "none", "mask": false, "image": "", "title": "请填写密码", "duration": 1500, "content": "请填写密码"})
      }
      const action156 = await dw.fetch("post/capi_company_account/login", {"password": state.password, "username": state.username})
      
        if ((action156.data.status) === ("error")) {
          const action30message = (action156.data.message || "操作错误！")
          const action30title = ("提示")
          action30message && dw.alert(action30title, action30message)
          return {}
        }
        
      const action29 = console.log('[func3#action29] action156', action156)
      const action158 = await (async (store, event) => {
return await dw.loginByToken(action156.data.siteuser_token)
})(store, event)
      
        if ((action158.status) === ("error")) {
          const action159message = (action158.message || "操作错误！")
          const action159title = ("提示")
          action159message && dw.alert(action159title, action159message)
          return {}
        }
        
      const action32 = await dw.showToast({"icon": "success", "mask": false, "image": "", "title": "登录成功", "duration": 1500, "content": "登录成功"})
      const action33 = await dw.navigateBack({delta: 1})
    
          })()
        } finally {
          dw.hideLoading()
        }
        
  
      } catch (e) {
        throw e
      } finally {
        action23lock = false
      }
      
  })()
}

const action79 = actions['func13'] = async function (store, event) {
  const state = store.state
  const action81 = await (async () => {
  
      if (action81lock) return true
      action81lock = true
      try {
    
        dw.showLoading({
          title: "",
          mask: true
        })
        let action82
        try {
          action82 = await (async () => {
        
      if (!state.agree) {
        const action242 = await dw.showToast({"icon": "none", "mask": false, "image": "", "title": "请先阅读并同意协议", "duration": 1500, "content": "请先阅读并同意协议"})
      } else if (!(state.username && /^\d{11}$/.test(state.username))) {
        const action238 = await dw.showToast({"icon": "none", "mask": false, "image": "", "title": "请输入手机号", "duration": 1500, "content": "请输入手机号"})
      } else if (!state.code) {
        const action240 = await dw.showToast({"icon": "none", "mask": false, "image": "", "title": "请填写验证码", "duration": 1500, "content": "请填写验证码"})
      }
      /* action167: 判断当前用户是否已经注册 */
      const action168 = await dw.app.run("member.check_mobile_get_pwd", {"mobile": state.username})
      
        if ((action168.status) === ("error")) {
          const action169message = (action168.message || "操作错误！")
          const action169title = ("提示")
          action169message && dw.alert(action169title, action169message)
          return {}
        }
        
      let isSignUp = (action168.isSignUp)
      const action170 = isSignUp
      if (isSignUp) {
        const action86 = await dw.fetch("post/capi_company_account/login_with_mobile", {"code": state.code, "mobile": state.username})
        
        if ((action86.data.status) === ("error")) {
          const action87message = (action86.data.message || "操作错误！")
          const action87title = ("提示")
          action87message && dw.alert(action87title, action87message)
          return {}
        }
        
        const action88 = console.log('[func13#action88] 打印(action86)的返回值', action86)
        const action166 = await (async (store, event) => {
return await dw.loginByToken(action86.data.siteuser_token)
})(store, event)
        
        if ((action166.status) === ("error")) {
          const action92message = (action166.message || "APP 登录失败")
          const action92title = ("提示")
          action92message && dw.alert(action92title, action92message)
          return {}
        }
        
        const action89 = await dw.showToast({"icon": "success", "mask": false, "image": "", "title": "登录成功", "duration": 1500, "content": "登录成功"})
        const action90 = await dw.navigateBack({delta: 1})
      } else {
        let pwd = (action168.pwd)
        const action175 = pwd
        const action177 = await dw.fetch("post/capi_company_account/login", {"password": pwd, "username": state.username})
        
        if ((action177.data.status) === ("error")) {
          const action178message = (action177.data.message || "操作错误！")
          const action178title = ("提示")
          action178message && dw.alert(action178title, action178message)
          return {}
        }
        
        const action179 = console.log('[func13#action179] action177', action177)
        const action180 = await (async (store, event) => {
return await dw.loginByToken(action177.data.siteuser_token)
})(store, event)
        
        if ((action180.status) === ("error")) {
          const action181message = (action180.message || "操作错误！")
          const action181title = ("提示")
          action181message && dw.alert(action181title, action181message)
          return {}
        }
        
        const action182 = await dw.showToast({"icon": "success", "mask": false, "image": "", "title": "登录成功", "duration": 1500, "content": "登录成功"})
        const action183 = await dw.navigateBack({delta: 1})
      }
    
          })()
        } finally {
          dw.hideLoading()
        }
        
  
      } catch (e) {
        throw e
      } finally {
        action81lock = false
      }
      
  })()
}

const action51 = actions['func10'] = async function (store, event) {
  const state = store.state
  const action93 = await (async () => {
  
      if (action93lock) return true
      action93lock = true
      try {
    
        dw.showLoading({
          title: "",
          mask: true
        })
        let action94
        try {
          action94 = await (async () => {
        
      if (!state.agree) {
        const action250 = await dw.showToast({"icon": "none", "mask": false, "image": "", "title": "请先阅读并同意协议", "duration": 1500, "content": "请先阅读并同意协议"})
      } else if (!(state.username && /^\d{11}$/.test(state.username))) {
        const action252 = await dw.showToast({"icon": "none", "mask": false, "image": "", "title": "请输入11位手机号", "duration": 1500, "content": "请输入11位手机号"})
      } else if (!state.code) {
        const action254 = await dw.showToast({"icon": "none", "mask": false, "image": "", "title": "请填写验证码", "duration": 1500, "content": "请填写验证码"})
      } else if (!state.password1) {
        const action256 = await dw.showToast({"icon": "none", "mask": false, "image": "", "title": "请填写密码", "duration": 1500, "content": "请填写密码"})
      } else if (!(state.password2 && state.password1 === state.password2)) {
        const action258 = await dw.showToast({"icon": "none", "mask": false, "image": "", "title": "请重复填写密码并保证两次输入的密码一致", "duration": 1500, "content": "请重复填写密码并保证两次输入的密码一致"})
      }
      const action107 = await (async (store, event) => {
return await dw.request('post/company_account/signup_with_mobile', {
  mobile: state.username,
  code: state.code,
  password1: state.password1,
  password2: state.password2,
})

})(store, event)
      
        if ((action107.data.status) === ("error")) {
          const action99message = (action107.data.message || "操作错误！")
          const action99title = ("提示")
          action99message && dw.alert(action99title, action99message)
          return {}
        }
        
      const action100 = console.log('[func10#action100] 打印(action107)的返回值', action107)
      const action101 = await dw.app.RnappBridge.login(action107.data.siteuser_token)
      
        if ((action101.status) === ("error")) {
          const action102message = (action101.message || "APP 登录失败")
          const action102title = ("提示")
          action102message && dw.alert(action102title, action102message)
          return {}
        }
        
      const action103 = await dw.showToast({"icon": "success", "mask": false, "image": "", "title": "注册成功", "duration": 1500, "content": "注册成功"})
      const action104 = await dw.navigateBack({delta: 1})
      await new Promise((resolve, reject) => setTimeout(resolve, 1000))
    
          })()
        } finally {
          dw.hideLoading()
        }
        
  
      } catch (e) {
        throw e
      } finally {
        action93lock = false
      }
      
  })()
}

const action62 = actions['func12'] = async function (store, event) {
  const state = store.state
  const action63 = await (async () => {
  
      if (action63lock) return true
      action63lock = true
      try {
    
        dw.showLoading({
          title: "",
          mask: true
        })
        let action78
        try {
          action78 = await (async () => {
        
      
        if (!!(state.sending) === (true)) {
          const action65message = ("")
          const action65title = ("提示")
          action65message && dw.alert(action65title, action65message)
          return {}
        }
        
      if (!(state.username && /^\d{11}$/.test(state.username))) {
        const action260 = await dw.showToast({"icon": "none", "mask": false, "image": "", "title": "请输入11位手机号", "duration": 1500, "content": "请输入11位手机号"})
      }
      
          const action76 = await dw.fetch('post/verification_code/send_verify_code', { mobile: state.username })
          
      
        if ((action76.status) === ("error")) {
          const action77message = (action76.message || "验证码发送错误")
          const action77title = ("提示")
          action77message && dw.alert(action77title, action77message)
          return {}
        }
        
      const action75 = await dw.showToast({"icon": "success", "mask": false, "image": "", "title": "发送成功", "duration": 1500, "content": "发送成功"})
      const action71 = store.commit('setState', {["state.timeout"]: 60, ["state.sending"]: true})
    
          })()
        } finally {
          dw.hideLoading()
        }
        
  
      } catch (e) {
        throw e
      } finally {
        action63lock = false
      }
      
  })()
}

const action129 = actions['func14'] = function (store, event) {
  const state = store.state
  const action131 = console.log('[func14#action131] event', event)
  const action130 = store.commit('setState', {["state.range"]: event.data.detail.value})
}

const action133 = actions['func15'] = function (store, event) {
  const state = store.state
  const action135 = console.log('[func15#action135] event', event)
  const action134 = store.commit('setState', {["state.username"]: event.data.detail.value})
}

const action136 = actions['func16'] = function (store, event) {
  const state = store.state
  const action138 = console.log('[func16#action138] event', event)
  const action139 = store.commit('setState', {["state.code"]: event.data.detail.value})
}

const action140 = actions['func17'] = function (store, event) {
  const state = store.state
  const action143 = console.log('[func17#action143] event', event)
  const action144 = store.commit('setState', {["state.password"]: event.data.detail.value})
}

const action145 = actions['func18'] = function (store, event) {
  const state = store.state
  const action146 = dw.app.goToPappUrl("forget_pwd", {}, {redirectTo: false})
}

const action147 = actions['func19'] = function (store, event) {
  const state = store.state
  const action148 = store.commit('setState', {["state.username"]: ""})
}

const action150 = actions['func20'] = async function (store, event) {
  const state = store.state
  const action161 = await dw.app.run("config.get", {})
  const action160 = store.commit('setState', {["state.config"]: action161.object})
}

const action197 = actions['func21'] = function (store, event) {
  const state = store.state
  const action198 = store.commit('setState', {["state.focus_input"]: event.context.eventData})
}

const action201 = actions['func23'] = async function (store, event) {
  const state = store.state
  const action202 = await (async () => {
  
      if (action202lock) return true
      action202lock = true
      try {
    let action203
    
        action203 = (dw.platform === 'rnapp') ? await (async () => {
      const action204 = console.log('[func23#action204] 打印点中授权按钮', '')
      
        const action205 = dw.app.RnappBridge && await dw.app.RnappBridge.call('getAppUser', {})
        
      const action206 = console.log('[func23#action206] 打印appuser', action205)
      if ((action205 && action205.status) === ('success')) {
        const action209 = await (async (store, event) => {
if (action205.installation && action205.installation && action205.installation.siteuser_id) {
  // 授权并登录成功
  const action21 = await dw.showToast({
    icon: 'success',
    mask: false,
    image: '',
    title: '授权并登录成功',
    duration: 1500,
    content: '授权并登录成功'
  })
  setTimeout(async () => {
    await dw.navigateBack({ delta: 1 })
  }, 500)
} else {
  // 仅授权未登录
  dw.alert('授权成功，请用手机号登录注册绑定用户')
  store.commit('setState', {'state.mode': 'bindAccount'})
  store.commit('setState', {'state.appuser': action205.appuser})
}

// TODO: 显示用户头像信息
return action205.appuser

})(store, event)
      } else {
        const action215response = await dw.showModal({
        title: "提示",
        content: "授权登录失败" + action205.message,
        confirmText: "确定",
        confirmColor: "#576b95",
        showCancel: false,
        cancelText: "取消",
        cancelColor: "#000000",
        styleType: "default",
        styleTheme: "default",
        styleThemeStyles: undefined
      })
        const action215 = action215response && action215response.confirm
      }
    
        })() : undefined
        
  
      } catch (e) {
        throw e
      } finally {
        action202lock = false
      }
      
  })()
}

const action217 = actions['func24'] = async function (store, event) {
  const state = store.state
  const action223 = store.commit('setState', {["state.agree"]: true})
  const action226 = await store.dispatch("func13", {})
}

const action227 = actions['func25'] = async function (store, event) {
  const state = store.state
  const action229 = await dw.app.run("member.login_by_nothing", {})
  
        if ((action229.status) === ("error")) {
          const action230message = (action229.message || "操作错误！")
          const action230title = ("提示")
          action230message && dw.alert(action230title, action230message)
          return {}
        }
        
  const action231 = store.commit('setState', {["state.username"]: action229.username, ["state.password"]: action229.password, ["state.agree"]: true})
  const action234 = await store.dispatch("func3", {})
}

const action235 = actions['func26'] = function (store, event) {
  const state = store.state
  const action236 = dw.app.goToPappUrl("mergetermsdetail", {"type": "service"}, {redirectTo: false})
}

exports.default =  {
  actions
}

        return exports.default;
      });
    

    const getDate = (...args) => new Date(...args);
    const getRegExp = (...args) => new RegExp(...args);

    computeds = (function () {
      const module = {};
      'use strict';

var actions = {};

var action73 = actions['computed1'] = function (event, state) {
  return state.sending ? state.timeout + 's\u540E\u91CD\u65B0\u53D1\u9001' : '获取验证码';
};
// COMPUTED_ACTION_META:computed1 {"deps":["sending","timeout"]}

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdw1: {
  width: pm(170),
  height: pm(51),
},
xdw2: {
  marginTop: pm(60),
  flexDirection: "column",
},
xdw3: {
  color: "#181818",
  fontSize: pm(14),
  fontWeight: "500",
  lineHeight: pm(19),
},
xdw4: {
  width: pm(10),
  height: pm(3),
  marginTop: pm(3),
  flexDirection: "column",
  backgroundColor: "#FFD142",
  borderTopLeftRadius: pm(1),
  borderTopRightRadius: pm(1),
  borderBottomLeftRadius: pm(1),
  borderBottomRightRadius: pm(1),
},
xdw5: {
  alignItems: "center",
  flexDirection: "column",
},
xdw6: {
  color: "#999999",
  fontSize: pm(14),
  lineHeight: pm(19),
},
xdw7: {
  flexDirection: "column",
  borderTopLeftRadius: pm(1),
  borderTopRightRadius: pm(1),
  borderBottomLeftRadius: pm(1),
  borderBottomRightRadius: pm(1),
},
xdw8: {
  marginLeft: pm(17),
  flexDirection: "column",
},
xdw9: {
  flexDirection: "row",
},
xdwa: {
  fontSize: pm(12),
  lineHeight: pm(17),
},
xdwb: {
  marginTop: "auto",
  marginLeft: pm(5),
  marginBottom: "auto",
},
xdwc: {
  width: pm(35),
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
},
xdwd: {
  height: pm(43),
  paddingTop: pm(10),
  marginRight: pm(10),
  borderBottomWidth: pm(1),
  borderBottomColor: "#E8E8E8",
  flexDirection: "column",
  paddingBottom: pm(10),
  justifyContent: "center",
},
xdwe: {
  width: pm(2),
  height: pm(10),
  flexDirection: "column",
  backgroundColor: "#000000",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdwf: {
  width: pm(190),
  fontSize: pm(12),
  borderTopWidth: pm(0),
  borderTopColor: "#000",
  borderLeftWidth: pm(0),
  borderLeftColor: "#000",
  lineHeight: pm(17),
  paddingTop: pm(10),
  borderRightWidth: pm(0),
  borderRightColor: "#000",
  borderBottomWidth: pm(0),
  borderBottomColor: "#000",
  paddingBottom: pm(10),
},
xdwg: {
  width: pm(18),
  height: pm(18),
},
xdwh: {
  flexDirection: "column",
},
xdwi: {
  width: pm(210),
  alignItems: "center",
  marginLeft: pm(10),
  borderRightWidth: pm(0),
  borderRightColor: "#000",
  borderBottomWidth: pm(1),
  borderBottomColor: "#E8E8E8",
  flexDirection: "row",
},
xdwj: {
  width: pm(269),
  marginTop: pm(21),
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
},
xdwk: {
  width: pm(160),
  fontSize: pm(12),
  borderTopWidth: pm(0),
  borderTopColor: "#000",
  borderLeftWidth: pm(0),
  borderLeftColor: "#000",
  paddingTop: pm(10),
  borderRightWidth: pm(0),
  borderRightColor: "#000",
  borderBottomWidth: pm(0),
  borderBottomColor: "#000",
  paddingBottom: pm(10),
},
xdwl: {
  color: "#181818",
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdwm: {
  marginTop: pm(10),
  alignItems: "center",
  borderBottomWidth: pm(1),
  borderBottomColor: "#E8E8E8",
  flexDirection: "row",
  justifyContent: "space-between",
},
xdwn: {
  width: pm(10),
  height: pm(3),
  marginTop: pm(3),
  flexDirection: "column",
  backgroundColor: "#FFD142",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdwo: {
  alignItems: "center",
  marginLeft: pm(17),
  flexDirection: "column",
},
xdwp: {
  width: pm(249),
  fontSize: pm(12),
  borderTopWidth: pm(0),
  borderTopColor: "#000",
  borderLeftWidth: pm(0),
  borderLeftColor: "#000",
  paddingTop: pm(10),
  borderRightWidth: pm(0),
  borderRightColor: "#000",
  borderBottomWidth: pm(0),
  borderBottomColor: "#000",
  paddingBottom: pm(10),
},
xdwq: {
  width: pm(249),
  borderRightWidth: pm(0),
  borderRightColor: "#000",
  borderBottomWidth: pm(0),
  borderBottomColor: "#000",
  flexDirection: "row",
},
xdwr: {},
xdws: {
  width: pm(269),
  marginTop: pm(21),
  alignItems: "center",
  borderBottomWidth: pm(1),
  borderBottomColor: "#E8E8E8",
  flexDirection: "row",
},
xdwt: {
  width: pm(220),
  fontSize: pm(12),
  borderTopWidth: pm(0),
  borderTopColor: "#000",
  borderLeftWidth: pm(0),
  borderLeftColor: "#000",
  paddingTop: pm(10),
  borderRightWidth: pm(0),
  borderRightColor: "#000",
  borderBottomWidth: pm(0),
  borderBottomColor: "#000",
  paddingBottom: pm(10),
},
xdwu: {
  color: "#181818",
  fontSize: pm(12),
  lineHeight: pm(17),
},
xdwv: {
  width: pm(269),
  marginTop: pm(10),
  alignItems: "center",
  borderBottomWidth: pm(1),
  borderBottomColor: "#E8E8E8",
  flexDirection: "row",
  justifyContent: "space-between",
},
xdww: {
  fontSize: pm(14),
  textAlign: "center",
  fontWeight: "500",
  lineHeight: pm(24),
},
xdwx: {
  width: pm(213),
  height: pm(40),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#ffd132",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdwy: {
  height: pm(38),
  marginTop: pm(43),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdwz: {
  flexGrow: 1,
  marginTop: pm(34),
  flexDirection: "column",
},
xdw10: {
  width: pm(50),
  height: pm(0.5),
  flexDirection: "column",
  backgroundColor: "#E8E8E8",
},
xdw11: {
  color: "#999999",
  fontSize: pm(11),
  lineHeight: pm(24),
  marginLeft: pm(12),
  marginRight: pm(12),
},
xdw12: {
  alignItems: "center",
  flexDirection: "row",
},
xdw13: {
  width: pm(31),
  height: pm(31),
},
xdw14: {
  marginLeft: pm(30),
  flexDirection: "column",
},
xdw15: {
  marginTop: pm(15),
  flexDirection: "row",
  justifyContent: "space-between",
},
xdw16: {
  marginTop: pm(100),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw17: {
  color: "#999999",
  fontSize: pm(10),
  lineHeight: pm(14),
},
xdw18: {
  color: "#000000",
  fontSize: pm(10),
  fontWeight: "400",
  lineHeight: pm(14),
  textDecorationLine: "underline",
},
xdw19: {
  marginTop: pm(20),
  alignItems: "center",
  marginBottom: pm(40),
  flexDirection: "row",
  justifyContent: "center",
},
xdw1a: {
  flexGrow: 1,
  paddingLeft: pm(26),
  paddingRight: pm(26),
  flexDirection: "column",
},
xdw1b: {
  color: "#181818",
  fontSize: pm(18),
  fontWeight: "500",
  lineHeight: pm(28),
},
xdw1c: {
  color: "#979797",
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw1d: {
  marginLeft: "auto",
  flexDirection: "column",
},
xdw1e: {
  width: pm(268),
  fontSize: pm(12),
  borderTopWidth: pm(0),
  borderTopColor: "#000",
  marginTop: pm(20),
  borderLeftWidth: pm(0),
  borderLeftColor: "#000",
  paddingTop: pm(10),
  borderRightWidth: pm(0),
  borderRightColor: "#000",
  borderBottomWidth: pm(1),
  borderBottomColor: "#E8E8E8",
  paddingBottom: pm(10),
},
xdw1f: {
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw1g: {
  fontSize: pm(12),
  textAlign: "center",
  fontWeight: "600",
  lineHeight: pm(24),
},
xdw1h: {
  width: pm(213),
  height: pm(38),
  marginTop: pm(50),
  alignItems: "center",
  marginLeft: "auto",
  marginRight: "auto",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#ffd132",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw1i: {
  marginTop: pm(30),
  paddingLeft: pm(26),
  paddingRight: pm(26),
  flexDirection: "column",
}
});
const slide = {"type":"170118","key":"c1701181","slug":null,"randomid":"id_9d65f18981d5ab710728a4f7","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":"登录铜爪，更精彩"}},"Text2":{"ctx_map":{"text":"未注册的手机号将自动创建铜爪账户"}},"Text3":{"ctx_map":{"text":"验证码登录"}},"Text4":{"ctx_map":{"text":"密码登录"}},"Text5":{"ctx_map":{"text":"验证码登录"}},"Text6":{"ctx_map":{"text":"密码登录"}},"Text7":{"ctx_map":{"text":"这是一个文本组件"}},"Text8":{"ctx_map":{"text":"获取验证码"}},"Text9":{"ctx_map":{"text":"登录"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,576,174","src":"u/dev066/2024/02/29/7YSHXnn9hnb5JWhyWywuUi/分组1.png"}},"Image2":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/29/u4oksqJqn3CBgf3CvEDHqL/编组4.png"}},"Image3":{"ctx_map":{"fop":"e,111,111","src":"u/dev066/2024/02/29/wgseHJpWtgqjNSJTcbHsPc/QQ1备份.png"}},"Image4":{"ctx_map":{"fop":"e,111,111","src":"u/dev066/2024/02/29/xMCGB98DzWud3Qv7dKYckN/QQ1.png"}},"Text11":{"ctx_map":{"text":"登录即代表同意"}},"Text12":{"ctx_map":{"text":"《铜爪服务协议》"}},"Text14":{"ctx_map":{"text":"忘记密码"}},"Text15":{"ctx_map":{"text":"登录"}},"Text16":{"ctx_map":{"text":"立即绑定用户手机号"}},"Text17":{"ctx_map":{"text":"跳过","numberOfLines":1}},"Text18":{"ctx_map":{"text":"确认绑定"}},"Text19":{"ctx_map":{"text":"获取验证码"}},"Text20":{"ctx_map":{"text":"其他方式登录","numberOfLines":1}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"View20":{"ctx_map":{"extraStyleKeys":[]}},"View21":{"ctx_map":{}},"View22":{"ctx_map":{}},"View23":{"ctx_map":{}},"View24":{"ctx_map":{}},"View25":{"ctx_map":{}},"View26":{"ctx_map":{}},"View27":{"ctx_map":{}},"View31":{"ctx_map":{}},"View32":{"ctx_map":{}},"View33":{"ctx_map":{}},"View34":{"ctx_map":{}},"View35":{"ctx_map":{"extraStyleKeys":[]}},"View36":{"ctx_map":{}},"View37":{"ctx_map":{}},"View38":{"ctx_map":{}},"View39":{"ctx_map":{}},"View40":{"ctx_map":{}},"View41":{"ctx_map":{}},"View42":{"ctx_map":{"extraStyleKeys":[]}},"View43":{"ctx_map":{}},"View44":{"ctx_map":{}},"View45":{"ctx_map":{}},"View46":{"ctx_map":{}},"View47":{"ctx_map":{}},"View48":{"ctx_map":{}},"View49":{"ctx_map":{}},"Picker1":{"ctx_map":{"mode":"selector","range":[{"label":"上午","value":"am"},{"label":"下午","value":"pm"}],"value":0}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewIf5":{"ctx_map":{"value":true}},"ViewIf6":{"ctx_map":{"value":true}},"ViewIf7":{"ctx_map":{"value":true}},"ViewIf8":{"ctx_map":{"value":true}},"ViewIf9":{"ctx_map":{"value":true}},"ViewIf10":{"ctx_map":{"value":true}},"ViewIf11":{"ctx_map":{"value":true}},"ViewIf12":{"ctx_map":{"value":true}},"SvgImage1":{"ctx_map":{"src":"u/dev065/2023/02/27/FjAkL44b59LcLEMQ3weqk3/1279412.svg","color":"#000000","width":10,"height":10,"SvgImageManage":"SvgImageManage"}},"SvgImage5":{"ctx_map":{"src":"u/dev065/2023/02/27/gQzWcKFWq6zuFYqrQuTFHf/577893.svg","color":"#cccccc","width":20,"height":20,"SvgImageManage":"SvgImageManage"}},"DwappCloud1":{"ctx_map":{"color1":""}},"NativeInput1":{"ctx_map":{"type":"text","checked":false,"cursorColor":"#ffd132","placeholder":"请输入手机号码"}},"NativeInput2":{"ctx_map":{"type":"text","checked":false,"cursorColor":"#ffd132","placeholder":"请输入验证码"}},"NativeInput3":{"ctx_map":{"type":"text","checked":false,"cursorColor":"#ffd132","placeholder":"请输入手机号码"}},"NativeInput4":{"ctx_map":{"type":"text","checked":false,"password":true,"cursorColor":"#ffd132","placeholder":"请输入密码"}},"NativeInput5":{"ctx_map":{"type":"text","checked":false,"cursorColor":"#ffd132","placeholder":"请输入手机号码"}},"NativeInput6":{"ctx_map":{"type":"text","checked":false,"cursorColor":"#ffd132","placeholder":"请输入验证码"}}}};

const pageGroupSlug = 'feature-login';

const buildComponentVars = () => {
  const dw = new RnappDwProxy(slide)
  const { store } = dw._buildXbenchComponent({ workflowStoreOptions: workflowStoreOptionsFactory(dw) })
  const eventCache = {}
  const contextCache = {}
  const getEvent = (cacheKey, context, bagForKeyValue, bagForIndex) => {
    cacheKey = cacheKey + ':' + String(bagForKeyValue || '') + ':' + String(bagForIndex || '')
    contextCache[cacheKey] = context
    if (eventCache[cacheKey]) return eventCache[cacheKey]

    const handler = (...args) => {
      const [componentKey, eventName, actionName, vmodelStateValue] = cacheKey.split(':')
      if (vmodelStateValue) {
        dw.store.commit('setState', { ['state.' + vmodelStateValue]: args[0] })
      }
      if (actionName) {
        dw.store.dispatch(actionName, {
          type: eventName,
          data: args[0],
          args,
          context: contextCache[cacheKey],
          component: {key: componentKey}
        })
      }
    }
    eventCache[cacheKey] = handler
    return handler
  }
  return [dw, store.state, getEvent]
}

// codes: beforeComponent


export default function Screen({ route, navigation, spctx, xbenchEmitDirectEvent, xbenchEmitDirectEventAll }) {
  const [dw, initState, getEvent] = React.useMemo(() => buildComponentVars(), [])
  const [state, setState] = React.useState(initState)
  const appState = React.useRef(AppState.currentState)
  

  dw.query = route.params || {}
  dw._setReactSetState(setState)
  dw._setReactNavigation(navigation, {
    
  })
  dw._setVars(spctx, xbenchEmitDirectEvent, xbenchEmitDirectEventAll)

  if (!dw._isCreated) {
    dw._isCreated = true
    dw.store.dispatch('onLoad', {})
  }

  React.useEffect(() => {
    dw.store.dispatch('onShow', { onShowType: 'init' })
    dw._sendAnalyticsEvent(pageGroupSlug, 'onShow', { onShowType: 'init', route })
    dw.store.dispatch('onReady', {})
    dw._isShow !== true &&
      setTimeout(() => {
        dw._isShow = true
      }, 50)
    return () => {
      dw.store.dispatch('onHide', { onHideType: 'destory' })
      dw._sendAnalyticsEvent(pageGroupSlug, 'onHide', { onHideType: 'destory', route })
      dw.store.dispatch('onUnload', {})
    }
  }, [])

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (dw._isShow) {
        dw.store.dispatch('onShow', { onShowType: 'focus' })
        dw._sendAnalyticsEvent(pageGroupSlug, 'onShow', { onShowType: 'focus', route })
      }
    })
    return unsubscribe
  }, [navigation])

  React.useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (appState.current !== nextAppState && nextAppState === 'active' && pageGroupSlug === getCurrentPageRoute().pageGroupSlug) {
        dw.store.dispatch('onShow', { onShowType: 'active' })
        dw._sendAnalyticsEvent(pageGroupSlug, 'onShow', { onShowType: 'active', route })
      }
      if (appState.current !== nextAppState && nextAppState === 'background' && pageGroupSlug === getCurrentPageRoute().pageGroupSlug) {
        dw.store.dispatch('onHide', { onHideType: 'background' })
        dw._sendAnalyticsEvent(pageGroupSlug, 'onHide', { onHideType: 'background', route })
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  // codes: component
  const bagForKeyValue = undefined
const bagForIndex = undefined

  return (
    <ErrorBoundary
      fallback={({ error }) => (
        <ScrollView style={{ paddingTop: 100, paddingLeft: 10, paddingRight: 10 }}>
          <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16, lineHeight: 30 }}>
            页面出现错误，请联系开发者
          </Text>
          <Text selectable style={{ fontSize: 12, lineHeight: 20, marginBottom: 5 }}>页面: {pageGroupSlug}</Text>
          <Text selectable style={{ backgroundColor: '#eee', padding: 10, fontSize: 10, lineHeight: 12 }}>{error?.stack}</Text>
        </ScrollView>
      )}
    >
      <Xbenchc168612 /* DwappCloud1 */ backgroundColor={ slide.components.DwappCloud1.ctx_map.color1 } ></Xbenchc168612>
{!!(state.ready) /* ViewIf10 */ && (<>{!!(state.mode === 'default') /* ViewIf11 */ && (<><View /* View37 */   style={styles.xdw1a}><View /* View1 */   style={styles.xdw2}><XbenchcImage /* Image1 */ style={styles.xdw1} source={dwtools.qiniu(slide.components.Image1.ctx_map.src, slide.components.Image1.ctx_map.fop)}  /></View>
<View /* View2 */   style={styles.xdwz}>{!!(state.view =="code") /* ViewIf3 */ && (<><View /* View7 */   style={styles.xdw9}><View /* View3 */   style={styles.xdw5}><Text /* Text3 */ style={styles.xdw3} >{slide.components.Text3.ctx_map.text}</Text>
<View /* View4 */   style={styles.xdw4}></View></View>
<XbenchcView /* View5 */   viewStyle={styles.xdw8} onClick={getEvent('View5:onClick:func9:', {}, bagForKeyValue, bagForIndex)}><Text /* Text4 */ style={styles.xdw6} >{slide.components.Text4.ctx_map.text}</Text>
<View /* View6 */   style={styles.xdw7}></View></XbenchcView></View>
<View /* View15 */   style={styles.xdwj}><View /* View16 */   style={[styles.xdwd, (state.platform === 'rnapp' ? 
    state.focus_input === 'code_username' ? {
        borderBottomWidth: 1,
        borderBottomColor: '#181818',
    } : {
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
    }
    : state.focus_input === 'code_username' ? {
        borderBottomWidth: "1px",
        borderBottomColor: '#181818',
    } : {
        borderBottomWidth: "1px",
        borderBottomColor: '#E8E8E8',
    })]}><XbenchcPicker /* Picker1 */ value={ state.range } mode={ slide.components.Picker1.ctx_map.mode } range={ state.ranges }  onChange={getEvent('Picker1:input:func14:', {}, bagForKeyValue, bagForIndex)}><View /* View13 */   style={styles.xdwc}><Text /* Text7 */ style={styles.xdwa} >{state.ranges[state.range].label}</Text>
<Image /* SvgImage1 */ style={[ styles.xdwb, { width: pm(10), height: pm(10) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev065/2023/02/27/FjAkL44b59LcLEMQ3weqk3/1279412.svg"), width: pm(10), height: pm(10) }} /></View></XbenchcPicker></View>
<View /* View17 */   style={styles.xdwe}></View>
<View /* View14 */   style={[styles.xdwi, (state.platform === 'rnapp' ? 
    state.focus_input === 'code_username' ? {
        borderBottomWidth: 1,
        borderBottomColor: '#181818',
    } : {
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
    }
    : state.focus_input === 'code_username' ? {
        borderBottomWidth: "1px",
        borderBottomColor: '#181818',
    } : {
        borderBottomWidth: "1px",
        borderBottomColor: '#E8E8E8',
    })]}><XbenchcInput /* NativeInput1 */ style={styles.xdwf} value={state.username} placeholder={slide.components.NativeInput1.ctx_map.placeholder} type={slide.components.NativeInput1.ctx_map.type} cursorColor={"#ffd132"}  onChange={getEvent('NativeInput1:onChange:func15:', {eventData: "code_username"}, bagForKeyValue, bagForIndex)} onFocus={getEvent('NativeInput1:onFocus:func21:', {eventData: "code_username"}, bagForKeyValue, bagForIndex)} />
{!!(!!state.username) /* ViewIf5 */ && (<><XbenchcView /* View18 */   viewStyle={styles.xdwh} onClick={getEvent('View18:onClick:func19:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image2 */ style={styles.xdwg} source={dwtools.qiniu(slide.components.Image2.ctx_map.src, slide.components.Image2.ctx_map.fop)}  /></XbenchcView></>)}</View></View>
<View /* View19 */   style={[styles.xdwm, (state.platform === 'rnapp' ? 
    state.focus_input === 'code' ? {
        borderBottomWidth: 1,
        borderBottomColor: '#181818',
    } : {
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
    }
    : state.focus_input === 'code' ? {
        borderBottomWidth: "1px",
        borderBottomColor: '#181818',
    } : {
        borderBottomWidth: "1px",
        borderBottomColor: '#E8E8E8',
    })]}><XbenchcInput /* NativeInput2 */ style={styles.xdwk} value={state.code} placeholder={slide.components.NativeInput2.ctx_map.placeholder} type={slide.components.NativeInput2.ctx_map.type} cursorColor={"#ffd132"}  onChange={getEvent('NativeInput2:onChange:func16:', {eventData: "code"}, bagForKeyValue, bagForIndex)} onFocus={getEvent('NativeInput2:onFocus:func21:', {eventData: "code"}, bagForKeyValue, bagForIndex)} />
<XbenchcView /* View33 */   viewStyle={styles.xdwh} onClick={getEvent('View33:onClick:func12:', {}, bagForKeyValue, bagForIndex)}><Text /* Text8 */ style={styles.xdwl} >{computeds.computed1({}, state)}</Text></XbenchcView></View></>)}
{!!(state.view =="login") /* ViewIf4 */ && (<><View /* View8 */   style={styles.xdw9}><XbenchcView /* View11 */   viewStyle={styles.xdwh} onClick={getEvent('View11:onClick:func7:', {}, bagForKeyValue, bagForIndex)}><Text /* Text5 */ style={styles.xdw6} >{slide.components.Text5.ctx_map.text}</Text>
<View /* View12 */   style={styles.xdwh}></View></XbenchcView>
<View /* View9 */   style={styles.xdwo}><Text /* Text6 */ style={styles.xdw3} >{slide.components.Text6.ctx_map.text}</Text>
<View /* View36 */   style={styles.xdwn}></View></View></View>
<View /* View25 */   style={[styles.xdws, (state.platform === 'rnapp' ? 
    state.focus_input === 'pwd_username' ? {
        borderBottomWidth: 1,
        borderBottomColor: '#181818',
    } : {
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
    }
    : state.focus_input === 'pwd_username' ? {
        borderBottomWidth: "1px",
        borderBottomColor: '#181818',
    } : {
        borderBottomWidth: "1px",
        borderBottomColor: '#E8E8E8',
    })]}><View /* View26 */   style={styles.xdwq}><XbenchcInput /* NativeInput3 */ style={styles.xdwp} value={state.username} placeholder={slide.components.NativeInput3.ctx_map.placeholder} type={slide.components.NativeInput3.ctx_map.type} cursorColor={"#ffd132"}  onChange={getEvent('NativeInput3:onChange:func15:', {eventData: "pwd_username"}, bagForKeyValue, bagForIndex)} onFocus={getEvent('NativeInput3:onFocus:func21:', {eventData: "pwd_username"}, bagForKeyValue, bagForIndex)} /></View>
{!!(state.focus_input == 'pwd_username') /* ViewIf6 */ && (<><XbenchcView /* View27 */   viewStyle={styles.xdwh} onClick={getEvent('View27:onClick:func19:', {}, bagForKeyValue, bagForIndex)}><Image /* SvgImage5 */ style={[ styles.xdwr, { width: pm(20), height: pm(20) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev065/2023/02/27/gQzWcKFWq6zuFYqrQuTFHf/577893.svg"), width: pm(20), height: pm(20) }} /></XbenchcView></>)}</View>
<View /* View31 */   style={[styles.xdwv, (state.platform === 'rnapp' ? 
    state.focus_input === 'pwd' ? {
        borderBottomWidth: 1,
        borderBottomColor: '#181818',
    } : {
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
    }
    : state.focus_input === 'pwd' ? {
        borderBottomWidth: "1px",
        borderBottomColor: '#181818',
    } : {
        borderBottomWidth: "1px",
        borderBottomColor: '#E8E8E8',
    })]}><XbenchcInput /* NativeInput4 */ style={styles.xdwt} value={state.password} placeholder={slide.components.NativeInput4.ctx_map.placeholder} type={slide.components.NativeInput4.ctx_map.type} password={slide.components.NativeInput4.ctx_map.password} cursorColor={"#ffd132"}  onChange={getEvent('NativeInput4:onChange:func17:', {eventData: "pwd"}, bagForKeyValue, bagForIndex)} onFocus={getEvent('NativeInput4:onFocus:func21:', {eventData: "pwd"}, bagForKeyValue, bagForIndex)} />
<XbenchcView /* View32 */   viewStyle={styles.xdwh} onClick={getEvent('View32:onClick:func18:', {}, bagForKeyValue, bagForIndex)}><Text /* Text14 */ style={styles.xdwu} >{slide.components.Text14.ctx_map.text}</Text></XbenchcView></View></>)}
{!!(state.view == "code") /* ViewIf7 */ && (<><View /* View21 */   style={styles.xdwy}><XbenchcView /* View20 */   viewStyle={[styles.xdwx, (!(state.username && state.password) && !(state.username && state.code) ? {
    backgroundColor: "#FFF1C6",
} : {
    backgroundColor: "#FFD142",
})]} onClick={getEvent('View20:onClick:func13:', {}, bagForKeyValue, bagForIndex)}><Text /* Text9 */ style={[styles.xdww, (!(state.username && state.password) && !(state.username && state.code) ? {
    color: "#666666",
} : {
    color: "#181818",
})]} >{slide.components.Text9.ctx_map.text}</Text></XbenchcView></View></>)}
{!!(state.view == "login") /* ViewIf8 */ && (<><View /* View34 */   style={styles.xdwy}><XbenchcView /* View35 */   viewStyle={[styles.xdwx, (!(state.username && state.password) && !(state.username && state.code) ? {
    backgroundColor: "#FFF1C6",
} : {
    backgroundColor: "#FFD142",
})]} onClick={getEvent('View35:onClick:func3:', {}, bagForKeyValue, bagForIndex)}><Text /* Text15 */ style={[styles.xdww, (!(state.username && state.password) && !(state.username && state.code) ? {
    color: "#666666",
} : {
    color: "#181818",
})]} >{slide.components.Text15.ctx_map.text}</Text></XbenchcView></View></>)}</View>
{!!(!state.config.data.ios_approve) /* ViewIf9 */ && (<><View /* View22 */   style={styles.xdw16}><View /* View45 */   style={styles.xdw12}><View /* View46 */   style={styles.xdw10}></View>
<Text /* Text20 */ style={styles.xdw11} numberOfLines={1}>{slide.components.Text20.ctx_map.text}</Text>
<View /* View47 */   style={styles.xdw10}></View></View>
<View /* View23 */   style={styles.xdw15}><XbenchcView /* View38 */   viewStyle={styles.xdwh} onClick={getEvent('View38:onClick:func23:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image3 */ style={styles.xdw13} source={dwtools.qiniu(slide.components.Image3.ctx_map.src, slide.components.Image3.ctx_map.fop)}  /></XbenchcView>
<View /* View49 */   style={styles.xdw14}><XbenchcImage /* Image4 */ style={styles.xdw13} source={dwtools.qiniu(slide.components.Image4.ctx_map.src, slide.components.Image4.ctx_map.fop)}  /></View></View></View></>)}
<View /* View24 */   style={styles.xdw19}><Text /* Text11 */ style={styles.xdw17} >{slide.components.Text11.ctx_map.text}</Text>
<XbenchcView /* View48 */   viewStyle={styles.xdwh} onClick={getEvent('View48:onClick:func26:', {}, bagForKeyValue, bagForIndex)}><Text /* Text12 */ style={styles.xdw18} >{slide.components.Text12.ctx_map.text}</Text></XbenchcView></View></View></>)}
{!!(state.mode === 'bindAccount') /* ViewIf12 */ && (<><View /* View39 */   style={styles.xdw1i}><View /* View40 */   style={styles.xdw9}><Text /* Text16 */ style={styles.xdw1b} >{slide.components.Text16.ctx_map.text}</Text>
<XbenchcView /* View41 */   viewStyle={styles.xdw1d} onClick={getEvent('View41:onClick:func25:', {}, bagForKeyValue, bagForIndex)}><Text /* Text17 */ style={styles.xdw1c} numberOfLines={1}>{slide.components.Text17.ctx_map.text}</Text></XbenchcView></View>
<XbenchcInput /* NativeInput5 */ style={styles.xdw1e} value={state.username} placeholder={slide.components.NativeInput5.ctx_map.placeholder} type={slide.components.NativeInput5.ctx_map.type} cursorColor={"#ffd132"}  onChange={getEvent('NativeInput5:onChange:func15:', {eventData: "pwd_username"}, bagForKeyValue, bagForIndex)} onFocus={getEvent('NativeInput5:onFocus:func21:', {eventData: "pwd_username"}, bagForKeyValue, bagForIndex)} />
<View /* View43 */   style={[styles.xdwm, (state.platform === 'rnapp' ? 
    state.focus_input === 'code' ? {
        borderBottomWidth: 1,
        borderBottomColor: '#181818',
    } : {
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
    }
    : state.focus_input === 'code' ? {
        borderBottomWidth: "1px",
        borderBottomColor: '#181818',
    } : {
        borderBottomWidth: "1px",
        borderBottomColor: '#E8E8E8',
    })]}><XbenchcInput /* NativeInput6 */ style={styles.xdwk} value={state.code} placeholder={slide.components.NativeInput6.ctx_map.placeholder} type={slide.components.NativeInput6.ctx_map.type} cursorColor={"#ffd132"}  onChange={getEvent('NativeInput6:onChange:func16:', {eventData: "code"}, bagForKeyValue, bagForIndex)} onFocus={getEvent('NativeInput6:onFocus:func21:', {eventData: "code"}, bagForKeyValue, bagForIndex)} />
<XbenchcView /* View44 */   viewStyle={styles.xdwh} onClick={getEvent('View44:onClick:func12:', {}, bagForKeyValue, bagForIndex)}><Text /* Text19 */ style={styles.xdw1f} >{computeds.computed1({}, state)}</Text></XbenchcView></View>
<XbenchcView /* View42 */   viewStyle={[styles.xdw1h, (state.username && state.username.length === 11 ? {
    backgroundColor: "#FFD142",
} : {
    backgroundColor: "#FFF1C6",
})]} onClick={getEvent('View42:onClick:func24:', {}, bagForKeyValue, bagForIndex)}><Text /* Text18 */ style={styles.xdw1g} >{slide.components.Text18.ctx_map.text}</Text></XbenchcView></View></>)}</>)}
    </ErrorBoundary>
  )
}
