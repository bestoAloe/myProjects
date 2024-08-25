
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import ComNavBar from '../../xbench/components/ComNavBar'
import Xbenchc171156 from '../components/Xbenchc171156'
import Xbenchc182372 from '../components/Xbenchc182372'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import Xbenchc179553 from '../components/Xbenchc179553'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
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
let langMaps = ({/**/  cn: {/**/    'time_filter': '时间筛选',/**/    'start_time': '请选择开始时间',/**/    'to': '至',/**/    'end_time': '请选择结束时间',/**/    'reset': '重置',/**/    'order_id': '订单编号 ${t1}',/**/    'more': '查看更多',/**/    'payable': '应付：',/**/    'view_detail': '查看详情',/**/    'none': '暂无数据',/**/    'end': '已经到底了',/**/  },/**/  en: {/**/    'time_filter': 'Date',/**/    'start_time': 'Enter start time',/**/    'to': 'To',/**/    'end_time': 'Enter end time',/**/    'reset': 'Reset',/**/    'order_id': 'Order Id ${t1}',/**/    'more': 'More',/**/    'payable': 'Payable：',/**/    'view_detail': 'View details',/**/    'none': 'No Data',/**/    'end': 'End',/**/  },/**/})
const action96 = langMaps
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action5 = state.items = ([])
  const action6 = state.query = ({limit: 5, offset: 0})
  const action33 = state.query.limit = (5)
  const action34 = state.query.offset = (0)
  const action52 = state.reachBottom = (false)
  const action63 = state.activeTab = ("default")
  const action72 = state.tabs = ([/**/  {id: "default", name: "全部"},/**/  {id: "topay", name: "待付款"},/**/  {id: "tosend", name: "待发货"},/**/  {id: "send", name: "已发货"},/**/  {id: "success", name: "已完成"},/**/  {id: "cancel", name: "已取消"},/**/])
  const action73 = state.ready = (false)
  /* action79: 时间 */
  const action80 = state.start_time = ('')
  const action81 = state.end_time = ('')
  /* action98: 语言设置 */
  const action99 = state.lang = ('cn')
  const action100 = state.langMap = (langMaps[state.lang])
  const action138 = state.triggerRefresh = (false)
  return state
}

const action7 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action117 = await store.dispatch("getLang", {})
  const action69 = store.commit('setState', {["state.activeTab"]: dw.query.state || state.activeTab})
  const action8 = await store.dispatch("loadList", {})
  const action74 = store.commit('setState', {["state.ready"]: true})
}

const action136 = actions['refresh'] = async function (store, event) {
  const state = store.state
  const action140 = store.commit('setState', {["state.triggerRefresh"]: true, ["state.query.offset"]: 0, ["state.reachBottom"]: false})
  const action10 = await store.dispatch("loadList", {})
  const action139 = store.commit('setState', {["state.triggerRefresh"]: false})
}

const action137 = actions['func2'] = async function (store, event) {
  const state = store.state
  if (state.reachBottom) {
    return state
  }
  const action50 = store.commit('setState', {["state.query.offset"]: state.query.offset + state.query.limit})
  const action51 = await store.dispatch("loadList", {})
}

const action4 = actions['loadList'] = async function (store, event) {
  const state = store.state
  const action60 = await (async () => {
  
      if (action60lock) return true
      action60lock = true
      try {
    const action151 = (dw.platform === 'dwapp') ? dw.app.wxLogin() : (dw.platform === 'rnapp') ? await dw.app.wxLogin() : 
        (D.siteuser && D.siteuser.id)
          ? true
          : app.wxGotoLogin({}, '/account/login/?next=' + encodeURIComponent(location.href))
        
    if (!action151) return
    const action68 = await dw.app.run("order_user.list", {"lang": state.lang, "limit": state.query.limit, "offset": state.query.offset, "filters": {/**/  data__state: state.activeTab === 'default' ? undefined : state.activeTab,/**/  data__created__Lt: state.end_time.length < 10 ? undefined : state.end_time,/**/  data__created__gte: state.start_time.length < 10 ? undefined : state.start_time,/**/}})
    if ((action68.meta.offset) === (0)) {
      const action37 = store.commit('setState', {["state.items"]: action68.objects})
    } else {
      const action39 = store.commit('setState', {["state.items__uconcat"]: {field: 'id', list: action68.objects}})
    }
    if ((action68.objects.length) < (state.query.limit)) {
      const action54 = store.commit('setState', {["state.reachBottom"]: true})
    }
  
      } catch (e) {
        throw e
      } finally {
        action60lock = false
      }
      
  })()
}

const action64 = actions['updateTab'] = async function (store, event) {
  const state = store.state
  const action66 = store.commit('setState', {["state.query.offset"]: 0, ["state.reachBottom"]: false})
  const action65 = await store.dispatch("loadList", {})
}

const action83 = actions['chooseStartTime'] = async function (store, event) {
  const state = store.state
  const action84 = console.log('[chooseStartTime#action84] 打印', event)
  const action85 = store.commit('setState', {["state.start_time"]: event.data+'T00:00:00.000'})
  const action86 = await store.dispatch("loadList", {})
  const action87 = console.log('[chooseStartTime#action87] 打印选开始时间加载完成', '')
}

const action88 = actions['chooseEndTime'] = async function (store, event) {
  const state = store.state
  const action89 = store.commit('setState', {["state.end_time"]: event.data+'T23:59:59.999'})
  const action90 = await store.dispatch("loadList", {})
  const action91 = console.log('[chooseEndTime#action91] 打印选结束时间加载完成', '')
}

const action92 = actions['reset'] = async function (store, event) {
  const state = store.state
  const action93 = store.commit('setState', {["state.start_time"]: "", ["state.end_time"]: ""})
  const action95 = await store.dispatch("updateTab", {})
}

/* action102: 语言设置 */
const action103 = actions['getLang'] = async function (store, event) {
  const state = store.state
  /* action104: 获取并设置 lang */
  const action105 = dw.getGlobalLocals("lang")
  const action106 = store.commit('setState', {["state.lang"]: action105 || state.lang, ["state.langMap"]: langMaps[action105 || state.lang]})
  const action108 = await dw.getStorage("lang")
  const action109 = store.commit('setState', {["state.lang"]: action108 || state.lang, ["state.langMap"]: langMaps[action108 || state.lang]})
  const action111 = dw.setGlobalLocals("lang", state.lang)
  const action112 = await dw.setStorage("lang", state.lang)
  let action113
  

  if (state.lang === 'en') {
    const action121 = store.commit('setState', {["state.tabs"]: [/**/  {id: "default", name: "All"},/**/  {id: "topay", name: "Topay"},/**/  {id: "tosend", name: "Tosend"},/**/  {id: "send", name: "Send"},/**/  {id: "success", name: "Success"},/**/  {id: "cancel", name: "Cancel"},/**/]})
  } else {
    const action123 = store.commit('setState', {["state.tabs"]: [/**/  {id: "default", name: "全部"},/**/  {id: "topay", name: "待付款"},/**/  {id: "tosend", name: "待发货"},/**/  {id: "send", name: "已发货"},/**/  {id: "success", name: "已完成"},/**/  {id: "cancel", name: "已取消"},/**/]})
  }
}

const action132 = actions['clickItem'] = function (store, event) {
  const state = store.state
  const action133 = dw.app.goToPappUrl(event.context.eventData.data.type === 'period' ? 'periodorderdetail' : "orderdetail", {"uuid": event.context.eventData.uuid}, {redirectTo: false})
}

const action152 = actions['func3'] = function (store, event) {
  const state = store.state
  const action153 = dw.app.goToPappUrl("payment", {"uuid": event.context.eventData.uuid}, {redirectTo: false})
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
      'use strict';

var actions = {};

var langMaps = { /**/cn: { /**/'time_filter': '时间筛选', /**/'start_time': '请选择开始时间', /**/'to': '至', /**/'end_time': '请选择结束时间', /**/'reset': '重置', /**/'order_id': '订单编号 ${t1}', /**/'more': '查看更多', /**/'payable': '应付：', /**/'view_detail': '查看详情', /**/'none': '暂无数据', /**/'end': '已经到底了' }, /**/en: { /**/'time_filter': 'Date', /**/'start_time': 'Enter start time', /**/'to': 'To', /**/'end_time': 'Enter end time', /**/'reset': 'Reset', /**/'order_id': 'Order Id ${t1}', /**/'more': 'More', /**/'payable': 'Payable：', /**/'view_detail': 'View details', /**/'none': 'No Data', /**/'end': 'End' } };
var action96 = langMaps;
var action75 = actions['orderItem'] = function (event, state) {
  var items = event.items.slice(0, 3);
  var action76 = items;
  return items;
};
// COMPUTED_ACTION_META:orderItem {"deps":[]}

/* action102: 语言设置 */
var action124 = actions['orderState'] = function (event, state) {
  var item = event.item;
  var action126 = item;
  return state.lang === 'cn' ? item.data._state_display : item.data.state;
};
// COMPUTED_ACTION_META:orderState {"deps":["lang"]}

var action125 = actions['orderType'] = function (event, state) {
  var item = event.item;
  var action129 = item;
  var typeMaps = { /**/'product': 'Product order', /**/'groupon': 'Groupon order', /**/'cut': 'Bargain order', /**/'seckill': 'Second-kill order', /**/'period': 'Period order', /**/'membercard': 'Membercard order', /**/'charge': 'Recharge order', /**/'split': 'Batch payment order' /**/ };
  var action131 = typeMaps;
  return state.lang === 'cn' ? item.data._type_display : typeMaps[item.data.type];
};
// COMPUTED_ACTION_META:orderType {"deps":["lang"]}

var action134 = actions['dateFormat'] = function (event, state) {
  return event.value.slice(0, 10);
};
// COMPUTED_ACTION_META:dateFormat {"deps":[]}

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdw3xj: {
  color: "#777777",
  fontSize: pm(12),
  overflow: "hidden",
  lineHeight: pm(20),
  marginRight: pm(8),
},
xdw3xk: {
  color: "#777777",
  fontSize: pm(12),
  overflow: "hidden",
  lineHeight: pm(20),
  marginLeft: pm(8),
  marginRight: pm(8),
},
xdw3xl: {
  color: "#777777",
  fontSize: pm(12),
  overflow: "hidden",
  lineHeight: pm(20),
  marginLeft: pm(8),
},
xdw3xm: {
  flexDirection: "column",
},
xdw3xn: {
  alignItems: "center",
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
},
xdw3xo: {
  flexDirection: "column",
  backgroundColor: "#ffffff",
},
xdw3xp: {
  color: "#FA232F",
  fontSize: pm(12),
  lineHeight: pm(20),
  marginLeft: "auto",
},
xdw3xq: {
  flexDirection: "row",
},
xdw3xr: {
  width: pm(65),
  height: pm(65),
  borderTopLeftRadius: pm(5),
  borderTopRightRadius: pm(5),
  borderBottomLeftRadius: pm(5),
  borderBottomRightRadius: pm(5),
},
xdw3xs: {
  flexGrow: 1,
  fontSize: pm(12),
  overflow: "hidden",
  lineHeight: pm(18),
},
xdw3xt: {
  color: "#999999",
  fontSize: pm(11),
  lineHeight: pm(20),
},
xdw3xu: {
  flexWrap: "nowrap",
  alignItems: "center",
  flexDirection: "row",
},
xdw3xv: {
  width: pm(215),
  paddingLeft: pm(10),
  flexDirection: "column",
},
xdw3xw: {
  alignItems: "center",
  flexDirection: "row",
},
xdw3xx: {
  color: "#666666",
  fontSize: pm(12),
  lineHeight: pm(20),
},
xdw3xy: {
  color: "#333333",
  fontSize: pm(12),
  lineHeight: pm(20),
},
xdw3xz: {
  color: "#333333",
  fontSize: pm(14),
  fontWeight: "bold",
  lineHeight: pm(20),
},
xdw3y0: {
  alignItems: "center",
  marginLeft: "auto",
  flexDirection: "row",
},
xdw3y1: {
  marginTop: pm(10),
  alignItems: "center",
  flexDirection: "row",
},
xdw3y2: {
  color: "#999999",
  fontSize: pm(12),
  lineHeight: pm(20),
},
xdw3y3: {
  color: "#333333",
  fontSize: pm(11),
  lineHeight: pm(24),
},
xdw3y4: {
  width: pm(75),
  height: pm(26),
  borderTopWidth: pm(1),
  borderTopColor: "#DDDDDD",
  alignItems: "center",
  borderLeftWidth: pm(1),
  borderLeftColor: "#DDDDDD",
  marginLeft: "auto",
  borderRightWidth: pm(1),
  borderRightColor: "#DDDDDD",
  borderBottomWidth: pm(1),
  borderBottomColor: "#DDDDDD",
  flexDirection: "column",
  justifyContent: "center",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw3y5: {
  borderTopWidth: pm(1),
  borderTopColor: "#EEEEEE",
  marginTop: pm(8),
  paddingTop: pm(8),
  flexDirection: "row",
},
xdw3y6: {
  width: pm(300),
  marginLeft: pm(10),
  paddingTop: pm(10),
  marginRight: pm(10),
  paddingLeft: pm(10),
  marginBottom: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw3y7: {
  paddingTop: pm(10),
  flexDirection: "column",
},
xdw3y8: {
  color: "#999999",
  fontSize: pm(12),
  textAlign: "center",
  lineHeight: pm(30),
},
xdw3y9: {
  width: pm(120),
  height: pm(120),
},
xdw3ya: {
  color: "rgb(153, 153, 153)",
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw3yb: {
  flexGrow: 1,
  marginTop: pm(10),
  alignItems: "center",
  flexShrink: 0,
  marginBottom: pm(10),
  flexDirection: "column",
  justifyContent: "center",
},
xdw3yc: {
  width: "100%",
  flexGrow: 1,
  overflow: "scroll",
  flexBasis: "0%",
  flexShrink: 1,
},
xdw3yd: {
  height: "100%",
  flexGrow: 1,
  flexDirection: "column",
  backgroundColor: "#F8F8F8",
}
});
const slide = {"type":"263742","key":"c2637421","slug":null,"randomid":"id_3d2650f281a66b184268376d","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,130,130","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image3":{"ctx_map":{"fop":"e,300,300","src":"u/dev064/2023/04/14/eSMbTLQgkxLfNm3DdtgfJG/FtKV50QeRVyFkzNaa3ZnPGGH4zb11.png"}},"Text13":{"ctx_map":{"text":"这是一个文本组件","numberOfLines":1}},"Text14":{"ctx_map":{"text":"这是一个文本组件","numberOfLines":1}},"Text15":{"ctx_map":{"text":"这是一个文本组件","numberOfLines":1}},"Text16":{"ctx_map":{"text":"这是一个文本组件"}},"Text17":{"ctx_map":{"text":"这是一个文本组件","numberOfLines":1}},"Text18":{"ctx_map":{"text":"这是一个文本组件"}},"Text23":{"ctx_map":{"text":"这是一个文本组件"}},"Text24":{"ctx_map":{"text":"这是一个文本组件"}},"Text25":{"ctx_map":{"text":"这是一个文本组件"}},"Text26":{"ctx_map":{"text":"这是一个文本组件"}},"Text27":{"ctx_map":{"text":"暂无数据"}},"Text28":{"ctx_map":{"text":"前往支付"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"View20":{"ctx_map":{}},"View21":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf6":{"ctx_map":{"value":true}},"ViewIf7":{"ctx_map":{"value":true}},"ViewIf8":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ComNavBar1":{"ctx_map":{"theme":"default","title":"订单列表","headerBackgroundColor":"#ffffff","statusBarBackgroundColor":"#ffffff"}},"DwappCloud1":{"ctx_map":{"prop1":[{"id":"tab1","name":"标签1"},{"id":"tab2","name":"标签2"},{"id":"tab3","name":"标签3"},{"id":"tab4","name":"长标签4"},{"id":"tab5","name":"长标签5"},{"id":"tab6","name":"长长标签6"},{"id":"tab7","name":"长长标签7"},{"id":"tab8","name":"标签8"},{"id":"tab9","name":"标签9"},{"id":"tab10","name":"标签10"}],"text1":"tab1","color1":"#FA232F","color2":"#FA232F"}},"DwappCloud2":{"ctx_map":{"label":"日期","value":"2023-04-13","labelStyle":null,"valueStyle":null,"pickerStyle":null,"placeholder":"选择开始时间","containerStyle":null,"labelTextStyle":null,"valueInputStyle":null}},"DwappCloud3":{"ctx_map":{"label":"日期","value":"2023-04-13","labelStyle":null,"valueStyle":null,"pickerStyle":null,"placeholder":"选择结束时间","containerStyle":null,"labelTextStyle":null,"valueInputStyle":null}},"DwappCloud4":{"ctx_map":{"text1":"${t1} ${t2}","text2":"小文本1","text3":"","text4":"","text5":"","style1":null}},"ScrollView1":{"ctx_map":{"type":"list","bounces":true,"scrollX":false,"scrollY":true,"showScrollbar":true,"extraStyleKeys":[],"refresherEnabled":true,"refresherBackground":"#F8F8F8"}},"DisplayDate1":{"ctx_map":{"value":"2022-09-10T11:22:33.444","format":"datetimeseconds"}},"DisplayPrice1":{"ctx_map":{"value":100,"format":"cnyint"}}}};
slide.components.DwappCloud2.ctx_map.labelStyle = {
  width: pm(80),
  display: "none",
  paddingTop: pm(4),
  flexDirection: "column",
  paddingBottom: pm(4),
};
slide.components.DwappCloud2.ctx_map.valueStyle = {
  width: pm(78),
  flexShrink: 0,
  flexDirection: "column",
};
slide.components.DwappCloud2.ctx_map.pickerStyle = {
  width: pm(78),
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "flex-start",
};
slide.components.DwappCloud2.ctx_map.containerStyle = {
  borderTopWidth: pm(1),
  borderTopColor: "#DDDDDD",
  borderLeftWidth: pm(1),
  borderLeftColor: "#DDDDDD",
  paddingTop: pm(2),
  borderRightWidth: pm(1),
  borderRightColor: "#DDDDDD",
  paddingLeft: pm(5),
  borderBottomWidth: pm(1),
  borderBottomColor: "#DDDDDD",
  paddingRight: pm(5),
  flexDirection: "row",
  paddingBottom: pm(2),
  borderTopLeftRadius: pm(3),
  borderTopRightRadius: pm(3),
  borderBottomLeftRadius: pm(3),
  borderBottomRightRadius: pm(3),
};
slide.components.DwappCloud2.ctx_map.labelTextStyle = {
  fontSize: pm(12),
  lineHeight: pm(20),
  flexDirection: "column",
};
slide.components.DwappCloud2.ctx_map.valueInputStyle = {
  color: "rgb(119, 119, 119)",
  width: pm(78),
  fontSize: pm(11),
  lineHeight: pm(20),
  flexDirection: "column",
};
slide.components.DwappCloud3.ctx_map.labelStyle = {
  width: pm(80),
  display: "none",
  paddingTop: pm(4),
  flexDirection: "column",
  paddingBottom: pm(4),
};
slide.components.DwappCloud3.ctx_map.valueStyle = {
  width: pm(78),
  flexShrink: 0,
  flexDirection: "column",
};
slide.components.DwappCloud3.ctx_map.pickerStyle = {
  width: pm(78),
  alignItems: "center",
  flexShrink: 0,
  flexDirection: "row",
  justifyContent: "flex-start",
};
slide.components.DwappCloud3.ctx_map.containerStyle = {
  borderTopWidth: pm(1),
  borderTopColor: "#DDDDDD",
  borderLeftWidth: pm(1),
  borderLeftColor: "#DDDDDD",
  paddingTop: pm(2),
  borderRightWidth: pm(1),
  borderRightColor: "#DDDDDD",
  paddingLeft: pm(5),
  borderBottomWidth: pm(1),
  borderBottomColor: "#DDDDDD",
  paddingRight: pm(5),
  flexDirection: "row",
  paddingBottom: pm(2),
  borderTopLeftRadius: pm(3),
  borderTopRightRadius: pm(3),
  borderBottomLeftRadius: pm(3),
  borderBottomRightRadius: pm(3),
};
slide.components.DwappCloud3.ctx_map.labelTextStyle = {
  fontSize: pm(12),
  lineHeight: pm(20),
  flexDirection: "column",
};
slide.components.DwappCloud3.ctx_map.valueInputStyle = {
  color: "rgb(119, 119, 119)",
  width: pm(78),
  fontSize: pm(11),
  lineHeight: pm(20),
  flexDirection: "column",
};
slide.components.DwappCloud4.ctx_map.style1 = {
  color: "#333333",
  fontSize: pm(12),
  lineHeight: pm(20),
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-orderlist';

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
      <View /* View1 */   style={styles.xdw3yd}><ComNavBar title={ "订单列表" } theme={ "default" } statusBarBackgroundColor={ "#ffffff" } headerBackgroundColor={ "#ffffff" }></ComNavBar>
{!!(state.ready) /* ViewIf1 */ && (<><View /* View2 */   style={styles.xdw3xo}><Xbenchc171156 /* DwappCloud1 */ tabs={ state.tabs } value={ state.activeTab } color={ slide.components.DwappCloud1.ctx_map.color1 } lineColor={ slide.components.DwappCloud1.ctx_map.color2 }  onChange={getEvent('DwappCloud1:input:updateTab:activeTab', {}, bagForKeyValue, bagForIndex)}></Xbenchc171156>
<View /* View3 */   style={styles.xdw3xn}><Text /* Text13 */ style={styles.xdw3xj} numberOfLines={1}>{state.langMap.time_filter}</Text>
<Xbenchc182372 /* DwappCloud2 */ label={ slide.components.DwappCloud2.ctx_map.label } value={ computeds.dateFormat({value: state.start_time}, state) } eventData={ slide.components.DwappCloud2.ctx_map.eventData } eventData2={ slide.components.DwappCloud2.ctx_map.eventData2 } labelStyle={ slide.components.DwappCloud2.ctx_map.labelStyle } valueStyle={ slide.components.DwappCloud2.ctx_map.valueStyle } pickerStyle={ slide.components.DwappCloud2.ctx_map.pickerStyle } placeholder={ slide.components.DwappCloud2.ctx_map.placeholder } containerStyle={ slide.components.DwappCloud2.ctx_map.containerStyle } labelTextStyle={ slide.components.DwappCloud2.ctx_map.labelTextStyle } valueInputStyle={ slide.components.DwappCloud2.ctx_map.valueInputStyle }  onChange={getEvent('DwappCloud2:input:chooseStartTime:', {}, bagForKeyValue, bagForIndex)}></Xbenchc182372>
<Text /* Text14 */ style={styles.xdw3xk} numberOfLines={1}>{state.langMap.to}</Text>
<Xbenchc182372 /* DwappCloud3 */ label={ slide.components.DwappCloud3.ctx_map.label } value={ computeds.dateFormat({value: state.end_time}, state) } eventData={ slide.components.DwappCloud3.ctx_map.eventData } eventData2={ slide.components.DwappCloud3.ctx_map.eventData2 } labelStyle={ slide.components.DwappCloud3.ctx_map.labelStyle } valueStyle={ slide.components.DwappCloud3.ctx_map.valueStyle } pickerStyle={ slide.components.DwappCloud3.ctx_map.pickerStyle } placeholder={ slide.components.DwappCloud3.ctx_map.placeholder } containerStyle={ slide.components.DwappCloud3.ctx_map.containerStyle } labelTextStyle={ slide.components.DwappCloud3.ctx_map.labelTextStyle } valueInputStyle={ slide.components.DwappCloud3.ctx_map.valueInputStyle }  onChange={getEvent('DwappCloud3:input:chooseEndTime:', {}, bagForKeyValue, bagForIndex)}></Xbenchc182372>
<XbenchcView /* View4 */   viewStyle={styles.xdw3xm} onClick={getEvent('View4:onClick:reset:', {}, bagForKeyValue, bagForIndex)}><Text /* Text15 */ style={styles.xdw3xl} numberOfLines={1}>{state.langMap.reset}</Text></XbenchcView></View></View>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw3yc} refresherEnabled={ true } refresherTriggered={ state.triggerRefresh } refresherBackground={ "#F8F8F8" } scrollX={ false } scrollY={ true } showScrollbar={ true } bounces={ true }  onRefresherRefresh={getEvent('ScrollView1:onRefresherRefresh:refresh:', {}, bagForKeyValue, bagForIndex)} onScrollToLower={getEvent('ScrollView1:onScrollToLower:func2:', {}, bagForKeyValue, bagForIndex)}><View /* View5 */   style={styles.xdw3y7}>{(state.items).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View6 */   style={styles.xdw3y6}><View /* View7 */   style={styles.xdw3xq}><Xbenchc179553 /* DwappCloud4 */ template={ state.langMap.order_id } t1={ bagForItem.data.order_id } t2={ slide.components.DwappCloud4.ctx_map.text3 } t3={ slide.components.DwappCloud4.ctx_map.text4 } t4={ slide.components.DwappCloud4.ctx_map.text5 } textStyle={ slide.components.DwappCloud4.ctx_map.style1 } ></Xbenchc179553>
<Text /* Text16 */ style={styles.xdw3xp} >{computeds.orderState({item: bagForItem}, state)}</Text></View>
<View /* View8 */   style={styles.xdw3xm}><View /* View9 */   style={styles.xdw3xw}><XbenchcImage /* Image1 */ style={styles.xdw3xr} source={dwtools.qiniu(bagForItem.data.product_image, slide.components.Image1.ctx_map.fop)}  />
<View /* View10 */   style={styles.xdw3xv}><View /* View11 */   style={styles.xdw3xu}><Text /* Text17 */ style={styles.xdw3xs} numberOfLines={1}>{bagForItem.data.product_name}</Text>
<Text /* Text18 */ style={styles.xdw3xt} >{"x1"}</Text></View></View></View></View>
<View /* View16 */   style={styles.xdw3y1}><Text /* Text23 */ style={styles.xdw3xx} >{computeds.orderType({item: bagForItem}, state)}</Text>
<View /* View17 */   style={styles.xdw3y0}><Text /* Text24 */ style={styles.xdw3xy} >{state.langMap.payable}</Text>
<Text style={styles.xdw3xz} numberOfLines={1}>{dwtools.priceformat(bagForItem.data.money, slide.components.DisplayPrice1.ctx_map.format)}</Text></View></View>
<View /* View18 */   style={styles.xdw3y5}><Text style={styles.xdw3y2} numberOfLines={1}>{dwtools.dateformat(bagForItem.created, slide.components.DisplayDate1.ctx_map.format)}</Text>
{!!(bagForItem.data.state === 'topay') /* ViewIf8 */ && (<><XbenchcView /* View21 */   viewStyle={styles.xdw3y4} onClick={getEvent('View21:onClick:func3:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><Text /* Text28 */ style={styles.xdw3y3} >{"前往支付"}</Text></XbenchcView></>)}</View></View></ViewForItem> })}</View>
{!!(state.reachBottom && state.items.length > 0) /* ViewIf6 */ && (<><Text /* Text26 */ style={styles.xdw3y8} >{state.langMap.end}</Text></>)}
{!!(state.items.length === 0) /* ViewIf7 */ && (<><View /* View20 */   style={styles.xdw3yb}><XbenchcImage /* Image3 */ style={styles.xdw3y9} source={dwtools.qiniu(slide.components.Image3.ctx_map.src, slide.components.Image3.ctx_map.fop)}  />
<Text /* Text27 */ style={styles.xdw3ya} >{state.langMap.none}</Text></View></>)}</XbenchcScrollView></>)}</View>
    </ErrorBoundary>
  )
}
