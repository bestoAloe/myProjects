
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import ViewForItem from '../../xbench/components/ViewForItem'
import XbenchcScrollView from '../../xbench/xbenchc/components/XbenchcScrollView'
import Xbenchc274506 from '../components/Xbenchc274506'
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

let action12lock = false
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
/* debug */ console.log('action1(声明函数:开始调用:onCreateState):', { store, event })
  const action2 = state.items = ([])
  /* debug */ console.log('action2(声明状态):', action2)
  const action38 = state.member = (null)
  /* debug */ console.log('action38(声明状态):', action38)
  const action46 = state.timeLine = ([])
  /* debug */ console.log('action46(声明状态):', action46)
  const action74 = state.timeLineOpen = (false)
  /* debug */ console.log('action74(声明状态):', action74)
  const action273 = state.currentMonth = (null)
  /* debug */ console.log('action273(声明状态):', action273)
  const action118 = state.date = (null)
  /* debug */ console.log('action118(声明状态):', action118)
  const action269 = state.today = (null)
  /* debug */ console.log('action269(声明状态):', action269)
  const action115 = state.datePop = (false)
  /* debug */ console.log('action115(声明状态):', action115)
  const action116 = state.dateValue = ([])
  /* debug */ console.log('action116(声明状态):', action116)
  const action117 = state.datePickerRange = ([])
  /* debug */ console.log('action117(声明状态):', action117)
  const action144 = state.ready = (false)
  /* debug */ console.log('action144(声明状态):', action144)
  const action234 = state.triggerRefresh = (false)
  /* debug */ console.log('action234(声明状态):', action234)
  const action271 = state.remarks = ([])
  /* debug */ console.log('action271(声明状态):', action271)
  const action293 = state.aggs = (null)
  /* debug */ console.log('action293(声明状态):', action293)
/* debug */ console.log('action1(声明函数:结束调用:onCreateState):', { store, event })
  return state
}

const action3 = actions['onShow'] = async function (store, event) {
  const state = store.state
/* debug */ console.log('action3(声明函数:开始调用:onShow):', { store, event })
  if (!state.ready) {
    const action9 = await store.dispatch("func1", {})
    /* debug */ console.log('action9(调用函数):', action9)
  }
/* debug */ console.log('action3(声明函数:结束调用:onShow):', { store, event })
}

const action323 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
/* debug */ console.log('action323(声明函数:开始调用:获取model实例):', { store, event })
  const action324 = modalInstance = (event.data)
  /* debug */ console.log('action324(赋值变量):', action324)
  const action325 = console.log('[getModalInstance#action325] 打印(modalInstance)', modalInstance)
  /* debug */ console.log('action325(调用系统接口):', (() => { try { return action325 } catch (e) { return 'ReferenceError' } })())
/* debug */ console.log('action323(声明函数:结束调用:获取model实例):', { store, event })
}

const action235 = actions['refresh'] = async function (store, event) {
  const state = store.state
/* debug */ console.log('action235(声明函数:开始调用:下拉刷新):', { store, event })
  const action236 = store.commit('setState', {["state.triggerRefresh"]: true})
  /* debug */ console.log('action236(修改状态):', action236)
  const action239 = await store.dispatch("func2", {})
  /* debug */ console.log('action239(调用函数):', action239)
  const action240 = store.commit('setState', {["state.triggerRefresh"]: false})
  /* debug */ console.log('action240(修改状态):', action240)
/* debug */ console.log('action235(声明函数:结束调用:下拉刷新):', { store, event })
}

const action4 = actions['func1'] = async function (store, event) {
  const state = store.state
/* debug */ console.log('action4(声明函数:开始调用:初始化):', { store, event })
  const action336 = (dw.platform === 'dwapp') ? dw.app.wxLogin() : (dw.platform === 'rnapp') ? await dw.app.wxLogin() : 
        (D.siteuser && D.siteuser.id)
          ? true
          : app.wxGotoLogin({}, '/account/login/?next=' + encodeURIComponent(location.href))
        
  if (!action336) return
  /* debug */ console.log('action336(调用系统接口):', (() => { try { return action336 } catch (e) { return 'ReferenceError' } })())
  const action128 = await store.dispatch("func17", {})
  /* debug */ console.log('action128(调用函数):', action128)
  const action119 = await store.dispatch("func14", {})
  /* debug */ console.log('action119(调用函数):', action119)
  const action45 = await store.dispatch("func9", {})
  /* debug */ console.log('action45(调用函数):', action45)
  const action298 = await Promise.all([
    (async () => {
      const action297 = await store.dispatch("func25", {})
      /* debug */ console.log('action297(调用函数):', action297)
      return action297
    })(),
    (async () => {
      const action8 = await store.dispatch("func2", {})
      /* debug */ console.log('action8(调用函数):', action8)
      return action8
    })(),
  ])

  const action284 = await store.dispatch("func23", {})
  /* debug */ console.log('action284(调用函数):', action284)
  const action145 = store.commit('setState', {["state.ready"]: true})
  /* debug */ console.log('action145(修改状态):', action145)
/* debug */ console.log('action4(声明函数:结束调用:初始化):', { store, event })
}

const action5 = actions['func2'] = async function (store, event) {
  const state = store.state
/* debug */ console.log('action5(声明函数:开始调用:加载视频):', { store, event })
  const action168 = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace('Z', '')
  /* debug */ console.log('action168(调用系统接口):', (() => { try { return action168 } catch (e) { return 'ReferenceError' } })())
  let now = (action168)
  const action169 = now
  /* debug */ console.log('action169(声明变量):', action169)
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
  /* debug */ console.log('action146(调用系统接口):', (() => { try { return action146 } catch (e) { return 'ReferenceError' } })())
  let end_time = (action146)
  const action147 = end_time
  /* debug */ console.log('action147(声明变量):', action147)
  let data__start_time__range = ([state.date, end_time])
  const action242 = data__start_time__range
  /* debug */ console.log('action242(声明变量):', action242)
  const action250 = console.log('[func2#action250] 打印(data__start_time__range)的返回值', data__start_time__range)
  /* debug */ console.log('action250(调用系统接口):', (() => { try { return action250 } catch (e) { return 'ReferenceError' } })())
  const action139 = await dw.app.run("video.list", {"limit": 100, "offset": 0, "filters": {/**/  data__member_uuid: state.member.uuid,/**/  data__state__in: ["uploading", "finish"],/**/  data__type: 'interest',/**/  data__start_time__range: data__start_time__range,/**/}, "order_by": [], "collect_status": true})
  /* debug */ console.log('action139(调用后端云函数):', action139)
  let items = (action139.objects)
  const action170 = items
  /* debug */ console.log('action170(声明变量):', action170)
  const action252 = store.commit('setState', {["state.items"]: items})
  /* debug */ console.log('action252(修改状态):', action252)
/* debug */ console.log('action5(声明函数:结束调用:加载视频):', { store, event })
}

const action10 = actions['func3'] = async function (store, event) {
  const state = store.state
/* debug */ console.log('action10(声明函数:开始调用:收藏视频):', { store, event })
  const action26 = console.log('[func3#action26] event', event)
  /* debug */ console.log('action26(调用系统接口):', (() => { try { return action26 } catch (e) { return 'ReferenceError' } })())
  /* action11: 确保用户体验,收藏后不刷新页面,收到结果后在前端手动改变收藏 */
  const action12 = await (async () => {
  
      if (action12lock) return true
      action12lock = true
      try {
    const action13 = await dw.app.run("video.add_delete_video", {"video_uuid": event.context.eventData})
    /* debug */ console.log('action13(调用后端云函数):', action13)
    
        if ((action13.status) === ("error")) {
          const action15message = (action13.message || "操作错误！")
          const action15title = ("提示")
          action15message && dw.alert(action15title, action15message)
          return {}
        }
        
    /* debug */ console.log('action15(调用系统接口):', (() => { try { return action15 } catch (e) { return 'ReferenceError' } })())
    let is_collect = (action13.object.data.is_active)
    const action253 = is_collect
    /* debug */ console.log('action253(声明变量):', action253)
    const action254 = store.commit('setState', {[`state.items[${event.context.eventData2}].data.is_collect`]: is_collect})
    /* debug */ console.log('action254(修改状态):', action254)
  
      } catch (e) {
        throw e
      } finally {
        action12lock = false
      }
      
  })()
  /* debug */ console.log('action12(组合功能(装饰器)):', (() => { try { return action12 } catch (e) { return 'ReferenceError' } })())
/* debug */ console.log('action10(声明函数:结束调用:收藏视频):', { store, event })
}

const action152 = actions['func18'] = function (store, event) {
  const state = store.state
/* debug */ console.log('action152(声明函数:开始调用:跳转收藏页面):', { store, event })
  let slug = (event.context.eventData)
  const action153 = slug
  /* debug */ console.log('action153(声明变量):', action153)
  const action154 = dw.app.goToPappUrl("collect_video", {}, {redirectTo: false})
  /* debug */ console.log('action154(调用系统接口):', (() => { try { return action154 } catch (e) { return 'ReferenceError' } })())
/* debug */ console.log('action152(声明函数:结束调用:跳转收藏页面):', { store, event })
}

const action40 = actions['func9'] = async function (store, event) {
  const state = store.state
/* debug */ console.log('action40(声明函数:开始调用:加载用户信息):', { store, event })
  const action41 = await dw.app.run("member.get_create_member", {})
  /* debug */ console.log('action41(调用后端云函数):', action41)
  
        if ((action41.status) === ("error")) {
          const action42message = (action41.message || "操作错误！")
          const action42title = ("提示")
          action42message && dw.alert(action42title, action42message)
          return {}
        }
        
  /* debug */ console.log('action42(调用系统接口):', (() => { try { return action42 } catch (e) { return 'ReferenceError' } })())
  const action43 = store.commit('setState', {["state.member"]: action41.object})
  /* debug */ console.log('action43(修改状态):', action43)
  const action259 = await store.dispatch("func21", {})
  /* debug */ console.log('action259(调用函数):', action259)
/* debug */ console.log('action40(声明函数:结束调用:加载用户信息):', { store, event })
}

const action62 = actions['func11'] = async function (store, event) {
  const state = store.state
/* debug */ console.log('action62(声明函数:开始调用:点击小时):', { store, event })
  let item = (event.context.eventData)
  const action69 = item
  /* debug */ console.log('action69(声明变量):', action69)
  if (item.got_video) {
  }
  const action241 = await store.dispatch("func2", {})
  /* debug */ console.log('action241(调用函数):', action241)
/* debug */ console.log('action62(声明函数:结束调用:点击小时):', { store, event })
}

const action75 = actions['func12'] = function (store, event) {
  const state = store.state
/* debug */ console.log('action75(声明函数:开始调用:展开收起时间轴):', { store, event })
  const action76 = store.commit('setState', {["state.timeLineOpen"]: !state.timeLineOpen})
  /* debug */ console.log('action76(修改状态):', action76)
/* debug */ console.log('action75(声明函数:结束调用:展开收起时间轴):', { store, event })
}

/* action78: 日期 */
const action79 = actions['func13'] = function (store, event) {
  const state = store.state
/* debug */ console.log('action79(声明函数:开始调用:点击日期):', { store, event })
  const action87 = store.commit('setState', {["state.datePop"]: true})
  /* debug */ console.log('action87(修改状态):', action87)
/* debug */ console.log('action79(声明函数:结束调用:点击日期):', { store, event })
}

const action88 = actions['func14'] = function (store, event) {
  const state = store.state
/* debug */ console.log('action88(声明函数:开始调用:构建日期PickerRange):', { store, event })
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
  /* debug */ console.log('action89(执行代码):', action89)
  const action90 = store.commit('setState', {["state.datePickerRange"]: action89})
  /* debug */ console.log('action90(修改状态):', action90)
  /* action207: 更新默认选项 */
  let yearIndex = (action89[0].findIndex(x=>x.label === state.date.slice(0, 4)))
  const action208 = yearIndex
  /* debug */ console.log('action208(声明变量):', action208)
  let monthIndex = (action89[1].findIndex(x=>x.label === state.date.slice(5, 7)))
  const action209 = monthIndex
  /* debug */ console.log('action209(声明变量):', action209)
  let dateIndex = (action89[2].findIndex(x=>x.label === state.date.slice(8, 10)))
  const action210 = dateIndex
  /* debug */ console.log('action210(声明变量):', action210)
  const action211 = store.commit('setState', {["state.dateValue"]: [yearIndex, monthIndex, dateIndex]})
  /* debug */ console.log('action211(修改状态):', action211)
/* debug */ console.log('action88(声明函数:结束调用:构建日期PickerRange):', { store, event })
}

const action91 = actions['func5'] = async function (store, event) {
  const state = store.state
/* debug */ console.log('action91(声明函数:开始调用:监听日期选择):', { store, event })
  const action92 = store.commit('setState', {["state.dateValue"]: event.data.detail.value})
  /* debug */ console.log('action92(修改状态):', action92)
  const action93 = await store.dispatch("func16", {})
  /* debug */ console.log('action93(调用函数):', action93)
/* debug */ console.log('action91(声明函数:结束调用:监听日期选择):', { store, event })
}

const action94 = actions['func6'] = function (store, event) {
  const state = store.state
/* debug */ console.log('action94(声明函数:开始调用:取消选择日期):', { store, event })
  const action95 = store.commit('setState', {["state.datePop"]: false})
  /* debug */ console.log('action95(修改状态):', action95)
/* debug */ console.log('action94(声明函数:结束调用:取消选择日期):', { store, event })
}

const action97 = actions['func7'] = async function (store, event) {
  const state = store.state
/* debug */ console.log('action97(声明函数:开始调用:确认选择日期):', { store, event })
  const action260 = await store.dispatch("func6", {})
  /* debug */ console.log('action260(调用函数):', action260)
  if (event.data.iso_str > state.today.slice(0, 10)) {
    /* debug */ console.log('action313(函数返回):', event)
    return event
  }
  const action251 = store.commit('setState', {["state.date"]: event.data.iso_str + "T00:00:00.000"})
  /* debug */ console.log('action251(修改状态):', action251)
  const action148 = await store.dispatch("func2", {})
  /* debug */ console.log('action148(调用函数):', action148)
/* debug */ console.log('action97(声明函数:结束调用:确认选择日期):', { store, event })
}

const action106 = actions['func16'] = function (store, event) {
  const state = store.state
/* debug */ console.log('action106(声明函数:开始调用:更新日期选项):', { store, event })
  const action120 = JSON.parse(JSON.stringify(state.datePickerRange))
  /* debug */ console.log('action120(调用系统接口):', (() => { try { return action120 } catch (e) { return 'ReferenceError' } })())
  let datePickerRange = (action120)
  const action107 = datePickerRange
  /* debug */ console.log('action107(声明变量):', action107)
  let daysOptions = (datePickerRange[2])
  const action108 = daysOptions
  /* debug */ console.log('action108(声明变量):', action108)
  let year = (state.dateValue[0])
  const action109 = year
  /* debug */ console.log('action109(声明变量):', action109)
  let month = (state.dateValue[1]+1)
  const action110 = month
  /* debug */ console.log('action110(声明变量):', action110)
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
  /* debug */ console.log('action111(执行代码):', action111)
  if (daysOptions.length !== state.datePickerRange[2].length) {
    const action114 = store.commit('setState', {["state.datePickerRange"]: datePickerRange})
    /* debug */ console.log('action114(修改状态):', action114)
  }
/* debug */ console.log('action106(声明函数:结束调用:更新日期选项):', { store, event })
}

const action124 = actions['func17'] = function (store, event) {
  const state = store.state
/* debug */ console.log('action124(声明函数:开始调用:初始化当前日期):', { store, event })
  const action126now = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace('Z', '')
  const action126 = action126now.split('T')[0] + 'T00:00:00.000'
  /* debug */ console.log('action126(调用系统接口):', (() => { try { return action126 } catch (e) { return 'ReferenceError' } })())
  const action125 = store.commit('setState', {["state.date"]: action126, ["state.today"]: action126, ["state.currentMonth"]: action126.slice(0, 7)})
  /* debug */ console.log('action125(修改状态):', action125)
/* debug */ console.log('action124(声明函数:结束调用:初始化当前日期):', { store, event })
}

const action212 = actions['func20'] = async function (store, event) {
  const state = store.state
/* debug */ console.log('action212(声明函数:开始调用:点击视频):', { store, event })
  let item = (event.context.eventData2)
  const action219 = item
  /* debug */ console.log('action219(声明变量):', action219)
  if (item.data.state === 'finish') {
    let slug = ("eat_video_player")
    const action214 = slug
    /* debug */ console.log('action214(声明变量):', action214)
    const action215 = dw.app.goToPappUrl(slug, {"uuid": item.uuid}, {redirectTo: false})
    /* debug */ console.log('action215(调用系统接口):', (() => { try { return action215 } catch (e) { return 'ReferenceError' } })())
  } else if (item.data.state === 'to_comment') {
    let msg = ("请确认是否提交生成此视频")
    const action318 = msg
    /* debug */ console.log('action318(声明变量):', action318)
    const action319 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(msg)
}
else{
  return null
}
})(store, event)
    /* debug */ console.log('action319(执行代码):', action319)
    if (!action319) {
      /* debug */ console.log('action322(函数返回):', event)
      return event
    }
    const action228 = await dw.app.run("comment.aicheck_all_frame", {"video_uuid": item.uuid})
    /* debug */ console.log('action228(调用后端云函数):', action228)
    
        if ((action228.status) === ("error")) {
          const action229message = (action228.message || "操作错误！")
          const action229title = ("提示")
          action229message && dw.alert(action229title, action229message)
          return {}
        }
        
    /* debug */ console.log('action229(调用系统接口):', (() => { try { return action229 } catch (e) { return 'ReferenceError' } })())
    let message = ("提交成功")
    const action327 = message
    /* debug */ console.log('action327(声明变量):', action327)
    const action328 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    /* debug */ console.log('action328(执行代码):', action328)
    const action231 = await store.dispatch("func2", {})
    /* debug */ console.log('action231(调用函数):', action231)
  } else if (['uploading', 'commenting'].includes(item.data.state)) {
    let message = ("视频生成中")
    const action330 = message
    /* debug */ console.log('action330(声明变量):', action330)
    const action331 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    /* debug */ console.log('action331(执行代码):', action331)
    /* debug */ console.log('action225(函数返回):', event)
    return event
  }
/* debug */ console.log('action212(声明函数:结束调用:点击视频):', { store, event })
}

const action257 = actions['func21'] = async function (store, event) {
  const state = store.state
/* debug */ console.log('action257(声明函数:开始调用:更新已读状态):', { store, event })
  const action258 = await dw.app.run("video.multi_update_check_state", {"is_check": true, "member_uuid": state.member.uuid})
  /* debug */ console.log('action258(调用后端云函数):', action258)
/* debug */ console.log('action257(声明函数:结束调用:更新已读状态):', { store, event })
}

const action275 = actions['func23'] = function (store, event) {
  const state = store.state
/* debug */ console.log('action275(声明函数:开始调用:remarks构造):', { store, event })
  const action283 = ((store, event) => {
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
  /* debug */ console.log('action283(执行代码):', action283)
  let firstDay = (action283.firstDay)
  const action277 = firstDay
  /* debug */ console.log('action277(声明变量):', action277)
  let lastDay = (action283.lastDay)
  const action278 = lastDay
  /* debug */ console.log('action278(声明变量):', action278)
  let currentDate = (action283.firstDay)
  const action279 = currentDate
  /* debug */ console.log('action279(声明变量):', action279)
  const action332 = console.log('[func23#action332] 打印(currentDate)的返回值', currentDate)
  /* debug */ console.log('action332(调用系统接口):', (() => { try { return action332 } catch (e) { return 'ReferenceError' } })())
  let remarks = ([])
  const action280 = remarks
  /* debug */ console.log('action280(声明变量):', action280)
  const action281 = ((store, event) => {
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
  /* debug */ console.log('action281(执行代码):', action281)
  const action333 = console.log('[func23#action333] 打印(remark)的返回值', remarks)
  /* debug */ console.log('action333(调用系统接口):', (() => { try { return action333 } catch (e) { return 'ReferenceError' } })())
  const action282 = store.commit('setState', {["state.remarks"]: remarks})
  /* debug */ console.log('action282(修改状态):', action282)
  const action288 = undefined
  /* debug */ console.log('action288(调用系统接口):', (() => { try { return action288 } catch (e) { return 'ReferenceError' } })())
/* debug */ console.log('action275(声明函数:结束调用:remarks构造):', { store, event })
}

const action285 = actions['func24'] = async function (store, event) {
  const state = store.state
/* debug */ console.log('action285(声明函数:开始调用:切换日历面板):', { store, event })
  const action286 = store.commit('setState', {["state.currentMonth"]: event.data.firstDay.slice(0,7)})
  /* debug */ console.log('action286(修改状态):', action286)
  const action287 = await store.dispatch("func23", {})
  /* debug */ console.log('action287(调用函数):', action287)
/* debug */ console.log('action285(声明函数:结束调用:切换日历面板):', { store, event })
}

const action294 = actions['func25'] = async function (store, event) {
  const state = store.state
/* debug */ console.log('action294(声明函数:开始调用:统计一周视频数据):', { store, event })
  const action292 = await dw.app.run("video.week_agg", {"member_uuid": state.member.uuid})
  /* debug */ console.log('action292(调用后端云函数):', action292)
  const action295 = store.commit('setState', {["state.aggs"]: action292.aggs.agg1})
  /* debug */ console.log('action295(修改状态):', action295)
  const action334 = console.log('[func25#action334] 打印(视频数据函数state.aggs)的返回值', state.aggs)
  /* debug */ console.log('action334(调用系统接口):', (() => { try { return action334 } catch (e) { return 'ReferenceError' } })())
  let action304
  

  /* debug */ console.log('action304(组合功能(装饰器)):', (() => { try { return action304 } catch (e) { return 'ReferenceError' } })())
/* debug */ console.log('action294(声明函数:结束调用:统计一周视频数据):', { store, event })
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
  /* debug */console.log('action52(执行代码):', action52);
  /* debug */console.log('action53(函数返回):', action52);
  return action52;
};
// COMPUTED_ACTION_META:computed1 {"deps":[]}

var action70 = actions['computed2'] = function (event, state) {
  var index = event.index;
  var action71 = index;
  /* debug */console.log('action71(声明变量):', action71);
  var action72 = function (event) {
    return String(index - 1).padStart(2, "0") + ":00-" + String(index).padStart(2, "0") + ":00";
  }(event);
  /* debug */console.log('action72(执行代码):', action72);
  /* debug */console.log('action73(函数返回):', action72);
  return action72;
};
// COMPUTED_ACTION_META:computed2 {"deps":[]}

var action129 = actions['computed3'] = function (event, state) {
  var today = new Date(+new Date() + 8 * 60 * 60 * 1000).toISOString().slice(0, 10);
  var action136 = today;
  /* debug */console.log('action136(声明变量):', action136);
  if (event.date.slice(0, 10) === today) {
    /* debug */console.log('action137(函数返回):', "今天");
    return "今天";
  }
  var month = event.date.slice(5, 7);
  var action131 = month;
  /* debug */console.log('action131(声明变量):', action131);
  var date = event.date.slice(8, 10);
  var action130 = date;
  /* debug */console.log('action130(声明变量):', action130);
  /* debug */console.log('action138(函数返回):', month + "\u6708" + date + "\u65E5");
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
  /* debug */console.log('action143(执行代码):', action143);
  /* debug */console.log('action142(函数返回):', action143);
  return action143;
};
// COMPUTED_ACTION_META:computed4 {"deps":[]}

var action232 = actions['computed5'] = function (event, state) {
  /* debug */console.log('action233(函数返回):', { "to_comment": "待提交", "commenting": "生成中", "uploading": "生成中" }[event.item.data.state]);
  return { "to_comment": "待提交", "commenting": "生成中", "uploading": "生成中" }[event.item.data.state];
};
// COMPUTED_ACTION_META:computed5 {"deps":[]}

var action314 = actions['computed6'] = function (event, state) {
  /* debug */console.log('action315(函数返回):', state.currentMonth !== state.today.slice(0, 7));
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
xdwmn: {
  width: pm(20),
  height: pm(20),
  marginRight: pm(3),
},
xdwmo: {
  color: "#181818",
  fontSize: pm(14),
  fontWeight: "500",
  lineHeight: pm(20),
},
xdwmp: {
  alignItems: "center",
  borderBottomWidth: pm(0),
  borderBottomColor: "#000",
  flexDirection: "row",
},
xdwmq: {
  color: "#181818",
  fontSize: pm(14),
  fontWeight: "500",
  lineHeight: pm(20),
  marginLeft: pm(3),
},
xdwmr: {
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
},
xdwms: {
  alignItems: "center",
  borderBottomWidth: pm(0),
  borderBottomColor: "#E3E3E3",
  flexDirection: "row",
  paddingBottom: pm(8),
  justifyContent: "space-between",
},
xdwmt: {
  width: pm(320),
  height: pm(33),
  flexGrow: 0,
  position: "relative",
  marginTop: pm(38),
  paddingTop: 0,
  paddingLeft: pm(10),
  borderBottomWidth: pm(1),
  borderBottomColor: "#E3E3E3",
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: 0,
  justifyContent: "center",
},
xdwmu: {
  fontSize: pm(12),
  marginTop: pm(5),
  lineHeight: pm(17),
  marginBottom: pm(9),
},
xdwmv: {
  color: "#181818",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(18),
  marginRight: pm(10),
  flexDirection: "column",
},
xdwmw: {
  color: "#181818",
  fontSize: pm(12),
  marginTop: pm(5),
  fontWeight: "500",
  lineHeight: pm(18),
  marginBottom: pm(9),
},
xdwmx: {
  width: pm(154),
  height: pm(115),
  borderTopLeftRadius: pm(5),
  borderTopRightRadius: pm(5),
  borderBottomLeftRadius: pm(5),
  borderBottomRightRadius: pm(5),
},
xdwmy: {
  color: "#ffffff",
  fontSize: pm(9),
  lineHeight: pm(14),
},
xdwmz: {
  left: pm(8),
  width: pm(38),
  bottom: pm(8),
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
xdwn0: {
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
xdwn1: {
  width: pm(6),
  height: pm(6),
},
xdwn2: {
  right: pm(8),
  width: pm(20),
  bottom: pm(8),
  height: pm(20),
  opacity: 0.4,
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#000000",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdwn3: {
  width: pm(154),
  height: pm(115),
  position: "relative",
  flexDirection: "column",
},
xdwn4: {
  width: pm(12),
  height: pm(12),
},
xdwn5: {
  color: "#AAAAAA",
  fontSize: pm(10),
  lineHeight: pm(16),
  marginLeft: pm(5),
},
xdwn6: {
  right: pm(8),
  bottom: pm(8),
  alignItems: "center",
  marginBottom: pm(7),
  flexDirection: "row",
  justifyContent: "center",
},
xdwn7: {
  width: pm(246),
  alignItems: "flex-end",
  flexDirection: "row",
  justifyContent: "space-between",
},
xdwn8: {
  flexDirection: "column",
},
xdwn9: {
  paddingTop: pm(14),
  paddingLeft: pm(17),
  marginBottom: pm(7),
  paddingRight: pm(17),
  flexDirection: "row",
  paddingBottom: pm(14),
  backgroundColor: "#ffffff",
},
xdwna: {
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  flexDirection: "column",
  paddingBottom: 0,
  backgroundColor: "#F6F6F6",
},
xdwnb: {
  width: pm(146),
  height: pm(93),
},
xdwnd: {
  color: "#AAAAAA",
  fontSize: pm(12),
  marginTop: pm(17),
  lineHeight: pm(17),
},
xdwne: {
  marginTop: pm(212),
  alignItems: "center",
  flexDirection: "column",
},
xdwnf: {
  flex: 1,
  width: "100%",
  flexGrow: 1,
  overflow: "scroll",
  flexShrink: 1,
  backgroundColor: "#ffffff",
},
xdwng: {
  marginTop: pm(23),
  flexDirection: "row",
},
xdwnh: {
  width: pm(300),
  height: pm(42),
},
xdwni: {
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
xdwnj: {
  flexDirection: "row",
},
xdwnk: {
  width: pm(320),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(29),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
},
xdwnl: {
  flex: 1,
  zIndex: 10,
  alignItems: "flex-end",
  flexDirection: "row",
  justifyContent: "center",
}
});
const slide = {"type":"274161","key":"c2741611","slug":null,"randomid":"id_b024d1e212ca218a756ceb5f","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View1":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,309,230","src":"u/dev065/2023/03/01/TvSfiJz3YbGjLsSGBiYiMY/108272ba70c0435598414fa0d18405ae_mergeImage.png"}},"Image2":{"ctx_map":{"fop":"e,1460,930","src":"u/dev065/2023/03/02/sjdPJMDYXdSxcFkXNX7KvX/JIKUVAZX81K8VLRAWUC.png","buildToLocal":true}},"Image3":{"ctx_map":{"fop":"e,12,12","src":"u/dev064/2023/12/07/8ChgmhiEAaR2DGGSWptLZR/路径4xplay.png"}},"Image4":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/12/07/iC56YrKb2MfMQDmasQc2Uf/星形2x.png"}},"Image5":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/12/07/2QUkgbbhZpEcngVvZXHbik/星形22x.png"}},"Image6":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/28/kJ9QottQZJRjHkxipcuCMF/时间ic3x.png"}},"Image7":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/28/Go2eBRfCV8Cg2zP3mLt96V/消息icon备份233x.png"}},"Image8":{"ctx_map":{"fop":"e,1053,144","src":"u/dev066/2024/02/28/XE3iqRTtSf5v2thfJKroC3/分组117.png"}},"Modal1":{"ctx_map":{"mask":true,"value":false,"position":"center","baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Text15":{"ctx_map":{"text":"收藏"}},"Text17":{"ctx_map":{"text":"今天"}},"Text19":{"ctx_map":{"text":"这是一个文本组件"}},"Text20":{"ctx_map":{"text":"这是一个文本组件"}},"Text21":{"ctx_map":{"text":"暂无精彩视频,等等再来看吧~"}},"Text26":{"ctx_map":{"text":"保存"}},"Text27":{"ctx_map":{"text":"取消"}},"Text38":{"ctx_map":{"text":"这是一个文本组件"}},"Text39":{"ctx_map":{"text":""}},"Text40":{"ctx_map":{"text":"收藏","numberOfLines":1}},"View10":{"ctx_map":{}},"View14":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"View31":{"ctx_map":{}},"View32":{"ctx_map":{}},"View33":{"ctx_map":{}},"View34":{"ctx_map":{}},"View35":{"ctx_map":{}},"View38":{"ctx_map":{}},"View39":{"ctx_map":{}},"View54":{"ctx_map":{}},"View55":{"ctx_map":{}},"View57":{"ctx_map":{}},"View58":{"ctx_map":{}},"View59":{"ctx_map":{}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewFor3":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewIf11":{"ctx_map":{"value":true}},"ViewIf23":{"ctx_map":{"value":true}},"ViewIf24":{"ctx_map":{"value":true}},"ViewIf25":{"ctx_map":{"value":true}},"DwappCloud1":{"ctx_map":{"bool2":false,"bool3":false,"bool4":true,"date1":"2021-09-01","date2":"2021-07-01","date3":"2021-07-03","prop1":[{"date":"2021-07-01","text":["吃饭"],"high_light":true},{"date":"2021-07-02","text":["喝水","睡觉"],"high_light":false},{"date":"2021-07-03","text":["打豆豆"],"color":"white","high_light":true}],"style3":null,"style7":null,"style8":null,"style9":null,"style10":null,"style12":null,"style13":null,"numberb1":41}},"DwappCloud2":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"PickerView1":{"ctx_map":{"range":[[{"label":"上午","value":"am"},{"label":"下午","value":"pm"}]],"value":[0]}},"ScrollView1":{"ctx_map":{"type":"list","bounces":true,"scrollX":false,"scrollY":true,"showScrollbar":true,"extraStyleKeys":[],"refresherEnabled":true,"refresherBackground":"#F8F8F8"}},"NativeButton1":{"ctx_map":{"type":"button"}},"NativeButton2":{"ctx_map":{"type":"button"}}}};
slide.components.DwappCloud1.ctx_map.style3 = {
  width: pm(30),
  height: pm(30),
  fontSize: pm(12),
  textAlign: "center",
  lineHeight: pm(30),
  flexDirection: "column",
};
slide.components.DwappCloud1.ctx_map.style7 = {
  color: "#666666",
  fontSize: pm(12),
  textAlign: "center",
  flexDirection: "column",
};
slide.components.DwappCloud1.ctx_map.style8 = {
  top: "50%",
  left: "50%",
  color: "rgba(206, 193, 193, 0.363)",
  zIndex: 0,
  fontSize: pm(60),
  position: "absolute",
  transform: [{translateX: undefined}, {translateY: undefined}],
  flexDirection: "column",
};
slide.components.DwappCloud1.ctx_map.style9 = {
  fontSize: pm(16),
  textAlign: "center",
  paddingTop: pm(5),
  paddingLeft: pm(5),
  paddingRight: pm(5),
  flexDirection: "column",
  paddingBottom: pm(5),
};
slide.components.DwappCloud1.ctx_map.style10 = {
  fontSize: pm(12),
  textAlign: "center",
  flexDirection: "column",
};
slide.components.DwappCloud1.ctx_map.style12 = {
  width: pm(300),
  flexDirection: "column",
};
slide.components.DwappCloud1.ctx_map.style13 = {
  color: "#93bee600",
  width: pm(30),
  height: pm(30),
  fontSize: pm(12),
  textAlign: "center",
  lineHeight: pm(30),
  flexDirection: "column",
};
slide.components.DwappCloud2.ctx_map.valueStyle = {
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
slide.components.DwappCloud2.ctx_map.containerStyle = {
  marginBottom: pm(18),
  flexDirection: "column",
};
slide.components.DwappCloud2.ctx_map.valueInputStyle = {
  color: "#333333",
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-eat_video_list';

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
      {!!(state.ready) /* ViewIf11 */ && (<><View /* View1 */   style={styles.xdwmt}><View /* View5 */   style={styles.xdwms}><XbenchcView /* View10 */   viewStyle={styles.xdwmp} onClick={getEvent('View10:onClick:func13:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image6 */ style={styles.xdwmn} source={dwtools.qiniu(slide.components.Image6.ctx_map.src, slide.components.Image6.ctx_map.fop)}  />
<Text /* Text17 */ style={styles.xdwmo} >{computeds.computed3({date: state.date}, state)}</Text></XbenchcView>
<View /* View6 */   style={styles.xdwmr}><XbenchcView /* View9 */   viewStyle={styles.xdwmr} onClick={getEvent('View9:onClick:func18:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image7 */ style={styles.xdwmn} source={dwtools.qiniu(slide.components.Image7.ctx_map.src, slide.components.Image7.ctx_map.fop)}  />
<Text /* Text15 */ style={styles.xdwmq} >{slide.components.Text15.ctx_map.text}</Text></XbenchcView></View></View></View>
<XbenchcScrollView /* ScrollView1 */ style={[styles.xdwnf, ({
  backgroundColor: state.items.length ? '#F6F6F6' : "#FFFFFF"
})]} refresherEnabled={ true } refresherTriggered={ state.triggerRefresh } refresherBackground={ "#F8F8F8" } scrollX={ false } scrollY={ true } showScrollbar={ true } bounces={ true }  onRefresherRefresh={getEvent('ScrollView1:onRefresherRefresh:refresh:', {}, bagForKeyValue, bagForIndex)}>{!!(state.items.length > 0) /* ViewIf3 */ && (<><View /* View38 */   style={styles.xdwna}>{(state.items).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor3' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor3 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><XbenchcView /* View39 */   viewStyle={styles.xdwn9} onClick={getEvent('View39:onClick:func20:', {eventData: "eat_video_player", eventData2: bagForItem}, bagForKeyValue, bagForIndex)}><View /* View57 */   style={styles.xdwmv}><Text /* Text19 */ style={styles.xdwmu} >{bagForItem.data.start_time.slice(11, 16)}</Text></View>
<View /* View55 */   style={styles.xdwn8}><Text /* Text39 */ style={styles.xdwmw} >{bagForItem.data.summary}</Text>
<View /* View59 */   style={styles.xdwn7}><View /* View14 */   style={styles.xdwn3}><XbenchcImage /* Image1 */ style={styles.xdwmx} source={dwtools.qiniu(bagForItem.data.poster, slide.components.Image1.ctx_map.fop)}  />
<View /* View16 */   style={styles.xdwmz}><Text /* Text20 */ style={styles.xdwmy} >{computeds.computed4({duration: bagForItem.data.duration}, state)}</Text></View>
{!!(["to_comment", "commenting","uploading"].includes(bagForItem.data.state)) /* ViewIf23 */ && (<><View /* View54 */   style={styles.xdwn0}><Text /* Text38 */ style={styles.xdwmy} >{computeds.computed5({item: bagForItem}, state)}</Text></View></>)}
<View /* View17 */   style={styles.xdwn2}><XbenchcImage /* Image3 */ style={styles.xdwn1} source={dwtools.qiniu(slide.components.Image3.ctx_map.src, slide.components.Image3.ctx_map.fop)}  /></View></View>
<XbenchcView /* View58 */   viewStyle={styles.xdwn6} catchClick={getEvent('View58:catchClick:func3:', {eventData: bagForItem.uuid, eventData2: bagForIndex}, bagForKeyValue, bagForIndex)}>{!!(bagForItem.data.is_collect) /* ViewIf25 */ && (<><XbenchcImage /* Image4 */ style={styles.xdwn4} source={dwtools.qiniu(slide.components.Image4.ctx_map.src, slide.components.Image4.ctx_map.fop)}  /></>)}
{!!(!bagForItem.data.is_collect) /* ViewIf24 */ && (<><XbenchcImage /* Image5 */ style={styles.xdwn4} source={dwtools.qiniu(slide.components.Image5.ctx_map.src, slide.components.Image5.ctx_map.fop)}  /></>)}
<Text /* Text40 */ style={styles.xdwn5} numberOfLines={1}>{slide.components.Text40.ctx_map.text}</Text></XbenchcView></View></View></XbenchcView></ViewForItem> })}</View></>)}
{!!(!state.items.length) /* ViewIf4 */ && (<><View /* View18 */   style={styles.xdwne}><XbenchcImage /* Image2 */ style={styles.xdwnb} source={dwtools.getLocalResource('xdwnc_lthar0kl')}  />
<Text /* Text21 */ style={styles.xdwnd} >{slide.components.Text21.ctx_map.text}</Text></View></>)}</XbenchcScrollView>
<XbenchcModal /* Modal1 */ rootStyle={styles.xdwnl} value={ state.datePop } mask={ true } maskClosable={ true }  onValueChange={getEvent('Modal1:onValueChange:func6:', {}, bagForKeyValue, bagForIndex)}><View /* View31 */   style={styles.xdwnk}><View /* View35 */   style={styles.xdwng}><Xbenchc274506 /* DwappCloud1 */ showBg={ slide.components.DwappCloud1.ctx_map.bool2 } allowPre={ true } allowNext={ computeds.computed6({}, state) } maxDate={ slide.components.DwappCloud1.ctx_map.date1 } minDate={ slide.components.DwappCloud1.ctx_map.date2 } value={ state.date } remarks={ state.remarks } textStyle={ slide.components.DwappCloud1.ctx_map.style3 } remarkTextStyle={ slide.components.DwappCloud1.ctx_map.style7 } bgTextStyle={ slide.components.DwappCloud1.ctx_map.style8 } headerMonthStyle={ slide.components.DwappCloud1.ctx_map.style9 } headerWeekStyle={ slide.components.DwappCloud1.ctx_map.style10 } containerStyle={ slide.components.DwappCloud1.ctx_map.style12 } disableTextStyle={ slide.components.DwappCloud1.ctx_map.style13 } cellHeight={ slide.components.DwappCloud1.ctx_map.numberb1 }  onClick={getEvent('DwappCloud1:onClick:func7:', {}, bagForKeyValue, bagForIndex)} panelChange={getEvent('DwappCloud1:panelChange:func24:', {}, bagForKeyValue, bagForIndex)}></Xbenchc274506></View>
<View /* View32 */   style={styles.xdwnj}><XbenchcView /* View34 */   viewStyle={styles.xdwni} onClick={getEvent('View34:onClick:func6:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image8 */ style={styles.xdwnh} source={dwtools.qiniu(slide.components.Image8.ctx_map.src, slide.components.Image8.ctx_map.fop)}  /></XbenchcView></View></View></XbenchcModal>
<Xbenchc275104 /* DwappCloud2 */ valueStyle={ slide.components.DwappCloud2.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud2.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud2.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud2:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104></>)}
    </ErrorBoundary>
  )
}
