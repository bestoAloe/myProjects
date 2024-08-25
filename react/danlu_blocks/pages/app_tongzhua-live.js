
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import Xbenchc176286 from '../components/Xbenchc176286'
import { VLCPlayer } from 'react-native-vlc-media-player'
import Xbenchc191318 from '../components/Xbenchc191318'
import XbenchcButton from '../../xbench/xbenchc/components/XbenchcButton'
import { Shadow } from 'react-native-shadow-2'
import ViewForItem from '../../xbench/components/ViewForItem'
import XbenchcScrollView from '../../xbench/xbenchc/components/XbenchcScrollView'
import { Image } from 'expo-image'
import Xbenchc200739 from '../components/Xbenchc200739'
import Xbenchc186881 from '../components/Xbenchc186881'
import XbenchcModal from '../../xbench/xbenchc/components/XbenchcModal'
import Xbenchc275104 from '../components/Xbenchc275104'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

let action1403lock = false
let action1403task = null
let action1403storeLock = false
let action1388lock = false
let action1389lock = false
let action1387lock = false
let action1390lock = false
let action1391lock = false
let action1392lock = false
let action1393lock = false
let action1394lock = false
let action1395lock = false
let action1396lock = false
let action1397lock = false
let action1398lock = false
let action1399lock = false
let action1400lock = false
let action1401lock = false
let tick = (null)
const action527 = tick
let refreshTick = (null)
const action1005 = refreshTick
let ws = (null)
const action267 = ws
let recordingTick = (null)
const action517 = recordingTick
let aliveTick = (null)
const action930 = aliveTick
let client = (null)
const action347 = client
let LiveAudioStream = (null)
const action385 = LiveAudioStream
let retryCount = (0)
const action760 = retryCount
let modalInstance = (null)
const action1091 = modalInstance
let maybeStop = (false)
const action1124 = maybeStop
let gecb = (null)
const action1187 = gecb
let callback = (null)
const action1261 = callback
let timerItems = ({/**/  "videoLevel": null/**/})
const action1336 = timerItems
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action7 = state.device = (null)
  const action19 = state.eatProgressStyle = ({/**/    width: "60%"/**/})
  const action23 = state.device_member = (null)
  const action25 = state.audio_list = ([])
  const action28 = state.ready = (false)
  const action30 = state.show_all_audio = (false)
  const action37 = state.platform = ("dwapp")
  const action39 = state.audio_offset = (0)
  const action619 = state.drag_offset = (0)
  const action64 = state.show_dots = (true)
  const action112 = state.muted = (false)
  const action123 = state.food_reports = ([])
  const action170 = state.currentMode = ("unset")
  const action171 = state.modeOption = ([/**/  {id: 'unset', name: '未设置'},/**/  {id: 'timerMode', name: '定时喂食模式'},/**/  {id: 'buffetMode', name: '自助餐喂食模式'},/**/])
  const action178 = state.selectPop = (false)
  const action191 = state.yesterday_food_weight = (0)
  const action309 = state.catFoodShow = (false)
  const action365 = state.voicePop = (false)
  const action366 = state.speekRecording = (false)
  const action397 = state.mqtt_connect = (false)
  const action403 = state.config = (null)
  const action421 = state.videoLevel = (2)
  const action1303 = state.videoPause = (false)
  const action438 = state.videoLevelPop = (false)
  const action455 = state.scale = (1)
  const action452 = state.scalePop = (false)
  const action450 = state.cellWarnPop = (false)
  /* action476: 视频滑动 */
  const action478 = state.translateX = (0)
  const action479 = state.translateY = (0)
  const action480 = state.baseTranslateX = (0)
  const action481 = state.baseTranslateY = (0)
  /* action485: 拍照成功结果 */
  const action484 = state.cameraResPop = (false)
  const action486 = state.screenShot = ("u/dev064/2023/02/20/JoapNbPzT2UveRrisphfUj/猫.png")
  const action495 = state.previewPop = (false)
  const action499 = state.cameraMode = ("photo")
  const action505 = state.recording = (false)
  const action506 = state.recordSeconds = (0)
  const action567 = state.RecordResPop = (false)
  const action594 = state.isDragging = (false)
  const action657 = state.isMoving = (false)
  const action672 = state.startDragItem = (null)
  const action790 = state.videoCount = (0)
  const action982 = state.video = (null)
  const action906 = state.network_timeout = (false)
  const action910 = state.error = ("")
  const action937 = state.cat_food_pop = (false)
  const action947 = state.aggs = (null)
  const action1007 = state.showPlayer = (true)
  const action1008 = state.playStatus = ("wait")
  const action1132 = state.isPlaying = (false)
  const action1299 = state.isHide = (false)
  /* action1329: 投影 */
  const action1330 = state.rnappShadow = ({ offset: [0, 4], distance: 14, startColor: '#00000005' })
  /* action1332: 消息提示 */
  const action1331 = state.messageContent = (null)
  const action1333 = state.messageFlag = (false)
  const action1407 = state.webSocketEmitting = (false)
  const action1413 = state.foodMessageFlag = (true)
  return state
}

const action1262 = actions['onLoad'] = function (store, event) {
  const state = store.state
  const action1305 = store.commit('setState', {["state.platform"]: dw.platform})
  /* action1279: 录制时,禁用手势操作 */
  if (!callback) {
    const action1264 = ((store, event) => {
const navigation = dw._reactNavigation

callback = (e) => {
  if (!state.recording) {
    // If we don't have unsaved changes, then we don't need to do anything
    return;
  }

  // Prevent default behavior of leaving the screen
  e.preventDefault();

  // Prompt the user before leaving the screen
  store.dispatch('func50', {})
}

// 监听离开事件
navigation.addListener('beforeRemove', callback)

// 禁用当前页面的手势，防止通过手势滑动
dw.setScreenOptionsMap({
  'app_tongzhua-live': {
    gestureEnabled: false
  }
})

})(store, event)
  }
}

const action2 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action1371 = await Promise.all([
    (async () => {
      const action1345 = await store.dispatch("func77", {})
      return action1345
    })(),
    (async () => {
      const action1370 = await store.dispatch("func78", {})
      return action1370
    })(),
  ])

  const action29 = store.commit('setState', {["state.ready"]: true})
  const action1108 = await store.dispatch("func1", {})
  const action1310 = await Promise.all([
    (async () => {
      const action1311 = await store.dispatch("func4", {})
      return action1311
    })(),
    (async () => {
      const action1312 = await store.dispatch("func13", {})
      return action1312
    })(),
    (async () => {
      const action1313 = await store.dispatch("func38", {})
      return action1313
    })(),
    (async () => {
      const action1314 = await store.dispatch("func64", {})
      return action1314
    })(),
  ])

  /* action1163: 未推流的设备下发推流指令 */
  const action1009 = await store.dispatch("switchShow", {})
  const action1411 = await Promise.all([
    (async () => {
      const action437 = await store.dispatch("func39", {})
      return action437
    })(),
    (async () => {
      const action1410 = await store.dispatch("func60", {})
      return action1410
    })(),
  ])

  const action794 = await store.dispatch("func59", {})
}

const action270 = actions['onHide'] = async function (store, event) {
  const state = store.state
  const action271 = ((store, event) => {
store.commit('setState', {["state.showPlayer"]: false})
if(tick){
  clearInterval(tick)
}
if(client){
  client.disconnect()
}
if(refreshTick){
  clearInterval(refreshTick)
}
if(recordingTick){
  clearInterval(recordingTick)
}

if(aliveTick){
  clearInterval(aliveTick)
}
})(store, event)
}

const action1025 = actions['onUnload'] = async function (store, event) {
  const state = store.state
  const action1027 = ((store, event) => {
if(tick){
  clearInterval(tick)
}
if(client){
  client.disconnect()
}
if(refreshTick){
  clearInterval(refreshTick)
}
if(recordingTick){
  clearInterval(recordingTick)
}

if(aliveTick){
  clearInterval(aliveTick)
}

if(gecb){
  dw.globalEvent.removeListener('GLOBAL_WS_EVENT', gecb)
}
})(store, event)
  const action1028 = await store.dispatch("func57", {})
}

/* action1341: 初始数据获取 */
const action1344 = actions['func77'] = async function (store, event) {
  const state = store.state
  /* action1307: 获取缓存数据 */
  /* action395: 申请可能需要的录音权限 */
  const action396 = await (async (store, event) => {
if(dw.platform === 'rnapp'){
  const Platform = dw.getNativePackage('Platform')
  if (Platform.OS === 'android') {
    const { status } = await dw.requestAndroidPermission('android.permission.RECORD_AUDIO')
    if (status !== 'granted') return dw.alert('提示', '请授予录音权限')
  }

 //const Vibration = require('react-native')
}
})(store, event)
  const action38 = store.commit('setState', {["state.platform"]: dw.platform})
}

const action1363 = actions['func78'] = function (store, event) {
  const state = store.state
  const action1364 = dw.getGlobalLocals("allDeviceMember")
  const action1365 = ((store, event) => {
return action1364.filter( tmp => tmp.data.device_uuid === dw.query.uuid)
})(store, event)
  let currentItem = (action1365[0])
  const action1366 = currentItem
  const action1368 = store.commit('setState', {["state.device"]: currentItem.data.device_uuid__toone, ["state.device_member"]: currentItem, ["state.currentMode"]: currentItem.data.feed_config.buffetMode.isOpen ? 'buffetMode' : 'timerMode'})
}

const action1046 = actions['func67'] = function (store, event) {
  const state = store.state
  const action1047 = modalInstance = (event.data)
}

const action795 = actions['func60'] = async function (store, event) {
  const state = store.state
  if (!state.webSocketEmitting) {
    const action1226 = console.log('[func60#action1226] 打印ws变量!!交互页面', event)
    
      const action1403 = await (async () => {
        if (action1403lock) return action1403task
        action1403lock = true
        action1403task = dw.app.connectSocket({ reconnecting: true })
        action1403task.onMessage(async (event) => {
          console.log('WebSocket: 接收到消息', event)
      
      if (!!state.device && event.data.result.type === 'deviceStatusUpdate' && event.data.result.device_id === state.device.data.device_id) {
        const action1414 = console.log('[func60#action1414] 交互页deviceStatusUpdate', )
        const action1415 = console.log('[func60#action1415] 交互页device_id', event.data.result.device_id)
        let data = (event.data.result.data)
        const action806 = data
        const action807 = store.commit('setState', {["state.device.data"]: {/**/  ...state.device.data,/**/  motor_status: String(data.motorStatus),/**/  plate_food_weight: data.plateFoodWeight,/**/  remain_food_status: String(data.remainFoodStatus),/**/  food_sensor: String(data.foodSensor),/**/  plate_status: String(data.plateStatus),/**/  privacy_state: data.privacyMode === 1 ? "on" : "off",/**/  _isAlive: true/**/}})
      } else if (!!state.device && event.data.result.type === 'deviceOffLine' && event.data.result.device_id === state.device.data.device_id) {
        const action1416 = console.log('[func60#action1416] 交互页deviceOffLine', )
        const action1417 = console.log('[func60#action1417] 交互页device_id', event.data.result.device_id)
        const action1173 = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace('Z', '')
        const action1171 = store.commit('setState', {["state.device.data._lastAlive"]: action1173})
        /* action1172: COMMIT */
        const action1170 = store.commit('setState', {["state.device.data._isAlive"]: false})
        /* action1228: 请输入注释内容 */
      } else if (!!state.device && event.data.result.type === "deviceEatUpdate" && event.data.result.device_id === state.device.data.device_id) {
        const action1418 = console.log('[func60#action1418] 交互页deviceEatUpdate', )
        const action1419 = console.log('[func60#action1419] 交互页device_id', event.data.result.device_id)
        const action1386 = await store.dispatch("func64", {})
      }
      /* action1229: 监听outFoodReport, 更新页面出粮数 */
      const action1227 = await (async (store, event) => {
try{
  if((event.data.result.payload.clientid ? event.data.result.payload.clientid: null) == state.device.data.device_id && event.data.result.payload.payload.code == '1' &&event.data.result.payload.payload.action=='outFoodReport' ){
      let currentFoodWeight = state.aggs.foodWeight
      currentFoodWeight = currentFoodWeight + Number(event.data.result.payload.payload.weight)
      store.commit('setState', {["state.aggs.foodWeight"]: currentFoodWeight})

      //更新自动出粮数
      await store.dispatch("func13", {})
  }
}catch(err){
  
}
})(store, event)
      /* action1230: 监听statusReport, 更新碗里数量 */
      const action1231 = await (async (store, event) => {
try{
  if((event.data.result.payload.clientid ? event.data.result.payload.clientid: null) == state.device.data.device_id && event.data.result.payload.payload.action=='statusReport' ){
      store.commit('setState', {["state.device.data.plate_food_weight"]: Number(event.data.result.payload.payload.data.plateFoodWeight)})

      //写入缓存
      // const key = "index/global_cache"
      // const AsyncStorage = dw.getNativePackage('AsyncStorage')
      // const value = await AsyncStorage.getItem(key)
      // const globalcache = JSON.parse(value)
      // globalcache.devices.livePageData[dw.query.uuid || "f5892e18-23d7-4903-a044-97094e97c7af"].object.data.plate_food_weight = state.device.data.plate_food_weight
      // const jsonValue = JSON.stringify(globalcache)
      // AsyncStorage.setItem(key, jsonValue)
      // console.log("以写入")

  }
}catch{
  
}
})(store, event)
      /* action1259: 监听keepalive 更新设备在线状态  */
      const action1260 = ((store, event) => {
try{
  if((event.data.result.payload.clientid ? event.data.result.payload.clientid: null) == state.device.data.device_id && event.data.result.payload.payload.action=='keepAlive' ){
      //store.commit('setState', {["state.device.data._isAlive"]: true})
      console.log("交互页isAlive，此时isAlive为true")
  }
}catch{
  
}
})(store, event)
      const action1409 = store.commit('setState', {["state.webSocketEmitting"]: true})
      
      const action1404 = await (async () => {
        const action1404task = action1403
        action1404task.onError(async (event) => {
          console.log('WebSocket: 连接错误', event)
      
        const action1405 = store.commit('setState', {["state.webSocketEmitting"]: false})
        const action1406 = console.log('[func60#action1406] 交互页websocket监听到错误！！！！！！！！', event)
      
        })
        return action1404task
      })()
      
    
        })
        if (!action1403storeLock && !(false)) {
          action1403storeLock = true
          store.$store.subscribeAction({
            enter: (action, state) => {
              if (['onHide', 'onUnload', 'beforeDestroy'].includes(action.type)) {
                console.log('WebSocket：onUnload/onHide 时自动停止监听:', action.type)
                action1403task.close()
                action1403lock = false
              }
            }
          })
        }
        return action1403task
      })()
      
  }
}

const action3 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action4 = await dw.app.run("device.user_get", {"uuid": dw.query.uuid || "f5892e18-23d7-4903-a044-97094e97c7af", "get_alive": true})
  
        if ((action4.status) === ("error")) {
          const action5message = (action4.message || "操作错误！")
          const action5title = ("提示")
          action5message && dw.alert(action5title, action5message)
          return {}
        }
        
  let device_member = (action4.device_member)
  const action698 = device_member
  const action699 = ((store, event) => {
device_member.data.feed_config.timerMode.isOpen = {
    "1": true,
    "2": false,
    true: true,
    false: false,
}[device_member.data.feed_config.timerMode.isOpen]

device_member.data.feed_config.buffetMode.isOpen = {
    "1": true,
    "2": false,
    true: true,
    false: false,
}[device_member.data.feed_config.buffetMode.isOpen]

device_member.data.feed_config.catFoodMode.isOpen = {
    "1": true,
    "2": false,
    true: true,
    false: false,
}[device_member.data.feed_config.catFoodMode.isOpen]
})(store, event)
  const action6 = store.commit('setState', {["state.device"]: action4.object, ["state.device_member"]: device_member, ["state.currentMode"]: action4.device_member.data.feed_config.buffetMode.isOpen ? 'buffetMode' : 'timerMode'})
  const action1374 = dw.getGlobalLocals("device-muted")
  const action1372 = store.commit('setState', {["state.muted"]: !!action1374 ? true : false})
}

const action21 = actions['func4'] = async function (store, event) {
  const state = store.state
  const action22 = await dw.app.run("audio.list", {"limit": 1000, "offset": 0, "filters": {/**/  is_active: true,/**/  data__device_member_uuid: state.device_member.uuid,/**/}, "order_by": ["data__order__float", '-id']})
  let objects = (action22.objects.map(x=>({/**/  ...x,/**/  key: x.id,/**/  name: x.id,/**/})))
  const action34 = objects
  const action26 = store.commit('setState', {["state.audio_list"]: objects})
}

const action1174 = actions['func13'] = async function (store, event) {
  const state = store.state
  const action1175now = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace('Z', '')
  const action1175 = action1175now.split('T')[0] + 'T00:00:00.000'
  let day = (new Date().getDay())
  const action1176 = day
  const action1177 = ((store, event) => {
day = day === 7 ? 0 : day
})(store, event)
  const action1178 = (() => {
          const a = (action1175).split(/[-T:.Z]/).filter(i => !!i).map(i => parseInt(i))
          const n = new Date(
            a[0] + (0),
            a[1] - 1 + (0),
            a[2] + (1),
            a[3] + (0),
            a[4] + (0),
            a[5] + (0),
            (parseFloat('0.' + a[6]) * 1000) + (0)
          )
          return new Date(+n + 8 * 3600 * 1000).toISOString().replace('Z', '')
        })()
  let date_range = ([action1175, action1178])
  const action1179 = date_range
  const action1180 = await dw.app.run("food_report.list", {"limit": 1000, "offset": 0, "filters": {/**/  is_active: true,/**/  data__device_member_uuid: state.device_member.uuid,/**/  data__ts__range: date_range,/**/  data__state: "1",/**/}, "order_by": ["-id"]})
  const action1181 = store.commit('setState', {["state.food_reports"]: action1180.objects})
  const action1325 = console.log('[func13#action1325] 打印(food_reports)的返回值', state.food_reports)
}

const action402 = actions['func38'] = async function (store, event) {
  const state = store.state
  if (!state.config) {
    const action405 = await dw.app.run("config.get", {})
    const action404 = store.commit('setState', {["state.config"]: action405.object})
  }
}

const action943 = actions['func64'] = async function (store, event) {
  const state = store.state
  const action945now = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace('Z', '')
  const action945 = action945now.split('T')[0] + 'T00:00:00.000'
  let today = (action945)
  const action946 = today
  const action944 = await dw.app.run("daily_agg.list", {"aggs": {}, "limit": 2, "offset": 0, "filters": {/**/  data__date_str: today.slice(0, 10),/**/  data__device_uuid: state.device.uuid/**/}, "order_by": []})
  let eatAgg = (action944.objects.find(x=>x.data.type === 'eat'))
  const action950 = eatAgg
  let foodAgg = (action944.objects.find(x=>x.data.type === 'food'))
  const action949 = foodAgg
  const action948 = store.commit('setState', {["state.aggs"]: {/**/  eatCount: eatAgg ? eatAgg.data.count : 0,/**/  eatWeight: eatAgg ? eatAgg.data.weight : 0,/**/  foodCount: foodAgg ? foodAgg.data.count : 0,/**/  foodWeight: foodAgg ? foodAgg.data.weight : 0,/**/}})
}

const action999 = actions['switchShow'] = async function (store, event) {
  const state = store.state
  if (state.device.data.privacy_state === 'on') {
    return false
  }
  const action1280 = await (async (store, event) => {
function tryFetch(url, ms){
  return new Promise(function(resolve, reject){
    setTimeout(
      ()=>{fetch(url,{method: "HEAD"})
        .then(res => {
        if(res.ok){
          resolve(true)
        }else{
          reject(false)
        }
        })}
        ,ms)
  })
}
try{
  let finishPromise = await tryFetch(state.device.data.push_url_1080, 0)
  if(finishPromise == true){
    console.log("[switchShow success]流存在!")
    
    // store.commit('setState', {["state.showPlayer"]: false})
    store.commit('setState', {["state.showPlayer"]: true})
    
    return true
    }
  return false
}catch(err){
  console.log('[switchShow error]', err)
  return false
}


})(store, event)
  if ((action1280) === (true)) {
    return true
  }
  const action1100 = await dw.app.run("mqtt.send_push_cmd", {"type": "1", "stream": ["720p", "1080p", "2560p"][state.videoLevel - 1], "wait_resp": false, "device_member_uuid": state.device_member.uuid})
  const action1129 = store.commit('setState', {["state.showPlayer"]: false})
  /* action1278: 如果推流成功, 则显示播放器 */
  const action1277 = await (async (store, event) => {
function tryFetch(url, ms){
  return new Promise(function(resolve, reject){
    setTimeout(
      ()=>{fetch(url,{method: "HEAD"})
        .then(res => {
        if(res.ok){
          resolve(true)
        }else{
          reject(false)
        }
        })}
        ,ms)
  })
}
//15秒内, 每300ms尝试获取流中的数据, 成功就显示播放器, 否则等待中
for(let i = 0;i<50;i++){
  try{
    let finishPromise = await tryFetch(state.device.data.push_url_1080, 300)
    if(finishPromise == true){
      console.log("推流成功!")
      store.commit('setState', {["state.showPlayer"]: true})
      break
      }
    }catch(err){
      console.log('[switchShow error]', err)
    }
}

})(store, event)
}

const action422 = actions['func39'] = async function (store, event) {
  const state = store.state
  let networkStrength = (0)
  const action429 = networkStrength
  let networkType = ('cellular')
  const action443 = networkType
  /* action691: IOS不做处理 */
  if (dw.platform === 'rnapp') {
    const action686 = ((store, event) => {
const Platform = dw.getNativePackage('Platform')
return Platform.OS
})(store, event)
    if (action686 === 'ios') {
      return event
    }
  }
  if (dw.platform === 'rnapp') {
    const action424 = await (async (store, event) => {
const NetInfo = dw.getNativePackage('NetInfo')

const networkState = await NetInfo.fetch()
console.log('networkState', networkState)
networkType = networkState.type
if(networkState.details && networkState.details.strength){
  networkStrength = networkState.details.strength
}
else{
  networkStrength = {
    'none': 0,
    'unknown': 50,
    'cellular': 50,
    'bluetooth': 50,
    'ethernet': 50,
    'wimax': 50,
    'vpn': 50,
    'other': 50,
  }[networkState.type]
}
})(store, event)
  }
  if (networkStrength <= 33) {
    const action428 = store.commit('setState', {["state.videoLevel"]: 1})
  } else if (networkStrength > 33) {
    const action434 = store.commit('setState', {["state.videoLevel"]: 2})
  }
  if (networkType === 'cellular') {
    const action448 = await store.dispatch("func42", {})
  }
}

const action791 = actions['func59'] = async function (store, event) {
  const state = store.state
  const action792 = await dw.app.run("video.get_today_video_count", {"device_member_uuid": state.device_member.uuid})
  const action793 = store.commit('setState', {["state.videoCount"]: action792.meta.total_count, ["state.video"]: action792.objects.length ? action792.objects[0] : null})
}

/* action1342: 计算属性 */
const action31 = actions['func5'] = function (store, event) {
  const state = store.state
  const action32 = store.commit('setState', {["state.show_all_audio"]: !state.show_all_audio})
}

const action954 = actions['func65'] = function (store, event) {
  const state = store.state
  if (state.device.data._isAlive) {
    return {status: 'success'}
  } else if (!state.device.data._isAlive) {
    return {status: 'error', message: "设备离线"}
  }
}

const action53 = actions['func6'] = async function (store, event) {
  const state = store.state
  let page_count = (Math.ceil(state.audio_list.slice(3).length / 5))
  const action58 = page_count
  let current = (event.data.detail.current)
  const action59 = current
  if (current >= page_count) {
    const action63 = current = (0)
  }
  const action55 = store.commit('setState', {["state.audio_offset"]: current * 5, ["state.show_dots"]: false})
  await new Promise((resolve, reject) => setTimeout(resolve, 0))
  const action67 = store.commit('setState', {["state.show_dots"]: true})
}

const action9 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action1388 = await (async () => {
  
      if (action1388lock) return true
      action1388lock = true
      try {
    const action10 = dw.app.goToPappUrl("live_fullscreen", {"uuid": state.device.uuid}, {redirectTo: false})
  
      } catch (e) {
        throw e
      } finally {
        action1388lock = false
      }
      
  })()
}

/* action89: 设备指令 */
const action20 = actions['func3'] = async function (store, event) {
  const state = store.state
  const action1389 = await (async () => {
  
      if (action1389lock) return true
      action1389lock = true
      try {
    if (state.device.data.device_type === 'virtual') {
      let message = ("虚拟体验暂不支持该功能")
      const action1041 = message
      const action1042 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
      return event
    }
    const action963 = await store.dispatch("func65", {})
    /* action965: 静默返回 */
    
        if ((action963.status) === ("error")) {
          const action964message = ("")
          const action964title = ("提示")
          action964message && dw.alert(action964title, action964message)
          return {}
        }
        
    let fileName = (event.context.eventData)
    const action81 = fileName
    const action84 = await dw.showLoading({
    title: "",
    mask: false
  })
    const action79 = await dw.app.run("mqtt.send_media_play", {"audioName": fileName, "device_member_uuid": state.device_member.uuid})
    const action85 = await dw.hideLoading()
    if (action79.status === "error") {
      const action914 = store.commit('setState', {["state.network_timeout"]: true, ["state.error"]: action79.message || "操作错误！"})
      return event
    }
    let message = ("指令下发成功")
    const action1044 = message
    const action1045 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  
      } catch (e) {
        throw e
      } finally {
        action1389lock = false
      }
      
  })()
}

const action88 = actions['func7'] = async function (store, event) {
  const state = store.state
  const action1387 = await (async () => {
  
      if (action1387lock) return true
      action1387lock = true
      try {
    if (state.device.data.device_type === 'virtual') {
      let message = ("虚拟体验暂不支持该功能")
      const action1050 = message
      const action1051 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
      return event
    }
    const action967 = await store.dispatch("func65", {})
    /* action968: 静默返回 */
    
        if ((action967.status) === ("error")) {
          const action969message = ("")
          const action969title = ("提示")
          action969message && dw.alert(action969title, action969message)
          return {}
        }
        
    const action91 = await dw.showLoading({
    title: "",
    mask: false
  })
    const action92 = await dw.app.run("mqtt.send_app_feed", {"weight": 20, "device_member_uuid": state.device_member.uuid})
    const action93 = await dw.hideLoading()
    if (action92.status === "error") {
      const action927 = store.commit('setState', {["state.network_timeout"]: true, ["state.error"]: action92.message || "操作错误！"})
      return event
    }
    let message = ("出粮成功")
    const action1053 = message
    const action1054 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  
      } catch (e) {
        throw e
      } finally {
        action1387lock = false
      }
      
  })()
}

const action102 = actions['func11'] = async function (store, event) {
  const state = store.state
  const action1390 = await (async () => {
  
      if (action1390lock) return true
      action1390lock = true
      try {
    if (!state.device.data._isAlive) {
      let message = (`设备已离线`)
      const action1197 = message
      const action1198 = ((store, event) => {
if(modalInstance){
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
      return event
    }
    if (state.device.data.device_type === 'virtual') {
      let message = ("虚拟体验暂不支持该功能")
      const action1056 = message
      const action1057 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
      return event
    }
    const action104 = await dw.showLoading({
    title: "",
    mask: false
  })
    let status = (state.device.data.privacy_state === 'on' ? 'off' : 'on')
    const action109 = status
    if (status === 'off') {
      const action1271 = store.commit('setState', {["state.isPlaying"]: false})
    }
    const action105 = await dw.app.run("mqtt.set_operate_device_camera", {"switchStatus": status, "device_member_uuid": state.device_member.uuid})
    const action106 = await dw.hideLoading()
    
        if ((action105.status) === ("error")) {
          const action107message = (action105.message || "操作错误！")
          const action107title = ("提示")
          action107message && dw.alert(action107title, action107message)
          return {}
        }
        
    let message = (`隐私模式已${status === 'off' ? '关闭' : '开启'}`)
    const action1059 = message
    const action1060 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    const action111 = store.commit('setState', {["state.device.data.privacy_state"]: status})
    if (status === 'off') {
      const action1192 = await store.dispatch("func74", {})
    }
  
      } catch (e) {
        throw e
      } finally {
        action1390lock = false
      }
      
  })()
}

const action113 = actions['func12'] = async function (store, event) {
  const state = store.state
  const action1391 = await (async () => {
  
      if (action1391lock) return true
      action1391lock = true
      try {
    if (!state.device.data._isAlive) {
      let message = (`设备已离线`)
      const action1212 = message
      const action1213 = ((store, event) => {
if(modalInstance){
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
      return event
    }
    const action114 = store.commit('setState', {["state.muted"]: !state.muted})
    const action1375 = dw.setGlobalLocals("device-muted", state.muted)
  
      } catch (e) {
        throw e
      } finally {
        action1391lock = false
      }
      
  })()
}

/* action115: 跳转 */
const action96 = actions['func8'] = async function (store, event) {
  const state = store.state
  const action1392 = await (async () => {
  
      if (action1392lock) return true
      action1392lock = true
      try {
    if (state.device_member.data.auth !== '1') {
      let message = ("暂无权限")
      const action1062 = message
      const action1063 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
      return event
    }
    const action97 = dw.app.goToPappUrl("feed_data", {"uuid": state.device.uuid}, {redirectTo: false})
  
      } catch (e) {
        throw e
      } finally {
        action1392lock = false
      }
      
  })()
}

const action98 = actions['func9'] = async function (store, event) {
  const state = store.state
  const action1393 = await (async () => {
  
      if (action1393lock) return true
      action1393lock = true
      try {
    const action99 = dw.app.goToPappUrl("catfood_mission", {"uuid": state.device.uuid}, {redirectTo: false})
  
      } catch (e) {
        throw e
      } finally {
        action1393lock = false
      }
      
  })()
}

const action100 = actions['func10'] = async function (store, event) {
  const state = store.state
  const action1394 = await (async () => {
  
      if (action1394lock) return true
      action1394lock = true
      try {
    const action101 = dw.app.goToPappUrl("device_video_list", {"uuid": state.device.uuid}, {redirectTo: false})
  
      } catch (e) {
        throw e
      } finally {
        action1394lock = false
      }
      
  })()
}

const action1376 = actions['func79'] = async function (store, event) {
  const state = store.state
  const action1395 = await (async () => {
  
      if (action1395lock) return true
      action1395lock = true
      try {
    const action1377 = dw.app.goToPappUrl("device_setting", {}, {redirectTo: false})
  
      } catch (e) {
        throw e
      } finally {
        action1395lock = false
      }
      
  })()
}

/* action116: 加载今日出粮记录 */
const action176 = actions['func14'] = async function (store, event) {
  const state = store.state
  const action1396 = await (async () => {
  
      if (action1396lock) return true
      action1396lock = true
      try {
    if (!state.device.data._isAlive) {
      let message = (`设备已离线`)
      const action1202 = message
      const action1203 = ((store, event) => {
if(modalInstance){
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
      return event
    }
    const action335 = dw.app.goToPappUrl("mode_select", {"uuid": state.device.uuid}, {redirectTo: false})
  
      } catch (e) {
        throw e
      } finally {
        action1396lock = false
      }
      
  })()
}

const action179 = actions['func15'] = function (store, event) {
  const state = store.state
  const action180 = store.commit('setState', {["state.selectPop"]: false})
}

const action181 = actions['func16'] = async function (store, event) {
  const state = store.state
  const action1397 = await (async () => {
  
      if (action1397lock) return true
      action1397lock = true
      try {
    const action182 = store.commit('setState', {["state.currentMode"]: event.context.eventData})
  
      } catch (e) {
        throw e
      } finally {
        action1397lock = false
      }
      
  })()
}

const action193 = actions['func18'] = async function (store, event) {
  const state = store.state
  if (state.device.data.device_type === 'virtual') {
    let message = ("虚拟体验暂不支持该功能")
    const action1065 = message
    const action1066 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    return event
  }
  const action195 = store.commit('setState', {["state.device_member.data.mode"]: state.currentMode})
  if (state.currentMode === 'timerMode') {
    const action197 = store.commit('setState', {["state.device_member.data.feed_config.timerMode.isOpen"]: true, ["state.device_member.data.feed_config.buffetMode.isOpen"]: false})
  } else if (state.currentMode === 'buffetMode') {
    const action203 = store.commit('setState', {["state.device_member.data.feed_config.timerMode.isOpen"]: false, ["state.device_member.data.feed_config.buffetMode.isOpen"]: true})
  }
  /* action196: COMMIT */
  const action208 = await dw.showLoading({
    title: "",
    mask: false
  })
  const action206 = await dw.app.run("mqtt.send_feed_config", {"data": state.device_member.data.feed_config, "device_member_uuid": state.device_member.uuid})
  const action209 = await dw.hideLoading()
  
        if ((action206.status) === ("error")) {
          const action210message = (action206.message || "操作错误！")
          const action210title = ("提示")
          action210message && dw.alert(action210title, action210message)
          return {}
        }
        
  let message = ("编辑成功")
  const action1068 = message
  const action1069 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  const action212 = store.commit('setState', {["state.selectPop"]: false})
}

const action276 = actions['func22'] = async function (store, event) {
  const state = store.state
  if (state.device.data.device_type === 'virtual') {
    let message = ("虚拟体验暂不支持该功能")
    const action1071 = message
    const action1072 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    return event
  }
  let mode = (event.context.eventData)
  const action285 = mode
  const action289 = store.commit('setState', {[`state.device_member.data.feed_config.${mode}.isOpen`]: !state.device_member.data.feed_config[mode].isOpen})
  /* action278: COMMIT */
  const action280 = await dw.showLoading({
    title: "",
    mask: false
  })
  const action281 = await dw.app.run("mqtt.send_feed_config", {"data": state.device_member.data.feed_config, "device_member_uuid": state.device_member.uuid})
  const action282 = await dw.hideLoading()
  
        if ((action281.status) === ("error")) {
          const action283message = (action281.message || "操作错误！")
          const action283title = ("提示")
          action283message && dw.alert(action283title, action283message)
          return {}
        }
        
  let message = ("编辑成功")
  const action1074 = message
  const action1075 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
}

const action298 = actions['func23'] = async function (store, event) {
  const state = store.state
  let e = (event.data)
  const action307 = e
  let slug = (event.context.eventData)
  const action300 = slug
  
        if (!!(["buffet_auto_set", 'timer_index', 'buffet_index'].includes(slug) && state.device_member.data.auth === '3') === (true)) {
          const action330message = ("暂无权限")
          const action330title = ("提示")
          action330message && dw.alert(action330title, action330message)
          return {}
        }
        
  const action308 = await store.dispatch("func15", {})
  const action301 = dw.app.goToPappUrl(slug, {"uuid": state.device.uuid}, {redirectTo: false})
}

const action938 = actions['func63'] = async function (store, event) {
  const state = store.state
  const action1398 = await (async () => {
  
      if (action1398lock) return true
      action1398lock = true
      try {
    const action1016 = await store.dispatch("func24", {})
    const action940 = await dw.app.run("device.switch_catfood_mode", {"mode": state.device.data.feed_type === 'cat_food' ? 2 : 1, "device_uuid": state.device.uuid})
    
        if ((action940.status) === ("error")) {
          const action941message = (action940.message || "操作错误！")
          const action941title = ("提示")
          action941message && dw.alert(action941title, action941message)
          return {}
        }
        
    let message = ("操作成功")
    const action1089 = message
    const action1090 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    const action1015 = store.commit('setState', {["state.device.data.feed_type"]: state.device.data.feed_type === 'cat_food' ? state.device.data.auto_feed_type : 'cat_food'})
  
      } catch (e) {
        throw e
      } finally {
        action1398lock = false
      }
      
  })()
}

const action313 = actions['func24'] = function (store, event) {
  const state = store.state
  if (!state.device.data._isAlive) {
    let message = (`设备已离线`)
    const action1360 = message
    const action1361 = ((store, event) => {
if(modalInstance){
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    return event
  }
  const action936 = store.commit('setState', {["state.cat_food_pop"]: !state.cat_food_pop})
}

/* action501: 拍照录像相关 */
const action315 = actions['func25'] = async function (store, event) {
  const state = store.state
  const action1399 = await (async () => {
  
      if (action1399lock) return true
      action1399lock = true
      try {
    /* action1233: 如果没有进行播放,返回并提示设备连接中 */
    if (state.device.data.device_type === 'virtual') {
      const action745 = await dw.showToast({"icon": "success", "mask": false, "image": "", "title": "虚拟体验暂不支持该功能", "duration": 1500, "content": "虚拟体验暂不支持该功能"})
      let message = ("虚拟体验暂不支持该功能")
      const action1077 = message
      const action1078 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
      return event
    }
    const action971 = await store.dispatch("func65", {})
    /* action972: 静默返回 */
    
        if ((action971.status) === ("error")) {
          const action973message = ("")
          const action973title = ("提示")
          action973message && dw.alert(action973title, action973message)
          return {}
        }
        
    const action415 = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace('Z', '')
    let now = (action415)
    const action416 = now
    const action326 = await dw.showLoading({
    title: "拍照中",
    mask: false
  })
    const action1355 = ((store, event) => {
const { Vibration } = require('react-native')
Vibration.vibrate(100);
})(store, event)
    const action316 = await dw.app.run("mqtt.send_keyframe_to_cos", {"event_id": Math.random().toString(36).slice(2), "wait_res": true, "start_time": now, "device_member": state.device_member})
    const action327 = await dw.hideLoading()
    if (action316.status === "error") {
      const action920 = store.commit('setState', {["state.network_timeout"]: true, ["state.error"]: action316.message || "操作错误！"})
      return event
    }
    /* action318: 图片地址 */
    let filePath = (action316.url)
    const action319 = filePath
    const action487 = store.commit('setState', {["state.screenShot"]: filePath})
    const action488 = await store.dispatch("func46", {})
    const action1258 = await store.dispatch("func48", {})
  
      } catch (e) {
        throw e
      } finally {
        action1399lock = false
      }
      
  })()
}

const action482 = actions['func46'] = function (store, event) {
  const state = store.state
  let currentValue = (state.cameraResPop)
  const action492 = currentValue
  const action483 = store.commit('setState', {["state.cameraResPop"]: !state.cameraResPop})
  if (currentValue === false) {
    const action494 = ((store, event) => {
setTimeout(()=>{
  store.dispatch("func46", {})
}, 5000)
})(store, event)
  }
}

const action496 = actions['func47'] = function (store, event) {
  const state = store.state
  const action497 = store.commit('setState', {["state.previewPop"]: !state.previewPop})
}

const action498 = actions['func48'] = async function (store, event) {
  const state = store.state
  /* action321: 下载并添加到相册 */
  if (dw.platform === 'rnapp') {
    const action322 = await (async (store, event) => {
const FileSystem = dw.getNativePackage('FileSystem');
const MediaLibrary = dw.getNativePackage('MediaLibrary');
const Platform = dw.getNativePackage('Platform');

const checkAndRequestPermissions = async () => {
  if (Platform.OS === 'android') {
    const apiLevel = Platform.Version;

    if (apiLevel < 29) {
      // Android 10 之前
      const { status: readExternalStatus } = await dw.requestAndroidPermission('android.permission.READ_EXTERNAL_STORAGE');
      if (readExternalStatus !== 'granted') {
        return dw.alert('提示', '请授予文件读取权限');
      }
    } else if (apiLevel >= 29 && apiLevel < 33) {
      // Android 10 到 Android 12
      // 如果需要读取其他 app 写入的文件，则需要申请 READ_EXTERNAL_STORAGE
      // 这里需要根据你的应用需求决定是否申请此权限
    } else if (apiLevel >= 33) {
      // Android 13 及以上
      // 根据需要申请对应的媒体读取权限
      // 示例：申请读取图片权限
      // const { status: readMediaImagesStatus } = await dw.requestAndroidPermission('android.permission.READ_MEDIA_IMAGES');
      // if (readMediaImagesStatus !== 'granted') {
      //   return dw.alert('提示', '请授予读取图片权限');
      }
    }
  };

// 使用前请先调用 checkAndRequestPermissions 函数
await checkAndRequestPermissions();

const callback = async downloadProgress => {
  const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
  console.log("progress", progress)
};
const filePath = state.screenShot
const path = `${FileSystem.documentDirectory}${Math.random().toString(36).slice(2)}_${filePath.split("/")[filePath.split("/").length - 1]}`
console.log("path", path)
const downloadResumable = FileSystem.createDownloadResumable(
  filePath,
  path,
  {},
  callback
);

try {
  const { uri } = await downloadResumable.downloadAsync();
  console.log('Finished downloading to ', uri);
  const action25 = await dw.showToast({
    title: '图片保存至本地',
    icon: 'none',
    image: '',
    duration: 1500,
    mask: false,
    content: `图片保存至本地`
  })
  const asset = await MediaLibrary.createAssetAsync(uri);
  console.log("asset", asset)
} catch (e) {
  console.error(e);
}
})(store, event)
  }
}

const action500 = actions['func49'] = function (store, event) {
  const state = store.state
  const action502 = store.commit('setState', {["state.cameraMode"]: state.cameraMode === 'photo' ? 'video' : 'photo'})
}

const action503 = actions['func50'] = async function (store, event) {
  const state = store.state
  const action1400 = await (async () => {
  
      if (action1400lock) return true
      action1400lock = true
      try {
    /* action1235: 如果没有进行播放,返回并提示设备连接中 */
    const action975 = await store.dispatch("func65", {})
    /* action976: 静默返回 */
    
        if ((action975.status) === ("error")) {
          const action977message = ("")
          const action977title = ("提示")
          action977message && dw.alert(action977title, action977message)
          return {}
        }
        
    if (state.recording) {
      /* action510: 停止录像 */
      const action547 = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace('Z', '')
      let end = (action547)
      const action548 = end
      const action549 = (() => {
          const a = (end).split(/[-T:.Z]/).filter(i => !!i).map(i => parseInt(i))
          const n = new Date(
            a[0] + (0),
            a[1] - 1 + (0),
            a[2] + (0),
            a[3] + (0),
            a[4] + (0),
            a[5] + (-state.recordSeconds),
            (parseFloat('0.' + a[6]) * 1000) + (0)
          )
          return new Date(+n + 8 * 3600 * 1000).toISOString().replace('Z', '')
        })()
      let start = (action549)
      const action550 = start
      const action518 = ((store, event) => {
if(recordingTick){
  clearInterval(recordingTick)
}
})(store, event)
      const action1356 = ((store, event) => {
const { Vibration } = require('react-native')
Vibration.vibrate(100);
})(store, event)
      const action514 = store.commit('setState', {["state.recordSeconds"]: 0})
      const action541 = await dw.app.run("tc_cloud_biz.stop_record_task", {"start": start, "stream": state.device.data.current_stream, "device_id": state.device.data.device_id})
      
        if ((action541.status) === ("error")) {
          const action542message = (action541.message || "操作错误！")
          const action542title = ("提示")
          action542message && dw.alert(action542title, action542message)
          return {}
        }
        
      let message = ("录制结束，稍后可在设备消息中查看录制结果")
      const action1080 = message
      const action1081 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    } else if (!state.recording) {
      /* action512: 开始录像 */
      const action1357 = ((store, event) => {
const { Vibration } = require('react-native')
Vibration.vibrate(100);
})(store, event)
      const action516 = ((store, event) => {
recordingTick = setInterval(()=>{
    if(state.recordSeconds > 2700){
      store.dispatch("func50", {})
      return
    }
    store.commit('setState', { ['state.recordSeconds']: state.recordSeconds + 1 })
}, 1000)
})(store, event)
      const action555 = await dw.app.run("tc_cloud_biz.create_record_task", {"stream": state.device.data.current_stream, "device_id": state.device.data.device_id})
      
        if ((action555.status) === ("error")) {
          const action556message = (action555.message || "操作错误！")
          const action556title = ("提示")
          action556message && dw.alert(action556title, action556message)
          return {}
        }
        
    }
    const action513 = store.commit('setState', {["state.recording"]: !state.recording})
  
      } catch (e) {
        throw e
      } finally {
        action1400lock = false
      }
      
  })()
}

const action561 = actions['func51'] = function (store, event) {
  const state = store.state
  let currentValue = (state.RecordResPop)
  const action562 = currentValue
  const action563 = store.commit('setState', {["state.RecordResPop"]: !state.RecordResPop})
  if (currentValue === false) {
    const action566 = ((store, event) => {
setTimeout(()=>{
  store.dispatch("func51", {})
}, 5000)
})(store, event)
  }
}

const action907 = actions['func61'] = function (store, event) {
  const state = store.state
  const action908 = store.commit('setState', {["state.network_timeout"]: false, ["state.error"]: ""})
}

/* action379: 录音相关 */
const action364 = actions['func33'] = function (store, event) {
  const state = store.state
  const action367 = store.commit('setState', {["state.voicePop"]: true})
}

const action368 = actions['func34'] = function (store, event) {
  const state = store.state
  const action369 = store.commit('setState', {["state.voicePop"]: false})
}

const action371 = actions['func35'] = async function (store, event) {
  const state = store.state
  const action979 = await store.dispatch("func65", {})
  /* action980: 静默返回 */
  
        if ((action979.status) === ("error")) {
          const action981message = ("")
          const action981title = ("提示")
          action981message && dw.alert(action981title, action981message)
          return {}
        }
        
  if (!client) {
    const action375 = await store.dispatch("func27", {})
  }
  if (!LiveAudioStream) {
    const action391 = await store.dispatch("func37", {})
  }
  /* action387: 开始录音 */
  const action386 = ((store, event) => {
if(LiveAudioStream){
  console.log('开始录音！！！！！！！！！！！！！！')
  const { Vibration } = require('react-native')
  Vibration.vibrate(100);
  LiveAudioStream.start()
}
})(store, event)
  const action372 = store.commit('setState', {["state.speekRecording"]: true})
}

const action373 = actions['func36'] = function (store, event) {
  const state = store.state
  const action374 = store.commit('setState', {["state.speekRecording"]: false})
  const action392 = ((store, event) => {
if(LiveAudioStream){
  const { Vibration } = require('react-native')
  Vibration.vibrate(100);
  LiveAudioStream.stop() 
}
})(store, event)
}

const action380 = actions['func37'] = async function (store, event) {
  const state = store.state
  const action409 = await store.dispatch("func38", {})
  const action383 = store.commit('setState', {["state.speekRecording"]: true})
  const action384 = await (async (store, event) => {
if (dw.platform === 'rnapp') {
  LiveAudioStream = dw.getNativePackage("LiveAudioStream")
  const config = state.config
  const options = {
    sampleRate: config.data.sample_rate,  // default is 44100 but 32000 is adequate for accurate voice recognition
    channels: config.data.channels,        // 1 or 2, default 1
    bitsPerSample: config.data.bits_per_sample,  // 8 or 16, default 16
    audioSource: config.data.audio_source,     // android only (see below)
    bufferSize: config.data.buffer_size    // default is 2048
  };

  LiveAudioStream.init(options);
  LiveAudioStream.on('data', async data => {
    console.log('data.length!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', data.length)
    await store.dispatch('func32', {data})
  });
}
})(store, event)
}

/* action348: MQTT相关 */
const action345 = actions['func27'] = async function (store, event) {
  const state = store.state
  const action410 = await store.dispatch("func38", {})
  const action346 = await (async (store, event) => {
function extractHostFromUrl(url) {
  const match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n]+)/im);
  if (match && match[1]) {
    return match[1];
  }
  return null;
}

const init = dw.getNativePackage('MQTTInit')
const AsyncStorage = dw.getNativePackage('AsyncStorage')

init({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync : {}
});

const mqtt_url = state.config.data.mqtt_base_url
const host = extractHostFromUrl(mqtt_url)

const options = {
  host: host,
  port: 8083,
  path: `/${state.device.data.device_id}`,
  id: 'id_' + Math.random().toString(36).slice(2)
}

console.log('mqtt_options', options)

// 创建客户端实例
client = new Paho.MQTT.Client(options.host, options.port, options.path)

// 处理事件



client.onConnectionLost = async ()=>{
  await store.dispatch('func30', {})
}

client.onMessageArrived = async (message)=>{
  await store.dispatch('func31', {message})
}

const onConnect = async () => {
  // 连接成功
  await store.dispatch('func28', {})
}

const onFailure = async () => {
  // 连接失败
  await store.dispatch('func29', {})
}


// 正式开启连接
client.connect({
  onSuccess: onConnect,
  useSSL: false,
  timeout: 3,
  onFailure: onFailure
});
})(store, event)
}

const action349 = actions['func28'] = async function (store, event) {
  const state = store.state
  /* action393: 主题订阅 */
  const action394 = ((store, event) => {
// 主题订阅
client.subscribe('/tongzhua/group01', { qos: 0 })
})(store, event)
  const action398 = store.commit('setState', {["state.mqtt_connect"]: true})
}

const action350 = actions['func29'] = async function (store, event) {
  const state = store.state
  let message = ("连接失败")
  const action1083 = message
  const action1084 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
}

const action351 = actions['func30'] = async function (store, event) {
  const state = store.state
  const action413 = store.commit('setState', {["state.mqtt_connect"]: false})
  const action414 = client = (null)
}

const action352 = actions['func31'] = async function (store, event) {
  const state = store.state
  let message = ("收到消息")
  const action1086 = message
  const action1087 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
}

const action361 = actions['func32'] = function (store, event) {
  const state = store.state
  if (state.mqtt_connect) {
    const action363 = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace('Z', '')
    const action362 = ((store, event) => {
const action = 'sendVoiceStream'
var message = new Paho.MQTT.Message(JSON.stringify({
  "action": action,
  "seq": 'clientseq_' + Math.random().toString(36).slice(2),
  "qos": 1,
  //当前token
  "token": state.device_member.data.token,
  //当前帧音频流内容base64字符串
  "stream": event.data,
  //当前时间搓如：20220211203224
  "currentTime": action363.slice(0, 19).replace(/-|:|T/g, "")
}))
message.destinationName = `tongzhua/group01/${state.device.data.device_id}/${action}`
client.send(message)
})(store, event)
  }
}

/* action1339: 视频动作 */
const action439 = actions['func40'] = function (store, event) {
  const state = store.state
  if (!state.device.data._isAlive) {
    let message = (`设备已离线`)
    const action1207 = message
    const action1208 = ((store, event) => {
if(modalInstance){
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    return event
  }
  const action440 = store.commit('setState', {["state.videoLevelPop"]: !state.videoLevelPop})
}

const action441 = actions['func41'] = async function (store, event) {
  const state = store.state
  const action1401 = await (async () => {
  
      if (action1401lock) return true
      action1401lock = true
      try {
    const action442 = store.commit('setState', {["state.videoLevel"]: event.context.eventData, ["state.videoLevelPop"]: false, ["state.messageContent"]: "切换中，请稍后", ["state.messageFlag"]: true})
    const action768 = await dw.app.run("mqtt.send_push_cmd", {"type": "1", "stream": ["720p", "1080p", "2560p"][event.context.eventData - 1], "wait_resp": true, "device_member_uuid": state.device_member.uuid})
    if (action768.status === "error") {
      const action1337 = store.commit('setState', {["state.messageContent"]: action768.message + ", 清晰度切换失败"})
    }
    const action1302 = await (async (store, event) => {
function tryFetch(url, ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(
      () => {
        fetch(url, { method: "HEAD" })
        .then(res => {
          if (res.ok) {
            resolve(true)
          } else {
            reject(false)
          }
        })
      }
      , ms)
  })
}

let isFinish = false
//15秒内, 每300ms尝试获取流中的数据, 成功就显示播放器, 否则等待中
let finishPromise = await tryFetch(state.device.data.push_url_1080, 5000)
//store.commit('setState', { ["state.showPlayer"]: false })
//store.commit('setState', { ["state.showPlayer"]: true })
for (let i = 0; i < 50; i++) {
  try {
    let finishPromise = await tryFetch(state.device.data.push_url_1080, 300)
    if (finishPromise == true) {
      console.log("推流成功!")
      store.commit('setState', { ["state.messageContent"]: "切换成功" })
      isFinish = true
      if (state.isPlaying) {
        break
      }
      //store.commit('setState', { ["state.showPlayer"]: false })
      //store.commit('setState', { ["state.showPlayer"]: true })
    }
  } catch (err) {
    console.log('[switchShow error]', err)
  }
}


//2s后提示通知消失
if(!!isFinish){
  let timer = setInterval( ()=> {
    store.commit('setState', { ["state.messageFlag"]: false })
    clearInterval(timer)
  }, 2000)
}
})(store, event)
  
      } catch (e) {
        throw e
      } finally {
        action1401lock = false
      }
      
  })()
}

const action456 = actions['func44'] = function (store, event) {
  const state = store.state
  const action457 = store.commit('setState', {["state.scale"]: event.context.eventData, ["state.translateX"]: 0, ["state.translateY"]: 0})
}

const action453 = actions['func43'] = function (store, event) {
  const state = store.state
  if (!state.device.data._isAlive) {
    let message = (`设备已离线`)
    const action1217 = message
    const action1218 = ((store, event) => {
if(modalInstance){
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    return event
  }
  const action454 = store.commit('setState', {["state.scalePop"]: !state.scalePop})
}

const action458 = actions['func45'] = function (store, event) {
  const state = store.state
  let _event = (event.data)
  const action459 = _event
  if (state.scale === 1) {
    return event
  }
  /* action460: 只处理单指操作 */
  if (_event.numberOfPointers === 1) {
    let translationX = (_event.translationX)
    const action463 = translationX
    let translationY = (_event.translationY)
    const action465 = translationY
    if (translationX === 0 && translationY === 0) {
      /* action469: 开始滑动 */
      const action470 = store.commit('setState', {["state.baseTranslateX"]: state.translateX, ["state.baseTranslateY"]: state.translateY})
    } else {
      /* action473: 后续滑动过程 */
      /* action809: 当用户向左滑动时，判断视频组件最右端是否会位于屏幕的最右端左侧，如果是则阻止滑动 */
      /* action810: 以此类推处理向右，上，下的滑动操作。 */
      /* action833: 区域宽度 = pm(320) */
      /* action832: 区域高度 = pm(240) */
      /* action831: 画面宽度 = state.scale * pm(320) */
      /* action830: 画面高度 = state.scale * pm(240) */
      /* action829: 视频中心点相对位置 = (state.scale * state.translateX + pm(320) / 2) , (state.scale * state.translateY + pm(240) / 2) */
      /* action828: 视频右边相对x坐标 = state.scale * state.translateX + pm(320) / 2 + state.scale * pm(320) / 2 */
      /* action827: 视频左边相对x坐标 = state.scale * state.translateX + pm(320) / 2 - state.scale * pm(320) / 2 */
      /* action826: 视频上边相对y坐标 = state.scale * state.translateY + pm(240) / 2 - state.scale * pm(240) / 2 */
      /* action825: 视频下边相对y坐标 = state.scale * state.translateY + pm(240) / 2 + state.scale * pm(240) / 2 */
      let handleX = (true)
      const action815 = handleX
      let handleY = (true)
      const action816 = handleY
      let minTranslateX = ((pm(160) - state.scale * pm(160)) / state.scale)
      const action853 = minTranslateX
      let maxTranslateX = ((state.scale * pm(160) - pm(160)) / state.scale)
      const action854 = maxTranslateX
      let minTranslateY = ((pm(120) - state.scale * pm(120)) / state.scale)
      const action855 = minTranslateY
      let maxTranslateY = ((state.scale * pm(120) - pm(120)) / state.scale)
      const action856 = maxTranslateY
      if (state.translateX <= minTranslateX && translationX < 0) {
        const action871 = handleX = (false)
      }
      if (state.translateX >= maxTranslateX && translationX > 0) {
        const action875 = handleX = (false)
      }
      if (state.translateY <= minTranslateY && translationY < 0) {
        const action879 = handleY = (false)
      }
      if (state.translateY >= maxTranslateY && translationY > 0) {
        const action882 = handleY = (false)
      }
      let newTranslateX = (state.baseTranslateX + translationX)
      const action864 = newTranslateX
      let newTranslateY = (state.baseTranslateY + translationY)
      const action863 = newTranslateY
      const action868 = ((store, event) => {
if(newTranslateX < minTranslateX){
    newTranslateX = minTranslateX
}
if(newTranslateX > maxTranslateX){
    newTranslateX = maxTranslateX
}
if(newTranslateY < minTranslateY){
    newTranslateY = minTranslateY
}
if(newTranslateY > maxTranslateY){
    newTranslateY = maxTranslateY
}
})(store, event)
      if (handleX) {
        const action474 = store.commit('setState', {["state.translateX"]: newTranslateX})
      }
      if (handleY) {
        const action475 = store.commit('setState', {["state.translateY"]: newTranslateY})
      }
    }
  }
}

const action569 = actions['func52'] = async function (store, event) {
  const state = store.state
  if (!state.device || !state.device_member) {
    return event
  }
  if (state.device.data.device_type === 'virtual') {
    return event
  }
  if (!state.device_member.data.is_vip) {
    const action571 = await dw.app.run("mqtt.send_push_cmd", {"type": "1", "stream": ["720p", "1080p", "2560p"][state.videoLevel - 1], "wait_resp": false, "device_member_uuid": state.device_member.uuid})
    
        if ((action571.status) === ("error")) {
          const action575message = ("设备推流开启失败")
          const action575title = ("提示")
          action575message && dw.alert(action575title, action575message)
          return {}
        }
        
    const action707 = store.commit('setState', {["state.isPush"]: false})
  }
}

const action692 = actions['func57'] = async function (store, event) {
  const state = store.state
  if (!state.device || !state.device_member) {
    return event
  }
  if (state.device.data.device_type === 'virtual') {
    return event
  }
  if (!!state.device_member && !state.device_member.data.is_vip) {
    const action695 = await dw.app.run("mqtt.send_push_cmd", {"type": "2", "wait_resp": false, "device_member_uuid": state.device_member.uuid})
    
        if ((action695.status) === ("error")) {
          const action696message = ("设备推流开启失败")
          const action696title = ("提示")
          action696message && dw.alert(action696title, action696message)
          return {}
        }
        
  }
}

const action444 = actions['func42'] = function (store, event) {
  const state = store.state
  const action451 = store.commit('setState', {["state.cellWarnPop"]: !state.cellWarnPop})
}

const action589 = actions['func53'] = function (store, event) {
  const state = store.state
  if (dw.platform === 'rnapp') {
    const action590 = swiperRef = (event.data.ref)
  }
}

const action597 = actions['func55'] = function (store, event) {
  const state = store.state
  const action598 = store.commit('setState', {["state.isDragging"]: true})
}

const action595 = actions['func54'] = async function (store, event) {
  const state = store.state
  const action596 = store.commit('setState', {["state.isDragging"]: false})
  let ids = (state.audio_list.map(x=>x.id))
  const action680 = ids
  const action681 = await dw.app.run("audio.bulk_edit_order", {"ids": ids})
  
        if ((action681.status) === ("error")) {
          const action682message = (action681.message || "操作错误！")
          const action682title = ("提示")
          action682message && dw.alert(action682title, action682message)
          return {}
        }
        
}

const action599 = actions['func56'] = function (store, event) {
  const state = store.state
  const action678 = store.commit('setState', {["state.audio_list"]: event.data})
}

/* action1379: 警告 */
const action1380 = actions['func80'] = function (store, event) {
  const state = store.state
  const action1412 = store.commit('setState', {["state.foodMessageFlag"]: false})
}

/* action1346: 未归类 */
const action1018 = actions['func66'] = function (store, event) {
  const state = store.state
  if (state.isPlaying != true) {
    const action1275 = store.commit('setState', {["state.isPlaying"]: true})
  } else if (state.playStatus != "pushing") {
    const action1020 = store.commit('setState', {["state.playStatus"]: "pushing"})
  } else if (state.showPlayer != true) {
    const action1273 = store.commit('setState', {["state.showPlayer"]: true})
  }
}

const action1144 = actions['func70'] = function (store, event) {
  const state = store.state
  const action1145 = console.log('[func70#action1145] onPlaying', event.data)
  const action1146 = store.commit('setState', {["state.playStatus"]: "pushing", ["state.isPlaying"]: true})
  if (maybeStop === true) {
    const action1150 = maybeStop = (false)
  }
}

const action1285 = actions['func74'] = async function (store, event) {
  const state = store.state
  if (state.device.data.privacy_state === 'on') {
    return false
  }
  const action1288 = await (async (store, event) => {
function tryFetch(url, ms){
  return new Promise(function(resolve, reject){
    setTimeout(
      ()=>{fetch(url,{method: "HEAD"})
        .then(res => {
        if(res.ok){
          resolve(true)
        }else{
          reject(false)
        }
        })}
        ,ms)
  })
}
store.commit('setState', {["state.showPlayer"]: false})
try{
  let finishPromise = await tryFetch(state.device.data.push_url_1080, 50)
  if(finishPromise == true){
    console.log("[switchShow success]流存在!")
    store.commit('setState', {["state.showPlayer"]: true})
    return true
    }
  return false
}catch(err){
  console.log('[switchShow error]', err)
  return false
}


})(store, event)
  if ((action1288) === (true)) {
    return true
  }
  const action1291 = store.commit('setState', {["state.playStatus"]: "wait", ["state.showPlayer"]: false})
  /* action1294: 如果推流成功, 则显示播放器 */
  const action1295 = await (async (store, event) => {
function tryFetch(url, ms){
  return new Promise(function(resolve, reject){
    setTimeout(
      ()=>{fetch(url,{method: "HEAD"})
        .then(res => {
        if(res.ok){
          resolve(true)
        }else{
          reject(false)
        }
        })}
        ,ms)
  })
}

for(let i = 0;i<60;i++){
  try{
    await dw.app.run("mqtt.send_push_cmd", {"type": "1", "stream": ["720p", "1080p", "2560p"][state.videoLevel - 1], "wait_resp": false, "device_member_uuid": state.device_member.uuid})
    let finishPromise = await tryFetch(state.device.data.push_url_1080, 5000)
    if(finishPromise == true){
      console.log("推流成功!")
      store.commit('setState', {["state.showPlayer"]: true})
      break
      }
    }catch(err){
      console.log('[switchShow error]', err)
    }
}

})(store, event)
}

const action1143 = actions['func69'] = function (store, event) {
  const state = store.state
  const action1155 = console.log('[func69#action1155] onPaused', "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  const action1156 = console.log('[func69#action1156] onPaused', "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
}

const action1151 = actions['func71'] = function (store, event) {
  const state = store.state
  const action1158 = console.log('[func71#action1158] onBuffering', "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  const action1159 = console.log('[func71#action1159] onBuffering', "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
}

const action1153 = actions['func73'] = function (store, event) {
  const state = store.state
  const action1161 = console.log('[func73#action1161] onError', "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  const action1162 = console.log('[func73#action1162] onError', "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
}

const action984 = actions['onPlaying'] = function (store, event) {
  const state = store.state
  const action991 = console.log('[onPlaying#action991] onPlaying', event.data)
  const action1010 = store.commit('setState', {["state.playStatus"]: "pushing", ["state.isPlaying"]: true})
  if (maybeStop === true) {
    const action1125 = maybeStop = (false)
  }
}

const action987 = actions['onStopped'] = async function (store, event) {
  const state = store.state
  const action994 = console.log('[onStopped#action994] onStopped', event.data)
  if (state.isPlaying) {
    return event
  }
  const action1138 = store.commit('setState', {["state.isPlaying"]: false, ["state.showPlayer"]: false})
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

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var actions = {};

var tick = null;
var action527 = tick;
var refreshTick = null;
var action1005 = refreshTick;
var ws = null;
var action267 = ws;
var recordingTick = null;
var action517 = recordingTick;
var aliveTick = null;
var action930 = aliveTick;
var client = null;
var action347 = client;
var LiveAudioStream = null;
var action385 = LiveAudioStream;
var retryCount = 0;
var action760 = retryCount;
var modalInstance = null;
var action1091 = modalInstance;
var maybeStop = false;
var action1124 = maybeStop;
var gecb = null;
var action1187 = gecb;
var callback = null;
var action1261 = callback;
var timerItems = { /**/"videoLevel": null /**/ };
var action1336 = timerItems;
/* action1341: 初始数据获取 */
/* action1342: 计算属性 */
var action49 = actions['computed3'] = function (event, state) {
  var action50 = function (event) {
    var pages = [];
    var dest = [];
    var count = Math.ceil(state.audio_list.slice(3).length / 5);
    for (var i = 0; i < count; i++) {

      var offset = i * 5;

      var items = state.audio_list.slice(3).slice(offset, offset + 5);
      items.unshift({ id: "edit_" + i });
      dest.push({
        items: items.map(function (x) {
          return _extends({}, x, { key: x.id, name: x.id });
        }),
        id: i
      });
    }
    return dest;
  }(event);
  return action50;
};
// COMPUTED_ACTION_META:computed3 {"deps":["audio_list"]}

var action48 = actions['computed2'] = function (event, state) {
  var action45 = function (event) {
    // 焦点个数
    var count = Math.ceil(state.audio_list.slice(3).length / 5);

    // 当前页数
    var pageIndex = state.audio_offset / 5;
    var dest = [];
    for (var i = 0; i < count; i++) {
      dest.push({
        is_active: i === pageIndex ? true : false,
        id: i
      });
    }
    return dest;
  }(event);
  return action45;
};
// COMPUTED_ACTION_META:computed2 {"deps":["audio_list","audio_offset"]}

var action68 = actions['computed4'] = function (event, state) {
  var action69 = function (event) {
    var style = {};
    if (state.platform !== 'rnapp') {
      style = {
        boxShadow: state.show_all_audio ? "unset" : "0px 3px 12px rgba(0,0,0,0.05)",
        borderRadius: state.show_all_audio ? "unset" : "15px 15px 15px 15px"
      };
    } else {
      // rnapp
      if (state.show_all_audio) {
        // 展开模式
        style = {};
      } else {
        // 收起模式
        style = {
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: pm(12),
          shadowColor: "rgb(0, 0, 0)",
          shadowOpacity: 0.05,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15
        };
      }
    }
    return style;
  }(event);
  return action69;
};
// COMPUTED_ACTION_META:computed4 {"deps":["platform","show_all_audio"]}

var action71 = actions['computed5'] = function (event, state) {
  var action73 = function (event) {
    var style = {};
    if (state.platform !== 'rnapp') {
      style = {
        borderRadius: state.show_all_audio ? "15px 15px 0px 0px" : "15px 15px 15px 15px"
      };
    } else {
      // rnapp
      if (state.show_all_audio) {
        // 展开模式
        style = {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        };
      } else {
        // 收起模式
        style = {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15
        };
      }
    }
    return style;
  }(event);
  return action73;
};
// COMPUTED_ACTION_META:computed5 {"deps":["platform","show_all_audio"]}

var action75 = actions['computed6'] = function (event, state) {
  var action77 = function (event) {
    var style = {};
    if (state.platform !== 'rnapp') {
      style = {
        bottom: state.show_all_audio ? "-12px" : "-2px"
      };
    } else {
      // rnapp
      if (state.show_all_audio) {
        // 展开模式
        style = {
          bottom: -12
        };
      } else {
        // 收起模式
        style = {
          bottom: -2

        };
      }
    }

    return style;
  }(event);
  return action77;
};
// COMPUTED_ACTION_META:computed6 {"deps":["platform","show_all_audio"]}

/* action89: 设备指令 */
/* action115: 跳转 */
/* action116: 加载今日出粮记录 */
var action126 = actions['computed7'] = function (event, state) {
  var action128 = function (event) {
    var count = 0;
    var weight = 0;
    var count_type1 = 0;
    var weight_type1 = 0;
    var count_type2 = 0;
    var weight_type2 = 0;
    var count_type3 = 0;
    var weight_type3 = 0;
    var count_type4 = 0;
    var weight_type4 = 0;

    if (!!state.food_reports && state.food_reports.length) {
      count = state.food_reports.length;
      weight = state.food_reports.map(function (x) {
        return x.data.weight;
      }).reduce(function (i, j) {
        return i + j;
      }, 0);

      var items_type1 = state.food_reports.filter(function (x) {
        return x.data.type === '1';
      });
      count_type1 = items_type1.length;
      weight_type1 = items_type1.map(function (x) {
        return x.data.weight;
      }).reduce(function (i, j) {
        return i + j;
      }, 0);

      var items_type2 = state.food_reports.filter(function (x) {
        return x.data.type === '2';
      });
      count_type2 = items_type2.length;
      weight_type2 = items_type2.map(function (x) {
        return x.data.weight;
      }).reduce(function (i, j) {
        return i + j;
      }, 0);

      //定时出粮
      var items_type3 = state.food_reports.filter(function (x) {
        var day = new Date().getDay();
        var foodReportsDay = new Date(x.created.toString()).getDay();
        if (x.data.type === '3' && day === foodReportsDay) {
          return x;
        }
      });
      count_type3 = items_type3.length;
      weight_type3 = items_type3.map(function (x) {
        return x.data.weight;
      }).reduce(function (i, j) {
        return i + j;
      }, 0);

      //自动出粮
      var items_type4 = state.food_reports.filter(function (x) {
        return x.data.type === '4';
      });
      count_type4 = items_type4.length;
      weight_type4 = items_type4.map(function (x) {
        return x.data.weight;
      }).reduce(function (i, j) {
        return i + j;
      }, 0);
    }

    return {
      count: count,
      weight: weight,
      count_type1: count_type1,
      weight_type1: weight_type1,
      count_type2: count_type2,
      weight_type2: weight_type2,
      count_type3: count_type3,
      weight_type3: weight_type3,
      count_type4: count_type4,
      weight_type4: weight_type4
    };
  }(event);
  return action128;
};
// COMPUTED_ACTION_META:computed7 {"deps":["food_reports"]}

var action143 = actions['computed8'] = function (event, state) {
  var weekDay = new Date().getDay();
  var action1383 = weekDay;
  var action1384 = weekDay = weekDay === 0 ? 7 : weekDay;
  var action144 = getDate(+getDate() + 8 * 3600 * 1000).toISOString().replace('Z', '');
  var hhmm = action144.slice(11, 16);
  var action145 = hhmm;
  var getTimerModeData = state.device_member.data.feed_config.timerMode.data;
  var action146 = getTimerModeData;
  var action294 = function (event) {
    // let weekDay = new Date().getDay()
    // weekDay =  weekDay === 0 ? 7 : weekDay

    // let currentTime = new Date( +new Date() + 8 * 3600 * 1000).toISOString().replace('Z', '')

    // let hhmm = currentTime.slice(11,16)

    // let getTimerModeData = state.device_member.data.feed_config.timerMode.data

    //当天
    var todayFood = getTimerModeData.filter(function (tmp) {
      return tmp.week.includes(weekDay);
    }).filter(function (tmp) {
      return tmp.time > hhmm;
    });

    //下一天
    var nextDay = weekDay + 1 > 7 ? 1 : weekDay;
    var nextDadFood = getTimerModeData.filter(function (tmp) {
      return tmp.week.includes(nextDay);
    });

    if (nextDadFood.length > 0) {
      return todayFood.length > 0 ? todayFood[0].time : "\u660E\u5929" + nextDadFood[0].time;
    } else {
      return todayFood.length > 0 ? todayFood[0].time : null;
    }
  }(event);
  return action294;
};
// COMPUTED_ACTION_META:computed8 {"deps":["device_member"]}

var action153 = actions['computed9'] = function (event, state) {
  var action154 = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace('Z', '');
  var action214 = action154;
  var now = action154;
  var action162 = now;
  if (state.food_reports.length) {
    var time = state.food_reports[0].created;
    var action156 = time;
    var action166 = function () {
      var parseDate = function parseDate(string) {
        var a = string.split(getRegExp('[-T:.Z]')).filter(function (i) {
          return !!i;
        }).map(function (i) {
          return parseInt(i);
        });
        return getDate(a[0], a[1] - 1, a[2], a[3], a[4], a[5], parseFloat('0.' + a[6]) * 1000);
      };
      return parseDate(now) - parseDate(time);
    }();
    return Math.round(action166 / 1000 / 60);
  } else {
    return null;
  }
};
// COMPUTED_ACTION_META:computed9 {"deps":["food_reports"]}

var action273 = actions['computed10'] = function (event, state) {
  var action274 = function (event) {
    if (state.catFoodInfo && state.catFoodInfo.type === 'doing') {
      var minutes = Math.floor(state.catFoodInfo.seconds / 60);
      var seconds = Math.floor(state.catFoodInfo.seconds % 60);
      return {
        minutes: minutes,
        seconds: seconds
      };
    } else {
      return null;
    }
  }(event);
  return action274;
};
// COMPUTED_ACTION_META:computed10 {"deps":["catFoodInfo"]}

var action310 = actions['computed11'] = function (event, state) {
  var action311 = function (event) {
    function getMinutesBetween(start_time, end_time) {
      var _start_time$split$map = start_time.split(":").map(Number),
          _start_time$split$map2 = _slicedToArray(_start_time$split$map, 2),
          start_hour = _start_time$split$map2[0],
          start_minute = _start_time$split$map2[1];

      var _end_time$split$map = end_time.split(":").map(Number),
          _end_time$split$map2 = _slicedToArray(_end_time$split$map, 2),
          end_hour = _end_time$split$map2[0],
          end_minute = _end_time$split$map2[1];

      var start_minutes = start_hour * 60 + start_minute;
      var end_minutes = (end_hour + (end_hour < start_hour ? 24 : 0)) * 60 + end_minute;

      return end_minutes - start_minutes;
    }
    return getMinutesBetween(event.start_time, event.end_time);
  }(event);
  return action311;
};
// COMPUTED_ACTION_META:computed11 {"deps":[]}

/* action501: 拍照录像相关 */
var action519 = actions['computed12'] = function (event, state) {
  var action520 = function (event) {
    var seconds = state.recordSeconds;
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;

    var minutesString = String(minutes).padStart(2, '0');
    var secondsString = String(remainingSeconds).padStart(2, '0');

    return minutesString + ':' + secondsString;
  }(event);
  return action520;
};
// COMPUTED_ACTION_META:computed12 {"deps":["recordSeconds"]}

/* action379: 录音相关 */
/* action348: MQTT相关 */
/* action1339: 视频动作 */
/* action1379: 警告 */
var action1031 = actions['getAlertMessage'] = function (event, state) {
  var messages = [];
  var action1032 = messages;
  if (!state.device.data._isAlive) {
    var action1037 = function (event) {
      messages.push("设备离线，请检查网络");
    }(event);
  } else if (state.device.data._isAlive) {
    var action1039 = function (event) {
      if (state.device.data.remain_food_status === '2') {
        messages.push("粮桶内余粮不足，记得及时补充哦");
      }
      if (state.device.data.remain_food_status === '3') {
        messages.push("粮桶内无粮，请及时添加");
      }
      if (state.device_member.data.dryer_days <= 0) {
        messages.push("干燥剂用尽，请及时更换");
      }
      if (state.device.data.motor_status === '2') {
        messages.push("粮桶卡粮，请手动清理喂食器");
      }
      if (state.device.data.food_sensor === "2") {
        messages.push("出粮通道宠粮堆积，请计时清理");
      }
      if (["2", "3", "4", "5"].includes(state.device.data.plate_status)) {
        messages.push("称重碗异常，请检查称重碗");
      }

      // if(state.device.data.food_sensor === "3"){
      //     messages.push("粮道传感器异常，请检查")
      // }

      // if(state.device.data.plate_status === "2"){
      //     messages.push("称重碗偏离，请检查称重碗")
      // }
      // if(state.device.data.plate_status === "3"){
      //     messages.push("称重碗被拿起")
      // }
      // if(state.device.data.plate_status === "4"){
      //     messages.push("碗内可能堆粮,请及时清理")
      // }
      // if(state.device.data.plate_status === "5"){
      //     messages.push("称重碗传感器异常")
      // }
    }(event);
  }
  return messages.map(function (x, index) {
    return { /**/id: index, /**/message: x /**/ };
  });
};
// COMPUTED_ACTION_META:getAlertMessage {"deps":["device","device_member"]}

/* action1346: 未归类 */
var action952 = actions['computed13'] = function (event, state) {
  return state.device.data._lastAlive.slice(0, 10).split("-").join("/") + " " + state.device.data._lastAlive.slice(11, 16) + "设备离线";
};
// COMPUTED_ACTION_META:computed13 {"deps":["device"]}

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdw9w: {
  width: "100%",
  height: "100%",
},
xdw9y: {
  width: "100%",
  height: "100%",
  zIndex: 0,
  position: "absolute",
  flexDirection: "column",
},
xdw9z: {
  top: 0,
  left: 0,
  position: "absolute",
  flexDirection: "column",
},
xdwa0: {
  width: pm(31),
  height: pm(31),
},
xdwa2: {
  width: pm(31),
  height: pm(31),
  flexDirection: "column",
},
xdwa3: {
  width: pm(320),
  height: pm(240),
},
xdwa4: {
  color: "#ffffff",
  width: pm(320),
  fontSize: pm(12),
  marginTop: pm(100),
  textAlign: "center",
  lineHeight: pm(24),
},
xdwa5: {
  position: "absolute",
  flexDirection: "column",
},
xdwa6: {
  fontSize: pm(12),
  fontWeight: "600",
  lineHeight: pm(18),
},
xdwa7: {
  width: pm(70),
  height: pm(24),
  borderTopWidth: pm(0),
  borderTopColor: "transparent",
  textAlign: "left",
  alignItems: "center",
  borderLeftWidth: pm(0),
  borderLeftColor: "transparent",
  borderRightWidth: pm(0),
  borderRightColor: "transparent",
  borderBottomWidth: pm(0),
  borderBottomColor: "transparent",
  flexDirection: "column",
  justifyContent: "center",
},
xdwa8: {
  width: pm(70),
  height: pm(24),
  alignItems: "center",
  marginLeft: "auto",
  marginRight: "auto",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "rgba(255, 218, 103, 1)",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdwa9: {
  width: pm(320),
  height: pm(240),
  flexDirection: "column",
},
xdwaa: {
  color: "#ffffff",
  fontSize: pm(9),
  lineHeight: pm(20),
},
xdwab: {
  width: pm(32),
  borderTopWidth: pm(1.5),
  borderTopColor: "#ffffff",
  alignItems: "center",
  borderLeftWidth: pm(1.5),
  borderLeftColor: "#ffffff",
  fontWeight: "600",
  paddingTop: 0,
  borderRightWidth: pm(1.5),
  borderRightColor: "#ffffff",
  marginRight: pm(10),
  paddingLeft: 0,
  borderBottomWidth: pm(1.5),
  borderBottomColor: "#ffffff",
  paddingRight: 0,
  flexDirection: "row",
  paddingBottom: 0,
  justifyContent: "center",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdwac: {
  width: pm(30),
  height: pm(30),
  flexGrow: 0,
  flexShrink: 0,
},
xdwag: {
  position: "relative",
  alignItems: "flex-end",
  marginRight: pm(10),
  flexDirection: "row",
},
xdwah: {
  width: pm(30),
  height: pm(30),
},
xdwak: {
  flexDirection: "column",
},
xdwal: {
  top: pm(10),
  right: pm(10),
  position: "absolute",
  alignItems: "center",
  flexDirection: "row",
},
xdwam: {
  color: "#ffffff",
  fontSize: pm(10),
  lineHeight: pm(15),
},
xdwan: {
  left: pm(12),
  bottom: pm(55),
  zIndex: 2,
  position: "absolute",
  paddingTop: pm(4),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(4),
  backgroundColor: "rgba(0, 0, 0, 0.75)",
  borderTopLeftRadius: pm(5),
  borderTopRightRadius: pm(5),
  borderBottomLeftRadius: pm(5),
  borderBottomRightRadius: pm(5),
},
xdwap: {
  left: pm(10),
  bottom: pm(10),
  position: "absolute",
  flexDirection: "column",
},
xdwar: {
  right: pm(10),
  bottom: pm(10),
  position: "absolute",
  flexDirection: "column",
},
xdwas: {
  width: pm(202),
  height: pm(240),
  flexDirection: "column",
},
xdwat: {
  color: "#ffffff",
  fontSize: pm(12),
  fontWeight: "400",
  lineHeight: pm(17),
  marginLeft: pm(24),
  marginRight: pm(10),
},
xdwau: {
  color: "#ffffff",
  fontSize: pm(12),
  fontWeight: "400",
  lineHeight: pm(17),
},
xdwav: {
  alignItems: "center",
  flexDirection: "row",
},
xdwaw: {
  color: "#ffffff",
  fontSize: pm(12),
  fontWeight: "400",
  lineHeight: pm(17),
  marginLeft: pm(24),
  marginRight: pm(17),
},
xdwax: {
  height: pm(75),
  flexDirection: "column",
  justifyContent: "space-between",
},
xdway: {
  width: pm(118),
  flexDirection: "column",
  justifyContent: "space-evenly",
  backgroundColor: "#000000cc",
},
xdwaz: {
  top: pm(0),
  right: pm(0),
  width: pm(320),
  height: pm(240),
  flexGrow: 1,
  position: "absolute",
  flexDirection: "row",
},
xdwb0: {
  width: pm(118),
  height: pm(40),
},
xdwb1: {
  flexDirection: "row",
},
xdwb2: {
  width: pm(118),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-evenly",
  backgroundColor: "#000000cc",
},
xdwb3: {
  width: pm(22),
  height: pm(22),
},
xdwb4: {
  width: pm(22),
  height: pm(22),
  flexDirection: "column",
},
xdwb5: {
  left: pm(11),
  bottom: pm(44),
  zIndex: 99999,
  position: "absolute",
  alignItems: "center",
  paddingTop: pm(4),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(4),
  backgroundColor: "#00000099",
  borderTopLeftRadius: pm(3),
  borderTopRightRadius: pm(3),
  borderBottomLeftRadius: pm(3),
  borderBottomRightRadius: pm(3),
},
xdwb6: {
  width: pm(12),
  height: pm(12),
  marginRight: pm(3),
},
xdwb8: {
  color: "#ffffff",
  fontSize: pm(12),
  lineHeight: pm(17),
},
xdwb9: {
  left: pm(110),
  bottom: pm(103),
  zIndex: 99999,
  position: "absolute",
  alignItems: "center",
  paddingTop: pm(9),
  paddingLeft: pm(19),
  paddingRight: pm(19),
  flexDirection: "row",
  paddingBottom: pm(9),
  justifyContent: "center",
  backgroundColor: "#00000099",
  borderTopLeftRadius: pm(3),
  borderTopRightRadius: pm(3),
  borderBottomLeftRadius: pm(3),
  borderBottomRightRadius: pm(3),
},
xdwba: {
  width: pm(60),
  height: pm(67),
},
xdwbb: {
  width: pm(41),
  height: pm(41),
  borderTopLeftRadius: pm(5),
  borderTopRightRadius: pm(5),
  borderBottomLeftRadius: pm(5),
  borderBottomRightRadius: pm(5),
},
xdwbc: {
  top: pm(10),
  left: pm(10),
  position: "absolute",
  flexDirection: "column",
  borderTopLeftRadius: pm(3),
  borderTopRightRadius: pm(3),
  borderBottomLeftRadius: pm(3),
  borderBottomRightRadius: pm(3),
},
xdwbd: {
  left: pm(11),
  bottom: pm(-4),
  position: "absolute",
},
xdwbe: {
  width: pm(7),
  height: pm(7),
  marginRight: pm(4),
  flexDirection: "column",
  backgroundColor: "#FF3737",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdwbf: {
  color: "#ffffff",
  fontSize: pm(12),
  lineHeight: pm(17),
  marginRight: pm(5),
},
xdwbg: {
  top: pm(43),
  left: pm(85),
  zIndex: 99999,
  position: "absolute",
  alignItems: "center",
  paddingTop: pm(9),
  paddingLeft: pm(22),
  paddingRight: pm(22),
  flexDirection: "row",
  paddingBottom: pm(9),
  justifyContent: "center",
  backgroundColor: "#00000099",
  borderTopLeftRadius: pm(3),
  borderTopRightRadius: pm(3),
  borderBottomLeftRadius: pm(3),
  borderBottomRightRadius: pm(3),
},
xdwbi: {
  left: pm(62),
  bottom: pm(103),
  zIndex: 99999,
  position: "absolute",
  alignItems: "center",
  paddingTop: pm(9),
  paddingLeft: pm(19),
  paddingRight: pm(19),
  flexDirection: "row",
  paddingBottom: pm(9),
  justifyContent: "center",
  backgroundColor: "#00000099",
  borderTopLeftRadius: pm(3),
  borderTopRightRadius: pm(3),
  borderBottomLeftRadius: pm(3),
  borderBottomRightRadius: pm(3),
},
xdwbj: {
  width: pm(44),
  height: pm(15),
  marginRight: pm(3),
},
xdwbk: {
  left: pm(115),
  width: pm(90),
  bottom: pm(103),
  height: pm(34),
  zIndex: 99999,
  position: "absolute",
  alignItems: "center",
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  flexDirection: "row",
  paddingBottom: 0,
  justifyContent: "center",
  backgroundColor: "#00000099",
  borderTopLeftRadius: pm(3),
  borderTopRightRadius: pm(3),
  borderBottomLeftRadius: pm(3),
  borderBottomRightRadius: pm(3),
},
xdwbl: {
  color: "#ffffff",
  fontSize: pm(12),
  textAlign: "center",
  lineHeight: pm(17),
},
xdwbm: {
  width: pm(320),
  height: pm(240),
  zIndex: 99999,
  position: "absolute",
  alignItems: "center",
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  flexDirection: "row",
  paddingBottom: 0,
  justifyContent: "center",
  borderTopLeftRadius: pm(3),
  borderTopRightRadius: pm(3),
  borderBottomLeftRadius: pm(3),
  borderBottomRightRadius: pm(3),
},
xdwbn: {
  width: pm(320),
  height: pm(240),
  position: "relative",
  overflow: "hidden",
  marginBottom: pm(10),
  flexDirection: "column",
  backgroundColor: "#000000",
},
xdwbo: {
  width: pm(240),
  height: pm(236),
},
xdwbp: {
  width: pm(84),
  height: pm(27),
},
xdwbq: {
  bottom: 0,
  position: "absolute",
  flexDirection: "column",
},
xdwbr: {
  position: "relative",
  marginTop: pm(25),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "flex-start",
},
xdwbs: {
  color: "#FF6D6D",
  fontSize: pm(12),
  textAlign: "center",
  lineHeight: pm(17),
},
xdwbt: {
  height: pm(30),
  zIndex: 99999,
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
  borderTopLeftRadius: pm(3),
  borderTopRightRadius: pm(3),
  borderBottomLeftRadius: pm(3),
  borderBottomRightRadius: pm(3),
},
xdwbu: {
  width: pm(41.5),
  height: pm(41.5),
},
xdwbw: {
  width: pm(41.5),
  height: pm(41.5),
  flexDirection: "column",
  borderTopLeftRadius: pm(100),
  borderTopRightRadius: pm(100),
  borderBottomLeftRadius: pm(100),
  borderBottomRightRadius: pm(100),
},
xdwbx: {
  color: "#181818",
  fontSize: pm(11),
  marginTop: pm(3),
  fontWeight: "500",
  lineHeight: pm(15),
},
xdwby: {
  width: "20%",
  alignItems: "center",
  flexDirection: "column",
  paddingBottom: pm(5),
  justifyContent: "center",
},
xdwc1: {
  width: pm(42),
  height: pm(42),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdwc2: {
  width: "20%",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdwc5: {
  width: "20%",
  alignItems: "center",
  flexDirection: "column",
  paddingBottom: pm(5),
  justifyContent: "center",
  borderBottomLeftRadius: pm(20),
},
xdwc6: {
  width: "100%",
  alignItems: "flex-start",
  paddingTop: pm(10),
  paddingLeft: pm(5),
  paddingRight: pm(5),
  flexDirection: "row",
  paddingBottom: pm(3),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdwc7: {
  left: 0,
  bottom: 0,
  zIndex: 999,
  alignItems: "center",
  marginBottom: pm(5),
  flexDirection: "row",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdwc8: {
  width: pm(300),
  position: "relative",
  marginLeft: pm(10),
  marginRight: pm(10),
  flexDirection: "column",
},
xdwc9: {
  width: pm(15),
  height: pm(15),
},
xdwca: {
  color: "#181818",
  fontSize: pm(11),
  fontFamily: "Noto Sans CJK SC",
  lineHeight: pm(24),
},
xdwcb: {
  alignItems: "center",
  marginLeft: pm(4),
  flexDirection: "column",
  justifyContent: "center",
},
xdwcc: {
  marginRight: pm(8),
  flexDirection: "column",
},
xdwcd: {
  width: pm(300),
  height: pm(27),
  alignItems: "center",
  paddingLeft: pm(8),
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: "#fffcf6",
  borderTopLeftRadius: pm(6),
  borderTopRightRadius: pm(6),
  borderBottomLeftRadius: pm(6),
  borderBottomRightRadius: pm(6),
},
xdwce: {
  left: 0,
  width: pm(300),
  bottom: 0,
  height: pm(27),
  zIndex: 999,
  marginTop: pm(5),
  alignItems: "center",
  marginLeft: pm(10),
  marginRight: pm(10),
  flexDirection: "row",
  borderTopLeftRadius: pm(6),
  borderTopRightRadius: pm(6),
  borderBottomLeftRadius: pm(6),
  borderBottomRightRadius: pm(6),
},
xdwcf: {
  width: pm(18),
  height: pm(18),
},
xdwcg: {
  flexDirection: "column",
  paddingBottom: pm(5),
},
xdwch: {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "600",
  lineHeight: pm(21),
},
xdwci: {
  width: pm(10),
  height: pm(10),
  marginLeft: pm(3),
  marginRight: pm(3),
},
xdwck: {
  width: pm(24),
  height: pm(24),
  marginRight: pm(5),
},
xdwcl: {
  color: "#181818",
  fontSize: pm(18),
  fontWeight: "500",
  lineHeight: pm(24),
},
xdwcm: {
  width: pm(16),
  height: pm(16),
  marginLeft: pm(3),
  marginRight: pm(3),
},
xdwco: {
  width: pm(70),
  height: pm(21),
  marginLeft: pm(7),
},
xdwcp: {
  color: "#666666",
  fontSize: pm(11),
  lineHeight: pm(15),
},
xdwcq: {
  color: "#181818",
  fontSize: pm(14),
  marginTop: pm(-0),
  fontWeight: "500",
  lineHeight: pm(19),
  marginLeft: pm(5),
  marginRight: pm(2),
},
xdwcr: {
  width: pm(85),
  alignItems: "center",
  flexDirection: "row",
},
xdwcs: {
  marginBottom: pm(20),
  flexDirection: "row",
},
xdwct: {
  color: "#181818",
  fontSize: pm(14),
  textAlign: "left",
  fontFamily: "苹方-简 中黑体",
  lineHeight: pm(19),
},
xdwcu: {
  marginLeft: pm(7),
  flexDirection: "column",
},
xdwcv: {
  marginTop: pm(22),
  flexDirection: "column",
},
xdwcw: {
  width: pm(185),
  flexShrink: 0,
  flexDirection: "column",
},
xdwcx: {
  width: pm(119),
  height: pm(113),
  zIndex: 1,
  position: "absolute",
},
xdwcy: {
  color: "#181D56",
  zIndex: 2,
  fontSize: pm(9),
  marginTop: pm(3),
  lineHeight: pm(14),
  marginBottom: pm(6),
},
xdwcz: {
  width: pm(43),
  height: pm(28),
  zIndex: 2,
},
xdwd1: {
  color: "#1D2259",
  zIndex: 2,
  fontSize: pm(10),
  marginTop: pm(6),
  fontWeight: "600",
  lineHeight: pm(15),
  marginBottom: pm(5),
},
xdwd2: {
  width: pm(85),
  height: pm(79),
  flexGrow: 0,
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdwd3: {
  width: pm(85),
  height: pm(79),
  marginTop: pm(33),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdwd4: {
  alignItems: "flex-start",
  flexDirection: "row",
},
xdwd5: {
  width: pm(280),
  height: pm(0.5),
  marginTop: pm(10),
  marginBottom: pm(15),
  flexDirection: "column",
  backgroundColor: "#F0F0F0",
},
xdwd6: {
  width: pm(18),
  height: pm(18),
  marginRight: pm(5),
},
xdwd8: {
  color: "#000000",
  fontSize: pm(11),
  textAlign: "left",
  fontWeight: "500",
  lineHeight: pm(15),
},
xdwd9: {
  flexGrow: 0,
  alignItems: "center",
  flexShrink: 0,
  flexDirection: "row",
  justifyContent: "center",
},
xdwdb: {
  color: "#E7BF89",
  fontSize: pm(11),
  textAlign: "left",
  fontWeight: "500",
  lineHeight: pm(15),
},
xdwdc: {
  left: pm(138),
  width: pm(0.5),
  height: pm(14),
  position: "absolute",
  flexDirection: "column",
  backgroundColor: "#F0F0F0",
},
xdwdd: {
  position: "relative",
  alignItems: "center",
  paddingLeft: pm(30),
  paddingRight: pm(40),
  flexDirection: "row",
  justifyContent: "space-between",
},
xdwde: {
  width: pm(300),
  paddingTop: pm(15),
  paddingLeft: pm(14),
  paddingRight: pm(14),
  flexDirection: "column",
  paddingBottom: pm(15),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdwdf: {
  width: pm(300),
  marginLeft: pm(10),
  marginRight: pm(10),
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdwdg: {
  fontSize: pm(16),
  fontWeight: "500",
  lineHeight: pm(24),
  marginRight: pm(5),
},
xdwdh: {
  color: "#ffffff",
  flexGrow: 0,
  fontSize: pm(10),
  flexShrink: 0,
  lineHeight: pm(16),
  marginLeft: pm(8),
  marginRight: pm(8),
},
xdwdi: {
  flexGrow: 0,
  alignItems: "center",
  flexDirection: "row",
  backgroundColor: "#FF6D6D",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdwdj: {
  flexWrap: "wrap",
  alignItems: "center",
  flexDirection: "row",
},
xdwdk: {
  width: pm(180),
  flexShrink: 0,
  flexDirection: "column",
},
xdwdl: {
  width: pm(76),
  height: pm(59),
  marginLeft: "auto",
  borderTopLeftRadius: pm(9),
  borderTopRightRadius: pm(9),
  borderBottomLeftRadius: pm(9),
  borderBottomRightRadius: pm(9),
},
xdwdm: {
  flexShrink: 0,
  flexDirection: "column",
},
xdwdn: {
  width: pm(300),
  alignItems: "center",
  paddingTop: pm(15),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(15),
  justifyContent: "space-between",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdwdo: {
  width: pm(300),
  marginTop: pm(10),
  marginLeft: pm(10),
  paddingTop: 0,
  marginRight: pm(10),
  paddingLeft: 0,
  marginBottom: pm(22),
  paddingRight: 0,
  flexDirection: "row",
  paddingBottom: 0,
  borderTopLeftRadius: pm(15),
  borderTopRightRadius: pm(15),
  borderBottomLeftRadius: pm(15),
  borderBottomRightRadius: pm(15),
},
xdwdp: {
  flexDirection: "column",
  justifyContent: "flex-start",
},
xdwdq: {
  flex: 1,
  width: "100%",
  zIndex: 100,
  flexGrow: 1,
  overflow: "scroll",
},
xdwdr: {
  width: pm(274),
  height: pm(206),
},
xdwds: {
  top: pm(-35),
  right: pm(0),
  position: "absolute",
  flexDirection: "column",
},
xdwdt: {
  width: pm(284),
  height: pm(216),
  position: "relative",
  paddingTop: pm(5),
  paddingLeft: pm(5),
  paddingRight: pm(5),
  flexDirection: "column",
  paddingBottom: pm(5),
  backgroundColor: "#ffffff",
},
xdwdu: {
  color: "#ffffff",
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdwdv: {},
xdwdw: {
  marginTop: pm(10),
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
},
xdwdx: {
  width: "100%",
  height: "100%",
  zIndex: 99999,
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#000000cc",
},
xdwdy: {
  top: pm(10),
  left: pm(10),
  color: "#7e7e7e",
  fontSize: pm(12),
  position: "absolute",
  lineHeight: pm(20),
},
xdwdz: {
  width: pm(25),
  height: pm(25),
},
xdwe0: {
  fontSize: pm(10),
  lineHeight: pm(15),
},
xdwe1: {
  width: pm(85),
  height: pm(38),
  borderTopWidth: pm(1),
  borderTopColor: "#FFD355",
  alignItems: "center",
  borderLeftWidth: pm(1),
  borderLeftColor: "#FFD355",
  borderRightWidth: pm(1),
  borderRightColor: "#FFD355",
  borderBottomWidth: pm(1),
  borderBottomColor: "#FFD355",
  flexDirection: "row",
  justifyContent: "center",
  borderTopLeftRadius: pm(7),
  borderTopRightRadius: pm(7),
  borderBottomLeftRadius: pm(7),
  borderBottomRightRadius: pm(7),
},
xdwe2: {
  width: pm(85),
  height: pm(38),
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
  borderTopLeftRadius: pm(7),
  borderTopRightRadius: pm(7),
  borderBottomLeftRadius: pm(7),
  borderBottomRightRadius: pm(7),
},
xdwe3: {
  width: pm(85),
  alignItems: "flex-start",
  marginBottom: pm(10),
  flexDirection: "row",
  justifyContent: "center",
},
xdwe4: {
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdwe5: {
  left: 0,
  width: pm(100),
  bottom: pm(-50),
  height: pm(35),
  position: "absolute",
  alignItems: "center",
  marginLeft: pm(100),
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#FFD355",
  borderTopLeftRadius: pm(20),
  borderTopRightRadius: pm(20),
  borderBottomLeftRadius: pm(20),
  borderBottomRightRadius: pm(20),
},
xdwe6: {
  width: pm(300),
  height: pm(500),
  position: "relative",
  alignItems: "center",
  paddingTop: pm(70),
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#fffffff2",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdwe7: {
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 99999,
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#0000004c",
  borderTopLeftRadius: pm(5),
  borderTopRightRadius: pm(5),
  borderBottomLeftRadius: pm(5),
  borderBottomRightRadius: pm(5),
},
xdwe8: {
  height: "100%",
  flexGrow: 1,
  flexShrink: 1,
  flexDirection: "column",
  backgroundColor: "#FAFAFA",
},
xdwe9: {
  color: "#181818",
  fontSize: pm(12),
  marginTop: pm(21),
  textAlign: "center",
  fontFamily: "inherit",
  fontWeight: "500",
  lineHeight: pm(17),
  marginBottom: pm(21),
},
xdwea: {
  paddingLeft: pm(11),
  paddingRight: pm(11),
  flexDirection: "column",
},
xdweb: {
  color: "#FFBC65",
  fontSize: pm(12),
  marginTop: pm(10),
  textAlign: "center",
  fontWeight: "400",
  lineHeight: pm(17),
  marginBottom: pm(12),
},
xdwec: {
  backgroundColor: "#f5f5f5",
},
xdwed: {
  height: pm(38),
  borderTopWidth: pm(0.4),
  borderTopColor: "#d1d1d1",
  flexDirection: "column",
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdwee: {
  width: pm(224),
  marginTop: pm(281),
  marginLeft: pm(48),
  marginRight: pm(48),
  marginBottom: pm(301),
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdwef: {
  flex: 1,
  zIndex: 10,
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdweg: {
  color: "#333333",
  fontSize: pm(15),
  textAlign: "center",
  fontWeight: "500",
  lineHeight: pm(24),
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
},
xdweh: {
  width: pm(288),
  height: pm(0.5),
  marginTop: pm(15),
  marginBottom: pm(15),
  flexDirection: "column",
  backgroundColor: "#F0F0F0",
},
xdwei: {
  color: "#181818",
  fontSize: pm(12),
  textAlign: "center",
  fontWeight: "400",
  lineHeight: pm(18),
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
},
xdwej: {
  color: " color: #181818;",
  fontSize: pm(12),
  textAlign: "center",
  fontWeight: "400",
  lineHeight: pm(18),
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
},
xdwek: {
  width: pm(320),
  height: pm(180),
  paddingTop: pm(16),
  paddingLeft: pm(16),
  paddingRight: pm(16),
  flexDirection: "column",
  paddingBottom: pm(16),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
},
xdwel: {
  flex: 1,
  zIndex: 10,
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "flex-end",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
}
});
const slide = {"type":"285782","key":"c2857821","slug":null,"randomid":"id_7833aeb73bb83ed4dd55fffe","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,108,108","src":"u/dev066/2024/02/28/XjYP3GTdtY6rXUHUxpW72P/编组273x.png","buildToLocal":true}},"Image3":{"ctx_map":{"fop":"e,108,108","src":"u/dev066/2024/02/28/AW77NUykhDFqnNjogEfBHN/编组11备份53x.png","buildToLocal":true}},"Image4":{"ctx_map":{"fop":"e,108,108","src":"u/dev066/2024/03/02/ceuYt9RZaAnyfRWoEzZ7zi/编组11备份91.png","buildToLocal":true}},"Image5":{"ctx_map":{"fop":"e,108,108","src":"u/dev066/2024/02/28/dFaS3ghckqPMFNZbiCNML6/编组11备份143x.png","buildToLocal":true}},"Modal1":{"ctx_map":{"mask":true,"value":false,"position":"center","baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Modal2":{"ctx_map":{"mask":true,"value":false,"position":"bottom","baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Text14":{"ctx_map":{"text":"超清"}},"Text16":{"ctx_map":{"text":"拍照"}},"Text17":{"ctx_map":{"text":"实时语音"}},"Text18":{"ctx_map":{"text":"罐头音效"}},"Text33":{"ctx_map":{"text":"进食记录"}},"Text34":{"ctx_map":{"text":"暂停出粮"}},"Text35":{"ctx_map":{"text":"精彩视频"}},"Text36":{"ctx_map":{"text":"2"}},"Text48":{"ctx_map":{"text":"4（暂定）"}},"Text49":{"ctx_map":{"text":"宠物进食"}},"Text52":{"ctx_map":{"text":"未设置喂食模式"}},"Text98":{"ctx_map":{"text":"720P"}},"Text99":{"ctx_map":{"text":"标清"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"View26":{"ctx_map":{}},"View27":{"ctx_map":{}},"View28":{"ctx_map":{}},"View33":{"ctx_map":{}},"View36":{"ctx_map":{}},"View37":{"ctx_map":{}},"View38":{"ctx_map":{}},"View39":{"ctx_map":{}},"View42":{"ctx_map":{}},"View43":{"ctx_map":{}},"View44":{"ctx_map":{}},"View45":{"ctx_map":{}},"View54":{"ctx_map":{"extraStyleKeys":[{"id":"backgroundColor","name":""}]}},"View55":{"ctx_map":{}},"View64":{"ctx_map":{}},"View67":{"ctx_map":{}},"View69":{"ctx_map":{}},"Image15":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/28/WA6AEtqaBWx3bAE4N46fzM/记录icon.png","buildToLocal":true}},"Image17":{"ctx_map":{"fop":"e,213,165","src":"u/dev066/2024/02/28/9CXxWGCW5rAsixxc5MP7kJ/视频预览图3x.png","buildToLocal":false}},"Image23":{"ctx_map":{"fop":"e,35,35","src":"u/dev064/2023/02/23/Luz6jBrk6Hp7VfAP5jb9GG/right.png","buildToLocal":true}},"Image36":{"ctx_map":{"fop":"e,300,300","src":"u/dev064/2023/03/16/GtvvEqEPTuYZcdXJANsJ65/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","buildToLocal":true}},"Image39":{"ctx_map":{"fop":"e,640,1386","src":"u/dev065/2023/05/30/BYXydZiGHBW4fihQsbuR9D/bg渐变4x.png","buildToLocal":true}},"Image41":{"ctx_map":{"fop":"e,66,66","src":"u/dev064/2023/06/13/SQVwHBbebGjq9To9maR2iP/SketchPng91211d2d5422050082ff787217ce2d74ff2b0767dfab9239a9a9bba8d6887b42.png"}},"Image42":{"ctx_map":{"fop":"e,420,144","src":"u/dev066/2024/03/02/CYZE2LXxE7KBunmsuPGUua/分组11.png"}},"Image48":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/06/15/evBDWBNhDecBccPbQodLmB/路径4x.png","buildToLocal":true}},"Image49":{"ctx_map":{"fop":"e,120,134","src":"u/dev064/2023/06/14/setkonAEj3x8vYef7xLgaK/mengban.png"}},"Image50":{"ctx_map":{"fop":"e,100,100","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image51":{"ctx_map":{"fop":"e,458,412","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image52":{"ctx_map":{"fop":"e,30,30","src":"u/dev064/2023/06/14/hSL37HxukQ6Fx7bPGgyQKU/close.png"}},"Image57":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/06/15/fuWzwPVUFUsGwKZmKsigsL/路径4x.png","buildToLocal":true}},"Image58":{"ctx_map":{"fop":"e,132,45","src":"u/dev064/2023/06/15/mKJpygPZY26JbxbcUcC97A/编组84x.png"}},"Image61":{"ctx_map":{"fop":"e,50,50","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image62":{"ctx_map":{"fop":"e,50,50","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image63":{"ctx_map":{"fop":"e,1096,1080","src":"u/dev066/2024/02/24/AaXD9rULCiwd3A2g9KLDdG/编组9.png"}},"Image64":{"ctx_map":{"fop":"e,297,96","src":"u/dev066/2024/02/24/682kj4YFwHwBxfiZTc96dQ/编组61.png"}},"Image67":{"ctx_map":{"fop":"e,48,48","src":"u/dev066/2024/02/26/q4LvnER3qXng5x6Hr3F3iA/编组7.png","buildToLocal":true}},"Image69":{"ctx_map":{"fop":"e,35,35","src":"u/dev064/2023/02/23/Luz6jBrk6Hp7VfAP5jb9GG/right.png","buildToLocal":true}},"Image70":{"ctx_map":{"fop":"e,72,72","src":"u/dev066/2024/02/26/n2Ly6X65kV5fukPx38he4h/编组2.png"}},"Image72":{"ctx_map":{"fop":"f,300,300","src":"u/dev064/2023/12/06/TXNhNbbFYKcYwF7eG7unRi/2_objects4x.png","buildToLocal":true}},"Image74":{"ctx_map":{"fop":"e,234,161","src":"u/dev065/2023/05/30/4JcaVF3i3roB6JCYZKA96M/编组394x.png","buildToLocal":true}},"Image75":{"ctx_map":{"fop":"f,300,300","src":"u/dev064/2023/12/08/XobHmtf6hrN49iAX6t3nW8/矩形4x.png","buildToLocal":false}},"Image76":{"ctx_map":{"fop":"e,246,72","src":"u/dev066/2024/02/28/upuC8svbrCHyhBRC6xpNkX/编组33x1.png"}},"Image78":{"ctx_map":{"fop":"e,45,45","src":"u/dev066/2024/02/28/jsiU6ea9TSLDWCYM87B3ER/编组3x2.png"}},"Image79":{"ctx_map":{"fop":"e,72,72","src":"u/dev066/2024/02/26/Vve4UAPEUWFmpg7YTeEBPR/编组83x.png"}},"Image80":{"ctx_map":{"fop":"e,147,147","src":"u/dev066/2024/02/28/RfPCv4RXtYCcd3sVMCsYbd/编组241.png","buildToLocal":true}},"Image81":{"ctx_map":{"fop":"e,147,147","src":"u/dev066/2024/02/28/pXrKhriwpS3ey6QodkbExh/编组24备份1.png","buildToLocal":true}},"Image82":{"ctx_map":{"fop":"e,147,147","src":"u/dev066/2024/02/28/ZZKCVD4GCm8eZdn5nNh8TD/开罐头_icon备份33x.png","buildToLocal":true}},"Image83":{"ctx_map":{"fop":"e,147,147","src":"u/dev066/2024/02/28/joQygvQTgSfgNd9HPqrPQP/摇铃铛_icon备份3x.png","buildToLocal":true}},"Image84":{"ctx_map":{"fop":"e,147,147","src":"u/dev066/2024/02/28/U9c6nTRX8bLP6764aULxEP/编组242.png","buildToLocal":true}},"Image85":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/28/Kh3Ewhau4cMQAQe8GgBmCQ/编组233x.png","buildToLocal":true}},"Image86":{"ctx_map":{"fop":"e,48,48","src":"u/dev066/2024/02/28/EQeZn2qBjXAn3n7UpNKXFC/编组33x2.png"}},"Image87":{"ctx_map":{"fop":"e,108,108","src":"u/dev066/2024/02/29/8mmqsUrb8UtgErvdsN2xsj/编组11备份143x1.png","buildToLocal":true}},"Image88":{"ctx_map":{"fop":"e,60,60","src":"u/dev075/2024/03/01/Z9Nv3AFoKCCeQFqXxbeiZ3/进入icon.png"}},"Image89":{"ctx_map":{"fop":"e,420,144","src":"u/dev066/2024/03/02/gy3fuyeSEsKvutAS9CVahW/分组14.png"}},"Image90":{"ctx_map":{"fop":"e,420,144","src":"u/dev066/2024/03/02/hwymBj5mmyoXg5SCahkUCF/分组12.png"}},"Image91":{"ctx_map":{"fop":"e,420,144","src":"u/dev066/2024/03/02/Qf2ycHghhThTFaS22W2q42/分组15.png"}},"Image92":{"ctx_map":{"fop":"e,420,144","src":"u/dev066/2024/03/02/bSsthfYmJq2dPyzJ8sdM7d/分组16.png"}},"Image93":{"ctx_map":{"fop":"e,420,144","src":"u/dev066/2024/03/02/waFqamsQfDwYBzJPuCh84W/分组13.png"}},"Image94":{"ctx_map":{"fop":"e,108,108","src":"u/dev066/2024/03/02/Epu6CV9WVkdtVGC5KF9ukc/编组11备份93x.png","buildToLocal":true}},"Image95":{"ctx_map":{"fop":"e,108,108","src":"u/dev066/2024/03/02/Xsaa4fqKF9HDNq3ebiRCTi/编组11备份93x1.png","buildToLocal":true}},"Image97":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/28/ipbaLgQ7SQv4XshYpxFkMd/进入icon3x1.png"}},"Image98":{"ctx_map":{"fop":"e,45,45","src":"u/dev066/2024/02/28/jsiU6ea9TSLDWCYM87B3ER/编组3x2.png"}},"Text100":{"ctx_map":{"text":"高清"}},"Text101":{"ctx_map":{"text":"1080P"}},"Text102":{"ctx_map":{"text":"超清"}},"Text103":{"ctx_map":{"text":"2560P"}},"Text104":{"ctx_map":{"text":"非WI-FI播放，请注意流量消耗"}},"Text117":{"ctx_map":{"text":"拍照成功"}},"Text118":{"ctx_map":{"text":"录像"}},"Text119":{"ctx_map":{"text":"视频录制中"}},"Text120":{"ctx_map":{"text":"00:00"}},"Text121":{"ctx_map":{"text":"视频生成中，请稍后查看"}},"Text124":{"ctx_map":{"text":"确认排序"}},"Text125":{"ctx_map":{"text":"这是一个文本组件"}},"Text126":{"ctx_map":{"text":"拖拽下方卡片排序"}},"Text127":{"ctx_map":{"text":"这是一个文本组件"}},"Text128":{"ctx_map":{"text":"画面加载中...","numberOfLines":1}},"Text129":{"ctx_map":{"text":"图片已经保存至本地","numberOfLines":1}},"Text130":{"ctx_map":{"text":"确认","numberOfLines":1}},"Text131":{"ctx_map":{"text":"提示内容"}},"Text133":{"ctx_map":{"text":"塑料音效"}},"Text134":{"ctx_map":{"text":"这是一个文本组件","numberOfLines":1}},"Text135":{"ctx_map":{"text":"这是一个文本组件","numberOfLines":1}},"Text136":{"ctx_map":{"text":"取消","numberOfLines":1}},"Text137":{"ctx_map":{"text":"恢复出粮"}},"Text142":{"ctx_map":{"text":"4"}},"Text143":{"ctx_map":{"text":"出粮"}},"Text144":{"ctx_map":{"text":"4"}},"Text145":{"ctx_map":{"text":"下次"}},"Text148":{"ctx_map":{"text":"自助餐"}},"Text149":{"ctx_map":{"text":"4"}},"Text150":{"ctx_map":{"text":"每份"}},"Text151":{"ctx_map":{"text":"4"}},"Text152":{"ctx_map":{"text":"自动出粮"}},"Text153":{"ctx_map":{"text":"定时出粮"}},"Text154":{"ctx_map":{"text":"视频生成中，请稍后查看"}},"Text155":{"ctx_map":{"text":"-/-","numberOfLines":1}},"Text156":{"ctx_map":{"text":"4"}},"Text157":{"ctx_map":{"text":"计划出粮"}},"Text158":{"ctx_map":{"text":"视频生成中，请稍后查看"}},"Text159":{"ctx_map":{"text":"一键出粮"}},"Text160":{"ctx_map":{"text":"碗里20克"}},"Text161":{"ctx_map":{"text":"诶呀，画面播放失败了...","numberOfLines":1}},"Text162":{"ctx_map":{"text":"重试"}},"Text163":{"ctx_map":{"text":"设备离线，请检查网络","numberOfLines":1}},"Text164":{"ctx_map":{"text":"切换中，请稍后","numberOfLines":1}},"Text165":{"ctx_map":{"text":"非WI-FI播放，请注意流量消耗","numberOfLines":1}},"Text166":{"ctx_map":{"text":"4（正式）"}},"Text167":{"ctx_map":{"text":"设备离线，请检查网络","numberOfLines":1}},"View104":{"ctx_map":{}},"View105":{"ctx_map":{}},"View106":{"ctx_map":{}},"View111":{"ctx_map":{}},"View115":{"ctx_map":{}},"View116":{"ctx_map":{}},"View117":{"ctx_map":{}},"View118":{"ctx_map":{}},"View119":{"ctx_map":{}},"View120":{"ctx_map":{}},"View121":{"ctx_map":{}},"View122":{"ctx_map":{}},"View123":{"ctx_map":{}},"View124":{"ctx_map":{}},"View128":{"ctx_map":{}},"View129":{"ctx_map":{}},"View130":{"ctx_map":{}},"View131":{"ctx_map":{}},"View132":{"ctx_map":{}},"View133":{"ctx_map":{}},"View134":{"ctx_map":{}},"View135":{"ctx_map":{}},"View136":{"ctx_map":{}},"View137":{"ctx_map":{}},"View138":{"ctx_map":{}},"View139":{"ctx_map":{}},"View144":{"ctx_map":{}},"View145":{"ctx_map":{}},"View148":{"ctx_map":{}},"View149":{"ctx_map":{}},"View153":{"ctx_map":{}},"View156":{"ctx_map":{}},"View157":{"ctx_map":{}},"View158":{"ctx_map":{"extraStyleKeys":[{"id":"backgroundColor","name":""}]}},"View163":{"ctx_map":{}},"View164":{"ctx_map":{}},"View165":{"ctx_map":{"extraStyleKeys":[{"id":"backgroundColor","name":""}]}},"View166":{"ctx_map":{}},"View167":{"ctx_map":{}},"View168":{"ctx_map":{}},"View169":{"ctx_map":{}},"View170":{"ctx_map":{}},"View171":{"ctx_map":{}},"View172":{"ctx_map":{}},"View173":{"ctx_map":{}},"View175":{"ctx_map":{}},"View176":{"ctx_map":{}},"View177":{"ctx_map":{}},"View178":{"ctx_map":{}},"View179":{"ctx_map":{}},"View180":{"ctx_map":{}},"View182":{"ctx_map":{}},"View183":{"ctx_map":{}},"View184":{"ctx_map":{}},"View185":{"ctx_map":{}},"View187":{"ctx_map":{}},"View188":{"ctx_map":{}},"View189":{"ctx_map":{}},"View190":{"ctx_map":{}},"View191":{"ctx_map":{}},"View192":{"ctx_map":{}},"View193":{"ctx_map":{}},"View194":{"ctx_map":{}},"View195":{"ctx_map":{}},"View196":{"ctx_map":{}},"View197":{"ctx_map":{}},"View198":{"ctx_map":{}},"View199":{"ctx_map":{"extraStyleKeys":[]}},"View200":{"ctx_map":{}},"View201":{"ctx_map":{}},"View202":{"ctx_map":{}},"View203":{"ctx_map":{}},"View204":{"ctx_map":{}},"View205":{"ctx_map":{}},"View207":{"ctx_map":{}},"View208":{"ctx_map":{}},"View209":{"ctx_map":{}},"View210":{"ctx_map":{}},"View211":{"ctx_map":{}},"View214":{"ctx_map":{}},"View215":{"ctx_map":{}},"View216":{"ctx_map":{}},"View218":{"ctx_map":{}},"View219":{"ctx_map":{}},"View220":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf9":{"ctx_map":{"value":true}},"ViewFor6":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewFor7":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewIf10":{"ctx_map":{"value":true}},"ViewIf13":{"ctx_map":{"value":true}},"ViewIf15":{"ctx_map":{"value":true}},"ViewIf27":{"ctx_map":{"value":true}},"ViewIf30":{"ctx_map":{"value":true}},"ViewIf31":{"ctx_map":{"value":true}},"ViewIf34":{"ctx_map":{"value":true}},"ViewIf35":{"ctx_map":{"value":true}},"ViewIf36":{"ctx_map":{"value":true}},"ViewIf37":{"ctx_map":{"value":true}},"ViewIf38":{"ctx_map":{"value":true}},"ViewIf39":{"ctx_map":{"value":true}},"ViewIf40":{"ctx_map":{"value":true}},"ViewIf41":{"ctx_map":{"value":true}},"ViewIf42":{"ctx_map":{"value":true}},"ViewIf43":{"ctx_map":{"value":true}},"ViewIf44":{"ctx_map":{"value":true}},"ViewIf47":{"ctx_map":{"value":true}},"ViewIf48":{"ctx_map":{"value":true}},"ViewIf49":{"ctx_map":{"value":true}},"ViewIf54":{"ctx_map":{"value":true}},"ViewIf55":{"ctx_map":{"value":true}},"ViewIf56":{"ctx_map":{"value":true}},"ViewIf57":{"ctx_map":{"value":true}},"ViewIf58":{"ctx_map":{"value":true}},"ViewIf59":{"ctx_map":{"value":true}},"ViewIf60":{"ctx_map":{"value":true}},"ViewIf61":{"ctx_map":{"value":true}},"ViewIf63":{"ctx_map":{"value":true}},"ViewIf64":{"ctx_map":{"value":true}},"ViewIf65":{"ctx_map":{"value":true}},"ViewIf67":{"ctx_map":{"value":true}},"ViewIf68":{"ctx_map":{"value":true}},"ViewIf69":{"ctx_map":{"value":true}},"ViewIf70":{"ctx_map":{"value":true}},"ViewIf71":{"ctx_map":{"value":true}},"ViewIf72":{"ctx_map":{"value":true}},"ViewIf73":{"ctx_map":{"value":true}},"ViewIf74":{"ctx_map":{"value":true}},"ViewIf75":{"ctx_map":{"value":true}},"ViewIf76":{"ctx_map":{"value":true}},"ViewIf78":{"ctx_map":{"value":true}},"ViewIf80":{"ctx_map":{"mode":"default","value":true}},"ViewIf82":{"ctx_map":{"mode":"default","value":true}},"ViewIf83":{"ctx_map":{"value":true}},"ViewIf84":{"ctx_map":{"mode":"default","value":true}},"ViewIf85":{"ctx_map":{"mode":"default","value":true}},"ViewIf86":{"ctx_map":{"mode":"default","value":true}},"ViewIf87":{"ctx_map":{"mode":"default","value":true}},"ViewIf88":{"ctx_map":{"mode":"default","value":true}},"ViewIf90":{"ctx_map":{"value":true}},"SvgImage1":{"ctx_map":{"src":"u/dev064/2023/11/18/gZUXBqr7uAeaCMSgxFW4Xc/604651.svg","color":"#ffffff","width":20,"height":20,"SvgImageManage":"SvgImageManage"}},"VLCPlayer1":{"ctx_map":{"src":"","webSrc":"https://live-player2.d2scdn.com/tongzhua_device01/1080p.m3u8"}},"VLCPlayer2":{"ctx_map":{"src":"https://dev064.d2scdn.com/u/dev064/2023/01/09/b5uLZQQUSE5rSCJfvsUBc5/lgWesZDX6NLmg-i1DBaci5o02265.mp4","webSrc":"https://dev064.d2scdn.com/u/dev064/2023/01/09/b5uLZQQUSE5rSCJfvsUBc5/lgWesZDX6NLmg-i1DBaci5o02265.mp4"}},"DwappCloud6":{"ctx_map":{"bool1":true,"text1":"杰瑞的猫碗","color1":"","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud9":{"ctx_map":{}},"ScrollView1":{"ctx_map":{"type":"list","bounces":false,"scrollX":false,"scrollY":true,"showScrollbar":true,"extraStyleKeys":[]}},"ShadowView1":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}},"ShadowView2":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}},"ShadowView9":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}},"DwappCloud13":{"ctx_map":{"style1":null,"numberb1":3,"numberb2":48}},"DwappCloud14":{"ctx_map":{"bool1":true,"style1":null}},"DwappCloud15":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"DwappCloud16":{"ctx_map":{"color1":""}},"ShadowView12":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}},"ShadowView13":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}},"ShadowView14":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}},"ShadowView15":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}},"ShadowView16":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}},"NativeButton1":{"ctx_map":{"type":"button"}}}};
slide.components.DwappCloud6.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  flexDirection: "column",
};
slide.components.DwappCloud13.ctx_map.style1 = {
  width: pm(300),
  height: pm(500),
  flexWrap: "wrap",
  alignItems: "flex-start",
  flexDirection: "row",
  justifyContent: "flex-start",
};
slide.components.DwappCloud14.ctx_map.style1 = {
  width: pm(85),
  height: pm(38),
  flexDirection: "column",
};
slide.components.DwappCloud15.ctx_map.valueStyle = {
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
slide.components.DwappCloud15.ctx_map.containerStyle = {
  width: pm(238),
  marginLeft: pm(41),
  marginRight: pm(41),
  marginBottom: pm(18),
  flexDirection: "column",
  backgroundColor: "#ffffff",
};
slide.components.DwappCloud15.ctx_map.valueInputStyle = {
  color: "#333333",
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-live';

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
      <View /* View168 */   style={styles.xdwe8}>{!!(!!state.device && state.device.data.privacy_state === 'on') /* ViewIf71 */ && (<><View /* View193 */   style={styles.xdw9y}><XbenchcImage /* Image72 */ style={styles.xdw9w} source={dwtools.getLocalResource('xdw9x_lthar0df')}  /></View></>)}
<View /* View111 */   style={styles.xdw9z}></View>
{!!(state.device) /* ViewIf2 */ && (<><Xbenchc176286 /* DwappCloud6 */ isCuzBtn={ slide.components.DwappCloud6.ctx_map.bool1 } eventData={ "device_setting" } eventData2={ slide.components.DwappCloud6.ctx_map.prop2 } title={ state.device.data.name } backgroundColor={ slide.components.DwappCloud6.ctx_map.color1 } backIcon={ slide.components.DwappCloud6.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud6.ctx_map.image2 } titleStyle={ slide.components.DwappCloud6.ctx_map.style1 } screenType={ slide.components.DwappCloud6.ctx_map.select1 }  onClickCuzBtn={getEvent('DwappCloud6:onClickCuzBtn:func23:', {eventData: "device_setting"}, bagForKeyValue, bagForIndex)}>{!!(state.device_member.data.auth !== '3') /* ViewIf27 */ && (<><View /* View104 */   style={styles.xdwa2}><XbenchcImage /* Image36 */ style={styles.xdwa0} source={dwtools.getLocalResource('xdwa1_lthar0dg')}  /></View></>)}</Xbenchc176286></>)}
<XbenchcScrollView /* ScrollView1 */ style={styles.xdwdq} scrollX={ false } scrollY={ !state.isDragging } showScrollbar={ true } bounces={ false } ><View /* View55 */   style={styles.xdwak}>{!!(state.ready) /* ViewIf1 */ && (<>{!!(state.device.data.privacy_state === 'off') /* ViewIf58 */ && (<><View /* View4 */   style={styles.xdwbn}><View /* View132 */   style={[styles.xdwa9, ({
  transform: [
    { scale: state.scale},
    { translateX: state.translateX},
    { translateY: state.translateY},
  ]
})]}>{!!(state.device.data.device_type === 'default') /* ViewIf63 */ && (<>{!!(state.device.data._isAlive) /* ViewIf78 */ && (<>{!!(state.showPlayer) /* ViewIf60 */ && (<><Xbenchc191318 /* DwappCloud9 */   onPanEvent={getEvent('DwappCloud9:onPanEvent:func45:', {}, bagForKeyValue, bagForIndex)}><VLCPlayer style={[styles.xdwa3, ({
  aspectRatio: 16 / 9
})]} source={ {uri: dwtools.qiniu(!!state.device ? state.device.data.push_url_1080 : null)} } paused={ state.videoPause } muted={ state.muted }  onProgress={getEvent('VLCPlayer1:onProgress:func66:', {}, bagForKeyValue, bagForIndex)} onStopped={getEvent('VLCPlayer1:onStopped:onStopped:', {}, bagForKeyValue, bagForIndex)} onPlaying={getEvent('VLCPlayer1:onPlaying:onPlaying:', {}, bagForKeyValue, bagForIndex)}></VLCPlayer></Xbenchc191318></>)}
{!!(state.playStatus === 'wait') /* ViewIf61 */ && (<><View /* View203 */   style={styles.xdwa5}><Text /* Text128 */ style={styles.xdwa4} numberOfLines={1}>{slide.components.Text128.ctx_map.text}</Text></View></>)}
{!!(state.playStatus === 'stop') /* ViewIf76 */ && (<><View /* View202 */   style={styles.xdwa5}><Text /* Text161 */ style={styles.xdwa4} numberOfLines={1}>{slide.components.Text161.ctx_map.text}</Text>
<View /* View201 */   style={styles.xdwa8}><XbenchcButton /* NativeButton1 */ viewStyle={styles.xdwa7} onClick={getEvent('NativeButton1:onClick:switchShow:', {}, bagForKeyValue, bagForIndex)}><Text /* Text162 */ style={styles.xdwa6} >{slide.components.Text162.ctx_map.text}</Text></XbenchcButton></View></View></>)}</>)}</>)}
{!!(state.device.data.device_type === 'virtual') /* ViewIf64 */ && (<><VLCPlayer style={styles.xdwa3} source={ {uri: dwtools.qiniu(state.config.data.virtual_video_url)} } muted={ state.muted } ></VLCPlayer></>)}</View>
<View /* View6 */   style={styles.xdwal}><XbenchcView /* View8 */   viewStyle={styles.xdwab} onClick={getEvent('View8:onClick:func40:', {}, bagForKeyValue, bagForIndex)}><Text /* Text14 */ style={styles.xdwaa} >{["标清", "高清", "超清"][state.videoLevel -1]}</Text></XbenchcView>
<XbenchcView /* View9 */   viewStyle={styles.xdwag} onClick={getEvent('View9:onClick:func43:', {}, bagForKeyValue, bagForIndex)}>{!!(state.scale == 1) /* ViewIf84 */ && (<><XbenchcImage /* Image4 */ style={styles.xdwac} source={dwtools.getLocalResource('xdwad_lthar0dz')}  /></>)}
{!!(state.scale == 2) /* ViewIf85 */ && (<><XbenchcImage /* Image94 */ style={styles.xdwac} source={dwtools.getLocalResource('xdwae_lthar0dz')}  /></>)}
{!!(state.scale == 3) /* ViewIf86 */ && (<><XbenchcImage /* Image95 */ style={styles.xdwac} source={dwtools.getLocalResource('xdwaf_lthar0dz')}  /></>)}</XbenchcView>
<XbenchcView /* View10 */   viewStyle={styles.xdwak} onClick={getEvent('View10:onClick:func12:', {}, bagForKeyValue, bagForIndex)}>{!!(!state.muted) /* ViewIf30 */ && (<><XbenchcImage /* Image5 */ style={styles.xdwah} source={dwtools.getLocalResource('xdwai_lthar0dz')}  /></>)}
{!!(state.muted) /* ViewIf31 */ && (<><XbenchcImage /* Image87 */ style={styles.xdwah} source={dwtools.getLocalResource('xdwaj_lthar0dz')}  /></>)}</XbenchcView></View>
{!!(!!state.messageFlag) /* ViewIf80 */ && (<><View /* View208 */   style={styles.xdwan}><Text /* Text164 */ style={styles.xdwam} numberOfLines={1}>{state.messageContent}</Text></View></>)}
<XbenchcView /* View7 */   viewStyle={styles.xdwap} onClick={getEvent('View7:onClick:func11:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image3 */ style={styles.xdwah} source={dwtools.getLocalResource('xdwao_lthar0dz')}  /></XbenchcView>
<XbenchcView /* View5 */   viewStyle={styles.xdwar} onClick={getEvent('View5:onClick:func2:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image1 */ style={styles.xdwah} source={dwtools.getLocalResource('xdwaq_lthar0dz')}  /></XbenchcView>
{!!(state.videoLevelPop) /* ViewIf34 */ && (<><View /* View115 */   style={styles.xdwaz}><XbenchcView /* View120 */   viewStyle={styles.xdwas} onClick={getEvent('View120:onClick:func40:', {}, bagForKeyValue, bagForIndex)}></XbenchcView>
<View /* View119 */   style={styles.xdway}><View /* View215 */   style={styles.xdwax}><XbenchcView /* View117 */   viewStyle={styles.xdwav} catchClick={getEvent('View117:catchClick:func41:', {eventData: 2}, bagForKeyValue, bagForIndex)}><Text /* Text101 */ style={[styles.xdwat, ({
  color: state.videoLevel === 2 ? '#FFD355' : '#FFFFFF'
})]} >{slide.components.Text101.ctx_map.text}</Text>
<Text /* Text100 */ style={[styles.xdwau, ({
  color: state.videoLevel === 2 ? '#FFD355' : '#FFFFFF'
})]} >{slide.components.Text100.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View116 */   viewStyle={styles.xdwav} catchClick={getEvent('View116:catchClick:func41:', {eventData: 1}, bagForKeyValue, bagForIndex)}><Text /* Text98 */ style={[styles.xdwaw, ({
  color: state.videoLevel === 1 ? '#FFD355' : '#FFFFFF'
})]} >{slide.components.Text98.ctx_map.text}</Text>
<Text /* Text99 */ style={[styles.xdwau, ({
  color: state.videoLevel === 1 ? '#FFD355' : '#FFFFFF'
})]} >{slide.components.Text99.ctx_map.text}</Text></XbenchcView></View></View></View></>)}
{!!(state.scalePop) /* ViewIf36 */ && (<><View /* View123 */   style={styles.xdwaz}><XbenchcView /* View128 */   viewStyle={styles.xdwas} onClick={getEvent('View128:onClick:func43:', {}, bagForKeyValue, bagForIndex)}></XbenchcView>
<View /* View124 */   style={styles.xdwb2}><XbenchcView /* View129 */   viewStyle={styles.xdwb1} onClick={getEvent('View129:onClick:func44:', {eventData: 1}, bagForKeyValue, bagForIndex)}>{!!(state.scale === 1) /* ViewIf37 */ && (<><XbenchcImage /* Image42 */ style={styles.xdwb0} source={dwtools.qiniu(slide.components.Image42.ctx_map.src, slide.components.Image42.ctx_map.fop)}  /></>)}
{!!(state.scale !== 1) /* ViewIf38 */ && (<><XbenchcImage /* Image89 */ style={styles.xdwb0} source={dwtools.qiniu(slide.components.Image89.ctx_map.src, slide.components.Image89.ctx_map.fop)}  /></>)}</XbenchcView>
<XbenchcView /* View130 */   viewStyle={styles.xdwb1} onClick={getEvent('View130:onClick:func44:', {eventData: 2}, bagForKeyValue, bagForIndex)}>{!!(state.scale === 2) /* ViewIf40 */ && (<><XbenchcImage /* Image91 */ style={styles.xdwb0} source={dwtools.qiniu(slide.components.Image91.ctx_map.src, slide.components.Image91.ctx_map.fop)}  /></>)}
{!!(state.scale !== 2) /* ViewIf39 */ && (<><XbenchcImage /* Image90 */ style={styles.xdwb0} source={dwtools.qiniu(slide.components.Image90.ctx_map.src, slide.components.Image90.ctx_map.fop)}  /></>)}</XbenchcView>
<XbenchcView /* View131 */   viewStyle={styles.xdwb1} onClick={getEvent('View131:onClick:func44:', {eventData: 3}, bagForKeyValue, bagForIndex)}>{!!(state.scale === 3) /* ViewIf42 */ && (<><XbenchcImage /* Image92 */ style={styles.xdwb0} source={dwtools.qiniu(slide.components.Image92.ctx_map.src, slide.components.Image92.ctx_map.fop)}  /></>)}
{!!(state.scale !== 3) /* ViewIf41 */ && (<><XbenchcImage /* Image93 */ style={styles.xdwb0} source={dwtools.qiniu(slide.components.Image93.ctx_map.src, slide.components.Image93.ctx_map.fop)}  /></>)}</XbenchcView></View></View></>)}
{!!(state.cellWarnPop) /* ViewIf35 */ && (<><View /* View121 */   style={styles.xdwb5}><XbenchcView /* View122 */   viewStyle={styles.xdwb4} onClick={getEvent('View122:onClick:func42:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image41 */ style={styles.xdwb3} source={dwtools.qiniu(slide.components.Image41.ctx_map.src, slide.components.Image41.ctx_map.fop)}  /></XbenchcView>
<Text /* Text104 */ style={styles.xdwam} >{slide.components.Text104.ctx_map.text}</Text></View></>)}
{!!(state.cameraResPop) /* ViewIf43 */ && (<><View /* View133 */   style={styles.xdwb9}><XbenchcImage /* Image48 */ style={styles.xdwb6} source={dwtools.getLocalResource('xdwb7_lthar0e0')}  />
<Text /* Text117 */ style={styles.xdwb8} >{slide.components.Text117.ctx_map.text}</Text></View>
<XbenchcView /* View134 */   viewStyle={styles.xdwbd} onClick={getEvent('View134:onClick:func47:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image49 */ style={styles.xdwba} source={dwtools.qiniu(slide.components.Image49.ctx_map.src, slide.components.Image49.ctx_map.fop)}  />
<View /* View135 */   style={styles.xdwbc}><XbenchcImage /* Image50 */ style={styles.xdwbb} source={dwtools.qiniu(state.screenShot, slide.components.Image50.ctx_map.fop)}  /></View></XbenchcView></>)}
{!!(state.recording) /* ViewIf47 */ && (<><View /* View144 */   style={styles.xdwbg}><View /* View145 */   style={styles.xdwbe}></View>
<Text /* Text119 */ style={styles.xdwbf} >{slide.components.Text119.ctx_map.text}</Text>
<Text /* Text120 */ style={styles.xdwb8} >{computeds.computed12({}, state)}</Text></View></>)}
{!!(state.RecordResPop) /* ViewIf48 */ && (<><View /* View148 */   style={styles.xdwbi}><XbenchcImage /* Image57 */ style={styles.xdwb6} source={dwtools.getLocalResource('xdwbh_lthar0e0')}  />
<Text /* Text121 */ style={styles.xdwb8} >{slide.components.Text121.ctx_map.text}</Text></View></>)}
{!!(state.speekRecording) /* ViewIf49 */ && (<><View /* View149 */   style={styles.xdwbk}><XbenchcImage /* Image58 */ style={styles.xdwbj} source={dwtools.qiniu(slide.components.Image58.ctx_map.src, slide.components.Image58.ctx_map.fop)}  /></View></>)}
{!!(!state.device.data._isAlive) /* ViewIf70 */ && (<><View /* View192 */   style={styles.xdwbm}><Text /* Text154 */ style={styles.xdwbl} >{computeds.computed13({}, state)}</Text></View></>)}</View></>)}
{!!(state.device.data.privacy_state === 'on') /* ViewIf57 */ && (<><View /* View166 */   style={styles.xdwbr}><XbenchcImage /* Image63 */ style={styles.xdwbo} source={dwtools.qiniu(slide.components.Image63.ctx_map.src, slide.components.Image63.ctx_map.fop)}  />
<XbenchcView /* View167 */   viewStyle={styles.xdwbq} onClick={getEvent('View167:onClick:func11:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image64 */ style={styles.xdwbp} source={dwtools.qiniu(slide.components.Image64.ctx_map.src, slide.components.Image64.ctx_map.fop)}  /></XbenchcView></View>
<View /* View197 */   style={styles.xdwbt}>{!!(!state.device.data._isAlive) /* ViewIf75 */ && (<><Text /* Text158 */ style={styles.xdwbs} >{computeds.computed13({}, state)}</Text></>)}</View></>)}
<View /* View13 */   style={styles.xdwdp}>{!!(state.device.data.privacy_state === 'off') /* ViewIf59 */ && (<><View /* View54 */   style={[styles.xdwc8, ({
  backgroundColor: state.show_all_audio ? "#fff" : "#fafafa"
})]}><Shadow containerStyle={styles.xdwc7} {...(state.rnappShadow)}><View /* View11 */   style={styles.xdwc6}><XbenchcView /* View14 */   viewStyle={styles.xdwby} onClick={getEvent('View14:onClick:func25:', {}, bagForKeyValue, bagForIndex)}><Shadow containerStyle={styles.xdwbw} {...(state.rnappShadow)}><XbenchcImage /* Image80 */ style={[styles.xdwbu, ({
  opacity: state.device.data._isAlive ? 1 : 0.3
})]} source={dwtools.getLocalResource('xdwbv_lthar0e3')}  /></Shadow>
<Text /* Text16 */ style={[styles.xdwbx, ({
  opacity: state.device.data._isAlive ? 1 : 0.3
})]} >{slide.components.Text16.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View139 */   viewStyle={styles.xdwby} onClick={getEvent('View139:onClick:func50:', {}, bagForKeyValue, bagForIndex)}><Shadow containerStyle={styles.xdwbw} {...(state.rnappShadow)}><XbenchcImage /* Image81 */ style={[styles.xdwbu, ({
  opacity: state.device.data._isAlive ? 1 : 0.3
})]} source={dwtools.getLocalResource('xdwbz_lthar0e3')}  /></Shadow>
<Text /* Text118 */ style={[styles.xdwbx, ({
  opacity: state.device.data._isAlive ? 1 : 0.3
})]} >{slide.components.Text118.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View18 */   viewStyle={styles.xdwc2} onClick={getEvent('View18:onClick:func3:', {eventData: "kai_guan_tou.pcm"}, bagForKeyValue, bagForIndex)}><View /* View19 */   style={styles.xdwc1}><XbenchcImage /* Image82 */ style={[styles.xdwbu, ({
  opacity: state.device.data._isAlive ? 1 : 0.3
})]} source={dwtools.getLocalResource('xdwc0_lthar0e3')}  /></View>
<Text /* Text18 */ style={[styles.xdwbx, ({
  opacity: state.device.data._isAlive ? 1 : 0.3
})]} >{slide.components.Text18.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View173 */   viewStyle={styles.xdwc2} onClick={getEvent('View173:onClick:func3:', {eventData: "su_liao_dai.pcm"}, bagForKeyValue, bagForIndex)}><View /* View210 */   style={styles.xdwc1}><XbenchcImage /* Image83 */ style={[styles.xdwbu, ({
  opacity: state.device.data._isAlive ? 1 : 0.3
})]} source={dwtools.getLocalResource('xdwc3_lthar0e3')}  /></View>
<Text /* Text133 */ style={[styles.xdwbx, ({
  opacity: state.device.data._isAlive ? 1 : 0.3
})]} >{slide.components.Text133.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View15 */   viewStyle={styles.xdwc5} onLongPress={getEvent('View15:onLongPress:func35:', {}, bagForKeyValue, bagForIndex)} onPressOut={getEvent('View15:onPressOut:func36:', {}, bagForKeyValue, bagForIndex)}><Shadow containerStyle={styles.xdwbw} {...(state.rnappShadow)}><XbenchcImage /* Image84 */ style={[styles.xdwbu, ({
  opacity: state.device.data._isAlive ? 1 : 0.3
})]} source={dwtools.getLocalResource('xdwc4_lthar0e3')}  /></Shadow>
<Text /* Text17 */ style={[styles.xdwbx, ({
  opacity: state.device.data._isAlive ? 1 : 0.3
})]} >{slide.components.Text17.ctx_map.text}</Text></XbenchcView></View></Shadow></View></>)}
<View /* View207 */   style={styles.xdwcg}>{(computeds.getAlertMessage({}, state)).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor7' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor7 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}>{!!(!!state.foodMessageFlag && bagForItem.message === '粮桶内余粮不足，记得及时补充哦') /* ViewIf87 */ && (<><Shadow containerStyle={styles.xdwce} {...({
  offset: [0, 4],
  distance: 114,
  startColor: 'rgba(0, 0, 0, 0.05)'
})}><View /* View204 */   style={styles.xdwcd}><View /* View209 */   style={styles.xdwav}><XbenchcImage /* Image78 */ style={styles.xdwc9} source={dwtools.qiniu(slide.components.Image78.ctx_map.src, slide.components.Image78.ctx_map.fop)}  />
<View /* View205 */   style={styles.xdwcb}><Text /* Text163 */ style={styles.xdwca} numberOfLines={1}>{bagForItem.message}</Text></View></View>
{!!(bagForItem.message === '粮桶内余粮不足，记得及时补充哦') /* ViewIf83 */ && (<><XbenchcView /* View214 */   viewStyle={styles.xdwcc} onClick={getEvent('View214:onClick:func80:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image88 */ style={styles.xdwc9} source={dwtools.qiniu(slide.components.Image88.ctx_map.src, slide.components.Image88.ctx_map.fop)}  /></XbenchcView></>)}</View></Shadow></>)}
{!!(bagForItem.message !== '粮桶内余粮不足，记得及时补充哦') /* ViewIf88 */ && (<><Shadow containerStyle={styles.xdwce} {...({
  offset: [0, 4],
  distance: 114,
  startColor: 'rgba(0, 0, 0, 0.05)'
})}><View /* View216 */   style={styles.xdwcd}><View /* View219 */   style={styles.xdwav}><XbenchcImage /* Image98 */ style={styles.xdwc9} source={dwtools.qiniu(slide.components.Image98.ctx_map.src, slide.components.Image98.ctx_map.fop)}  />
<View /* View220 */   style={styles.xdwcb}><Text /* Text167 */ style={styles.xdwca} numberOfLines={1}>{bagForItem.message}</Text></View></View>
{!!(bagForItem.message === '干燥剂用尽，请及时更换') /* ViewIf90 */ && (<><XbenchcView /* View218 */   viewStyle={styles.xdwak} onClick={getEvent('View218:onClick:func23:', {eventData: "device_setting"}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image97 */ style={styles.xdwcf} source={dwtools.qiniu(slide.components.Image97.ctx_map.src, slide.components.Image97.ctx_map.fop)}  /></XbenchcView></>)}</View></Shadow></>)}</ViewForItem> })}</View>
<Shadow containerStyle={styles.xdwdf} {...(state.rnappShadow)}><View /* View106 */   style={styles.xdwde}><View /* View26 */   style={styles.xdwd4}><View /* View28 */   style={styles.xdwcw}><View /* View194 */   style={styles.xdwb1}>{!!(state.device.data.auto_feed_type === 'unset') /* ViewIf9 */ && (<><View /* View27 */   style={styles.xdwav}><XbenchcView /* View69 */   viewStyle={styles.xdwav} onClick={getEvent('View69:onClick:func14:', {}, bagForKeyValue, bagForIndex)}><Text /* Text52 */ style={styles.xdwch} >{slide.components.Text52.ctx_map.text}</Text>
<XbenchcImage /* Image23 */ style={styles.xdwci} source={dwtools.getLocalResource('xdwcj_lthar0e4')}  /></XbenchcView></View></>)}
{!!(state.device.data.auto_feed_type === 'timer') /* ViewIf10 */ && (<><View /* View67 */   style={styles.xdwav}><XbenchcView /* View191 */   viewStyle={styles.xdwav} onClick={getEvent('View191:onClick:func14:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image70 */ style={styles.xdwck} source={dwtools.qiniu(slide.components.Image70.ctx_map.src, slide.components.Image70.ctx_map.fop)}  />
<Text /* Text153 */ style={styles.xdwch} >{slide.components.Text153.ctx_map.text}</Text>
<XbenchcImage /* Image69 */ style={styles.xdwci} source={dwtools.getLocalResource('xdwcj_lthar0e4')}  /></XbenchcView></View></>)}
{!!(state.device.data.auto_feed_type === 'buffet') /* ViewIf13 */ && (<><View /* View187 */   style={styles.xdwav}><XbenchcView /* View188 */   viewStyle={styles.xdwav} onClick={getEvent('View188:onClick:func14:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image79 */ style={styles.xdwck} source={dwtools.qiniu(slide.components.Image79.ctx_map.src, slide.components.Image79.ctx_map.fop)}  />
<Text /* Text148 */ style={styles.xdwcl} >{slide.components.Text148.ctx_map.text}</Text>
<XbenchcImage /* Image67 */ style={styles.xdwcm} source={dwtools.getLocalResource('xdwcn_lthar0e4')}  /></XbenchcView></View></>)}
{!!(state.device.data.feed_type === 'cat_food') /* ViewIf72 */ && (<><XbenchcImage /* Image76 */ style={styles.xdwco} source={dwtools.qiniu(slide.components.Image76.ctx_map.src, slide.components.Image76.ctx_map.fop)}  /></>)}</View>
<View /* View64 */   style={styles.xdwcv}><View /* View182 */   style={styles.xdwcs}><View /* View180 */   style={styles.xdwcr}><Text /* Text49 */ style={styles.xdwcp} >{slide.components.Text49.ctx_map.text}</Text>
<Text /* Text166 */ style={[styles.xdwcq, ({
  color: (!state.device.data._isAlive || state.device.data.privacy_state === 'on') ? "#999999" : "#181818"
})]} >{!!state.aggs ? state.aggs.eatWeight + "克" : `0克`}</Text></View>
<View /* View183 */   style={styles.xdwcr}><Text /* Text143 */ style={styles.xdwcp} >{slide.components.Text143.ctx_map.text}</Text>
<Text /* Text142 */ style={[styles.xdwcq, ({
  color: (!state.device.data._isAlive || state.device.data.privacy_state === 'on') ? "#999999" : "#181818"
})]} >{!!state.aggs ? state.aggs.foodWeight + "克" : "0克"}</Text></View></View>
<View /* View184 */   style={styles.xdwb1}>{!!(state.device.data.auto_feed_type !== 'buffet') /* ViewIf68 */ && (<><View /* View195 */   style={styles.xdwcr}><Text /* Text157 */ style={styles.xdwcp} >{slide.components.Text157.ctx_map.text}</Text>
{!!(state.device_member.data.feed_config.timerMode.data.length !== 0) /* ViewIf74 */ && (<><Text /* Text156 */ style={[styles.xdwcq, ({
  color: (!state.device.data._isAlive || state.device.data.privacy_state === 'on') ? "#999999" : "#181818"
})]} >{computeds.computed7({}, state).count_type3 + "/" + state.device_member.data.feed_config.timerMode.data.length}</Text></>)}
{!!(state.device_member.data.feed_config.timerMode.data.length === 0) /* ViewIf73 */ && (<><View /* View196 */   style={styles.xdwcu}><Text /* Text155 */ style={[styles.xdwct, ({
  color: (!state.device.data._isAlive || state.device.data.privacy_state === 'on') ? "#999999" : "#181818"
})]} numberOfLines={1}>{slide.components.Text155.ctx_map.text}</Text></View></>)}</View>
<View /* View185 */   style={styles.xdwcr}><Text /* Text145 */ style={styles.xdwcp} >{slide.components.Text145.ctx_map.text}</Text>
<Text /* Text144 */ style={[styles.xdwcq, ({
  color: (!state.device.data._isAlive || state.device.data.privacy_state === 'on') ? "#999999" : "#181818"
})]} >{computeds.computed8({}, state) ? computeds.computed8({}, state) : "-"}</Text></View></>)}
{!!(state.device.data.auto_feed_type === 'buffet') /* ViewIf69 */ && (<><View /* View190 */   style={styles.xdwcr}><Text /* Text152 */ style={styles.xdwcp} >{slide.components.Text152.ctx_map.text}</Text>
<Text /* Text151 */ style={[styles.xdwcq, ({
  color: (!state.device.data._isAlive || state.device.data.privacy_state === 'on') ? "#999999" : "#181818"
})]} >{computeds.computed7({}, state).count_type4 + "次"}</Text></View>
<View /* View189 */   style={styles.xdwcr}><Text /* Text150 */ style={styles.xdwcp} >{slide.components.Text150.ctx_map.text}</Text>
<Text /* Text149 */ style={[styles.xdwcq, ({
  color: (!state.device.data._isAlive || state.device.data.privacy_state === 'on') ? "#999999" : "#181818"
})]} >{state.device_member.data.feed_config.buffetMode.data.autoOutWeight + "克"}</Text></View></>)}</View></View></View>
<View /* View33 */   style={styles.xdwak}><View /* View200 */   style={styles.xdwd3}><XbenchcView /* View199 */   viewStyle={styles.xdwd2} onClick={getEvent('View199:onClick:func7:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image75 */ style={styles.xdwcx} source={dwtools.qiniu(slide.components.Image75.ctx_map.src, slide.components.Image75.ctx_map.fop)}  />
<Text /* Text160 */ style={styles.xdwcy} >{"碗里" + state.device.data.plate_food_weight + "克"}</Text>
<XbenchcImage /* Image74 */ style={[styles.xdwcz, ({
  opacity: state.device.data._isAlive ? 1 : 0.3
})]} source={dwtools.getLocalResource('xdwd0_lthar0e5')}  />
<Text /* Text159 */ style={[styles.xdwd1, ({
  opacity: state.device.data._isAlive ? 1 : 0.3
})]} >{slide.components.Text159.ctx_map.text}</Text></XbenchcView></View></View></View>
<View /* View36 */   style={styles.xdwd5}></View>
<View /* View37 */   style={styles.xdwdd}><XbenchcView /* View38 */   viewStyle={styles.xdwd9} onClick={getEvent('View38:onClick:func8:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image15 */ style={styles.xdwd6} source={dwtools.getLocalResource('xdwd7_lthar0e5')}  />
<Text /* Text33 */ style={styles.xdwd8} >{slide.components.Text33.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View39 */   viewStyle={styles.xdwd9} onClick={getEvent('View39:onClick:func24:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image85 */ style={styles.xdwd6} source={dwtools.getLocalResource('xdwda_lthar0e5')}  />
{!!(state.device.data.feed_type !== 'cat_food') /* ViewIf15 */ && (<><Text /* Text34 */ style={styles.xdwd8} >{slide.components.Text34.ctx_map.text}</Text></>)}
{!!(state.device.data.feed_type === 'cat_food') /* ViewIf67 */ && (<><Text /* Text137 */ style={styles.xdwdb} >{slide.components.Text137.ctx_map.text}</Text></>)}</XbenchcView>
<View /* View198 */   style={styles.xdwdc}></View></View></View></Shadow>
<Shadow containerStyle={styles.xdwdo} {...(state.rnappShadow)}><XbenchcView /* View105 */   viewStyle={styles.xdwdn} onClick={getEvent('View105:onClick:func10:', {}, bagForKeyValue, bagForIndex)}><View /* View42 */   style={styles.xdwdk}><View /* View43 */   style={styles.xdwdj}><Text /* Text35 */ style={styles.xdwdg} >{slide.components.Text35.ctx_map.text}</Text>
{!!(state.videoCount > 0) /* ViewIf65 */ && (<><View /* View44 */   style={styles.xdwdi}><Text /* Text36 */ style={styles.xdwdh} >{state.videoCount}</Text></View></>)}</View></View>
<View /* View45 */   style={styles.xdwdm}><XbenchcImage /* Image17 */ style={styles.xdwdl} source={dwtools.qiniu(state.video && state.video.data.poster !== 'blank.png' ? state.video.data.poster : 'oss://cos_public/u/qiuzhen/2023/12/06/BHJSGQwLFRzwoyKG2obVXd/编组414x.png?protocol=https&domain=tongzhua-1307793206.cos.ap-shanghai.myqcloud.com&bucket=tongzhua-1307793206', slide.components.Image17.ctx_map.fop)}  /></View></XbenchcView></Shadow></View></>)}</View></XbenchcScrollView>
{!!(state.previewPop) /* ViewIf44 */ && (<><View /* View136 */   style={styles.xdwdx}><View /* View137 */   style={styles.xdwdt}><XbenchcImage /* Image51 */ style={styles.xdwdr} source={dwtools.qiniu(state.screenShot, slide.components.Image51.ctx_map.fop)}  />
<XbenchcView /* View138 */   viewStyle={styles.xdwds} catchClick={getEvent('View138:catchClick:func47:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image52 */ style={styles.xdwah} source={dwtools.qiniu(slide.components.Image52.ctx_map.src, slide.components.Image52.ctx_map.fop)}  /></XbenchcView></View>
<View /* View169 */   style={styles.xdwdw}><Text /* Text129 */ style={styles.xdwdu} numberOfLines={1}>{slide.components.Text129.ctx_map.text}</Text>
<Image /* SvgImage1 */ style={[ styles.xdwdv, { width: pm(20), height: pm(20) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev064/2023/11/18/gZUXBqr7uAeaCMSgxFW4Xc/604651.svg"), width: pm(20), height: pm(20) }} /></View></View></>)}
{!!(state.isDragging) /* ViewIf54 */ && (<><View /* View153 */   style={styles.xdwe7}><View /* View163 */   style={styles.xdwe6}><Text /* Text126 */ style={styles.xdwdy} >{slide.components.Text126.ctx_map.text}</Text>
<View /* View156 */   style={styles.xdwak}><Xbenchc186881 /* DwappCloud13 */ bindData={ state.audio_list } containerStyle={ slide.components.DwappCloud13.ctx_map.style1 } numColumns={ slide.components.DwappCloud13.ctx_map.numberb1 } itemHeight={ slide.components.DwappCloud13.ctx_map.numberb2 }  onDragRelease={getEvent('DwappCloud13:onDragRelease:func56:', {}, bagForKeyValue, bagForIndex)}>{(state.audio_list).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor6' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor6 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View157 */   style={styles.xdwe3}><Xbenchc200739 /* DwappCloud14 */ isShake={ slide.components.DwappCloud14.ctx_map.bool1 } containerStyle={ slide.components.DwappCloud14.ctx_map.style1 } >{!!(bagForIndex < 3) /* ViewIf55 */ && (<><View /* View158 */   style={[styles.xdwe1, ({backgroundColor: bagForItem.data.bg_color})]}><XbenchcImage /* Image61 */ style={styles.xdwdz} source={dwtools.qiniu(bagForItem.data.icon, slide.components.Image61.ctx_map.fop)}  />
<Text /* Text125 */ style={styles.xdwe0} >{bagForItem.data.display_name}</Text></View></>)}
{!!(bagForIndex >= 3) /* ViewIf56 */ && (<><View /* View165 */   style={[styles.xdwe2, ({backgroundColor: bagForItem.data.bg_color})]}><XbenchcImage /* Image62 */ style={styles.xdwdz} source={dwtools.qiniu(bagForItem.data.icon, slide.components.Image62.ctx_map.fop)}  />
<Text /* Text127 */ style={styles.xdwe0} >{bagForItem.data.display_name}</Text></View></>)}</Xbenchc200739></View></ViewForItem> })}</Xbenchc186881></View>
<XbenchcView /* View164 */   viewStyle={styles.xdwe5} onClick={getEvent('View164:onClick:func54:', {}, bagForKeyValue, bagForIndex)}><Text /* Text124 */ style={styles.xdwe4} >{slide.components.Text124.ctx_map.text}</Text></XbenchcView></View></View></>)}</View>
<XbenchcModal /* Modal1 */ rootStyle={styles.xdwef} value={ state.network_timeout } mask={ true } maskClosable={ true }  onValueChange={getEvent('Modal1:onValueChange:func61:', {}, bagForKeyValue, bagForIndex)}><View /* View170 */   style={styles.xdwee}><View /* View172 */   style={styles.xdwea}><Text /* Text131 */ style={styles.xdwe9} >{state.error}</Text></View>
<XbenchcView /* View171 */   viewStyle={styles.xdwed} hoverStyle={styles.xdwec} onClick={getEvent('View171:onClick:func61:', {}, bagForKeyValue, bagForIndex)}><Text /* Text130 */ style={styles.xdweb} numberOfLines={1}>{slide.components.Text130.ctx_map.text}</Text></XbenchcView></View></XbenchcModal>
<XbenchcModal /* Modal2 */ rootStyle={styles.xdwel} value={ state.cat_food_pop } mask={ true } maskClosable={ true }  onValueChange={getEvent('Modal2:onValueChange:func24:', {}, bagForKeyValue, bagForIndex)}><View /* View175 */   style={styles.xdwek}><Text /* Text134 */ style={styles.xdweg} numberOfLines={1}>{!!state.device && state.device.data.feed_type === 'cat_food' ? "你要恢复出粮计划吗？" : "你要暂停出粮计划吗？"}</Text>
<View /* View176 */   style={styles.xdweh}></View>
<XbenchcView /* View179 */   viewStyle={styles.xdwak} onClick={getEvent('View179:onClick:func63:', {}, bagForKeyValue, bagForIndex)}><Text /* Text135 */ style={styles.xdwei} numberOfLines={1}>{!!state.device && state.device.data.feed_type === 'cat_food' ? "恢复当日出粮计划" : "暂停当日出粮计划"}</Text></XbenchcView>
<View /* View177 */   style={styles.xdweh}></View>
<XbenchcView /* View178 */   viewStyle={styles.xdwak} onClick={getEvent('View178:onClick:func24:', {}, bagForKeyValue, bagForIndex)}><Text /* Text136 */ style={styles.xdwej} numberOfLines={1}>{slide.components.Text136.ctx_map.text}</Text></XbenchcView></View></XbenchcModal>
<Xbenchc275104 /* DwappCloud15 */ valueStyle={ slide.components.DwappCloud15.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud15.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud15.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud15:onInit:func67:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104>
    </ErrorBoundary>
  )
}
