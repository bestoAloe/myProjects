
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcPicker from '../../xbench/xbenchc/components/XbenchcPicker'
import { Image } from 'expo-image'
import XbenchcInput from '../../xbench/xbenchc/components/XbenchcInput'

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
  const action2 = state.password = ("")
  const action3 = state.passwordDisplay = ("")
  const action21 = state.wifi_options = ([/**/  {/**/    label: '3012', value: '3012',/**/  },/**/  {/**/    label: '3012_6G', value: '3012_6G',/**/  }/**/])
  const action22 = state.OS = ("ios")
  const action30 = state.ssid = (null)
  const action33 = state.ssidBind = (0)
  return state
}

const action15 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action16 = await store.dispatch("func3", {})
}

const action10 = actions['func2'] = function (store, event) {
  const state = store.state
  
        if (!!(!state.ssid) === (true)) {
          const action41message = ("未输入正确的wifi账号")
          const action41title = ("提示")
          action41message && dw.alert(action41title, action41message)
          return {}
        }
        
  
        if (!!(!state.password) === (true)) {
          const action42message = ("未输入正确的wifi密码")
          const action42title = ("提示")
          action42message && dw.alert(action42title, action42message)
          return {}
        }
        
  const action43 = dw.app.goToPappUrl("net_step4", {"ssid": state.ssid, "password": state.password}, {redirectTo: false})
}

const action14 = actions['func3'] = async function (store, event) {
  const state = store.state
  if (dw.platform === 'rnapp') {
    let Platform = (dw.getNativePackage('Platform'))
    const action23 = Platform
    const action25 = store.commit('setState', {["state.OS"]: Platform.OS})
    if (Platform.OS === 'android') {
      const action17 = await (async (store, event) => {
const { status } = await dw.requestAndroidPermission('android.permission.ACCESS_FINE_LOCATION')
if (status !== 'granted') return dw.alert('提示', '定位权限将被用于WIFI连接操作，请授权！')


const WifiManager = dw.getNativePackage('WifiManager')

let wifiList

wifiList = await WifiManager.loadWifiList()
console.log('wifiList', wifiList)
const res = wifiList.map(x=>({label: x.SSID, value: x.SSID}))
// 去重
const options = []
res.map(x=>{
  if(!options.find(_=>_.value === x.value)){
    options.push(x)
  }
})

return options
})(store, event)
      const action29 = store.commit('setState', {["state.wifi_options"]: action17})
    } else if (Platform.OS === 'ios') {
      const action39 = await (async (store, event) => {
const WifiManager = dw.getNativePackage('WifiManager')

let ssid = await WifiManager.getCurrentWifiSSID()

return ssid
})(store, event)
      const action40 = store.commit('setState', {["state.ssid"]: action39})
    }
  }
}

const action31 = actions['func4'] = function (store, event) {
  const state = store.state
  const action34 = store.commit('setState', {["state.ssidBind"]: event.data.detail.value, ["state.ssid"]: state.wifi_options[event.data.detail.value].value})
}

const action35 = actions['func5'] = function (store, event) {
  const state = store.state
  let key = (event.context.eventData)
  const action36 = key
  const action37 = store.commit('setState', {[`state.${key}`]: event.data.detail.value})
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
xdw1nc: {
  width: pm(77),
  height: pm(4),
  flexDirection: "column",
  backgroundColor: "#fbd656",
},
xdw1nd: {
  width: pm(77),
  height: pm(4),
  flexDirection: "column",
  backgroundColor: "#e7e5e8",
},
xdw1ne: {
  flexDirection: "row",
  justifyContent: "space-between",
},
xdw1nf: {
  fontSize: pm(20),
  fontWeight: "500",
  lineHeight: pm(24),
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
},
xdw1ng: {
  color: "#666666",
  fontSize: pm(14),
  marginTop: pm(5),
  lineHeight: pm(24),
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
},
xdw1nh: {
  marginTop: pm(30),
  marginLeft: pm(20),
  paddingTop: 0,
  marginRight: pm(20),
  paddingLeft: 0,
  paddingRight: 0,
  flexDirection: "column",
  paddingBottom: 0,
},
xdw1ni: {
  width: pm(300),
  height: pm(300),
},
xdw1nk: {
  marginTop: pm(10),
  marginLeft: pm(10),
  marginRight: pm(10),
  marginBottom: pm(10),
  flexDirection: "column",
},
xdw1nl: {
  color: "#585858",
  fontWeight: "600",
  lineHeight: pm(24),
  marginRight: pm(10),
},
xdw1nm: {},
xdw1nn: {
  width: pm(300),
  fontSize: pm(12),
  borderTopWidth: pm(0),
  borderTopColor: "#000",
  borderLeftWidth: pm(0),
  borderLeftColor: "#000",
  lineHeight: pm(18),
  borderRightWidth: pm(0),
  borderRightColor: "#000",
  borderBottomWidth: pm(0),
  borderBottomColor: "#000",
  marginBottom: pm(0),
  backgroundColor: "#f8f8f8",
  borderTopLeftRadius: pm(5),
  borderTopRightRadius: pm(5),
  borderBottomLeftRadius: pm(5),
  borderBottomRightRadius: pm(5),
},
xdw1no: {
  width: pm(300),
  alignItems: "center",
  marginLeft: pm(10),
  paddingTop: pm(10),
  marginRight: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
  justifyContent: "space-between",
  backgroundColor: "#f8f8f8",
  borderTopLeftRadius: pm(5),
  borderTopRightRadius: pm(5),
  borderBottomLeftRadius: pm(5),
  borderBottomRightRadius: pm(5),
},
xdw1np: {
  width: pm(300),
  fontSize: pm(12),
  borderTopWidth: pm(0),
  borderTopColor: "#000",
  marginTop: pm(10),
  borderLeftWidth: pm(0),
  borderLeftColor: "#000",
  lineHeight: pm(18),
  marginLeft: pm(10),
  paddingTop: pm(10),
  borderRightWidth: pm(0),
  borderRightColor: "#000",
  marginRight: pm(10),
  paddingLeft: pm(10),
  borderBottomWidth: pm(0),
  borderBottomColor: "#000",
  marginBottom: pm(0),
  paddingRight: pm(10),
  paddingBottom: pm(10),
  backgroundColor: "#f8f8f8",
  borderTopLeftRadius: pm(5),
  borderTopRightRadius: pm(5),
  borderBottomLeftRadius: pm(5),
  borderBottomRightRadius: pm(5),
},
xdw1nq: {
  fontSize: pm(12),
  textAlign: "center",
  fontWeight: "600",
  lineHeight: pm(24),
  paddingTop: pm(7),
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: pm(7),
},
xdw1nr: {
  width: pm(300),
  marginTop: pm(10),
  marginLeft: pm(10),
  flexDirection: "column",
  backgroundColor: "#ffd132",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw1ns: {
  width: pm(320),
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  flexDirection: "column",
  paddingBottom: 0,
  backgroundColor: "#ffffff",
}
});
const slide = {"type":"197895","key":"c1978951","slug":null,"randomid":"id_8916040f6fa400fc66878cde","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View3":{"ctx_map":{}},"View4":{"ctx_map":{"extraStyleKeys":[]}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,300,300","src":"u/dev064/2023/06/01/WFWNq6aLGWRpmiCCVDPWpA/3UWEO_TWOC481C2U841.png","buildToLocal":true}},"Text14":{"ctx_map":{"text":"下一步"}},"Text16":{"ctx_map":{"text":"3.连接WiFi"}},"Text17":{"ctx_map":{"text":"支持全频段的WIFI"}},"Text19":{"ctx_map":{"text":"点击选择WIFI"}},"View13":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"View20":{"ctx_map":{}},"Picker1":{"ctx_map":{"mode":"selector","range":[{"label":"上午","value":"am"},{"label":"下午","value":"pm"}],"value":0}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"SvgImage2":{"ctx_map":{"src":"u/dev065/2023/02/20/T4LraPfiTJabdvACxxqjB6/1195361.svg","color":"#9a9a9a","width":22,"height":22,"SvgImageManage":"SvgImageManage"}},"DwappCloud1":{"ctx_map":{"bool1":true,"text1":"第三步","color1":"rgb(255, 255, 255)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","select1":"portrait"}},"NativeInput1":{"ctx_map":{"alt":"","type":"text","checked":false,"password":true,"placeholder":"请输入WIFI密码"}},"NativeInput2":{"ctx_map":{"alt":"","type":"text","checked":false,"password":false,"placeholder":"请输入WIFI账号(将自动填充当前连接WIFI)"}}}};

const pageGroupSlug = 'app_tongzhua-net_step3';

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
      <Xbenchc176286 /* DwappCloud1 */ isCuzBtn={ slide.components.DwappCloud1.ctx_map.bool1 } eventData={ slide.components.DwappCloud1.ctx_map.prop1 } eventData2={ slide.components.DwappCloud1.ctx_map.prop2 } title={ slide.components.DwappCloud1.ctx_map.text1 } backgroundColor={ slide.components.DwappCloud1.ctx_map.color1 } backIcon={ slide.components.DwappCloud1.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud1.ctx_map.image2 } screenType={ slide.components.DwappCloud1.ctx_map.select1 } ></Xbenchc176286>
<View /* View3 */   style={styles.xdw1ns}><View /* View15 */   style={styles.xdw1ne}><View /* View19 */   style={styles.xdw1nc}></View>
<View /* View18 */   style={styles.xdw1nc}></View>
<View /* View20 */   style={styles.xdw1nc}></View>
<View /* View16 */   style={styles.xdw1nd}></View></View>
<View /* View8 */   style={styles.xdw1nh}><Text /* Text16 */ style={styles.xdw1nf} >{slide.components.Text16.ctx_map.text}</Text>
<Text /* Text17 */ style={styles.xdw1ng} >{slide.components.Text17.ctx_map.text}</Text></View>
<View /* View7 */   style={styles.xdw1nk}><XbenchcImage /* Image1 */ style={styles.xdw1ni} source={dwtools.getLocalResource('xdw1nj_lthar1oc')}  /></View>
<View /* View13 */   style={styles.xdw1no}>{!!(state.OS === 'android') /* ViewIf1 */ && (<><XbenchcPicker /* Picker1 */ value={ state.ssidBind } mode={ slide.components.Picker1.ctx_map.mode } range={ state.wifi_options }  onChange={getEvent('Picker1:input:func4:', {}, bagForKeyValue, bagForIndex)}><Text /* Text19 */ style={styles.xdw1nl} >{state.ssid || '点击选择WIFI'}</Text></XbenchcPicker>
<Image /* SvgImage2 */ style={[ styles.xdw1nm, { width: pm(22), height: pm(22) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev065/2023/02/20/T4LraPfiTJabdvACxxqjB6/1195361.svg"), width: pm(22), height: pm(22) }} /></>)}
{!!(state.OS === 'ios') /* ViewIf2 */ && (<><XbenchcInput /* NativeInput2 */ style={styles.xdw1nn} value={state.ssid} placeholder={slide.components.NativeInput2.ctx_map.placeholder} type={slide.components.NativeInput2.ctx_map.type} password={slide.components.NativeInput2.ctx_map.password}  onChange={getEvent('NativeInput2:onChange:func5:', {eventData: "ssid"}, bagForKeyValue, bagForIndex)} /></>)}</View>
<XbenchcInput /* NativeInput1 */ style={styles.xdw1np} value={state.password} placeholder={slide.components.NativeInput1.ctx_map.placeholder} type={slide.components.NativeInput1.ctx_map.type} password={slide.components.NativeInput1.ctx_map.password}  onChange={getEvent('NativeInput1:onChange:func5:', {eventData: "password"}, bagForKeyValue, bagForIndex)} />
<XbenchcView /* View4 */   viewStyle={styles.xdw1nr} onClick={getEvent('View4:onClick:func2:', {}, bagForKeyValue, bagForIndex)}><Text /* Text14 */ style={styles.xdw1nq} >{slide.components.Text14.ctx_map.text}</Text></XbenchcView></View>
    </ErrorBoundary>
  )
}
