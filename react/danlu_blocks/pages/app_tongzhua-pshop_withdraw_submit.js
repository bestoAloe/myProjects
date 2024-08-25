
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import ComNavBar from '../../xbench/components/ComNavBar'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcInput from '../../xbench/xbenchc/components/XbenchcInput'

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
  const action2 = state.siteuser = (null)
  const action10 = state.member = (null)
  const action22 = state.settings = (null)
  const action30 = state.debug = (false)
  const action58 = state.ready = (false)
  const action61 = state.formData = ({/**/  amount: 0,/**/  remark: '',/**/})
  const action79 = state.summary = ({})
  const action102 = state.service_agency = (null)
  const action112 = state.levels = ([])
  const action124 = state.nexInfo = (null)
  return state
}

const action4 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action46 = await store.dispatch("func5", {})
}

const action45 = actions['func5'] = async function (store, event) {
  const state = store.state
  const action101 = await store.dispatch("func2", {})
  const action113 = await store.dispatch("func3", {})
  const action59 = store.commit('setState', {["state.ready"]: true})
}

const action96 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action97 = await dw.app.run("service_agency.get", {})
  
        if ((action97.status) === ("error")) {
          const action98message = (action97.message || "操作错误！")
          const action98title = ("提示")
          action98message && dw.alert(action98title, action98message)
          return {}
        }
        
  const action99 = store.commit('setState', {["state.member"]: action97.member, ["state.service_agency"]: action97.service_agency})
}

const action38 = actions['func4'] = async function (store, event) {
  const state = store.state
  let amount = (Number(state.formData.amount))
  const action106 = amount
  const action107 = console.log('[func4#action107] 打印(amount)的返回值', amount)
  
        if (!!(isNaN(amount)) === (true)) {
          const action85message = ("输入的金额有误")
          const action85title = ("提示")
          action85message && dw.alert(action85title, action85message)
          return null
        }
        
  
        if (!!(amount <= 0) === (true)) {
          const action84message = ("输入的金额不正确")
          const action84title = ("提示")
          action84message && dw.alert(action84title, action84message)
          return null
        }
        
  const action69 = await dw.app.run("withdraw.submit", {"amount": amount, "remark": state.formData.remark || undefined})
  
        if ((action69.status) === ("error")) {
          const action70message = (action69.message)
          const action70title = ("提示")
          action70message && dw.alert(action70title, action70message)
          return null
        }
        
  const action48response = await dw.showModal({
        title: "提示",
        content: "申请成功, 请等待平台处理",
        confirmText: "确认",
        confirmColor: "#576b95",
        showCancel: false,
        cancelText: "取消",
        cancelColor: "#000000"
      })
  const action48 = action48response && action48response.confirm
}

const action94 = actions['func8'] = function (store, event) {
  const state = store.state
  const action95 = dw.app.goToPappUrl("pshop_withdraw_history", {}, {redirectTo: false})
}

const action103 = actions['func9'] = function (store, event) {
  const state = store.state
  let key = (event.context.eventData)
  const action105 = key
  const action104 = store.commit('setState', {[`state.formData.${key}`]: event.data.detail.value})
}

const action109 = actions['func3'] = async function (store, event) {
  const state = store.state
  const action110 = await dw.app.run("auto_group_pshop_level.list", {"aggs": {}, "limit": 1000, "offset": 0, "filters": {}, "order_by": []})
  let levels = (action110.objects)
  const action121 = levels
  const action111 = store.commit('setState', {["state.levels"]: levels})
  let level = (state.service_agency.data.level)
  const action115 = level
  let next_level = (levels.find(x=>x.data.level === level + 1))
  const action116 = next_level
  if (next_level) {
    const action119 = console.log('[func3#action119] next_level.data.threshold', next_level.data.threshold)
    let base_money = (Math.round(state.service_agency.data.balance * 100 / state.service_agency.data.pshop_rate))
    const action123 = base_money
    const action125 = store.commit('setState', {["state.nexInfo"]: {/**/  level: next_level.data.level,/**/  pshop_rate: next_level.data.pshop_rate,/**/  balance: (Math.round(base_money * next_level.data.pshop_rate / 100) / 100).toFixed(2),/**/}})
  }
}

const action126 = actions['func10'] = function (store, event) {
  const state = store.state
  const action127 = dw.app.goToPappUrl("pshop_item", {}, {redirectTo: false})
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
xdw3bm: {
  width: pm(320),
  height: pm(150),
  flexDirection: "column",
  backgroundColor: "#FFD355",
},
xdw3bn: {
  color: "rgba(51, 51, 51, 0.8)",
  fontSize: pm(10),
  lineHeight: pm(15),
},
xdw3bo: {
  color: "#000",
  fontSize: pm(16),
  fontWeight: "600",
  lineHeight: pm(30),
},
xdw3bp: {
  width: "25%",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw3bq: {
  fontSize: pm(16),
  fontWeight: "600",
  lineHeight: pm(30),
},
xdw3br: {
  width: pm(300),
  position: "relative",
  flexDirection: "row",
},
xdw3bs: {
  color: "#949494",
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw3bt: {
  width: "100%",
  position: "relative",
  alignItems: "flex-start",
  flexDirection: "row",
  justifyContent: "center",
},
xdw3bu: {
  width: pm(300),
  position: "relative",
  marginTop: pm(-60),
  alignItems: "center",
  marginLeft: pm(10),
  paddingTop: pm(15),
  marginRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(15),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(5),
  borderTopRightRadius: pm(5),
  borderBottomLeftRadius: pm(5),
  borderBottomRightRadius: pm(5),
},
xdw3bv: {
  fontSize: pm(12),
  fontWeight: "bold",
  lineHeight: pm(24),
},
xdw3bw: {
  fontSize: pm(12),
  lineHeight: pm(24),
  marginRight: pm(10),
},
xdw3bx: {
  width: pm(260),
  height: pm(32),
  fontSize: pm(20),
  borderTopWidth: pm(0),
  borderTopColor: "#ddd",
  borderLeftWidth: pm(0),
  borderLeftColor: "#ddd",
  paddingTop: pm(4),
  borderRightWidth: pm(0),
  borderRightColor: "#ddd",
  paddingLeft: pm(4),
  borderBottomWidth: pm(0),
  borderBottomColor: "#ddd",
  paddingRight: pm(4),
  paddingBottom: pm(4),
},
xdw3by: {
  marginTop: pm(10),
  alignItems: "center",
  flexDirection: "row",
},
xdw3bz: {
  width: pm(280),
  height: pm(1),
  flexDirection: "column",
  backgroundColor: "#f8f8f8",
},
xdw3c0: {
  width: pm(300),
  marginTop: pm(10),
  alignItems: "flex-start",
  marginLeft: pm(10),
  paddingTop: pm(10),
  marginRight: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(5),
  borderTopRightRadius: pm(5),
  borderBottomLeftRadius: pm(5),
  borderBottomRightRadius: pm(5),
},
xdw3c1: {
  color: "#666666",
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw3c2: {
  width: pm(220),
  height: pm(32),
  fontSize: pm(12),
  borderTopWidth: pm(0),
  borderTopColor: "#ddd",
  textAlign: "right",
  borderLeftWidth: pm(0),
  borderLeftColor: "#ddd",
  marginLeft: "auto",
  paddingTop: pm(4),
  borderRightWidth: pm(0),
  borderRightColor: "#ddd",
  paddingLeft: pm(4),
  borderBottomWidth: pm(0),
  borderBottomColor: "#ddd",
  paddingRight: pm(4),
  paddingBottom: pm(4),
},
xdw3c3: {
  width: pm(300),
  marginTop: pm(10),
  alignItems: "center",
  marginLeft: pm(10),
  paddingTop: pm(10),
  marginRight: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(5),
  borderTopRightRadius: pm(5),
  borderBottomLeftRadius: pm(5),
  borderBottomRightRadius: pm(5),
},
xdw3c4: {
  color: "#666666",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw3c5: {
  width: pm(130),
  bottom: pm(10),
  height: pm(38),
  alignItems: "center",
  marginRight: pm(10),
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw3c6: {
  color: "#181818",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw3c7: {
  width: pm(130),
  bottom: pm(10),
  height: pm(38),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#FFD355",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw3c8: {
  width: pm(320),
  marginTop: pm(20),
  flexDirection: "row",
  justifyContent: "center",
},
xdw3c9: {
  color: "#949494",
  fontSize: pm(12),
  lineHeight: pm(18),
},
xdw3ca: {
  width: "100%",
  flexWrap: "wrap",
  position: "relative",
  marginTop: pm(20),
  alignItems: "flex-start",
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  justifyContent: "flex-start",
},
xdw3cb: {
  flexGrow: 1,
  flexDirection: "column",
  backgroundColor: "#f8f8f8",
}
});
const slide = {"type":"177360","key":"c1773601","slug":null,"randomid":"id_9ca096cfc1006bcad79dcbcb","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":"待分润池(元)"}},"Text6":{"ctx_map":{"text":"提现金额"}},"Text7":{"ctx_map":{"text":"￥"}},"Text8":{"ctx_map":{"text":"申请说明"}},"Text9":{"ctx_map":{"text":"提现记录"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Text10":{"ctx_map":{"text":"申请提现"}},"Text13":{"ctx_map":{"text":"累计分润池(元)"}},"Text14":{"ctx_map":{"text":"查看分润激励金明细"}},"Text15":{"ctx_map":{"text":"分润等级"}},"Text16":{"ctx_map":{"text":"这是一个文本组件"}},"Text17":{"ctx_map":{"text":"这是一个文本组件"}},"Text18":{"ctx_map":{"text":"分润比例"}},"Text19":{"ctx_map":{"text":"下一分润等级"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"View20":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ComNavBar1":{"ctx_map":{"theme":"default","title":"申请提现","headerBackgroundColor":"#FFD355","statusBarBackgroundColor":"#FFD355"}},"NativeInput1":{"ctx_map":{"type":"number"}},"NativeInput2":{"ctx_map":{"type":"text","placeholder":"请输入申请说明"}},"DisplayPrice1":{"ctx_map":{"value":100,"format":"int"}},"DisplayPrice4":{"ctx_map":{"value":100,"format":"int"}}}};

const pageGroupSlug = 'app_tongzhua-pshop_withdraw_submit';

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
      {!!(state.ready) /* ViewIf1 */ && (<><View /* View3 */   style={styles.xdw3cb}><View /* View1 */   style={styles.xdw3bm}><ComNavBar title={ "申请提现" } theme={ "default" } statusBarBackgroundColor={ "#FFD355" } headerBackgroundColor={ "#FFD355" }></ComNavBar></View>
<View /* View2 */   style={styles.xdw3bu}><View /* View17 */   style={styles.xdw3br}><View /* View12 */   style={styles.xdw3bp}><Text /* Text1 */ style={styles.xdw3bn} >{slide.components.Text1.ctx_map.text}</Text>
<Text style={styles.xdw3bo} numberOfLines={1}>{dwtools.priceformat(state.service_agency.data.balance, slide.components.DisplayPrice1.ctx_map.format)}</Text></View>
<View /* View13 */   style={styles.xdw3bp}><Text /* Text13 */ style={styles.xdw3bn} >{slide.components.Text13.ctx_map.text}</Text>
<Text style={styles.xdw3bo} numberOfLines={1}>{dwtools.priceformat(state.service_agency.data.history_balance, slide.components.DisplayPrice4.ctx_map.format)}</Text></View>
<View /* View18 */   style={styles.xdw3bp}><Text /* Text15 */ style={styles.xdw3bn} >{slide.components.Text15.ctx_map.text}</Text>
<Text /* Text16 */ style={styles.xdw3bq} >{state.service_agency.data.level + "级"}</Text></View>
<View /* View19 */   style={styles.xdw3bp}><Text /* Text18 */ style={styles.xdw3bn} >{slide.components.Text18.ctx_map.text}</Text>
<Text /* Text17 */ style={styles.xdw3bq} >{state.service_agency.data.pshop_rate + "%"}</Text></View></View>
<View /* View16 */   style={styles.xdw3bt}><Text /* Text14 */ style={styles.xdw3bs} >{slide.components.Text14.ctx_map.text}</Text></View></View>
<View /* View5 */   style={styles.xdw3c0}><Text /* Text6 */ style={styles.xdw3bv} >{slide.components.Text6.ctx_map.text}</Text>
<View /* View6 */   style={styles.xdw3by}><Text /* Text7 */ style={styles.xdw3bw} >{slide.components.Text7.ctx_map.text}</Text>
<XbenchcInput /* NativeInput1 */ style={styles.xdw3bx} value={state.formData.amount} type={slide.components.NativeInput1.ctx_map.type}  onChange={getEvent('NativeInput1:onChange:func9:', {eventData: "amount"}, bagForKeyValue, bagForIndex)} /></View>
<View /* View7 */   style={styles.xdw3bz}></View></View>
<View /* View8 */   style={styles.xdw3c3}><Text /* Text8 */ style={styles.xdw3c1} >{slide.components.Text8.ctx_map.text}</Text>
<XbenchcInput /* NativeInput2 */ style={styles.xdw3c2} value={state.formData.remark} placeholder={slide.components.NativeInput2.ctx_map.placeholder} type={slide.components.NativeInput2.ctx_map.type}  onChange={getEvent('NativeInput2:onChange:func9:', {eventData: "remark"}, bagForKeyValue, bagForIndex)} /></View>
<View /* View9 */   style={styles.xdw3c8}><XbenchcView /* View10 */   viewStyle={styles.xdw3c5} onClick={getEvent('View10:onClick:func8:', {}, bagForKeyValue, bagForIndex)}><Text /* Text9 */ style={styles.xdw3c4} >{slide.components.Text9.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View11 */   viewStyle={styles.xdw3c7} onClick={getEvent('View11:onClick:func4:', {}, bagForKeyValue, bagForIndex)}><Text /* Text10 */ style={styles.xdw3c6} >{slide.components.Text10.ctx_map.text}</Text></XbenchcView></View>
{!!(state.nexInfo) /* ViewIf2 */ && (<><View /* View20 */   style={styles.xdw3ca}><Text /* Text19 */ style={styles.xdw3c9} >{"下一分润等级: " + state.nexInfo.level + "级, " + "分润比例: " + state.nexInfo.pshop_rate + "%, " + "可分润金额将转化为: " + state.nexInfo.balance + "元"}</Text></View></>)}</View></>)}
    </ErrorBoundary>
  )
}
