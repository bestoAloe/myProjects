
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import { Image } from 'expo-image'
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

let action7lock = false
let action51remove = false
let action51lock = false
let action51storeLock = false
let modalInstance = (null)
const action59 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action4 = state.ranges = ([/**/  {/**/    label: "+86",/**/    value: "+86"/**/  },/**/  {/**/    label: "+00",/**/    value: "+00"/**/  }/**/])
  const action5 = state.range = (0)
  const action33 = state.is_rnapp = (dw.app.is('rnapp'))
  const action34 = state.is_ready = (false)
  const action35 = state.username = (null)
  const action36 = state.password = (null)
  const action37 = state.password1 = (null)
  const action38 = state.password2 = (null)
  const action39 = state.code = (null)
  const action40 = state.agree = (true)
  const action41 = state.siteuser = (null)
  /* action42: 发送验证码 */
  const action43 = state.timeout = (60)
  const action44 = state.sending = (false)
  const action69 = state.focus_input = (null)
  const action70 = state.platform = (dw.platform)
  return state
}

const action48 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action49 = await store.dispatch("func19", {})
}

const action6 = actions['func12'] = async function (store, event) {
  const state = store.state
  const action7 = await (async () => {
  
      if (action7lock) return true
      action7lock = true
      try {
    
        dw.showLoading({
          title: "",
          mask: true
        })
        let action8
        try {
          action8 = await (async () => {
        
      
        if (!!(state.sending) === (true)) {
          const action9message = ("")
          const action9title = ("提示")
          action9message && dw.alert(action9title, action9message)
          return {}
        }
        
      if (!(state.username && /^\d{11}$/.test(state.username))) {
        const action72 = await dw.showToast({"icon": "none", "mask": false, "image": "", "title": "请输入11位手机号", "duration": 1500, "content": "请输入11位手机号"})
      }
      
          const action11 = await dw.fetch('post/verification_code/send_verify_code', { mobile: state.username })
          
      
        if ((action11.status) === ("error")) {
          const action12message = (action11.message || "验证码发送错误")
          const action12title = ("提示")
          action12message && dw.alert(action12title, action12message)
          return {}
        }
        
      let message = ("发送成功")
      const action64 = message
      const action65 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
      const action14 = store.commit('setState', {["state.timeout"]: 60, ["state.sending"]: true})
    
          })()
        } finally {
          dw.hideLoading()
        }
        
  
      } catch (e) {
        throw e
      } finally {
        action7lock = false
      }
      
  })()
}

const action16 = actions['func14'] = function (store, event) {
  const state = store.state
  const action17 = console.log('[func14#action17] event', event)
  const action18 = store.commit('setState', {["state.range"]: event.data.detail.value})
}

const action20 = actions['func15'] = function (store, event) {
  const state = store.state
  const action21 = console.log('[func15#action21] event', event)
  const action22 = store.commit('setState', {["state.username"]: event.data.detail.value})
}

const action23 = actions['func16'] = function (store, event) {
  const state = store.state
  const action24 = console.log('[func16#action24] event', event)
  const action25 = store.commit('setState', {["state.code"]: event.data.detail.value})
}

const action26 = actions['func17'] = function (store, event) {
  const state = store.state
  const action27 = console.log('[func17#action27] event', event)
  const action28 = store.commit('setState', {["state.password"]: event.data.detail.value})
}

const action29 = actions['func18'] = async function (store, event) {
  const state = store.state
  
          const action30 = await dw.fetch('post/verification_code/verify_code', {
            mobile: state.username,
            verification: state.code
          })
          
  if (!action30.data.correct) {
    const action74 = await dw.showToast({"icon": "none", "mask": false, "image": "", "title": "验证码错误！", "duration": 1500, "content": "验证码错误！"})
  }
  const action47 = dw.app.goToPappUrl("reset_pwd", {"username": state.username}, {redirectTo: false})
}

const action50 = actions['func19'] = async function (store, event) {
  const state = store.state
  
      if (!action51lock) {
        // console.log('action51定期执行：初始化')
        action51lock = true
        const action51func = async () => {
          // console.log('action51定期执行：开始执行')
          if (action51remove) return
          const stop = await (async () => {
    if (state.sending && state.timeout > 1) {
      const action56 = store.commit('setState', {["state.timeout"]: state.timeout - 1})
    } else if (state.sending && state.timeout == 1) {
      const action57 = store.commit('setState', {["state.timeout"]: 60, ["state.sending"]: false})
    }
  
          })()
          if (!stop) setTimeout(() => action51func(), 1000)
        }
        action51func()
      }
      if (!action51storeLock) {
        action51storeLock = true
        store.$store.subscribeAction({
          enter: (action, state) => {
            // console.log('enter', action, state)
            if (['onShow', 'created'].includes(action.type)) {
              // console.log('action51定期执行：onShow 重新开始')
              action51remove = false
              action51lock = false
            }
            if (['onHide', 'onUnload', 'beforeDestroy'].includes(action.type)) {
              // console.log('action51定期执行：onHide 停止执行')
              action51remove = true
              action51lock = false
            }
          }
        })
      }
      const action51 = undefined
      
}

const action60 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action61 = modalInstance = (event.data)
  const action62 = console.log('[getModalInstance#action62] 打印(modalInstance)', modalInstance)
}

const action66 = actions['func21'] = function (store, event) {
  const state = store.state
  const action67 = store.commit('setState', {["state.focus_input"]: event.context.eventData})
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
var action59 = modalInstance;
var action45 = actions['computed1'] = function (event, state) {
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
xdw1x0: {
  color: "#181818",
  fontSize: pm(20),
  fontWeight: "500",
  lineHeight: pm(26),
},
xdw1x1: {
  marginTop: pm(43),
  marginLeft: pm(20),
  flexDirection: "column",
},
xdw1x2: {
  fontSize: pm(12),
  lineHeight: pm(31),
},
xdw1x3: {
  marginTop: "auto",
  marginLeft: pm(5),
  marginBottom: "auto",
},
xdw1x4: {
  width: pm(35),
  borderBottomWidth: pm(1),
  borderBottomColor: "#000",
  flexDirection: "row",
},
xdw1x5: {
  marginRight: pm(10),
  borderBottomWidth: pm(1),
  borderBottomColor: "#000",
  flexDirection: "column",
},
xdw1x6: {
  width: pm(2),
  height: pm(10),
  flexDirection: "column",
  backgroundColor: "#000000",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw1x7: {
  width: pm(180),
  height: pm(32),
  fontSize: pm(12),
  borderTopWidth: pm(0),
  borderTopColor: "#000",
  borderLeftWidth: pm(0),
  borderLeftColor: "#000",
  paddingTop: pm(4),
  borderRightWidth: pm(0),
  borderRightColor: "#000",
  paddingLeft: pm(4),
  borderBottomWidth: pm(0),
  borderBottomColor: "#000",
  paddingRight: pm(4),
  paddingBottom: pm(4),
},
xdw1x8: {},
xdw1x9: {
  flexDirection: "column",
},
xdw1xa: {
  width: pm(200),
  alignItems: "center",
  marginLeft: pm(10),
  borderRightWidth: pm(0),
  borderRightColor: "#000",
  borderBottomWidth: pm(1),
  borderBottomColor: "#E8E8E8",
  flexDirection: "row",
},
xdw1xb: {
  marginTop: pm(67),
  alignItems: "center",
  marginLeft: pm(20),
  marginRight: pm(20),
  flexDirection: "row",
  justifyContent: "space-between",
},
xdw1xc: {
  width: pm(150),
  height: pm(32),
  fontSize: pm(12),
  borderTopWidth: pm(0),
  borderTopColor: "#000",
  borderLeftWidth: pm(0),
  borderLeftColor: "#000",
  paddingTop: pm(4),
  borderRightWidth: pm(0),
  borderRightColor: "#000",
  paddingLeft: pm(4),
  borderBottomWidth: pm(0),
  borderBottomColor: "#000",
  paddingRight: pm(4),
  paddingBottom: pm(4),
},
xdw1xd: {
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw1xe: {
  marginTop: pm(10),
  alignItems: "center",
  marginLeft: pm(20),
  marginRight: pm(20),
  borderBottomWidth: pm(1),
  borderBottomColor: "#E8E8E8",
  flexDirection: "row",
  justifyContent: "space-between",
},
xdw1xf: {
  color: "#181818",
  fontSize: pm(14),
  textAlign: "center",
  fontWeight: "500",
  lineHeight: pm(24),
},
xdw1xg: {
  width: pm(213),
  height: pm(40),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#FFD132",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw1xh: {
  color: "#666666",
  fontSize: pm(14),
  textAlign: "center",
  fontWeight: "500",
  lineHeight: pm(24),
},
xdw1xi: {
  width: pm(213),
  height: pm(40),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#FFF1C6",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw1xj: {
  marginTop: pm(40),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
}
});
const slide = {"type":"170290","key":"c1702901","slug":null,"randomid":"id_291f3288d9adf5f62d2a46ee","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":"忘记密码"}},"Text2":{"ctx_map":{"text":"获取验证码"}},"Text3":{"ctx_map":{"text":"这是一个文本组件"}},"Text7":{"ctx_map":{"text":"下一步"}},"Text8":{"ctx_map":{"text":"下一步"}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{"extraStyleKeys":[]}},"View19":{"ctx_map":{"extraStyleKeys":[]}},"Picker1":{"ctx_map":{"mode":"selector","range":[{"label":"上午","value":"am"},{"label":"下午","value":"pm"}],"value":0}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"SvgImage1":{"ctx_map":{"src":"u/dev065/2023/02/27/gQzWcKFWq6zuFYqrQuTFHf/577893.svg","color":"#cccccc","width":20,"height":20,"SvgImageManage":"SvgImageManage"}},"SvgImage2":{"ctx_map":{"src":"u/dev065/2023/02/27/FjAkL44b59LcLEMQ3weqk3/1279412.svg","color":"#000000","width":10,"height":10,"SvgImageManage":"SvgImageManage"}},"DwappCloud2":{"ctx_map":{"bool1":true,"text1":"","color1":"rgb(255, 255, 255)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","select1":"portrait"}},"DwappCloud3":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"NativeInput1":{"ctx_map":{"type":"text","checked":false,"placeholder":"请输入验证码"}},"NativeInput2":{"ctx_map":{"type":"text","checked":false,"placeholder":"请输入手机号码"}}}};
slide.components.DwappCloud3.ctx_map.valueStyle = {
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
slide.components.DwappCloud3.ctx_map.containerStyle = {
  marginBottom: pm(18),
  flexDirection: "column",
};
slide.components.DwappCloud3.ctx_map.valueInputStyle = {
  color: "#333333",
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-forget_pwd';

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
      <Xbenchc176286 /* DwappCloud2 */ isCuzBtn={ slide.components.DwappCloud2.ctx_map.bool1 } eventData={ slide.components.DwappCloud2.ctx_map.prop1 } eventData2={ slide.components.DwappCloud2.ctx_map.prop2 } title={ slide.components.DwappCloud2.ctx_map.text1 } backgroundColor={ slide.components.DwappCloud2.ctx_map.color1 } backIcon={ slide.components.DwappCloud2.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud2.ctx_map.image2 } screenType={ slide.components.DwappCloud2.ctx_map.select1 } ></Xbenchc176286>
<View /* View3 */   style={styles.xdw1x9}><View /* View4 */   style={styles.xdw1x1}><Text /* Text1 */ style={styles.xdw1x0} >{slide.components.Text1.ctx_map.text}</Text></View>
<View /* View6 */   style={styles.xdw1xb}><View /* View10 */   style={[styles.xdw1x5, (state.platform === 'rnapp' ? 
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
    })]}><XbenchcPicker /* Picker1 */ value={ state.range } mode={ slide.components.Picker1.ctx_map.mode } range={ state.ranges }  onChange={getEvent('Picker1:input:func14:', {}, bagForKeyValue, bagForIndex)}><View /* View11 */   style={styles.xdw1x4}><Text /* Text3 */ style={styles.xdw1x2} >{state.ranges[state.range].label}</Text>
<Image /* SvgImage2 */ style={[ styles.xdw1x3, { width: pm(10), height: pm(10) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev065/2023/02/27/FjAkL44b59LcLEMQ3weqk3/1279412.svg"), width: pm(10), height: pm(10) }} /></View></XbenchcPicker></View>
<View /* View17 */   style={styles.xdw1x6}></View>
<View /* View7 */   style={[styles.xdw1xa, (state.platform === 'rnapp' ? 
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
    })]}><XbenchcInput /* NativeInput2 */ style={styles.xdw1x7} value={state.username} placeholder={slide.components.NativeInput2.ctx_map.placeholder} type={slide.components.NativeInput2.ctx_map.type}  onChange={getEvent('NativeInput2:onChange:func15:', {eventData: "code_username"}, bagForKeyValue, bagForIndex)} onFocus={getEvent('NativeInput2:onFocus:func21:', {eventData: "code_username"}, bagForKeyValue, bagForIndex)} />
{!!(!!state.username) /* ViewIf2 */ && (<><View /* View8 */   style={styles.xdw1x9}><Image /* SvgImage1 */ style={[ styles.xdw1x8, { width: pm(20), height: pm(20) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev065/2023/02/27/gQzWcKFWq6zuFYqrQuTFHf/577893.svg"), width: pm(20), height: pm(20) }} /></View></>)}</View></View>
<View /* View5 */   style={[styles.xdw1xe, (state.platform === 'rnapp' ? 
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
    })]}><XbenchcInput /* NativeInput1 */ style={styles.xdw1xc} value={state.code} placeholder={slide.components.NativeInput1.ctx_map.placeholder} type={slide.components.NativeInput1.ctx_map.type}  onChange={getEvent('NativeInput1:onChange:func16:', {eventData: "code"}, bagForKeyValue, bagForIndex)} onFocus={getEvent('NativeInput1:onFocus:func21:', {eventData: "code"}, bagForKeyValue, bagForIndex)} />
<XbenchcView /* View16 */   viewStyle={styles.xdw1x9} onClick={getEvent('View16:onClick:func12:', {}, bagForKeyValue, bagForIndex)}><Text /* Text2 */ style={styles.xdw1xd} >{computeds.computed1({}, state)}</Text></XbenchcView></View>
<View /* View12 */   style={styles.xdw1xj}>{!!(!!state.username && !!state.code) /* ViewIf3 */ && (<><XbenchcView /* View19 */   viewStyle={styles.xdw1xg} onClick={getEvent('View19:onClick:func18:', {}, bagForKeyValue, bagForIndex)}><Text /* Text8 */ style={styles.xdw1xf} >{slide.components.Text8.ctx_map.text}</Text></XbenchcView></>)}
{!!(!(!!state.username && !!state.code)) /* ViewIf4 */ && (<><View /* View18 */   style={styles.xdw1xi}><Text /* Text7 */ style={styles.xdw1xh} >{slide.components.Text7.ctx_map.text}</Text></View></>)}</View>
<Xbenchc275104 /* DwappCloud3 */ valueStyle={ slide.components.DwappCloud3.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud3.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud3.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud3:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104></View>
    </ErrorBoundary>
  )
}
