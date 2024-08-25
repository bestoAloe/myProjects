
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import ComNavBar from '../../xbench/components/ComNavBar'
import { Image } from 'expo-image'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import DisplayRichtext from '../../xbench/components/DisplayRichtext'
import XbenchcScrollView from '../../xbench/xbenchc/components/XbenchcScrollView'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

const action2 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action3 = state.item = (null)
  return state
}

const action4 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action5 = await store.dispatch("func1", {})
  const action12 = await store.dispatch("func2", {})
}

const action1 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action7 = await dw.app.run("message.web_list", {"aggs": {}, "limit": 1, "offset": 0, "filters": {uuid: dw.query.uuid}, "order_by": []})
  const action8 = store.commit('setState', {["state.item"]: action7.objects[0]})
}

const action9 = actions['func2'] = async function (store, event) {
  const state = store.state
  if (!state.item.data.is_read) {
    const action10 = await dw.app.run("auto_group_message.update", {"id": state.item.id, "formData": {is_read: false}})
  }
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
xdw3qu: {},
xdw3qv: {
  width: pm(20),
  height: pm(20),
  position: "relative",
  marginLeft: pm(10),
  flexDirection: "column",
},
xdw3qw: {
  fontSize: pm(14),
  fontWeight: "600",
  lineHeight: pm(19),
  marginLeft: pm(5),
},
xdw3qx: {
  color: "#AAAAAA",
  fontSize: pm(9),
  lineHeight: pm(24),
  marginLeft: "auto",
  marginRight: pm(10),
},
xdw3qy: {
  marginTop: pm(10),
  alignItems: "center",
  borderBottomWidth: pm(0.5),
  borderBottomColor: "#eeeeee",
  flexDirection: "row",
  paddingBottom: pm(10),
  justifyContent: "center",
},
xdw3qz: {
  width: pm(320),
  fontSize: pm(12),
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  paddingBottom: pm(10),
},
xdw3r0: {
  width: "100%",
  flexGrow: 1,
  overflow: "scroll",
  flexBasis: "0%",
  flexShrink: 1,
}
});
const slide = {"type":"251758","key":"c2517581","slug":null,"randomid":"id_671313e96b4dacce2295dc74","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"Text16":{"ctx_map":{"text":"最新版本"}},"ViewIf1":{"ctx_map":{"value":true}},"SvgImage2":{"ctx_map":{"src":"u/dev064/2023/06/27/k96AcsTfDUjzWAoaUZicZn/消息icon备份144x.png","color":"#07c160","width":20,"height":20,"SvgImageManage":"SvgImageManage"}},"ComNavBar1":{"ctx_map":{"theme":"default","title":"消息详情","headerBackgroundColor":"#ffffff","statusBarBackgroundColor":"#ffffff"}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"showScrollbar":true,"extraStyleKeys":[]}},"DisplayDate1":{"ctx_map":{"value":"2022-09-10T11:22:33.444","format":"datetimeseconds"}},"DisplayRichtext1":{"ctx_map":{"value":"<p>这是富文本</p>"}}}};

const pageGroupSlug = 'app_tongzhua-service_messagedetail';

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
      <ComNavBar title={ "消息详情" } theme={ "default" } statusBarBackgroundColor={ "#ffffff" } headerBackgroundColor={ "#ffffff" }></ComNavBar>
{!!(!!state.item) /* ViewIf1 */ && (<><View /* View5 */   style={styles.xdw3qy}><View /* View6 */   style={styles.xdw3qv}><Image /* SvgImage2 */ style={[ styles.xdw3qu, { width: pm(20), height: pm(20) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev064/2023/06/27/k96AcsTfDUjzWAoaUZicZn/消息icon备份144x.png"), width: pm(20), height: pm(20) }} /></View>
<Text /* Text16 */ style={styles.xdw3qw} >{state.item.data.name}</Text>
<Text style={styles.xdw3qx} numberOfLines={1}>{dwtools.dateformat(state.item.created, slide.components.DisplayDate1.ctx_map.format)}</Text></View>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw3r0} scrollX={ false } scrollY={ true } showScrollbar={ true } ><DisplayRichtext style={styles.xdw3qz} contentWidth={pm(320)} fontSize={pm(12)} value={ state.item.data.description } disablePreviewImage={ undefined }  /></XbenchcScrollView></>)}
    </ErrorBoundary>
  )
}
