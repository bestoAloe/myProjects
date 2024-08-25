
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import ComNavBar from '../../xbench/components/ComNavBar'
import { Image } from 'expo-image'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
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
  const action2 = state.titlelist = ([/**/  {/**/    id: "introduce",/**/    name: "产品介绍材料"/**/  },/**/  {/**/    id: "training",/**/    name: "产品培训材料"/**/  },/**/  {/**/    id: "contrast",/**/    name: "产品卖点比对"/**/  },/**/  {/**/    id: "offcial",/**/    name: "产品介绍素材库"/**/  },/**/])
  const action6 = state.title = ("")
  const action7 = state.args = ({})
  const action12 = state.filters = ({})
  const action14 = state.items = ([])
  return state
}

const action3 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action8 = dw.query
  const action9 = console.log('[onShow#action9] 打印(action8)的返回值', action8)
  const action10 = store.commit('setState', {["state.args"]: action8, ["state.filters.data__type"]: action8.type})
  let action15
  

  const action17 = await Promise.all([
    (async () => {
      const action18 = await store.dispatch("func1", {})
      return action18
    })(),
    (async () => {
      const action19 = await store.dispatch("func2", {})
      return action19
    })(),
  ])

}

const action4 = actions['func1'] = function (store, event) {
  const state = store.state
  const action5 = store.commit('setState', {["state.title"]: state.titlelist.find(x=>x.id == state.args.type) ? state.titlelist.find(x=>x.id == state.args.type).name : ""})
}

const action11 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action13 = await dw.app.run("auto_group_material.list", {"aggs": {}, "limit": 0, "offset": 0, "filters": state.filters, "order_by": []})
  const action20 = console.log('[func2#action20] 打印(action13)的返回值', action13)
  const action21 = store.commit('setState', {["state.items"]: action13.objects})
}

const action24 = actions['func9'] = function (store, event) {
  const state = store.state
  let uuid = (event.context.eventData)
  const action25 = uuid
  const action26 = console.log('[func9#action26] 打印(uuid)的返回值', uuid)
  const action27 = dw.app.goToPappUrl("filedetail", {"uuid": uuid}, {redirectTo: false})
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
xdw2wi: {},
xdw2wj: {
  color: "#181818",
  flexGrow: 1,
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
  marginLeft: pm(10),
},
xdw2wk: {
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
xdw2wl: {
  width: pm(320),
  borderTopWidth: pm(1),
  borderTopColor: "#f8f8f8",
  flexDirection: "column",
  backgroundColor: "#ffffff",
},
xdw2wm: {
  borderBottomWidth: pm(1),
  borderBottomColor: "#f8f8f8",
  flexDirection: "column",
},
xdw2wn: {
  width: "100%",
  flexGrow: 1,
  overflow: "scroll",
  flexBasis: "0%",
  flexShrink: 1,
}
});
const slide = {"type":"176687","key":"c1766871","slug":null,"randomid":"id_a3f8db53518415b11e32688d","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text5":{"ctx_map":{"text":"产品培训材料"}},"View1":{"ctx_map":{}},"View3":{"ctx_map":{}},"View13":{"ctx_map":{}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"SvgImage1":{"ctx_map":{"src":"u/dev065/2023/03/17/SKeWprMVLzYBasQg3dtTWG/1340377.svg","color":"#07c160","width":20,"height":20,"SvgImageManage":"SvgImageManage"}},"ComNavBar1":{"ctx_map":{"theme":"default","title":"测试自定义标题","headerBackgroundColor":"#ffffff","statusBarBackgroundColor":"#ffffff"}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[]}}}};

const pageGroupSlug = 'app_tongzhua-files';

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
      <ComNavBar title={ state.title } theme={ "default" } statusBarBackgroundColor={ "#ffffff" } headerBackgroundColor={ "#ffffff" }></ComNavBar>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw2wn} scrollX={ false } scrollY={ true } ><View /* View1 */   style={styles.xdw2wm}>{(state.items).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><XbenchcView /* View3 */   viewStyle={styles.xdw2wl} onClick={getEvent('View3:onClick:func9:', {eventData: bagForItem.uuid}, bagForKeyValue, bagForIndex)}><View /* View13 */   style={styles.xdw2wk}><Image /* SvgImage1 */ style={[ styles.xdw2wi, { width: pm(20), height: pm(20) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev065/2023/03/17/SKeWprMVLzYBasQg3dtTWG/1340377.svg"), width: pm(20), height: pm(20) }} />
<Text /* Text5 */ style={styles.xdw2wj} >{bagForItem.data.name}</Text></View></XbenchcView></ViewForItem> })}</View></XbenchcScrollView>
    </ErrorBoundary>
  )
}
