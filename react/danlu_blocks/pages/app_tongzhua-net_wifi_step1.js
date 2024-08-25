
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import { Image } from 'expo-image'
import Xbenchc168610 from '../components/Xbenchc168610'
import XbenchcPicker from '../../xbench/xbenchc/components/XbenchcPicker'
import XbenchcInput from '../../xbench/xbenchc/components/XbenchcInput'
import Xbenchc173692 from '../components/Xbenchc173692'
import Xbenchc275104 from '../components/Xbenchc275104'
import KeyboardAvoidingViewWrap from '../../xbench/components/KeyboardAvoidingViewWrap'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

let tick = (null)
const action46 = tick
let tick_fast = (null)
const action47 = tick_fast
let Platform = (null)
const action78 = Platform
let modalInstance = (null)
const action180 = modalInstance
let gecb = (null)
const action191 = gecb
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action4 = state.step = (1)
  const action7 = state.password = ("")
  const action8 = state.passwordDisplay = ("")
  const action10 = state.wifi_options = ([/**/  {/**/    label: '3012', value: '3012',/**/  },/**/  {/**/    label: '3012_6G', value: '3012_6G',/**/  }/**/])
  const action11 = state.OS = ("android")
  const action12 = state.ssid = (null)
  const action13 = state.ssidBind = (0)
  const action41 = state.progress = (0)
  const action42 = state.message = ("设备连接中")
  /* action70: 设备相关 */
  const action68 = state.device_id = ("")
  const action87 = state.init = (false)
  const action101 = state.device_member = (null)
  const action100 = state.device = (null)
  const action107 = state.currentSsid = (null)
  const action116 = state.success = (false)
  const action136 = state.config = (null)
  return state
}

const action181 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action182 = modalInstance = (event.data)
  const action183 = console.log('[getModalInstance#action183] 打印(modalInstance)', modalInstance)
}

const action38 = actions['onShow'] = async function (store, event) {
  const state = store.state
  /* action193: 监听全局事件，抛给控制器函数处理 */
  const action194 = ((store, event) => {
gecb = (event) => {
  store.dispatch('handleWsMessage', event)
}

dw.globalEvent.addListener('GLOBAL_WS_EVENT', gecb)

})(store, event)
  let action118
  

  const action141 = await Promise.all([
    (async () => {
      const action153 = await store.dispatch("func16", {})
      return action153
    })(),
    (async () => {
      const action39 = await store.dispatch("func3", {})
      return action39
    })(),
    (async () => {
      const action106 = await store.dispatch("func10", {})
      return action106
    })(),
    (async () => {
      const action140 = await store.dispatch("func15", {})
      return action140
    })(),
  ])

}

const action195 = actions['onUnload'] = function (store, event) {
  const state = store.state
  const action196 = ((store, event) => {
if(gecb){
  dw.globalEvent.removeListener('GLOBAL_WS_EVENT', gecb)
}
})(store, event)
}

const action2 = actions['func1'] = async function (store, event) {
  const state = store.state
  /* action54: 点击前 */
  if (state.step === 1) {
    
        if (!!(!state.device_id) === (true)) {
          const action18message = ("未输入正确设备ID")
          const action18title = ("提示")
          action18message && dw.alert(action18title, action18message)
          return {}
        }
        
  } else if (state.step === 3) {
    
        if (!!(!state.ssid) === (true)) {
          const action127message = ("未输入正确的wifi账号")
          const action127title = ("提示")
          action127message && dw.alert(action127title, action127message)
          return {}
        }
        
    
        if (!!(!state.password) === (true)) {
          const action128message = ("未输入正确的wifi密码")
          const action128title = ("提示")
          action128message && dw.alert(action128title, action128message)
          return {}
        }
        
  }
  const action5 = store.commit('setState', {["state.step"]: state.step + 1})
  /* action52: COMMIT */
  /* action55: 点击后 */
  if (state.step === 2) {
    const action134 = await store.dispatch("func14", {})
  } else if (state.step === 4) {
    const action57 = await store.dispatch("func6", {})
  }
}

const action20 = actions['func3'] = async function (store, event) {
  const state = store.state
  if (dw.platform === 'rnapp') {
    let Platform = (dw.getNativePackage('Platform'))
    const action23 = Platform
    const action24 = store.commit('setState', {["state.OS"]: Platform.OS})
    if (Platform.OS === 'android') {
      const action27 = await (async (store, event) => {
const { status } = await dw.requestAndroidPermission('android.permission.ACCESS_FINE_LOCATION')
if (status !== 'granted') return dw.alert('提示', '定位权限将被用于WIFI连接操作，请授权！')


const WifiManager = dw.getNativePackage('WifiManager')

let wifiList

wifiList = await WifiManager.loadWifiList()
console.log('wifiList', wifiList)
const res = wifiList.map(x=>({label: x.SSID, value: x.SSID}))
// 去重
const options = []
res.map(x=>{
  if(!options.find(_=>_.value === x.value)){
    options.push(x)
  }
})

return options
})(store, event)
      const action28 = store.commit('setState', {["state.wifi_options"]: action27})
    } else if (Platform.OS === 'ios') {
      const action30 = await (async (store, event) => {
const WifiManager = dw.getNativePackage('WifiManager')

let ssid = await WifiManager.getCurrentWifiSSID()

return ssid
})(store, event)
      const action31 = store.commit('setState', {["state.ssid"]: action30})
    }
  }
}

const action32 = actions['func4'] = function (store, event) {
  const state = store.state
  const action33 = store.commit('setState', {["state.ssidBind"]: event.data.detail.value, ["state.ssid"]: state.wifi_options[event.data.detail.value].value})
}

const action35 = actions['func5'] = function (store, event) {
  const state = store.state
  let key = (event.context.eventData)
  const action36 = key
  const action37 = store.commit('setState', {[`state.${key}`]: event.data.detail.value})
}

const action40 = actions['func6'] = function (store, event) {
  const state = store.state
  const action43 = ((store, event) => {
tick = setInterval(()=>{
  if(state.progress < 100){
    store.commit('setState', { ['state.progress']: state.progress + 1 })
  }
  else{
    clearInterval(tick)
  }
}, 1000)
})(store, event)
}

const action44 = actions['func7'] = function (store, event) {
  const state = store.state
  const action45 = ((store, event) => {
tick_fast = setInterval(()=>{
  if(state.progress < 100){
    store.commit('setState', { ['state.progress']: state.progress + 1 })
  }
  else{
    clearInterval(tick)
  }
}, 20)
})(store, event)
}

const action71 = actions['scanTimeout'] = async function (store, event) {
  const state = store.state
  const action72response = await dw.showModal({
        title: "提示",
        content: "未能搜索到设备，请重试",
        confirmText: "确定",
        confirmColor: "#576b95",
        showCancel: true,
        cancelText: "取消",
        cancelColor: "#000000"
      })
  const action72 = action72response && action72response.confirm
  let message = ("未能搜索到设备，请重试")
  const action185 = message
  const action186 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(message)
}
else{
  return null
}
})(store, event)
  const action74 = store.commit('setState', {["state.showRetry"]: true})
}

const action82 = actions['func9'] = async function (store, event) {
  const state = store.state
  let message = ("配网成功")
  const action188 = message
  const action189 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  await new Promise((resolve, reject) => setTimeout(resolve, 500))
  const action95 = dw.app.goToPappUrl("dcenter", {}, {redirectTo: false})
}

const action104 = actions['func10'] = async function (store, event) {
  const state = store.state
  const action105 = await (async (store, event) => {
const NetInfo = dw.getNativePackage("NetInfo")

const state = await NetInfo.fetch("wifi")
const ssid = state.details.ssid
console.log('ssid', ssid)
if(ssid){
  store.commit('setState', { ['state.currentSsid']: ssid })
}

NetInfo.addEventListener(state => {
  console.log("state.details", state.details);
  const ssid = state.details.ssid
  if(ssid){
    store.commit('setState', { ['state.currentSsid']: ssid })
  }
});
})(store, event)
}

const action111 = actions['func11'] = async function (store, event) {
  const state = store.state
  
        if (!!(!state.ssid) === (true)) {
          const action113message = ("请选择wifi")
          const action113title = ("提示")
          action113message && dw.alert(action113title, action113message)
          return {}
        }
        
  
        if (!!(!state.password) === (true)) {
          const action114message = ("请输入wifi密码")
          const action114title = ("提示")
          action114message && dw.alert(action114title, action114message)
          return {}
        }
        
  const action135 = store.commit('setState', {["state.step"]: 4})
  const action125 = await store.dispatch("func12", {})
  const action143 = ((store, event) => {
function sendPostRequest(url, data) {
  console.log('url', url)
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log('请求成功:', data);

      const resp = { ...data }
      if (resp.code === 1) {
        store.commit('setState', { ['state.success']: true })
        store.dispatch("func13", {})
      }
      return;
    })
    .catch(error => {
      console.log('请求失败:', error);
    });
}

function extractHostFromUrl(url) {
  const match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n]+)/im);
  if (match && match[1]) {
    return match[1];
  }
  return null;
}

const url = state.config.data.wifi_config_socket;
const requestData = {
  wifiSsid: state.ssid,
  wifiPwd: state.password,
  seq: Math.random().toString(36).slice(2),
  "deviceID": state.device_id,
  //手机UUID
  "mobileUuid": state.device_member.uuid,
  //云服务地址用于信道建立链接，可能存多个链接，以备链接失败进行切换线路
  "serviceUrls": `${extractHostFromUrl(state.config.data.mqtt_base_url)}:1883`,
  //用户ID
  "userId": String(state.device_member.data.siteuser_id),
}

sendPostRequest(url, requestData);
})(store, event)
}

const action121 = actions['func12'] = function (store, event) {
  const state = store.state
  const action122 = ((store, event) => {
tick = setInterval(()=>{

  if(state.progress >= 90){
    clearInterval(tick)
    store.dispatch("func68", {})
  }

  if(state.progress < 95){
    store.commit('setState', { ['state.progress']: state.progress + 1 })
  }
  else{
    clearInterval(tick)
  }
}, 1000)
})(store, event)
}

const action123 = actions['func13'] = function (store, event) {
  const state = store.state
  const action124 = ((store, event) => {
if(tick){
  clearInterval(tick)
}
tick_fast = setInterval(()=>{
  if(state.progress < 100){
    store.commit('setState', { ['state.progress']: state.progress + 1 })
  }
  else{
    clearInterval(tick_fast)
    store.dispatch("func9", {})
  }
}, 20)
})(store, event)
}

const action129 = actions['func14'] = async function (store, event) {
  const state = store.state
  const action131 = await dw.app.run("device.get_create", {"device_id": state.device_id})
  const action132 = store.commit('setState', {["state.device_member"]: action131.device_member, ["state.device"]: action131.device})
}

const action137 = actions['func15'] = async function (store, event) {
  const state = store.state
  const action138 = await dw.app.run("config.get", {})
  const action139 = store.commit('setState', {["state.config"]: action138.object})
}

const action146 = actions['func16'] = async function (store, event) {
  const state = store.state
  const action147 = await dw.getStorage("rnapp:barcode:data")
  const action154 = console.log('[func16#action154] 打印(action147)的返回值', action147)
  if (action147) {
    const action151 = store.commit('setState', {["state.device_id"]: action147})
    const action152 = await dw.removeStorage({ key: "rnapp:barcode:data" })
  }
}

const action155 = actions['func17'] = function (store, event) {
  const state = store.state
  const action156 = dw.app.goToPappUrl("scan", {}, {redirectTo: false})
}

const action197 = actions['handleWsMessage'] = async function (store, event) {
  const state = store.state
  if (!!state.device && event.data.result.type === 'deviceConnect' && state.step === 4 && event.data.result.device_id === state.device.data.device_id) {
    const action199 = await store.dispatch("func7", {})
  }
}

const action205 = actions['func67'] = function (store, event) {
  const state = store.state
  const action206 = modalInstance = (event.data)
}

const action200 = actions['func68'] = async function (store, event) {
  const state = store.state
  let message = ("蓝牙配网超时")
  const action201 = message
  const action202 = await (async (store, event) => {
if(modalInstance){
  return await modalInstance.popUp(message)
}
return true
})(store, event)
  let action203
  
        action203 = (dw.platform === 'rnapp') ? await (async () => {
    const action204 = await dw.navigateBack({delta: 1})
  
        })() : undefined
        
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
      "use strict";

var actions = {};

var tick = null;
var action46 = tick;
var tick_fast = null;
var action47 = tick_fast;
var Platform = null;
var action78 = Platform;
var modalInstance = null;
var action180 = modalInstance;
var gecb = null;
var action191 = gecb;
var action108 = actions['computed1'] = function (event, state) {
  return !!state.currentSsid && state.currentSsid.startsWith("tz_");
};
// COMPUTED_ACTION_META:computed1 {"deps":["currentSsid"]}

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdw3n4: {
  width: pm(77),
  height: pm(4),
  flexDirection: "column",
  backgroundColor: "#fbd656",
},
xdw3n5: {
  width: pm(77),
  height: pm(4),
  flexDirection: "column",
  backgroundColor: "#e7e5e8",
},
xdw3n6: {
  flexDirection: "row",
  justifyContent: "space-between",
},
xdw3n7: {
  fontSize: pm(20),
  fontWeight: "500",
  lineHeight: pm(24),
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
},
xdw3n8: {
  marginTop: pm(30),
  marginLeft: pm(20),
  paddingTop: 0,
  marginRight: pm(20),
  paddingLeft: 0,
  marginBottom: pm(20),
  paddingRight: 0,
  flexDirection: "column",
  paddingBottom: 0,
},
xdw3n9: {
  width: pm(280),
  height: pm(219),
},
xdw3nb: {
  marginTop: pm(20),
  marginLeft: pm(20),
  marginRight: pm(20),
  marginBottom: pm(0),
  flexDirection: "column",
},
xdw3nc: {
  width: pm(34),
  height: pm(34),
  marginTop: 0,
  marginLeft: 0,
  marginRight: 0,
  marginBottom: 0,
},
xdw3nd: {
  marginLeft: pm(19),
  marginRight: pm(12),
  flexDirection: "column",
  justifyContent: "center",
},
xdw3ne: {
  color: "#666666",
  fontSize: pm(12),
  marginTop: pm(10),
  fontWeight: "400",
  lineHeight: pm(20),
  marginLeft: 0,
  paddingTop: 0,
  marginRight: 0,
  paddingLeft: 0,
  marginBottom: pm(10),
  paddingRight: 0,
  paddingBottom: 0,
},
xdw3nf: {
  width: pm(220),
  paddingRight: pm(10),
  flexDirection: "column",
  justifyContent: "center",
},
xdw3ng: {
  marginTop: pm(0),
  marginLeft: pm(20),
  paddingTop: 0,
  marginRight: pm(20),
  paddingLeft: 0,
  marginBottom: pm(10),
  paddingRight: 0,
  flexDirection: "row",
  paddingBottom: 0,
  backgroundColor: "#f8f8f8",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw3nh: {},
xdw3ni: {
  flexDirection: "column",
},
xdw3nj: {
  width: pm(280),
  alignItems: "center",
  marginLeft: pm(20),
  marginRight: pm(20),
  flexDirection: "row",
},
xdw3nk: {
  fontSize: pm(12),
  textAlign: "center",
  fontWeight: "500",
  lineHeight: pm(24),
  paddingTop: pm(7),
  paddingBottom: pm(7),
},
xdw3nl: {
  left: 0,
  width: pm(300),
  bottom: pm(29),
  position: "absolute",
  marginLeft: pm(10),
  flexDirection: "column",
  backgroundColor: "#ffd132",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw3nm: {
  width: pm(320),
  height: "100%",
  flexGrow: 1,
  flexShrink: 1,
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  flexDirection: "column",
  paddingBottom: 0,
  backgroundColor: "#ffffff",
},
xdw3nn: {
  color: "#333333",
  fontSize: pm(20),
  fontWeight: "500",
  lineHeight: pm(24),
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
},
xdw3no: {
  color: "#666666",
  fontSize: pm(14),
  marginTop: pm(5),
  lineHeight: pm(24),
  paddingTop: 0,
  paddingLeft: 0,
  marginBottom: pm(34),
  paddingRight: 0,
  paddingBottom: pm(0),
},
xdw3np: {
  marginTop: pm(30),
  marginLeft: pm(20),
  paddingTop: 0,
  marginRight: pm(20),
  paddingLeft: 0,
  paddingRight: 0,
  flexDirection: "column",
  paddingBottom: 0,
},
xdw3nq: {
  width: pm(17),
  height: pm(17),
},
xdw3ns: {
  color: "#AAAAAA",
  fontSize: pm(12),
  lineHeight: pm(17),
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
},
xdw3nt: {
  alignItems: "center",
  marginLeft: pm(10),
  flexDirection: "row",
},
xdw3nu: {
  marginTop: pm(10),
  marginLeft: pm(10),
  marginRight: pm(10),
  marginBottom: pm(14),
  flexDirection: "column",
},
xdw3nv: {
  color: "#666666",
  fontSize: pm(14),
  marginTop: pm(5),
  lineHeight: pm(24),
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
},
xdw3nw: {
  width: pm(300),
  height: pm(300),
},
xdw3ny: {
  marginTop: pm(10),
  marginLeft: pm(10),
  marginRight: pm(10),
  marginBottom: pm(10),
  flexDirection: "column",
},
xdw3nz: {
  color: "#585858",
  fontWeight: "600",
  lineHeight: pm(24),
},
xdw3o0: {
  marginLeft: "auto",
},
xdw3o1: {
  width: pm(300),
  height: pm(44),
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
},
xdw3o2: {
  width: pm(300),
  fontSize: pm(12),
  borderTopWidth: pm(0),
  borderTopColor: "#000",
  borderLeftWidth: pm(0),
  borderLeftColor: "#000",
  lineHeight: pm(18),
  borderRightWidth: pm(0),
  borderRightColor: "#000",
  borderBottomWidth: pm(0),
  borderBottomColor: "#000",
  marginBottom: pm(0),
  backgroundColor: "#f8f8f8",
  borderTopLeftRadius: pm(5),
  borderTopRightRadius: pm(5),
  borderBottomLeftRadius: pm(5),
  borderBottomRightRadius: pm(5),
},
xdw3o3: {
  width: pm(300),
  alignItems: "center",
  marginLeft: pm(10),
  marginRight: pm(10),
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: "#f8f8f8",
  borderTopLeftRadius: pm(5),
  borderTopRightRadius: pm(5),
  borderBottomLeftRadius: pm(5),
  borderBottomRightRadius: pm(5),
},
xdw3o4: {
  width: pm(300),
  fontSize: pm(12),
  borderTopWidth: pm(0),
  borderTopColor: "#000",
  marginTop: pm(10),
  borderLeftWidth: pm(0),
  borderLeftColor: "#000",
  lineHeight: pm(18),
  marginLeft: pm(10),
  paddingTop: pm(10),
  borderRightWidth: pm(0),
  borderRightColor: "#000",
  marginRight: pm(10),
  paddingLeft: pm(10),
  borderBottomWidth: pm(0),
  borderBottomColor: "#000",
  marginBottom: pm(0),
  paddingRight: pm(10),
  paddingBottom: pm(10),
  backgroundColor: "#f8f8f8",
  borderTopLeftRadius: pm(5),
  borderTopRightRadius: pm(5),
  borderBottomLeftRadius: pm(5),
  borderBottomRightRadius: pm(5),
},
xdw3o5: {
  fontSize: pm(12),
  textAlign: "center",
  fontWeight: "600",
  lineHeight: pm(24),
  paddingTop: pm(7),
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: pm(7),
},
xdw3o6: {
  width: pm(300),
  marginTop: pm(10),
  marginLeft: pm(10),
  flexDirection: "column",
  backgroundColor: "#ffd132",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw3o7: {
  width: pm(320),
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  flexDirection: "column",
  paddingBottom: 0,
  backgroundColor: "#ffffff",
},
xdw3o8: {
  fontSize: pm(48),
  lineHeight: pm(60),
},
xdw3o9: {
  color: "#999999",
  fontSize: pm(14),
  lineHeight: pm(20),
  marginLeft: pm(3),
  marginBottom: pm(12),
},
xdw3oa: {
  alignItems: "flex-end",
  flexDirection: "row",
},
xdw3ob: {
  color: "#999999",
  fontSize: pm(10),
  marginTop: pm(2),
  lineHeight: pm(15),
},
xdw3oc: {
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw3od: {
  position: "relative",
  marginTop: pm(40),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw3oe: {
  left: 0,
  width: pm(300),
  bottom: pm(26),
  position: "absolute",
  marginTop: pm(10),
  marginLeft: pm(10),
  flexDirection: "column",
  backgroundColor: "#ffd132",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw3of: {
  height: "100%",
  flexGrow: 1,
  flexShrink: 0,
  flexDirection: "column",
},
xdw3og: {
  flexGrow: 1,
  flexShrink: 1,
  flexDirection: "column",
}
});
const slide = {"type":"248253","key":"c2482531","slug":null,"randomid":"id_7391fafee3d8907f60af1255","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View1":{"ctx_map":{}},"View2":{"ctx_map":{"extraStyleKeys":[]}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,200,200","src":"u/dev064/2023/06/27/H3o9oz7Nm8bV6fseiNheEF/点击icon4x.png"}},"Image3":{"ctx_map":{"fop":"e,300,300","src":"u/dev064/2023/06/01/WFWNq6aLGWRpmiCCVDPWpA/3UWEO_TWOC481C2U841.png","buildToLocal":true}},"Image6":{"ctx_map":{"fop":"e,50,50","src":"u/dev064/2023/06/01/9LpqhxByDXDCE6v2ZZxZB6/c18a720da7e04be8a454e3eeea083f16_mergeImage.png","buildToLocal":true}},"Image7":{"ctx_map":{"fop":"e,1280,1000","src":"u/dev064/2023/12/11/vndH5zxdVomsKcwNV6Vmhj/喂食器背面图4x.png","buildToLocal":true}},"Text14":{"ctx_map":{"text":"下一步"}},"Text15":{"ctx_map":{"text":"确认已按reset键10s，听到一次“滴，滴，滴”声后松开，点击下一步"}},"Text16":{"ctx_map":{"text":"1.长按reset键3s，听到语音提醒后点击确认"}},"Text23":{"ctx_map":{"text":"确认连接"}},"Text24":{"ctx_map":{"text":"点击选择WIFI"}},"Text25":{"ctx_map":{"text":"支持全频段的WIFI"}},"Text26":{"ctx_map":{"text":"3.连接WiFi"}},"Text29":{"ctx_map":{"text":"正在搜索附近的设备..."}},"Text30":{"ctx_map":{"text":"请在手机网络设置页面寻找tz开头的热点并连接该热点"}},"Text31":{"ctx_map":{"text":"2.连接设备热点"}},"Text32":{"ctx_map":{"text":"下一步"}},"Text33":{"ctx_map":{"text":"完成"}},"Text34":{"ctx_map":{"text":""}},"Text35":{"ctx_map":{"text":"%"}},"Text36":{"ctx_map":{"text":"这是一个文本组件"}},"Text37":{"ctx_map":{"text":"请将路由器、设备、手机尽量靠近"}},"Text38":{"ctx_map":{"text":"4.连接设备"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View25":{"ctx_map":{}},"View26":{"ctx_map":{"extraStyleKeys":[]}},"View27":{"ctx_map":{}},"View28":{"ctx_map":{}},"View29":{"ctx_map":{}},"View30":{"ctx_map":{}},"View32":{"ctx_map":{}},"View33":{"ctx_map":{}},"View34":{"ctx_map":{}},"View35":{"ctx_map":{}},"View38":{"ctx_map":{}},"View39":{"ctx_map":{}},"View40":{"ctx_map":{}},"View41":{"ctx_map":{}},"View43":{"ctx_map":{}},"View44":{"ctx_map":{}},"View45":{"ctx_map":{}},"View46":{"ctx_map":{"extraStyleKeys":[]}},"View47":{"ctx_map":{}},"View48":{"ctx_map":{"extraStyleKeys":[]}},"View49":{"ctx_map":{}},"View50":{"ctx_map":{}},"View51":{"ctx_map":{}},"View52":{"ctx_map":{}},"View53":{"ctx_map":{}},"View54":{"ctx_map":{}},"View55":{"ctx_map":{}},"View56":{"ctx_map":{}},"View57":{"ctx_map":{}},"View58":{"ctx_map":{}},"View59":{"ctx_map":{}},"View61":{"ctx_map":{}},"View62":{"ctx_map":{}},"View63":{"ctx_map":{}},"View64":{"ctx_map":{}},"Picker1":{"ctx_map":{"mode":"selector","range":[{"label":"上午","value":"am"},{"label":"下午","value":"pm"}],"value":0}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewIf5":{"ctx_map":{"value":true}},"ViewIf6":{"ctx_map":{"value":true}},"ViewIf9":{"ctx_map":{"value":true}},"ViewIf10":{"ctx_map":{"value":true}},"ViewIf11":{"ctx_map":{"value":true}},"SvgImage1":{"ctx_map":{"src":"u/dev065/2023/02/20/T4LraPfiTJabdvACxxqjB6/1195361.svg","color":"#9a9a9a","width":22,"height":22,"SvgImageManage":"SvgImageManage"}},"SvgImage2":{"ctx_map":{"src":"u/dev064/2023/11/11/dze9HsnSzxvLWfQesNqzmi/900131.svg","color":"#a0a0a0","width":20,"height":20,"SvgImageManage":"SvgImageManage"}},"DwappCloud1":{"ctx_map":{"bool1":true,"bool2":false,"text1":"第一步","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud4":{"ctx_map":{"bool1":true,"bool2":false,"text1":"第三步","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud5":{"ctx_map":{"bool1":true,"bool2":false,"text1":"第二步","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud6":{"ctx_map":{"color1":"#58D092","color2":"#F8F8F8","numberb1":98,"numberb2":180,"numberb3":30}},"DwappCloud7":{"ctx_map":{"bool1":true,"bool2":false,"text1":"第四步","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud8":{"ctx_map":{"text1":"hello world","text2":"请扫码或输入设备ID(在产品包装中显示)","color1":"rgb(153, 153, 153)","style1":null,"style2":null,"select1":"text","select2":"done"}},"DwappCloud9":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"NativeInput1":{"ctx_map":{"alt":"","type":"text","checked":false,"password":true,"placeholder":"请输入WIFI密码"}},"NativeInput2":{"ctx_map":{"alt":"","type":"text","checked":false,"password":false,"placeholder":"请输入WIFI账号(将自动填充当前连接WIFI)"}},"KeyboardAvoidingView1":{"ctx_map":{"enabled":true,"behavior":"position"}}}};
slide.components.DwappCloud1.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  flexDirection: "column",
};
slide.components.DwappCloud4.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  flexDirection: "column",
};
slide.components.DwappCloud5.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  flexDirection: "column",
};
slide.components.DwappCloud7.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  flexDirection: "column",
};
slide.components.DwappCloud8.ctx_map.style1 = {
  width: pm(250),
  marginTop: pm(0),
  marginLeft: pm(10),
  flexDirection: "column",
};
slide.components.DwappCloud8.ctx_map.style2 = {
  height: pm(32),
  fontSize: pm(12),
  borderTopWidth: pm(1),
  borderTopColor: "#ccc",
  borderLeftWidth: pm(1),
  borderLeftColor: "#ccc",
  lineHeight: pm(24),
  borderRightWidth: pm(1),
  borderRightColor: "#ccc",
  paddingLeft: pm(8),
  borderBottomWidth: pm(1),
  borderBottomColor: "#ccc",
  paddingRight: pm(8),
  flexDirection: "column",
  borderTopLeftRadius: pm(5),
  borderTopRightRadius: pm(5),
  borderBottomLeftRadius: pm(5),
  borderBottomRightRadius: pm(5),
};
slide.components.DwappCloud9.ctx_map.valueStyle = {
  flexGrow: 1,
  flexShrink: 1,
  paddingTop: pm(12),
  paddingLeft: pm(30),
  borderBottomWidth: pm(0.5),
  borderBottomColor: "#eeeeee",
  paddingRight: pm(30),
  flexDirection: "column",
  paddingBottom: pm(12),
};
slide.components.DwappCloud9.ctx_map.containerStyle = {
  marginBottom: pm(18),
  flexDirection: "column",
};
slide.components.DwappCloud9.ctx_map.valueInputStyle = {
  color: "#333333",
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-net_wifi_step1';

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
      <KeyboardAvoidingViewWrap  style={styles.xdw3og} enabled={ true } behavior={ (state.step === 2 ? 'padding' : 'position') === 'auto' ? (Platform.OS === 'ios' ? 'padding' : 'height') : (state.step === 2 ? 'padding' : 'position') }><View /* View13 */   style={styles.xdw3of}>{!!(state.step === 1) /* ViewIf9 */ && (<><Xbenchc176286 /* DwappCloud1 */ isCuzBtn={ slide.components.DwappCloud1.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud1.ctx_map.bool2 } eventData={ slide.components.DwappCloud1.ctx_map.prop1 } eventData2={ slide.components.DwappCloud1.ctx_map.prop2 } title={ slide.components.DwappCloud1.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud1.ctx_map.text2 } confirmText={ slide.components.DwappCloud1.ctx_map.text3 } cancelText={ slide.components.DwappCloud1.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud1.ctx_map.color1 } confirmColor={ slide.components.DwappCloud1.ctx_map.color2 } cancelColor={ slide.components.DwappCloud1.ctx_map.color3 } backIcon={ slide.components.DwappCloud1.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud1.ctx_map.image2 } titleStyle={ slide.components.DwappCloud1.ctx_map.style1 } screenType={ slide.components.DwappCloud1.ctx_map.select1 } ></Xbenchc176286>
<View /* View1 */   style={styles.xdw3nm}><View /* View8 */   style={styles.xdw3n6}><View /* View12 */   style={styles.xdw3n4}></View>
<View /* View11 */   style={styles.xdw3n5}></View>
<View /* View10 */   style={styles.xdw3n5}></View>
<View /* View58 */   style={styles.xdw3n5}></View></View>
<View /* View7 */   style={styles.xdw3n8}><Text /* Text16 */ style={styles.xdw3n7} >{slide.components.Text16.ctx_map.text}</Text></View>
<View /* View6 */   style={styles.xdw3nb}><XbenchcImage /* Image7 */ style={styles.xdw3n9} source={dwtools.getLocalResource('xdw3na_lthar3sr')}  /></View>
<View /* View3 */   style={styles.xdw3ng}><View /* View5 */   style={styles.xdw3nd}><XbenchcImage /* Image1 */ style={styles.xdw3nc} source={dwtools.qiniu(slide.components.Image1.ctx_map.src, slide.components.Image1.ctx_map.fop)}  /></View>
<View /* View4 */   style={styles.xdw3nf}><Text /* Text15 */ style={styles.xdw3ne} >{slide.components.Text15.ctx_map.text}</Text></View></View>
<View /* View63 */   style={styles.xdw3nj}><XbenchcView /* View64 */   viewStyle={styles.xdw3ni} onClick={getEvent('View64:onClick:func17:', {}, bagForKeyValue, bagForIndex)}><Image /* SvgImage2 */ style={[ styles.xdw3nh, { width: pm(20), height: pm(20) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev064/2023/11/11/dze9HsnSzxvLWfQesNqzmi/900131.svg"), width: pm(20), height: pm(20) }} /></XbenchcView>
<Xbenchc168610 /* DwappCloud8 */ eventData={ slide.components.DwappCloud8.ctx_map.prop1 } eventData2={ slide.components.DwappCloud8.ctx_map.prop2 } value={ state.device_id } placeholder={ slide.components.DwappCloud8.ctx_map.text2 } rnappPlaceholderTextColor={ slide.components.DwappCloud8.ctx_map.color1 } containerStyle={ slide.components.DwappCloud8.ctx_map.style1 } valueInputStyle={ slide.components.DwappCloud8.ctx_map.style2 } type={ slide.components.DwappCloud8.ctx_map.select1 } confirmType={ slide.components.DwappCloud8.ctx_map.select2 }  onChange={getEvent('DwappCloud8:input::device_id', {}, bagForKeyValue, bagForIndex)}></Xbenchc168610></View>
<XbenchcView /* View2 */   viewStyle={styles.xdw3nl} onClick={getEvent('View2:onClick:func1:', {}, bagForKeyValue, bagForIndex)}><Text /* Text14 */ style={styles.xdw3nk} >{slide.components.Text14.ctx_map.text}</Text></XbenchcView></View></>)}
{!!(state.step === 2) /* ViewIf6 */ && (<><Xbenchc176286 /* DwappCloud5 */ isCuzBtn={ slide.components.DwappCloud5.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud5.ctx_map.bool2 } eventData={ slide.components.DwappCloud5.ctx_map.prop1 } eventData2={ slide.components.DwappCloud5.ctx_map.prop2 } title={ slide.components.DwappCloud5.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud5.ctx_map.text2 } confirmText={ slide.components.DwappCloud5.ctx_map.text3 } cancelText={ slide.components.DwappCloud5.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud5.ctx_map.color1 } confirmColor={ slide.components.DwappCloud5.ctx_map.color2 } cancelColor={ slide.components.DwappCloud5.ctx_map.color3 } backIcon={ slide.components.DwappCloud5.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud5.ctx_map.image2 } titleStyle={ slide.components.DwappCloud5.ctx_map.style1 } screenType={ slide.components.DwappCloud5.ctx_map.select1 } ></Xbenchc176286>
<View /* View35 */   style={styles.xdw3nm}><View /* View41 */   style={styles.xdw3n6}><View /* View45 */   style={styles.xdw3n4}></View>
<View /* View44 */   style={styles.xdw3n4}></View>
<View /* View43 */   style={styles.xdw3n5}></View>
<View /* View59 */   style={styles.xdw3n5}></View></View>
<View /* View40 */   style={styles.xdw3np}><Text /* Text31 */ style={styles.xdw3nn} >{slide.components.Text31.ctx_map.text}</Text>
<Text /* Text30 */ style={styles.xdw3no} >{slide.components.Text30.ctx_map.text}</Text></View>
<View /* View38 */   style={styles.xdw3nu}><View /* View39 */   style={styles.xdw3nt}><XbenchcImage /* Image6 */ style={styles.xdw3nq} source={dwtools.getLocalResource('xdw3nr_lthar3t9')}  />
<Text /* Text29 */ style={styles.xdw3ns} >{state.currentSsid ? `当前连接的热点[${state.currentSsid}]` : "当前尚未连接任何热点"}</Text></View></View>
<XbenchcView /* View46 */   viewStyle={styles.xdw3nl} onClick={getEvent('View46:onClick:func1:', {}, bagForKeyValue, bagForIndex)}><Text /* Text32 */ style={styles.xdw3nk} >{slide.components.Text32.ctx_map.text}</Text></XbenchcView></View></>)}
{!!(state.step === 3) /* ViewIf3 */ && (<><Xbenchc176286 /* DwappCloud4 */ isCuzBtn={ slide.components.DwappCloud4.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud4.ctx_map.bool2 } eventData={ slide.components.DwappCloud4.ctx_map.prop1 } eventData2={ slide.components.DwappCloud4.ctx_map.prop2 } title={ slide.components.DwappCloud4.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud4.ctx_map.text2 } confirmText={ slide.components.DwappCloud4.ctx_map.text3 } cancelText={ slide.components.DwappCloud4.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud4.ctx_map.color1 } confirmColor={ slide.components.DwappCloud4.ctx_map.color2 } cancelColor={ slide.components.DwappCloud4.ctx_map.color3 } backIcon={ slide.components.DwappCloud4.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud4.ctx_map.image2 } titleStyle={ slide.components.DwappCloud4.ctx_map.style1 } screenType={ slide.components.DwappCloud4.ctx_map.select1 } ></Xbenchc176286>
<View /* View25 */   style={styles.xdw3o7}><View /* View30 */   style={styles.xdw3n6}><View /* View34 */   style={styles.xdw3n4}></View>
<View /* View33 */   style={styles.xdw3n4}></View>
<View /* View32 */   style={styles.xdw3n4}></View>
<View /* View61 */   style={styles.xdw3n5}></View></View>
<View /* View29 */   style={styles.xdw3np}><Text /* Text26 */ style={styles.xdw3n7} >{slide.components.Text26.ctx_map.text}</Text>
<Text /* Text25 */ style={styles.xdw3nv} >{slide.components.Text25.ctx_map.text}</Text></View>
<View /* View28 */   style={styles.xdw3ny}><XbenchcImage /* Image3 */ style={styles.xdw3nw} source={dwtools.getLocalResource('xdw3nx_lthar3tp')}  /></View>
<View /* View27 */   style={styles.xdw3o3}>{!!(state.OS === 'android') /* ViewIf5 */ && (<><XbenchcPicker /* Picker1 */ value={ state.ssidBind } mode={ slide.components.Picker1.ctx_map.mode } range={ state.wifi_options }  onChange={getEvent('Picker1:input:func4:', {}, bagForKeyValue, bagForIndex)}><View /* View62 */   style={styles.xdw3o1}><Text /* Text24 */ style={styles.xdw3nz} >{state.ssid || '点击选择WIFI'}</Text>
<Image /* SvgImage1 */ style={[ styles.xdw3o0, { width: pm(22), height: pm(22) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev065/2023/02/20/T4LraPfiTJabdvACxxqjB6/1195361.svg"), width: pm(22), height: pm(22) }} /></View></XbenchcPicker></>)}
{!!(state.OS === 'ios') /* ViewIf4 */ && (<><XbenchcInput /* NativeInput2 */ style={styles.xdw3o2} value={state.ssid} placeholder={slide.components.NativeInput2.ctx_map.placeholder} type={slide.components.NativeInput2.ctx_map.type} password={slide.components.NativeInput2.ctx_map.password}  onChange={getEvent('NativeInput2:onChange:func5:', {eventData: "ssid"}, bagForKeyValue, bagForIndex)} /></>)}</View>
<XbenchcInput /* NativeInput1 */ style={styles.xdw3o4} value={state.password} placeholder={slide.components.NativeInput1.ctx_map.placeholder} type={slide.components.NativeInput1.ctx_map.type} password={slide.components.NativeInput1.ctx_map.password}  onChange={getEvent('NativeInput1:onChange:func5:', {eventData: "password"}, bagForKeyValue, bagForIndex)} />
<XbenchcView /* View26 */   viewStyle={styles.xdw3o6} onClick={getEvent('View26:onClick:func11:', {}, bagForKeyValue, bagForIndex)}><Text /* Text23 */ style={styles.xdw3o5} >{slide.components.Text23.ctx_map.text}</Text></XbenchcView></View></>)}
{!!(state.step === 4) /* ViewIf10 */ && (<><Xbenchc176286 /* DwappCloud7 */ isCuzBtn={ slide.components.DwappCloud7.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud7.ctx_map.bool2 } eventData={ slide.components.DwappCloud7.ctx_map.prop1 } eventData2={ slide.components.DwappCloud7.ctx_map.prop2 } title={ slide.components.DwappCloud7.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud7.ctx_map.text2 } confirmText={ slide.components.DwappCloud7.ctx_map.text3 } cancelText={ slide.components.DwappCloud7.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud7.ctx_map.color1 } confirmColor={ slide.components.DwappCloud7.ctx_map.color2 } cancelColor={ slide.components.DwappCloud7.ctx_map.color3 } backIcon={ slide.components.DwappCloud7.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud7.ctx_map.image2 } titleStyle={ slide.components.DwappCloud7.ctx_map.style1 } screenType={ slide.components.DwappCloud7.ctx_map.select1 } ></Xbenchc176286>
<View /* View47 */   style={styles.xdw3nm}><View /* View53 */   style={styles.xdw3n6}><View /* View57 */   style={styles.xdw3n4}></View>
<View /* View56 */   style={styles.xdw3n4}></View>
<View /* View55 */   style={styles.xdw3n4}></View>
<View /* View54 */   style={styles.xdw3n4}></View></View>
<View /* View52 */   style={styles.xdw3np}><Text /* Text38 */ style={styles.xdw3n7} >{slide.components.Text38.ctx_map.text}</Text>
<Text /* Text37 */ style={styles.xdw3nv} >{slide.components.Text37.ctx_map.text}</Text></View>
<View /* View49 */   style={styles.xdw3od}><Xbenchc173692 /* DwappCloud6 */ color={ slide.components.DwappCloud6.ctx_map.color1 } bgColor={ slide.components.DwappCloud6.ctx_map.color2 } value={ state.progress } radius={ slide.components.DwappCloud6.ctx_map.numberb2 } swidth={ slide.components.DwappCloud6.ctx_map.numberb3 } ></Xbenchc173692>
<View /* View50 */   style={styles.xdw3oc}><View /* View51 */   style={styles.xdw3oa}><Text /* Text36 */ style={styles.xdw3o8} >{state.progress}</Text>
<Text /* Text35 */ style={styles.xdw3o9} >{slide.components.Text35.ctx_map.text}</Text></View>
<Text /* Text34 */ style={styles.xdw3ob} >{state.progress < 100 ? "设备配网中" : "设备配网成功"}</Text></View></View>
{!!(state.progress === 100) /* ViewIf11 */ && (<><XbenchcView /* View48 */   viewStyle={styles.xdw3oe} onClick={getEvent('View48:onClick:func9:', {}, bagForKeyValue, bagForIndex)}><Text /* Text33 */ style={styles.xdw3o5} >{slide.components.Text33.ctx_map.text}</Text></XbenchcView></>)}</View></>)}
<Xbenchc275104 /* DwappCloud9 */ valueStyle={ slide.components.DwappCloud9.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud9.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud9.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud9:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104></View></KeyboardAvoidingViewWrap>
    </ErrorBoundary>
  )
}
