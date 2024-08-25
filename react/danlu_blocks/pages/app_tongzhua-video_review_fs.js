
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import { Video } from 'expo-av'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
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
const action156 = videoRef
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
  const action131 = state.rate = (1)
  const action132 = state.ratePop = (false)
  const action133 = state.rateList = ([/**/    {/**/        "label": "2.0",/**/        "value": 2/**/    },/**/    {/**/        "label": "1.5",/**/        "value": 1.5/**/    },/**/    {/**/        "label": "1.25",/**/        "value": 1.25/**/    },/**/    {/**/        "label": "1.0",/**/        "value": 1/**/    },/**/    {/**/        "label": "0.75",/**/        "value": 0.75/**/    },/**/    {/**/        "label": "0.5",/**/        "value": 0.5/**/    }/**/])
  const action134 = state.currentPosition = (0)
  return state
}

const action3 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action124 = await (async (store, event) => {
if(dw.platform === 'rnapp'){
  const ScreenOrientation = dw.getNativePackage('ScreenOrientation')
  const StatusBar = dw.getNativePackage('StatusBar')
  const SystemNavigationBar = dw.getNativePackage('SystemNavigationBar')

  StatusBar.setHidden(true)
  SystemNavigationBar.navigationHide();
  const result =  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
  return result
}

})(store, event)
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
  const action120 = await store.dispatch("func10", {})
}

const action125 = actions['onHide'] = async function (store, event) {
  const state = store.state
  const action126 = await (async (store, event) => {
if(dw.platform === 'rnapp'){
  const ScreenOrientation = dw.getNativePackage('ScreenOrientation')
  const StatusBar = dw.getNativePackage('StatusBar')
  const SystemNavigationBar = dw.getNativePackage('SystemNavigationBar')
  StatusBar.setHidden(false)
  SystemNavigationBar.navigationShow();
  const result =  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
  return result
}
})(store, event)
}

const action4 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action123 = console.log('[func1#action123] dw.query.date', dw.query.date)
  let action127
  

  const action41 = await store.dispatch("func5", {"day": dw.query.date})
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

  for (let i = 0; i < 48; i++) {
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
  offset = offset + 375
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
  const action157 = store.commit('setState', {["state.ratePop"]: false})
  if (state.showTool === false) {
    const action115 = store.commit('setState', {["state.showTool"]: true})
    const action116 = await store.dispatch("func10", {})
  } else {
    const action118 = store.commit('setState', {["state.showTool"]: false})
  }
}

const action121 = actions['func12'] = async function (store, event) {
  const state = store.state
  const action122 = await dw.navigateBack({delta: 1})
}

const action136 = actions['func16'] = function (store, event) {
  const state = store.state
  let e = (event.data)
  const action137 = e
  const action138 = ((store, event) => {
e.stopPropagation()
})(store, event)
  const action139 = store.commit('setState', {["state.ratePop"]: true})
}

const action140 = actions['func17'] = function (store, event) {
  const state = store.state
  const action141 = store.commit('setState', {["state.ratePop"]: false})
}

const action142 = actions['func18'] = async function (store, event) {
  const state = store.state
  let e = (event.data)
  const action143 = e
  const action144 = ((store, event) => {
e.stopPropagation()
})(store, event)
  const action145 = store.commit('setState', {["state.rate"]: event.context.eventData.value})
  const action146 = await store.dispatch("func17", {})
  if (videoRef && dw.platform === 'rnapp') {
    const action149 = await (async (store, event) => {
await videoRef.setRateAsync(event.context.eventData.value, true)
await videoRef.setPositionAsync(state.currentPosition)
})(store, event)
  }
}

const action150 = actions['func19'] = function (store, event) {
  const state = store.state
  if (event.data.durationMillis) {
    const action153 = store.commit('setState', {["state.currentPosition"]: event.data.positionMillis})
  }
}

const action154 = actions['func13'] = function (store, event) {
  const state = store.state
  const action155 = videoRef = (event.data)
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
var action156 = videoRef;
var action13 = actions['computed1'] = function (event, state) {
  return [/**/'日', /**/'一', /**/'二', /**/'三', /**/'四', /**/'五', /**/'六', /**/'七', /**/'八', /**/'九', /**/'十', /**/'十一', /**/'十二'][event.num];
};

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

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').height
const baseWidth = Math.max(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 750) * baseWidth : 0
const styles = StyleSheet.create({
xdw2xj: {
  width: pm(750),
  height: "100%",
},
xdw2xk: {
  width: pm(750),
  height: "100%",
  flexDirection: "column",
  backgroundColor: "#000000",
},
xdw2xl: {
  width: pm(28),
  height: pm(28),
},
xdw2xm: {
  marginTop: 0,
  marginLeft: 0,
  marginRight: 0,
  marginBottom: 0,
},
xdw2xn: {
  color: "#ffffff",
  fontSize: pm(13),
  lineHeight: pm(18),
},
xdw2xo: {
  marginTop: 0,
  marginLeft: "auto",
  marginRight: 0,
  marginBottom: 0,
},
xdw2xp: {
  width: pm(750),
  height: pm(40),
  position: "absolute",
  alignItems: "center",
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
},
xdw2xq: {
  width: pm(322),
  height: pm(1),
  flexShrink: 0,
  flexDirection: "column",
},
xdw2xr: {
  width: pm(1),
  bottom: 0,
  height: pm(6),
  transform: [{translateX: pm(-1)}],
  flexDirection: "column",
  backgroundColor: "#ABAFB2",
},
xdw2xs: {
  color: "#FFFFFF",
  fontSize: pm(10),
  fontWeight: "500",
  lineHeight: pm(15),
},
xdw2xt: {
  width: pm(106.55),
  alignItems: "center",
  flexShrink: 0,
  flexDirection: "column",
  justifyContent: "flex-start",
},
xdw2xu: {
  width: pm(320),
  height: pm(1),
  flexShrink: 0,
  flexDirection: "column",
},
xdw2xv: {
  width: pm(375),
  height: pm(1),
  flexShrink: 0,
  flexDirection: "column",
},
xdw2xw: {
  width: pm(30),
  height: pm(7),
  position: "absolute",
  flexDirection: "column",
  backgroundColor: "#91D0BF",
},
xdw2xx: {
  height: pm(7),
  flexDirection: "column",
  backgroundColor: "#AAAAAA",
},
xdw2xy: {
  top: pm(43),
  position: "absolute",
  flexDirection: "row",
},
xdw2xz: {
  height: pm(102),
  position: "relative",
  flexDirection: "row",
},
xdw2y0: {
  flex: 1,
  width: "100%",
},
xdw2y1: {
  left: "50%",
  width: pm(2),
  bottom: 0,
  height: pm(80),
  position: "absolute",
  transform: [{translateX: pm(-1)}],
  flexDirection: "column",
  backgroundColor: "#FFFFFF",
},
xdw2y2: {
  width: pm(30),
  height: pm(18),
},
xdw2y3: {
  left: pm(67),
  bottom: pm(17),
  position: "absolute",
  flexDirection: "column",
},
xdw2y4: {
  right: pm(67),
  bottom: pm(17),
  position: "absolute",
  flexDirection: "column",
},
xdw2y5: {
  width: pm(750),
  height: pm(102),
  position: "relative",
  overflow: "visible",
  flexDirection: "column",
  backgroundColor: "#333333",
},
xdw2y6: {
  flex: 1,
  width: "100%",
  bottom: pm(0),
  overflow: "scroll",
  position: "absolute",
},
xdw2y7: {
  color: "#FFD355",
  fontSize: pm(13),
  lineHeight: pm(18),
},
xdw2y8: {
  flexDirection: "column",
},
xdw2y9: {
  right: 0,
  width: pm(90),
  height: "100%",
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-evenly",
  backgroundColor: "#000000cc",
},
xdw2ya: {
  color: "#181818",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(36),
},
xdw2yb: {
  width: pm(310),
  height: pm(1),
  marginTop: pm(10),
  marginLeft: pm(10),
  marginBottom: pm(10),
  flexDirection: "column",
  backgroundColor: "#F0F0F0",
},
xdw2yc: {
  marginTop: pm(10),
  alignItems: "center",
  marginBottom: pm(10),
  flexDirection: "column",
  justifyContent: "center",
},
xdw2yd: {
  fontSize: pm(14),
  fontWeight: "600",
  lineHeight: pm(19),
},
xdw2ye: {
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
xdw2yf: {
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
xdw2yg: {
  width: pm(300),
  flexDirection: "row",
},
xdw2yh: {
  width: pm(320),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(29),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
},
xdw2yi: {
  flex: 1,
  zIndex: 10,
  alignItems: "flex-end",
  flexDirection: "row",
  justifyContent: "center",
}
});
const slide = {"type":"176724","key":"c1767241","slug":null,"randomid":"id_83a4f3927fdaafa75a89e129","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View2":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image2":{"ctx_map":{"fop":"e,60,36","src":"u/dev064/2023/03/18/ijqxss8F6qE2acDmb8GWDW/SketchPng2232c64f14e63c4f5920077725d288af3747eab74e413b0442090d0aa2657759.png"}},"Image3":{"ctx_map":{"fop":"e,60,36","src":"u/dev064/2023/03/18/f5PZZ4iAF3MUCDoejbTCt3/SketchPng7d14e37eefd8816645cf85e5047ac1b415b35fb9e0e67f1bca537ba311669220.png"}},"Image4":{"ctx_map":{"fop":"e,56,56","src":"u/dev064/2023/03/18/qgfn7e9eV9sy8QheN3T7Bh/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd53561.png"}},"Modal1":{"ctx_map":{"mask":true,"value":false,"baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Text14":{"ctx_map":{"text":"取消"}},"Text15":{"ctx_map":{"text":"录制全部"}},"Text16":{"ctx_map":{"text":"仅录制移动"}},"Text19":{"ctx_map":{"text":"这是一个文本组件"}},"Text20":{"ctx_map":{"text":"倍速"}},"Text21":{"ctx_map":{"text":"这是一个文本组件"}},"Text22":{"ctx_map":{"text":"这是一个文本组件"}},"View11":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"View20":{"ctx_map":{}},"View24":{"ctx_map":{}},"View25":{"ctx_map":{}},"View27":{"ctx_map":{}},"View28":{"ctx_map":{}},"View29":{"ctx_map":{}},"View30":{"ctx_map":{}},"View31":{"ctx_map":{}},"View32":{"ctx_map":{}},"View33":{"ctx_map":{}},"View34":{"ctx_map":{}},"View35":{"ctx_map":{}},"View36":{"ctx_map":{}},"View37":{"ctx_map":{}},"View38":{"ctx_map":{}},"View39":{"ctx_map":{}},"View40":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewIf5":{"ctx_map":{"value":true}},"ViewIf6":{"ctx_map":{"value":true}},"ViewFor2":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"time"}},"ViewFor3":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewFor4":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"label"}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[]}},"ScrollView2":{"ctx_map":{"type":"list","scrollX":true,"scrollY":false,"showScrollbar":true}},"NativeVideo1":{"ctx_map":{"src":"u/linliguang/2022/10/14/FAXKyF6Doa2RZySo4X6CSG/test2.mp4","loop":true,"preload":"auto","autoPlay":true,"controls":false}},"NativeButton1":{"ctx_map":{"type":"button"}}}};

const pageGroupSlug = 'app_tongzhua-video_review_fs';

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
      {!!(state.ready) /* ViewIf2 */ && (<><XbenchcView /* View11 */   viewStyle={styles.xdw2xk} onClick={getEvent('View11:onClick:func11:', {}, bagForKeyValue, bagForIndex)}>{!!(state.show_video) /* ViewIf1 */ && (<><Video /* NativeVideo1 */ style={styles.xdw2xj} source={ {uri: dwtools.qiniu(state.currentVideo.data.url)} } useNativeControls={ false } isLooping={ true } shouldPlay={ true } resizeMode={ "contain" }  onPlaybackStatusUpdate={getEvent('NativeVideo1:onRnappPlaybackStatusUpdate:func19:', {}, bagForKeyValue, bagForIndex)} ref={getEvent('NativeVideo1:onRef:func13:', {}, bagForKeyValue, bagForIndex)}></Video></>)}</XbenchcView>
{!!(state.showTool) /* ViewIf3 */ && (<><View /* View2 */   style={styles.xdw2xp}><XbenchcView /* View9 */   viewStyle={styles.xdw2xm} onClick={getEvent('View9:onClick:func12:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image4 */ style={styles.xdw2xl} source={dwtools.qiniu(slide.components.Image4.ctx_map.src, slide.components.Image4.ctx_map.fop)}  /></XbenchcView>
<XbenchcView /* View38 */   viewStyle={styles.xdw2xo} onClick={getEvent('View38:onClick:func16:', {}, bagForKeyValue, bagForIndex)}><Text /* Text20 */ style={styles.xdw2xn} >{slide.components.Text20.ctx_map.text}</Text></XbenchcView></View>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw2y6} scrollX={ false } scrollY={ true } ><View /* View24 */   style={styles.xdw2y5}><XbenchcScrollView /* ScrollView2 */ style={styles.xdw2y0} scrollX={ true } scrollY={ false } showScrollbar={ true }  onScroll={getEvent('ScrollView2:onScroll:func9:', {}, bagForKeyValue, bagForIndex)}><View /* View37 */   style={styles.xdw2xz}><View /* View29 */   style={styles.xdw2xq}></View>
{(state.timeList).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor2' + ':' + String(bagForItem['time']); return <ViewForItem /* ViewFor2 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View27 */   style={styles.xdw2xt}><View /* View28 */   style={styles.xdw2xr}></View>
<Text /* Text19 */ style={styles.xdw2xs} >{bagForItem.time}</Text></View></ViewForItem> })}
<View /* View30 */   style={styles.xdw2xu}></View>
<View /* View31 */   style={styles.xdw2xy}><View /* View33 */   style={styles.xdw2xv}></View>
<View /* View32 */   style={[styles.xdw2xx, ({
  width: state.platform === 'rnapp' ? pm((state.timeList.length - 1) * 106.5)  : ((state.timeList.length - 1) * 106.5) + 'px'
})]}>{(state.videos).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor3' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor3 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View36 */   style={[styles.xdw2xw, (computeds.computed4({item: bagForItem}, state))]}></View></ViewForItem> })}</View></View></View></XbenchcScrollView>
<View /* View25 */   style={styles.xdw2y1}></View>
<View /* View34 */   style={styles.xdw2y3}><XbenchcImage /* Image2 */ style={styles.xdw2y2} source={dwtools.qiniu(slide.components.Image2.ctx_map.src, slide.components.Image2.ctx_map.fop)}  /></View>
<View /* View35 */   style={styles.xdw2y4}><XbenchcImage /* Image3 */ style={styles.xdw2y2} source={dwtools.qiniu(slide.components.Image3.ctx_map.src, slide.components.Image3.ctx_map.fop)}  /></View></View></XbenchcScrollView></>)}
{!!(state.ratePop) /* ViewIf4 */ && (<><View /* View39 */   style={styles.xdw2y9}>{(state.rateList).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor4' + ':' + String(bagForItem['label']); return <ViewForItem /* ViewFor4 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><XbenchcView /* View40 */   viewStyle={styles.xdw2y8} onClick={getEvent('View40:onClick:func18:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}>{!!(state.rate === bagForItem.value) /* ViewIf6 */ && (<><Text /* Text22 */ style={styles.xdw2y7} >{bagForItem.label + "X"}</Text></>)}
{!!(state.rate !== bagForItem.value) /* ViewIf5 */ && (<><Text /* Text21 */ style={styles.xdw2xn} >{bagForItem.label + "X"}</Text></>)}</XbenchcView></ViewForItem> })}</View></>)}
<XbenchcModal /* Modal1 */ rootStyle={styles.xdw2yi} value={ state.showSelect } mask={ true } maskClosable={ true } ><View /* View14 */   style={styles.xdw2yh}><View /* View17 */   style={styles.xdw2yc}><XbenchcView /* View20 */   viewStyle={styles.xdw2y8} onClick={getEvent('View20:onClick:func4:', {eventData: "move"}, bagForKeyValue, bagForIndex)}><Text /* Text16 */ style={styles.xdw2ya} >{slide.components.Text16.ctx_map.text}</Text></XbenchcView>
<View /* View19 */   style={styles.xdw2yb}></View>
<XbenchcView /* View18 */   viewStyle={styles.xdw2y8} onClick={getEvent('View18:onClick:func4:', {eventData: "all"}, bagForKeyValue, bagForIndex)}><Text /* Text15 */ style={styles.xdw2ya} >{slide.components.Text15.ctx_map.text}</Text></XbenchcView></View>
<View /* View15 */   style={styles.xdw2yg}><View /* View16 */   style={styles.xdw2yf}><XbenchcButton /* NativeButton1 */ viewStyle={styles.xdw2ye} onClick={getEvent('NativeButton1:onClick:func3:', {}, bagForKeyValue, bagForIndex)}><Text /* Text14 */ style={styles.xdw2yd} >{slide.components.Text14.ctx_map.text}</Text></XbenchcButton></View></View></View></XbenchcModal></>)}
    </ErrorBoundary>
  )
}
