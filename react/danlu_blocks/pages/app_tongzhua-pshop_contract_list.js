
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
  const action3 = state.items = ([])
  const action5 = state.offset = (0)
  const action4 = state.limit = (10)
  const action6 = state.reachBottom = (false)
  const action26 = state.member = (null)
  const action25 = state.service_agency = (null)
  const action42 = state.ready = (false)
  const action43 = state.RT = (false)
  return state
}

const action7 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action8 = await store.dispatch("func3", {})
  const action27 = await store.dispatch("func1", {})
  const action44 = store.commit('setState', {["state.ready"]: true})
}

const action2 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action10 = await dw.app.run("pshop_contract.list", {"limit": state.limit, "offset": state.offset, "filters": {/**/  data__service_agency_uuid: state.service_agency.uuid,/**/}, "order_by": []})
  if (state.offset === 0) {
    const action13 = store.commit('setState', {["state.items"]: action10.objects})
  } else {
    const action15 = store.commit('setState', {["state.items__uconcat"]: {field: 'id', list: action10.objects}})
  }
  if (action10.objects.length < state.limit) {
    const action18 = store.commit('setState', {["state.reachBottom"]: true})
  }
}

const action20 = actions['func3'] = async function (store, event) {
  const state = store.state
  const action21 = await dw.app.run("service_agency.get", {"get_role": true})
  
        if ((action21.status) === ("error")) {
          const action22message = (action21.message || "操作错误！")
          const action22title = ("提示")
          action22message && dw.alert(action22title, action22message)
          return {}
        }
        
  const action23 = store.commit('setState', {["state.member"]: action21.member, ["state.service_agency"]: action21.service_agency})
}

const action29 = actions['func4'] = async function (store, event) {
  const state = store.state
  const action30 = store.commit('setState', {["state.RT"]: true, ["state.reachBottom"]: false, ["state.offset"]: 0})
  const action33 = await store.dispatch("func1", {})
  const action34 = store.commit('setState', {["state.RT"]: false})
}

const action35 = actions['func5'] = async function (store, event) {
  const state = store.state
  if (state.reachBottom) {
    return event
  }
  const action39 = store.commit('setState', {["state.offset"]: state.offset + state.limit})
  const action40 = await store.dispatch("func1", {})
}

const action45 = actions['func6'] = async function (store, event) {
  const state = store.state
  let item = (event.context.eventData)
  const action47 = item
  const action52 = console.log('[func6#action52] item.data.file_path', item.data.file_path)
  if (item.data.file_path) {
    const action53 = console.log('[func6#action53] dw.filters.qiniu(item.data.file_path)', dw.filters.qiniu(item.data.file_path))
    const action46r = (dw.filters.qiniu(item.data.file_path)).startsWith('http')
          ? await dw.asPromiseNoReject(dw.wx.downloadFile, {
              ...{
    url: dw.filters.qiniu(item.data.file_path),
    showMenu: true,
    header: {}
  },
              filePath: `${dw.wx.env.USER_DATA_PATH}/${dw.filters.qiniu(item.data.file_path).split('/').slice(-1)[0]}`
            })
          : {tempFilePath: dw.filters.qiniu(item.data.file_path)}
    if (action46r && (action46r.tempFilePath || action46r.filePath)) {
          const action46r2 = await dw.asPromiseNoReject(dw.wx.openDocument, {
          filePath: action46r.tempFilePath || action46r.filePath,
          showMenu: true,
        })
      action46r.errMsg = action46r2.errMsg
    }
    const action46 = action46r
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
xdw35m: {
  fontWeight: "bold",
  lineHeight: pm(18),
  marginRight: pm(7),
},
xdw35n: {
  color: "#ffffff",
  fontSize: pm(10),
  fontWeight: "500",
  lineHeight: pm(15),
},
xdw35o: {
  height: pm(17),
  paddingLeft: pm(8),
  paddingRight: pm(8),
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#F3B34C",
},
xdw35p: {
  alignItems: "center",
  marginBottom: pm(9),
  flexDirection: "row",
},
xdw35q: {
  color: "#999999",
  width: pm(75),
  fontSize: pm(10),
  lineHeight: pm(15),
  marginRight: pm(25),
},
xdw35r: {
  color: "#999999",
  fontSize: pm(10),
  lineHeight: pm(15),
},
xdw35s: {
  marginBottom: pm(5),
  flexDirection: "row",
},
xdw35t: {
  color: "#999999",
  fontSize: pm(10),
  lineHeight: pm(15),
  paddingLeft: pm(3),
  paddingRight: pm(3),
},
xdw35u: {
  flexDirection: "row",
},
xdw35v: {
  fontSize: pm(11),
  fontWeight: "bold",
  lineHeight: pm(20),
},
xdw35w: {
  right: pm(10),
  bottom: pm(10),
  position: "absolute",
  paddingTop: pm(5),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(5),
  backgroundColor: "#FFD355",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw35x: {
  width: pm(300),
  position: "relative",
  marginTop: pm(10),
  marginLeft: pm(10),
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(7),
  borderTopRightRadius: pm(7),
  borderBottomLeftRadius: pm(7),
  borderBottomRightRadius: pm(7),
},
xdw35y: {
  width: pm(120),
  height: pm(120),
},
xdw35z: {
  color: "rgb(153, 153, 153)",
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw360: {
  flexGrow: 1,
  marginTop: pm(10),
  alignItems: "center",
  flexShrink: 0,
  marginBottom: pm(10),
  flexDirection: "column",
  justifyContent: "center",
},
xdw361: {
  fontSize: pm(12),
  marginTop: pm(10),
  textAlign: "center",
  lineHeight: pm(24),
  marginBottom: pm(10),
},
xdw362: {
  width: "100%",
  flexGrow: 1,
  overflow: "scroll",
  flexBasis: "0%",
  flexShrink: 1,
  backgroundColor: "#F8F8F8",
}
});
const slide = {"type":"176709","key":"c1767091","slug":null,"randomid":"id_5137f59d8499bde3123884a7","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text4":{"ctx_map":{"text":"硬件激励金单价"}},"Text6":{"ctx_map":{"text":"合同有效时间"}},"Text8":{"ctx_map":{"text":"签约时间"}},"Text9":{"ctx_map":{"text":"这是一个文本组件"}},"View1":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image2":{"ctx_map":{"fop":"e,300,300","src":"u/dev064/2023/04/14/eSMbTLQgkxLfNm3DdtgfJG/FtKV50QeRVyFkzNaa3ZnPGGH4zb11.png"}},"Text10":{"ctx_map":{"text":"乙方"}},"Text11":{"ctx_map":{"text":"这是一个文本组件"}},"Text12":{"ctx_map":{"text":"甲方"}},"Text13":{"ctx_map":{"text":"这是一个文本组件"}},"Text14":{"ctx_map":{"text":"订货记录"}},"Text15":{"ctx_map":{"text":"~"}},"Text16":{"ctx_map":{"text":"元/台"}},"Text17":{"ctx_map":{"text":"元/人"}},"Text18":{"ctx_map":{"text":"会员激励金单价"}},"Text19":{"ctx_map":{"text":"元/单"}},"Text20":{"ctx_map":{"text":"电商激励政策"}},"Text21":{"ctx_map":{"text":"查看合同文件"}},"Text23":{"ctx_map":{"text":"已经到底了"}},"Text24":{"ctx_map":{"text":"暂无数据"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View15":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ComNavBar1":{"ctx_map":{"theme":"default","title":"政策&合同","headerBackgroundColor":"#FFD355","statusBarBackgroundColor":"#FFD355"}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[],"refresherEnabled":true,"refresherBackground":"#F8F8F8"}},"DisplayDate1":{"ctx_map":{"value":"2022-09-10T11:22:33.444","format":"date"}},"DisplayDate2":{"ctx_map":{"value":"2022-09-10T11:22:33.444","format":"date"}},"DisplayDate3":{"ctx_map":{"value":"2022-09-10T11:22:33.444","format":"date"}},"DisplayPrice1":{"ctx_map":{"value":100,"format":"cnyint"}},"DisplayPrice2":{"ctx_map":{"value":100,"format":"cnyint"}},"DisplayPrice3":{"ctx_map":{"value":100,"format":"cnyint"}}}};

const pageGroupSlug = 'app_tongzhua-pshop_contract_list';

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
      <ComNavBar title={ "政策&合同" } theme={ "default" } statusBarBackgroundColor={ "#FFD355" } headerBackgroundColor={ "#FFD355" }></ComNavBar>
{!!(state.ready) /* ViewIf3 */ && (<><XbenchcScrollView /* ScrollView1 */ style={styles.xdw362} refresherEnabled={ true } refresherTriggered={ state.RT } refresherBackground={ "#F8F8F8" } scrollX={ false } scrollY={ true }  onRefresherRefresh={getEvent('ScrollView1:onRefresherRefresh:func4:', {}, bagForKeyValue, bagForIndex)} onScrollToLower={getEvent('ScrollView1:onScrollToLower:func5:', {}, bagForKeyValue, bagForIndex)}>{(state.items).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View1 */   style={styles.xdw35x}><View /* View9 */   style={styles.xdw35p}><Text /* Text14 */ style={styles.xdw35m} >{"合同编号：" + bagForItem.data.code }</Text>
<View /* View10 */   style={styles.xdw35o}><Text /* Text13 */ style={styles.xdw35n} >{bagForItem.data._state_display}</Text></View></View>
<View /* View8 */   style={styles.xdw35s}><Text /* Text12 */ style={styles.xdw35q} >{slide.components.Text12.ctx_map.text}</Text>
<Text /* Text11 */ style={styles.xdw35r} >{bagForItem.data.party_a}</Text></View>
<View /* View7 */   style={styles.xdw35s}><Text /* Text10 */ style={styles.xdw35q} >{slide.components.Text10.ctx_map.text}</Text>
<Text /* Text9 */ style={styles.xdw35r} >{bagForItem.data.party_b}</Text></View>
<View /* View6 */   style={styles.xdw35s}><Text /* Text8 */ style={styles.xdw35q} >{slide.components.Text8.ctx_map.text}</Text>
<Text style={styles.xdw35r} numberOfLines={1}>{dwtools.dateformat(bagForItem.data.sign_date, slide.components.DisplayDate1.ctx_map.format)}</Text></View>
<View /* View5 */   style={styles.xdw35s}><Text /* Text6 */ style={styles.xdw35q} >{slide.components.Text6.ctx_map.text}</Text>
<Text style={styles.xdw35r} numberOfLines={1}>{dwtools.dateformat(bagForItem.data.start_date, slide.components.DisplayDate2.ctx_map.format)}</Text>
<Text /* Text15 */ style={styles.xdw35t} >{slide.components.Text15.ctx_map.text}</Text>
<Text style={styles.xdw35r} numberOfLines={1}>{dwtools.dateformat(bagForItem.data.end_date, slide.components.DisplayDate3.ctx_map.format)}</Text></View>
<View /* View4 */   style={styles.xdw35s}><Text /* Text4 */ style={styles.xdw35q} >{slide.components.Text4.ctx_map.text}</Text>
<Text style={styles.xdw35r} numberOfLines={1}>{dwtools.priceformat(bagForItem.data.device_bonus, slide.components.DisplayPrice1.ctx_map.format)}</Text>
<Text /* Text16 */ style={styles.xdw35r} >{slide.components.Text16.ctx_map.text}</Text></View>
<View /* View11 */   style={styles.xdw35s}><Text /* Text18 */ style={styles.xdw35q} >{slide.components.Text18.ctx_map.text}</Text>
<Text style={styles.xdw35r} numberOfLines={1}>{dwtools.priceformat(bagForItem.data.member_bonus, slide.components.DisplayPrice2.ctx_map.format)}</Text>
<Text /* Text17 */ style={styles.xdw35r} >{slide.components.Text17.ctx_map.text}</Text></View>
<View /* View12 */   style={styles.xdw35u}><Text /* Text20 */ style={styles.xdw35q} >{slide.components.Text20.ctx_map.text}</Text>
<Text style={styles.xdw35r} numberOfLines={1}>{dwtools.priceformat(bagForItem.data.eb_bonus, slide.components.DisplayPrice3.ctx_map.format)}</Text>
<Text /* Text19 */ style={styles.xdw35r} >{slide.components.Text19.ctx_map.text}</Text></View>
<XbenchcView /* View13 */   viewStyle={styles.xdw35w} onClick={getEvent('View13:onClick:func6:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><Text /* Text21 */ style={styles.xdw35v} >{slide.components.Text21.ctx_map.text}</Text></XbenchcView></View></ViewForItem> })}
{!!(!state.items.length) /* ViewIf1 */ && (<><View /* View15 */   style={styles.xdw360}><XbenchcImage /* Image2 */ style={styles.xdw35y} source={dwtools.qiniu(slide.components.Image2.ctx_map.src, slide.components.Image2.ctx_map.fop)}  />
<Text /* Text24 */ style={styles.xdw35z} >{slide.components.Text24.ctx_map.text}</Text></View></>)}
{!!(state.reachBottom && state.items.length > 0) /* ViewIf2 */ && (<><Text /* Text23 */ style={styles.xdw361} >{slide.components.Text23.ctx_map.text}</Text></>)}</XbenchcScrollView></>)}
    </ErrorBoundary>
  )
}
