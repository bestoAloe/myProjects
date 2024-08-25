
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import ComNavBar from '../../xbench/components/ComNavBar'
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
  const action3 = state.member = (null)
  const action4 = state.service_agency = (null)
  const action15 = state.limit = (10)
  const action16 = state.offset = (0)
  const action17 = state.reach_bottom = (false)
  const action33 = state.items = ([])
  const action45 = state.ready = (false)
  return state
}

const action10 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action11 = await store.dispatch("func2", {})
  const action40 = await store.dispatch("func3", {})
  const action46 = store.commit('setState', {["state.ready"]: true})
}

const action18 = actions['func4'] = async function (store, event) {
  const state = store.state
  const action20 = store.commit('setState', {["state.offset"]: 0, ["state.reach_bottom"]: false})
  const action22 = await store.dispatch("func3", {})
}

const action19 = actions['func5'] = async function (store, event) {
  const state = store.state
  if (state.reach_bottom) {
    return event
  }
  const action23 = store.commit('setState', {["state.offset"]: state.offset + state.limit})
  const action28 = await store.dispatch("func3", {})
}

const action5 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action6 = await dw.app.run("service_agency.get", {})
  
        if ((action6.status) === ("error")) {
          const action7message = (action6.message || "操作错误！")
          const action7title = ("提示")
          action7message && dw.alert(action7title, action7message)
          return {}
        }
        
  const action8 = store.commit('setState', {["state.member"]: action6.member, ["state.service_agency"]: action6.service_agency})
}

const action12 = actions['func3'] = async function (store, event) {
  const state = store.state
  const action14 = await dw.app.run("withdraw.list", {"aggs": {}, "limit": state.limit, "offset": state.offset, "filters": {/**/  data__service_agency_uuid: state.service_agency.uuid/**/}, "order_by": []})
  if (state.offset === 0) {
    const action32 = store.commit('setState', {["state.items"]: action14.objects})
  } else {
    const action35 = store.commit('setState', {["state.items__uconcat"]: {field: 'id', list: action14.objects}})
  }
  if (action14.objects.length < state.limit) {
    const action39 = store.commit('setState', {["state.reach_bottom"]: true})
  }
}

const action43 = actions['func6'] = function (store, event) {
  const state = store.state
  const action44 = dw.app.goToPappUrl("pshop_create_staff", {}, {redirectTo: false})
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

var action41 = actions['computed1'] = function (event, state) {
  return "提交时间: " + event.item.created.slice(0, 16).replace("T", " ");
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
xdw34o: {
  width: pm(320),
  height: pm(1),
  flexDirection: "column",
  backgroundColor: "#F0F0F0",
},
xdw34p: {
  fontWeight: "500",
  lineHeight: pm(18),
  marginRight: pm(7),
},
xdw34q: {
  color: "#ffffff",
  fontSize: pm(10),
  fontWeight: "500",
  lineHeight: pm(15),
},
xdw34r: {
  height: pm(17),
  marginLeft: "auto",
  paddingLeft: pm(8),
  paddingRight: pm(8),
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#F3B34C",
},
xdw34s: {
  width: pm(300),
  alignItems: "center",
  marginBottom: pm(9),
  flexDirection: "row",
},
xdw34t: {
  color: "#999999",
  fontSize: pm(10),
  lineHeight: pm(15),
},
xdw34u: {
  width: pm(200),
  flexDirection: "column",
},
xdw34v: {
  color: "#000",
  fontSize: pm(12),
  fontWeight: "600",
  lineHeight: pm(24),
  marginLeft: "auto",
},
xdw34w: {
  alignItems: "center",
  flexDirection: "row",
},
xdw34x: {
  flexDirection: "column",
},
xdw34y: {
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
},
xdw34z: {
  width: pm(310),
  height: pm(1),
  marginLeft: pm(10),
  flexDirection: "column",
  backgroundColor: "#F0F0F0",
},
xdw350: {
  width: pm(146),
  height: pm(93),
},
xdw352: {
  color: "#AAAAAA",
  fontSize: pm(12),
  marginTop: pm(17),
  lineHeight: pm(17),
},
xdw353: {
  marginTop: pm(212),
  alignItems: "center",
  flexDirection: "column",
},
xdw354: {
  width: "100%",
  flexGrow: 1,
  overflow: "scroll",
  flexBasis: "0%",
  flexShrink: 1,
}
});
const slide = {"type":"177382","key":"c1773821","slug":null,"randomid":"id_e10b46a3057c645f409cc6c0","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image2":{"ctx_map":{"fop":"e,1460,930","src":"u/dev065/2023/03/02/sjdPJMDYXdSxcFkXNX7KvX/JIKUVAZX81K8VLRAWUC.png","buildToLocal":true}},"Text12":{"ctx_map":{"text":"这是一个文本组件"}},"Text13":{"ctx_map":{"text":"这是一个文本组件"}},"Text14":{"ctx_map":{"text":"这是一个文本组件"}},"Text17":{"ctx_map":{"text":"暂无任何数据~"}},"Text18":{"ctx_map":{"text":"这是一个文本组件"}},"View10":{"ctx_map":{}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ComNavBar1":{"ctx_map":{"theme":"default","title":"提现记录","headerBackgroundColor":"#ffffff","statusBarBackgroundColor":"#ffffff"}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[]}},"DisplayPrice1":{"ctx_map":{"value":100,"format":"cnyint"}}}};

const pageGroupSlug = 'app_tongzhua-pshop_withdraw_history';

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
      <ComNavBar title={ "提现记录" } theme={ "default" } statusBarBackgroundColor={ "#ffffff" } headerBackgroundColor={ "#ffffff" }></ComNavBar>
{!!(state.ready) /* ViewIf3 */ && (<><View /* View4 */   style={styles.xdw34o}></View>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw354} scrollX={ false } scrollY={ true }  onRefresherRefresh={getEvent('ScrollView1:onRefresherRefresh:func4:', {}, bagForKeyValue, bagForIndex)} onScrollToLower={getEvent('ScrollView1:onScrollToLower:func5:', {}, bagForKeyValue, bagForIndex)}>{(state.items).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View2 */   style={styles.xdw34y}><View /* View1 */   style={styles.xdw34x}><View /* View6 */   style={styles.xdw34s}><Text /* Text12 */ style={styles.xdw34p} >{"流水号: " + bagForItem.id}</Text>
<View /* View5 */   style={styles.xdw34r}><Text /* Text13 */ style={styles.xdw34q} >{bagForItem.data._state_display}</Text></View></View>
<View /* View10 */   style={styles.xdw34w}><View /* View9 */   style={styles.xdw34u}>{!!(bagForItem.data.remark) /* ViewIf4 */ && (<><Text /* Text14 */ style={styles.xdw34t} >{"备注: " + bagForItem.data.remark}</Text></>)}
<Text /* Text18 */ style={styles.xdw34t} >{computeds.computed1({item: bagForItem}, state)}</Text></View>
<Text style={styles.xdw34v} numberOfLines={1}>{dwtools.priceformat(bagForItem.data.amount, slide.components.DisplayPrice1.ctx_map.format)}</Text></View></View></View>
<View /* View3 */   style={styles.xdw34z}></View></ViewForItem> })}
{!!(!state.items.length) /* ViewIf2 */ && (<><View /* View8 */   style={styles.xdw353}><XbenchcImage /* Image2 */ style={styles.xdw350} source={dwtools.getLocalResource('xdw351_lthar3az')}  />
<Text /* Text17 */ style={styles.xdw352} >{slide.components.Text17.ctx_map.text}</Text></View></>)}</XbenchcScrollView></>)}
    </ErrorBoundary>
  )
}
