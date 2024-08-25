
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import ComNavBar from '../../xbench/components/ComNavBar'
import { Image } from 'expo-image'
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

const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action15 = state.loaded = (false)
  const action29 = state.mobile = ("")
  const action30 = state.countdown = (0)
  const action31 = state.code = ("")
  const action32 = state.timer = (null)
  const action60 = state.password = ('')
  const action65 = state.siteuser = (null)
  const action73 = state.password2 = ('')
  /* action96: 语言设置 */
  const action124 = state.sendText = ('')
  return state
}

const action2 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action5 = await store.dispatch("func1", {})
  const action16 = store.commit('setState', {["state.loaded"]: true})
}

const action3 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action6 = await store.dispatch("func2", {})
}

const action4 = actions['func2'] = async function (store, event) {
  const state = store.state
  
          const action61 = (dw.platform === 'dwapp')
            ? await dw.app.getUserInfoObject({refresh: false})
            : await app.getUserInfoObject({refresh: false})
          
  const action62 = store.commit('setState', {["state.mobile"]: action61.mobile, ["state.siteuser"]: action61})
}

const action33 = actions['func5'] = async function (store, event) {
  const state = store.state
  const action34 = (() => {
    if (!(v => v && typeof v === 'string' && /^1\d{10}$/.test(v))(state.mobile)) return "请输入正确的手机号" // mobile
  })()
  if (action34) return dw.alert("提示" || '提示', action34)
  
        if (!!(state.countdown !== 0) === (true)) {
          const action35message = ("")
          const action35title = ("提示")
          action35message && dw.alert(action35title, action35message)
          return null
        }
        
  const action38 = await dw.showToast({"icon": "none", "mask": false, "image": "", "title": "发送成功", "duration": 1500, "content": "发送成功"})
  const action39 = store.commit('setState', {["state.countdown"]: 60})
  const action40 = actions['func9'] = function (store, event) {
    const state = store.state
    if ((state.countdown > 0) === (true)) {
      const action43 = store.commit('setState', {["state.countdown"]: state.countdown - 1})
    } else {
      const action45 = clearInterval(state.timer)
    }
  }

  const action46 = setInterval(() => (action40)(store, {}), 1000)
  const action47 = store.commit('setState', {["state.timer"]: action46})
}

const action55 = actions['func11'] = function (store, event) {
  const state = store.state
  const action72 = dw.app.goToPappUrl("siteuser_bindmobile", {}, {redirectTo: false})
}

const action66 = actions['func12'] = async function (store, event) {
  const state = store.state
  
          const action67 = (dw.platform === 'dwapp')
          ? (await (async () => {
            const LoginServiceClass = dw.getService('login').buildLoginService(dw)

            class MyLoginServiceClass extends LoginServiceClass {
            // 可以重写默认方法
            }

            const loginService = new MyLoginServiceClass(dw)
            if (!loginService.validateMobile(state.mobile) || !state.code) {
              return {
                status: 'error',
                message: '请填写正确的手机号和验证码'
              }
            }
            if (!state.password) {
              return {
                status: 'error',
                message: '请填写密码'
              }
            }
            if (state.password !== state.password2) {
              return {
                status: 'error',
                message: '两次输入的密码不一致'
              }
            }

            dw.wx.showLoading({ title: '密码重置中...' })
            const res = await dw.request('post/company_account/reset_password_by_mobile', {
              mobile: state.mobile,
              code: state.code,
              password1: state.password,
              password2: state.password2
            })
            dw.wx.hideLoading()
            if (res.data.status === 'success') {
              loginService.setSiteuserToken(res.data.siteuser_token)
              return {
                status: 'success',
                message: '密码重置成功'
              }
            } else {
              return {
                status: 'error',
                message: res.data.message
              }
            }
          })())
          : 
        (await app.Api.company_account.reset_password_by_mobile({
          mobile: state.mobile,
          code: state.code,
          password1: state.password,
          password2: state.password2
        })).data
        
          
  if (action67.status === 'error') {
    const action115 = action67.message = ('修改失败，请确认密码输入一致和验证码正确')
    const action116response = await dw.showModal({
        title: "提示",
        content: action67.message,
        confirmText: "确认",
        confirmColor: "#576b95",
        showCancel: false,
        cancelText: "取消",
        cancelColor: "#000000"
      })
    const action116 = action116response && action116response.confirm
    return event
  }
  const action69 = await dw.showToast({"icon": "success", "mask": false, "image": "", "title": "修改成功", "duration": 1500, "content": "修改成功"})
  const action76 = store.commit('setState', {["state.countdown"]: 0})
  const action71 = await dw.navigateBack({delta: 1})
}

const action74 = actions['func13'] = async function (store, event) {
  const state = store.state
  
          if (dw.platform === 'dwapp') {
            return dw.app.wxGotoLogin()
          } else {
            
        return app.wxGotoLogin({}, '/account/login/?next=' + encodeURIComponent(location.href))
        
          }
          
}

/* action79: 语言设置 */
const action125 = actions['func14'] = function (store, event) {
  const state = store.state
  let key = (event.context.eventData)
  const action126 = key
  const action127 = store.commit('setState', {[`state.${key}`]: event.data.detail.value})
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
xdw391: {},
xdw392: {
  width: "100%",
  height: pm(24),
  fontSize: pm(12),
  borderTopWidth: pm(0),
  borderTopColor: "#ddd",
  textAlign: "left",
  borderLeftWidth: pm(0),
  borderLeftColor: "#ddd",
  lineHeight: pm(24),
  paddingTop: pm(4),
  borderRightWidth: pm(0),
  borderRightColor: "#ddd",
  paddingLeft: pm(4),
  borderBottomWidth: pm(0),
  borderBottomColor: "#ddd",
  paddingRight: pm(4),
  paddingBottom: pm(4),
},
xdw393: {
  height: pm(40),
  paddingTop: pm(10),
  paddingLeft: pm(10),
  borderBottomWidth: pm(1),
  borderBottomColor: "#eeeeee",
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
  justifyContent: "space-between",
},
xdw394: {
  width: pm(160),
  height: pm(24),
  fontSize: pm(12),
  borderTopWidth: pm(0),
  borderTopColor: "#ddd",
  textAlign: "left",
  borderLeftWidth: pm(0),
  borderLeftColor: "#ddd",
  lineHeight: pm(24),
  paddingTop: pm(4),
  borderRightWidth: pm(0),
  borderRightColor: "#ddd",
  paddingLeft: pm(4),
  borderBottomWidth: pm(0),
  borderBottomColor: "#ddd",
  paddingRight: pm(4),
  paddingBottom: pm(4),
},
xdw395: {
  fontSize: pm(12),
  lineHeight: pm(24),
  marginLeft: "auto",
},
xdw396: {
  color: "#666666",
  fontSize: pm(12),
  lineHeight: pm(24),
  marginLeft: "auto",
},
xdw397: {
  width: pm(255),
  flexDirection: "row",
},
xdw398: {
  height: pm(40),
  paddingTop: pm(10),
  paddingLeft: pm(10),
  borderBottomWidth: pm(1),
  borderBottomColor: "#eeeeee",
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
  justifyContent: "flex-start",
},
xdw399: {
  paddingTop: pm(15),
  paddingLeft: pm(15),
  paddingRight: pm(15),
  flexDirection: "column",
  paddingBottom: pm(15),
},
xdw39a: {
  color: "#181818",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw39b: {
  width: pm(210),
  bottom: pm(10),
  height: pm(38),
  alignItems: "center",
  marginLeft: pm(55),
  marginRight: pm(55),
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#FFD355",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw39c: {
  flexGrow: 1,
  flexDirection: "column",
}
});
const slide = {"type":"176727","key":"c1767271","slug":null,"randomid":"id_2eaa99689a644c54b73486ec","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text5":{"ctx_map":{"text":"发送"}},"Text6":{"ctx_map":{"text":"发送"}},"Text7":{"ctx_map":{"text":"确认"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"SvgImage2":{"ctx_map":{"src":"u/dev064/2023/03/24/REfBJBLyWPs67gLAXv7JGL/1277254.svg","color":"#181818","width":18,"height":18,"SvgImageManage":"SvgImageManage"}},"SvgImage3":{"ctx_map":{"src":"u/dev070/2023/03/18/o5pSBE7Cr4C32Gun9dKGSb/564384.svg","color":"#181818","width":18,"height":18,"SvgImageManage":"SvgImageManage"}},"SvgImage4":{"ctx_map":{"src":"u/dev070/2023/03/18/EVRgGuvbuX8W95NRtZPRjM/133624.svg","color":"#181818","width":18,"height":18,"SvgImageManage":"SvgImageManage"}},"SvgImage5":{"ctx_map":{"src":"u/dev064/2023/03/24/REfBJBLyWPs67gLAXv7JGL/1277254.svg","color":"#181818","width":18,"height":18,"SvgImageManage":"SvgImageManage"}},"ComNavBar1":{"ctx_map":{"theme":"default","title":"密码重置","headerBackgroundColor":"#ffffff","statusBarBackgroundColor":"#ffffff"}},"NativeInput1":{"ctx_map":{"type":"number","placeholder":"请输入手机号"}},"NativeInput2":{"ctx_map":{"type":"text","placeholder":"请输入短信验证码"}},"NativeInput3":{"ctx_map":{"type":"text","placeholder":"请输入新的密码"}},"NativeInput4":{"ctx_map":{"type":"text","placeholder":"新密码确认"}}}};

const pageGroupSlug = 'app_tongzhua-pshop_siteuser_password';

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
      <ComNavBar title={ "密码重置" } theme={ "default" } statusBarBackgroundColor={ "#ffffff" } headerBackgroundColor={ "#ffffff" }></ComNavBar>
<View /* View1 */   style={styles.xdw39c}><View /* View2 */   style={styles.xdw399}><View /* View6 */   style={styles.xdw393}><Image /* SvgImage4 */ style={[ styles.xdw391, { width: pm(18), height: pm(18) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev070/2023/03/18/EVRgGuvbuX8W95NRtZPRjM/133624.svg"), width: pm(18), height: pm(18) }} />
<XbenchcInput /* NativeInput1 */ style={styles.xdw392} value={state.mobile} placeholder={slide.components.NativeInput1.ctx_map.placeholder} type={slide.components.NativeInput1.ctx_map.type}  onChange={getEvent('NativeInput1:onChange:func14:', {eventData: "mobile"}, bagForKeyValue, bagForIndex)} /></View>
<View /* View5 */   style={styles.xdw398}><Image /* SvgImage3 */ style={[ styles.xdw391, { width: pm(18), height: pm(18) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev070/2023/03/18/o5pSBE7Cr4C32Gun9dKGSb/564384.svg"), width: pm(18), height: pm(18) }} />
<View /* View7 */   style={styles.xdw397}><XbenchcInput /* NativeInput2 */ style={styles.xdw394} value={state.code} placeholder={slide.components.NativeInput2.ctx_map.placeholder} type={slide.components.NativeInput2.ctx_map.type}  onChange={getEvent('NativeInput2:onChange:func14:', {eventData: "code"}, bagForKeyValue, bagForIndex)} />
{!!(state.countdown <= 0) /* ViewIf1 */ && (<><Text /* Text5 */ style={styles.xdw395} >{slide.components.Text5.ctx_map.text}</Text></>)}
{!!(state.countdown > 0) /* ViewIf2 */ && (<><Text /* Text6 */ style={styles.xdw396} >{state.countdown + "s后再次发送"}</Text></>)}</View></View>
<View /* View4 */   style={styles.xdw393}><Image /* SvgImage2 */ style={[ styles.xdw391, { width: pm(18), height: pm(18) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev064/2023/03/24/REfBJBLyWPs67gLAXv7JGL/1277254.svg"), width: pm(18), height: pm(18) }} />
<XbenchcInput /* NativeInput3 */ style={styles.xdw392} value={state.password} placeholder={slide.components.NativeInput3.ctx_map.placeholder} type={slide.components.NativeInput3.ctx_map.type}  onChange={getEvent('NativeInput3:onChange:func14:', {eventData: 'password'}, bagForKeyValue, bagForIndex)} /></View>
<View /* View3 */   style={styles.xdw393}><Image /* SvgImage5 */ style={[ styles.xdw391, { width: pm(18), height: pm(18) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev064/2023/03/24/REfBJBLyWPs67gLAXv7JGL/1277254.svg"), width: pm(18), height: pm(18) }} />
<XbenchcInput /* NativeInput4 */ style={styles.xdw392} value={state.password2} placeholder={slide.components.NativeInput4.ctx_map.placeholder} type={slide.components.NativeInput4.ctx_map.type}  onChange={getEvent('NativeInput4:onChange:func14:', {eventData: 'password2'}, bagForKeyValue, bagForIndex)} /></View></View>
<XbenchcView /* View8 */   viewStyle={styles.xdw39b} onClick={getEvent('View8:onClick:func12:', {}, bagForKeyValue, bagForIndex)}><Text /* Text7 */ style={styles.xdw39a} >{slide.components.Text7.ctx_map.text}</Text></XbenchcView></View>
    </ErrorBoundary>
  )
}
