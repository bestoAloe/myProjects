
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import { Shadow } from 'react-native-shadow-2'
import Xbenchc275104 from '../components/Xbenchc275104'
import XbenchcScrollView from '../../xbench/xbenchc/components/XbenchcScrollView'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

let modalInstance = (null)
const action46 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action3 = state.device = (null)
  const action4 = state.device_member = (null)
  const action5 = state.platform = ("dwapp")
  const action29 = state.main_can_update = (false)
  const action68 = state.mcu_can_update = (false)
  const action44 = state.ready = (false)
  return state
}

const action11 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action12 = store.commit('setState', {["state.platform"]: dw.platform})
  const action13 = await store.dispatch("func1", {})
  const action31 = await store.dispatch("func4", {})
  const action69 = await store.dispatch("func6", {})
  const action45 = store.commit('setState', {["state.ready" ]: true})
}

const action47 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action48 = modalInstance = (event.data)
  const action49 = console.log('[getModalInstance#action49] 打印(modalInstance)', modalInstance)
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

const action14 = actions['func2'] = async function (store, event) {
  const state = store.state
  let message = ("确认删除设备吗? ")
  const action51 = message
  const action52 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(message)
}
else{
  return null
}
})(store, event)
  
        if (!!(!action15) === (true)) {
          const action16message = ("")
          const action16title = ("提示")
          action16message && dw.alert(action16title, action16message)
          return {}
        }
        
  const action17 = await dw.app.run("device_member.delete", {"id": state.device_member.id})
  
        if ((action17.status) === ("error")) {
          const action18message = (action17.message || "操作错误！")
          const action18title = ("提示")
          action18message && dw.alert(action18title, action18message)
          return {}
        }
        
  let message2 = ("删除成功")
  const action54 = message2
  const action55 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message2, 1500)
}
})(store, event)
  await new Promise((resolve, reject) => setTimeout(resolve, 300))
  const action21 = dw.app.goToPappUrl("dcenter", {}, {redirectTo: false})
}

const action22 = actions['func3'] = async function (store, event) {
  const state = store.state
  const action37 = await store.dispatch("func5", {})
  let slug = (event.context.eventData)
  const action23 = slug
  const action24 = dw.app.goToPappUrl(slug, {"uuid": state.device.uuid}, {redirectTo: false})
}

const action25 = actions['func4'] = async function (store, event) {
  const state = store.state
  const action78 = console.log('[func4#action78] 打印', "!!!!!固件")
  const action27 = await dw.app.run("version.list", {"limit": 1, "offset": 0, "filters": {/**/  data__type: 'OTA',/**/  data__ota_type: 'main'/**/}, "order_by": ["-data__order__float"]})
  if (action27.objects.length) {
    let main_newest_version = (action27.objects[0])
    const action28 = main_newest_version
    if ((main_newest_version.data.code) == (state.device.data.version.split("|")[0])) {
      return 
    }
    const action70 = store.commit('setState', {["state.main_can_update"]: true})
  }
}

const action56 = actions['func6'] = async function (store, event) {
  const state = store.state
  const action79 = console.log('[func6#action79] 打印', "!!!!!mcu")
  const action57 = await dw.app.run("version.list", {"limit": 1, "offset": 0, "filters": {/**/  data__type: 'OTA',/**/  data__ota_type: 'mcu'/**/}, "order_by": ["-data__order__float"]})
  if (action57.objects.length) {
    let mcu_newest_version = (action57.objects[0])
    const action60 = mcu_newest_version
    if ((mcu_newest_version.data.code) == (state.device.data.version.split("|")[1])) {
      return 
    }
    const action75 = store.commit('setState', {["state.mcu_can_update"]: true})
  }
}

const action35 = actions['func5'] = async function (store, event) {
  const state = store.state
  const action36 = await (async (store, event) => {
const key_device = "device_setting/device"
const key_device_member = "device_setting/device_member"
const jsonValue1 = JSON.stringify(state.device)
const jsonValue2 = JSON.stringify(state.device_member)
if(state.platform === 'rnapp'){
  console.log('rnapp | handle storage')
  const AsyncStorage = dw.getNativePackage('AsyncStorage')
  await AsyncStorage.setItem(key_device, jsonValue1)
  await AsyncStorage.setItem(key_device_member, jsonValue2)
}
else{
  window.localStorage.setItem(key_device, jsonValue1)
  window.localStorage.setItem(key_device_member, jsonValue2)
}
})(store, event)
}

exports.default =  {
  actions
}

        return exports.default;
      });
    

    const getDate = (...args) => new Date(...args);
    const getRegExp = (...args) => new RegExp(...args);

    computeds = (function () {
      const module = {};
      'use strict';

var actions = {};

var modalInstance = null;
var action46 = modalInstance;
var action41 = actions['computed2'] = function (event, state) {
  return state.device.data.version.split("|")[0];
};
// COMPUTED_ACTION_META:computed2 {"deps":["device"]}

var action66 = actions['computed4'] = function (event, state) {
  return state.device.data.version.split("|")[1];
};
// COMPUTED_ACTION_META:computed4 {"deps":["device"]}

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdw1o9: {
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
  marginRight: pm(7),
},
xdw1oa: {
  color: "#FFFFFF",
  fontSize: pm(10),
  lineHeight: pm(15),
},
xdw1ob: {
  width: pm(34),
  height: pm(15),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#FF6D6D",
  borderTopLeftRadius: pm(7),
  borderTopRightRadius: pm(7),
  borderBottomLeftRadius: pm(7),
  borderBottomRightRadius: pm(7),
},
xdw1oc: {
  flexGrow: 1,
  flexBasis: 0,
  flexShrink: 1,
  flexDirection: "row",
},
xdw1od: {
  color: "#999999",
  flexGrow: 0,
  fontSize: pm(12),
  maxWidth: pm(130),
  flexShrink: 0,
  fontWeight: "400",
  lineHeight: pm(17),
  marginRight: pm(7),
},
xdw1oe: {
  color: "#999999",
  flexGrow: 0,
  fontSize: pm(12),
  flexShrink: 0,
  fontWeight: "400",
  lineHeight: pm(17),
  marginRight: pm(7),
},
xdw1of: {
  flexDirection: "row",
},
xdw1og: {
  width: pm(12),
  height: pm(12),
},
xdw1oh: {
  flexWrap: "nowrap",
  alignItems: "center",
  marginLeft: pm(10.236),
  paddingTop: pm(13),
  borderBottomWidth: pm(0),
  borderBottomColor: "#000000",
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(13),
  justifyContent: "flex-start",
  borderTopRightRadius: pm(10.236),
  borderBottomRightRadius: pm(10.236),
},
xdw1oi: {
  width: pm(299.403),
  height: pm(95.536),
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10.236),
  borderTopRightRadius: pm(10.236),
  borderBottomLeftRadius: pm(10.236),
  borderBottomRightRadius: pm(10.236),
},
xdw1oj: {
  width: pm(299.403),
  height: pm(95.536),
  marginTop: pm(13.648),
  marginLeft: pm(10.236),
  marginRight: pm(10.236),
  flexDirection: "column",
  borderTopLeftRadius: pm(10.236),
  borderTopRightRadius: pm(10.236),
  borderBottomLeftRadius: pm(10.236),
  borderBottomRightRadius: pm(10.236),
},
xdw1ok: {
  flexGrow: 1,
  fontSize: pm(12),
  flexShrink: 1,
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw1ol: {
  color: "#999999",
  flexGrow: 0,
  fontSize: pm(12),
  flexShrink: 0,
  fontWeight: "400",
  lineHeight: pm(17),
},
xdw1om: {
  width: pm(279.528),
  height: pm(47.768),
  flexWrap: "nowrap",
  alignItems: "center",
  marginLeft: pm(10),
  paddingTop: pm(13),
  marginRight: pm(10),
  borderBottomWidth: pm(0),
  borderBottomColor: "#eeeeee",
  flexDirection: "row",
  paddingBottom: pm(13),
  justifyContent: "flex-start",
},
xdw1on: {
  flexGrow: 1,
  fontSize: pm(12),
  flexBasis: 0,
  flexShrink: 1,
  fontWeight: "500",
  lineHeight: pm(17),
  backgroundColor: "#ffffff",
},
xdw1oo: {
  color: "#999999",
  flexGrow: 0,
  fontSize: pm(12),
  flexShrink: 0,
  fontWeight: "400",
  lineHeight: pm(17),
  backgroundColor: "#ffffff",
},
xdw1op: {
  width: pm(279.528),
  height: pm(47.768),
  flexWrap: "nowrap",
  alignItems: "center",
  marginLeft: pm(10),
  paddingTop: pm(13),
  borderBottomWidth: pm(0),
  borderBottomColor: "#eeeeee",
  flexDirection: "row",
  paddingBottom: pm(13),
  justifyContent: "flex-start",
},
xdw1oq: {
  width: pm(299.528),
  height: pm(191.072),
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10.236),
  borderTopRightRadius: pm(10.236),
  borderBottomLeftRadius: pm(10.236),
  borderBottomRightRadius: pm(10.236),
},
xdw1or: {
  width: pm(299.528),
  height: pm(191.072),
  marginTop: pm(13.648),
  marginLeft: pm(10.236),
  marginRight: pm(10.236),
  flexDirection: "column",
  borderTopLeftRadius: pm(10.236),
  borderTopRightRadius: pm(10.236),
  borderBottomLeftRadius: pm(10.236),
  borderBottomRightRadius: pm(10.236),
},
xdw1os: {
  width: pm(320),
  height: pm(550),
  flexDirection: "column",
},
xdw1ot: {
  flex: 1,
  width: "100%",
  overflow: "scroll",
  borderTopWidth: pm(1),
  borderTopColor: "#eeeeee",
  backgroundColor: "#f8f8f8",
}
});
const slide = {"type":"171147","key":"c1711471","slug":null,"randomid":"id_48f4cb23b6edd89c47454f11","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View1":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image3":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Image4":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Image5":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Text12":{"ctx_map":{"text":"设备版本"}},"Text13":{"ctx_map":{"text":"昵称"}},"Text14":{"ctx_map":{"text":"序列号"}},"Text15":{"ctx_map":{"text":"昵称"}},"Text16":{"ctx_map":{"text":"昵称"}},"Text17":{"ctx_map":{"text":"设备日期"}},"Text18":{"ctx_map":{"text":"昵称1"}},"Text19":{"ctx_map":{"text":"首次激活时间"}},"Text25":{"ctx_map":{"text":"删除设备"}},"Text26":{"ctx_map":{"text":"昵称","numberOfLines":1}},"Text27":{"ctx_map":{"text":"固件版本"}},"Text28":{"ctx_map":{"text":"NEW"}},"Text29":{"ctx_map":{"text":"可升级"}},"Text30":{"ctx_map":{"text":"可升级"}},"Text31":{"ctx_map":{"text":"昵称","numberOfLines":1}},"Text32":{"ctx_map":{"text":"NEW"}},"Text33":{"ctx_map":{"text":"单片机版本"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"View20":{"ctx_map":{}},"View21":{"ctx_map":{}},"View22":{"ctx_map":{}},"View23":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewIf5":{"ctx_map":{"value":true}},"DwappCloud1":{"ctx_map":{"bool1":true,"bool2":false,"text1":"关于设备","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud2":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"ScrollView2":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[]}},"ShadowView1":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}},"ShadowView2":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}}}};
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
const pageGroupSlug = 'app_tongzhua-about_device';

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
<XbenchcScrollView /* ScrollView2 */ style={styles.xdw1ot} scrollX={ false } scrollY={ true } >{!!(state.ready) /* ViewIf1 */ && (<><View /* View19 */   style={styles.xdw1os}><Shadow containerStyle={styles.xdw1oj} {...({ offset: [0, 4], distance: 14, startColor: 'rgb(0,0,0,0.05)' })}><View /* View1 */   style={styles.xdw1oi}><XbenchcView /* View15 */   viewStyle={styles.xdw1oh} onClick={getEvent('View15:onClick:func3:', {eventData: "firmware_version"}, bagForKeyValue, bagForIndex)}><View /* View16 */   style={styles.xdw1oc}><Text /* Text27 */ style={styles.xdw1o9} >{slide.components.Text27.ctx_map.text}</Text>
{!!(state.main_can_update) /* ViewIf2 */ && (<><View /* View17 */   style={styles.xdw1ob}><Text /* Text28 */ style={styles.xdw1oa} >{slide.components.Text28.ctx_map.text}</Text></View></>)}</View>
<View /* View18 */   style={styles.xdw1of}><Text /* Text26 */ style={styles.xdw1od} numberOfLines={1}>{computeds.computed2({}, state)}</Text>
{!!(state.main_can_update) /* ViewIf3 */ && (<><Text /* Text29 */ style={styles.xdw1oe} >{slide.components.Text29.ctx_map.text}</Text></>)}</View>
<XbenchcImage /* Image3 */ style={styles.xdw1og} source={dwtools.qiniu(slide.components.Image3.ctx_map.src, slide.components.Image3.ctx_map.fop)}  /></XbenchcView>
<XbenchcView /* View20 */   viewStyle={styles.xdw1oh} onClick={getEvent('View20:onClick:func3:', {eventData: "mcu_version"}, bagForKeyValue, bagForIndex)}><View /* View22 */   style={styles.xdw1oc}><Text /* Text33 */ style={styles.xdw1o9} >{slide.components.Text33.ctx_map.text}</Text>
{!!(state.mcu_can_update) /* ViewIf5 */ && (<><View /* View23 */   style={styles.xdw1ob}><Text /* Text32 */ style={styles.xdw1oa} >{slide.components.Text32.ctx_map.text}</Text></View></>)}</View>
<View /* View21 */   style={styles.xdw1of}><Text /* Text31 */ style={styles.xdw1od} numberOfLines={1}>{computeds.computed4({}, state)}</Text>
{!!(state.mcu_can_update) /* ViewIf4 */ && (<><Text /* Text30 */ style={styles.xdw1oe} >{slide.components.Text30.ctx_map.text}</Text></>)}</View>
<XbenchcImage /* Image5 */ style={styles.xdw1og} source={dwtools.qiniu(slide.components.Image5.ctx_map.src, slide.components.Image5.ctx_map.fop)}  /></XbenchcView></View></Shadow>
<Shadow containerStyle={styles.xdw1or} {...({ offset: [0, 4], distance: 14, startColor: 'rgb(0,0,0,0.05)' })}><View /* View11 */   style={styles.xdw1oq}><View /* View8 */   style={styles.xdw1om}><Text /* Text14 */ style={styles.xdw1ok} >{slide.components.Text14.ctx_map.text}</Text>
<Text /* Text13 */ style={styles.xdw1ol} >{state.device.data.device_id}</Text></View>
<View /* View7 */   style={styles.xdw1op}><Text /* Text12 */ style={styles.xdw1on} >{slide.components.Text12.ctx_map.text}</Text>
<Text /* Text15 */ style={styles.xdw1oo} >{state.device.data.device_model_uuid__toone.data.code}</Text></View>
<View /* View9 */   style={styles.xdw1op}><Text /* Text17 */ style={styles.xdw1ok} >{slide.components.Text17.ctx_map.text}</Text>
<Text /* Text16 */ style={styles.xdw1ol} >{state.device.data.create_date.startsWith("1970") ? "暂无" : state.device.data.create_date.slice(0, 10).split("-").join(".")}</Text></View>
<View /* View10 */   style={styles.xdw1op}><Text /* Text19 */ style={styles.xdw1ok} >{slide.components.Text19.ctx_map.text}</Text>
<Text /* Text18 */ style={styles.xdw1ol} >{state.device.created.slice(0, 10).split("-").join(".")}</Text></View></View></Shadow>
<Xbenchc275104 /* DwappCloud2 */ valueStyle={ slide.components.DwappCloud2.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud2.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud2.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud2:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104></View></>)}</XbenchcScrollView>
    </ErrorBoundary>
  )
}
