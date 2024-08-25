
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
  const action49 = state.summary = ({})
  return state
}

const action10 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action11 = await store.dispatch("func2", {})
  const action40 = await store.dispatch("func3", {})
  const action51 = await store.dispatch("func7", {})
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
  const action14 = await dw.app.run("device_order.list", {"limit": state.limit, "offset": state.offset, "filters": {/**/  data__service_agency_uuid: state.service_agency.uuid/**/}, "order_by": []})
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
  const action44 = dw.app.goToPappUrl("pshop_create_order", {}, {redirectTo: false})
}

const action47 = actions['func7'] = async function (store, event) {
  const state = store.state
  const action48 = await dw.app.run("device_order.get_summary", {})
  const action50 = store.commit('setState', {["state.summary"]: action48.summary})
}

const action52 = actions['func8'] = function (store, event) {
  const state = store.state
  const action53 = dw.app.goToPappUrl("pshop_active_summary", {}, {redirectTo: false})
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

var action41 = actions['computed1'] = function (event, state) {
  return event.item.created.slice(0, 10);
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
xdw322: {
  fontSize: pm(12),
  fontWeight: "bold",
  lineHeight: pm(24),
},
xdw323: {
  color: "#666666",
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw324: {
  marginLeft: "auto",
},
xdw325: {
  alignItems: "center",
  marginLeft: "auto",
  flexDirection: "row",
},
xdw326: {
  borderBottomWidth: pm(1),
  borderBottomColor: "#F2F2F2",
  marginBottom: pm(5),
  flexDirection: "row",
  paddingBottom: pm(5),
},
xdw327: {
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw328: {
  alignItems: "center",
  flexDirection: "row",
},
xdw329: {
  width: "100%",
  alignItems: "center",
  flexDirection: "row",
},
xdw32a: {
  width: pm(300),
  marginTop: pm(10),
  marginLeft: pm(10),
  paddingTop: pm(10),
  paddingLeft: pm(10),
  marginBottom: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(7),
  borderTopRightRadius: pm(7),
  borderBottomLeftRadius: pm(7),
  borderBottomRightRadius: pm(7),
},
xdw32b: {
  fontWeight: "500",
  lineHeight: pm(18),
  marginRight: pm(7),
},
xdw32c: {
  color: "#ffffff",
  fontSize: pm(10),
  fontWeight: "500",
  lineHeight: pm(15),
},
xdw32d: {
  height: pm(17),
  paddingLeft: pm(8),
  paddingRight: pm(8),
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#F3B34C",
},
xdw32e: {
  alignItems: "center",
  marginBottom: pm(9),
  flexDirection: "row",
},
xdw32f: {
  color: "#999999",
  width: pm(42),
  fontSize: pm(10),
  lineHeight: pm(15),
  marginRight: pm(25),
},
xdw32g: {
  color: "#999999",
  fontSize: pm(10),
  lineHeight: pm(15),
},
xdw32h: {
  marginBottom: pm(5),
  flexDirection: "row",
},
xdw32i: {
  flexDirection: "row",
},
xdw32j: {
  width: "100%",
  flexDirection: "column",
},
xdw32k: {
  width: pm(300),
  marginLeft: pm(10),
  paddingTop: pm(10),
  paddingLeft: pm(10),
  marginBottom: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(7),
  borderTopRightRadius: pm(7),
  borderBottomLeftRadius: pm(7),
  borderBottomRightRadius: pm(7),
},
xdw32l: {
  width: pm(146),
  height: pm(93),
},
xdw32n: {
  color: "#AAAAAA",
  fontSize: pm(12),
  marginTop: pm(17),
  lineHeight: pm(17),
},
xdw32o: {
  marginTop: pm(212),
  alignItems: "center",
  flexDirection: "column",
},
xdw32p: {
  width: pm(320),
  height: pm(58),
  flexDirection: "column",
},
xdw32q: {
  width: "100%",
  height: "100%",
  overflow: "scroll",
},
xdw32r: {
  color: "#181818",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw32s: {
  width: pm(210),
  bottom: pm(10),
  height: pm(38),
  position: "absolute",
  alignItems: "center",
  marginLeft: pm(55),
  marginRight: pm(55),
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#FFD355",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw32t: {
  width: pm(320),
  flexDirection: "column",
  backgroundColor: "#F8F8F8",
}
});
const slide = {"type":"176706","key":"c1767061","slug":null,"randomid":"id_23965d900288ea2464c9a994","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"Image2":{"ctx_map":{"fop":"e,1460,930","src":"u/dev065/2023/03/02/sjdPJMDYXdSxcFkXNX7KvX/JIKUVAZX81K8VLRAWUC.png","buildToLocal":true}},"Text12":{"ctx_map":{"text":"订货记录"}},"Text13":{"ctx_map":{"text":"这是一个文本组件"}},"Text14":{"ctx_map":{"text":"创建时间"}},"Text16":{"ctx_map":{"text":"添加订单"}},"Text17":{"ctx_map":{"text":"暂无任何数据~"}},"Text18":{"ctx_map":{"text":"这是一个文本组件"}},"Text19":{"ctx_map":{"text":"这是一个文本组件"}},"Text20":{"ctx_map":{"text":"订单号"}},"Text21":{"ctx_map":{"text":"这是一个文本组件"}},"Text22":{"ctx_map":{"text":"产品数量"}},"Text23":{"ctx_map":{"text":"这是一个文本组件"}},"Text24":{"ctx_map":{"text":"备注"}},"Text25":{"ctx_map":{"text":"这是一个文本组件"}},"Text26":{"ctx_map":{"text":"已绑定"}},"Text27":{"ctx_map":{"text":"这是一个文本组件"}},"Text28":{"ctx_map":{"text":"未绑定"}},"Text29":{"ctx_map":{"text":"本周期下单记录"}},"Text30":{"ctx_map":{"text":"这是一个文本组件"}},"Text31":{"ctx_map":{"text":"下单次数："}},"Text32":{"ctx_map":{"text":"次"}},"Text33":{"ctx_map":{"text":"台"}},"Text34":{"ctx_map":{"text":"这是一个文本组件"}},"Text35":{"ctx_map":{"text":"共："}},"Text36":{"ctx_map":{"text":"查看设备激活情况"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"View20":{"ctx_map":{}},"View21":{"ctx_map":{}},"View22":{"ctx_map":{}},"View23":{"ctx_map":{}},"View24":{"ctx_map":{}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"SvgImage1":{"ctx_map":{"src":"u/dev064/2023/03/23/BZsBo3S7YxXjbj6XntxkZ2/1029274.svg","color":"#918e8e","width":13,"height":13,"SvgImageManage":"SvgImageManage"}},"ComNavBar1":{"ctx_map":{"theme":"default","title":"订单列表","headerBackgroundColor":"#ffffff","statusBarBackgroundColor":"#ffffff"}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[]}}}};

const pageGroupSlug = 'app_tongzhua-pshop_order_list';

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
      <View /* View18 */   style={styles.xdw32t}><ComNavBar title={ "订单列表" } theme={ "default" } statusBarBackgroundColor={ "#ffffff" } headerBackgroundColor={ "#ffffff" }></ComNavBar>
<View /* View17 */   style={styles.xdw32a}><View /* View22 */   style={styles.xdw326}><Text /* Text29 */ style={styles.xdw322} >{slide.components.Text29.ctx_map.text}</Text>
<XbenchcView /* View23 */   viewStyle={styles.xdw325} onClick={getEvent('View23:onClick:func8:', {}, bagForKeyValue, bagForIndex)}><Text /* Text36 */ style={styles.xdw323} >{slide.components.Text36.ctx_map.text}</Text>
<Image /* SvgImage1 */ style={[ styles.xdw324, { width: pm(13), height: pm(13) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev064/2023/03/23/BZsBo3S7YxXjbj6XntxkZ2/1029274.svg"), width: pm(13), height: pm(13) }} /></XbenchcView></View>
<View /* View19 */   style={styles.xdw329}><View /* View20 */   style={styles.xdw328}><Text /* Text31 */ style={styles.xdw327} >{slide.components.Text31.ctx_map.text}</Text>
<Text /* Text30 */ style={styles.xdw327} >{state.summary.order_quantity || '0'}</Text>
<Text /* Text32 */ style={styles.xdw327} >{slide.components.Text32.ctx_map.text}</Text></View>
<View /* View21 */   style={styles.xdw325}><Text /* Text35 */ style={styles.xdw327} >{slide.components.Text35.ctx_map.text}</Text>
<Text /* Text34 */ style={styles.xdw327} >{state.summary.device_quantity || '0'}</Text>
<Text /* Text33 */ style={styles.xdw327} >{slide.components.Text33.ctx_map.text}</Text></View></View></View>
{!!(state.ready) /* ViewIf3 */ && (<><XbenchcScrollView /* ScrollView1 */ style={styles.xdw32q} scrollX={ false } scrollY={ true }  onRefresherRefresh={getEvent('ScrollView1:onRefresherRefresh:func4:', {}, bagForKeyValue, bagForIndex)} onScrollToLower={getEvent('ScrollView1:onScrollToLower:func5:', {}, bagForKeyValue, bagForIndex)}>{(state.items).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View2 */   style={styles.xdw32k}><View /* View1 */   style={styles.xdw32j}><View /* View6 */   style={styles.xdw32e}><Text /* Text12 */ style={styles.xdw32b} >{slide.components.Text12.ctx_map.text}</Text>
<View /* View5 */   style={styles.xdw32d}><Text /* Text13 */ style={styles.xdw32c} >{bagForItem.data._state_display}</Text></View></View>
<View /* View11 */   style={styles.xdw32h}><Text /* Text20 */ style={styles.xdw32f} >{slide.components.Text20.ctx_map.text}</Text>
<Text /* Text19 */ style={styles.xdw32g} >{bagForItem.data.code}</Text></View>
<View /* View10 */   style={styles.xdw32h}><Text /* Text14 */ style={styles.xdw32f} >{slide.components.Text14.ctx_map.text}</Text>
<Text /* Text18 */ style={styles.xdw32g} >{computeds.computed1({item: bagForItem}, state)}</Text></View>
<View /* View12 */   style={styles.xdw32h}><Text /* Text22 */ style={styles.xdw32f} >{slide.components.Text22.ctx_map.text}</Text>
<Text /* Text21 */ style={styles.xdw32g} >{bagForItem.data.quantity}</Text></View>
<View /* View14 */   style={styles.xdw32h}><Text /* Text26 */ style={styles.xdw32f} >{slide.components.Text26.ctx_map.text}</Text>
<Text /* Text25 */ style={styles.xdw32g} >{bagForItem.data.bind_quantity || '0'}</Text></View>
<View /* View15 */   style={styles.xdw32h}><Text /* Text28 */ style={styles.xdw32f} >{slide.components.Text28.ctx_map.text}</Text>
<Text /* Text27 */ style={styles.xdw32g} >{(bagForItem.data.quantity - bagForItem.data.bind_quantity) || '0'}</Text></View>
<View /* View13 */   style={styles.xdw32i}><Text /* Text24 */ style={styles.xdw32f} >{slide.components.Text24.ctx_map.text}</Text>
<Text /* Text23 */ style={styles.xdw32g} >{bagForItem.data.remark}</Text></View></View></View></ViewForItem> })}
{!!(!state.items.length) /* ViewIf2 */ && (<><View /* View8 */   style={styles.xdw32o}><XbenchcImage /* Image2 */ style={styles.xdw32l} source={dwtools.getLocalResource('xdw32m_lthar39s')}  />
<Text /* Text17 */ style={styles.xdw32n} >{slide.components.Text17.ctx_map.text}</Text></View></>)}
<View /* View24 */   style={styles.xdw32p}></View></XbenchcScrollView>
<XbenchcView /* View7 */   viewStyle={styles.xdw32s} onClick={getEvent('View7:onClick:func6:', {}, bagForKeyValue, bagForIndex)}><Text /* Text16 */ style={styles.xdw32r} >{slide.components.Text16.ctx_map.text}</Text></XbenchcView></>)}</View>
    </ErrorBoundary>
  )
}
