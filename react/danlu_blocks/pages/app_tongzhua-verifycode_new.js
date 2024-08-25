
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
import XbenchcScrollView from '../../xbench/xbenchc/components/XbenchcScrollView'
import Xbenchc275104 from '../components/Xbenchc275104'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

let action26lock = false
let action45remove = false
let action45lock = false
let action45storeLock = false
let action62lock = false
let action77lock = false
let modalInstance = (null)
const action97 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action2 = state.ready = (false)
  const action35 = state.username = (null)
  const action36 = state.code = (null)
  const action76 = state.member = (null)
  /* action4: 发送验证码 */
  const action5 = state.timeout = (60)
  const action6 = state.sending = (false)
  const action7 = state.ranges = ([/**/  {/**/    label: "+86",/**/    value: "+86"/**/  },/**/  {/**/    label: "+00",/**/    value: "+00"/**/  }/**/])
  const action8 = state.range = ("+86")
  const action21 = state.action = (null)
  return state
}

const action11 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action59 = await dw.app.run("member.get_siteuser_id", {})
  if (action59) {
    const action85 = await store.dispatch("func17", {})
    const action52 = await store.dispatch("func11", {})
  } else {
    let message = ("操作异常,返回上一页")
    const action105 = message
    const action106 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    if (dw.platform === 'rnapp') {
      const action19 = await dw.navigateBack({delta: 1})
    }
  }
  const action22 = store.commit('setState', {["state.ready"]: true})
}

const action25 = actions['func12'] = async function (store, event) {
  const state = store.state
  
        if (!!(state.sending) === (true)) {
          const action28message = ("")
          const action28title = ("提示")
          action28message && dw.alert(action28title, action28message)
          return {}
        }
        
  const action26 = await (async () => {
  
      if (action26lock) return true
      action26lock = true
      try {
    
        dw.showLoading({
          title: "",
          mask: true
        })
        let action27
        try {
          action27 = await (async () => {
        
      
        if (!!(!(state.username && /^\d{11}$/.test(state.username))) === (true)) {
          const action29message = ("请输入11位手机号")
          const action29title = ("提示")
          action29message && dw.alert(action29title, action29message)
          return {}
        }
        
      const action74 = (await dw.fetch("post/psiteuser/send_token", {"mobile": state.username})).data
      
        if ((action74.status) === ("error")) {
          const action86message = (action74.message || "操作错误！")
          const action86title = ("提示")
          action86message && dw.alert(action86title, action86message)
          return {}
        }
        
      if ((action74.status) === ("error")) {
        let message = (action74.data.message)
        const action102 = message
        const action103 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(message)
}
else{
  return null
}
})(store, event)
        const action91 = dw.app.goToPappUrl("account_security", {}, {redirectTo: false})
      } else {
        const action87 = console.log('[func12#action87] 打印(action74)的返回值', action74)
        let message = ("发送成功")
        const action108 = message
        const action109 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
        const action33 = store.commit('setState', {["state.timeout"]: 60, ["state.sending"]: true})
      }
    
          })()
        } finally {
          dw.hideLoading()
        }
        
  
      } catch (e) {
        throw e
      } finally {
        action26lock = false
      }
      
  })()
}

const action98 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action99 = modalInstance = (event.data)
  const action100 = console.log('[getModalInstance#action100] 打印(modalInstance)', modalInstance)
}

const action44 = actions['func11'] = async function (store, event) {
  const state = store.state
  
      if (!action45lock) {
        // console.log('action45定期执行：初始化')
        action45lock = true
        const action45func = async () => {
          // console.log('action45定期执行：开始执行')
          if (action45remove) return
          const stop = await (async () => {
    if (state.sending && state.timeout > 1) {
      const action48 = store.commit('setState', {["state.timeout"]: state.timeout - 1})
    } else if (state.sending && state.timeout == 1) {
      const action50 = store.commit('setState', {["state.timeout"]: 60, ["state.sending"]: false})
    }
  
          })()
          if (!stop) setTimeout(() => action45func(), 1000)
        }
        action45func()
      }
      if (!action45storeLock) {
        action45storeLock = true
        store.$store.subscribeAction({
          enter: (action, state) => {
            // console.log('enter', action, state)
            if (['onShow', 'created'].includes(action.type)) {
              // console.log('action45定期执行：onShow 重新开始')
              action45remove = false
              action45lock = false
            }
            if (['onHide', 'onUnload', 'beforeDestroy'].includes(action.type)) {
              // console.log('action45定期执行：onHide 停止执行')
              action45remove = true
              action45lock = false
            }
          }
        })
      }
      const action45 = undefined
      
}

const action37 = actions['func13'] = function (store, event) {
  const state = store.state
  
        if (!!(state.sending) === (true)) {
          const action43message = ("")
          const action43title = ("提示")
          action43message && dw.alert(action43title, action43message)
          return null
        }
        
  const action38 = store.commit('setState', {["state.username"]: event.data.detail.value})
}

const action39 = actions['func14'] = function (store, event) {
  const state = store.state
  const action40 = store.commit('setState', {["state.code"]: event.data.detail.value})
}

const action41 = actions['func15'] = function (store, event) {
  const state = store.state
  const action42 = store.commit('setState', {["state.username"]: null})
}

const action60 = actions['func16'] = async function (store, event) {
  const state = store.state
  const action62 = await (async () => {
  
      if (action62lock) return true
      action62lock = true
      try {
    
        if (!!(!state.code) === (true)) {
          const action61message = ("请填写验证码！")
          const action61title = ("提示")
          action61message && dw.alert(action61title, action61message)
          return null
        }
        
    
        dw.showLoading({
          title: "",
          mask: false
        })
        let action93
        try {
          action93 = await (async () => {
        
      const action63 = (await dw.fetch("post/psiteuser/bind_mobile", {"code": state.code, "mobile": state.username, "auto_unbind": true})).data
      
        if ((action63.status) === ("error")) {
          const action64message = (action63.message || "操作错误！")
          const action64title = ("提示")
          action64message && dw.alert(action64title, action64message)
          return {}
        }
        
      const action81 = await dw.app.run("member.update", {"id": state.member.id, "formData": {...state.member.data, mobile:state.username}})
      
        if ((action81.status) === ("error")) {
          const action82message = (action81.message || "操作错误！")
          const action82title = ("提示")
          action82message && dw.alert(action82title, action82message)
          return {}
        }
        
    
          })()
        } finally {
          dw.hideLoading()
        }
        
    let message = ("手机号修改成功")
    const action111 = message
    const action112 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    const action84 = dw.app.goToPappUrl("account_security", {}, {redirectTo: false})
  
      } catch (e) {
        throw e
      } finally {
        action62lock = false
      }
      
  })()
}

const action75 = actions['func17'] = async function (store, event) {
  const state = store.state
  const action77 = await (async () => {
  
      if (action77lock) return true
      action77lock = true
      try {
    const action78 = await dw.app.run("member.get_create_member", {})
    
        if ((action78.status) === ("error")) {
          const action79message = (action78.message || "操作错误！")
          const action79title = ("提示")
          action79message && dw.alert(action79title, action79message)
          return {}
        }
        
    const action80 = store.commit('setState', {["state.member"]: action78.object})
  
      } catch (e) {
        throw e
      } finally {
        action77lock = false
      }
      
  })()
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
var action97 = modalInstance;
var action9 = actions['computed1'] = function (event, state) {
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
xdw295: {
  fontSize: pm(20),
  fontWeight: "600",
  lineHeight: pm(28),
},
xdw296: {
  flexDirection: "column",
},
xdw297: {
  flexDirection: "row",
},
xdw298: {
  fontSize: pm(12),
  lineHeight: pm(31),
},
xdw299: {
  marginTop: "auto",
  marginLeft: pm(5),
  marginBottom: "auto",
},
xdw29a: {
  width: pm(35),
  borderBottomWidth: pm(1),
  borderBottomColor: "#e8e8e8",
  flexDirection: "row",
},
xdw29b: {
  marginRight: pm(10),
  borderBottomWidth: pm(1),
  borderBottomColor: "#e8e8e8",
  flexDirection: "column",
},
xdw29c: {
  width: pm(2),
  height: pm(10),
  flexDirection: "column",
  backgroundColor: "#000000",
},
xdw29d: {
  width: pm(200),
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
xdw29e: {},
xdw29f: {
  width: pm(200),
  alignItems: "center",
  marginLeft: pm(10),
  borderRightWidth: pm(0),
  borderRightColor: "#000",
  borderBottomWidth: pm(1),
  borderBottomColor: "#eeeeee",
  flexDirection: "row",
},
xdw29g: {
  marginTop: pm(68),
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
},
xdw29h: {
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
xdw29i: {
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw29j: {
  marginTop: pm(15),
  alignItems: "center",
  borderBottomWidth: pm(1),
  borderBottomColor: "#e8e8e8",
  flexDirection: "row",
  justifyContent: "space-between",
},
xdw29k: {
  fontSize: pm(15),
  textAlign: "center",
  fontWeight: "500",
  lineHeight: pm(38),
},
xdw29l: {
  width: pm(213),
  height: pm(38),
  flexDirection: "column",
  backgroundColor: "#ffd132",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw29m: {
  marginTop: pm(40),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw29n: {
  flex: 1,
  width: "100%",
  overflow: "scroll",
  borderTopWidth: pm(1),
  borderTopColor: "#eeeeee",
  paddingTop: pm(39),
  paddingLeft: pm(26),
  paddingRight: pm(26),
}
});
const slide = {"type":"173808","key":"c1738081","slug":null,"randomid":"id_f609341a1375cfae16acb2a5","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text3":{"ctx_map":{"text":"确认绑定"}},"Text7":{"ctx_map":{"text":"获取验证码"}},"Text8":{"ctx_map":{"text":"这是一个文本组件"}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{"extraStyleKeys":[]}},"View6":{"ctx_map":{}},"Text10":{"ctx_map":{"text":"验证新号码"}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View20":{"ctx_map":{}},"View21":{"ctx_map":{}},"View22":{"ctx_map":{}},"View23":{"ctx_map":{}},"View26":{"ctx_map":{}},"View27":{"ctx_map":{}},"View28":{"ctx_map":{}},"View29":{"ctx_map":{}},"Picker1":{"ctx_map":{"mode":"selector","range":[{"label":"上午","value":"am"},{"label":"下午","value":"pm"}],"value":0}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"SvgImage5":{"ctx_map":{"src":"u/dev065/2023/02/27/FjAkL44b59LcLEMQ3weqk3/1279412.svg","color":"#000000","width":10,"height":10,"SvgImageManage":"SvgImageManage"}},"SvgImage6":{"ctx_map":{"src":"u/dev065/2023/02/27/gQzWcKFWq6zuFYqrQuTFHf/577893.svg","color":"#cccccc","width":20,"height":20,"SvgImageManage":"SvgImageManage"}},"DwappCloud1":{"ctx_map":{"bool1":true,"bool2":false,"text1":"","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud2":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"ScrollView2":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[]}},"NativeInput3":{"ctx_map":{"type":"text","checked":false,"placeholder":"请输入验证码"}},"NativeInput4":{"ctx_map":{"type":"text","checked":false,"placeholder":"请输入手机号码"}}}};
slide.components.DwappCloud1.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  flexDirection: "column",
};
slide.components.DwappCloud2.ctx_map.valueStyle = {
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
slide.components.DwappCloud2.ctx_map.containerStyle = {
  marginBottom: pm(18),
  flexDirection: "column",
};
slide.components.DwappCloud2.ctx_map.valueInputStyle = {
  color: "#333333",
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-verifycode_new';

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
      <Xbenchc176286 /* DwappCloud1 */ isCuzBtn={ slide.components.DwappCloud1.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud1.ctx_map.bool2 } eventData={ slide.components.DwappCloud1.ctx_map.prop1 } eventData2={ slide.components.DwappCloud1.ctx_map.prop2 } title={ slide.components.DwappCloud1.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud1.ctx_map.text2 } confirmText={ slide.components.DwappCloud1.ctx_map.text3 } cancelText={ slide.components.DwappCloud1.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud1.ctx_map.color1 } confirmColor={ slide.components.DwappCloud1.ctx_map.color2 } cancelColor={ slide.components.DwappCloud1.ctx_map.color3 } backIcon={ slide.components.DwappCloud1.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud1.ctx_map.image2 } titleStyle={ slide.components.DwappCloud1.ctx_map.style1 } screenType={ slide.components.DwappCloud1.ctx_map.select1 } ></Xbenchc176286>
<XbenchcScrollView /* ScrollView2 */ style={styles.xdw29n} scrollX={ false } scrollY={ true } >{!!(state.ready) /* ViewIf2 */ && (<><View /* View6 */   style={styles.xdw296}><View /* View23 */   style={styles.xdw297}><View /* View26 */   style={styles.xdw296}><Text /* Text10 */ style={styles.xdw295} >{slide.components.Text10.ctx_map.text}</Text></View></View>
<View /* View17 */   style={styles.xdw29g}><View /* View21 */   style={styles.xdw29b}><XbenchcPicker /* Picker1 */ value={ state.range } mode={ slide.components.Picker1.ctx_map.mode } range={ state.ranges }  onChange={getEvent('Picker1:input:func14:', {}, bagForKeyValue, bagForIndex)}><View /* View22 */   style={styles.xdw29a}><Text /* Text8 */ style={styles.xdw298} >{state.range}</Text>
<Image /* SvgImage5 */ style={[ styles.xdw299, { width: pm(10), height: pm(10) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev065/2023/02/27/FjAkL44b59LcLEMQ3weqk3/1279412.svg"), width: pm(10), height: pm(10) }} /></View></XbenchcPicker></View>
<View /* View20 */   style={styles.xdw29c}></View>
<View /* View27 */   style={styles.xdw29f}><XbenchcInput /* NativeInput4 */ style={styles.xdw29d} value={state.username} placeholder={slide.components.NativeInput4.ctx_map.placeholder} type={slide.components.NativeInput4.ctx_map.type}  onChange={getEvent('NativeInput4:onChange:func13:', {}, bagForKeyValue, bagForIndex)} />
{!!(!!state.username && !state.sending) /* ViewIf1 */ && (<><XbenchcView /* View28 */   viewStyle={styles.xdw296} onClick={getEvent('View28:onClick:func15:', {}, bagForKeyValue, bagForIndex)}><Image /* SvgImage6 */ style={[ styles.xdw29e, { width: pm(20), height: pm(20) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev065/2023/02/27/gQzWcKFWq6zuFYqrQuTFHf/577893.svg"), width: pm(20), height: pm(20) }} /></XbenchcView></>)}</View></View>
<View /* View16 */   style={styles.xdw29j}><XbenchcInput /* NativeInput3 */ style={styles.xdw29h} value={state.code} placeholder={slide.components.NativeInput3.ctx_map.placeholder} type={slide.components.NativeInput3.ctx_map.type}  onChange={getEvent('NativeInput3:onChange:func14:', {}, bagForKeyValue, bagForIndex)} />
<XbenchcView /* View29 */   viewStyle={styles.xdw296} onClick={getEvent('View29:onClick:func12:', {}, bagForKeyValue, bagForIndex)}><Text /* Text7 */ style={styles.xdw29i} >{computeds.computed1({}, state)}</Text></XbenchcView></View></View>
<View /* View4 */   style={styles.xdw29m}><XbenchcView /* View5 */   viewStyle={styles.xdw29l} onClick={getEvent('View5:onClick:func16:', {}, bagForKeyValue, bagForIndex)}><Text /* Text3 */ style={styles.xdw29k} >{slide.components.Text3.ctx_map.text}</Text></XbenchcView></View></>)}</XbenchcScrollView>
<Xbenchc275104 /* DwappCloud2 */ valueStyle={ slide.components.DwappCloud2.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud2.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud2.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud2:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104>
    </ErrorBoundary>
  )
}
