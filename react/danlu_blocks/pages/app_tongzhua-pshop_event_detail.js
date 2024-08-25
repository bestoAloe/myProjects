
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import ComNavBar from '../../xbench/components/ComNavBar'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import DisplayRichtext from '../../xbench/components/DisplayRichtext'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcScrollView from '../../xbench/xbenchc/components/XbenchcScrollView'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

let action13lock = false
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action3 = state.item = (null)
  return state
}

const action4 = actions['onShow'] = async function (store, event) {
  const state = store.state
  let action8
  

  const action6 = await store.dispatch("func1", {})
}

const action5 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action7 = await dw.app.run("pshop_event.list", {"aggs": {}, "limit": 1, "offset": 0, "filters": {uuid: dw.query.uuid}, "order_by": ['-id']})
  const action10 = store.commit('setState', {["state.item"]: action7.objects[0]})
}

const action11 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action13 = await (async () => {
  
      if (action13lock) return true
      action13lock = true
      try {
    const action14 = await dw.app.run("pshop_event.join", {"pshop_event_uuid": state.item.uuid})
    
        if ((action14.status) === ("error")) {
          const action15message = (action14.message || "操作错误！")
          const action15title = ("提示")
          action15message && dw.alert(action15title, action15message)
          return {}
        }
        
    const action16 = await dw.showToast({"title": "参与成功", "icon": "success", "image": "", "duration": 1500, "mask": false, "content": "参与成功"})
    await new Promise((resolve, reject) => setTimeout(resolve, 300))
    const action18 = await dw.navigateBack({delta: 1})
  
      } catch (e) {
        throw e
      } finally {
        action13lock = false
      }
      
  })()
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
xdw3fu: {
  width: pm(320),
  height: pm(320),
},
xdw3fv: {
  fontSize: pm(12),
  lineHeight: pm(24),
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
},
xdw3fw: {
  width: pm(320),
  fontSize: pm(12),
  paddingLeft: pm(10),
  paddingRight: pm(10),
},
xdw3fx: {
  height: pm(25),
  flexDirection: "column",
},
xdw3fy: {
  width: "100%",
  height: "100%",
  overflow: "scroll",
},
xdw3fz: {
  fontSize: pm(12),
  fontWeight: "bold",
  lineHeight: pm(24),
},
xdw3g0: {
  left: pm(110),
  width: pm(100),
  bottom: pm(10),
  height: pm(35),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "rgba(255, 218, 103, 1)",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw3g1: {
  width: pm(320),
  flexDirection: "column",
}
});
const slide = {"type":"184343","key":"c1843431","slug":null,"randomid":"id_574c4075e09740b46532549c","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":"这是一个文本组件"}},"Text2":{"ctx_map":{"text":"参与"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,640,640","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"ViewIf1":{"ctx_map":{"value":true}},"ComNavBar1":{"ctx_map":{"theme":"default","title":"","headerBackgroundColor":"#FFD355","statusBarBackgroundColor":"#FFD355"}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"showScrollbar":true,"extraStyleKeys":[]}},"DisplayRichtext1":{"ctx_map":{"value":"<p>这是富文本</p>"}}}};

const pageGroupSlug = 'app_tongzhua-pshop_event_detail';

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
      {!!(!!state.item) /* ViewIf1 */ && (<><View /* View3 */   style={styles.xdw3g1}><ComNavBar title={ state.item.data.name } theme={ "default" } statusBarBackgroundColor={ "#FFD355" } headerBackgroundColor={ "#FFD355" }></ComNavBar>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw3fy} scrollX={ false } scrollY={ true } showScrollbar={ true } ><XbenchcImage /* Image1 */ style={styles.xdw3fu} source={dwtools.qiniu(state.item.data.image, slide.components.Image1.ctx_map.fop)}  />
<Text /* Text1 */ style={styles.xdw3fv} >{state.item.data.summary}</Text>
<DisplayRichtext style={styles.xdw3fw} contentWidth={pm(320)} fontSize={pm(12)} value={ state.item.data.description } disablePreviewImage={ undefined }  />
<View /* View2 */   style={styles.xdw3fx}></View></XbenchcScrollView>
<XbenchcView /* View1 */   viewStyle={styles.xdw3g0} onClick={getEvent('View1:onClick:func2:', {}, bagForKeyValue, bagForIndex)}><Text /* Text2 */ style={styles.xdw3fz} >{slide.components.Text2.ctx_map.text}</Text></XbenchcView></View></>)}
    </ErrorBoundary>
  )
}
