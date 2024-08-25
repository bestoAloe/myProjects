
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'

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
  const action4 = state.weight = (60)
  const action5 = state.total_weight = (0)
  const action19 = state.platform = ('dwapp')
  return state
}

const action2 = actions['onShow'] = function (store, event) {
  const state = store.state
  const action20 = store.commit('setState', {["state.platform"]: dw.platform})
  const action3 = console.log('[onShow#action3] onshow', )
}

const action6 = actions['func1'] = function (store, event) {
  const state = store.state
  const action7 = store.commit('setState', {["state.total_weight"]: state.total_weight + state.weight})
}

const action8 = actions['func2'] = async function (store, event) {
  const state = store.state
  
        if (!!(!state.weight && !state.total_weight) === (true)) {
          const action13message = ("没有任何称重数值")
          const action13title = ("提示")
          action13message && dw.alert(action13title, action13message)
          return {}
        }
        
  let mode = (event.context.eventData)
  const action11 = mode
  const action12 = console.log('[func2#action12] 打印(mode)的返回值', mode)
  const action21 = await store.dispatch("func4", {"mode": mode})
  const action9 = dw.app.goToPappUrl("set_meal", {}, {redirectTo: false})
}

const action14 = actions['func3'] = function (store, event) {
  const state = store.state
  const action15 = store.commit('setState', {["state.total_weight"]: 0})
}

const action16 = actions['func4'] = async function (store, event) {
  const state = store.state
  const action18 = await (async (store, event) => {
const key = "habit_feed/formData"
const jsonValue1 = JSON.stringify({
  weight: state.total_weight > 0 ? state.total_weight : state.weight,
  mode: event.mode,
})
if(state.platform === 'rnapp'){
  const AsyncStorage = dw.getNativePackage('AsyncStorage')
  await AsyncStorage.setItem(key, jsonValue1)
}
else{
  window.localStorage.setItem(key, jsonValue1)
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
xdw115: {
  color: "#AAAAAA",
  fontSize: pm(13),
  fontWeight: "500",
  lineHeight: pm(18),
},
xdw116: {
  right: 0,
  width: pm(100),
  position: "absolute",
  flexDirection: "row",
  justifyContent: "flex-end",
},
xdw117: {
  width: pm(205),
  fontSize: pm(20),
  marginTop: pm(24),
  lineHeight: pm(28),
  marginLeft: "auto",
  marginRight: "auto",
},
xdw118: {
  width: pm(214),
  height: pm(215),
},
xdw11a: {
  marginTop: pm(25),
  flexDirection: "row",
  justifyContent: "center",
},
xdw11b: {
  color: "#666666",
  fontSize: pm(20),
  lineHeight: pm(28),
},
xdw11c: {
  fontSize: pm(20),
  lineHeight: pm(28),
  marginLeft: pm(3),
  marginRight: pm(3),
},
xdw11d: {
  fontSize: pm(10),
  fontWeight: "500",
  lineHeight: pm(15),
  marginBottom: pm(3),
},
xdw11e: {
  marginTop: pm(19),
  alignItems: "flex-end",
  flexDirection: "row",
  justifyContent: "center",
},
xdw11f: {
  fontSize: pm(12),
  lineHeight: pm(17),
},
xdw11g: {
  left: pm(10),
  right: pm(10),
  width: pm(82),
  bottom: pm(76),
  height: pm(38),
  marginTop: pm(10),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#F0F0F0",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw11h: {
  color: "#FFB155",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw11i: {
  width: pm(82),
  height: pm(27),
  borderTopWidth: pm(1),
  borderTopColor: "#FFD168",
  alignItems: "center",
  borderLeftWidth: pm(1),
  borderLeftColor: "#FFD168",
  marginLeft: pm(3),
  borderRightWidth: pm(1),
  borderRightColor: "#FFD168",
  borderBottomWidth: pm(1),
  borderBottomColor: "#FFD168",
  flexDirection: "column",
  justifyContent: "center",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
  borderBottomLeftRadius: pm(14),
  borderBottomRightRadius: pm(14),
},
xdw11j: {
  marginTop: pm(10),
  alignItems: "flex-end",
  flexDirection: "row",
  justifyContent: "center",
},
xdw11k: {
  width: pm(8),
  height: pm(8),
},
xdw11l: {
  top: pm(-8),
  left: pm(80),
  position: "absolute",
  flexDirection: "column",
},
xdw11m: {
  color: "#62C0C7",
  fontSize: pm(10),
  lineHeight: pm(15),
},
xdw11n: {
  width: pm(271),
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
  backgroundColor: "#F8F8F8",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
  borderBottomLeftRadius: pm(14),
  borderBottomRightRadius: pm(14),
},
xdw11o: {
  position: "relative",
  marginTop: pm(10),
  flexDirection: "column",
},
xdw11p: {
  fontSize: pm(12),
  textAlign: "center",
  fontWeight: "600",
  lineHeight: pm(24),
  paddingTop: pm(3),
  paddingBottom: pm(3),
},
xdw11q: {
  left: pm(10),
  right: pm(10),
  width: pm(300),
  bottom: pm(76),
  height: pm(38),
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#ffd132",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw11r: {
  left: pm(10),
  right: pm(10),
  width: pm(300),
  bottom: pm(26),
  height: pm(38),
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#ffd132",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw11s: {
  flexGrow: 1,
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "#ffffff",
}
});
const slide = {"type":"173289","key":"c1732891","slug":null,"randomid":"id_c0faa5a45bfd4cfe65e597fc","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":"将宠物粮按照喂食习惯 倒入称重碗内"}},"Text2":{"ctx_map":{"text":"设置为一天的喂食量"}},"Text4":{"ctx_map":{"text":"重置数值"}},"Text6":{"ctx_map":{"text":"设置为一顿的喂食量"}},"Text7":{"ctx_map":{"text":"称重碗内宠物粮"}},"Text8":{"ctx_map":{"text":"克"}},"Text9":{"ctx_map":{"text":"0"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View6":{"ctx_map":{"extraStyleKeys":[]}},"View9":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,428,430","src":"u/dev064/2023/03/04/DXZ5VAEezYPDEpeArvYvnJ/SketchPng48b35cfc3a5a2a6d7798fd72ab40099355eea8aa236d921c75d7d927afe23b1f.png","buildToLocal":true}},"Image3":{"ctx_map":{"fop":"e,30,30","src":"u/dev064/2023/03/04/QdjQVVhdHVHP6Rz7FCdXoi/企业微信截图_20230304142355.png"}},"Text10":{"ctx_map":{"text":"装不下了"}},"Text11":{"ctx_map":{"text":"克"}},"Text12":{"ctx_map":{"text":"0"}},"Text13":{"ctx_map":{"text":"目前统计总量"}},"Text14":{"ctx_map":{"text":"继续添加"}},"Text15":{"ctx_map":{"text":"碗内宠物粮满时，点击继续添加后，将碗内宠物粮取出。继续装入新的宠物粮，统计总量会继续增加"}},"View11":{"ctx_map":{"extraStyleKeys":[]}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{"extraStyleKeys":[]}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"DwappCloud2":{"ctx_map":{"bool1":true,"bool2":false,"text1":"喂食习惯模式","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}}}};
slide.components.DwappCloud2.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-habbit_feed';

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
      <Xbenchc176286 /* DwappCloud2 */ isCuzBtn={ slide.components.DwappCloud2.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud2.ctx_map.bool2 } eventData={ slide.components.DwappCloud2.ctx_map.prop1 } eventData2={ slide.components.DwappCloud2.ctx_map.prop2 } title={ slide.components.DwappCloud2.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud2.ctx_map.text2 } confirmText={ slide.components.DwappCloud2.ctx_map.text3 } cancelText={ slide.components.DwappCloud2.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud2.ctx_map.color1 } confirmColor={ slide.components.DwappCloud2.ctx_map.color2 } cancelColor={ slide.components.DwappCloud2.ctx_map.color3 } backIcon={ slide.components.DwappCloud2.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud2.ctx_map.image2 } titleStyle={ slide.components.DwappCloud2.ctx_map.style1 } screenType={ slide.components.DwappCloud2.ctx_map.select1 } ><XbenchcView /* View9 */   viewStyle={styles.xdw116} onClick={getEvent('View9:onClick:func3:', {}, bagForKeyValue, bagForIndex)}><Text /* Text4 */ style={styles.xdw115} >{slide.components.Text4.ctx_map.text}</Text></XbenchcView></Xbenchc176286>
<View /* View1 */   style={styles.xdw11s}><Text /* Text1 */ style={styles.xdw117} >{slide.components.Text1.ctx_map.text}</Text>
<View /* View2 */   style={styles.xdw11a}><XbenchcImage /* Image1 */ style={styles.xdw118} source={dwtools.getLocalResource('xdw119_lthar10y')}  /></View>
<View /* View12 */   style={styles.xdw11e}><Text /* Text7 */ style={styles.xdw11b} >{slide.components.Text7.ctx_map.text}</Text>
<Text /* Text9 */ style={styles.xdw11c} >{state.weight}</Text>
<Text /* Text8 */ style={styles.xdw11d} >{slide.components.Text8.ctx_map.text}</Text></View>
{!!(state.total_weight === 0) /* ViewIf1 */ && (<><XbenchcView /* View13 */   viewStyle={styles.xdw11g} onClick={getEvent('View13:onClick:func1:', {}, bagForKeyValue, bagForIndex)}><Text /* Text10 */ style={styles.xdw11f} >{slide.components.Text10.ctx_map.text}</Text></XbenchcView></>)}
{!!(state.total_weight > 0) /* ViewIf2 */ && (<><View /* View14 */   style={styles.xdw11j}><Text /* Text13 */ style={styles.xdw11b} >{slide.components.Text13.ctx_map.text}</Text>
<Text /* Text12 */ style={styles.xdw11c} >{state.total_weight}</Text>
<Text /* Text11 */ style={styles.xdw11d} >{slide.components.Text11.ctx_map.text}</Text>
<XbenchcView /* View15 */   viewStyle={styles.xdw11i} onClick={getEvent('View15:onClick:func1:', {}, bagForKeyValue, bagForIndex)}><Text /* Text14 */ style={styles.xdw11h} >{slide.components.Text14.ctx_map.text}</Text></XbenchcView></View>
<View /* View16 */   style={styles.xdw11o}><View /* View18 */   style={styles.xdw11l}><XbenchcImage /* Image3 */ style={styles.xdw11k} source={dwtools.qiniu(slide.components.Image3.ctx_map.src, slide.components.Image3.ctx_map.fop)}  /></View>
<View /* View17 */   style={styles.xdw11n}><Text /* Text15 */ style={styles.xdw11m} >{slide.components.Text15.ctx_map.text}</Text></View></View></>)}
<XbenchcView /* View11 */   viewStyle={styles.xdw11q} onClick={getEvent('View11:onClick:func2:', {eventData: "meal"}, bagForKeyValue, bagForIndex)}><Text /* Text6 */ style={styles.xdw11p} >{slide.components.Text6.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View6 */   viewStyle={styles.xdw11r} onClick={getEvent('View6:onClick:func2:', {eventData: "day"}, bagForKeyValue, bagForIndex)}><Text /* Text2 */ style={styles.xdw11p} >{slide.components.Text2.ctx_map.text}</Text></XbenchcView></View>
    </ErrorBoundary>
  )
}
