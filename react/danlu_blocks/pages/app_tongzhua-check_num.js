
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import ComNavBar from '../../xbench/components/ComNavBar'
import { Image } from 'expo-image'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcPicker from '../../xbench/xbenchc/components/XbenchcPicker'
import XbenchcInput from '../../xbench/xbenchc/components/XbenchcInput'
import Xbenchc275104 from '../components/Xbenchc275104'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

let action21lock = false
let action43remove = false
let action43lock = false
let action43storeLock = false
let modalInstance = (null)
const action56 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action3 = state.ranges = ([/**/  {/**/    label: "+86",/**/    value: "+86"/**/  },/**/  {/**/    label: "+00",/**/    value: "+00"/**/  }/**/])
  const action4 = state.range = ("+86")
  const action6 = state.username = ("")
  const action7 = state.code = ("")
  const action17 = state.focus_input = (null)
  const action31 = state.timeout = (60)
  const action32 = state.sending = (false)
  const action33 = state.platform = (dw.platform)
  return state
}

const action50 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action52 = await store.dispatch("func11", {})
}

const action9 = actions['func15'] = function (store, event) {
  const state = store.state
  const action10 = console.log('[func15#action10] event', event)
  const action11 = store.commit('setState', {["state.username"]: event.data.detail.value})
}

const action12 = actions['func16'] = function (store, event) {
  const state = store.state
  const action13 = console.log('[func16#action13] event', event)
  const action14 = store.commit('setState', {["state.code"]: event.data.detail.value})
}

const action57 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action58 = modalInstance = (event.data)
  const action59 = console.log('[getModalInstance#action59] 打印(modalInstance)', modalInstance)
}

const action18 = actions['func21'] = function (store, event) {
  const state = store.state
  const action19 = store.commit('setState', {["state.focus_input"]: event.context.eventData})
}

const action20 = actions['func12'] = async function (store, event) {
  const state = store.state
  const action21 = await (async () => {
  
      if (action21lock) return true
      action21lock = true
      try {
    
        dw.showLoading({
          title: "",
          mask: true
        })
        let action22
        try {
          action22 = await (async () => {
        
      
        if (!!(state.sending) === (true)) {
          const action23message = ("")
          const action23title = ("提示")
          action23message && dw.alert(action23title, action23message)
          return {}
        }
        
      
        if (!!(!(state.username && /^\d{11}$/.test(state.username))) === (true)) {
          const action24message = ("请输入11位手机号")
          const action24title = ("提示")
          action24message && dw.alert(action24title, action24message)
          return {}
        }
        
      
          const action25 = await dw.fetch('post/verification_code/send_verify_code', { mobile: state.username })
          
      
        if ((action25.status) === ("error")) {
          const action26message = (action25.message || "验证码发送错误")
          const action26title = ("提示")
          action26message && dw.alert(action26title, action26message)
          return {}
        }
        
      let message = ("发送成功")
      const action61 = message
      const action62 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
      const action28 = store.commit('setState', {["state.timeout"]: 60, ["state.sending"]: true})
    
          })()
        } finally {
          dw.hideLoading()
        }
        
  
      } catch (e) {
        throw e
      } finally {
        action21lock = false
      }
      
  })()
}

const action34 = actions['func19'] = function (store, event) {
  const state = store.state
  const action35 = store.commit('setState', {["state.username"]: ""})
}

const action36 = actions['func22'] = async function (store, event) {
  const state = store.state
  
          const action39 = await dw.fetch('post/verification_code/verify_code', {
            mobile: state.username,
            verification: state.code
          })
          
  
        if ((action39.status || !action39.correct) === ("error")) {
          const action40message = (action39.message || "操作错误！")
          const action40title = ("提示")
          action40message && dw.alert(action40title, action40message)
          return {}
        }
        
  const action41 = dw.app.goToPappUrl("reset_pwd", {"type": "set"}, {redirectTo: false})
}

const action42 = actions['func11'] = async function (store, event) {
  const state = store.state
  
      if (!action43lock) {
        // console.log('action43定期执行：初始化')
        action43lock = true
        const action43func = async () => {
          // console.log('action43定期执行：开始执行')
          if (action43remove) return
          const stop = await (async () => {
    if (state.sending && state.timeout > 1) {
      const action46 = store.commit('setState', {["state.timeout"]: state.timeout - 1})
    } else if (state.sending && state.timeout == 1) {
      const action48 = store.commit('setState', {["state.timeout"]: 60, ["state.sending"]: false})
    }
  
          })()
          if (!stop) setTimeout(() => action43func(), 1000)
        }
        action43func()
      }
      if (!action43storeLock) {
        action43storeLock = true
        store.$store.subscribeAction({
          enter: (action, state) => {
            // console.log('enter', action, state)
            if (['onShow', 'created'].includes(action.type)) {
              // console.log('action43定期执行：onShow 重新开始')
              action43remove = false
              action43lock = false
            }
            if (['onHide', 'onUnload', 'beforeDestroy'].includes(action.type)) {
              // console.log('action43定期执行：onHide 停止执行')
              action43remove = true
              action43lock = false
            }
          }
        })
      }
      const action43 = undefined
      
}

const action53 = actions['func14'] = function (store, event) {
  const state = store.state
  const action54 = console.log('[func14#action54] event', event)
  const action55 = store.commit('setState', {["state.range"]: state.ranges[event.data.detail.value].value})
}

exports.default =  {
  actions
}

        return exports.default;
      });
    

    const getDate = (...args) => new Date(...args);
    const getRegExp = (...args) => new RegExp(...args);

    computeds = (function () {
      const module = {};
      'use strict';

var actions = {};

var modalInstance = null;
var action56 = modalInstance;
var action15 = actions['computed1'] = function (event, state) {
  return state.sending ? state.timeout + 's\u540E\u91CD\u65B0\u53D1\u9001' : '获取验证码';
};
// COMPUTED_ACTION_META:computed1 {"deps":["sending","timeout"]}

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdw3kp: {
  fontSize: pm(20),
  overflow: "hidden",
  fontWeight: "600",
  lineHeight: pm(28),
},
xdw3kq: {
  fontSize: pm(12),
  lineHeight: pm(17),
},
xdw3kr: {
  marginTop: "auto",
  marginLeft: pm(5),
  marginBottom: "auto",
},
xdw3ks: {
  width: pm(35),
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
},
xdw3kt: {
  height: pm(43),
  paddingTop: pm(10),
  marginRight: pm(10),
  borderBottomWidth: pm(1),
  borderBottomColor: "#E8E8E8",
  flexDirection: "column",
  paddingBottom: pm(10),
  justifyContent: "center",
},
xdw3ku: {
  width: pm(1),
  height: pm(14),
  flexDirection: "column",
  backgroundColor: "#000000",
},
xdw3kv: {
  width: pm(190),
  fontSize: pm(12),
  borderTopWidth: pm(0),
  borderTopColor: "#000",
  borderLeftWidth: pm(0),
  borderLeftColor: "#000",
  lineHeight: pm(17),
  paddingTop: pm(10),
  borderRightWidth: pm(0),
  borderRightColor: "#000",
  borderBottomWidth: pm(0),
  borderBottomColor: "#000",
  paddingBottom: pm(10),
},
xdw3kw: {},
xdw3kx: {
  flexDirection: "column",
},
xdw3ky: {
  width: pm(210),
  alignItems: "center",
  marginLeft: pm(10),
  borderRightWidth: pm(0),
  borderRightColor: "#000",
  borderBottomWidth: pm(1),
  borderBottomColor: "#E8E8E8",
  flexDirection: "row",
},
xdw3kz: {
  width: pm(269),
  marginTop: pm(67),
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
},
xdw3l0: {
  width: pm(160),
  fontSize: pm(12),
  borderTopWidth: pm(0),
  borderTopColor: "#000",
  borderLeftWidth: pm(0),
  borderLeftColor: "#000",
  paddingTop: pm(10),
  borderRightWidth: pm(0),
  borderRightColor: "#000",
  borderBottomWidth: pm(0),
  borderBottomColor: "#000",
  paddingBottom: pm(10),
},
xdw3l1: {
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw3l2: {
  marginTop: pm(10),
  alignItems: "center",
  borderBottomWidth: pm(1),
  borderBottomColor: "#E8E8E8",
  flexDirection: "row",
  justifyContent: "space-between",
},
xdw3l3: {
  fontSize: pm(12),
  textAlign: "center",
  fontWeight: "600",
  lineHeight: pm(24),
},
xdw3l4: {
  width: pm(213),
  height: pm(38),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#ffd132",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw3l5: {
  height: pm(38),
  marginTop: pm(43),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw3l6: {
  paddingTop: pm(38),
  paddingLeft: pm(26),
  paddingRight: pm(26),
  flexDirection: "column",
}
});
const slide = {"type":"202462","key":"c2024621","slug":null,"randomid":"id_351e878e5aae51e3acf49966","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Text13":{"ctx_map":{"text":"验证号码","numberOfLines":1}},"Text14":{"ctx_map":{"text":"这是一个文本组件"}},"Text15":{"ctx_map":{"text":"获取验证码"}},"Text16":{"ctx_map":{"text":"下一步"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{"extraStyleKeys":[]}},"Picker1":{"ctx_map":{"mode":"selector","range":[{"label":"上午","value":"am"},{"label":"下午","value":"pm"}],"value":0}},"ViewIf1":{"ctx_map":{"value":true}},"SvgImage1":{"ctx_map":{"src":"u/dev065/2023/02/27/gQzWcKFWq6zuFYqrQuTFHf/577893.svg","color":"#cccccc","width":20,"height":20,"SvgImageManage":"SvgImageManage"}},"SvgImage2":{"ctx_map":{"src":"u/dev065/2023/02/27/FjAkL44b59LcLEMQ3weqk3/1279412.svg","color":"#000000","width":10,"height":10,"SvgImageManage":"SvgImageManage"}},"ComNavBar1":{"ctx_map":{"theme":"default","title":"","headerBackgroundColor":"#ffffff","statusBarBackgroundColor":"#ffffff"}},"DwappCloud1":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"NativeInput1":{"ctx_map":{"type":"text","checked":false,"cursorColor":"#ffd132","placeholder":"请输入手机号码"}},"NativeInput2":{"ctx_map":{"type":"text","checked":false,"cursorColor":"#ffd132","placeholder":"请输入验证码"}}}};
slide.components.DwappCloud1.ctx_map.valueStyle = {
  flexGrow: 1,
  flexShrink: 1,
  paddingTop: pm(12),
  paddingLeft: pm(30),
  borderBottomWidth: pm(0.5),
  borderBottomColor: "#eeeeee",
  paddingRight: pm(30),
  flexDirection: "column",
  paddingBottom: pm(12),
};
slide.components.DwappCloud1.ctx_map.containerStyle = {
  marginBottom: pm(18),
  flexDirection: "column",
};
slide.components.DwappCloud1.ctx_map.valueInputStyle = {
  color: "#333333",
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-check_num';

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
      <ComNavBar theme={ "default" } statusBarBackgroundColor={ "#ffffff" } headerBackgroundColor={ "#ffffff" }></ComNavBar>
<View /* View1 */   style={styles.xdw3l6}><Text /* Text13 */ style={styles.xdw3kp} numberOfLines={1}>{slide.components.Text13.ctx_map.text}</Text>
<View /* View2 */   style={styles.xdw3kz}><View /* View6 */   style={styles.xdw3kt}><XbenchcPicker /* Picker1 */ value={ state.range } mode={ slide.components.Picker1.ctx_map.mode } range={ state.ranges }  onChange={getEvent('Picker1:input:func14:', {}, bagForKeyValue, bagForIndex)}><View /* View7 */   style={styles.xdw3ks}><Text /* Text14 */ style={styles.xdw3kq} >{state.range}</Text>
<Image /* SvgImage2 */ style={[ styles.xdw3kr, { width: pm(10), height: pm(10) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev065/2023/02/27/FjAkL44b59LcLEMQ3weqk3/1279412.svg"), width: pm(10), height: pm(10) }} /></View></XbenchcPicker></View>
<View /* View5 */   style={styles.xdw3ku}></View>
<View /* View3 */   style={[styles.xdw3ky, (state.platform === 'rnapp' ? 
    state.focus_input === 'code_username' ? {
        borderBottomWidth: 1,
        borderBottomColor: '#181818',
    } : {
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
    }
    : state.focus_input === 'code_username' ? {
        borderBottomWidth: "1px",
        borderBottomColor: '#181818',
    } : {
        borderBottomWidth: "1px",
        borderBottomColor: '#E8E8E8',
    })]}><XbenchcInput /* NativeInput1 */ style={styles.xdw3kv} value={state.username} placeholder={slide.components.NativeInput1.ctx_map.placeholder} type={slide.components.NativeInput1.ctx_map.type} cursorColor={"#ffd132"}  onChange={getEvent('NativeInput1:onChange:func15:', {eventData: "code_username"}, bagForKeyValue, bagForIndex)} onFocus={getEvent('NativeInput1:onFocus:func21:', {eventData: "code_username"}, bagForKeyValue, bagForIndex)} />
{!!(!!state.username) /* ViewIf1 */ && (<><XbenchcView /* View4 */   viewStyle={styles.xdw3kx} onClick={getEvent('View4:onClick:func19:', {}, bagForKeyValue, bagForIndex)}><Image /* SvgImage1 */ style={[ styles.xdw3kw, { width: pm(20), height: pm(20) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev065/2023/02/27/gQzWcKFWq6zuFYqrQuTFHf/577893.svg"), width: pm(20), height: pm(20) }} /></XbenchcView></>)}</View></View>
<View /* View8 */   style={[styles.xdw3l2, (state.platform === 'rnapp' ? 
    state.focus_input === 'code' ? {
        borderBottomWidth: 1,
        borderBottomColor: '#181818',
    } : {
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
    }
    : state.focus_input === 'code' ? {
        borderBottomWidth: "1px",
        borderBottomColor: '#181818',
    } : {
        borderBottomWidth: "1px",
        borderBottomColor: '#E8E8E8',
    })]}><XbenchcInput /* NativeInput2 */ style={styles.xdw3l0} value={state.code} placeholder={slide.components.NativeInput2.ctx_map.placeholder} type={slide.components.NativeInput2.ctx_map.type} cursorColor={"#ffd132"}  onChange={getEvent('NativeInput2:onChange:func16:', {eventData: "code"}, bagForKeyValue, bagForIndex)} onFocus={getEvent('NativeInput2:onFocus:func21:', {eventData: "code"}, bagForKeyValue, bagForIndex)} />
<XbenchcView /* View9 */   viewStyle={styles.xdw3kx} onClick={getEvent('View9:onClick:func12:', {}, bagForKeyValue, bagForIndex)}><Text /* Text15 */ style={styles.xdw3l1} >{computeds.computed1({}, state)}</Text></XbenchcView></View>
<XbenchcView /* View10 */   viewStyle={styles.xdw3l5} onClick={getEvent('View10:onClick:func22:', {}, bagForKeyValue, bagForIndex)}><View /* View11 */   style={[styles.xdw3l4, (!(state.username && state.password) && !(state.username && state.code) ? {
    backgroundColor: "#FFF1C6",
} : {
    backgroundColor: "#FFD142",
})]}><Text /* Text16 */ style={styles.xdw3l3} >{slide.components.Text16.ctx_map.text}</Text></View></XbenchcView>
<Xbenchc275104 /* DwappCloud1 */ valueStyle={ slide.components.DwappCloud1.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud1.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud1.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud1:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104></View>
    </ErrorBoundary>
  )
}
