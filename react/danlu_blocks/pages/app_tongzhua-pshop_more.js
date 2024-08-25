
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import ComNavBar from '../../xbench/components/ComNavBar'
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
  const action34 = state.member = (null)
  const action35 = state.service_agency = (null)
  const action36 = state.isReady = (false)
  const action37 = state.isLogin = (false)
  const action38 = state.rolePermissions = (null)
  const action39 = state.agg = (null)
  return state
}

const action2 = actions['onShow'] = async function (store, event) {
  const state = store.state
  
          const action4 = (dw.platform === 'dwapp')
            ? (await (async () => {
              const action4_object = await dw.app.getUserInfoObject()
              return Boolean(action4_object && action4_object.id)
            })())
            : Boolean(D.siteuser && D.siteuser.id)
          
  const action5 = store.commit('setState', {["state.isLogin"]: action4})
  if (action4) {
    const action8 = await store.dispatch("func3", {})
    const action9 = await store.dispatch("func7", {})
  }
  const action42 = store.commit('setState', {["state.isReady"]: true})
}

const action11 = actions['func3'] = async function (store, event) {
  const state = store.state
  const action12 = await dw.app.run("service_agency.get", {"get_role": true})
  
        if ((action12.status) === ("error")) {
          const action13message = (action12.message || "操作错误！")
          const action13title = ("提示")
          action13message && dw.alert(action13title, action13message)
          return {}
        }
        
  const action14 = store.commit('setState', {["state.member"]: action12.member, ["state.service_agency"]: action12.service_agency})
}

const action28 = actions['func7'] = async function (store, event) {
  const state = store.state
  const action29 = await dw.app.run("statistic_agg.list", {"limit": 1, "offset": 0, "filters": {/**/  data__service_agency_uuid: state.service_agency.uuid,/**/  data__type: 'sa_common',/**/}, "order_by": ["-id"]})
  const action30 = console.log('[func7#action30] 打印(action29)的返回值', action29)
  
        if (!!(!action29.objects.length) === (true)) {
          const action31message = ("")
          const action31title = ("提示")
          action31message && dw.alert(action31title, action31message)
          return {}
        }
        
  const action32 = store.commit('setState', {["state.agg"]: action29.objects[0]})
}

const action40 = actions['func8'] = function (store, event) {
  const state = store.state
  let type = (event.context.eventData2)
  const action43 = type
  const action41 = dw.app.goToPappUrl(event.context.eventData, {"type": type}, {redirectTo: false})
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
xdw3dm: {
  flexDirection: "column",
},
xdw3dn: {
  fontSize: pm(12),
  overflow: "hidden",
  fontWeight: "bold",
  lineHeight: pm(24),
},
xdw3do: {
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw3dp: {
  flexGrow: 1,
  flexDirection: "row",
},
xdw3dq: {
  flexDirection: "row",
},
xdw3dr: {
  width: "100%",
  flexDirection: "row",
},
xdw3ds: {
  alignItems: "flex-start",
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(5),
  borderTopRightRadius: pm(5),
  borderBottomLeftRadius: pm(5),
  borderBottomRightRadius: pm(5),
},
xdw3dt: {
  marginLeft: "auto",
},
xdw3du: {
  width: "100%",
  alignItems: "center",
  paddingTop: 0,
  paddingLeft: 0,
  borderBottomWidth: pm(1),
  borderBottomColor: "#F2F2F2",
  paddingRight: 0,
  flexDirection: "row",
  paddingBottom: pm(5),
  backgroundColor: "#ffffff",
},
xdw3dv: {
  width: "100%",
  alignItems: "center",
  paddingTop: pm(10),
  paddingLeft: 0,
  paddingRight: 0,
  flexDirection: "row",
  paddingBottom: 0,
  backgroundColor: "#ffffff",
},
xdw3dw: {
  marginTop: pm(10),
  alignItems: "flex-start",
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(5),
  borderTopRightRadius: pm(5),
  borderBottomLeftRadius: pm(5),
  borderBottomRightRadius: pm(5),
},
xdw3dx: {
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
},
xdw3dy: {
  width: "100%",
  flexGrow: 1,
  overflow: "scroll",
  flexBasis: "0%",
  flexShrink: 1,
  backgroundColor: "#F8F8F8",
}
});
const slide = {"type":"184298","key":"c1842981","slug":null,"randomid":"id_9e3d28499f318e378374b48a","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Text13":{"ctx_map":{"text":"数据概要","numberOfLines":1}},"Text14":{"ctx_map":{"text":"硬件激活分润："}},"Text15":{"ctx_map":{"text":"激活设备数："}},"Text16":{"ctx_map":{"text":"510台"}},"Text17":{"ctx_map":{"text":"1910个"}},"Text18":{"ctx_map":{"text":"会员数："}},"Text19":{"ctx_map":{"text":"会员开通分润："}},"Text20":{"ctx_map":{"text":"894单"}},"Text21":{"ctx_map":{"text":"订单数："}},"Text22":{"ctx_map":{"text":"电商消费分润："}},"Text24":{"ctx_map":{"text":"硬件激活明细"}},"Text26":{"ctx_map":{"text":"会员创建明细"}},"Text27":{"ctx_map":{"text":"台"}},"Text28":{"ctx_map":{"text":"个"}},"Text29":{"ctx_map":{"text":"单"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"SvgImage1":{"ctx_map":{"src":"u/dev064/2023/03/23/BZsBo3S7YxXjbj6XntxkZ2/1029274.svg","color":"#918e8e","width":13,"height":13,"SvgImageManage":"SvgImageManage"}},"SvgImage2":{"ctx_map":{"src":"u/dev064/2023/03/23/BZsBo3S7YxXjbj6XntxkZ2/1029274.svg","color":"#918e8e","width":13,"height":13,"SvgImageManage":"SvgImageManage"}},"ComNavBar1":{"ctx_map":{"theme":"default","title":"更多数据","headerBackgroundColor":"#FFD355","statusBarBackgroundColor":"#FFD355"}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"showScrollbar":true,"extraStyleKeys":[]}},"DisplayPrice1":{"ctx_map":{"value":100,"format":"cnyint"}},"DisplayPrice2":{"ctx_map":{"value":100,"format":"cnyint"}},"DisplayPrice3":{"ctx_map":{"value":100,"format":"cnyint"}}}};

const pageGroupSlug = 'app_tongzhua-pshop_more';

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
      {!!(state.isReady) /* ViewIf1 */ && (<><ComNavBar title={ "更多数据" } theme={ "default" } statusBarBackgroundColor={ "#FFD355" } headerBackgroundColor={ "#FFD355" }></ComNavBar>
<View /* View1 */   style={styles.xdw3dm}></View>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw3dy} scrollX={ false } scrollY={ true } showScrollbar={ true } ><View /* View2 */   style={styles.xdw3dx}><View /* View4 */   style={styles.xdw3ds}><Text /* Text13 */ style={styles.xdw3dn} numberOfLines={1}>{slide.components.Text13.ctx_map.text}</Text>
<View /* View5 */   style={styles.xdw3dr}><View /* View6 */   style={styles.xdw3dp}><Text /* Text14 */ style={styles.xdw3do} >{slide.components.Text14.ctx_map.text}</Text>
<Text style={styles.xdw3do} numberOfLines={1}>{dwtools.priceformat(state.agg.data.device_get_money, slide.components.DisplayPrice1.ctx_map.format)}</Text></View>
<View /* View7 */   style={styles.xdw3dq}><Text /* Text15 */ style={styles.xdw3do} >{slide.components.Text15.ctx_map.text}</Text>
<Text /* Text16 */ style={styles.xdw3do} >{state.agg.data.device_active_count}</Text>
<Text /* Text27 */ style={styles.xdw3do} >{slide.components.Text27.ctx_map.text}</Text></View></View>
<View /* View8 */   style={styles.xdw3dr}><View /* View10 */   style={styles.xdw3dp}><Text /* Text19 */ style={styles.xdw3do} >{slide.components.Text19.ctx_map.text}</Text>
<Text style={styles.xdw3do} numberOfLines={1}>{dwtools.priceformat(state.agg.data.vip_get_money, slide.components.DisplayPrice2.ctx_map.format)}</Text></View>
<View /* View9 */   style={styles.xdw3dq}><Text /* Text18 */ style={styles.xdw3do} >{slide.components.Text18.ctx_map.text}</Text>
<Text /* Text17 */ style={styles.xdw3do} >{state.agg.data.total_vip_count || '0'}</Text>
<Text /* Text28 */ style={styles.xdw3do} >{slide.components.Text28.ctx_map.text}</Text></View></View>
<View /* View11 */   style={styles.xdw3dr}><View /* View13 */   style={styles.xdw3dp}><Text /* Text22 */ style={styles.xdw3do} >{slide.components.Text22.ctx_map.text}</Text>
<Text style={styles.xdw3do} numberOfLines={1}>{dwtools.priceformat(state.agg.data.eb_get_money, slide.components.DisplayPrice3.ctx_map.format)}</Text></View>
<View /* View12 */   style={styles.xdw3dq}><Text /* Text21 */ style={styles.xdw3do} >{slide.components.Text21.ctx_map.text}</Text>
<Text /* Text20 */ style={styles.xdw3do} >{state.agg.data.eb_order_count || "0"}</Text>
<Text /* Text29 */ style={styles.xdw3do} >{slide.components.Text29.ctx_map.text}</Text></View></View></View>
<View /* View14 */   style={styles.xdw3dw}><XbenchcView /* View15 */   viewStyle={styles.xdw3du} onClick={getEvent('View15:onClick:func8:', {eventData: "pshop_log", eventData2: 'device'}, bagForKeyValue, bagForIndex)}><Text /* Text24 */ style={styles.xdw3do} >{slide.components.Text24.ctx_map.text}</Text>
<Image /* SvgImage1 */ style={[ styles.xdw3dt, { width: pm(13), height: pm(13) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev064/2023/03/23/BZsBo3S7YxXjbj6XntxkZ2/1029274.svg"), width: pm(13), height: pm(13) }} /></XbenchcView>
<XbenchcView /* View16 */   viewStyle={styles.xdw3dv} onClick={getEvent('View16:onClick:func8:', {eventData: "pshop_log", eventData2: "vip"}, bagForKeyValue, bagForIndex)}><Text /* Text26 */ style={styles.xdw3do} >{slide.components.Text26.ctx_map.text}</Text>
<Image /* SvgImage2 */ style={[ styles.xdw3dt, { width: pm(13), height: pm(13) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev064/2023/03/23/BZsBo3S7YxXjbj6XntxkZ2/1029274.svg"), width: pm(13), height: pm(13) }} /></XbenchcView></View></View></XbenchcScrollView></>)}
    </ErrorBoundary>
  )
}
