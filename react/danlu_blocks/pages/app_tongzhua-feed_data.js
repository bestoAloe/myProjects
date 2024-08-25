
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import Xbenchc176286 from '../components/Xbenchc176286'
import ViewForItem from '../../xbench/components/ViewForItem'
import XbenchcEcharts from '../../xbench/xbenchc/components/XbenchcEcharts'
import { Shadow } from 'react-native-shadow-2'
import XbenchcScrollView from '../../xbench/xbenchc/components/XbenchcScrollView'
import XbenchcModal from '../../xbench/xbenchc/components/XbenchcModal'
import XbenchcPickerView from '../../xbench/xbenchc/components/XbenchcPickerView'
import XbenchcButton from '../../xbench/xbenchc/components/XbenchcButton'
import Xbenchc275104 from '../components/Xbenchc275104'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

let action199lock = false
let action204lock = false
let modalInstance = (null)
const action178 = modalInstance
/* debug */ console.log('action178(声明变量):', action178)
let defaultOption = ({/**/  tooltip: {/**/    trigger: "item",/**/    position: 'top',/**/    axisPointer: {/**/      type: "none",/**/    },/**/    triggerOn: 'mousemove|click',/**/    textStyle: {/**/      color: '#000000'/**/    },/**/    borderWidth: 0,/**/    formatter: '{c}克',/**/  },/**/  xAxis: {/**/    axisTick: {/**/      length: 0,/**/    },/**/    type: 'category',/**/    boundaryGap: false,/**/    data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00','14:00', '16:00', '18:00', '20:00', '22:00']/**/  },/**/  yAxis: {/**/    show: true,/**/    type: 'value',/**/    axisLabel: {/**/      show: true/**/    },/**/    min: 0,/**/    interval: 10,/**/    splitLine: {/**/      lineStyle: {/**/        type: 'dashed'/**/      }/**/    }/**/  },/**/  series: [/**/    {/**/      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],/**/      type: 'line',/**/      symbol: 'circle',/**/      symbolSize: 10,/**/      itemStyle: {/**/        color: '#FFC165'/**/      },/**/      lineStyle: {/**/        color: '#5470C6',/**/        width: 0,/**/        type: 'dashed'/**/      },/**/    }/**/  ],/**/  grid: {/**/    bottom: 30,/**/    top: 30,/**/    backgroundColor: "#ccc"/**/  }/**/})
const action214 = defaultOption
/* debug */ console.log('action214(声明变量):', action214)
let defaultOptionWillDel = ({/**/  tooltip: {/**/    trigger: "item",/**/    position: 'top',/**/    axisPointer: {/**/      type: "none",/**/    },/**/    triggerOn: 'mousemove|click',/**/    textStyle: {/**/      color: '#000000'/**/    },/**/    borderWidth: 0,/**/    formatter: '{c}克',/**/  },/**/  xAxis: {/**/    axisTick: {/**/        length: 0/**/    },/**/    type: 'category',/**/    boundaryGap: false,/**/    data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],/**/    axisLine: {/**/      lineStyle: {/**/        color: '#EEEEEE'/**/      }/**/    },/**/    axisLabel: {/**/      color: '#666666'/**/    }/**/  },/**/  yAxis: {/**/    show: true,/**/    type: 'value',/**/    axisLabel: {/**/      show: false/**/    },/**/    max: 30,/**/    interval: 10,/**/    splitLine: {/**/      lineStyle: {/**/        type: 'dashed'/**/      }/**/    }/**/  },/**/  series: [/**/    {/**/      data: [0, 25, 18, 30, 20, 42],/**/      type: 'bar',/**/      areaStyle: {},/**/      itemStyle: {/**/        color: '#FFD355',/**/        borderRadius: [85, 85, 0, 0],/**/      },/**/      barWidth: 10,/**/    }/**/  ],/**/  grid: {/**/    bottom: 35,/**/    top: 40,/**/  }/**/})
const action215 = defaultOptionWillDel
/* debug */ console.log('action215(声明变量):', action215)
let echarts = (null)
const action227 = echarts
/* debug */ console.log('action227(声明变量):', action227)
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
/* debug */ console.log('action1(声明函数:开始调用:onCreateState):', { store, event })
  const action8 = state.device = (null)
  /* debug */ console.log('action8(声明状态):', action8)
  const action9 = state.device_member = (null)
  /* debug */ console.log('action9(声明状态):', action9)
  const action14 = state.platform = ("dwapp")
  /* debug */ console.log('action14(声明状态):', action14)
  const action36 = state.mode = ("preview")
  /* debug */ console.log('action36(声明状态):', action36)
  const action62 = state.option = (defaultOption)
  /* debug */ console.log('action62(声明状态):', action62)
  const action243 = state.defaultOption = (defaultOption)
  /* debug */ console.log('action243(声明状态):', action243)
  const action66 = state.pets = ([])
  /* debug */ console.log('action66(声明状态):', action66)
  const action67 = state.select_pet = (null)
  /* debug */ console.log('action67(声明状态):', action67)
  const action77 = state.date = (null)
  /* debug */ console.log('action77(声明状态):', action77)
  const action130 = state.datePop = (false)
  /* debug */ console.log('action130(声明状态):', action130)
  const action131 = state.dateValue = ([])
  /* debug */ console.log('action131(声明状态):', action131)
  const action132 = state.datePickerRange = ([])
  /* debug */ console.log('action132(声明状态):', action132)
  const action80 = state.eat_items = ([])
  /* debug */ console.log('action80(声明状态):', action80)
  const action83 = state.dots = ([{id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7}])
  /* debug */ console.log('action83(声明状态):', action83)
  const action84 = state.petPop = (false)
  /* debug */ console.log('action84(声明状态):', action84)
  const action91 = state.ready = (false)
  /* debug */ console.log('action91(声明状态):', action91)
  const action98 = state.currentItem = (null)
  /* debug */ console.log('action98(声明状态):', action98)
  const action107 = state.aggs = (null)
  /* debug */ console.log('action107(声明状态):', action107)
  const action109 = state.weekAvg = (0)
  /* debug */ console.log('action109(声明状态):', action109)
  const action117 = state.showChart = (true)
  /* debug */ console.log('action117(声明状态):', action117)
  const action127 = state.showTip = (false)
  /* debug */ console.log('action127(声明状态):', action127)
  /* action190: 投影 */
  const action191 = state.rnappShadow = ({ offset: [0, 4], distance: 14, startColor: '#00000005' })
  /* debug */ console.log('action191(声明状态):', action191)
  /* action209: 列表加载 */
  const action210 = state.offset = (0)
  /* debug */ console.log('action210(声明状态):', action210)
  const action211 = state.reachBottom = (false)
  /* debug */ console.log('action211(声明状态):', action211)
  const action212 = state.limit = (15)
  /* debug */ console.log('action212(声明状态):', action212)
  const action213 = state.refresherTriggered = (false)
  /* debug */ console.log('action213(声明状态):', action213)
/* debug */ console.log('action1(声明函数:结束调用:onCreateState):', { store, event })
  return state
}

const action10 = actions['onShow'] = async function (store, event) {
  const state = store.state
/* debug */ console.log('action10(声明函数:开始调用:onShow):', { store, event })
  const action78now = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace('Z', '')
  const action78 = action78now.split('T')[0] + 'T00:00:00.000'
  /* debug */ console.log('action78(调用系统接口):', (() => { try { return action78 } catch (e) { return 'ReferenceError' } })())
  const action79 = store.commit('setState', {["state.date"]: action78.slice(0, 10), ["state.platform"]: dw.platform})
  /* debug */ console.log('action79(修改状态):', action79)
  let action241
  
        action241 = (dw.platform === 'rnapp') ? await (async () => {
    const action231 = await store.dispatch("func78", {})
    /* debug */ console.log('action231(调用函数):', action231)
  
        })() : undefined
        
  /* debug */ console.log('action241(组合功能(装饰器)):', (() => { try { return action241 } catch (e) { return 'ReferenceError' } })())
  const action35 = await store.dispatch("func8", {})
  /* debug */ console.log('action35(调用函数):', action35)
  const action92 = store.commit('setState', {["state.ready"]: true})
  /* debug */ console.log('action92(修改状态):', action92)
  const action13 = await store.dispatch("func1", {})
  /* debug */ console.log('action13(调用函数):', action13)
  const action106 = await Promise.all([
    (async () => {
      const action105 = await store.dispatch("func14", {})
      /* debug */ console.log('action105(调用函数):', action105)
      return action105
    })(),
    (async () => {
      const action81 = await store.dispatch("func12", {})
      /* debug */ console.log('action81(调用函数):', action81)
      return action81
    })(),
    (async () => {
      const action173 = await store.dispatch("func17", {})
      /* debug */ console.log('action173(调用函数):', action173)
      return action173
    })(),
  ])

/* debug */ console.log('action10(声明函数:结束调用:onShow):', { store, event })
}

const action2 = actions['func1'] = async function (store, event) {
  const state = store.state
/* debug */ console.log('action2(声明函数:开始调用:加载设备信息):', { store, event })
  const action3 = await dw.app.run("device.user_get", {"uuid": dw.query.uuid || "f5892e18-23d7-4903-a044-97094e97c7af"})
  /* debug */ console.log('action3(调用后端云函数):', action3)
  
        if ((action3.status) === ("error")) {
          const action4message = (action3.message || "操作错误！")
          const action4title = ("提示")
          action4message && dw.alert(action4title, action4message)
          return {}
        }
        
  /* debug */ console.log('action4(调用系统接口):', (() => { try { return action4 } catch (e) { return 'ReferenceError' } })())
  let device_member = (action3.device_member)
  const action39 = device_member
  /* debug */ console.log('action39(声明变量):', action39)
  const action40 = ((store, event) => {
device_member.data.feed_config.timerMode.data = device_member.data.feed_config.timerMode.data.map(x=>({
    ...x,
    is_select: false
}))
})(store, event)
  /* debug */ console.log('action40(执行代码):', action40)
  const action5 = store.commit('setState', {["state.device"]: action3.object, ["state.device_member"]: device_member})
  /* debug */ console.log('action5(修改状态):', action5)
/* debug */ console.log('action2(声明函数:结束调用:加载设备信息):', { store, event })
}

const action102 = actions['func14'] = async function (store, event) {
  const state = store.state
/* debug */ console.log('action102(声明函数:开始调用:加载统计数据):', { store, event })
  const action103 = await dw.app.run("eat.today_agg", {"date": state.date, "pet_uuid": state.select_pet ? state.select_pet.uuid : undefined, "device_member_uuid": state.device_member.uuid})
  /* debug */ console.log('action103(调用后端云函数):', action103)
  const action104 = console.log('[func14#action104] 打印(action103)的返回值', action103)
  /* debug */ console.log('action104(调用系统接口):', (() => { try { return action104 } catch (e) { return 'ReferenceError' } })())
  const action239 = store.commit('setState', {["state.showChart"]: false})
  /* debug */ console.log('action239(修改状态):', action239)
  let group = (action103.group)
  const action112 = group
  /* debug */ console.log('action112(声明变量):', action112)
  const action108 = store.commit('setState', {["state.aggs"]: action103.aggs, ["state.weekAvg"]: action103.weekAvg, ["state.option.series[0].data"]: [/**/  group[0].weight,/**/  group[1].weight,/**/  group[2].weight,/**/  group[3].weight,/**/  group[4].weight,/**/  group[5].weight,/**/  group[6].weight,/**/  group[7].weight,/**/  group[8].weight,/**/  group[9].weight,/**/  group[10].weight,/**/  group[11].weight/**/]})
  /* debug */ console.log('action108(修改状态):', action108)
  await new Promise((resolve, reject) => setTimeout(resolve, 100))
  /* debug */ console.log('action242(调用系统接口):', (() => { try { return action242 } catch (e) { return 'ReferenceError' } })())
  const action240 = store.commit('setState', {["state.showChart"]: true})
  /* debug */ console.log('action240(修改状态):', action240)
/* debug */ console.log('action102(声明函数:结束调用:加载统计数据):', { store, event })
}

const action232 = actions['func78'] = function (store, event) {
  const state = store.state
/* debug */ console.log('action232(声明函数:开始调用:从缓存中查询设备信息):', { store, event })
  const action233 = dw.getGlobalLocals("allDeviceMember")
  /* debug */ console.log('action233(调用系统接口):', (() => { try { return action233 } catch (e) { return 'ReferenceError' } })())
  const action234 = ((store, event) => {
return action233.filter( tmp => tmp.data.device_uuid === dw.query.uuid)
})(store, event)
  /* debug */ console.log('action234(执行代码):', action234)
  let currentItem = (action234[0])
  const action235 = currentItem
  /* debug */ console.log('action235(声明变量):', action235)
  const action236 = store.commit('setState', {["state.device"]: currentItem.data.device_uuid__toone, ["state.device_member"]: currentItem})
  /* debug */ console.log('action236(修改状态):', action236)
/* debug */ console.log('action232(声明函数:结束调用:从缓存中查询设备信息):', { store, event })
}

const action30 = actions['func3'] = function (store, event) {
  const state = store.state
/* debug */ console.log('action30(声明函数:开始调用:跳转页面):', { store, event })
  let slug = (event.context.eventData)
  const action31 = slug
  /* debug */ console.log('action31(声明变量):', action31)
  const action32 = dw.app.goToPappUrl(slug, {"uuid": state.device.uuid}, {redirectTo: false})
  /* debug */ console.log('action32(调用系统接口):', (() => { try { return action32 } catch (e) { return 'ReferenceError' } })())
/* debug */ console.log('action30(声明函数:结束调用:跳转页面):', { store, event })
}

const action126 = actions['func15'] = function (store, event) {
  const state = store.state
/* debug */ console.log('action126(声明函数:开始调用:弹出/关闭提示):', { store, event })
  const action128 = store.commit('setState', {["state.showTip"]: !state.showTip})
  /* debug */ console.log('action128(修改状态):', action128)
/* debug */ console.log('action126(声明函数:结束调用:弹出/关闭提示):', { store, event })
}

const action228 = actions['func20'] = function (store, event) {
  const state = store.state
/* debug */ console.log('action228(声明函数:开始调用:初始化echarts):', { store, event })
  const action229 = echarts = (event.data)
  /* debug */ console.log('action229(赋值变量):', action229)
/* debug */ console.log('action228(声明函数:结束调用:初始化echarts):', { store, event })
}

const action182 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
/* debug */ console.log('action182(声明函数:开始调用:获取model实例):', { store, event })
  const action183 = modalInstance = (event.data)
  /* debug */ console.log('action183(赋值变量):', action183)
  const action184 = console.log('[getModalInstance#action184] 打印(modalInstance)', modalInstance)
  /* debug */ console.log('action184(调用系统接口):', (() => { try { return action184 } catch (e) { return 'ReferenceError' } })())
/* debug */ console.log('action182(声明函数:结束调用:获取model实例):', { store, event })
}

/* action192: 列表 */
const action63 = actions['func8'] = async function (store, event) {
  const state = store.state
/* debug */ console.log('action63(声明函数:开始调用:加载宠物列表):', { store, event })
  const action64 = await dw.app.run("pet.list", {"limit": 1000, "offset": 0, "filters": {data__device_member_uuid: state.device_member.uuid}})
  /* debug */ console.log('action64(调用后端云函数):', action64)
  let objects = (action64.objects)
  const action120 = objects
  /* debug */ console.log('action120(声明变量):', action120)
  if (objects.length !== 1) {
    const action125 = objects = ([/**/  {/**/    uuid: 'all', data: {name: '全部', image: 'u/dev064/2023/03/20/KzgN3srQmTFWhZA9wFkEAQ/SketchPngf1073b26b9cb9c510029f1db1c4ca39efd9f08b63882000cfea59d7e8588993b.png'}/**/  },/**/  ...objects,/**/])
    /* debug */ console.log('action125(赋值变量):', action125)
  }
  const action65 = store.commit('setState', {["state.pets"]: objects, ["state.select_pet"]: objects[0]})
  /* debug */ console.log('action65(修改状态):', action65)
/* debug */ console.log('action63(声明函数:结束调用:加载宠物列表):', { store, event })
}

const action74 = actions['func12'] = async function (store, event) {
  const state = store.state
/* debug */ console.log('action74(声明函数:开始调用:加载喂食记录):', { store, event })
  const action76 = await dw.app.run("eat.list", {"limit": state.limit, "offset": state.offset, "filters": {/**/  data__device_member_uuid: state.device_member.uuid,/**/  data__start_time__gte: `${state.date}T00:00:00.000`,/**/  data__end_time__lte: `${state.date}T23:59:59.999`,/**/  data__weight__gt: 0,/**/  data__pet_uuid: state.select_pet.uuid === 'all' ? undefined : state.select_pet.uuid,/**/}, "order_by": [], "select_related": {/**/  toone: {/**/    pet_uuid__pet: {},/**/    video_uuid__video: {},/**/  }/**/}})
  /* debug */ console.log('action76(调用后端云函数):', action76)
  let objects = (action76.objects)
  const action225 = objects
  /* debug */ console.log('action225(声明变量):', action225)
  const action185 = console.log('[func12#action185] 打印(action75)的返回值', action76)
  /* debug */ console.log('action185(调用系统接口):', (() => { try { return action185 } catch (e) { return 'ReferenceError' } })())
  if ((action76.meta.offset) === (0)) {
    const action75 = store.commit('setState', {["state.eat_items"]: objects})
    /* debug */ console.log('action75(修改状态):', action75)
  } else {
    const action221 = store.commit('setState', {["state.eat_items__uconcat"]: ({field: 'id', list: objects})})
    /* debug */ console.log('action221(修改状态):', action221)
  }
  if ((objects.length) < (state.limit)) {
    const action224 = store.commit('setState', {["state.reachBottom"]: true})
    /* debug */ console.log('action224(修改状态):', action224)
  }
/* debug */ console.log('action74(声明函数:结束调用:加载喂食记录):', { store, event })
}

const action194 = actions['refresh'] = async function (store, event) {
  const state = store.state
/* debug */ console.log('action194(声明函数:开始调用:重置为第一页刷新):', { store, event })
  const action195 = store.commit('setState', {["state.offset"]: 0, ["state.reachBottom"]: false})
  /* debug */ console.log('action195(修改状态):', action195)
  const action197 = await store.dispatch("func12", {})
  /* debug */ console.log('action197(调用函数):', action197)
/* debug */ console.log('action194(声明函数:结束调用:重置为第一页刷新):', { store, event })
}

const action198 = actions['handleScrollToLower'] = async function (store, event) {
  const state = store.state
/* debug */ console.log('action198(声明函数:开始调用:触底加载):', { store, event })
  const action199 = await (async () => {
  
      if (action199lock) return true
      action199lock = true
      try {
    
        if (!!(state.reachBottom) === (true)) {
          const action200message = ("")
          const action200title = ("提示")
          action200message && dw.alert(action200title, action200message)
          return {}
        }
        
    /* debug */ console.log('action200(调用系统接口):', (() => { try { return action200 } catch (e) { return 'ReferenceError' } })())
    const action201 = store.commit('setState', {["state.offset"]: state.offset + state.limit})
    /* debug */ console.log('action201(修改状态):', action201)
    const action202 = await store.dispatch("func12", {})
    /* debug */ console.log('action202(调用函数):', action202)
  
      } catch (e) {
        throw e
      } finally {
        action199lock = false
      }
      
  })()
  /* debug */ console.log('action199(组合功能(装饰器)):', (() => { try { return action199 } catch (e) { return 'ReferenceError' } })())
/* debug */ console.log('action198(声明函数:结束调用:触底加载):', { store, event })
}

const action203 = actions['handlePullRefresh'] = async function (store, event) {
  const state = store.state
/* debug */ console.log('action203(声明函数:开始调用:下拉刷新):', { store, event })
  const action204 = await (async () => {
  
      if (action204lock) return true
      action204lock = true
      try {
    const action205 = store.commit('setState', {["state.refresherTriggered"]: true})
    /* debug */ console.log('action205(修改状态):', action205)
    const action206 = await store.dispatch("refresh", {})
    /* debug */ console.log('action206(调用函数):', action206)
    await new Promise((resolve, reject) => setTimeout(resolve, 150))
    /* debug */ console.log('action207(调用系统接口):', (() => { try { return action207 } catch (e) { return 'ReferenceError' } })())
    const action208 = store.commit('setState', {["state.refresherTriggered"]: false})
    /* debug */ console.log('action208(修改状态):', action208)
  
      } catch (e) {
        throw e
      } finally {
        action204lock = false
      }
      
  })()
  /* debug */ console.log('action204(组合功能(装饰器)):', (() => { try { return action204 } catch (e) { return 'ReferenceError' } })())
/* debug */ console.log('action203(声明函数:结束调用:下拉刷新):', { store, event })
}

/* action188: 宠物 */
const action93 = actions['func10'] = function (store, event) {
  const state = store.state
/* debug */ console.log('action93(声明函数:开始调用:弹出宠物列表):', { store, event })
  const action99 = store.commit('setState', {["state.currentItem"]: event.context.eventData, ["state.petPop"]: true})
  /* debug */ console.log('action99(修改状态):', action99)
/* debug */ console.log('action93(声明函数:结束调用:弹出宠物列表):', { store, event })
}

const action72 = actions['func11'] = async function (store, event) {
  const state = store.state
/* debug */ console.log('action72(声明函数:开始调用:选择一个宠物):', { store, event })
  const action73 = store.commit('setState', {["state.select_pet"]: event.context.eventData})
  /* debug */ console.log('action73(修改状态):', action73)
  const action113 = await Promise.all([
    (async () => {
      const action101 = await store.dispatch("func12", {})
      /* debug */ console.log('action101(调用函数):', action101)
      return action101
    })(),
    (async () => {
      const action114 = await store.dispatch("func14", {})
      /* debug */ console.log('action114(调用函数):', action114)
      return action114
    })(),
  ])

  const action116 = store.commit('setState', {["state.showChart"]: false})
  /* debug */ console.log('action116(修改状态):', action116)
  await new Promise((resolve, reject) => setTimeout(resolve, 1))
  /* debug */ console.log('action118(调用系统接口):', (() => { try { return action118 } catch (e) { return 'ReferenceError' } })())
  const action119 = store.commit('setState', {["state.showChart"]: true})
  /* debug */ console.log('action119(修改状态):', action119)
/* debug */ console.log('action72(声明函数:结束调用:选择一个宠物):', { store, event })
}

const action85 = actions['func13'] = async function (store, event) {
  const state = store.state
/* debug */ console.log('action85(声明函数:开始调用:确认选择宠物):', { store, event })
  const action86 = await dw.app.run("video.bind_pet", {"id": state.currentItem.data.video_uuid__toone.id, "pet_uuid": state.select_pet.uuid})
  /* debug */ console.log('action86(调用后端云函数):', action86)
  
        if ((action86.status) === ("error")) {
          const action87message = (action86.message || "操作错误！")
          const action87title = ("提示")
          action87message && dw.alert(action87title, action87message)
          return {}
        }
        
  /* debug */ console.log('action87(调用系统接口):', (() => { try { return action87 } catch (e) { return 'ReferenceError' } })())
  let message = ("绑定成功")
  const action180 = message
  /* debug */ console.log('action180(声明变量):', action180)
  const action181 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  /* debug */ console.log('action181(执行代码):', action181)
  const action100 = await store.dispatch("func12", {})
  /* debug */ console.log('action100(调用函数):', action100)
  const action89 = store.commit('setState', {["state.petPop"]: false})
  /* debug */ console.log('action89(修改状态):', action89)
/* debug */ console.log('action85(声明函数:结束调用:确认选择宠物):', { store, event })
}

const action186 = actions['func19'] = function (store, event) {
  const state = store.state
/* debug */ console.log('action186(声明函数:开始调用:选择宠物 - 弹窗隐藏):', { store, event })
  const action187 = store.commit('setState', {["state.petPop"]: false})
  /* debug */ console.log('action187(修改状态):', action187)
/* debug */ console.log('action186(声明函数:结束调用:选择宠物 - 弹窗隐藏):', { store, event })
}

/* action134: 日期 */
const action135 = actions['func16'] = function (store, event) {
  const state = store.state
/* debug */ console.log('action135(声明函数:开始调用:点击日期):', { store, event })
  const action136 = store.commit('setState', {["state.datePop"]: true})
  /* debug */ console.log('action136(修改状态):', action136)
/* debug */ console.log('action135(声明函数:结束调用:点击日期):', { store, event })
}

const action137 = actions['func17'] = function (store, event) {
  const state = store.state
/* debug */ console.log('action137(声明函数:开始调用:构建日期PickerRange):', { store, event })
  const action138 = ((store, event) => {
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
  /* debug */ console.log('action138(执行代码):', action138)
  const action139 = store.commit('setState', {["state.datePickerRange"]: action138})
  /* debug */ console.log('action139(修改状态):', action139)
  /* action140: 更新默认选项 */
  let yearIndex = (action138[0].findIndex(x=>x.label === state.date.slice(0, 4)))
  const action141 = yearIndex
  /* debug */ console.log('action141(声明变量):', action141)
  let monthIndex = (action138[1].findIndex(x=>x.label === state.date.slice(5, 7)))
  const action142 = monthIndex
  /* debug */ console.log('action142(声明变量):', action142)
  let dateIndex = (action138[2].findIndex(x=>x.label === state.date.slice(8, 10)))
  const action143 = dateIndex
  /* debug */ console.log('action143(声明变量):', action143)
  const action144 = store.commit('setState', {["state.dateValue"]: [yearIndex, monthIndex, dateIndex]})
  /* debug */ console.log('action144(修改状态):', action144)
/* debug */ console.log('action137(声明函数:结束调用:构建日期PickerRange):', { store, event })
}

const action145 = actions['func5'] = async function (store, event) {
  const state = store.state
/* debug */ console.log('action145(声明函数:开始调用:监听日期选择):', { store, event })
  const action146 = store.commit('setState', {["state.dateValue"]: event.data.detail.value})
  /* debug */ console.log('action146(修改状态):', action146)
  const action147 = await store.dispatch("func16", {})
  /* debug */ console.log('action147(调用函数):', action147)
/* debug */ console.log('action145(声明函数:结束调用:监听日期选择):', { store, event })
}

const action148 = actions['func6'] = function (store, event) {
  const state = store.state
/* debug */ console.log('action148(声明函数:开始调用:取消选择日期):', { store, event })
  const action149 = store.commit('setState', {["state.datePop"]: false})
  /* debug */ console.log('action149(修改状态):', action149)
/* debug */ console.log('action148(声明函数:结束调用:取消选择日期):', { store, event })
}

const action150 = actions['func7'] = async function (store, event) {
  const state = store.state
/* debug */ console.log('action150(声明函数:开始调用:确认选择日期):', { store, event })
  /* action151: 计算实际日期 */
  let year = (String(state.dateValue[0]+state.datePickerRange[0][0].value))
  const action152 = year
  /* debug */ console.log('action152(声明变量):', action152)
  const action153 = console.log('[func7#action153] 打印(year)的返回值', year)
  /* debug */ console.log('action153(调用系统接口):', (() => { try { return action153 } catch (e) { return 'ReferenceError' } })())
  let month = (String(state.dateValue[1]+1).padStart(2,0))
  const action154 = month
  /* debug */ console.log('action154(声明变量):', action154)
  const action155 = console.log('[func7#action155] 打印(month)的返回值', month)
  /* debug */ console.log('action155(调用系统接口):', (() => { try { return action155 } catch (e) { return 'ReferenceError' } })())
  let date = (String(state.dateValue[2]+1).padStart(2,0))
  const action156 = date
  /* debug */ console.log('action156(声明变量):', action156)
  const action157 = console.log('[func7#action157] 打印(date)的返回值', date)
  /* debug */ console.log('action157(调用系统接口):', (() => { try { return action157 } catch (e) { return 'ReferenceError' } })())
  const action158 = store.commit('setState', {["state.date"]: `${year}-${month}-${date}`, ["state.datePop"]: false})
  /* debug */ console.log('action158(修改状态):', action158)
  const action162 = await store.dispatch("func12", {})
  /* debug */ console.log('action162(调用函数):', action162)
  const action174 = await store.dispatch("func14", {})
  /* debug */ console.log('action174(调用函数):', action174)
/* debug */ console.log('action150(声明函数:结束调用:确认选择日期):', { store, event })
}

const action163 = actions['func18'] = function (store, event) {
  const state = store.state
/* debug */ console.log('action163(声明函数:开始调用:更新日期选项):', { store, event })
  const action164 = JSON.parse(JSON.stringify(state.datePickerRange))
  /* debug */ console.log('action164(调用系统接口):', (() => { try { return action164 } catch (e) { return 'ReferenceError' } })())
  let datePickerRange = (action164)
  const action165 = datePickerRange
  /* debug */ console.log('action165(声明变量):', action165)
  let daysOptions = (datePickerRange[2])
  const action166 = daysOptions
  /* debug */ console.log('action166(声明变量):', action166)
  let year = (state.dateValue[0])
  const action167 = year
  /* debug */ console.log('action167(声明变量):', action167)
  let month = (state.dateValue[1]+1)
  const action168 = month
  /* debug */ console.log('action168(声明变量):', action168)
  const action169 = ((store, event) => {
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
  /* debug */ console.log('action169(执行代码):', action169)
  if (daysOptions.length !== state.datePickerRange[2].length) {
    const action172 = store.commit('setState', {["state.datePickerRange"]: datePickerRange})
    /* debug */ console.log('action172(修改状态):', action172)
  }
/* debug */ console.log('action163(声明函数:结束调用:更新日期选项):', { store, event })
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

var modalInstance = null;
var action178 = modalInstance;
/* debug */console.log('action178(声明变量):', action178);
var defaultOption = { /**/tooltip: { /**/trigger: "item", /**/position: 'top', /**/axisPointer: { /**/type: "none" }, /**/triggerOn: 'mousemove|click', /**/textStyle: { /**/color: '#000000' /**/ }, /**/borderWidth: 0, /**/formatter: '{c}克' }, /**/xAxis: { /**/axisTick: { /**/length: 0 }, /**/type: 'category', /**/boundaryGap: false, /**/data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'] /**/ }, /**/yAxis: { /**/show: true, /**/type: 'value', /**/axisLabel: { /**/show: true /**/ }, /**/min: 0, /**/interval: 10, /**/splitLine: { /**/lineStyle: { /**/type: 'dashed' /**/ } /**/ } /**/ }, /**/series: [/**/{ /**/data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], /**/type: 'line', /**/symbol: 'circle', /**/symbolSize: 10, /**/itemStyle: { /**/color: '#FFC165' /**/ }, /**/lineStyle: { /**/color: '#5470C6', /**/width: 0, /**/type: 'dashed' /**/ } }], /**/grid: { /**/bottom: 30, /**/top: 30, /**/backgroundColor: "#ccc" /**/ } /**/ };
var action214 = defaultOption;
/* debug */console.log('action214(声明变量):', action214);
var defaultOptionWillDel = { /**/tooltip: { /**/trigger: "item", /**/position: 'top', /**/axisPointer: { /**/type: "none" }, /**/triggerOn: 'mousemove|click', /**/textStyle: { /**/color: '#000000' /**/ }, /**/borderWidth: 0, /**/formatter: '{c}克' }, /**/xAxis: { /**/axisTick: { /**/length: 0 /**/ }, /**/type: 'category', /**/boundaryGap: false, /**/data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'], /**/axisLine: { /**/lineStyle: { /**/color: '#EEEEEE' /**/ } /**/ }, /**/axisLabel: { /**/color: '#666666' /**/ } /**/ }, /**/yAxis: { /**/show: true, /**/type: 'value', /**/axisLabel: { /**/show: false /**/ }, /**/max: 30, /**/interval: 10, /**/splitLine: { /**/lineStyle: { /**/type: 'dashed' /**/ } /**/ } /**/ }, /**/series: [/**/{ /**/data: [0, 25, 18, 30, 20, 42], /**/type: 'bar', /**/areaStyle: {}, /**/itemStyle: { /**/color: '#FFD355', /**/borderRadius: [85, 85, 0, 0] }, /**/barWidth: 10 }], /**/grid: { /**/bottom: 35, /**/top: 40 } };
var action215 = defaultOptionWillDel;
/* debug */console.log('action215(声明变量):', action215);
var echarts = null;
var action227 = echarts;
/* debug */console.log('action227(声明变量):', action227);
/* action192: 列表 */
/* action188: 宠物 */
var action95 = actions['computed2'] = function (event, state) {
  var action96 = function (event) {
    var style = {};
    if (state.platform === 'rnapp') {
      if (state.select_pet && event.item.id === state.select_pet.id) {
        style = {
          borderWidth: 1,
          borderColor: "#FFD355",
          borderRadius: 1000
        };
      } else {
        style = {
          borderWidth: 1,
          borderColor: "#FFFFFF",
          borderRadius: 1000
        };
      }
    } else {
      if (state.select_pet && event.item.id === state.select_pet.id) {
        style = {
          border: '1px solid #FFD355',
          borderRadius: '1000px'
        };
      } else {
        style = {
          border: '1px solid #FFFFFF',
          borderRadius: '1000px'
        };
      }
    }
    return style;
  }(event);
  /* debug */console.log('action96(执行代码):', action96);
  /* debug */console.log('action97(函数返回):', action96);
  return action96;
};
// COMPUTED_ACTION_META:computed2 {"deps":["platform","select_pet"]}

/* action134: 日期 */
var action175 = actions['computed3'] = function (event, state) {
  var tmp = state.date.split("-");
  var action177 = tmp;
  /* debug */console.log('action177(声明变量):', action177);
  /* debug */console.log('action176(函数返回):', tmp[1] + '\u6708' + tmp[2] + '\u65E5');
  return tmp[1] + '\u6708' + tmp[2] + '\u65E5';
};
// COMPUTED_ACTION_META:computed3 {"deps":["date"]}

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdw2kj: {
  width: pm(320),
  height: "100%",
  zIndex: 1,
  position: "absolute",
},
xdw2kl: {
  width: pm(19),
  height: pm(19),
  marginRight: pm(5),
},
xdw2kn: {
  top: pm(7),
  right: pm(0),
  width: pm(50),
  position: "absolute",
  alignItems: "flex-end",
  flexDirection: "column",
  justifyContent: "center",
},
xdw2ko: {
  width: pm(32),
  height: pm(32),
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw2kp: {
  alignItems: "center",
  marginRight: pm(14),
  flexDirection: "column",
  justifyContent: "center",
},
xdw2kq: {
  width: pm(34),
  height: pm(34),
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw2kr: {
  width: pm(39),
  height: pm(39),
  zIndex: 2,
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw2ks: {
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
xdw2kt: {
  color: "#181818",
  width: pm(40),
  fontSize: pm(13),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw2ku: {
  height: pm(35),
  flexWrap: "nowrap",
  minWidth: pm(100),
  alignItems: "center",
  paddingLeft: pm(45),
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(30),
  borderTopRightRadius: pm(30),
  borderBottomLeftRadius: pm(30),
  borderBottomRightRadius: pm(30),
},
xdw2kv: {
  height: pm(46),
  position: "relative",
  marginRight: pm(14),
  flexDirection: "column",
  justifyContent: "center",
},
xdw2kw: {
  flexDirection: "column",
  justifyContent: "center",
},
xdw2kx: {
  width: pm(320),
  height: pm(50),
  flexWrap: "wrap",
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
},
xdw2ky: {
  width: pm(14),
  height: pm(14),
  marginRight: pm(3),
},
xdw2kz: {
  color: "#181818",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw2l0: {
  alignItems: "center",
  paddingLeft: pm(20),
  marginBottom: pm(10),
  paddingRight: pm(20),
  flexDirection: "row",
},
xdw2l1: {
  fontSize: pm(17),
  fontFamily: "HarmonyOS_Sans_Condensed_Medium",
  fontWeight: "500",
  lineHeight: pm(24),
  marginRight: pm(3),
},
xdw2l2: {
  color: "#181818",
  fontSize: pm(17),
  fontWeight: "500",
  lineHeight: pm(24),
  marginRight: pm(2),
},
xdw2l3: {
  alignItems: "flex-end",
  flexDirection: "row",
},
xdw2l4: {
  color: "#999999",
  fontSize: pm(10),
  lineHeight: pm(15),
},
xdw2l5: {
  marginTop: pm(3),
  flexDirection: "row",
  justifyContent: "flex-start",
},
xdw2l6: {
  width: pm(100),
  paddingLeft: pm(20),
  flexDirection: "column",
},
xdw2l7: {
  fontSize: pm(17),
  fontFamily: "HarmonyOS_Sans_Condensed_Medium",
  lineHeight: pm(24),
  marginRight: pm(3),
},
xdw2l8: {
  width: pm(100),
  paddingLeft: pm(20),
  flexDirection: "column",
  justifyContent: "flex-start",
},
xdw2l9: {
  flexDirection: "row",
},
xdw2la: {
  width: pm(280),
  alignItems: "flex-start",
  paddingTop: 0,
  flexDirection: "column",
  paddingBottom: 0,
  justifyContent: "flex-start",
},
xdw2lb: {
  width: pm(280),
  height: pm(210),
  marginLeft: pm(10),
  marginRight: pm(10),
},
xdw2lc: {
  width: pm(300),
  paddingTop: pm(15),
  flexDirection: "column",
  paddingBottom: pm(15),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(7),
  borderTopRightRadius: pm(7),
  borderBottomLeftRadius: pm(7),
  borderBottomRightRadius: pm(7),
},
xdw2ld: {
  width: pm(300),
  flexDirection: "column",
  borderTopLeftRadius: pm(7),
  borderTopRightRadius: pm(7),
  borderBottomLeftRadius: pm(7),
  borderBottomRightRadius: pm(7),
},
xdw2le: {
  width: pm(320),
  paddingLeft: pm(10),
  marginBottom: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
},
xdw2lf: {
  color: "#181818",
  fontSize: pm(13),
  lineHeight: pm(17),
  marginRight: pm(12),
},
xdw2lg: {
  width: pm(17),
  height: pm(17),
  marginBottom: pm(8),
},
xdw2lh: {
  width: pm(1.5),
  height: pm(64),
},
xdw2li: {
  marginTop: pm(2),
  alignItems: "center",
  flexDirection: "column",
},
xdw2lj: {
  width: pm(73),
  flexDirection: "row",
},
xdw2lk: {
  color: "#181818",
  fontSize: pm(13),
  fontWeight: "400",
  lineHeight: pm(17),
  marginBottom: pm(7),
  textDecorationLine: "underline",
},
xdw2ll: {
  flexDirection: "column",
},
xdw2lm: {
  color: "#999999",
  fontSize: pm(13),
  fontWeight: "400",
  lineHeight: pm(17),
},
xdw2ln: {
  color: "#181818",
  fontSize: pm(13),
  fontWeight: "400",
  lineHeight: pm(17),
  marginBottom: pm(7),
},
xdw2lo: {
  alignItems: "flex-start",
  marginRight: pm(51),
  flexDirection: "row",
},
xdw2lp: {
  width: pm(100),
  height: pm(75),
  borderTopLeftRadius: pm(5),
  borderTopRightRadius: pm(5),
  borderBottomLeftRadius: pm(5),
  borderBottomRightRadius: pm(5),
},
xdw2lq: {
  color: "#ffffff",
  fontSize: pm(9),
  lineHeight: pm(16),
},
xdw2lr: {
  left: pm(5),
  bottom: pm(5),
  position: "absolute",
  paddingLeft: pm(5),
  paddingRight: pm(5),
  flexDirection: "column",
  backgroundColor: "#00000026",
  borderTopLeftRadius: pm(100),
  borderTopRightRadius: pm(100),
  borderBottomLeftRadius: pm(100),
  borderBottomRightRadius: pm(100),
},
xdw2ls: {
  position: "relative",
  flexDirection: "column",
},
xdw2lt: {
  width: pm(193),
  flexGrow: 1,
  alignItems: "flex-start",
  flexDirection: "column",
},
xdw2lu: {
  marginBottom: pm(10),
  flexDirection: "row",
},
xdw2lv: {
  color: "#666666",
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw2lw: {
  alignItems: "center",
  paddingTop: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
  justifyContent: "center",
},
xdw2lx: {
  width: pm(146),
  height: pm(93),
  marginTop: pm(55),
  marginBottom: pm(17),
},
xdw2ly: {
  color: "#AAAAAA",
  fontSize: pm(12),
  lineHeight: pm(18),
  marginBottom: pm(51),
},
xdw2lz: {
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw2m0: {
  width: pm(300),
  paddingTop: pm(14),
  paddingLeft: pm(17),
  paddingRight: pm(17),
  flexDirection: "column",
  paddingBottom: pm(14),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(7),
  borderTopRightRadius: pm(7),
  borderBottomLeftRadius: pm(7),
  borderBottomRightRadius: pm(7),
},
xdw2m1: {
  width: pm(320),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
},
xdw2m2: {
  flex: 1,
  width: "100%",
  flexGrow: 1,
  paddingTop: pm(15),
  flexDirection: "column",
  paddingBottom: pm(15),
},
xdw2m3: {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(20),
},
xdw2m4: {
  alignItems: "center",
  flexDirection: "column",
},
xdw2m5: {
  width: pm(300),
  height: pm(0.5),
  marginTop: pm(14),
  marginBottom: pm(10),
  flexDirection: "column",
  backgroundColor: "#F0F0F0",
},
xdw2m6: {
  width: pm(39),
  height: pm(39),
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw2m7: {
  width: pm(44),
  height: pm(44),
  alignItems: "center",
  marginRight: pm(17),
  flexDirection: "column",
  justifyContent: "center",
},
xdw2m8: {
  flexDirection: "column",
  borderTopLeftRadius: pm(100),
  borderTopRightRadius: pm(100),
  borderBottomLeftRadius: pm(100),
  borderBottomRightRadius: pm(100),
},
xdw2m9: {
  flexWrap: "wrap",
  flexDirection: "row",
},
xdw2ma: {
  width: pm(300),
  height: pm(42),
},
xdw2mb: {
  marginTop: pm(15),
  flexDirection: "row",
  justifyContent: "center",
},
xdw2mc: {
  width: pm(320),
  overflow: "hidden",
  paddingTop: pm(17),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(29),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
},
xdw2md: {
  flex: 1,
  zIndex: 10,
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "flex-end",
},
xdw2me: {
  zIndex: 2,
  flexGrow: 1,
  flexDirection: "column",
},
xdw2mf: {
  flexGrow: 1,
  position: "relative",
  flexDirection: "column",
},
xdw2mg: {
  color: "#333333",
  fontSize: pm(14),
  textAlign: "center",
  lineHeight: pm(19),
  paddingTop: pm(13),
  paddingBottom: pm(13),
},
xdw2mh: {
  borderBottomWidth: pm(1),
  borderBottomColor: "#eeeeee",
  justifyContent: "center",
},
xdw2mi: {
  fontSize: pm(14),
  fontWeight: "600",
  lineHeight: pm(19),
},
xdw2mj: {
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
xdw2mk: {
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
xdw2ml: {
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
xdw2mm: {
  width: pm(320),
  paddingLeft: pm(17),
  paddingRight: pm(17),
  flexDirection: "column",
  paddingBottom: pm(29),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
},
xdw2mn: {
  flex: 1,
  zIndex: 10,
  alignItems: "flex-end",
  flexDirection: "row",
  justifyContent: "center",
},
xdw2mo: {
  width: pm(260),
  height: pm(266),
},
xdw2mp: {
  left: pm(26),
  width: pm(208),
  bottom: pm(20),
  height: pm(43),
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw2mq: {
  width: pm(260),
  height: pm(265),
  zIndex: 2,
  position: "relative",
  overflow: "hidden",
  marginLeft: pm(30),
  marginRight: pm(30),
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(20),
  borderTopRightRadius: pm(20),
  borderBottomLeftRadius: pm(20),
  borderBottomRightRadius: pm(20),
},
xdw2mr: {
  flex: 1,
  zIndex: 10,
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
}
});
const slide = {"type":"175578","key":"c1755781","slug":null,"randomid":"id_2dfb3b1796585fd186036f3a","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Modal1":{"ctx_map":{"mask":true,"value":false,"position":"center","baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Modal2":{"ctx_map":{"mask":true,"value":false,"position":"center","baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Modal3":{"ctx_map":{"mask":true,"value":false,"position":"center","baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Text21":{"ctx_map":{"text":""}},"Text22":{"ctx_map":{"text":"已进食"}},"Text29":{"ctx_map":{"text":"9月22日"}},"Text30":{"ctx_map":{"text":"这是一个文本组件"}},"Text31":{"ctx_map":{"text":"克"}},"Text35":{"ctx_map":{"text":"这是一个文本组件","numberOfLines":1}},"Text37":{"ctx_map":{"text":"今日进食"}},"Text38":{"ctx_map":{"text":"7天平均进食"}},"Text40":{"ctx_map":{"text":"克"}},"Text41":{"ctx_map":{"text":"80"}},"Text42":{"ctx_map":{"text":"进食次数"}},"Text43":{"ctx_map":{"text":"次"}},"Text44":{"ctx_map":{"text":"12"}},"Text45":{"ctx_map":{"text":"克"}},"Text46":{"ctx_map":{"text":"克"}},"Text47":{"ctx_map":{"text":"这是一个文本组件"}},"Text49":{"ctx_map":{"text":"选择本次进食的宠物"}},"Text50":{"ctx_map":{"text":"暂无无进食记录，喵～"}},"Text51":{"ctx_map":{"text":""}},"Text52":{"ctx_map":{"text":"保存"}},"Text53":{"ctx_map":{"text":"取消"}},"Text54":{"ctx_map":{"text":"日期选择"}},"Text55":{"ctx_map":{"text":"喵～，已经到底了"}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View17":{"ctx_map":{}},"View22":{"ctx_map":{}},"View27":{"ctx_map":{}},"View28":{"ctx_map":{}},"View29":{"ctx_map":{}},"View30":{"ctx_map":{}},"View36":{"ctx_map":{}},"View38":{"ctx_map":{}},"View39":{"ctx_map":{}},"View40":{"ctx_map":{}},"View41":{"ctx_map":{}},"View42":{"ctx_map":{}},"View43":{"ctx_map":{}},"View44":{"ctx_map":{}},"View45":{"ctx_map":{}},"View46":{"ctx_map":{}},"View47":{"ctx_map":{}},"View48":{"ctx_map":{}},"View49":{"ctx_map":{}},"View50":{"ctx_map":{}},"View51":{"ctx_map":{}},"View52":{"ctx_map":{}},"View53":{"ctx_map":{}},"View54":{"ctx_map":{}},"View55":{"ctx_map":{}},"View56":{"ctx_map":{}},"View57":{"ctx_map":{}},"View58":{"ctx_map":{}},"View59":{"ctx_map":{}},"View60":{"ctx_map":{}},"View61":{"ctx_map":{}},"View62":{"ctx_map":{}},"View63":{"ctx_map":{}},"View64":{"ctx_map":{}},"View65":{"ctx_map":{}},"View66":{"ctx_map":{}},"View67":{"ctx_map":{}},"View68":{"ctx_map":{}},"View69":{"ctx_map":{}},"View70":{"ctx_map":{}},"View71":{"ctx_map":{}},"View72":{"ctx_map":{}},"View73":{"ctx_map":{}},"View74":{"ctx_map":{}},"View75":{"ctx_map":{}},"View76":{"ctx_map":{}},"View77":{"ctx_map":{}},"View78":{"ctx_map":{}},"View79":{"ctx_map":{}},"View80":{"ctx_map":{}},"View81":{"ctx_map":{}},"Image10":{"ctx_map":{"fop":"e,300,300","src":"u/dev064/2023/03/15/RSvKHzbt9cUhKNMGL3iKLU/SketchPng3a86e4f48e4ea00b0dd1d4ec990494a1e666adc030bcbc47c67e701e0ccbf369.png"}},"Image12":{"ctx_map":{"fop":"e,300,300","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image13":{"ctx_map":{"fop":"e,300,300","src":"u/dev065/2023/09/11/YwZUdYw6hBXADG9CKmhiZ7/全部.png"}},"Image15":{"ctx_map":{"fop":"e,312,234","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image16":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/29/tdQQbQZouCcPcu32tvFocS/编组233x1.png"}},"Image17":{"ctx_map":{"fop":"e,132,132","src":"u/dev066/2024/02/29/hoMXbbX3T6gGzJs8oD4NSN/编组171.png"}},"Image18":{"ctx_map":{"fop":"e,80,80","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image21":{"ctx_map":{"fop":"e,312,234","src":"u/dev064/2023/11/14/BbezSdPXUXK8eCE2KV8P8g/05f83d1033d04edba1567bde5cb59a59_mergeImage.png"}},"Image22":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/12/07/nVmJjQr7ByCvRnF3odg7L8/编组114x.png","buildToLocal":true}},"Image23":{"ctx_map":{"fop":"e,912,933","src":"u/dev066/2024/02/26/XMPSYszrssy9RUFygrJVFE/编组32.png"}},"Image24":{"ctx_map":{"fop":"e,292,186","src":"u/dev064/2023/12/08/MA29RJN3ZXKhFjavBaWezh/编组备份22x.png"}},"Image25":{"ctx_map":{"fop":"f,300,300","src":"u/dev064/2023/12/08/2Ue3sgEz6dz9sKjoiMN44i/未标题-1.png","buildToLocal":true}},"Image26":{"ctx_map":{"fop":"e,1053,144","src":"u/dev066/2024/02/29/B2m3rQHUpxexrAJza4iCtW/编组33x3.png"}},"Image27":{"ctx_map":{"fop":"e,6,258","src":"u/dev066/2024/02/29/uXNyU8FJuQHRxmJVwHjU2K/编组2.png"}},"Echarts1":{"ctx_map":{"options":{"xAxis":{"data":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],"type":"category","boundaryGap":false},"yAxis":{"type":"value"},"series":[{"data":[820,932,901,934,1290,1330,1320],"type":"line","areaStyle":{}}]}}},"Echarts2":{"ctx_map":{"options":{"xAxis":{"data":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],"type":"category","boundaryGap":false},"yAxis":{"type":"value"},"series":[{"data":[820,932,901,934,1290,1330,1320],"type":"line","areaStyle":{}}]}}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewFor4":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"uuid"}},"ViewFor5":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewFor6":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewIf12":{"ctx_map":{"value":true}},"ViewIf13":{"ctx_map":{"value":true}},"ViewIf14":{"ctx_map":{"value":true}},"ViewIf15":{"ctx_map":{"mode":"default","value":true}},"ViewIf16":{"ctx_map":{"value":true}},"ViewIf19":{"ctx_map":{"value":true}},"ViewIf20":{"ctx_map":{"value":true}},"ViewIf21":{"ctx_map":{"value":true}},"ViewIf22":{"ctx_map":{"value":true}},"ViewIf23":{"ctx_map":{"mode":"default","value":true}},"ViewIf24":{"ctx_map":{"mode":"default","value":true}},"ViewIf25":{"ctx_map":{"mode":"default","value":true}},"ViewIf26":{"ctx_map":{"mode":"default","value":true}},"ViewIf27":{"ctx_map":{"value":true}},"ViewIf28":{"ctx_map":{"value":true}},"FontNode1":{"ctx_map":{"src":"u/dev064/2023/05/12/zGp8EP6PpYp9kTavnFmCMo/HarmonyOS_Sans_Condensed_Medium.ttf","fontFamily":"HarmonyOS_Sans_Condensed_Medium"}},"DwappCloud2":{"ctx_map":{"bool1":true,"bool2":false,"text1":"进食数据","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"#ffffff00","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud3":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"PickerView1":{"ctx_map":{"range":[[{"label":"上午","value":"am"},{"label":"下午","value":"pm"}]],"value":[0]}},"ScrollView1":{"ctx_map":{"type":"list","bounces":true,"scrollY":true,"showScrollbar":true,"refresherEnabled":true}},"ScrollView2":{"ctx_map":{"type":"list","scrollX":true,"scrollY":false,"showScrollbar":false}},"ShadowView1":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}},"ShadowView2":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}},"ShadowView3":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}},"DisplayDate1":{"ctx_map":{"value":"2022-09-10T11:22:33.444","format":"time"}},"NativeButton1":{"ctx_map":{"type":"button"}},"NativeButton2":{"ctx_map":{"type":"button"}}}};
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
const pageGroupSlug = 'app_tongzhua-feed_data';

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
      
{!!(state.ready) /* ViewIf14 */ && (<><XbenchcImage /* Image25 */ style={styles.xdw2kj} source={dwtools.getLocalResource('xdw2kk_lthar2y5')}  />
<View /* View67 */   style={styles.xdw2me}><View /* View70 */   style={styles.xdw2mf}><View /* View71 */   style={styles.xdw2me}><Xbenchc176286 /* DwappCloud2 */ isCuzBtn={ slide.components.DwappCloud2.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud2.ctx_map.bool2 } eventData={ slide.components.DwappCloud2.ctx_map.prop1 } eventData2={ slide.components.DwappCloud2.ctx_map.prop2 } title={ slide.components.DwappCloud2.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud2.ctx_map.text2 } confirmText={ slide.components.DwappCloud2.ctx_map.text3 } cancelText={ slide.components.DwappCloud2.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud2.ctx_map.color1 } confirmColor={ slide.components.DwappCloud2.ctx_map.color2 } cancelColor={ slide.components.DwappCloud2.ctx_map.color3 } backIcon={ slide.components.DwappCloud2.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud2.ctx_map.image2 } titleStyle={ slide.components.DwappCloud2.ctx_map.style1 } screenType={ slide.components.DwappCloud2.ctx_map.select1 } ><XbenchcView /* View22 */   viewStyle={styles.xdw2kn} onClick={getEvent('View22:onClick:func15:', {eventData: "more_data"}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image22 */ style={styles.xdw2kl} source={dwtools.getLocalResource('xdw2km_lthar2y5')}  /></XbenchcView></Xbenchc176286>
<View /* View66 */   style={styles.xdw2kx}>{(state.pets).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor4' + ':' + String(bagForItem['uuid']); return <ViewForItem /* ViewFor4 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><XbenchcView /* View42 */   viewStyle={styles.xdw2kw} onClick={getEvent('View42:onClick:func11:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}>{!!(state.select_pet.uuid !== bagForItem.uuid) /* ViewIf12 */ && (<><XbenchcView /* View36 */   viewStyle={styles.xdw2kp} onClick={getEvent('View36:onClick:func11:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image12 */ style={styles.xdw2ko} source={dwtools.qiniu(bagForItem.data.image, slide.components.Image12.ctx_map.fop)}  /></XbenchcView></>)}
{!!(state.select_pet.uuid === bagForItem.uuid) /* ViewIf13 */ && (<><View /* View41 */   style={styles.xdw2kv}><XbenchcView /* View38 */   viewStyle={styles.xdw2ks} onClick={getEvent('View38:onClick:func11:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><XbenchcView /* View39 */   viewStyle={styles.xdw2kr} onClick={getEvent('View39:onClick:func11:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image13 */ style={styles.xdw2kq} source={dwtools.qiniu(bagForItem.data.image, slide.components.Image13.ctx_map.fop)}  /></XbenchcView></XbenchcView>
<View /* View40 */   style={styles.xdw2ku}><Text /* Text35 */ style={styles.xdw2kt} numberOfLines={1}>{bagForItem.data.name}</Text></View></View></>)}</XbenchcView></ViewForItem> })}</View>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw2m2} refresherEnabled={ true } refresherTriggered={ state.refresherTriggered } scrollY={ true } showScrollbar={ true } bounces={ true }  onRefresherRefresh={getEvent('ScrollView1:onRefresherRefresh:handlePullRefresh:', {}, bagForKeyValue, bagForIndex)} onScrollToLower={getEvent('ScrollView1:onScrollToLower:handleScrollToLower:', {}, bagForKeyValue, bagForIndex)}><View /* View27 */   style={styles.xdw2le}><Shadow containerStyle={styles.xdw2ld} {...({
  offset: [0, 0],
  distance: 5,
  startColor: 'rgba(0,0,0,0.055)'
})}><View /* View68 */   style={styles.xdw2lc}><View /* View28 */   style={styles.xdw2la}><XbenchcView /* View29 */   viewStyle={styles.xdw2l0} onClick={getEvent('View29:onClick:func16:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image10 */ style={styles.xdw2ky} source={dwtools.qiniu(slide.components.Image10.ctx_map.src, slide.components.Image10.ctx_map.fop)}  />
<Text /* Text29 */ style={styles.xdw2kz} >{computeds.computed3({}, state)}</Text></XbenchcView>
<View /* View48 */   style={styles.xdw2l9}><View /* View43 */   style={styles.xdw2l6}><View /* View30 */   style={styles.xdw2l3}>{!!(!!state.aggs) /* ViewIf25 */ && (<><Text /* Text30 */ style={styles.xdw2l1} >{state.aggs.sum__weight}</Text></>)}
<Text /* Text31 */ style={styles.xdw2l2} >{slide.components.Text31.ctx_map.text}</Text></View>
<View /* View44 */   style={styles.xdw2l5}><Text /* Text37 */ style={styles.xdw2l4} >{slide.components.Text37.ctx_map.text}</Text></View></View>
<View /* View45 */   style={styles.xdw2l6}><View /* View47 */   style={styles.xdw2l3}>{!!(state.weekAvg !== null && state.weekAvg >= 0) /* ViewIf24 */ && (<><Text /* Text41 */ style={styles.xdw2l1} >{state.weekAvg}</Text></>)}
<Text /* Text40 */ style={styles.xdw2l2} >{slide.components.Text40.ctx_map.text}</Text></View>
<View /* View46 */   style={styles.xdw2l5}><Text /* Text38 */ style={styles.xdw2l4} >{slide.components.Text38.ctx_map.text}</Text></View></View>
<View /* View49 */   style={styles.xdw2l8}><View /* View51 */   style={styles.xdw2l3}>{!!(!!state.aggs) /* ViewIf26 */ && (<><Text /* Text44 */ style={styles.xdw2l7} >{state.aggs.count}</Text></>)}
<Text /* Text43 */ style={styles.xdw2l2} >{slide.components.Text43.ctx_map.text}</Text></View>
<View /* View50 */   style={styles.xdw2l5}><Text /* Text42 */ style={styles.xdw2l4} >{slide.components.Text42.ctx_map.text}</Text></View></View></View></View>
{!!(state.showChart) /* ViewIf16 */ && (<><XbenchcEcharts /* Echarts1 */ style={styles.xdw2lb} options={state.option} /></>)}
{!!(!state.showChart) /* ViewIf28 */ && (<><XbenchcEcharts /* Echarts2 */ style={styles.xdw2lb} options={state.defaultOption} /></>)}</View></Shadow></View>
<View /* View17 */   style={styles.xdw2m1}><Shadow containerStyle={styles.xdw2ld} {...({
  offset: [0, 0],
  distance: 5,
  startColor: 'rgba(0,0,0,0.055)'
})}><View /* View69 */   style={styles.xdw2m0}>{(state.eat_items).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View54 */   style={styles.xdw2lu}><View /* View53 */   style={styles.xdw2lj}><Text /* Text47 */ style={styles.xdw2lf} >{bagForItem.data.start_time.slice(11, 16)}</Text>
<View /* View55 */   style={styles.xdw2li}><XbenchcImage /* Image16 */ style={styles.xdw2lg} source={dwtools.qiniu(slide.components.Image16.ctx_map.src, slide.components.Image16.ctx_map.fop)}  />
{!!((bagForIndex+1) < state.eat_items.length) /* ViewIf23 */ && (<><XbenchcImage /* Image27 */ style={styles.xdw2lh} source={dwtools.qiniu(slide.components.Image27.ctx_map.src, slide.components.Image27.ctx_map.fop)}  /></>)}</View></View>
<View /* View12 */   style={styles.xdw2lt}><View /* View13 */   style={styles.xdw2lo}><XbenchcView /* View64 */   viewStyle={styles.xdw2ll} onClick={getEvent('View64:onClick:func10:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}>{!!(!!bagForItem.data.pet_uuid__toone) /* ViewIf21 */ && (<><Text /* Text21 */ style={styles.xdw2lk} >{bagForItem.data.pet_uuid__toone ? bagForItem.data.pet_uuid__toone.data.name : '未分类'}</Text></>)}
{!!(!bagForItem.data.pet_uuid__toone) /* ViewIf22 */ && (<><Text /* Text51 */ style={styles.xdw2lk} >{'未分类'}</Text></>)}</XbenchcView>
<Text /* Text22 */ style={styles.xdw2lm} >{slide.components.Text22.ctx_map.text}</Text>
<Text /* Text46 */ style={styles.xdw2ln} >{bagForItem.data.weight}</Text>
<Text /* Text45 */ style={styles.xdw2ln} >{slide.components.Text45.ctx_map.text}</Text></View>
<View /* View52 */   style={styles.xdw2ls}>{!!(!!bagForItem.data.video_uuid__toone) /* ViewIf19 */ && (<><XbenchcImage /* Image15 */ style={styles.xdw2lp} source={dwtools.qiniu(bagForItem.data.video_uuid__toone.data.poster, slide.components.Image15.ctx_map.fop)}  />
<View /* View80 */   style={styles.xdw2lr}><Text style={styles.xdw2lq} numberOfLines={1}>{dwtools.dateformat(slide.components.DisplayDate1.ctx_map.value, slide.components.DisplayDate1.ctx_map.format)}</Text></View></>)}
{!!(!bagForItem.data.video_uuid__toone) /* ViewIf20 */ && (<><XbenchcImage /* Image21 */ style={styles.xdw2lp} source={dwtools.qiniu(slide.components.Image21.ctx_map.src, slide.components.Image21.ctx_map.fop)}  /></>)}</View></View></View></ViewForItem> })}
{!!(state.eat_items.length > 0 && state.reachBottom) /* ViewIf27 */ && (<><View /* View81 */   style={styles.xdw2lw}><Text /* Text55 */ style={styles.xdw2lv} >{slide.components.Text55.ctx_map.text}</Text></View></>)}
{!!(state.eat_items.length === 0) /* ViewIf15 */ && (<><View /* View65 */   style={styles.xdw2lz}><XbenchcImage /* Image24 */ style={styles.xdw2lx} source={dwtools.qiniu(slide.components.Image24.ctx_map.src, slide.components.Image24.ctx_map.fop)}  />
<Text /* Text50 */ style={styles.xdw2ly} >{slide.components.Text50.ctx_map.text}</Text></View></>)}</View></Shadow></View></XbenchcScrollView>
<XbenchcModal /* Modal1 */ rootStyle={styles.xdw2md} value={ state.petPop } mask={ true } maskClosable={ true }  onValueChange={getEvent('Modal1:onValueChange:func19:', {}, bagForKeyValue, bagForIndex)}><View /* View57 */   style={styles.xdw2mc}><View /* View63 */   style={styles.xdw2m4}><Text /* Text49 */ style={styles.xdw2m3} >{slide.components.Text49.ctx_map.text}</Text></View>
<View /* View62 */   style={styles.xdw2m5}></View>
<View /* View59 */   style={styles.xdw2m9}>{(state.pets).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor6' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor6 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><XbenchcView /* View61 */   viewStyle={[styles.xdw2m7, (computeds.computed2({item: bagForItem}, state))]} onClick={getEvent('View61:onClick:func11:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image18 */ style={styles.xdw2m6} source={dwtools.qiniu(bagForItem.data.image, slide.components.Image18.ctx_map.fop)}  /></XbenchcView></ViewForItem> })}
<XbenchcView /* View60 */   viewStyle={styles.xdw2m7} onClick={getEvent('View60:onClick:func11:', {}, bagForKeyValue, bagForIndex)}><Shadow containerStyle={styles.xdw2m8} {...(state.rnappShadow)}><XbenchcImage /* Image17 */ style={styles.xdw2m6} source={dwtools.qiniu(slide.components.Image17.ctx_map.src, slide.components.Image17.ctx_map.fop)}  /></Shadow></XbenchcView></View>
<XbenchcView /* View58 */   viewStyle={styles.xdw2mb} onClick={getEvent('View58:onClick:func13:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image26 */ style={styles.xdw2ma} source={dwtools.qiniu(slide.components.Image26.ctx_map.src, slide.components.Image26.ctx_map.fop)}  /></XbenchcView></View></XbenchcModal></View></View></View>
<XbenchcModal /* Modal3 */ rootStyle={styles.xdw2mn} value={ state.datePop } mask={ true } maskClosable={ true }  onValueChange={getEvent('Modal3:onValueChange:func6:', {}, bagForKeyValue, bagForIndex)}><View /* View74 */   style={styles.xdw2mm}><View /* View79 */   style={styles.xdw2mh}><Text /* Text54 */ style={styles.xdw2mg} >{slide.components.Text54.ctx_map.text}</Text></View>
<View /* View78 */   style={styles.xdw2l9}><XbenchcPickerView /* PickerView1 */ value={ state.dateValue } range={ state.datePickerRange }  onChange={getEvent('PickerView1:input:func5:', {}, bagForKeyValue, bagForIndex)}></XbenchcPickerView></View>
<View /* View75 */   style={styles.xdw2l9}><View /* View77 */   style={styles.xdw2mk}><XbenchcButton /* NativeButton2 */ viewStyle={styles.xdw2mj} onClick={getEvent('NativeButton2:onClick:func6:', {}, bagForKeyValue, bagForIndex)}><Text /* Text53 */ style={styles.xdw2mi} >{slide.components.Text53.ctx_map.text}</Text></XbenchcButton></View>
<View /* View76 */   style={styles.xdw2ml}><XbenchcButton /* NativeButton1 */ viewStyle={styles.xdw2mj} onClick={getEvent('NativeButton1:onClick:func7:', {}, bagForKeyValue, bagForIndex)}><Text /* Text52 */ style={styles.xdw2mi} >{slide.components.Text52.ctx_map.text}</Text></XbenchcButton></View></View></View></XbenchcModal></>)}
<XbenchcModal /* Modal2 */ rootStyle={styles.xdw2mr} value={ state.showTip } mask={ true } maskClosable={ true }  onValueChange={getEvent('Modal2:onValueChange:func15:', {}, bagForKeyValue, bagForIndex)}><View /* View72 */   style={styles.xdw2mq}><XbenchcImage /* Image23 */ style={styles.xdw2mo} source={dwtools.qiniu(slide.components.Image23.ctx_map.src, slide.components.Image23.ctx_map.fop)}  />
<XbenchcView /* View73 */   viewStyle={styles.xdw2mp} onClick={getEvent('View73:onClick:func15:', {}, bagForKeyValue, bagForIndex)}></XbenchcView></View></XbenchcModal>
<Xbenchc275104 /* DwappCloud3 */ valueStyle={ slide.components.DwappCloud3.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud3.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud3.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud3:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104>
    </ErrorBoundary>
  )
}
