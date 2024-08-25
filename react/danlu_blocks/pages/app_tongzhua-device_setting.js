
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import { Shadow } from 'react-native-shadow-2'
import { Image } from 'expo-image'
import XbenchcScrollView from '../../xbench/xbenchc/components/XbenchcScrollView'
import XbenchcModal from '../../xbench/xbenchc/components/XbenchcModal'
import Xbenchc168610 from '../components/Xbenchc168610'
import Xbenchc275104 from '../components/Xbenchc275104'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

let modalInstance = (null)
const action82 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action18 = state.device = (null)
  const action19 = state.device_member = (null)
  const action20 = state.platform = ("dwapp")
  const action47 = state.sure = ({/**/  "status":false,/**/  "value":undefined/**/})
  const action56 = state.isLoad = (false)
  const action60 = state.pop_name = (false)
  const action70 = state.newest_version = (null)
  /* action87: 投影 */
  const action88 = state.rnappShadow = ({ offset: [0, 4], distance: 14, startColor: '#00000005' })
  return state
}

const action3 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action27 = store.commit('setState', {["state.platform"]: dw.platform})
  const action95 = await store.dispatch("func78", {})
  const action57 = store.commit('setState', {["state.isLoad"]: true})
  const action28 = await store.dispatch("func2", {})
  const action78 = await store.dispatch("func9", {})
  const action35 = await store.dispatch("func4", {})
  const action65 = console.log('[onShow#action65] 打印state.device_member', state.device_member)
}

const action89 = actions['func78'] = function (store, event) {
  const state = store.state
  const action90 = dw.getGlobalLocals("allDeviceMember")
  const action91 = ((store, event) => {
return action90.filter( tmp => tmp.data.device_uuid === dw.query.uuid)
})(store, event)
  let currentItem = (action91[0])
  const action92 = currentItem
  const action93 = store.commit('setState', {["state.device"]: currentItem.data.device_uuid__toone, ["state.device_member"]: currentItem})
}

const action21 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action22 = await dw.app.run("device.user_get", {"uuid": dw.query.uuid || "f5892e18-23d7-4903-a044-97094e97c7af"})
  
        if ((action22.status) === ("error")) {
          const action23message = (action22.message || "操作错误！")
          const action23title = ("提示")
          action23message && dw.alert(action23title, action23message)
          return {}
        }
        
  const action24 = store.commit('setState', {["state.device"]: action22.object, ["state.device_member"]: action22.device_member})
}

const action79 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action80 = modalInstance = (event.data)
  const action81 = console.log('[getModalInstance#action81] 打印(modalInstance)', modalInstance)
}

const action71 = actions['func9'] = async function (store, event) {
  const state = store.state
  const action72 = await dw.app.run("version.list", {"limit": 1, "offset": 0, "filters": {/**/  data__type: 'OTA'/**/}, "order_by": ["-data__order__float"]})
  if (action72.objects.length) {
    let newest_version = (action72.objects[0])
    const action75 = newest_version
    const action76 = store.commit('setState', {["state.newest_version"]: newest_version})
  }
}

const action29 = actions['func3'] = function (store, event) {
  const state = store.state
  let slug = (event.context.eventData)
  const action31 = slug
  if (slug === 'update_net') {
    const action45 = dw.app.goToPappUrl("update_net", {"mode": "update", "device_uuid": state.device.uuid}, {redirectTo: false})
  } else {
    const action32 = console.log('[func3#action32] 打印(slug)的返回值', slug)
    const action30 = dw.app.goToPappUrl(slug, {"uuid": state.device.uuid}, {redirectTo: false})
  }
}

const action33 = actions['func4'] = async function (store, event) {
  const state = store.state
  const action34 = await (async (store, event) => {
const key_device = "device_setting/device"
const key_device_member = "device_setting/device_member"
const jsonValue1 = JSON.stringify(state.device)
const jsonValue2 = JSON.stringify(state.device_member)
if(state.platform === 'rnapp'){
  console.log('rnapp | handle storage')
  const AsyncStorage = dw.getNativePackage('AsyncStorage')
  await AsyncStorage.setItem(key_device, jsonValue1)
  await AsyncStorage.setItem(key_device_member, jsonValue2)
}
else{
  window.localStorage.setItem(key_device, jsonValue1)
  window.localStorage.setItem(key_device_member, jsonValue2)
}
})(store, event)
}

const action46 = actions['func5'] = function (store, event) {
  const state = store.state
  const action48 = store.commit('setState', {["state.sure.status"]: !state.sure.status})
}

const action49 = actions['func6'] = async function (store, event) {
  const state = store.state
  const action52 = store.commit('setState', {["state.sure.status"]: !state.sure.status, ["state.sure.value"]: "确定删除设备吗？"})
  const action59 = console.log('[func6#action59] 打印("state.sure.value")的返回值', )
  const action50 = await dw.app.run("device.delete", {"id": state.device.id, "as_admin": true})
  let message = ("操作成功")
  const action84 = message
  const action85 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  const action55 = dw.app.goToPappUrl("index", {}, {redirectTo: true})
  
        if ((action50.status) === ("error")) {
          const action53message = (action50.message || "操作错误！")
          const action53title = ("提示")
          action53message && dw.alert(action53title, action53message)
          return {}
        }
        
}

const action63 = actions['func8'] = function (store, event) {
  const state = store.state
  const action64 = store.commit('setState', {["state.pop_name"]: true})
}

const action61 = actions['func7'] = function (store, event) {
  const state = store.state
  const action62 = store.commit('setState', {["state.pop_name"]: false})
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

var modalInstance = null;
var action82 = modalInstance;
var action66 = actions['computed1'] = function (event, state) {
  if (!state.device || !state.device.data || !state.newest_version || !state.newest_version.data) {
    return event;
  }
  var action67 = function (event) {
    if (state.newest_version.data.ota_type !== 'main') {
      var currentDeviceVersionCode = state.device.data.version.split("|")[1];
      if (currentDeviceVersionCode !== state.newest_version.data.code) {
        return true;
      }
    } else {
      var _currentDeviceVersionCode = state.device.data.version.split("|")[0];
      if (_currentDeviceVersionCode !== state.newest_version.data.code) {
        return true;
      }
    }
    return false;
  }(event);
  var action68 = console.log('[computed1#action68] 打印(action67)的返回值', action67);
  //MACRO:DEBUG window.vconsole.log('log:workflow', {func: 'computed1', action: 'action68', label: `打印(action67)的返回值`, valueVar: "action67", value: [action67]})
  return action67;
};
// COMPUTED_ACTION_META:computed1 {"deps":["device","newest_version"]}

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdw17k: {
  width: pm(27),
  height: pm(46),
},
xdw17l: {
  width: pm(51),
  height: pm(51),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw17m: {
  fontSize: pm(14),
  textAlign: "left",
  fontWeight: "500",
  lineHeight: pm(20),
},
xdw17n: {
  color: "#AAAAAA",
  fontSize: pm(12),
  lineHeight: pm(17),
},
xdw17o: {
  marginLeft: pm(10),
  flexDirection: "column",
},
xdw17p: {
  width: pm(300),
  flexWrap: "nowrap",
  alignItems: "center",
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
  justifyContent: "flex-start",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(6.824),
  borderTopRightRadius: pm(6.824),
  borderBottomLeftRadius: pm(6.824),
  borderBottomRightRadius: pm(6.824),
},
xdw17q: {
  width: pm(300),
  marginTop: pm(10),
  marginLeft: pm(10),
  marginRight: pm(10),
  marginBottom: pm(15),
  flexDirection: "column",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw17r: {
  color: "#999999",
  fontSize: pm(12),
  fontFamily: "Noto Sans CJK SC",
  lineHeight: pm(17),
  paddingLeft: pm(20),
},
xdw17s: {
  width: pm(20),
  height: pm(20),
  marginRight: pm(12),
},
xdw17t: {
  color: "#181818",
  fontSize: pm(14),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw17u: {
  alignItems: "center",
  flexDirection: "row",
},
xdw17v: {
  color: "#FF6D6D",
  flexGrow: 0,
  fontSize: pm(12),
  textAlign: "left",
  flexShrink: 0,
  lineHeight: pm(17),
  marginRight: pm(5),
  backgroundColor: "#ffffff",
},
xdw17w: {
  width: pm(20),
  height: pm(20),
},
xdw17x: {
  paddingTop: pm(15),
  flexDirection: "row",
  paddingBottom: pm(15),
  justifyContent: "space-between",
},
xdw17y: {
  color: "#FF6D6D",
  fontSize: pm(12),
  textAlign: "left",
  lineHeight: pm(17),
  marginRight: pm(5),
  backgroundColor: "#ffffff",
},
xdw17z: {
  width: pm(300),
  paddingLeft: pm(12),
  paddingRight: pm(12),
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw180: {
  width: pm(300),
  flexDirection: "column",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw181: {
  width: pm(300),
  marginTop: pm(10),
  marginLeft: pm(10),
  marginRight: pm(10),
  marginBottom: pm(15),
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(6.824),
  borderTopRightRadius: pm(6.824),
  borderBottomLeftRadius: pm(6.824),
  borderBottomRightRadius: pm(6.824),
},
xdw182: {
  alignItems: "center",
  paddingTop: pm(15),
  flexDirection: "row",
  paddingBottom: pm(15),
  justifyContent: "space-between",
},
xdw183: {
  width: pm(8),
  height: pm(8),
  marginRight: pm(3),
},
xdw184: {
  width: pm(300),
  paddingLeft: pm(12),
  paddingRight: pm(12),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw185: {
  marginTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
},
xdw186: {
  color: "#FF6D6D",
  fontSize: pm(14),
  textAlign: "center",
  lineHeight: pm(17),
  backgroundColor: "#ffffff",
},
xdw187: {
  width: pm(300),
  height: pm(40),
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw188: {
  marginTop: pm(30),
  paddingLeft: pm(10),
  marginBottom: pm(40),
  paddingRight: pm(10),
},
xdw189: {
  color: "#999999",
  fontSize: pm(12),
  fontFamily: "Noto Sans CJK SC",
  marginLeft: pm(21.443),
},
xdw18a: {
  width: pm(17.06),
  height: pm(17.06),
  marginLeft: pm(6.648),
  marginRight: pm(10.648),
},
xdw18b: {
  flexGrow: 1,
  fontSize: pm(12),
  flexShrink: 1,
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw18c: {
  marginRight: pm(5.971),
},
xdw18d: {
  width: pm(12),
  height: pm(12),
},
xdw18e: {
  flexWrap: "nowrap",
  alignItems: "center",
  marginLeft: pm(10),
  paddingTop: pm(13),
  borderBottomWidth: pm(0.5),
  borderBottomColor: "#eeeeee",
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(13),
  justifyContent: "flex-start",
},
xdw18f: {
  width: pm(299.403),
  height: pm(40.944),
  marginLeft: "auto",
  marginRight: "auto",
  flexDirection: "column",
  borderTopLeftRadius: pm(6.824),
  borderTopRightRadius: pm(6.824),
  borderBottomLeftRadius: pm(6.824),
  borderBottomRightRadius: pm(6.824),
},
xdw18g: {
  width: pm(299.403),
  height: pm(40.944),
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(6.824),
  borderTopRightRadius: pm(6.824),
  borderBottomLeftRadius: pm(6.824),
  borderBottomRightRadius: pm(6.824),
},
xdw18h: {
  width: pm(299.403),
  height: pm(40.944),
  marginTop: pm(15.354),
  marginLeft: pm(10.236),
  marginRight: pm(10.236),
  flexDirection: "column",
  backgroundColor: "#f8f8f8",
  borderTopLeftRadius: pm(6.824),
  borderTopRightRadius: pm(6.824),
  borderBottomLeftRadius: pm(6.824),
  borderBottomRightRadius: pm(6.824),
},
xdw18i: {
  marginTop: pm(15.354),
  flexDirection: "column",
  backgroundColor: "#f8f8f8",
},
xdw18j: {
  width: "100%",
  flexGrow: 1,
  flexBasis: "0%",
  flexShrink: 1,
  backgroundColor: "#f8f8f8",
},
xdw18k: {
  color: "#181818",
  width: pm(200),
  flexWrap: "wrap",
  fontSize: pm(14),
  textAlign: "center",
  fontFamily: "inherit",
  fontWeight: "500",
  lineHeight: pm(18),
  flexDirection: "column",
  justifyContent: "flex-start",
},
xdw18l: {
  paddingTop: pm(17),
  flexDirection: "row",
  paddingBottom: pm(17),
  justifyContent: "center",
},
xdw18m: {
  color: "#999999",
  fontSize: pm(14),
  marginTop: "auto",
  textAlign: "center",
  fontFamily: "inherit",
  lineHeight: pm(24),
  marginBottom: "auto",
},
xdw18n: {
  width: "50%",
  height: "100%",
  textAlign: "center",
  alignItems: "center",
  borderRightWidth: pm(1),
  borderRightColor: "#f8f8f8",
  flexDirection: "column",
},
xdw18o: {
  color: "#181818",
  fontSize: pm(14),
  marginTop: "auto",
  textAlign: "center",
  fontFamily: "inherit",
  lineHeight: pm(24),
  marginBottom: "auto",
},
xdw18p: {
  backgroundColor: "#f8f8f8",
},
xdw18q: {
  width: "50%",
  height: "100%",
  textAlign: "center",
  flexDirection: "column",
},
xdw18r: {
  width: "100%",
  height: pm(43),
  borderTopWidth: pm(1),
  borderTopColor: "#f8f8f8",
  flexDirection: "row",
},
xdw18s: {
  width: pm(240),
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw18t: {
  flex: 1,
  zIndex: 10,
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw18u: {
  color: "#181818",
  fontSize: pm(15),
  marginTop: "auto",
  textAlign: "center",
  alignItems: "center",
  fontFamily: "Noto Sans CJK SC",
  lineHeight: pm(24),
  alignContent: "center",
  marginBottom: "auto",
  flexDirection: "column",
  justifyContent: "center",
},
xdw18v: {
  width: "100%",
  height: pm(47.768),
  alignItems: "center",
  flexDirection: "column",
},
xdw18w: {
  marginTop: pm(10.236),
  alignItems: "center",
  marginLeft: pm(10.236),
  marginRight: pm(10.236),
  alignContent: "center",
  marginBottom: pm(10.236),
  flexDirection: "row",
  justifyContent: "center",
},
xdw18x: {
  width: pm(299.528),
  height: pm(40.944),
  borderTopWidth: pm(1),
  borderTopColor: "#ffd355",
  borderLeftWidth: pm(1),
  borderLeftColor: "#ffd355",
  borderRightWidth: pm(1),
  borderRightColor: "#ffd355",
  borderBottomWidth: pm(1),
  borderBottomColor: "#ffd355",
  flexDirection: "row",
  backgroundColor: "#f8f8f8",
  borderTopLeftRadius: pm(6.824),
  borderTopRightRadius: pm(6.824),
  borderBottomLeftRadius: pm(6.824),
  borderBottomRightRadius: pm(6.824),
},
xdw18y: {
  marginTop: pm(11.962),
  paddingLeft: pm(10.236),
  paddingRight: pm(10.236),
  flexDirection: "column",
},
xdw18z: {
  height: "100%",
  flexWrap: "nowrap",
  fontSize: pm(12),
  textAlign: "center",
  alignItems: "center",
  lineHeight: pm(24),
  flexDirection: "row",
  justifyContent: "center",
},
xdw190: {
  marginLeft: pm(10.236),
  backgroundColor: "#e7e7e7",
},
xdw191: {
  width: pm(143.304),
  height: pm(40.944),
  marginLeft: "10.236pxpx",
  marginRight: pm(6.3975),
  flexDirection: "column",
  backgroundColor: "#f0f0f0",
  borderTopLeftRadius: pm(20.448),
  borderTopRightRadius: pm(20.448),
  borderBottomLeftRadius: pm(20.448),
  borderBottomRightRadius: pm(20.448),
},
xdw192: {
  height: "100%",
  fontSize: pm(12),
  textAlign: "center",
  alignItems: "center",
  lineHeight: pm(24),
  justifyContent: "center",
},
xdw193: {
  backgroundColor: "#f5d065",
},
xdw194: {
  width: pm(143.304),
  height: pm(40.944),
  marginLeft: pm(6.3975),
  marginRight: "10.236pxpx",
  flexDirection: "column",
  backgroundColor: "#ffd355",
  borderTopLeftRadius: pm(20.448),
  borderTopRightRadius: pm(20.448),
  borderBottomLeftRadius: pm(20.448),
  borderBottomRightRadius: pm(20.448),
},
xdw195: {
  marginTop: pm(11.962),
  flexDirection: "row",
},
xdw196: {
  width: pm(320),
  height: pm(182.542),
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10.236),
  borderTopRightRadius: pm(10.236),
},
xdw197: {
  flex: 1,
  zIndex: 10,
  position: "relative",
  alignItems: "flex-end",
  flexDirection: "row",
  justifyContent: "center",
}
});
const slide = {"type":"273632","key":"c2736322","slug":null,"randomid":"id_9099f95104cec561d3cc546a","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":"小五的喂食器"}},"Text2":{"ctx_map":{"text":"基本设置"}},"Text3":{"ctx_map":{"text":"关联宠物"}},"Text4":{"ctx_map":{"text":"称重碗配平"}},"Text5":{"ctx_map":{"text":"干燥剂"}},"Text6":{"ctx_map":{"text":"设备语音"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"Image2":{"ctx_map":{"fop":"e,81,138","src":"u/dev064/2023/02/28/bijZW2dsBpY6JQyN6c6RjE/SketchPngdb86c2a612baa002dace89aa9ca1d0f7c654355746a1627440cd3dcc2b3194e4.png"}},"Modal1":{"ctx_map":{"mask":true,"value":false,"position":"center","baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Modal2":{"ctx_map":{"mask":true,"value":true,"position":"bottom","baseIndex":2000,"maskClosable":false,"destroyOnClose":false,"appendKeyboardHeight":true}},"Text12":{"ctx_map":{"text":"剩余0天"}},"Text16":{"ctx_map":{"text":"这是一个文本组件"}},"Text18":{"ctx_map":{"text":"视频回放"}},"Text20":{"ctx_map":{"text":"功能设置","numberOfLines":1}},"Text24":{"ctx_map":{"text":"删除设备"}},"Text28":{"ctx_map":{"text":"关于设备"}},"Text32":{"ctx_map":{"text":"通用设置","numberOfLines":1}},"Text38":{"ctx_map":{"text":"确认","numberOfLines":1}},"Text39":{"ctx_map":{"text":"取消","numberOfLines":1}},"Text40":{"ctx_map":{"text":"这是一个件件件件件件件件件件件件件件件件件件件件件件件件件件件"}},"Text41":{"ctx_map":{"text":""}},"Text42":{"ctx_map":{"text":"请输入设备名称","numberOfLines":1}},"Text43":{"ctx_map":{"text":"取消","numberOfLines":1}},"Text44":{"ctx_map":{"text":"确认","numberOfLines":1}},"Text45":{"ctx_map":{"text":"通用设置","numberOfLines":1}},"Text46":{"ctx_map":{"text":"更换网络"}},"Text47":{"ctx_map":{"text":"共享设备"}},"Text48":{"ctx_map":{"text":"关于设备"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"View20":{"ctx_map":{}},"View21":{"ctx_map":{}},"View22":{"ctx_map":{}},"View25":{"ctx_map":{}},"View26":{"ctx_map":{}},"View31":{"ctx_map":{}},"View32":{"ctx_map":{}},"View34":{"ctx_map":{}},"View43":{"ctx_map":{}},"View44":{"ctx_map":{}},"View45":{"ctx_map":{}},"View46":{"ctx_map":{}},"View47":{"ctx_map":{}},"View52":{"ctx_map":{}},"View53":{"ctx_map":{}},"View54":{"ctx_map":{}},"View55":{"ctx_map":{}},"View56":{"ctx_map":{}},"View57":{"ctx_map":{}},"View58":{"ctx_map":{}},"View59":{"ctx_map":{}},"View60":{"ctx_map":{}},"View61":{"ctx_map":{}},"View62":{"ctx_map":{}},"View63":{"ctx_map":{}},"View64":{"ctx_map":{}},"View65":{"ctx_map":{}},"View66":{"ctx_map":{}},"View67":{"ctx_map":{}},"View68":{"ctx_map":{}},"Image13":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/24/52tDohBg78awqyqoSvgqZf/进入icon.png"}},"Image16":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Image20":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Image23":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Image24":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/24/vh7A4XbfcozVtFyC9PpVSJ/编组8.png"}},"Image31":{"ctx_map":{"fop":"e,51,51","src":"u/dev069/2023/12/16/7og2HWMgMvVf8E4YyD3muc/关于设备.png"}},"Image32":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/24/nb5yNow7Myxh2NBdZ6EJ9i/编组10.png"}},"Image33":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/24/52tDohBg78awqyqoSvgqZf/进入icon.png"}},"Image34":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/24/52tDohBg78awqyqoSvgqZf/进入icon.png"}},"Image35":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/24/aNYi3rBKk5PDbpZY7ZtTJC/编组92.png"}},"Image36":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/24/ppGVsC4pKYgzD8s9XWvQyG/编组62.png"}},"Image37":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/24/52tDohBg78awqyqoSvgqZf/进入icon.png"}},"Image38":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/24/CCPFM6UWeLSgmByrVaocJC/编组63.png"}},"Image39":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/24/52tDohBg78awqyqoSvgqZf/进入icon.png"}},"Image40":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/24/c6QftfRFnYoSoQTxWkZEhV/编组81.png"}},"Image41":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/24/52tDohBg78awqyqoSvgqZf/进入icon.png"}},"Image42":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/24/YJSk4bfpxYYHN54MttgfM8/编组11.png"}},"Image43":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/24/52tDohBg78awqyqoSvgqZf/进入icon.png"}},"Image44":{"ctx_map":{"fop":"e,24,24","src":"u/dev066/2024/02/24/WvGNGfeME5xbw4975qzeGK/椭圆形.png"}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewIf6":{"ctx_map":{"value":true}},"ViewIf7":{"ctx_map":{"value":true}},"ViewIf8":{"ctx_map":{"value":true}},"ViewIf9":{"ctx_map":{"value":true}},"ViewIf10":{"ctx_map":{"value":true}},"ViewIf11":{"ctx_map":{"value":true}},"SvgImage10":{"ctx_map":{"src":"u/dev069/2023/12/14/R94nBRf4QLU7KxcyDYRzhF/1080592.svg","color":"#ff6d6d","width":6.824,"height":6.824,"SvgImageManage":"SvgImageManage"}},"SvgImage11":{"ctx_map":{"src":"u/dev069/2023/12/14/c95MutAy2axC7CLXqDcvMa/784054.svg","color":"#d3d3d3","width":20.742,"height":20.742,"SvgImageManage":"SvgImageManage"}},"DwappCloud1":{"ctx_map":{"bool1":true,"bool2":false,"text1":"设备设置","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"#f8f8f8","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev066/2024/02/24/YwzRjKqTNgXeXoU3CW2GdS/btn_back1.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud2":{"ctx_map":{"text1":"hello world","text2":"请输入文本","color1":"rgb(153, 153, 153)","style1":null,"style2":null,"select1":"text","select2":"done"}},"DwappCloud3":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"ScrollView2":{"ctx_map":{"type":"list","bounces":true,"scrollY":true,"showScrollbar":true}},"ShadowView1":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}},"ShadowView4":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}},"ShadowView7":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}},"ShadowView8":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}},"ShadowView9":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}}}};
slide.components.DwappCloud1.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(16),
  fontWeight: "500",
  lineHeight: pm(24),
  flexDirection: "column",
};
slide.components.DwappCloud2.ctx_map.style1 = {
  width: pm(258.584),
  height: "100%",
  flexDirection: "column",
};
slide.components.DwappCloud2.ctx_map.style2 = {
  height: "100%",
  fontSize: pm(12),
  borderTopWidth: pm(0),
  borderTopColor: "#000000",
  borderLeftWidth: pm(0),
  borderLeftColor: "#000000",
  lineHeight: pm(24),
  paddingTop: pm(12.795),
  borderRightWidth: pm(0),
  borderRightColor: "#000000",
  paddingLeft: pm(12.795),
  borderBottomWidth: pm(0),
  borderBottomColor: "#000000",
  flexDirection: "column",
  paddingBottom: pm(12.795),
  backgroundColor: "#f8f8f8",
  borderTopLeftRadius: pm(6.824),
  borderTopRightRadius: pm(6.824),
  borderBottomLeftRadius: pm(6.824),
  borderBottomRightRadius: pm(6.824),
};
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
const pageGroupSlug = 'app_tongzhua-device_setting';

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
      <Xbenchc176286 /* DwappCloud1 */ isCuzBtn={ slide.components.DwappCloud1.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud1.ctx_map.bool2 } eventData={ slide.components.DwappCloud1.ctx_map.prop1 } eventData2={ slide.components.DwappCloud1.ctx_map.prop2 } title={ slide.components.DwappCloud1.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud1.ctx_map.text2 } confirmText={ slide.components.DwappCloud1.ctx_map.text3 } cancelText={ slide.components.DwappCloud1.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud1.ctx_map.color1 } confirmColor={ slide.components.DwappCloud1.ctx_map.color2 } cancelColor={ slide.components.DwappCloud1.ctx_map.color3 } backIcon={ slide.components.DwappCloud1.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud1.ctx_map.image2 } titleStyle={ slide.components.DwappCloud1.ctx_map.style1 } screenType={ slide.components.DwappCloud1.ctx_map.select1 } ></Xbenchc176286>
<XbenchcScrollView /* ScrollView2 */ style={styles.xdw18j} scrollY={ true } showScrollbar={ true } bounces={ true } >{!!(state.isLoad) /* ViewIf6 */ && (<><Shadow containerStyle={styles.xdw17q} {...(state.rnappShadow)}><View /* View1 */   style={styles.xdw17p}>{!!(!!state.device && !!state.device.data.device_model_uuid__toone && !!state.device_member && state.device_member.data) /* ViewIf1 */ && (<><View /* View10 */   style={styles.xdw17l}><XbenchcImage /* Image2 */ style={styles.xdw17k} source={dwtools.qiniu(state.device.data.device_model_uuid__toone.data.image, slide.components.Image2.ctx_map.fop)}  /></View>
<View /* View11 */   style={styles.xdw17o}><Text /* Text1 */ style={styles.xdw17m} >{state.device.data.name}</Text>
<Text /* Text16 */ style={styles.xdw17n} >{state.device.data.device_model_uuid__toone.data.code}</Text></View></>)}</View></Shadow>
<Text /* Text20 */ style={styles.xdw17r} numberOfLines={1}>{slide.components.Text20.ctx_map.text}</Text>
<View /* View2 */   style={styles.xdw181}><Shadow containerStyle={styles.xdw180} {...(state.rnappShadow)}><View /* View17 */   style={styles.xdw17z}><XbenchcView /* View4 */   viewStyle={styles.xdw17x} onClick={getEvent('View4:onClick:func3:', {eventData: "pets"}, bagForKeyValue, bagForIndex)}><View /* View59 */   style={styles.xdw17u}><XbenchcImage /* Image24 */ style={styles.xdw17s} source={dwtools.qiniu(slide.components.Image24.ctx_map.src, slide.components.Image24.ctx_map.fop)}  />
<Text /* Text3 */ style={styles.xdw17t} >{slide.components.Text3.ctx_map.text}</Text></View>
<View /* View60 */   style={styles.xdw17u}><Text /* Text41 */ style={styles.xdw17v} >{state.device_member.data.pet_count > 0 ? "" : "未绑定"}</Text>
<XbenchcImage /* Image13 */ style={styles.xdw17w} source={dwtools.qiniu(slide.components.Image13.ctx_map.src, slide.components.Image13.ctx_map.fop)}  /></View></XbenchcView>
<XbenchcView /* View5 */   viewStyle={styles.xdw17x} onClick={getEvent('View5:onClick:func3:', {eventData: "trim"}, bagForKeyValue, bagForIndex)}><View /* View61 */   style={styles.xdw17u}><XbenchcImage /* Image32 */ style={styles.xdw17s} source={dwtools.qiniu(slide.components.Image32.ctx_map.src, slide.components.Image32.ctx_map.fop)}  />
<Text /* Text4 */ style={styles.xdw17t} >{slide.components.Text4.ctx_map.text}</Text></View>
<XbenchcImage /* Image33 */ style={styles.xdw17w} source={dwtools.qiniu(slide.components.Image33.ctx_map.src, slide.components.Image33.ctx_map.fop)}  /></XbenchcView>
<XbenchcView /* View6 */   viewStyle={styles.xdw17x} onClick={getEvent('View6:onClick:func3:', {eventData: "dryer_status"}, bagForKeyValue, bagForIndex)}><View /* View62 */   style={styles.xdw17u}><XbenchcImage /* Image35 */ style={styles.xdw17s} source={dwtools.qiniu(slide.components.Image35.ctx_map.src, slide.components.Image35.ctx_map.fop)}  />
<Text /* Text5 */ style={styles.xdw17t} >{slide.components.Text5.ctx_map.text}</Text></View>
<View /* View63 */   style={styles.xdw17u}>{!!(!!state.device_member && state.device_member.data) /* ViewIf9 */ && (<><Text /* Text12 */ style={[styles.xdw17y, ({
  color: state.device_member.data.dryer_days > 7 ? '#000000' : '#ff6d6d'
})]} >{"剩余" + state.device_member.data.dryer_days + "天"}</Text></>)}
<XbenchcImage /* Image34 */ style={styles.xdw17w} source={dwtools.qiniu(slide.components.Image34.ctx_map.src, slide.components.Image34.ctx_map.fop)}  /></View></XbenchcView></View></Shadow></View>
<Text /* Text45 */ style={styles.xdw17r} numberOfLines={1}>{slide.components.Text45.ctx_map.text}</Text>
<View /* View20 */   style={styles.xdw185}><Shadow containerStyle={styles.xdw180} {...(state.rnappShadow)}><View /* View18 */   style={styles.xdw184}><XbenchcView /* View3 */   viewStyle={styles.xdw182} onClick={getEvent('View3:onClick:func3:', {eventData: "base_setting"}, bagForKeyValue, bagForIndex)}><View /* View64 */   style={styles.xdw17u}><XbenchcImage /* Image36 */ style={styles.xdw17s} source={dwtools.qiniu(slide.components.Image36.ctx_map.src, slide.components.Image36.ctx_map.fop)}  />
<Text /* Text2 */ style={styles.xdw17t} >{slide.components.Text2.ctx_map.text}</Text></View>
<XbenchcImage /* Image37 */ style={styles.xdw17w} source={dwtools.qiniu(slide.components.Image37.ctx_map.src, slide.components.Image37.ctx_map.fop)}  /></XbenchcView>
<XbenchcView /* View8 */   viewStyle={styles.xdw182} onClick={getEvent('View8:onClick:func3:', {eventData: "update_net"}, bagForKeyValue, bagForIndex)}><View /* View65 */   style={styles.xdw17u}><XbenchcImage /* Image38 */ style={styles.xdw17s} source={dwtools.qiniu(slide.components.Image38.ctx_map.src, slide.components.Image38.ctx_map.fop)}  />
<Text /* Text46 */ style={styles.xdw17t} >{slide.components.Text46.ctx_map.text}</Text></View>
<XbenchcImage /* Image39 */ style={styles.xdw17w} source={dwtools.qiniu(slide.components.Image39.ctx_map.src, slide.components.Image39.ctx_map.fop)}  /></XbenchcView>
<XbenchcView /* View15 */   viewStyle={styles.xdw182} onClick={getEvent('View15:onClick:func3:', {eventData: "share_device"}, bagForKeyValue, bagForIndex)}><View /* View66 */   style={styles.xdw17u}><XbenchcImage /* Image40 */ style={styles.xdw17s} source={dwtools.qiniu(slide.components.Image40.ctx_map.src, slide.components.Image40.ctx_map.fop)}  />
<Text /* Text47 */ style={styles.xdw17t} >{slide.components.Text47.ctx_map.text}</Text></View>
<XbenchcImage /* Image41 */ style={styles.xdw17w} source={dwtools.qiniu(slide.components.Image41.ctx_map.src, slide.components.Image41.ctx_map.fop)}  /></XbenchcView>
<XbenchcView /* View14 */   viewStyle={styles.xdw182} onClick={getEvent('View14:onClick:func3:', {eventData: "about_device"}, bagForKeyValue, bagForIndex)}><View /* View67 */   style={styles.xdw17u}><XbenchcImage /* Image42 */ style={styles.xdw17s} source={dwtools.qiniu(slide.components.Image42.ctx_map.src, slide.components.Image42.ctx_map.fop)}  />
<Text /* Text48 */ style={styles.xdw17t} >{slide.components.Text48.ctx_map.text}</Text></View>
<View /* View68 */   style={styles.xdw17u}>{!!(!!state.device && !!state.device.data.device_model_uuid__toone && !!state.device_member && state.device_member.data) /* ViewIf10 */ && (<>{!!(computeds.computed1({}, state)) /* ViewIf8 */ && (<><XbenchcImage /* Image44 */ style={styles.xdw183} source={dwtools.qiniu(slide.components.Image44.ctx_map.src, slide.components.Image44.ctx_map.fop)}  /></>)}
<XbenchcImage /* Image43 */ style={styles.xdw17w} source={dwtools.qiniu(slide.components.Image43.ctx_map.src, slide.components.Image43.ctx_map.fop)}  /></>)}</View></XbenchcView></View></Shadow></View>
{!!(!!state.device && !!state.device.data.device_model_uuid__toone && !!state.device_member && state.device_member.data) /* ViewIf11 */ && (<>{!!(state.device_member.data.auth === '1'	) /* ViewIf3 */ && (<><XbenchcView /* View21 */   viewStyle={styles.xdw188} onClick={getEvent('View21:onClick:func5:', {}, bagForKeyValue, bagForIndex)}><Shadow containerStyle={styles.xdw180} {...(state.rnappShadow)}><View /* View22 */   style={styles.xdw187}><View /* View25 */  ><Text /* Text24 */ style={styles.xdw186} >{slide.components.Text24.ctx_map.text}</Text></View></View></Shadow></XbenchcView></>)}
{!!(!(state.device_member.data.auth === '1')) /* ViewIf4 */ && (<><View /* View26 */   style={styles.xdw18i}><Text /* Text32 */ style={styles.xdw189} numberOfLines={1}>{slide.components.Text32.ctx_map.text}</Text>
<View /* View31 */   style={styles.xdw18h}><Shadow containerStyle={styles.xdw18g} {...({ offset: [0, 4], distance: 14, startColor: 'rgb(0,0,0,0.05)' })}><View /* View32 */   style={styles.xdw18f}><XbenchcView /* View34 */   viewStyle={styles.xdw18e} onClick={getEvent('View34:onClick:func3:', {eventData: "about_device"}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image31 */ style={styles.xdw18a} source={dwtools.qiniu(slide.components.Image31.ctx_map.src, slide.components.Image31.ctx_map.fop)}  />
<Text /* Text28 */ style={styles.xdw18b} >{slide.components.Text28.ctx_map.text}</Text>
{!!(computeds.computed1({}, state)) /* ViewIf7 */ && (<><Image /* SvgImage10 */ style={[ styles.xdw18c, { width: pm(6.824), height: pm(6.824) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev069/2023/12/14/R94nBRf4QLU7KxcyDYRzhF/1080592.svg"), width: pm(6.824), height: pm(6.824) }} /></>)}
<XbenchcImage /* Image23 */ style={styles.xdw18d} source={dwtools.qiniu(slide.components.Image23.ctx_map.src, slide.components.Image23.ctx_map.fop)}  /></XbenchcView></View></Shadow></View></View></>)}</>)}</>)}</XbenchcScrollView>
<XbenchcModal /* Modal1 */ rootStyle={styles.xdw18t} value={ state.sure.status } mask={ true } maskClosable={ true } ><View /* View43 */   style={styles.xdw18s}><View /* View47 */   style={styles.xdw18l}><Text /* Text40 */ style={styles.xdw18k} >{state.sure.value?state.sure.value : "确定删除设备吗？"}</Text></View>
<View /* View44 */   style={styles.xdw18r}><XbenchcView /* View46 */   viewStyle={styles.xdw18n} onClick={getEvent('View46:onClick:func5:', {}, bagForKeyValue, bagForIndex)}><Text /* Text39 */ style={styles.xdw18m} numberOfLines={1}>{slide.components.Text39.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View45 */   viewStyle={styles.xdw18q} hoverStyle={styles.xdw18p} onClick={getEvent('View45:onClick:func6:', {}, bagForKeyValue, bagForIndex)}><Text /* Text38 */ style={styles.xdw18o} numberOfLines={1}>{slide.components.Text38.ctx_map.text}</Text></XbenchcView></View></View></XbenchcModal>
<XbenchcModal /* Modal2 */ rootStyle={styles.xdw197} value={ state.pop_name } mask={ true } maskClosable={ false } appendKeyboardHeight={ true } ><View /* View52 */   style={styles.xdw196}><View /* View53 */   style={styles.xdw18v}><Text /* Text42 */ style={styles.xdw18u} numberOfLines={1}>{slide.components.Text42.ctx_map.text}</Text></View>
<View /* View54 */   style={styles.xdw18y}><View /* View58 */   style={styles.xdw18x}><Xbenchc168610 /* DwappCloud2 */ eventData={ slide.components.DwappCloud2.ctx_map.prop1 } eventData2={ slide.components.DwappCloud2.ctx_map.prop2 } value={ slide.components.DwappCloud2.ctx_map.text1 } placeholder={ slide.components.DwappCloud2.ctx_map.text2 } rnappPlaceholderTextColor={ slide.components.DwappCloud2.ctx_map.color1 } containerStyle={ slide.components.DwappCloud2.ctx_map.style1 } valueInputStyle={ slide.components.DwappCloud2.ctx_map.style2 } type={ slide.components.DwappCloud2.ctx_map.select1 } confirmType={ slide.components.DwappCloud2.ctx_map.select2 }  onChange={getEvent('DwappCloud2:input::', {}, bagForKeyValue, bagForIndex)}></Xbenchc168610>
<Image /* SvgImage11 */ style={[ styles.xdw18w, { width: pm(20.742), height: pm(20.742) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev069/2023/12/14/c95MutAy2axC7CLXqDcvMa/784054.svg"), width: pm(20.742), height: pm(20.742) }} /></View></View>
<View /* View55 */   style={styles.xdw195}><XbenchcView /* View56 */   viewStyle={styles.xdw191} hoverStyle={styles.xdw190}><Text /* Text43 */ style={styles.xdw18z} numberOfLines={1}>{slide.components.Text43.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View57 */   viewStyle={styles.xdw194} hoverStyle={styles.xdw193}><Text /* Text44 */ style={styles.xdw192} numberOfLines={1}>{slide.components.Text44.ctx_map.text}</Text></XbenchcView></View></View></XbenchcModal>
<Xbenchc275104 /* DwappCloud3 */ valueStyle={ slide.components.DwappCloud3.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud3.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud3.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud3:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104>
    </ErrorBoundary>
  )
}
