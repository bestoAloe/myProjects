
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcInput from '../../xbench/xbenchc/components/XbenchcInput'
import XbenchcPickerView from '../../xbench/xbenchc/components/XbenchcPickerView'
import XbenchcButton from '../../xbench/xbenchc/components/XbenchcButton'
import XbenchcModal from '../../xbench/xbenchc/components/XbenchcModal'
import ViewForItem from '../../xbench/components/ViewForItem'
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

let action112lock = false
let getMonthRangeOfYear = ((year) => {/**/  let month = 12;/**/  let startMonth = 1;/**/  let monthRange = [];/**/  const now = new Date();/**/  if (year === now.getFullYear()) {/**/    startMonth = now.getMonth()+1/**/  };/**/  for (let i = startMonth; i <= month; i++) {/**/    monthRange.push({label:i.toString().padStart(2,0), value:i})/**/  };/**/  return  monthRange/**/})
const action36 = getMonthRangeOfYear
let getDateRangeOfYear = ((year,month) => {/**/  let dateRange = [];/**/  const date = new Date(year, month,0).getDate();/**/  for (let i=1;i<=date;i++) {/**/    dateRange.push({label:i.toString().padStart(2,0), value:i})/**/  };/**/  return dateRange/**/})
const action37 = getDateRangeOfYear
let modalInstance = (null)
const action236 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action2 = state.formData = ({/**/  category_uuid:undefined,/**/  start_date:undefined,/**/  start_time:"",/**/  cycle:"none",/**/  notify:"0",/**/  remark:"",/**/  device_member_uuid:undefined,/**/  pet_uuids:[]/**/})
  const action133 = state.items = ([])
  const action143 = state.selectPets = ([])
  const action13 = state.uuid = (null)
  const action31 = state.datePickerRange = ([])
  const action45 = state.dateValue = ([0,0,0])
  const action59 = state.timePickerRange = ([])
  const action55 = state.timeValue = ([0,0])
  const action61 = state.periodPickerRange = ([])
  const action109 = state.periodMap = ({/**/  "none":"不重复",/**/  "day":"每天重复",/**/  "week":"每周重复",/**/  "month":"每月重复",/**/  "three_month":"每三月重复",/**/})
  const action71 = state.noticePickerRange = ([])
  const action110 = state.noticeMap = ({/**/  "0":"不提前",/**/  "1":"提前一天",/**/  "3":"提前三天",/**/  "7":"提前七天",/**/})
  const action87 = state.currentKey = (null)
  const action57 = state.ready = (false)
  /* action17: 弹出框 */
  const action18 = state.showPopup = ({})
  const action19 = state.showPopup.date = (false)
  const action20 = state.showPopup.time = (false)
  const action21 = state.showPopup.period = (false)
  const action22 = state.showPopup.notice = (false)
  const action23 = state.showPopup.pet = (false)
  const action122 = state.showPopup.selectPet = (false)
  const action197 = state.data_exist = (false)
  const action217 = state.error = ("")
  return state
}

const action3 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action72 = dw.query
  let uuid = (dw.query.uuid)
  const action73 = uuid
  const action186 = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace('Z', '')
  const action185 = store.commit('setState', {["state.formData.start_date"]: action186.slice(0, 10)})
  let action83
  

  if (uuid) {
    const action77 = store.commit('setState', {["state.formData.category_uuid"]: uuid})
    const action41 = await store.dispatch("func5", {})
  } else {
    let message = ("加载异常,返回上一页")
    const action241 = message
    const action242 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(message)
}
else{
  return null
}
})(store, event)
    const action80 = await dw.navigateBack({delta: 1})
  }
  const action56 = store.commit('setState', {["state.ready"]: true})
}

const action40 = actions['func5'] = async function (store, event) {
  const state = store.state
  const action66 = await Promise.all([
    (async () => {
      const action39 = await store.dispatch("func4", {})
      return action39
    })(),
    (async () => {
      const action58 = await store.dispatch("func7", {})
      return action58
    })(),
    (async () => {
      const action65 = await store.dispatch("func8", {})
      return action65
    })(),
    (async () => {
      const action70 = await store.dispatch("func9", {})
      return action70
    })(),
    (async () => {
      const action134 = await store.dispatch("func13", {})
      return action134
    })(),
  ])

}

const action24 = actions['func2'] = function (store, event) {
  const state = store.state
  let key = (event.context.eventData)
  const action28 = key
  const action184 = console.log('[func2#action184] 打印(key)的返回值', key)
  if (key === 'date') {
    const action182 = ((store, event) => {
const year = state.formData.start_date.slice(0, 4)
const month = state.formData.start_date.slice(5, 7)
const date = state.formData.start_date.slice(8, 10)
const yearIndex = state.datePickerRange[0].findIndex(x=>x.value === parseInt(year))
const monthIndex = state.datePickerRange[1].findIndex(x=>x.value === parseInt(month))
const dateIndex = state.datePickerRange[2].findIndex(x=>x.value === parseInt(date))
return [
  yearIndex,
  monthIndex,
  dateIndex,
]
})(store, event)
    const action183 = console.log('[func2#action183] 打印(action182)的返回值', action182)
    const action179 = store.commit('setState', {["state.dateValue"]: action182})
  }
  const action26 = store.commit('setState', {[`state.showPopup[${key}]`]: true, ["state.currentKey"]: key})
}

const action25 = actions['func3'] = function (store, event) {
  const state = store.state
  const action29 = store.commit('setState', {["state.showPopup.pet"]: false, ["state.showPopup.date"]: false, ["state.showPopup.period"]: false, ["state.showPopup.time"]: false, ["state.showPopup.notice"]: false, ["state.showPopup.selectPet"]: false})
}

const action135 = actions['func14'] = function (store, event) {
  const state = store.state
  let uuid = (event.context.eventData)
  const action136 = uuid
  if (state.formData.pet_uuids.includes(uuid)) {
    const action141 = store.commit('setState', {["state.formData.pet_uuids"]: state.formData.pet_uuids.filter(x => x !== uuid)})
  } else {
    const action142 = store.commit('setState', {["state.formData.pet_uuids"]: [...state.formData.pet_uuids, uuid]})
  }
}

const action162 = actions['func16'] = async function (store, event) {
  const state = store.state
  const action163 = store.commit('setState', {["state.selectPets"]: state.items.filter(x => state.formData.pet_uuids.includes(x.uuid))})
  const action164 = await store.dispatch("func15", {})
}

const action147 = actions['func15'] = function (store, event) {
  const state = store.state
  const action148 = store.commit('setState', {["state.showPopup.selectPet"]: false})
}

const action81 = actions['func10'] = async function (store, event) {
  const state = store.state
  const action117 = await store.dispatch("func3", {})
  if ((state.currentKey) === ("date")) {
    let dateValue = (state.dateValue)
    const action149 = dateValue
    let year = (state.datePickerRange[0][dateValue[0]].value)
    const action93 = year
    const action102 = console.log('[func10#action102] 打印(year)的返回值', year)
    let month = (Math.max(state.datePickerRange[1][dateValue[1]].value-1,1))
    const action94 = month
    const action103 = console.log('[func10#action103] 打印(month)的返回值', month)
    let date = (state.datePickerRange[2][dateValue[2]].value)
    const action95 = date
    const action104 = console.log('[func10#action104] 打印(date)的返回值', date)
    const action90 = store.commit('setState', {["state.formData.start_date"]: new Date(+new Date(year, month, date)+(1000*60*60*8)).toISOString().replace("Z","")})
    const action172 = await store.dispatch("func7", {})
  } else if ((state.currentKey) === ("time")) {
    let timeValue = (state.timeValue)
    const action161 = timeValue
    let hour = (state.timePickerRange[0][timeValue[0]].label)
    const action96 = hour
    let minute = (state.timePickerRange[1][timeValue[1]].label)
    const action97 = minute
    const action92 = store.commit('setState', {["state.formData.start_time"]: hour + ":" + minute})
  } else if ((state.currentKey) === ("period")) {
    if (event.context.eventData) {
      const action106 = store.commit('setState', {["state.formData.cycle"]: event.context.eventData})
    }
  } else if ((state.currentKey) === ("notice")) {
    if (event.context.eventData) {
      const action108 = store.commit('setState', {["state.formData.notify"]: event.context.eventData})
    }
  }
}

const action124 = actions['func13'] = async function (store, event) {
  const state = store.state
  const action125 = await dw.app.run("member.get_create_member", {})
  let member = (action125.object)
  const action195 = member
  if (action125) {
    const action128 = await dw.app.run("pet.list", {"limit": 100, "offset": 0, "filters": {data__member_uuid: member.uuid}})
    const action132 = store.commit('setState', {["state.items"]: action128.objects})
  }
}

/* action48: 日期picker */
const action30 = actions['func4'] = function (store, event) {
  const state = store.state
  const action32 = ((store, event) => {
const res = {}
const now = new Date()

res.yearRange = [
  {label:now.getFullYear(), value:now.getFullYear()},
  {label:now.getFullYear()+1, value:now.getFullYear()+1},
]

res.monthRange = getMonthRangeOfYear(now.getFullYear())
res.dateRange = getDateRangeOfYear(now.getFullYear(), now.getMonth()+1)

return res
})(store, event)
  const action42 = console.log('[func4#action42] 打印(action32)的返回值', action32)
  const action38 = store.commit('setState', {["state.datePickerRange"]: [action32.yearRange, action32.monthRange, action32.dateRange]})
}

const action43 = actions['func6'] = function (store, event) {
  const state = store.state
  const action187 = store.commit('setState', {["state.dateValue"]: event.data.detail.value})
  /* action188: COMMIT */
  let monthRange = (getMonthRangeOfYear(state.datePickerRange[0][state.dateValue[0]].value))
  const action150 = monthRange
  if (monthRange.length !== state.datePickerRange[1].length) {
    const action155 = store.commit('setState', {["state.datePickerRange[1]"]: monthRange})
  }
  let dateRange = (getDateRangeOfYear(state.datePickerRange[0][state.dateValue[0]].value,state.datePickerRange[1][state.dateValue[1]].value))
  const action151 = dateRange
  if (dateRange.length !== state.datePickerRange[2].length) {
    const action46 = store.commit('setState', {["state.datePickerRange[2]"]: dateRange})
  }
}

const action51 = actions['func7'] = function (store, event) {
  const state = store.state
  const action166 = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace('Z', '')
  let now = (action166)
  const action165 = now
  let hour = (-1)
  const action171 = hour
  const action174 = console.log('[func7#action174] state.formData.start_date && state.formData.start_date.slice(0, 10) === now.slice(0, 10)', state.formData.start_date && state.formData.start_date.slice(0, 10) === now.slice(0, 10))
  if (state.formData.start_date && state.formData.start_date.slice(0, 10) === now.slice(0, 10)) {
    const action175 = hour = (parseInt(now.slice(11, 13)))
    const action173 = console.log('[func7#action173] 打印(hour)的返回值', hour)
  }
  const action52 = ((store, event) => {
const res = {}

res.hourRange = new Array(24).fill(0).map((x,i) => ({
  label:i.toString().padStart(2,0),
  value:i
})).filter(x=>x.value >= hour)

res.minuteRange = new Array(60).fill(0).map((x,i) => ({
  label:i.toString().padStart(2,0),
  value:i
}))

return res
})(store, event)
  const action53 = console.log('[func7#action53] 打印(action52)的返回值', action52)
  const action54 = store.commit('setState', {["state.timePickerRange"]: [action52.hourRange, action52.minuteRange]})
}

/* action62: 周期picker */
const action63 = actions['func8'] = function (store, event) {
  const state = store.state
  const action64 = store.commit('setState', {["state.periodPickerRange"]: [/**/  {/**/    "id": "none",/**/    "name": "不重复"/**/  },/**/  {/**/    "id": "day",/**/    "name": "每天重复"/**/  },/**/  {/**/    "id": "week",/**/    "name": "每周重复"/**/  },/**/  {/**/    "id": "month",/**/    "name": "每月重复"/**/  },/**/  {/**/    "id": "three_month",/**/    "name": "每三月重复"/**/  }/**/]})
}

/* action68: 提前提醒picker */
const action67 = actions['func9'] = function (store, event) {
  const state = store.state
  const action69 = store.commit('setState', {["state.noticePickerRange"]: [/**/  {/**/    "id": "0",/**/    "name": "不提前"/**/  },/**/  {/**/    "id": "1",/**/    "name": "提前一天"/**/  },/**/  {/**/    "id": "3",/**/    "name": "提前三天"/**/  },/**/  {/**/    "id": "7",/**/    "name": "提前七天"/**/  }/**/]})
}

const action111 = actions['func12'] = async function (store, event) {
  const state = store.state
  const action112 = await (async () => {
  
      if (action112lock) return true
      action112lock = true
      try {
    const action219 = await store.dispatch("func20", {})
    if (action219 === "false") {
      return "提交失败"
    }
    const action113 = await dw.app.run("memorandum.create", {"formData": state.formData})
    const action196 = console.log('[func12#action196] 打印(action113)的返回值', action113)
    let message = ("创建成功!")
    const action244 = message
    const action245 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    const action116 = dw.app.goToPappUrl("memorandum_list", {}, {redirectTo: false})
  
      } catch (e) {
        throw e
      } finally {
        action112lock = false
      }
      
  })()
}

const action189 = actions['func17'] = function (store, event) {
  const state = store.state
  const action190 = store.commit('setState', {[`state.formData[${event.context.eventData}]`]: event.data.detail.value})
}

const action191 = actions['func18'] = function (store, event) {
  const state = store.state
  const action193 = console.log('[func18#action193] event.data', event.data)
  const action192 = store.commit('setState', {["state.timeValue"]: event.data.detail.value})
}

const action198 = actions['func19'] = function (store, event) {
  const state = store.state
  const action199 = store.commit('setState', {["state.data_exist"]: false})
}

const action200 = actions['func20'] = function (store, event) {
  const state = store.state
  let key = (undefined)
  const action207 = key
  let error_list = ({/**/  "start_time":"计划时间",/**/  "cycle":"重复周期",/**/  "notify":"提前提醒",/**/})
  const action209 = error_list
  const action206 = ((store, event) => {
for (let k in state.formData) {
   // 在这里编写你的代码
   if(!state.formData[k] && error_list.hasOwnProperty(k)){
     key = k;
     break;
   }
}
})(store, event)
  const action227 = console.log('[func20#action227] key##########', key)
  if (!!key) {
    const action215 = store.commit('setState', {["state.error"]: error_list[key] + "没有填!", ["state.data_exist"]: true})
    return "false"
  }
  return "true"
}

const action228 = actions['func21'] = function (store, event) {
  const state = store.state
  const action229 = dw.app.goToPappUrl("edit_petinfo", {}, {redirectTo: true})
}

const action237 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action238 = modalInstance = (event.data)
  const action239 = console.log('[getModalInstance#action239] 打印(modalInstance)', modalInstance)
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
xdw2ef: {
  flexGrow: 1,
  fontSize: pm(12),
  flexShrink: 1,
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw2eg: {
  color: "#AAAAAA",
  fontSize: pm(12),
  lineHeight: pm(17),
  marginRight: pm(10),
},
xdw2eh: {
  color: "#666666",
  fontSize: pm(12),
  lineHeight: pm(17),
  marginRight: pm(10),
},
xdw2ei: {
  width: pm(12),
  height: pm(12),
},
xdw2ek: {
  flexWrap: "nowrap",
  alignItems: "center",
  paddingTop: pm(13),
  borderBottomWidth: pm(1),
  borderBottomColor: "#eeeeee",
  paddingRight: pm(17),
  flexDirection: "row",
  paddingBottom: pm(13),
  justifyContent: "flex-start",
},
xdw2el: {
  flexWrap: "nowrap",
  alignItems: "center",
  paddingTop: pm(13),
  paddingRight: pm(17),
  flexDirection: "row",
  paddingBottom: pm(13),
  justifyContent: "flex-start",
},
xdw2em: {
  marginTop: pm(10),
  paddingLeft: pm(17),
  flexDirection: "column",
  backgroundColor: "#ffffff",
},
xdw2en: {
  width: pm(48),
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw2eo: {
  height: pm(32),
  flexGrow: 1,
  fontSize: pm(12),
  borderTopWidth: pm(0),
  borderTopColor: "#ddd",
  textAlign: "right",
  borderLeftWidth: pm(0),
  borderLeftColor: "#ddd",
  flexShrink: 1,
  paddingTop: pm(4),
  borderRightWidth: pm(0),
  borderRightColor: "#ddd",
  paddingLeft: pm(4),
  borderBottomWidth: pm(0),
  borderBottomColor: "#ddd",
  paddingRight: pm(4),
  paddingBottom: pm(4),
},
xdw2ep: {
  flexWrap: "nowrap",
  marginTop: pm(10),
  alignItems: "center",
  paddingTop: pm(7),
  paddingLeft: pm(17),
  marginBottom: pm(10),
  paddingRight: pm(17),
  flexDirection: "row",
  paddingBottom: pm(7),
  justifyContent: "flex-start",
  backgroundColor: "#ffffff",
},
xdw2eq: {
  color: "#333333",
  fontSize: pm(14),
  textAlign: "center",
  lineHeight: pm(19),
  paddingTop: pm(13),
  paddingBottom: pm(13),
},
xdw2er: {
  borderBottomWidth: pm(1),
  borderBottomColor: "#eeeeee",
  justifyContent: "center",
},
xdw2es: {
  flexDirection: "row",
},
xdw2et: {
  fontSize: pm(14),
  fontWeight: "600",
  lineHeight: pm(19),
},
xdw2eu: {
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
xdw2ev: {
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
xdw2ew: {
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
xdw2ex: {
  marginLeft: pm(14),
  flexDirection: "row",
},
xdw2ey: {
  width: pm(320),
  flexDirection: "column",
  paddingBottom: pm(29),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
},
xdw2ez: {
  flex: 1,
  zIndex: 10,
  alignItems: "flex-end",
  flexDirection: "row",
  justifyContent: "center",
},
xdw2f0: {
  fontSize: pm(12),
  lineHeight: pm(38),
},
xdw2f1: {
  width: pm(15),
  height: pm(15),
  marginLeft: "auto",
},
xdw2f3: {
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
xdw2f4: {
  height: pm(43),
  alignItems: "center",
  paddingLeft: pm(17),
  paddingRight: pm(17),
  flexDirection: "row",
},
xdw2f5: {
  paddingTop: pm(14),
  flexDirection: "column",
  paddingBottom: pm(14),
},
xdw2f6: {
  width: pm(37),
  height: pm(37),
  borderTopLeftRadius: pm(999),
  borderTopRightRadius: pm(999),
  borderBottomLeftRadius: pm(999),
  borderBottomRightRadius: pm(999),
},
xdw2f7: {
  color: "#666666",
  fontSize: pm(9),
  marginTop: pm(9),
  lineHeight: pm(14),
},
xdw2f8: {
  alignItems: "center",
  marginRight: pm(14),
  flexDirection: "column",
  justifyContent: "center",
},
xdw2f9: {
  width: pm(47),
  height: pm(47),
},
xdw2fb: {
  height: pm(20),
},
xdw2fc: {
  flexWrap: "nowrap",
  overflow: "scroll",
  flexDirection: "row",
},
xdw2fd: {
  width: pm(60),
  height: pm(60),
},
xdw2ff: {
  color: "#666666",
  fontSize: pm(9),
  lineHeight: pm(14),
},
xdw2fg: {
  flexGrow: 1,
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "flex-end",
},
xdw2fh: {
  marginTop: pm(28),
  marginLeft: pm(17),
  marginRight: pm(17),
  marginBottom: pm(17),
  flexDirection: "row",
  justifyContent: "flex-start",
},
xdw2fi: {
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
xdw2fj: {
  width: pm(300),
  height: pm(38),
  marginTop: pm(34),
  alignItems: "center",
  marginLeft: "auto",
  marginRight: "auto",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "rgba(255, 218, 103, 1)",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw2fk: {
  flexGrow: 1,
  borderTopWidth: pm(1),
  borderTopColor: "#eeeeee",
  flexShrink: 1,
  flexDirection: "column",
  backgroundColor: "#f8f8f8",
},
xdw2fl: {
  flexGrow: 0,
  flexShrink: 0,
  borderBottomWidth: pm(1),
  borderBottomColor: "#eeeeee",
  justifyContent: "center",
},
xdw2fm: {
  width: pm(32),
  height: pm(32),
  marginRight: pm(7),
  borderTopLeftRadius: pm(999),
  borderTopRightRadius: pm(999),
  borderBottomLeftRadius: pm(999),
  borderBottomRightRadius: pm(999),
},
xdw2fn: {
  color: "#b3b3b3",
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw2fo: {
  color: "rgba(255, 218, 103, 1)",
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw2fp: {
  flexDirection: "column",
},
xdw2fq: {
  height: pm(200),
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
},
xdw2fr: {
  flex: 1,
  flexGrow: 1,
  minHeight: pm(200),
  flexShrink: 1,
  paddingTop: pm(9),
  flexDirection: "column",
  paddingBottom: pm(9),
},
xdw2fs: {
  width: pm(120),
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
xdw2ft: {
  width: pm(120),
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
xdw2fu: {
  marginLeft: pm(8),
  marginBottom: pm(10),
  flexDirection: "row",
},
xdw2fv: {
  width: pm(292),
  height: pm(320),
  flexGrow: 1,
  flexShrink: 1,
  marginLeft: pm(14),
  marginRight: pm(14),
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(9),
  borderTopRightRadius: pm(9),
  borderBottomLeftRadius: pm(9),
  borderBottomRightRadius: pm(9),
},
xdw2fw: {
  flex: 1,
  width: "100%",
  zIndex: 10,
  flexDirection: "column",
  justifyContent: "center",
},
xdw2fx: {
  color: "#181818",
  fontSize: pm(12),
  marginTop: pm(21),
  textAlign: "center",
  fontFamily: "inherit",
  fontWeight: "500",
  lineHeight: pm(17),
  marginBottom: pm(21),
},
xdw2fy: {
  paddingLeft: pm(11),
  paddingRight: pm(11),
  flexDirection: "column",
},
xdw2fz: {
  color: "#FFBC65",
  fontSize: pm(12),
  marginTop: pm(10),
  textAlign: "center",
  fontWeight: "400",
  lineHeight: pm(17),
  marginBottom: pm(12),
},
xdw2g0: {
  backgroundColor: "#f5f5f5",
},
xdw2g1: {
  height: pm(38),
  borderTopWidth: pm(0.4),
  borderTopColor: "#d1d1d1",
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw2g2: {
  width: pm(224),
  marginTop: pm(281),
  marginLeft: pm(48),
  marginRight: pm(48),
  marginBottom: pm(301),
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw2g3: {
  flex: 1,
  zIndex: 10,
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
}
});
const slide = {"type":"171298","key":"c1712981","slug":null,"randomid":"id_6203584ae88f1f2d516cd55b","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":"备注"}},"Text2":{"ctx_map":{"text":"计划日期"}},"Text3":{"ctx_map":{"text":"计划时间"}},"Text4":{"ctx_map":{"text":"重复周期"}},"Text5":{"ctx_map":{"text":"提前提醒"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Modal1":{"ctx_map":{"mask":true,"value":false,"baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Modal2":{"ctx_map":{"mask":true,"value":false,"baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Modal3":{"ctx_map":{"mask":true,"value":false,"baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Modal5":{"ctx_map":{"mask":true,"value":false,"baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Modal6":{"ctx_map":{"mask":true,"value":false,"baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Modal7":{"ctx_map":{"mask":true,"value":false,"baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Modal8":{"ctx_map":{"mask":true,"value":false,"position":"center","baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Text14":{"ctx_map":{"text":"关联宠物"}},"Text15":{"ctx_map":{"text":"请选择提醒日期"}},"Text16":{"ctx_map":{"text":"请选择提醒时间"}},"Text17":{"ctx_map":{"text":"请选择提醒周期"}},"Text18":{"ctx_map":{"text":"请选择"}},"Text19":{"ctx_map":{"text":"请关联您的宠物"}},"Text20":{"ctx_map":{"text":"保存"}},"Text21":{"ctx_map":{"text":"取消"}},"Text22":{"ctx_map":{"text":"计划日期"}},"Text30":{"ctx_map":{"text":"请选择提醒时间"}},"Text31":{"ctx_map":{"text":"请选择提醒周期"}},"Text32":{"ctx_map":{"text":"请选择"}},"Text33":{"ctx_map":{"text":"保存"}},"Text36":{"ctx_map":{"text":"这是一个文本组件"}},"Text37":{"ctx_map":{"text":"选择关联宠物"}},"Text38":{"ctx_map":{"text":"保存"}},"Text41":{"ctx_map":{"text":"请关联您的宠物"}},"Text42":{"ctx_map":{"text":"保存"}},"Text43":{"ctx_map":{"text":"取消"}},"Text51":{"ctx_map":{"text":"计划时间"}},"Text64":{"ctx_map":{"text":"保存"}},"Text65":{"ctx_map":{"text":"取消"}},"Text66":{"ctx_map":{"text":"请先关联宠物"}},"Text67":{"ctx_map":{"text":"这是一个文本组件"}},"Text68":{"ctx_map":{"text":"关联宠物"}},"Text75":{"ctx_map":{"text":"保存"}},"Text76":{"ctx_map":{"text":"取消"}},"Text80":{"ctx_map":{"text":"这是一个文本组件"}},"Text81":{"ctx_map":{"text":"提前提醒"}},"Text86":{"ctx_map":{"text":"保存"}},"Text87":{"ctx_map":{"text":"取消"}},"Text93":{"ctx_map":{"text":"这是一个文本组件"}},"Text94":{"ctx_map":{"text":"重复周期"}},"Text95":{"ctx_map":{"text":"保存"}},"Text96":{"ctx_map":{"text":"取消"}},"Text98":{"ctx_map":{"text":"提示内容"}},"Text99":{"ctx_map":{"text":"确认","numberOfLines":1}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View29":{"ctx_map":{}},"View33":{"ctx_map":{}},"View34":{"ctx_map":{}},"View35":{"ctx_map":{}},"View36":{"ctx_map":{}},"View37":{"ctx_map":{}},"View38":{"ctx_map":{}},"View43":{"ctx_map":{}},"View44":{"ctx_map":{}},"View45":{"ctx_map":{}},"View46":{"ctx_map":{}},"View62":{"ctx_map":{}},"View63":{"ctx_map":{}},"View89":{"ctx_map":{}},"View90":{"ctx_map":{}},"View91":{"ctx_map":{}},"View92":{"ctx_map":{}},"View93":{"ctx_map":{}},"View94":{"ctx_map":{}},"View95":{"ctx_map":{}},"View96":{"ctx_map":{}},"View97":{"ctx_map":{}},"View98":{"ctx_map":{}},"View99":{"ctx_map":{}},"Image11":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/03/03/knMwvdQvGjFDCX5mQneu8R/SketchPng8141b19c4766ab5e73849b84c0a48779747796c199c154adbfcea8c703d6cee7.png","buildToLocal":true}},"Image12":{"ctx_map":{"fop":"e,300,300","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg","buildToLocal":false}},"Image25":{"ctx_map":{"fop":"e,300,300","src":"u/dev070/2023/03/03/LiSNruhM352uDutgCm9xxB/编组172x.png","buildToLocal":true}},"Image26":{"ctx_map":{"fop":"e,120,120","src":"u/dev070/2023/03/07/Kp5MZs3LgUFYEhJZJyviE2/新建项目.png","buildToLocal":true}},"Image27":{"ctx_map":{"fop":"e,300,300","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg","buildToLocal":false}},"Image33":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/03/03/knMwvdQvGjFDCX5mQneu8R/SketchPng8141b19c4766ab5e73849b84c0a48779747796c199c154adbfcea8c703d6cee7.png","buildToLocal":true}},"Image39":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/03/03/knMwvdQvGjFDCX5mQneu8R/SketchPng8141b19c4766ab5e73849b84c0a48779747796c199c154adbfcea8c703d6cee7.png","buildToLocal":true}},"Image40":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png","buildToLocal":true}},"Image41":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png","buildToLocal":true}},"Image42":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png","buildToLocal":true}},"Image43":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png","buildToLocal":true}},"Image44":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png","buildToLocal":true}},"Text100":{"ctx_map":{"text":"前往创建~","numberOfLines":1}},"Text101":{"ctx_map":{"text":"当前未创建宠物信息，可","numberOfLines":1}},"View112":{"ctx_map":{}},"View113":{"ctx_map":{}},"View114":{"ctx_map":{}},"View115":{"ctx_map":{}},"View123":{"ctx_map":{}},"View124":{"ctx_map":{}},"View125":{"ctx_map":{}},"View126":{"ctx_map":{}},"View135":{"ctx_map":{}},"View136":{"ctx_map":{}},"View137":{"ctx_map":{}},"View138":{"ctx_map":{}},"View150":{"ctx_map":{}},"View151":{"ctx_map":{}},"View152":{"ctx_map":{}},"View153":{"ctx_map":{}},"View155":{"ctx_map":{}},"View156":{"ctx_map":{}},"View157":{"ctx_map":{}},"View158":{"ctx_map":{}},"View159":{"ctx_map":{}},"View160":{"ctx_map":{}},"View161":{"ctx_map":{}},"View162":{"ctx_map":{}},"ViewFor4":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewIf10":{"ctx_map":{"value":true}},"ViewIf11":{"ctx_map":{"value":true}},"ViewIf12":{"ctx_map":{"value":true}},"ViewIf13":{"ctx_map":{"value":true}},"ViewIf14":{"ctx_map":{"value":true}},"ViewIf15":{"ctx_map":{"value":true}},"ViewIf16":{"ctx_map":{"value":true}},"ViewIf17":{"ctx_map":{"value":true}},"ViewIf18":{"ctx_map":{"value":true}},"ViewIf19":{"ctx_map":{"value":true}},"ViewIf22":{"ctx_map":{"value":true}},"ViewIf23":{"ctx_map":{"value":true}},"ViewIf47":{"ctx_map":{"value":true}},"ViewIf48":{"ctx_map":{"value":true}},"ViewIf61":{"ctx_map":{"value":true}},"ViewIf62":{"ctx_map":{"value":true}},"ViewIf75":{"ctx_map":{"value":true}},"ViewIf76":{"ctx_map":{"value":true}},"ViewIf77":{"ctx_map":{"value":true}},"ViewFor12":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewFor16":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewFor20":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"DwappCloud1":{"ctx_map":{"bool1":true,"bool2":false,"text1":"新建备忘录","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud2":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"PickerView1":{"ctx_map":{"range":[[{"label":"上午","value":"am"},{"label":"下午","value":"pm"}]],"value":[0]}},"PickerView3":{"ctx_map":{"range":[[{"label":"上午","value":"am"},{"label":"下午","value":"pm"}]],"value":[0]}},"ScrollView1":{"ctx_map":{"type":"list","scrollY":true,"showScrollbar":true}},"DisplayDate1":{"ctx_map":{"value":"2022-09-10T11:22:33.444","format":"date","display1970":""}},"NativeInput1":{"ctx_map":{"type":"text","placeholder":"最多添加20字"}},"NativeButton1":{"ctx_map":{"type":"button"}},"NativeButton2":{"ctx_map":{"type":"button"}},"NativeButton3":{"ctx_map":{"type":"button"}},"NativeButton4":{"ctx_map":{"type":"button"}},"NativeButton5":{"ctx_map":{"type":"button"}},"NativeButton6":{"ctx_map":{"type":"button"}},"NativeButton9":{"ctx_map":{"type":"button"}},"NativeButton10":{"ctx_map":{"type":"button"}},"NativeButton11":{"ctx_map":{"type":"button"}},"NativeButton12":{"ctx_map":{"type":"button"}},"NativeButton13":{"ctx_map":{"type":"button"}},"NativeButton14":{"ctx_map":{"type":"button"}},"NativeButton15":{"ctx_map":{"type":"button"}},"NativeButton16":{"ctx_map":{"type":"button"}}}};
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
const pageGroupSlug = 'app_tongzhua-memorandum_create';

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
<View /* View8 */   style={styles.xdw2fk}><View /* View2 */   style={styles.xdw2em}><XbenchcView /* View3 */   viewStyle={styles.xdw2ek} onClick={getEvent('View3:onClick:func2:', {eventData: "date"}, bagForKeyValue, bagForIndex)}><Text /* Text2 */ style={styles.xdw2ef} >{slide.components.Text2.ctx_map.text}</Text>
{!!(!state.formData.start_date) /* ViewIf10 */ && (<><Text /* Text15 */ style={styles.xdw2eg} >{slide.components.Text15.ctx_map.text}</Text></>)}
{!!(!!state.formData.start_date) /* ViewIf11 */ && (<><Text style={styles.xdw2eh} numberOfLines={1}>{dwtools.dateformat(state.formData.start_date, slide.components.DisplayDate1.ctx_map.format)}</Text></>)}
<XbenchcImage /* Image40 */ style={styles.xdw2ei} source={dwtools.getLocalResource('xdw2ej_lthar2ti')}  /></XbenchcView>
<XbenchcView /* View4 */   viewStyle={styles.xdw2ek} onClick={getEvent('View4:onClick:func2:', {eventData: "time"}, bagForKeyValue, bagForIndex)}><Text /* Text3 */ style={styles.xdw2ef} >{slide.components.Text3.ctx_map.text}</Text>
{!!(!state.formData.start_time) /* ViewIf12 */ && (<><Text /* Text16 */ style={styles.xdw2eg} >{slide.components.Text16.ctx_map.text}</Text></>)}
{!!(!!state.formData.start_time) /* ViewIf13 */ && (<><Text /* Text30 */ style={styles.xdw2eh} >{state.formData.start_time}</Text></>)}
<XbenchcImage /* Image41 */ style={styles.xdw2ei} source={dwtools.getLocalResource('xdw2ej_lthar2ti')}  /></XbenchcView>
<XbenchcView /* View5 */   viewStyle={styles.xdw2ek} onClick={getEvent('View5:onClick:func2:', {eventData: "period"}, bagForKeyValue, bagForIndex)}><Text /* Text4 */ style={styles.xdw2ef} >{slide.components.Text4.ctx_map.text}</Text>
{!!(!state.formData.cycle) /* ViewIf14 */ && (<><Text /* Text17 */ style={styles.xdw2eg} >{slide.components.Text17.ctx_map.text}</Text></>)}
{!!(!!state.formData.cycle) /* ViewIf15 */ && (<><Text /* Text31 */ style={styles.xdw2eh} >{state.periodMap[state.formData.cycle]}</Text></>)}
<XbenchcImage /* Image42 */ style={styles.xdw2ei} source={dwtools.getLocalResource('xdw2ej_lthar2ti')}  /></XbenchcView>
<XbenchcView /* View6 */   viewStyle={styles.xdw2ek} onClick={getEvent('View6:onClick:func2:', {eventData: "notice"}, bagForKeyValue, bagForIndex)}><Text /* Text5 */ style={styles.xdw2ef} >{slide.components.Text5.ctx_map.text}</Text>
{!!(!state.formData.notify) /* ViewIf16 */ && (<><Text /* Text18 */ style={styles.xdw2eg} >{slide.components.Text18.ctx_map.text}</Text></>)}
{!!(!!state.formData.notify) /* ViewIf17 */ && (<><Text /* Text32 */ style={styles.xdw2eh} >{state.noticeMap[state.formData.notify]}</Text></>)}
<XbenchcImage /* Image43 */ style={styles.xdw2ei} source={dwtools.getLocalResource('xdw2ej_lthar2ti')}  /></XbenchcView>
<XbenchcView /* View7 */   viewStyle={styles.xdw2el} onClick={getEvent('View7:onClick:func2:', {eventData: "pet"}, bagForKeyValue, bagForIndex)}><Text /* Text14 */ style={styles.xdw2ef} >{slide.components.Text14.ctx_map.text}</Text>
{!!(state.formData.pet_uuids.length < 1 && state.selectPets.length < 1) /* ViewIf23 */ && (<><Text /* Text19 */ style={styles.xdw2eg} >{slide.components.Text19.ctx_map.text}</Text></>)}
{!!(state.selectPets.length > 0 && state.formData.pet_uuids.length > 0) /* ViewIf22 */ && (<><Text /* Text41 */ style={styles.xdw2eh} >{state.selectPets.map(x => x.data.name).join(',')}</Text></>)}
<XbenchcImage /* Image44 */ style={styles.xdw2ei} source={dwtools.getLocalResource('xdw2ej_lthar2ti')}  /></XbenchcView></View>
<View /* View1 */   style={styles.xdw2ep}><Text /* Text1 */ style={styles.xdw2en} >{slide.components.Text1.ctx_map.text}</Text>
<XbenchcInput /* NativeInput1 */ style={styles.xdw2eo} value={state.formData.remark} placeholder={slide.components.NativeInput1.ctx_map.placeholder} type={slide.components.NativeInput1.ctx_map.type}  onChange={getEvent('NativeInput1:onChange:func17:', {eventData: "remark"}, bagForKeyValue, bagForIndex)} /></View>
<XbenchcModal /* Modal1 */ rootStyle={styles.xdw2ez} value={ state.showPopup.date } mask={ true } maskClosable={ true } ><View /* View9 */   style={styles.xdw2ey}><View /* View14 */   style={styles.xdw2er}><Text /* Text22 */ style={styles.xdw2eq} >{slide.components.Text22.ctx_map.text}</Text></View>
<View /* View13 */   style={styles.xdw2es}><XbenchcPickerView /* PickerView1 */ value={ state.dateValue } range={ state.datePickerRange }  onChange={getEvent('PickerView1:input:func6:dateValue', {}, bagForKeyValue, bagForIndex)}></XbenchcPickerView></View>
<View /* View10 */   style={styles.xdw2ex}><View /* View12 */   style={styles.xdw2ev}><XbenchcButton /* NativeButton2 */ viewStyle={styles.xdw2eu} onClick={getEvent('NativeButton2:onClick:func3:', {}, bagForKeyValue, bagForIndex)}><Text /* Text21 */ style={styles.xdw2et} >{slide.components.Text21.ctx_map.text}</Text></XbenchcButton></View>
<View /* View11 */   style={styles.xdw2ew}><XbenchcButton /* NativeButton1 */ viewStyle={styles.xdw2eu} onClick={getEvent('NativeButton1:onClick:func10:', {}, bagForKeyValue, bagForIndex)}><Text /* Text20 */ style={styles.xdw2et} >{slide.components.Text20.ctx_map.text}</Text></XbenchcButton></View></View></View></XbenchcModal>
<XbenchcModal /* Modal3 */ rootStyle={styles.xdw2ez} value={ state.showPopup.time } mask={ true } maskClosable={ true } ><View /* View43 */   style={styles.xdw2ey}><View /* View63 */   style={styles.xdw2er}><Text /* Text51 */ style={styles.xdw2eq} >{slide.components.Text51.ctx_map.text}</Text></View>
<View /* View62 */   style={styles.xdw2es}><XbenchcPickerView /* PickerView3 */ value={ state.timeValue } range={ state.timePickerRange }  onChange={getEvent('PickerView3:input:func18:', {}, bagForKeyValue, bagForIndex)}></XbenchcPickerView></View>
<View /* View44 */   style={styles.xdw2ex}><View /* View46 */   style={styles.xdw2ev}><XbenchcButton /* NativeButton6 */ viewStyle={styles.xdw2eu} onClick={getEvent('NativeButton6:onClick:func3:', {}, bagForKeyValue, bagForIndex)}><Text /* Text43 */ style={styles.xdw2et} >{slide.components.Text43.ctx_map.text}</Text></XbenchcButton></View>
<View /* View45 */   style={styles.xdw2ew}><XbenchcButton /* NativeButton5 */ viewStyle={styles.xdw2eu} onClick={getEvent('NativeButton5:onClick:func10:', {}, bagForKeyValue, bagForIndex)}><Text /* Text42 */ style={styles.xdw2et} >{slide.components.Text42.ctx_map.text}</Text></XbenchcButton></View></View></View></XbenchcModal>
<XbenchcModal /* Modal7 */ rootStyle={styles.xdw2ez} value={ state.showPopup.period } mask={ true } maskClosable={ true } ><View /* View135 */   style={styles.xdw2ey}><View /* View153 */   style={styles.xdw2er}><Text /* Text94 */ style={styles.xdw2eq} >{slide.components.Text94.ctx_map.text}</Text></View>
<View /* View150 */   style={styles.xdw2f5}>{(state.periodPickerRange).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor20' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor20 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><XbenchcView /* View151 */   viewStyle={[styles.xdw2f4, ({
  backgroundColor: state.formData.cycle === bagForItem.id ? "#F6F6F6" : "#FFFFFF"
})]} onClick={getEvent('View151:onClick:func10:', {eventData: bagForItem.id}, bagForKeyValue, bagForIndex)}><Text /* Text93 */ style={styles.xdw2f0} >{bagForItem.name}</Text>
{!!(state.formData.cycle === bagForItem.id) /* ViewIf76 */ && (<><XbenchcImage /* Image39 */ style={styles.xdw2f1} source={dwtools.getLocalResource('xdw2f2_lthar2tj')}  /></>)}
{!!(state.formData.cycle !== bagForItem.id) /* ViewIf75 */ && (<><View /* View152 */   style={styles.xdw2f3}></View></>)}</XbenchcView></ViewForItem> })}</View>
<View /* View136 */   style={styles.xdw2ex}><View /* View138 */   style={styles.xdw2ev}><XbenchcButton /* NativeButton14 */ viewStyle={styles.xdw2eu} onClick={getEvent('NativeButton14:onClick:func3:', {}, bagForKeyValue, bagForIndex)}><Text /* Text87 */ style={styles.xdw2et} >{slide.components.Text87.ctx_map.text}</Text></XbenchcButton></View>
<View /* View137 */   style={styles.xdw2ew}><XbenchcButton /* NativeButton13 */ viewStyle={styles.xdw2eu} onClick={getEvent('NativeButton13:onClick:func10:', {}, bagForKeyValue, bagForIndex)}><Text /* Text86 */ style={styles.xdw2et} >{slide.components.Text86.ctx_map.text}</Text></XbenchcButton></View></View></View></XbenchcModal>
<XbenchcModal /* Modal6 */ rootStyle={styles.xdw2ez} value={ state.showPopup.notice } mask={ true } maskClosable={ true } ><View /* View112 */   style={styles.xdw2ey}><View /* View126 */   style={styles.xdw2er}><Text /* Text81 */ style={styles.xdw2eq} >{slide.components.Text81.ctx_map.text}</Text></View>
<View /* View123 */   style={styles.xdw2f5}>{(state.noticePickerRange).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor16' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor16 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><XbenchcView /* View124 */   viewStyle={[styles.xdw2f4, ({
  backgroundColor: state.formData.notify === bagForItem.id ? "#F6F6F6" : "#FFFFFF"
})]} onClick={getEvent('View124:onClick:func10:', {eventData: bagForItem.id}, bagForKeyValue, bagForIndex)}><Text /* Text80 */ style={styles.xdw2f0} >{bagForItem.name}</Text>
{!!(state.formData.notify === bagForItem.id) /* ViewIf62 */ && (<><XbenchcImage /* Image33 */ style={styles.xdw2f1} source={dwtools.getLocalResource('xdw2f2_lthar2tj')}  /></>)}
{!!(state.formData.notify !== bagForItem.id) /* ViewIf61 */ && (<><View /* View125 */   style={styles.xdw2f3}></View></>)}</XbenchcView></ViewForItem> })}</View>
<View /* View113 */   style={styles.xdw2ex}><View /* View115 */   style={styles.xdw2ev}><XbenchcButton /* NativeButton12 */ viewStyle={styles.xdw2eu} onClick={getEvent('NativeButton12:onClick:func3:', {}, bagForKeyValue, bagForIndex)}><Text /* Text76 */ style={styles.xdw2et} >{slide.components.Text76.ctx_map.text}</Text></XbenchcButton></View>
<View /* View114 */   style={styles.xdw2ew}><XbenchcButton /* NativeButton11 */ viewStyle={styles.xdw2eu} onClick={getEvent('NativeButton11:onClick:func10:', {}, bagForKeyValue, bagForIndex)}><Text /* Text75 */ style={styles.xdw2et} >{slide.components.Text75.ctx_map.text}</Text></XbenchcButton></View></View></View></XbenchcModal>
<XbenchcModal /* Modal5 */ rootStyle={styles.xdw2ez} value={ state.showPopup.pet } mask={ true } maskClosable={ true } ><View /* View89 */   style={styles.xdw2ey}><View /* View99 */   style={styles.xdw2er}><Text /* Text68 */ style={styles.xdw2eq} >{slide.components.Text68.ctx_map.text}</Text></View>
<View /* View93 */   style={styles.xdw2fh}>{!!(state.formData.pet_uuids.length > 0) /* ViewIf48 */ && (<><View /* View95 */   style={styles.xdw2fc}>{(state.selectPets).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor12' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor12 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View98 */   style={styles.xdw2f8}><XbenchcImage /* Image27 */ style={styles.xdw2f6} source={dwtools.qiniu(bagForItem.data.image, slide.components.Image27.ctx_map.fop)}  />
<Text /* Text67 */ style={styles.xdw2f7} >{bagForItem.data.name}</Text></View></ViewForItem> })}
<XbenchcView /* View96 */   onClick={getEvent('View96:onClick:func2:', {eventData: "selectPet"}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image26 */ style={styles.xdw2f9} source={dwtools.getLocalResource('xdw2fa_lthar2tk')}  />
<View /* View97 */   style={styles.xdw2fb}></View></XbenchcView></View></>)}
{!!(!state.formData.pet_uuids.length) /* ViewIf47 */ && (<><XbenchcView /* View94 */   viewStyle={styles.xdw2fg} onClick={getEvent('View94:onClick:func2:', {eventData: "selectPet"}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image25 */ style={styles.xdw2fd} source={dwtools.getLocalResource('xdw2fe_lthar2tk')}  />
<Text /* Text66 */ style={styles.xdw2ff} >{slide.components.Text66.ctx_map.text}</Text></XbenchcView></>)}</View>
<View /* View90 */   style={styles.xdw2ex}><View /* View92 */   style={styles.xdw2ev}><XbenchcButton /* NativeButton10 */ viewStyle={styles.xdw2eu} onClick={getEvent('NativeButton10:onClick:func3:', {}, bagForKeyValue, bagForIndex)}><Text /* Text65 */ style={styles.xdw2et} >{slide.components.Text65.ctx_map.text}</Text></XbenchcButton></View>
<View /* View91 */   style={styles.xdw2ew}><XbenchcButton /* NativeButton9 */ viewStyle={styles.xdw2eu} onClick={getEvent('NativeButton9:onClick:func10:', {}, bagForKeyValue, bagForIndex)}><Text /* Text64 */ style={styles.xdw2et} >{slide.components.Text64.ctx_map.text}</Text></XbenchcButton></View></View></View></XbenchcModal>
<View /* View29 */   style={styles.xdw2fj}><XbenchcButton /* NativeButton3 */ viewStyle={styles.xdw2fi} onClick={getEvent('NativeButton3:onClick:func12:', {}, bagForKeyValue, bagForIndex)}><Text /* Text33 */ style={styles.xdw2et} >{slide.components.Text33.ctx_map.text}</Text></XbenchcButton></View></View>
<XbenchcModal /* Modal2 */ rootStyle={styles.xdw2fw} value={ state.showPopup.selectPet } mask={ true } maskClosable={ true } ><View /* View36 */   style={styles.xdw2fv}><View /* View35 */   style={styles.xdw2fl}><Text /* Text37 */ style={styles.xdw2eq} >{slide.components.Text37.ctx_map.text}</Text></View>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw2fr} scrollY={ true } showScrollbar={ true } >{(state.items).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor4' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor4 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><XbenchcView /* View33 */   viewStyle={[styles.xdw2f4, ({
  backgroundColor: state.formData.pet_uuids.includes(bagForItem.uuid) ? "#F6F6F6" : "#FFFFFF"
})]} onClick={getEvent('View33:onClick:func14:', {eventData: bagForItem.uuid}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image12 */ style={styles.xdw2fm} source={dwtools.qiniu(bagForItem.data.image, slide.components.Image12.ctx_map.fop)}  />
<Text /* Text36 */ style={styles.xdw2f0} >{bagForItem.data.name}</Text>
{!!(state.formData.pet_uuids.includes(bagForItem.uuid)) /* ViewIf19 */ && (<><XbenchcImage /* Image11 */ style={styles.xdw2f1} source={dwtools.getLocalResource('xdw2f2_lthar2tj')}  /></>)}
{!!(!state.formData.pet_uuids.includes(bagForItem.uuid)) /* ViewIf18 */ && (<><View /* View34 */   style={styles.xdw2f3}></View></>)}</XbenchcView></ViewForItem> })}
{!!(slide.components.ViewIf77.ctx_map.value) /* ViewIf77 */ && (<><View /* View161 */   style={styles.xdw2fq}><Text /* Text101 */ style={styles.xdw2fn} numberOfLines={1}>{slide.components.Text101.ctx_map.text}</Text>
<XbenchcView /* View162 */   viewStyle={styles.xdw2fp} onClick={getEvent('View162:onClick:func21:', {}, bagForKeyValue, bagForIndex)}><Text /* Text100 */ style={styles.xdw2fo} numberOfLines={1}>{slide.components.Text100.ctx_map.text}</Text></XbenchcView></View></>)}</XbenchcScrollView>
<View /* View155 */   style={styles.xdw2fu}><View /* View157 */   style={styles.xdw2ev}><XbenchcButton /* NativeButton16 */ viewStyle={styles.xdw2fs} onClick={getEvent('NativeButton16:onClick:func3:', {}, bagForKeyValue, bagForIndex)}><Text /* Text96 */ style={styles.xdw2et} >{slide.components.Text96.ctx_map.text}</Text></XbenchcButton></View>
<View /* View156 */   style={styles.xdw2ft}><XbenchcButton /* NativeButton15 */ viewStyle={styles.xdw2eu} onClick={getEvent('NativeButton15:onClick:func16:', {}, bagForKeyValue, bagForIndex)}><Text /* Text95 */ style={styles.xdw2et} >{slide.components.Text95.ctx_map.text}</Text></XbenchcButton></View></View></View></XbenchcModal>
<XbenchcModal /* Modal8 */ rootStyle={styles.xdw2g3} value={ state.data_exist } mask={ true } maskClosable={ true } ><View /* View158 */   style={styles.xdw2g2}><View /* View160 */   style={styles.xdw2fy}><Text /* Text98 */ style={styles.xdw2fx} >{state.error}</Text></View>
<XbenchcView /* View159 */   viewStyle={styles.xdw2g1} hoverStyle={styles.xdw2g0} onClick={getEvent('View159:onClick:func19:', {}, bagForKeyValue, bagForIndex)}><Text /* Text99 */ style={styles.xdw2fz} numberOfLines={1}>{slide.components.Text99.ctx_map.text}</Text></XbenchcView></View></XbenchcModal>
<Xbenchc275104 /* DwappCloud2 */ valueStyle={ slide.components.DwappCloud2.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud2.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud2.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud2:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104>
    </ErrorBoundary>
  )
}
