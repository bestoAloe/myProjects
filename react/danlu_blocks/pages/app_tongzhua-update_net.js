
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
  const action4 = state.mode = ("update")
  const action15 = state.device_member = (null)
  const action19 = state.ready = (false)
  /* action24: 投影 */
  const action25 = state.rnappShadow = ({ offset: [0, 4], distance: 14, startColor: '#00000005' })
  return state
}

const action5 = actions['onShow'] = async function (store, event) {
  const state = store.state
  let action17
  

  if (dw.query.mode) {
    const action9 = store.commit('setState', {["state.mode"]: dw.query.mode})
  }
  const action18 = await store.dispatch("func2", {})
  const action20 = store.commit('setState', {["state.ready"]: true})
}

const action2 = actions['func1'] = function (store, event) {
  const state = store.state
  const action3 = dw.app.goToPappUrl("net_step1", {}, {redirectTo: false})
}

const action21 = actions['func3'] = function (store, event) {
  const state = store.state
  const action22 = dw.app.goToPappUrl("net_wifi_step1", {}, {redirectTo: false})
}

const action10 = actions['func2'] = async function (store, event) {
  const state = store.state
  if (dw.query.device_uuid) {
    const action13 = await dw.app.run("device.user_get", {"uuid": dw.query.device_uuid})
    const action14 = store.commit('setState', {["state.device_member"]: action13.device_member})
  }
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
xdw1j6: {
  width: pm(28),
  height: pm(28),
  marginRight: pm(10),
},
xdw1j7: {
  color: "#181818",
  fontWeight: "500",
  lineHeight: pm(24),
  marginRight: pm(10),
},
xdw1j8: {
  alignItems: "center",
  flexDirection: "row",
},
xdw1j9: {
  width: pm(18),
  height: pm(18),
},
xdw1ja: {
  width: pm(300),
  alignItems: "center",
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
  justifyContent: "space-between",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw1jb: {
  width: pm(300),
  marginTop: pm(15),
  marginLeft: pm(10),
  marginRight: pm(10),
  marginBottom: pm(100),
  flexDirection: "column",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw1jc: {
  width: "100%",
  flexGrow: 1,
  flexBasis: "0%",
  flexShrink: 1,
  backgroundColor: "#f8f8f8",
}
});
const slide = {"type":"168867","key":"c1688671","slug":null,"randomid":"id_5a48adeb067ecc4895360fa1","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,84,84","src":"u/dev066/2024/02/26/DbBzhb2Nby52HwapbH7xAh/分组17.png"}},"Image2":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/26/hRssQY3XcRzCYVUgFQKGaj/进入icon1.png"}},"Text18":{"ctx_map":{"text":"当前网络"}},"Text19":{"ctx_map":{"text":"TZTECH215"}},"Text21":{"ctx_map":{"text":"蓝牙换网"}},"Text23":{"ctx_map":{"text":"热点换网"}},"Text24":{"ctx_map":{"text":"推荐"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"SvgImage3":{"ctx_map":{"src":"u/dev065/2023/02/20/9UKohCWHneeNsGxDn56Wi7/1195361.svg","color":"#9a9a9a","width":22,"height":22,"SvgImageManage":"SvgImageManage"}},"DwappCloud2":{"ctx_map":{"bool1":true,"bool2":false,"text1":"更换网络","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"ScrollView2":{"ctx_map":{"type":"list","bounces":true,"scrollY":true,"showScrollbar":true}},"ShadowView1":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}}}};
slide.components.DwappCloud2.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-update_net';

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
      <Xbenchc176286 /* DwappCloud2 */ isCuzBtn={ slide.components.DwappCloud2.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud2.ctx_map.bool2 } eventData={ slide.components.DwappCloud2.ctx_map.prop1 } eventData2={ slide.components.DwappCloud2.ctx_map.prop2 } title={ state.mode === 'update' ? '更换网络' : '添加设备' } confirmTitle={ slide.components.DwappCloud2.ctx_map.text2 } confirmText={ slide.components.DwappCloud2.ctx_map.text3 } cancelText={ slide.components.DwappCloud2.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud2.ctx_map.color1 } confirmColor={ slide.components.DwappCloud2.ctx_map.color2 } cancelColor={ slide.components.DwappCloud2.ctx_map.color3 } backIcon={ slide.components.DwappCloud2.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud2.ctx_map.image2 } titleStyle={ slide.components.DwappCloud2.ctx_map.style1 } screenType={ slide.components.DwappCloud2.ctx_map.select1 } ></Xbenchc176286>
{!!(state.ready) /* ViewIf2 */ && (<><XbenchcScrollView /* ScrollView2 */ style={styles.xdw1jc} scrollY={ true } showScrollbar={ true } bounces={ true } ><Shadow containerStyle={styles.xdw1jb} {...(state.rnappShadow)}><XbenchcView /* View9 */   viewStyle={styles.xdw1ja} onClick={getEvent('View9:onClick:func1:', {}, bagForKeyValue, bagForIndex)}><View /* View12 */   style={styles.xdw1j8}><XbenchcImage /* Image1 */ style={styles.xdw1j6} source={dwtools.qiniu(slide.components.Image1.ctx_map.src, slide.components.Image1.ctx_map.fop)}  />
<Text /* Text21 */ style={styles.xdw1j7} >{state.mode === 'update' ? '蓝牙换网' : '蓝牙连接'}</Text></View>
<XbenchcImage /* Image2 */ style={styles.xdw1j9} source={dwtools.qiniu(slide.components.Image2.ctx_map.src, slide.components.Image2.ctx_map.fop)}  /></XbenchcView></Shadow></XbenchcScrollView></>)}
    </ErrorBoundary>
  )
}
