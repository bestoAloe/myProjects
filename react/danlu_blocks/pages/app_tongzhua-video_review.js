
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc168612 from '../components/Xbenchc168612'
import { Image } from 'expo-image'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import { Video } from 'expo-av'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import ViewForItem from '../../xbench/components/ViewForItem'
import XbenchcScrollView from '../../xbench/xbenchc/components/XbenchcScrollView'
import XbenchcButton from '../../xbench/xbenchc/components/XbenchcButton'
import XbenchcModal from '../../xbench/xbenchc/components/XbenchcModal'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

let action84lock = null
let action110lock = null
let videoRef = (null)
const action122 = videoRef
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action2 = state.activeTab = ("cloud")
  const action8 = state.dateList = ([])
  const action52 = state.timeList = ([])
  const action15 = state.showSelect = (false)
  const action20 = state.recordMode = ('move')
  const action35 = state.year = (2023)
  const action11 = state.month = (1)
  const action24 = state.date = (1)
  const action58 = state.device = (null)
  const action59 = state.device_member = (null)
  const action60 = state.platform = ("dwapp")
  const action69 = state.videos = ([])
  const action99 = state.show_video = (false)
  const action102 = state.currentVideo = (null)
  const action105 = state.ready = (false)
  const action107 = state.showTool = (true)
  const action137 = state.is_pause = (false)
  const action146 = state.rate = (1)
  const action147 = state.ratePop = (false)
  const action152 = state.rateList = ([/**/    {/**/        "label": "2.0",/**/        "value": 2/**/    },/**/    {/**/        "label": "1.5",/**/        "value": 1.5/**/    },/**/    {/**/        "label": "1.25",/**/        "value": 1.25/**/    },/**/    {/**/        "label": "1.0",/**/        "value": 1/**/    },/**/    {/**/        "label": "0.75",/**/        "value": 0.75/**/    },/**/    {/**/        "label": "0.5",/**/        "value": 0.5/**/    }/**/])
  const action163 = state.currentPosition = (0)
  return state
}

const action3 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action68 = store.commit('setState', {["state.platform"]: dw.platform})
  const action67 = await Promise.all([
    (async () => {
      const action10 = await store.dispatch("func1", {})
      return action10
    })(),
    (async () => {
      const action66 = await store.dispatch("func8", {})
      return action66
    })(),
  ])

  const action106 = store.commit('setState', {["state.ready"]: true})
  const action119 = await store.dispatch("func10", {})
}

const action4 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action6 = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace('Z', '')
  let today = (action6.slice(0, 10))
  const action7 = today
  const action5 = ((store, event) => {
function getWeekDates(dateString) {
  const today = new Date(dateString);
  const weekDates = [];
  
  for (let i = -6; i <= 6; i++) {
    const currentDate = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
    const dateStr = currentDate.toISOString().substring(0, 10);
    const isToday = i === 0;
    const isFuture = i > 0;
    const dayOfWeek = currentDate.getDay();
    weekDates.push({ dateStr, isToday, isFuture, dayOfWeek });
  }
  
  return weekDates;
}

return getWeekDates(today)
})(store, event)
  const action9 = store.commit('setState', {["state.dateList"]: action5})
  const action41 = await store.dispatch("func5", {"day": today})
}

const action16 = actions['func2'] = function (store, event) {
  const state = store.state
  const action18 = store.commit('setState', {["state.showSelect"]: true})
}

const action17 = actions['func3'] = function (store, event) {
  const state = store.state
  const action19 = store.commit('setState', {["state.showSelect"]: false})
}

const action21 = actions['func4'] = async function (store, event) {
  const state = store.state
  const action22 = store.commit('setState', {["state.recordMode"]: event.context.eventData})
  const action23 = await store.dispatch("func3", {})
}

const action34 = actions['func5'] = async function (store, event) {
  const state = store.state
  let day = (event.day || event.context.eventData)
  const action37 = day
  if (event.context && event.context.eventData2) {
    
        if (!!(event.context.eventData2 === true) === (true)) {
          const action47message = ("当前日期暂无录影")
          const action47title = ("提示")
          action47message && dw.alert(action47title, action47message)
          return {}
        }
        
  }
  const action42 = console.log('[func5#action42] 打印(day)的返回值', day)
  const action40 = store.commit('setState', {["state.year"]: parseInt(day.slice(0, 4)), ["state.month"]: parseInt(day.slice(5, 7)), ["state.date"]: parseInt(day.slice(8, 10))})
  const action71 = await Promise.all([
    (async () => {
      const action54 = await store.dispatch("func6", {"day": day})
      return action54
    })(),
    (async () => {
      const action72 = await store.dispatch("func7", {})
      return action72
    })(),
  ])

}

const action48 = actions['func6'] = function (store, event) {
  const state = store.state
  let day = (event.day)
  const action50 = day
  const action49 = ((store, event) => {
function getTimeSlots(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const isToday = date.toDateString() === now.toDateString();
  const timeSlots = [];

  for (let i = 0; i <= 48; i++) {
    const hour = Math.floor(i / 2);
    const minute = (i % 2) * 30;
    const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    const dateTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), hour, minute);

    if (isToday && dateTime > now) {
      continue;
    }

    timeSlots.push({ time });
  }

  return timeSlots;
}
return getTimeSlots(day)
})(store, event)
  const action178 = console.log('[func6#action178] 打印(action49)的返回值', action49)
  const action51 = store.commit('setState', {["state.timeList"]: action49})
}

const action55 = actions['func7'] = async function (store, event) {
  const state = store.state
  const action56 = await dw.app.run("video.list", {"limit": 100, "offset": 0, "filters": {/**/  data__device_member_uuid: state.device_member_uuid,/**/  data__type: 'cycle',/**/  data__start_time__gte: `${state.year}-${String(state.month).padStart(2, '0')}-${String(state.date).padStart(2, '0')}T00:00:00.000`,/**/  data__start_time__lte: `${state.year}-${String(state.month).padStart(2, '0')}-${String(state.date).padStart(2, '0')}T23:59:59.999`,/**/}, "order_by": []})
  let videos = (action56.objects)
  const action73 = videos
  /* action74: 需要计算当前视频属于哪个刻度之后TODO */
  const action77 = await Promise.all((videos).map(async (item, index) => {
    const action75 = ((store, event) => {
const parseDate = string => {
  const a = string
    .split(/[-T:.Z]/)
    .filter(i => !!i)
    .map(i => parseInt(i));
  return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5], parseFloat('0.' + a[6]) * 1000);
}

let video_start_time = item.data.start_time;
let video_end_time = item.data.end_time;
const matchIndex = state.timeList.findIndex(x=>{
  let x_time = `${state.year}-${String(state.month).padStart(2, '0')}-${String(state.date).padStart(2, '0')}T${x.time}:00.000`;
  let timeDelta = parseDate(video_start_time) - parseDate(x_time)
  return timeDelta >= 0 && timeDelta < 1000 * 60 * 30;
})


let offset = matchIndex * 106.5
if(dw.platform !== 'rnapp'){
  // 非rnapp平台需要补上前面的160
  offset = offset + 160
}
// 还要计算当前视频的精准位置，自身宽度
// 已知 30分钟的间距为106.5px, 占比 * 106.5px 就是此基础上的子级偏移量
let x_time = `${state.year}-${String(state.month).padStart(2, '0')}-${String(state.date).padStart(2, '0')}T${state.timeList[matchIndex].time}:00.000`;
let timeDelta = parseDate(video_start_time) - parseDate(x_time)
let sub_offset = (timeDelta / (1000 * 60 * 30)) * 106.5
let video_duration = parseDate(video_end_time) - parseDate(video_start_time)
let width = (video_duration / (1000 * 60 * 30)) * 106.5
offset = offset + sub_offset
item.offset = offset
item.width = width
})(store, event)
  }))

  const action70 = store.commit('setState', {["state.videos"]: action56.objects})
}

const action61 = actions['func8'] = async function (store, event) {
  const state = store.state
  const action62 = await dw.app.run("device.user_get", {"uuid": dw.query.uuid || "f5892e18-23d7-4903-a044-97094e97c7af"})
  
        if ((action62.status) === ("error")) {
          const action63message = (action62.message || "操作错误！")
          const action63title = ("提示")
          action63message && dw.alert(action63title, action63message)
          return {}
        }
        
  const action64 = store.commit('setState', {["state.device"]: action62.object, ["state.device_member"]: action62.device_member})
}

const action82 = actions['func9'] = async function (store, event) {
  const state = store.state
  
      const key = await new Promise(resolve => {
        clearTimeout(action84lock)
        action84lock = setTimeout(async () => {
          resolve(await (async () => {
    const action85 = console.log('[func9#action85] event', event)
    let scrollLeft = (event.data.detail.scrollLeft)
    const action86 = scrollLeft
    /* action87: 已知30分钟的间距为106.5px */
    let unit_minute = (parseFloat(dw.getPlatformPx(106.5)) / 30)
    const action88 = unit_minute
    let total_minute = (Math.round(scrollLeft / unit_minute))
    const action89 = total_minute
    let hour = (Math.floor(total_minute / 60))
    const action91 = hour
    let minute = (total_minute % 60)
    const action92 = minute
    let hh_mm = (`${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`)
    const action90 = hh_mm
    const action104 = console.log('[func9#action104] 打印(hh_mm)的返回值', hh_mm)
    let match_video = (state.videos.find(x=>x.data.start_time.slice(11, 16) <= hh_mm && x.data.end_time.slice(11, 16) > hh_mm))
    const action93 = match_video
    const action94 = console.log('[func9#action94] match_video', match_video)
    const action98 = store.commit('setState', {["state.show_video"]: false})
    await new Promise((resolve, reject) => setTimeout(resolve, 50))
    if (match_video) {
      const action101 = store.commit('setState', {["state.currentVideo"]: match_video, ["state.show_video"]: true})
    }
  
          })())
        }, 500)
      })
}

const action109 = actions['func10'] = async function (store, event) {
  const state = store.state
  
      const key = await new Promise(resolve => {
        clearTimeout(action110lock)
        action110lock = setTimeout(async () => {
          resolve(await (async () => {
    const action111 = store.commit('setState', {["state.showTool"]: false})
  
          })())
        }, 5000)
      })
}

const action112 = actions['func11'] = async function (store, event) {
  const state = store.state
  const action120 = console.log('[func11#action120] func11', )
  const action162 = store.commit('setState', {["state.ratePop"]: false})
  if (state.showTool === false) {
    const action115 = store.commit('setState', {["state.showTool"]: true})
    const action116 = await store.dispatch("func10", {})
  } else {
    const action118 = store.commit('setState', {["state.showTool"]: false})
  }
}

const action123 = actions['func13'] = function (store, event) {
  const state = store.state
  const action124 = videoRef = (event.data)
}

const action125 = actions['func14'] = async function (store, event) {
  const state = store.state
  let e = (event.data)
  const action138 = e
  const action139 = ((store, event) => {
e.stopPropagation()
})(store, event)
  if (state.is_pause === false) {
    const action128 = store.commit('setState', {["state.is_pause"]: true})
    if (videoRef && dw.platform === 'rnapp') {
      const action131 = ((store, event) => {
videoRef.pauseAsync()
})(store, event)
    }
  } else {
    const action133 = store.commit('setState', {["state.is_pause"]: false})
    if (videoRef && dw.platform === 'rnapp') {
      const action136 = ((store, event) => {
videoRef.playAsync()
})(store, event)
    }
  }
  const action140 = await store.dispatch("func10", {})
}

const action141 = actions['func15'] = function (store, event) {
  const state = store.state
  let e = (event.data)
  const action144 = e
  const action145 = ((store, event) => {
e.stopPropagation()
})(store, event)
  const action142 = dw.app.goToPappUrl("video_review_fs", {"date": `${state.year}-${state.month.toString().padStart(2, "0")}-${state.date.toString().padStart(2, "0")}`, "uuid": dw.query.uuid}, {redirectTo: false})
}

const action148 = actions['func16'] = function (store, event) {
  const state = store.state
  let e = (event.data)
  const action160 = e
  const action161 = ((store, event) => {
e.stopPropagation()
})(store, event)
  const action150 = store.commit('setState', {["state.ratePop"]: true})
}

const action149 = actions['func17'] = function (store, event) {
  const state = store.state
  const action151 = store.commit('setState', {["state.ratePop"]: false})
}

const action153 = actions['func18'] = async function (store, event) {
  const state = store.state
  let e = (event.data)
  const action156 = e
  const action157 = ((store, event) => {
e.stopPropagation()
})(store, event)
  const action154 = store.commit('setState', {["state.rate"]: event.context.eventData.value})
  const action158 = await store.dispatch("func17", {})
  if (videoRef && dw.platform === 'rnapp') {
    const action177 = await (async (store, event) => {
await videoRef.setRateAsync(event.context.eventData.value, true)
await videoRef.setPositionAsync(state.currentPosition)
})(store, event)
  }
}

const action164 = actions['func19'] = function (store, event) {
  const state = store.state
  if (event.data.durationMillis) {
    const action174 = store.commit('setState', {["state.currentPosition"]: event.data.positionMillis})
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

var actions = {};

var videoRef = null;
var action122 = videoRef;
var action13 = actions['computed1'] = function (event, state) {
  return [/**/'日', /**/'一', /**/'二', /**/'三', /**/'四', /**/'五', /**/'六', /**/'七', /**/'八', /**/'九', /**/'十', /**/'十一', /**/'十二'][event.num];
};
// COMPUTED_ACTION_META:computed1 {"deps":[]}

var action26 = actions['computed2'] = function (event, state) {
  var action27 = function (event) {
    var style = {};
    if (event.item.isFuture) {
      style = {
        color: '#AAAAAA'
      };
    } else {
      if (parseInt(event.item.dateStr.slice(8, 10)) === state.date) {
        style = {
          color: '#FFFFFF'
        };
      } else {
        style = {
          color: '#181818'
        };
      }
    }
    return style;
  }(event);
  return action27;
};
// COMPUTED_ACTION_META:computed2 {"deps":["date"]}

var action30 = actions['computed3'] = function (event, state) {
  var action31 = function (event) {
    var style = {};
    if (parseInt(event.item.dateStr.slice(8, 10)) === state.date) {
      style = {
        backgroundColor: '#FFD355'
      };
    } else {
      style = {
        backgroundColor: '#FFFFFF'
      };
    }
    return style;
  }(event);
  return action31;
};
// COMPUTED_ACTION_META:computed3 {"deps":["date"]}

var action78 = actions['computed4'] = function (event, state) {
  var action79 = function (event) {
    var style = {};
    if (state.platform === 'rnapp') {
      style = {
        left: pm(event.item.offset),
        width: pm(event.item.width)
      };
    } else {
      style = {
        left: event.item.offset + "px",
        width: event.item.width + "px"
      };
    }
    return style;
  }(event);
  var action81 = console.log('[computed4#action81] 打印(action79)的返回值', action79);
  //MACRO:DEBUG window.vconsole.log('log:workflow', {func: 'computed4', action: 'action81', label: `打印(action79)的返回值`, valueVar: "action79", value: [action79]})
  return action79;
};
// COMPUTED_ACTION_META:computed4 {"deps":["platform"]}

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdw1u2: {},
xdw1u3: {
  position: "absolute",
  marginLeft: pm(10),
},
xdw1u4: {
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
},
xdw1u5: {
  width: pm(320),
  flexDirection: "row",
  justifyContent: "center",
},
xdw1u6: {
  width: pm(320),
  height: pm(40),
  position: "relative",
  alignItems: "center",
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  flexDirection: "row",
  paddingBottom: 0,
},
xdw1u7: {
  width: pm(320),
  height: pm(239),
},
xdw1u8: {
  width: pm(31),
  height: pm(31),
},
xdw1u9: {
  top: "50%",
  left: "50%",
  position: "absolute",
  transform: [{translateX: pm(-15)}, {translateY: pm(-15)}],
  flexDirection: "column",
},
xdw1ua: {
  width: pm(16),
  height: pm(16),
},
xdw1ub: {
  right: pm(13),
  bottom: pm(13),
  position: "absolute",
  flexDirection: "column",
},
xdw1uc: {
  color: "#FFFFFF",
  fontSize: pm(12),
  lineHeight: pm(17),
},
xdw1ud: {
  top: pm(13),
  right: pm(13),
  position: "absolute",
  flexDirection: "column",
},
xdw1ue: {
  color: "#FFD355",
  fontSize: pm(13),
  lineHeight: pm(18),
},
xdw1uf: {
  color: "#ffffff",
  fontSize: pm(13),
  lineHeight: pm(18),
},
xdw1ug: {
  flexDirection: "column",
},
xdw1uh: {
  right: 0,
  width: pm(90),
  height: pm(239),
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-evenly",
  backgroundColor: "#000000cc",
},
xdw1ui: {
  width: pm(320),
  height: pm(239),
  position: "relative",
  flexDirection: "column",
  backgroundColor: "#000000",
},
xdw1uj: {
  fontSize: pm(14),
  fontWeight: "500",
  lineHeight: pm(19),
},
xdw1uk: {
  width: pm(17),
  height: pm(17),
  marginRight: pm(3),
},
xdw1ul: {
  color: "#666666",
  fontSize: pm(12),
  lineHeight: pm(17),
},
xdw1um: {
  marginLeft: "auto",
  flexDirection: "row",
},
xdw1un: {
  paddingTop: pm(16),
  paddingLeft: pm(26),
  paddingRight: pm(26),
  flexDirection: "row",
  paddingBottom: pm(16),
},
xdw1uo: {
  color: "#999999",
  fontSize: pm(11),
  lineHeight: pm(15),
},
xdw1up: {
  color: "#181818",
  fontSize: pm(13),
  fontWeight: "600",
  lineHeight: pm(15),
},
xdw1uq: {
  width: pm(25),
  height: pm(25),
  marginTop: pm(4),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  borderTopLeftRadius: pm(100),
  borderTopRightRadius: pm(100),
  borderBottomLeftRadius: pm(100),
  borderBottomRightRadius: pm(100),
},
xdw1ur: {
  width: "14.28%",
  alignItems: "center",
  flexShrink: 0,
  flexDirection: "column",
},
xdw1us: {
  overflow: "scroll",
  paddingTop: pm(5),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
},
xdw1ut: {
  width: pm(108),
  height: pm(1),
  flexShrink: 0,
  flexDirection: "column",
},
xdw1uu: {
  width: pm(1),
  bottom: 0,
  height: pm(6),
  transform: [{translateX: pm(-1)}],
  flexDirection: "column",
  backgroundColor: "#ABAFB2",
},
xdw1uv: {
  color: "#333333",
  fontSize: pm(10),
  fontWeight: "500",
  lineHeight: pm(15),
},
xdw1uw: {
  width: pm(106.55),
  alignItems: "center",
  flexShrink: 0,
  flexDirection: "column",
  justifyContent: "flex-start",
},
xdw1ux: {
  width: pm(106),
  height: pm(1),
  flexShrink: 0,
  flexDirection: "column",
},
xdw1uy: {
  width: pm(160),
  height: pm(1),
  flexShrink: 0,
  flexDirection: "column",
},
xdw1uz: {
  width: pm(30),
  height: pm(7),
  position: "absolute",
  flexDirection: "column",
  backgroundColor: "#91D0BF",
},
xdw1v0: {
  height: pm(7),
  flexDirection: "column",
  backgroundColor: "#AAAAAA",
},
xdw1v1: {
  top: pm(43),
  position: "absolute",
  flexDirection: "row",
},
xdw1v2: {
  height: pm(102),
  position: "relative",
  flexDirection: "row",
},
xdw1v3: {
  flex: 1,
  width: "100%",
},
xdw1v4: {
  left: "50%",
  width: pm(2),
  bottom: 0,
  height: pm(80),
  position: "absolute",
  transform: [{translateX: pm(-1)}],
  flexDirection: "column",
  backgroundColor: "#181818",
},
xdw1v5: {
  width: pm(15),
  height: pm(8),
},
xdw1v6: {
  left: pm(26),
  bottom: pm(17),
  position: "absolute",
  flexDirection: "column",
},
xdw1v7: {
  right: pm(26),
  bottom: pm(17),
  position: "absolute",
  flexDirection: "column",
},
xdw1v8: {
  width: pm(320),
  height: pm(102),
  position: "relative",
  overflow: "visible",
  flexDirection: "column",
  backgroundColor: "#F7F7F7",
},
xdw1v9: {
  flex: 1,
  width: "100%",
  overflow: "scroll",
},
xdw1va: {
  color: "#181818",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(36),
},
xdw1vb: {
  width: pm(310),
  height: pm(1),
  marginTop: pm(10),
  marginLeft: pm(10),
  marginBottom: pm(10),
  flexDirection: "column",
  backgroundColor: "#F0F0F0",
},
xdw1vc: {
  marginTop: pm(10),
  alignItems: "center",
  marginBottom: pm(10),
  flexDirection: "column",
  justifyContent: "center",
},
xdw1vd: {
  fontSize: pm(14),
  fontWeight: "600",
  lineHeight: pm(19),
},
xdw1ve: {
  width: pm(144),
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
xdw1vf: {
  width: pm(300),
  height: pm(38),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#f8f8f8",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw1vg: {
  width: pm(300),
  flexDirection: "row",
},
xdw1vh: {
  width: pm(320),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(29),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
},
xdw1vi: {
  flex: 1,
  zIndex: 10,
  alignItems: "flex-end",
  flexDirection: "row",
  justifyContent: "center",
}
});
const slide = {"type":"173384","key":"c1733841","slug":null,"randomid":"id_0c7f6e35d6a12c550fe96c33","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/03/06/HEwtVaoiftvU6eoeGZfFZE/SketchPngd975a41311f1dc6d7ad486abb443fc8c06cd590fa1f00084b8222e67a29344b7.png"}},"Image2":{"ctx_map":{"fop":"e,45,24","src":"u/dev064/2023/03/06/gSUJyGCyMxsvZnrmsVeZvT/企业微信截图_20230306104227.png"}},"Image3":{"ctx_map":{"fop":"e,45,24","src":"u/dev064/2023/03/06/xDCd7YVpktWnL9GCbVhfXd/企业微信截图_20230306104250.png"}},"Image4":{"ctx_map":{"fop":"e,150,150","src":"u/dev064/2023/03/18/jTUzo23PBXcc6FXHHQNbtD/SketchPngaea28648606800e925c6d4b48b469ccd72284656175e4cffa9436cd84d44c3fd.png"}},"Image5":{"ctx_map":{"fop":"e,32,32","src":"u/dev064/2023/03/18/YYQxTArLvLViPJa4bfVaXU/fs.png"}},"Image6":{"ctx_map":{"fop":"e,150,150","src":"u/dev064/2023/03/18/8AJzZqhKKhbCF8sQVoFGUL/play1.png"}},"Modal1":{"ctx_map":{"mask":true,"value":false,"baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Text12":{"ctx_map":{"text":"这是一个文本组件"}},"Text13":{"ctx_map":{"text":"仅录制移动"}},"Text14":{"ctx_map":{"text":"取消"}},"Text15":{"ctx_map":{"text":"录制全部"}},"Text16":{"ctx_map":{"text":"仅录制移动"}},"Text17":{"ctx_map":{"text":"这是一个文本组件"}},"Text18":{"ctx_map":{"text":"这是一个文本组件"}},"Text19":{"ctx_map":{"text":"这是一个文本组件"}},"Text20":{"ctx_map":{"text":"倍速"}},"Text21":{"ctx_map":{"text":"这是一个文本组件"}},"Text22":{"ctx_map":{"text":"这是一个文本组件"}},"Text23":{"ctx_map":{"text":"云回放"}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"View20":{"ctx_map":{}},"View21":{"ctx_map":{}},"View22":{"ctx_map":{}},"View23":{"ctx_map":{}},"View24":{"ctx_map":{}},"View25":{"ctx_map":{}},"View27":{"ctx_map":{}},"View28":{"ctx_map":{}},"View29":{"ctx_map":{}},"View30":{"ctx_map":{}},"View31":{"ctx_map":{}},"View32":{"ctx_map":{}},"View33":{"ctx_map":{}},"View34":{"ctx_map":{}},"View35":{"ctx_map":{}},"View36":{"ctx_map":{}},"View37":{"ctx_map":{}},"View38":{"ctx_map":{}},"View39":{"ctx_map":{}},"View40":{"ctx_map":{}},"View41":{"ctx_map":{}},"View42":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewIf5":{"ctx_map":{"value":true}},"ViewIf6":{"ctx_map":{"value":true}},"ViewIf7":{"ctx_map":{"value":true}},"ViewIf8":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"dateStr"}},"ViewFor2":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"time"}},"ViewFor3":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewFor4":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"label"}},"SvgImage1":{"ctx_map":{"src":"u/dev070/2023/03/01/Pw2GmNmZdnR82yz886HY95/wechat-test.svg","color":"#07c160","width":20,"height":20,"SvgImageManage":"SvgImageManage"}},"DwappCloud1":{"ctx_map":{"color1":""}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[]}},"ScrollView2":{"ctx_map":{"type":"list","scrollX":true,"scrollY":false,"showScrollbar":true}},"NativeVideo1":{"ctx_map":{"src":"u/linliguang/2022/10/14/FAXKyF6Doa2RZySo4X6CSG/test2.mp4","loop":true,"preload":"auto","autoPlay":true,"controls":false}},"NativeButton1":{"ctx_map":{"type":"button"}}}};

const pageGroupSlug = 'app_tongzhua-video_review';

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
      <Xbenchc168612 /* DwappCloud1 */ backgroundColor={ slide.components.DwappCloud1.ctx_map.color1 } ></Xbenchc168612>
<View /* View2 */   style={styles.xdw1u6}><View /* View9 */   style={styles.xdw1u3}><Image /* SvgImage1 */ style={[ styles.xdw1u2, { width: pm(20), height: pm(20) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev070/2023/03/01/Pw2GmNmZdnR82yz886HY95/wechat-test.svg"), width: pm(20), height: pm(20) }} /></View>
<View /* View1 */   style={styles.xdw1u5}><Text /* Text23 */ style={styles.xdw1u4} >{slide.components.Text23.ctx_map.text}</Text></View></View>
{!!(state.ready) /* ViewIf2 */ && (<><XbenchcView /* View11 */   viewStyle={styles.xdw1ui} onClick={getEvent('View11:onClick:func11:', {}, bagForKeyValue, bagForIndex)}>{!!(state.show_video) /* ViewIf1 */ && (<><Video /* NativeVideo1 */ style={styles.xdw1u7} source={ {uri: dwtools.qiniu(state.currentVideo.data.url)} } useNativeControls={ false } isLooping={ true } shouldPlay={ true } resizeMode={ "contain" }  onPlaybackStatusUpdate={getEvent('NativeVideo1:onRnappPlaybackStatusUpdate:func19:', {}, bagForKeyValue, bagForIndex)} ref={getEvent('NativeVideo1:onRef:func13:', {}, bagForKeyValue, bagForIndex)}></Video></>)}
{!!(state.showTool) /* ViewIf3 */ && (<><XbenchcView /* View38 */   viewStyle={styles.xdw1u9} onClick={getEvent('View38:onClick:func14:', {}, bagForKeyValue, bagForIndex)}>{!!(!state.is_pause) /* ViewIf4 */ && (<><XbenchcImage /* Image4 */ style={styles.xdw1u8} source={dwtools.qiniu(slide.components.Image4.ctx_map.src, slide.components.Image4.ctx_map.fop)}  /></>)}
{!!(state.is_pause) /* ViewIf5 */ && (<><XbenchcImage /* Image6 */ style={styles.xdw1u8} source={dwtools.qiniu(slide.components.Image6.ctx_map.src, slide.components.Image6.ctx_map.fop)}  /></>)}</XbenchcView>
<XbenchcView /* View39 */   viewStyle={styles.xdw1ub} onClick={getEvent('View39:onClick:func15:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image5 */ style={styles.xdw1ua} source={dwtools.qiniu(slide.components.Image5.ctx_map.src, slide.components.Image5.ctx_map.fop)}  /></XbenchcView>
<XbenchcView /* View40 */   viewStyle={styles.xdw1ud} onClick={getEvent('View40:onClick:func16:', {}, bagForKeyValue, bagForIndex)}><Text /* Text20 */ style={styles.xdw1uc} >{slide.components.Text20.ctx_map.text}</Text></XbenchcView></>)}
{!!(state.ratePop) /* ViewIf6 */ && (<><View /* View41 */   style={styles.xdw1uh}>{(state.rateList).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor4' + ':' + String(bagForItem['label']); return <ViewForItem /* ViewFor4 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><XbenchcView /* View42 */   viewStyle={styles.xdw1ug} onClick={getEvent('View42:onClick:func18:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}>{!!(state.rate === bagForItem.value) /* ViewIf7 */ && (<><Text /* Text21 */ style={styles.xdw1ue} >{bagForItem.label + "X"}</Text></>)}
{!!(state.rate !== bagForItem.value) /* ViewIf8 */ && (<><Text /* Text22 */ style={styles.xdw1uf} >{bagForItem.label + "X"}</Text></>)}</XbenchcView></ViewForItem> })}</View></>)}</XbenchcView>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw1v9} scrollX={ false } scrollY={ true } ><View /* View12 */   style={styles.xdw1un}><Text /* Text12 */ style={styles.xdw1uj} >{computeds.computed1({num: state.month}, state) + "月"}</Text>
<XbenchcView /* View13 */   viewStyle={styles.xdw1um} onClick={getEvent('View13:onClick:func2:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image1 */ style={styles.xdw1uk} source={dwtools.qiniu(slide.components.Image1.ctx_map.src, slide.components.Image1.ctx_map.fop)}  />
<Text /* Text13 */ style={styles.xdw1ul} >{state.recordMode === 'move' ? '仅录制移动' : '录制全部'}</Text></XbenchcView></View>
<View /* View21 */   style={styles.xdw1us}>{(state.dateList).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['dateStr']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View22 */   style={[styles.xdw1ur, ({})]}><Text /* Text17 */ style={styles.xdw1uo} >{computeds.computed1({num: bagForItem.dayOfWeek}, state)}</Text>
<XbenchcView /* View23 */   viewStyle={[styles.xdw1uq, (computeds.computed3({item: bagForItem} , state))]} onClick={getEvent('View23:onClick:func5:', {eventData: bagForItem.dateStr, eventData2: bagForItem.isFuture}, bagForKeyValue, bagForIndex)}><Text /* Text18 */ style={[styles.xdw1up, (computeds.computed2({item: bagForItem}, state))]} >{bagForItem.dateStr.slice(8, 10)}</Text></XbenchcView></View></ViewForItem> })}</View>
<View /* View24 */   style={styles.xdw1v8}><XbenchcScrollView /* ScrollView2 */ style={styles.xdw1v3} scrollX={ true } scrollY={ false } showScrollbar={ true }  onScroll={getEvent('ScrollView2:onScroll:func9:', {}, bagForKeyValue, bagForIndex)}><View /* View37 */   style={styles.xdw1v2}><View /* View29 */   style={styles.xdw1ut}></View>
{(state.timeList).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor2' + ':' + String(bagForItem['time']); return <ViewForItem /* ViewFor2 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View27 */   style={styles.xdw1uw}><View /* View28 */   style={styles.xdw1uu}></View>
<Text /* Text19 */ style={styles.xdw1uv} >{bagForItem.time}</Text></View></ViewForItem> })}
<View /* View30 */   style={styles.xdw1ux}></View>
<View /* View31 */   style={styles.xdw1v1}><View /* View33 */   style={styles.xdw1uy}></View>
<View /* View32 */   style={[styles.xdw1v0, ({
  width: state.platform === 'rnapp' ? pm((state.timeList.length - 1) * 106.5)  : ((state.timeList.length - 1) * 106.5) + 'px'
})]}>{(state.videos).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor3' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor3 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View36 */   style={[styles.xdw1uz, (computeds.computed4({item: bagForItem}, state))]}></View></ViewForItem> })}</View></View></View></XbenchcScrollView>
<View /* View25 */   style={styles.xdw1v4}></View>
<View /* View34 */   style={styles.xdw1v6}><XbenchcImage /* Image2 */ style={styles.xdw1v5} source={dwtools.qiniu(slide.components.Image2.ctx_map.src, slide.components.Image2.ctx_map.fop)}  /></View>
<View /* View35 */   style={styles.xdw1v7}><XbenchcImage /* Image3 */ style={styles.xdw1v5} source={dwtools.qiniu(slide.components.Image3.ctx_map.src, slide.components.Image3.ctx_map.fop)}  /></View></View></XbenchcScrollView>
<XbenchcModal /* Modal1 */ rootStyle={styles.xdw1vi} value={ state.showSelect } mask={ true } maskClosable={ true } ><View /* View14 */   style={styles.xdw1vh}><View /* View17 */   style={styles.xdw1vc}><XbenchcView /* View20 */   viewStyle={styles.xdw1ug} onClick={getEvent('View20:onClick:func4:', {eventData: "move"}, bagForKeyValue, bagForIndex)}><Text /* Text16 */ style={styles.xdw1va} >{slide.components.Text16.ctx_map.text}</Text></XbenchcView>
<View /* View19 */   style={styles.xdw1vb}></View>
<XbenchcView /* View18 */   viewStyle={styles.xdw1ug} onClick={getEvent('View18:onClick:func4:', {eventData: "all"}, bagForKeyValue, bagForIndex)}><Text /* Text15 */ style={styles.xdw1va} >{slide.components.Text15.ctx_map.text}</Text></XbenchcView></View>
<View /* View15 */   style={styles.xdw1vg}><View /* View16 */   style={styles.xdw1vf}><XbenchcButton /* NativeButton1 */ viewStyle={styles.xdw1ve} onClick={getEvent('NativeButton1:onClick:func3:', {}, bagForKeyValue, bagForIndex)}><Text /* Text14 */ style={styles.xdw1vd} >{slide.components.Text14.ctx_map.text}</Text></XbenchcButton></View></View></View></XbenchcModal></>)}
    </ErrorBoundary>
  )
}
