
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import ComNavBar from '../../xbench/components/ComNavBar'
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
  const action2 = state.currentItem = (null)
  const action3 = state.title = ("")
  const action6 = state.args = ({})
  const action18 = state.showintroduce = (false)
  return state
}

const action4 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action7 = dw.query
  const action8 = store.commit('setState', {["state.args"]: action7})
  let action10
  

  const action11 = await store.dispatch("func1", {})
}

const action5 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action12 = await dw.app.run("auto_group_material.list", {"aggs": {}, "limit": 0, "offset": 0, "filters": {uuid: state.args.uuid  }, "order_by": []})
  const action13 = console.log('[func1#action13] 打印(action12)的返回值', action12)
  const action14 = store.commit('setState', {["state.currentItem"]: action12.objects[0], ["state.title"]: action12.objects[0].data._type_display})
}

const action16 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action22r = (event.context.eventData).startsWith('http')
          ? await dw.asPromiseNoReject(dw.wx.downloadFile, {
              ...{
    url: event.context.eventData,
    showMenu: true,
    header: {}
  },
              filePath: `${dw.wx.env.USER_DATA_PATH}/${event.context.eventData.split('/').slice(-1)[0]}`
            })
          : {tempFilePath: event.context.eventData}
  if (action22r && (action22r.tempFilePath || action22r.filePath)) {
          const action22r2 = await dw.asPromiseNoReject(dw.wx.openDocument, {
          filePath: action22r.tempFilePath || action22r.filePath,
          showMenu: true,
        })
    action22r.errMsg = action22r2.errMsg
  }
  const action22 = action22r
}

const action19 = actions['func3'] = function (store, event) {
  const state = store.state
  const action20 = store.commit('setState', {["state.showintroduce"]: !state.showintroduce})
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
xdw2wu: {
  flexGrow: 1,
  fontSize: pm(12),
  flexShrink: 1,
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw2wv: {
  color: "#999999",
  flexGrow: 0,
  fontSize: pm(12),
  flexShrink: 0,
  fontWeight: "400",
  lineHeight: pm(17),
  marginRight: pm(7),
},
xdw2ww: {
  flexWrap: "nowrap",
  alignItems: "center",
  marginLeft: pm(10),
  paddingTop: pm(13),
  borderBottomWidth: pm(1),
  borderBottomColor: "#eeeeee",
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(13),
  justifyContent: "flex-start",
},
xdw2wx: {
  color: "#181818",
  flexGrow: 1,
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw2wy: {},
xdw2x0: {
  alignItems: "center",
  flexDirection: "row",
},
xdw2x2: {
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
xdw2x4: {
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
xdw2x5: {
  width: pm(320),
  borderTopWidth: pm(1),
  borderTopColor: "#dddddd",
  flexDirection: "column",
  backgroundColor: "#ffffff",
},
xdw2x6: {
  width: pm(320),
  borderTopWidth: pm(0),
  borderTopColor: "#dddddd",
  borderBottomWidth: pm(1),
  borderBottomColor: "#eeeeee",
  flexDirection: "column",
  backgroundColor: "#ffffff",
},
xdw2x7: {
  width: "100%",
  flexGrow: 1,
  overflow: "scroll",
  flexBasis: "0%",
  flexShrink: 1,
}
});
const slide = {"type":"176703","key":"c1767031","slug":null,"randomid":"id_50118bcbd118b73a1d9c78e5","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":"名称"}},"Text2":{"ctx_map":{"text":"名称"}},"Text3":{"ctx_map":{"text":"昵称"}},"Text4":{"ctx_map":{"text":"简介"}},"Text7":{"ctx_map":{"text":"产品介绍材料"}},"Text8":{"ctx_map":{"text":"文件列表"}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"SvgImage3":{"ctx_map":{"src":"u/dev065/2023/03/17/C8KaKC26JerwB8zGUAqdSZ/1159887.svg","color":"#999999","width":20,"height":20,"buildToLocal":true,"SvgImageManage":"SvgImageManage"}},"SvgImage4":{"ctx_map":{"src":"u/dev065/2023/03/17/v3vuLJnRwGkuVnC4CZuGEB/1195361.svg","color":"#999999","width":20,"height":20,"buildToLocal":true,"SvgImageManage":"SvgImageManage"}},"SvgImage5":{"ctx_map":{"src":"u/dev065/2023/03/17/FE7juraE43ndzRWRgMJho7/1195352.svg","color":"#999999","width":20,"height":20,"buildToLocal":true,"SvgImageManage":"SvgImageManage"}},"ComNavBar1":{"ctx_map":{"theme":"default","title":"测试自定义标题","headerBackgroundColor":"#ffffff","statusBarBackgroundColor":"#ffffff"}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[]}}}};

const pageGroupSlug = 'app_tongzhua-filedetail';

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
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw2x7} scrollX={ false } scrollY={ true } ><View /* View2 */   style={styles.xdw2ww}><Text /* Text2 */ style={styles.xdw2wu} >{slide.components.Text2.ctx_map.text}</Text>
<Text /* Text1 */ style={styles.xdw2wv} >{state.currentItem.data.name}</Text></View>
<View /* View3 */   style={styles.xdw2ww}><Text /* Text4 */ style={styles.xdw2wu} >{slide.components.Text4.ctx_map.text}</Text>
<Text /* Text3 */ style={styles.xdw2wv} >{state.currentItem.data.summary || "无"}</Text></View>
<View /* View4 */   style={styles.xdw2x6}><XbenchcView /* View14 */   viewStyle={styles.xdw2x2} onClick={getEvent('View14:onClick:func3:', {}, bagForKeyValue, bagForIndex)}><Text /* Text8 */ style={styles.xdw2wx} >{slide.components.Text8.ctx_map.text}</Text>
{!!(state.showintroduce) /* ViewIf3 */ && (<><View /* View16 */   style={styles.xdw2x0}><Image /* SvgImage5 */ style={[ styles.xdw2wy, { width: pm(20), height: pm(20) }]} contentFit="contain" source={dwtools.getLocalResource('xdw2wz_lthar37f')} /></View></>)}
{!!(!state.showintroduce) /* ViewIf2 */ && (<><View /* View15 */   style={styles.xdw2x0}><Image /* SvgImage4 */ style={[ styles.xdw2wy, { width: pm(20), height: pm(20) }]} contentFit="contain" source={dwtools.getLocalResource('xdw2x1_lthar37f')} /></View></>)}</XbenchcView>
{!!(state.showintroduce) /* ViewIf1 */ && (<>{(state.currentItem.data.files).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View11 */   style={styles.xdw2x5}><View /* View12 */   style={styles.xdw2x4}><Text /* Text7 */ style={styles.xdw2wx} >{bagForItem.data.name}</Text>
<XbenchcView /* View13 */   viewStyle={styles.xdw2x0} onClick={getEvent('View13:onClick:func2:', {eventData: bagForItem.data.url}, bagForKeyValue, bagForIndex)}><Image /* SvgImage3 */ style={[ styles.xdw2wy, { width: pm(20), height: pm(20) }]} contentFit="contain" source={dwtools.getLocalResource('xdw2x3_lthar37f')} /></XbenchcView></View></View></ViewForItem> })}</>)}</View></XbenchcScrollView>
    </ErrorBoundary>
  )
}
