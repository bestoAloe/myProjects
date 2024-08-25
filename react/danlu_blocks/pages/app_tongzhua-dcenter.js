
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import { Shadow } from 'react-native-shadow-2'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import { Image } from 'expo-image'
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

const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action2 = state.orderStatus = ([/**/  {/**/    id:"topay",/**/    name:"待付款",/**/    image:"https://s2.d2scdn.com/u/dev070/2023/02/27/dqRRprDQJsCzftAVUFfSCK/编组82x.png"/**/  },/**/  {/**/    id:"tosend",/**/    name:"待发货",/**/    image:"https://s2.d2scdn.com/u/dev070/2023/02/27/V9THijQgnzavmEcDBufR3j/编组92x.png"/**/  },/**/  {/**/    id:"send",/**/    name:"待收货",/**/    image:"https://s2.d2scdn.com/u/dev070/2023/02/27/ZBS7XszmMDREq4LFLQMZRK/编组112x.png"/**/  },/**/  {/**/    id:"success",/**/    name:"待评价",/**/    image:"https://s2.d2scdn.com/u/dev070/2023/02/27/XhiMugGZuygTszjJ6cSLRX/编组122x.png"/**/  },/**/  {/**/    id:"aftersale",/**/    name:"售后",/**/    image:"https://s2.d2scdn.com/u/dev070/2023/02/27/ttS8n5bkuwYUY22EjcLXD3/编组152x.png"/**/  },/**/])
  const action11 = state.siteuser_id = (null)
  const action17 = state.member = (null)
  const action24 = state.petList = ([])
  const action40 = state.ready = (false)
  const action84 = state.config = (null)
  const action99 = state.vip_type = ("0")
  return state
}

const action3 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action5 = await dw.app.run("member.get_siteuser_id", {})
  if (action5) {
    const action21 = store.commit('setState', {["state.siteuser_id"]: action5})
    const action16 = await store.dispatch("func1", {})
  } else {
    const action79 = store.commit('setState', {["state.ready"]: false, ["state.member"]: null, ["state.siteuser_id"]: null, ["state.petList"]: false})
  }
  const action41 = store.commit('setState', {["state.ready"]: true})
}

const action15 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action39 = await store.dispatch("func7", {})
  const action19 = await Promise.all([
    (async () => {
      const action20 = await store.dispatch("func2", {})
      return action20
    })(),
    (async () => {
      const action86 = await store.dispatch("func11", {})
      return action86
    })(),
    (async () => {
      const action100 = await store.dispatch("func13", {})
      return action100
    })(),
  ])

}

const action18 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action22 = await dw.app.run("pet.list", {"limit": 100, "offset": 0, "filters": {data__member_uuid:state.member.uuid}})
  
        if ((action22.status) === ("error")) {
          const action25message = (action22.message || "操作错误！")
          const action25title = ("提示")
          action25message && dw.alert(action25title, action25message)
          return {}
        }
        
  const action23 = store.commit('setState', {["state.petList"]: action22.objects})
}

const action35 = actions['func7'] = async function (store, event) {
  const state = store.state
  const action36 = await dw.app.run("member.get_create_member", {})
  
        if ((action36.status) === ("error")) {
          const action37message = (action36.message || "操作错误！")
          const action37title = ("提示")
          action37message && dw.alert(action37title, action37message)
          return {}
        }
        
  const action38 = store.commit('setState', {["state.member"]: action36.object})
}

/* action34: 跳转页面 */
const action42 = actions['func8'] = function (store, event) {
  const state = store.state
  const action43 = dw.goToHref(`feature-login`, {redirectTo: false})
}

const action57 = actions['func9'] = async function (store, event) {
  const state = store.state
  if (!state.member) {
    const action47 = await store.dispatch("func8", {})
    return event
  }
  let slug = (event.context.eventData)
  const action58 = slug
  if ((slug) === ("edit_petinfo")) {
    const action61 = await (async (store, event) => {
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
  const action27 = dw.app.goToPappUrl(slug, event.context.eventData2 || {}, {redirectTo: false})
}

const action62 = actions['func10'] = async function (store, event) {
  const state = store.state
  if (dw.platform === 'rnapp' && state.member) {
    const action66 = await (async (store, event) => {
const Notifications = dw.getNativePackage("Notifications")

const { status } = await Notifications.getPermissionsAsync();

if (status === 'granted') {
  console.log('用户已经允许推送通知');
  // 推送通知已经开启
  return 'open'
} else {
  console.log('用户没有允许推送通知');
  return 'close'
}
})(store, event)
    let notify_setting = (action66)
    const action67 = notify_setting
    const action74 = console.log('[func10#action74] notify_setting', notify_setting)
    if (state.member.data.notify_setting !== notify_setting) {
      const action73 = await dw.app.run("member.update", {"id": state.member.id, "formData": {notify_setting}})
    }
  }
}

const action82 = actions['func11'] = async function (store, event) {
  const state = store.state
  const action83 = await dw.app.run("config.get", {})
  const action85 = store.commit('setState', {["state.config"]: action83.object})
}

const action87 = actions['func12'] = function (store, event) {
  const state = store.state
  const action88 = dw.app.goToPappUrl("vipproduct", {}, {redirectTo: false})
}

const action89 = actions['func13'] = async function (store, event) {
  const state = store.state
  const action90 = await dw.app.run("member.get_create_member", {})
  
        if ((action90.status) === ("error")) {
          const action91message = (action90.message || "操作错误！")
          const action91title = ("提示")
          action91message && dw.alert(action91title, action91message)
          return {}
        }
        
  const action92 = store.commit('setState', {["state.member"]: action90.object})
  const action93 = await dw.app.run("order.list", {"limit": 1, "offset": 0, "filters": {/**/  data__is_work: true,/**/  data__type: 'vip'/**/}, "order_by": []})
  let order = (action93.objects.length ? action93.objects[0] : null)
  const action94 = order
  const action95 = console.log('[func13#action95] 打印(order)的返回值', order)
  if (order) {
    const action98 = store.commit('setState', {["state.vip_type"]: order.data.vip_type})
  }
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

/* action34: 跳转页面 */
var action101 = actions['computed1'] = function (event, state) {
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
xdw32: {
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
xdw33: {
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
xdw34: {
  color: "#181818",
  width: pm(170),
  fontSize: pm(17),
  fontWeight: "500",
  lineHeight: pm(24),
},
xdw35: {
  color: "#999999",
  fontSize: pm(12),
  fontWeight: "400",
  lineHeight: pm(17),
  marginRight: pm(2),
},
xdw36: {
  width: pm(14),
  height: pm(14),
},
xdw37: {
  alignItems: "center",
  flexDirection: "row",
},
xdw38: {
  color: "#ffffff",
  opacity: 0.1,
  fontSize: pm(111),
  transform: [{skewX: "-10deg"}],
  fontWeight: "bold",
  lineHeight: pm(144),
},
xdw39: {
  left: pm(-7),
  bottom: pm(-35),
  position: "absolute",
},
xdw3a: {
  color: "#ffe39f",
  fontSize: pm(12),
  lineHeight: pm(17),
},
xdw3b: {
  color: "#2e2720",
  fontSize: pm(9),
  lineHeight: pm(14),
  marginLeft: pm(2),
  marginRight: pm(2),
},
xdw3c: {},
xdw3e: {
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
xdw3f: {
  height: "100%",
  alignItems: "center",
  marginLeft: pm(17),
  marginRight: pm(13),
  flexDirection: "row",
  justifyContent: "space-between",
},
xdw3g: {
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
xdw3h: {
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
},
xdw3i: {
  color: "#181818",
  fontSize: pm(14),
  fontWeight: "500",
  lineHeight: pm(19),
},
xdw3j: {
  width: pm(12),
  height: pm(12),
  marginRight: pm(3),
},
xdw3k: {
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw3l: {
  width: pm(133),
  height: pm(36),
  fontSize: pm(10),
  alignItems: "center",
  lineHeight: pm(15),
  marginLeft: pm(83),
  marginRight: pm(83),
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: "#ffd355",
  borderTopLeftRadius: pm(18),
  borderTopRightRadius: pm(18),
  borderBottomLeftRadius: pm(18),
  borderBottomRightRadius: pm(18),
},
xdw3m: {
  width: pm(300),
  flexDirection: "column",
  justifyContent: "center",
},
xdw3n: {
  width: pm(43),
  height: pm(43),
  borderTopLeftRadius: pm(999),
  borderTopRightRadius: pm(999),
  borderBottomLeftRadius: pm(999),
  borderBottomRightRadius: pm(999),
},
xdw3o: {
  fontSize: pm(12),
  maxWidth: pm(43),
  overflow: "hidden",
  lineHeight: pm(24),
},
xdw3p: {
  alignItems: "center",
  marginRight: pm(17),
  flexDirection: "column",
  justifyContent: "center",
},
xdw3q: {
  width: pm(60),
  height: pm(60),
},
xdw3r: {
  flexWrap: "wrap",
  flexDirection: "row",
},
xdw3s: {
  flex: 1,
  width: "100%",
},
xdw3t: {
  width: pm(300),
  marginTop: pm(17),
  marginBottom: pm(7),
  flexDirection: "column",
},
xdw3u: {
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
  backgroundColor: "#ffffff",
},
xdw3v: {
  width: pm(26),
  height: pm(26),
  marginRight: pm(3),
},
xdw3w: {
  color: "#181818",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw3x: {
  width: pm(14),
  height: pm(14),
  marginLeft: "auto",
},
xdw3y: {
  alignItems: "center",
  marginLeft: pm(13),
  paddingTop: pm(9),
  borderBottomWidth: pm(0.5),
  borderBottomColor: "#eeeeee",
  paddingRight: pm(13),
  flexDirection: "row",
  paddingBottom: pm(9),
  justifyContent: "flex-start",
},
xdw3z: {
  alignItems: "center",
  paddingTop: pm(9),
  paddingLeft: pm(13),
  paddingRight: pm(13),
  flexDirection: "row",
  paddingBottom: pm(9),
  justifyContent: "flex-start",
},
xdw40: {
  marginTop: pm(10),
  flexDirection: "column",
  backgroundColor: "#ffffff",
},
xdw41: {
  width: pm(320),
  marginTop: pm(10),
  flexDirection: "column",
  backgroundColor: "#f8f8f8",
},
xdw42: {
  flex: 1,
  width: "100%",
  paddingTop: pm(17),
  backgroundColor: "#f8f8f8",
}
});
const slide = {"type":"170206","key":"c1702061","slug":null,"randomid":"id_5afb5c70450c25cb050e68b1","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":"用户3.1415"}},"Text2":{"ctx_map":{"text":"进入编辑"}},"Text3":{"ctx_map":{"text":"V"}},"Text4":{"ctx_map":{"text":"铜爪会员"}},"Text5":{"ctx_map":{"text":"立即开通"}},"Text6":{"ctx_map":{"text":"我的宠物"}},"Text7":{"ctx_map":{"text":"我的订单"}},"Text8":{"ctx_map":{"text":"添加你的宠物"}},"Text9":{"ctx_map":{"text":"状态"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,300,300","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image2":{"ctx_map":{"fop":"e,32,32","src":"u/dev070/2023/02/27/6eQrYUjMbiMEDnsa6DCsXM/进入icon2x.png"}},"Image3":{"ctx_map":{"fop":"e,1000,1000","src":"u/dev070/2023/02/27/3a4TWco7W6FZatjUKwDmKo/SketchPng9b8ac81c5066f0b3d645d9796b68413f99013341ee29317f1b601b221f841a3d.png"}},"Image4":{"ctx_map":{"fop":"e,72,72","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image5":{"ctx_map":{"fop":"e,32,32","src":"u/dev070/2023/02/27/6eQrYUjMbiMEDnsa6DCsXM/进入icon2x.png"}},"Image6":{"ctx_map":{"fop":"e,60,60","src":"u/dev070/2023/02/27/CRKZJECCCxd5UALAPU3SRX/编组262x.png"}},"Image7":{"ctx_map":{"fop":"e,32,32","src":"u/dev070/2023/02/27/6eQrYUjMbiMEDnsa6DCsXM/进入icon2x.png"}},"Image8":{"ctx_map":{"fop":"e,32,32","src":"u/dev070/2023/02/27/6eQrYUjMbiMEDnsa6DCsXM/进入icon2x.png"}},"Image9":{"ctx_map":{"fop":"e,60,60","src":"u/dev070/2023/02/27/S5oa5MWVEgDr4BEfaC7LFe/编组262x1.png"}},"Text10":{"ctx_map":{"text":"查看全部"}},"Text11":{"ctx_map":{"text":"备忘录"}},"Text12":{"ctx_map":{"text":"通用设置"}},"Text13":{"ctx_map":{"text":"前往登录"}},"Text14":{"ctx_map":{"text":"未登录"}},"Text15":{"ctx_map":{"text":"这是一个文本组件"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"View20":{"ctx_map":{}},"View21":{"ctx_map":{}},"View22":{"ctx_map":{}},"View23":{"ctx_map":{}},"View24":{"ctx_map":{}},"View25":{"ctx_map":{}},"View26":{"ctx_map":{}},"View27":{"ctx_map":{}},"Image10":{"ctx_map":{"fop":"e,32,32","src":"u/dev070/2023/02/27/6eQrYUjMbiMEDnsa6DCsXM/进入icon2x.png"}},"Image11":{"ctx_map":{"fop":"e,300,300","src":"u/dev064/2023/05/11/uFhTdCeKYEq6rz9oohmhfB/椭圆形4x.png"}},"Image12":{"ctx_map":{"fop":"e,300,300","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image13":{"ctx_map":{"fop":"e,300,300","src":"u/dev070/2023/03/03/LiSNruhM352uDutgCm9xxB/编组172x.png"}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewIf5":{"ctx_map":{"value":true}},"ViewIf6":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewFor2":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"SvgImage1":{"ctx_map":{"src":"u/dev070/2023/03/02/ZpLUjaHHQhmDi4TMPUfdjm/1093994.svg","color":"#2e2720","width":6,"height":6,"buildToLocal":true,"SvgImageManage":"SvgImageManage"}},"ScrollView1":{"ctx_map":{"type":"list","scrollY":true,"refresherEnabled":true,"refresherThreshold":50,"refresherBackground":"#f8f8f8","refresherDefaultStyle":"none"}},"ScrollView2":{"ctx_map":{"type":"list","scrollX":true,"scrollY":false,"showScrollbar":false}},"ShadowView1":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}},"ShadowView2":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}}}};

const pageGroupSlug = 'app_tongzhua-dcenter';

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
      <XbenchcScrollView /* ScrollView1 */ style={styles.xdw42} refresherEnabled={ true } refresherBackground={ "#f8f8f8" } scrollY={ true }  onRefresherRefresh={getEvent('ScrollView1:onRefresherRefresh:func1:', {}, bagForKeyValue, bagForIndex)}>{!!(state.ready) /* ViewIf3 */ && (<><View /* View6 */   style={styles.xdw41}><View /* View1 */   style={styles.xdw3h}><View /* View5 */   style={styles.xdw37}>{!!(!!state.member) /* ViewIf4 */ && (<><Shadow containerStyle={styles.xdw33} {...({
  offset: [0, 0],
  distance: 10,
  startColor: 'rgba(0, 0, 0, 0.055)'
})}><XbenchcImage /* Image1 */ style={styles.xdw32} source={dwtools.qiniu(state.member.data.avatar, slide.components.Image1.ctx_map.fop)}  /></Shadow>
<Text /* Text1 */ style={styles.xdw34} >{state.member.data.nickname}</Text>
<XbenchcView /* View21 */   viewStyle={styles.xdw37} onClick={getEvent('View21:onClick:func9:', {eventData: "edit_userinfo"}, bagForKeyValue, bagForIndex)}><Text /* Text2 */ style={styles.xdw35} >{slide.components.Text2.ctx_map.text}</Text>
<XbenchcImage /* Image2 */ style={styles.xdw36} source={dwtools.qiniu(slide.components.Image2.ctx_map.src, slide.components.Image2.ctx_map.fop)}  /></XbenchcView></>)}
{!!(!state.member) /* ViewIf5 */ && (<><Shadow containerStyle={styles.xdw33} {...({
  offset: [0, 0],
  distance: 10,
  startColor: 'rgba(0, 0, 0, 0.055)'
})}><XbenchcImage /* Image11 */ style={styles.xdw32} source={dwtools.qiniu(slide.components.Image11.ctx_map.src, slide.components.Image11.ctx_map.fop)}  /></Shadow>
<Text /* Text14 */ style={styles.xdw34} >{slide.components.Text14.ctx_map.text}</Text>
<XbenchcView /* View22 */   viewStyle={styles.xdw37} onClick={getEvent('View22:onClick:func8:', {}, bagForKeyValue, bagForIndex)}><Text /* Text13 */ style={styles.xdw35} >{slide.components.Text13.ctx_map.text}</Text>
<XbenchcImage /* Image10 */ style={styles.xdw36} source={dwtools.qiniu(slide.components.Image10.ctx_map.src, slide.components.Image10.ctx_map.fop)}  /></XbenchcView></>)}</View>
{!!(state.config && !state.config.data.ios_approve) /* ViewIf6 */ && (<><View /* View7 */   style={styles.xdw3g}><View /* View8 */   style={styles.xdw39}><Text /* Text3 */ style={styles.xdw38} >{slide.components.Text3.ctx_map.text}</Text></View>
<View /* View9 */   style={styles.xdw3f}><Text /* Text4 */ style={styles.xdw3a} >{computeds.computed1({}, state)}</Text>
<XbenchcView /* View10 */   viewStyle={styles.xdw3e} onClick={getEvent('View10:onClick:func12:', {}, bagForKeyValue, bagForIndex)}><Text /* Text5 */ style={styles.xdw3b} >{state.vip_type === '0' ? "立即开通" : "查看会员"}</Text>
<Image /* SvgImage1 */ style={[ styles.xdw3c, { width: pm(6), height: pm(6) }]} contentFit="contain" source={dwtools.getLocalResource('xdw3d_lthar073')} /></XbenchcView></View></View></>)}</View>
<View /* View2 */   style={styles.xdw3u}><Text /* Text6 */ style={styles.xdw3i} >{slide.components.Text6.ctx_map.text}</Text>
<View /* View20 */   style={styles.xdw3t}>{!!(!state.petList.length) /* ViewIf2 */ && (<><View /* View27 */   style={styles.xdw3m}><XbenchcView /* View13 */   viewStyle={styles.xdw3l} onClick={getEvent('View13:onClick:func9:', {eventData: "edit_petinfo"}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image3 */ style={styles.xdw3j} source={dwtools.qiniu(slide.components.Image3.ctx_map.src, slide.components.Image3.ctx_map.fop)}  />
<Text /* Text8 */ style={styles.xdw3k} >{slide.components.Text8.ctx_map.text}</Text></XbenchcView></View></>)}
{!!(state.petList.length > 0) /* ViewIf1 */ && (<><XbenchcScrollView /* ScrollView2 */ style={styles.xdw3s} scrollX={ true } scrollY={ false } showScrollbar={ false } ><View /* View23 */   style={styles.xdw3r}>{(state.petList).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor2' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor2 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><XbenchcView /* View24 */   viewStyle={styles.xdw3p} onClick={getEvent('View24:onClick:func9:', {eventData: "edit_petinfo", eventData2: {uuid:bagForItem.uuid}}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image12 */ style={styles.xdw3n} source={dwtools.qiniu(bagForItem.data.image, slide.components.Image12.ctx_map.fop)}  />
<Text /* Text15 */ style={styles.xdw3o} >{bagForItem.data.name}</Text></XbenchcView></ViewForItem> })}
<View /* View26 */  ><XbenchcView /* View25 */   onClick={getEvent('View25:onClick:func9:', {eventData: "edit_petinfo"}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image13 */ style={styles.xdw3q} source={dwtools.qiniu(slide.components.Image13.ctx_map.src, slide.components.Image13.ctx_map.fop)}  /></XbenchcView></View></View></XbenchcScrollView></>)}</View></View>
<View /* View4 */   style={styles.xdw40}><XbenchcView /* View18 */   viewStyle={styles.xdw3y} onClick={getEvent('View18:onClick:func9:', {eventData: "memorandum_list"}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image6 */ style={styles.xdw3v} source={dwtools.qiniu(slide.components.Image6.ctx_map.src, slide.components.Image6.ctx_map.fop)}  />
<Text /* Text11 */ style={styles.xdw3w} >{slide.components.Text11.ctx_map.text}</Text>
<XbenchcImage /* Image7 */ style={styles.xdw3x} source={dwtools.qiniu(slide.components.Image7.ctx_map.src, slide.components.Image7.ctx_map.fop)}  /></XbenchcView>
<XbenchcView /* View19 */   viewStyle={styles.xdw3z} onClick={getEvent('View19:onClick:func9:', {eventData: "system_settings"}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image9 */ style={styles.xdw3v} source={dwtools.qiniu(slide.components.Image9.ctx_map.src, slide.components.Image9.ctx_map.fop)}  />
<Text /* Text12 */ style={styles.xdw3w} >{slide.components.Text12.ctx_map.text}</Text>
<XbenchcImage /* Image8 */ style={styles.xdw3x} source={dwtools.qiniu(slide.components.Image8.ctx_map.src, slide.components.Image8.ctx_map.fop)}  /></XbenchcView></View></View></>)}</XbenchcScrollView>
    </ErrorBoundary>
  )
}
