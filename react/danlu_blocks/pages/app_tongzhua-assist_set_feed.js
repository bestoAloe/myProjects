
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
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
  const action43 = state.device = (null)
  const action45 = state.device_member = (null)
  const action44 = state.platform = ("dwapp")
  return state
}

const action46 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action47 = store.commit('setState', {["state.platform"]: dw.platform})
  const action48 = await store.dispatch("func2", {})
  const action49 = await store.dispatch("func26", {})
}

const action30 = actions['func3'] = function (store, event) {
  const state = store.state
  let slug = (event.context.eventData)
  const action31 = slug
  const action32 = dw.app.goToPappUrl(slug, {}, {redirectTo: false})
}

const action37 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action38 = await dw.app.run("device.user_get", {"uuid": dw.query.uuid || "f5892e18-23d7-4903-a044-97094e97c7af"})
  const action39 = console.log('[func2#action39] 打印(action38)的返回值', action38)
  
        if ((action38.status) === ("error")) {
          const action40message = (action38.message || "操作错误！")
          const action40title = ("提示")
          action40message && dw.alert(action40title, action40message)
          return {}
        }
        
  const action41 = store.commit('setState', {["state.device"]: action38.object, ["state.device_member"]: action38.device_member})
}

const action35 = actions['func26'] = async function (store, event) {
  const state = store.state
  const action36 = await (async (store, event) => {
const key_device_member = "scient_feed/device_member"
const jsonValue1 = JSON.stringify(state.device_member)
if(state.platform === 'rnapp'){
  const AsyncStorage = dw.getNativePackage('AsyncStorage')
  await AsyncStorage.setItem(key_device_member, jsonValue1)
}
else{
  window.localStorage.setItem(key_device_member, jsonValue1)
}
})(store, event)
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
xdwww: {
  width: pm(34),
  height: pm(34),
  marginRight: pm(7),
},
xdwwx: {
  fontSize: pm(14),
  fontWeight: "500",
  lineHeight: pm(19),
  marginBottom: pm(4),
},
xdwwy: {
  color: "#AAAAAA",
  fontSize: pm(10),
  lineHeight: pm(15),
},
xdwwz: {
  flexGrow: 1,
  alignItems: "flex-start",
  flexDirection: "column",
},
xdwx0: {
  width: pm(15),
  height: pm(15),
},
xdwx1: {
  alignItems: "center",
  marginLeft: "auto",
  marginRight: pm(0),
  flexDirection: "row",
},
xdwx2: {
  alignItems: "center",
  paddingTop: pm(26),
  paddingLeft: pm(10),
  marginBottom: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(26),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(7),
  borderTopRightRadius: pm(7),
  borderBottomLeftRadius: pm(7),
  borderBottomRightRadius: pm(7),
},
xdwx3: {
  width: pm(320),
  flexGrow: 1,
  position: "relative",
  paddingTop: pm(20),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
  backgroundColor: "#F8F8F8",
}
});
const slide = {"type":"173221","key":"c1732211","slug":null,"randomid":"id_c5e904d2e5278e136f1730a3","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View3":{"ctx_map":{}},"Image4":{"ctx_map":{"fop":"e,300,300","src":"u/dev064/2023/03/03/2eBuU9WVnQCo5gox8ux3v4/SketchPng9ac8950109143d2275454568f1270d81598f96b1ef23ee6ca2d0c73d923ae3f7.png"}},"Image5":{"ctx_map":{"fop":"e,50,50","src":"u/dev064/2023/03/03/cB8WGhrcSL5X99o3wkQLmA/右.png"}},"Image6":{"ctx_map":{"fop":"e,50,50","src":"u/dev064/2023/03/03/cB8WGhrcSL5X99o3wkQLmA/右.png"}},"Image7":{"ctx_map":{"fop":"e,300,300","src":"u/dev064/2023/03/03/2VZycbFJCKgujxWCdhjdWa/SketchPng6c15c9c5945eaec2fd6eb6a3da3877c762a653e2eb95a62d10e97248fac6ae41.png"}},"Text14":{"ctx_map":{"text":"使用科学喂养方式"}},"Text15":{"ctx_map":{"text":"通过宠粮信息来计算喂食量"}},"Text16":{"ctx_map":{"text":"通过称重碗计算喂食量"}},"Text17":{"ctx_map":{"text":"根据之前喂食习惯模式"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"DwappCloud2":{"ctx_map":{"bool1":true,"bool2":false,"text1":"辅助设定定时喂食","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}}}};
slide.components.DwappCloud2.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-assist_set_feed';

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
      <Xbenchc176286 /* DwappCloud2 */ isCuzBtn={ slide.components.DwappCloud2.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud2.ctx_map.bool2 } eventData={ slide.components.DwappCloud2.ctx_map.prop1 } eventData2={ slide.components.DwappCloud2.ctx_map.prop2 } title={ slide.components.DwappCloud2.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud2.ctx_map.text2 } confirmText={ slide.components.DwappCloud2.ctx_map.text3 } cancelText={ slide.components.DwappCloud2.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud2.ctx_map.color1 } confirmColor={ slide.components.DwappCloud2.ctx_map.color2 } cancelColor={ slide.components.DwappCloud2.ctx_map.color3 } backIcon={ slide.components.DwappCloud2.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud2.ctx_map.image2 } titleStyle={ slide.components.DwappCloud2.ctx_map.style1 } screenType={ slide.components.DwappCloud2.ctx_map.select1 } ></Xbenchc176286>
<View /* View3 */   style={styles.xdwx3}><XbenchcView /* View10 */   viewStyle={styles.xdwx2} onClick={getEvent('View10:onClick:func3:', {eventData: "scient_feed"}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image4 */ style={styles.xdwww} source={dwtools.qiniu(slide.components.Image4.ctx_map.src, slide.components.Image4.ctx_map.fop)}  />
<View /* View12 */   style={styles.xdwwz}><Text /* Text14 */ style={styles.xdwwx} >{slide.components.Text14.ctx_map.text}</Text>
<Text /* Text15 */ style={styles.xdwwy} >{slide.components.Text15.ctx_map.text}</Text></View>
<View /* View11 */   style={styles.xdwx1}><XbenchcImage /* Image5 */ style={styles.xdwx0} source={dwtools.qiniu(slide.components.Image5.ctx_map.src, slide.components.Image5.ctx_map.fop)}  /></View></XbenchcView>
<XbenchcView /* View16 */   viewStyle={styles.xdwx2} onClick={getEvent('View16:onClick:func3:', {eventData: "habbit_feed"}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image7 */ style={styles.xdwww} source={dwtools.qiniu(slide.components.Image7.ctx_map.src, slide.components.Image7.ctx_map.fop)}  />
<View /* View18 */   style={styles.xdwwz}><Text /* Text17 */ style={styles.xdwwx} >{slide.components.Text17.ctx_map.text}</Text>
<Text /* Text16 */ style={styles.xdwwy} >{slide.components.Text16.ctx_map.text}</Text></View>
<View /* View17 */   style={styles.xdwx1}><XbenchcImage /* Image6 */ style={styles.xdwx0} source={dwtools.qiniu(slide.components.Image6.ctx_map.src, slide.components.Image6.ctx_map.fop)}  /></View></XbenchcView></View>
    </ErrorBoundary>
  )
}
