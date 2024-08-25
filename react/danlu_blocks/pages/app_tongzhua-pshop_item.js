
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

let langMaps = ({/**/  cn: {/**/    'balance': '余额(元)',/**/    'withdrawal_amount': '提现金额',/**/    'withdrawal_method': '提现方式：${value1}',/**/    'alipay_account': '支付宝账号',/**/    'alipay_name': '支付宝名称',/**/    'account_name': '户 名',/**/    'card_number': '卡 号',/**/    'account_bank': '开户行',/**/    'apply_explain': '申请说明',/**/    'input': '请输入',/**/    'withdraw_record': '提现记录',/**/    'apply_withdrawal': '申请提现',/**/    'load_fail': '加载错误！',/**/    'tip1': `提现金额不能大于可提现余额`,/**/    'tip2': `请填写支付宝账号和名称`,/**/    'tip3': `请填写开户行户号银行卡`,/**/    'tip': '提示',/**/    'yes': '确定',/**/    'cancel': '取消',/**/    'submit_success': "申请提交成功",/**/  },/**/  en: {/**/    'balance': 'Balance',/**/    'withdrawal_amount': 'Withdrawal amount',/**/    'withdrawal_method': 'Withdrawal method：${value1}',/**/    'alipay_account': 'Alipay account',/**/    'alipay_name': 'Alipay name',/**/    'account_name': 'Account name',/**/    'card_number': 'Card number',/**/    'account_bank': 'Account bank',/**/    'apply_explain': 'Apply explain',/**/    'input': 'Please enter',/**/    'withdraw_record': 'Withdraw record',/**/    'apply_withdrawal': 'Apply withdrawal',/**/    'load_fail': 'Load fail',/**/    'tip1': `The withdrawal amount should be less than the withdrawal balance`,/**/    'tip2': `Please enter the account number and name of alipay`,/**/    'tip3': `Please enter the bank account number and bank card`,/**/    'tip': 'Tip',/**/    'yes': 'True',/**/    'cancel': 'Cancel',/**/    'submit_success': "Submit success",/**/  },/**/})
const action89 = langMaps
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
  const action126 = state.limit = (10)
  const action127 = state.offset = (0)
  const action128 = state.reach_bottom = (false)
  const action129 = state.items = ([])
  return state
}

const action4 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action46 = await store.dispatch("func5", {})
}

const action45 = actions['func5'] = async function (store, event) {
  const state = store.state
  const action101 = await store.dispatch("func2", {})
  const action130 = await store.dispatch("func6", {})
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

const action103 = actions['func6'] = async function (store, event) {
  const state = store.state
  const action104 = await dw.app.run("pshop_item.list", {"limit": state.limit, "offset": state.offset, "filters": {/**/  data__service_agency_uuid: state.service_agency.uuid/**/}, "order_by": []})
  if (state.offset === 0) {
    const action119 = store.commit('setState', {["state.items"]: action104.objects})
  } else {
    const action121 = store.commit('setState', {["state.items__uconcat"]: {field: 'id', list: action104.objects}})
  }
  if (action104.objects.length < state.limit) {
    const action124 = store.commit('setState', {["state.reach_bottom"]: true})
  }
}

const action106 = actions['func4'] = async function (store, event) {
  const state = store.state
  const action107 = store.commit('setState', {["state.offset"]: 0, ["state.reach_bottom"]: false})
  const action109 = await store.dispatch("func6", {})
}

const action110 = actions['func7'] = async function (store, event) {
  const state = store.state
  if (state.reach_bottom) {
    return event
  }
  const action114 = store.commit('setState', {["state.offset"]: state.offset + state.limit})
  const action115 = await store.dispatch("func6", {})
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
xdw3ap: {
  width: pm(320),
  height: pm(150),
  flexDirection: "column",
  backgroundColor: "#FFD355",
},
xdw3aq: {
  fontSize: pm(12),
  marginTop: pm(10),
  fontWeight: "bold",
  lineHeight: pm(24),
  paddingLeft: pm(10),
  paddingRight: pm(10),
},
xdw3ar: {
  width: pm(280),
  height: pm(1),
  marginTop: pm(5),
  marginLeft: pm(10),
  marginBottom: pm(5),
  flexDirection: "column",
  backgroundColor: "#eeeeee",
},
xdw3as: {
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw3at: {
  width: pm(220),
  flexDirection: "column",
},
xdw3au: {
  color: "#000",
  width: pm(60),
  fontSize: pm(12),
  textAlign: "right",
  lineHeight: pm(24),
},
xdw3av: {
  flexDirection: "row",
},
xdw3aw: {
  color: "#666666",
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw3ax: {
  width: pm(280),
  height: pm(1),
  marginTop: pm(5),
  marginBottom: pm(5),
  flexDirection: "column",
  backgroundColor: "#eeeeee",
},
xdw3ay: {
  width: pm(146),
  height: pm(93),
},
xdw3b0: {
  color: "#AAAAAA",
  fontSize: pm(12),
  marginTop: pm(17),
  lineHeight: pm(17),
},
xdw3b1: {
  marginTop: pm(20),
  alignItems: "center",
  marginBottom: pm(20),
  flexDirection: "column",
},
xdw3b2: {
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
},
xdw3b3: {
  width: "100%",
  flexGrow: 1,
  overflow: "scroll",
  flexBasis: "0%",
  flexShrink: 1,
},
xdw3b4: {
  width: pm(300),
  position: "relative",
  marginTop: pm(-60),
  alignItems: "flex-start",
  marginLeft: pm(10),
  marginRight: pm(10),
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(5),
  borderTopRightRadius: pm(5),
  borderBottomLeftRadius: pm(5),
  borderBottomRightRadius: pm(5),
},
xdw3b5: {
  flexGrow: 1,
  flexDirection: "column",
  backgroundColor: "#f8f8f8",
}
});
const slide = {"type":"177520","key":"c1775201","slug":null,"randomid":"id_8eb1c05c2de97609ceeef6ca","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":"这是一个文本组件"}},"Text2":{"ctx_map":{"text":"分润流水"}},"Text3":{"ctx_map":{"text":"暂无任何数据~"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,1460,930","src":"u/dev065/2023/03/02/sjdPJMDYXdSxcFkXNX7KvX/JIKUVAZX81K8VLRAWUC.png","buildToLocal":true}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ComNavBar1":{"ctx_map":{"theme":"default","title":"分润明细","headerBackgroundColor":"#FFD355","statusBarBackgroundColor":"#FFD355"}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[]}},"DisplayDate1":{"ctx_map":{"value":"2022-09-10T11:22:33.444","format":"datetime"}},"DisplayPrice1":{"ctx_map":{"value":100,"format":"cnyint"}}}};

const pageGroupSlug = 'app_tongzhua-pshop_item';

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
      {!!(state.ready) /* ViewIf1 */ && (<><View /* View3 */   style={styles.xdw3b5}><View /* View1 */   style={styles.xdw3ap}><ComNavBar title={ "分润明细" } theme={ "default" } statusBarBackgroundColor={ "#FFD355" } headerBackgroundColor={ "#FFD355" }></ComNavBar></View>
<View /* View2 */   style={styles.xdw3b4}><Text /* Text2 */ style={styles.xdw3aq} >{slide.components.Text2.ctx_map.text}</Text>
<View /* View5 */   style={styles.xdw3ar}></View>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw3b3} scrollX={ false } scrollY={ true }  onRefresherRefresh={getEvent('ScrollView1:onRefresherRefresh:func4:', {}, bagForKeyValue, bagForIndex)} onScrollToLower={getEvent('ScrollView1:onScrollToLower:func7:', {}, bagForKeyValue, bagForIndex)}><View /* View4 */   style={styles.xdw3b2}>{(state.items).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View6 */   style={styles.xdw3av}><View /* View7 */   style={styles.xdw3at}><Text /* Text1 */ style={styles.xdw3as} >{bagForItem.data.remark}</Text></View>
<Text style={styles.xdw3au} numberOfLines={1}>{dwtools.priceformat(bagForItem.data.amount, slide.components.DisplayPrice1.ctx_map.format)}</Text></View>
<Text style={styles.xdw3aw} numberOfLines={1}>{dwtools.dateformat(bagForItem.created, slide.components.DisplayDate1.ctx_map.format)}</Text>
{!!(bagForIndex !== (state.items.length - 1)) /* ViewIf2 */ && (<><View /* View8 */   style={styles.xdw3ax}></View></>)}</ViewForItem> })}
{!!(!state.items.length) /* ViewIf4 */ && (<><View /* View9 */   style={styles.xdw3b1}><XbenchcImage /* Image1 */ style={styles.xdw3ay} source={dwtools.getLocalResource('xdw3az_lthar3gs')}  />
<Text /* Text3 */ style={styles.xdw3b0} >{slide.components.Text3.ctx_map.text}</Text></View></>)}</View></XbenchcScrollView></View></View></>)}
    </ErrorBoundary>
  )
}
