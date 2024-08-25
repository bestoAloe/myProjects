
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import { VLCPlayer } from 'react-native-vlc-media-player'
import Xbenchc191318 from '../components/Xbenchc191318'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import ViewForItem from '../../xbench/components/ViewForItem'
import XbenchcScrollView from '../../xbench/xbenchc/components/XbenchcScrollView'
import Xbenchc275104 from '../components/Xbenchc275104'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

let action15lock = null
let client = (null)
const action290 = client
let tick = (null)
const action295 = tick
let ws = (null)
const action296 = ws
let wsTick = (null)
const action297 = wsTick
let recordingTick = (null)
const action292 = recordingTick
let LiveAudioStream = (null)
const action293 = LiveAudioStream
let baseHeight = (0)
const action435 = baseHeight
let modalInstance = (null)
const action464 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action6 = state.device = (null)
  const action28 = state.device_member = (null)
  const action12 = state.showTool = (true)
  const action69 = state.muted = (false)
  const action80 = state.showVoice = (false)
  const action91 = state.audio_list = ([])
  /* action105: 手势操作相关 */
  const action107 = state.scale = (1)
  const action108 = state.baseScale = (1)
  const action109 = state.translateX = (0)
  const action110 = state.translateY = (0)
  const action111 = state.baseTranslateX = (0)
  const action112 = state.baseTranslateY = (0)
  const action156 = state.scalePop = (false)
  /* action146: 清晰度 */
  const action148 = state.videoLevel = (2)
  const action149 = state.videoLevelPop = (false)
  /* action193: 拍照 */
  const action192 = state.screenShot = (null)
  const action194 = state.cameraResPop = (false)
  const action195 = state.previewPop = (false)
  /* action236: 录像相关 */
  const action238 = state.recordSeconds = (0)
  const action237 = state.recording = (false)
  const action239 = state.RecordResPop = (false)
  /* action243: 流量提示 */
  const action244 = state.cellWarnPop = (false)
  /* action265: 实施录音 */
  const action266 = state.speekRecording = (false)
  const action330 = state.mqtt_connect = (false)
  const action361 = state.config = (null)
  const action364 = state.ready = (false)
  const action497 = state.logs = ([])
  return state
}

const action2 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action4 = await (async (store, event) => {
if(dw.platform === 'rnapp'){

  const Dimensions = dw.getNativePackage("Dimensions")
  baseHeight = Dimensions.get('window').width
  console.log("baseHeight", baseHeight)


  const ScreenOrientation = dw.getNativePackage('ScreenOrientation')
  const StatusBar = dw.getNativePackage('StatusBar')
  const SystemNavigationBar = dw.getNativePackage('SystemNavigationBar')
  StatusBar.setHidden(true)
  SystemNavigationBar.navigationHide();
  const result =  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
  return result
}

})(store, event)
  const action7 = await store.dispatch("func1", {})
  const action263 = await Promise.all([
    (async () => {
      const action92 = await store.dispatch("func4", {})
      return action92
    })(),
    (async () => {
      const action264 = await store.dispatch("func39", {})
      return action264
    })(),
    (async () => {
      const action360 = await store.dispatch("func56", {})
      return action360
    })(),
  ])

  const action365 = store.commit('setState', {["state.ready"]: true})
}

const action3 = actions['onHide'] = async function (store, event) {
  const state = store.state
  const action5 = await (async (store, event) => {
if(dw.platform === 'rnapp'){
  const ScreenOrientation = dw.getNativePackage('ScreenOrientation')
  const StatusBar = dw.getNativePackage('StatusBar')
  const SystemNavigationBar = dw.getNativePackage('SystemNavigationBar')
  StatusBar.setHidden(false)
  SystemNavigationBar.navigationShow();
  const result =  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
  return result
}
})(store, event)
}

const action460 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action461 = modalInstance = (event.data)
  const action462 = console.log('[getModalInstance#action462] 打印(modalInstance)', modalInstance)
}

const action8 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action9 = await dw.app.run("device.user_get", {"uuid": dw.query.uuid || "f5892e18-23d7-4903-a044-97094e97c7af"})
  
        if ((action9.status) === ("error")) {
          const action10message = (action9.message || "操作错误！")
          const action10title = ("提示")
          action10message && dw.alert(action10title, action10message)
          return {}
        }
        
  const action11 = store.commit('setState', {["state.device"]: action9.object, ["state.device_member"]: action9.device_member})
  const action502 = dw.getGlobalLocals("device-muted")
  const action503 = store.commit('setState', {["state.muted"]: !!action502 ? true : false})
}

const action13 = actions['func2'] = async function (store, event) {
  const state = store.state
  
      const key = await new Promise(resolve => {
        clearTimeout(action15lock)
        action15lock = setTimeout(async () => {
          resolve(await (async () => {
    const action16 = store.commit('setState', {["state.showTool"]: false})
  
          })())
        }, 5000)
      })
}

const action18 = actions['func3'] = function (store, event) {
  const state = store.state
  if (!!state.ready) {
    return event
  }
  if (state.showTool === false) {
    const action19 = store.commit('setState', {["state.showTool"]: true})
  } else {
    const action26 = store.commit('setState', {["state.showTool"]: false, ["state.showVoice"]: false})
  }
}

const action29 = actions['func25'] = async function (store, event) {
  const state = store.state
  if (state.device.data.device_type === 'virtual') {
    let message = ("虚拟体验暂不支持该功能")
    const action465 = message
    const action466 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    return event
  }
  const action182 = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace('Z', '')
  let now = (action182)
  const action183 = now
  const action509 = ((store, event) => {
//震动
const { Vibration } = require('react-native')
Vibration.vibrate(100);
})(store, event)
  const action184 = await dw.showLoading({
    title: "拍照中",
    mask: false
  })
  const action185 = await dw.app.run("mqtt.send_keyframe_to_cos", {"event_id": Math.random().toString(36).slice(2), "wait_res": true, "start_time": now, "device_member": state.device_member})
  const action186 = await dw.hideLoading()
  
        if ((action185.status) === ("error")) {
          const action187message = (action185.message || "操作错误！")
          const action187title = ("提示")
          action187message && dw.alert(action187title, action187message)
          return {}
        }
        
  /* action188: 图片地址 */
  let filePath = (action185.url)
  const action189 = filePath
  const action190 = store.commit('setState', {["state.screenShot"]: filePath})
  const action191 = await store.dispatch("func46", {})
}

const action168 = actions['func46'] = function (store, event) {
  const state = store.state
  let currentValue = (state.cameraResPop)
  const action169 = currentValue
  const action170 = store.commit('setState', {["state.cameraResPop"]: !state.cameraResPop})
  if (currentValue === false) {
    const action173 = ((store, event) => {
setTimeout(()=>{
  store.dispatch("func46", {})
}, 5000)
})(store, event)
  }
}

const action174 = actions['func47'] = function (store, event) {
  const state = store.state
  const action175 = store.commit('setState', {["state.previewPop"]: !state.previewPop})
}

const action176 = actions['func48'] = async function (store, event) {
  const state = store.state
  /* action177: 下载并添加到相册 */
  if (dw.platform === 'rnapp') {
    const action180 = await (async (store, event) => {
const FileSystem = dw.getNativePackage('FileSystem')
const MediaLibrary = dw.getNativePackage('MediaLibrary')
const Platform = dw.getNativePackage('Platform')

if (Platform.OS === 'android') {
  const { status } = await dw.requestAndroidPermission('android.permission.WRITE_EXTERNAL_STORAGE')
  if (status !== 'granted') return dw.alert('提示', '请授予文件写入权限')
}

if (Platform.OS === 'android') {
  const { status } = await dw.requestAndroidPermission('android.permission.READ_EXTERNAL_STORAGE')
  if (status !== 'granted') return dw.alert('提示', '请授予文件读取权限')
}

if (Platform.OS === 'android') {
  const perms = await MediaLibrary.requestPermissionsAsync();
  if (!perms.granted) {
    return dw.alert('提示', '请授予相册写入权限')
  }
}

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

const action41 = actions['func11'] = async function (store, event) {
  const state = store.state
  if (state.device.data.device_type === 'virtual') {
    let message = ("虚拟体验暂不支持该功能")
    const action468 = message
    const action469 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    return event
  }
  const action42 = await dw.showLoading({
    title: "",
    mask: false
  })
  let status = (state.device.data.privacy_state === 'on' ? 'off' : 'on')
  const action43 = status
  const action44 = console.log('[func11#action44] 打印(status)的返回值', status)
  const action45 = await dw.app.run("mqtt.set_operate_device_camera", {"switchStatus": status, "device_member_uuid": state.device_member.uuid})
  const action46 = await dw.hideLoading()
  
        if ((action45.status) === ("error")) {
          const action47message = (action45.message || "操作错误！")
          const action47title = ("提示")
          action47message && dw.alert(action47title, action47message)
          return {}
        }
        
  let message = (`摄像头已${status === 'off' ? '关闭' : '开启'}`)
  const action471 = message
  const action472 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  const action49 = store.commit('setState', {["state.device.data.privacy_state"]: status})
}

const action54 = actions['func7'] = async function (store, event) {
  const state = store.state
  if (state.device.data.device_type === 'virtual') {
    let message = ("虚拟体验暂不支持该功能")
    const action474 = message
    const action475 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    return event
  }
  const action55 = await dw.showLoading({
    title: "",
    mask: false
  })
  const action56 = await dw.app.run("mqtt.send_app_feed", {"weight": 20, "device_member_uuid": state.device_member.uuid})
  const action57 = await dw.hideLoading()
  
        if ((action56.status) === ("error")) {
          const action58message = (action56.message || "操作错误！")
          const action58title = ("提示")
          action58message && dw.alert(action58title, action58message)
          return {}
        }
        
  let message = ("出粮成功")
  const action477 = message
  const action478 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
}

const action63 = actions['func26'] = async function (store, event) {
  const state = store.state
  const action64 = await dw.navigateBack({delta: 1})
}

const action87 = actions['func4'] = async function (store, event) {
  const state = store.state
  const action88 = await dw.app.run("audio.list", {"limit": 1000, "offset": 0, "filters": {/**/  is_active: true,/**/  data__device_member_uuid: state.device_member.uuid,/**/}, "order_by": []})
  let objects = (action88.objects)
  const action89 = objects
  const action90 = store.commit('setState', {["state.audio_list"]: objects})
}

const action70 = actions['func12'] = async function (store, event) {
  const state = store.state
  const action71 = store.commit('setState', {["state.muted"]: !state.muted})
  /* action166: COMMIT */
  if (state.muted) {
    let message = ("直播画面已静音")
    const action480 = message
    const action481 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  }
  const action504 = dw.setGlobalLocals("device-muted", state.muted)
}

const action81 = actions['func27'] = function (store, event) {
  const state = store.state
  const action82 = store.commit('setState', {["state.showVoice"]: !state.showVoice})
}

const action93 = actions['func28'] = async function (store, event) {
  const state = store.state
  if (state.device.data.device_type === 'virtual') {
    let message = ("虚拟体验暂不支持该功能")
    const action483 = message
    const action484 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    return event
  }
  let fileName = (event.context.eventData)
  const action447 = fileName
  const action448 = await dw.showLoading({
    title: "",
    mask: false
  })
  const action449 = await dw.app.run("mqtt.send_media_play", {"audioName": fileName, "device_member_uuid": state.device_member.uuid})
  const action450 = await dw.hideLoading()
  const action451 = console.log('[func28#action451] action449.message', action449.message)
  const action452 = console.log('[func28#action452] 打印(action449.status)的返回值', action449.status)
  if (action449.status === "error") {
    const action456 = store.commit('setState', {["state.network_timeout"]: true, ["state.error"]: action449.message || "操作错误！"})
    return event
  }
  let message = ("指令下发成功")
  const action486 = message
  const action487 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
}

/* action145: 手势操作相关 */
const action114 = actions['func29'] = function (store, event) {
  const state = store.state
  const action115 = console.log('[func29#action115] event.data.scale', event.data.scale)
  if (event.data.scale === 1) {
    /* action118: 开始捏合 */
    const action119 = store.commit('setState', {["state.baseScale"]: state.scale})
    const action120 = console.log('[func29#action120] 开始捏合', )
  } else {
    /* action122: 捏合的过程 */
    let scale = (event.data.scale * state.baseScale)
    const action123 = scale
    if (scale >= 1) {
      const action126 = store.commit('setState', {["state.scale"]: scale})
    }
  }
}

const action127 = actions['func30'] = function (store, event) {
  const state = store.state
  let _event = (event.data)
  const action379 = _event
  if (state.scale === 1) {
    return event
  }
  /* action383: 只处理单指操作 */
  if (_event.numberOfPointers === 1) {
    let translationX = (_event.translationX)
    const action386 = translationX
    const action387 = console.log('[func30#action387] 打印(translationX)的返回值', translationX)
    let translationY = (_event.translationY)
    const action388 = translationY
    const action389 = console.log('[func30#action389] 打印(translationY)的返回值', translationY)
    if (translationX === 0 && translationY === 0) {
      /* action392: 开始滑动 */
      const action393 = store.commit('setState', {["state.baseTranslateX"]: state.translateX, ["state.baseTranslateY"]: state.translateY})
    } else {
      /* action396: 后续滑动过程 */
      /* action397: 当用户向左滑动时，判断视频组件最右端是否会位于屏幕的最右端左侧，如果是则阻止滑动 */
      /* action398: 以此类推处理向右，上，下的滑动操作。 */
      /* action399: 区域宽度 = pm(750) */
      /* action400: 区域高度 = baseHeight */
      /* action401: 画面宽度 = state.scale * pm(750) */
      /* action402: 画面高度 = state.scale * baseHeight */
      /* action403: 视频中心点相对位置 = (state.scale * state.translateX + pm(750) / 2) , (state.scale * state.translateY + baseHeight / 2) */
      /* action404: 视频右边相对x坐标 = state.scale * state.translateX + pm(750) / 2 + state.scale * pm(750) / 2 */
      /* action405: 视频左边相对x坐标 = state.scale * state.translateX + pm(750) / 2 - state.scale * pm(750) / 2 */
      /* action406: 视频上边相对y坐标 = state.scale * state.translateY + baseHeight / 2 - state.scale * baseHeight / 2 */
      /* action407: 视频下边相对y坐标 = state.scale * state.translateY + baseHeight / 2 + state.scale * baseHeight / 2 */
      let handleX = (true)
      const action408 = handleX
      let handleY = (true)
      const action409 = handleY
      let minTranslateX = ((pm(375) - state.scale * pm(375)) / state.scale)
      const action410 = minTranslateX
      let maxTranslateX = ((state.scale * pm(375) - pm(375)) / state.scale)
      const action411 = maxTranslateX
      let minTranslateY = ((0.5 * baseHeight - state.scale * 0.5 * baseHeight) / state.scale)
      const action412 = minTranslateY
      let maxTranslateY = ((state.scale * 0.5 * baseHeight - 0.5 * baseHeight) / state.scale)
      const action413 = maxTranslateY
      if (state.translateX <= minTranslateX && translationX < 0) {
        const action416 = handleX = (false)
      }
      if (state.translateX >= maxTranslateX && translationX > 0) {
        const action419 = handleX = (false)
      }
      if (state.translateY <= minTranslateY && translationY < 0) {
        const action422 = handleY = (false)
      }
      if (state.translateY >= maxTranslateY && translationY > 0) {
        const action425 = handleY = (false)
      }
      let newTranslateX = (state.baseTranslateX + translationX)
      const action426 = newTranslateX
      let newTranslateY = (state.baseTranslateY + translationY)
      const action427 = newTranslateY
      const action428 = ((store, event) => {
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
        const action431 = store.commit('setState', {["state.translateX"]: newTranslateX})
      }
      if (handleY) {
        const action434 = store.commit('setState', {["state.translateY"]: newTranslateY})
      }
    }
  }
}

/* action155: 视频清晰度 */
const action151 = actions['func40'] = function (store, event) {
  const state = store.state
  const action152 = store.commit('setState', {["state.videoLevelPop"]: !state.videoLevelPop})
}

const action153 = actions['func41'] = async function (store, event) {
  const state = store.state
  const action367 = await dw.showLoading({
    title: "切换中",
    mask: false
  })
  const action368 = await dw.app.run("mqtt.send_push_cmd", {"type": `${event.context.eventData}`, "stream": ["720p", "1080p", "2560p"][event.context.eventData - 1], "wait_resp": true, "device_member_uuid": state.device_member.uuid})
  const action369 = await dw.hideLoading()
  
        if ((action368.status) === ("error")) {
          const action370message = (action368.message + ", 清晰度切换失败")
          const action370title = ("提示")
          action370message && dw.alert(action370title, action370message)
          return {}
        }
        
  const action371 = store.commit('setState', {["state.videoLevel"]: event.context.eventData, ["state.device.data.current_stream"]: ["720p", "1080p", "2560p"][event.context.eventData - 1]})
}

/* action157: 切换大小 */
const action160 = actions['func43'] = function (store, event) {
  const state = store.state
  const action161 = store.commit('setState', {["state.scalePop"]: !state.scalePop})
}

const action158 = actions['func44'] = function (store, event) {
  const state = store.state
  const action159 = store.commit('setState', {["state.scale"]: event.context.eventData, ["state.translateX"]: 0, ["state.translateY"]: 0})
}

const action200 = actions['func50'] = async function (store, event) {
  const state = store.state
  if (state.recording) {
    /* action203: 停止录像 */
    const action204 = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace('Z', '')
    let end = (action204)
    const action205 = end
    const action206 = console.log('[func50#action206] 打印(end)的返回值', end)
    const action207 = (() => {
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
    let start = (action207)
    const action208 = start
    const action209 = console.log('[func50#action209] 打印(start)的返回值', start)
    const action210 = ((store, event) => {
if(recordingTick){
  clearInterval(recordingTick)
}

//震动
const { Vibration } = require('react-native')
Vibration.vibrate(100);
})(store, event)
    const action211 = store.commit('setState', {["state.recordSeconds"]: 0})
    if (state.device_member.data.is_vip) {
      const action214 = await dw.app.run("tool175509.delay_stop_record", {"start_time": start, "device_member_uuid": state.device_member.uuid})
      const action215 = console.log('[func50#action215] 打印(action214)的返回值', action214)
      
        if ((action214.status) === ("error")) {
          const action216message = (action214.message || "操作错误！")
          const action216title = ("提示")
          action216message && dw.alert(action216title, action216message)
          return {}
        }
        
    } else {
      const action218 = await dw.app.run("tc_cloud.stop_record_task", {"as_sync": true, "device_id": state.device.data.device_id})
      const action219 = console.log('[func50#action219] 打印(action218)的返回值', action218)
      
        if ((action218.status) === ("error")) {
          const action220message = (action218.message || "操作错误！")
          const action220title = ("提示")
          action220message && dw.alert(action220title, action220message)
          return {}
        }
        
    }
    const action221 = await store.dispatch("func51", {})
  } else if (!state.recording) {
    const action505 = ((store, event) => {
const { Vibration } = require('react-native')
Vibration.vibrate(100);
})(store, event)
    /* action223: 开始录像 */
    const action224 = ((store, event) => {
recordingTick = setInterval(()=>{
    if(state.recordSeconds > 2700){
      store.dispatch("func50", {})
      return
    }
    store.commit('setState', { ['state.recordSeconds']: state.recordSeconds + 1 })
}, 1000)
})(store, event)
    if (!state.device_member.data.is_vip) {
      const action227 = await dw.app.run("tc_cloud.create_record_task", {"device_id": state.device.data.device_id})
      
        if ((action227.status) === ("error")) {
          const action228message = (action227.message || "操作错误！")
          const action228title = ("提示")
          action228message && dw.alert(action228title, action228message)
          return {}
        }
        
    }
  }
  const action229 = store.commit('setState', {["state.recording"]: !state.recording})
}

const action230 = actions['func51'] = function (store, event) {
  const state = store.state
  let currentValue = (state.RecordResPop)
  const action231 = currentValue
  const action232 = store.commit('setState', {["state.RecordResPop"]: !state.RecordResPop})
  if (currentValue === false) {
    const action235 = ((store, event) => {
setTimeout(()=>{
  store.dispatch("func51", {})
}, 5000)
})(store, event)
  }
}

const action245 = actions['func42'] = function (store, event) {
  const state = store.state
  const action246 = store.commit('setState', {["state.cellWarnPop"]: !state.cellWarnPop})
}

const action247 = actions['func39'] = async function (store, event) {
  const state = store.state
  let networkStrength = (0)
  const action248 = networkStrength
  let networkType = ('cellular')
  const action249 = networkType
  /* action332: IOS不做处理 */
  if (dw.platform === 'rnapp') {
    const action335 = ((store, event) => {
const Platform = dw.getNativePackage('Platform')
return Platform.OS
})(store, event)
    if (action335 === 'ios') {
      return event
    }
  }
  if (dw.platform === 'rnapp') {
    const action252 = await (async (store, event) => {
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
    const action255 = store.commit('setState', {["state.videoLevel"]: 1})
  } else if (networkStrength > 33) {
    const action257 = store.commit('setState', {["state.videoLevel"]: 2})
  }
  if (networkType === 'cellular') {
    const action262 = await store.dispatch("func42", {})
  }
}

/* action268: 录音相关 */
const action273 = actions['func35'] = async function (store, event) {
  const state = store.state
  if (!client) {
    const action276 = await store.dispatch("func52", {})
  }
  const action508 = ((store, event) => {
//震动
const { Vibration } = require('react-native')
Vibration.vibrate(100);
})(store, event)
  if (!LiveAudioStream) {
    const action279 = await store.dispatch("func37", {})
  }
  /* action280: 开始录音 */
  const action281 = ((store, event) => {
if(LiveAudioStream){
  console.log('开始录音！！！！！！！！！！！！！！')
  LiveAudioStream.start()

}
})(store, event)
  const action282 = store.commit('setState', {["state.speekRecording"]: true})
}

const action283 = actions['func36'] = function (store, event) {
  const state = store.state
  const action284 = store.commit('setState', {["state.speekRecording"]: false})
  const action285 = ((store, event) => {
if(LiveAudioStream){
  LiveAudioStream.stop() 
}
})(store, event)
}

const action286 = actions['func37'] = async function (store, event) {
  const state = store.state
  const action287 = await store.dispatch("func38", {})
  const action288 = store.commit('setState', {["state.speekRecording"]: true})
  const action289 = await (async (store, event) => {
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

/* action299: MQTT相关 */
const action325 = actions['func38'] = async function (store, event) {
  const state = store.state
  if (!state.config) {
    const action328 = await dw.app.run("config.get", {})
    const action329 = store.commit('setState', {["state.config"]: action328.object})
  }
}

const action300 = actions['func52'] = async function (store, event) {
  const state = store.state
  const action301 = await store.dispatch("func38", {})
  const action302 = await (async (store, event) => {
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
  await store.dispatch('func54', {})
}

client.onMessageArrived = async (message)=>{
  await store.dispatch('func31', {message})
}

const onConnect = async () => {
  // 连接成功
  await store.dispatch('func53', {})
}

const onFailure = async () => {
  // 连接失败
  await store.dispatch('func54', {})
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

const action303 = actions['func53'] = async function (store, event) {
  const state = store.state
  const action304 = console.log('[func53#action304] 连接成功', )
  let message = ("连接成功")
  const action492 = message
  const action493 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  /* action306: 主题订阅 */
  const action307 = ((store, event) => {
// 主题订阅
client.subscribe('/tongzhua/group01', { qos: 0 })
})(store, event)
  const action308 = store.commit('setState', {["state.mqtt_connect"]: true})
}

const action309 = actions['func54'] = async function (store, event) {
  const state = store.state
  const action310 = console.log('[func54#action310] 连接失败', )
  let message = ("连接失败")
  const action489 = message
  const action490 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
}

const action312 = actions['func55'] = async function (store, event) {
  const state = store.state
  const action313 = console.log('[func55#action313] 连接断开', )
  const action315 = store.commit('setState', {["state.mqtt_connect"]: false})
  const action316 = client = (null)
}

const action317 = actions['func31'] = async function (store, event) {
  const state = store.state
  const action318 = console.log('[func31#action318] 收到消息', event)
  let message = ("收到消息")
  const action495 = message
  const action496 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
}

const action320 = actions['func32'] = function (store, event) {
  const state = store.state
  if (state.mqtt_connect) {
    const action323 = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace('Z', '')
    const action324 = ((store, event) => {
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
  "currentTime": action323.slice(0, 19).replace(/-|:|T/g, "")
}))
message.destinationName = `tongzhua/group01/${state.device.data.device_id}/${action}`
client.send(message)
})(store, event)
  }
}

const action355 = actions['func56'] = async function (store, event) {
  const state = store.state
  if (!state.config) {
    const action358 = await dw.app.run("config.get", {})
    const action359 = store.commit('setState', {["state.config"]: action358.object})
  }
}

const action498 = actions['handleEvents'] = function (store, event) {
  const state = store.state
  const action499 = console.log('[handleEvents#action499] 打印', event)
  const action500 = store.commit('setState', {["state.logs"]: [`${new Date().toISOString()}: ${event.type}`, ...state.logs]})
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

var client = null;
var action290 = client;
var tick = null;
var action295 = tick;
var ws = null;
var action296 = ws;
var wsTick = null;
var action297 = wsTick;
var recordingTick = null;
var action292 = recordingTick;
var LiveAudioStream = null;
var action293 = LiveAudioStream;
var baseHeight = 0;
var action435 = baseHeight;
var modalInstance = null;
var action464 = modalInstance;
/* action145: 手势操作相关 */
/* action155: 视频清晰度 */
/* action157: 切换大小 */
var action196 = actions['computed1'] = function (event, state) {
  return Math.floor(state.scale);
};
// COMPUTED_ACTION_META:computed1 {"deps":["scale"]}

var action240 = actions['computed12'] = function (event, state) {
  var action241 = function (event) {
    var seconds = state.recordSeconds;
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;

    var minutesString = String(minutes).padStart(2, '0');
    var secondsString = String(remainingSeconds).padStart(2, '0');

    return minutesString + ':' + secondsString;
  }(event);
  return action241;
};
// COMPUTED_ACTION_META:computed12 {"deps":["recordSeconds"]}

/* action268: 录音相关 */
/* action299: MQTT相关 */
var action373 = actions['computed13'] = function (event, state) {
  if (!state.device) {
    return null;
  }
  return { /**/'720p': state.device.data.push_url_720, /**/'1080p': state.device.data.push_url_1080, /**/'2560p': state.device.data.push_url_2560 }[state.device.data.current_stream];
};
// COMPUTED_ACTION_META:computed13 {"deps":["device"]}

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').height
const baseWidth = Math.max(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 750) * baseWidth : 0
const styles = StyleSheet.create({
xdwit: {
  width: pm(750),
  height: "100%",
},
xdwiu: {
  flexDirection: "column",
  backgroundColor: "#181818",
},
xdwiv: {
  width: pm(40),
  height: pm(40),
  marginRight: pm(9),
},
xdwix: {
  flexDirection: "column",
},
xdwiy: {
  color: "#ffffff",
  fontSize: pm(18),
  lineHeight: pm(23),
},
xdwiz: {
  alignItems: "center",
  flexDirection: "row",
},
xdwj0: {
  color: "#ffffff",
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdwj1: {
  width: pm(52),
  height: pm(26),
  borderTopWidth: pm(1.5),
  borderTopColor: "#FFFFFF",
  alignItems: "center",
  borderLeftWidth: pm(1.5),
  borderLeftColor: "#FFFFFF",
  borderRightWidth: pm(1.5),
  borderRightColor: "#FFFFFF",
  marginRight: pm(20),
  borderBottomWidth: pm(1.5),
  borderBottomColor: "#FFFFFF",
  flexDirection: "row",
  justifyContent: "center",
  borderTopLeftRadius: pm(12),
  borderTopRightRadius: pm(12),
  borderBottomLeftRadius: pm(12),
  borderBottomRightRadius: pm(12),
},
xdwj2: {
  width: pm(31),
  height: pm(31),
  flexGrow: 0,
  flexShrink: 0,
},
xdwj4: {
  color: "#ffffff",
  fontSize: pm(8),
  alignItems: "center",
  fontWeight: "600",
  lineHeight: pm(15),
  flexDirection: "row",
  justifyContent: "center",
},
xdwj5: {
  width: pm(31),
  height: pm(31),
  position: "absolute",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
},
xdwj6: {
  position: "relative",
  alignItems: "flex-end",
  marginRight: pm(10),
  flexDirection: "row",
},
xdwj7: {
  width: pm(31),
  height: pm(31),
},
xdwja: {
  top: pm(0),
  width: "100%",
  position: "absolute",
  paddingTop: pm(10),
  paddingLeft: pm(12),
  paddingRight: pm(10),
  flexDirection: "row",
  justifyContent: "space-between",
},
xdwjb: {
  width: pm(40),
  height: pm(40),
},
xdwjd: {
  color: "#FFFFFF",
  fontSize: pm(10),
  lineHeight: pm(14),
},
xdwje: {
  alignItems: "center",
  marginBottom: pm(10),
  flexDirection: "column",
},
xdwjg: {
  alignItems: "center",
  marginBottom: pm(9),
  flexDirection: "column",
},
xdwjh: {
  left: pm(0),
  bottom: pm(0),
  position: "absolute",
  paddingLeft: pm(17),
  flexDirection: "column",
  paddingBottom: pm(10),
},
xdwjm: {
  alignItems: "center",
  flexDirection: "column",
},
xdwjn: {
  right: pm(0),
  bottom: pm(0),
  position: "absolute",
  paddingRight: pm(15),
  flexDirection: "column",
  paddingBottom: pm(18),
},
xdwjo: {
  width: pm(27),
  height: pm(27),
  marginRight: pm(14),
},
xdwjp: {
  color: "#ffffff",
  fontSize: pm(11),
  lineHeight: pm(16),
},
xdwjq: {
  alignItems: "center",
  marginBottom: pm(21),
  flexDirection: "row",
},
xdwjr: {
  flex: 1,
  width: "100%",
},
xdwjs: {
  top: pm(0),
  right: pm(0),
  width: pm(144),
  height: "100%",
  flexGrow: 1,
  position: "absolute",
  paddingTop: pm(32),
  paddingLeft: pm(32),
  flexDirection: "column",
  backgroundColor: "#000000cc",
},
xdwjt: {
  width: pm(606),
  height: "100%",
  flexDirection: "column",
},
xdwju: {
  color: "#ffffff",
  fontSize: pm(13),
  fontWeight: "400",
  lineHeight: pm(18),
  marginLeft: pm(24),
  marginRight: pm(17),
},
xdwjv: {
  color: "#ffffff",
  fontSize: pm(13),
  fontWeight: "400",
  lineHeight: pm(18),
},
xdwjw: {
  marginTop: pm(109),
  alignItems: "center",
  paddingLeft: pm(10),
  marginBottom: pm(37),
  flexDirection: "row",
  justifyContent: "flex-start",
},
xdwjx: {
  color: "#ffffff",
  fontSize: pm(13),
  fontWeight: "400",
  lineHeight: pm(18),
  marginLeft: pm(24),
  marginRight: pm(10),
},
xdwjy: {
  alignItems: "center",
  paddingLeft: pm(10),
  marginBottom: pm(37),
  flexDirection: "row",
},
xdwjz: {
  width: pm(144),
  flexDirection: "column",
  backgroundColor: "#000000cc",
},
xdwk0: {
  top: pm(0),
  right: pm(0),
  width: pm(750),
  height: "100%",
  flexGrow: 1,
  position: "absolute",
  flexDirection: "row",
},
xdwk1: {
  width: pm(17),
  height: pm(17),
  marginRight: pm(2),
},
xdwk2: {
  color: "#ffda67",
  fontSize: pm(11),
  lineHeight: pm(24),
},
xdwk3: {
  color: "#ffda67",
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdwk4: {
  color: "#ffffff",
  fontSize: pm(11),
  lineHeight: pm(24),
},
xdwk5: {
  marginBottom: pm(37),
  flexDirection: "row",
},
xdwk6: {
  flexDirection: "row",
},
xdwk7: {
  width: pm(144),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-evenly",
  backgroundColor: "#000000cc",
},
xdwk8: {
  width: pm(12),
  height: pm(12),
  marginRight: pm(3),
},
xdwka: {
  color: "#ffffff",
  fontSize: pm(12),
  lineHeight: pm(17),
},
xdwkb: {
  zIndex: 99999,
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
xdwkc: {
  width: pm(750),
  height: "100%",
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdwkd: {
  width: pm(62),
  height: pm(56),
},
xdwke: {
  width: pm(44),
  height: pm(44),
  borderTopLeftRadius: pm(5),
  borderTopRightRadius: pm(5),
  borderBottomLeftRadius: pm(5),
  borderBottomRightRadius: pm(5),
},
xdwkf: {
  top: pm(6),
  left: pm(13),
  position: "absolute",
  flexDirection: "column",
  borderTopLeftRadius: pm(3),
  borderTopRightRadius: pm(3),
  borderBottomLeftRadius: pm(3),
  borderBottomRightRadius: pm(3),
},
xdwkg: {
  left: pm(55),
  bottom: pm(78),
  position: "absolute",
},
xdwkh: {
  width: pm(369),
  height: pm(277),
},
xdwki: {
  width: pm(33),
  height: pm(33),
},
xdwkj: {
  top: pm(0),
  right: pm(-46),
  position: "absolute",
  flexDirection: "column",
},
xdwkk: {
  width: pm(384),
  height: pm(292),
  position: "relative",
  paddingTop: pm(7),
  paddingLeft: pm(7),
  paddingRight: pm(7),
  flexDirection: "column",
  paddingBottom: pm(7),
  backgroundColor: "#ffffff",
},
xdwkl: {
  width: "100%",
  height: "100%",
  zIndex: 99999,
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#000000cc",
},
xdwkm: {
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
xdwkn: {
  color: "#ffffff",
  fontSize: pm(12),
  lineHeight: pm(17),
  marginRight: pm(5),
},
xdwko: {
  top: pm(8),
  left: pm(292),
  width: pm(166),
  height: pm(37),
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
xdwkq: {
  width: pm(22),
  height: pm(22),
},
xdwkr: {
  width: pm(22),
  height: pm(22),
  flexDirection: "column",
},
xdwks: {
  left: pm(160),
  bottom: pm(18),
  zIndex: 99999,
  position: "absolute",
  alignItems: "center",
  paddingTop: pm(9),
  paddingLeft: pm(9),
  paddingRight: pm(9),
  flexDirection: "row",
  paddingBottom: pm(9),
  backgroundColor: "#00000099",
  borderTopLeftRadius: pm(3),
  borderTopRightRadius: pm(3),
  borderBottomLeftRadius: pm(3),
  borderBottomRightRadius: pm(3),
},
xdwkt: {
  width: pm(49),
  height: pm(18),
  marginRight: pm(3),
},
xdwku: {
  width: pm(98),
  height: pm(37),
  zIndex: 99999,
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
xdwkv: {
  flexGrow: 1,
  flexDirection: "column",
  backgroundColor: "#181818",
}
});
const slide = {"type":"170058","key":"c1700581","slug":null,"randomid":"id_cb0a859d174d1990459c23f7","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":"这是一个文本组件"}},"Text2":{"ctx_map":{"text":"x1"}},"Text3":{"ctx_map":{"text":"流畅"}},"Text4":{"ctx_map":{"text":"录像"}},"Text5":{"ctx_map":{"text":"拍照"}},"Text6":{"ctx_map":{"text":"关闭摄像头"}},"Text7":{"ctx_map":{"text":"实时语音"}},"Text8":{"ctx_map":{"text":"一键出粮"}},"Text9":{"ctx_map":{"text":"罐头音效"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,120,120","src":"u/dev066/2024/02/24/2j3Z73aq6S2gw66gZ9NRQm/编组33x.png","buildToLocal":true}},"Image2":{"ctx_map":{"fop":"e,120,120","src":"u/dev066/2024/02/24/7ow3zADXKHCKxbQTeoHb5D/编组28备份.png","buildToLocal":true}},"Image3":{"ctx_map":{"fop":"e,120,120","src":"u/dev066/2024/02/29/SgUFEaazxCiDNZNLFzMUQY/编组11备份9.png","buildToLocal":true}},"Image4":{"ctx_map":{"fop":"e,120,120","src":"u/dev066/2024/02/24/aTW2AkYqLfP5spsziSVS3h/编组3x.png","buildToLocal":true}},"Image6":{"ctx_map":{"fop":"e,80,80","src":"u/dev064/2023/03/17/DKL2YQicJytTHakDG7rxJa/eye.png","buildToLocal":true}},"Image9":{"ctx_map":{"fop":"e,120,120","src":"u/dev066/2024/02/24/LPWQ3dFS7Ct7UomUyjPZcL/编组9备份3x.png","buildToLocal":true}},"Text10":{"ctx_map":{"text":"这是一个文本组件"}},"Text11":{"ctx_map":{"text":"超清"}},"Text12":{"ctx_map":{"text":"2560P"}},"Text13":{"ctx_map":{"text":"高清"}},"Text14":{"ctx_map":{"text":"1080P"}},"Text15":{"ctx_map":{"text":"标清"}},"Text16":{"ctx_map":{"text":"720P"}},"Text17":{"ctx_map":{"text":"3"}},"Text18":{"ctx_map":{"text":"x"}},"Text19":{"ctx_map":{"text":"3"}},"Text20":{"ctx_map":{"text":"x"}},"Text21":{"ctx_map":{"text":"2"}},"Text22":{"ctx_map":{"text":"x"}},"Text23":{"ctx_map":{"text":"2"}},"Text24":{"ctx_map":{"text":"x"}},"Text25":{"ctx_map":{"text":"1"}},"Text26":{"ctx_map":{"text":"x"}},"Text27":{"ctx_map":{"text":"1"}},"Text28":{"ctx_map":{"text":"x"}},"Text29":{"ctx_map":{"text":"拍照成功"}},"Text30":{"ctx_map":{"text":"00:00"}},"Text31":{"ctx_map":{"text":"视频录制中"}},"Text32":{"ctx_map":{"text":"视频生成中，请稍后查看"}},"Text33":{"ctx_map":{"text":"非WI-FI播放，请注意流量消耗"}},"Text34":{"ctx_map":{"text":"塑料音效"}},"Text35":{"ctx_map":{"text":"x","numberOfLines":1}},"Text36":{"ctx_map":{"text":"加载中","numberOfLines":1}},"Text37":{"ctx_map":{"text":"x1"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"View20":{"ctx_map":{}},"View21":{"ctx_map":{}},"View22":{"ctx_map":{}},"View23":{"ctx_map":{}},"View24":{"ctx_map":{}},"View25":{"ctx_map":{}},"View26":{"ctx_map":{}},"View27":{"ctx_map":{}},"View28":{"ctx_map":{}},"View29":{"ctx_map":{}},"View30":{"ctx_map":{}},"View32":{"ctx_map":{}},"View33":{"ctx_map":{}},"View34":{"ctx_map":{}},"View35":{"ctx_map":{}},"View36":{"ctx_map":{}},"View37":{"ctx_map":{}},"View38":{"ctx_map":{}},"View39":{"ctx_map":{}},"View40":{"ctx_map":{}},"View41":{"ctx_map":{}},"View42":{"ctx_map":{}},"View44":{"ctx_map":{}},"View45":{"ctx_map":{}},"View46":{"ctx_map":{}},"View47":{"ctx_map":{}},"View48":{"ctx_map":{}},"View49":{"ctx_map":{}},"View50":{"ctx_map":{}},"View51":{"ctx_map":{}},"View52":{"ctx_map":{}},"View53":{"ctx_map":{}},"View54":{"ctx_map":{}},"View55":{"ctx_map":{}},"Image10":{"ctx_map":{"fop":"e,80,80","src":"u/dev066/2024/02/24/qJP46yUEyDAQtcFs5stqYL/编组28备份2x.png","buildToLocal":true}},"Image11":{"ctx_map":{"fop":"e,300,300","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image12":{"ctx_map":{"fop":"e,50,50","src":"u/dev064/2023/06/14/BPPEyaJFu4cfZKnTmG7GNK/scale3.png"}},"Image13":{"ctx_map":{"fop":"e,50,50","src":"u/dev064/2023/06/14/kTWsBGpZ88TXm2VPb7pPB2/yellowscale.png"}},"Image14":{"ctx_map":{"fop":"e,50,50","src":"u/dev064/2023/06/14/BPPEyaJFu4cfZKnTmG7GNK/scale3.png"}},"Image15":{"ctx_map":{"fop":"e,50,50","src":"u/dev064/2023/06/14/kTWsBGpZ88TXm2VPb7pPB2/yellowscale.png"}},"Image16":{"ctx_map":{"fop":"e,50,50","src":"u/dev064/2023/06/14/BPPEyaJFu4cfZKnTmG7GNK/scale3.png"}},"Image17":{"ctx_map":{"fop":"e,50,50","src":"u/dev064/2023/06/14/kTWsBGpZ88TXm2VPb7pPB2/yellowscale.png"}},"Image18":{"ctx_map":{"fop":"e,100,100","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image19":{"ctx_map":{"fop":"e,124,112","src":"u/dev064/2023/06/25/2W7bzJe6jioUPXh5Un2VNJ/编组44444444x.png"}},"Image20":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/06/15/evBDWBNhDecBccPbQodLmB/路径4x.png","buildToLocal":true}},"Image21":{"ctx_map":{"fop":"e,70,70","src":"u/dev064/2023/06/14/hSL37HxukQ6Fx7bPGgyQKU/close.png"}},"Image22":{"ctx_map":{"fop":"e,458,412","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image23":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/06/15/fuWzwPVUFUsGwKZmKsigsL/路径4x.png","buildToLocal":true}},"Image24":{"ctx_map":{"fop":"e,66,66","src":"u/dev064/2023/06/13/SQVwHBbebGjq9To9maR2iP/SketchPng91211d2d5422050082ff787217ce2d74ff2b0767dfab9239a9a9bba8d6887b42.png"}},"Image25":{"ctx_map":{"fop":"e,132,45","src":"u/dev064/2023/06/15/mKJpygPZY26JbxbcUcC97A/编组84x.png"}},"Image27":{"ctx_map":{"fop":"e,120,120","src":"u/dev066/2024/02/24/KXq6Nbfnxa9BQNc3UyHS6C/编组3备份3x.png","buildToLocal":true}},"Image28":{"ctx_map":{"fop":"e,120,120","src":"u/dev066/2024/02/24/RQquUiTqqFgmEjUtARUrFQ/编组93x.png","buildToLocal":true}},"Image29":{"ctx_map":{"fop":"e,120,120","src":"u/dev066/2024/02/24/h9euQypd9qw2womsDpCeL7/编组备份3x.png","buildToLocal":true}},"Image30":{"ctx_map":{"fop":"e,120,120","src":"u/dev066/2024/02/24/EYJEAgWqXZmhng2jqqCoE5/编组73x.png","buildToLocal":true}},"Image31":{"ctx_map":{"fop":"e,108,108","src":"u/dev066/2024/02/28/yHzwvfFFLtQiWDhhzZdEF9/编组11备份9.png","buildToLocal":true}},"Image32":{"ctx_map":{"fop":"e,108,108","src":"u/dev066/2024/02/29/8mmqsUrb8UtgErvdsN2xsj/编组11备份143x1.png","buildToLocal":true}},"Image33":{"ctx_map":{"fop":"e,108,108","src":"u/dev066/2024/02/28/dFaS3ghckqPMFNZbiCNML6/编组11备份143x.png","buildToLocal":true}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewIf5":{"ctx_map":{"value":true}},"ViewIf6":{"ctx_map":{"value":true}},"ViewIf7":{"ctx_map":{"value":true}},"ViewIf8":{"ctx_map":{"value":true}},"ViewIf9":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewIf10":{"ctx_map":{"value":true}},"ViewIf11":{"ctx_map":{"value":true}},"ViewIf12":{"ctx_map":{"value":true}},"ViewIf13":{"ctx_map":{"value":true}},"ViewIf14":{"ctx_map":{"value":true}},"ViewIf15":{"ctx_map":{"value":true}},"ViewIf16":{"ctx_map":{"value":true}},"ViewIf17":{"ctx_map":{"value":true}},"ViewIf18":{"ctx_map":{"value":true}},"ViewIf19":{"ctx_map":{"value":true}},"ViewIf20":{"ctx_map":{"value":true}},"ViewIf21":{"ctx_map":{"value":true}},"ViewIf22":{"ctx_map":{"value":true}},"ViewIf23":{"ctx_map":{"value":true}},"ViewIf24":{"ctx_map":{"value":true}},"VLCPlayer1":{"ctx_map":{"src":"u/linliguang/2022/10/14/FAXKyF6Doa2RZySo4X6CSG/test2.mp4","webSrc":"u/linliguang/2022/10/14/FAXKyF6Doa2RZySo4X6CSG/test2.mp4"}},"VLCPlayer2":{"ctx_map":{"src":"u/linliguang/2022/10/14/FAXKyF6Doa2RZySo4X6CSG/test2.mp4","webSrc":"u/linliguang/2022/10/14/FAXKyF6Doa2RZySo4X6CSG/test2.mp4"}},"DwappCloud1":{"ctx_map":{}},"DwappCloud2":{"ctx_map":{}},"DwappCloud3":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"DwappCloud4":{"ctx_map":{"range1":"40px","select1":"1"}},"ScrollView1":{"ctx_map":{"type":"list","scrollY":true,"showScrollbar":false}}}};
slide.components.DwappCloud3.ctx_map.valueStyle = {
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
slide.components.DwappCloud3.ctx_map.containerStyle = {
  marginBottom: pm(18),
  flexDirection: "column",
};
slide.components.DwappCloud3.ctx_map.valueInputStyle = {
  color: "#333333",
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-live_fullscreen';

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
      <XbenchcView /* View1 */   viewStyle={styles.xdwkv} onClick={getEvent('View1:onClick:func3:', {}, bagForKeyValue, bagForIndex)}>{!!(state.ready) /* ViewIf1 */ && (<><View /* View19 */   style={[styles.xdwiu, ({
  transform: [
    { scale: state.scale},
    { translateX: state.translateX},
    { translateY: state.translateY},
  ]
})]}>{!!(state.device.data.device_type === 'default') /* ViewIf20 */ && (<><Xbenchc191318 /* DwappCloud1 */   onPinchEvent={getEvent('DwappCloud1:onPinchEvent:func29:', {}, bagForKeyValue, bagForIndex)} onPanEvent={getEvent('DwappCloud1:onPanEvent:func30:', {}, bagForKeyValue, bagForIndex)}><VLCPlayer style={styles.xdwit} source={ {uri: dwtools.qiniu(!!state.device ? state.device.data.push_url_1080 : null)} } muted={ state.muted } ></VLCPlayer></Xbenchc191318></>)}
{!!(state.device.data.device_type === 'virtual') /* ViewIf21 */ && (<><Xbenchc191318 /* DwappCloud2 */   onPinchEvent={getEvent('DwappCloud2:onPinchEvent:func29:', {}, bagForKeyValue, bagForIndex)} onPanEvent={getEvent('DwappCloud2:onPanEvent:func30:', {}, bagForKeyValue, bagForIndex)}><VLCPlayer style={styles.xdwit} source={ {uri: dwtools.qiniu(state.config.data.virtual_video_url)} } muted={ state.muted } ></VLCPlayer></Xbenchc191318></>)}</View>
{!!(state.showTool) /* ViewIf2 */ && (<><View /* View2 */   style={styles.xdwja}><View /* View3 */   style={styles.xdwiz}><XbenchcView /* View5 */   viewStyle={styles.xdwix} catchClick={getEvent('View5:catchClick:func26:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image1 */ style={styles.xdwiv} source={dwtools.getLocalResource('xdwiw_lthar0ii')}  /></XbenchcView>
<Text /* Text1 */ style={styles.xdwiy} >{state.device.data.name}</Text></View>
<View /* View4 */   style={styles.xdwiz}><XbenchcView /* View8 */   viewStyle={styles.xdwj1} catchClick={getEvent('View8:catchClick:func40:', {}, bagForKeyValue, bagForIndex)}><Text /* Text3 */ style={styles.xdwj0} >{["标清", "高清", "超清"][state.videoLevel -1]}</Text></XbenchcView>
<XbenchcView /* View53 */   viewStyle={styles.xdwj6} onClick={getEvent('View53:onClick:func43:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image31 */ style={styles.xdwj2} source={dwtools.getLocalResource('xdwj3_lthar0ii')}  />
<View /* View54 */   style={styles.xdwj5}><Text /* Text37 */ style={styles.xdwj4} >{computeds.computed1({}, state)}</Text></View></XbenchcView>
<XbenchcView /* View55 */   viewStyle={styles.xdwix} onClick={getEvent('View55:onClick:func12:', {}, bagForKeyValue, bagForIndex)}>{!!(!state.muted) /* ViewIf24 */ && (<><XbenchcImage /* Image33 */ style={styles.xdwj7} source={dwtools.getLocalResource('xdwj8_lthar0ij')}  /></>)}
{!!(state.muted) /* ViewIf23 */ && (<><XbenchcImage /* Image32 */ style={styles.xdwj7} source={dwtools.getLocalResource('xdwj9_lthar0ij')}  /></>)}</XbenchcView></View></View>
<View /* View9 */   style={styles.xdwjh}><XbenchcView /* View10 */   viewStyle={styles.xdwje} catchClick={getEvent('View10:catchClick:func50:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image4 */ style={styles.xdwjb} source={dwtools.getLocalResource('xdwjc_lthar0ij')}  />
<Text /* Text4 */ style={styles.xdwjd} >{slide.components.Text4.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View11 */   viewStyle={styles.xdwjg} catchClick={getEvent('View11:catchClick:func25:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image27 */ style={styles.xdwjb} source={dwtools.getLocalResource('xdwjf_lthar0ij')}  />
<Text /* Text5 */ style={styles.xdwjd} >{slide.components.Text5.ctx_map.text}</Text></XbenchcView></View>
<View /* View13 */   style={styles.xdwjn}><XbenchcView /* View16 */   viewStyle={styles.xdwje} catchClick={getEvent('View16:catchClick:func28:', {eventData: "kai_guan_tou.pcm"}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image9 */ style={styles.xdwjb} source={dwtools.getLocalResource('xdwji_lthar0ij')}  />
<Text /* Text9 */ style={styles.xdwjd} >{slide.components.Text9.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View50 */   viewStyle={styles.xdwje} catchClick={getEvent('View50:catchClick:func28:', {eventData: "su_liao_dai.pcm"}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image28 */ style={styles.xdwjb} source={dwtools.getLocalResource('xdwjj_lthar0ij')}  />
<Text /* Text34 */ style={styles.xdwjd} >{slide.components.Text34.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View15 */   viewStyle={styles.xdwje} catchClick={getEvent('View15:catchClick:func7:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image29 */ style={styles.xdwjb} source={dwtools.getLocalResource('xdwjk_lthar0ij')}  />
<Text /* Text8 */ style={styles.xdwjd} >{slide.components.Text8.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View14 */   viewStyle={styles.xdwjm} onLongPress={getEvent('View14:onLongPress:func35:', {}, bagForKeyValue, bagForIndex)} onPressOut={getEvent('View14:onPressOut:func36:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image30 */ style={styles.xdwjb} source={dwtools.getLocalResource('xdwjl_lthar0ij')}  />
<Text /* Text7 */ style={styles.xdwjd} >{slide.components.Text7.ctx_map.text}</Text></XbenchcView></View></>)}
{!!(state.showVoice) /* ViewIf5 */ && (<><View /* View17 */   style={styles.xdwjs}><XbenchcScrollView /* ScrollView1 */ style={styles.xdwjr} scrollY={ true } showScrollbar={ false } >{(state.audio_list).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><XbenchcView /* View18 */   viewStyle={styles.xdwjq} catchClick={getEvent('View18:catchClick:func28:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image11 */ style={styles.xdwjo} source={dwtools.qiniu(bagForItem.data.icon, slide.components.Image11.ctx_map.fop)}  />
<Text /* Text10 */ style={styles.xdwjp} >{bagForItem.data.display_name}</Text></XbenchcView></ViewForItem> })}</XbenchcScrollView></View></>)}
{!!(state.videoLevelPop) /* ViewIf6 */ && (<><View /* View20 */   style={styles.xdwk0}><XbenchcView /* View25 */   viewStyle={styles.xdwjt} catchClick={getEvent('View25:catchClick:func40:', {}, bagForKeyValue, bagForIndex)}></XbenchcView>
<View /* View21 */   style={styles.xdwjz}><XbenchcView /* View24 */   viewStyle={styles.xdwjw} catchClick={getEvent('View24:catchClick:func41:', {eventData: 1}, bagForKeyValue, bagForIndex)}><Text /* Text16 */ style={[styles.xdwju, ({
  color: state.videoLevel === 1 ? '#FFDA67' : '#FFFFFF'
})]} >{slide.components.Text16.ctx_map.text}</Text>
<Text /* Text15 */ style={[styles.xdwjv, ({
  color: state.videoLevel === 1 ? '#FFDA67' : '#FFFFFF'
})]} >{slide.components.Text15.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View23 */   viewStyle={styles.xdwjy} catchClick={getEvent('View23:catchClick:func41:', {eventData: 2}, bagForKeyValue, bagForIndex)}><Text /* Text14 */ style={[styles.xdwjx, ({
  color: state.videoLevel === 2 ? '#FFDA67' : '#FFFFFF'
})]} >{slide.components.Text14.ctx_map.text}</Text>
<Text /* Text13 */ style={[styles.xdwjv, ({
  color: state.videoLevel === 2 ? '#FFDA67' : '#FFFFFF'
})]} >{slide.components.Text13.ctx_map.text}</Text></XbenchcView></View></View></>)}
{!!(state.scalePop) /* ViewIf7 */ && (<><View /* View26 */   style={styles.xdwk0}><XbenchcView /* View32 */   viewStyle={styles.xdwjt} catchClick={getEvent('View32:catchClick:func43:', {}, bagForKeyValue, bagForIndex)}></XbenchcView>
<View /* View27 */   style={styles.xdwk7}><View /* View33 */   style={styles.xdwix}><XbenchcView /* View30 */   viewStyle={styles.xdwk5} catchClick={getEvent('View30:catchClick:func44:', {eventData: 1}, bagForKeyValue, bagForIndex)}>{!!(state.scale === 1) /* ViewIf13 */ && (<><XbenchcImage /* Image17 */ style={styles.xdwk1} source={dwtools.qiniu(slide.components.Image17.ctx_map.src, slide.components.Image17.ctx_map.fop)}  />
<Text /* Text28 */ style={styles.xdwk2} >{slide.components.Text28.ctx_map.text}</Text>
<Text /* Text27 */ style={styles.xdwk3} >{slide.components.Text27.ctx_map.text}</Text></>)}
{!!(state.scale !== 1) /* ViewIf12 */ && (<><XbenchcImage /* Image16 */ style={styles.xdwk1} source={dwtools.qiniu(slide.components.Image16.ctx_map.src, slide.components.Image16.ctx_map.fop)}  />
<Text /* Text26 */ style={styles.xdwk4} >{slide.components.Text26.ctx_map.text}</Text>
<Text /* Text25 */ style={styles.xdwj0} >{slide.components.Text25.ctx_map.text}</Text></>)}</XbenchcView>
<XbenchcView /* View29 */   viewStyle={styles.xdwk5} catchClick={getEvent('View29:catchClick:func44:', {eventData: 2}, bagForKeyValue, bagForIndex)}>{!!(state.scale === 2) /* ViewIf11 */ && (<><XbenchcImage /* Image15 */ style={styles.xdwk1} source={dwtools.qiniu(slide.components.Image15.ctx_map.src, slide.components.Image15.ctx_map.fop)}  />
<Text /* Text24 */ style={styles.xdwk2} >{slide.components.Text24.ctx_map.text}</Text>
<Text /* Text23 */ style={styles.xdwk3} >{slide.components.Text23.ctx_map.text}</Text></>)}
{!!(state.scale !== 2) /* ViewIf10 */ && (<><XbenchcImage /* Image14 */ style={styles.xdwk1} source={dwtools.qiniu(slide.components.Image14.ctx_map.src, slide.components.Image14.ctx_map.fop)}  />
<Text /* Text22 */ style={styles.xdwk4} >{slide.components.Text22.ctx_map.text}</Text>
<Text /* Text21 */ style={styles.xdwj0} >{slide.components.Text21.ctx_map.text}</Text></>)}</XbenchcView>
<XbenchcView /* View28 */   viewStyle={styles.xdwk6} catchClick={getEvent('View28:catchClick:func44:', {eventData: 3}, bagForKeyValue, bagForIndex)}>{!!(state.scale === 3) /* ViewIf9 */ && (<><XbenchcImage /* Image13 */ style={styles.xdwk1} source={dwtools.qiniu(slide.components.Image13.ctx_map.src, slide.components.Image13.ctx_map.fop)}  />
<Text /* Text20 */ style={styles.xdwk2} >{slide.components.Text20.ctx_map.text}</Text>
<Text /* Text19 */ style={styles.xdwk3} >{slide.components.Text19.ctx_map.text}</Text></>)}
{!!(state.scale !== 3) /* ViewIf8 */ && (<><XbenchcImage /* Image12 */ style={styles.xdwk1} source={dwtools.qiniu(slide.components.Image12.ctx_map.src, slide.components.Image12.ctx_map.fop)}  />
<Text /* Text18 */ style={styles.xdwk4} >{slide.components.Text18.ctx_map.text}</Text>
<Text /* Text17 */ style={styles.xdwj0} >{slide.components.Text17.ctx_map.text}</Text></>)}</XbenchcView></View></View></View></>)}
{!!(state.cameraResPop) /* ViewIf14 */ && (<><View /* View37 */   style={styles.xdwkc}><View /* View36 */   style={styles.xdwkb}><XbenchcImage /* Image20 */ style={styles.xdwk8} source={dwtools.getLocalResource('xdwk9_lthar0il')}  />
<Text /* Text29 */ style={styles.xdwka} >{slide.components.Text29.ctx_map.text}</Text></View></View>
<XbenchcView /* View34 */   viewStyle={styles.xdwkg} catchClick={getEvent('View34:catchClick:func47:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image19 */ style={styles.xdwkd} source={dwtools.qiniu(slide.components.Image19.ctx_map.src, slide.components.Image19.ctx_map.fop)}  />
<View /* View35 */   style={styles.xdwkf}><XbenchcImage /* Image18 */ style={styles.xdwke} source={dwtools.qiniu(state.screenShot, slide.components.Image18.ctx_map.fop)}  /></View></XbenchcView></>)}
{!!(state.previewPop) /* ViewIf15 */ && (<><View /* View38 */   style={styles.xdwkl}><XbenchcView /* View39 */   viewStyle={styles.xdwkk} onClick={getEvent('View39:onClick:func48:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image22 */ style={styles.xdwkh} source={dwtools.qiniu(state.screenShot, slide.components.Image22.ctx_map.fop)}  />
<XbenchcView /* View40 */   viewStyle={styles.xdwkj} catchClick={getEvent('View40:catchClick:func47:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image21 */ style={styles.xdwki} source={dwtools.qiniu(slide.components.Image21.ctx_map.src, slide.components.Image21.ctx_map.fop)}  /></XbenchcView></XbenchcView></View></>)}
{!!(state.recording) /* ViewIf16 */ && (<><View /* View41 */   style={styles.xdwko}><View /* View42 */   style={styles.xdwkm}></View>
<Text /* Text31 */ style={styles.xdwkn} >{slide.components.Text31.ctx_map.text}</Text>
<Text /* Text30 */ style={styles.xdwka} >{computeds.computed12({}, state)}</Text></View></>)}
{!!(state.RecordResPop) /* ViewIf17 */ && (<><View /* View45 */   style={styles.xdwkc}><View /* View44 */   style={styles.xdwkb}><XbenchcImage /* Image23 */ style={styles.xdwk8} source={dwtools.getLocalResource('xdwkp_lthar0il')}  />
<Text /* Text32 */ style={styles.xdwka} >{slide.components.Text32.ctx_map.text}</Text></View></View></>)}
{!!(state.cellWarnPop) /* ViewIf18 */ && (<><View /* View46 */   style={styles.xdwks}><XbenchcView /* View47 */   viewStyle={styles.xdwkr} catchClick={getEvent('View47:catchClick:func42:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image24 */ style={styles.xdwkq} source={dwtools.qiniu(slide.components.Image24.ctx_map.src, slide.components.Image24.ctx_map.fop)}  /></XbenchcView>
<Text /* Text33 */ style={styles.xdwka} >{slide.components.Text33.ctx_map.text}</Text></View></>)}
{!!(state.speekRecording) /* ViewIf19 */ && (<><View /* View49 */   style={styles.xdwkc}><View /* View48 */   style={styles.xdwku}><XbenchcImage /* Image25 */ style={styles.xdwkt} source={dwtools.qiniu(slide.components.Image25.ctx_map.src, slide.components.Image25.ctx_map.fop)}  /></View></View></>)}
<Xbenchc275104 /* DwappCloud3 */ valueStyle={ slide.components.DwappCloud3.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud3.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud3.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud3:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104></>)}</XbenchcView>
    </ErrorBoundary>
  )
}
