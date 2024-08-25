
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import XbenchcInput from '../../xbench/xbenchc/components/XbenchcInput'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

let action12remove = false
let action12lock = false
let action12storeLock = false
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action2 = state.mobile = ('')
  const action3 = state.code = ('')
  const action13 = state.seconds = (0)
  const action36 = state.member = (null)
  const action37 = state.service_agency = (null)
  return state
}

const action38 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action39 = await store.dispatch("func6", {})
}

const action4 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action7 = (() => {
    if (!(v => v && typeof v === 'string' && /^1\d{10}$/.test(v))(state.mobile)) return "请填写正确的手机号！" // mobile
  })()
  if (action7) return dw.alert("提示" || '提示', action7)
  const action5 = (await dw.fetch("post/psiteuser/send_token", {"mobile": state.mobile})).data
  
        if ((action5.status) === ("error")) {
          const action8message = (action5.message || "操作错误！")
          const action8title = ("提示")
          action8message && dw.alert(action8title, action8message)
          return {}
        }
        
  const action9 = await dw.showToast({"icon": "success", "mask": false, "image": "", "title": "发送成功", "duration": 1500, "content": "发送成功"})
  const action14 = store.commit('setState', {["state.seconds"]: 60})
  const action21 = await store.dispatch("func2", {})
}

const action10 = actions['func2'] = async function (store, event) {
  const state = store.state
  
      if (!action12lock) {
        // console.log('action12定期执行：初始化')
        action12lock = true
        const action12func = async () => {
          // console.log('action12定期执行：开始执行')
          if (action12remove) return
          const stop = await (async () => {
    if (state.seconds > 0) {
      const action15 = store.commit('setState', {["state.seconds"]: state.seconds - 1})
    } else {
      return true
    }
  
          })()
          if (!stop) setTimeout(() => action12func(), 1000)
        }
        action12func()
      }
      if (!action12storeLock) {
        action12storeLock = true
        store.$store.subscribeAction({
          enter: (action, state) => {
            // console.log('enter', action, state)
            if (['onShow', 'created'].includes(action.type)) {
              // console.log('action12定期执行：onShow 重新开始')
              action12remove = false
              action12lock = false
            }
            if (['onHide', 'onUnload', 'beforeDestroy'].includes(action.type)) {
              // console.log('action12定期执行：onHide 停止执行')
              action12remove = true
              action12lock = false
            }
          }
        })
      }
      const action12 = undefined
      
}

const action22 = actions['func3'] = function (store, event) {
  const state = store.state
  const action24 = store.commit('setState', {["state.mobile"]: event.data.detail.value})
}

const action23 = actions['func4'] = function (store, event) {
  const state = store.state
  const action25 = store.commit('setState', {["state.code"]: event.data.detail.value})
}

const action26 = actions['func5'] = async function (store, event) {
  const state = store.state
  
          const action27 = await dw.fetch('post/verification_code/verify_code', {
            mobile: state.mobile,
            verification: state.code
          })
          
  
        if ((action27.data.status) === ("error")) {
          const action29message = (action27.message || "操作错误！")
          const action29title = ("提示")
          action29message && dw.alert(action29title, action29message)
          return {}
        }
        
  const action30 = await dw.app.run("service_agency.bind_staff", {"mobile": state.mobile, "service_agency_uuid": state.service_agency.uuid})
  
        if ((action30.status) === ("error")) {
          const action40message = (action30.message || "操作错误！")
          const action40title = ("提示")
          action40message && dw.alert(action40title, action40message)
          return {}
        }
        
  const action41 = await dw.showToast({"icon": "success", "mask": false, "image": "", "title": "添加成功", "duration": 1500, "content": "添加成功"})
  await new Promise((resolve, reject) => setTimeout(resolve, 300))
  const action43 = await dw.navigateBack({delta: 1})
}

const action31 = actions['func6'] = async function (store, event) {
  const state = store.state
  const action32 = await dw.app.run("service_agency.get", {})
  
        if ((action32.status) === ("error")) {
          const action33message = (action32.message || "操作错误！")
          const action33title = ("提示")
          action33message && dw.alert(action33title, action33message)
          return {}
        }
        
  const action34 = store.commit('setState', {["state.member"]: action32.member, ["state.service_agency"]: action32.service_agency})
}

const action44 = actions['func7'] = async function (store, event) {
  const state = store.state
  const action45 = await dw.navigateBack({delta: 1})
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
xdw31a: {
  color: "#181818",
  fontSize: pm(20),
  lineHeight: pm(28),
},
xdw31b: {
  color: "#AAAAAA",
  fontSize: pm(10),
  marginTop: pm(7),
  lineHeight: pm(15),
  marginBottom: pm(24),
},
xdw31c: {
  width: "100%",
  height: pm(32),
  fontSize: pm(12),
  borderTopWidth: pm(0),
  borderTopColor: "#ddd",
  marginTop: pm(10),
  borderLeftWidth: pm(0),
  borderLeftColor: "#ddd",
  paddingTop: pm(4),
  borderRightWidth: pm(0),
  borderRightColor: "#ddd",
  paddingLeft: pm(4),
  borderBottomWidth: pm(0),
  borderBottomColor: "#E8E8E8",
  marginBottom: pm(10),
  paddingRight: pm(4),
  paddingBottom: pm(4),
},
xdw31d: {
  width: pm(268),
  height: pm(1),
  flexDirection: "column",
  backgroundColor: "#E8E8E8",
},
xdw31e: {
  width: pm(180),
  height: pm(32),
  fontSize: pm(12),
  borderTopWidth: pm(0),
  borderTopColor: "#ddd",
  borderLeftWidth: pm(0),
  borderLeftColor: "#ddd",
  paddingTop: pm(4),
  borderRightWidth: pm(0),
  borderRightColor: "#ddd",
  paddingLeft: pm(4),
  borderBottomWidth: pm(0),
  borderBottomColor: "#E8E8E8",
  paddingRight: pm(4),
  flexDirection: "row",
  paddingBottom: pm(4),
},
xdw31f: {
  fontSize: pm(12),
  lineHeight: pm(24),
  marginLeft: "auto",
},
xdw31g: {
  marginLeft: "auto",
  flexDirection: "column",
},
xdw31h: {
  color: "#CCCCCC",
  fontSize: pm(12),
  lineHeight: pm(24),
  marginLeft: "auto",
},
xdw31i: {
  marginTop: pm(10),
  alignItems: "center",
  marginBottom: pm(10),
  flexDirection: "row",
},
xdw31j: {
  flexDirection: "column",
},
xdw31k: {
  color: "#181818",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw31l: {
  width: pm(213),
  height: pm(38),
  marginTop: pm(43),
  alignItems: "center",
  marginLeft: "auto",
  marginRight: "auto",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#FFD355",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw31m: {
  width: pm(213),
  height: pm(38),
  marginTop: pm(10),
  alignItems: "center",
  marginLeft: "auto",
  marginRight: "auto",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#ededed",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw31n: {
  paddingTop: pm(60),
  paddingLeft: pm(26),
  paddingRight: pm(26),
  flexDirection: "column",
}
});
const slide = {"type":"176705","key":"c1767051","slug":null,"randomid":"id_db69bf1f72abd7412d1fafe5","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":"添加员工"}},"Text2":{"ctx_map":{"text":"获取验证码"}},"Text3":{"ctx_map":{"text":"确认添加"}},"Text4":{"ctx_map":{"text":"未注册的手机号将自动创建铜爪账户"}},"Text5":{"ctx_map":{"text":"获取验证码"}},"Text6":{"ctx_map":{"text":"返回上一页"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"NativeInput1":{"ctx_map":{"type":"number","placeholder":"请输入手机号"}},"NativeInput2":{"ctx_map":{"type":"text","placeholder":"请输入验证码"}}}};

const pageGroupSlug = 'app_tongzhua-pshop_create_staff';

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
      <View /* View1 */   style={styles.xdw31n}><Text /* Text1 */ style={styles.xdw31a} >{slide.components.Text1.ctx_map.text}</Text>
<Text /* Text4 */ style={styles.xdw31b} >{slide.components.Text4.ctx_map.text}</Text>
<View /* View2 */   style={styles.xdw31j}><XbenchcInput /* NativeInput1 */ style={styles.xdw31c} value={state.mobile} placeholder={slide.components.NativeInput1.ctx_map.placeholder} type={slide.components.NativeInput1.ctx_map.type}  onChange={getEvent('NativeInput1:onChange:func3:', {}, bagForKeyValue, bagForIndex)} />
<View /* View3 */   style={styles.xdw31d}></View>
<View /* View5 */   style={styles.xdw31i}><XbenchcInput /* NativeInput2 */ style={styles.xdw31e} value={state.code} placeholder={slide.components.NativeInput2.ctx_map.placeholder} type={slide.components.NativeInput2.ctx_map.type}  onChange={getEvent('NativeInput2:onChange:func4:', {}, bagForKeyValue, bagForIndex)} />
{!!(state.seconds <= 0) /* ViewIf1 */ && (<><XbenchcView /* View7 */   viewStyle={styles.xdw31g} onClick={getEvent('View7:onClick:func1:', {}, bagForKeyValue, bagForIndex)}><Text /* Text2 */ style={styles.xdw31f} >{slide.components.Text2.ctx_map.text}</Text></XbenchcView></>)}
{!!(state.seconds > 0) /* ViewIf2 */ && (<><View /* View8 */   style={styles.xdw31g}><Text /* Text5 */ style={styles.xdw31h} >{state.seconds + "s后重新发送"}</Text></View></>)}</View>
<View /* View4 */   style={styles.xdw31d}></View></View>
<XbenchcView /* View6 */   viewStyle={styles.xdw31l} onClick={getEvent('View6:onClick:func5:', {}, bagForKeyValue, bagForIndex)}><Text /* Text3 */ style={styles.xdw31k} >{slide.components.Text3.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View9 */   viewStyle={styles.xdw31m} onClick={getEvent('View9:onClick:func7:', {}, bagForKeyValue, bagForIndex)}><Text /* Text6 */ style={styles.xdw31k} >{slide.components.Text6.ctx_map.text}</Text></XbenchcView></View>
    </ErrorBoundary>
  )
}
