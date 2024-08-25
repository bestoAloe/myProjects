
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
import XbenchcPickerView from '../../xbench/xbenchc/components/XbenchcPickerView'
import XbenchcModal from '../../xbench/xbenchc/components/XbenchcModal'
import ViewForItem from '../../xbench/components/ViewForItem'
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

let action107lock = false
let modalInstance = (null)
const action131 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action4 = state.device_member = (null)
  const action26 = state.platform = ("dwapp")
  const action27 = state.formData = ({/**/  time: "",/**/  weight: 0,/**/  week: [1,2,3,4,5,6,7],/**/  audioName: "系统默认",/**/})
  /* action50: 时间 */
  const action35 = state.timePop = (false)
  const action41 = state.timeRange = ([])
  const action44 = state.timeBindValue = ([])
  /* action51: 克数 */
  const action53 = state.weightPop = (false)
  const action54 = state.weightRange = ([])
  const action55 = state.weightBindValue = ([])
  /* action71: 重复 */
  const action72 = state.weekPop = (false)
  const action73 = state.weekRange = ([/**/  "星期一",/**/  "星期二",/**/  "星期三",/**/  "星期四",/**/  "星期五",/**/  "星期六",/**/  "星期日",/**/])
  const action113 = state.ready = (false)
  return state
}

const action2 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action25 = store.commit('setState', {["state.platform"]: dw.platform})
  const action42 = await Promise.all([
    (async () => {
      const action5 = await store.dispatch("func1", {})
      return action5
    })(),
    (async () => {
      const action43 = await store.dispatch("func4", {})
      return action43
    })(),
    (async () => {
      const action69 = await store.dispatch("func9", {})
      return action69
    })(),
  ])

  const action114 = store.commit('setState', {["state.ready"]: true})
}

const action3 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action6 = await (async (store, event) => {
const key = "timer_index/device_member"
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
  
        if (!!(!action6) === (true)) {
          const action10message = ("当前设备数据加载错误")
          const action10title = ("提示")
          action10message && dw.alert(action10title, action10message)
          return {}
        }
        
  const action11 = store.commit('setState', {["state.device_member"]: action6})
}

const action121 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action122 = modalInstance = (event.data)
  const action123 = console.log('[getModalInstance#action123] 打印(modalInstance)', modalInstance)
}

/* action67: 时间 */
const action36 = actions['func3'] = function (store, event) {
  const state = store.state
  const action37 = store.commit('setState', {["state.timePop"]: true})
}

const action46 = actions['func6'] = function (store, event) {
  const state = store.state
  const action47 = store.commit('setState', {["state.timePop"]: false})
}

const action38 = actions['func4'] = function (store, event) {
  const state = store.state
  const action39 = ((store, event) => {
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
  const action40 = store.commit('setState', {["state.timeRange"]: action39})
}

const action118 = actions['func16'] = function (store, event) {
  const state = store.state
  const action119 = store.commit('setState', {["state.timeBindValue"]: event.data.detail.value})
}

const action45 = actions['func5'] = function (store, event) {
  const state = store.state
  const action48 = store.commit('setState', {["state.formData.time"]: String(state.timeBindValue[0]?state.timeBindValue[0]:0).padStart(2, "0") + ":" + String(state.timeBindValue[1]?state.timeBindValue[1] : 0).padStart(2, "0"), ["state.timePop"]: false})
}

/* action68: 克数 */
const action57 = actions['func7'] = function (store, event) {
  const state = store.state
  const action58 = store.commit('setState', {["state.weightPop"]: true})
}

const action59 = actions['func8'] = function (store, event) {
  const state = store.state
  const action60 = store.commit('setState', {["state.weightPop"]: false})
}

const action61 = actions['func9'] = function (store, event) {
  const state = store.state
  const action62 = ((store, event) => {
function generateOptions() {
  const options = [
    [],
  ];

  // 生成选项
  for (let i = 1; i <= 100; i++) {
    options[0].push({ label: i.toString(), value: i });
  }

  return options;
}

const options = generateOptions();

return options
})(store, event)
  const action63 = store.commit('setState', {["state.weightRange"]: action62})
}

const action64 = actions['func10'] = function (store, event) {
  const state = store.state
  const action65 = store.commit('setState', {["state.formData.weight"]: state.weightBindValue.detail.value[0] + 1, ["state.weightPop"]: false})
}

const action74 = actions['func11'] = function (store, event) {
  const state = store.state
  let day = (event.context.eventData + 1)
  const action75 = day
  if (state.formData.week.includes(day)) {
    const action80 = store.commit('setState', {["state.formData.week"]: state.formData.week.filter(x=>x!==day)})
  } else {
    let week = ([...state.formData.week, day])
    const action82 = week
    const action81 = store.commit('setState', {["state.formData.week"]: week.sort()})
  }
}

const action83 = actions['func12'] = function (store, event) {
  const state = store.state
  const action85 = store.commit('setState', {["state.weekPop"]: true})
}

const action84 = actions['func13'] = function (store, event) {
  const state = store.state
  const action86 = store.commit('setState', {["state.weekPop"]: false})
}

const action87 = actions['func14'] = async function (store, event) {
  const state = store.state
  
        if (!!(!(!!state.formData.time && state.formData.weight > 0 && state.formData.week.length > 0)) === (true)) {
          const action111message = ("")
          const action111title = ("提示")
          action111message && dw.alert(action111title, action111message)
          return {}
        }
        
  const action107 = await (async () => {
  
      if (action107lock) return true
      action107lock = true
      try {
    const action112 = JSON.parse(JSON.stringify(state.device_member.data.feed_config.timerMode))
    let timerMode = (action112)
    const action88 = timerMode
    /* action91: 判断是否已经存在对应时间的条目 */
    let check_item = (timerMode.data.find(x=>x.time === state.formData.time))
    const action89 = check_item
    if (check_item) {
      let msg = ("该已存在，是否替换原计划？")
      const action126 = msg
      const action127 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(msg)
}
else{
  return null
}
})(store, event)
      if (!action127) {
        return event
      }
      const action98 = ((store, event) => {
timerMode.data = timerMode.data.filter(x=>x.time !== state.formData.time)
})(store, event)
    }
    const action99 = ((store, event) => {
// 插入当前时间
timerMode.data.push({
  ...state.formData,
  isOpen: true,
})

// 根据时间排序
timerMode.data.sort((i,j)=>i.time < j.time ? -1 : 1)
})(store, event)
    const action102 = store.commit('setState', {["state.device_member.data.feed_config.timerMode"]: timerMode})
    const action116 = await dw.app.run("mqtt.send_feed_config", {"data": { /**/  ...state.device_member.data.feed_config,/**/  timerMode/**/}, "device_member_uuid": state.device_member.uuid})
    
        if ((action116.status) === ("error")) {
          const action117message = (action116.message || "操作错误！")
          const action117title = ("提示")
          action117message && dw.alert(action117title, action117message)
          return {}
        }
        
    const action110 = await store.dispatch("func15", {})
    const action106 = await dw.navigateBack({delta: 1})
  
      } catch (e) {
        throw e
      } finally {
        action107lock = false
      }
      
  })()
}

const action108 = actions['func15'] = async function (store, event) {
  const state = store.state
  const action109 = await (async (store, event) => {
const key_device_member = "timer_index/device_member"
const jsonValue2 = JSON.stringify(state.device_member)
if(state.platform === 'rnapp'){
  const AsyncStorage = dw.getNativePackage('AsyncStorage')
  await AsyncStorage.setItem(key_device_member, jsonValue2)
}
else{
  window.localStorage.setItem(key_device_member, jsonValue2)
}
})(store, event)
}

const action120 = actions['func17'] = function (store, event) {
  const state = store.state
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
var action131 = modalInstance;
var action28 = actions['computed1'] = function (event, state) {
  var action29 = function (event) {
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
    var week = [].concat(_toConsumableArray(state.formData.week));
    return getWeekdays(week);
  }(event);
  return action29;
};
// COMPUTED_ACTION_META:computed1 {"deps":["formData"]}

var action31 = actions['computed2'] = function (event, state) {
  var res = !!state.formData.time && state.formData.weight > 0 && state.formData.week.length > 0;
  var action33 = res;
  var action34 = console.log('[computed2#action34] 打印(res)的返回值', res);
  //MACRO:DEBUG window.vconsole.log('log:workflow', {func: 'computed2', action: 'action34', label: `打印(res)的返回值`, valueVar: "res", value: [res]})
  return res;
};
// COMPUTED_ACTION_META:computed2 {"deps":["formData"]}

/* action67: 时间 */
/* action68: 克数 */
module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdwvj: {
  flexGrow: 1,
  fontSize: pm(12),
  flexShrink: 1,
  fontWeight: "500",
  lineHeight: pm(17),
},
xdwvk: {
  color: "#999999",
  flexGrow: 0,
  fontSize: pm(12),
  flexShrink: 0,
  fontWeight: "500",
  lineHeight: pm(17),
  marginRight: pm(7),
},
xdwvl: {
  width: pm(12),
  height: pm(12),
},
xdwvn: {
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
xdwvo: {
  width: pm(320),
  flexGrow: 1,
  flexDirection: "column",
  backgroundColor: "#FFFFFF",
},
xdwvp: {
  fontSize: pm(14),
  fontWeight: "600",
  lineHeight: pm(19),
},
xdwvq: {
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
xdwvr: {
  width: pm(300),
  height: pm(38),
  marginTop: pm(34),
  alignItems: "center",
  marginLeft: "auto",
  marginRight: "auto",
  flexDirection: "column",
  justifyContent: "center",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdwvs: {
  color: "#333333",
  fontSize: pm(14),
  textAlign: "center",
  lineHeight: pm(19),
  paddingTop: pm(13),
  paddingBottom: pm(13),
},
xdwvt: {
  borderBottomWidth: pm(1),
  borderBottomColor: "#eeeeee",
  justifyContent: "center",
},
xdwvu: {
  flexDirection: "row",
},
xdwvv: {
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
xdwvw: {
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
xdwvx: {
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
xdwvy: {
  width: pm(320),
  paddingLeft: pm(17),
  paddingRight: pm(17),
  flexDirection: "column",
  paddingBottom: pm(29),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
},
xdwvz: {
  flex: 1,
  zIndex: 10,
  alignItems: "flex-end",
  flexDirection: "row",
  justifyContent: "center",
},
xdww0: {
  position: "relative",
  flexDirection: "row",
},
xdww1: {
  fontSize: pm(12),
  lineHeight: pm(38),
},
xdww2: {
  width: pm(15),
  height: pm(15),
  marginLeft: "auto",
},
xdww3: {
  width: pm(14),
  height: pm(14),
  marginLeft: "auto",
  borderBottomWidth: pm(0),
  borderBottomColor: "#000",
  flexDirection: "column",
  backgroundColor: "#E5E5E5",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdww4: {
  alignItems: "center",
  paddingLeft: pm(17),
  paddingRight: pm(17),
  flexDirection: "row",
},
xdww5: {
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
},
xdww6: {
  width: pm(320),
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
},
xdww7: {
  flex: 1,
  width: "100%",
  overflow: "scroll",
  borderTopWidth: pm(1),
  borderTopColor: "#eeeeee",
  paddingTop: pm(10),
  backgroundColor: "#f8f8f8",
}
});
const slide = {"type":"172446","key":"c1724461","slug":null,"randomid":"id_a9fc12237f38476cca572005","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text5":{"ctx_map":{"text":"完成"}},"Text6":{"ctx_map":{"text":"剩余0天"}},"Text7":{"ctx_map":{"text":"喂食时间"}},"Text8":{"ctx_map":{"text":"剩余0天"}},"Text9":{"ctx_map":{"text":"克数"}},"View1":{"ctx_map":{}},"View5":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image6":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/03/03/knMwvdQvGjFDCX5mQneu8R/SketchPng8141b19c4766ab5e73849b84c0a48779747796c199c154adbfcea8c703d6cee7.png"}},"Image7":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png","buildToLocal":true}},"Modal1":{"ctx_map":{"mask":true,"value":false,"position":"center","baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Modal2":{"ctx_map":{"mask":true,"value":false,"position":"center","baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Modal3":{"ctx_map":{"mask":true,"value":false,"position":"center","baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Text10":{"ctx_map":{"text":"剩余0天"}},"Text11":{"ctx_map":{"text":"重复"}},"Text12":{"ctx_map":{"text":"剩余0天"}},"Text13":{"ctx_map":{"text":"声音设置"}},"Text14":{"ctx_map":{"text":"保存"}},"Text15":{"ctx_map":{"text":"取消"}},"Text16":{"ctx_map":{"text":"喂食时间"}},"Text17":{"ctx_map":{"text":"保存"}},"Text18":{"ctx_map":{"text":"取消"}},"Text19":{"ctx_map":{"text":"克数"}},"Text21":{"ctx_map":{"text":"这是一个文本组件"}},"Text22":{"ctx_map":{"text":"重复"}},"Text23":{"ctx_map":{"text":"保存"}},"Text24":{"ctx_map":{"text":"取消"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"View20":{"ctx_map":{}},"View21":{"ctx_map":{}},"View22":{"ctx_map":{}},"View24":{"ctx_map":{}},"View25":{"ctx_map":{}},"View26":{"ctx_map":{}},"View27":{"ctx_map":{}},"View28":{"ctx_map":{}},"View29":{"ctx_map":{}},"View30":{"ctx_map":{}},"Image11":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png","buildToLocal":true}},"Image12":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png","buildToLocal":true}},"Image13":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png","buildToLocal":true}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"DwappCloud1":{"ctx_map":{"bool1":true,"bool2":true,"text1":"添加喂食计划","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud2":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"PickerView1":{"ctx_map":{"range":[[{"label":"上午","value":"am"},{"label":"下午","value":"pm"}]],"value":[0]}},"PickerView2":{"ctx_map":{"range":[[{"label":"上午","value":"am"},{"label":"下午","value":"pm"}]],"value":[0],"nextLabel":"g"}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[]}},"NativeButton1":{"ctx_map":{"type":"button"}},"NativeButton2":{"ctx_map":{"type":"button"}},"NativeButton3":{"ctx_map":{"type":"button"}},"NativeButton4":{"ctx_map":{"type":"button"}},"NativeButton5":{"ctx_map":{"type":"button"}},"NativeButton6":{"ctx_map":{"type":"button"}},"NativeButton7":{"ctx_map":{"type":"button"}}}};
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
const pageGroupSlug = 'app_tongzhua-timer_add';

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
<XbenchcScrollView /* ScrollView1 */ style={styles.xdww7} scrollX={ false } scrollY={ true } >{!!(state.device_member) /* ViewIf1 */ && (<><View /* View1 */   style={styles.xdwvo}><XbenchcView /* View7 */   viewStyle={styles.xdwvn} onClick={getEvent('View7:onClick:func3:', {eventData: "device_name"}, bagForKeyValue, bagForIndex)}><Text /* Text7 */ style={styles.xdwvj} >{slide.components.Text7.ctx_map.text}</Text>
<Text /* Text6 */ style={styles.xdwvk} >{state.formData.time || '选择时间'}</Text>
<XbenchcImage /* Image7 */ style={styles.xdwvl} source={dwtools.getLocalResource('xdwvm_lthar0v4')}  /></XbenchcView>
<XbenchcView /* View8 */   viewStyle={styles.xdwvn} onClick={getEvent('View8:onClick:func7:', {eventData: "device_name"}, bagForKeyValue, bagForIndex)}><Text /* Text9 */ style={styles.xdwvj} >{slide.components.Text9.ctx_map.text}</Text>
<Text /* Text8 */ style={styles.xdwvk} >{state.formData.weight > 0 ? (state.formData.weight + "克") : '选择克数'}</Text>
<XbenchcImage /* Image11 */ style={styles.xdwvl} source={dwtools.getLocalResource('xdwvm_lthar0v4')}  /></XbenchcView>
<XbenchcView /* View9 */   viewStyle={styles.xdwvn} onClick={getEvent('View9:onClick:func12:', {eventData: "device_name"}, bagForKeyValue, bagForIndex)}><Text /* Text11 */ style={styles.xdwvj} >{slide.components.Text11.ctx_map.text}</Text>
<Text /* Text10 */ style={styles.xdwvk} >{computeds.computed1({}, state)}</Text>
<XbenchcImage /* Image12 */ style={styles.xdwvl} source={dwtools.getLocalResource('xdwvm_lthar0v4')}  /></XbenchcView>
<View /* View10 */   style={styles.xdwvn}><Text /* Text13 */ style={styles.xdwvj} >{slide.components.Text13.ctx_map.text}</Text>
<Text /* Text12 */ style={styles.xdwvk} >{state.formData.audioName}</Text>
<XbenchcImage /* Image13 */ style={styles.xdwvl} source={dwtools.getLocalResource('xdwvm_lthar0v4')}  /></View></View>
<XbenchcView /* View5 */   viewStyle={[styles.xdwvr, ({
  backgroundColor: computeds.computed2({}, state) ? '#FFD355' : '#FFF1C6'
})]} onClick={getEvent('View5:onClick:func14:', {}, bagForKeyValue, bagForIndex)}><XbenchcButton /* NativeButton1 */ viewStyle={styles.xdwvq}><Text /* Text5 */ style={styles.xdwvp} >{slide.components.Text5.ctx_map.text}</Text></XbenchcButton></XbenchcView></>)}
{!!(state.ready) /* ViewIf4 */ && (<><XbenchcModal /* Modal1 */ rootStyle={styles.xdwvz} value={ state.timePop } mask={ true } maskClosable={ true }  onValueChange={getEvent('Modal1:onValueChange:func6:', {}, bagForKeyValue, bagForIndex)}><View /* View11 */   style={styles.xdwvy}><View /* View16 */   style={styles.xdwvt}><Text /* Text16 */ style={styles.xdwvs} >{slide.components.Text16.ctx_map.text}</Text></View>
<View /* View15 */   style={styles.xdwvu}><XbenchcPickerView /* PickerView1 */ value={ state.timeBindValue } range={ state.timeRange }  onChange={getEvent('PickerView1:input:func16:', {}, bagForKeyValue, bagForIndex)}></XbenchcPickerView></View>
<View /* View12 */   style={styles.xdwvu}><View /* View14 */   style={styles.xdwvw}><XbenchcButton /* NativeButton3 */ viewStyle={styles.xdwvv} onClick={getEvent('NativeButton3:onClick:func6:', {}, bagForKeyValue, bagForIndex)}><Text /* Text15 */ style={styles.xdwvp} >{slide.components.Text15.ctx_map.text}</Text></XbenchcButton></View>
<View /* View13 */   style={styles.xdwvx}><XbenchcButton /* NativeButton2 */ viewStyle={styles.xdwvv} onClick={getEvent('NativeButton2:onClick:func5:', {}, bagForKeyValue, bagForIndex)}><Text /* Text14 */ style={styles.xdwvp} >{slide.components.Text14.ctx_map.text}</Text></XbenchcButton></View></View></View></XbenchcModal>
<XbenchcModal /* Modal2 */ rootStyle={styles.xdwvz} value={ state.weightPop } mask={ true } maskClosable={ true }  onValueChange={getEvent('Modal2:onValueChange:func8:', {}, bagForKeyValue, bagForIndex)}><View /* View17 */   style={styles.xdwvy}><View /* View22 */   style={styles.xdwvt}><Text /* Text19 */ style={styles.xdwvs} >{slide.components.Text19.ctx_map.text}</Text></View>
<View /* View21 */   style={styles.xdww0}><XbenchcPickerView /* PickerView2 */ value={ state.weightBindValue } range={ state.weightRange } nextLabel={ slide.components.PickerView2.ctx_map.nextLabel }  onChange={getEvent('PickerView2:input::weightBindValue', {}, bagForKeyValue, bagForIndex)}></XbenchcPickerView></View>
<View /* View18 */   style={styles.xdwvu}><View /* View20 */   style={styles.xdwvw}><XbenchcButton /* NativeButton5 */ viewStyle={styles.xdwvv} onClick={getEvent('NativeButton5:onClick:func8:', {}, bagForKeyValue, bagForIndex)}><Text /* Text18 */ style={styles.xdwvp} >{slide.components.Text18.ctx_map.text}</Text></XbenchcButton></View>
<XbenchcView /* View19 */   viewStyle={styles.xdwvx} onClick={getEvent('View19:onClick:func10:', {}, bagForKeyValue, bagForIndex)}><XbenchcButton /* NativeButton4 */ viewStyle={styles.xdwvv} onClick={getEvent('NativeButton4:onClick:func10:', {}, bagForKeyValue, bagForIndex)}><Text /* Text17 */ style={styles.xdwvp} >{slide.components.Text17.ctx_map.text}</Text></XbenchcButton></XbenchcView></View></View></XbenchcModal>
<XbenchcModal /* Modal3 */ rootStyle={styles.xdwvz} value={ state.weekPop } mask={ true } maskClosable={ true }  onValueChange={getEvent('Modal3:onValueChange:func13:', {}, bagForKeyValue, bagForIndex)}><View /* View24 */   style={styles.xdww6}><View /* View27 */   style={styles.xdwvt}><Text /* Text22 */ style={styles.xdwvs} >{slide.components.Text22.ctx_map.text}</Text></View>
{(state.weekRange).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><XbenchcView /* View25 */   viewStyle={[styles.xdww4, ({
  backgroundColor: state.formData.week.includes(bagForIndex + 1) ? "#F6F6F6" : "#FFFFFF"
})]} onClick={getEvent('View25:onClick:func11:', {eventData: bagForIndex}, bagForKeyValue, bagForIndex)}><Text /* Text21 */ style={styles.xdww1} >{bagForItem}</Text>
{!!(state.formData.week.includes(bagForIndex + 1)) /* ViewIf2 */ && (<><XbenchcImage /* Image6 */ style={styles.xdww2} source={dwtools.qiniu(slide.components.Image6.ctx_map.src, slide.components.Image6.ctx_map.fop)}  /></>)}
{!!(!state.formData.week.includes(bagForIndex + 1)) /* ViewIf3 */ && (<><View /* View26 */   style={styles.xdww3}></View></>)}</XbenchcView></ViewForItem> })}
<View /* View28 */   style={styles.xdww5}><XbenchcView /* View30 */   viewStyle={styles.xdwvw} onClick={getEvent('View30:onClick:func13:', {}, bagForKeyValue, bagForIndex)}><XbenchcButton /* NativeButton7 */ viewStyle={styles.xdwvv}><Text /* Text24 */ style={styles.xdwvp} >{slide.components.Text24.ctx_map.text}</Text></XbenchcButton></XbenchcView>
<View /* View29 */   style={styles.xdwvx}><XbenchcButton /* NativeButton6 */ viewStyle={styles.xdwvv} onClick={getEvent('NativeButton6:onClick:func13:', {}, bagForKeyValue, bagForIndex)}><Text /* Text23 */ style={styles.xdwvp} >{slide.components.Text23.ctx_map.text}</Text></XbenchcButton></View></View></View></XbenchcModal>
<Xbenchc275104 /* DwappCloud2 */ valueStyle={ slide.components.DwappCloud2.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud2.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud2.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud2:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104></>)}</XbenchcScrollView>
    </ErrorBoundary>
  )
}
