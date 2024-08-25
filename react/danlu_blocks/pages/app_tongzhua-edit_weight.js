
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import Xbenchc170329 from '../components/Xbenchc170329'
import XbenchcButton from '../../xbench/xbenchc/components/XbenchcButton'
import Xbenchc168613 from '../components/Xbenchc168613'
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
const action122 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action75 = state.ready = (false)
  const action87 = state.formData = (null)
  const action117 = state.category = (null)
  return state
}

const action3 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action7 = await store.dispatch("func1", {})
  const action76 = store.commit('setState', {["state.ready"]: true})
}

const action123 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action124 = modalInstance = (event.data)
  const action125 = console.log('[getModalInstance#action125] 打印(modalInstance)', modalInstance)
}

const action4 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action77 = await store.dispatch("func7", {})
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
  const action108 = console.log('[func7#action108] 打印(action78)的返回值', action78)
  if (!action78) {
    let message = ("操作异常,返回上一页")
    const action120 = message
    const action121 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(message)
}
else{
  return null
}
})(store, event)
    const action83 = await dw.navigateBack({delta: 1})
  } else {
    const action88 = console.log('[func7#action88] 打印action78', action78)
    const action86 = store.commit('setState', {["state.formData"]: action78})
  }
  const action118 = await store.dispatch("func12", {})
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

const action92 = actions['func10'] = function (store, event) {
  const state = store.state
  const action93 = console.log('[func10#action93] 打印', event)
  const action94 = store.commit('setState', {["state.formData.weight"]: event.data})
}

const action95 = actions['func11'] = async function (store, event) {
  const state = store.state
  
        if (!!(state.formData.weight <= 0) === (true)) {
          const action106message = ("体重应大于0.1千克！")
          const action106title = ("提示")
          action106message && dw.alert(action106title, action106message)
          return null
        }
        
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
    const action127 = message
    const action128 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    const action109 = await dw.navigateBack({delta: 1})
  
      } catch (e) {
        throw e
      } finally {
        action96lock = false
      }
      
  })()
}

const action110 = actions['func12'] = async function (store, event) {
  const state = store.state
  if (state.formData.category_uuid) {
    const action115 = await dw.app.run("category.list", {"limit": 1, "offset": 0, "filters": {uuid: state.formData.category_uuid}, "order_by": ["-id"]})
    const action116 = store.commit('setState', {["state.category"]: action115.objects[0]})
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
xdw22h: {
  color: "#181818",
  fontSize: pm(34),
  lineHeight: pm(41),
  marginRight: pm(3),
},
xdw22i: {
  fontSize: pm(13),
  fontWeight: "500",
  lineHeight: pm(28),
},
xdw22j: {
  alignItems: "flex-end",
  marginRight: pm(3),
  marginBottom: pm(11),
  flexDirection: "row",
},
xdw22k: {
  color: "#999999",
  fontSize: pm(12),
  lineHeight: pm(17),
},
xdw22l: {
  color: "#999999",
  fontSize: pm(12),
  textAlign: "center",
  lineHeight: pm(17),
},
xdw22m: {
  marginTop: pm(26),
  flexDirection: "column",
},
xdw22n: {
  flexGrow: 1,
  alignItems: "center",
  flexShrink: 1,
  flexDirection: "column",
  justifyContent: "center",
},
xdw22o: {
  fontSize: pm(14),
  fontWeight: "600",
  lineHeight: pm(19),
},
xdw22p: {
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
xdw22q: {
  width: pm(300),
  height: pm(38),
  flexGrow: 0,
  marginTop: pm(34),
  alignItems: "center",
  flexShrink: 0,
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: pm(34),
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "rgba(255, 218, 103, 1)",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw22r: {
  flex: 1,
  flexDirection: "column",
},
xdw22s: {
  flex: 1,
  width: "100%",
  overflow: "scroll",
}
});
const slide = {"type":"170353","key":"c1703531","slug":null,"randomid":"id_23179602ea871fe3e358ec79","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":""}},"Text2":{"ctx_map":{"text":"千克"}},"Text3":{"ctx_map":{"text":"XX猫的标准体重区间是："}},"Text4":{"ctx_map":{"text":"3.5Kg~5.0Kg"}},"Text5":{"ctx_map":{"text":"保存"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"DwappCloud1":{"ctx_map":{"bool1":false,"image1":"u/dev070/2023/03/04/fxVRNTTgjWEbgckTEXSvCH/新建项目1.png","select1":"10","select2":"bottom","numberb2":10,"numberb3":10,"numberb4":160,"numberb6":1,"numberb7":0,"numberb8":100}},"DwappCloud2":{"ctx_map":{"color1":""}},"DwappCloud3":{"ctx_map":{"bool1":true,"bool2":false,"text1":"体重","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud4":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[]}},"NativeButton1":{"ctx_map":{"type":"button"}}}};
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
const pageGroupSlug = 'app_tongzhua-edit_weight';

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
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw22s} scrollX={ false } scrollY={ true } >{!!(state.ready) /* ViewIf1 */ && (<><View /* View1 */   style={styles.xdw22r}><View /* View5 */   style={styles.xdw22n}><View /* View2 */   style={styles.xdw22j}><Text /* Text1 */ style={styles.xdw22h} >{state.formData.weight}</Text>
<Text /* Text2 */ style={styles.xdw22i} >{slide.components.Text2.ctx_map.text}</Text></View>
<Xbenchc170329 /* DwappCloud1 */ isDateValue={ slide.components.DwappCloud1.ctx_map.bool1 } eventData={ slide.components.DwappCloud1.ctx_map.prop1 } eventData2={ slide.components.DwappCloud1.ctx_map.prop2 } cursorImage={ slide.components.DwappCloud1.ctx_map.image1 } converts={ slide.components.DwappCloud1.ctx_map.select1 } direction={ slide.components.DwappCloud1.ctx_map.select2 } labelInterval={ slide.components.DwappCloud1.ctx_map.numberb2 } marginRight={ slide.components.DwappCloud1.ctx_map.numberb3 } padding={ slide.components.DwappCloud1.ctx_map.numberb4 } readValue={ state.formData.weight } startValue={ slide.components.DwappCloud1.ctx_map.numberb7 } endValue={ slide.components.DwappCloud1.ctx_map.numberb8 }  scrollEnd={getEvent('DwappCloud1:scrollEnd:func10:', {}, bagForKeyValue, bagForIndex)}></Xbenchc170329>
{!!(!!state.category) /* ViewIf2 */ && (<><View /* View3 */   style={styles.xdw22m}><Text /* Text3 */ style={styles.xdw22k} >{state.category.data.name + "的标准体重区间是："}</Text>
{!!(!!state.category.data.extra_data && !!state.category.data.extra_data.weight_start) /* ViewIf3 */ && (<><Text /* Text4 */ style={styles.xdw22l} >{state.category.data.extra_data.weight_start + "Kg~" + state.category.data.extra_data.weight_end + "Kg"}</Text></>)}</View></>)}</View>
<View /* View4 */   style={styles.xdw22q}><XbenchcButton /* NativeButton1 */ viewStyle={styles.xdw22p} onClick={getEvent('NativeButton1:onClick:func11:', {}, bagForKeyValue, bagForIndex)}><Text /* Text5 */ style={styles.xdw22o} >{slide.components.Text5.ctx_map.text}</Text></XbenchcButton></View>
<Xbenchc168613 /* DwappCloud2 */ backgroundColor={ slide.components.DwappCloud2.ctx_map.color1 } ></Xbenchc168613></View></>)}</XbenchcScrollView>
<Xbenchc275104 /* DwappCloud4 */ valueStyle={ slide.components.DwappCloud4.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud4.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud4.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud4:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104>
    </ErrorBoundary>
  )
}
