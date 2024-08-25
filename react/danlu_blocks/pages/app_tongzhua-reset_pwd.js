
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
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

let modalInstance = (null)
const action68 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action2 = state.password1 = ("")
  const action3 = state.password2 = ("")
  const action17 = state.title = ("重置密码")
  const action29 = state.focus_input = (null)
  const action35 = state.platform = (dw.platform)
  const action45 = state.username = (0)
  return state
}

const action19 = actions['onShow'] = function (store, event) {
  const state = store.state
  const action40 = dw.query
  if (!!action40.username) {
    const action49 = store.commit('setState', {["state.username"]: action40.username})
  }
  if (dw.query.type && dw.query.type === 'set') {
    const action23 = store.commit('setState', {["state.title"]: "设置密码"})
  }
}

const action65 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action66 = modalInstance = (event.data)
  const action67 = console.log('[getModalInstance#action67] 打印(modalInstance)', modalInstance)
}

const action4 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action5 = (() => {
    if (!(v => v && typeof v === 'string' && v.length < 255)(state.password1)) return "请填写新密码！" // pwd1
    if (!(v => v && typeof v === 'string' && v.length < 255)(state.password2)) return "请填写确认密码！" // pwd2
  })()
  if (action5) return dw.alert("提示" || '提示', action5)
  
        if (!!(state.password1 !== state.password2) === (true)) {
          const action9message = ("两次密码不一致,请检查！")
          const action9title = ("提示")
          action9message && dw.alert(action9title, action9message)
          return null
        }
        
  const action36 = await dw.app.run("member.update_pwd", {"password": state.password1, "username": state.username || undefined})
  const action37 = console.log('[func1#action37] 打印(action36)的返回值', action36)
  
        if ((action36.status) === ("error")) {
          const action38message = (action36.message || "操作错误！")
          const action38title = ("提示")
          action38message && dw.alert(action38title, action38message)
          return {}
        }
        
  let member = (null)
  const action54 = member
  if (!state.username) {
    const action31 = await dw.app.run("member.get_create_member", {})
    const action55 = member = (action31.object)
  } else {
    const action56 = member = (action36.member)
  }
  const action33 = await dw.app.run("member.update", {"id": member.id, "formData": {password: state.password1}})
  let msg = ("密码修改成功")
  const action63 = msg
  const action64 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(msg)
}
else{
  return null
}
})(store, event)
  if (!state.username) {
    const action18 = dw.app.goToPappUrl("system_settings", {}, {redirectTo: false})
  } else {
    const action61 = dw.goToHref(`feature-login`, {redirectTo: false})
  }
}

const action15 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action16 = await dw.navigateBack({delta: 1})
}

const action24 = actions['func3'] = function (store, event) {
  const state = store.state
  let key = (event.context.eventData)
  const action26 = key
  const action25 = store.commit('setState', {[`state.${key}`]: event.data.detail.value})
}

const action27 = actions['func21'] = function (store, event) {
  const state = store.state
  const action30 = console.log('[func21#action30] event.context.eventData', event.context.eventData)
  const action28 = store.commit('setState', {["state.focus_input"]: event.context.eventData})
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
xdw1y5: {
  color: "#181818",
  fontSize: pm(20),
  fontWeight: "500",
  lineHeight: pm(28),
},
xdw1y6: {
  flexDirection: "column",
},
xdw1y7: {
  flexDirection: "row",
},
xdw1y8: {
  width: pm(200),
  height: pm(32),
  fontSize: pm(12),
  borderTopWidth: pm(0),
  borderTopColor: "#000",
  borderLeftWidth: pm(0),
  borderLeftColor: "#000",
  lineHeight: pm(17),
  paddingTop: pm(4),
  borderRightWidth: pm(0),
  borderRightColor: "#000",
  paddingLeft: pm(4),
  borderBottomWidth: pm(0),
  borderBottomColor: "#000",
  paddingRight: pm(4),
  paddingBottom: pm(4),
},
xdw1y9: {
  marginTop: pm(67),
  alignItems: "center",
  borderBottomWidth: pm(1),
  borderBottomColor: "#e8e8e8",
  flexDirection: "row",
  justifyContent: "space-between",
},
xdw1ya: {
  marginTop: pm(15),
  alignItems: "center",
  borderBottomWidth: pm(1),
  borderBottomColor: "#e8e8e8",
  flexDirection: "row",
  justifyContent: "space-between",
},
xdw1yb: {
  fontSize: pm(15),
  textAlign: "center",
  fontWeight: "500",
  lineHeight: pm(38),
},
xdw1yc: {
  width: pm(213),
  height: pm(38),
  flexDirection: "column",
  backgroundColor: "#ffd132",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw1yd: {
  marginTop: pm(43),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw1ye: {
  paddingTop: pm(39),
  paddingLeft: pm(26),
  paddingRight: pm(26),
  flexDirection: "column",
}
});
const slide = {"type":"172373","key":"c1723731","slug":null,"randomid":"id_651bba0d64a8f2df2bcd39fe","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View2":{"ctx_map":{}},"View3":{"ctx_map":{"extraStyleKeys":[]}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Text13":{"ctx_map":{"text":"确定"}},"Text15":{"ctx_map":{"text":"重置密码"}},"View16":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"DwappCloud1":{"ctx_map":{"bool1":true,"text1":"","color1":"rgb(255, 255, 255)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","select1":"portrait"}},"DwappCloud2":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"NativeInput1":{"ctx_map":{"type":"text","checked":false,"password":true,"placeholder":"再次输入"}},"NativeInput2":{"ctx_map":{"type":"text","checked":false,"password":true,"placeholder":"新密码（6-18位字符，字母+数字）"}}}};
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
const pageGroupSlug = 'app_tongzhua-reset_pwd';

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
      <Xbenchc176286 /* DwappCloud1 */ isCuzBtn={ slide.components.DwappCloud1.ctx_map.bool1 } eventData={ slide.components.DwappCloud1.ctx_map.prop1 } eventData2={ slide.components.DwappCloud1.ctx_map.prop2 } title={ slide.components.DwappCloud1.ctx_map.text1 } backgroundColor={ slide.components.DwappCloud1.ctx_map.color1 } backIcon={ slide.components.DwappCloud1.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud1.ctx_map.image2 } screenType={ slide.components.DwappCloud1.ctx_map.select1 } ></Xbenchc176286>
{!!(slide.components.ViewIf1.ctx_map.value) /* ViewIf1 */ && (<><View /* View16 */   style={styles.xdw1ye}><View /* View7 */   style={styles.xdw1y6}><View /* View8 */   style={styles.xdw1y7}><View /* View9 */   style={styles.xdw1y6}><Text /* Text15 */ style={styles.xdw1y5} >{state.title}</Text></View></View></View>
<View /* View5 */   style={[styles.xdw1y9, (state.platform === 'rnapp' ? 
    state.focus_input === 'password1' ? {
        borderBottomWidth: 1,
        borderBottomColor: '#181818',
    } : {
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
    }
    : state.focus_input === 'password1' ? {
        borderBottomWidth: "1px",
        borderBottomColor: '#181818',
    } : {
        borderBottomWidth: "1px",
        borderBottomColor: '#E8E8E8',
    })]}><XbenchcInput /* NativeInput2 */ style={styles.xdw1y8} value={state.password1} placeholder={slide.components.NativeInput2.ctx_map.placeholder} type={slide.components.NativeInput2.ctx_map.type} password={slide.components.NativeInput2.ctx_map.password}  onChange={getEvent('NativeInput2:onChange:func3:', {eventData: "password1"}, bagForKeyValue, bagForIndex)} onFocus={getEvent('NativeInput2:onFocus:func21:', {eventData: "password1"}, bagForKeyValue, bagForIndex)} /></View>
<View /* View4 */   style={[styles.xdw1ya, (state.platform === 'rnapp' ? 
    state.focus_input === 'password2' ? {
        borderBottomWidth: 1,
        borderBottomColor: '#181818',
    } : {
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
    }
    : state.focus_input === 'password2' ? {
        borderBottomWidth: "1px",
        borderBottomColor: '#181818',
    } : {
        borderBottomWidth: "1px",
        borderBottomColor: '#E8E8E8',
    })]}><XbenchcInput /* NativeInput1 */ style={styles.xdw1y8} value={state.password2} placeholder={slide.components.NativeInput1.ctx_map.placeholder} type={slide.components.NativeInput1.ctx_map.type} password={slide.components.NativeInput1.ctx_map.password}  onChange={getEvent('NativeInput1:onChange:func3:', {eventData: "password2"}, bagForKeyValue, bagForIndex)} onFocus={getEvent('NativeInput1:onFocus:func21:', {eventData: "password2"}, bagForKeyValue, bagForIndex)} /></View>
<View /* View2 */   style={styles.xdw1yd}><XbenchcView /* View3 */   viewStyle={[styles.xdw1yc, (!(state.password1 && state.password2) ? {
    backgroundColor: "#FFF1C6",
} : {
    backgroundColor: "#FFD142",
})]} onClick={getEvent('View3:onClick:func1:', {}, bagForKeyValue, bagForIndex)}><Text /* Text13 */ style={styles.xdw1yb} >{slide.components.Text13.ctx_map.text}</Text></XbenchcView></View>
<Xbenchc275104 /* DwappCloud2 */ valueStyle={ slide.components.DwappCloud2.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud2.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud2.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud2:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104></View></>)}
    </ErrorBoundary>
  )
}
