
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import Xbenchc176286 from '../components/Xbenchc176286'
import { Video } from 'expo-av'
import { Image } from 'expo-image'
import Xbenchc174470 from '../components/Xbenchc174470'
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

let videoRef = (null)
const action59 = videoRef
let modalInstance = (null)
const action163 = modalInstance
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
  const action87 = state.select_pet = (null)
  const action121 = state.is_collect = (false)
  const action124 = state.is_speed = (false)
  const action133 = state.isPlaying = (true)
  const action147 = state.progress = (0)
  const action148 = state.showProgress = (false)
  const action159 = state.showAS = (false)
  return state
}

const action3 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action14 = store.commit('setState', {["state.platform"]: dw.platform})
  let action21
  

  const action15 = await store.dispatch("func1", {})
}

const action2 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action17 = await dw.app.run("video.list", {"limit": 1, "offset": 0, "filters": {/**/  uuid: dw.query.uuid/**/}, "order_by": []})
  const action19 = store.commit('setState', {["state.video"]: action17.objects[0]})
  const action122 = await store.dispatch("func16", {})
}

const action22 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action23 = await (async (store, event) => {
//隐藏弹出窗口
store.commit('setState', {["state.showAS"]: false})

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
    const action44 = store.commit('setState', {["state.positionMillis"]: state.duration * event.data})
  }
  const action146 = store.commit('setState', {["state.isPlaying"]: true})
}

const action48 = actions['func5'] = async function (store, event) {
  const state = store.state
  if (videoRef && dw.platform === 'rnapp') {
    const action125 = store.commit('setState', {["state.is_speed"]: true})
    const action66 = await (async (store, event) => {
await videoRef.setRateAsync(3, true)
await videoRef.setPositionAsync(state.currentPosition)
})(store, event)
  }
}

const action53 = actions['func6'] = async function (store, event) {
  const state = store.state
  if (videoRef && dw.platform === 'rnapp') {
    const action126 = store.commit('setState', {["state.is_speed"]: false})
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
  const action175 = message
  const action176 = ((store, event) => {
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
  const action167 = msg
  const action168 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(msg)
}
else{
  return null
}
})(store, event)
  if (!action168) {
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
  const action178 = message
  const action179 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  await new Promise((resolve, reject) => setTimeout(resolve, 300))
  const action106 = await dw.navigateBack({delta: 1})
}

const action107 = actions['func14'] = function (store, event) {
  const state = store.state
  const action109 = dw.app.goToPappUrl("eat_video_player_fs", {"uuid": dw.query.uuid, "device_uuid": dw.query.device_uuid}, {redirectTo: false})
}

const action110 = actions['func15'] = async function (store, event) {
  const state = store.state
  const action111 = await dw.app.run("video.add_delete_video", {"video_uuid": state.video.uuid})
  
        if ((action111.status) === ("error")) {
          const action112message = (action111.message || "操作错误！")
          const action112title = ("提示")
          action112message && dw.alert(action112title, action112message)
          return {}
        }
        
  let collect = (action111.object)
  const action114 = collect
  let message = (`${collect.data.is_active ? '收藏' : '取消收藏'}成功`)
  const action181 = message
  const action182 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  const action123 = store.commit('setState', {["state.is_collect"]: collect.data.is_active})
}

const action115 = actions['func16'] = async function (store, event) {
  const state = store.state
  const action116 = await dw.app.run("collect.user_list", {"limit": 1, "offset": 0, "filters": {/**/  data__video_uuid: state.video.uuid,/**/  data__is_active: true,/**/}, "order_by": []})
  if (action116.objects.length) {
    const action120 = store.commit('setState', {["state.is_collect"]: true})
  }
}

const action127 = actions['func17'] = async function (store, event) {
  const state = store.state
  if (videoRef && dw.platform === 'rnapp') {
    let status = (await videoRef.getStatusAsync())
    const action134 = status
    let isPlaying = (status.isPlaying)
    const action135 = isPlaying
    const action139 = store.commit('setState', {["state.isPlaying"]: !isPlaying})
    if (isPlaying) {
      const action132 = await (async (store, event) => {
await videoRef.pauseAsync()
})(store, event)
    } else {
      const action141 = await (async (store, event) => {
await videoRef.playAsync()
})(store, event)
    }
  }
}

const action149 = actions['func9'] = async function (store, event) {
  const state = store.state
  if (dw.platform === 'rnapp') {
    
        const action158 = dw.app.RnappBridge && await dw.app.RnappBridge.share('shareWebpage', {
          title: "铜爪用户分享了一个精彩视频给你",
          description: "已经有两次自动出粮被终止掉了，爱宠今天胃口可能不太好",
          thumbImageUrl: dw.filters.qiniu(state.video.data.poster),
          webpageUrl: `https://www.console.tongzhuatech.com/app-tongzhua/video_share.html#/app_tongzhua-video_share??uuid=${state.video.uuid}`,
          scene: 0
        })
        
  }
}

const action160 = actions['func18'] = function (store, event) {
  const state = store.state
  const action161 = store.commit('setState', {["state.showAS"]: !state.showAS})
}

const action162 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action164 = modalInstance = (event.data)
  const action166 = console.log('[getModalInstance#action166] 打印(modalInstance)', modalInstance)
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
var action163 = modalInstance;
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

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdwok: {
  width: pm(30),
  height: pm(30),
},
xdwom: {
  right: pm(0),
  flexDirection: "column",
},
xdwon: {
  width: pm(320),
  height: pm(240),
},
xdwoo: {
  width: pm(35),
  height: pm(42),
},
xdwop: {
  top: pm(99),
  left: pm(142),
  width: pm(35),
  height: pm(42),
  position: "absolute",
},
xdwoq: {
  position: "relative",
  flexDirection: "column",
},
xdwor: {
  width: pm(80),
  height: pm(26),
},
xdwos: {
  marginRight: pm(2),
},
xdwot: {
  marginRight: pm(3),
},
xdwou: {
  color: "#ffc107",
  fontSize: pm(10),
  fontWeight: "500",
  lineHeight: pm(18),
},
xdwov: {
  color: "#ffffff",
  fontSize: pm(10),
  fontWeight: "500",
  lineHeight: pm(18),
},
xdwow: {
  top: pm(30),
  left: pm(120),
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
xdwox: {
  flexGrow: 1,
  alignItems: "center",
  flexShrink: 1,
  flexDirection: "column",
  justifyContent: "flex-start",
},
xdwoy: {
  width: pm(31),
  height: pm(45),
},
xdwp1: {
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdwp3: {
  marginTop: pm(10),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdwp4: {
  right: pm(7),
  bottom: pm(128),
  zIndex: 10,
  position: "absolute",
  flexDirection: "column",
},
xdwp5: {
  color: "#ffffff",
  fontSize: pm(13),
  lineHeight: pm(20),
  marginRight: pm(10),
},
xdwp6: {
  color: "#ffffff",
  fontSize: pm(13),
  lineHeight: pm(20),
},
xdwp7: {
  marginTop: pm(7),
  flexDirection: "row",
  justifyContent: "flex-start",
},
xdwp8: {
  width: pm(300),
  paddingTop: pm(20),
  marginBottom: pm(48),
  flexDirection: "column",
  paddingBottom: pm(13),
},
xdwp9: {
  width: pm(320),
  flexWrap: "wrap",
  alignItems: "flex-start",
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
  justifyContent: "flex-start",
},
xdwpa: {
  flexGrow: 1,
  position: "relative",
  alignItems: "center",
  paddingTop: pm(40),
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#000000",
},
xdwpb: {
  color: "#181818",
  fontSize: pm(14),
  fontWeight: "500",
  lineHeight: pm(19),
},
xdwpc: {
  alignItems: "center",
  flexDirection: "column",
},
xdwpd: {
  width: pm(300),
  height: pm(1),
  marginTop: pm(14),
  marginBottom: pm(10),
  flexDirection: "column",
  backgroundColor: "#F0F0F0",
},
xdwpe: {
  width: pm(37),
  height: pm(37),
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdwpf: {
  width: pm(44),
  height: pm(44),
  alignItems: "center",
  marginRight: pm(17),
  flexDirection: "column",
  justifyContent: "center",
},
xdwpg: {
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
xdwpi: {
  flexWrap: "wrap",
  flexDirection: "row",
},
xdwpj: {
  color: "#181818",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdwpk: {
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
xdwpl: {
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
xdwpm: {
  flex: 1,
  zIndex: 10,
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "flex-end",
},
xdwpn: {
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
xdwpo: {
  flexDirection: "column",
},
xdwpp: {
  width: pm(288),
  height: pm(0.5),
  marginTop: pm(15),
  marginBottom: pm(15),
  flexDirection: "column",
  backgroundColor: "#F0F0F0",
},
xdwpq: {
  color: "#828282",
  fontSize: pm(12),
  textAlign: "center",
  fontWeight: "400",
  lineHeight: pm(18),
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
},
xdwpr: {
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
xdwps: {
  flex: 1,
  zIndex: 10,
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "flex-end",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
},
xdwpt: {
  fontSize: pm(15),
  marginTop: pm(14),
  fontWeight: "500",
  lineHeight: pm(21),
  marginLeft: pm(17),
  marginBottom: pm(7),
},
xdwpu: {
  color: "#666666",
  fontSize: pm(12),
  lineHeight: pm(17),
  marginLeft: pm(17),
  marginRight: pm(36),
},
xdwpv: {
  height: pm(9),
  flexDirection: "column",
  backgroundColor: "#FFD355",
  borderTopLeftRadius: pm(4),
  borderTopRightRadius: pm(4),
  borderBottomLeftRadius: pm(4),
  borderBottomRightRadius: pm(4),
},
xdwpw: {
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
xdwpx: {
  color: "#181818",
  fontSize: pm(10),
  marginTop: pm(7),
  lineHeight: pm(15),
  marginLeft: pm(17),
},
xdwpy: {
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
xdwpz: {
  flex: 1,
  zIndex: 10,
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
}
});
const slide = {"type":"174360","key":"c1743601","slug":null,"randomid":"id_79a0a1f868adb6b95fe35cf3","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text2":{"ctx_map":{"text":"下载"}},"Text4":{"ctx_map":{"text":"已经有两次自动出粮被终止掉了，爱宠今天胃口可能不太好"}},"Text5":{"ctx_map":{"text":"2022-07-24"}},"Text6":{"ctx_map":{"text":"13:34"}},"Text9":{"ctx_map":{"text":"更改"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image2":{"ctx_map":{"fop":"e,80,80","src":"u/dev064/2023/03/08/d6D7M4kAheq5TCW6TeCDBC/SketchPng48db5730e119e68012154897af8f8d9db0bde646b2e5db23ea16f9adb0536fa6.png","buildToLocal":true}},"Image5":{"ctx_map":{"fop":"e,108,108","src":"u/dev066/2024/02/28/cEsr4kdQ9KRCJedfNTgEM6/编组52.png","buildToLocal":true}},"Image7":{"ctx_map":{"fop":"e,80,80","src":"u/dev064/2023/03/14/aZjKxKza8nhuv8RJqNAaUc/SketchPngec85b83464f43e9dd0471a0498edb231497c37edb49ade84eb3de57737d88e0c.png","buildToLocal":true}},"Image8":{"ctx_map":{"fop":"e,80,80","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image9":{"ctx_map":{"fop":"e,80,80","src":"u/dev064/2023/03/15/YbSyBZATaosuLt7dBh2H9T/SketchPngf1cb5c1da92a852a7833492193e220ce18cd1dc282c01db14deb92c4fbd6ebbc.png","buildToLocal":true}},"Modal1":{"ctx_map":{"mask":true,"value":false,"position":"center","baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Modal2":{"ctx_map":{"mask":true,"value":false,"position":"center","baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Modal3":{"ctx_map":{"mask":true,"value":false,"position":"bottom","baseIndex":500,"maskClosable":true,"destroyOnClose":false}},"Text10":{"ctx_map":{"text":"更改本次进食的宠物"}},"Text11":{"ctx_map":{"text":"确认"}},"Text12":{"ctx_map":{"text":"3x"}},"Text13":{"ctx_map":{"text":"快进中"}},"Text14":{"ctx_map":{"text":"这是一个文本组件","numberOfLines":1}},"Text15":{"ctx_map":{"text":"视频下载中..."}},"Text16":{"ctx_map":{"text":"提示","numberOfLines":1}},"Text17":{"ctx_map":{"text":"取消","numberOfLines":1}},"Text18":{"ctx_map":{"text":"下载","numberOfLines":1}},"Text20":{"ctx_map":{"text":"删除","numberOfLines":1}},"Text21":{"ctx_map":{"text":"13:34"}},"View11":{"ctx_map":{}},"View13":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"View20":{"ctx_map":{}},"View21":{"ctx_map":{}},"View22":{"ctx_map":{}},"View23":{"ctx_map":{}},"View24":{"ctx_map":{}},"View26":{"ctx_map":{}},"View27":{"ctx_map":{}},"View28":{"ctx_map":{}},"View29":{"ctx_map":{}},"View30":{"ctx_map":{}},"View31":{"ctx_map":{}},"View32":{"ctx_map":{}},"View33":{"ctx_map":{}},"View34":{"ctx_map":{}},"View35":{"ctx_map":{}},"Image11":{"ctx_map":{"fop":"e,105,126","src":"u/dev064/2023/06/21/7BMMVyuBCt7WsPpv4vn745/矩形4x.png"}},"Image12":{"ctx_map":{"fop":"e,282,90","src":"u/dev066/2024/02/28/tz3RRCtPLiBxv5yk4Lib7b/全屏观看3x.png"}},"Image13":{"ctx_map":{"fop":"e,600,600","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image15":{"ctx_map":{"fop":"e,108,159","src":"u/dev066/2024/02/28/VFvs5wQMdBi3ZE24TKZyhj/分组24.png","buildToLocal":true}},"Image16":{"ctx_map":{"fop":"e,108,159","src":"u/dev066/2024/02/28/psV83nkMnpwyD765rbECmh/分组115.png","buildToLocal":true}},"Image17":{"ctx_map":{"fop":"e,108,159","src":"u/dev066/2024/02/28/ohzVfq3iPZFSfNZ9XbpYZM/分组116.png","buildToLocal":true}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewIf5":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"SvgImage1":{"ctx_map":{"src":"u/dev065/2023/05/30/Yg3rsiG2csucyXMvcBJsnE/1093994.svg","color":"#ffffff","width":5,"height":7,"SvgImageManage":"SvgImageManage"}},"SvgImage2":{"ctx_map":{"src":"u/dev065/2023/05/30/Yg3rsiG2csucyXMvcBJsnE/1093994.svg","color":"#ffffff","width":5,"height":7,"SvgImageManage":"SvgImageManage"}},"SvgImage3":{"ctx_map":{"src":"u/dev065/2023/05/30/Yg3rsiG2csucyXMvcBJsnE/1093994.svg","color":"#ffffff","width":5,"height":7,"SvgImageManage":"SvgImageManage"}},"DwappCloud2":{"ctx_map":{"bool1":false,"numberb1":10}},"DwappCloud3":{"ctx_map":{"bool1":true,"text1":"","color1":"#000000","image1":"u/dev066/2024/02/28/RY8HxQknYe3cxc3fVUmAxZ/icon_backblackbg3x.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","select1":"portrait"}},"DwappCloud4":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"NativeVideo1":{"ctx_map":{"src":"u/linliguang/2022/10/14/FAXKyF6Doa2RZySo4X6CSG/test2.mp4","loop":true,"preload":"auto","autoPlay":true,"controls":false}}}};
slide.components.DwappCloud4.ctx_map.valueStyle = {
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
slide.components.DwappCloud4.ctx_map.containerStyle = {
  marginBottom: pm(18),
  flexDirection: "column",
};
slide.components.DwappCloud4.ctx_map.valueInputStyle = {
  color: "#333333",
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-eat_video_player';

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
      {!!(state.video) /* ViewIf1 */ && (<><Xbenchc176286 /* DwappCloud3 */ isCuzBtn={ slide.components.DwappCloud3.ctx_map.bool1 } eventData={ slide.components.DwappCloud3.ctx_map.prop1 } eventData2={ slide.components.DwappCloud3.ctx_map.prop2 } title={ slide.components.DwappCloud3.ctx_map.text1 } backgroundColor={ slide.components.DwappCloud3.ctx_map.color1 } backIcon={ slide.components.DwappCloud3.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud3.ctx_map.image2 } screenType={ slide.components.DwappCloud3.ctx_map.select1 } ><XbenchcView /* View13 */   viewStyle={styles.xdwom} onClick={getEvent('View13:onClick:func18:', {eventData: "device_setting"}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image5 */ style={styles.xdwok} source={dwtools.getLocalResource('xdwol_lthar0ni')}  /></XbenchcView></Xbenchc176286>
<View /* View1 */   style={styles.xdwpa}><View /* View2 */   style={styles.xdwox}><XbenchcView /* View15 */   viewStyle={styles.xdwoq} onClick={getEvent('View15:onClick:func17:', {}, bagForKeyValue, bagForIndex)} onLongPress={getEvent('View15:onLongPress:func5:', {}, bagForKeyValue, bagForIndex)} onPressOut={getEvent('View15:onPressOut:func6:', {}, bagForKeyValue, bagForIndex)}><Video /* NativeVideo1 */ style={styles.xdwon} source={ {uri: dwtools.qiniu(state.video.data.url)} } useNativeControls={ false } isLooping={ true } shouldPlay={ true } positionMillis={ state.positionMillis } rate={ state.rate } resizeMode={ "contain" }  onPlaybackStatusUpdate={getEvent('NativeVideo1:onRnappPlaybackStatusUpdate:func3:', {}, bagForKeyValue, bagForIndex)} ref={getEvent('NativeVideo1:onRef:func7:', {}, bagForKeyValue, bagForIndex)}></Video>
{!!(!state.isPlaying) /* ViewIf5 */ && (<><View /* View26 */   style={styles.xdwop}><XbenchcImage /* Image11 */ style={styles.xdwoo} source={dwtools.qiniu(slide.components.Image11.ctx_map.src, slide.components.Image11.ctx_map.fop)}  /></View></>)}</XbenchcView>
<XbenchcView /* View11 */   onClick={getEvent('View11:onClick:func14:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image12 */ style={styles.xdwor} source={dwtools.qiniu(slide.components.Image12.ctx_map.src, slide.components.Image12.ctx_map.fop)}  /></XbenchcView>
{!!(state.is_speed) /* ViewIf4 */ && (<><View /* View24 */   style={styles.xdwow}><Image /* SvgImage1 */ style={[ styles.xdwos, { width: pm(5), height: pm(7) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev065/2023/05/30/Yg3rsiG2csucyXMvcBJsnE/1093994.svg"), width: pm(5), height: pm(7) }} />
<Image /* SvgImage2 */ style={[ styles.xdwos, { width: pm(5), height: pm(7) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev065/2023/05/30/Yg3rsiG2csucyXMvcBJsnE/1093994.svg"), width: pm(5), height: pm(7) }} />
<Image /* SvgImage3 */ style={[ styles.xdwot, { width: pm(5), height: pm(7) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev065/2023/05/30/Yg3rsiG2csucyXMvcBJsnE/1093994.svg"), width: pm(5), height: pm(7) }} />
<Text /* Text12 */ style={styles.xdwou} >{slide.components.Text12.ctx_map.text}</Text>
<Text /* Text13 */ style={styles.xdwov} >{slide.components.Text13.ctx_map.text}</Text></View></>)}</View>
<View /* View3 */   style={styles.xdwp4}><XbenchcView /* View4 */   viewStyle={styles.xdwp1} onClick={getEvent('View4:onClick:func15:', {}, bagForKeyValue, bagForIndex)}>{!!(!state.is_collect) /* ViewIf2 */ && (<><XbenchcImage /* Image17 */ style={styles.xdwoy} source={dwtools.getLocalResource('xdwoz_lthar0ns')}  /></>)}
{!!(state.is_collect) /* ViewIf3 */ && (<><XbenchcImage /* Image16 */ style={styles.xdwoy} source={dwtools.getLocalResource('xdwp0_lthar0ns')}  /></>)}</XbenchcView>
<XbenchcView /* View6 */   viewStyle={styles.xdwp3} onClick={getEvent('View6:onClick:func9:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image15 */ style={styles.xdwoy} source={dwtools.getLocalResource('xdwp2_lthar0ns')}  /></XbenchcView></View>
<View /* View7 */   style={styles.xdwp9}><View /* View8 */   style={styles.xdwp7}><Text /* Text6 */ style={styles.xdwp5} >{state.video.data.start_time.slice(11, 16)}</Text>
<Text /* Text21 */ style={styles.xdwp6} >{"宠物来吃饭啦，吃了10克"}</Text></View>
<View /* View9 */   style={styles.xdwp8}><Xbenchc174470 /* DwappCloud2 */ showSlider={ !state.isPlaying } currentProgress={ state.playProgress }  onProgress={getEvent('DwappCloud2:onProgress:func4:', {}, bagForKeyValue, bagForIndex)}></Xbenchc174470></View></View></View>
<XbenchcModal /* Modal1 */ rootStyle={styles.xdwpm} value={ state.petPop } mask={ true } maskClosable={ true } ><View /* View17 */   style={styles.xdwpl}><View /* View18 */   style={styles.xdwpc}><Text /* Text10 */ style={styles.xdwpb} >{slide.components.Text10.ctx_map.text}</Text></View>
<View /* View19 */   style={styles.xdwpd}></View>
<View /* View20 */   style={styles.xdwpi}>{(state.pets).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><XbenchcView /* View21 */   viewStyle={[styles.xdwpf, (computeds.computed1({item: bagForItem}, state))]} onClick={getEvent('View21:onClick:func11:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image8 */ style={styles.xdwpe} source={dwtools.qiniu(bagForItem.data.image, slide.components.Image8.ctx_map.fop)}  /></XbenchcView></ViewForItem> })}
<XbenchcView /* View23 */   viewStyle={styles.xdwpf} onClick={getEvent('View23:onClick:func11:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image9 */ style={styles.xdwpg} source={dwtools.getLocalResource('xdwph_lthar0nt')}  /></XbenchcView></View>
<XbenchcView /* View22 */   viewStyle={styles.xdwpk} onClick={getEvent('View22:onClick:func12:', {}, bagForKeyValue, bagForIndex)}><Text /* Text11 */ style={styles.xdwpj} >{slide.components.Text11.ctx_map.text}</Text></XbenchcView></View></XbenchcModal>
<XbenchcModal /* Modal3 */ rootStyle={styles.xdwps} value={ state.showAS } mask={ true } maskClosable={ true }  onValueChange={getEvent('Modal3:onValueChange:func18:', {}, bagForKeyValue, bagForIndex)}><View /* View30 */   style={styles.xdwpr}><XbenchcView /* View33 */   viewStyle={styles.xdwpo} onClick={getEvent('View33:onClick:func2:', {}, bagForKeyValue, bagForIndex)}><Text /* Text18 */ style={styles.xdwpn} numberOfLines={1}>{slide.components.Text18.ctx_map.text}</Text></XbenchcView>
<View /* View34 */   style={styles.xdwpp}></View>
<XbenchcView /* View35 */   viewStyle={styles.xdwpo} onClick={getEvent('View35:onClick:func13:', {}, bagForKeyValue, bagForIndex)}><Text /* Text20 */ style={styles.xdwpq} numberOfLines={1}>{slide.components.Text20.ctx_map.text}</Text></XbenchcView>
<View /* View32 */   style={styles.xdwpp}></View>
<XbenchcView /* View31 */   viewStyle={styles.xdwpo} onClick={getEvent('View31:onClick:func18:', {}, bagForKeyValue, bagForIndex)}><Text /* Text17 */ style={styles.xdwpn} numberOfLines={1}>{slide.components.Text17.ctx_map.text}</Text></XbenchcView></View></XbenchcModal>
<XbenchcModal /* Modal2 */ rootStyle={styles.xdwpz} value={ state.showProgress } mask={ true } maskClosable={ true } ><View /* View27 */   style={styles.xdwpy}><Text /* Text16 */ style={styles.xdwpt} numberOfLines={1}>{slide.components.Text16.ctx_map.text}</Text>
<Text /* Text15 */ style={styles.xdwpu} >{slide.components.Text15.ctx_map.text}</Text>
<View /* View28 */   style={styles.xdwpw}><View /* View29 */   style={[styles.xdwpv, ({
  width: `${state.progress}%`
})]}></View></View>
<Text /* Text14 */ style={styles.xdwpx} numberOfLines={1}>{state.progress + "%"}</Text></View></XbenchcModal>
<Xbenchc275104 /* DwappCloud4 */ valueStyle={ slide.components.DwappCloud4.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud4.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud4.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud4:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104></>)}
    </ErrorBoundary>
  )
}
