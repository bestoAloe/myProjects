
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import ComNavBar from '../../xbench/components/ComNavBar'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import { Shadow } from 'react-native-shadow-2'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import { Image } from 'expo-image'
import Xbenchc168611 from '../components/Xbenchc168611'
import Xbenchc184617 from '../components/Xbenchc184617'
import ViewForItem from '../../xbench/components/ViewForItem'
import XbenchcScrollView from '../../xbench/xbenchc/components/XbenchcScrollView'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

let action60lock = false
let action75lock = false
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action5 = state.items = ([])
  const action6 = state.query = ({limit: 16, offset: 0})
  const action33 = state.query.limit = (16)
  const action34 = state.query.offset = (0)
  const action52 = state.reachBottom = (false)
  const action63 = state.ready = (false)
  const action73 = state.refresherTriggered = (false)
  const action86 = state.estimatedItemSize = (dw.getPlatformPx(100))
  const action88 = state.tabs = ([/**/  {/**/    id: "24",/**/    name: "标准会员",/**/  },/**/  {/**/    id: "48",/**/    name: "高级会员",/**/  },/**/])
  const action89 = state.tab = ("24")
  const action94 = state.member = (null)
  const action101 = state.vip_type = ("0")
  return state
}

const action7 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action106 = (dw.platform === 'dwapp') ? dw.app.wxLogin() : (dw.platform === 'rnapp') ? await dw.app.wxLogin() : 
        (D.siteuser && D.siteuser.id)
          ? true
          : app.wxGotoLogin({}, '/account/login/?next=' + encodeURIComponent(location.href))
        
  if (!action106) return
  const action96 = await Promise.all([
    (async () => {
      const action8 = await store.dispatch("loadItems", {})
      return action8
    })(),
    (async () => {
      const action95 = await store.dispatch("func7", {})
      return action95
    })(),
  ])

  const action62 = store.commit('setState', {["state.ready"]: true})
}

const action65 = actions['refresh'] = async function (store, event) {
  const state = store.state
  const action47 = store.commit('setState', {["state.query.offset"]: 0, ["state.reachBottom"]: false})
  const action10 = await store.dispatch("loadItems", {})
}

const action66 = actions['handleScrollToLower'] = async function (store, event) {
  const state = store.state
  const action60 = await (async () => {
  
      if (action60lock) return true
      action60lock = true
      try {
    
        if (!!(state.reachBottom) === (true)) {
          const action67message = ("")
          const action67title = ("提示")
          action67message && dw.alert(action67title, action67message)
          return {}
        }
        
    const action50 = store.commit('setState', {["state.query.offset"]: state.query.offset + state.query.limit})
    const action51 = await store.dispatch("loadItems", {})
  
      } catch (e) {
        throw e
      } finally {
        action60lock = false
      }
      
  })()
}

const action74 = actions['handlePullRefresh'] = async function (store, event) {
  const state = store.state
  const action75 = await (async () => {
  
      if (action75lock) return true
      action75lock = true
      try {
    const action76 = store.commit('setState', {["state.refresherTriggered"]: true})
    const action77 = await store.dispatch("refresh", {})
    await new Promise((resolve, reject) => setTimeout(resolve, 150))
    const action79 = store.commit('setState', {["state.refresherTriggered"]: false})
  
      } catch (e) {
        throw e
      } finally {
        action75lock = false
      }
      
  })()
}

const action4 = actions['loadItems'] = async function (store, event) {
  const state = store.state
  const action61 = await dw.app.run("auto_group_product.list", {"aggs": {}, "limit": state.query.limit, "offset": state.query.offset, "filters": {data__video_save_hours:Number(state.tab)}, "order_by": []})
  const action69 = console.log('[loadItems#action69] 打印(action61)的返回值', [action61.meta, action61.objects.length])
  let objects = (action61.objects)
  const action68 = objects
  if ((action61.meta.offset) === (0)) {
    const action37 = store.commit('setState', {["state.items"]: objects})
  } else {
    const action39 = store.commit('setState', {["state.items__uconcat"]: ({field: 'id', list: objects})})
  }
  if ((action61.objects.length) < (state.query.limit)) {
    const action54 = store.commit('setState', {["state.reachBottom"]: true})
  }
}

const action70 = actions['clickItem'] = function (store, event) {
  const state = store.state
  const action71 = console.log('[clickItem#action71] 打印', event)
  const action72 = dw.app.goToPappUrl("vipcheckout", {"uuid": event.context.eventData}, {redirectTo: false})
}

const action90 = actions['func7'] = async function (store, event) {
  const state = store.state
  const action91 = await dw.app.run("member.get_create_member", {})
  
        if ((action91.status) === ("error")) {
          const action92message = (action91.message || "操作错误！")
          const action92title = ("提示")
          action92message && dw.alert(action92title, action92message)
          return {}
        }
        
  const action93 = store.commit('setState', {["state.member"]: action91.object})
  const action98 = await dw.app.run("order.list", {"limit": 1, "offset": 0, "filters": {/**/  data__is_work: true,/**/  data__type: 'vip'/**/}, "order_by": []})
  let order = (action98.objects.length ? action98.objects[0] : null)
  const action99 = order
  const action100 = console.log('[func7#action100] 打印(order)的返回值', order)
  if (order) {
    const action105 = store.commit('setState', {["state.vip_type"]: order.data.vip_type})
  }
}

const action107 = actions['func8'] = function (store, event) {
  const state = store.state
  const action108 = dw.app.goToPappUrl("vipcenter", {}, {redirectTo: false})
}

exports.default =  {
  actions
}

        return exports.default;
      });
    

    const getDate = (...args) => new Date(...args);
    const getRegExp = (...args) => new RegExp(...args);

    computeds = (function () {
      const module = {};
      "use strict";

var actions = {};

var action109 = actions['computed1'] = function (event, state) {
  return { /**/"0": "普通用户", /**/"1": "标准会员", /**/"2": "高级会员", /**/"3": "尊享会员" }[state.vip_type];
};
// COMPUTED_ACTION_META:computed1 {"deps":["vip_type"]}

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdw3tb: {
  width: pm(50),
  height: pm(50),
  borderTopWidth: pm(1),
  borderTopColor: "#ffffff",
  borderLeftWidth: pm(1),
  borderLeftColor: "#ffffff",
  borderRightWidth: pm(1),
  borderRightColor: "#ffffff",
  borderBottomWidth: pm(1),
  borderBottomColor: "#ffffff",
  borderTopLeftRadius: pm(999),
  borderTopRightRadius: pm(999),
  borderBottomLeftRadius: pm(999),
  borderBottomRightRadius: pm(999),
},
xdw3tc: {
  left: 0,
  width: pm(50),
  bottom: 0,
  height: pm(50),
  alignItems: "center",
  marginRight: pm(10),
  flexDirection: "row",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw3td: {
  color: "#181818",
  width: pm(170),
  fontSize: pm(17),
  fontWeight: "500",
  lineHeight: pm(24),
},
xdw3te: {
  color: "#999999",
  fontSize: pm(12),
  fontWeight: "400",
  lineHeight: pm(17),
  marginRight: pm(2),
},
xdw3tf: {
  alignItems: "center",
  flexDirection: "row",
},
xdw3tg: {
  width: pm(14),
  height: pm(14),
},
xdw3th: {
  flexDirection: "column",
},
xdw3ti: {
  color: "#ffffff",
  opacity: 0.1,
  fontSize: pm(111),
  transform: [{skewX: "-10deg"}],
  fontWeight: "bold",
  lineHeight: pm(144),
},
xdw3tj: {
  left: pm(-7),
  bottom: pm(-35),
  position: "absolute",
},
xdw3tk: {
  color: "#ffe39f",
  fontSize: pm(12),
  lineHeight: pm(17),
},
xdw3tl: {
  color: "#2e2720",
  fontSize: pm(9),
  lineHeight: pm(14),
  marginLeft: pm(2),
  marginRight: pm(2),
},
xdw3tm: {},
xdw3to: {
  flexWrap: "nowrap",
  alignItems: "center",
  paddingTop: pm(2),
  paddingLeft: pm(5),
  paddingRight: pm(5),
  flexDirection: "row",
  paddingBottom: pm(3),
  backgroundColor: "#fff0bf",
  borderTopLeftRadius: pm(9),
  borderTopRightRadius: pm(9),
  borderBottomLeftRadius: pm(9),
  borderBottomRightRadius: pm(9),
},
xdw3tp: {
  height: "100%",
  alignItems: "center",
  marginLeft: pm(17),
  marginRight: pm(13),
  flexDirection: "row",
  justifyContent: "space-between",
},
xdw3tq: {
  width: pm(300),
  height: pm(48),
  position: "relative",
  marginTop: pm(12),
  flexDirection: "column",
  backgroundColor: "#565656",
  borderTopLeftRadius: pm(7),
  borderTopRightRadius: pm(7),
  borderBottomLeftRadius: pm(7),
  borderBottomRightRadius: pm(7),
},
xdw3tr: {
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
},
xdw3ts: {
  color: "#A56341",
  fontSize: pm(14),
  fontWeight: "bold",
  lineHeight: pm(20),
},
xdw3tt: {
  color: "#DE946E",
  fontSize: pm(12),
  lineHeight: pm(20),
},
xdw3tu: {
  color: "#9f9f9f",
  fontSize: pm(11),
  lineHeight: pm(18),
},
xdw3tv: {
  width: pm(190),
  flexDirection: "column",
},
xdw3tw: {
  color: "#A56341",
  fontSize: pm(11),
  lineHeight: pm(26),
},
xdw3tx: {
  width: pm(70),
  height: pm(26),
  alignItems: "center",
  marginLeft: "auto",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw3ty: {
  left: 0,
  width: pm(70),
  bottom: 0,
  height: pm(26),
  alignItems: "center",
  marginLeft: "auto",
  flexDirection: "row",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw3tz: {
  marginTop: pm(10),
  marginLeft: pm(10),
  paddingTop: pm(5),
  marginRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
},
xdw3u0: {
  color: "#666666",
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw3u1: {
  alignItems: "center",
  paddingTop: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
  justifyContent: "center",
},
xdw3u2: {
  flex: 1,
  width: "100%",
  backgroundColor: "#f8f8f8",
},
xdw3u3: {
  width: pm(150),
  height: pm(150),
},
xdw3u4: {
  alignItems: "center",
  paddingTop: pm(200),
  flexDirection: "column",
  justifyContent: "center",
},
xdw3u5: {
  flexGrow: 1,
  flexBasis: "0%",
  overflow: "scroll",
  flexShrink: 1,
  flexDirection: "column",
}
});
const slide = {"type":"263723","key":"c2637231","slug":null,"randomid":"id_57ef30670fec70d2395dbe1f","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image2":{"ctx_map":{"fop":"e,300,300","src":"u/qiuzhen/2023/03/27/8rypC9eLMAdJspaefPNN4A/FtKV50QeRVyFkzNaa3ZnPGGH4zb1.png"}},"Image6":{"ctx_map":{"fop":"e,300,300","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image7":{"ctx_map":{"fop":"e,32,32","src":"u/dev070/2023/02/27/6eQrYUjMbiMEDnsa6DCsXM/进入icon2x.png"}},"Text15":{"ctx_map":{"text":"暂无数据"}},"Text16":{"ctx_map":{"text":"已经到底了"}},"Text18":{"ctx_map":{"text":"购买"}},"Text19":{"ctx_map":{"text":"这是一个文本组件"}},"Text20":{"ctx_map":{"text":"做任务"}},"Text21":{"ctx_map":{"text":"这是一个文本组件"}},"Text22":{"ctx_map":{"text":"立即开通"}},"Text23":{"ctx_map":{"text":"占位铜爪会员"}},"Text24":{"ctx_map":{"text":"V"}},"Text27":{"ctx_map":{"text":"进入编辑"}},"Text28":{"ctx_map":{"text":"用户3.1415"}},"Text29":{"ctx_map":{"text":"会员中心"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"View20":{"ctx_map":{}},"View21":{"ctx_map":{}},"View22":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewIf5":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"SvgImage1":{"ctx_map":{"src":"u/dev070/2023/03/02/ZpLUjaHHQhmDi4TMPUfdjm/1093994.svg","color":"#2e2720","width":6,"height":6,"buildToLocal":true,"SvgImageManage":"SvgImageManage"}},"ComNavBar2":{"ctx_map":{"theme":"default","title":"会员购买","headerBackgroundColor":"#ffffff","statusBarBackgroundColor":"#ffffff"}},"DwappCloud1":{"ctx_map":{"fop1":"e,600,140","image1":"u/dev064/2023/04/23/6CxUUBW65QFZYoRZE9ucog/微信图片_202203141723251.png","style1":null,"style2":null}},"DwappCloud2":{"ctx_map":{"prop1":[{"id":"default","name":"详情"},{"id":"property","name":"属性"},{"id":"comment","name":"评价"}],"text1":"default","style1":null,"style2":null,"style3":null,"style4":null}},"ScrollView2":{"ctx_map":{"type":"list","bounces":true,"scrollX":false,"scrollY":true,"showScrollbar":true,"extraStyleKeys":[],"refresherEnabled":true,"refresherBackground":"#f8f8f8"}},"ShadowView1":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}},"ShadowView3":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}}}};
slide.components.DwappCloud1.ctx_map.style1 = {
  width: pm(300),
  overflow: "hidden",
  marginBottom: pm(10),
  flexDirection: "column",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
};
slide.components.DwappCloud1.ctx_map.style2 = {
  alignItems: "flex-end",
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
  justifyContent: "center",
};
slide.components.DwappCloud2.ctx_map.style1 = {
  fontSize: pm(13),
  flexDirection: "column",
};
slide.components.DwappCloud2.ctx_map.style2 = {
  fontSize: pm(13),
  fontWeight: "bold",
  flexDirection: "column",
};
slide.components.DwappCloud2.ctx_map.style3 = {
  width: "50%",
  bottom: pm(-0.5),
  height: pm(2),
  position: "absolute",
  flexDirection: "column",
  backgroundColor: "rgba(255, 218, 103, 1)",
};
slide.components.DwappCloud2.ctx_map.style4 = {
  height: pm(40),
  flexWrap: "nowrap",
  alignItems: "center",
  borderBottomWidth: pm(1),
  borderBottomColor: "#eee",
  flexDirection: "row",
  justifyContent: "flex-start",
};
const pageGroupSlug = 'app_tongzhua-vipproduct';

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
      <View /* View7 */   style={styles.xdw3u5}><ComNavBar title={ "会员购买" } theme={ "default" } statusBarBackgroundColor={ "#ffffff" } headerBackgroundColor={ "#ffffff" }></ComNavBar>
<View /* View13 */   style={styles.xdw3tr}><View /* View18 */   style={styles.xdw3tf}><Shadow containerStyle={styles.xdw3tc} {...({
  offset: [0, 0],
  distance: 10,
  startColor: 'rgba(0, 0, 0, 0.055)'
})}><XbenchcImage /* Image6 */ style={styles.xdw3tb} source={dwtools.qiniu(state.member.data.avatar, slide.components.Image6.ctx_map.fop)}  /></Shadow>
<Text /* Text28 */ style={styles.xdw3td} >{state.member.data.nickname}</Text>
<View /* View22 */   style={styles.xdw3th}><View /* View20 */   style={styles.xdw3tf}><Text /* Text27 */ style={styles.xdw3te} >{computeds.computed1({}, state)}</Text></View>
{!!(state.vip_type !== "0") /* ViewIf5 */ && (<><XbenchcView /* View21 */   viewStyle={styles.xdw3tf} onClick={getEvent('View21:onClick:func8:', {eventData: "edit_userinfo"}, bagForKeyValue, bagForIndex)}><Text /* Text29 */ style={styles.xdw3te} >{slide.components.Text29.ctx_map.text}</Text>
<XbenchcImage /* Image7 */ style={styles.xdw3tg} source={dwtools.qiniu(slide.components.Image7.ctx_map.src, slide.components.Image7.ctx_map.fop)}  /></XbenchcView></>)}</View></View>
{!!(state.config && !state.config.data.ios_approve) /* ViewIf4 */ && (<><View /* View14 */   style={styles.xdw3tq}><View /* View17 */   style={styles.xdw3tj}><Text /* Text24 */ style={styles.xdw3ti} >{slide.components.Text24.ctx_map.text}</Text></View>
<View /* View15 */   style={styles.xdw3tp}><Text /* Text23 */ style={styles.xdw3tk} >{slide.components.Text23.ctx_map.text}</Text>
<View /* View16 */   style={styles.xdw3to}><Text /* Text22 */ style={styles.xdw3tl} >{slide.components.Text22.ctx_map.text}</Text>
<Image /* SvgImage1 */ style={[ styles.xdw3tm, { width: pm(6), height: pm(6) }]} contentFit="contain" source={dwtools.getLocalResource('xdw3tn_lthar43d')} /></View></View></View></>)}</View>
<Xbenchc168611 /* DwappCloud2 */ tabs={ state.tabs } value={ state.tab } textStyle={ slide.components.DwappCloud2.ctx_map.style1 } activeTextStyle={ slide.components.DwappCloud2.ctx_map.style2 } lineStyle={ slide.components.DwappCloud2.ctx_map.style3 } containerStyle={ slide.components.DwappCloud2.ctx_map.style4 }  onChange={getEvent('DwappCloud2:input:refresh:tab', {}, bagForKeyValue, bagForIndex)}></Xbenchc168611>
{!!(state.ready && state.items.length > 0) /* ViewIf1 */ && (<><XbenchcScrollView /* ScrollView2 */ style={styles.xdw3u2} refresherEnabled={ true } refresherTriggered={ state.refresherTriggered } refresherBackground={ "#f8f8f8" } scrollX={ false } scrollY={ true } showScrollbar={ true } bounces={ true }  onRefresherRefresh={getEvent('ScrollView2:onRefresherRefresh:handlePullRefresh:', {}, bagForKeyValue, bagForIndex)} onScrollToLower={getEvent('ScrollView2:onScrollToLower:handleScrollToLower:', {}, bagForKeyValue, bagForIndex)}><View /* View8 */   style={styles.xdw3tz}>{(state.items).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><Xbenchc184617 /* DwappCloud1 */ fop={ slide.components.DwappCloud1.ctx_map.fop1 } image={ slide.components.DwappCloud1.ctx_map.image1 } containerStyle={ slide.components.DwappCloud1.ctx_map.style1 } slotStyle={ slide.components.DwappCloud1.ctx_map.style2 }  onChange={getEvent('DwappCloud1:input::', {}, bagForKeyValue, bagForIndex)}><View /* View11 */   style={styles.xdw3tv}><Text /* Text20 */ style={styles.xdw3ts} >{bagForItem.data.name}</Text>
<Text /* Text19 */ style={styles.xdw3tt} >{bagForItem.data.expire_days+'天'+bagForItem.data.price / 100+'元'}</Text>
<View /* View12 */   style={styles.xdw3th}><Text /* Text21 */ style={styles.xdw3tu} >{bagForItem.data.remark}</Text></View></View>
<XbenchcView /* View9 */   viewStyle={styles.xdw3tx} onClick={getEvent('View9:onClick:buyVip:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><Shadow containerStyle={styles.xdw3ty} {...({
  offset: [0, 0],
  distance: 5,
  startColor: 'rgba(0, 0, 0, 0.075)'
})}><View /* View10 */   style={styles.xdw3tx}><Text /* Text18 */ style={styles.xdw3tw} >{slide.components.Text18.ctx_map.text}</Text></View></Shadow></XbenchcView></Xbenchc184617></ViewForItem> })}</View>
{!!(state.items.length > 0 && state.reachBottom) /* ViewIf3 */ && (<><View /* View3 */   style={styles.xdw3u1}><Text /* Text16 */ style={styles.xdw3u0} >{slide.components.Text16.ctx_map.text}</Text></View></>)}</XbenchcScrollView></>)}
{!!(state.ready && state.items.length === 0) /* ViewIf2 */ && (<><View /* View2 */   style={styles.xdw3u4}><XbenchcImage /* Image2 */ style={styles.xdw3u3} source={dwtools.qiniu(slide.components.Image2.ctx_map.src, slide.components.Image2.ctx_map.fop)}  />
<Text /* Text15 */ style={styles.xdw3u0} >{slide.components.Text15.ctx_map.text}</Text></View></>)}</View>
    </ErrorBoundary>
  )
}
