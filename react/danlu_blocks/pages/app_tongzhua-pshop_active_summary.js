
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import ComNavBar from '../../xbench/components/ComNavBar'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
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

const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action6 = state.summary = ({})
  const action9 = state.yesterday = (null)
  const action15 = state.ready = (false)
  return state
}

const action3 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action4 = await store.dispatch("func1", {})
  const action14 = await store.dispatch("func2", {})
  const action16 = store.commit('setState', {["state.ready"]: true})
}

const action2 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action5 = await dw.app.run("device_order.get_summary", {})
  
        if ((action5.status) === ("error")) {
          const action8message = (action5.message || "操作错误！")
          const action8title = ("提示")
          action8message && dw.alert(action8title, action8message)
          return {}
        }
        
  const action7 = store.commit('setState', {["state.summary"]: action5.summary})
}

const action10 = actions['func2'] = function (store, event) {
  const state = store.state
  const action12now = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace('Z', '')
  const action12 = action12now.split('T')[0] + 'T00:00:00.000'
  const action13 = (() => {
          const a = (action12).split(/[-T:.Z]/).filter(i => !!i).map(i => parseInt(i))
          const n = new Date(
            a[0] + (0),
            a[1] - 1 + (0),
            a[2] + (-1),
            a[3] + (0),
            a[4] + (0),
            a[5] + (0),
            (parseFloat('0.' + a[6]) * 1000) + (0)
          )
          return new Date(+n + 8 * 3600 * 1000).toISOString().replace('Z', '')
        })()
  const action11 = store.commit('setState', {["state.yesterday"]: action13})
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
xdw3d2: {
  flexGrow: 1,
  fontSize: pm(12),
  flexShrink: 1,
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw3d3: {
  color: "#666666",
  flexGrow: 0,
  fontSize: pm(12),
  flexShrink: 0,
  fontWeight: "400",
  lineHeight: pm(17),
  marginRight: pm(7),
},
xdw3d4: {
  width: pm(12),
  height: pm(12),
},
xdw3d5: {
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
xdw3d6: {
  marginTop: pm(10),
  flexDirection: "column",
  backgroundColor: "#ffffff",
},
xdw3d7: {
  color: "#666666",
  fontSize: pm(11),
  textAlign: "center",
  lineHeight: pm(24),
},
xdw3d8: {
  color: "#666666",
  fontSize: pm(11),
  lineHeight: pm(24),
},
xdw3d9: {
  marginTop: pm(10),
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
},
xdw3da: {
  flexDirection: "column",
},
xdw3db: {
  width: "100%",
  flexGrow: 1,
  overflow: "scroll",
  flexBasis: "0%",
  flexShrink: 1,
  backgroundColor: "#F8F8F8",
}
});
const slide = {"type":"184375","key":"c1843751","slug":null,"randomid":"id_99e9ba137b2b3abb0432928d","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View1":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image5":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Image6":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Image7":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Text22":{"ctx_map":{"text":"品种"}},"Text23":{"ctx_map":{"text":"历史已激活"}},"Text25":{"ctx_map":{"text":"未激活"}},"Text26":{"ctx_map":{"text":"昵称"}},"Text27":{"ctx_map":{"text":"已激活"}},"Text28":{"ctx_map":{"text":"数据截至日期："}},"Text29":{"ctx_map":{"text":"台"}},"Text30":{"ctx_map":{"text":"昵称"}},"Text31":{"ctx_map":{"text":"台"}},"Text32":{"ctx_map":{"text":"台"}},"View10":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ComNavBar1":{"ctx_map":{"theme":"default","title":"设备激活情况","headerBackgroundColor":"#FFD355","statusBarBackgroundColor":"#FFD355"}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"showScrollbar":true,"extraStyleKeys":[]}},"DisplayDate1":{"ctx_map":{"value":"2022-09-10T11:22:33.444","format":"date"}}}};

const pageGroupSlug = 'app_tongzhua-pshop_active_summary';

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
      <ComNavBar title={ "设备激活情况" } theme={ "default" } statusBarBackgroundColor={ "#FFD355" } headerBackgroundColor={ "#FFD355" }></ComNavBar>
{!!(state.ready) /* ViewIf1 */ && (<><XbenchcScrollView /* ScrollView1 */ style={styles.xdw3db} scrollX={ false } scrollY={ true } showScrollbar={ true } ><View /* View9 */   style={styles.xdw3da}><View /* View1 */   style={styles.xdw3d6}><XbenchcView /* View8 */   viewStyle={styles.xdw3d5} onClick={getEvent('View8:onClick:func2:', {eventData: "edit_nickname"}, bagForKeyValue, bagForIndex)}><Text /* Text27 */ style={styles.xdw3d2} >{slide.components.Text27.ctx_map.text}</Text>
<Text /* Text26 */ style={styles.xdw3d3} >{state.summary.contract_active_quantity || '0'}</Text>
<Text /* Text29 */ style={styles.xdw3d3} >{slide.components.Text29.ctx_map.text}</Text>
<XbenchcImage /* Image7 */ style={styles.xdw3d4} source={dwtools.qiniu(slide.components.Image7.ctx_map.src, slide.components.Image7.ctx_map.fop)}  /></XbenchcView>
<XbenchcView /* View7 */   viewStyle={styles.xdw3d5} onClick={getEvent('View7:onClick:func2:', {eventData: "edit_type"}, bagForKeyValue, bagForIndex)}><Text /* Text25 */ style={styles.xdw3d2} >{slide.components.Text25.ctx_map.text}</Text>
<Text /* Text30 */ style={styles.xdw3d3} >{(state.summary.device_quantity - state.summary.contract_active_quantity) || '0'}</Text>
<Text /* Text31 */ style={styles.xdw3d3} >{slide.components.Text31.ctx_map.text}</Text>
<XbenchcImage /* Image6 */ style={styles.xdw3d4} source={dwtools.qiniu(slide.components.Image6.ctx_map.src, slide.components.Image6.ctx_map.fop)}  /></XbenchcView>
<XbenchcView /* View6 */   viewStyle={styles.xdw3d5} onClick={getEvent('View6:onClick:func2:', {eventData: "edit_breed"}, bagForKeyValue, bagForIndex)}><Text /* Text23 */ style={styles.xdw3d2} >{slide.components.Text23.ctx_map.text}</Text>
<Text /* Text22 */ style={styles.xdw3d3} >{state.summary.history_active_quantity || '0'}</Text>
<Text /* Text32 */ style={styles.xdw3d3} >{slide.components.Text32.ctx_map.text}</Text>
<XbenchcImage /* Image5 */ style={styles.xdw3d4} source={dwtools.qiniu(slide.components.Image5.ctx_map.src, slide.components.Image5.ctx_map.fop)}  /></XbenchcView></View>
<View /* View10 */   style={styles.xdw3d9}><Text /* Text28 */ style={styles.xdw3d7} >{slide.components.Text28.ctx_map.text}</Text>
<Text style={styles.xdw3d8} numberOfLines={1}>{dwtools.dateformat(state.yesterday, slide.components.DisplayDate1.ctx_map.format)}</Text></View></View></XbenchcScrollView></>)}
    </ErrorBoundary>
  )
}
