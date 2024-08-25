
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcButton from '../../xbench/xbenchc/components/XbenchcButton'
import XbenchcPickerView from '../../xbench/xbenchc/components/XbenchcPickerView'
import XbenchcModal from '../../xbench/xbenchc/components/XbenchcModal'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action4 = state.device = (null)
  const action26 = state.platform = ("dwapp")
  const action30 = state.pickerRange = ([])
  const action32 = state.ready = (false)
  const action36 = state.popUp = (false)
  const action43 = state.bindValue = ([])
  const action60 = state.count = (4)
  return state
}

const action2 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action25 = store.commit('setState', {["state.platform"]: dw.platform})
  const action31 = await store.dispatch("func16", {})
  const action33 = store.commit('setState', {["state.ready"]: true})
}

const action27 = actions['func16'] = function (store, event) {
  const state = store.state
  const action28 = ((store, event) => {
function generateOptions() {
  const options = [
    [],
  ];

  // 生成年份选项
  for (let i = 1; i <= 30; i++) {
    options[0].push({ label: i.toString().padStart(2, "0"), value: i });
  }
  return options;
}

const options = generateOptions();

return options
})(store, event)
  const action29 = store.commit('setState', {["state.pickerRange"]: action28})
}

const action38 = actions['func7'] = function (store, event) {
  const state = store.state
  const action39 = store.commit('setState', {["state.popUp"]: true})
}

const action40 = actions['func8'] = function (store, event) {
  const state = store.state
  const action41 = store.commit('setState', {["state.popUp"]: false})
}

const action44 = actions['func17'] = function (store, event) {
  const state = store.state
  /* action45: 计算实际日期 */
  const action46 = console.log('[func17#action46] state.bindValue', state.bindValue)
  let count = (state.bindValue.detail.value[0] + 1)
  const action55 = count
  const action59 = console.log('[func17#action59] 打印(count)的返回值', count)
  const action57 = store.commit('setState', {["state.count"]: count, ["state.popUp"]: false})
}

const action61 = actions['func18'] = async function (store, event) {
  const state = store.state
  const action62 = await (async (store, event) => {
let formData

// 读取缓存
const key = "habit_feed/formData"
let value
if(state.platform === 'rnapp'){
  const AsyncStorage = dw.getNativePackage('AsyncStorage')
  value = await AsyncStorage.getItem(key)
}
else{
  value = window.localStorage.getItem(key)
}
console.log('value', value)
if(value){
  formData = JSON.parse(value)
}
else{
  formData = {}
}

console.log("formData!!!!!!", formData)

formData.count = state.count

// 写入缓存

const jsonValue1 = JSON.stringify(formData)
if(state.platform === 'rnapp'){
  const AsyncStorage = dw.getNativePackage('AsyncStorage')
  await AsyncStorage.setItem(key, jsonValue1)
}
else{
  window.localStorage.setItem(key, jsonValue1)
}
})(store, event)
}

const action63 = actions['func19'] = async function (store, event) {
  const state = store.state
  const action64 = await store.dispatch("func18", {})
  const action65 = dw.app.goToPappUrl("smart_feed", {}, {redirectTo: false})
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
xdw12g: {
  color: "#181818",
  flexGrow: 1,
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw12h: {
  flexDirection: "column",
},
xdw12i: {
  color: "#999999",
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw12j: {
  width: pm(12),
  height: pm(12),
},
xdw12k: {
  alignItems: "center",
  flexDirection: "row",
},
xdw12l: {
  width: pm(310),
  flexWrap: "nowrap",
  alignItems: "center",
  marginLeft: pm(10),
  paddingTop: pm(10),
  borderBottomWidth: pm(0),
  borderBottomColor: "#eeeeee",
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
  justifyContent: "flex-start",
},
xdw12m: {
  width: pm(320),
  flexDirection: "column",
  backgroundColor: "#ffffff",
},
xdw12n: {
  fontSize: pm(14),
  fontWeight: "600",
  lineHeight: pm(19),
},
xdw12o: {
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
xdw12p: {
  left: pm(10),
  width: pm(300),
  bottom: pm(29),
  height: pm(38),
  position: "absolute",
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
xdw12q: {
  color: "#333333",
  fontSize: pm(14),
  textAlign: "center",
  lineHeight: pm(19),
  paddingTop: pm(13),
  paddingBottom: pm(13),
},
xdw12r: {
  borderBottomWidth: pm(1),
  borderBottomColor: "#eeeeee",
  justifyContent: "center",
},
xdw12s: {
  flexDirection: "row",
},
xdw12t: {
  width: pm(141),
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
xdw12u: {
  width: pm(141),
  height: pm(38),
  alignItems: "center",
  marginRight: pm(13),
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#f8f8f8",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw12v: {
  width: pm(141),
  height: pm(38),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "rgba(255, 218, 103, 1)",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw12w: {
  width: pm(320),
  paddingLeft: pm(17),
  paddingRight: pm(17),
  flexDirection: "column",
  paddingBottom: pm(29),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
},
xdw12x: {
  flex: 1,
  zIndex: 10,
  alignItems: "flex-end",
  flexDirection: "row",
  justifyContent: "center",
},
xdw12y: {
  flexGrow: 1,
  position: "relative",
  paddingTop: pm(10),
  flexDirection: "column",
  backgroundColor: "#F8F8F8",
}
});
const slide = {"type":"173305","key":"c1733051","slug":null,"randomid":"id_e7f8071a196cc456f74c2a1b","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text5":{"ctx_map":{"text":"生成喂食方案"}},"Text6":{"ctx_map":{"text":"顿数"}},"Text7":{"ctx_map":{"text":"4吨"}},"Text8":{"ctx_map":{"text":"保存"}},"Text9":{"ctx_map":{"text":"取消"}},"View1":{"ctx_map":{}},"View3":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image2":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Modal1":{"ctx_map":{"mask":true,"value":false,"baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Text10":{"ctx_map":{"text":"设置顿数"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"DwappCloud1":{"ctx_map":{"bool1":true,"bool2":false,"text1":"设置顿数","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"PickerView1":{"ctx_map":{"range":[[{"label":"上午","value":"am"},{"label":"下午","value":"pm"}]],"value":[0]}},"NativeButton1":{"ctx_map":{"type":"button"}},"NativeButton2":{"ctx_map":{"type":"button"}},"NativeButton3":{"ctx_map":{"type":"button"}}}};
slide.components.DwappCloud1.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-set_meal';

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
<View /* View7 */   style={styles.xdw12y}>{!!(state.ready) /* ViewIf1 */ && (<><View /* View1 */   style={styles.xdw12m}><XbenchcView /* View3 */   viewStyle={styles.xdw12l} onClick={getEvent('View3:onClick:func7:', {eventData: "base_setting"}, bagForKeyValue, bagForIndex)}><Text /* Text6 */ style={styles.xdw12g} >{slide.components.Text6.ctx_map.text}</Text>
<View /* View8 */   style={styles.xdw12h}></View>
<View /* View6 */   style={styles.xdw12k}><Text /* Text7 */ style={styles.xdw12i} >{state.count + "顿"}</Text>
<XbenchcImage /* Image2 */ style={styles.xdw12j} source={dwtools.qiniu(slide.components.Image2.ctx_map.src, slide.components.Image2.ctx_map.fop)}  /></View></XbenchcView></View>
<View /* View5 */   style={styles.xdw12p}><XbenchcButton /* NativeButton1 */ viewStyle={styles.xdw12o} onClick={getEvent('NativeButton1:onClick:func19:', {}, bagForKeyValue, bagForIndex)}><Text /* Text5 */ style={styles.xdw12n} >{slide.components.Text5.ctx_map.text}</Text></XbenchcButton></View>
<XbenchcModal /* Modal1 */ rootStyle={styles.xdw12x} value={ state.popUp } mask={ true } maskClosable={ true } ><View /* View9 */   style={styles.xdw12w}><View /* View14 */   style={styles.xdw12r}><Text /* Text10 */ style={styles.xdw12q} >{slide.components.Text10.ctx_map.text}</Text></View>
<View /* View13 */   style={styles.xdw12s}><XbenchcPickerView /* PickerView1 */ value={ state.bindValue } range={ state.pickerRange }  onChange={getEvent('PickerView1:input::bindValue', {}, bagForKeyValue, bagForIndex)}></XbenchcPickerView></View>
<View /* View10 */   style={styles.xdw12s}><View /* View12 */   style={styles.xdw12u}><XbenchcButton /* NativeButton3 */ viewStyle={styles.xdw12t} onClick={getEvent('NativeButton3:onClick:func8:', {}, bagForKeyValue, bagForIndex)}><Text /* Text9 */ style={styles.xdw12n} >{slide.components.Text9.ctx_map.text}</Text></XbenchcButton></View>
<View /* View11 */   style={styles.xdw12v}><XbenchcButton /* NativeButton2 */ viewStyle={styles.xdw12t} onClick={getEvent('NativeButton2:onClick:func17:', {}, bagForKeyValue, bagForIndex)}><Text /* Text8 */ style={styles.xdw12n} >{slide.components.Text8.ctx_map.text}</Text></XbenchcButton></View></View></View></XbenchcModal></>)}</View>
    </ErrorBoundary>
  )
}
