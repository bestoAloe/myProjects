
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import ComNavBar from '../../xbench/components/ComNavBar'
import Xbenchc171156 from '../components/Xbenchc171156'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import ViewForItem from '../../xbench/components/ViewForItem'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
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
  const action2 = state.tabs = ([])
  const action8 = state.tab = (null)
  const action18 = state.member = (null)
  const action17 = state.service_agency = (null)
  const action25 = state.limit = (10)
  const action24 = state.offset = (0)
  const action23 = state.reachBottom = (false)
  const action27 = state.items = ([])
  const action35 = state.ready = (false)
  const action43 = state.RT = (false)
  const action49 = state.type = ('device')
  return state
}

const action4 = actions['onShow'] = async function (store, event) {
  const state = store.state
  if (dw.query.type) {
    const action53 = store.commit('setState', {["state.type"]: dw.query.type})
  }
  const action19 = await store.dispatch("func3", {})
  const action5 = await store.dispatch("func1", {})
  const action34 = await store.dispatch("func2", {})
  const action36 = store.commit('setState', {["state.ready"]: true})
}

const action3 = actions['func1'] = function (store, event) {
  const state = store.state
  const action6 = ((store, event) => {
const months = [];
for (let i = 5; i >= 0; i--) {
  const date = new Date();
  date.setMonth(date.getMonth() - i);
  const id = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2, '0')}`;
  const name = `${date.getMonth()+1}月`;
  months.push({id, name});
}
return months;
})(store, event)
  const action7 = store.commit('setState', {["state.tabs"]: action6, ["state.tab"]: action6[5].id})
}

const action10 = actions['func2'] = async function (store, event) {
  const state = store.state
  let start = (state.tab + "-01T00:00:00.000")
  const action37 = start
  const action38 = console.log('[func2#action38] 打印(start)的返回值', start)
  const action39 = ((store, event) => {
const date = new Date(start);
// 获取下个月第一天
const nextMonthFirstDay = new Date(date.getFullYear(), date.getMonth() + 1, 1);
// 将时间设置为0点，即月初第一天
nextMonthFirstDay.setUTCHours(23,59,59,999);

return nextMonthFirstDay.toISOString().slice(0, 23)
})(store, event)
  let end = (action39)
  const action40 = end
  const action41 = console.log('[func2#action41] 打印(end)的返回值', end)
  const action11 = await dw.app.run("pshop_item.list", {"limit": state.limit, "offset": state.offset, "filters": {/**/  data__type: state.type,/**/  data__service_agency_uuid: state.service_agency.uuid,/**/  created__range: [start, end]/**/}, "order_by": []})
  if (state.offset === 0) {
    const action26 = store.commit('setState', {["state.items"]: action11.objects})
  } else {
    const action29 = store.commit('setState', {["state.items__uconcat"]: {field: 'id', list: action11.objects}})
  }
  if (action11.objects.length < state.limit) {
    const action33 = store.commit('setState', {["state.reachBottom"]: true})
  }
}

const action12 = actions['func3'] = async function (store, event) {
  const state = store.state
  const action13 = await dw.app.run("service_agency.get", {"get_role": true})
  
        if ((action13.status) === ("error")) {
          const action14message = (action13.message || "操作错误！")
          const action14title = ("提示")
          action14message && dw.alert(action14title, action14message)
          return {}
        }
        
  const action15 = store.commit('setState', {["state.member"]: action13.member, ["state.service_agency"]: action13.service_agency})
}

const action42 = actions['func4'] = async function (store, event) {
  const state = store.state
  const action44 = store.commit('setState', {["state.RT"]: true, ["state.reachBottom"]: false, ["state.offset"]: 0})
  const action48 = await store.dispatch("func2", {})
  const action45 = store.commit('setState', {["state.RT"]: false})
}

const action56 = actions['func5'] = async function (store, event) {
  const state = store.state
  if (state.reachBottom) {
    return event
  }
  const action62 = store.commit('setState', {["state.offset"]: state.offset + state.limit})
  const action63 = await store.dispatch("func2", {})
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

var action54 = actions['computed1'] = function (event, state) {
  return { /**/'device': '设备激活明细', /**/'vip': '会员办理明细', /**/'eb': '电商激励明细' }[state.type];
};

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdw3ec: {
  color: "#666666",
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw3ed: {
  width: pm(95),
  flexDirection: "column",
},
xdw3ee: {
  fontSize: pm(12),
  maxHeight: pm(48),
  overflow: "hidden",
  lineHeight: pm(24),
},
xdw3ef: {
  width: pm(195),
  marginLeft: pm(10),
  flexDirection: "column",
},
xdw3eg: {
  paddingTop: pm(10),
  paddingLeft: pm(10),
  borderBottomWidth: pm(1),
  borderBottomColor: "#F2F2F2",
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
  backgroundColor: "#ffffff",
},
xdw3eh: {
  fontSize: pm(12),
  marginTop: pm(10),
  textAlign: "center",
  lineHeight: pm(24),
  marginBottom: pm(10),
},
xdw3ei: {
  width: pm(120),
  height: pm(120),
},
xdw3ej: {
  color: "rgb(153, 153, 153)",
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw3ek: {
  flexGrow: 1,
  marginTop: pm(10),
  alignItems: "center",
  flexShrink: 0,
  marginBottom: pm(10),
  flexDirection: "column",
  justifyContent: "center",
},
xdw3el: {
  width: "100%",
  flexGrow: 1,
  overflow: "scroll",
  flexBasis: "0%",
  flexShrink: 1,
  backgroundColor: "#f8f8f8",
}
});
const slide = {"type":"184310","key":"c1843101","slug":null,"randomid":"id_366a9e08062b3fa2330b10a9","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,300,300","src":"u/dev064/2023/04/14/eSMbTLQgkxLfNm3DdtgfJG/FtKV50QeRVyFkzNaa3ZnPGGH4zb11.png"}},"Text13":{"ctx_map":{"text":"TODO","numberOfLines":1,"extraStyleKeys":[]}},"Text14":{"ctx_map":{"text":"已经到底了"}},"Text16":{"ctx_map":{"text":"暂无数据"}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ComNavBar1":{"ctx_map":{"theme":"default","title":"硬件激励","headerBackgroundColor":"#FFD355","statusBarBackgroundColor":"#FFD355"}},"DwappCloud2":{"ctx_map":{"prop1":[{"id":"tab1","name":"标签1"},{"id":"tab2","name":"标签2"},{"id":"tab3","name":"标签3"},{"id":"tab4","name":"长标签4"},{"id":"tab5","name":"长标签5"},{"id":"tab6","name":"长长标签6"},{"id":"tab7","name":"长长标签7"},{"id":"tab8","name":"标签8"},{"id":"tab9","name":"标签9"},{"id":"tab10","name":"标签10"}],"text1":"tab1","color1":"#FFD355","color2":"#FFD355"}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"showScrollbar":true,"extraStyleKeys":[],"refresherEnabled":true,"refresherBackground":"#F8F8F8"}},"DisplayDate1":{"ctx_map":{"value":"2022-09-10T11:22:33.444","format":"datetime"}}}};

const pageGroupSlug = 'app_tongzhua-pshop_log';

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
      {!!(state.ready) /* ViewIf1 */ && (<><ComNavBar title={ computeds.computed1({}, state) } theme={ "default" } statusBarBackgroundColor={ "#FFD355" } headerBackgroundColor={ "#FFD355" }></ComNavBar>
<Xbenchc171156 /* DwappCloud2 */ tabs={ state.tabs } value={ state.tab } color={ slide.components.DwappCloud2.ctx_map.color1 } lineColor={ slide.components.DwappCloud2.ctx_map.color2 }  onChange={getEvent('DwappCloud2:input:func4:tab', {}, bagForKeyValue, bagForIndex)}></Xbenchc171156>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw3el} refresherEnabled={ true } refresherTriggered={ state.RT } refresherBackground={ "#F8F8F8" } scrollX={ false } scrollY={ true } showScrollbar={ true }  onRefresherRefresh={getEvent('ScrollView1:onRefresherRefresh:func4:', {}, bagForKeyValue, bagForIndex)} onScrollToLower={getEvent('ScrollView1:onScrollToLower:func5:', {}, bagForKeyValue, bagForIndex)}>{(state.items).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View1 */   style={styles.xdw3eg}><View /* View4 */   style={styles.xdw3ed}><Text style={styles.xdw3ec} numberOfLines={1}>{dwtools.dateformat(bagForItem.created, slide.components.DisplayDate1.ctx_map.format)}</Text></View>
<View /* View2 */   style={styles.xdw3ef}><Text /* Text13 */ style={styles.xdw3ee} numberOfLines={1}>{bagForItem.data.remark}</Text></View></View></ViewForItem> })}
{!!(state.reachBottom && state.items.length > 0) /* ViewIf2 */ && (<><Text /* Text14 */ style={styles.xdw3eh} >{slide.components.Text14.ctx_map.text}</Text></>)}
{!!(state.items.length === 0) /* ViewIf3 */ && (<><View /* View5 */   style={styles.xdw3ek}><XbenchcImage /* Image1 */ style={styles.xdw3ei} source={dwtools.qiniu(slide.components.Image1.ctx_map.src, slide.components.Image1.ctx_map.fop)}  />
<Text /* Text16 */ style={styles.xdw3ej} >{slide.components.Text16.ctx_map.text}</Text></View></>)}</XbenchcScrollView></>)}
    </ErrorBoundary>
  )
}
