
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import Xbenchc174461 from '../components/Xbenchc174461'
import Xbenchc191300 from '../components/Xbenchc191300'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
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
const action85 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action2 = state.start_time = ("00:00")
  const action3 = state.end_time = ("06:00")
  const action5 = state.device = (null)
  const action6 = state.device_member = (null)
  const action7 = state.platform = ("dwapp")
  /* action17: 时间 */
  const action18 = state.timePop = (false)
  const action19 = state.timeRange = ([])
  const action20 = state.timeBindValue = ([])
  const action34 = state.current_mode = ('start_time')
  const action40 = state.is_tomorrow = (false)
  const action47 = state.hourDiff = (0)
  const action48 = state.minuteDiff = (0)
  const action82 = state.ready = (false)
  return state
}

const action13 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action14 = store.commit('setState', {["state.platform"]: dw.platform})
  const action15 = await store.dispatch("func2", {})
  const action33 = await store.dispatch("func4", {})
  const action56 = await store.dispatch("func8", {})
  const action43 = await store.dispatch("func7", {})
  const action81 = store.commit('setState', {["state.ready"]: true})
}

const action50 = actions['func8'] = function (store, event) {
  const state = store.state
  const action57 = console.log('[func8#action57] func8', state.device_member)
  const action58 = console.log('[func8#action58] config', state.device_member.data.feed_config.catFoodMode)
  if (state.device_member.data.feed_config.catFoodMode && state.device_member.data.feed_config.catFoodMode.data && state.device_member.data.feed_config.catFoodMode.data.length) {
    const action54 = store.commit('setState', {["state.start_time"]: state.device_member.data.feed_config.catFoodMode.data[0].startTime, ["state.end_time"]: state.device_member.data.feed_config.catFoodMode.data[0].endTime})
  }
}

const action86 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action87 = modalInstance = (event.data)
  const action88 = console.log('[getModalInstance#action88] 打印(modalInstance)', modalInstance)
}

const action8 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action9 = await dw.app.run("device.user_get", {"uuid": dw.query.uuid || "f5892e18-23d7-4903-a044-97094e97c7af"})
  
        if ((action9.status) === ("error")) {
          const action10message = (action9.message || "操作错误！")
          const action10title = ("提示")
          action10message && dw.alert(action10title, action10message)
          return {}
        }
        
  const action11 = store.commit('setState', {["state.device"]: action9.object})
  let device_member = (action9.device_member)
  const action79 = device_member
  const action80 = ((store, event) => {
device_member.data.feed_config.catFoodMode.isOpen = {
  1: true,
  2: false,
  true: true,
  false: false,
}[device_member.data.feed_config.catFoodMode.isOpen]
})(store, event)
  const action12 = store.commit('setState', {["state.device_member"]: device_member})
}

/* action22: 时间 */
const action23 = actions['func3'] = function (store, event) {
  const state = store.state
  const action35 = store.commit('setState', {["state.current_mode"]: event.context.eventData, ["state.timeBindValue"]: state[event.context.eventData].split(":").map(x=> parseInt(x))})
  /* action78: COMMIT */
  const action24 = store.commit('setState', {["state.timePop"]: true})
}

const action25 = actions['func6'] = function (store, event) {
  const state = store.state
  const action26 = store.commit('setState', {["state.timePop"]: false})
}

const action27 = actions['func4'] = function (store, event) {
  const state = store.state
  const action28 = ((store, event) => {
function generateOptions() {
  const options = [
    [],
    [],
  ];

  // 生成小时选项
  for (let i = 0; i <= 23; i++) {
    options[0].push({ label: i.toString().padStart(2, "0"), value: i });
  }

  // 生成分钟选项
  for (let i = 0; i <= 59; i++) {
    options[1].push({ label: i.toString().padStart(2, '0'), value: i });
  }

  return options;
}

const options = generateOptions();

return options
})(store, event)
  const action29 = store.commit('setState', {["state.timeRange"]: action28})
}

const action30 = actions['func5'] = async function (store, event) {
  const state = store.state
  const action31 = store.commit('setState', {[`state.${state.current_mode}`]: String(state.timeBindValue[0]).padStart(2, "0") + ":" + String(state.timeBindValue[1]).padStart(2, "0"), ["state.timePop"]: false})
  const action44 = await store.dispatch("func7", {})
}

const action36 = actions['func7'] = function (store, event) {
  const state = store.state
  const action45 = ((store, event) => {
function getTimeDuration(startTime, endTime) {
  const [startHour, startMinute] = startTime.split(':').map(Number);
  const [endHour, endMinute] = endTime.split(':').map(Number);

  // 计算时间差
  let hourDiff = endHour - startHour;
  let minuteDiff = endMinute - startMinute;

  // 处理跨天情况
  if (hourDiff < 0) {
    hourDiff += 24;
  }

  if (minuteDiff < 0) {
    minuteDiff += 60;
    hourDiff--;
  }

  return {
    hourDiff,
    minuteDiff,
  }
}
return getTimeDuration(state.start_time, state.end_time)
})(store, event)
  const action41 = store.commit('setState', {["state.is_tomorrow"]: state.end_time < state.start_time, ["state.hourDiff"]: action45.hourDiff, ["state.minuteDiff"]: action45.minuteDiff})
}

const action59 = actions['func9'] = async function (store, event) {
  const state = store.state
  const action83 = await dw.showLoading({
    title: "配置中...",
    mask: false
  })
  const action60 = await dw.app.run("mqtt.send_feed_config", {"data": {/**/  ...state.device_member.data.feed_config,/**/  catFoodMode: {/**/    isOpen: state.device_member.data.feed_config.catFoodMode.isOpen,/**/    data: [/**/      {/**/        startTime: state.start_time,/**/        endTime: state.end_time,/**/        week: [1,2,3,4,5,6,7]/**/      }/**/    ]/**/  }/**/}, "device_member_uuid": state.device_member.uuid})
  const action84 = await dw.hideLoading()
  
        if ((action60.status) === ("error")) {
          const action61message = (action60.message || "操作错误！")
          const action61title = ("提示")
          action61message && dw.alert(action61title, action61message)
          return {}
        }
        
  let message = ("操作成功")
  const action90 = message
  const action91 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  await new Promise((resolve, reject) => setTimeout(resolve, 300))
  const action63 = await dw.navigateBack({delta: 1})
}

const action68 = actions['func10'] = function (store, event) {
  const state = store.state
  const action70 = console.log('[func10#action70] event.data', event.data)
  const action69 = store.commit('setState', {["state.timeBindValue"]: event.data.detail.value})
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
xdw15x: {
  color: "#000000",
  fontSize: pm(24),
  lineHeight: pm(29),
  marginRight: pm(3),
},
xdw15y: {
  color: "#666666",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(25),
  marginRight: pm(3),
},
xdw15z: {
  color: "#666666",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(25),
},
xdw160: {
  marginTop: pm(31),
  alignItems: "flex-end",
  flexDirection: "row",
  justifyContent: "center",
},
xdw161: {
  color: "#999999",
  fontSize: pm(10),
  fontWeight: "500",
  lineHeight: pm(15),
},
xdw162: {
  marginTop: pm(15),
  marginBottom: pm(26),
  flexDirection: "row",
  justifyContent: "center",
},
xdw163: {
  flexDirection: "row",
  justifyContent: "center",
},
xdw164: {
  fontSize: pm(12),
  lineHeight: pm(24),
  marginRight: pm(10),
},
xdw165: {
  marginTop: pm(10),
  alignItems: "center",
  paddingLeft: pm(24),
  flexDirection: "row",
  justifyContent: "flex-start",
},
xdw166: {
  width: pm(20),
  height: pm(20),
},
xdw167: {
  fontSize: pm(12),
  lineHeight: pm(17),
},
xdw168: {
  alignItems: "center",
  marginBottom: pm(3),
  flexDirection: "row",
},
xdw169: {
  fontSize: pm(24),
  fontWeight: "600",
  lineHeight: pm(29),
  marginBottom: pm(3),
},
xdw16a: {
  color: "#666666",
  fontSize: pm(12),
  lineHeight: pm(17),
},
xdw16b: {
  width: pm(135),
  alignItems: "center",
  paddingTop: pm(13),
  flexDirection: "column",
  paddingBottom: pm(13),
},
xdw16c: {
  left: pm(135),
  width: pm(1),
  height: pm(34),
  position: "absolute",
  marginTop: pm(32),
  flexDirection: "column",
  backgroundColor: "#E6E6E6",
},
xdw16d: {
  width: pm(270),
  position: "relative",
  overflow: "hidden",
  flexDirection: "row",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(15),
  borderTopRightRadius: pm(15),
  borderBottomLeftRadius: pm(15),
  borderBottomRightRadius: pm(15),
},
xdw16e: {
  width: pm(270),
  marginTop: pm(18),
  alignItems: "center",
  marginLeft: pm(25),
  marginRight: pm(25),
  flexDirection: "column",
  borderTopLeftRadius: pm(15),
  borderTopRightRadius: pm(15),
  borderBottomLeftRadius: pm(15),
  borderBottomRightRadius: pm(15),
},
xdw16f: {
  fontSize: pm(13),
  lineHeight: pm(18),
},
xdw16g: {
  left: pm(13),
  width: pm(294),
  bottom: pm(10),
  height: pm(38),
  position: "absolute",
  alignItems: "center",
  alignContent: "flex-start",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#FFDA67",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw16h: {
  color: "#333333",
  fontSize: pm(14),
  textAlign: "center",
  lineHeight: pm(19),
  paddingTop: pm(13),
  paddingBottom: pm(13),
},
xdw16i: {
  borderBottomWidth: pm(1),
  borderBottomColor: "#eeeeee",
  justifyContent: "center",
},
xdw16j: {
  flexDirection: "row",
},
xdw16k: {
  fontSize: pm(14),
  fontWeight: "600",
  lineHeight: pm(19),
},
xdw16l: {
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
xdw16m: {
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
xdw16n: {
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
xdw16o: {
  width: pm(320),
  paddingLeft: pm(17),
  paddingRight: pm(17),
  flexDirection: "column",
  paddingBottom: pm(29),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
},
xdw16p: {
  flex: 1,
  zIndex: 10,
  alignItems: "flex-end",
  flexDirection: "row",
  justifyContent: "center",
},
xdw16q: {
  flexGrow: 1,
  position: "relative",
  flexDirection: "column",
}
});
const slide = {"type":"173850","key":"c1738501","slug":null,"randomid":"id_4ac28ae47737107a6ae0765f","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":"9"}},"Text2":{"ctx_map":{"text":"小时"}},"Text3":{"ctx_map":{"text":"40"}},"Text4":{"ctx_map":{"text":"分钟"}},"Text5":{"ctx_map":{"text":"自动喂食将关闭，记得及时给爱宠做好猫饭哟~"}},"Text6":{"ctx_map":{"text":"开始"}},"Text7":{"ctx_map":{"text":"21:35"}},"Text8":{"ctx_map":{"text":"今天"}},"Text9":{"ctx_map":{"text":"今天"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,300,300","src":"u/dev064/2023/03/07/wbpyfvTKhUndZa8YbhHdDK/企业微信截图_20230307185223.png"}},"Image2":{"ctx_map":{"fop":"e,300,300","src":"u/dev064/2023/03/07/KvbFVCQ3hYD2bzqMVodfUa/企业微信截图_20230307185244.png"}},"Modal1":{"ctx_map":{"mask":true,"value":false,"baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Text10":{"ctx_map":{"text":"07:15"}},"Text11":{"ctx_map":{"text":"结束"}},"Text12":{"ctx_map":{"text":"完成"}},"Text13":{"ctx_map":{"text":"保存"}},"Text14":{"ctx_map":{"text":"取消"}},"Text15":{"ctx_map":{"text":"喂食时间"}},"Text16":{"ctx_map":{"text":"是否开启","numberOfLines":1}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"DwappCloud3":{"ctx_map":{"text2":"08:00","text3":"23:50","numberb1":220,"numberb2":20}},"DwappCloud4":{"ctx_map":{"bool1":true,"bool2":false,"text1":"暂停出粮","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud5":{"ctx_map":{"bool1":true,"color1":"#E8EDF2","color2":"#FFD355","select1":"scale(1)"}},"DwappCloud6":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"PickerView1":{"ctx_map":{"range":[[{"label":"上午","value":"am"},{"label":"下午","value":"pm"}]],"value":[0]}},"ShadowView1":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}},"NativeButton1":{"ctx_map":{"type":"button"}},"NativeButton2":{"ctx_map":{"type":"button"}}}};
slide.components.DwappCloud4.ctx_map.style1 = {
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
const pageGroupSlug = 'app_tongzhua-catfood_mission';

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
      <Xbenchc176286 /* DwappCloud4 */ isCuzBtn={ slide.components.DwappCloud4.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud4.ctx_map.bool2 } eventData={ slide.components.DwappCloud4.ctx_map.prop1 } eventData2={ slide.components.DwappCloud4.ctx_map.prop2 } title={ slide.components.DwappCloud4.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud4.ctx_map.text2 } confirmText={ slide.components.DwappCloud4.ctx_map.text3 } cancelText={ slide.components.DwappCloud4.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud4.ctx_map.color1 } confirmColor={ slide.components.DwappCloud4.ctx_map.color2 } cancelColor={ slide.components.DwappCloud4.ctx_map.color3 } backIcon={ slide.components.DwappCloud4.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud4.ctx_map.image2 } titleStyle={ slide.components.DwappCloud4.ctx_map.style1 } screenType={ slide.components.DwappCloud4.ctx_map.select1 } ></Xbenchc176286>
{!!(state.ready) /* ViewIf1 */ && (<><View /* View10 */   style={styles.xdw16q}><View /* View1 */   style={styles.xdw160}><Text /* Text1 */ style={styles.xdw15x} >{state.hourDiff}</Text>
<Text /* Text2 */ style={styles.xdw15y} >{slide.components.Text2.ctx_map.text}</Text>
<Text /* Text3 */ style={styles.xdw15x} >{state.minuteDiff}</Text>
<Text /* Text4 */ style={styles.xdw15z} >{slide.components.Text4.ctx_map.text}</Text></View>
<View /* View2 */   style={styles.xdw162}><Text /* Text5 */ style={styles.xdw161} >{slide.components.Text5.ctx_map.text}</Text></View>
<View /* View3 */   style={styles.xdw163}><Xbenchc174461 /* DwappCloud3 */ startTime={ state.start_time } endTime={ state.end_time } diameter={ 220 } strokeWidth={ 20 } ></Xbenchc174461></View>
<View /* View18 */   style={styles.xdw165}><Text /* Text16 */ style={styles.xdw164} numberOfLines={1}>{slide.components.Text16.ctx_map.text}</Text>
<Xbenchc191300 /* DwappCloud5 */ value={ state.device_member.data.feed_config.catFoodMode.isOpen } eventData={ "timerMode" } eventData2={ slide.components.DwappCloud5.ctx_map.prop2 } bgColor={ slide.components.DwappCloud5.ctx_map.color1 } activeBgColor={ slide.components.DwappCloud5.ctx_map.color2 } size={ slide.components.DwappCloud5.ctx_map.select1 }  onChange={getEvent('DwappCloud5:input::device_member.data.feed_config.catFoodMode.isOpen', {eventData: "timerMode"}, bagForKeyValue, bagForIndex)}></Xbenchc191300></View>
<Shadow containerStyle={styles.xdw16e} {...(slide.components.ShadowView1.ctx_map.rnappShadow)}><View /* View4 */   style={styles.xdw16d}><XbenchcView /* View5 */   viewStyle={styles.xdw16b} onClick={getEvent('View5:onClick:func3:', {eventData: "start_time"}, bagForKeyValue, bagForIndex)}><View /* View6 */   style={styles.xdw168}><XbenchcImage /* Image1 */ style={styles.xdw166} source={dwtools.qiniu(slide.components.Image1.ctx_map.src, slide.components.Image1.ctx_map.fop)}  />
<Text /* Text6 */ style={styles.xdw167} >{slide.components.Text6.ctx_map.text}</Text></View>
<Text /* Text7 */ style={styles.xdw169} >{state.start_time}</Text>
<Text /* Text8 */ style={styles.xdw16a} >{slide.components.Text8.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View7 */   viewStyle={styles.xdw16b} onClick={getEvent('View7:onClick:func3:', {eventData: "end_time"}, bagForKeyValue, bagForIndex)}><View /* View8 */   style={styles.xdw168}><XbenchcImage /* Image2 */ style={styles.xdw166} source={dwtools.qiniu(slide.components.Image2.ctx_map.src, slide.components.Image2.ctx_map.fop)}  />
<Text /* Text11 */ style={styles.xdw167} >{slide.components.Text11.ctx_map.text}</Text></View>
<Text /* Text10 */ style={styles.xdw169} >{state.end_time}</Text>
<Text /* Text9 */ style={styles.xdw16a} >{state.is_tomorrow ? '明天' : '今天'}</Text></XbenchcView>
<View /* View11 */   style={styles.xdw16c}></View></View></Shadow>
<XbenchcView /* View9 */   viewStyle={styles.xdw16g} onClick={getEvent('View9:onClick:func9:', {}, bagForKeyValue, bagForIndex)}><Text /* Text12 */ style={styles.xdw16f} >{slide.components.Text12.ctx_map.text}</Text></XbenchcView>
<XbenchcModal /* Modal1 */ rootStyle={styles.xdw16p} value={ state.timePop } mask={ true } maskClosable={ true } ><View /* View12 */   style={styles.xdw16o}><View /* View17 */   style={styles.xdw16i}><Text /* Text15 */ style={styles.xdw16h} >{state.current_mode === "start_time" ? '开始' : '结束'}</Text></View>
<View /* View16 */   style={styles.xdw16j}><XbenchcPickerView /* PickerView1 */ value={ state.timeBindValue } range={ state.timeRange }  onChange={getEvent('PickerView1:input:func10:', {}, bagForKeyValue, bagForIndex)}></XbenchcPickerView></View>
<View /* View13 */   style={styles.xdw16j}><View /* View15 */   style={styles.xdw16m}><XbenchcButton /* NativeButton2 */ viewStyle={styles.xdw16l} onClick={getEvent('NativeButton2:onClick:func6:', {}, bagForKeyValue, bagForIndex)}><Text /* Text14 */ style={styles.xdw16k} >{slide.components.Text14.ctx_map.text}</Text></XbenchcButton></View>
<View /* View14 */   style={styles.xdw16n}><XbenchcButton /* NativeButton1 */ viewStyle={styles.xdw16l} onClick={getEvent('NativeButton1:onClick:func5:', {}, bagForKeyValue, bagForIndex)}><Text /* Text13 */ style={styles.xdw16k} >{slide.components.Text13.ctx_map.text}</Text></XbenchcButton></View></View></View></XbenchcModal>
<Xbenchc275104 /* DwappCloud6 */ valueStyle={ slide.components.DwappCloud6.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud6.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud6.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud6:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104></View></>)}
    </ErrorBoundary>
  )
}
