
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import Xbenchc173692 from '../components/Xbenchc173692'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

let tick = (60)
const action8 = tick
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action2 = state.progress = (80)
  const action3 = state.message = ("设备连接中")
  return state
}

const action6 = actions['onShow'] = function (store, event) {
  const state = store.state
  const action9 = ((store, event) => {
tick = setInterval(()=>{
  if(state.progress < 100){
    store.commit('setState', { ['state.progress']: state.progress + 1 })
  }
  else{
    clearInterval(tick)
  }
}, 160)
})(store, event)
  const action10 = store.commit('setState', {["state.lock"]: false})
}

const action4 = actions['func1'] = function (store, event) {
  const state = store.state
  const action5 = dw.app.goToPappUrl("dcenter", {}, {redirectTo: false})
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
xdw3mc: {
  width: pm(77),
  height: pm(4),
  flexDirection: "column",
  backgroundColor: "#fbd656",
},
xdw3md: {
  flexDirection: "row",
  justifyContent: "space-between",
},
xdw3me: {
  fontSize: pm(20),
  fontWeight: "500",
  lineHeight: pm(24),
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
},
xdw3mf: {
  color: "#666666",
  fontSize: pm(14),
  marginTop: pm(5),
  lineHeight: pm(24),
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
},
xdw3mg: {
  marginTop: pm(30),
  marginLeft: pm(20),
  paddingTop: 0,
  marginRight: pm(20),
  paddingLeft: 0,
  paddingRight: 0,
  flexDirection: "column",
  paddingBottom: 0,
},
xdw3mh: {
  fontSize: pm(48),
  lineHeight: pm(60),
},
xdw3mi: {
  color: "#999999",
  fontSize: pm(14),
  lineHeight: pm(20),
  marginLeft: pm(3),
  marginBottom: pm(12),
},
xdw3mj: {
  alignItems: "flex-end",
  flexDirection: "row",
},
xdw3mk: {
  color: "#999999",
  fontSize: pm(10),
  marginTop: pm(2),
  lineHeight: pm(15),
},
xdw3ml: {
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw3mm: {
  position: "relative",
  marginTop: pm(40),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw3mn: {
  fontSize: pm(12),
  textAlign: "center",
  fontWeight: "600",
  lineHeight: pm(24),
  paddingTop: pm(7),
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: pm(7),
},
xdw3mo: {
  left: 0,
  width: pm(300),
  bottom: pm(26),
  position: "absolute",
  marginTop: pm(10),
  marginLeft: pm(10),
  flexDirection: "column",
  backgroundColor: "#ffd132",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw3mp: {
  width: pm(320),
  height: "100%",
  flexGrow: 1,
  flexShrink: 1,
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  flexDirection: "column",
  paddingBottom: 0,
  backgroundColor: "#ffffff",
}
});
const slide = {"type":"202523","key":"c2025231","slug":null,"randomid":"id_51391ce86eff0030baef669e","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":"完成"}},"Text2":{"ctx_map":{"text":"请将路由器、设备、手机尽量靠近"}},"Text3":{"ctx_map":{"text":"4.连接设备"}},"Text4":{"ctx_map":{"text":"这是一个文本组件"}},"Text5":{"ctx_map":{"text":"%"}},"Text6":{"ctx_map":{"text":""}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{"extraStyleKeys":[]}},"View6":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"DwappCloud1":{"ctx_map":{"bool1":true,"text1":"第四步","color1":"rgb(255, 255, 255)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","select1":"portrait"}},"DwappCloud3":{"ctx_map":{"color1":"#58D092","color2":"#F8F8F8","numberb1":98,"numberb2":180,"numberb3":30}}}};

const pageGroupSlug = 'app_tongzhua-net_step4';

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
<View /* View1 */   style={styles.xdw3mp}><View /* View6 */   style={styles.xdw3md}><View /* View10 */   style={styles.xdw3mc}></View>
<View /* View9 */   style={styles.xdw3mc}></View>
<View /* View8 */   style={styles.xdw3mc}></View>
<View /* View11 */   style={styles.xdw3mc}></View></View>
<View /* View12 */   style={styles.xdw3mg}><Text /* Text3 */ style={styles.xdw3me} >{slide.components.Text3.ctx_map.text}</Text>
<Text /* Text2 */ style={styles.xdw3mf} >{slide.components.Text2.ctx_map.text}</Text></View>
<View /* View13 */   style={styles.xdw3mm}><Xbenchc173692 /* DwappCloud3 */ color={ slide.components.DwappCloud3.ctx_map.color1 } bgColor={ slide.components.DwappCloud3.ctx_map.color2 } value={ state.progress } radius={ slide.components.DwappCloud3.ctx_map.numberb2 } swidth={ slide.components.DwappCloud3.ctx_map.numberb3 } ></Xbenchc173692>
<View /* View15 */   style={styles.xdw3ml}><View /* View14 */   style={styles.xdw3mj}><Text /* Text4 */ style={styles.xdw3mh} >{state.progress}</Text>
<Text /* Text5 */ style={styles.xdw3mi} >{slide.components.Text5.ctx_map.text}</Text></View>
<Text /* Text6 */ style={styles.xdw3mk} >{state.message}</Text></View></View>
{!!(state.progress === 100) /* ViewIf1 */ && (<><XbenchcView /* View2 */   viewStyle={styles.xdw3mo} onClick={getEvent('View2:onClick:func1:', {}, bagForKeyValue, bagForIndex)}><Text /* Text1 */ style={styles.xdw3mn} >{slide.components.Text1.ctx_map.text}</Text></XbenchcView></>)}</View>
    </ErrorBoundary>
  )
}
