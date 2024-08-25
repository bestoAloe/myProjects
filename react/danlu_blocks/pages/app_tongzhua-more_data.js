
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import ViewForItem from '../../xbench/components/ViewForItem'
import XbenchcScrollView from '../../xbench/xbenchc/components/XbenchcScrollView'
import XbenchcEcharts from '../../xbench/xbenchc/components/XbenchcEcharts'
import XbenchcPickerView from '../../xbench/xbenchc/components/XbenchcPickerView'
import XbenchcButton from '../../xbench/xbenchc/components/XbenchcButton'
import XbenchcModal from '../../xbench/xbenchc/components/XbenchcModal'
import Xbenchc275104 from '../components/Xbenchc275104'
import LinearGradient from 'react-native-linear-gradient'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

let getMonthRangeOfYear = ((year) => {/**/  let month = 12;/**/  let startMonth = 1;/**/  let monthRange = [];/**/  const now = new Date();/**/  if (year === now.getFullYear()) {/**/    month = now.getMonth()+1/**/  };/**/  for (let i = startMonth; i <= month; i++) {/**/    monthRange.push({label:i.toString().padStart(2,0), value:i})/**/  };/**/  return  monthRange/**/})
const action132 = getMonthRangeOfYear
let modalInstance = (null)
const action189 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action8 = state.device = (null)
  const action9 = state.device_member = (null)
  const action14 = state.platform = ("dwapp")
  const action36 = state.mode = ("preview")
  const action62 = state.option = ({/**/  tooltip: {/**/    trigger: "item",/**/    position: 'top',/**/    axisPointer: {/**/      type: "none",/**/    },/**/    triggerOn: 'mousemove|click',/**/    textStyle: {/**/      color: '#FFD355'/**/    },/**/    borderWidth: 0,/**/    formatter: '{c}克',/**/  },/**/  xAxis: {/**/    type: 'category',/**/    boundaryGap: false,/**/    data: ['1至7日', '至14日', '至21日', '至23日'],/**/    axisLine: {/**/      lineStyle: {/**/        color: '#EEEEEE'/**/      }/**/    },/**/    axisLabel: {/**/      color: '#666666'/**/    },/**/    splitLine: {/**/      show: true,/**/      lineStyle: {/**/        type: 'dashed'/**/      }/**/    }/**/  },/**/  yAxis: {/**/    show: false,/**/    type: 'value',/**/    axisLabel: {/**/      show: false/**/    },/**/    interval: 10,/**/    splitLine: {/**/      lineStyle: {/**/        type: 'dashed'/**/      }/**/    }/**/  },/**/  series: [/**/    {/**/      data: [16, 18, 20, 6],/**/      type: 'line',/**/      areaStyle: {},/**/      itemStyle: {/**/        color: '#FFD355',/**/        borderRadius: [85, 85, 0, 0],/**/      },/**/      barWidth: 10,/**/      areaStyle: {/**/        color: "rgb(255,249,230)"/**/      }/**/    }/**/  ],/**/  grid: {/**/    bottom: 35,/**/    top: 40,/**/  }/**/})
  const action66 = state.pets = ([])
  const action67 = state.select_pet = (null)
  const action77 = state.date = (null)
  const action80 = state.eat_items = ([])
  const action87 = state.ready = (false)
  const action104 = state.avg = (0)
  const action111 = state.showChart = (true)
  const action130 = state.monthPickerRange = ([])
  const action131 = state.monthValue = ([])
  const action139 = state.selectMonth = (null)
  const action141 = state.monthPop = (false)
  return state
}

const action10 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action78now = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace('Z', '')
  const action78 = action78now.split('T')[0] + 'T00:00:00.000'
  const action79 = store.commit('setState', {["state.date"]: action78.slice(0, 10), ["state.selectMonth"]: action78.slice(0, 7), ["state.platform"]: dw.platform})
  const action13 = await store.dispatch("func1", {})
  const action82 = await Promise.all([
    (async () => {
      const action35 = await store.dispatch("func8", {})
      return action35
    })(),
    (async () => {
      const action81 = await store.dispatch("func12", {})
      return action81
    })(),
    (async () => {
      const action133 = await store.dispatch("func4", {})
      return action133
    })(),
  ])

  const action95 = await store.dispatch("func14", {})
  const action88 = store.commit('setState', {["state.ready"]: true})
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

const action186 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action187 = modalInstance = (event.data)
  const action188 = console.log('[getModalInstance#action188] 打印(modalInstance)', modalInstance)
}

const action92 = actions['func14'] = async function (store, event) {
  const state = store.state
  const action93 = await dw.app.run("eat.month_agg", {"month": state.selectMonth, "pet_uuid": state.select_pet.uuid, "device_member_uuid": state.device_member.uuid})
  const action94 = console.log('[func14#action94] 打印(action93)的返回值', action93)
  let group = (action93.group)
  const action103 = group
  const action101 = store.commit('setState', {["state.option.series[0].data"]: group.map(x=>x.weight)/**/, ["state.option.xAxis.data"]: group.map(x=>x.label)/**/, ["state.avg"]: action93.avg, ["state.showChart"]: false})
  await new Promise((resolve, reject) => setTimeout(resolve, 1))
  const action178 = store.commit('setState', {["state.showChart"]: true})
}

const action30 = actions['func3'] = function (store, event) {
  const state = store.state
  let slug = (event.context.eventData)
  const action31 = slug
  const action32 = dw.app.goToPappUrl(slug, {}, {redirectTo: false})
}

const action63 = actions['func8'] = async function (store, event) {
  const state = store.state
  const action97 = await dw.app.run("pet.list", {"limit": 1000, "offset": 0, "filters": {data__device_member_uuid: state.device_member.uuid}})
  let objects = ([/**/  {uuid: 'all', data: {name: '全部', image: 'u/dev064/2023/03/20/KzgN3srQmTFWhZA9wFkEAQ/SketchPngf1073b26b9cb9c510029f1db1c4ca39efd9f08b63882000cfea59d7e8588993b.png'}},/**/  ...action97.objects,/**/  {uuid: 'null', data: {name: '未分类', image: 'u/dev064/2023/03/20/8GvPXFtAFEUVeAATyyxxY5/SketchPng3534e60b93c40c5f54458f2ab1bc0b78e218aae8ebc0d283e2577d1adc6307b8.png'}},/**/])
  const action98 = objects
  const action99 = store.commit('setState', {["state.pets"]: objects, ["state.select_pet"]: objects[0]})
}

const action72 = actions['func11'] = async function (store, event) {
  const state = store.state
  const action73 = store.commit('setState', {["state.select_pet"]: event.context.eventData})
  const action106 = await store.dispatch("func14", {})
}

const action74 = actions['func12'] = async function (store, event) {
  const state = store.state
  const action76 = await dw.app.run("eat.list", {"limit": 100, "offset": 0, "filters": {/**/  data__device_member_uuid: state.device_member.uuid,/**/}, "order_by": [], "select_related": {/**/  toone: {/**/    pet_uuid__pet: {},/**/    video_uuid__video: {},/**/  }/**/}})
  const action83 = ((store, event) => {
function groupByDate(dataList) {
  const dateMap = {};
  const weekdays = ['日', '一', '二', '三', '四', '五', '六'];

  // 遍历条目列表，根据日期将其分组
  for (let i = 0 ; i < dataList.length; i++) {
    const item = dataList[i]
    console.log("item", item)
    const date = new Date(item.data.start_time);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    console.log("")
    const day = String(date.getDate()).padStart(2, '0');
    const dateStr = `${month}月${day}日`;
    const weekday = weekdays[date.getDay()];
    const groupKey = `${dateStr}-${weekday}`;

    if (!dateMap[groupKey]) {
      dateMap[groupKey] = {
        date: dateStr,
        weekday: weekday,
        items: [],
      };
    }
    dateMap[groupKey].items.push(item);
  }

  // 将分组按日期从晚到早排序
  const sortedGroups = Object.values(dateMap).sort((a, b) => {
    const dateA = new Date(`${a.date}T00:00:00.000`);
    const dateB = new Date(`${b.date}T00:00:00.000`);
    return dateB - dateA;
  });

  return sortedGroups;
}
return groupByDate(action76.objects)
})(store, event)
  const action180 = console.log('[func12#action180] 打印(action83)的返回值!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', action83)
  const action75 = store.commit('setState', {["state.eat_items"]: action83})
}

const action89 = actions['func13'] = async function (store, event) {
  const state = store.state
  if (event.context.eventData.data.video_uuid__toone) {
    const action91 = dw.app.goToPappUrl("eat_video_player", {"uuid": event.context.eventData.data.video_uuid, "device_uuid": state.device.uuid}, {redirectTo: false})
  } else {
    let message = ("暂无关联视频")
    const action191 = message
    const action192 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  }
}

/* action114: 月份picker */
const action115 = actions['func4'] = function (store, event) {
  const state = store.state
  const action116 = ((store, event) => {
const res = {}
const now = new Date()

res.yearRange = [
  {label:now.getFullYear()-1, value:now.getFullYear()-1},
  {label:now.getFullYear(), value:now.getFullYear()},
]

res.monthRange = getMonthRangeOfYear(now.getFullYear())

return res
})(store, event)
  const action117 = console.log('[func4#action117] 打印(action116)的返回值', action116)
  const action118 = store.commit('setState', {["state.monthPickerRange"]: [action116.yearRange, action116.monthRange]})
}

const action119 = actions['func6'] = function (store, event) {
  const state = store.state
  const action179 = console.log('[func6#action179] event.data.detail.value', event.data.detail.value)
  const action120 = store.commit('setState', {["state.monthValue"]: event.data.detail.value})
  let monthRange = (getMonthRangeOfYear(state.monthPickerRange[0][state.monthValue[0]].value))
  const action135 = monthRange
  if (monthRange.length !== state.monthPickerRange[1].length) {
    const action138 = store.commit('setState', {["state.monthPickerRange[1]"]: monthRange})
  }
}

const action142 = actions['func2'] = function (store, event) {
  const state = store.state
  const action147 = ((store, event) => {
const year = state.selectMonth.slice(0, 4)
const month = state.selectMonth.slice(5, 7)
const yearIndex = state.monthPickerRange[0].findIndex(x=>x.value === parseInt(year))
const monthIndex = state.monthPickerRange[1].findIndex(x=>x.value === parseInt(month))
return [
  yearIndex,
  monthIndex,
]
})(store, event)
  const action148 = console.log('[func2#action148] 打印(action147)的返回值', action147)
  let monthRange = (getMonthRangeOfYear(Number(state.selectMonth.slice(0, 4))))
  const action169 = monthRange
  if (monthRange.length !== state.monthPickerRange[1].length) {
    const action173 = store.commit('setState', {["state.monthPickerRange[1]"]: monthRange})
  }
  const action170 = console.log('[func2#action170] 打印(monthRange)的返回值', monthRange)
  const action149 = store.commit('setState', {["state.monthValue"]: action147, ["state.monthPop"]: true})
}

const action152 = actions['func10'] = async function (store, event) {
  const state = store.state
  let monthValue = (state.monthValue)
  const action156 = monthValue
  const action168 = console.log('[func10#action168] 打印(monthValue)的返回值', monthValue)
  let year = (state.monthPickerRange[0][monthValue[0]].value)
  const action157 = year
  const action158 = console.log('[func10#action158] 打印(year)的返回值', year)
  let month = (Math.max(state.monthPickerRange[1][monthValue[1]].value,1))
  const action159 = month
  const action160 = console.log('[func10#action160] 打印(month)的返回值', month)
  const action163 = store.commit('setState', {["state.selectMonth"]: `${year}-${month.toString().padStart(2, "0")}`, ["state.monthPop"]: false})
  const action174 = await store.dispatch("func14", {})
}

const action166 = actions['func15'] = function (store, event) {
  const state = store.state
  const action167 = store.commit('setState', {["state.monthPop"]: false})
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

var getMonthRangeOfYear = function getMonthRangeOfYear(year) {
  /**/var month = 12; /**/var startMonth = 1; /**/var monthRange = []; /**/var now = new Date(); /**/if (year === now.getFullYear()) {
    /**/month = now.getMonth() + 1; /**/
  }; /**/for (var i = startMonth; i <= month; i++) {
    /**/monthRange.push({ label: i.toString().padStart(2, 0), value: i }); /**/
  }; /**/return monthRange; /**/
};
var action132 = getMonthRangeOfYear;
var modalInstance = null;
var action189 = modalInstance;
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

var action84 = actions['computed2'] = function (event, state) {
  var action86 = function (event) {
    function formatTime(seconds) {
      // console.log("seconds", seconds)
      var minutes = Math.floor(seconds / 60);
      var seconds = seconds % 60;

      // 在分钟或秒数小于10的情况下，在其前面添加一个0
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      if (seconds < 10) {
        seconds = '0' + seconds;
      }

      // 返回 MM:SS 格式的时间字符串
      return minutes + ':' + seconds;
    }
    // console.log("event.item", event.item)
    return formatTime(event.item.data.video_uuid__toone ? event.item.data.video_uuid__toone.data.duration : 0);
  }(event);
  return action86;
};
// COMPUTED_ACTION_META:computed2 {"deps":[]}

/* action114: 月份picker */
module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdw2ox: {
  width: pm(32),
  height: pm(32),
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw2oy: {
  width: pm(32),
  height: pm(32),
  borderTopWidth: pm(2),
  borderTopColor: "#ffffff",
  alignItems: "center",
  borderLeftWidth: pm(2),
  borderLeftColor: "#ffffff",
  borderRightWidth: pm(2),
  borderRightColor: "#ffffff",
  marginRight: pm(14),
  borderBottomWidth: pm(2),
  borderBottomColor: "#ffffff",
  flexDirection: "column",
  justifyContent: "center",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw2oz: {
  width: pm(39),
  height: pm(39),
  zIndex: 2,
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#FED557",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw2p0: {
  width: pm(46),
  bottom: pm(-0),
  height: pm(46),
  zIndex: 2,
  position: "absolute",
  borderTopWidth: pm(2),
  borderTopColor: "#ffffff",
  alignItems: "center",
  borderLeftWidth: pm(2),
  borderLeftColor: "#ffffff",
  borderRightWidth: pm(2),
  borderRightColor: "#ffffff",
  borderBottomWidth: pm(2),
  borderBottomColor: "#ffffff",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw2p1: {
  color: "#666666",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw2p2: {
  height: pm(33),
  flexWrap: "nowrap",
  minWidth: pm(100),
  alignItems: "center",
  paddingLeft: pm(50),
  paddingRight: pm(10),
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(30),
  borderTopRightRadius: pm(30),
  borderBottomLeftRadius: pm(30),
  borderBottomRightRadius: pm(30),
},
xdw2p3: {
  height: pm(46),
  position: "relative",
  marginRight: pm(14),
  flexDirection: "column",
  justifyContent: "center",
},
xdw2p4: {
  flexDirection: "column",
  justifyContent: "center",
},
xdw2p5: {
  width: pm(300),
  marginLeft: pm(10),
  flexDirection: "row",
},
xdw2p6: {
  width: pm(300),
  height: pm(50),
  flexDirection: "column",
},
xdw2p7: {
  color: "#181818",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw2p8: {
  width: pm(14),
  height: pm(14),
},
xdw2p9: {
  alignItems: "center",
  marginBottom: pm(10),
  flexDirection: "row",
},
xdw2pa: {
  fontSize: pm(20),
  lineHeight: pm(25),
  marginRight: pm(3),
},
xdw2pb: {
  color: "#181818",
  fontSize: pm(10),
  fontWeight: "500",
  lineHeight: pm(20),
  marginRight: pm(2),
},
xdw2pc: {
  alignItems: "flex-end",
  flexDirection: "row",
},
xdw2pd: {
  color: "#999999",
  fontSize: pm(10),
  lineHeight: pm(15),
},
xdw2pe: {
  marginTop: pm(3),
  flexDirection: "row",
  justifyContent: "flex-start",
},
xdw2pf: {
  marginLeft: "auto",
  flexDirection: "column",
},
xdw2pg: {
  width: pm(280),
  alignItems: "flex-start",
  paddingTop: 0,
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: 0,
  justifyContent: "flex-start",
},
xdw2ph: {
  width: pm(280),
  height: pm(150),
},
xdw2pi: {
  width: pm(300),
  shadowOffset: {width: pm(0), height: pm(1)},
  shadowRadius: pm(9),
  shadowColor: "rgb(0, 0, 0)",
  shadowOpacity: 0.1,
  elevation: 5,
  marginLeft: pm(10),
  paddingTop: pm(15),
  marginRight: pm(10),
  paddingLeft: pm(10),
  marginBottom: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(15),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(7),
  borderTopRightRadius: pm(7),
  borderBottomLeftRadius: pm(7),
  borderBottomRightRadius: pm(7),
},
xdw2pj: {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  marginBottom: pm(9),
},
xdw2pk: {
  color: "#181818",
  fontSize: pm(12),
  lineHeight: pm(17),
  marginRight: pm(7),
},
xdw2pl: {
  color: "#181818",
  fontSize: pm(12),
  lineHeight: pm(17),
},
xdw2pm: {
  marginBottom: pm(10),
  flexDirection: "row",
},
xdw2pn: {
  width: pm(147),
  height: pm(110),
  borderTopLeftRadius: pm(5),
  borderTopRightRadius: pm(5),
  borderBottomLeftRadius: pm(5),
  borderBottomRightRadius: pm(5),
},
xdw2po: {
  flexDirection: "column",
},
xdw2pp: {
  color: "#ffffff",
  fontSize: pm(9),
  lineHeight: pm(12),
},
xdw2pq: {
  left: pm(3),
  bottom: pm(3),
  zIndex: 2,
  position: "absolute",
  alignItems: "center",
  paddingTop: pm(4),
  paddingLeft: pm(6),
  paddingRight: pm(6),
  flexDirection: "column",
  paddingBottom: pm(4),
  justifyContent: "center",
  backgroundColor: "#00000033",
  borderTopLeftRadius: pm(9),
  borderTopRightRadius: pm(9),
  borderBottomLeftRadius: pm(9),
  borderBottomRightRadius: pm(9),
},
xdw2pr: {
  color: "#181818",
  fontSize: pm(9),
  lineHeight: pm(12),
},
xdw2ps: {
  width: pm(20),
  height: pm(20),
  borderTopLeftRadius: pm(100),
  borderTopRightRadius: pm(100),
  borderBottomLeftRadius: pm(100),
  borderBottomRightRadius: pm(100),
},
xdw2pt: {
  top: pm(-3),
  left: 0,
  position: "absolute",
  borderTopWidth: pm(2),
  borderTopColor: "#FFE7A0",
  borderLeftWidth: pm(2),
  borderLeftColor: "#FFE7A0",
  borderRightWidth: pm(2),
  borderRightColor: "#FFE7A0",
  borderBottomWidth: pm(2),
  borderBottomColor: "#FFE7A0",
  flexDirection: "column",
  borderTopLeftRadius: pm(100),
  borderTopRightRadius: pm(100),
  borderBottomLeftRadius: pm(100),
  borderBottomRightRadius: pm(100),
},
xdw2pu: {
  top: pm(6),
  right: pm(3),
  width: pm(48),
  height: pm(17),
  position: "absolute",
  alignItems: "center",
  paddingLeft: pm(19),
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: "#FFE7A0",
  borderTopLeftRadius: pm(100),
  borderTopRightRadius: pm(100),
  borderBottomLeftRadius: pm(100),
  borderBottomRightRadius: pm(100),
},
xdw2pv: {
  width: pm(147),
  flexGrow: 1,
  position: "relative",
  alignItems: "flex-start",
  marginRight: pm(3),
  marginBottom: pm(3),
  flexDirection: "column",
},
xdw2pw: {
  flexWrap: "wrap",
  marginBottom: pm(10),
  flexDirection: "row",
  justifyContent: "space-between",
},
xdw2px: {
  width: pm(300),
  flexDirection: "column",
},
xdw2py: {
  marginTop: pm(14),
  paddingTop: pm(14),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(14),
  backgroundColor: "#ffffff",
},
xdw2pz: {
  flex: 1,
  width: "100%",
  flexGrow: 1,
  paddingTop: pm(15),
  flexDirection: "column",
  paddingBottom: pm(15),
},
xdw2q0: {
  color: "#333333",
  fontSize: pm(14),
  textAlign: "center",
  lineHeight: pm(19),
  paddingTop: pm(13),
  paddingBottom: pm(13),
},
xdw2q1: {
  borderBottomWidth: pm(1),
  borderBottomColor: "#eeeeee",
  justifyContent: "center",
},
xdw2q2: {
  flexDirection: "row",
},
xdw2q3: {
  fontSize: pm(14),
  fontWeight: "600",
  lineHeight: pm(19),
},
xdw2q4: {
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
xdw2q5: {
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
xdw2q6: {
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
xdw2q7: {
  marginLeft: pm(14),
  flexDirection: "row",
},
xdw2q8: {
  width: pm(320),
  flexDirection: "column",
  paddingBottom: pm(29),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
},
xdw2q9: {
  flex: 1,
  zIndex: 10,
  alignItems: "flex-end",
  flexDirection: "row",
  justifyContent: "center",
},
xdw2qa: {
  flexGrow: 1,
  flexDirection: "column",
}
});
const slide = {"type":"175604","key":"c1756041","slug":null,"randomid":"id_2fdecf07a7a15f4d4a102983","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Modal1":{"ctx_map":{"mask":true,"value":false,"baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Text29":{"ctx_map":{"text":"9月"}},"Text30":{"ctx_map":{"text":"这是一个文本组件"}},"Text31":{"ctx_map":{"text":"克"}},"Text37":{"ctx_map":{"text":"本月平均进食"}},"Text48":{"ctx_map":{"text":"进食日志"}},"Text49":{"ctx_map":{"text":"这是一个文本组件"}},"Text50":{"ctx_map":{"text":"这是一个文本组件"}},"Text51":{"ctx_map":{"text":"这是一个文本组件"}},"Text52":{"ctx_map":{"text":""}},"Text53":{"ctx_map":{"text":"克"}},"Text54":{"ctx_map":{"text":"这是一个文本组件"}},"Text55":{"ctx_map":{"text":"确定"}},"Text56":{"ctx_map":{"text":"取消"}},"Text57":{"ctx_map":{"text":"月份选择"}},"View12":{"ctx_map":{}},"View15":{"ctx_map":{}},"View17":{"ctx_map":{}},"View27":{"ctx_map":{}},"View28":{"ctx_map":{}},"View29":{"ctx_map":{}},"View30":{"ctx_map":{}},"View43":{"ctx_map":{}},"View44":{"ctx_map":{}},"View52":{"ctx_map":{}},"View54":{"ctx_map":{}},"View57":{"ctx_map":{}},"View58":{"ctx_map":{}},"View60":{"ctx_map":{}},"View61":{"ctx_map":{}},"View62":{"ctx_map":{}},"View63":{"ctx_map":{}},"View64":{"ctx_map":{}},"View65":{"ctx_map":{}},"View66":{"ctx_map":{}},"View67":{"ctx_map":{}},"View68":{"ctx_map":{}},"View69":{"ctx_map":{}},"View70":{"ctx_map":{}},"View71":{"ctx_map":{}},"View72":{"ctx_map":{}},"View73":{"ctx_map":{}},"View74":{"ctx_map":{}},"Image10":{"ctx_map":{"fop":"e,50,50","src":"u/dev064/2023/03/15/vjmhca9ViGa5pyzs3fZ8Fo/SketchPng321b048d195d06be8e05a27d687c190e7863ce93705ba00308b2f655cb195387.png"}},"Image15":{"ctx_map":{"fop":"e,294,220","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image16":{"ctx_map":{"fop":"e,60,60","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image17":{"ctx_map":{"fop":"e,80,80","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image18":{"ctx_map":{"fop":"e,80,80","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image19":{"ctx_map":{"fop":"e,294,220","src":"u/dev064/2023/11/14/o8LPXZ3drNG6Rgq4g43BtL/05f83d1033d04edba1567bde5cb59a59_mergeImage.png"}},"Image20":{"ctx_map":{"fop":"e,60,60","src":"u/dev064/2023/11/14/dW56g5MceYCig8jynkAkGA/SketchPngf1073b26b9cb9c510029f1db1c4ca39efd9f08b63882000cfea59d7e8588993b1.png"}},"ViewIf5":{"ctx_map":{"value":true}},"Echarts1":{"ctx_map":{"options":{"xAxis":{"data":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],"type":"category","boundaryGap":false},"yAxis":{"type":"value"},"series":[{"data":[820,932,901,934,1290,1330,1320],"type":"line","areaStyle":{}}]}}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"date"}},"ViewFor6":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewFor7":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewIf14":{"ctx_map":{"value":true}},"ViewIf15":{"ctx_map":{"value":true}},"ViewIf16":{"ctx_map":{"value":true}},"ViewIf17":{"ctx_map":{"value":true}},"ViewIf18":{"ctx_map":{"value":true}},"ViewIf19":{"ctx_map":{"value":true}},"ViewIf20":{"ctx_map":{"value":true}},"ViewIf21":{"ctx_map":{"value":true}},"ViewIf22":{"ctx_map":{"value":true}},"DwappCloud2":{"ctx_map":{"bool1":true,"bool2":false,"text1":"更多数据","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"#ffffff00","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud3":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"PickerView1":{"ctx_map":{"range":[[{"label":"上午","value":"am"},{"label":"下午","value":"pm"}]],"value":[0]}},"ScrollView1":{"ctx_map":{"type":"list","scrollY":true,"showScrollbar":true}},"ScrollView3":{"ctx_map":{"type":"list","scrollX":true,"scrollY":false,"showScrollbar":false}},"NativeButton1":{"ctx_map":{"type":"button"}},"NativeButton2":{"ctx_map":{"type":"button"}},"LinearGradientView1":{"ctx_map":{}}}};
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
const pageGroupSlug = 'app_tongzhua-more_data';

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
      <LinearGradient style={[styles.xdw2qa, ({
  background: "linear-gradient(139deg, #DBF0FF 0%, #F8F8F8 32%, #F8F8F8 100%)"
})]} colors={ [
  "#DBF0FF",
  "#F8F8F8",
  "#F8F8F8",
] }>{!!(state.ready) /* ViewIf14 */ && (<><Xbenchc176286 /* DwappCloud2 */ isCuzBtn={ slide.components.DwappCloud2.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud2.ctx_map.bool2 } eventData={ slide.components.DwappCloud2.ctx_map.prop1 } eventData2={ slide.components.DwappCloud2.ctx_map.prop2 } title={ slide.components.DwappCloud2.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud2.ctx_map.text2 } confirmText={ slide.components.DwappCloud2.ctx_map.text3 } cancelText={ slide.components.DwappCloud2.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud2.ctx_map.color1 } confirmColor={ slide.components.DwappCloud2.ctx_map.color2 } cancelColor={ slide.components.DwappCloud2.ctx_map.color3 } backIcon={ slide.components.DwappCloud2.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud2.ctx_map.image2 } titleStyle={ slide.components.DwappCloud2.ctx_map.style1 } screenType={ slide.components.DwappCloud2.ctx_map.select1 } ></Xbenchc176286>
<View /* View62 */   style={styles.xdw2p6}><XbenchcScrollView /* ScrollView3 */ style={styles.xdw2p5} scrollX={ true } scrollY={ false } showScrollbar={ false } >{(state.pets).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor7' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor7 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><XbenchcView /* View63 */   viewStyle={styles.xdw2p4} onClick={getEvent('View63:onClick:func11:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}>{!!(state.select_pet.uuid !== bagForItem.uuid) /* ViewIf17 */ && (<><XbenchcView /* View68 */   viewStyle={styles.xdw2oy} onClick={getEvent('View68:onClick:func11:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image18 */ style={styles.xdw2ox} source={dwtools.qiniu(bagForItem.data.image, slide.components.Image18.ctx_map.fop)}  /></XbenchcView></>)}
{!!(state.select_pet.uuid === bagForItem.uuid) /* ViewIf16 */ && (<><View /* View64 */   style={styles.xdw2p3}><XbenchcView /* View66 */   viewStyle={styles.xdw2p0} onClick={getEvent('View66:onClick:func11:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><XbenchcView /* View67 */   viewStyle={styles.xdw2oz} onClick={getEvent('View67:onClick:func11:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image17 */ style={styles.xdw2ox} source={dwtools.qiniu(bagForItem.data.image, slide.components.Image17.ctx_map.fop)}  /></XbenchcView></XbenchcView>
<View /* View65 */   style={styles.xdw2p2}><Text /* Text54 */ style={styles.xdw2p1} >{bagForItem.data.name}</Text></View></View></>)}</XbenchcView></ViewForItem> })}</XbenchcScrollView></View>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw2pz} scrollY={ true } showScrollbar={ true } ><View /* View27 */   style={styles.xdw2pi}><View /* View28 */   style={styles.xdw2pg}><XbenchcView /* View29 */   viewStyle={styles.xdw2p9} onClick={getEvent('View29:onClick:func2:', {}, bagForKeyValue, bagForIndex)}><Text /* Text29 */ style={styles.xdw2p7} >{state.selectMonth.slice(5, 7) + "月"}</Text>
<XbenchcImage /* Image10 */ style={styles.xdw2p8} source={dwtools.qiniu(slide.components.Image10.ctx_map.src, slide.components.Image10.ctx_map.fop)}  /></XbenchcView>
<View /* View43 */   style={styles.xdw2pf}><View /* View30 */   style={styles.xdw2pc}><Text /* Text30 */ style={styles.xdw2pa} >{state.avg}</Text>
<Text /* Text31 */ style={styles.xdw2pb} >{slide.components.Text31.ctx_map.text}</Text></View>
<View /* View44 */   style={styles.xdw2pe}><Text /* Text37 */ style={styles.xdw2pd} >{slide.components.Text37.ctx_map.text}</Text></View></View></View>
{!!(state.showChart) /* ViewIf15 */ && (<><XbenchcEcharts /* Echarts1 */ style={styles.xdw2ph} options={state.option} /></>)}</View>
{!!(state.device_member) /* ViewIf5 */ && (<><View /* View17 */   style={styles.xdw2py}><Text /* Text48 */ style={styles.xdw2pj} >{slide.components.Text48.ctx_map.text}</Text>
<View /* View15 */   style={styles.xdw2px}>{(state.eat_items).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['date']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View57 */   style={styles.xdw2pm}><Text /* Text49 */ style={styles.xdw2pk} >{bagForItem.date}</Text>
<Text /* Text50 */ style={styles.xdw2pl} >{"星期" + bagForItem.weekday}</Text></View>
<View /* View54 */   style={styles.xdw2pw}>{(bagForItem.items).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor6' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor6 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><XbenchcView /* View12 */   viewStyle={styles.xdw2pv} onClick={getEvent('View12:onClick:func13:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><View /* View52 */   style={styles.xdw2po}>{!!(!!bagForItem.data.video_uuid__toone) /* ViewIf18 */ && (<><XbenchcImage /* Image15 */ style={styles.xdw2pn} source={dwtools.qiniu(bagForItem.data.video_uuid__toone.data.poster, slide.components.Image15.ctx_map.fop)}  /></>)}
{!!(!bagForItem.data.video_uuid__toone) /* ViewIf19 */ && (<><XbenchcImage /* Image19 */ style={styles.xdw2pn} source={dwtools.qiniu(slide.components.Image19.ctx_map.src, slide.components.Image19.ctx_map.fop)}  /></>)}</View>
{!!(!!bagForItem.data.video_uuid__toone) /* ViewIf22 */ && (<><View /* View58 */   style={styles.xdw2pq}><Text /* Text51 */ style={styles.xdw2pp} >{computeds.computed2({item: bagForItem}, state)}</Text></View></>)}
<View /* View60 */   style={styles.xdw2pu}><Text /* Text52 */ style={styles.xdw2pr} >{bagForItem.data.weight}</Text>
<Text /* Text53 */ style={styles.xdw2pr} >{slide.components.Text53.ctx_map.text}</Text>
<View /* View61 */   style={styles.xdw2pt}>{!!(!!bagForItem.data.pet_uuid__toone) /* ViewIf20 */ && (<><XbenchcImage /* Image16 */ style={styles.xdw2ps} source={dwtools.qiniu(bagForItem.data.pet_uuid__toone.data.image, slide.components.Image16.ctx_map.fop)}  /></>)}
{!!(!bagForItem.data.pet_uuid__toone) /* ViewIf21 */ && (<><XbenchcImage /* Image20 */ style={styles.xdw2ps} source={dwtools.qiniu(slide.components.Image20.ctx_map.src, slide.components.Image20.ctx_map.fop)}  /></>)}</View></View></XbenchcView></ViewForItem> })}</View></ViewForItem> })}</View></View></>)}</XbenchcScrollView></>)}
<XbenchcModal /* Modal1 */ rootStyle={styles.xdw2q9} value={ state.monthPop } mask={ true } maskClosable={ true } ><View /* View69 */   style={styles.xdw2q8}><View /* View74 */   style={styles.xdw2q1}><Text /* Text57 */ style={styles.xdw2q0} >{slide.components.Text57.ctx_map.text}</Text></View>
<View /* View73 */   style={styles.xdw2q2}><XbenchcPickerView /* PickerView1 */ value={ state.monthValue } range={ state.monthPickerRange }  onChange={getEvent('PickerView1:input:func6:', {}, bagForKeyValue, bagForIndex)}></XbenchcPickerView></View>
<View /* View70 */   style={styles.xdw2q7}><View /* View72 */   style={styles.xdw2q5}><XbenchcButton /* NativeButton2 */ viewStyle={styles.xdw2q4} onClick={getEvent('NativeButton2:onClick:func15:', {}, bagForKeyValue, bagForIndex)}><Text /* Text56 */ style={styles.xdw2q3} >{slide.components.Text56.ctx_map.text}</Text></XbenchcButton></View>
<View /* View71 */   style={styles.xdw2q6}><XbenchcButton /* NativeButton1 */ viewStyle={styles.xdw2q4} onClick={getEvent('NativeButton1:onClick:func10:', {}, bagForKeyValue, bagForIndex)}><Text /* Text55 */ style={styles.xdw2q3} >{slide.components.Text55.ctx_map.text}</Text></XbenchcButton></View></View></View></XbenchcModal>
<Xbenchc275104 /* DwappCloud3 */ valueStyle={ slide.components.DwappCloud3.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud3.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud3.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud3:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104></LinearGradient>
    </ErrorBoundary>
  )
}
