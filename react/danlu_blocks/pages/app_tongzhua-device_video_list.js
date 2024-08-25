
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
import Xbenchc274506 from '../components/Xbenchc274506'
import XbenchcModal from '../../xbench/xbenchc/components/XbenchcModal'
import Xbenchc275104 from '../components/Xbenchc275104'
import Xbenchc168613 from '../components/Xbenchc168613'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

let action335lock = false
let action340lock = false
let action12lock = false
let modalInstance = (null)
const action281 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action2 = state.items = ([])
  const action38 = state.member = (null)
  const action46 = state.timeLine = ([])
  const action65 = state.currentMonth = (null)
  const action74 = state.timeLineOpen = (false)
  const action118 = state.date = (null)
  const action115 = state.datePop = (false)
  const action116 = state.dateValue = ([])
  const action117 = state.datePickerRange = ([])
  const action144 = state.ready = (false)
  const action234 = state.triggerRefresh = (false)
  const action255 = state.device_member = (null)
  const action256 = state.device = (null)
  const action308 = state.remarks = ([])
  const action309 = state.today = (null)
  const action315 = state.aggs = (null)
  /* action347: 列表加载 */
  const action348 = state.offset = (0)
  const action350 = state.limit = (15)
  const action349 = state.reachBottom = (false)
  const action351 = state.refresherTriggered = (false)
  const action369 = state.reachBottomFlag = (false)
  return state
}

const action3 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action368 = await Promise.all([
    (async () => {
      const action9 = await store.dispatch("func1", {})
      return action9
    })(),
    (async () => {
      const action367 = await store.dispatch("func78", {})
      return action367
    })(),
  ])

  const action145 = store.commit('setState', {["state.ready"]: true})
  const action45 = await store.dispatch("func21", {})
  const action327 = await Promise.all([
    (async () => {
      const action8 = await store.dispatch("func2", {})
      return action8
    })(),
    (async () => {
      const action326 = await store.dispatch("func26", {})
      return action326
    })(),
  ])

  const action370 = store.commit('setState', {["state.reachBottomFlag"]: true})
  const action328 = await store.dispatch("func23", {})
}

const action265 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action266 = modalInstance = (event.data)
  const action267 = console.log('[getModalInstance#action267] 打印(modalInstance)', modalInstance)
}

const action4 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action128 = await store.dispatch("func17", {})
  const action119 = await store.dispatch("func14", {})
}

const action361 = actions['func78'] = function (store, event) {
  const state = store.state
  const action362 = dw.getGlobalLocals("allDeviceMember")
  const action363 = ((store, event) => {
return action362.filter( tmp => tmp.data.device_uuid === dw.query.uuid)
})(store, event)
  let currentItem = (action363[0])
  const action364 = currentItem
  const action365 = store.commit('setState', {["state.device"]: currentItem.data.device_uuid__toone, ["state.device_member"]: currentItem})
}

const action257 = actions['func21'] = async function (store, event) {
  const state = store.state
  const action258 = await dw.app.run("device.user_get", {"uuid": dw.query.uuid})
  
        if ((action258.status) === ("error")) {
          const action259message = (action258.message || "操作错误！")
          const action259title = ("提示")
          action259message && dw.alert(action259title, action259message)
          return {}
        }
        
  const action260 = store.commit('setState', {["state.device"]: action258.object, ["state.device_member"]: action258.device_member})
  const action264 = await store.dispatch("func22", {})
}

const action316 = actions['func26'] = async function (store, event) {
  const state = store.state
  const action317 = await dw.app.run("video.week_agg", {"device_member_uuid": state.device_member.uuid})
  const action318 = store.commit('setState', {["state.aggs"]: action317.aggs.agg1})
  const action319 = console.log('[func26#action319] 打印(视频数据函数state.aggs)的返回值', state.aggs)
  let action320
  

}

/* action345: 列表 */
const action5 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action168 = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace('Z', '')
  let now = (action168)
  const action169 = now
  const action146 = (() => {
          const a = (state.date).split(/[-T:.Z]/).filter(i => !!i).map(i => parseInt(i))
          const n = new Date(
            a[0] + (0),
            a[1] - 1 + (0),
            a[2] + (1),
            a[3] + (0),
            a[4] + (0),
            a[5] + (0),
            (parseFloat('0.' + a[6]) * 1000) + (0)
          )
          return new Date(+n + 8 * 3600 * 1000).toISOString().replace('Z', '')
        })()
  let end_time = (action146)
  const action147 = end_time
  let data__start_time__range = ([state.date, end_time])
  const action242 = data__start_time__range
  if (state.currentHour) {
    let start = (`${state.date.slice(0, 10)}T${String(state.currentHour - 1).padStart(2, "0")}:00:00.000`)
    const action246 = start
    let end = (`${state.date.slice(0, 10)}T${String(state.currentHour - 1).padStart(2, "0")}:59:59.999`)
    const action247 = end
    const action248 = data__start_time__range = ([start, end])
  }
  const action250 = console.log('[func2#action250] 打印(data__start_time__range)的返回值', data__start_time__range)
  const action139 = await dw.app.run("video.list", {"limit": state.limit, "offset": state.offset, "filters": {/**/  data__device_member_uuid: state.device_member.uuid,/**/  data__state__in: ["finish"],/**/  data__type: 'interest',/**/  data__start_time__range: data__start_time__range,/**/}, "order_by": [], "collect_status": true})
  let objects = (action139.objects)
  const action170 = objects
  if ((action139.meta.offset) === (0)) {
    const action355 = store.commit('setState', {["state.items"]: objects})
  } else {
    const action357 = store.commit('setState', {["state.items__uconcat"]: ({field: 'id', list: objects})})
  }
  if ((objects.length) < (state.limit)) {
    const action360 = store.commit('setState', {["state.reachBottom"]: true})
  }
}

const action330 = actions['func27'] = async function (store, event) {
  const state = store.state
  const action331 = store.commit('setState', {["state.offset"]: 0, ["state.reachBottom"]: false})
  const action333 = await store.dispatch("func2", {})
}

const action334 = actions['handleScrollToLower'] = async function (store, event) {
  const state = store.state
  const action335 = await (async () => {
  
      if (action335lock) return true
      action335lock = true
      try {
    
        if (!!(state.reachBottom && state.reachBottomFlag) === (true)) {
          const action336message = ("")
          const action336title = ("提示")
          action336message && dw.alert(action336title, action336message)
          return {}
        }
        
    const action337 = store.commit('setState', {["state.offset"]: state.offset + state.limit})
    const action338 = await store.dispatch("func2", {})
  
      } catch (e) {
        throw e
      } finally {
        action335lock = false
      }
      
  })()
}

const action339 = actions['handlePullRefresh'] = async function (store, event) {
  const state = store.state
  const action340 = await (async () => {
  
      if (action340lock) return true
      action340lock = true
      try {
    const action341 = store.commit('setState', {["state.refresherTriggered"]: true})
    const action342 = await store.dispatch("func2", {})
    await new Promise((resolve, reject) => setTimeout(resolve, 150))
    const action344 = store.commit('setState', {["state.refresherTriggered"]: false})
  
      } catch (e) {
        throw e
      } finally {
        action340lock = false
      }
      
  })()
}

/* action298: 动作 */
const action10 = actions['func3'] = async function (store, event) {
  const state = store.state
  const action26 = console.log('[func3#action26] event', event)
  /* action11: 确保用户体验,收藏后不刷新页面,收到结果后在前端手动改变收藏 */
  const action12 = await (async () => {
  
      if (action12lock) return true
      action12lock = true
      try {
    const action13 = await dw.app.run("video.add_delete_video", {"video_uuid": event.context.eventData})
    
        if ((action13.status) === ("error")) {
          const action15message = (action13.message || "操作错误！")
          const action15title = ("提示")
          action15message && dw.alert(action15title, action15message)
          return {}
        }
        
    let is_collect = (action13.object.data.is_active)
    const action253 = is_collect
    const action254 = store.commit('setState', {[`state.items[${event.context.eventData2}].data.is_collect`]: is_collect})
  
      } catch (e) {
        throw e
      } finally {
        action12lock = false
      }
      
  })()
}

const action152 = actions['func18'] = function (store, event) {
  const state = store.state
  let slug = (event.context.eventData)
  const action153 = slug
  const action154 = dw.app.goToPappUrl("collect_video", {}, {redirectTo: false})
}

const action62 = actions['func11'] = async function (store, event) {
  const state = store.state
  let item = (event.context.eventData)
  const action69 = item
  if (item.got_video) {
    const action64 = store.commit('setState', {["state.currentHour"]: item.hour})
  }
  const action241 = await store.dispatch("func2", {})
}

const action75 = actions['func12'] = function (store, event) {
  const state = store.state
  const action76 = store.commit('setState', {["state.timeLineOpen"]: !state.timeLineOpen})
}

const action212 = actions['func20'] = async function (store, event) {
  const state = store.state
  let item = (event.context.eventData2)
  const action219 = item
  if (item.data.state === 'finish') {
    let slug = ("eat_video_player")
    const action214 = slug
    const action215 = dw.app.goToPappUrl(slug, {"uuid": item.uuid}, {redirectTo: false})
  } else if (item.data.state === 'to_comment') {
    let msg = ("请确认是否提交生成此视频")
    const action270 = msg
    const action271 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(msg)
}
else{
  return null
}
})(store, event)
    if (!action271) {
      return event
    }
    const action228 = await dw.app.run("comment.aicheck_all_frame", {"video_uuid": item.uuid})
    
        if ((action228.status) === ("error")) {
          const action229message = (action228.message || "操作错误！")
          const action229title = ("提示")
          action229message && dw.alert(action229title, action229message)
          return {}
        }
        
    let message = ("提交成功")
    const action276 = message
    const action277 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    const action231 = await store.dispatch("func2", {})
  } else if (['uploading', 'commenting'].includes(item.data.state)) {
    let message = ("视频生成中")
    const action279 = message
    const action280 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    return event
  }
}

/* action78: 日期 */
const action79 = actions['func13'] = function (store, event) {
  const state = store.state
  const action87 = store.commit('setState', {["state.datePop"]: true})
}

const action88 = actions['func14'] = function (store, event) {
  const state = store.state
  const action89 = ((store, event) => {
function generateOptions() {
  const options = [
    [],
    [],
    [],
  ];

  // 生成年份选项
  const currentYear = new Date().getFullYear();
  for (let i = 2023; i <= currentYear; i++) {
    options[0].push({ label: i.toString(), value: i });
  }

  // 生成月份选项
  for (let i = 1; i <= 12; i++) {
    options[1].push({ label: i.toString().padStart(2, '0'), value: i });
  }

  // 生成日期选项
  for (let i = 1; i <= 31; i++) {
    options[2].push({ label: i.toString().padStart(2, '0'), value: i });
  }

  return options;
}

const options = generateOptions();

return options
})(store, event)
  const action90 = store.commit('setState', {["state.datePickerRange"]: action89})
  /* action207: 更新默认选项 */
  let yearIndex = (action89[0].findIndex(x=>x.label === state.date.slice(0, 4)))
  const action208 = yearIndex
  let monthIndex = (action89[1].findIndex(x=>x.label === state.date.slice(5, 7)))
  const action209 = monthIndex
  let dateIndex = (action89[2].findIndex(x=>x.label === state.date.slice(8, 10)))
  const action210 = dateIndex
  const action211 = store.commit('setState', {["state.dateValue"]: [yearIndex, monthIndex, dateIndex]})
}

const action91 = actions['func5'] = async function (store, event) {
  const state = store.state
  const action92 = store.commit('setState', {["state.dateValue"]: event.data.detail.value})
  const action93 = await store.dispatch("func16", {})
}

const action94 = actions['func6'] = function (store, event) {
  const state = store.state
  const action95 = store.commit('setState', {["state.datePop"]: false})
}

const action301 = actions['func25'] = async function (store, event) {
  const state = store.state
  const action302 = await store.dispatch("func6", {})
  if (event.data.iso_str > state.today.slice(0, 10)) {
    return event
  }
  const action306 = store.commit('setState', {["state.date"]: event.data.iso_str + "T00:00:00.000"})
  const action307 = await store.dispatch("func2", {})
}

const action106 = actions['func16'] = function (store, event) {
  const state = store.state
  const action120 = JSON.parse(JSON.stringify(state.datePickerRange))
  let datePickerRange = (action120)
  const action107 = datePickerRange
  let daysOptions = (datePickerRange[2])
  const action108 = daysOptions
  let year = (state.dateValue[0])
  const action109 = year
  let month = (state.dateValue[1]+1)
  const action110 = month
  const action111 = ((store, event) => {
function updateDays(year, month, daysOptions) {
  const daysInMonth = new Date(year, month, 0).getDate();
  const days = [];

  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ label: i.toString().padStart(2, '0'), value: i });
  }

  // 更新日期选项数组
  daysOptions.splice(0, daysOptions.length, ...days);
}

updateDays(year,month,daysOptions)
})(store, event)
  if (daysOptions.length !== state.datePickerRange[2].length) {
    const action114 = store.commit('setState', {["state.datePickerRange"]: datePickerRange})
  }
}

const action124 = actions['func17'] = function (store, event) {
  const state = store.state
  const action126now = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace('Z', '')
  const action126 = action126now.split('T')[0] + 'T00:00:00.000'
  const action125 = store.commit('setState', {["state.date"]: action126, ["state.today"]: action126, ["state.currentMonth"]: action126.slice(0, 7)})
}

const action262 = actions['func22'] = async function (store, event) {
  const state = store.state
  const action263 = await dw.app.run("video.multi_update_check_state", {"is_check": true, "device_member_uuid": state.device_member.uuid})
}

const action284 = actions['func23'] = function (store, event) {
  const state = store.state
  const action285 = ((store, event) => {
function getFirstAndLastDayOfMonth(isoDateString){
  const date = new Date(isoDateString);
  const year = date.getFullYear();
  const month = date.getMonth();

  // 获取当前月份的第一天
  const firstDay = new Date( + new Date(year, month, 1) + 8 * 60 * 60 * 1000);
  const firstDayString = firstDay.toISOString().slice(0, 23)

  // 获取下个月的第一天，然后减去一天，即为当前月份的最后一天
  const lastDay = new Date(year, month + 1, 1);
  const lastDayOfMonth = new Date(lastDay - 86400000 + 8 * 60 * 60 * 1000) // 减去一天的毫秒数
  const lastDayString = lastDayOfMonth.toISOString().slice(0, 23)

  return {
    firstDay: firstDayString,
    lastDay: lastDayString,
  };
}
return getFirstAndLastDayOfMonth(state.currentMonth + "-01T00:00:00.000")
})(store, event)
  const action313 = console.log('[func23#action313] 打印(action285)的返回值', action285)
  let firstDay = (action285.firstDay)
  const action286 = firstDay
  let lastDay = (action285.lastDay)
  const action287 = lastDay
  let currentDate = (action285.firstDay)
  const action288 = currentDate
  const action289 = console.log('[func23#action289] 打印(currentDate)的返回值', currentDate)
  let remarks = ([])
  const action290 = remarks
  const action291 = ((store, event) => {
console.log('进入', currentDate.slice(0, 10))
console.log('进入', lastDay.slice(0, 10))
while(currentDate.slice(0, 10) <= lastDay.slice(0, 10)){
  console.log('进入灰色')
  // 日期如果大于当前日期，则置灰色
  if(currentDate.slice(0, 10) > state.today.slice(0, 10)){
    remarks.push({
      date: currentDate,
      high_light: true,
      style: {
        "color": "#CCCCCC",
        "width": parseFloat(dw.getPlatformPx(30)),
        "height": parseFloat(dw.getPlatformPx(30)),
        "fontSize": parseFloat(dw.getPlatformPx(12)),
        "lineHeight": dw.getPlatformPx(30),
        "textAlign": 'center'
      }
    })
  }

  // 日期如果等于今天则显示黄色背景

  else if(currentDate.slice(0, 10) === state.today.slice(0, 10)){
    console.log('进入黄色背景')
    console.log(state.today)
    console.log(currentDate)
    remarks.push({
      date: currentDate,
      high_light: true,
      style: {
        "borderRadius": parseFloat(dw.getPlatformPx(7)),
        "backgroundColor": "#FFBA69",
        "color": "white",
        "width": parseFloat(dw.getPlatformPx(30)),
        "height": parseFloat(dw.getPlatformPx(30)),
        "fontSize": parseFloat(dw.getPlatformPx(12)),
        "lineHeight": dw.getPlatformPx(30),
        "textAlign": 'center'
      }
    })
    console.log('进入黄色背景后')
  }

  // 日期如果在7天内，则显示黄色字体
  else if(new Date(state.today.slice(0, 10)) - new Date(currentDate.slice(0, 10)) <= 6 * 24 * 60 * 60 * 1000){
    console.log('进入黄色字体')
    console.log("打印currentDate",currentDate)
    if(state.aggs[currentDate.slice(0, 10)] && state.aggs[currentDate.slice(0, 10)] > 0){
      console.log(state.aggs)
      remarks.push({
        date: currentDate,
        high_light: true,
        style: {
          "color": "#FFBA69",
          "width": parseFloat(dw.getPlatformPx(30)),
          "height": parseFloat(dw.getPlatformPx(30)),
          "fontSize": parseFloat(dw.getPlatformPx(12)),
          "lineHeight": dw.getPlatformPx(30),
          "textAlign": 'center'
        }
      })
    }
  }

  currentDate = (() => {
    const a = currentDate
      .split(/[-T:.Z]/)
      .filter(i => !!i)
      .map(i => parseInt(i))
    const n = new Date(
      a[0] + 0,
      a[1] - 1 + 0,
      a[2] + 1,
      a[3] + 0,
      a[4] + 0,
      a[5] + 0,
      parseFloat('0.' + a[6]) * 1000 + 0
    )
    
    return new Date(+n + 8 * 3600 * 1000).toISOString().replace('Z', '')
  })()
}


})(store, event)
  const action292 = console.log('[func23#action292] 打印(remark)的返回值', remarks)
  const action293 = store.commit('setState', {["state.remarks"]: remarks})
  const action294 = undefined
}

const action295 = actions['func24'] = async function (store, event) {
  const state = store.state
  const action314 = console.log('[func24#action314] 打印event.data.firstDay.slice(0,7)', event.data.firstDay.slice(0,7))
  const action296 = store.commit('setState', {["state.currentMonth"]: event.data.firstDay.slice(0,7)})
  const action297 = await store.dispatch("func23", {})
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

var actions = {};

var modalInstance = null;
var action281 = modalInstance;
/* action345: 列表 */
/* action298: 动作 */
/* action78: 日期 */
var action51 = actions['computed1'] = function (event, state) {
  var action52 = function (event) {
    function timeSince(date) {
      var seconds = Math.floor((new Date() - new Date(date)) / 1000);

      var interval = Math.floor(seconds / 31536000);

      if (interval >= 1) {
        return interval + "年前";
      }
      interval = Math.floor(seconds / 2592000);
      if (interval >= 1) {
        return interval + "个月前";
      }
      interval = Math.floor(seconds / 86400);
      if (interval >= 1) {
        return interval + "天前";
      }
      interval = Math.floor(seconds / 3600);
      if (interval >= 1) {
        return interval + "小时前";
      }
      interval = Math.floor(seconds / 60);
      if (interval >= 1) {
        return interval + "分钟前";
      }
      return Math.floor(seconds) + "秒前";
    }
    return timeSince(event.time);
  }(event);
  return action52;
};
// COMPUTED_ACTION_META:computed1 {"deps":[]}

var action70 = actions['computed2'] = function (event, state) {
  var index = event.index;
  var action71 = index;
  var action72 = function (event) {
    return String(index - 1).padStart(2, "0") + ":00-" + String(index).padStart(2, "0") + ":00";
  }(event);
  return action72;
};
// COMPUTED_ACTION_META:computed2 {"deps":[]}

var action129 = actions['computed3'] = function (event, state) {
  var today = new Date(+new Date() + 8 * 60 * 60 * 1000).toISOString().slice(0, 10);
  var action136 = today;
  if (event.date.slice(0, 10) === today) {
    return "今天";
  }
  var month = event.date.slice(5, 7);
  var action131 = month;
  var date = event.date.slice(8, 10);
  var action130 = date;
  return month + "\u6708" + date + "\u65E5";
};
// COMPUTED_ACTION_META:computed3 {"deps":[]}

var action141 = actions['computed4'] = function (event, state) {
  var action143 = function (event) {
    function formatTime(seconds) {
      // 计算小时、分钟、秒数
      var hours = Math.floor(seconds / 3600);
      var minutes = Math.floor((seconds - hours * 3600) / 60);
      var remainingSeconds = seconds - hours * 3600 - minutes * 60;

      // 格式化时间
      var formattedTime = "";
      if (hours > 0) {
        formattedTime += hours.toString().padStart(2, "0") + ":";
      }
      formattedTime += minutes.toString().padStart(2, "0") + ":";
      formattedTime += remainingSeconds.toString().padStart(2, "0");

      return formattedTime;
    }
    return formatTime(event.duration);
  }(event);
  return action143;
};
// COMPUTED_ACTION_META:computed4 {"deps":[]}

var action232 = actions['computed5'] = function (event, state) {
  return { "to_comment": "待提交", "commenting": "生成中", "uploading": "生成中" }[event.item.data.state];
};
// COMPUTED_ACTION_META:computed5 {"deps":[]}

var action299 = actions['computed6'] = function (event, state) {
  return state.currentMonth !== state.today.slice(0, 7);
};
// COMPUTED_ACTION_META:computed6 {"deps":["currentMonth","today"]}

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdw3r8: {
  width: pm(20),
  height: pm(20),
  marginRight: pm(3),
},
xdw3r9: {
  color: "#181818",
  fontSize: pm(14),
  fontWeight: "500",
  lineHeight: pm(20),
},
xdw3ra: {
  alignItems: "center",
  borderBottomWidth: pm(0),
  borderBottomColor: "#000",
  flexDirection: "row",
},
xdw3rb: {
  color: "#181818",
  fontSize: pm(14),
  fontWeight: "500",
  lineHeight: pm(20),
  marginLeft: pm(3),
},
xdw3rc: {
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
},
xdw3rd: {
  alignItems: "center",
  borderBottomWidth: pm(0),
  borderBottomColor: "#E3E3E3",
  flexDirection: "row",
  paddingBottom: pm(8),
  justifyContent: "space-between",
},
xdw3re: {
  width: pm(320),
  height: pm(33),
  flexGrow: 0,
  position: "relative",
  marginTop: pm(5),
  paddingTop: 0,
  paddingLeft: pm(13),
  borderBottomWidth: pm(0.5),
  borderBottomColor: "#E3E3E3",
  paddingRight: pm(13),
  flexDirection: "column",
  paddingBottom: 0,
  justifyContent: "center",
},
xdw3rf: {
  color: "#181818",
  fontSize: pm(13),
  fontWeight: "500",
  lineHeight: pm(20),
},
xdw3rg: {
  color: "#181818",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(18),
  marginRight: pm(10),
  flexDirection: "row",
},
xdw3rh: {
  color: "#181818",
  fontSize: pm(13),
  fontWeight: "500",
  lineHeight: pm(20),
  paddingBottom: pm(10),
},
xdw3ri: {
  width: pm(180),
  height: pm(126),
  borderTopLeftRadius: pm(8),
  borderTopRightRadius: pm(8),
  borderBottomLeftRadius: pm(8),
  borderBottomRightRadius: pm(8),
},
xdw3rj: {
  color: "#ffffff",
  fontSize: pm(11),
  lineHeight: pm(14),
},
xdw3rk: {
  left: pm(7),
  width: pm(38),
  bottom: pm(7),
  height: pm(19),
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#00000033",
  borderTopLeftRadius: pm(9),
  borderTopRightRadius: pm(9),
  borderBottomLeftRadius: pm(9),
  borderBottomRightRadius: pm(9),
},
xdw3rl: {
  color: "#ffffff",
  fontSize: pm(9),
  lineHeight: pm(14),
},
xdw3rm: {
  top: pm(8),
  right: pm(8),
  width: pm(38),
  height: pm(19),
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#00000033",
  borderTopLeftRadius: pm(9),
  borderTopRightRadius: pm(9),
  borderBottomLeftRadius: pm(9),
  borderBottomRightRadius: pm(9),
},
xdw3rn: {
  width: pm(20),
  height: pm(20),
},
xdw3ro: {
  right: pm(7),
  bottom: pm(7),
  position: "absolute",
},
xdw3rp: {
  width: pm(180),
  position: "relative",
  flexDirection: "column",
},
xdw3rq: {
  flexDirection: "column",
},
xdw3rr: {
  width: pm(220),
  flexDirection: "row",
},
xdw3rs: {
  width: pm(15),
  height: pm(15),
},
xdw3rt: {
  color: "#AAAAAA",
  fontSize: pm(11),
  lineHeight: pm(16),
  marginLeft: pm(2),
},
xdw3ru: {
  right: pm(8),
  bottom: pm(8),
  alignItems: "flex-end",
  flexDirection: "row",
  paddingBottom: pm(5),
  justifyContent: "center",
},
xdw3rv: {
  paddingTop: pm(14),
  paddingLeft: pm(17),
  marginBottom: pm(7),
  paddingRight: pm(17),
  flexDirection: "row",
  paddingBottom: pm(14),
  justifyContent: "space-between",
  backgroundColor: "#ffffff",
},
xdw3rw: {
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  flexDirection: "column",
  paddingBottom: 0,
},
xdw3rx: {
  color: "#666666",
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw3ry: {
  alignItems: "center",
  paddingTop: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
  justifyContent: "center",
},
xdw3rz: {
  width: pm(146),
  height: pm(93),
},
xdw3s1: {
  color: "#AAAAAA",
  fontSize: pm(12),
  marginTop: pm(17),
  lineHeight: pm(17),
},
xdw3s2: {
  marginTop: pm(212),
  alignItems: "center",
  flexDirection: "column",
},
xdw3s3: {
  flex: 1,
  width: "100%",
  flexGrow: 1,
  overflow: "scroll",
  flexShrink: 1,
  backgroundColor: "#F6F6F6",
},
xdw3s4: {
  marginTop: pm(23),
  flexDirection: "row",
},
xdw3s5: {
  width: pm(300),
  height: pm(42),
},
xdw3s6: {
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
xdw3s7: {
  flexDirection: "row",
},
xdw3s8: {
  width: pm(320),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(29),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
},
xdw3s9: {
  flex: 1,
  zIndex: 10,
  alignItems: "flex-end",
  flexDirection: "row",
  justifyContent: "center",
}
});
const slide = {"type":"274215","key":"c2742151","slug":null,"randomid":"id_99de88f81d7c11f5103186b7","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View1":{"ctx_map":{}},"View5":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,400,280","src":"u/dev065/2023/03/01/TvSfiJz3YbGjLsSGBiYiMY/108272ba70c0435598414fa0d18405ae_mergeImage.png"}},"Image2":{"ctx_map":{"fop":"e,1460,930","src":"u/dev065/2023/03/02/sjdPJMDYXdSxcFkXNX7KvX/JIKUVAZX81K8VLRAWUC.png","buildToLocal":true}},"Image3":{"ctx_map":{"fop":"e,72,72","src":"u/dev066/2024/02/28/6TiqNG7SQRDg2YeTsmL5qj/编组3x1.png"}},"Image4":{"ctx_map":{"fop":"e,54,54","src":"u/dev066/2024/02/28/Waii4GH9VCjGi5j8ypWcUb/星形3x1.png"}},"Image6":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/28/Go2eBRfCV8Cg2zP3mLt96V/消息icon备份233x.png"}},"Image7":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/28/kJ9QottQZJRjHkxipcuCMF/时间ic3x.png"}},"Image8":{"ctx_map":{"fop":"e,54,54","src":"u/dev066/2024/02/28/XkDyo2LZo84NR9TtoDXZMR/星形3x.png"}},"Image9":{"ctx_map":{"fop":"e,1053,144","src":"u/dev066/2024/02/28/XE3iqRTtSf5v2thfJKroC3/分组117.png"}},"Modal1":{"ctx_map":{"mask":true,"value":false,"position":"center","baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Modal2":{"ctx_map":{"mask":true,"value":false,"position":"center","baseIndex":2000,"maskClosable":true,"destroyOnClose":false,"appendKeyboardHeight":true}},"Text19":{"ctx_map":{"text":"这是一个文本组件"}},"Text20":{"ctx_map":{"text":"这是一个文本组件"}},"Text21":{"ctx_map":{"text":"暂无精彩视频,等等再来看吧~"}},"Text26":{"ctx_map":{"text":"保存"}},"Text27":{"ctx_map":{"text":"取消"}},"Text28":{"ctx_map":{"text":"日期选择"}},"Text38":{"ctx_map":{"text":"这是一个文本组件"}},"Text39":{"ctx_map":{"text":""}},"Text40":{"ctx_map":{"text":"收藏","numberOfLines":1}},"Text41":{"ctx_map":{"text":"收藏"}},"Text42":{"ctx_map":{"text":"今天"}},"Text43":{"ctx_map":{"text":"保存"}},"Text44":{"ctx_map":{"text":"取消"}},"Text45":{"ctx_map":{"text":"喵～，已经到底了"}},"View14":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"View31":{"ctx_map":{}},"View32":{"ctx_map":{}},"View33":{"ctx_map":{}},"View34":{"ctx_map":{}},"View35":{"ctx_map":{}},"View36":{"ctx_map":{}},"View38":{"ctx_map":{}},"View39":{"ctx_map":{}},"View54":{"ctx_map":{}},"View57":{"ctx_map":{}},"View58":{"ctx_map":{}},"View59":{"ctx_map":{}},"View60":{"ctx_map":{}},"View61":{"ctx_map":{}},"View62":{"ctx_map":{}},"View63":{"ctx_map":{}},"View65":{"ctx_map":{}},"View66":{"ctx_map":{}},"View67":{"ctx_map":{}},"View68":{"ctx_map":{}},"View69":{"ctx_map":{}},"View70":{"ctx_map":{}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"Include1":{"ctx_map":{"includeConfig":{"fileKey":"dwapp_mobile.bench","pagetemplateId":274161}}},"ViewFor3":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewIf11":{"ctx_map":{"value":true}},"ViewIf23":{"ctx_map":{"value":true}},"ViewIf24":{"ctx_map":{"value":true}},"ViewIf25":{"ctx_map":{"value":true}},"ViewIf26":{"ctx_map":{"value":true}},"DwappCloud1":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"DwappCloud2":{"ctx_map":{"bool1":true,"bool2":false,"text1":"精彩视频","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"#ffffff","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev066/2024/02/24/YwzRjKqTNgXeXoU3CW2GdS/btn_back1.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud3":{"ctx_map":{"color1":""}},"DwappCloud4":{"ctx_map":{"bool2":false,"bool3":false,"bool4":true,"date1":"2021-09-01","date2":"2021-07-01","date3":"2021-07-03","prop1":[{"date":"2021-07-01","text":["吃饭"],"high_light":true},{"date":"2021-07-02","text":["喝水","睡觉"],"high_light":false},{"date":"2021-07-03","text":["打豆豆"],"color":"white","high_light":true}],"style3":null,"style7":null,"style8":null,"style9":null,"style10":null,"style12":null,"style13":null,"numberb1":41}},"PickerView1":{"ctx_map":{"range":[[{"label":"上午","value":"am"},{"label":"下午","value":"pm"}]],"value":[0]}},"PickerView2":{"ctx_map":{"range":[[{"label":"上午","value":"am"},{"label":"下午","value":"pm"}]],"value":[0]}},"ScrollView1":{"ctx_map":{"type":"list","bounces":true,"scrollX":false,"scrollY":true,"showScrollbar":true,"extraStyleKeys":[],"refresherEnabled":true,"refresherBackground":"#F8F8F8"}},"NativeButton1":{"ctx_map":{"type":"button"}},"NativeButton2":{"ctx_map":{"type":"button"}},"NativeButton3":{"ctx_map":{"type":"button"}},"NativeButton4":{"ctx_map":{"type":"button"}}}};
slide.components.DwappCloud1.ctx_map.valueStyle = {
  flexGrow: 1,
  flexBasis: "0%",
  flexShrink: 1,
  paddingTop: pm(12),
  paddingLeft: pm(30),
  borderBottomWidth: pm(0.5),
  borderBottomColor: "#eeeeee",
  paddingRight: pm(30),
  flexDirection: "column",
  paddingBottom: pm(12),
};
slide.components.DwappCloud1.ctx_map.containerStyle = {
  marginBottom: pm(18),
  flexDirection: "column",
};
slide.components.DwappCloud1.ctx_map.valueInputStyle = {
  color: "#333333",
  flexDirection: "column",
};
slide.components.DwappCloud2.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(16),
  fontWeight: "500",
  lineHeight: pm(24),
  flexDirection: "column",
};
slide.components.DwappCloud4.ctx_map.style3 = {
  width: pm(30),
  height: pm(30),
  fontSize: pm(12),
  textAlign: "center",
  lineHeight: pm(30),
  flexDirection: "column",
};
slide.components.DwappCloud4.ctx_map.style7 = {
  color: "#666666",
  fontSize: pm(12),
  textAlign: "center",
  flexDirection: "column",
};
slide.components.DwappCloud4.ctx_map.style8 = {
  top: "50%",
  left: "50%",
  color: "rgba(206, 193, 193, 0.363)",
  zIndex: 0,
  fontSize: pm(60),
  position: "absolute",
  transform: [{translateX: undefined}, {translateY: undefined}],
  flexDirection: "column",
};
slide.components.DwappCloud4.ctx_map.style9 = {
  fontSize: pm(16),
  textAlign: "center",
  paddingTop: pm(5),
  paddingLeft: pm(5),
  paddingRight: pm(5),
  flexDirection: "column",
  paddingBottom: pm(5),
};
slide.components.DwappCloud4.ctx_map.style10 = {
  fontSize: pm(12),
  textAlign: "center",
  flexDirection: "column",
};
slide.components.DwappCloud4.ctx_map.style12 = {
  width: pm(300),
  flexDirection: "column",
};
slide.components.DwappCloud4.ctx_map.style13 = {
  color: "#93bee600",
  width: pm(30),
  height: pm(30),
  fontSize: pm(12),
  textAlign: "center",
  lineHeight: pm(30),
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-device_video_list';

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
      {!!(state.ready) /* ViewIf11 */ && (<><Xbenchc176286 /* DwappCloud2 */ isCuzBtn={ slide.components.DwappCloud2.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud2.ctx_map.bool2 } eventData={ slide.components.DwappCloud2.ctx_map.prop1 } eventData2={ slide.components.DwappCloud2.ctx_map.prop2 } title={ slide.components.DwappCloud2.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud2.ctx_map.text2 } confirmText={ slide.components.DwappCloud2.ctx_map.text3 } cancelText={ slide.components.DwappCloud2.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud2.ctx_map.color1 } confirmColor={ slide.components.DwappCloud2.ctx_map.color2 } cancelColor={ slide.components.DwappCloud2.ctx_map.color3 } backIcon={ slide.components.DwappCloud2.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud2.ctx_map.image2 } titleStyle={ slide.components.DwappCloud2.ctx_map.style1 } screenType={ slide.components.DwappCloud2.ctx_map.select1 } ></Xbenchc176286>
<View /* View1 */   style={styles.xdw3re}><View /* View5 */   style={styles.xdw3rd}><XbenchcView /* View62 */   viewStyle={styles.xdw3ra} onClick={getEvent('View62:onClick:func13:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image7 */ style={styles.xdw3r8} source={dwtools.qiniu(slide.components.Image7.ctx_map.src, slide.components.Image7.ctx_map.fop)}  />
<Text /* Text42 */ style={styles.xdw3r9} >{computeds.computed3({date: state.date}, state)}</Text></XbenchcView>
<View /* View60 */   style={styles.xdw3rc}><XbenchcView /* View61 */   viewStyle={styles.xdw3rc} onClick={getEvent('View61:onClick:func18:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image6 */ style={styles.xdw3r8} source={dwtools.qiniu(slide.components.Image6.ctx_map.src, slide.components.Image6.ctx_map.fop)}  />
<Text /* Text41 */ style={styles.xdw3rb} >{slide.components.Text41.ctx_map.text}</Text></XbenchcView></View></View></View>
<XbenchcScrollView /* ScrollView1 */ style={[styles.xdw3s3, ({
  backgroundColor: state.items.length ? '#F6F6F6' : "#FFFFFF"
})]} refresherEnabled={ true } refresherTriggered={ state.refresherTriggered } refresherBackground={ "#F8F8F8" } scrollX={ false } scrollY={ true } showScrollbar={ true } bounces={ true }  onRefresherRefresh={getEvent('ScrollView1:onRefresherRefresh:handlePullRefresh:', {}, bagForKeyValue, bagForIndex)} onScrollToLower={getEvent('ScrollView1:onScrollToLower:handleScrollToLower:', {}, bagForKeyValue, bagForIndex)}>{!!(state.items.length > 0) /* ViewIf3 */ && (<><View /* View38 */   style={styles.xdw3rw}>{(state.items).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor3' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor3 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><XbenchcView /* View39 */   viewStyle={styles.xdw3rv} onClick={getEvent('View39:onClick:func20:', {eventData: "eat_video_player", eventData2: bagForItem}, bagForKeyValue, bagForIndex)}><View /* View63 */   style={styles.xdw3rr}><View /* View57 */   style={styles.xdw3rg}><Text /* Text19 */ style={styles.xdw3rf} >{bagForItem.data.start_time.slice(11, 16)}</Text></View>
<View /* View59 */   style={styles.xdw3rq}><Text /* Text39 */ style={styles.xdw3rh} >{bagForItem.data.summary}</Text>
<View /* View14 */   style={styles.xdw3rp}><XbenchcImage /* Image1 */ style={styles.xdw3ri} source={dwtools.qiniu(bagForItem.data.poster, slide.components.Image1.ctx_map.fop)}  />
<View /* View16 */   style={styles.xdw3rk}><Text /* Text20 */ style={styles.xdw3rj} >{computeds.computed4({duration: bagForItem.data.duration}, state)}</Text></View>
{!!(["to_comment", "commenting","uploading"].includes(bagForItem.data.state)) /* ViewIf23 */ && (<><View /* View54 */   style={styles.xdw3rm}><Text /* Text38 */ style={styles.xdw3rl} >{computeds.computed5({item: bagForItem}, state)}</Text></View></>)}
<View /* View17 */   style={styles.xdw3ro}><XbenchcImage /* Image3 */ style={styles.xdw3rn} source={dwtools.qiniu(slide.components.Image3.ctx_map.src, slide.components.Image3.ctx_map.fop)}  /></View></View></View></View>
<XbenchcView /* View58 */   viewStyle={styles.xdw3ru} catchClick={getEvent('View58:catchClick:func3:', {eventData: bagForItem.uuid, eventData2: bagForIndex}, bagForKeyValue, bagForIndex)}>{!!(bagForItem.data.is_collect) /* ViewIf25 */ && (<><XbenchcImage /* Image4 */ style={styles.xdw3rs} source={dwtools.qiniu(slide.components.Image4.ctx_map.src, slide.components.Image4.ctx_map.fop)}  /></>)}
{!!(!bagForItem.data.is_collect) /* ViewIf24 */ && (<><XbenchcImage /* Image8 */ style={styles.xdw3rs} source={dwtools.qiniu(slide.components.Image8.ctx_map.src, slide.components.Image8.ctx_map.fop)}  /></>)}
<Text /* Text40 */ style={styles.xdw3rt} numberOfLines={1}>{slide.components.Text40.ctx_map.text}</Text></XbenchcView></XbenchcView></ViewForItem> })}</View></>)}
{!!(state.items.length > 0 && state.reachBottom) /* ViewIf26 */ && (<><View /* View70 */   style={styles.xdw3ry}><Text /* Text45 */ style={styles.xdw3rx} >{slide.components.Text45.ctx_map.text}</Text></View></>)}
{!!(!state.items.length) /* ViewIf4 */ && (<><View /* View18 */   style={styles.xdw3s2}><XbenchcImage /* Image2 */ style={styles.xdw3rz} source={dwtools.getLocalResource('xdw3s0_lthar3zn')}  />
<Text /* Text21 */ style={styles.xdw3s1} >{slide.components.Text21.ctx_map.text}</Text></View></>)}</XbenchcScrollView>
<XbenchcModal /* Modal2 */ rootStyle={styles.xdw3s9} value={ state.datePop } mask={ true } maskClosable={ true } appendKeyboardHeight={ true }  onValueChange={getEvent('Modal2:onValueChange:func6:', {}, bagForKeyValue, bagForIndex)}><View /* View65 */   style={styles.xdw3s8}><View /* View69 */   style={styles.xdw3s4}><Xbenchc274506 /* DwappCloud4 */ showBg={ slide.components.DwappCloud4.ctx_map.bool2 } allowPre={ true } allowNext={ computeds.computed6({}, state) } maxDate={ slide.components.DwappCloud4.ctx_map.date1 } minDate={ slide.components.DwappCloud4.ctx_map.date2 } value={ state.date } remarks={ state.remarks } textStyle={ slide.components.DwappCloud4.ctx_map.style3 } remarkTextStyle={ slide.components.DwappCloud4.ctx_map.style7 } bgTextStyle={ slide.components.DwappCloud4.ctx_map.style8 } headerMonthStyle={ slide.components.DwappCloud4.ctx_map.style9 } headerWeekStyle={ slide.components.DwappCloud4.ctx_map.style10 } containerStyle={ slide.components.DwappCloud4.ctx_map.style12 } disableTextStyle={ slide.components.DwappCloud4.ctx_map.style13 } cellHeight={ slide.components.DwappCloud4.ctx_map.numberb1 }  onClick={getEvent('DwappCloud4:onClick:func25:', {}, bagForKeyValue, bagForIndex)} panelChange={getEvent('DwappCloud4:panelChange:func24:', {}, bagForKeyValue, bagForIndex)}></Xbenchc274506></View>
<View /* View66 */   style={styles.xdw3s7}><XbenchcView /* View68 */   viewStyle={styles.xdw3s6} onClick={getEvent('View68:onClick:func6:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image9 */ style={styles.xdw3s5} source={dwtools.qiniu(slide.components.Image9.ctx_map.src, slide.components.Image9.ctx_map.fop)}  /></XbenchcView></View></View></XbenchcModal>
<Xbenchc275104 /* DwappCloud1 */ valueStyle={ slide.components.DwappCloud1.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud1.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud1.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud1:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104>
<Xbenchc168613 /* DwappCloud3 */ backgroundColor={ slide.components.DwappCloud3.ctx_map.color1 } ></Xbenchc168613></>)}
    </ErrorBoundary>
  )
}
