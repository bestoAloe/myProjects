
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc168612 from '../components/Xbenchc168612'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import { Image } from 'expo-image'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

let debugPermissionsKeysMap = ({/**/  pshop_stock_in:true,/**/  pshop_staff_list:true,/**/  pshop_order_list:true,/**/  pshop_contract_list:true,/**/  pshop_device_list:true,/**/})
const action40 = debugPermissionsKeysMap
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action4 = state.member = (null)
  const action50 = state.service_agency = (null)
  const action6 = state.isReady = (false)
  const action14 = state.isLogin = (false)
  const action25 = state.rolePermissions = (null)
  const action62 = state.agg = (null)
  return state
}

const action5 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action10 = await store.dispatch("func2", {})
}

const action9 = actions['func2'] = async function (store, event) {
  const state = store.state
  
          const action13 = (dw.platform === 'dwapp')
            ? (await (async () => {
              const action13_object = await dw.app.getUserInfoObject()
              return Boolean(action13_object && action13_object.id)
            })())
            : Boolean(D.siteuser && D.siteuser.id)
          
  const action15 = store.commit('setState', {["state.isLogin"]: action13})
  if (action13) {
    const action12 = await store.dispatch("func3", {})
    const action70 = await store.dispatch("func7", {})
  }
  const action19 = store.commit('setState', {["state.isReady"]: true})
}

const action11 = actions['func3'] = async function (store, event) {
  const state = store.state
  const action21 = await dw.app.run("service_agency.get", {"get_role": true})
  
        if ((action21.status) === ("error")) {
          const action22message = (action21.message || "操作错误！")
          const action22title = ("提示")
          action22message && dw.alert(action22title, action22message)
          return {}
        }
        
  const action23 = store.commit('setState', {["state.member"]: action21.member, ["state.service_agency"]: action21.service_agency})
  let role = (action21.role)
  const action47 = role
  const action48 = console.log('[func3#action48] 打印(role)的返回值', role)
  let rolePermissions = (!!role ? {/**/  pshop_stock_in: role.data.permissions_keys.includes("pshop_stock_in"),/**/  pshop_staff_list:role.data.permissions_keys.includes("pshop_staff_list"),/**/  pshop_order_list:role.data.permissions_keys.includes("pshop_order_list"),/**/  pshop_contract_list:role.data.permissions_keys.includes("pshop_contract_list"),/**/  pshop_device_list:role.data.permissions_keys.includes("pshop_device_list"),/**/} : null)
  const action27 = rolePermissions
  const action49 = console.log('[func3#action49] 打印(rolePermissions)的返回值', rolePermissions)
  if (!rolePermissions) {
    const action32response = await dw.showModal({
        title: "提示",
        content: "当前用户未配置角色信息, 请联系管理员处理",
        confirmText: "确定",
        confirmColor: "#576b95",
        showCancel: false,
        cancelText: "取消",
        cancelColor: "#000000"
      })
    const action32 = action32response && action32response.confirm
    const action34 = await store.dispatch("func4", {})
  } else {
    const action35 = store.commit('setState', {["state.rolePermissions"]: rolePermissions})
  }
  let action41
  

}

const action2 = actions['func1'] = function (store, event) {
  const state = store.state
  let key = (event.context.eventData)
  const action55 = key
  const action3 = dw.app.goToPappUrl(event.context.eventData, {}, {redirectTo: false})
}

const action8 = actions['onPullDownRefresh'] = async function (store, event) {
  const state = store.state
  const action24 = await store.dispatch("func2", {})
}

const action33 = actions['func4'] = async function (store, event) {
  const state = store.state
  
          const action36 = (dw.platform === 'dwapp' || dw.platform === 'rnapp')
          ? (await dw.logout())
          : (await app.SSOUtils.accoutLogout()).data
          
  const action39 = store.commit('setState', {["state.member"]: null, ["state.isLogin"]: false, ["state.rolePermissions"]: null})
}

const action43 = actions['func5'] = function (store, event) {
  const state = store.state
  const action44 = dw.app.goToPappUrl("pshop_siteuser_setting", {}, {redirectTo: false})
}

const action45 = actions['func6'] = async function (store, event) {
  const state = store.state
  const action46 = (dw.platform === 'dwapp') ? dw.app.wxLogin() : (dw.platform === 'rnapp') ? await dw.app.wxLogin() : 
        (D.siteuser && D.siteuser.id)
          ? true
          : app.wxGotoLogin({}, '/account/login/?next=' + encodeURIComponent(location.href))
        
  if (!action46) return
}

const action59 = actions['func7'] = async function (store, event) {
  const state = store.state
  const action61 = await dw.app.run("statistic_agg.list", {"limit": 1, "offset": 0, "filters": {/**/  data__service_agency_uuid: state.service_agency.uuid,/**/  data__type: 'sa_common',/**/}, "order_by": ["-id"]})
  const action71 = console.log('[func7#action71] 打印(action61)的返回值', action61)
  
        if (!!(!action61.objects.length) === (true)) {
          const action69message = ("")
          const action69title = ("提示")
          action69message && dw.alert(action69title, action69message)
          return {}
        }
        
  const action63 = store.commit('setState', {["state.agg"]: action61.objects[0]})
  const action72 = console.log('[func7#action72] 打印(agg)的返回值', state.agg)
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
xdw3h8: {
  fontSize: pm(18),
  marginTop: pm(10),
  fontWeight: "600",
  lineHeight: pm(24),
},
xdw3h9: {
  width: pm(40),
  height: pm(40),
  marginRight: pm(13),
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw3ha: {
  fontSize: pm(14),
  fontWeight: "500",
  lineHeight: pm(24),
},
xdw3hb: {
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(24),
},
xdw3hc: {
  flexGrow: 1,
  flexShrink: 1,
  flexDirection: "column",
},
xdw3hd: {},
xdw3he: {
  flexDirection: "column",
},
xdw3hf: {
  marginTop: pm(14),
  alignItems: "center",
  flexDirection: "row",
},
xdw3hg: {
  marginTop: pm(4),
  marginLeft: pm(4),
  marginRight: pm(4),
  marginBottom: pm(4),
},
xdw3hh: {
  alignItems: "center",
  marginRight: pm(5),
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#dfb96e",
  borderTopLeftRadius: pm(4),
  borderTopRightRadius: pm(4),
  borderBottomLeftRadius: pm(4),
  borderBottomRightRadius: pm(4),
},
xdw3hi: {
  color: "#eac76e",
  fontSize: pm(14),
  lineHeight: pm(20),
},
xdw3hj: {
  flexWrap: "nowrap",
  alignItems: "center",
  flexDirection: "row",
},
xdw3hk: {
  color: "#bbb3b3",
  fontSize: pm(11),
  marginTop: pm(8),
  lineHeight: pm(16),
},
xdw3hl: {
  paddingTop: pm(10),
  paddingLeft: pm(15),
  paddingRight: pm(15),
  flexDirection: "column",
  paddingBottom: pm(10),
},
xdw3hm: {
  color: "#ffffff",
  fontSize: pm(12),
  lineHeight: pm(20),
  marginRight: pm(5),
},
xdw3hn: {
  color: "#ffffff",
  fontSize: pm(16),
  fontWeight: "500",
  lineHeight: pm(24),
  marginRight: pm(5),
},
xdw3ho: {
  alignItems: "center",
  flexDirection: "row",
},
xdw3hp: {
  color: "#ffffff",
  fontSize: pm(11),
  lineHeight: pm(20),
},
xdw3hq: {
  alignItems: "center",
  paddingTop: pm(10),
  paddingLeft: pm(15),
  paddingRight: pm(15),
  flexDirection: "row",
  paddingBottom: pm(10),
  justifyContent: "space-between",
  backgroundColor: "#463f3f",
},
xdw3hr: {
  marginTop: pm(16),
  overflow: "hidden",
  flexDirection: "column",
  backgroundColor: "#565656",
  borderTopLeftRadius: pm(15),
  borderTopRightRadius: pm(15),
  borderBottomLeftRadius: pm(15),
  borderBottomRightRadius: pm(15),
},
xdw3hs: {
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(20),
},
xdw3ht: {
  color: "#222222",
  fontSize: pm(16),
  fontWeight: "500",
  lineHeight: pm(20),
},
xdw3hu: {
  fontSize: pm(11),
  lineHeight: pm(18),
},
xdw3hv: {
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw3hw: {
  flexWrap: "wrap",
  marginTop: pm(10),
  flexDirection: "row",
  justifyContent: "space-around",
},
xdw3hx: {
  marginTop: pm(10),
  paddingTop: pm(5),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(7),
  borderTopRightRadius: pm(7),
  borderBottomLeftRadius: pm(7),
  borderBottomRightRadius: pm(7),
},
xdw3hy: {
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(20),
  paddingLeft: pm(10),
},
xdw3hz: {
  paddingTop: pm(7),
  paddingLeft: pm(7),
  paddingRight: pm(7),
  flexDirection: "column",
  paddingBottom: pm(7),
  backgroundColor: "#009688",
  borderTopLeftRadius: pm(999),
  borderTopRightRadius: pm(999),
  borderBottomLeftRadius: pm(999),
  borderBottomRightRadius: pm(999),
},
xdw3i0: {
  flexGrow: 1,
  fontSize: pm(11),
  marginTop: pm(3),
  flexShrink: 1,
  lineHeight: pm(20),
},
xdw3i1: {
  flexGrow: 0,
  flexBasis: "25%",
  alignItems: "center",
  flexShrink: 1,
  marginBottom: pm(10),
  flexDirection: "column",
  justifyContent: "center",
},
xdw3i2: {
  paddingTop: pm(7),
  paddingLeft: pm(7),
  paddingRight: pm(7),
  flexDirection: "column",
  paddingBottom: pm(7),
  backgroundColor: "#FFDA67",
  borderTopLeftRadius: pm(999),
  borderTopRightRadius: pm(999),
  borderBottomLeftRadius: pm(999),
  borderBottomRightRadius: pm(999),
},
xdw3i3: {
  paddingTop: pm(7),
  paddingLeft: pm(7),
  paddingRight: pm(7),
  flexDirection: "column",
  paddingBottom: pm(7),
  backgroundColor: "#ff6600",
  borderTopLeftRadius: pm(999),
  borderTopRightRadius: pm(999),
  borderBottomLeftRadius: pm(999),
  borderBottomRightRadius: pm(999),
},
xdw3i4: {
  paddingTop: pm(7),
  paddingLeft: pm(7),
  paddingRight: pm(7),
  flexDirection: "column",
  paddingBottom: pm(7),
  backgroundColor: "#00bcd4",
  borderTopLeftRadius: pm(999),
  borderTopRightRadius: pm(999),
  borderBottomLeftRadius: pm(999),
  borderBottomRightRadius: pm(999),
},
xdw3i5: {
  paddingTop: pm(7),
  paddingLeft: pm(7),
  paddingRight: pm(7),
  flexDirection: "column",
  paddingBottom: pm(7),
  backgroundColor: "#2196f3",
  borderTopLeftRadius: pm(999),
  borderTopRightRadius: pm(999),
  borderBottomLeftRadius: pm(999),
  borderBottomRightRadius: pm(999),
},
xdw3i6: {
  paddingTop: pm(7),
  paddingLeft: pm(7),
  paddingRight: pm(7),
  flexDirection: "column",
  paddingBottom: pm(7),
  backgroundColor: "#ff9800",
  borderTopLeftRadius: pm(999),
  borderTopRightRadius: pm(999),
  borderBottomLeftRadius: pm(999),
  borderBottomRightRadius: pm(999),
},
xdw3i7: {
  paddingTop: pm(7),
  paddingLeft: pm(7),
  paddingRight: pm(7),
  flexDirection: "column",
  paddingBottom: pm(7),
  backgroundColor: "#888888",
  borderTopLeftRadius: pm(999),
  borderTopRightRadius: pm(999),
  borderBottomLeftRadius: pm(999),
  borderBottomRightRadius: pm(999),
},
xdw3i8: {
  flexGrow: 0,
  flexBasis: "25%",
  alignItems: "center",
  flexShrink: 1,
  marginBottom: pm(5),
  flexDirection: "column",
  justifyContent: "center",
},
xdw3i9: {
  flexWrap: "wrap",
  marginTop: pm(10),
  flexDirection: "row",
  justifyContent: "flex-start",
},
xdw3ia: {
  marginTop: pm(10),
  paddingTop: pm(5),
  flexDirection: "column",
  paddingBottom: pm(5),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(7),
  borderTopRightRadius: pm(7),
  borderBottomLeftRadius: pm(7),
  borderBottomRightRadius: pm(7),
},
xdw3ib: {
  width: pm(68),
  height: pm(74),
},
xdw3ic: {
  color: "#999999",
  fontSize: pm(13),
  marginTop: pm(24),
  lineHeight: pm(24),
},
xdw3id: {
  width: pm(100),
  height: pm(36),
  marginTop: pm(24),
  alignItems: "center",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: pm(32),
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: "#ffd132",
  borderTopLeftRadius: pm(999),
  borderTopRightRadius: pm(999),
  borderBottomLeftRadius: pm(999),
  borderBottomRightRadius: pm(999),
},
xdw3ie: {
  flexGrow: 1,
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw3if: {
  paddingTop: pm(5),
  paddingLeft: pm(15),
  paddingRight: pm(15),
  flexDirection: "column",
  paddingBottom: pm(15),
  backgroundColor: "#f8f8f8",
}
});
const slide = {"type":"174953","key":"c1749531","slug":null,"randomid":"id_ac491d8fea51afb2099088de","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text2":{"ctx_map":{"text":"这是一只五月"}},"Text4":{"ctx_map":{"text":"我要提现"}},"Text5":{"ctx_map":{"text":"设备入库"}},"Text6":{"ctx_map":{"text":"服务商等级V7"}},"Text7":{"ctx_map":{"text":"下单获赠激励金, 更多奖品等你来兑"}},"Text8":{"ctx_map":{"text":"激励金"}},"Text9":{"ctx_map":{"text":"功能菜单"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View4":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{"className":"b-menu-item"}},"Image1":{"ctx_map":{"fop":"e,300,300","src":"u/dev070/2023/03/11/D8bnJ4285sF3dnDJHuFvNM/WechatIMG79.jpg"}},"Image2":{"ctx_map":{"fop":"e,250,272","src":"u/dev070/2023/03/18/zBG5PnziQw38UULFe7dZCQ/Fm2emRkBQNm8oyfKgtC_2JFis76O.png"}},"Text11":{"ctx_map":{"text":"我的"}},"Text13":{"ctx_map":{"text":"114"}},"Text14":{"ctx_map":{"text":"设备信息"}},"Text17":{"ctx_map":{"text":"未激活"}},"Text18":{"ctx_map":{"text":"待绑定"}},"Text19":{"ctx_map":{"text":"5"}},"Text20":{"ctx_map":{"text":"已绑定"}},"Text21":{"ctx_map":{"text":"14"}},"Text22":{"ctx_map":{"text":"政策&合同"}},"Text23":{"ctx_map":{"text":"喜迎618, 铜爪V2 \"限时7折\" 抢"}},"Text24":{"ctx_map":{"text":"订单数据"}},"Text25":{"ctx_map":{"text":"人员列表"}},"Text26":{"ctx_map":{"text":"已激活"}},"Text27":{"ctx_map":{"text":"14"}},"Text28":{"ctx_map":{"text":"您尚未登录, 点击前往登录"}},"Text30":{"ctx_map":{"text":"立即登录"}},"Text31":{"ctx_map":{"text":"注销登录"}},"Text32":{"ctx_map":{"text":"活动数据"}},"Text33":{"ctx_map":{"text":"这是一只五月"}},"Text34":{"ctx_map":{"text":"铜爪学院"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{"extraStyleKeys":[]}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"View22":{"ctx_map":{"className":"b-menu-item"}},"View23":{"ctx_map":{"className":"b-menu-item"}},"View24":{"ctx_map":{"className":"b-menu-item"}},"View25":{"ctx_map":{"className":"b-menu-item"}},"View26":{"ctx_map":{}},"View27":{"ctx_map":{}},"View28":{"ctx_map":{}},"View29":{"ctx_map":{"className":"b-menu-item"}},"View30":{"ctx_map":{}},"View31":{"ctx_map":{"className":"b-menu-item"}},"View32":{"ctx_map":{}},"View33":{"ctx_map":{"className":"b-menu-item"}},"View34":{"ctx_map":{}},"View36":{"ctx_map":{"className":"b-menu-item"}},"View37":{"ctx_map":{}},"View38":{"ctx_map":{"className":"b-menu-item"}},"View39":{"ctx_map":{}},"View40":{"ctx_map":{"className":"b-menu-item"}},"View41":{"ctx_map":{}},"View42":{"ctx_map":{"className":"b-menu-item"}},"View43":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewIf5":{"ctx_map":{"value":true}},"ViewIf6":{"ctx_map":{"value":true}},"ViewIf7":{"ctx_map":{"value":true}},"ViewIf8":{"ctx_map":{"value":true}},"ViewIf9":{"ctx_map":{"value":true}},"SvgImage2":{"ctx_map":{"src":"u/dev070/2023/03/11/emC3oZCQqmpdi32Xrio2V9/419789.svg","color":"#ffffff","width":10,"height":10,"SvgImageManage":"SvgImageManage"}},"SvgImage4":{"ctx_map":{"src":"u/dev070/2023/03/17/9YCdZ29uHVkgfmUaBs8VJd/982336.svg","color":"#ffffff","width":14,"height":14,"SvgImageManage":"SvgImageManage"}},"SvgImage5":{"ctx_map":{"src":"u/dev070/2023/03/17/3Aycd4Rqs9z2zpCqnCYjg3/633008.svg","color":"#ffffff","width":16,"height":16,"SvgImageManage":"SvgImageManage"}},"SvgImage7":{"ctx_map":{"src":"u/dev070/2023/03/17/xT7MPevJYWM87A7adWs6zL/147169.svg","color":"#222222","width":20,"height":20,"SvgImageManage":"SvgImageManage"}},"SvgImage8":{"ctx_map":{"src":"u/dev070/2023/03/17/zS7UCkcaycXp6EorT7mzAM/90524.svg","color":"#ffffff","width":16,"height":16,"SvgImageManage":"SvgImageManage"}},"SvgImage9":{"ctx_map":{"src":"u/dev070/2023/03/17/UMUZ8mMF9b6GEF5YPAY3tc/1001202.svg","color":"#faad14","width":16,"height":16,"SvgImageManage":"SvgImageManage"}},"SvgImage10":{"ctx_map":{"src":"u/dev070/2023/03/17/nQrGxrjD2CzTREpnxgpBBo/1195361.svg","color":"#faad14","width":12,"height":12,"SvgImageManage":"SvgImageManage"}},"SvgImage11":{"ctx_map":{"src":"u/dev070/2023/03/17/sLHy8BHfNcDi97SK39RPZc/565981.svg","color":"#ffffff","width":16,"height":16,"SvgImageManage":"SvgImageManage"}},"SvgImage12":{"ctx_map":{"src":"u/dev070/2023/03/17/iV3eRxumBsVxk7xsAn4Pp4/741021.svg","color":"#ffffff","width":16,"height":16,"SvgImageManage":"SvgImageManage"}},"SvgImage13":{"ctx_map":{"src":"u/dev070/2023/03/18/E3WSsqhZHZSypgKFaHKhwU/377274.svg","color":"#ffffff","width":16,"height":16,"SvgImageManage":"SvgImageManage"}},"SvgImage14":{"ctx_map":{"src":"u/dev064/2023/03/25/NSeay6oLos7qXhgkBVNmdD/310631.svg","color":"#ffffff","width":16,"height":16,"SvgImageManage":"SvgImageManage"}},"SvgImage15":{"ctx_map":{"src":"u/dev064/2023/04/21/hnZgHGubDYxYEKSxLnw5TF/1013095.svg","color":"#ffffff","width":16,"height":16,"SvgImageManage":"SvgImageManage"}},"DwappCloud1":{"ctx_map":{"color1":"#f8f8f8"}},"DisplayPrice1":{"ctx_map":{"value":100,"format":"int"}}}};

const pageGroupSlug = 'app_tongzhua-pshop_center';

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
      <Xbenchc168612 /* DwappCloud1 */ backgroundColor={ slide.components.DwappCloud1.ctx_map.color1 } ></Xbenchc168612>
<View /* View1 */   style={styles.xdw3if}>{!!(state.isReady) /* ViewIf1 */ && (<><Text /* Text11 */ style={styles.xdw3h8} >{slide.components.Text11.ctx_map.text}</Text>
{!!(state.isLogin) /* ViewIf2 */ && (<><View /* View2 */   style={styles.xdw3hf}><XbenchcImage /* Image1 */ style={styles.xdw3h9} source={dwtools.qiniu(state.member.data.avatar, slide.components.Image1.ctx_map.fop)}  />
<View /* View4 */   style={styles.xdw3hc}><Text /* Text2 */ style={styles.xdw3ha} >{state.member.data.nickname}</Text>
<Text /* Text33 */ style={styles.xdw3hb} >{state.service_agency.data.name}</Text></View>
<XbenchcView /* View37 */   viewStyle={styles.xdw3he} onClick={getEvent('View37:onClick:func5:', {}, bagForKeyValue, bagForIndex)}><Image /* SvgImage7 */ style={[ styles.xdw3hd, { width: pm(20), height: pm(20) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev070/2023/03/17/xT7MPevJYWM87A7adWs6zL/147169.svg"), width: pm(20), height: pm(20) }} /></XbenchcView></View>
<View /* View10 */   style={styles.xdw3hr}><View /* View13 */   style={styles.xdw3hl}><View /* View12 */   style={styles.xdw3hj}><View /* View11 */   style={styles.xdw3hh}><Image /* SvgImage4 */ style={[ styles.xdw3hg, { width: pm(14), height: pm(14) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev070/2023/03/17/9YCdZ29uHVkgfmUaBs8VJd/982336.svg"), width: pm(14), height: pm(14) }} /></View>
<Text /* Text6 */ style={styles.xdw3hi} >{"服务商等级V" + state.service_agency.data.level}</Text></View>
<Text /* Text7 */ style={styles.xdw3hk} >{slide.components.Text7.ctx_map.text}</Text></View>
<View /* View6 */   style={styles.xdw3hq}><View /* View7 */   style={styles.xdw3ho}><Text /* Text8 */ style={styles.xdw3hm} >{slide.components.Text8.ctx_map.text}</Text>
<Text style={styles.xdw3hn} numberOfLines={1}>{dwtools.priceformat(state.service_agency.data.balance, slide.components.DisplayPrice1.ctx_map.format)}</Text></View>
<Text /* Text4 */ style={styles.xdw3hp} >{slide.components.Text4.ctx_map.text}</Text></View></View>
{!!(state.agg) /* ViewIf9 */ && (<>{!!(state.rolePermissions.pshop_device_list) /* ViewIf4 */ && (<><View /* View18 */   style={styles.xdw3hx}><Text /* Text14 */ style={styles.xdw3hs} >{slide.components.Text14.ctx_map.text}</Text>
<XbenchcView /* View19 */   viewStyle={styles.xdw3hw} onClick={getEvent('View19:onClick:func1:', {eventData: 'pshop_device_list'}, bagForKeyValue, bagForIndex)}><View /* View23 */   style={[styles["b-menu-item"], styles.xdw3hv]}><Text /* Text19 */ style={styles.xdw3ht} >{state.agg.data.device_inbind_count}</Text>
<Text /* Text18 */ style={styles.xdw3hu} >{slide.components.Text18.ctx_map.text}</Text></View>
<View /* View24 */   style={[styles["b-menu-item"], styles.xdw3hv]}><Text /* Text21 */ style={styles.xdw3ht} >{state.agg.data.device_bind_count}</Text>
<Text /* Text20 */ style={styles.xdw3hu} >{slide.components.Text20.ctx_map.text}</Text></View>
<View /* View22 */   style={[styles["b-menu-item"], styles.xdw3hv]}><Text /* Text13 */ style={styles.xdw3ht} >{state.agg.data.device_inactive_count}</Text>
<Text /* Text17 */ style={styles.xdw3hu} >{slide.components.Text17.ctx_map.text}</Text></View>
<View /* View33 */   style={[styles["b-menu-item"], styles.xdw3hv]}><Text /* Text27 */ style={styles.xdw3ht} >{state.agg.data.device_active_count}</Text>
<Text /* Text26 */ style={styles.xdw3hu} >{slide.components.Text26.ctx_map.text}</Text></View></XbenchcView></View></>)}</>)}
<View /* View8 */   style={styles.xdw3ia}><Text /* Text9 */ style={styles.xdw3hy} >{slide.components.Text9.ctx_map.text}</Text>
<View /* View14 */   style={styles.xdw3i9}>{!!(state.rolePermissions.pshop_order_list) /* ViewIf7 */ && (<><XbenchcView /* View29 */   viewStyle={[styles["b-menu-item"], styles.xdw3i1]} onClick={getEvent('View29:onClick:func1:', {eventData: "pshop_order_list"}, bagForKeyValue, bagForIndex)}><View /* View30 */   style={styles.xdw3hz}><Image /* SvgImage11 */ style={[ styles.xdw3hd, { width: pm(16), height: pm(16) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev070/2023/03/17/sLHy8BHfNcDi97SK39RPZc/565981.svg"), width: pm(16), height: pm(16) }} /></View>
<Text /* Text24 */ style={styles.xdw3i0} >{slide.components.Text24.ctx_map.text}</Text></XbenchcView></>)}
<XbenchcView /* View40 */   viewStyle={[styles["b-menu-item"], styles.xdw3i1]} onClick={getEvent('View40:onClick:func1:', {eventData: "pshop_event_join"}, bagForKeyValue, bagForIndex)}><View /* View41 */   style={styles.xdw3i2}><Image /* SvgImage14 */ style={[ styles.xdw3hd, { width: pm(16), height: pm(16) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev064/2023/03/25/NSeay6oLos7qXhgkBVNmdD/310631.svg"), width: pm(16), height: pm(16) }} /></View>
<Text /* Text32 */ style={styles.xdw3i0} >{slide.components.Text32.ctx_map.text}</Text></XbenchcView>
{!!(state.rolePermissions.pshop_contract_list) /* ViewIf6 */ && (<><XbenchcView /* View25 */   viewStyle={[styles["b-menu-item"], styles.xdw3i1]} onClick={getEvent('View25:onClick:func1:', {eventData: "pshop_contract_list"}, bagForKeyValue, bagForIndex)}><View /* View26 */   style={styles.xdw3i3}><Image /* SvgImage8 */ style={[ styles.xdw3hd, { width: pm(16), height: pm(16) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev070/2023/03/17/zS7UCkcaycXp6EorT7mzAM/90524.svg"), width: pm(16), height: pm(16) }} /></View>
<Text /* Text22 */ style={styles.xdw3i0} >{slide.components.Text22.ctx_map.text}</Text></XbenchcView></>)}
{!!(state.rolePermissions.pshop_staff_list) /* ViewIf8 */ && (<><XbenchcView /* View31 */   viewStyle={[styles["b-menu-item"], styles.xdw3i1]} onClick={getEvent('View31:onClick:func1:', {eventData: "pshop_staff_list"}, bagForKeyValue, bagForIndex)}><View /* View32 */   style={styles.xdw3i4}><Image /* SvgImage12 */ style={[ styles.xdw3hd, { width: pm(16), height: pm(16) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev070/2023/03/17/iV3eRxumBsVxk7xsAn4Pp4/741021.svg"), width: pm(16), height: pm(16) }} /></View>
<Text /* Text25 */ style={styles.xdw3i0} >{slide.components.Text25.ctx_map.text}</Text></XbenchcView></>)}
{!!(state.rolePermissions.pshop_stock_in) /* ViewIf5 */ && (<><XbenchcView /* View9 */   viewStyle={[styles["b-menu-item"], styles.xdw3i1]} onClick={getEvent('View9:onClick:func1:', {eventData: "pshop_stock_in"}, bagForKeyValue, bagForIndex)}><View /* View15 */   style={styles.xdw3i5}><Image /* SvgImage5 */ style={[ styles.xdw3hd, { width: pm(16), height: pm(16) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev070/2023/03/17/3Aycd4Rqs9z2zpCqnCYjg3/633008.svg"), width: pm(16), height: pm(16) }} /></View>
<Text /* Text5 */ style={styles.xdw3i0} >{slide.components.Text5.ctx_map.text}</Text></XbenchcView></>)}
<XbenchcView /* View42 */   viewStyle={[styles["b-menu-item"], styles.xdw3i1]} onClick={getEvent('View42:onClick:func1:', {eventData: "collegelist"}, bagForKeyValue, bagForIndex)}><View /* View43 */   style={styles.xdw3i6}><Image /* SvgImage15 */ style={[ styles.xdw3hd, { width: pm(16), height: pm(16) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev064/2023/04/21/hnZgHGubDYxYEKSxLnw5TF/1013095.svg"), width: pm(16), height: pm(16) }} /></View>
<Text /* Text34 */ style={styles.xdw3i0} >{slide.components.Text34.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View38 */   viewStyle={[styles["b-menu-item"], styles.xdw3i8]} onClick={getEvent('View38:onClick:func4:', {eventData: "pshop_staff_list"}, bagForKeyValue, bagForIndex)}><View /* View39 */   style={styles.xdw3i7}><Image /* SvgImage13 */ style={[ styles.xdw3hd, { width: pm(16), height: pm(16) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev070/2023/03/18/E3WSsqhZHZSypgKFaHKhwU/377274.svg"), width: pm(16), height: pm(16) }} /></View>
<Text /* Text31 */ style={styles.xdw3i0} >{slide.components.Text31.ctx_map.text}</Text></XbenchcView></View></View></>)}
{!!(!state.isLogin) /* ViewIf3 */ && (<><View /* View34 */   style={styles.xdw3ie}><XbenchcImage /* Image2 */ style={styles.xdw3ib} source={dwtools.qiniu(slide.components.Image2.ctx_map.src, slide.components.Image2.ctx_map.fop)}  />
<Text /* Text28 */ style={styles.xdw3ic} >{slide.components.Text28.ctx_map.text}</Text>
<XbenchcView /* View36 */   viewStyle={[styles["b-menu-item"], styles.xdw3id]} onClick={getEvent('View36:onClick:func6:', {}, bagForKeyValue, bagForIndex)}><Text /* Text30 */ style={styles.xdw3hb} >{slide.components.Text30.ctx_map.text}</Text></XbenchcView></View></>)}</>)}</View>
    </ErrorBoundary>
  )
}
