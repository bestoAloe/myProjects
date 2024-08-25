
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
  const action10 = state.newest_version = (null)
  const action16 = state.member = (null)
  const action17 = state.ready = (false)
  return state
}

const action11 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action20 = await Promise.all([
    (async () => {
      const action12 = await store.dispatch("func4", {})
      return action12
    })(),
    (async () => {
      const action19 = await store.dispatch("func5", {})
      return action19
    })(),
  ])

  const action18 = store.commit('setState', {["state.ready"]: true})
}

const action13 = actions['func5'] = async function (store, event) {
  const state = store.state
  const action14 = await dw.app.run("member.get_create_member", {})
  const action15 = store.commit('setState', {["state.member"]: action14.object})
}

const action2 = actions['func1'] = function (store, event) {
  const state = store.state
  const action3 = dw.app.goToPappUrl("version_update", {}, {redirectTo: false})
}

const action4 = actions['func4'] = async function (store, event) {
  const state = store.state
  const action5 = await dw.app.run("version.list", {"limit": 1, "offset": 0, "filters": {/**/  data__type: 'APP'/**/}, "order_by": ["-data__order__float"]})
  if (action5.objects.length) {
    let newest_version = (action5.objects[0])
    const action8 = newest_version
    const action9 = store.commit('setState', {["state.newest_version"]: newest_version})
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
xdw2ak: {
  width: pm(39),
  height: pm(41),
},
xdw2al: {
  width: pm(63),
  height: pm(63),
  shadowOffset: {width: 0, height: pm(2)},
  shadowRadius: pm(12),
  shadowColor: "rgb(0, 0, 0)",
  shadowOpacity: 0.2,
  elevation: 4,
  marginTop: pm(44),
  alignItems: "center",
  marginLeft: pm(128),
  marginRight: pm(128),
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw2am: {
  color: "#000000",
  fontSize: pm(15),
  textAlign: "center",
  fontWeight: "500",
  lineHeight: pm(21),
},
xdw2an: {
  color: "#999999",
  fontSize: pm(10),
  marginTop: pm(7),
  textAlign: "center",
  fontWeight: "500",
  lineHeight: pm(15),
},
xdw2ao: {
  marginTop: pm(26),
  flexDirection: "column",
},
xdw2ap: {
  flexGrow: 1,
  flexDirection: "column",
  backgroundColor: "#f8f8f8",
}
});
const slide = {"type":"171153","key":"c1711531","slug":null,"randomid":"id_c8b2733b90e9900765001181","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text2":{"ctx_map":{"text":"版本更新"}},"Text3":{"ctx_map":{"text":"铜爪"}},"Text4":{"ctx_map":{"text":"Version2.0.0"}},"Text5":{"ctx_map":{"text":"NEW"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,46,48","src":"u/dev070/2023/02/28/nYX8QU7KcgGEB68vdSxBo7/SketchPng8e201b6dead48cdaf104157c1241180a206109a3a4810cdf807ee3fd73f7a11f.png"}},"Image2":{"ctx_map":{"fop":"e,16,24","src":"u/dev070/2023/02/27/dZ2XCgRM78uTxo9mYBprT6/SketchPnga7e8ab971d471c8ff20541785193196ff0285696cbf1038aecf392664b83474f.png"}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"DwappCloud1":{"ctx_map":{"bool1":true,"bool2":false,"text1":"关于铜爪","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}}}};
slide.components.DwappCloud1.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-about_us';

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
{!!(state.ready) /* ViewIf2 */ && (<><View /* View5 */   style={styles.xdw2ap}><View /* View1 */   style={styles.xdw2al}><XbenchcImage /* Image1 */ style={styles.xdw2ak} source={dwtools.qiniu(slide.components.Image1.ctx_map.src, slide.components.Image1.ctx_map.fop)}  /></View>
<View /* View3 */   style={styles.xdw2ao}><Text /* Text3 */ style={styles.xdw2am} >{slide.components.Text3.ctx_map.text}</Text>
<Text /* Text4 */ style={styles.xdw2an} >{state.member.data.version}</Text></View></View></>)}
    </ErrorBoundary>
  )
}
