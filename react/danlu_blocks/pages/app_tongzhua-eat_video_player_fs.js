
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import { Video } from 'expo-av'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import { Image } from 'expo-image'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import Xbenchc176689 from '../components/Xbenchc176689'
import ViewForItem from '../../xbench/components/ViewForItem'
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

let action134lock = null
let videoRef = (null)
const action59 = videoRef
let modalInstance = (null)
const action185 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action12 = state.platform = ("dwapp")
  const action18 = state.video = (null)
  const action24 = state.downloadProgress = (0)
  const action27 = state.playProgress = (0)
  const action31 = state.positionMillis = (0)
  const action32 = state.duration = (0)
  const action55 = state.currentPosition = (0)
  const action71 = state.petPop = (false)
  const action73 = state.pets = ([])
  const action76 = state.device = (null)
  const action75 = state.device_member = (null)
  const action87 = state.select_pet = (null)
  const action113 = state.is_pause = (false)
  const action131 = state.showTool = (true)
  const action156 = state.is_collect = (false)
  const action160 = state.progress = (0)
  const action161 = state.showProgress = (false)
  const action177 = state.is_speed = (false)
  return state
}

const action3 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action110 = await (async (store, event) => {
if(dw.platform === 'rnapp'){
  const ScreenOrientation = dw.getNativePackage('ScreenOrientation')
  const StatusBar = dw.getNativePackage('StatusBar')
  const SystemNavigationBar = dw.getNativePackage('SystemNavigationBar')

  StatusBar.setHidden(true)
  SystemNavigationBar.navigationHide();
  const result =  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
  return result
}

})(store, event)
  const action14 = store.commit('setState', {["state.platform"]: dw.platform})
  let action21
  

  const action15 = await store.dispatch("func1", {})
  const action82 = await store.dispatch("func9", {})
  const action84 = await store.dispatch("func8", {})
}

const action111 = actions['onHide'] = async function (store, event) {
  const state = store.state
  const action112 = await (async (store, event) => {
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

const action2 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action17 = await dw.app.run("video.list", {"limit": 1, "offset": 0, "filters": {/**/  uuid: dw.query.uuid/**/}, "order_by": []})
  const action19 = store.commit('setState', {["state.video"]: action17.objects[0]})
  const action157 = await store.dispatch("func20", {})
}

const action22 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action23 = await (async (store, event) => {
const FileSystem = dw.getNativePackage('FileSystem')
const MediaLibrary = dw.getNativePackage('MediaLibrary')
const Platform = dw.getNativePackage('Platform')

if (Platform.OS === 'android') {
  const { status } = await dw.requestAndroidPermission('android.permission.WRITE_EXTERNAL_STORAGE')
  // if (status !== 'granted') return dw.alert('提示', '请授予文件写入权限')
  console.log("请授予文件写入权限！！！")
}

if (Platform.OS === 'android') {
  const { status } = await dw.requestAndroidPermission('android.permission.READ_EXTERNAL_STORAGE')
  // if (status !== 'granted') return dw.alert('提示', '请授予文件读取权限')
  console.log("请授予文件写入权限！！！")
}

const callback = async downloadProgress => {
  const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
  console.log("progress", progress)
  store.commit('setState', { ['state.progress']: Math.round(progress * 100) })
  store.commit('setState', { ['state.showProgress']: true })
  // const action25 = await dw.showToast({
  //   title: `下载进度:${Math.round(progress * 100)}%`,
  //   icon: 'none',
  //   image: '',
  //   duration: 10,
  //   mask: false,
  //   content: `下载进度:${Math.round(progress * 100)}%`
  // })
};
const path = `${FileSystem.documentDirectory}${Math.random().toString(36).slice(2)}_${state.video.data.url.split("/")[state.video.data.url.split("/").length - 1]}`
console.log("path", path)
console.log("state.video.data.url", state.video.data.url)
const downloadResumable = FileSystem.createDownloadResumable(
  state.video.data.url,
  path,
  {},
  callback
);

try {
  const { uri } = await downloadResumable.downloadAsync();
  console.log('Finished downloading to ', uri);
  store.commit('setState', { ['state.showProgress']: false })
  const action25 = await dw.showToast({
    title: '下载完成',
    icon: 'none',
    image: '',
    duration: 1500,
    mask: false,
    content: `下载完成`
  })
  const asset = await MediaLibrary.createAssetAsync(uri);
  console.log("asset", asset)
} catch (e) {
  console.error(e);
}
})(store, event)
}

const action25 = actions['func3'] = function (store, event) {
  const state = store.state
  let total = (event.data.durationMillis)
  const action33 = total
  if (event.data.durationMillis) {
    if (state.duration === 0) {
      const action37 = store.commit('setState', {["state.duration"]: total})
    }
    let current = (event.data.positionMillis)
    const action39 = current
    let progress = (current / total)
    const action38 = progress
    const action26 = store.commit('setState', {["state.playProgress"]: progress, ["state.currentPosition"]: event.data.positionMillis})
  }
}

const action29 = actions['func4'] = function (store, event) {
  const state = store.state
  const action43 = store.commit('setState', {["state.playProgress"]: event.data})
  if (state.duration) {
    const action44 = store.commit('setState', {["state.positionMillis"]: state.duration * event.data, ["state.is_pause"]: false})
  }
}

const action48 = actions['func5'] = async function (store, event) {
  const state = store.state
  if (videoRef && dw.platform === 'rnapp') {
    const action66 = await (async (store, event) => {
await videoRef.setRateAsync(3, true)
await videoRef.setPositionAsync(state.currentPosition)
})(store, event)
  }
}

const action53 = actions['func6'] = async function (store, event) {
  const state = store.state
  if (videoRef && dw.platform === 'rnapp') {
    const action70 = await (async (store, event) => {
await videoRef.setRateAsync(1, true)
await videoRef.setPositionAsync(state.currentPosition)
})(store, event)
  }
}

const action60 = actions['func7'] = function (store, event) {
  const state = store.state
  const action61 = videoRef = (event.data)
}

const action77 = actions['func9'] = async function (store, event) {
  const state = store.state
  let action204
  

  if (!!dw.query.device_uuid && dw.query.device_uuid !== "undefined") {
    const action78 = await dw.app.run("device.user_get", {"uuid": dw.query.device_uuid})
    
        if ((action78.status) === ("error")) {
          const action79message = (action78.message || "操作错误！")
          const action79title = ("提示")
          action79message && dw.alert(action79title, action79message)
          return {}
        }
        
    const action80 = store.commit('setState', {["state.device"]: action78.object, ["state.device_member"]: action78.device_member})
  }
}

const action72 = actions['func8'] = async function (store, event) {
  const state = store.state
  const action83 = await dw.app.run("pet.list", {"limit": 1000, "offset": 0, "filters": {data__device_member_uuid: state.device_member.uuid}})
  const action74 = store.commit('setState', {["state.pets"]: action83.objects})
}

const action85 = actions['func10'] = function (store, event) {
  const state = store.state
  const action86 = store.commit('setState', {["state.petPop"]: true})
}

const action88 = actions['func11'] = function (store, event) {
  const state = store.state
  const action89 = store.commit('setState', {["state.select_pet"]: event.context.eventData})
}

const action93 = actions['func12'] = async function (store, event) {
  const state = store.state
  const action94 = await dw.app.run("video.bind_pet", {"id": state.video.id, "pet_uuid": state.select_pet.uuid})
  
        if ((action94.status) === ("error")) {
          const action96message = (action94.message || "操作错误！")
          const action96title = ("提示")
          action96message && dw.alert(action96title, action96message)
          return {}
        }
        
  let message = ("绑定成功")
  const action195 = message
  const action196 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  const action98 = store.commit('setState', {["state.petPop"]: false, ["state.select_pet"]: null})
}

const action99 = actions['func13'] = async function (store, event) {
  const state = store.state
  let msg = ("是否确认删除？")
  const action189 = msg
  const action190 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(msg)
}
else{
  return null
}
})(store, event)
  if (!action190) {
    return event
  }
  const action102 = await dw.app.run("video.delete", {"id": state.video.id})
  
        if ((action102.status) === ("error")) {
          const action103message = (action102.message || "操作错误！")
          const action103title = ("提示")
          action103message && dw.alert(action103title, action103message)
          return {}
        }
        
  let message = ("删除成功")
  const action198 = message
  const action199 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  await new Promise((resolve, reject) => setTimeout(resolve, 300))
  const action106 = await dw.navigateBack({delta: 1})
}

const action114 = actions['func14'] = function (store, event) {
  const state = store.state
  if (state.is_pause === false) {
    const action115 = store.commit('setState', {["state.is_pause"]: true})
    if (videoRef && dw.platform === 'rnapp') {
      const action118 = ((store, event) => {
videoRef.pauseAsync()
})(store, event)
    }
  } else {
    const action121 = store.commit('setState', {["state.is_pause"]: false})
    if (videoRef && dw.platform === 'rnapp') {
      const action124 = ((store, event) => {
videoRef.playAsync()
})(store, event)
    }
  }
}

const action119 = actions['func15'] = function (store, event) {
  const state = store.state
}

const action129 = actions['func16'] = async function (store, event) {
  const state = store.state
  const action130 = await dw.navigateBack({delta: 1})
}

const action133 = actions['func17'] = async function (store, event) {
  const state = store.state
  
      const key = await new Promise(resolve => {
        clearTimeout(action134lock)
        action134lock = setTimeout(async () => {
          resolve(await (async () => {
    const action135 = store.commit('setState', {["state.showTool"]: false})
  
          })())
        }, 5000)
      })
}

const action136 = actions['func18'] = function (store, event) {
  const state = store.state
  if (state.showTool === false) {
    const action139 = store.commit('setState', {["state.showTool"]: true})
  } else {
    const action142 = store.commit('setState', {["state.showTool"]: false})
  }
}

const action145 = actions['func19'] = async function (store, event) {
  const state = store.state
  const action146 = await dw.app.run("video.add_delete_video", {"video_uuid": state.video.uuid})
  
        if ((action146.status) === ("error")) {
          const action147message = (action146.message || "操作错误！")
          const action147title = ("提示")
          action147message && dw.alert(action147title, action147message)
          return {}
        }
        
  let collect = (action146.object)
  const action148 = collect
  let message = (`${collect.data.is_active ? '收藏' : '取消收藏'}成功`)
  const action201 = message
  const action202 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  const action150 = store.commit('setState', {["state.is_collect"]: collect.data.is_active})
}

const action151 = actions['func20'] = async function (store, event) {
  const state = store.state
  const action152 = await dw.app.run("collect.user_list", {"limit": 1, "offset": 0, "filters": {/**/  data__video_uuid: state.video.uuid,/**/  data__is_active: true,/**/}, "order_by": []})
  if (action152.objects.length) {
    const action155 = store.commit('setState', {["state.is_collect"]: true})
  }
}

const action162 = actions['func21'] = async function (store, event) {
  const state = store.state
  if (dw.platform === 'rnapp') {
    
        const action165 = dw.app.RnappBridge && await dw.app.RnappBridge.share('shareWebpage', {
          title: "铜爪用户分享了一个精彩视频给你",
          description: "已经有两次自动出粮被终止掉了，爱宠今天胃口可能不太好",
          thumbImageUrl: dw.filters.qiniu(state.video.data.poster),
          webpageUrl: `https://www.console.tongzhuatech.com/app-tongzhua/video_share.html#/app_tongzhua-video_share??uuid=${state.video.uuid}`,
          scene: 0
        })
        
  }
}

const action167 = actions['func22'] = async function (store, event) {
  const state = store.state
  if (videoRef && dw.platform === 'rnapp') {
    const action170 = store.commit('setState', {["state.is_speed"]: true})
    const action171 = await (async (store, event) => {
await videoRef.setRateAsync(3, true)
await videoRef.setPositionAsync(state.currentPosition)
})(store, event)
  }
}

const action172 = actions['func23'] = async function (store, event) {
  const state = store.state
  if (videoRef && dw.platform === 'rnapp') {
    const action175 = store.commit('setState', {["state.is_speed"]: false})
    const action176 = await (async (store, event) => {
await videoRef.setRateAsync(1, true)
await videoRef.setPositionAsync(state.currentPosition)
})(store, event)
  }
}

const action182 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action183 = modalInstance = (event.data)
  const action184 = console.log('[getModalInstance#action184] 打印(modalInstance)', modalInstance)
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

var videoRef = null;
var action59 = videoRef;
var modalInstance = null;
var action185 = modalInstance;
var action90 = actions['computed1'] = function (event, state) {
  var action92 = function (event) {
    var style = {};
    if (state.platform === 'rnapp') {
      if (state.select_pet && event.item.id === state.select_pet.id) {
        style = {
          borderWidth: 1,
          borderColor: "#FFD355",
          borderRadius: 1000
        };
      } else {
        style = {
          borderWidth: 1,
          borderColor: "#FFFFFF",
          borderRadius: 1000
        };
      }
    } else {
      if (state.select_pet && event.item.id === state.select_pet.id) {
        style = {
          border: '1px solid #FFD355',
          borderRadius: '1000px'
        };
      } else {
        style = {
          border: '1px solid #FFFFFF',
          borderRadius: '1000px'
        };
      }
    }
    return style;
  }(event);
  return action92;
};
// COMPUTED_ACTION_META:computed1 {"deps":["platform","select_pet"]}

var action107 = actions['computed2'] = function (event, state) {
  var action108 = function (event) {
    function formatTime(ms) {
      var seconds = Math.floor(ms / 1000);
      var hours = Math.floor(seconds / 3600);
      var minutes = Math.floor(seconds % 3600 / 60);
      seconds = seconds % 60;

      if (hours > 0) {
        return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
      } else {
        return minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
      }
    }
    return formatTime(event.ms);
  }(event);
  return action108;
};
// COMPUTED_ACTION_META:computed2 {"deps":[]}

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').height
const baseWidth = Math.max(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 750) * baseWidth : 0
const styles = StyleSheet.create({
xdw2rp: {
  width: pm(750),
  height: "100%",
},
xdw2rq: {
  position: "relative",
  flexDirection: "column",
},
xdw2rr: {
  marginRight: pm(2),
},
xdw2rs: {
  marginRight: pm(3),
},
xdw2rt: {
  color: "#ffc107",
  fontSize: pm(10),
  fontWeight: "500",
  lineHeight: pm(18),
},
xdw2ru: {
  color: "#ffffff",
  fontSize: pm(10),
  fontWeight: "500",
  lineHeight: pm(18),
},
xdw2rv: {
  top: pm(80),
  left: pm(335),
  width: pm(80),
  height: pm(28),
  position: "absolute",
  alignItems: "center",
  paddingTop: pm(5),
  paddingLeft: pm(8),
  paddingRight: pm(8),
  flexDirection: "row",
  paddingBottom: pm(5),
  backgroundColor: "#ffffff33",
  borderTopLeftRadius: pm(15),
  borderTopRightRadius: pm(15),
  borderBottomLeftRadius: pm(15),
  borderBottomRightRadius: pm(15),
},
xdw2rw: {
  flexGrow: 1,
  alignItems: "center",
  flexShrink: 1,
  flexDirection: "column",
  justifyContent: "flex-start",
},
xdw2rx: {
  width: pm(31),
  height: pm(31),
},
xdw2rz: {
  right: pm(0),
  flexDirection: "column",
},
xdw2s0: {
  width: "100%",
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
},
xdw2s1: {
  top: pm(0),
  left: pm(0),
  width: "100%",
  zIndex: 2,
  position: "absolute",
  flexDirection: "column",
},
xdw2s2: {
  width: pm(31),
  height: pm(45),
},
xdw2s5: {
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw2s7: {
  marginTop: pm(10),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw2s8: {
  top: pm(140),
  right: pm(7),
  zIndex: 10,
  position: "absolute",
  flexDirection: "column",
},
xdw2s9: {
  width: pm(33),
  height: pm(33),
},
xdw2sc: {
  width: pm(33),
  flexDirection: "column",
},
xdw2sd: {
  color: "#FFFFFF",
  fontSize: pm(13),
  lineHeight: pm(18),
  marginRight: pm(7),
},
xdw2se: {
  width: pm(45),
  flexDirection: "row",
  justifyContent: "flex-start",
},
xdw2sf: {
  width: pm(590),
  alignItems: "flex-start",
  paddingTop: pm(13),
  marginRight: pm(7),
  flexDirection: "column",
  paddingBottom: pm(13),
  justifyContent: "center",
},
xdw2sg: {
  left: pm(0),
  width: pm(750),
  bottom: pm(25),
  zIndex: 100,
  flexWrap: "nowrap",
  position: "absolute",
  alignItems: "center",
  paddingTop: pm(10),
  paddingLeft: pm(18),
  paddingRight: pm(18),
  flexDirection: "row",
  paddingBottom: pm(10),
  justifyContent: "flex-start",
},
xdw2sh: {
  color: "#181818",
  fontSize: pm(14),
  fontWeight: "500",
  lineHeight: pm(19),
},
xdw2si: {
  alignItems: "center",
  flexDirection: "column",
},
xdw2sj: {
  width: pm(300),
  height: pm(1),
  marginTop: pm(14),
  marginBottom: pm(10),
  flexDirection: "column",
  backgroundColor: "#F0F0F0",
},
xdw2sk: {
  width: pm(37),
  height: pm(37),
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw2sl: {
  width: pm(44),
  height: pm(44),
  alignItems: "center",
  marginRight: pm(17),
  flexDirection: "column",
  justifyContent: "center",
},
xdw2sm: {
  width: pm(37),
  height: pm(37),
  shadowOffset: {width: pm(5), height: pm(10)},
  shadowRadius: pm(10),
  shadowColor: "rgb(200, 200, 200)",
  shadowOpacity: 0.3,
  elevation: 5,
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw2so: {
  flexWrap: "wrap",
  flexDirection: "row",
},
xdw2sp: {
  color: "#181818",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw2sq: {
  width: pm(300),
  height: pm(38),
  marginTop: pm(13),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#FFD355",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw2sr: {
  width: pm(320),
  overflow: "hidden",
  paddingTop: pm(17),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(29),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
},
xdw2ss: {
  flex: 1,
  zIndex: 10,
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "flex-end",
},
xdw2st: {
  fontSize: pm(15),
  marginTop: pm(14),
  fontWeight: "500",
  lineHeight: pm(21),
  marginLeft: pm(17),
  marginBottom: pm(7),
},
xdw2su: {
  color: "#666666",
  fontSize: pm(12),
  lineHeight: pm(17),
  marginLeft: pm(17),
  marginRight: pm(36),
},
xdw2sv: {
  height: pm(9),
  flexDirection: "column",
  backgroundColor: "#FFD355",
  borderTopLeftRadius: pm(4),
  borderTopRightRadius: pm(4),
  borderBottomLeftRadius: pm(4),
  borderBottomRightRadius: pm(4),
},
xdw2sw: {
  width: pm(199),
  height: pm(9),
  marginTop: pm(10),
  marginLeft: pm(17),
  marginRight: pm(17),
  flexDirection: "column",
  backgroundColor: "#E7E7E7",
  borderTopLeftRadius: pm(4),
  borderTopRightRadius: pm(4),
  borderBottomLeftRadius: pm(4),
  borderBottomRightRadius: pm(4),
},
xdw2sx: {
  color: "#181818",
  fontSize: pm(10),
  marginTop: pm(7),
  lineHeight: pm(15),
  marginLeft: pm(17),
},
xdw2sy: {
  width: pm(232),
  height: pm(130),
  marginLeft: "auto",
  marginRight: "auto",
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
  borderBottomLeftRadius: pm(14),
  borderBottomRightRadius: pm(14),
},
xdw2sz: {
  flex: 1,
  zIndex: 10,
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw2t0: {
  height: "100%",
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#000000",
}
});
const slide = {"type":"176684","key":"c1766841","slug":null,"randomid":"id_a0b7cf4c5a3353c6c524ddb1","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text2":{"ctx_map":{"text":"下载"}},"Text5":{"ctx_map":{"text":"2022-07-24"}},"Text9":{"ctx_map":{"text":"更改"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image2":{"ctx_map":{"fop":"e,80,80","src":"u/dev064/2023/03/08/d6D7M4kAheq5TCW6TeCDBC/SketchPng48db5730e119e68012154897af8f8d9db0bde646b2e5db23ea16f9adb0536fa6.png","buildToLocal":true}},"Image5":{"ctx_map":{"fop":"e,80,80","src":"u/dev064/2023/03/18/5P55TozQhC986ouF8Z4hUP/SketchPng03b6f6eb115164a60b741267ad2a88a85489bdebbd36df56ef567bd67167646b.png","buildToLocal":true}},"Image7":{"ctx_map":{"fop":"e,80,80","src":"u/dev064/2023/03/14/aZjKxKza8nhuv8RJqNAaUc/SketchPngec85b83464f43e9dd0471a0498edb231497c37edb49ade84eb3de57737d88e0c.png","buildToLocal":true}},"Image8":{"ctx_map":{"fop":"e,80,80","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image9":{"ctx_map":{"fop":"e,80,80","src":"u/dev064/2023/03/15/YbSyBZATaosuLt7dBh2H9T/SketchPngf1cb5c1da92a852a7833492193e220ce18cd1dc282c01db14deb92c4fbd6ebbc.png","buildToLocal":true}},"Modal1":{"ctx_map":{"mask":true,"value":false,"baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Modal2":{"ctx_map":{"mask":true,"value":false,"position":"center","baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Text10":{"ctx_map":{"text":"更改本次进食的宠物"}},"Text11":{"ctx_map":{"text":"确认"}},"Text12":{"ctx_map":{"text":"2022-07-24"}},"Text13":{"ctx_map":{"text":"这是一个文本组件","numberOfLines":1}},"Text14":{"ctx_map":{"text":"视频下载中..."}},"Text15":{"ctx_map":{"text":"提示","numberOfLines":1}},"Text16":{"ctx_map":{"text":"快进中"}},"Text17":{"ctx_map":{"text":"3x"}},"View13":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"View20":{"ctx_map":{}},"View21":{"ctx_map":{}},"View22":{"ctx_map":{}},"View23":{"ctx_map":{}},"View24":{"ctx_map":{}},"View25":{"ctx_map":{}},"View26":{"ctx_map":{}},"View27":{"ctx_map":{}},"View28":{"ctx_map":{}},"View29":{"ctx_map":{}},"View30":{"ctx_map":{}},"View31":{"ctx_map":{}},"View32":{"ctx_map":{}},"Image10":{"ctx_map":{"fop":"e,150,150","src":"u/dev064/2023/03/17/kLaNVC5Nrezj3xuxuieRA6/play.png","buildToLocal":true}},"Image11":{"ctx_map":{"fop":"e,150,150","src":"u/dev064/2023/03/17/5HxjfVBWPaPrLJTdTTvbJG/SketchPngaea28648606800e925c6d4b48b469ccd72284656175e4cffa9436cd84d44c3fd.png","buildToLocal":true}},"Image12":{"ctx_map":{"fop":"e,108,108","src":"u/dev066/2024/02/28/y4LLyu9ja64s5kNgYkgUAW/icon_backblackbg3x.png","buildToLocal":true}},"Image14":{"ctx_map":{"fop":"e,108,159","src":"u/dev066/2024/02/28/ohzVfq3iPZFSfNZ9XbpYZM/分组116.png","buildToLocal":true}},"Image15":{"ctx_map":{"fop":"e,108,159","src":"u/dev066/2024/02/28/psV83nkMnpwyD765rbECmh/分组115.png","buildToLocal":true}},"Image16":{"ctx_map":{"fop":"e,108,159","src":"u/dev066/2024/02/28/VFvs5wQMdBi3ZE24TKZyhj/分组24.png","buildToLocal":true}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewIf5":{"ctx_map":{"value":true}},"ViewIf6":{"ctx_map":{"value":true}},"ViewIf7":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"SvgImage1":{"ctx_map":{"src":"u/dev065/2023/05/30/Yg3rsiG2csucyXMvcBJsnE/1093994.svg","color":"#ffffff","width":5,"height":7,"SvgImageManage":"SvgImageManage"}},"SvgImage2":{"ctx_map":{"src":"u/dev065/2023/05/30/Yg3rsiG2csucyXMvcBJsnE/1093994.svg","color":"#ffffff","width":5,"height":7,"SvgImageManage":"SvgImageManage"}},"SvgImage3":{"ctx_map":{"src":"u/dev065/2023/05/30/Yg3rsiG2csucyXMvcBJsnE/1093994.svg","color":"#ffffff","width":5,"height":7,"SvgImageManage":"SvgImageManage"}},"DwappCloud4":{"ctx_map":{"text1":"https://tongzhua-1307793206.cos.ap-shanghai.myqcloud.com/u/tzznkj/2023/06/17/ykxiqQg6zkL3mzbttS5Fv5/catVideo2_imageSprite_119443_0.jpg","numberb1":10,"numberb2":12}},"DwappCloud6":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"NativeVideo1":{"ctx_map":{"src":"u/linliguang/2022/10/14/FAXKyF6Doa2RZySo4X6CSG/test2.mp4","loop":true,"preload":"auto","autoPlay":true,"controls":false}}}};
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
const pageGroupSlug = 'app_tongzhua-eat_video_player_fs';

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
      <View /* View1 */   style={styles.xdw2t0}>{!!(state.video) /* ViewIf1 */ && (<><View /* View2 */   style={styles.xdw2rw}><XbenchcView /* View15 */   viewStyle={styles.xdw2rq} onClick={getEvent('View15:onClick:func18:', {}, bagForKeyValue, bagForIndex)} onLongPress={getEvent('View15:onLongPress:func22:', {}, bagForKeyValue, bagForIndex)} onPressOut={getEvent('View15:onPressOut:func6:', {}, bagForKeyValue, bagForIndex)}><Video /* NativeVideo1 */ style={styles.xdw2rp} source={ {uri: dwtools.qiniu(state.video.data.url)} } useNativeControls={ false } isLooping={ true } shouldPlay={ true } positionMillis={ state.positionMillis } rate={ state.rate } resizeMode={ "contain" }  onPlaybackStatusUpdate={getEvent('NativeVideo1:onRnappPlaybackStatusUpdate:func3:', {}, bagForKeyValue, bagForIndex)} ref={getEvent('NativeVideo1:onRef:func7:', {}, bagForKeyValue, bagForIndex)}></Video></XbenchcView>
{!!(state.is_speed) /* ViewIf7 */ && (<><View /* View32 */   style={styles.xdw2rv}><Image /* SvgImage3 */ style={[ styles.xdw2rr, { width: pm(5), height: pm(7) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev065/2023/05/30/Yg3rsiG2csucyXMvcBJsnE/1093994.svg"), width: pm(5), height: pm(7) }} />
<Image /* SvgImage2 */ style={[ styles.xdw2rr, { width: pm(5), height: pm(7) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev065/2023/05/30/Yg3rsiG2csucyXMvcBJsnE/1093994.svg"), width: pm(5), height: pm(7) }} />
<Image /* SvgImage1 */ style={[ styles.xdw2rs, { width: pm(5), height: pm(7) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev065/2023/05/30/Yg3rsiG2csucyXMvcBJsnE/1093994.svg"), width: pm(5), height: pm(7) }} />
<Text /* Text17 */ style={styles.xdw2rt} >{slide.components.Text17.ctx_map.text}</Text>
<Text /* Text16 */ style={styles.xdw2ru} >{slide.components.Text16.ctx_map.text}</Text></View></>)}</View>
{!!(state.showTool) /* ViewIf4 */ && (<><View /* View24 */   style={styles.xdw2s1}><View /* View27 */   style={styles.xdw2s0}><XbenchcView /* View28 */   viewStyle={styles.xdw2rz} onClick={getEvent('View28:onClick:func16:', {eventData: "device_setting"}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image12 */ style={styles.xdw2rx} source={dwtools.getLocalResource('xdw2ry_lthar323')}  /></XbenchcView></View></View>
<View /* View3 */   style={styles.xdw2s8}><XbenchcView /* View4 */   viewStyle={styles.xdw2s5} onClick={getEvent('View4:onClick:func19:', {}, bagForKeyValue, bagForIndex)}>{!!(!state.is_collect) /* ViewIf5 */ && (<><XbenchcImage /* Image14 */ style={styles.xdw2s2} source={dwtools.getLocalResource('xdw2s3_lthar323')}  /></>)}
{!!(state.is_collect) /* ViewIf6 */ && (<><XbenchcImage /* Image15 */ style={styles.xdw2s2} source={dwtools.getLocalResource('xdw2s4_lthar323')}  /></>)}</XbenchcView>
<View /* View6 */   style={styles.xdw2s7}><XbenchcImage /* Image16 */ style={styles.xdw2s2} source={dwtools.getLocalResource('xdw2s6_lthar323')}  /></View></View>
<View /* View7 */   style={styles.xdw2sg}><XbenchcView /* View26 */   viewStyle={styles.xdw2sc} onClick={getEvent('View26:onClick:func14:', {}, bagForKeyValue, bagForIndex)}>{!!(state.is_pause) /* ViewIf2 */ && (<><XbenchcImage /* Image10 */ style={styles.xdw2s9} source={dwtools.getLocalResource('xdw2sa_lthar323')}  /></>)}
{!!(!state.is_pause) /* ViewIf3 */ && (<><XbenchcImage /* Image11 */ style={styles.xdw2s9} source={dwtools.getLocalResource('xdw2sb_lthar323')}  /></>)}</XbenchcView>
<View /* View25 */   style={styles.xdw2se}><Text /* Text12 */ style={styles.xdw2sd} >{computeds.computed2({ms: state.currentPosition}, state)}</Text></View>
<View /* View9 */   style={styles.xdw2sf}><Xbenchc176689 /* DwappCloud4 */ sprite={ state.video.data.sprite } currentProgress={ state.playProgress } totalSeconds={ state.duration / 1000 }  onProgress={getEvent('DwappCloud4:onProgress:func4:', {}, bagForKeyValue, bagForIndex)}></Xbenchc176689></View>
<View /* View8 */   style={styles.xdw2se}><Text /* Text5 */ style={styles.xdw2sd} >{computeds.computed2({ms: state.duration}, state)}</Text></View></View></>)}</>)}
<XbenchcModal /* Modal1 */ rootStyle={styles.xdw2ss} value={ state.petPop } mask={ true } maskClosable={ true } ><View /* View17 */   style={styles.xdw2sr}><View /* View18 */   style={styles.xdw2si}><Text /* Text10 */ style={styles.xdw2sh} >{slide.components.Text10.ctx_map.text}</Text></View>
<View /* View19 */   style={styles.xdw2sj}></View>
<View /* View20 */   style={styles.xdw2so}>{(state.pets).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><XbenchcView /* View21 */   viewStyle={[styles.xdw2sl, (computeds.computed1({item: bagForItem}, state))]} onClick={getEvent('View21:onClick:func11:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image8 */ style={styles.xdw2sk} source={dwtools.qiniu(bagForItem.data.image, slide.components.Image8.ctx_map.fop)}  /></XbenchcView></ViewForItem> })}
<XbenchcView /* View23 */   viewStyle={styles.xdw2sl} onClick={getEvent('View23:onClick:func11:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image9 */ style={styles.xdw2sm} source={dwtools.getLocalResource('xdw2sn_lthar324')}  /></XbenchcView></View>
<XbenchcView /* View22 */   viewStyle={styles.xdw2sq} onClick={getEvent('View22:onClick:func12:', {}, bagForKeyValue, bagForIndex)}><Text /* Text11 */ style={styles.xdw2sp} >{slide.components.Text11.ctx_map.text}</Text></XbenchcView></View></XbenchcModal>
<XbenchcModal /* Modal2 */ rootStyle={styles.xdw2sz} value={ state.showProgress } mask={ true } maskClosable={ true } ><View /* View29 */   style={styles.xdw2sy}><Text /* Text15 */ style={styles.xdw2st} numberOfLines={1}>{slide.components.Text15.ctx_map.text}</Text>
<Text /* Text14 */ style={styles.xdw2su} >{slide.components.Text14.ctx_map.text}</Text>
<View /* View30 */   style={styles.xdw2sw}><View /* View31 */   style={[styles.xdw2sv, ({
  width: `${state.progress}%`
})]}></View></View>
<Text /* Text13 */ style={styles.xdw2sx} numberOfLines={1}>{state.progress + "%"}</Text></View></XbenchcModal>
<Xbenchc275104 /* DwappCloud6 */ valueStyle={ slide.components.DwappCloud6.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud6.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud6.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud6:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104></View>
    </ErrorBoundary>
  )
}
