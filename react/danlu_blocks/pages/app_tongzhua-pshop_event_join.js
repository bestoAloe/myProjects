
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import ComNavBar from '../../xbench/components/ComNavBar'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import Xbenchc168611 from '../components/Xbenchc168611'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import Xbenchc180673 from '../components/Xbenchc180673'
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
  const action6 = state.data = ({})
  const action9 = state.tabs = ([/**/  {id: 'doing', name: '正在参与'},/**/  {id: 'done', name: '已经参与过的活动'},/**/])
  const action10 = state.tab = ('doing')
  const action11 = state.ready = (false)
  return state
}

const action3 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action4 = await store.dispatch("func1", {})
  const action12 = store.commit('setState', {["state.ready"]: true})
}

const action2 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action5 = await dw.app.run("pshop_event.get_summary", {"state": state.tab})
  const action8 = console.log('[func1#action8] 打印(action5)的返回值', action5)
  const action7 = store.commit('setState', {["state.data"]: action5})
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
xdw3ga: {
  flexGrow: 1,
  fontSize: pm(12),
  flexShrink: 1,
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw3gb: {
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw3gc: {
  color: "#666666",
  flexGrow: 0,
  fontSize: pm(12),
  flexShrink: 0,
  fontWeight: "400",
  lineHeight: pm(17),
  marginRight: pm(7),
},
xdw3gd: {
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
xdw3ge: {
  marginTop: pm(10),
  flexDirection: "column",
  backgroundColor: "#ffffff",
},
xdw3gf: {
  width: pm(70),
  height: pm(70),
  borderTopLeftRadius: pm(5),
  borderTopRightRadius: pm(5),
  borderBottomLeftRadius: pm(5),
  borderBottomRightRadius: pm(5),
},
xdw3gg: {
  fontSize: pm(14),
  lineHeight: pm(24),
},
xdw3gh: {
  fontSize: pm(11),
  lineHeight: pm(20),
},
xdw3gi: {
  alignItems: "center",
  flexDirection: "row",
},
xdw3gj: {
  marginTop: "auto",
  flexDirection: "column",
},
xdw3gk: {
  flexGrow: 1,
  paddingLeft: pm(10),
  flexDirection: "column",
},
xdw3gl: {
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
xdw3gm: {
  width: pm(120),
  height: pm(120),
},
xdw3gn: {
  color: "rgb(153, 153, 153)",
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw3go: {
  flexGrow: 1,
  marginTop: pm(10),
  alignItems: "center",
  flexShrink: 0,
  marginBottom: pm(10),
  flexDirection: "column",
  justifyContent: "center",
},
xdw3gp: {
  flexDirection: "column",
},
xdw3gq: {
  width: "100%",
  flexGrow: 1,
  overflow: "scroll",
  flexBasis: "0%",
  flexShrink: 1,
  backgroundColor: "#F8F8F8",
}
});
const slide = {"type":"184385","key":"c1843851","slug":null,"randomid":"id_53ffda51a7305f8382a9a103","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View1":{"ctx_map":{}},"View3":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,150,150","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image2":{"ctx_map":{"fop":"e,300,300","src":"u/dev064/2023/04/14/eSMbTLQgkxLfNm3DdtgfJG/FtKV50QeRVyFkzNaa3ZnPGGH4zb11.png"}},"Text18":{"ctx_map":{"text":"台"}},"Text19":{"ctx_map":{"text":"昵称"}},"Text20":{"ctx_map":{"text":"活动期间总下单量"}},"Text23":{"ctx_map":{"text":"活动期间累计额外收益"}},"Text24":{"ctx_map":{"text":"元"}},"Text27":{"ctx_map":{"text":"额外收益："}},"Text28":{"ctx_map":{"text":"这是一个文本组件"}},"Text29":{"ctx_map":{"text":"元"}},"Text30":{"ctx_map":{"text":"暂无数据"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ComNavBar1":{"ctx_map":{"theme":"default","title":"活动数据","headerBackgroundColor":"#FFD355","statusBarBackgroundColor":"#FFD355"}},"DwappCloud1":{"ctx_map":{"prop1":[{"id":"default","name":"详情"},{"id":"property","name":"属性"},{"id":"comment","name":"评价"}],"text1":"default","style1":null,"style2":null,"style3":null}},"DwappCloud2":{"ctx_map":{"bool1":false,"style1":null,"style2":null,"style3":null,"numberb1":59}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"showScrollbar":true,"extraStyleKeys":[]}},"DisplayPrice1":{"ctx_map":{"value":100,"format":"cnyint"}},"DisplayPrice2":{"ctx_map":{"value":100,"format":"cnyint"}}}};
slide.components.DwappCloud1.ctx_map.style1 = {
  fontSize: pm(14),
  flexDirection: "column",
};
slide.components.DwappCloud1.ctx_map.style2 = {
  color: "#FFD355",
  fontSize: pm(14),
  fontWeight: "bold",
  flexDirection: "column",
};
slide.components.DwappCloud1.ctx_map.style3 = {
  width: "50%",
  bottom: pm(-0.5),
  height: pm(2),
  position: "absolute",
  flexDirection: "column",
  backgroundColor: "#FFD355",
};
slide.components.DwappCloud2.ctx_map.style1 = {
  height: pm(7),
  alignItems: "flex-start",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#FFD355",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
};
slide.components.DwappCloud2.ctx_map.style2 = {
  height: pm(7),
  alignItems: "flex-start",
  flexDirection: "column",
  backgroundColor: "#e6e6e6",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
};
slide.components.DwappCloud2.ctx_map.style3 = {
  color: "#ffffff",
  fontSize: pm(12),
  lineHeight: pm(24),
  marginLeft: pm(5),
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-pshop_event_join';

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
      <ComNavBar title={ "活动数据" } theme={ "default" } statusBarBackgroundColor={ "#FFD355" } headerBackgroundColor={ "#FFD355" }></ComNavBar>
{!!(state.ready) /* ViewIf1 */ && (<><XbenchcScrollView /* ScrollView1 */ style={styles.xdw3gq} scrollX={ false } scrollY={ true } showScrollbar={ true } ><View /* View1 */   style={styles.xdw3gp}><View /* View3 */   style={styles.xdw3ge}><XbenchcView /* View6 */   viewStyle={styles.xdw3gd} onClick={getEvent('View6:onClick:func2:', {eventData: "edit_nickname"}, bagForKeyValue, bagForIndex)}><Text /* Text23 */ style={styles.xdw3ga} >{slide.components.Text23.ctx_map.text}</Text>
<Text style={styles.xdw3gb} numberOfLines={1}>{dwtools.priceformat(state.data.aggs.sum__benifit, slide.components.DisplayPrice1.ctx_map.format)}</Text>
<Text /* Text24 */ style={styles.xdw3gc} >{slide.components.Text24.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View5 */   viewStyle={styles.xdw3gd} onClick={getEvent('View5:onClick:func2:', {eventData: "edit_type"}, bagForKeyValue, bagForIndex)}><Text /* Text20 */ style={styles.xdw3ga} >{slide.components.Text20.ctx_map.text}</Text>
<Text /* Text19 */ style={styles.xdw3gc} >{state.data.aggs.sum__device_quantity || '0'}</Text>
<Text /* Text18 */ style={styles.xdw3gc} >{slide.components.Text18.ctx_map.text}</Text></XbenchcView></View>
<Xbenchc168611 /* DwappCloud1 */ tabs={ state.tabs } value={ state.tab } textStyle={ slide.components.DwappCloud1.ctx_map.style1 } activeTextStyle={ slide.components.DwappCloud1.ctx_map.style2 } lineStyle={ slide.components.DwappCloud1.ctx_map.style3 }  onChange={getEvent('DwappCloud1:input:func1:tab', {}, bagForKeyValue, bagForIndex)}></Xbenchc168611>
{(state.data.objects).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><XbenchcView /* View7 */   viewStyle={styles.xdw3gl} onClick={getEvent('View7:onClick:func7:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image1 */ style={styles.xdw3gf} source={dwtools.qiniu(bagForItem.data.pshop_event_uuid__toone.data.image, slide.components.Image1.ctx_map.fop)}  />
<View /* View8 */   style={styles.xdw3gk}><Text /* Text28 */ style={styles.xdw3gg} >{bagForItem.data.pshop_event_uuid__toone.data.name}</Text>
<View /* View10 */   style={styles.xdw3gi}><Text /* Text27 */ style={styles.xdw3gh} >{slide.components.Text27.ctx_map.text}</Text>
<Text style={styles.xdw3gh} numberOfLines={1}>{dwtools.priceformat(bagForItem.data.benifit, slide.components.DisplayPrice2.ctx_map.format)}</Text>
<Text /* Text29 */ style={styles.xdw3gh} >{slide.components.Text29.ctx_map.text}</Text></View>
<View /* View9 */   style={styles.xdw3gj}><Xbenchc180673 /* DwappCloud2 */ show_percent_word={ slide.components.DwappCloud2.ctx_map.bool1 } barStyle={ slide.components.DwappCloud2.ctx_map.style1 } bgStyle={ slide.components.DwappCloud2.ctx_map.style2 } textStyle={ slide.components.DwappCloud2.ctx_map.style3 } value={ bagForItem.data.device_quantity > 0 ? (bagForItem.data.active_device_quantity / bagForItem.data.device_quantity) * 100 : 0 } ></Xbenchc180673></View></View></XbenchcView></ViewForItem> })}
{!!(state.data.objects.length === 0) /* ViewIf2 */ && (<><View /* View11 */   style={styles.xdw3go}><XbenchcImage /* Image2 */ style={styles.xdw3gm} source={dwtools.qiniu(slide.components.Image2.ctx_map.src, slide.components.Image2.ctx_map.fop)}  />
<Text /* Text30 */ style={styles.xdw3gn} >{slide.components.Text30.ctx_map.text}</Text></View></>)}</View></XbenchcScrollView></>)}
    </ErrorBoundary>
  )
}
