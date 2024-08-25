
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import ComNavBar from '../../xbench/components/ComNavBar'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import { Image } from 'expo-image'
import XbenchcScrollView from '../../xbench/xbenchc/components/XbenchcScrollView'

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
  const action2 = state.showintroduce = (false)
  const action3 = state.showmaterial = (false)
  return state
}

const action4 = actions['func1'] = function (store, event) {
  const state = store.state
  const action5 = store.commit('setState', {["state.showintroduce"]: !state.showintroduce})
}

const action6 = actions['func2'] = function (store, event) {
  const state = store.state
  const action7 = store.commit('setState', {["state.showmaterial"]: !state.showmaterial})
}

const action8 = actions['func9'] = function (store, event) {
  const state = store.state
  let type = (event.context.eventData)
  const action9 = type
  const action11 = console.log('[func9#action11] 打印(type)的返回值', type)
  const action14 = dw.app.goToPappUrl("files", {"type": type}, {redirectTo: false})
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
xdw2vn: {
  width: pm(39),
  height: pm(41),
},
xdw2vo: {
  width: pm(63),
  height: pm(63),
  shadowOffset: {width: 0, height: pm(2)},
  shadowRadius: pm(12),
  shadowColor: "rgb(0, 0, 0)",
  shadowOpacity: 0.2,
  elevation: 4,
  marginTop: pm(44),
  alignItems: "center",
  marginLeft: "auto",
  marginRight: "auto",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw2vp: {
  color: "#000000",
  fontSize: pm(15),
  textAlign: "center",
  fontWeight: "500",
  lineHeight: pm(21),
},
xdw2vq: {
  marginTop: pm(26),
  flexDirection: "column",
},
xdw2vr: {
  color: "#181818",
  flexGrow: 1,
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw2vs: {},
xdw2vu: {
  alignItems: "center",
  flexDirection: "row",
},
xdw2vw: {
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
xdw2vy: {
  width: pm(290),
  flexWrap: "nowrap",
  alignItems: "center",
  marginLeft: pm(30),
  paddingTop: pm(10),
  borderBottomWidth: pm(0),
  borderBottomColor: "#eeeeee",
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
  justifyContent: "flex-start",
},
xdw2vz: {
  width: pm(320),
  borderTopWidth: pm(1),
  borderTopColor: "#f8f8f8f8",
  flexDirection: "column",
  backgroundColor: "#ffffff",
},
xdw2w0: {
  width: pm(320),
  borderTopWidth: pm(1),
  borderTopColor: "#f8f8f8",
  marginTop: pm(43),
  flexDirection: "column",
  backgroundColor: "#ffffff",
},
xdw2w1: {
  width: pm(320),
  borderTopWidth: pm(1),
  borderTopColor: "#f8f8f8f8",
  borderBottomWidth: pm(1),
  borderBottomColor: "#f8f8f8f8",
  flexDirection: "column",
  backgroundColor: "#ffffff",
},
xdw2w2: {
  width: pm(320),
  borderTopWidth: pm(1),
  borderTopColor: "#f8f8f8",
  borderBottomWidth: pm(1),
  borderBottomColor: "#f8f8f8",
  flexDirection: "column",
  backgroundColor: "#ffffff",
},
xdw2w3: {
  width: "100%",
  flexGrow: 1,
  overflow: "scroll",
  flexBasis: "0%",
  flexShrink: 1,
  backgroundColor: "#f8f8f8",
}
});
const slide = {"type":"176682","key":"c1766821","slug":null,"randomid":"id_692c6faf6359435f5a22e267","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text3":{"ctx_map":{"text":"产品培训材料"}},"Text5":{"ctx_map":{"text":"铜爪学院"}},"Text6":{"ctx_map":{"text":"官方产品介绍素材库"}},"Text9":{"ctx_map":{"text":"产品介绍材料"}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image2":{"ctx_map":{"fop":"e,46,48","src":"u/dev070/2023/02/28/nYX8QU7KcgGEB68vdSxBo7/SketchPng8e201b6dead48cdaf104157c1241180a206109a3a4810cdf807ee3fd73f7a11f.png"}},"Text10":{"ctx_map":{"text":"产品培训材料"}},"Text11":{"ctx_map":{"text":"产品卖点比对"}},"Text14":{"ctx_map":{"text":"官方产品介绍素材库"}},"View10":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View16":{"ctx_map":{}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"View20":{"ctx_map":{}},"View21":{"ctx_map":{}},"View22":{"ctx_map":{}},"View23":{"ctx_map":{}},"View24":{"ctx_map":{}},"View25":{"ctx_map":{}},"View29":{"ctx_map":{}},"View33":{"ctx_map":{}},"View34":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewIf7":{"ctx_map":{"value":true}},"ViewIf8":{"ctx_map":{"value":true}},"SvgImage1":{"ctx_map":{"src":"u/dev065/2023/03/17/FE7juraE43ndzRWRgMJho7/1195352.svg","color":"#999999","width":20,"height":20,"buildToLocal":true,"SvgImageManage":"SvgImageManage"}},"SvgImage2":{"ctx_map":{"src":"u/dev065/2023/03/17/v3vuLJnRwGkuVnC4CZuGEB/1195361.svg","color":"#999999","width":20,"height":20,"buildToLocal":true,"SvgImageManage":"SvgImageManage"}},"SvgImage3":{"ctx_map":{"src":"u/dev065/2023/03/17/FE7juraE43ndzRWRgMJho7/1195352.svg","color":"#999999","width":20,"height":20,"buildToLocal":true,"SvgImageManage":"SvgImageManage"}},"SvgImage4":{"ctx_map":{"src":"u/dev065/2023/03/17/v3vuLJnRwGkuVnC4CZuGEB/1195361.svg","color":"#999999","width":20,"height":20,"buildToLocal":true,"SvgImageManage":"SvgImageManage"}},"SvgImage5":{"ctx_map":{"src":"u/dev065/2023/03/17/APQnc5WgBfzDHwwt4eHjQ2/1304892.svg","color":"#999999","width":20,"height":20,"buildToLocal":true,"SvgImageManage":"SvgImageManage"}},"SvgImage8":{"ctx_map":{"src":"u/dev065/2023/03/17/APQnc5WgBfzDHwwt4eHjQ2/1304892.svg","color":"#999999","width":20,"height":20,"buildToLocal":true,"SvgImageManage":"SvgImageManage"}},"SvgImage9":{"ctx_map":{"src":"u/dev065/2023/03/17/APQnc5WgBfzDHwwt4eHjQ2/1304892.svg","color":"#999999","width":20,"height":20,"buildToLocal":true,"SvgImageManage":"SvgImageManage"}},"ComNavBar1":{"ctx_map":{"theme":"default","title":"铜爪学院","headerBackgroundColor":"#ffffff","statusBarBackgroundColor":"#ffffff"}},"SvgImage10":{"ctx_map":{"src":"u/dev065/2023/03/17/APQnc5WgBfzDHwwt4eHjQ2/1304892.svg","color":"#999999","width":20,"height":20,"buildToLocal":true,"SvgImageManage":"SvgImageManage"}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[]}}}};

const pageGroupSlug = 'app_tongzhua-collegelist';

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
      <ComNavBar title={ "铜爪学院" } theme={ "default" } statusBarBackgroundColor={ "#ffffff" } headerBackgroundColor={ "#ffffff" }></ComNavBar>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw2w3} scrollX={ false } scrollY={ true } ><View /* View7 */   style={styles.xdw2vo}><XbenchcImage /* Image2 */ style={styles.xdw2vn} source={dwtools.qiniu(slide.components.Image2.ctx_map.src, slide.components.Image2.ctx_map.fop)}  /></View>
<View /* View8 */   style={styles.xdw2vq}><Text /* Text5 */ style={styles.xdw2vp} >{slide.components.Text5.ctx_map.text}</Text></View>
<View /* View3 */   style={styles.xdw2w0}><XbenchcView /* View4 */   viewStyle={styles.xdw2vw} onClick={getEvent('View4:onClick:func1:', {}, bagForKeyValue, bagForIndex)}><Text /* Text3 */ style={styles.xdw2vr} >{slide.components.Text3.ctx_map.text}</Text>
{!!(state.showintroduce) /* ViewIf1 */ && (<><View /* View5 */   style={styles.xdw2vu}><Image /* SvgImage1 */ style={[ styles.xdw2vs, { width: pm(20), height: pm(20) }]} contentFit="contain" source={dwtools.getLocalResource('xdw2vt_lthar36j')} /></View></>)}
{!!(!state.showintroduce) /* ViewIf2 */ && (<><View /* View12 */   style={styles.xdw2vu}><Image /* SvgImage2 */ style={[ styles.xdw2vs, { width: pm(20), height: pm(20) }]} contentFit="contain" source={dwtools.getLocalResource('xdw2vv_lthar36j')} /></View></>)}</XbenchcView>
{!!(state.showintroduce) /* ViewIf7 */ && (<><View /* View16 */   style={styles.xdw2vz}><XbenchcView /* View18 */   viewStyle={styles.xdw2vy} onClick={getEvent('View18:onClick:func9:', {eventData: "introduce"}, bagForKeyValue, bagForIndex)}><Text /* Text9 */ style={styles.xdw2vr} >{slide.components.Text9.ctx_map.text}</Text>
<View /* View23 */   style={styles.xdw2vu}><Image /* SvgImage5 */ style={[ styles.xdw2vs, { width: pm(20), height: pm(20) }]} contentFit="contain" source={dwtools.getLocalResource('xdw2vx_lthar36j')} /></View></XbenchcView></View>
<View /* View19 */   style={styles.xdw2vz}><XbenchcView /* View20 */   viewStyle={styles.xdw2vy} onClick={getEvent('View20:onClick:func9:', {eventData: "training"}, bagForKeyValue, bagForIndex)}><Text /* Text10 */ style={styles.xdw2vr} >{slide.components.Text10.ctx_map.text}</Text>
<View /* View24 */   style={styles.xdw2vu}><Image /* SvgImage8 */ style={[ styles.xdw2vs, { width: pm(20), height: pm(20) }]} contentFit="contain" source={dwtools.getLocalResource('xdw2vx_lthar36j')} /></View></XbenchcView></View>
<View /* View21 */   style={styles.xdw2vz}><XbenchcView /* View22 */   viewStyle={styles.xdw2vy} onClick={getEvent('View22:onClick:func9:', {eventData: "contrast"}, bagForKeyValue, bagForIndex)}><Text /* Text11 */ style={styles.xdw2vr} >{slide.components.Text11.ctx_map.text}</Text>
<View /* View25 */   style={styles.xdw2vu}><Image /* SvgImage9 */ style={[ styles.xdw2vs, { width: pm(20), height: pm(20) }]} contentFit="contain" source={dwtools.getLocalResource('xdw2vx_lthar36j')} /></View></XbenchcView></View></>)}</View>
<View /* View9 */   style={styles.xdw2w2}><XbenchcView /* View10 */   viewStyle={styles.xdw2vw} onClick={getEvent('View10:onClick:func2:', {}, bagForKeyValue, bagForIndex)}><Text /* Text6 */ style={styles.xdw2vr} >{slide.components.Text6.ctx_map.text}</Text>
{!!(state.showmaterial) /* ViewIf3 */ && (<><View /* View13 */   style={styles.xdw2vu}><Image /* SvgImage3 */ style={[ styles.xdw2vs, { width: pm(20), height: pm(20) }]} contentFit="contain" source={dwtools.getLocalResource('xdw2vt_lthar36j')} /></View></>)}
{!!(!state.showmaterial) /* ViewIf4 */ && (<><View /* View14 */   style={styles.xdw2vu}><Image /* SvgImage4 */ style={[ styles.xdw2vs, { width: pm(20), height: pm(20) }]} contentFit="contain" source={dwtools.getLocalResource('xdw2vv_lthar36j')} /></View></>)}</XbenchcView>
{!!(state.showmaterial) /* ViewIf8 */ && (<><View /* View29 */   style={styles.xdw2w1}><XbenchcView /* View33 */   viewStyle={styles.xdw2vy} onClick={getEvent('View33:onClick:func9:', {eventData: ""}, bagForKeyValue, bagForIndex)}><Text /* Text14 */ style={styles.xdw2vr} >{slide.components.Text14.ctx_map.text}</Text>
<View /* View34 */   style={styles.xdw2vu}><Image /* SvgImage10 */ style={[ styles.xdw2vs, { width: pm(20), height: pm(20) }]} contentFit="contain" source={dwtools.getLocalResource('xdw2vx_lthar36j')} /></View></XbenchcView></View></>)}</View></XbenchcScrollView>
    </ErrorBoundary>
  )
}
