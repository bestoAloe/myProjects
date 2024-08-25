
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import Xbenchc171194 from '../components/Xbenchc171194'
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

let action96lock = false
let modalInstance = (null)
const action112 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action75 = state.ready = (false)
  const action87 = state.formData = (null)
  return state
}

const action3 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action7 = await store.dispatch("func1", {})
}

const action4 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action77 = await store.dispatch("func7", {})
  const action76 = store.commit('setState', {["state.ready"]: true})
}

const action72 = actions['func7'] = async function (store, event) {
  const state = store.state
  const action78 = await (async (store, event) => {
const key = "edit_petinfo/formData"
let res = null;
if(dw.platform === 'rnapp'){
  const AsyncStorage = dw.getNativePackage('AsyncStorage')
  res = await AsyncStorage.getItem(key)
}
else{
  res = window.localStorage.getItem(key)
}

if (res && res !== "undefined") return JSON.parse(res)

return null
})(store, event)
  if (!action78) {
    let message = ("操作异常,返回上一页")
    const action117 = message
    const action118 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(message)
}
else{
  return null
}
})(store, event)
    const action109 = await dw.navigateBack({delta: 1})
  } else {
    const action88 = console.log('[func7#action88] 打印action78', action78)
    const action86 = store.commit('setState', {["state.formData"]: action78})
  }
}

const action90 = actions['func9'] = async function (store, event) {
  const state = store.state
  const action91 = await (async (store, event) => {
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

const action95 = actions['func11'] = async function (store, event) {
  const state = store.state
  const action108 = store.commit('setState', {["state.formData.type"]: event.context.eventData, ["state.formData._type_display"]: {'cat': '喵星人', 'dog': '汪星人'}[event.context.eventData]})
  const action96 = await (async () => {
  
      if (action96lock) return true
      action96lock = true
      try {
    if (state.formData && !state.formData.id) {
      const action101 = await store.dispatch("func9", {})
    } else if (state.formData && state.formData.id) {
      /* action103: 更新宠物数据 */
      const action104 = await dw.app.run("pet.update", {"id": state.formData.id, "formData": state.formData})
    }
    let message = ("保存成功")
    const action120 = message
    const action121 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    const action110 = await dw.navigateBack({delta: 1})
  
      } catch (e) {
        throw e
      } finally {
        action96lock = false
      }
      
  })()
}

const action113 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action114 = modalInstance = (event.data)
  const action115 = console.log('[getModalInstance#action115] 打印(modalInstance)', modalInstance)
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
xdw24f: {
  color: "#ffffff",
  flexGrow: 1,
  fontSize: pm(19),
  flexShrink: 1,
  lineHeight: pm(26),
},
xdw24g: {
  width: pm(16),
  height: pm(16),
  paddingTop: pm(2),
  paddingLeft: pm(2),
  paddingRight: pm(2),
  paddingBottom: pm(2),
},
xdw24h: {
  width: pm(16),
  height: pm(16),
  borderTopWidth: pm(1),
  borderTopColor: "#ffffff",
  alignItems: "center",
  borderLeftWidth: pm(1),
  borderLeftColor: "#ffffff",
  borderRightWidth: pm(1),
  borderRightColor: "#ffffff",
  borderBottomWidth: pm(1),
  borderBottomColor: "#ffffff",
  flexDirection: "column",
  justifyContent: "center",
  borderTopLeftRadius: pm(999),
  borderTopRightRadius: pm(999),
  borderBottomLeftRadius: pm(999),
  borderBottomRightRadius: pm(999),
},
xdw24i: {
  flexWrap: "nowrap",
  alignItems: "center",
  paddingTop: pm(14),
  paddingLeft: pm(14),
  paddingRight: pm(14),
  flexDirection: "row",
  paddingBottom: pm(14),
},
xdw24j: {
  width: pm(292),
  marginTop: pm(14),
  overflow: "hidden",
  marginLeft: pm(14),
  flexDirection: "column",
  borderTopLeftRadius: pm(9),
  borderTopRightRadius: pm(9),
  borderBottomLeftRadius: pm(9),
  borderBottomRightRadius: pm(9),
},
xdw24k: {
  flex: 1,
  width: "100%",
  overflow: "scroll",
  borderTopWidth: pm(1),
  borderTopColor: "#eeeeee",
  paddingTop: pm(17),
}
});
const slide = {"type":"170271","key":"c1702711","slug":null,"randomid":"id_7f4355334870a1efda1a2d03","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text9":{"ctx_map":{"text":"喵星人"}},"Image6":{"ctx_map":{"fop":"e,32,32","src":"u/dev070/2023/02/27/3DnEk6Ee4XamrSppXvXomf/勾.png"}},"Image7":{"ctx_map":{"fop":"e,32,32","src":"u/dev070/2023/02/27/3DnEk6Ee4XamrSppXvXomf/勾.png"}},"Text10":{"ctx_map":{"text":"汪星人"}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"View20":{"ctx_map":{}},"View21":{"ctx_map":{}},"View22":{"ctx_map":{}},"View23":{"ctx_map":{}},"ViewIf6":{"ctx_map":{"value":true}},"ViewIf7":{"ctx_map":{"value":true}},"ViewIf8":{"ctx_map":{"value":true}},"DwappCloud1":{"ctx_map":{"fop1":"f,343,116","text1":"tab1","text2":"292px","text3":"100px","image1":"u/dev070/2023/03/06/PKKV5JfeFZBWrY7Fje9y8L/cat1.png"}},"DwappCloud2":{"ctx_map":{"fop1":"f,343,116","text1":"tab1","text2":"292px","text3":"100px","image1":"u/dev070/2023/03/06/mByXu8UQUJrowypNzcFE4G/dog.png"}},"DwappCloud3":{"ctx_map":{"bool1":true,"bool2":false,"text1":"宠物类型","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud4":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[]}}}};
slide.components.DwappCloud3.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  flexDirection: "column",
};
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
const pageGroupSlug = 'app_tongzhua-edit_type';

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
      <Xbenchc176286 /* DwappCloud3 */ isCuzBtn={ slide.components.DwappCloud3.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud3.ctx_map.bool2 } eventData={ slide.components.DwappCloud3.ctx_map.prop1 } eventData2={ slide.components.DwappCloud3.ctx_map.prop2 } title={ slide.components.DwappCloud3.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud3.ctx_map.text2 } confirmText={ slide.components.DwappCloud3.ctx_map.text3 } cancelText={ slide.components.DwappCloud3.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud3.ctx_map.color1 } confirmColor={ slide.components.DwappCloud3.ctx_map.color2 } cancelColor={ slide.components.DwappCloud3.ctx_map.color3 } backIcon={ slide.components.DwappCloud3.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud3.ctx_map.image2 } titleStyle={ slide.components.DwappCloud3.ctx_map.style1 } screenType={ slide.components.DwappCloud3.ctx_map.select1 } ></Xbenchc176286>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw24k} scrollX={ false } scrollY={ true } >{!!(state.ready) /* ViewIf7 */ && (<><XbenchcView /* View18 */   viewStyle={styles.xdw24j} onClick={getEvent('View18:onClick:func11:', {eventData: "cat"}, bagForKeyValue, bagForIndex)}><Xbenchc171194 /* DwappCloud1 */ fop={ slide.components.DwappCloud1.ctx_map.fop1 } value={ slide.components.DwappCloud1.ctx_map.text1 } width={ slide.components.DwappCloud1.ctx_map.text2 } height={ slide.components.DwappCloud1.ctx_map.text3 } image={ slide.components.DwappCloud1.ctx_map.image1 }  onChange={getEvent('DwappCloud1:input::', {}, bagForKeyValue, bagForIndex)}><View /* View19 */   style={styles.xdw24i}><Text /* Text9 */ style={styles.xdw24f} >{slide.components.Text9.ctx_map.text}</Text>
<View /* View20 */   style={styles.xdw24h}>{!!(state.formData.type === "cat") /* ViewIf6 */ && (<><XbenchcImage /* Image6 */ style={styles.xdw24g} source={dwtools.qiniu(slide.components.Image6.ctx_map.src, slide.components.Image6.ctx_map.fop)}  /></>)}</View></View></Xbenchc171194></XbenchcView>
<XbenchcView /* View21 */   viewStyle={styles.xdw24j} onClick={getEvent('View21:onClick:func11:', {eventData: "dog"}, bagForKeyValue, bagForIndex)}><Xbenchc171194 /* DwappCloud2 */ fop={ slide.components.DwappCloud2.ctx_map.fop1 } value={ slide.components.DwappCloud2.ctx_map.text1 } width={ slide.components.DwappCloud2.ctx_map.text2 } height={ slide.components.DwappCloud2.ctx_map.text3 } image={ slide.components.DwappCloud2.ctx_map.image1 }  onChange={getEvent('DwappCloud2:input::', {}, bagForKeyValue, bagForIndex)}><View /* View22 */   style={styles.xdw24i}><Text /* Text10 */ style={styles.xdw24f} >{slide.components.Text10.ctx_map.text}</Text>
<View /* View23 */   style={styles.xdw24h}>{!!(state.formData.type === "dog") /* ViewIf8 */ && (<><XbenchcImage /* Image7 */ style={styles.xdw24g} source={dwtools.qiniu(slide.components.Image7.ctx_map.src, slide.components.Image7.ctx_map.fop)}  /></>)}</View></View></Xbenchc171194></XbenchcView></>)}</XbenchcScrollView>
<Xbenchc275104 /* DwappCloud4 */ valueStyle={ slide.components.DwappCloud4.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud4.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud4.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud4:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104>
    </ErrorBoundary>
  )
}
