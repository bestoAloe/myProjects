
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import { Shadow } from 'react-native-shadow-2'
import XbenchcScrollView from '../../xbench/xbenchc/components/XbenchcScrollView'
import Xbenchc168616 from '../components/Xbenchc168616'
import XbenchcModal from '../../xbench/xbenchc/components/XbenchcModal'
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
const action69 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action3 = state.device = (null)
  const action4 = state.device_member = (null)
  const action5 = state.platform = ("dwapp")
  const action19 = state.share_pop = (false)
  const action38 = state.config = (null)
  return state
}

const action11 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action12 = store.commit('setState', {["state.platform"]: dw.platform})
  const action13 = await store.dispatch("func1", {})
  const action37 = await store.dispatch("func8", {})
  const action62 = await store.dispatch("func7", {})
}

const action6 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action7 = await dw.app.run("device.user_get", {"uuid": dw.query.uuid || "f5892e18-23d7-4903-a044-97094e97c7af"})
  
        if ((action7.status) === ("error")) {
          const action8message = (action7.message || "操作错误！")
          const action8title = ("提示")
          action8message && dw.alert(action8title, action8message)
          return {}
        }
        
  const action9 = store.commit('setState', {["state.device"]: action7.object, ["state.device_member"]: action7.device_member})
}

const action70 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action71 = modalInstance = (event.data)
  const action72 = console.log('[getModalInstance#action72] 打印(modalInstance)', modalInstance)
}

const action15 = actions['func3'] = function (store, event) {
  const state = store.state
  let slug = (event.context.eventData)
  const action16 = slug
  const action17 = console.log('[func3#action17] 打印(slug)的返回值', slug)
  const action18 = dw.app.goToPappUrl(slug, {"uuid": state.device.uuid}, {redirectTo: false})
}

const action20 = actions['func4'] = function (store, event) {
  const state = store.state
  const action22 = store.commit('setState', {["state.share_pop"]: true})
}

const action21 = actions['func5'] = function (store, event) {
  const state = store.state
  const action23 = store.commit('setState', {["state.share_pop"]: false})
}

const action24 = actions['func6'] = async function (store, event) {
  const state = store.state
  let value = (event.context.eventData)
  const action25 = value
  const action33 = console.log('[func6#action33] 打印(value)的返回值', value)
  const action26 = store.commit('setState', {["state.device_member.data.default_share"]: value})
  const action28 = await dw.showLoading({
    title: "",
    mask: false
  })
  const action27 = await dw.app.run("device_member.update", {"id": state.device_member.id, "formData": {default_share: value}})
  const action29 = await dw.hideLoading()
  
        if ((action27.status) === ("error")) {
          const action30message = (action27.message || "操作错误！")
          const action30title = ("提示")
          action30message && dw.alert(action30title, action30message)
          return {}
        }
        
  let message = ("编辑成功")
  const action74 = message
  const action75 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  const action32 = await store.dispatch("func5", {})
}

const action35 = actions['func8'] = async function (store, event) {
  const state = store.state
  const action36 = await (async (store, event) => {
const key = "share_device/currentItem"
const jsonValue = JSON.stringify(state.device_member)
if(state.platform === 'rnapp'){
  const AsyncStorage = dw.getNativePackage('AsyncStorage')
  await AsyncStorage.setItem(key, jsonValue)
}
else{
  window.localStorage.setItem(key, jsonValue)
}
})(store, event)
}

const action40 = actions['func9'] = async function (store, event) {
  const state = store.state
  const action67 = await dw.showLoading({
    title: "",
    mask: false
  })
  const action63 = await dw.app.run("invite_code.create", {"formData": {/**/  type: "device",/**/  state: "to_use",/**/  extra_data: {/**/    device_id: state.device.data.device_id/**/  }/**/}})
  const action68 = await dw.hideLoading()
  
        if ((action63.status) === ("error")) {
          const action65message = (action63.message || "操作错误！")
          const action65title = ("提示")
          action65message && dw.alert(action65title, action65message)
          return {}
        }
        
  let code = (action63.object)
  const action64 = code
  const action66 = console.log('[func9#action66] 打印(code)的返回值', code)
  if (dw.platform === 'rnapp') {
    
        const action49 = dw.app.RnappBridge && await dw.app.RnappBridge.share('shareWebpage', {
          title: "铜爪用户邀请您参与共享设备管理啦",
          description: state.config.data.share_desc,
          thumbImageUrl: dw.filters.qiniu(state.config.data.share_image),
          webpageUrl: `${state.config.data.share_href}?code=${code.data.code}`,
          scene: 0
        })
        
  }
}

const action59 = actions['func7'] = async function (store, event) {
  const state = store.state
  const action60 = await dw.app.run("config.get", {})
  const action61 = store.commit('setState', {["state.config"]: action60.object})
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
xdw1pg: {
  flexGrow: 1,
  fontSize: pm(12),
  flexShrink: 1,
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw1ph: {
  width: pm(12),
  height: pm(12),
},
xdw1pi: {
  flexWrap: "nowrap",
  alignItems: "center",
  marginLeft: pm(10.236),
  paddingTop: pm(13),
  borderBottomWidth: pm(0),
  borderBottomColor: "#eeeeee",
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(13),
  justifyContent: "flex-start",
},
xdw1pj: {
  width: pm(299.528),
  height: pm(47.768),
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10.236),
  borderTopRightRadius: pm(10.236),
  borderBottomLeftRadius: pm(10.236),
  borderBottomRightRadius: pm(10.236),
},
xdw1pk: {
  width: pm(299.528),
  height: pm(47.768),
  marginTop: pm(13.648),
  marginLeft: pm(10.236),
  marginRight: pm(10.236),
  flexDirection: "column",
  borderTopLeftRadius: pm(10.236),
  borderTopRightRadius: pm(10.236),
  borderBottomLeftRadius: pm(10.236),
  borderBottomRightRadius: pm(10.236),
},
xdw1pl: {
  width: pm(23.884),
  height: pm(23.884),
  marginRight: pm(10),
},
xdw1pm: {
  color: "#181818",
  flexGrow: 1,
  fontSize: pm(12),
  flexShrink: 1,
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw1pn: {
  height: pm(47.768),
  flexWrap: "nowrap",
  alignItems: "center",
  marginLeft: pm(10.236),
  paddingTop: pm(13),
  borderBottomWidth: pm(0),
  borderBottomColor: "#eeeeee",
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(13),
  justifyContent: "flex-start",
},
xdw1pq: {
  width: pm(299.528),
  height: pm(143.304),
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10.236),
  borderTopRightRadius: pm(10.236),
  borderBottomLeftRadius: pm(10.236),
  borderBottomRightRadius: pm(10.236),
},
xdw1pr: {
  width: pm(299.528),
  height: pm(143.304),
  marginTop: pm(13.648),
  marginLeft: pm(10.236),
  marginRight: pm(10.236),
  flexDirection: "column",
  borderTopLeftRadius: pm(10.236),
  borderTopRightRadius: pm(10.236),
  borderBottomLeftRadius: pm(10.236),
  borderBottomRightRadius: pm(10.236),
},
xdw1ps: {
  height: pm(600),
  flexDirection: "column",
  backgroundColor: "#f8f8f8",
},
xdw1pt: {
  flex: 1,
  width: "100%",
  overflow: "scroll",
  borderTopWidth: pm(1),
  borderTopColor: "#eeeeee",
  backgroundColor: "#f8f8f8",
},
xdw1pu: {
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw1pv: {
  color: "#999999",
  fontSize: pm(10),
  lineHeight: pm(15),
},
xdw1pw: {
  flexDirection: "column",
},
xdw1px: {
  marginLeft: "auto",
  flexDirection: "column",
},
xdw1py: {
  fontSize: pm(12),
  alignItems: "center",
  fontWeight: "500",
  lineHeight: pm(17),
  paddingTop: pm(15),
  paddingLeft: pm(17),
  paddingRight: pm(17),
  flexDirection: "row",
  paddingBottom: pm(15),
},
xdw1pz: {
  width: pm(303),
  height: pm(1),
  marginLeft: pm(17),
  flexDirection: "column",
  backgroundColor: "#F0F0F0",
},
xdw1q0: {
  paddingTop: pm(14),
  flexDirection: "column",
  paddingBottom: pm(43),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
},
xdw1q1: {
  flex: 1,
  zIndex: 10,
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "flex-end",
}
});
const slide = {"type":"171148","key":"c1711481","slug":null,"randomid":"id_777ee49c4aa76d695857b7f5","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image3":{"ctx_map":{"fop":"e,48,48","src":"u/dev064/2023/03/02/ttsJTAJRAMgZSce2wW9Ntf/SketchPng95703d5ca5e4cb2f72a706dbb437aeac6e37b87a602c52e07d51a98de6d0c969.png","buildToLocal":false}},"Image4":{"ctx_map":{"fop":"e,48,48","src":"u/dev064/2023/03/02/HgJS8dbte7giQYrVUPU9xS/SketchPngd7ec5079c7b795291bafc4812768be57c2c4ec4ab3907aa84b606ad968ac4d72.png","buildToLocal":true}},"Image5":{"ctx_map":{"fop":"e,48,48","src":"u/dev064/2023/03/02/skhjJswZVajiEMosMUSjCa/SketchPng235d3037987693991f278c4376a038e33c32d6824ea29fb76dbc39eda455e93f.png","buildToLocal":true}},"Image6":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Image7":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Modal1":{"ctx_map":{"mask":true,"value":false,"baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Text13":{"ctx_map":{"text":"默认共享权限"}},"Text14":{"ctx_map":{"text":"仅直播"}},"Text15":{"ctx_map":{"text":"共享管理"}},"Text19":{"ctx_map":{"text":"QQ共享"}},"Text21":{"ctx_map":{"text":"微信共享"}},"Text23":{"ctx_map":{"text":"搜索手机号码"}},"Text24":{"ctx_map":{"text":"仅直播"}},"Text25":{"ctx_map":{"text":"可观看实时视频和逗宠"}},"Text26":{"ctx_map":{"text":"允许控制设备出粮，查看喂食记录、精彩视频"}},"Text27":{"ctx_map":{"text":"允许控制"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"DwappCloud1":{"ctx_map":{"bool1":true,"text1":"18pm","text2":"18pm","image1":"u/dev064/2023/03/01/moxNkoLyrMKUFg2bfS9x5R/SketchPng8141b19c4766ab5e73849b84c0a48779747796c199c154adbfcea8c703d6cee7.png","image2":"u/dev064/2023/03/01/pwBaNEGk3uZTb6mWhscFmM/SketchPng74b9a31b4d49ae3bbde44f8c192072f3a848c1549574511dc2220abd9ef72aef.png"}},"DwappCloud2":{"ctx_map":{"bool1":true,"text1":"18pm","text2":"18pm","image1":"u/dev064/2023/03/01/moxNkoLyrMKUFg2bfS9x5R/SketchPng8141b19c4766ab5e73849b84c0a48779747796c199c154adbfcea8c703d6cee7.png","image2":"u/dev064/2023/03/01/pwBaNEGk3uZTb6mWhscFmM/SketchPng74b9a31b4d49ae3bbde44f8c192072f3a848c1549574511dc2220abd9ef72aef.png"}},"DwappCloud3":{"ctx_map":{"bool1":true,"bool2":false,"text1":"共享设备","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud4":{"ctx_map":{"bool1":true,"text1":"18pm","text2":"18pm","image1":"u/dev064/2023/03/01/moxNkoLyrMKUFg2bfS9x5R/SketchPng8141b19c4766ab5e73849b84c0a48779747796c199c154adbfcea8c703d6cee7.png","image2":"u/dev064/2023/03/01/pwBaNEGk3uZTb6mWhscFmM/SketchPng74b9a31b4d49ae3bbde44f8c192072f3a848c1549574511dc2220abd9ef72aef.png"}},"DwappCloud5":{"ctx_map":{"bool1":true,"text1":"18pm","text2":"18pm","image1":"u/dev064/2023/03/01/moxNkoLyrMKUFg2bfS9x5R/SketchPng8141b19c4766ab5e73849b84c0a48779747796c199c154adbfcea8c703d6cee7.png","image2":"u/dev064/2023/03/01/pwBaNEGk3uZTb6mWhscFmM/SketchPng74b9a31b4d49ae3bbde44f8c192072f3a848c1549574511dc2220abd9ef72aef.png"}},"DwappCloud6":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"ScrollView2":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[]}},"ShadowView1":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}},"ShadowView2":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}}}};
slide.components.DwappCloud3.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  flexDirection: "column",
};
slide.components.DwappCloud6.ctx_map.valueStyle = {
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
slide.components.DwappCloud6.ctx_map.containerStyle = {
  marginBottom: pm(18),
  flexDirection: "column",
};
slide.components.DwappCloud6.ctx_map.valueInputStyle = {
  color: "#333333",
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-share_device';

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
      <Xbenchc176286 /* DwappCloud3 */ isCuzBtn={ slide.components.DwappCloud3.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud3.ctx_map.bool2 } eventData={ slide.components.DwappCloud3.ctx_map.prop1 } eventData2={ slide.components.DwappCloud3.ctx_map.prop2 } title={ slide.components.DwappCloud3.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud3.ctx_map.text2 } confirmText={ slide.components.DwappCloud3.ctx_map.text3 } cancelText={ slide.components.DwappCloud3.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud3.ctx_map.color1 } confirmColor={ slide.components.DwappCloud3.ctx_map.color2 } cancelColor={ slide.components.DwappCloud3.ctx_map.color3 } backIcon={ slide.components.DwappCloud3.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud3.ctx_map.image2 } titleStyle={ slide.components.DwappCloud3.ctx_map.style1 } screenType={ slide.components.DwappCloud3.ctx_map.select1 } ></Xbenchc176286>
<XbenchcScrollView /* ScrollView2 */ style={styles.xdw1pt} scrollX={ false } scrollY={ true } ><View /* View18 */   style={styles.xdw1ps}>{!!(state.device_member) /* ViewIf1 */ && (<><Shadow containerStyle={styles.xdw1pk} {...({ offset: [0, 4], distance: 14, startColor: 'rgb(0,0,0,0.05)' })}><View /* View1 */   style={styles.xdw1pj}><XbenchcView /* View3 */   viewStyle={styles.xdw1pi} onClick={getEvent('View3:onClick:func3:', {eventData: "share_setting"}, bagForKeyValue, bagForIndex)}><Text /* Text15 */ style={styles.xdw1pg} >{slide.components.Text15.ctx_map.text}</Text>
<XbenchcImage /* Image6 */ style={styles.xdw1ph} source={dwtools.qiniu(slide.components.Image6.ctx_map.src, slide.components.Image6.ctx_map.fop)}  /></XbenchcView></View></Shadow>
<Shadow containerStyle={styles.xdw1pr} {...({ offset: [0, 4], distance: 14, startColor: 'rgb(0,0,0,0.05)' })}><View /* View4 */   style={styles.xdw1pq}><XbenchcView /* View8 */   viewStyle={styles.xdw1pn} onClick={getEvent('View8:onClick:func3:', {eventData: "share_search"}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image3 */ style={styles.xdw1pl} source={dwtools.qiniu(slide.components.Image3.ctx_map.src, slide.components.Image3.ctx_map.fop)}  />
<Text /* Text23 */ style={styles.xdw1pm} >{slide.components.Text23.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View7 */   viewStyle={styles.xdw1pn} onClick={getEvent('View7:onClick:func9:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image4 */ style={styles.xdw1pl} source={dwtools.getLocalResource('xdw1po_lthar1qu')}  />
<Text /* Text21 */ style={styles.xdw1pm} >{slide.components.Text21.ctx_map.text}</Text></XbenchcView>
<View /* View6 */   style={styles.xdw1pn}><XbenchcImage /* Image5 */ style={styles.xdw1pl} source={dwtools.getLocalResource('xdw1pp_lthar1qu')}  />
<Text /* Text19 */ style={styles.xdw1pm} >{slide.components.Text19.ctx_map.text}</Text></View></View></Shadow></>)}</View></XbenchcScrollView>
<XbenchcModal /* Modal1 */ rootStyle={styles.xdw1q1} value={ state.share_pop } mask={ true } maskClosable={ true } >{!!(state.device_member) /* ViewIf2 */ && (<><View /* View9 */   style={styles.xdw1q0}><XbenchcView /* View10 */   viewStyle={styles.xdw1py} onClick={getEvent('View10:onClick:func6:', {eventData: "3"}, bagForKeyValue, bagForIndex)}><View /* View11 */   style={styles.xdw1pw}><Text /* Text24 */ style={styles.xdw1pu} >{slide.components.Text24.ctx_map.text}</Text>
<Text /* Text25 */ style={styles.xdw1pv} >{slide.components.Text25.ctx_map.text}</Text></View>
<View /* View12 */   style={styles.xdw1px}><Xbenchc168616 /* DwappCloud4 */ value={ state.device_member.data.default_share === '3' } eventData={ "3" } eventData2={ slide.components.DwappCloud4.ctx_map.prop2 } imageWidth={ slide.components.DwappCloud4.ctx_map.text1 } imageHeight={ slide.components.DwappCloud4.ctx_map.text2 } trueImage={ slide.components.DwappCloud4.ctx_map.image1 } falseImage={ slide.components.DwappCloud4.ctx_map.image2 }  onChange={getEvent('DwappCloud4:input::', {eventData: "3"}, bagForKeyValue, bagForIndex)}></Xbenchc168616></View></XbenchcView>
<View /* View13 */   style={styles.xdw1pz}></View>
<XbenchcView /* View14 */   viewStyle={styles.xdw1py} onClick={getEvent('View14:onClick:func6:', {eventData: "2"}, bagForKeyValue, bagForIndex)}><View /* View16 */   style={styles.xdw1pw}><Text /* Text27 */ style={styles.xdw1pu} >{slide.components.Text27.ctx_map.text}</Text>
<Text /* Text26 */ style={styles.xdw1pv} >{slide.components.Text26.ctx_map.text}</Text></View>
<View /* View15 */   style={styles.xdw1px}><Xbenchc168616 /* DwappCloud5 */ value={ state.device_member.data.default_share === '2' } eventData={ "2" } eventData2={ slide.components.DwappCloud5.ctx_map.prop2 } imageWidth={ slide.components.DwappCloud5.ctx_map.text1 } imageHeight={ slide.components.DwappCloud5.ctx_map.text2 } trueImage={ slide.components.DwappCloud5.ctx_map.image1 } falseImage={ slide.components.DwappCloud5.ctx_map.image2 }  onChange={getEvent('DwappCloud5:input::', {eventData: "2"}, bagForKeyValue, bagForIndex)}></Xbenchc168616></View></XbenchcView>
<View /* View17 */   style={styles.xdw1pz}></View></View></>)}</XbenchcModal>
<Xbenchc275104 /* DwappCloud6 */ valueStyle={ slide.components.DwappCloud6.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud6.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud6.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud6:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104>
    </ErrorBoundary>
  )
}
