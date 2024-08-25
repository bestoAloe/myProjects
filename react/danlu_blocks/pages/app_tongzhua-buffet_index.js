
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import Xbenchc168615 from '../components/Xbenchc168615'
import { Shadow } from 'react-native-shadow-2'
import XbenchcPickerView from '../../xbench/xbenchc/components/XbenchcPickerView'
import XbenchcButton from '../../xbench/xbenchc/components/XbenchcButton'
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
const action72 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action8 = state.device = (null)
  const action9 = state.device_member = (null)
  const action14 = state.platform = ("dwapp")
  const action18 = state.minWeightOption = ([])
  const action17 = state.maxWeightOption = ([])
  const action25 = state.minSelectPop = (false)
  const action26 = state.maxSelectPop = (false)
  const action30 = state.minValue = ([0])
  const action29 = state.maxValue = ([0])
  /* action77: 投影 */
  const action78 = state.rnappShadow = ({ offset: [0, 4], distance: 14, startColor: '#00000005' })
  return state
}

const action10 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action12 = store.commit('setState', {["state.platform"]: dw.platform})
  const action13 = await store.dispatch("func1", {})
  const action22 = await store.dispatch("func2", {})
}

const action2 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action3 = await dw.app.run("device.user_get", {"uuid": dw.query.uuid || "f5892e18-23d7-4903-a044-97094e97c7af"})
  
        if ((action3.status) === ("error")) {
          const action4message = (action3.message || "操作错误！")
          const action4title = ("提示")
          action4message && dw.alert(action4title, action4message)
          return {}
        }
        
  const action5 = store.commit('setState', {["state.device"]: action3.object})
  let device_member = (action3.device_member)
  const action61 = device_member
  const action65 = ((store, event) => {
if(!device_member.data.feed_config.buffetMode.data.minWeight && device_member.data.feed_config.buffetMode.data.minWeight !== 0){
  device_member.data.feed_config.buffetMode.data.minWeight = 5
}

if(!device_member.data.feed_config.buffetMode.data.maxWeight && device_member.data.feed_config.buffetMode.data.maxWeight !== 0){
  device_member.data.feed_config.buffetMode.data.maxWeight = 500
}
})(store, event)
  const action6 = store.commit('setState', {["state.device_member"]: device_member})
}

const action69 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action70 = modalInstance = (event.data)
  const action71 = console.log('[getModalInstance#action71] 打印(modalInstance)', modalInstance)
}

const action15 = actions['func2'] = function (store, event) {
  const state = store.state
  const action16 = ((store, event) => {
// 碗内余量 1~50

const minWeightOption = []
for(let i = 1; i<= 50; i++){
    minWeightOption.push({
        value: i,
        label: i,
    })
}

// 今日总出粮

const maxWeightOption = []
for(let i = 5; i<= 1000; i = i + 5){
    maxWeightOption.push({
        value: i,
        label: i,
    })
}

return {
  minWeightOption,
  maxWeightOption
}
})(store, event)
  const action20 = store.commit('setState', {["state.minWeightOption"]: [action16.minWeightOption], ["state.maxWeightOption"]: [action16.maxWeightOption]})
  /* action31: 初始化选项值 */
  let min = (state.device_member.data.feed_config.buffetMode.data.minWeight)
  const action33 = min
  const action37 = console.log('[func2#action37] 打印(min)的返回值', min)
  let max = (state.device_member.data.feed_config.buffetMode.data.maxWeight)
  const action32 = max
  const action38 = console.log('[func2#action38] 打印(max)的返回值', max)
  const action35 = store.commit('setState', {["state.minValue"]: [state.minWeightOption[0].findIndex(x=>x.value === min)], ["state.maxValue"]: [state.maxWeightOption[0].findIndex(x=>x.value === max)]})
}

const action23 = actions['func3'] = function (store, event) {
  const state = store.state
  const action24 = store.commit('setState', {["state.minSelectPop"]: true})
}

const action27 = actions['func4'] = function (store, event) {
  const state = store.state
  const action28 = store.commit('setState', {["state.minSelectPop"]: false})
}

const action56 = actions['func8'] = function (store, event) {
  const state = store.state
  const action57 = store.commit('setState', {["state.maxSelectPop"]: true})
}

const action58 = actions['func9'] = function (store, event) {
  const state = store.state
  const action59 = store.commit('setState', {["state.maxSelectPop"]: false})
}

const action42 = actions['func6'] = function (store, event) {
  const state = store.state
  let value = (event.data.detail.value)
  const action47 = value
  const action43 = store.commit('setState', {["state.minValue"]: value, ["state.device_member.data.feed_config.buffetMode.data.minWeight"]: state.minWeightOption[0][value[0]].value})
}

const action51 = actions['func7'] = function (store, event) {
  const state = store.state
  let value = (event.data.detail.value)
  const action52 = value
  const action53 = store.commit('setState', {["state.maxValue"]: value, ["state.device_member.data.feed_config.buffetMode.data.maxWeight"]: state.maxWeightOption[0][value[0]].value})
}

const action39 = actions['func5'] = async function (store, event) {
  const state = store.state
  const action50 = store.commit('setState', {["state.minSelectPop"]: false, ["state.maxSelectPop"]: false})
  const action40 = await dw.app.run("mqtt.send_feed_config", {"data": state.device_member.data.feed_config, "device_member_uuid": state.device_member.uuid})
  const action67 = await dw.app.run("device_member.update", {"id": state.device_member.id, "formData": {/**/  feed_config: state.device_member.data.feed_config/**/}})
  
        if ((action67.status) === ("error")) {
          const action68message = (action67.message || "操作错误！")
          const action68title = ("提示")
          action68message && dw.alert(action68title, action68message)
          return {}
        }
        
  
        if ((action40.status) === ("error")) {
          const action44message = (action40.message || "操作错误！")
          const action44title = ("提示")
          action44message && dw.alert(action44title, action44message)
          return {}
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
xdw14s: {
  color: "#181818",
  fontSize: pm(14),
  fontWeight: "500",
  lineHeight: pm(20),
  marginRight: pm(6),
},
xdw14t: {
  color: "#999999",
  fontSize: pm(11),
  fontWeight: "400",
  lineHeight: pm(20),
},
xdw14u: {
  alignItems: "center",
  flexDirection: "row",
},
xdw14v: {
  color: "#999999",
  fontSize: pm(13),
  fontWeight: "400",
  lineHeight: pm(20),
  marginRight: pm(5),
},
xdw14w: {
  width: pm(6),
  height: pm(12),
},
xdw14x: {
  alignItems: "center",
  marginLeft: "auto",
  marginRight: pm(0),
  flexDirection: "row",
},
xdw14y: {
  alignItems: "center",
  paddingTop: pm(15),
  flexDirection: "row",
  paddingBottom: pm(15),
  justifyContent: "space-between",
},
xdw14z: {
  color: "#181818",
  fontSize: pm(14),
  fontWeight: "500",
  lineHeight: pm(20),
},
xdw150: {
  paddingTop: pm(15),
  flexDirection: "row",
  paddingBottom: pm(15),
  justifyContent: "space-between",
},
xdw151: {
  width: pm(300),
  paddingLeft: pm(15),
  paddingRight: pm(15),
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw152: {
  width: pm(300),
  marginTop: pm(15),
  marginLeft: pm(10),
  marginRight: pm(10),
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw153: {
  color: "#333333",
  fontSize: pm(14),
  textAlign: "center",
  lineHeight: pm(19),
  paddingTop: pm(13),
  paddingBottom: pm(13),
},
xdw154: {
  borderBottomWidth: pm(1),
  borderBottomColor: "#eeeeee",
  justifyContent: "center",
},
xdw155: {
  flexDirection: "row",
},
xdw156: {
  fontSize: pm(14),
  fontWeight: "600",
  lineHeight: pm(19),
},
xdw157: {
  width: pm(141),
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
xdw158: {
  width: pm(141),
  height: pm(38),
  alignItems: "center",
  marginRight: pm(13),
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#f8f8f8",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw159: {
  width: pm(141),
  height: pm(38),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "rgba(255, 218, 103, 1)",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw15a: {
  width: pm(320),
  paddingLeft: pm(17),
  paddingRight: pm(17),
  flexDirection: "column",
  paddingBottom: pm(29),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
},
xdw15b: {
  flex: 1,
  zIndex: 10,
  alignItems: "flex-end",
  flexDirection: "row",
  justifyContent: "center",
},
xdw15c: {
  flexGrow: 1,
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  flexDirection: "column",
  paddingBottom: 0,
  backgroundColor: "#F8F8F8",
}
});
const slide = {"type":"170317","key":"c1703171","slug":null,"randomid":"id_62863d6d00dd7194d69718ef","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"Image4":{"ctx_map":{"fop":"e,18,36","src":"u/dev066/2024/02/26/4ggjGLJMn2PD2GBz3N6uVh/路径33.png"}},"Image6":{"ctx_map":{"fop":"e,18,36","src":"u/dev066/2024/02/26/4ggjGLJMn2PD2GBz3N6uVh/路径33.png"}},"Modal1":{"ctx_map":{"mask":true,"value":false,"position":"bottom","baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Modal2":{"ctx_map":{"mask":true,"value":false,"position":"bottom","baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Text14":{"ctx_map":{"text":"碗内余粮"}},"Text15":{"ctx_map":{"text":"余量克数达到设定值时自动出粮"}},"Text16":{"ctx_map":{"text":"5g"}},"Text17":{"ctx_map":{"text":"500g"}},"Text23":{"ctx_map":{"text":"保存"}},"Text24":{"ctx_map":{"text":"取消"}},"Text25":{"ctx_map":{"text":"碗内余粮"}},"Text26":{"ctx_map":{"text":"保存"}},"Text27":{"ctx_map":{"text":"取消"}},"Text28":{"ctx_map":{"text":"今日总出粮"}},"Text29":{"ctx_map":{"text":"今日总出粮"}},"Text30":{"ctx_map":{"text":"安全旁路"}},"Text31":{"ctx_map":{"text":"6小时自助餐未出粮时补一份粮"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"View20":{"ctx_map":{}},"View21":{"ctx_map":{}},"View22":{"ctx_map":{}},"View23":{"ctx_map":{}},"View24":{"ctx_map":{}},"View25":{"ctx_map":{}},"View26":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"DwappCloud2":{"ctx_map":{"bool1":true,"color1":"rgb(204, 204, 204)","color2":"#FFD168"}},"DwappCloud3":{"ctx_map":{"bool1":true,"bool2":false,"text1":"自助餐设置","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud4":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"PickerView1":{"ctx_map":{"range":[[{"label":"上午","value":"am"},{"label":"下午","value":"pm"}]],"value":[0],"nextLabel":"g"}},"PickerView2":{"ctx_map":{"range":[[{"label":"上午","value":"am"},{"label":"下午","value":"pm"}]],"value":[0],"nextLabel":"g"}},"ShadowView1":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}},"NativeButton1":{"ctx_map":{"type":"button"}},"NativeButton2":{"ctx_map":{"type":"button"}},"NativeButton3":{"ctx_map":{"type":"button"}},"NativeButton4":{"ctx_map":{"type":"button"}}}};
slide.components.DwappCloud3.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  flexDirection: "column",
};
slide.components.DwappCloud4.ctx_map.valueStyle = {
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
slide.components.DwappCloud4.ctx_map.containerStyle = {
  marginBottom: pm(18),
  flexDirection: "column",
};
slide.components.DwappCloud4.ctx_map.valueInputStyle = {
  color: "#333333",
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-buffet_index';

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
<View /* View3 */   style={styles.xdw15c}><Shadow containerStyle={styles.xdw152} {...(state.rnappShadow)}><View /* View24 */   style={styles.xdw151}><XbenchcView /* View4 */   viewStyle={styles.xdw14y} onClick={getEvent('View4:onClick:func3:', {}, bagForKeyValue, bagForIndex)}><View /* View25 */   style={styles.xdw14u}><Text /* Text14 */ style={styles.xdw14s} >{slide.components.Text14.ctx_map.text}</Text>
<Text /* Text15 */ style={styles.xdw14t} >{slide.components.Text15.ctx_map.text}</Text></View>
<View /* View5 */   style={styles.xdw14x}>{!!(!!state.device_member) /* ViewIf1 */ && (<><Text /* Text16 */ style={styles.xdw14v} >{state.device_member.data.feed_config.buffetMode.data.minWeight + "g"}</Text></>)}
<XbenchcImage /* Image4 */ style={styles.xdw14w} source={dwtools.qiniu(slide.components.Image4.ctx_map.src, slide.components.Image4.ctx_map.fop)}  /></View></XbenchcView>
<XbenchcView /* View6 */   viewStyle={styles.xdw14y} onClick={getEvent('View6:onClick:func8:', {}, bagForKeyValue, bagForIndex)}><Text /* Text29 */ style={styles.xdw14z} >{slide.components.Text29.ctx_map.text}</Text>
<View /* View7 */   style={styles.xdw14x}>{!!(!!state.device_member) /* ViewIf2 */ && (<><Text /* Text17 */ style={styles.xdw14v} >{state.device_member.data.feed_config.buffetMode.data.maxWeight + "g"}</Text></>)}
<XbenchcImage /* Image6 */ style={styles.xdw14w} source={dwtools.qiniu(slide.components.Image6.ctx_map.src, slide.components.Image6.ctx_map.fop)}  /></View></XbenchcView>
<View /* View10 */   style={styles.xdw150}><View /* View26 */   style={styles.xdw14u}><Text /* Text30 */ style={styles.xdw14s} >{slide.components.Text30.ctx_map.text}</Text>
<Text /* Text31 */ style={styles.xdw14t} >{slide.components.Text31.ctx_map.text}</Text></View>
<View /* View11 */   style={styles.xdw14x}>{!!(!!state.device_member && !!state.device_member.data) /* ViewIf3 */ && (<><Xbenchc168615 /* DwappCloud2 */ value={ state.device_member.data.feed_config.buffetMode.data.securityBypass } eventData={ slide.components.DwappCloud2.ctx_map.prop1 } eventData2={ slide.components.DwappCloud2.ctx_map.prop2 } bgColor={ slide.components.DwappCloud2.ctx_map.color1 } activeBgColor={ slide.components.DwappCloud2.ctx_map.color2 }  onChange={getEvent('DwappCloud2:input:func5:device_member.data.feed_config.buffetMode.data.securityBypass', {}, bagForKeyValue, bagForIndex)}></Xbenchc168615></>)}</View></View></View></Shadow>
<XbenchcModal /* Modal1 */ rootStyle={styles.xdw15b} value={ state.minSelectPop } mask={ true } maskClosable={ true } ><View /* View12 */   style={styles.xdw15a}><View /* View17 */   style={styles.xdw154}><Text /* Text25 */ style={styles.xdw153} >{slide.components.Text25.ctx_map.text}</Text></View>
<View /* View16 */   style={styles.xdw155}><XbenchcPickerView /* PickerView1 */ value={ state.minValue } range={ state.minWeightOption } nextLabel={ slide.components.PickerView1.ctx_map.nextLabel }  onChange={getEvent('PickerView1:input:func6:minValue', {}, bagForKeyValue, bagForIndex)}></XbenchcPickerView></View>
<View /* View13 */   style={styles.xdw155}><View /* View15 */   style={styles.xdw158}><XbenchcButton /* NativeButton2 */ viewStyle={styles.xdw157} onClick={getEvent('NativeButton2:onClick:func4:', {}, bagForKeyValue, bagForIndex)}><Text /* Text24 */ style={styles.xdw156} >{slide.components.Text24.ctx_map.text}</Text></XbenchcButton></View>
<View /* View14 */   style={styles.xdw159}><XbenchcButton /* NativeButton1 */ viewStyle={styles.xdw157} onClick={getEvent('NativeButton1:onClick:func5:', {}, bagForKeyValue, bagForIndex)}><Text /* Text23 */ style={styles.xdw156} >{slide.components.Text23.ctx_map.text}</Text></XbenchcButton></View></View></View></XbenchcModal>
<XbenchcModal /* Modal2 */ rootStyle={styles.xdw15b} value={ state.maxSelectPop } mask={ true } maskClosable={ true } ><View /* View18 */   style={styles.xdw15a}><View /* View23 */   style={styles.xdw154}><Text /* Text28 */ style={styles.xdw153} >{slide.components.Text28.ctx_map.text}</Text></View>
<View /* View22 */   style={styles.xdw155}><XbenchcPickerView /* PickerView2 */ value={ state.maxValue } range={ state.maxWeightOption } nextLabel={ slide.components.PickerView2.ctx_map.nextLabel }  onChange={getEvent('PickerView2:input:func7:maxValue', {}, bagForKeyValue, bagForIndex)}></XbenchcPickerView></View>
<View /* View19 */   style={styles.xdw155}><View /* View21 */   style={styles.xdw158}><XbenchcButton /* NativeButton4 */ viewStyle={styles.xdw157} onClick={getEvent('NativeButton4:onClick:func9:', {}, bagForKeyValue, bagForIndex)}><Text /* Text27 */ style={styles.xdw156} >{slide.components.Text27.ctx_map.text}</Text></XbenchcButton></View>
<View /* View20 */   style={styles.xdw159}><XbenchcButton /* NativeButton3 */ viewStyle={styles.xdw157} onClick={getEvent('NativeButton3:onClick:func5:', {}, bagForKeyValue, bagForIndex)}><Text /* Text26 */ style={styles.xdw156} >{slide.components.Text26.ctx_map.text}</Text></XbenchcButton></View></View></View></XbenchcModal>
<Xbenchc275104 /* DwappCloud4 */ valueStyle={ slide.components.DwappCloud4.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud4.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud4.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud4:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104></View>
    </ErrorBoundary>
  )
}
