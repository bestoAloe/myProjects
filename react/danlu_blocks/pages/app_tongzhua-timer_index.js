
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcEcharts from '../../xbench/xbenchc/components/XbenchcEcharts'
import { Shadow } from 'react-native-shadow-2'
import ViewForItem from '../../xbench/components/ViewForItem'
import Xbenchc168615 from '../components/Xbenchc168615'
import { Image } from 'expo-image'
import XbenchcScrollView from '../../xbench/xbenchc/components/XbenchcScrollView'
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
const action101 = modalInstance
let optionTempKeep = ({/**/  tooltip: {/**/    trigger: "item",/**/    position: 'top',/**/    axisPointer: {/**/      type: "none",/**/    },/**/    triggerOn: 'mousemove|click',/**/    textStyle: {/**/      color: '#FFD355'/**/    },/**/    borderWidth: 0,/**/    formatter: '{c}克',/**/  },/**/  xAxis: {/**/    type: 'category',/**/    boundaryGap: false,/**/    data: ['一', '二', '三', '四', '五', '六', '七'],/**/    axisLine: {/**/      lineStyle: {/**/        color: '#EEEEEE'/**/      }/**/    },/**/    axisLabel: {/**/      color: '#666666'/**/    }/**/  },/**/  yAxis: {/**/    show: false,/**/    type: 'value',/**/    axisLabel: {/**/      show: false/**/    },/**/    interval: 10,/**/    splitLine: {/**/      lineStyle: {/**/        type: 'dashed'/**/      }/**/    }/**/  },/**/  series: [/**/    {/**/      data: [0, 0, 25, 18, 0, 20, 32],/**/      type: 'bar',/**/      areaStyle: {},/**/      itemStyle: {/**/        color: '#FFD355',/**/        borderRadius: [85, 85, 0, 0],/**/      },/**/      barWidth: 10,/**/    }/**/  ],/**/  grid: {/**/    bottom: 35,/**/    top: 40,/**/  }/**/})
const action113 = optionTempKeep
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action8 = state.device = (null)
  const action9 = state.device_member = (null)
  const action14 = state.platform = ("dwapp")
  const action36 = state.mode = ("preview")
  const action62 = state.option = (null)
  const action69 = state.ready = (false)
  const action72 = state.total_count = (0)
  const action71 = state.total_weight = (0)
  const action75 = state.config = (null)
  const action115 = state.showCharts = (false)
  /* action111: 投影 */
  const action112 = state.rnappShadow = ({ offset: [0, 4], distance: 14, startColor: '#00000005' })
  return state
}

const action10 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action12 = store.commit('setState', {["state.platform"]: dw.platform})
  const action13 = await store.dispatch("func1", {})
  const action79 = await Promise.all([
    (async () => {
      const action35 = await store.dispatch("func4", {})
      return action35
    })(),
    (async () => {
      const action80 = await store.dispatch("func9", {})
      return action80
    })(),
  ])

  const action70 = store.commit('setState', {["state.ready"]: true})
}

const action85 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action86 = modalInstance = (event.data)
  const action87 = console.log('[getModalInstance#action87] 打印(modalInstance)', modalInstance)
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
  /* action105: 获取一周的喂食数据,并统计总次数和总喂食数量 */
  let weekFeed = ([])
  const action104 = weekFeed
  let totalFeedWeighAndTimes = (null)
  const action107 = totalFeedWeighAndTimes
  const action103 = ((store, event) => {
function mergeFeedingSchedules(data) {
  // 初始化一个长度为7的数组，代表一周的每一天，初始值为0
  let weeklyFeedAmount = [0, 0, 0, 0, 0, 0, 0];

  // 遍历数据数组
  data.forEach(feeding => {
    // 遍历每个喂食对象的周数据
    feeding.week.forEach(day => {
      // day - 1，因为数组索引从0开始，而星期从1开始
      // 累加对应天的喂食重量
      weeklyFeedAmount[day - 1] += feeding.weight;
    });
  });

  return weeklyFeedAmount;
}

weekFeed = mergeFeedingSchedules(device_member.data.feed_config.timerMode.data)
})(store, event)
  const action106 = ((store, event) => {
function calculateTotalFeedingStatistics(data) {
  let totalFeedWeight = 0;
  let totalFeedingTimes = 0;

  data.forEach(feeding => {
    // 每个喂食对象的喂食次数为其 week 数组的长度
    let feedingTimes = feeding.week.length;
    // 每个喂食对象的总喂食量为单次喂食量乘以喂食次数
    let feedWeight = feeding.weight * feedingTimes;

    // 累加到总喂食量和总喂食次数
    totalFeedWeight += feedWeight;
    totalFeedingTimes += feedingTimes;
  });

  return {
    totalFeedWeight,
    totalFeedingTimes
  };
}

totalFeedWeighAndTimes = calculateTotalFeedingStatistics(device_member.data.feed_config.timerMode.data)
})(store, event)
  const action109 = store.commit('setState', {["state.total_count"]: totalFeedWeighAndTimes.totalFeedingTimes, ["state.total_weight"]: totalFeedWeighAndTimes.totalFeedWeight})
  const action114 = optionTempKeep.series[0].data = (weekFeed)
  const action102 = store.commit('setState', {["state.option"]: optionTempKeep, ["state.showCharts"]: true})
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
        
}

const action30 = actions['func3'] = function (store, event) {
  const state = store.state
  let slug = (event.context.eventData)
  const action31 = slug
  const action32 = dw.app.goToPappUrl(slug, {}, {redirectTo: false})
}

const action33 = actions['func4'] = async function (store, event) {
  const state = store.state
  const action34 = await (async (store, event) => {
const key_device = "timer_index/device"
const key_device_member = "timer_index/device_member"
const jsonValue1 = JSON.stringify(state.device)
const jsonValue2 = JSON.stringify(state.device_member)
if(state.platform === 'rnapp'){
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

const action37 = actions['func5'] = function (store, event) {
  const state = store.state
  const action38 = store.commit('setState', {["state.mode"]: state.mode === 'preview' ? 'edit' : 'preview'})
}

const action41 = actions['func6'] = function (store, event) {
  const state = store.state
  let index = (event.context.eventData)
  const action43 = index
  const action44 = store.commit('setState', {[`state.device_member.data.feed_config.timerMode.data[${index}].is_select`]: !state.device_member.data.feed_config.timerMode.data[index].is_select})
}

const action45 = actions['func7'] = async function (store, event) {
  const state = store.state
  let select_items = (state.device_member.data.feed_config.timerMode.data.filter(x=>x.is_select))
  const action47 = select_items
  
        if (!!(!select_items.length) === (true)) {
          const action48message = ("未选中任何条目")
          const action48title = ("提示")
          action48message && dw.alert(action48title, action48message)
          return {}
        }
        
  let msg = ("是否确认删除？")
  const action90 = msg
  const action91 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(msg)
}
else{
  return null
}
})(store, event)
  if (!action91) {
    return event
  }
  let time = (select_items.map(x=>x.time))
  const action49 = time
  let new_items = (state.device_member.data.feed_config.timerMode.data.filter(x=>!x.is_select))
  const action50 = new_items
  let feed_config = ({/**/  ...state.device_member.data.feed_config,/**/  timerMode: {/**/    ...state.device_member.data.feed_config.timerMode,/**/    data: new_items,/**/  }/**/})
  const action51 = feed_config
  const action54 = await dw.showLoading({
    title: "",
    mask: false
  })
  const action56 = await dw.app.run("device_member.update", {"id": state.device_member.id, "formData": {/**/  feed_config,/**/}})
  const action55 = await dw.hideLoading()
  
        if ((action56.status) === ("error")) {
          const action57message = (action56.message || "操作错误！")
          const action57title = ("提示")
          action57message && dw.alert(action57title, action57message)
          return {}
        }
        
  let message = ("操作成功")
  const action99 = message
  const action100 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  const action60 = await store.dispatch("func1", {})
  const action61 = store.commit('setState', {["state.mode"]: "preview"})
}

const action63 = actions['func8'] = async function (store, event) {
  const state = store.state
}

const action76 = actions['func9'] = async function (store, event) {
  const state = store.state
  const action77 = await dw.app.run("config.get", {})
  let config = (action77.object)
  const action81 = config
  const action78 = store.commit('setState', {["state.config"]: config})
  if (!config.data.mock_chart) {
    const action66 = await store.dispatch("func8", {})
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
      "use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var actions = {};

var modalInstance = null;
var action101 = modalInstance;
var optionTempKeep = { /**/tooltip: { /**/trigger: "item", /**/position: 'top', /**/axisPointer: { /**/type: "none" }, /**/triggerOn: 'mousemove|click', /**/textStyle: { /**/color: '#FFD355' /**/ }, /**/borderWidth: 0, /**/formatter: '{c}克' }, /**/xAxis: { /**/type: 'category', /**/boundaryGap: false, /**/data: ['一', '二', '三', '四', '五', '六', '七'], /**/axisLine: { /**/lineStyle: { /**/color: '#EEEEEE' /**/ } /**/ }, /**/axisLabel: { /**/color: '#666666' /**/ } /**/ }, /**/yAxis: { /**/show: false, /**/type: 'value', /**/axisLabel: { /**/show: false /**/ }, /**/interval: 10, /**/splitLine: { /**/lineStyle: { /**/type: 'dashed' /**/ } /**/ } /**/ }, /**/series: [/**/{ /**/data: [0, 0, 25, 18, 0, 20, 32], /**/type: 'bar', /**/areaStyle: {}, /**/itemStyle: { /**/color: '#FFD355', /**/borderRadius: [85, 85, 0, 0] }, /**/barWidth: 10 }], /**/grid: { /**/bottom: 35, /**/top: 40 } };
var action113 = optionTempKeep;
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
        result = startDay + "\u81F3" + endDay;
      } else {
        for (var i = 0; i < arr.length; i++) {
          var weekday = weekdays[arr[i] - 1];
          switch (i) {
            case 0:
              result += weekday;
              break;
            case arr.length - 1:
              result += " " + weekday;
              break;
            default:
              result += " " + weekday;
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
xdwsv: {
  color: "#181818",
  fontSize: pm(14),
  fontWeight: "500",
  lineHeight: pm(18),
},
xdwsw: {
  color: "#FF6D6D",
  fontSize: pm(14),
  fontWeight: "500",
  lineHeight: pm(18),
},
xdwsx: {
  marginRight: pm(10),
},
xdwsy: {
  color: "#adadad",
  fontSize: pm(14),
  fontWeight: "500",
  lineHeight: pm(18),
},
xdwsz: {
  right: pm(10),
  bottom: pm(10),
  position: "absolute",
  alignItems: "center",
  flexDirection: "row",
},
xdwt0: {
  position: "relative",
  alignItems: "center",
  flexDirection: "row",
},
xdwt1: {
  width: pm(20),
  height: pm(20),
  marginRight: pm(3),
},
xdwt3: {
  color: "#666666",
  fontSize: pm(14),
  lineHeight: pm(20),
},
xdwt4: {
  alignItems: "center",
  marginBottom: pm(10),
  flexDirection: "row",
},
xdwt5: {
  color: "#181818",
  fontSize: pm(20),
  fontWeight: "500",
  lineHeight: pm(24),
  marginRight: pm(3),
},
xdwt6: {
  alignItems: "flex-end",
  flexDirection: "row",
},
xdwt7: {
  width: pm(150),
  alignItems: "center",
  paddingTop: pm(15),
  flexDirection: "column",
  justifyContent: "center",
},
xdwt9: {
  top: pm(22),
  left: "50%",
  width: pm(0.5),
  height: pm(34),
  position: "absolute",
  flexDirection: "column",
  backgroundColor: "#F0F0F0",
},
xdwta: {
  position: "relative",
  flexDirection: "row",
},
xdwtb: {
  width: pm(300),
  height: pm(150),
},
xdwtc: {
  width: pm(300),
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdwtd: {
  width: pm(300),
  marginLeft: pm(10),
  marginRight: pm(10),
  marginBottom: pm(15),
  flexDirection: "column",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdwte: {
  color: "#181818",
  fontSize: pm(16),
  fontWeight: "500",
  lineHeight: pm(24),
  paddingLeft: pm(10),
  marginBottom: pm(10),
  paddingRight: pm(10),
},
xdwtf: {
  width: pm(1),
  height: pm(25),
  flexDirection: "column",
},
xdwtg: {
  width: pm(20),
  height: pm(20),
  marginBottom: pm(9),
},
xdwtj: {
  width: pm(3),
  height: pm(48),
  marginBottom: pm(9),
},
xdwtl: {
  transform: [{translateX: pm(-5)}],
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdwtm: {
  width: pm(30),
  flexDirection: "column",
},
xdwtn: {
  color: "#181818",
  fontSize: pm(20),
  fontWeight: "500",
  lineHeight: pm(24),
  marginRight: pm(55),
  marginBottom: pm(10),
},
xdwto: {
  alignItems: "flex-start",
  marginRight: pm(51),
  flexDirection: "row",
},
xdwtp: {
  color: "#181818",
  fontSize: pm(12),
  lineHeight: pm(15),
  marginRight: pm(10),
},
xdwtq: {
  flexGrow: 1,
  alignItems: "flex-start",
  flexDirection: "column",
},
xdwtr: {
  color: "#AAAAAA",
  fontSize: pm(20),
  fontWeight: "500",
  lineHeight: pm(24),
  marginRight: pm(55),
  marginBottom: pm(7),
},
xdwts: {
  color: "#AAAAAA",
  fontSize: pm(20),
  fontWeight: "500",
  lineHeight: pm(24),
  marginRight: pm(3),
},
xdwtt: {
  color: "#AAAAAA",
  fontSize: pm(12),
  lineHeight: pm(15),
  marginRight: pm(10),
},
xdwtu: {
  alignItems: "center",
  marginLeft: "auto",
  marginRight: pm(0),
  flexDirection: "row",
},
xdwtv: {
  width: pm(20),
  height: pm(20),
},
xdwty: {
  width: pm(270),
  alignItems: "center",
  paddingTop: pm(15),
  paddingLeft: pm(15),
  paddingRight: pm(15),
  flexDirection: "row",
  paddingBottom: pm(15),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdwtz: {
  width: pm(270),
  marginBottom: pm(10),
  flexDirection: "column",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdwu0: {
  width: pm(270),
  flexDirection: "column",
},
xdwu1: {
  marginLeft: pm(10),
  marginRight: pm(10),
  flexDirection: "row",
},
xdwu2: {
  color: "#AAAAAA",
  fontSize: pm(14),
  lineHeight: pm(17),
  marginRight: pm(5),
},
xdwu3: {},
xdwu4: {
  height: pm(100),
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
},
xdwu5: {
  height: pm(100),
  flexDirection: "column",
},
xdwu6: {
  width: "100%",
  flexGrow: 1,
  flexBasis: "0%",
  flexShrink: 1,
  paddingTop: pm(15),
  paddingBottom: pm(15),
  backgroundColor: "#f8f8f8",
},
xdwu7: {
  width: pm(94),
  height: pm(94),
},
xdwu9: {
  width: "100%",
  bottom: pm(10),
  position: "absolute",
  flexDirection: "row",
  justifyContent: "center",
}
});
const slide = {"type":"172402","key":"c1724021","slug":null,"randomid":"id_382dff66d8b2a0a899db1dab","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Image2":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/26/7A2TjY9D2vzemumnei8dK8/消息icon备份33x.png","buildToLocal":true}},"Image4":{"ctx_map":{"fop":"e,9,144","src":"u/dev066/2024/02/26/97DnkUM9rGpvJLtwHXhDUi/编组82.png","buildToLocal":true}},"Image5":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/26/g4VbqhNWPNvpTgQzBGbhKM/消息icon备份23x.png","buildToLocal":true}},"Image6":{"ctx_map":{"fop":"e,282,282","src":"u/dev066/2024/02/26/d4zfR2UocoAzWmFeG5JvKi/编组17.png","buildToLocal":true}},"Image7":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/26/G7nnQVnGVqeoYSqz7tFjjZ/icon_selecct.png","buildToLocal":true}},"Image8":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/26/3wvEuLceXoEmo7BxNjsUr8/icon_unselecct.png","buildToLocal":true}},"Text21":{"ctx_map":{"text":""}},"Text22":{"ctx_map":{"text":""}},"Text23":{"ctx_map":{"text":"喂食计划"}},"Text24":{"ctx_map":{"text":""}},"Text25":{"ctx_map":{"text":"克"}},"Text26":{"ctx_map":{"text":"编辑"}},"Text28":{"ctx_map":{"text":"点击添加一份新的喂食计划"}},"Text29":{"ctx_map":{"text":"喂食次数"}},"Text30":{"ctx_map":{"text":"这是一个文本组件"}},"Text31":{"ctx_map":{"text":"这是一个文本组件"}},"Text32":{"ctx_map":{"text":"这是一个文本组件"}},"Text33":{"ctx_map":{"text":"这是一个文本组件"}},"Text34":{"ctx_map":{"text":"喂食总量"}},"Text35":{"ctx_map":{"text":""}},"Text36":{"ctx_map":{"text":"克"}},"Text37":{"ctx_map":{"text":""}},"Text38":{"ctx_map":{"text":""}},"Text39":{"ctx_map":{"text":"取消"}},"Text40":{"ctx_map":{"text":"删除"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"View20":{"ctx_map":{}},"View21":{"ctx_map":{}},"View22":{"ctx_map":{}},"View24":{"ctx_map":{}},"View25":{"ctx_map":{}},"View26":{"ctx_map":{}},"View27":{"ctx_map":{}},"View28":{"ctx_map":{}},"View29":{"ctx_map":{}},"View30":{"ctx_map":{}},"View31":{"ctx_map":{}},"View32":{"ctx_map":{}},"View33":{"ctx_map":{}},"View34":{"ctx_map":{}},"View35":{"ctx_map":{}},"View36":{"ctx_map":{}},"View37":{"ctx_map":{}},"View38":{"ctx_map":{}},"View39":{"ctx_map":{}},"View40":{"ctx_map":{}},"View41":{"ctx_map":{}},"View42":{"ctx_map":{}},"View43":{"ctx_map":{}},"Image10":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/26/fKWdhktjukU3AjqgPQXvB2/编组5备份5.png","buildToLocal":true}},"Image11":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/26/2MojWWBeKhVkGVjqNVsXtF/编组5.png","buildToLocal":true}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewIf5":{"ctx_map":{"value":true}},"ViewIf6":{"ctx_map":{"value":true}},"ViewIf8":{"ctx_map":{"value":true}},"ViewIf9":{"ctx_map":{"value":true}},"Echarts1":{"ctx_map":{"options":{"xAxis":{"data":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],"type":"category","boundaryGap":false},"yAxis":{"type":"value"},"series":[{"data":[820,932,901,934,1290,1330,1320],"type":"line","areaStyle":{}}]}}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"time"}},"ViewFor2":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"time"}},"ViewIf10":{"ctx_map":{"value":true}},"ViewIf11":{"ctx_map":{"value":true}},"ViewIf12":{"ctx_map":{"value":true}},"ViewIf13":{"ctx_map":{"value":true}},"ViewIf14":{"ctx_map":{"value":true}},"ViewIf15":{"ctx_map":{"value":true}},"ViewIf16":{"ctx_map":{"mode":"default","value":true}},"ViewIf17":{"ctx_map":{"mode":"default","value":true}},"SvgImage1":{"ctx_map":{"src":"u/dev064/2023/06/15/JvWe82dxGxxJxJ4YW9tn22/893114.svg","color":"#AAAAAA","width":12,"height":12,"SvgImageManage":"SvgImageManage"}},"DwappCloud2":{"ctx_map":{"bool1":true,"color1":"#E8EDF2","color2":"#FFD168"}},"DwappCloud3":{"ctx_map":{"bool1":true,"bool2":false,"text1":"定时喂食","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev066/2024/02/26/JXq5vNG8Nrsh3Cr7upAmdT/btn_back1.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud5":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"ScrollView2":{"ctx_map":{"type":"list","bounces":true,"scrollY":true,"showScrollbar":true}},"ShadowView1":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}},"ShadowView2":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}}}};
slide.components.DwappCloud3.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(16),
  fontWeight: "500",
  lineHeight: pm(24),
  flexDirection: "column",
};
slide.components.DwappCloud5.ctx_map.valueStyle = {
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
slide.components.DwappCloud5.ctx_map.containerStyle = {
  width: pm(238),
  marginLeft: pm(41),
  marginRight: pm(41),
  marginBottom: pm(18),
  flexDirection: "column",
  backgroundColor: "#ffffff",
};
slide.components.DwappCloud5.ctx_map.valueInputStyle = {
  color: "#333333",
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-timer_index';

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
      <View /* View42 */   style={styles.xdwt0}><Xbenchc176286 /* DwappCloud3 */ isCuzBtn={ slide.components.DwappCloud3.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud3.ctx_map.bool2 } eventData={ slide.components.DwappCloud3.ctx_map.prop1 } eventData2={ slide.components.DwappCloud3.ctx_map.prop2 } title={ slide.components.DwappCloud3.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud3.ctx_map.text2 } confirmText={ slide.components.DwappCloud3.ctx_map.text3 } cancelText={ slide.components.DwappCloud3.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud3.ctx_map.color1 } confirmColor={ slide.components.DwappCloud3.ctx_map.color2 } cancelColor={ slide.components.DwappCloud3.ctx_map.color3 } backIcon={ slide.components.DwappCloud3.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud3.ctx_map.image2 } titleStyle={ slide.components.DwappCloud3.ctx_map.style1 } screenType={ slide.components.DwappCloud3.ctx_map.select1 } ></Xbenchc176286>
<View /* View43 */   style={styles.xdwsz}>{!!(state.mode === 'preview') /* ViewIf6 */ && (<><XbenchcView /* View22 */   onClick={getEvent('View22:onClick:func5:', {}, bagForKeyValue, bagForIndex)}><Text /* Text26 */ style={styles.xdwsv} >{slide.components.Text26.ctx_map.text}</Text></XbenchcView></>)}
{!!(state.mode === 'edit') /* ViewIf15 */ && (<><XbenchcView /* View41 */   viewStyle={styles.xdwsx} onClick={getEvent('View41:onClick:func7:', {}, bagForKeyValue, bagForIndex)}><Text /* Text40 */ style={styles.xdwsw} >{slide.components.Text40.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View40 */   onClick={getEvent('View40:onClick:func5:', {}, bagForKeyValue, bagForIndex)}><Text /* Text39 */ style={styles.xdwsy} >{slide.components.Text39.ctx_map.text}</Text></XbenchcView></>)}</View></View>
<XbenchcScrollView /* ScrollView2 */ style={styles.xdwu6} scrollY={ true } showScrollbar={ true } bounces={ true } ><Shadow containerStyle={styles.xdwtd} {...(state.rnappShadow)}><View /* View27 */   style={styles.xdwtc}><View /* View34 */   style={styles.xdwta}><View /* View28 */   style={styles.xdwt7}><View /* View29 */   style={styles.xdwt4}><XbenchcImage /* Image10 */ style={styles.xdwt1} source={dwtools.getLocalResource('xdwt2_lthar0sn')}  />
<Text /* Text29 */ style={styles.xdwt3} >{slide.components.Text29.ctx_map.text}</Text></View>
<View /* View30 */   style={styles.xdwt6}><Text /* Text30 */ style={styles.xdwt5} >{state.total_count + '次'}</Text></View></View>
<View /* View31 */   style={styles.xdwt7}><View /* View33 */   style={styles.xdwt4}><XbenchcImage /* Image11 */ style={styles.xdwt1} source={dwtools.getLocalResource('xdwt8_lthar0so')}  />
<Text /* Text34 */ style={styles.xdwt3} >{slide.components.Text34.ctx_map.text}</Text></View>
<View /* View32 */   style={styles.xdwt6}><Text /* Text33 */ style={styles.xdwt5} >{state.total_weight + '克'}</Text></View></View>
<View /* View35 */   style={styles.xdwt9}></View></View>
{!!(state.showCharts) /* ViewIf17 */ && (<><XbenchcEcharts /* Echarts1 */ style={styles.xdwtb} options={state.option} /></>)}</View></Shadow>
<Text /* Text23 */ style={styles.xdwte} >{slide.components.Text23.ctx_map.text}</Text>
{!!(state.ready) /* ViewIf12 */ && (<>{!!(state.device_member) /* ViewIf5 */ && (<><View /* View17 */   style={styles.xdwu1}><View /* View16 */   style={styles.xdwtm}>{(state.device_member.data.feed_config.timerMode.data).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor2' + ':' + String(bagForItem['time']); return <ViewForItem /* ViewFor2 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View18 */   style={styles.xdwtl}>{!!(bagForIndex === 0) /* ViewIf1 */ && (<><View /* View19 */   style={styles.xdwtf}></View></>)}
{!!(bagForItem.isOpen == 1) /* ViewIf3 */ && (<><XbenchcImage /* Image2 */ style={styles.xdwtg} source={dwtools.getLocalResource('xdwth_lthar0so')}  /></>)}
{!!(bagForItem.isOpen == 2) /* ViewIf4 */ && (<><XbenchcImage /* Image5 */ style={styles.xdwtg} source={dwtools.getLocalResource('xdwti_lthar0so')}  /></>)}
{!!(bagForIndex !== (state.device_member.data.feed_config.timerMode.data.length - 1)) /* ViewIf2 */ && (<><XbenchcImage /* Image4 */ style={styles.xdwtj} source={dwtools.getLocalResource('xdwtk_lthar0so')}  /></>)}</View></ViewForItem> })}</View>
<View /* View15 */   style={styles.xdwu0}>{(state.device_member.data.feed_config.timerMode.data).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['time']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><Shadow containerStyle={styles.xdwtz} {...(state.rnappShadow)}><View /* View10 */   style={styles.xdwty}>{!!(bagForItem.isOpen) /* ViewIf13 */ && (<><View /* View12 */   style={styles.xdwtq}><View /* View13 */   style={styles.xdwto}><Text /* Text21 */ style={styles.xdwtn} >{bagForItem.time}</Text>
<View /* View20 */   style={styles.xdwt6}><Text /* Text22 */ style={styles.xdwt5} >{bagForItem.weight + '克'}</Text></View></View>
<View /* View14 */   style={styles.xdwt6}><Text /* Text24 */ style={styles.xdwtp} >{computeds.computed1({item: bagForItem}, state)}</Text></View></View></>)}
{!!(!bagForItem.isOpen) /* ViewIf14 */ && (<><View /* View36 */   style={styles.xdwtq}><View /* View38 */   style={styles.xdwto}><Text /* Text38 */ style={styles.xdwtr} >{bagForItem.time}</Text>
<View /* View39 */   style={styles.xdwt6}><Text /* Text37 */ style={styles.xdwts} >{bagForItem.weight + '克'}</Text></View></View>
<View /* View37 */   style={styles.xdwt6}><Text /* Text35 */ style={styles.xdwtt} >{computeds.computed1({item: bagForItem}, state)}</Text></View></View></>)}
{!!(state.mode === 'preview') /* ViewIf8 */ && (<><View /* View11 */   style={styles.xdwtu}><Xbenchc168615 /* DwappCloud2 */ value={ bagForItem.isOpen == 1 } eventData={ bagForIndex } eventData2={ slide.components.DwappCloud2.ctx_map.prop2 } bgColor={ slide.components.DwappCloud2.ctx_map.color1 } activeBgColor={ slide.components.DwappCloud2.ctx_map.color2 }  onChange={getEvent('DwappCloud2:input:func2:', {eventData: bagForIndex}, bagForKeyValue, bagForIndex)}></Xbenchc168615></View></>)}
{!!(state.mode === 'edit') /* ViewIf9 */ && (<><XbenchcView /* View24 */   viewStyle={styles.xdwtu} onClick={getEvent('View24:onClick:func6:', {eventData: bagForIndex}, bagForKeyValue, bagForIndex)}>{!!(bagForItem.is_select) /* ViewIf10 */ && (<><XbenchcImage /* Image7 */ style={styles.xdwtv} source={dwtools.getLocalResource('xdwtw_lthar0su')}  /></>)}
{!!(!bagForItem.is_select) /* ViewIf11 */ && (<><XbenchcImage /* Image8 */ style={styles.xdwtv} source={dwtools.getLocalResource('xdwtx_lthar0su')}  /></>)}</XbenchcView></>)}</View></Shadow></ViewForItem> })}</View></View></>)}
{!!(state.device_member.data.feed_config.timerMode.data.length == 0) /* ViewIf16 */ && (<><XbenchcView /* View25 */   viewStyle={styles.xdwu4} onClick={getEvent('View25:onClick:func3:', {eventData: "assist_set_feed"}, bagForKeyValue, bagForIndex)}><Text /* Text28 */ style={styles.xdwu2} >{slide.components.Text28.ctx_map.text}</Text>
<Image /* SvgImage1 */ style={[ styles.xdwu3, { width: pm(12), height: pm(12) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev064/2023/06/15/JvWe82dxGxxJxJ4YW9tn22/893114.svg"), width: pm(12), height: pm(12) }} /></XbenchcView></>)}</>)}
<View /* View26 */   style={styles.xdwu5}></View></XbenchcScrollView>
<XbenchcView /* View21 */   viewStyle={styles.xdwu9} onClick={getEvent('View21:onClick:func3:', {eventData: "timer_add"}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image6 */ style={styles.xdwu7} source={dwtools.getLocalResource('xdwu8_lthar0sv')}  /></XbenchcView>
<Xbenchc275104 /* DwappCloud5 */ valueStyle={ slide.components.DwappCloud5.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud5.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud5.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud5:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104>
    </ErrorBoundary>
  )
}
