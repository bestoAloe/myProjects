
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import ComNavBar from '../../xbench/components/ComNavBar'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchUploadContainer from '../../xbench/components/XbenchUploadContainer'
import { Image } from 'expo-image'
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

let action38lock = false
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action10 = state.loaded = (false)
  const action31 = state.member = (null)
  const action37 = state.isLogin = (false)
  return state
}

const action2 = actions['onShow'] = async function (store, event) {
  const state = store.state
  
          const action32 = (dw.platform === 'dwapp')
            ? (await (async () => {
              const action32_object = await dw.app.getUserInfoObject()
              return Boolean(action32_object && action32_object.id)
            })())
            : Boolean(D.siteuser && D.siteuser.id)
          
  const action33 = store.commit('setState', {["state.isLogin"]: action32})
  if (action32) {
    const action5 = await store.dispatch("func1", {})
  }
  const action12 = store.commit('setState', {["state.loaded"]: true})
}

const action3 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action6 = await store.dispatch("func2", {})
}

const action4 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action28 = await dw.app.run("member_web.get_create_member", {})
  
        if ((action28.status) === ("error")) {
          const action29message = (action28.message || "操作错误！")
          const action29title = ("提示")
          action29message && dw.alert(action29title, action29message)
          return {}
        }
        
  const action30 = store.commit('setState', {["state.member"]: action28.object})
}

const action13 = actions['func3'] = function (store, event) {
  const state = store.state
  const action14 = dw.app.goToPappUrl("pshop_siteuser_mobile", {}, {redirectTo: false})
}

const action15 = actions['func4'] = async function (store, event) {
  const state = store.state
  const action38 = await (async () => {
  
      if (action38lock) return true
      action38lock = true
      try {
    const action39 = await dw.app.run("member_admin.update_member", {"avatar": state.member.data.avatar, "nickname": state.member.data.nickname, "role_uuid": state.member.data.role_uuid, "siteuser_id": state.member.data.siteuser_id})
    
        if ((action39.status) === ("error")) {
          const action40message = (action39.message || "操作错误！")
          const action40title = ("提示")
          action40message && dw.alert(action40title, action40message)
          return {}
        }
        
    const action41 = await dw.showToast({"icon": "none", "mask": false, "image": "", "title": "保存成功", "duration": 1500, "content": "保存成功"})
    const action42 = await store.dispatch("func2", {})
  
      } catch (e) {
        throw e
      } finally {
        action38lock = false
      }
      
  })()
}

const action24 = actions['func5'] = function (store, event) {
  const state = store.state
  const action25 = dw.app.goToPappUrl("pshop_siteuser_password", {}, {redirectTo: false})
}

const action26 = actions['func6'] = async function (store, event) {
  const state = store.state
  
          if (dw.platform === 'dwapp') {
            return dw.app.wxGotoLogin()
          } else {
            
        return app.wxGotoLogin({}, '/account/login/?next=' + encodeURIComponent(location.href))
        
          }
          
}

const action43 = actions['func7'] = function (store, event) {
  const state = store.state
  const action44 = store.commit('setState', {["state.member.data.nickname"]: event.data.detail.value})
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
xdw37t: {
  width: pm(60),
  height: pm(60),
  borderTopLeftRadius: pm(999),
  borderTopRightRadius: pm(999),
  borderBottomLeftRadius: pm(999),
  borderBottomRightRadius: pm(999),
},
xdw37u: {
  width: pm(60),
  height: pm(60),
  borderTopWidth: pm(1),
  borderTopColor: "#ffffff",
  borderLeftWidth: pm(1),
  borderLeftColor: "#ffffff",
  borderRightWidth: pm(1),
  borderRightColor: "#ffffff",
  borderBottomWidth: pm(1),
  borderBottomColor: "#ffffff",
  borderTopLeftRadius: pm(999),
  borderTopRightRadius: pm(999),
  borderBottomLeftRadius: pm(999),
  borderBottomRightRadius: pm(999),
},
xdw37v: {},
xdw37w: {
  right: 0,
  width: pm(16),
  bottom: 0,
  height: pm(16),
  position: "absolute",
  borderTopWidth: pm(1),
  borderTopColor: "#ffffff",
  alignItems: "center",
  borderLeftWidth: pm(1),
  borderLeftColor: "#ffffff",
  borderRightWidth: pm(1),
  borderRightColor: "#ffffff",
  borderBottomWidth: pm(1),
  borderBottomColor: "#ffffff",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#fa232f",
  borderTopLeftRadius: pm(999),
  borderTopRightRadius: pm(999),
  borderBottomLeftRadius: pm(999),
  borderBottomRightRadius: pm(999),
},
xdw37x: {
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw37y: {
  color: "#999999",
  fontSize: pm(12),
  lineHeight: pm(30),
},
xdw37z: {
  marginTop: pm(40),
  alignItems: "center",
  marginBottom: pm(30),
  flexDirection: "column",
  justifyContent: "center",
},
xdw380: {
  height: pm(160),
  flexDirection: "column",
},
xdw381: {
  width: "100%",
  height: pm(24),
  fontSize: pm(12),
  borderTopWidth: pm(0),
  borderTopColor: "#ddd",
  textAlign: "right",
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
xdw382: {
  paddingTop: pm(10),
  paddingLeft: pm(10),
  borderBottomWidth: pm(1),
  borderBottomColor: "#eeeeee",
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
  justifyContent: "space-between",
},
xdw383: {
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw384: {
  paddingTop: pm(15),
  paddingLeft: pm(15),
  paddingRight: pm(15),
  flexDirection: "column",
  paddingBottom: pm(15),
},
xdw385: {
  fontSize: pm(14),
  fontWeight: "500",
  lineHeight: pm(24),
},
xdw386: {
  width: pm(260),
  height: pm(40),
  marginTop: pm(32),
  alignItems: "center",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: pm(10),
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: "#ffd132",
  borderTopLeftRadius: pm(999),
  borderTopRightRadius: pm(999),
  borderBottomLeftRadius: pm(999),
  borderBottomRightRadius: pm(999),
},
xdw387: {
  color: "#999999",
  fontSize: pm(12),
  textAlign: "center",
  lineHeight: pm(20),
},
xdw388: {
  flexDirection: "column",
},
xdw389: {
  width: pm(68),
  height: pm(74),
},
xdw38a: {
  color: "#999999",
  fontSize: pm(13),
  marginTop: pm(24),
  lineHeight: pm(24),
},
xdw38b: {
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(24),
},
xdw38c: {
  width: pm(100),
  height: pm(36),
  marginTop: pm(24),
  alignItems: "center",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: pm(32),
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: "#ffd132",
  borderTopLeftRadius: pm(999),
  borderTopRightRadius: pm(999),
  borderBottomLeftRadius: pm(999),
  borderBottomRightRadius: pm(999),
},
xdw38d: {
  flexGrow: 1,
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw38e: {
  flexGrow: 1,
  flexDirection: "column",
}
});
const slide = {"type":"176726","key":"c1767261","slug":null,"randomid":"id_895ecd56f59849835872a54b","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":"点击上传头像"}},"Text3":{"ctx_map":{"text":"这是一个文本组件"}},"Text4":{"ctx_map":{"text":"这是一个文本组件"}},"Text5":{"ctx_map":{"text":"这是一个文本组件"}},"Text6":{"ctx_map":{"text":"保存"}},"Text7":{"ctx_map":{"text":"修改密码"}},"Text8":{"ctx_map":{"text":"立即登录"}},"Text9":{"ctx_map":{"text":"您尚未登录, 点击前往登录"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,100,100","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image2":{"ctx_map":{"fop":"e,100,100","src":"u/dev070/2023/03/02/8iCwUXry94rrKdEPsYVxuL/default_avatar.png"}},"Image3":{"ctx_map":{"fop":"e,250,272","src":"u/dev070/2023/03/18/zBG5PnziQw38UULFe7dZCQ/Fm2emRkBQNm8oyfKgtC_2JFis76O.png"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{"className":"b-btn"}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{"className":"b-btn"}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewIf5":{"ctx_map":{"value":true}},"SvgImage1":{"ctx_map":{"src":"u/dev070/2023/03/18/JomVVK6zkKk4bLuAr7Uci2/1198237.svg","color":"#ffffff","width":11,"height":11,"SvgImageManage":"SvgImageManage"}},"SvgImage2":{"ctx_map":{"src":"u/dev070/2023/03/18/EVRgGuvbuX8W95NRtZPRjM/133624.svg","color":"#181818","width":18,"height":18,"SvgImageManage":"SvgImageManage"}},"SvgImage3":{"ctx_map":{"src":"u/dev070/2023/03/18/o5pSBE7Cr4C32Gun9dKGSb/564384.svg","color":"#181818","width":18,"height":18,"SvgImageManage":"SvgImageManage"}},"SvgImage4":{"ctx_map":{"src":"u/dev070/2023/03/18/65AuFGszzydynNQoJEFk7H/1053358.svg","color":"#181818","width":18,"height":18,"SvgImageManage":"SvgImageManage"}},"SvgImage5":{"ctx_map":{"src":"u/dev070/2023/03/18/R4vgoA8b95ihAdB5gXw5Tc/667206.svg","color":"#181818","width":18,"height":18,"SvgImageManage":"SvgImageManage"}},"ComNavBar1":{"ctx_map":{"theme":"default","title":"个人设置","headerBackgroundColor":"#ffffff","statusBarBackgroundColor":"#ffffff"}},"NativeInput1":{"ctx_map":{"type":"text"}},"UploadContainer1":{"ctx_map":{"value":"","accept":"image/*","multiple":false,"provider":"default","dwappCount":1,"dwappAccept":"image","rnappAccept":"ImagePicker:Images","showProgress":true,"dwappExtension":"","rnappExtension":"*/*"}}}};

const pageGroupSlug = 'app_tongzhua-pshop_siteuser_setting';

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
      <ComNavBar title={ "个人设置" } theme={ "default" } statusBarBackgroundColor={ "#ffffff" } headerBackgroundColor={ "#ffffff" }></ComNavBar>
<View /* View1 */   style={styles.xdw38e}>{!!(state.isLogin) /* ViewIf3 */ && (<>{!!(state.isLogin) /* ViewIf4 */ && (<><View /* View2 */   style={styles.xdw380}><View /* View5 */   style={styles.xdw37z}><View /* View3 */   style={styles.xdw37x}><XbenchUploadContainer /* UploadContainer1 */ value={ state.member.data.avatar } provider={ "default" } multiple={ false } dwappCount={ 1 } rnappAccept={ "ImagePicker:Images" } rnappExtension={ "*/*" }  onChange={getEvent('UploadContainer1:input::member.data.avatar', {}, bagForKeyValue, bagForIndex)}>{!!(state.member.data.avatar) /* ViewIf1 */ && (<><XbenchcImage /* Image1 */ style={styles.xdw37t} source={dwtools.qiniu(state.member.data.avatar, slide.components.Image1.ctx_map.fop)}  /></>)}
{!!(!state.member.data.avatar) /* ViewIf2 */ && (<><XbenchcImage /* Image2 */ style={styles.xdw37u} source={dwtools.qiniu(slide.components.Image2.ctx_map.src, slide.components.Image2.ctx_map.fop)}  /></>)}</XbenchUploadContainer>
<View /* View4 */   style={styles.xdw37w}><Image /* SvgImage1 */ style={[ styles.xdw37v, { width: pm(11), height: pm(11) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev070/2023/03/18/JomVVK6zkKk4bLuAr7Uci2/1198237.svg"), width: pm(11), height: pm(11) }} /></View></View>
<Text /* Text1 */ style={styles.xdw37y} >{slide.components.Text1.ctx_map.text}</Text></View></View>
<View /* View6 */   style={styles.xdw384}><View /* View7 */   style={styles.xdw382}><Image /* SvgImage2 */ style={[ styles.xdw37v, { width: pm(18), height: pm(18) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev070/2023/03/18/EVRgGuvbuX8W95NRtZPRjM/133624.svg"), width: pm(18), height: pm(18) }} />
<XbenchcInput /* NativeInput1 */ style={styles.xdw381} value={state.member.data.nickname} type={slide.components.NativeInput1.ctx_map.type}  onChange={getEvent('NativeInput1:onChange:func7:', {}, bagForKeyValue, bagForIndex)} /></View>
<View /* View8 */   style={styles.xdw382}><Image /* SvgImage3 */ style={[ styles.xdw37v, { width: pm(18), height: pm(18) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev070/2023/03/18/o5pSBE7Cr4C32Gun9dKGSb/564384.svg"), width: pm(18), height: pm(18) }} />
<Text /* Text3 */ style={styles.xdw383} >{state.member.data.mobile}</Text></View>
<View /* View9 */   style={styles.xdw382}><Image /* SvgImage4 */ style={[ styles.xdw37v, { width: pm(18), height: pm(18) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev070/2023/03/18/65AuFGszzydynNQoJEFk7H/1053358.svg"), width: pm(18), height: pm(18) }} />
<Text /* Text4 */ style={styles.xdw383} >{state.member.data.service_agency_uuid__toone ? state.member.data.service_agency_uuid__toone.data.name : "无"}</Text></View>
<View /* View10 */   style={styles.xdw382}><Image /* SvgImage5 */ style={[ styles.xdw37v, { width: pm(18), height: pm(18) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev070/2023/03/18/R4vgoA8b95ihAdB5gXw5Tc/667206.svg"), width: pm(18), height: pm(18) }} />
<Text /* Text5 */ style={styles.xdw383} >{state.member.data.role_uuid__toone ? state.member.data.role_uuid__toone.data.name : "无"}</Text></View></View>
<XbenchcView /* View11 */   viewStyle={[styles["b-btn"], styles.xdw386]} onClick={getEvent('View11:onClick:func4:', {}, bagForKeyValue, bagForIndex)}><Text /* Text6 */ style={styles.xdw385} >{slide.components.Text6.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View12 */   viewStyle={styles.xdw388} onClick={getEvent('View12:onClick:func5:', {}, bagForKeyValue, bagForIndex)}><Text /* Text7 */ style={styles.xdw387} >{slide.components.Text7.ctx_map.text}</Text></XbenchcView></>)}
{!!(!state.isLogin) /* ViewIf5 */ && (<><View /* View13 */   style={styles.xdw38d}><XbenchcImage /* Image3 */ style={styles.xdw389} source={dwtools.qiniu(slide.components.Image3.ctx_map.src, slide.components.Image3.ctx_map.fop)}  />
<Text /* Text9 */ style={styles.xdw38a} >{slide.components.Text9.ctx_map.text}</Text>
<XbenchcView /* View14 */   viewStyle={[styles["b-btn"], styles.xdw38c]} onClick={getEvent('View14:onClick:func6:', {}, bagForKeyValue, bagForIndex)}><Text /* Text8 */ style={styles.xdw38b} >{slide.components.Text8.ctx_map.text}</Text></XbenchcView></View></>)}</>)}</View>
    </ErrorBoundary>
  )
}
