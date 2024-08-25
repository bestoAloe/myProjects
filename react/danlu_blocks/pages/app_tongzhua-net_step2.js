
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'

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
  return state
}

const action4 = actions['func1'] = function (store, event) {
  const state = store.state
  const action5 = console.log('[func1#action5] 打印', event.data.detail.value)
  const action6 = store.commit('setState', {["state.password"]: event.data.detail.value, ["state.passwordDisplay"]: event.data.detail.value.replace(/[^]*/,"*")})
}

const action10 = actions['func2'] = function (store, event) {
  const state = store.state
  const action12 = dw.app.goToPappUrl("net_step3", {}, {redirectTo: false})
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
xdw1mh: {
  width: pm(77),
  height: pm(4),
  flexDirection: "column",
  backgroundColor: "#fbd656",
},
xdw1mi: {
  width: pm(77),
  height: pm(4),
  flexDirection: "column",
  backgroundColor: "#e7e5e8",
},
xdw1mj: {
  flexDirection: "row",
  justifyContent: "space-between",
},
xdw1mk: {
  color: "#333333",
  fontSize: pm(20),
  fontWeight: "500",
  lineHeight: pm(24),
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
},
xdw1ml: {
  color: "#666666",
  fontSize: pm(14),
  marginTop: pm(5),
  lineHeight: pm(24),
  paddingTop: 0,
  paddingLeft: 0,
  marginBottom: pm(34),
  paddingRight: 0,
  paddingBottom: pm(0),
},
xdw1mm: {
  marginTop: pm(30),
  marginLeft: pm(20),
  paddingTop: 0,
  marginRight: pm(20),
  paddingLeft: 0,
  paddingRight: 0,
  flexDirection: "column",
  paddingBottom: 0,
},
xdw1mn: {
  width: pm(17),
  height: pm(17),
},
xdw1mp: {
  color: "#AAAAAA",
  fontSize: pm(12),
  lineHeight: pm(17),
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
},
xdw1mq: {
  alignItems: "center",
  marginLeft: pm(10),
  flexDirection: "row",
},
xdw1mr: {
  marginTop: pm(10),
  marginLeft: pm(10),
  marginRight: pm(10),
  marginBottom: pm(14),
  flexDirection: "column",
},
xdw1ms: {
  width: pm(25),
  height: pm(45),
},
xdw1mt: {
  color: "#000000",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(24),
  marginLeft: pm(27),
},
xdw1mu: {
  width: pm(17),
  height: pm(17),
  marginLeft: "auto",
},
xdw1mv: {
  width: pm(300),
  height: pm(65),
  alignItems: "center",
  marginLeft: pm(10),
  paddingTop: pm(10),
  marginRight: pm(10),
  paddingLeft: pm(32),
  paddingRight: pm(20),
  flexDirection: "row",
  paddingBottom: pm(10),
  backgroundColor: "#F9F9F9",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw1mw: {
  width: pm(320),
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  flexDirection: "column",
  paddingBottom: 0,
  backgroundColor: "#ffffff",
}
});
const slide = {"type":"168891","key":"c1688911","slug":null,"randomid":"id_e09d01409783a16771422139","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View3":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,50,50","src":"u/dev064/2023/06/01/9LpqhxByDXDCE6v2ZZxZB6/c18a720da7e04be8a454e3eeea083f16_mergeImage.png","buildToLocal":true}},"Image2":{"ctx_map":{"fop":"e,75,135","src":"u/dev064/2023/06/01/i5CXGwbMniHuKpWJqnq5MG/SketchPng4b0579a8996bae5bda19548146349aab75916ecb193ffb179ccddb1f54ea9caa.png"}},"Image3":{"ctx_map":{"fop":"e,51,51","src":"u/dev064/2023/06/01/ygcJbTXEBM5A7Ptmi9jAcS/消息icon备份132x.png"}},"Text16":{"ctx_map":{"text":"2.搜索设备"}},"Text17":{"ctx_map":{"text":"整个步骤期间蓝牙保持开启"}},"Text20":{"ctx_map":{"text":"正在搜索附近的设备..."}},"Text21":{"ctx_map":{"text":"Tongzhua-One"}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"View20":{"ctx_map":{}},"View21":{"ctx_map":{}},"DwappCloud1":{"ctx_map":{"bool1":true,"text1":"第二步","color1":"rgb(255, 255, 255)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","select1":"portrait"}}}};

const pageGroupSlug = 'app_tongzhua-net_step2';

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
<View /* View3 */   style={styles.xdw1mw}><View /* View16 */   style={styles.xdw1mj}><View /* View20 */   style={styles.xdw1mh}></View>
<View /* View21 */   style={styles.xdw1mh}></View>
<View /* View18 */   style={styles.xdw1mi}></View>
<View /* View17 */   style={styles.xdw1mi}></View></View>
<View /* View8 */   style={styles.xdw1mm}><Text /* Text16 */ style={styles.xdw1mk} >{slide.components.Text16.ctx_map.text}</Text>
<Text /* Text17 */ style={styles.xdw1ml} >{slide.components.Text17.ctx_map.text}</Text></View>
<View /* View7 */   style={styles.xdw1mr}><View /* View14 */   style={styles.xdw1mq}><XbenchcImage /* Image1 */ style={styles.xdw1mn} source={dwtools.getLocalResource('xdw1mo_lthar1nt')}  />
<Text /* Text20 */ style={styles.xdw1mp} >{slide.components.Text20.ctx_map.text}</Text></View></View>
<XbenchcView /* View15 */   viewStyle={styles.xdw1mv} onClick={getEvent('View15:onClick:func2:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image2 */ style={styles.xdw1ms} source={dwtools.qiniu(slide.components.Image2.ctx_map.src, slide.components.Image2.ctx_map.fop)}  />
<Text /* Text21 */ style={styles.xdw1mt} >{slide.components.Text21.ctx_map.text}</Text>
<XbenchcImage /* Image3 */ style={styles.xdw1mu} source={dwtools.qiniu(slide.components.Image3.ctx_map.src, slide.components.Image3.ctx_map.fop)}  /></XbenchcView></View>
    </ErrorBoundary>
  )
}
