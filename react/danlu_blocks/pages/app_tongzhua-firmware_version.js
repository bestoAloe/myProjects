
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcButton from '../../xbench/xbenchc/components/XbenchcButton'
import Xbenchc168613 from '../components/Xbenchc168613'
import XbenchcModal from '../../xbench/xbenchc/components/XbenchcModal'
import Xbenchc275104 from '../components/Xbenchc275104'
import XbenchcScrollView from '../../xbench/xbenchc/components/XbenchcScrollView'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

let action47lock = false
let action47task = null
let action47storeLock = false
let mode = ('prod')
const action73 = mode
let modalInstance = (null)
const action145 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action8 = state.newest_version = (null)
  const action11 = state.can_update = (false)
  const action16 = state.device = (null)
  const action31 = state.process = (0)
  const action37 = state.processPop = (false)
  const action42 = state.updateType = ("1")
  const action43 = state.type = ("1")
  const action77 = state.platform = ("rnapp")
  const action128 = state.ready = (false)
  return state
}

const action9 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action78 = store.commit('setState', {["state.platform"]: dw.platform})
  let action74
  

  const action76 = console.log('[onShow#action76] 打印(mode)的返回值', mode)
  const action18 = await Promise.all([
    (async () => {
      const action10 = await store.dispatch("func4", {})
      return action10
    })(),
    (async () => {
      const action17 = await store.dispatch("func1", {})
      return action17
    })(),
    (async () => {
      const action91 = await store.dispatch("func6", {})
      return action91
    })(),
  ])

  const action28 = await store.dispatch("func5", {})
  const action129 = store.commit('setState', {["state.ready"]: true})
}

const action2 = actions['func4'] = async function (store, event) {
  const state = store.state
  const action3 = await dw.app.run("version.list", {"limit": 1, "offset": 0, "filters": {/**/  data__type: 'OTA',/**/  data__ota_type: 'main'/**/}, "order_by": ["-data__order__float"]})
  if (action3.objects.length) {
    let newest_version = (action3.objects[0])
    const action6 = newest_version
    const action7 = store.commit('setState', {["state.newest_version"]: newest_version})
  }
}

const action12 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action13 = await (async (store, event) => {
const key = "device_setting/device"
let value
if(state.platform === 'rnapp'){
  const AsyncStorage = dw.getNativePackage('AsyncStorage')
  value = await AsyncStorage.getItem(key)
}
else{
  value = window.localStorage.getItem(key)
}
if(value){
  return JSON.parse(value)
}
else{
  return null
}
})(store, event)
  const action39 = console.log('[func1#action39] 打印(action13)的返回值', action13)
  
        if (!!(!action13) === (true)) {
          const action14message = ("当前设备数据加载错误")
          const action14title = ("提示")
          action14message && dw.alert(action14title, action14message)
          return {}
        }
        
  const action15 = store.commit('setState', {["state.device"]: action13})
}

const action19 = actions['func5'] = function (store, event) {
  const state = store.state
  if (state.newest_version.data.code !== state.device.data.version) {
    const action26 = console.log('[func5#action26] state.newest_version.data.code', state.newest_version.data.code)
    const action27 = console.log('[func5#action27] state.device.data.version', state.device.data.version)
    const action23 = store.commit('setState', {["state.can_update"]: true})
  } else {
    const action25 = store.commit('setState', {["state.can_update"]: false})
  }
}

const action29 = actions['func6'] = async function (store, event) {
  const state = store.state
  
      const action47 = await (async () => {
        if (action47lock) return action47task
        action47lock = true
        action47task = dw.app.connectSocket({ reconnecting: true })
        action47task.onMessage(async (event) => {
          console.log('WebSocket: 接收到消息', event)
      
    if (event.data.result.type === 'deviceUpdate') {
      const action118 = console.log('[func6#action118] 设备下载进度反馈！！！', )
      const action119 = console.log('[func6#action119] 设备下载进度反馈！！！', )
      const action120 = console.log('[func6#action120] 设备下载进度反馈！！！', )
      let data = (event.data.result.data)
      const action48 = data
      const action54 = store.commit('setState', {["state.process"]: String(data.percent), ["state.updateType"]: String(data.updateType), ["state.type"]: String(data.type)})
      /* action55: 判断下载完成 */
      if (String(data.percent) === '100') {
        const action87 = await store.dispatch("func9", {})
      }
    } else if (event.data.result.type === 'deviceConnect') {
      /* action96: 设备重新上线 */
      const action115 = console.log('[func6#action115] 设备重新上线！！！', )
      const action116 = console.log('[func6#action116] 设备重新上线！！！', )
      const action117 = console.log('[func6#action117] 设备重新上线！！！', )
      let message = (`${{"1": "单片机程序","2": "芯片程序",}[state.updateType]}烧录完成`)
      const action140 = message
      const action141 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
      await new Promise((resolve, reject) => setTimeout(resolve, 500))
      if (state.updateType === '1' && state.newest_version.data.ota_type === 'all') {
        /* action101: 下发主程序升级请求 */
        const action103 = await store.dispatch("func10", {})
      } else if (state.updateType === '2') {
        /* action106: 更新完成 */
        let msg = ("OTA升级成功")
        const action137 = msg
        const action138 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(msg)
}
else{
  return null
}
})(store, event)
        await new Promise((resolve, reject) => setTimeout(resolve, 500))
        const action111 = await dw.navigateBack({delta: 1})
      }
    }
  
        })
        if (!action47storeLock && !(false)) {
          action47storeLock = true
          store.$store.subscribeAction({
            enter: (action, state) => {
              if (['onHide', 'onUnload', 'beforeDestroy'].includes(action.type)) {
                console.log('WebSocket：onUnload/onHide 时自动停止监听:', action.type)
                action47task.close()
                action47lock = false
              }
            }
          })
        }
        return action47task
      })()
      
}

const action32 = actions['func7'] = async function (store, event) {
  const state = store.state
  const action130 = ((store, event) => {
// if(state.newest_version.data.ota_type !== 'main'){

//   return true
// }
// else{
//   const currentDeviceVersionCode = state.device.data.version.split("|")[0]
//   if(currentDeviceVersionCode !== state.newest_version.data.code){
//     return true
//   }
// }
// return false

const currentDeviceVersionCode = state.device.data.version.split("|")[0]
if(currentDeviceVersionCode !== state.newest_version.data.code){
  return true
}
return false
})(store, event)
  let can_update = (action130)
  const action131 = can_update
  
        if (!!(!can_update) === (true)) {
          const action132message = ("")
          const action132title = ("提示")
          action132message && dw.alert(action132title, action132message)
          return {}
        }
        
  if (state.newest_version.data.ota_type === 'main') {
    const action33 = await dw.app.run("mqtt.send_device_firmware", {"mode": mode, "type": 1, "otaPath": state.newest_version.data.file_path, "version": state.newest_version.data.code, "updateType": 2, "device_member_uuid": state.device.data.device_member_uuid})
    
        if ((action33.status) === ("error")) {
          const action34message = (action33.message || "操作错误！")
          const action34title = ("提示")
          action34message && dw.alert(action34title, action34message)
          return {}
        }
        
    const action92 = store.commit('setState', {["state.updateType"]: "2"})
  } else {
    const action84 = await dw.app.run("mqtt.send_device_firmware", {"mode": mode, "type": 1, "otaPath": state.newest_version.data.file_path, "version": state.newest_version.data.code, "updateType": 2, "device_member_uuid": state.device.data.device_member_uuid})
    
        if ((action84.status) === ("error")) {
          const action85message = (action84.message || "操作错误！")
          const action85title = ("提示")
          action85message && dw.alert(action85title, action85message)
          return {}
        }
        
    const action93 = store.commit('setState', {["state.updateType"]: "2"})
  }
  /* action36: 开始更新，弹出更新面板 */
  const action38 = store.commit('setState', {["state.processPop"]: true})
}

const action40 = actions['func8'] = function (store, event) {
  const state = store.state
  const action41 = store.commit('setState', {["state.processPop"]: false})
}

const action62 = actions['func9'] = async function (store, event) {
  const state = store.state
  const action63 = console.log('[func9#action63] 更新下载完成', )
  let message = ("更新下载完成")
  const action143 = message
  const action144 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  const action94 = store.commit('setState', {["state.type"]: "2"})
}

const action67 = actions['func10'] = async function (store, event) {
  const state = store.state
  if (state.newest_version.data.ota_type === 'all') {
    const action69 = await dw.app.run("mqtt.send_device_firmware", {"mode": mode, "type": 1, "otaPath": state.newest_version.data.file_path, "version": state.newest_version.data.code + '|' + state.device.data.version.split("|")[1], "updateType": 2, "device_member_uuid": state.device.data.device_member_uuid})
    
        if ((action69.status) === ("error")) {
          const action70message = (action69.message || "操作错误！")
          const action70title = ("提示")
          action70message && dw.alert(action70title, action70message)
          return {}
        }
        
    /* action71: 开始更新，弹出更新面板 */
    const action112 = store.commit('setState', {["state.updateType"]: "2", ["state.type"]: "1", ["state.process"]: 0, ["state.processPop"]: true})
  }
}

const action133 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action134 = modalInstance = (event.data)
  const action135 = console.log('[getModalInstance#action135] 打印(modalInstance)', modalInstance)
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

var mode = 'prod';
var action73 = mode;
var modalInstance = null;
var action145 = modalInstance;
var action122 = actions['computed1'] = function (event, state) {
  var action123 = function (event) {
    if (state.newest_version.data.ota_type !== 'main') {

      return true;
    } else {
      var currentDeviceVersionCode = state.device.data.version.split("|")[0];
      if (currentDeviceVersionCode !== state.newest_version.data.code) {
        return true;
      }
    }
    return false;
  }(event);
  var action127 = console.log('[computed1#action127] 打印(action123)的返回值', action123);
  //MACRO:DEBUG window.vconsole.log('log:workflow', {func: 'computed1', action: 'action127', label: `打印(action123)的返回值`, valueVar: "action123", value: [action123]})
  return action123;
};
// COMPUTED_ACTION_META:computed1 {"deps":["newest_version","device"]}

var action125 = actions['computed2'] = function (event, state) {
  return state.device.data.version.split("|")[0];
};
// COMPUTED_ACTION_META:computed2 {"deps":["device"]}

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdw2ut: {
  color: "#000000",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw2uu: {
  color: "#666666",
  fontSize: pm(10),
  marginTop: pm(10),
  fontWeight: "400",
  lineHeight: pm(15),
},
xdw2uv: {
  marginTop: pm(14),
  minHeight: pm(206),
  paddingTop: pm(13),
  paddingLeft: pm(13),
  paddingRight: pm(13),
  flexDirection: "column",
  paddingBottom: pm(13),
  backgroundColor: "#ffffff",
},
xdw2uw: {
  flexGrow: 1,
  flexShrink: 1,
  flexDirection: "column",
},
xdw2ux: {
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw2uy: {
  width: pm(300),
  height: pm(38),
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
xdw2uz: {
  left: pm(10),
  width: pm(300),
  bottom: pm(10),
  height: pm(38),
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#FFD355",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw2v0: {
  fontSize: pm(15),
  marginTop: pm(14),
  fontWeight: "500",
  lineHeight: pm(21),
  marginLeft: pm(17),
  marginBottom: pm(7),
},
xdw2v1: {
  color: "#666666",
  fontSize: pm(12),
  lineHeight: pm(17),
  marginLeft: pm(17),
  marginRight: pm(36),
},
xdw2v2: {
  height: pm(9),
  flexDirection: "column",
  backgroundColor: "#FFD355",
  borderTopLeftRadius: pm(4),
  borderTopRightRadius: pm(4),
  borderBottomLeftRadius: pm(4),
  borderBottomRightRadius: pm(4),
},
xdw2v3: {
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
xdw2v4: {
  color: "#181818",
  fontSize: pm(10),
  marginTop: pm(7),
  lineHeight: pm(15),
  marginLeft: pm(17),
},
xdw2v5: {
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
xdw2v6: {
  flex: 1,
  zIndex: 10,
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw2v7: {
  flex: 1,
  width: "100%",
  overflow: "scroll",
  borderTopWidth: pm(1),
  borderTopColor: "#eeeeee",
  flexDirection: "column",
  backgroundColor: "#f8f8f8",
}
});
const slide = {"type":"176279","key":"c1762791","slug":null,"randomid":"id_0172eeafd62bd9aedda6df40","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":"铜爪V2.0.0更新内容"}},"Text2":{"ctx_map":{"text":"修复了一些已知问题。"}},"Text3":{"ctx_map":{"text":"更新"}},"Text4":{"ctx_map":{"text":"更新","numberOfLines":1}},"Text5":{"ctx_map":{"text":"请勿断开设备电源及网络连接，正 在加速更新..."}},"Text6":{"ctx_map":{"text":"这是一个文本组件","numberOfLines":1}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"Modal1":{"ctx_map":{"mask":true,"value":false,"position":"center","baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"DwappCloud1":{"ctx_map":{"color1":""}},"DwappCloud2":{"ctx_map":{"bool1":true,"bool2":false,"text1":"固件版本","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud3":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[]}},"NativeButton1":{"ctx_map":{"type":"button"}}}};
slide.components.DwappCloud2.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  flexDirection: "column",
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
const pageGroupSlug = 'app_tongzhua-firmware_version';

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
      <Xbenchc176286 /* DwappCloud2 */ isCuzBtn={ slide.components.DwappCloud2.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud2.ctx_map.bool2 } eventData={ slide.components.DwappCloud2.ctx_map.prop1 } eventData2={ slide.components.DwappCloud2.ctx_map.prop2 } title={ slide.components.DwappCloud2.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud2.ctx_map.text2 } confirmText={ slide.components.DwappCloud2.ctx_map.text3 } cancelText={ slide.components.DwappCloud2.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud2.ctx_map.color1 } confirmColor={ slide.components.DwappCloud2.ctx_map.color2 } cancelColor={ slide.components.DwappCloud2.ctx_map.color3 } backIcon={ slide.components.DwappCloud2.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud2.ctx_map.image2 } titleStyle={ slide.components.DwappCloud2.ctx_map.style1 } screenType={ slide.components.DwappCloud2.ctx_map.select1 } ></Xbenchc176286>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw2v7} scrollX={ false } scrollY={ true } >{!!(state.ready) /* ViewIf1 */ && (<><View /* View3 */   style={styles.xdw2uw}><View /* View1 */   style={styles.xdw2uv}><Text /* Text1 */ style={styles.xdw2ut} >{"铜爪" + state.newest_version.data.code + "更新内容"}</Text>
<Text /* Text2 */ style={styles.xdw2uu} >{state.newest_version.data.summary}</Text></View></View>
<View /* View2 */   style={[styles.xdw2uz, ({
  opacity: !!computeds.computed1({}, state) ? 1 : 0.5
})]}><XbenchcButton /* NativeButton1 */ viewStyle={styles.xdw2uy} onClick={getEvent('NativeButton1:onClick:func7:', {}, bagForKeyValue, bagForIndex)}><Text /* Text3 */ style={styles.xdw2ux} >{slide.components.Text3.ctx_map.text}</Text></XbenchcButton></View>
<Xbenchc168613 /* DwappCloud1 */ backgroundColor={ slide.components.DwappCloud1.ctx_map.color1 } ></Xbenchc168613></>)}
<XbenchcModal /* Modal1 */ rootStyle={styles.xdw2v6} value={ state.processPop } mask={ true } maskClosable={ true }  onValueChange={getEvent('Modal1:onValueChange:func8:', {}, bagForKeyValue, bagForIndex)}><View /* View5 */   style={styles.xdw2v5}><Text /* Text4 */ style={styles.xdw2v0} numberOfLines={1}>{slide.components.Text4.ctx_map.text}</Text>
<Text /* Text5 */ style={styles.xdw2v1} >{`${{
  "1": "单片机程序",
  "2": "芯片程序",
}[state.updateType]}${{
  "1": "下载中，请勿断开设备电源及网络连接",
  "2": "烧录中，预计需要5分钟左右完成更新，请勿断开设备电源及网络连接",
}[state.type]}`}</Text>
{!!(state.type === '1') /* ViewIf2 */ && (<><View /* View6 */   style={styles.xdw2v3}><View /* View7 */   style={[styles.xdw2v2, ({
  width: `${state.process}%`
})]}></View></View>
<Text /* Text6 */ style={styles.xdw2v4} numberOfLines={1}>{state.process + "%"}</Text></>)}</View></XbenchcModal>
<Xbenchc275104 /* DwappCloud3 */ valueStyle={ slide.components.DwappCloud3.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud3.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud3.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud3:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104></XbenchcScrollView>
    </ErrorBoundary>
  )
}
