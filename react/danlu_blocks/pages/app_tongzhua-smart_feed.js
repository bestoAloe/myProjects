
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import ViewForItem from '../../xbench/components/ViewForItem'
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
const action108 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action9 = state.device_member = (null)
  const action14 = state.platform = ("dwapp")
  const action36 = state.mode = ("preview")
  const action67 = state.items = ([/**/    {/**/        "time": "08:00",/**/        "week": [/**/            1,/**/            2,/**/            3,/**/            4,/**/            5,/**/            6,/**/            7,/**/        ],/**/        "isOpen": true,/**/        "weight": 32,/**/        "audioName": "系统默认",/**/        "is_select": false/**/    },/**/    {/**/        "time": "12:00",/**/        "week": [/**/            1,/**/            2,/**/            3,/**/            4,/**/            5,/**/            6,/**/            7,/**/        ],/**/        "isOpen": true,/**/        "weight": 32,/**/        "audioName": "系统默认",/**/        "is_select": false/**/    },/**/    {/**/        "time": "16:00",/**/        "week": [/**/            1,/**/            2,/**/            3,/**/            4,/**/            5,/**/            6,/**/            7/**/        ],/**/        "isOpen": true,/**/        "weight": 32,/**/        "audioName": "***",/**/        "is_select": false/**/    },/**/    {/**/        "time": "20:00",/**/        "week": [/**/            1,/**/            2,/**/            3,/**/            4,/**/            5,/**/            6,/**/            7/**/        ],/**/        "isOpen": true,/**/        "weight": 32,/**/        "audioName": "***",/**/        "is_select": false/**/    }/**/])
  return state
}

const action10 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action12 = store.commit('setState', {["state.platform"]: dw.platform})
  const action13 = await store.dispatch("func8", {})
  const action96 = await store.dispatch("func11", {})
}

const action105 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action106 = modalInstance = (event.data)
  const action107 = console.log('[getModalInstance#action107] 打印(modalInstance)', modalInstance)
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
        
  let device_member = (action3.device_member)
  const action39 = device_member
  const action40 = ((store, event) => {
device_member.data.feed_config.timerMode.data = device_member.data.feed_config.timerMode.data.map(x=>({
    ...x,
    is_select: false
}))
})(store, event)
  const action5 = store.commit('setState', {["state.device"]: action3.object, ["state.device_member"]: device_member})
}

const action62 = actions['func8'] = async function (store, event) {
  const state = store.state
  const action63 = await (async (store, event) => {
const key = "scient_feed/device_member"
let value
if(state.platform === 'rnapp'){
  const AsyncStorage = dw.getNativePackage('AsyncStorage')
  value = await AsyncStorage.getItem(key)
}
else{
  value = window.localStorage.getItem(key)
}
if(value){
  return JSON.parse(value)
}
else{
  return null
}
})(store, event)
  const action66 = console.log('[func8#action66] 打印(action63)的返回值', action63)
  
        if (!!(!action63) === (true)) {
          const action64message = ("当前设备数据加载错误")
          const action64title = ("提示")
          action64message && dw.alert(action64title, action64message)
          return {}
        }
        
  const action65 = store.commit('setState', {["state.device_member"]: action63})
}

const action19 = actions['func2'] = async function (store, event) {
  const state = store.state
  let index = (event.context.eventData)
  const action21 = index
  let value = (event.data)
  const action22 = value
  const action20 = store.commit('setState', {[`state.device_member.data.feed_config.timerMode.data[${index}].isOpen`]: value})
  /* action25: COMMIT */
  const action28 = await dw.showLoading({
    title: "",
    mask: false
  })
  const action24 = await dw.app.run("mqtt.send_feed_config", {"data": state.device_member.data.feed_config, "device_member_uuid": state.device_member.uuid})
  const action29 = await dw.hideLoading()
  
        if ((action24.status) === ("error")) {
          const action26message = (action24.message || "操作错误！")
          const action26title = ("提示")
          action26message && dw.alert(action26title, action26message)
          return {}
        }
        
  let message = ("喂食配置更新成功")
  const action110 = message
  const action111 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
}

const action30 = actions['func3'] = function (store, event) {
  const state = store.state
  let slug = (event.context.eventData)
  const action31 = slug
  const action32 = dw.app.goToPappUrl(slug, {}, {redirectTo: false})
}

const action37 = actions['func5'] = function (store, event) {
  const state = store.state
  const action38 = store.commit('setState', {["state.mode"]: state.mode === 'preview' ? 'edit' : 'preview'})
}

const action41 = actions['func6'] = function (store, event) {
  const state = store.state
  let index = (event.context.eventData)
  const action43 = index
  const action69 = console.log('[func6#action69] 打印(index)的返回值', index)
  const action44 = store.commit('setState', {[`state.items[${index}].is_select`]: !state.items[index].is_select})
}

const action45 = actions['func7'] = async function (store, event) {
  const state = store.state
  let select_items = (state.items.filter(x=>x.is_select))
  const action47 = select_items
  const action70 = console.log('[func7#action70] state.items.filter(x=>!x.is_select)', state.items.filter(x=>!x.is_select))
  
        if (!!(!select_items.length) === (true)) {
          const action48message = ("未选中任何条目")
          const action48title = ("提示")
          action48message && dw.alert(action48title, action48message)
          return {}
        }
        
  let msg = ("是否确认删除？")
  const action100 = msg
  const action101 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(msg)
}
else{
  return null
}
})(store, event)
  if (!action101) {
    return event
  }
  const action72 = JSON.parse(JSON.stringify(state.items))
  let items = (action72.filter(x=>!x.is_select))
  const action71 = items
  const action61 = store.commit('setState', {["state.mode"]: "preview", ["state.items"]: items})
}

const action75 = actions['func10'] = async function (store, event) {
  const state = store.state
  
        if (!!(!state.device.data.name) === (true)) {
          const action76message = ("未输入任何内容")
          const action76title = ("提示")
          action76message && dw.alert(action76title, action76message)
          return {}
        }
        
  let feed_config = ({/**/  ...state.device_member.data.feed_config,/**/  timerMode: {/**/    ...state.device_member.data.feed_config.timerMode,/**/    data: state.items/**/  }/**/})
  const action83 = feed_config
  const action77 = await dw.showLoading({
    title: "",
    mask: false
  })
  const action78 = await dw.app.run("mqtt.send_feed_config", {"data": feed_config, "device_member_uuid": state.device_member})
  
        if ((action78.status) === ("error")) {
          const action79message = (action78.message || "操作错误！")
          const action79title = ("提示")
          action79message && dw.alert(action79title, action79message)
          return {}
        }
        
  const action80 = await dw.hideLoading()
  let message = ("应用成功")
  const action113 = message
  const action114 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  const action82 = await dw.navigateBack({delta: 1})
}

const action84 = actions['func11'] = async function (store, event) {
  const state = store.state
  const action86 = await (async (store, event) => {
const key = "habit_feed/formData"
let value
if(state.platform === 'rnapp'){
  const AsyncStorage = dw.getNativePackage('AsyncStorage')
  value = await AsyncStorage.getItem(key)
}
else{
  value = window.localStorage.getItem(key)
}
if(value){
  return JSON.parse(value)
}
else{
  return null
}
})(store, event)
  const action87 = console.log('[func11#action87] 打印(action86)的返回值', action86)
  if (action86) {
    /* action93: 重量，一顿或一天，顿数 */
    const action94 = ((store, event) => {
function calculateFeedingSchedule(weight, mode, count) {
  const totalMinutesInDay = 24 * 60;
  const minutesInHour = 60;
  const startTime = 8 * minutesInHour;
  const endTime = 22 * minutesInHour;
  const totalMinutes = endTime - startTime;
  const interval = Math.floor(totalMinutes / count);

  let feedingTimes = [];
  let currentMinutes = startTime;

  for (let i = 0; i < count; i++) {
    const currentHour = Math.floor(currentMinutes / minutesInHour);
    const currentMinute = currentMinutes % minutesInHour;

    if (currentHour >= 22) {
      break;
    }

    const remainingMeals = count - i;
    const remainingMinutes = totalMinutes - (currentMinutes - startTime);
    const maxInterval = Math.min(Math.floor(remainingMinutes / remainingMeals), totalMinutesInDay - currentMinutes);

    feedingTimes.push({
      time: `${currentHour < 10 ? '0' + currentHour : currentHour}:${currentMinute < 10 ? '0' + currentMinute : currentMinute}`,
      weight: mode === 'day' ? weight / count : weight,
    });

    const nextInterval = Math.floor(Math.random() * (maxInterval - interval + 1) + interval);
    currentMinutes += nextInterval;
  }

  return feedingTimes;
}
return calculateFeedingSchedule(action86.weight, action86.mode, action86.count)
})(store, event)
    const action97 = console.log('[func11#action97] 打印(action94)的返回值', action94)
    const action95 = store.commit('setState', {["state.items"]: action94.map(x=>({/**/  ...x,/**/  week: [/**/    1,2,3,4,5,6,7/**/  ],/**/  isOpen: true,/**/  is_select: false,/**/  audioName: '系统默认',/**/}))})
  }
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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var actions = {};

var modalInstance = null;
var action108 = modalInstance;
var action16 = actions['computed1'] = function (event, state) {
  var action17 = function (event) {
    function getWeekdays(arr) {
      var weekdays = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
      var result = '';
      var startDay = '';
      var endDay = '';

      // Check if the array is sorted and consecutive
      var isConsecutive = arr.every(function (val, i, array) {
        return i === 0 || val === array[i - 1] + 1;
      });

      if (isConsecutive) {
        startDay = weekdays[arr[0] - 1];
        endDay = weekdays[arr[arr.length - 1] - 1];
        result = startDay + '\u81F3' + endDay;
      } else {
        for (var i = 0; i < arr.length; i++) {
          var weekday = weekdays[arr[i] - 1];
          switch (i) {
            case 0:
              result += weekday;
              break;
            case arr.length - 1:
              result += ' ' + weekday;
              break;
            default:
              result += ' ' + weekday;
              break;
          }
        }
      }

      return result;
    }
    var week = [].concat(_toConsumableArray(event.item.week));
    return getWeekdays(week);
  }(event);
  return action17;
};
// COMPUTED_ACTION_META:computed1 {"deps":[]}

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdw102: {
  fontSize: pm(13),
  fontWeight: "500",
  lineHeight: pm(18),
},
xdw103: {
  right: 0,
  flexDirection: "column",
},
xdw104: {
  color: "#FF6D6D",
  fontSize: pm(13),
  fontWeight: "500",
  lineHeight: pm(18),
},
xdw105: {
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  marginBottom: pm(10),
},
xdw106: {
  color: "#181818",
  fontSize: pm(20),
  fontWeight: "500",
  lineHeight: pm(24),
  marginRight: pm(55),
  marginBottom: pm(7),
},
xdw107: {
  color: "#181818",
  fontSize: pm(20),
  fontWeight: "400",
  lineHeight: pm(24),
  marginRight: pm(3),
},
xdw108: {
  color: "#181818",
  fontSize: pm(10),
  fontWeight: "400",
  lineHeight: pm(15),
},
xdw109: {
  alignItems: "flex-end",
  flexDirection: "row",
},
xdw10a: {
  alignItems: "flex-start",
  marginRight: pm(51),
  flexDirection: "row",
},
xdw10b: {
  color: "#181818",
  fontSize: pm(10),
  lineHeight: pm(15),
  marginRight: pm(10),
},
xdw10c: {
  flexGrow: 1,
  alignItems: "flex-start",
  flexDirection: "column",
},
xdw10d: {
  width: pm(17),
  height: pm(17),
},
xdw10e: {
  alignItems: "center",
  marginLeft: "auto",
  marginRight: pm(0),
  flexDirection: "row",
},
xdw10f: {
  alignItems: "center",
  paddingTop: pm(10),
  paddingLeft: pm(10),
  marginBottom: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(7),
  borderTopRightRadius: pm(7),
  borderBottomLeftRadius: pm(7),
  borderBottomRightRadius: pm(7),
},
xdw10g: {
  width: pm(300),
  flexDirection: "column",
},
xdw10h: {
  height: pm(85),
  flexDirection: "column",
},
xdw10i: {
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw10j: {
  width: pm(300),
  bottom: pm(29),
  height: pm(38),
  position: "absolute",
  marginTop: pm(16),
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: "#FFD355",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw10k: {
  width: pm(320),
  flexGrow: 1,
  position: "relative",
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
  backgroundColor: "#F8F8F8",
}
});
const slide = {"type":"173288","key":"c1732881","slug":null,"randomid":"id_e555edd27c887dc1f185c745","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View3":{"ctx_map":{}},"Image7":{"ctx_map":{"fop":"e,50,50","src":"u/dev064/2023/03/03/m4XEZbrGTjoRF4vWXTmUh2/SketchPng8141b19c4766ab5e73849b84c0a48779747796c199c154adbfcea8c703d6cee7.png"}},"Image8":{"ctx_map":{"fop":"e,50,50","src":"u/dev064/2023/03/03/UGK8rNWrXoHZw6p7Uxs6zB/SketchPng74b9a31b4d49ae3bbde44f8c192072f3a848c1549574511dc2220abd9ef72aef.png"}},"Text21":{"ctx_map":{"text":""}},"Text22":{"ctx_map":{"text":""}},"Text23":{"ctx_map":{"text":"喂食明细"}},"Text24":{"ctx_map":{"text":""}},"Text25":{"ctx_map":{"text":"克"}},"Text26":{"ctx_map":{"text":"编辑"}},"Text27":{"ctx_map":{"text":"删除"}},"Text28":{"ctx_map":{"text":"应用喂食方案"}},"View10":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View20":{"ctx_map":{}},"View22":{"ctx_map":{}},"View23":{"ctx_map":{}},"View24":{"ctx_map":{}},"View26":{"ctx_map":{}},"View27":{"ctx_map":{}},"ViewIf5":{"ctx_map":{"value":true}},"ViewIf6":{"ctx_map":{"value":true}},"ViewIf7":{"ctx_map":{"value":true}},"ViewIf9":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewIf10":{"ctx_map":{"value":true}},"ViewIf11":{"ctx_map":{"value":true}},"DwappCloud2":{"ctx_map":{"bool1":true,"bool2":false,"text1":"智能喂食方案","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud3":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}}}};
slide.components.DwappCloud2.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  flexDirection: "column",
};
slide.components.DwappCloud3.ctx_map.valueStyle = {
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
slide.components.DwappCloud3.ctx_map.containerStyle = {
  marginBottom: pm(18),
  flexDirection: "column",
};
slide.components.DwappCloud3.ctx_map.valueInputStyle = {
  color: "#333333",
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-smart_feed';

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
      <Xbenchc176286 /* DwappCloud2 */ isCuzBtn={ slide.components.DwappCloud2.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud2.ctx_map.bool2 } eventData={ slide.components.DwappCloud2.ctx_map.prop1 } eventData2={ slide.components.DwappCloud2.ctx_map.prop2 } title={ slide.components.DwappCloud2.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud2.ctx_map.text2 } confirmText={ slide.components.DwappCloud2.ctx_map.text3 } cancelText={ slide.components.DwappCloud2.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud2.ctx_map.color1 } confirmColor={ slide.components.DwappCloud2.ctx_map.color2 } cancelColor={ slide.components.DwappCloud2.ctx_map.color3 } backIcon={ slide.components.DwappCloud2.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud2.ctx_map.image2 } titleStyle={ slide.components.DwappCloud2.ctx_map.style1 } screenType={ slide.components.DwappCloud2.ctx_map.select1 } >{!!(state.mode === 'preview') /* ViewIf6 */ && (<><XbenchcView /* View22 */   viewStyle={styles.xdw103} onClick={getEvent('View22:onClick:func5:', {}, bagForKeyValue, bagForIndex)}><Text /* Text26 */ style={styles.xdw102} >{slide.components.Text26.ctx_map.text}</Text></XbenchcView></>)}
{!!(state.mode === 'edit') /* ViewIf7 */ && (<><XbenchcView /* View23 */   viewStyle={styles.xdw103} onClick={getEvent('View23:onClick:func7:', {}, bagForKeyValue, bagForIndex)}><Text /* Text27 */ style={styles.xdw104} >{slide.components.Text27.ctx_map.text}</Text></XbenchcView></>)}</Xbenchc176286>
<View /* View3 */   style={styles.xdw10k}><Text /* Text23 */ style={styles.xdw105} >{slide.components.Text23.ctx_map.text}</Text>
{!!(state.device_member) /* ViewIf5 */ && (<><View /* View15 */   style={styles.xdw10g}>{(state.items).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View10 */   style={styles.xdw10f}><View /* View12 */   style={styles.xdw10c}><View /* View13 */   style={styles.xdw10a}><Text /* Text21 */ style={styles.xdw106} >{bagForItem.time}</Text>
<View /* View20 */   style={styles.xdw109}><Text /* Text22 */ style={styles.xdw107} >{bagForItem.weight}</Text>
<Text /* Text25 */ style={styles.xdw108} >{slide.components.Text25.ctx_map.text}</Text></View></View>
<View /* View14 */   style={styles.xdw109}><Text /* Text24 */ style={styles.xdw10b} >{computeds.computed1({item: bagForItem}, state)}</Text></View></View>
{!!(state.mode === 'edit') /* ViewIf9 */ && (<><XbenchcView /* View24 */   viewStyle={styles.xdw10e} onClick={getEvent('View24:onClick:func6:', {eventData: bagForIndex}, bagForKeyValue, bagForIndex)}>{!!(bagForItem.is_select) /* ViewIf10 */ && (<><XbenchcImage /* Image7 */ style={styles.xdw10d} source={dwtools.qiniu(slide.components.Image7.ctx_map.src, slide.components.Image7.ctx_map.fop)}  /></>)}
{!!(!bagForItem.is_select) /* ViewIf11 */ && (<><XbenchcImage /* Image8 */ style={styles.xdw10d} source={dwtools.qiniu(slide.components.Image8.ctx_map.src, slide.components.Image8.ctx_map.fop)}  /></>)}</XbenchcView></>)}</View></ViewForItem> })}</View></>)}
<View /* View26 */   style={styles.xdw10h}></View>
<XbenchcView /* View27 */   viewStyle={styles.xdw10j} onClick={getEvent('View27:onClick:func10:', {}, bagForKeyValue, bagForIndex)}><Text /* Text28 */ style={styles.xdw10i} >{slide.components.Text28.ctx_map.text}</Text></XbenchcView>
<Xbenchc275104 /* DwappCloud3 */ valueStyle={ slide.components.DwappCloud3.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud3.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud3.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud3:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104></View>
    </ErrorBoundary>
  )
}
