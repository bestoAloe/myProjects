
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcButton from '../../xbench/xbenchc/components/XbenchcButton'
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
const action61 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action19 = state.member = (undefined)
  const action32 = state.ready = (false)
  const action43 = state.config = (null)
  const action51 = state.size = (0)
  const action79 = state.platform = ('dwapp')
  return state
}

const action3 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action25 = await dw.app.run("member.get_siteuser_id", {})
  
        if ((action25.status) === ("error")) {
          const action26message = (action25.message || "操作错误！")
          const action26title = ("提示")
          action26message && dw.alert(action26title, action26message)
          return {}
        }
        
  if (action25) {
    const action46 = await Promise.all([
      (async () => {
        const action45 = await store.dispatch("func5", {})
        return action45
      })(),
      (async () => {
        const action30 = await store.dispatch("func3", {})
        return action30
      })(),
      (async () => {
        const action54 = await store.dispatch("func7", {})
        return action54
      })(),
    ])

  } else {
    const action34 = dw.app.goToPappUrl("dcenter", {}, {redirectTo: false})
  }
}

const action20 = actions['func3'] = async function (store, event) {
  const state = store.state
  const action22 = await dw.app.run("member.get_create_member", {})
  
        if ((action22.status) === ("error")) {
          const action23message = (action22.message || "操作错误！")
          const action23title = ("提示")
          action23message && dw.alert(action23title, action23message)
          return {}
        }
        
  const action24 = store.commit('setState', {["state.member"]: action22.object, ["state.ready"]: true})
}

const action17 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action82response = await dw.showModal({
        title: "提示",
        content: "确定退出登录？",
        confirmText: "确定",
        confirmColor: "#576b95",
        showCancel: true,
        cancelText: "取消",
        cancelColor: "#000000",
        styleType: "default",
        styleTheme: "default",
        styleThemeStyles: undefined
      })
  const action82 = action82response && action82response.confirm
  if (!action82) {
    return event
  }
  dw.app.is('rnapp') && await dw.app.RnappBridge.clearStorage()
  const action39 = await (async (store, event) => {
return await dw.logout()
})(store, event)
  await new Promise((resolve, reject) => setTimeout(resolve, 200))
  const action86 = dw.app.goToPappUrl("index", {}, {redirectTo: false})
}

const action35 = actions['func4'] = function (store, event) {
  const state = store.state
  let slug = (event.context.eventData)
  const action37 = slug
  const action36 = dw.app.goToPappUrl(slug, {}, {redirectTo: false})
}

const action41 = actions['func5'] = async function (store, event) {
  const state = store.state
  const action42 = await dw.app.run("config.get", {})
  const action44 = store.commit('setState', {["state.config"]: action42.object})
}

const action47 = actions['func6'] = async function (store, event) {
  const state = store.state
  let action56
  
        action56 = (dw.platform === 'rnapp') ? await (async () => {
    const action57 = await (async (store, event) => {
const AsyncStorage = dw.getNativePackage("AsyncStorage")
const excludeKeys = [
  "App.isAgreeAgreement",
  "dw:storage:tongzhua-guide-show",
  "dwapp:dstoreState",
  "dwapp:installation",
]
const keysToDelete = (await AsyncStorage.getAllKeys()).filter(x=> !excludeKeys.includes(x));


try {
  // Delete keys except those to exclude
  await AsyncStorage.multiRemove(keysToDelete);
  console.log('AsyncStorage cleared except specified keys');
} catch (error) {
  console.error('Error clearing AsyncStorage: ', error);
}



})(store, event)
    let message = ("清理成功")
    const action72 = message
    const action73 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    const action60 = store.commit('setState', {["state.size"]: 0})
  
        })() : undefined
        
}

const action48 = actions['func7'] = async function (store, event) {
  const state = store.state
  let action53
  
        action53 = (dw.platform === 'rnapp') ? await (async () => {
    const action49 = await (async (store, event) => {
const AsyncStorage = dw.getNativePackage("AsyncStorage")
const excludeKeys = [
  "App.isAgreeAgreement",
  "dw:storage:tongzhua-guide-show",
  "dwapp:dstoreState",
  "dwapp:installation",
]
const keys = (await AsyncStorage.getAllKeys()).filter(x=> !excludeKeys.includes(x));
console.log("keys", keys)

try {
  let totalSize = 0;

  for (let i = 0; i < keys.length; i++) {
    const value = await AsyncStorage.getItem(keys[i]);
    totalSize += value.length * 2; // Approximate size in bytes (UTF-16 encoding)
  }

  // Convert bytes to kilobytes (or other desired unit)
  const totalSizeInKB = Number((totalSize / 1024).toFixed(2));

  return totalSizeInKB; // Return the total size in KB
} catch (error) {
  console.error('Error getting AsyncStorage size: ', error);
  return 0;
}


})(store, event)
    const action52 = store.commit('setState', {["state.size"]: action49})
  
        })() : undefined
        
}

const action62 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action63 = modalInstance = (event.data)
  const action64 = console.log('[getModalInstance#action64] 打印(modalInstance)', modalInstance)
}

const action74 = actions['func8'] = async function (store, event) {
  const state = store.state
  const action76 = await dw.getNativePackage('Linking').openURL("http://m.tzznkj.danlu.net/app-terms/detail.html?type=privacy")
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
xdw27b: {
  flexGrow: 1,
  fontSize: pm(12),
  flexShrink: 1,
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw27c: {
  width: pm(30),
  height: pm(30),
  marginRight: pm(7),
  borderTopLeftRadius: pm(999),
  borderTopRightRadius: pm(999),
  borderBottomLeftRadius: pm(999),
  borderBottomRightRadius: pm(999),
},
xdw27d: {
  width: pm(12),
  height: pm(12),
},
xdw27e: {
  flexWrap: "nowrap",
  marginTop: pm(10),
  alignItems: "center",
  paddingTop: pm(7),
  paddingLeft: pm(10),
  marginBottom: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(7),
  justifyContent: "flex-start",
  backgroundColor: "#ffffff",
},
xdw27f: {
  flexWrap: "nowrap",
  alignItems: "center",
  marginLeft: pm(10),
  paddingTop: pm(13),
  borderBottomWidth: pm(1),
  borderBottomColor: "#eeeeee",
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(13),
  justifyContent: "flex-start",
},
xdw27g: {
  color: "#999999",
  flexGrow: 0,
  fontSize: pm(12),
  flexShrink: 0,
  fontWeight: "400",
  lineHeight: pm(17),
},
xdw27h: {
  color: "#999999",
  flexGrow: 0,
  fontSize: pm(12),
  flexShrink: 0,
  fontWeight: "400",
  lineHeight: pm(17),
  marginRight: pm(7),
},
xdw27i: {
  width: pm(310),
  height: pm(43),
  flexWrap: "nowrap",
  alignItems: "center",
  marginLeft: pm(10),
  paddingTop: pm(13),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(13),
  justifyContent: "flex-start",
},
xdw27j: {
  flexDirection: "column",
  backgroundColor: "#ffffff",
},
xdw27k: {
  fontSize: pm(14),
  fontWeight: "600",
  lineHeight: pm(19),
},
xdw27l: {
  width: pm(300),
  height: pm(38),
  borderTopWidth: pm(0),
  borderTopColor: "transparent",
  textAlign: "left",
  alignItems: "center",
  borderLeftWidth: pm(0),
  borderLeftColor: "transparent",
  borderRightWidth: pm(0),
  borderRightColor: "transparent",
  borderBottomWidth: pm(0),
  borderBottomColor: "transparent",
  flexDirection: "column",
  justifyContent: "center",
},
xdw27m: {
  width: pm(300),
  height: pm(38),
  marginTop: pm(34),
  alignItems: "center",
  marginLeft: pm(10),
  marginRight: pm(10),
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#f0f0f0",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw27n: {
  flexGrow: 1,
  flexDirection: "column",
  backgroundColor: "#f8f8f8",
}
});
const slide = {"type":"171130","key":"c1711301","slug":null,"randomid":"id_4c6d56bc43fbe62193a78a2d","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":"账号与安全"}},"Text2":{"ctx_map":{"text":"虚拟体验"}},"Text3":{"ctx_map":{"text":"帮助与反馈"}},"Text4":{"ctx_map":{"text":"关于铜爪"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,300,300","src":"u/dev070/2023/02/27/82kD6R6FoAjFV4hnJVSrqn/WechatIMG79.jpeg"}},"Image7":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Image8":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Image9":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Text14":{"ctx_map":{"text":"退出登录"}},"Text15":{"ctx_map":{"text":"800M"}},"Text16":{"ctx_map":{"text":"清理缓存"}},"Text17":{"ctx_map":{"text":"注销账号"}},"Text18":{"ctx_map":{"text":"KB"}},"Text19":{"ctx_map":{"text":"隐私政策"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"Image10":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Image12":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Image13":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Image14":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"DwappCloud1":{"ctx_map":{"bool1":true,"bool2":false,"text1":"通用设置","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud2":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"NativeButton2":{"ctx_map":{"type":"button"}}}};
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
const pageGroupSlug = 'app_tongzhua-system_settings';

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
<View /* View11 */   style={styles.xdw27n}>{!!(state.member) /* ViewIf1 */ && (<><XbenchcView /* View1 */   viewStyle={styles.xdw27e} onClick={getEvent('View1:onClick:func4:', {eventData: "account_security"}, bagForKeyValue, bagForIndex)}><Text /* Text1 */ style={styles.xdw27b} >{slide.components.Text1.ctx_map.text}</Text>
<XbenchcImage /* Image1 */ style={styles.xdw27c} source={dwtools.qiniu(state.member.data.avatar, slide.components.Image1.ctx_map.fop)}  />
<XbenchcImage /* Image7 */ style={styles.xdw27d} source={dwtools.qiniu(slide.components.Image7.ctx_map.src, slide.components.Image7.ctx_map.fop)}  /></XbenchcView>
<View /* View2 */   style={styles.xdw27j}><XbenchcView /* View3 */   viewStyle={styles.xdw27f} onClick={getEvent('View3:onClick:func4:', {eventData: "virtual_switch"}, bagForKeyValue, bagForIndex)}><Text /* Text2 */ style={styles.xdw27b} >{slide.components.Text2.ctx_map.text}</Text>
<XbenchcImage /* Image8 */ style={styles.xdw27d} source={dwtools.qiniu(slide.components.Image8.ctx_map.src, slide.components.Image8.ctx_map.fop)}  /></XbenchcView>
<XbenchcView /* View4 */   viewStyle={styles.xdw27f} onClick={getEvent('View4:onClick:func4:', {eventData: "feedback"}, bagForKeyValue, bagForIndex)}><Text /* Text3 */ style={styles.xdw27b} >{slide.components.Text3.ctx_map.text}</Text>
<XbenchcImage /* Image9 */ style={styles.xdw27d} source={dwtools.qiniu(slide.components.Image9.ctx_map.src, slide.components.Image9.ctx_map.fop)}  /></XbenchcView>
<XbenchcView /* View12 */   viewStyle={styles.xdw27f} onClick={getEvent('View12:onClick:func8:', {eventData: "about_us"}, bagForKeyValue, bagForIndex)}><Text /* Text19 */ style={styles.xdw27b} >{slide.components.Text19.ctx_map.text}</Text>
<XbenchcImage /* Image14 */ style={styles.xdw27d} source={dwtools.qiniu(slide.components.Image14.ctx_map.src, slide.components.Image14.ctx_map.fop)}  /></XbenchcView>
<XbenchcView /* View5 */   viewStyle={styles.xdw27f} onClick={getEvent('View5:onClick:func4:', {eventData: "about_us"}, bagForKeyValue, bagForIndex)}><Text /* Text4 */ style={styles.xdw27b} >{slide.components.Text4.ctx_map.text}</Text>
<XbenchcImage /* Image10 */ style={styles.xdw27d} source={dwtools.qiniu(slide.components.Image10.ctx_map.src, slide.components.Image10.ctx_map.fop)}  /></XbenchcView>
{!!(state.config && state.config.data.ios_approve) /* ViewIf2 */ && (<><XbenchcView /* View10 */   viewStyle={styles.xdw27f} onClick={getEvent('View10:onClick:func4:', {eventData: "account_delete"}, bagForKeyValue, bagForIndex)}><Text /* Text17 */ style={styles.xdw27b} >{slide.components.Text17.ctx_map.text}</Text>
<XbenchcImage /* Image13 */ style={styles.xdw27d} source={dwtools.qiniu(slide.components.Image13.ctx_map.src, slide.components.Image13.ctx_map.fop)}  /></XbenchcView></>)}
<XbenchcView /* View9 */   viewStyle={styles.xdw27i} onClick={getEvent('View9:onClick:func6:', {}, bagForKeyValue, bagForIndex)}><Text /* Text16 */ style={styles.xdw27b} >{slide.components.Text16.ctx_map.text}</Text>
<Text /* Text15 */ style={styles.xdw27g} >{state.size}</Text>
<Text /* Text18 */ style={styles.xdw27h} >{slide.components.Text18.ctx_map.text}</Text>
<XbenchcImage /* Image12 */ style={styles.xdw27d} source={dwtools.qiniu(slide.components.Image12.ctx_map.src, slide.components.Image12.ctx_map.fop)}  /></XbenchcView></View>
<View /* View8 */   style={styles.xdw27m}><XbenchcButton /* NativeButton2 */ viewStyle={styles.xdw27l} onClick={getEvent('NativeButton2:onClick:func2:', {}, bagForKeyValue, bagForIndex)}><Text /* Text14 */ style={styles.xdw27k} >{slide.components.Text14.ctx_map.text}</Text></XbenchcButton></View></>)}</View>
<Xbenchc275104 /* DwappCloud2 */ valueStyle={ slide.components.DwappCloud2.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud2.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud2.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud2:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104>
    </ErrorBoundary>
  )
}
