
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
import Xbenchc168610 from '../components/Xbenchc168610'
import { Image } from 'expo-image'
import XbenchcModal from '../../xbench/xbenchc/components/XbenchcModal'

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
  const action3 = state.device = (null)
  const action4 = state.device_member = (null)
  const action5 = state.platform = ("dwapp")
  const action22 = state.pop_name = (false)
  const action27 = state.edit_name = (null)
  const action47 = state.isLoad = (false)
  return state
}

const action11 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action12 = store.commit('setState', {["state.platform"]: dw.platform})
  const action13 = await store.dispatch("func2", {})
  const action16 = await store.dispatch("func4", {})
  const action28 = store.commit('setState', {["state.edit_name"]: state.device.data.name, ["state.isLoad"]: true})
}

const action6 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action7 = await dw.app.run("device.user_get", {"uuid": dw.query.uuid || "f5892e18-23d7-4903-a044-97094e97c7af"})
  const action17 = console.log('[func2#action17] 打印(action7)的返回值', action7)
  
        if ((action7.status) === ("error")) {
          const action8message = (action7.message || "操作错误！")
          const action8title = ("提示")
          action8message && dw.alert(action8title, action8message)
          return {}
        }
        
  const action9 = store.commit('setState', {["state.device"]: action7.object, ["state.device_member"]: action7.device_member})
}

const action14 = actions['func4'] = async function (store, event) {
  const state = store.state
  const action15 = await (async (store, event) => {
const key = "base_setting/currentItem"
const jsonValue = JSON.stringify(state.device)
if(state.platform === 'rnapp'){
  const AsyncStorage = dw.getNativePackage('AsyncStorage')
  await AsyncStorage.setItem(key, jsonValue)
}
else{
  window.localStorage.setItem(key, jsonValue)
}
})(store, event)
}

const action18 = actions['func5'] = function (store, event) {
  const state = store.state
  let slug = (event.context.eventData)
  const action20 = slug
  const action19 = dw.app.goToPappUrl(slug, {}, {redirectTo: false})
}

const action23 = actions['func6'] = function (store, event) {
  const state = store.state
  const action29 = store.commit('setState', {["state.edit_name"]: state.device.data.name, ["state.pop_name"]: true})
}

const action25 = actions['func7'] = function (store, event) {
  const state = store.state
  const action30 = store.commit('setState', {["state.edit_name"]: state.device.data.name, ["state.pop_name"]: false})
}

const action31 = actions['func8'] = function (store, event) {
  const state = store.state
  const action32 = store.commit('setState', {["state.edit_name"]: null})
}

const action33 = actions['func9'] = async function (store, event) {
  const state = store.state
  
        if (!!(!state.edit_name) === (true)) {
          const action35message = ("未输入任何内容！")
          const action35title = ("提示")
          action35message && dw.alert(action35title, action35message)
          return null
        }
        
  const action38 = JSON.parse(JSON.stringify(state.device.data))
  let formData = (action38)
  const action39 = formData
  const action40 = formData.name = (state.edit_name)
  const action37 = await dw.app.run("device.update", {"id": state.device.id, "formData": formData})
  const action50 = console.log('[func9#action50] 打印(action37)的返回值', action37)
  const action41 = store.commit('setState', {["state.pop_name"]: false, ["state.platform"]: dw.platform})
  const action44 = await store.dispatch("func2", {})
  const action45 = await store.dispatch("func4", {})
  const action46 = store.commit('setState', {["state.edit_name"]: state.device.data.name})
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
xdw1av: {
  flexGrow: 1,
  fontSize: pm(12),
  flexShrink: 1,
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw1aw: {
  color: "#999999",
  flexGrow: 0,
  fontSize: pm(12),
  flexShrink: 0,
  fontWeight: "500",
  lineHeight: pm(17),
  marginRight: pm(7),
},
xdw1ax: {
  width: pm(12),
  height: pm(12),
},
xdw1ay: {
  height: pm(47.768),
  flexWrap: "nowrap",
  alignItems: "center",
  marginLeft: pm(10),
  paddingTop: pm(13),
  borderBottomWidth: pm(0.5),
  borderBottomColor: "#eeeeee",
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(13),
  justifyContent: "flex-start",
  borderTopLeftRadius: pm(4.265),
  borderTopRightRadius: pm(4.265),
},
xdw1az: {
  flexWrap: "nowrap",
  alignItems: "center",
  marginLeft: pm(10),
  paddingTop: pm(13),
  borderBottomWidth: pm(0),
  borderBottomColor: "#eeeeee",
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(13),
  justifyContent: "flex-start",
  borderBottomLeftRadius: pm(4.265),
  borderBottomRightRadius: pm(4.265),
},
xdw1b0: {
  width: pm(299.528),
  height: pm(95.536),
  flexGrow: 1,
  flexDirection: "column",
  backgroundColor: "#FFFFFF",
  borderTopLeftRadius: pm(4.265),
  borderTopRightRadius: pm(4.265),
  borderBottomLeftRadius: pm(4.265),
  borderBottomRightRadius: pm(4.265),
},
xdw1b1: {
  width: pm(299.528),
  height: pm(95.536),
  marginTop: pm(10),
  marginLeft: pm(10.236),
  marginRight: pm(10.236),
  flexDirection: "column",
  borderTopLeftRadius: pm(4.265),
  borderTopRightRadius: pm(4.265),
  borderBottomLeftRadius: pm(4.265),
  borderBottomRightRadius: pm(4.265),
},
xdw1b2: {
  width: pm(320),
  height: pm(600),
  flexDirection: "column",
  backgroundColor: "#f8f8f8",
},
xdw1b3: {
  flex: 1,
  width: "100%",
  overflow: "scroll",
  borderTopWidth: pm(0),
  borderTopColor: "#eeeeee",
  backgroundColor: "#f8f8f8",
},
xdw1b4: {
  color: "#181818",
  fontSize: pm(15),
  textAlign: "center",
  alignItems: "center",
  fontFamily: "Noto Sans CJK SC",
  lineHeight: pm(24),
  alignContent: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw1b5: {
  width: "100%",
  height: pm(47.768),
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
},
xdw1b6: {
  marginTop: pm(10.236),
  alignItems: "center",
  marginLeft: pm(10.236),
  marginRight: pm(10.236),
  alignContent: "center",
  marginBottom: pm(10.236),
  flexDirection: "row",
  justifyContent: "center",
},
xdw1b7: {
  flexDirection: "column",
},
xdw1b8: {
  width: pm(299.528),
  height: pm(40.944),
  borderTopWidth: pm(1),
  borderTopColor: "#ffd355",
  borderLeftWidth: pm(1),
  borderLeftColor: "#ffd355",
  borderRightWidth: pm(1),
  borderRightColor: "#ffd355",
  borderBottomWidth: pm(1),
  borderBottomColor: "#ffd355",
  flexDirection: "row",
  backgroundColor: "#f8f8f8",
  borderTopLeftRadius: pm(6.824),
  borderTopRightRadius: pm(6.824),
  borderBottomLeftRadius: pm(6.824),
  borderBottomRightRadius: pm(6.824),
},
xdw1b9: {
  marginTop: pm(11.962),
  paddingLeft: pm(10.236),
  paddingRight: pm(10.236),
  flexDirection: "column",
},
xdw1ba: {
  flexWrap: "nowrap",
  fontSize: pm(12),
  textAlign: "center",
  alignItems: "center",
  lineHeight: pm(24),
  flexDirection: "row",
  justifyContent: "center",
},
xdw1bb: {
  marginLeft: pm(10.236),
  marginRight: pm(6.3975),
},
xdw1bc: {
  width: pm(143.304),
  height: pm(40.944),
  alignItems: "center",
  marginLeft: pm(10.236),
  marginRight: pm(6.3975),
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#f0f0f0",
  borderTopLeftRadius: pm(20.448),
  borderTopRightRadius: pm(20.448),
  borderBottomLeftRadius: pm(20.448),
  borderBottomRightRadius: pm(20.448),
},
xdw1bd: {
  fontSize: pm(12),
  textAlign: "center",
  alignItems: "center",
  lineHeight: pm(24),
  justifyContent: "center",
},
xdw1be: {
  backgroundColor: "#f5d065",
},
xdw1bf: {
  width: pm(143.304),
  height: pm(40.944),
  alignItems: "center",
  marginLeft: pm(6.3975),
  marginRight: pm(10.236),
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#ffd355",
  borderTopLeftRadius: pm(20.448),
  borderTopRightRadius: pm(20.448),
  borderBottomLeftRadius: pm(20.448),
  borderBottomRightRadius: pm(20.448),
},
xdw1bg: {
  marginTop: pm(11.962),
  alignItems: "flex-start",
  flexDirection: "row",
  justifyContent: "flex-start",
},
xdw1bh: {
  width: pm(320),
  height: pm(182.542),
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10.236),
  borderTopRightRadius: pm(10.236),
},
xdw1bi: {
  flex: 1,
  zIndex: 10,
  position: "relative",
  alignItems: "flex-end",
  flexDirection: "row",
  justifyContent: "center",
}
});
const slide = {"type":"171144","key":"c1711441","slug":null,"randomid":"id_615d0625a95b5507faeca380","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View1":{"ctx_map":{}},"View9":{"ctx_map":{}},"Modal1":{"ctx_map":{"mask":true,"value":true,"position":"bottom","baseIndex":2000,"maskClosable":true,"destroyOnClose":false,"appendKeyboardHeight":true}},"Text10":{"ctx_map":{"text":"设备名称"}},"Text11":{"ctx_map":{"text":"剩余0天"}},"Text12":{"ctx_map":{"text":"中文"}},"Text13":{"ctx_map":{"text":"设备语言"}},"Text14":{"ctx_map":{"text":"确认","numberOfLines":1}},"Text15":{"ctx_map":{"text":"取消","numberOfLines":1}},"Text16":{"ctx_map":{"text":"请输入设备名称","numberOfLines":1}},"Text17":{"ctx_map":{"text":"取消","numberOfLines":1}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"View20":{"ctx_map":{}},"Image10":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"SvgImage1":{"ctx_map":{"src":"u/dev069/2023/12/14/c95MutAy2axC7CLXqDcvMa/784054.svg","color":"#d3d3d3","width":20.742,"height":20.742,"SvgImageManage":"SvgImageManage"}},"DwappCloud1":{"ctx_map":{"bool1":true,"bool2":false,"text1":"基本设置","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud2":{"ctx_map":{"text1":"","text2":"","color1":"#aaaaaa","style1":null,"style2":null,"select1":"text","select2":"done"}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[]}},"ShadowView1":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}}}};
slide.components.DwappCloud1.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  flexDirection: "column",
};
slide.components.DwappCloud2.ctx_map.style1 = {
  width: pm(258.584),
  height: "100%",
  flexDirection: "column",
};
slide.components.DwappCloud2.ctx_map.style2 = {
  color: "#181818",
  height: "100%",
  flexWrap: "nowrap",
  fontSize: pm(12),
  borderTopWidth: pm(0),
  borderTopColor: "#000000",
  alignItems: "center",
  borderLeftWidth: pm(0),
  borderLeftColor: "#000000",
  fontFamily: "PingFangSC-Regular",
  lineHeight: pm(24),
  paddingTop: "auto",
  borderRightWidth: pm(0),
  borderRightColor: "#000000",
  paddingLeft: pm(12.795),
  borderBottomWidth: pm(0),
  borderBottomColor: "#000000",
  flexDirection: "column",
  paddingBottom: "auto",
  justifyContent: "center",
  backgroundColor: "#f8f8f8",
  borderTopLeftRadius: pm(6.824),
  borderTopRightRadius: pm(6.824),
  borderBottomLeftRadius: pm(6.824),
  borderBottomRightRadius: pm(6.824),
};
const pageGroupSlug = 'app_tongzhua-base_setting';

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
      {!!(state.isLoad) /* ViewIf2 */ && (<><Xbenchc176286 /* DwappCloud1 */ isCuzBtn={ slide.components.DwappCloud1.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud1.ctx_map.bool2 } eventData={ slide.components.DwappCloud1.ctx_map.prop1 } eventData2={ slide.components.DwappCloud1.ctx_map.prop2 } title={ slide.components.DwappCloud1.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud1.ctx_map.text2 } confirmText={ slide.components.DwappCloud1.ctx_map.text3 } cancelText={ slide.components.DwappCloud1.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud1.ctx_map.color1 } confirmColor={ slide.components.DwappCloud1.ctx_map.color2 } cancelColor={ slide.components.DwappCloud1.ctx_map.color3 } backIcon={ slide.components.DwappCloud1.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud1.ctx_map.image2 } titleStyle={ slide.components.DwappCloud1.ctx_map.style1 } screenType={ slide.components.DwappCloud1.ctx_map.select1 } ></Xbenchc176286>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw1b3} scrollX={ false } scrollY={ true } ><View /* View20 */   style={styles.xdw1b2}>{!!(state.device) /* ViewIf1 */ && (<><Shadow containerStyle={styles.xdw1b1} {...({ offset: [0, 4], distance: 14, startColor: 'rgb(0,0,0,0.05)' })}><View /* View1 */   style={styles.xdw1b0}><XbenchcView /* View10 */   viewStyle={styles.xdw1ay} onClick={getEvent('View10:onClick:func6:', {eventData: "device_name"}, bagForKeyValue, bagForIndex)}><Text /* Text10 */ style={styles.xdw1av} >{slide.components.Text10.ctx_map.text}</Text>
<Text /* Text11 */ style={styles.xdw1aw} >{state.device.data.name}</Text>
<XbenchcImage /* Image10 */ style={styles.xdw1ax} source={dwtools.qiniu(slide.components.Image10.ctx_map.src, slide.components.Image10.ctx_map.fop)}  /></XbenchcView>
<View /* View9 */   style={styles.xdw1az}><Text /* Text13 */ style={styles.xdw1av} >{slide.components.Text13.ctx_map.text}</Text>
<Text /* Text12 */ style={styles.xdw1aw} >{slide.components.Text12.ctx_map.text}</Text></View></View></Shadow></>)}</View></XbenchcScrollView>
<XbenchcModal /* Modal1 */ rootStyle={styles.xdw1bi} value={ state.pop_name } mask={ true } maskClosable={ true } appendKeyboardHeight={ true }  onValueChange={getEvent('Modal1:onValueChange:func7:', {}, bagForKeyValue, bagForIndex)}><View /* View11 */   style={styles.xdw1bh}><View /* View17 */   style={styles.xdw1b5}><Text /* Text16 */ style={styles.xdw1b4} numberOfLines={1}>{slide.components.Text16.ctx_map.text}</Text></View>
<View /* View15 */   style={styles.xdw1b9}><View /* View16 */   style={styles.xdw1b8}><Xbenchc168610 /* DwappCloud2 */ eventData={ slide.components.DwappCloud2.ctx_map.prop1 } eventData2={ slide.components.DwappCloud2.ctx_map.prop2 } value={ state.edit_name } placeholder={ state.device.data.name } rnappPlaceholderTextColor={ slide.components.DwappCloud2.ctx_map.color1 } containerStyle={ slide.components.DwappCloud2.ctx_map.style1 } valueInputStyle={ slide.components.DwappCloud2.ctx_map.style2 } type={ slide.components.DwappCloud2.ctx_map.select1 } confirmType={ slide.components.DwappCloud2.ctx_map.select2 }  onChange={getEvent('DwappCloud2:input::edit_name', {}, bagForKeyValue, bagForIndex)}></Xbenchc168610>
<XbenchcView /* View18 */   viewStyle={styles.xdw1b7} onClick={getEvent('View18:onClick:func8:', {}, bagForKeyValue, bagForIndex)}><Image /* SvgImage1 */ style={[ styles.xdw1b6, { width: pm(20.742), height: pm(20.742) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev069/2023/12/14/c95MutAy2axC7CLXqDcvMa/784054.svg"), width: pm(20.742), height: pm(20.742) }} /></XbenchcView></View></View>
<View /* View12 */   style={styles.xdw1bg}><XbenchcView /* View14 */   viewStyle={styles.xdw1bc} hoverStyle={styles.xdw1bb} onClick={getEvent('View14:onClick:func7:', {}, bagForKeyValue, bagForIndex)}><Text /* Text15 */ style={styles.xdw1ba} numberOfLines={1}>{slide.components.Text15.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View13 */   viewStyle={styles.xdw1bf} hoverStyle={styles.xdw1be} onClick={getEvent('View13:onClick:func9:', {}, bagForKeyValue, bagForIndex)}><Text /* Text14 */ style={styles.xdw1bd} numberOfLines={1}>{slide.components.Text14.ctx_map.text}</Text></XbenchcView></View></View></XbenchcModal></>)}
    </ErrorBoundary>
  )
}
