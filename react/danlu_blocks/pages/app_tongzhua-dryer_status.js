
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

let modalInstance = (null)
const action52 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action6 = state.device_member = (null)
  const action25 = state.platform = ("dwapp")
  const action27 = state.pop_show = (false)
  const action30 = state.isLoad = (false)
  return state
}

const action42 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action43 = modalInstance = (event.data)
  const action44 = console.log('[getModalInstance#action44] 打印(modalInstance)', modalInstance)
}

const action7 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action26 = store.commit('setState', {["state.platform"]: dw.platform})
  const action8 = await store.dispatch("func1", {})
  const action31 = store.commit('setState', {["state.isLoad"]: true})
}

const action2 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action3 = await (async (store, event) => {
const key = "device_setting/device_member"
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
  
        if (!!(!action3) === (true)) {
          const action4message = ("当前设备数据加载错误")
          const action4title = ("提示")
          action4message && dw.alert(action4title, action4message)
          return {}
        }
        
  const action5 = store.commit('setState', {["state.device_member"]: action3})
}

const action9 = actions['func2'] = async function (store, event) {
  const state = store.state
  let msg = ("是否确认重置干燥干燥剂天数?")
  const action47 = msg
  const action48 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(msg)
}
else{
  return null
}
})(store, event)
  if (!action48) {
    return event
  }
  const action13 = await dw.showLoading({
    title: "",
    mask: false
  })
  let days = (Number(state.device_member.data.dryer_config))
  const action18 = days
  const action10 = await dw.app.run("device_member.update", {"id": state.device_member.id, "formData": {dryer_days: days}})
  const action14 = await dw.hideLoading()
  
        if ((action10.status) === ("error")) {
          const action15message = (action10.message || "操作错误！")
          const action15title = ("提示")
          action15message && dw.alert(action15title, action15message)
          return {}
        }
        
  let message = ("干燥剂重置成功")
  const action54 = message
  const action55 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  const action17 = store.commit('setState', {["state.device_member.data.dryer_days"]: days})
  const action21 = await store.dispatch("func3", {})
}

const action19 = actions['func3'] = async function (store, event) {
  const state = store.state
  const action20 = await (async (store, event) => {
const key_device_member = "device_setting/device_member"
const jsonValue2 = JSON.stringify(state.device_member)
if(state.platform === 'rnapp'){
  const AsyncStorage = dw.getNativePackage('AsyncStorage')
  await AsyncStorage.setItem(key_device_member, jsonValue2)
}
else{
  window.localStorage.setItem(key_device_member, jsonValue2)
}
})(store, event)
}

const action22 = actions['func4'] = function (store, event) {
  const state = store.state
  let slug = (event.context.eventData)
  const action24 = slug
  const action23 = dw.app.goToPappUrl(slug, {}, {redirectTo: false})
}

const action28 = actions['func5'] = function (store, event) {
  const state = store.state
  const action29 = store.commit('setState', {["state.pop_show"]: true})
}

const action70 = actions['func7'] = function (store, event) {
  const state = store.state
  const action71 = store.commit('setState', {["state.pop_show"]: false})
}

const action32 = actions['func6'] = async function (store, event) {
  const state = store.state
  const action41 = store.commit('setState', {["state.device_member.data.dryer_config"]: event.context.eventData})
  const action33 = undefined
  if (event.context.eventData == 15) {
    const action34 = await dw.app.run("device_member.update", {"id": state.device_member.id, "formData": {/**/  dryer_config: state.device_member.data.dryer_config,/**/  dryer_days: state.device_member.data.dryer_days - 4/**/}})
    const action68 = store.commit('setState', {["state.device_member.data.dryer_days"]: state.device_member.data.dryer_days - 4})
    
        if ((action34.status) === ("error")) {
          const action36message = (action34.message || "操作错误！")
          const action36title = ("提示")
          action36message && dw.alert(action36title, action36message)
          return {}
        }
        
    await new Promise((resolve, reject) => setTimeout(resolve, 500))
    const action40 = await store.dispatch("func3", {})
    const action39 = store.commit('setState', {["state.pop_show"]: false})
  } else if (event.context.eventData == 28) {
    const action61 = await dw.app.run("device_member.update", {"id": state.device_member.id, "formData": {/**/  dryer_config: state.device_member.data.dryer_config,/**/  dryer_days: state.device_member.data.dryer_days + 4/**/}})
    const action69 = store.commit('setState', {["state.device_member.data.dryer_days"]: state.device_member.data.dryer_days + 4})
    
        if ((action61.status) === ("error")) {
          const action62message = (action61.message || "操作错误！")
          const action62title = ("提示")
          action62message && dw.alert(action62title, action62message)
          return {}
        }
        
    await new Promise((resolve, reject) => setTimeout(resolve, 500))
    const action66 = await store.dispatch("func3", {})
    const action67 = store.commit('setState', {["state.pop_show"]: false})
  }
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
xdw1ed: {
  width: pm(45),
  height: pm(56),
  marginRight: pm(7),
},
xdw1ee: {
  color: "#999999",
  fontSize: pm(12),
  fontWeight: "400",
  lineHeight: pm(17),
  marginRight: pm(3),
},
xdw1ef: {
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
  marginRight: pm(3),
},
xdw1eg: {
  color: "#FF3737",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
  marginRight: pm(3),
},
xdw1eh: {
  color: "#999999",
  fontSize: pm(12),
  fontWeight: "400",
  lineHeight: pm(17),
  marginRight: pm(12),
},
xdw1ei: {
  width: pm(17),
  height: pm(17),
},
xdw1ej: {
  fontSize: pm(13),
  fontWeight: "500",
  lineHeight: pm(18),
},
xdw1ek: {
  width: pm(61),
  height: pm(29),
  alignItems: "center",
  marginLeft: "auto",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#FFD355",
  borderTopLeftRadius: pm(17),
  borderTopRightRadius: pm(17),
  borderBottomLeftRadius: pm(17),
  borderBottomRightRadius: pm(17),
},
xdw1el: {
  width: pm(299.403),
  height: pm(75.064),
  alignItems: "center",
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10.236),
  borderTopRightRadius: pm(10.236),
  borderBottomLeftRadius: pm(10.236),
  borderBottomRightRadius: pm(10.236),
},
xdw1em: {
  width: pm(299.403),
  height: pm(75.064),
  marginTop: pm(17.913),
  marginLeft: pm(10.236),
  marginRight: pm(10.236),
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10.236),
  borderTopRightRadius: pm(10.236),
  borderBottomLeftRadius: pm(10.236),
  borderBottomRightRadius: pm(10.236),
},
xdw1en: {
  color: "#999999",
  fontSize: pm(12),
  fontWeight: "400",
  lineHeight: pm(17),
},
xdw1eo: {
  width: pm(12),
  height: pm(12),
},
xdw1ep: {
  alignItems: "center",
  marginLeft: "auto",
  flexDirection: "row",
  justifyContent: "center",
},
xdw1eq: {
  width: pm(299.403),
  height: pm(47.768),
  alignItems: "center",
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10.236),
  borderTopRightRadius: pm(10.236),
  borderBottomLeftRadius: pm(10.236),
  borderBottomRightRadius: pm(10.236),
},
xdw1er: {
  width: pm(299.403),
  height: pm(47.768),
  marginTop: pm(9.383),
  marginLeft: pm(10.236),
  marginRight: pm(10.236),
  flexDirection: "column",
  borderTopLeftRadius: pm(10.236),
  borderTopRightRadius: pm(10.236),
  borderBottomLeftRadius: pm(10.236),
  borderBottomRightRadius: pm(10.236),
},
xdw1es: {
  flexGrow: 1,
  flexDirection: "column",
  backgroundColor: "#F8F8F8",
},
xdw1et: {
  color: "#181818",
  fontSize: pm(15),
  textAlign: "center",
  alignItems: "center",
  fontFamily: "Noto Sans CJK SC",
  lineHeight: pm(24),
  alignContent: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#ffffff",
},
xdw1eu: {
  width: pm(320),
  height: pm(47.768),
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
},
xdw1ev: {
  width: pm(292.704),
  height: pm(0.5),
  marginLeft: pm(13.648),
  marginRight: pm(13.648),
  flexDirection: "column",
  backgroundColor: "#f0f0f0",
},
xdw1ew: {
  color: "#000000",
  fontSize: pm(12),
  fontWeight: "400",
  lineHeight: pm(17),
  marginRight: pm(3),
},
xdw1ex: {},
xdw1ey: {
  height: pm(47.768),
  alignItems: "center",
  paddingTop: pm(13.648),
  paddingLeft: pm(13.648),
  paddingRight: pm(13.648),
  flexDirection: "row",
  paddingBottom: pm(13.648),
  backgroundColor: "#ffffff",
},
xdw1ez: {
  width: pm(320),
  height: pm(47.768),
  marginTop: pm(1),
  flexDirection: "column",
  backgroundColor: "#ffffff",
},
xdw1f0: {
  width: pm(320),
  height: pm(47.768),
  marginTop: pm(0.5),
  flexDirection: "column",
  backgroundColor: "#ffffff",
},
xdw1f1: {
  width: pm(320),
  height: pm(172.306),
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(13.648),
  borderTopRightRadius: pm(13.648),
},
xdw1f2: {
  flex: 1,
  zIndex: 10,
  position: "relative",
  alignItems: "flex-end",
  flexDirection: "row",
  justifyContent: "center",
}
});
const slide = {"type":"172379","key":"c1723791","slug":null,"randomid":"id_ea82f6b00f579552ca10aec1","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":"剩余"}},"Text2":{"ctx_map":{"text":"重置"}},"Text3":{"ctx_map":{"text":"28"}},"Text5":{"ctx_map":{"text":"天"}},"Text6":{"ctx_map":{"text":"更换周期"}},"Text7":{"ctx_map":{"text":"28天（适用于北方）"}},"Text8":{"ctx_map":{"text":"28"}},"Text9":{"ctx_map":{"text":"","numberOfLines":1}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,90,112","src":"u/dev064/2023/03/03/RhJQ3pkmHeQVuuFq4pk3gF/SketchPng8d7d79b7f9400f77e41c3a9b615ad894316f6f249590b4239ae9a33c610b4226.png"}},"Image3":{"ctx_map":{"fop":"e,50,50","src":"u/dev064/2023/03/03/7fRM3unQHAp5FAHpys4rGJ/企业微信截图_20230303091334.png"}},"Image4":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Image5":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/03/03/3KcHRL6xjZMeZLsSLtcHkC/SketchPng8141b19c4766ab5e73849b84c0a48779747796c199c154adbfcea8c703d6cee7.png"}},"Image6":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/03/03/3KcHRL6xjZMeZLsSLtcHkC/SketchPng8141b19c4766ab5e73849b84c0a48779747796c199c154adbfcea8c703d6cee7.png"}},"Modal1":{"ctx_map":{"mask":true,"value":false,"position":"center","baseIndex":2000,"maskClosable":true,"destroyOnClose":false,"appendKeyboardHeight":true}},"Text10":{"ctx_map":{"text":"28天（适用于北方）"}},"Text11":{"ctx_map":{"text":"15天（适用于南方）"}},"Text12":{"ctx_map":{"text":"请选择更换周期","numberOfLines":1}},"Text15":{"ctx_map":{"text":"15天（适用于南方）"}},"Text16":{"ctx_map":{"text":"28天（适用于北方）"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewIf5":{"ctx_map":{"value":true}},"ViewIf6":{"ctx_map":{"value":true}},"ViewIf7":{"ctx_map":{"value":true}},"SvgImage1":{"ctx_map":{"src":"u/dev069/2023/12/15/hVpnEByoHMNvKW9H286rMT/选中干燥机xiaologo.png","color":"#07c160","width":20.472,"height":20.472,"SvgImageManage":"SvgImageManage"}},"SvgImage2":{"ctx_map":{"src":"u/dev069/2023/12/15/BxkZUsbxjnksdYJENsPrtd/选中干燥机xiaologo.png","color":"#07c160","width":20.472,"height":20.472,"SvgImageManage":"SvgImageManage"}},"DwappCloud1":{"ctx_map":{"bool1":true,"bool2":false,"text1":"干燥剂","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud2":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"ShadowView1":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}},"ShadowView2":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}}}};
slide.components.DwappCloud1.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  flexDirection: "column",
};
slide.components.DwappCloud2.ctx_map.valueStyle = {
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
slide.components.DwappCloud2.ctx_map.containerStyle = {
  marginBottom: pm(18),
  flexDirection: "column",
};
slide.components.DwappCloud2.ctx_map.valueInputStyle = {
  color: "#333333",
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-dryer_status';

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
      {!!(state.isLoad) /* ViewIf5 */ && (<><Xbenchc176286 /* DwappCloud1 */ isCuzBtn={ slide.components.DwappCloud1.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud1.ctx_map.bool2 } eventData={ slide.components.DwappCloud1.ctx_map.prop1 } eventData2={ slide.components.DwappCloud1.ctx_map.prop2 } title={ slide.components.DwappCloud1.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud1.ctx_map.text2 } confirmText={ slide.components.DwappCloud1.ctx_map.text3 } cancelText={ slide.components.DwappCloud1.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud1.ctx_map.color1 } confirmColor={ slide.components.DwappCloud1.ctx_map.color2 } cancelColor={ slide.components.DwappCloud1.ctx_map.color3 } backIcon={ slide.components.DwappCloud1.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud1.ctx_map.image2 } titleStyle={ slide.components.DwappCloud1.ctx_map.style1 } screenType={ slide.components.DwappCloud1.ctx_map.select1 } ></Xbenchc176286>
<View /* View1 */   style={styles.xdw1es}>{!!(state.device_member) /* ViewIf4 */ && (<><Shadow containerStyle={styles.xdw1em} {...({ offset: [0, 4], distance: 14, startColor: 'rgb(0,0,0,0.05)' })}><View /* View2 */   style={styles.xdw1el}><XbenchcImage /* Image1 */ style={styles.xdw1ed} source={dwtools.qiniu(slide.components.Image1.ctx_map.src, slide.components.Image1.ctx_map.fop)}  />
<Text /* Text1 */ style={styles.xdw1ee} >{slide.components.Text1.ctx_map.text}</Text>
{!!(state.device_member.data.dryer_days > 0) /* ViewIf1 */ && (<><Text /* Text3 */ style={styles.xdw1ef} >{state.device_member.data.dryer_days}</Text></>)}
{!!(state.device_member.data.dryer_days <= 0) /* ViewIf2 */ && (<><Text /* Text8 */ style={styles.xdw1eg} >{state.device_member.data.dryer_days}</Text></>)}
<Text /* Text5 */ style={styles.xdw1eh} >{slide.components.Text5.ctx_map.text}</Text>
{!!(state.device_member.data.dryer_days <= 0) /* ViewIf3 */ && (<><XbenchcImage /* Image3 */ style={styles.xdw1ei} source={dwtools.qiniu(slide.components.Image3.ctx_map.src, slide.components.Image3.ctx_map.fop)}  /></>)}
<XbenchcView /* View3 */   viewStyle={styles.xdw1ek} onClick={getEvent('View3:onClick:func2:', {}, bagForKeyValue, bagForIndex)}><Text /* Text2 */ style={styles.xdw1ej} >{slide.components.Text2.ctx_map.text}</Text></XbenchcView></View></Shadow>
<Shadow containerStyle={styles.xdw1er} {...({ offset: [0, 4], distance: 14, startColor: 'rgb(0,0,0,0.05)' })}><XbenchcView /* View4 */   viewStyle={styles.xdw1eq} onClick={getEvent('View4:onClick:func5:', {eventData: "dryer_cycle"}, bagForKeyValue, bagForIndex)}><Text /* Text6 */ style={styles.xdw1ef} >{slide.components.Text6.ctx_map.text}</Text>
<View /* View5 */   style={styles.xdw1ep}><Text /* Text7 */ style={styles.xdw1en} >{state.device_member.data.dryer_config === "15" ? "15天（适用于南方）" : "28天（适用于北方）"}</Text>
<XbenchcImage /* Image4 */ style={styles.xdw1eo} source={dwtools.qiniu(slide.components.Image4.ctx_map.src, slide.components.Image4.ctx_map.fop)}  /></View></XbenchcView></Shadow></>)}</View>
<XbenchcModal /* Modal1 */ rootStyle={styles.xdw1f2} value={ state.pop_show } mask={ true } maskClosable={ true } appendKeyboardHeight={ true }  onValueChange={getEvent('Modal1:onValueChange:func7:', {}, bagForKeyValue, bagForIndex)}><View /* View6 */   style={styles.xdw1f1}><View /* View7 */   style={styles.xdw1eu}><Text /* Text12 */ style={styles.xdw1et} numberOfLines={1}>{slide.components.Text12.ctx_map.text}</Text></View>
<View /* View10 */   style={styles.xdw1ev}></View>
<View /* View8 */   style={styles.xdw1ez}><XbenchcView /* View14 */   viewStyle={styles.xdw1ey} onClick={getEvent('View14:onClick:func6:', {eventData: "15"}, bagForKeyValue, bagForIndex)}><Text /* Text15 */ style={styles.xdw1ew} >{slide.components.Text15.ctx_map.text}</Text>
{!!(state.device_member.data.dryer_config === "15") /* ViewIf7 */ && (<><View /* View15 */   style={styles.xdw1ep}><Image /* SvgImage1 */ style={[ styles.xdw1ex, { width: pm(20.472), height: pm(20.472) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev069/2023/12/15/hVpnEByoHMNvKW9H286rMT/选中干燥机xiaologo.png"), width: pm(20.472), height: pm(20.472) }} /></View></>)}</XbenchcView></View>
<View /* View11 */   style={styles.xdw1ev}></View>
<View /* View9 */   style={styles.xdw1f0}><XbenchcView /* View12 */   viewStyle={styles.xdw1ey} onClick={getEvent('View12:onClick:func6:', {eventData: "28"}, bagForKeyValue, bagForIndex)}><Text /* Text16 */ style={styles.xdw1ew} >{slide.components.Text16.ctx_map.text}</Text>
{!!(state.device_member.data.dryer_config === "28") /* ViewIf6 */ && (<><View /* View13 */   style={styles.xdw1ep}><Image /* SvgImage2 */ style={[ styles.xdw1ex, { width: pm(20.472), height: pm(20.472) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev069/2023/12/15/BxkZUsbxjnksdYJENsPrtd/选中干燥机xiaologo.png"), width: pm(20.472), height: pm(20.472) }} /></View></>)}</XbenchcView></View></View></XbenchcModal>
<Xbenchc275104 /* DwappCloud2 */ valueStyle={ slide.components.DwappCloud2.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud2.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud2.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud2:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104></>)}
    </ErrorBoundary>
  )
}
