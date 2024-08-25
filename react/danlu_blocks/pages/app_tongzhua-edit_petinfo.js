
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcButton from '../../xbench/xbenchc/components/XbenchcButton'
import XbenchUploadContainer from '../../xbench/components/XbenchUploadContainer'
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

let action57lock = false
let action68lock = false
let modalInstance = (null)
const action104 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action2 = state.formData = ({/**/  name:"",/**/  image:"https://dev064.d2scdn.com/u/dev070/2023/02/27/uRTwKBr7UNgizTPgeC3Jwc/WechatIMG79.jpeg",/**/  type:undefined,/**/  device_member_uuid:undefined,/**/  category_uuid:undefined,/**/  gender:undefined,/**/  birthday_display:undefined,/**/  birthday:undefined,/**/  weight:undefined,/**/  is_ste:undefined,/**/  siteuser_id:undefined/**/})
  const action13 = state.uuid = (undefined)
  const action47 = state.showAvatarPopup = (false)
  return state
}

const action3 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action26 = await store.dispatch("func1", {})
}

const action98 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action99 = modalInstance = (event.data)
  const action100 = console.log('[getModalInstance#action100] 打印(modalInstance)', modalInstance)
}

const action4 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action5 = dw.query
  const action62 = console.log('[func1#action62] 打印(action5)的返回值', action5)
  let uuid = (action5.uuid)
  const action6 = uuid
  let action15
  

  if (uuid) {
    const action11 = await dw.app.run("pet.detail", {"uuid": uuid})
    
        if (!!(!action11.object) === (true)) {
          const action27message = ("获取宠物信息失败！")
          const action27title = ("提示")
          action27message && dw.alert(action27title, action27message)
          return {}
        }
        
    const action14 = store.commit('setState', {["state.formData"]: {...action11.object.data, id:action11.object.id}})
  } else {
    /* action29: 尝试获取缓存数据 */
    const action30 = await (async (store, event) => {
const key = "edit_petinfo/formData"
let cache;
if(dw.platform === 'rnapp'){
  const AsyncStorage = dw.getNativePackage('AsyncStorage')
  cache = await AsyncStorage.getItem(key)
}
else{
  cache = window.localStorage.getItem(key)
}

return JSON.parse(cache)
})(store, event)
    if (!!action30) {
      const action31 = store.commit('setState', {["state.formData"]: action30})
    }
  }
}

const action23 = actions['func4'] = async function (store, event) {
  const state = store.state
  const action24 = await (async (store, event) => {
const key = "edit_petinfo/formData"
const jsonValue = JSON.stringify(state.formData)
if(dw.platform === 'rnapp'){
  const AsyncStorage = dw.getNativePackage('AsyncStorage')
  await AsyncStorage.setItem(key, jsonValue)
}
else{
  window.localStorage.setItem(key, jsonValue)
}
})(store, event)
}

const action20 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action25 = await store.dispatch("func4", {})
  let slug = (event.context.eventData)
  const action21 = slug
  const action22 = dw.app.goToPappUrl(slug, {}, {redirectTo: false})
}

const action35 = actions['func5'] = async function (store, event) {
  const state = store.state
  if (state.formData && state.formData.id) {
    const action39 = await dw.app.run("pet.update", {"id": state.formData.id, "formData": state.formData})
    
        if ((action39.status) === ("error")) {
          const action42message = (action39.message || "操作错误！")
          const action42title = ("提示")
          action42message && dw.alert(action42title, action42message)
          return {}
        }
        
    const action43 = store.commit('setState', {["state.formData"]: {/**/  ...action39.object.data,/**/  id: action39.object.id/**/}})
  } else {
    const action41 = await dw.app.run("pet.create", {"formData": state.formData})
    
        if ((action41.status) === ("error")) {
          const action44message = (action41.message || "操作错误！")
          const action44title = ("提示")
          action44message && dw.alert(action44title, action44message)
          return {}
        }
        
    const action45 = store.commit('setState', {["state.formData"]: {/**/  ...action41.object.data,/**/  id: action41.object.id/**/}})
  }
  let msg = ("保存成功！")
  const action102 = msg
  const action103 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(msg)
}
else{
  return null
}
})(store, event)
  const action74 = await store.dispatch("func19", {})
}

/* action49: 头像 */
const action50 = actions['func13'] = async function (store, event) {
  const state = store.state
  const action76 = await (async (store, event) => {
const ImagePicker = dw.getNativePackage('ImagePicker')

const { status } = await ImagePicker.requestCameraPermissionsAsync();
console.log('status', status)
if (status !== 'granted') {
  dw.alert("请允许访问相机")
  return;
}
})(store, event)
  const action51 = store.commit('setState', {["state.showAvatarPopup"]: true})
}

const action52 = actions['func14'] = function (store, event) {
  const state = store.state
  const action53 = store.commit('setState', {["state.showAvatarPopup"]: false})
}

const action54 = actions['func17'] = async function (store, event) {
  const state = store.state
  const action55 = console.log('[func17#action55] 打印头像回调', event)
  const action56 = store.commit('setState', {["state.showAvatarPopup"]: false})
  const action57 = await (async () => {
  
      if (action57lock) return true
      action57lock = true
      try {
    if (event.data) {
      const action60 = store.commit('setState', {["state.formData.image"]: event.data})
      if (state.formData.id) {
        const action80 = await store.dispatch("func5", {})
      }
    }
  
      } catch (e) {
        throw e
      } finally {
        action57lock = false
      }
      
  })()
}

const action65 = actions['func18'] = async function (store, event) {
  const state = store.state
  let msg = ("是否确认删除？")
  const action93 = msg
  const action94 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(msg)
}
else{
  return null
}
})(store, event)
  if (!action94) {
    return event
  }
  const action68 = await (async () => {
  
      if (action68lock) return true
      action68lock = true
      try {
    const action69 = await dw.app.run("auto_group_pet.delete", {"id": state.formData.id})
    
        if ((action69.status) === ("error")) {
          const action70message = (action69.message || "操作错误！")
          const action70title = ("提示")
          action70message && dw.alert(action70title, action70message)
          return {}
        }
        
    let message = ("删除成功")
    const action106 = message
    const action107 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    const action75 = await store.dispatch("func19", {})
    const action72 = await dw.navigateBack({delta: 1})
  
      } catch (e) {
        throw e
      } finally {
        action68lock = false
      }
      
  })()
}

const action73 = actions['func19'] = async function (store, event) {
  const state = store.state
  const action64 = await (async (store, event) => {
const key = "edit_petinfo/formData"
if(dw.platform === 'rnapp'){
  const AsyncStorage = dw.getNativePackage('AsyncStorage')
  cache = await AsyncStorage.removeItem(key)
}
else{
  cache = window.localStorage.removeItem(key)
}
})(store, event)
}

const action81 = actions['func20'] = async function (store, event) {
  const state = store.state
  const action83 = await store.dispatch("func4", {})
  if (!!state.formData.type) {
    const action85 = dw.app.goToPappUrl("edit_breed", {"pet_type": state.formData.type}, {redirectTo: false})
  } else {
    const action90 = dw.app.goToPappUrl("edit_breed", {}, {redirectTo: false})
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
xdw214: {
  flexGrow: 1,
  fontSize: pm(12),
  flexShrink: 1,
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw215: {
  width: pm(30),
  height: pm(30),
  borderTopWidth: pm(1),
  borderTopColor: "#ffffff",
  borderLeftWidth: pm(1),
  borderLeftColor: "#ffffff",
  borderRightWidth: pm(1),
  borderRightColor: "#ffffff",
  marginRight: pm(7),
  borderBottomWidth: pm(1),
  borderBottomColor: "#ffffff",
  borderTopLeftRadius: pm(999),
  borderTopRightRadius: pm(999),
  borderBottomLeftRadius: pm(999),
  borderBottomRightRadius: pm(999),
},
xdw216: {
  width: pm(12),
  height: pm(12),
},
xdw217: {
  flexWrap: "nowrap",
  marginTop: pm(10),
  alignItems: "center",
  paddingTop: pm(7),
  paddingLeft: pm(10),
  marginBottom: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(7),
  justifyContent: "flex-start",
  backgroundColor: "#ffffff",
},
xdw218: {
  color: "#666666",
  flexGrow: 0,
  fontSize: pm(12),
  flexShrink: 0,
  fontWeight: "400",
  lineHeight: pm(17),
  marginRight: pm(7),
},
xdw219: {
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
xdw21a: {
  flexDirection: "column",
  backgroundColor: "#ffffff",
},
xdw21b: {
  color: "#ff6b6b",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw21c: {
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
xdw21d: {
  width: pm(300),
  height: pm(38),
  marginTop: pm(34),
  alignItems: "center",
  marginLeft: "auto",
  marginRight: "auto",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#ececec",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw21e: {
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw21f: {
  width: pm(300),
  height: pm(38),
  marginTop: pm(34),
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
xdw21g: {
  color: "#000000",
  fontSize: pm(12),
  textAlign: "center",
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw21h: {
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
  flexDirection: "row",
  justifyContent: "center",
},
xdw21i: {
  borderBottomWidth: pm(1),
  borderBottomColor: "#eeeeee",
},
xdw21j: {
  color: "#000000",
  fontSize: pm(12),
  textAlign: "center",
  fontWeight: "500",
  lineHeight: pm(38),
},
xdw21k: {
  justifyContent: "center",
},
xdw21l: {
  width: pm(300),
  height: pm(38),
  borderTopWidth: pm(0),
  borderTopColor: "transparent",
  textAlign: "left",
  borderLeftWidth: pm(0),
  borderLeftColor: "transparent",
  borderRightWidth: pm(0),
  borderRightColor: "transparent",
  borderBottomWidth: pm(0),
  borderBottomColor: "transparent",
},
xdw21m: {},
xdw21n: {
  fontSize: pm(14),
  fontWeight: "600",
  lineHeight: pm(19),
},
xdw21o: {
  width: "100%",
  height: pm(38),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#f0f0f0",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw21p: {
  marginTop: pm(9),
  flexDirection: "row",
},
xdw21q: {
  width: pm(320),
  paddingTop: pm(9),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(29),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
},
xdw21r: {
  flex: 1,
  zIndex: 10,
  alignItems: "flex-end",
  flexDirection: "row",
  justifyContent: "center",
},
xdw21s: {
  flex: 1,
  width: "100%",
  overflow: "scroll",
  borderTopWidth: pm(1),
  borderTopColor: "#eeeeee",
  backgroundColor: "#f8f8f8",
}
});
const slide = {"type":"170261","key":"c1702611","slug":null,"randomid":"id_a93a3f9f1b0a49e9abb397fb","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":"头像"}},"Text2":{"ctx_map":{"text":"昵称"}},"Text3":{"ctx_map":{"text":"类型"}},"Text4":{"ctx_map":{"text":"品种"}},"Text5":{"ctx_map":{"text":"性别"}},"Text6":{"ctx_map":{"text":"生日"}},"Text7":{"ctx_map":{"text":"体重"}},"Text8":{"ctx_map":{"text":"宠物粮"}},"Text9":{"ctx_map":{"text":"昵称"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image2":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Modal1":{"ctx_map":{"mask":true,"value":false,"baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Text10":{"ctx_map":{"text":"类型"}},"Text11":{"ctx_map":{"text":"品种"}},"Text12":{"ctx_map":{"text":"性别"}},"Text13":{"ctx_map":{"text":"生日"}},"Text14":{"ctx_map":{"text":"体重"}},"Text15":{"ctx_map":{"text":"体重"}},"Text16":{"ctx_map":{"text":"完成"}},"Text17":{"ctx_map":{"text":"取消"}},"Text18":{"ctx_map":{"text":"照相机"}},"Text19":{"ctx_map":{"text":"从相册选择"}},"Text20":{"ctx_map":{"text":"删除"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"Image10":{"ctx_map":{"fop":"e,100,100","src":"u/dev070/2023/03/02/8iCwUXry94rrKdEPsYVxuL/default_avatar.png"}},"Image11":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Image12":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Image13":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Image14":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Image15":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Image16":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Image17":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"DwappCloud1":{"ctx_map":{"bool1":true,"bool2":false,"text1":"宠物资料","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud2":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[]}},"NativeButton1":{"ctx_map":{"type":"button"}},"NativeButton2":{"ctx_map":{"type":"button"}},"NativeButton3":{"ctx_map":{"type":"button"}},"NativeButton4":{"ctx_map":{"type":"button"}},"NativeButton5":{"ctx_map":{"type":"button"}},"UploadContainer1":{"ctx_map":{"value":"","accept":"image/*","multiple":false,"provider":"cos_public","dwappCount":1,"dwappAccept":"image","rnappAccept":"ImagePicker:Images","showProgress":true,"dwappExtension":"","rnappExtension":"*/*","rnappAllowsEditing":false}},"UploadContainer2":{"ctx_map":{"value":"","accept":"image/*","multiple":false,"provider":"qiniu","dwappCount":1,"dwappAccept":"image","rnappAccept":"Camera:Images","showProgress":true,"dwappExtension":"","rnappExtension":"*/*","rnappAllowsEditing":true}}}};
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
const pageGroupSlug = 'app_tongzhua-edit_petinfo';

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
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw21s} scrollX={ false } scrollY={ true } >{!!(state.formData) /* ViewIf1 */ && (<><XbenchcView /* View1 */   viewStyle={styles.xdw217} onClick={getEvent('View1:onClick:func13:', {}, bagForKeyValue, bagForIndex)}><Text /* Text1 */ style={styles.xdw214} >{slide.components.Text1.ctx_map.text}</Text>
<XbenchcImage /* Image10 */ style={styles.xdw215} source={dwtools.qiniu(state.formData.image, slide.components.Image10.ctx_map.fop)}  />
<XbenchcImage /* Image2 */ style={styles.xdw216} source={dwtools.qiniu(slide.components.Image2.ctx_map.src, slide.components.Image2.ctx_map.fop)}  /></XbenchcView>
<View /* View2 */   style={styles.xdw21a}><XbenchcView /* View3 */   viewStyle={styles.xdw219} onClick={getEvent('View3:onClick:func2:', {eventData: "edit_nickname"}, bagForKeyValue, bagForIndex)}><Text /* Text2 */ style={styles.xdw214} >{slide.components.Text2.ctx_map.text}</Text>
<Text /* Text9 */ style={styles.xdw218} >{state.formData.name}</Text>
<XbenchcImage /* Image11 */ style={styles.xdw216} source={dwtools.qiniu(slide.components.Image11.ctx_map.src, slide.components.Image11.ctx_map.fop)}  /></XbenchcView>
<XbenchcView /* View4 */   viewStyle={styles.xdw219} onClick={getEvent('View4:onClick:func2:', {eventData: "edit_type"}, bagForKeyValue, bagForIndex)}><Text /* Text3 */ style={styles.xdw214} >{slide.components.Text3.ctx_map.text}</Text>
<Text /* Text10 */ style={styles.xdw218} >{state.formData._type_display}</Text>
<XbenchcImage /* Image12 */ style={styles.xdw216} source={dwtools.qiniu(slide.components.Image12.ctx_map.src, slide.components.Image12.ctx_map.fop)}  /></XbenchcView>
<XbenchcView /* View6 */   viewStyle={styles.xdw219} onClick={getEvent('View6:onClick:func2:', {eventData: "edit_sex"}, bagForKeyValue, bagForIndex)}><Text /* Text5 */ style={styles.xdw214} >{slide.components.Text5.ctx_map.text}</Text>
<Text /* Text12 */ style={styles.xdw218} >{state.formData._gender_display}</Text>
<XbenchcImage /* Image14 */ style={styles.xdw216} source={dwtools.qiniu(slide.components.Image14.ctx_map.src, slide.components.Image14.ctx_map.fop)}  /></XbenchcView>
<XbenchcView /* View7 */   viewStyle={styles.xdw219} onClick={getEvent('View7:onClick:func2:', {eventData: "edit_birthday"}, bagForKeyValue, bagForIndex)}><Text /* Text6 */ style={styles.xdw214} >{slide.components.Text6.ctx_map.text}</Text>
<Text /* Text13 */ style={styles.xdw218} >{state.formData.birthday_display}</Text>
<XbenchcImage /* Image15 */ style={styles.xdw216} source={dwtools.qiniu(slide.components.Image15.ctx_map.src, slide.components.Image15.ctx_map.fop)}  /></XbenchcView>
<XbenchcView /* View8 */   viewStyle={styles.xdw219} onClick={getEvent('View8:onClick:func2:', {eventData: "edit_weight"}, bagForKeyValue, bagForIndex)}><Text /* Text7 */ style={styles.xdw214} >{slide.components.Text7.ctx_map.text}</Text>
<Text /* Text14 */ style={styles.xdw218} >{state.formData.weight? (state.formData.weight + '千克'): '请设置'}</Text>
<XbenchcImage /* Image16 */ style={styles.xdw216} source={dwtools.qiniu(slide.components.Image16.ctx_map.src, slide.components.Image16.ctx_map.fop)}  /></XbenchcView></View>
{!!(state.formData.id) /* ViewIf2 */ && (<><View /* View16 */   style={[styles.xdw21d, ({
  "opacity": state.formData.name ? 1 : 0.7
})]}><XbenchcButton /* NativeButton5 */ viewStyle={styles.xdw21c} onClick={getEvent('NativeButton5:onClick:func18:', {}, bagForKeyValue, bagForIndex)}><Text /* Text20 */ style={styles.xdw21b} >{slide.components.Text20.ctx_map.text}</Text></XbenchcButton></View></>)}
{!!(!state.formData.id) /* ViewIf3 */ && (<><View /* View10 */   style={[styles.xdw21f, ({
  "opacity": state.formData.name ? 1 : 0.7
})]}><XbenchcButton /* NativeButton1 */ viewStyle={styles.xdw21c} onClick={getEvent('NativeButton1:onClick:func5:', {}, bagForKeyValue, bagForIndex)}><Text /* Text16 */ style={styles.xdw21e} >{slide.components.Text16.ctx_map.text}</Text></XbenchcButton></View></>)}
<XbenchcModal /* Modal1 */ rootStyle={styles.xdw21r} value={ state.showAvatarPopup } mask={ true } maskClosable={ true } ><View /* View11 */   style={styles.xdw21q}><View /* View15 */   style={styles.xdw21i}><XbenchUploadContainer /* UploadContainer1 */ value={ slide.components.UploadContainer1.ctx_map.value } provider={ "cos_public" } multiple={ false } dwappCount={ 1 } rnappAccept={ "ImagePicker:Images" } rnappExtension={ "*/*" } rnappAllowsEditing={ false }  onChange={getEvent('UploadContainer1:input:func17:', {}, bagForKeyValue, bagForIndex)}><XbenchcButton /* NativeButton4 */ viewStyle={styles.xdw21h}><Text /* Text19 */ style={styles.xdw21g} >{slide.components.Text19.ctx_map.text}</Text></XbenchcButton></XbenchUploadContainer></View>
<View /* View14 */   style={styles.xdw21m}><XbenchcButton /* NativeButton3 */ viewStyle={styles.xdw21l}><XbenchUploadContainer /* UploadContainer2 */ containerStyle={styles.xdw21k} value={ slide.components.UploadContainer2.ctx_map.value } provider={ "qiniu" } multiple={ false } dwappCount={ 1 } rnappAccept={ "Camera:Images" } rnappExtension={ "*/*" } rnappAllowsEditing={ true }  onChange={getEvent('UploadContainer2:input:func17:', {}, bagForKeyValue, bagForIndex)}><Text /* Text18 */ style={styles.xdw21j} >{slide.components.Text18.ctx_map.text}</Text></XbenchUploadContainer></XbenchcButton></View>
<View /* View12 */   style={styles.xdw21p}><View /* View13 */   style={styles.xdw21o}><XbenchcButton /* NativeButton2 */ viewStyle={styles.xdw21c} onClick={getEvent('NativeButton2:onClick:func14:', {}, bagForKeyValue, bagForIndex)}><Text /* Text17 */ style={styles.xdw21n} >{slide.components.Text17.ctx_map.text}</Text></XbenchcButton></View></View></View></XbenchcModal>
<Xbenchc275104 /* DwappCloud2 */ valueStyle={ slide.components.DwappCloud2.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud2.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud2.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud2:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104></>)}</XbenchcScrollView>
    </ErrorBoundary>
  )
}
