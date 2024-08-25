
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import ComNavBar from '../../xbench/components/ComNavBar'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcSwiper from '../../xbench/xbenchc/components/XbenchcSwiper'
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
  const action7 = state.banners = ([])
  const action15 = state.limit = (10)
  const action14 = state.offset = (0)
  const action13 = state.reachBottom = (false)
  const action20 = state.items = ([])
  const action34 = state.RT = (false)
  const action43 = state.ready = (false)
  return state
}

const action8 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action42 = await Promise.all([
    (async () => {
      const action9 = await store.dispatch("func1", {})
      return action9
    })(),
    (async () => {
      const action41 = await store.dispatch("func2", {})
      return action41
    })(),
  ])

  const action44 = store.commit('setState', {["state.ready"]: true})
}

const action3 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action5 = await dw.app.run("pshop_event.list", {"aggs": {}, "limit": 1000, "offset": 0, "filters": {data__in_banner: true}, "order_by": []})
  const action6 = store.commit('setState', {["state.banners"]: action5.objects})
}

const action4 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action11 = await dw.app.run("pshop_event.list", {"aggs": {}, "limit": state.limit, "offset": state.offset, "filters": {}, "order_by": []})
  if (state.offset === 0) {
    const action19 = store.commit('setState', {["state.items"]: action11.objects})
  } else {
    const action22 = store.commit('setState', {["state.items__uconcat"]: {field: 'id', list: action11.objects}})
  }
  if (state.limit > action11.objects.length) {
    const action26 = store.commit('setState', {["state.reachBottom"]: true})
  }
}

const action27 = actions['func5'] = async function (store, event) {
  const state = store.state
  if (state.reachBottom) {
    return event
  }
  const action31 = store.commit('setState', {["state.offset"]: state.offset + state.limit})
  const action32 = await store.dispatch("func2", {})
}

const action33 = actions['func6'] = async function (store, event) {
  const state = store.state
  const action35 = store.commit('setState', {["state.RT"]: true, ["state.reachBottom"]: false, ["state.offset"]: 0})
  const action39 = await store.dispatch("func2", {})
  const action40 = store.commit('setState', {["state.RT"]: false})
}

const action45 = actions['func7'] = function (store, event) {
  const state = store.state
  let uuid = (event.context.eventData.uuid)
  const action47 = uuid
  const action49 = dw.app.goToPappUrl("pshop_event_detail", {"uuid": uuid}, {redirectTo: false})
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
xdw3ex: {
  width: pm(320),
  height: pm(160),
},
xdw3ey: {
  flexDirection: "column",
},
xdw3ez: {
  width: pm(70),
  height: pm(70),
  borderTopLeftRadius: pm(5),
  borderTopRightRadius: pm(5),
  borderBottomLeftRadius: pm(5),
  borderBottomRightRadius: pm(5),
},
xdw3f0: {
  fontSize: pm(14),
  lineHeight: pm(24),
},
xdw3f1: {
  fontSize: pm(11),
  lineHeight: pm(20),
},
xdw3f2: {
  color: "#666666",
  fontSize: pm(11),
  lineHeight: pm(16),
},
xdw3f3: {
  color: "#666666",
  fontSize: pm(11),
  lineHeight: pm(16),
  paddingLeft: pm(3),
  paddingRight: pm(3),
},
xdw3f4: {
  flexDirection: "row",
},
xdw3f5: {
  paddingLeft: pm(10),
  flexDirection: "column",
},
xdw3f6: {
  width: pm(300),
  marginTop: pm(10),
  marginLeft: pm(10),
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw3f7: {
  fontSize: pm(12),
  marginTop: pm(10),
  textAlign: "center",
  lineHeight: pm(24),
  marginBottom: pm(10),
},
xdw3f8: {
  width: pm(120),
  height: pm(120),
},
xdw3f9: {
  color: "rgb(153, 153, 153)",
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw3fa: {
  flexGrow: 1,
  marginTop: pm(10),
  alignItems: "center",
  flexShrink: 0,
  marginBottom: pm(10),
  flexDirection: "column",
  justifyContent: "center",
},
xdw3fb: {
  width: "100%",
  height: "100%",
  flexGrow: 1,
  overflow: "scroll",
  flexBasis: "0%",
  flexShrink: 1,
  backgroundColor: "#F8F8F8",
},
xdw3fc: {
  width: pm(320),
  flexDirection: "column",
}
});
const slide = {"type":"184331","key":"c1843311","slug":null,"randomid":"id_653297fd2b469c90831fd4a7","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":"这是一个文本组件"}},"Text2":{"ctx_map":{"text":"这是一个文本组件"}},"Text3":{"ctx_map":{"text":"已经到底了"}},"Text4":{"ctx_map":{"text":"暂无数据"}},"Text5":{"ctx_map":{"text":"至"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,640,320","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image2":{"ctx_map":{"fop":"e,150,150","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image3":{"ctx_map":{"fop":"e,300,300","src":"u/dev064/2023/04/14/eSMbTLQgkxLfNm3DdtgfJG/FtKV50QeRVyFkzNaa3ZnPGGH4zb11.png"}},"Swiper1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"autoplay":true,"circular":true,"duration":500,"interval":3000,"itemsKey":"id","indicatorDots":true}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ComNavBar1":{"ctx_map":{"theme":"default","title":"活动资讯","headerBackgroundColor":"#FFD355","statusBarBackgroundColor":"#FFD355"}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"showScrollbar":true,"extraStyleKeys":[],"refresherEnabled":true,"refresherBackground":"#F8F8F8"}},"DisplayDate1":{"ctx_map":{"value":"2022-09-10T11:22:33.444","format":"date"}},"DisplayDate2":{"ctx_map":{"value":"2022-09-10T11:22:33.444","format":"date"}}}};

const pageGroupSlug = 'app_tongzhua-pshop_event';

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
      {!!(state.ready) /* ViewIf3 */ && (<><View /* View7 */   style={styles.xdw3fc}><ComNavBar title={ "活动资讯" } theme={ "default" } statusBarBackgroundColor={ "#FFD355" } headerBackgroundColor={ "#FFD355" }></ComNavBar>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw3fb} refresherEnabled={ true } refresherTriggered={ state.RT } refresherBackground={ "#F8F8F8" } scrollX={ false } scrollY={ true } showScrollbar={ true }  onRefresherRefresh={getEvent('ScrollView1:onRefresherRefresh:func6:', {}, bagForKeyValue, bagForIndex)} onScrollToLower={getEvent('ScrollView1:onScrollToLower:func5:', {}, bagForKeyValue, bagForIndex)}><View /* Swiper1 */ style={styles.xdw3ex}><XbenchcSwiper style={styles.xdw3ex} paginationStyle={ {marginVertical: pm(6)} } paginationStyleItem={ {width: pm(6), height: pm(6), borderRadius: pm(6), marginHorizontal: pm(3)} } showPagination={ true } paginationDefaultColor={ 'rgba(0, 0, 0, 0.3)' } paginationActiveColor={ '#000000' } autoplay={ true } autoplayDelay={ 3000 / 1000 } autoplayLoop={ true } vertical={ false } index={ 0 }  onChange={getEvent('Swiper1:onChange::', {}, bagForKeyValue, bagForIndex)} data={state.banners} renderItem={({ item: bagForItem, index: bagForIndex }) => (<>{<XbenchcView /* View1 */   viewStyle={styles.xdw3ey} onClick={getEvent('View1:onClick:func7:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image1 */ style={styles.xdw3ex} source={dwtools.qiniu(bagForItem.data.banner_image, slide.components.Image1.ctx_map.fop)}  /></XbenchcView>}</>)}></XbenchcSwiper></View>
<View /* View2 */   style={styles.xdw3ey}>{(state.items).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><XbenchcView /* View3 */   viewStyle={styles.xdw3f6} onClick={getEvent('View3:onClick:func7:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image2 */ style={styles.xdw3ez} source={dwtools.qiniu(bagForItem.data.image, slide.components.Image2.ctx_map.fop)}  />
<View /* View4 */   style={styles.xdw3f5}><Text /* Text1 */ style={styles.xdw3f0} >{bagForItem.data.name}</Text>
<Text /* Text2 */ style={styles.xdw3f1} >{bagForItem.data.summary}</Text>
<View /* View6 */   style={styles.xdw3f4}><Text style={styles.xdw3f2} numberOfLines={1}>{dwtools.dateformat(bagForItem.data.start_date, slide.components.DisplayDate1.ctx_map.format)}</Text>
<Text /* Text5 */ style={styles.xdw3f3} >{slide.components.Text5.ctx_map.text}</Text>
<Text style={styles.xdw3f2} numberOfLines={1}>{dwtools.dateformat(bagForItem.data.end_date, slide.components.DisplayDate2.ctx_map.format)}</Text></View></View></XbenchcView></ViewForItem> })}
{!!(state.reachBottom && state.items.length > 0) /* ViewIf1 */ && (<><Text /* Text3 */ style={styles.xdw3f7} >{slide.components.Text3.ctx_map.text}</Text></>)}
{!!(state.items.length === 0) /* ViewIf2 */ && (<><View /* View5 */   style={styles.xdw3fa}><XbenchcImage /* Image3 */ style={styles.xdw3f8} source={dwtools.qiniu(slide.components.Image3.ctx_map.src, slide.components.Image3.ctx_map.fop)}  />
<Text /* Text4 */ style={styles.xdw3f9} >{slide.components.Text4.ctx_map.text}</Text></View></>)}</View></XbenchcScrollView></View></>)}
    </ErrorBoundary>
  )
}
