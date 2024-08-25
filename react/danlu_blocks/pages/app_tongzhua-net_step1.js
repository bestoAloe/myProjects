
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import ViewForItem from '../../xbench/components/ViewForItem'
import XbenchcPicker from '../../xbench/xbenchc/components/XbenchcPicker'
import XbenchcInput from '../../xbench/xbenchc/components/XbenchcInput'
import XbenchcScrollView from '../../xbench/xbenchc/components/XbenchcScrollView'
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
let BleManager = (null)
const action79 = BleManager
let bleManagerEmitter = (null)
const action80 = bleManagerEmitter
let discoverEventListener = (null)
const action92 = discoverEventListener
let connectEventListener = (null)
const action93 = connectEventListener
let diconnectEventListener = (null)
const action94 = diconnectEventListener
let messageListener = (null)
const action160 = messageListener
let modalInstance = (null)
const action146 = modalInstance
let gecb = (null)
const action171 = gecb
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action4 = state.step = (1)
  const action7 = state.password = ("")
  const action8 = state.passwordDisplay = ("")
  const action10 = state.wifi_options = ([/**/  {/**/    label: '3012', value: '3012',/**/  },/**/  {/**/    label: '3012_6G', value: '3012_6G',/**/  }/**/])
  const action11 = state.OS = ("ios")
  const action12 = state.ssid = (null)
  const action13 = state.ssidBind = (0)
  const action41 = state.progress = (0)
  const action42 = state.message = ("设备连接中")
  /* action70: 设备相关 */
  const action68 = state.deviceName = ("")
  const action67 = state.peripheralId = ("")
  const action66 = state.readCharacteristic = (null)
  const action69 = state.writeCharacteristic = (null)
  const action73 = state.showRetry = (false)
  const action87 = state.init = (false)
  const action101 = state.device_member = (null)
  const action100 = state.device = (null)
  const action111 = state.pwd_hide = (false)
  const action113 = state.deviceList = ([])
  const action155 = state.config = (null)
  return state
}

const action38 = actions['onShow'] = async function (store, event) {
  const state = store.state
  /* action173: 监听全局事件，抛给控制器函数处理 */
  const action174 = ((store, event) => {
gecb = (event) => {
  store.dispatch('handleWsMessage', event)
}

dw.globalEvent.addListener('GLOBAL_WS_EVENT', gecb)

})(store, event)
  let action104
  

  const action158 = await Promise.all([
    (async () => {
      const action39 = await store.dispatch("func3", {})
      return action39
    })(),
    (async () => {
      const action157 = await store.dispatch("func11", {})
      return action157
    })(),
  ])

}

const action193 = actions['onUnload'] = function (store, event) {
  const state = store.state
  const action194 = ((store, event) => {
if(gecb){
  dw.globalEvent.removeListener('GLOBAL_WS_EVENT', gecb)
}
})(store, event)
}

const action153 = actions['func11'] = async function (store, event) {
  const state = store.state
  const action154 = await dw.app.run("config.get", {})
  const action156 = store.commit('setState', {["state.config"]: action154.object})
}

const action161 = actions['handleWsMessage'] = async function (store, event) {
  const state = store.state
  if (!!state.device && event.data.result.type === 'deviceConnect' && state.step === 4 && event.data.result.device_id === state.device.data.device_id) {
    const action175 = await store.dispatch("func7", {})
  }
}

const action2 = actions['func1'] = async function (store, event) {
  const state = store.state
  /* action54: 点击前 */
  if (state.step === 3) {
    
        if (!!(!state.ssid) === (true)) {
          const action18message = ("未输入正确的wifi账号")
          const action18title = ("提示")
          action18message && dw.alert(action18title, action18message)
          return {}
        }
        
    
        if (!!(!state.password) === (true)) {
          const action19message = ("未输入正确的wifi密码")
          const action19title = ("提示")
          action19message && dw.alert(action19title, action19message)
          return {}
        }
        
  }
  const action5 = store.commit('setState', {["state.step"]: state.step + 1})
  /* action52: COMMIT */
  /* action55: 点击后 */
  if (state.step === 2) {
    /* action58: 搜索蓝牙设备 */
    const action53 = await store.dispatch("func8", {})
  } else if (state.step === 4) {
    const action57 = await store.dispatch("func6", {})
    const action81 = await store.dispatch("write", {})
  }
}

/* action200: wifi */
const action20 = actions['func3'] = async function (store, event) {
  const state = store.state
  if (dw.platform === 'rnapp') {
    let Platform = (dw.getNativePackage('Platform'))
    const action23 = Platform
    const action24 = store.commit('setState', {["state.OS"]: Platform.OS})
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
    const action121 = console.log('[func3#action121] action27', action27)
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

const action44 = actions['func7'] = function (store, event) {
  const state = store.state
  const action45 = ((store, event) => {
if(tick){
  clearInterval(tick)
}
tick_fast = setInterval(()=>{
  if(state.progress < 100){
    store.commit('setState', { ['state.progress']: state.progress + 1 })
  }
  else{
    clearInterval(tick_fast)
  }
}, 100)
})(store, event)
}

/* action201: 蓝牙 */
const action59 = actions['func8'] = async function (store, event) {
  const state = store.state
  if (state.showRetry) {
    const action75 = store.commit('setState', {["state.showRetry"]: false})
    const action109 = await (async (store, event) => {
await BleManager.stopScan();
})(store, event)
  }
  const action60 = await (async (store, event) => {
// 参考文档 https://github.com/innoveit/react-native-ble-manager


Platform = dw.getNativePackage('Platform')
BleManager = dw.getNativePackage('BleManager')
bleManagerEmitter = dw.getNativePackage('bleManagerEmitter')

// 蓝牙设备已连接监听

// if(!state.init){
if(true){
  connectEventListener = bleManagerEmitter.addListener('BleManagerConnectPeripheral', (args) => {

    console.log('连接成功后的回调:', args);
  });

  // 蓝牙设备已断开连接监听
  diconnectEventListener = bleManagerEmitter.addListener('BleManagerDisconnectPeripheral', async (args) => {
    console.log('连接断开后的回调:', args);
    console.log('尝试重连')
    store.dispatch("connect", {})
  });
}


const devices = {}

const log = (log) => {
  console.log(`[log] ${log}`)
}



const onReject = (error) => {
  console.log(`[error] ${error}`)
  connectEventListener.remove()
  diconnectEventListener.remove()
  discoverEventListener.remove()
}

// if(!state.init){
if(true){
  discoverEventListener = bleManagerEmitter.addListener("BleManagerDiscoverPeripheral", async (args) => {
    if (!args.name) return
    if (devices[args.name]) return

    devices[args.name] = args
    
    console.log(`BleManagerDiscoverPeripheral id=${args.id} name=${args.name}`)
    console.log(`BleManagerDiscoverPeripheral args=${JSON.stringify(args)}`)

    if (args.name.startsWith("TZT") && !state.deviceList.find(x=>x.name === args.name)) {
      store.commit('setState', { ['state.deviceList']: [...state.deviceList, args] })
      // store.commit('setState', { ['state.peripheralId']: args.id })
      // store.commit('setState', { ['state.deviceName']: args.name })
      // console.log('state.peripheralId', state.peripheralId)
      // console.log('state.deviceName', state.deviceName)
      // connect()
    }
  });
}

/* 
  Android 的蓝牙权限在 Android 12之前的版本跟之后的有区别，需要分别单独处理
  其中 BLUETOOTH_SCAN,BLUETOOTH_CONNECT,BLUETOOTH_ADVERTISE 为 Android 12 新增权限，
  只有在 Android 12及以后的版本中才有效，在之前的版本中永远是未授权(never_ask_again)
*/

const handleAndroidPermissions = async () => {
  log(`Platform.Version: ${Platform.Version}`)
  if (Platform.OS === 'android' && Platform.Version >= 31) {
    const { status } = await dw.requestAndroidPermission('android.permission.BLUETOOTH_SCAN,android.permission.BLUETOOTH_CONNECT')
    log(`SCAN CONNECT status ${status}`)

    if (status["android.permission.BLUETOOTH_CONNECT"] !== 'granted' || status["android.permission.BLUETOOTH_SCAN"] !== 'granted') {
      log('[handleAndroidPermissions] User refueses runtime permissions android 12+')
      return dw.alert('提示', '请授予蓝牙权限')
    } else {
      log('[handleAndroidPermissions] User accepts runtime permissions android 12+')
    }

  } else if (Platform.OS === 'android' && Platform.Version >= 23) {

    const { status } = await dw.requestAndroidPermission('android.permission.ACCESS_FINE_LOCATION')
    log(`SCAN CONNECT status ${status}`)

    if (status !== 'granted') {
      log('[handleAndroidPermissions] User refueses runtime permissions android <12')
      return dw.alert('提示', '请授予蓝牙权限')
    } else {
      log('[handleAndroidPermissions] User accepts runtime permissions android <12')
    }
  }
}

if (Platform.OS === 'android') {
  await handleAndroidPermissions()
}


BleManager.start({ showAlert: true }).then(() => {

  log('call BleManager.scan')
  BleManager.scan([], 10, true).then(() => {
    log("scan started");

  }, onReject)

  setTimeout(() => {
    discoverEventListener.remove()
    connectEventListener.remove()
    diconnectEventListener.remove()
    console.log('call eventListener.remove')
    store.dispatch("scanTimeout")
  }, 10 * 1000)
}, onReject)
})(store, event)
  if (!state.init) {
    const action88 = store.commit('setState', {["state.init"]: true})
  }
}

const action71 = actions['scanTimeout'] = async function (store, event) {
  const state = store.state
  if (!state.deviceList.length) {
    let msg = ("未能搜索到设备，请重试")
    const action138 = msg
    const action139 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(msg)
}
else{
  return null
}
})(store, event)
  }
  const action74 = store.commit('setState', {["state.showRetry"]: true})
}

const action114 = actions['connect'] = async function (store, event) {
  const state = store.state
  let message = ("蓝牙连接中...")
  const action197 = message
  const action198 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  let peripheralId = (null)
  const action126 = peripheralId
  if (event.context.eventData.id) {
    const action127 = peripheralId = (event.context.eventData.id)
    const action122 = store.commit('setState', {["state.peripheralId"]: peripheralId, ["state.deviceName"]: event.context.eventData.name})
  } else {
    const action129 = peripheralId = (state.peripheralId)
  }
  const action115 = await (async (store, event) => {
function bytesToString(bytes) {
  let result = '';
  for (let i = 0; i < bytes.length; i++) {
    result += String.fromCharCode(bytes[i]);
  }
  return result;
}


async function connect(){
  BleManager.connect(peripheralId).then(async res => {
  console.log("蓝牙连接成功", res);

  const peripheralInfo = await BleManager.retrieveServices(peripheralId)
  console.log('peripheralInfo', peripheralInfo)
  const characteristics = peripheralInfo.characteristics
  console.log('characteristics', characteristics)

  if(state.OS === 'android'){
    store.commit('setState', { ['state.writeCharacteristic']: characteristics.find(x => !!x.properties.Write) })
    store.commit('setState', { ['state.readCharacteristic']: characteristics.find(x => !!x.properties.Read) })
  }
  else if(state.OS === 'ios'){
    store.commit('setState', { ['state.writeCharacteristic']: characteristics.find(x => x.properties.includes("Write")) })
    store.commit('setState', { ['state.readCharacteristic']: characteristics.find(x => x.properties.includes("Read")) })
  }

  console.log('writeCharacteristic', state.writeCharacteristic)
  console.log('readCharacteristic', state.readCharacteristic)
  BleManager.startNotification(peripheralId, state.readCharacteristic.service, state.readCharacteristic.characteristic)
    .then(async () => {
      console.log('Notification started');

      // 添加监听器来处理接收到的数据
      // bleManagerEmitter.addListener(
      //   'BleManagerDidUpdateValueForCharacteristic', // 设备特征值更新事件
      //   async (args) => {
      //     // 在这里处理设备端发送的响应数据
      //     console.log('设备端响应数据:', args);
      //     // 处理接收到的数据
      //     await store.dispatch("func7", {})
      //   }
      // );

      messageListener = bleManagerEmitter.addListener(
        "BleManagerDidUpdateValueForCharacteristic",
        ({ value, peripheral, characteristic, service }) => {
          // Convert bytes array to string
          console.log(`rawData:${value}`);
          const data = bytesToString(value);
          console.log(`Received ${data} for characteristic ${characteristic}`);
        }
      );


    })
    .catch((error) => {

      console.log('Notification error:', error);
    });
  await store.dispatch("onDeviceConnect", {})
  await store.dispatch("func1", {})

}).catch(e => {
  console.log('蓝牙连接失败报错了', e)
})
}

connect()
})(store, event)
}

const action96 = actions['onDeviceConnect'] = async function (store, event) {
  const state = store.state
  const action97 = await dw.app.run("device.get_create", {"device_id": state.deviceName})
  const action130 = console.log('[onDeviceConnect#action130] action97.device.id!!!', action97.device.id)
  const action131 = console.log('[onDeviceConnect#action131] action97.device.id!!!', action97.device.id)
  const action132 = console.log('[onDeviceConnect#action132] action97.device.id!!!', action97.device.id)
  const action133 = console.log('[onDeviceConnect#action133] action97.device.id!!!', action97.device.id)
  const action134 = console.log('[onDeviceConnect#action134] action97.device.id!!!', action97.device.id)
  const action98 = store.commit('setState', {["state.device_member"]: action97.device_member, ["state.device"]: action97.device})
}

const action187 = actions['func68'] = async function (store, event) {
  const state = store.state
  let message = ("蓝牙配网超时")
  const action189 = message
  const action190 = await (async (store, event) => {
if(modalInstance){
  return await modalInstance.popUp(message)
}
return true
})(store, event)
  let action192
  
        action192 = (dw.platform === 'rnapp') ? await (async () => {
    const action191 = await dw.navigateBack({delta: 1})
  
        })() : undefined
        
}

const action76 = actions['write'] = async function (store, event) {
  const state = store.state
  let message = ("尝试连接中")
  const action148 = message
  const action149 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  const action77 = ((store, event) => {
// function stringToHexArray(str) {
//   const hexArray = [];

//   for (let i = 0; i < str.length; i++) {
//     const hexValue = str.charCodeAt(i).toString(16);
//     hexArray.push(parseInt(hexValue, 16));
//   }

//   return hexArray;
// }

const encoder = new TextEncoder();

// 修改 stringToHexArray 函数以处理 UTF-8 编码
function stringToHexArray(str) {
  const encodedData = encoder.encode(str);
  const hexArray = [];

  for (let i = 0; i < encodedData.length; i++) {
    hexArray.push(encodedData[i]);
  }

  return hexArray;
}

function extractHostFromUrl(url) {
  const match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n]+)/im);
  if (match && match[1]) {
    return match[1];
  }
  return null;
}

// 写入配网信息
const sourceData = {
  action: 'wifiNetworkConfigure',
  seq: Math.random().toString(36).slice(2),
  qos: 1,
  data: {
    deviceID: state.device.data.device_id,
    mobileUuid: state.device_member.uuid,
    serviceUrls: `${extractHostFromUrl(state.config.data.mqtt_base_url)}:1883`,
    userId: String(state.device_member.data.siteuser_id),
    wifiSsid: state.ssid,
    wifiPwd: state.password,
    wifiSecurity: 2,
  }
}
console.log('sourceData', sourceData);
const data = stringToHexArray(JSON.stringify(sourceData))
// const data = stringToHexArray(`{"action": "wifiNetworkConfigure","seq": "12345678","qol": 1,"data": {"deviceID": "device01","mobileUuid": "703bc085-1bdb-47c3-873a-bc7e84381964","serviceUrls": "URL:","userId": "1234","wifiSsid": "3012","wifiPwd": "3012@work@2022","wifiSecurity": 2}}`)
const params = {
  peripheralId: state.peripheralId,
  serviceUUID: state.writeCharacteristic.service,
  characteristicUUID: state.writeCharacteristic.characteristic,
  data,
}
console.log('params', params)
BleManager.write(params.peripheralId, params.serviceUUID, params.characteristicUUID, params.data, 1024).then(writeWifiRes => {
  console.log("writeWifiRes", writeWifiRes)
  // store.dispatch("func7")
}).catch(e => {
  console.log('写入报错了 | e', e)
  // store.dispatch("func7")
})
})(store, event)
}

const action82 = actions['func9'] = async function (store, event) {
  const state = store.state
  /* action102: 更新配网信息 */
  const action103 = await dw.app.run("device_member.update", {"id": state.device_member.id, "formData": {/**/    wifi_ssid: state.ssid,/**/    wifi_pwd: state.password,/**/}})
  let message = ("配网成功")
  const action151 = message
  const action152 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  await new Promise((resolve, reject) => setTimeout(resolve, 500))
  const action95 = dw.app.goToPappUrl("dcenter", {}, {redirectTo: false})
}

const action110 = actions['func10'] = function (store, event) {
  const state = store.state
  const action112 = store.commit('setState', {["state.pwd_hide"]: !state.pwd_hide})
}

/* action202: 消息提示 */
const action143 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action144 = modalInstance = (event.data)
  const action145 = console.log('[getModalInstance#action145] 打印(modalInstance)', modalInstance)
}

const action185 = actions['func67'] = function (store, event) {
  const state = store.state
  const action186 = modalInstance = (event.data)
}

exports.default =  {
  actions
}
        return exports.default;
      });
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdw1jk: {
  width: pm(77),
  height: pm(4),
  flexDirection: "column",
  backgroundColor: "rgba(255, 211, 85, 1)",
},
xdw1jl: {
  width: pm(77),
  height: pm(4),
  flexDirection: "column",
  backgroundColor: "rgba(231, 229, 232, 1)",
},
xdw1jm: {
  flexDirection: "row",
  justifyContent: "space-between",
},
xdw1jn: {
  width: pm(280),
  height: pm(88),
},
xdw1jo: {
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
xdw1jp: {
  width: pm(280),
  height: pm(328),
},
xdw1jr: {
  marginLeft: pm(20),
  marginRight: pm(20),
  flexDirection: "column",
},
xdw1js: {
  width: pm(300),
  height: pm(40),
},
xdw1jt: {
  width: "100%",
  bottom: pm(20),
  position: "absolute",
  flexDirection: "row",
  justifyContent: "center",
},
xdw1ju: {
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
xdw1jv: {
  width: pm(77),
  height: pm(4),
  flexDirection: "column",
  backgroundColor: "#fbd656",
},
xdw1jw: {
  width: pm(77),
  height: pm(4),
  flexDirection: "column",
  backgroundColor: "#e7e5e8",
},
xdw1jx: {
  width: pm(280),
  height: pm(56),
},
xdw1jy: {
  marginTop: pm(30),
  marginLeft: pm(20),
  paddingTop: 0,
  marginRight: pm(20),
  paddingLeft: 0,
  paddingRight: 0,
  flexDirection: "column",
  paddingBottom: 0,
},
xdw1jz: {
  width: pm(145),
  height: pm(17.5),
},
xdw1k1: {
  marginTop: pm(30),
  marginLeft: pm(20),
  marginRight: pm(20),
  marginBottom: pm(14),
  flexDirection: "column",
},
xdw1k2: {
  height: pm(60),
  zIndex: 5,
},
xdw1k3: {
  color: "#000000",
  fontSize: pm(14),
  fontWeight: "500",
  lineHeight: pm(24),
},
xdw1k4: {
  left: pm(80),
  height: "100%",
  zIndex: 5,
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw1k5: {
  zIndex: 5,
  position: "relative",
  flexDirection: "column",
},
xdw1k6: {
  width: pm(300),
  marginLeft: pm(10),
  marginRight: pm(10),
  marginBottom: pm(10),
},
xdw1k7: {
  flexDirection: "column",
},
xdw1k8: {
  width: pm(280),
  height: pm(57),
},
xdw1k9: {
  width: pm(185),
  height: pm(193),
},
xdw1kb: {
  marginTop: pm(50),
  marginLeft: pm(10),
  marginRight: pm(10),
  marginBottom: pm(30),
  flexDirection: "row",
  justifyContent: "center",
},
xdw1kc: {
  color: "#181818",
  fontSize: pm(12),
  fontWeight: "400",
  lineHeight: pm(20),
  marginRight: pm(10),
},
xdw1kd: {
  width: pm(18),
  height: pm(18),
},
xdw1ke: {
  width: pm(300),
  height: pm(42),
  alignItems: "center",
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
  justifyContent: "space-between",
},
xdw1kf: {
  width: pm(300),
  height: pm(42),
  alignItems: "center",
  marginLeft: pm(10),
  paddingTop: 0,
  marginRight: pm(10),
  paddingLeft: 0,
  paddingRight: 0,
  flexDirection: "row",
  paddingBottom: 0,
  justifyContent: "space-between",
  backgroundColor: "#f8f8f8",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw1kg: {
  color: "#181818",
  width: pm(250),
  fontSize: pm(12),
  borderTopWidth: pm(0),
  borderTopColor: "#000",
  borderLeftWidth: pm(0),
  borderLeftColor: "#000",
  lineHeight: pm(20),
  paddingTop: pm(10),
  borderRightWidth: pm(0),
  borderRightColor: "#000",
  paddingLeft: pm(10),
  borderBottomWidth: pm(0),
  borderBottomColor: "#000",
  paddingRight: pm(10),
  paddingBottom: pm(10),
  backgroundColor: "#f8f8f8",
  borderTopLeftRadius: pm(5),
  borderTopRightRadius: pm(5),
  borderBottomLeftRadius: pm(5),
  borderBottomRightRadius: pm(5),
},
xdw1kh: {
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
},
xdw1ki: {
  width: pm(300),
  marginTop: pm(10),
  alignItems: "center",
  marginLeft: pm(10),
  marginRight: pm(10),
  marginBottom: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: "#f8f8f8",
  borderTopLeftRadius: pm(5),
  borderTopRightRadius: pm(5),
  borderBottomLeftRadius: pm(5),
  borderBottomRightRadius: pm(5),
},
xdw1kj: {
  width: pm(300),
  height: pm(15),
},
xdw1kk: {
  width: pm(300),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
},
xdw1kl: {
  width: pm(320),
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  flexDirection: "column",
  paddingBottom: 0,
  backgroundColor: "#ffffff",
},
xdw1km: {
  width: "100%",
  flexGrow: 1,
  flexBasis: "0%",
  flexShrink: 1,
},
xdw1kn: {
  width: "100%",
  marginTop: pm(20),
  marginBottom: pm(20),
  flexDirection: "row",
  justifyContent: "center",
},
xdw1ko: {
  width: pm(280),
},
xdw1kp: {
  fontSize: pm(48),
  lineHeight: pm(60),
},
xdw1kq: {
  color: "#999999",
  fontSize: pm(14),
  lineHeight: pm(20),
  marginLeft: pm(3),
  marginBottom: pm(12),
},
xdw1kr: {
  alignItems: "flex-end",
  flexDirection: "row",
},
xdw1ks: {
  color: "#999999",
  fontSize: pm(10),
  marginTop: pm(2),
  lineHeight: pm(15),
},
xdw1kt: {
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw1ku: {
  width: pm(143),
  height: pm(120),
},
xdw1kv: {
  position: "relative",
  marginTop: pm(50),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw1kw: {
  width: pm(117),
  height: pm(19),
},
xdw1kx: {
  flexDirection: "row",
  justifyContent: "center",
},
xdw1ky: {
  width: pm(118.5),
  height: pm(19),
},
xdw1kz: {
  marginTop: pm(50),
  flexDirection: "column",
},
xdw1l0: {
  height: "100%",
  flexGrow: 1,
  flexShrink: 0,
  flexDirection: "column",
},
xdw1l1: {
  flexGrow: 1,
  flexShrink: 1,
  flexDirection: "column",
}
});
const slide = {"type":"287358","key":"c2873581","slug":null,"randomid":"id_61d0c5ee73b16ecb87ec138f","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View3":{"ctx_map":{}},"View4":{"ctx_map":{"extraStyleKeys":[]}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,990,1161","src":"u/dev066/2024/03/02/G2PSTPBkehSxtf6HmzUrGV/分组19.png","buildToLocal":true}},"Image5":{"ctx_map":{"fop":"e,510,60","src":"u/dev066/2024/02/26/g4uMbZckHMMXtig6kB5hXL/编组51.png","buildToLocal":true}},"Image6":{"ctx_map":{"fop":"e,651,678","src":"u/dev066/2024/02/28/tepUGmBasJqpbENJ5csfrS/分组112.png","buildToLocal":true}},"Image7":{"ctx_map":{"fop":"e,1053,144","src":"u/dev066/2024/02/26/EUkjV83jZo93ps9yhbGhBj/编组21.png"}},"Image8":{"ctx_map":{"fop":"e,1053,228","src":"u/dev066/2024/02/26/S9rVpHrtdh7GEtzavwEcrd/编组3备份.png"}},"Image9":{"ctx_map":{"fop":"e,1053,144","src":"u/dev066/2024/02/26/EwzhHBKdUZpLrFpma4LLxS/编组22.png"}},"Text17":{"ctx_map":{"text":"Tongzhua-One"}},"Text21":{"ctx_map":{"text":"下一步"}},"Text22":{"ctx_map":{"text":"点击选择WIFI"}},"Text25":{"ctx_map":{"text":"完成"}},"Text26":{"ctx_map":{"text":""}},"Text27":{"ctx_map":{"text":"%"}},"Text28":{"ctx_map":{"text":"这是一个文本组件"}},"Text31":{"ctx_map":{"text":"3.连接WiFi"}},"Text32":{"ctx_map":{"text":"支持全频段的WIFI，包含5GHz"}},"Text33":{"ctx_map":{"text":"请将路由器、设备、手机尽量靠近"}},"Text34":{"ctx_map":{"text":"4.连接设备"}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View19":{"ctx_map":{}},"View20":{"ctx_map":{}},"View21":{"ctx_map":{}},"View22":{"ctx_map":{}},"View24":{"ctx_map":{}},"View25":{"ctx_map":{}},"View26":{"ctx_map":{}},"View27":{"ctx_map":{}},"View28":{"ctx_map":{}},"View29":{"ctx_map":{}},"View30":{"ctx_map":{}},"View31":{"ctx_map":{"extraStyleKeys":[]}},"View32":{"ctx_map":{}},"View33":{"ctx_map":{}},"View34":{"ctx_map":{}},"View35":{"ctx_map":{}},"View36":{"ctx_map":{}},"View37":{"ctx_map":{}},"View38":{"ctx_map":{}},"View39":{"ctx_map":{}},"View40":{"ctx_map":{}},"View41":{"ctx_map":{"extraStyleKeys":[]}},"View42":{"ctx_map":{}},"View43":{"ctx_map":{}},"View44":{"ctx_map":{}},"View46":{"ctx_map":{}},"View47":{"ctx_map":{}},"View48":{"ctx_map":{}},"View49":{"ctx_map":{}},"View50":{"ctx_map":{}},"View51":{"ctx_map":{"extraStyleKeys":[]}},"View52":{"ctx_map":{}},"View53":{"ctx_map":{}},"View54":{"ctx_map":{}},"View55":{"ctx_map":{}},"View56":{"ctx_map":{}},"View57":{"ctx_map":{}},"View58":{"ctx_map":{}},"View59":{"ctx_map":{}},"View60":{"ctx_map":{}},"View61":{"ctx_map":{}},"View62":{"ctx_map":{}},"View63":{"ctx_map":{}},"View64":{"ctx_map":{}},"View65":{"ctx_map":{}},"View66":{"ctx_map":{}},"View67":{"ctx_map":{}},"Image10":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/03/04/DRiTmQCgsKwdngXtPb9xKD/进入icon1.png"}},"Image11":{"ctx_map":{"fop":"e,1053,144","src":"u/dev066/2024/02/28/JLL7rafYmKeqFiXy28j25J/编组23x1.png"}},"Image12":{"ctx_map":{"fop":"e,411,66","src":"u/dev066/2024/02/28/vt2Q5zcdt24QeZoP6s7RjQ/编组53x.png"}},"Image13":{"ctx_map":{"fop":"e,417,66","src":"u/dev066/2024/02/28/3yev8P5Pd83gobLQRVfm7g/编组63x.png"}},"Image15":{"ctx_map":{"fop":"e,369,66","src":"u/dev066/2024/02/28/mUmoEFmyCSaGvL7epLBUGW/编组53x1.png"}},"Image16":{"ctx_map":{"fop":"e,798,60","src":"u/dev066/2024/02/28/Yothod3LgVuN7dXq3WPQNQ/配网期间蓝牙始终保持开启或更换网络环境3x.png"}},"Image17":{"ctx_map":{"fop":"e,504,423","src":"u/dev066/2024/03/04/RgcSu56DFrgsniMfSD22VX/编组21.png"}},"Image18":{"ctx_map":{"fop":"e,1053,144","src":"u/dev066/2024/03/04/vScir8Anbrt2E7q65V2Zam/编组22.png"}},"Image19":{"ctx_map":{"fop":"e,948,297","src":"u/dev066/2024/03/02/QEgeSJ9Q9WoqKUuyxC75z2/1.长按reset键5秒听到语音提示后.png"}},"Image20":{"ctx_map":{"fop":"e,948,189","src":"u/dev066/2024/03/02/f7NkJ6AJMUKzXpXqX2iJh8/分组110.png"}},"Image21":{"ctx_map":{"fop":"e,948,192","src":"u/dev066/2024/03/04/mMCtfx68zrQPb5hVWA476m/分组2.png"}},"Image22":{"ctx_map":{"fop":"e,966,51","src":"u/dev066/2024/03/04/GEeVFjz4gcCG38GLUa4uiM/编组9.png"}},"Image23":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/03/04/fpB3SnQ2jhHMqHMC5G6FXU/编组91.png"}},"Image24":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/03/04/GcJHXQpLgGzEkEFVFYMpWA/密码不可见3x.png"}},"Image25":{"ctx_map":{"fop":"e,948,189","src":"u/dev066/2024/03/04/WAjWRAnjz6r9aSsK7kn7KF/分组111.png"}},"Picker1":{"ctx_map":{"mode":"selector","range":[{"label":"上午","value":"am"},{"label":"下午","value":"pm"}],"value":0}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewIf5":{"ctx_map":{"value":true}},"ViewIf6":{"ctx_map":{"value":true}},"ViewIf7":{"ctx_map":{"value":true}},"ViewIf8":{"ctx_map":{"value":true}},"ViewIf9":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewIf10":{"ctx_map":{"value":true}},"ViewIf11":{"ctx_map":{"value":true}},"ViewIf12":{"ctx_map":{"mode":"default","value":true}},"ViewIf13":{"ctx_map":{"mode":"default","value":true}},"ViewIf14":{"ctx_map":{"mode":"default","value":true}},"ViewIf15":{"ctx_map":{"mode":"default","value":true}},"ViewIf16":{"ctx_map":{"mode":"default","value":true}},"DwappCloud1":{"ctx_map":{"bool1":true,"bool2":false,"text1":"第一步","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev066/2024/03/04/VBFrSd7hZKxMoAy6FPpSQ7/btn_back1.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud2":{"ctx_map":{"bool1":true,"bool2":false,"text1":"第二步","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev066/2024/02/26/VoEe4nov2uehM6XngsYDJ3/btn_back1.png","image2":"u/dev066/2024/03/04/syh8sMsRrRrDxAqQ9BLUBm/btn_back1.png","style1":null,"select1":"portrait"}},"DwappCloud3":{"ctx_map":{"bool1":false,"bool2":false,"text1":"第三步","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev066/2024/03/04/wW2URkRqTx3Ye2fztPmXe9/btn_back1.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud5":{"ctx_map":{"color1":"#58D092","color2":"#F8F8F8","numberb1":98,"numberb2":180,"numberb3":30}},"DwappCloud6":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"DwappCloud7":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"DwappCloud8":{"ctx_map":{"bool1":false,"bool2":false,"text1":"第四步","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev066/2024/03/04/9kSnqs7v5qRxADkiF2NLSY/btn_back1.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"ScrollView1":{"ctx_map":{"type":"custom","bounces":true,"scrollY":true,"showScrollbar":true}},"NativeInput1":{"ctx_map":{"alt":"","type":"text","checked":false,"password":true,"placeholder":"请输入WIFI密码","placeholderTextColor":"#aaa"}},"NativeInput2":{"ctx_map":{"alt":"","type":"text","checked":false,"password":false,"placeholder":"请输入WIFI账号(将自动填充当前连接WIFI)"}},"KeyboardAvoidingView1":{"ctx_map":{"enabled":true,"behavior":"position"}}}};
slide.components.DwappCloud1.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(16),
  fontWeight: "500",
  lineHeight: pm(24),
  flexDirection: "column",
};
slide.components.DwappCloud2.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  flexDirection: "column",
};
slide.components.DwappCloud3.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(16),
  fontWeight: "500",
  lineHeight: pm(24),
  flexDirection: "column",
};
slide.components.DwappCloud6.ctx_map.valueStyle = {
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
slide.components.DwappCloud6.ctx_map.containerStyle = {
  marginBottom: pm(18),
  flexDirection: "column",
};
slide.components.DwappCloud6.ctx_map.valueInputStyle = {
  color: "#333333",
  flexDirection: "column",
};
slide.components.DwappCloud7.ctx_map.valueStyle = {
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
slide.components.DwappCloud7.ctx_map.containerStyle = {
  width: pm(238),
  marginLeft: pm(41),
  marginRight: pm(41),
  marginBottom: pm(18),
  flexDirection: "column",
  backgroundColor: "#ffffff",
};
slide.components.DwappCloud7.ctx_map.valueInputStyle = {
  color: "#333333",
  flexDirection: "column",
};
slide.components.DwappCloud8.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(16),
  fontWeight: "500",
  lineHeight: pm(24),
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-net_step1';

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
      <KeyboardAvoidingViewWrap  style={styles.xdw1l1} enabled={ true } behavior={ ("position") === 'auto' ? (Platform.OS === 'ios' ? 'padding' : 'height') : ("position") }><View /* View52 */   style={styles.xdw1l0}>{!!(state.step === 1) /* ViewIf1 */ && (<><Xbenchc176286 /* DwappCloud1 */ isCuzBtn={ slide.components.DwappCloud1.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud1.ctx_map.bool2 } eventData={ slide.components.DwappCloud1.ctx_map.prop1 } eventData2={ slide.components.DwappCloud1.ctx_map.prop2 } title={ slide.components.DwappCloud1.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud1.ctx_map.text2 } confirmText={ slide.components.DwappCloud1.ctx_map.text3 } cancelText={ slide.components.DwappCloud1.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud1.ctx_map.color1 } confirmColor={ slide.components.DwappCloud1.ctx_map.color2 } cancelColor={ slide.components.DwappCloud1.ctx_map.color3 } backIcon={ slide.components.DwappCloud1.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud1.ctx_map.image2 } titleStyle={ slide.components.DwappCloud1.ctx_map.style1 } screenType={ slide.components.DwappCloud1.ctx_map.select1 } ></Xbenchc176286>
<View /* View3 */   style={styles.xdw1ju}><View /* View8 */   style={styles.xdw1jm}><View /* View9 */   style={styles.xdw1jk}></View>
<View /* View12 */   style={styles.xdw1jl}></View>
<View /* View13 */   style={styles.xdw1jl}></View>
<View /* View19 */   style={styles.xdw1jl}></View></View>
<View /* View14 */   style={styles.xdw1jo}><XbenchcImage /* Image19 */ style={styles.xdw1jn} source={dwtools.qiniu(slide.components.Image19.ctx_map.src, slide.components.Image19.ctx_map.fop)}  /></View>
<View /* View15 */   style={styles.xdw1jr}><XbenchcImage /* Image1 */ style={styles.xdw1jp} source={dwtools.getLocalResource('xdw1jq_lthar1km')}  /></View>
<XbenchcView /* View4 */   viewStyle={styles.xdw1jt} onClick={getEvent('View4:onClick:func1:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image7 */ style={styles.xdw1js} source={dwtools.qiniu(slide.components.Image7.ctx_map.src, slide.components.Image7.ctx_map.fop)}  /></XbenchcView></View></>)}
{!!(state.step === 2) /* ViewIf2 */ && (<><Xbenchc176286 /* DwappCloud2 */ isCuzBtn={ slide.components.DwappCloud2.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud2.ctx_map.bool2 } eventData={ slide.components.DwappCloud2.ctx_map.prop1 } eventData2={ slide.components.DwappCloud2.ctx_map.prop2 } title={ slide.components.DwappCloud2.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud2.ctx_map.text2 } confirmText={ slide.components.DwappCloud2.ctx_map.text3 } cancelText={ slide.components.DwappCloud2.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud2.ctx_map.color1 } confirmColor={ slide.components.DwappCloud2.ctx_map.color2 } cancelColor={ slide.components.DwappCloud2.ctx_map.color3 } backIcon={ slide.components.DwappCloud2.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud2.ctx_map.image2 } titleStyle={ slide.components.DwappCloud2.ctx_map.style1 } screenType={ slide.components.DwappCloud2.ctx_map.select1 } ></Xbenchc176286>
<View /* View20 */   style={styles.xdw1ju}><View /* View25 */   style={styles.xdw1jm}><View /* View29 */   style={styles.xdw1jv}></View>
<View /* View28 */   style={styles.xdw1jv}></View>
<View /* View27 */   style={styles.xdw1jw}></View>
<View /* View26 */   style={styles.xdw1jw}></View></View>
<View /* View24 */   style={styles.xdw1jy}><XbenchcImage /* Image20 */ style={styles.xdw1jx} source={dwtools.qiniu(slide.components.Image20.ctx_map.src, slide.components.Image20.ctx_map.fop)}  /></View>
<View /* View22 */   style={styles.xdw1k1}><XbenchcImage /* Image5 */ style={styles.xdw1jz} source={dwtools.getLocalResource('xdw1k0_lthar1kz')}  /></View>
{!!(state.deviceList.length > 0) /* ViewIf8 */ && (<><View /* View56 */   style={styles.xdw1k7}>{(state.deviceList).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><XbenchcView /* View21 */   viewStyle={styles.xdw1k6} onClick={getEvent('View21:onClick:connect:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><View /* View58 */   style={styles.xdw1k5}><XbenchcImage /* Image8 */ style={styles.xdw1k2} source={dwtools.qiniu(slide.components.Image8.ctx_map.src, slide.components.Image8.ctx_map.fop)}  />
<View /* View59 */   style={styles.xdw1k4}><Text /* Text17 */ style={styles.xdw1k3} >{bagForItem.name}</Text></View></View></XbenchcView></ViewForItem> })}</View></>)}
{!!(state.showRetry) /* ViewIf9 */ && (<><XbenchcView /* View51 */   viewStyle={styles.xdw1jt} onClick={getEvent('View51:onClick:func8:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image9 */ style={styles.xdw1js} source={dwtools.qiniu(slide.components.Image9.ctx_map.src, slide.components.Image9.ctx_map.fop)}  /></XbenchcView></>)}</View></>)}
{!!(state.step === 3) /* ViewIf3 */ && (<><Xbenchc176286 /* DwappCloud3 */ isCuzBtn={ slide.components.DwappCloud3.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud3.ctx_map.bool2 } eventData={ slide.components.DwappCloud3.ctx_map.prop1 } eventData2={ slide.components.DwappCloud3.ctx_map.prop2 } title={ slide.components.DwappCloud3.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud3.ctx_map.text2 } confirmText={ slide.components.DwappCloud3.ctx_map.text3 } cancelText={ slide.components.DwappCloud3.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud3.ctx_map.color1 } confirmColor={ slide.components.DwappCloud3.ctx_map.color2 } cancelColor={ slide.components.DwappCloud3.ctx_map.color3 } backIcon={ slide.components.DwappCloud3.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud3.ctx_map.image2 } titleStyle={ slide.components.DwappCloud3.ctx_map.style1 } screenType={ slide.components.DwappCloud3.ctx_map.select1 } ></Xbenchc176286>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw1km} scrollY={ true } showScrollbar={ true } bounces={ true } ><View /* View30 */   style={styles.xdw1kl}><View /* View35 */   style={styles.xdw1jm}><View /* View39 */   style={styles.xdw1jv}></View>
<View /* View38 */   style={styles.xdw1jv}></View>
<View /* View37 */   style={styles.xdw1jv}></View>
<View /* View36 */   style={styles.xdw1jw}></View></View>
<View /* View34 */   style={styles.xdw1jy}><XbenchcImage /* Image21 */ style={styles.xdw1k8} source={dwtools.qiniu(slide.components.Image21.ctx_map.src, slide.components.Image21.ctx_map.fop)}  /></View>
<View /* View33 */   style={styles.xdw1kb}><XbenchcImage /* Image6 */ style={styles.xdw1k9} source={dwtools.getLocalResource('xdw1ka_lthar1le')}  /></View>
<View /* View32 */   style={styles.xdw1kf}><XbenchcPicker /* Picker1 */ value={ state.ssidBind } mode={ slide.components.Picker1.ctx_map.mode } range={ state.wifi_options }  onChange={getEvent('Picker1:input:func4:', {}, bagForKeyValue, bagForIndex)}><View /* View57 */   style={styles.xdw1ke}><Text /* Text22 */ style={styles.xdw1kc} >{state.ssid || '请选择要连接的网络'}</Text>
<XbenchcImage /* Image10 */ style={styles.xdw1kd} source={dwtools.qiniu(slide.components.Image10.ctx_map.src, slide.components.Image10.ctx_map.fop)}  /></View></XbenchcPicker></View>
<View /* View53 */   style={styles.xdw1ki}><XbenchcInput /* NativeInput1 */ style={styles.xdw1kg} value={state.password} placeholder={slide.components.NativeInput1.ctx_map.placeholder} type={slide.components.NativeInput1.ctx_map.type} password={!state.pwd_hide} placeholderTextColor={"#aaa"}  onChange={getEvent('NativeInput1:onChange:func5:', {eventData: "password"}, bagForKeyValue, bagForIndex)} />
<View /* View67 */   style={styles.xdw1k7}>{!!(state.pwd_hide) /* ViewIf11 */ && (<><XbenchcView /* View54 */   viewStyle={styles.xdw1kh} onClick={getEvent('View54:onClick:func10:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image23 */ style={styles.xdw1kd} source={dwtools.qiniu(slide.components.Image23.ctx_map.src, slide.components.Image23.ctx_map.fop)}  /></XbenchcView></>)}
{!!(!state.pwd_hide) /* ViewIf10 */ && (<><XbenchcView /* View55 */   viewStyle={styles.xdw1kh} onClick={getEvent('View55:onClick:func10:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image24 */ style={styles.xdw1kd} source={dwtools.qiniu(slide.components.Image24.ctx_map.src, slide.components.Image24.ctx_map.fop)}  /></XbenchcView></>)}</View></View>
<View /* View66 */   style={styles.xdw1kk}><XbenchcImage /* Image22 */ style={styles.xdw1kj} source={dwtools.qiniu(slide.components.Image22.ctx_map.src, slide.components.Image22.ctx_map.fop)}  /></View></View></XbenchcScrollView>
<XbenchcView /* View31 */   viewStyle={styles.xdw1kn} onClick={getEvent('View31:onClick:func1:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image11 */ style={styles.xdw1js} source={dwtools.qiniu(slide.components.Image11.ctx_map.src, slide.components.Image11.ctx_map.fop)}  /></XbenchcView></>)}
{!!(state.step === 4) /* ViewIf6 */ && (<><Xbenchc176286 /* DwappCloud8 */ isCuzBtn={ slide.components.DwappCloud8.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud8.ctx_map.bool2 } eventData={ slide.components.DwappCloud8.ctx_map.prop1 } eventData2={ slide.components.DwappCloud8.ctx_map.prop2 } title={ slide.components.DwappCloud8.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud8.ctx_map.text2 } confirmText={ slide.components.DwappCloud8.ctx_map.text3 } cancelText={ slide.components.DwappCloud8.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud8.ctx_map.color1 } confirmColor={ slide.components.DwappCloud8.ctx_map.color2 } cancelColor={ slide.components.DwappCloud8.ctx_map.color3 } backIcon={ slide.components.DwappCloud8.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud8.ctx_map.image2 } titleStyle={ slide.components.DwappCloud8.ctx_map.style1 } screenType={ slide.components.DwappCloud8.ctx_map.select1 } ></Xbenchc176286>
<View /* View40 */   style={styles.xdw1ju}><View /* View46 */   style={styles.xdw1jm}><View /* View50 */   style={styles.xdw1jv}></View>
<View /* View49 */   style={styles.xdw1jv}></View>
<View /* View48 */   style={styles.xdw1jv}></View>
<View /* View47 */   style={styles.xdw1jv}></View></View>
<View /* View60 */   style={styles.xdw1jy}><XbenchcImage /* Image25 */ style={styles.xdw1ko} source={dwtools.qiniu(slide.components.Image25.ctx_map.src, slide.components.Image25.ctx_map.fop)}  /></View>
<View /* View42 */   style={styles.xdw1kv}>{!!(state.progress < 100) /* ViewIf16 */ && (<><Xbenchc173692 /* DwappCloud5 */ color={ slide.components.DwappCloud5.ctx_map.color1 } bgColor={ slide.components.DwappCloud5.ctx_map.color2 } value={ state.progress } radius={ slide.components.DwappCloud5.ctx_map.numberb2 } swidth={ slide.components.DwappCloud5.ctx_map.numberb3 } ></Xbenchc173692>
<View /* View43 */   style={styles.xdw1kt}><View /* View44 */   style={styles.xdw1kr}><Text /* Text28 */ style={styles.xdw1kp} >{state.progress}</Text>
<Text /* Text27 */ style={styles.xdw1kq} >{slide.components.Text27.ctx_map.text}</Text></View>
<Text /* Text26 */ style={styles.xdw1ks} >{state.progress < 100 ? "设备连接中" : "设备连接成功"}</Text></View></>)}
{!!(state.progress == 100) /* ViewIf15 */ && (<><View /* View65 */   style={styles.xdw1k7}><XbenchcImage /* Image17 */ style={styles.xdw1ku} source={dwtools.qiniu(slide.components.Image17.ctx_map.src, slide.components.Image17.ctx_map.fop)}  /></View></>)}</View>
<View /* View62 */   style={styles.xdw1kz}>{!!(state.progress < 100) /* ViewIf12 */ && (<><View /* View61 */   style={styles.xdw1kx}><XbenchcImage /* Image12 */ style={styles.xdw1kw} source={dwtools.qiniu(slide.components.Image12.ctx_map.src, slide.components.Image12.ctx_map.fop)}  /></View></>)}
{!!(state.progress == 100) /* ViewIf13 */ && (<><View /* View63 */   style={styles.xdw1kx}><XbenchcImage /* Image13 */ style={styles.xdw1ky} source={dwtools.qiniu(slide.components.Image13.ctx_map.src, slide.components.Image13.ctx_map.fop)}  /></View></>)}</View>
{!!(state.progress === 100) /* ViewIf7 */ && (<><XbenchcView /* View41 */   viewStyle={styles.xdw1jt} onClick={getEvent('View41:onClick:func9:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image18 */ style={styles.xdw1js} source={dwtools.qiniu(slide.components.Image18.ctx_map.src, slide.components.Image18.ctx_map.fop)}  /></XbenchcView></>)}</View></>)}
<Xbenchc275104 /* DwappCloud6 */ valueStyle={ slide.components.DwappCloud6.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud6.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud6.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud6:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104></View></KeyboardAvoidingViewWrap>
    </ErrorBoundary>
  )
}
