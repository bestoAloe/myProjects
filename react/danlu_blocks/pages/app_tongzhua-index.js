
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import { Image } from 'expo-image'
import { Shadow } from 'react-native-shadow-2'
import ViewForItem from '../../xbench/components/ViewForItem'
import XbenchcScrollView from '../../xbench/xbenchc/components/XbenchcScrollView'
import XbenchcInput from '../../xbench/xbenchc/components/XbenchcInput'
import XbenchcButton from '../../xbench/xbenchc/components/XbenchcButton'
import XbenchcModal from '../../xbench/xbenchc/components/XbenchcModal'
import Xbenchc168613 from '../components/Xbenchc168613'
import XbenchcSwiper from '../../xbench/xbenchc/components/XbenchcSwiper'
import NativeEventProxy from '../../xbench/components/NativeEventProxy'
import Xbenchc275104 from '../components/Xbenchc275104'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

let action261lock = false
let action261task = null
let action261storeLock = false
let action482lock = false
let action483lock = false
let action484lock = false
let action471lock = false
let action470lock = false
let videoRef = (null)
const action116 = videoRef
let modalInstance = (null)
const action341 = modalInstance
let tick = (null)
const action279 = tick
let recordUpdataItem = ({/**/  onShowType: null,/**/  haveWebSocketMes: false/**/})
const action374 = recordUpdataItem
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action6 = state.isPlaying = (false)
  const action12 = state.isSelectDevice = (false)
  const action17 = state.selectIds = ([])
  const action18 = state.deviceItems = ([])
  const action39 = state.ready = (false)
  const action56 = state.siteuser_id = (null)
  const action66 = state.isMuted = (false)
  const action84 = state.member = (null)
  const action113 = state.now = (null)
  const action143 = state.displayMode = ("preview")
  const action150 = state.namePop = (false)
  const action168 = state.currentItem = (null)
  const action170 = state.formData = ({name: ""})
  const action203 = state.showGuide = (false)
  const action212 = state.guideList = ([/**/  {/**/    mainImage: 'u/dev064/2023/06/27/kQzHoPxMk2sAS6dtpyY6a9/引导页14x.png',/**/    textImage: 'u/dev064/2023/06/27/dgcrDWmxX3gKMyRjQmRXf2/实时互动4x.png',/**/    summary: '随时随地和TA亲密互动',/**/  },/**/  {/**/    mainImage: 'u/dev064/2023/06/27/jZja3yEAzckUXDWGac9gTK/引导页24x.png',/**/    textImage: 'u/dev064/2023/06/27/DLrTSj4nAH9QfYhyoHCMM7/精彩视频4x.png',/**/    summary: '可爱瞬间不再错过',/**/  },/**/  {/**/    mainImage: 'u/dev064/2023/06/27/BhsCNXbFk6b8E3WXdKaQz8/引导页34x.png',/**/    textImage: 'u/dev064/2023/06/27/jCHzST63diwPwTaHjt9EPe/多种喂食模式4x.png',/**/    summary: '自助餐/定时喂食/暂停出粮',/**/  },/**/])
  const action213 = state.step = (0)
  const action239 = state.invite_code = (null)
  const action240 = state.showInvite = (false)
  const action366 = state.webSocketEmitting = (false)
  const action376 = state.platform = ("dwapp")
  /* action454: 投影 */
  const action455 = state.rnappShadow = ({ offset: [0, 4], distance: 14, startColor: '#00000005' })
  return state
}

const action369 = actions['onLoad'] = function (store, event) {
  const state = store.state
  const action377 = store.commit('setState', {["state.platform"]: dw.platform})
  const action474 = ((store, event) => {
if(dw.platform === 'rnapp'){
  const SystemNavigationBar = dw.getNativePackage('SystemNavigationBar')
  SystemNavigationBar.navigationShow();
}

})(store, event)
}

const action32 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action456 = recordUpdataItem.onShowType = (event.onShowType)
  const action33 = await store.dispatch("func8", {})
  const action100 = await Promise.all([
    (async () => {
      const action204 = await store.dispatch("func27", {})
      return action204
    })(),
    (async () => {
      const action304 = await store.dispatch("func62", {})
      return action304
    })(),
  ])

  const action40 = store.commit('setState', {["state.ready"]: true})
  const action271 = await store.dispatch("func60", {})
  const action245 = await store.dispatch("func31", {})
}

const action287 = actions['onHide'] = async function (store, event) {
  const state = store.state
  const action480 = await store.dispatch("func19", {})
  const action288 = ((store, event) => {
if(tick){
  clearInterval(tick)
}
})(store, event)
}

/* action429: 初始数据获取 */
const action193 = actions['func27'] = async function (store, event) {
  const state = store.state
  let key = (`tongzhua-guide-show`)
  const action195 = key
  const action194 = await dw.getStorage(key)
  if (action194) {
    return event
  } else {
    const action201 = await dw.setStorage(key, "true")
    const action211 = await store.dispatch("func28", {})
  }
}

const action259 = actions['func60'] = async function (store, event) {
  const state = store.state
  const action260 = console.log('[func60#action260] before_listen_ws', )
  if (!state.member) {
    return event
  }
  if (state.webSocketEmitting === false) {
    
      const action261 = await (async () => {
        if (action261lock) return action261task
        action261lock = true
        action261task = dw.app.connectSocket({ reconnecting: true })
        action261task.onMessage(async (event) => {
          console.log('WebSocket: 接收到消息', event)
      
      if (event.data.result.type === 'deviceStatusUpdate') {
        let device_id = (event.data.result.device_id)
        const action266 = device_id
        const action285 = console.log('[func60#action285] 首页deviceStatusUpdate', )
        const action485 = console.log('[func60#action485] 首页打印(device_id)的返回值', device_id)
        let index = (state.deviceItems.findIndex(x=>x.data.device_id === device_id))
        const action267 = index
        const action286 = console.log('[func60#action286] 打印(index)的返回值', index)
        if (!index === -1) {
          return event
        }
        let data = (event.data.result.data)
        const action264 = data
        const action265 = store.commit('setState', {[`state.deviceItems[${index}].data._isAlive`]: true})
      } else if (event.data.result.type === 'deviceOffLine') {
        let device_id = (event.data.result.device_id)
        const action343 = device_id
        const action344 = console.log('[func60#action344] 首页deviceOffLine', )
        const action486 = console.log('[func60#action486] 首页(device_id)的返回值', device_id)
        let index = (state.deviceItems.findIndex(x=>x.data.device_id === device_id))
        const action345 = index
        const action346 = console.log('[func60#action346] 打印(index)的返回值', index)
        if (!index === -1) {
          return event
        }
        const action353 = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace('Z', '')
        const action354 = store.commit('setState', {[`state.deviceItems[${index}].data._lastAlive`]: action353})
        /* action355: COMMIT */
        const action351 = store.commit('setState', {[`state.deviceItems[${index}].data._isAlive`]: false})
      } else if (event.data.result.type === "deviceMemberUpdate") {
        const action467 = recordUpdataItem.haveWebSocketMes = (true)
        const action451 = await store.dispatch("func8", {})
      }
      /* action357: 在首页(Tabbar)保持WebSocket链接，并且转发事件，在其他页面可以监听该事件进行数据获取 */
      const action356 = ((store, event) => {
dw.globalEvent.emit('GLOBAL_WS_EVENT', event)
})(store, event)
      const action367 = store.commit('setState', {["state.webSocketEmitting"]: true})
      
      const action358 = await (async () => {
        const action358task = action261
        action358task.onError(async (event) => {
          console.log('WebSocket: 连接错误', event)
      
        const action368 = store.commit('setState', {["state.webSocketEmitting"]: false})
        const action359 = console.log('[func60#action359] 首页websocket监听到错误！！！！！！！！', event)
      
        })
        return action358task
      })()
      
    
        })
        if (!action261storeLock && !(false)) {
          action261storeLock = true
          store.$store.subscribeAction({
            enter: (action, state) => {
              if (['onHide', 'onUnload', 'beforeDestroy'].includes(action.type)) {
                console.log('WebSocket：onUnload/onHide 时自动停止监听:', action.type)
                action261task.close()
                action261lock = false
              }
            }
          })
        }
        return action261task
      })()
      
  }
}

const action28 = actions['func8'] = async function (store, event) {
  const state = store.state
  /* action372: 如果缓存中存在siteuser_id,则无需请求云函数,否则流程不变 */
  const action52 = await dw.app.run("member.get_siteuser_id", {})
  const action411 = console.log('[func8#action411] 打印用户siteuser_id', action52)
  
        if ((action52.status) === ("error")) {
          const action432message = (action52.message || "操作错误！")
          const action432title = ("提示")
          action432message && dw.alert(action432title, action432message)
          return {}
        }
        
  const action57 = store.commit('setState', {["state.siteuser_id"]: action52})
  let siteuser_id = (action52)
  const action53 = siteuser_id
  if (!!siteuser_id) {
    const action85 = await Promise.all([
      (async () => {
        const action86 = await (async () => {
          let action468
          

          const action472 = dw.getGlobalLocals("allDeviceMember")
          /* action461: 防止刷新数据闪烁，通过allDeviceMember全局变量判断是否存在设备 */
          if (!!action472 && recordUpdataItem.onShowType !== "init" && !recordUpdataItem.haveWebSocketMes) {
            return event
          }
          /* action473: 获取设备用户信息 */
          const action30 = await dw.app.run("device_member.user_list", {"limit": 100, "offset": 0, "filters": {}, "order_by": [], "select_related": {/**/  toone: {/**/    device_uuid__device: {},/**/  }/**/}})
          const action445 = console.log('[func8#action445] 加载设备：打印设备列表', action30.objects)
          
        if ((action30.status) === ("error")) {
          const action433message = (action30.message || "操作错误！")
          const action433title = ("提示")
          action433message && dw.alert(action433title, action433message)
          return {}
        }
        
          const action463 = dw.setGlobalLocals("allDeviceMember", action30.objects)
          let device_members = (action30.objects)
          const action42 = device_members
          const action31 = store.commit('setState', {["state.deviceItems"]: device_members.map(x=>({/**/  ...x.data.device_uuid__toone,/**/  _auth: x.data.auth/**/}))})
          const action383 = console.log('[func8#action383] 加载设备：打印state.deviceItems', state.deviceItems)
          /* action487:  防止继续刷新设备状态 */
          const action466 = recordUpdataItem.haveWebSocketMes = (false)
        })()
        return action86
      })(),
      (async () => {
        const action87 = await (async () => {
          const action89 = await dw.app.run("member.get_create_member", {})
          
        if ((action89.status) === ("error")) {
          const action434message = (action89.message || "操作错误！")
          const action434title = ("提示")
          action434message && dw.alert(action434title, action434message)
          return {}
        }
        
          const action90 = store.commit('setState', {["state.member"]: action89.object})
          const action384 = console.log('[func8#action384] 打印(member)的返回值', state.member)
        })()
        return action87
      })(),
    ])

  }
}

const action292 = actions['func62'] = async function (store, event) {
  const state = store.state
  const action294 = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace('Z', '')
  let now = (action294)
  const action295 = now
  const action293 = await dw.app.run("daily_agg.list", {"aggs": {}, "limit": 1000, "offset": 0, "filters": {/**/  data__date_str: now.slice(0, 10),/**/  data__device_uuid__in: state.deviceItems.map(x=>x.uuid)/**//**/}, "order_by": []})
  let daily_aggs = (action293.objects)
  const action296 = daily_aggs
  const action310 = JSON.parse(JSON.stringify(state.deviceItems))
  let deviceItems = (action310)
  const action309 = deviceItems
  const action297 = []
  const action297_items = (deviceItems)
  for (let action297_index = 0; action297_index < action297_items.length; action297_index++) {
    action297.push(await (async function (item, index) {
      let matchEatItem = (daily_aggs.find(x=>x.data.device_uuid === item.uuid && x.data.type === 'eat'))
      const action298 = matchEatItem
      const action446 = console.log('[func62#action446] 加载喂食数据：打印(matchEatItem)的返回值', matchEatItem)
      if (matchEatItem) {
        const action311 = ((store, event) => {
deviceItems[index].data._eatWeight = matchEatItem.data.weight
deviceItems[index].data._eatCount = matchEatItem.data.count
})(store, event)
      } else {
        const action312 = ((store, event) => {
deviceItems[index].data._eatWeight = 0
deviceItems[index].data._eatCount = 0
})(store, event)
      }
      let matchFoodItem = (daily_aggs.find(x=>x.data.device_uuid === item.uuid && x.data.type === 'food'))
      const action314 = matchFoodItem
      const action447 = console.log('[func62#action447] 加载喂食数据：打印(matchFoodItem)的返回值', matchFoodItem)
      if (matchFoodItem) {
        const action317 = ((store, event) => {
deviceItems[index].data._foodWeight = matchFoodItem.data.weight
deviceItems[index].data._foodCount = matchFoodItem.data.count
})(store, event)
      } else {
        const action319 = ((store, event) => {
deviceItems[index].data._foodWeight = 0
deviceItems[index].data._foodCount = 0
})(store, event)
      }
    })(action297_items[action297_index], action297_index))
  }

  const action320 = store.commit('setState', {["state.deviceItems"]: deviceItems})
  const action449 = console.log('[func62#action449] 打印deviceItems', state.deviceItems)
}

const action228 = actions['func31'] = async function (store, event) {
  const state = store.state
  const action229 = await dw.getClipboardData()
  let content = (action229.data)
  const action230 = content
  if (!!content) {
    const action234 = await dw.app.run("invite_code.list", {"aggs": {}, "limit": 1, "offset": 0, "filters": {/**/  data__code: content/**/}, "order_by": []})
    let code = (action234.objects.length ? action234.objects[0] : null)
    const action235 = code
    if (code) {
      const action241 = store.commit('setState', {["state.invite_code"]: code, ["state.showInvite"]: true})
    }
  }
}

/* action426: 登录及引导页 */
const action58 = actions['func10'] = async function (store, event) {
  const state = store.state
  const action482 = await (async () => {
  
      if (action482lock) return true
      action482lock = true
      try {
    const action61 = dw.goToHref(`feature-login`, {redirectTo: false})
    return action61
  
      } catch (e) {
        throw e
      } finally {
        action482lock = false
      }
      
  })()
}

const action205 = actions['func28'] = async function (store, event) {
  const state = store.state
  const action189 = await dw.hideTabBar()
  const action202 = store.commit('setState', {["state.showGuide"]: true})
}

const action214 = actions['func30'] = async function (store, event) {
  const state = store.state
  const action483 = await (async () => {
  
      if (action483lock) return true
      action483lock = true
      try {
    let value = (event.data.detail.current)
    const action216 = value
    const action224 = console.log('[func30#action224] value1', value)
    if (value > 2) {
      const action220 = value = (0)
    } else if (value < 0) {
      const action223 = value = (0)
    }
    const action221 = console.log('[func30#action221] value2', value)
    const action215 = store.commit('setState', {["state.step"]: event.data.detail.current})
  
      } catch (e) {
        throw e
      } finally {
        action483lock = false
      }
      
  })()
}

const action206 = actions['func29'] = async function (store, event) {
  const state = store.state
  const action190 = await dw.showTabBar()
  const action210 = store.commit('setState', {["state.showGuide"]: false})
}

/* action442: 动作 - 设备 */
const action141 = actions['func18'] = async function (store, event) {
  const state = store.state
  const action142 = console.log('[func18#action142] 长按设备', event)
  const action145 = store.commit('setState', {["state.displayMode"]: "edit"})
  const action475 = ((store, event) => {
const { Vibration } = require('react-native')
Vibration.vibrate(100);
})(store, event)
  const action165 = store.commit('setState', {["state.selectIds"]: [event.context.eventData2.id]})
  const action427 = await dw.hideTabBar()
}

const action19 = actions['func7'] = async function (store, event) {
  const state = store.state
  const action484 = await (async () => {
  
      if (action484lock) return true
      action484lock = true
      try {
    if (state.displayMode === 'edit') {
      if (!state.selectIds.find(x=>x==event.context.eventData.id)) {
        const action26 = store.commit('setState', {["state.selectIds"]: [...state.selectIds,event.context.eventData.id]})
      } else {
        const action149 = store.commit('setState', {["state.selectIds"]: state.selectIds.filter(x=>x !== event.context.eventData.id)})
      }
    }
  
      } catch (e) {
        throw e
      } finally {
        action484lock = false
      }
      
  })()
}

const action146 = actions['func19'] = async function (store, event) {
  const state = store.state
  const action147 = store.commit('setState', {["state.displayMode"]: "preview", ["state.selectIds"]: []})
  const action428 = await dw.showTabBar()
}

const action175 = actions['func23'] = async function (store, event) {
  const state = store.state
  const action471 = await (async () => {
  
      if (action471lock) return true
      action471lock = true
      try {
    const action177 = await dw.app.run("device.update", {"id": state.currentItem.id, "as_admin": true, "formData": {name: state.formData.name}})
    
        if ((action177.status) === ("error")) {
          const action178message = (action177.message || "操作错误！")
          const action178title = ("提示")
          action178message && dw.alert(action178title, action178message)
          return {}
        }
        
    let message = ("编辑成功")
    const action336 = message
    const action337 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    const action183 = await store.dispatch("func22", {})
    const action181 = await store.dispatch("func19", {})
    const action182 = await store.dispatch("func8", {})
  
      } catch (e) {
        throw e
      } finally {
        action471lock = false
      }
      
  })()
}

const action153 = actions['func21'] = async function (store, event) {
  const state = store.state
  let msg = ("删除设备时候会同步将该设备解除绑定")
  const action327 = msg
  const action328 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(msg)
}
else{
  return null
}
})(store, event)
  if (!action328) {
    return event
  }
  const action159 = []
  const action159_items = (state.selectIds)
  for (let action159_index = 0; action159_index < action159_items.length; action159_index++) {
    action159.push(await (async function (item, index) {
      const action156 = await dw.app.run("device.delete", {"id": item, "as_admin": true})
      
        if ((action156.status) === ("error")) {
          const action160message = (action156.message || "操作错误！")
          const action160title = ("提示")
          action160message && dw.alert(action160title, action160message)
          return {}
        }
        
    })(action159_items[action159_index], action159_index))
  }

  let message = ("操作成功")
  const action333 = message
  const action334 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  const action164 = await store.dispatch("func19", {})
  const action481 = dw.setGlobalLocals("allDeviceMember", null)
  const action162 = await store.dispatch("func8", {})
}

const action243 = actions['func32'] = async function (store, event) {
  const state = store.state
  const action244 = store.commit('setState', {["state.showInvite"]: false})
  const action257r = await dw.setClipboardData({data: ""})
  const action257 = !!action257r && action257r.errMsg === 'setClipboardData:ok'
}

const action246 = actions['func33'] = async function (store, event) {
  const state = store.state
  const action255 = (dw.platform === 'dwapp') ? dw.app.wxLogin() : (dw.platform === 'rnapp') ? await dw.app.wxLogin() : 
        (D.siteuser && D.siteuser.id)
          ? true
          : app.wxGotoLogin({}, '/account/login/?next=' + encodeURIComponent(location.href))
        
  if (!action255) return
  const action248 = await dw.showLoading({
    title: "",
    mask: false
  })
  const action247 = await dw.app.run("device_member.share_by_code", {"code": state.invite_code.data.code})
  const action249 = await dw.hideLoading()
  
        if ((action247.status) === ("error")) {
          const action251message = (action247.message || "操作错误！")
          const action251title = ("提示")
          action251message && dw.alert(action251title, action251message)
          return {}
        }
        
  const action252 = await dw.showToast({"icon": "success", "mask": false, "image": "", "title": "绑定成功", "duration": 1500, "content": "绑定成功"})
  let message = ("绑定成功")
  const action339 = message
  const action340 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  const action256r = await dw.setClipboardData({data: ""})
  const action256 = !!action256r && action256r.errMsg === 'setClipboardData:ok'
  const action254 = await store.dispatch("func32", {})
  const action253 = await store.dispatch("func8", {})
}

const action34 = actions['func9'] = async function (store, event) {
  const state = store.state
  const action470 = await (async () => {
  
      if (action470lock) return true
      action470lock = true
      try {
    let slug = (event.context.eventData)
    const action35 = slug
    let item = (event.context.eventData2 || undefined)
    const action38 = item
    const action55 = console.log('[func9#action55] 打印(item)的返回值', item)
    if (['device_model_list', 'mwssage_center'].includes(slug) && !state.siteuser_id) {
      const action82 = await store.dispatch("func10", {})
      return event
    }
    if (!!item && slug === "live") {
      if (state.displayMode === "edit") {
        const action478 = await store.dispatch("func19", {})
      } else {
        const action37 = dw.app.goToPappUrl(slug, {"uuid": item.uuid}, {redirectTo: false})
      }
    } else {
      const action47 = dw.app.goToPappUrl(slug, {}, {redirectTo: false})
    }
  
      } catch (e) {
        throw e
      } finally {
        action470lock = false
      }
      
  })()
}

/* action443: 弹窗 */
const action151 = actions['func20'] = function (store, event) {
  const state = store.state
  const action172 = JSON.parse(JSON.stringify(state.deviceItems.find(x=>x.id === state.selectIds[0])))
  let currentItem = (action172)
  const action173 = currentItem
  const action152 = store.commit('setState', {["state.namePop"]: true, ["state.currentItem"]: currentItem, ["state.formData"]: currentItem.data})
}

const action166 = actions['func22'] = function (store, event) {
  const state = store.state
  const action167 = store.commit('setState', {["state.namePop"]: false})
}

const action184 = actions['func24'] = function (store, event) {
  const state = store.state
  let key = (event.context.eventData)
  const action186 = key
  const action185 = store.commit('setState', {[`state.formData.${key}`]: event.data.detail.value})
}

/* action444: 提示通知 */
const action322 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action323 = modalInstance = (event.data)
  const action324 = console.log('[getModalInstance#action324] 打印(modalInstance)', modalInstance)
}

const action69 = actions['func12'] = async function (store, event) {
  const state = store.state
  const action70 = console.log('[func12#action70] 收到通知事件打印', event)
  let customMessage = (event.data.info.customMessage)
  const action71 = customMessage
  if (dw.platform === 'rnapp') {
    const action74 = await (async (store, event) => {
const FileSystem = dw.getNativePackage('FileSystem')
const MediaLibrary = dw.getNativePackage('MediaLibrary')
const Platform = dw.getNativePackage('Platform')

if (Platform.OS === 'android') {
  const { status } = await dw.requestAndroidPermission('android.permission.WRITE_EXTERNAL_STORAGE')
  if (status !== 'granted') return dw.alert('提示', '请授予文件写入权限')
}

if (Platform.OS === 'android') {
  const { status } = await dw.requestAndroidPermission('android.permission.READ_EXTERNAL_STORAGE')
  if (status !== 'granted') return dw.alert('提示', '请授予文件读取权限')
}

if (Platform.OS === 'android') {
  const perms = await MediaLibrary.requestPermissionsAsync();
  if (!perms.granted) {
    return dw.alert('提示', '请授予相册写入权限')
  }
}

const callback = async downloadProgress => {
  const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
  console.log("progress", progress)
};
const filePath = customMessage
const path = `${FileSystem.documentDirectory}${Math.random().toString(36).slice(2)}_${filePath.split("/")[filePath.split("/").length - 1]}`
console.log("path", path)
const downloadResumable = FileSystem.createDownloadResumable(
  filePath,
  path,
  {},
  callback
);

try {
  const { uri } = await downloadResumable.downloadAsync();
  console.log('Finished downloading to ', uri);
  const action25 = await dw.showToast({
    title: '视频保存至本地',
    icon: 'none',
    image: '',
    duration: 1500,
    mask: false,
    content: `视频保存至本地`
  })
  const asset = await MediaLibrary.createAssetAsync(uri);
  console.log("asset", asset)
} catch (e) {
  console.error(e);
}
})(store, event)
  }
}

/* action441: 计算属性 */
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
var action116 = videoRef;
var modalInstance = null;
var action341 = modalInstance;
var tick = null;
var action279 = tick;
var recordUpdataItem = { /**/onShowType: null, /**/haveWebSocketMes: false /**/ };
var action374 = recordUpdataItem;
/* action429: 初始数据获取 */
/* action426: 登录及引导页 */
/* action442: 动作 - 设备 */
/* action443: 弹窗 */
/* action444: 提示通知 */
/* action441: 计算属性 */
var action225 = actions['computed2'] = function (event, state) {
  var action226 = function (event) {
    function timeSince(date) {
      var seconds = Math.floor((new Date() - new Date(date)) / 1000);
      console.log('seconds', seconds);
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
  return action226;
};
// COMPUTED_ACTION_META:computed2 {"deps":[]}

var action290 = actions['computed3'] = function (event, state) {
  return event.item.data._lastAlive.slice(0, 10).split("-").join("/") + " " + event.item.data._lastAlive.slice(11, 16) + "设备离线";
};
// COMPUTED_ACTION_META:computed3 {"deps":[]}

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdw54: {
  width: pm(320),
  height: pm(693),
},
xdw56: {
  top: 0,
  left: 0,
  position: "absolute",
  flexDirection: "column",
},
xdw57: {
  color: "#181818",
  fontSize: pm(19),
  textAlign: "left",
  fontWeight: "500",
  lineHeight: pm(26),
},
xdw58: {
  width: pm(190),
  flexDirection: "column",
},
xdw59: {},
xdw5a: {
  fontSize: pm(12),
  lineHeight: pm(24),
  marginLeft: pm(3),
},
xdw5b: {
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
},
xdw5c: {
  width: pm(1),
  height: pm(7),
  marginLeft: pm(7),
  marginRight: pm(7),
  flexDirection: "column",
  backgroundColor: "#979797",
},
xdw5d: {
  alignItems: "flex-start",
  paddingTop: pm(40),
  flexDirection: "row",
  justifyContent: "space-between",
},
xdw5e: {
  fontSize: pm(15),
  textAlign: "left",
  fontWeight: "500",
  lineHeight: pm(21),
  marginBottom: pm(8),
},
xdw5f: {
  right: pm(10),
  bottom: pm(12),
  position: "absolute",
  alignItems: "center",
  marginRight: pm(2),
  marginBottom: pm(0),
  flexDirection: "row",
  justifyContent: "center",
},
xdw5g: {
  width: pm(320),
  height: pm(76),
  position: "relative",
  alignItems: "flex-end",
  marginLeft: pm(-10),
  paddingTop: pm(35),
  marginRight: pm(-10),
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: "#ffffff",
},
xdw5h: {
  width: pm(300),
  zIndex: 2,
  position: "relative",
  marginLeft: pm(10),
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  flexDirection: "column",
  paddingBottom: pm(0),
  justifyContent: "center",
},
xdw5i: {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(20),
},
xdw5j: {
  flexDirection: "column",
},
xdw5k: {
  width: pm(28),
  height: pm(42),
},
xdw5l: {
  color: "#181818",
  fontSize: pm(13),
  maxWidth: pm(60),
  fontWeight: "500",
  lineHeight: pm(18),
  marginLeft: pm(3),
},
xdw5m: {
  alignItems: "flex-start",
  flexDirection: "row",
},
xdw5n: {
  color: "#666666",
  fontSize: pm(10),
  lineHeight: pm(16),
},
xdw5o: {
  fontSize: pm(14),
  fontWeight: "500",
  lineHeight: pm(19),
  marginLeft: pm(7),
},
xdw5p: {
  marginTop: pm(5),
  alignItems: "baseline",
  flexDirection: "row",
  justifyContent: "flex-start",
},
xdw5q: {
  color: "#666666",
  fontSize: pm(10),
  lineHeight: pm(16),
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
},
xdw5r: {
  width: pm(73),
  height: pm(20),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#FAF4E9",
  borderTopLeftRadius: pm(3),
  borderTopRightRadius: pm(3),
  borderBottomLeftRadius: pm(3),
  borderBottomRightRadius: pm(3),
},
xdw5s: {
  width: pm(73),
  height: pm(20),
},
xdw5t: {
  marginTop: pm(8),
  alignItems: "center",
  flexDirection: "row",
},
xdw5u: {
  width: pm(100),
  marginRight: pm(10),
  flexDirection: "column",
},
xdw5v: {
  width: pm(160),
  height: pm(120),
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
  borderBottomLeftRadius: pm(14),
  borderBottomRightRadius: pm(14),
},
xdw5w: {
  width: pm(160),
  height: pm(120),
  flexDirection: "column",
  backgroundColor: "#000000",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
  borderBottomLeftRadius: pm(14),
  borderBottomRightRadius: pm(14),
},
xdw5x: {
  color: "#ffffff",
  fontSize: pm(10),
  lineHeight: pm(16),
},
xdw5y: {
  left: pm(10),
  bottom: pm(10),
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw5z: {
  width: pm(20),
  height: pm(20),
},
xdw60: {
  right: pm(7),
  width: pm(20),
  bottom: pm(7),
  height: pm(20),
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw61: {
  width: pm(160),
  height: pm(120),
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw62: {
  width: pm(17),
  height: pm(17),
},
xdw65: {
  top: pm(3),
  right: pm(3),
  zIndex: 999,
  position: "absolute",
  flexDirection: "column",
},
xdw66: {
  width: pm(300),
  height: pm(148),
  zIndex: 2,
  position: "relative",
  alignItems: "center",
  paddingTop: pm(14),
  paddingLeft: pm(14),
  paddingRight: pm(14),
  flexDirection: "row",
  paddingBottom: pm(14),
  justifyContent: "space-between",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
  borderBottomLeftRadius: pm(14),
  borderBottomRightRadius: pm(14),
},
xdw67: {
  width: pm(300),
  marginTop: pm(15),
  flexDirection: "column",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
  borderBottomLeftRadius: pm(14),
  borderBottomRightRadius: pm(14),
},
xdw68: {
  position: "relative",
  flexDirection: "column",
},
xdw69: {
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw6a: {
  height: pm(300),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw6b: {
  color: "#000000",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw6c: {
  width: pm(200),
  height: pm(38),
  marginTop: pm(34),
  alignItems: "center",
  marginLeft: pm(50),
  marginRight: pm(50),
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "rgba(255, 218, 103, 1)",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw6d: {
  flexDirection: "column",
  justifyContent: "center",
},
xdw6e: {
  marginTop: pm(14),
  marginLeft: pm(10),
  marginRight: pm(10),
  flexDirection: "column",
},
xdw6f: {
  flex: 1,
  width: "100%",
  zIndex: 2,
  overflow: "scroll",
  backgroundColor: "#00000000",
},
xdw6g: {
  width: pm(31),
  height: pm(31),
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw6h: {
  color: "#666666",
  fontSize: pm(10),
  marginTop: pm(3),
  lineHeight: pm(17),
},
xdw6i: {
  flexGrow: 1,
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw6j: {
  left: 0,
  width: pm(320),
  bottom: 0,
  height: pm(107),
  zIndex: 9999,
  position: "absolute",
  flexDirection: "row",
  backgroundColor: "#ffffff",
},
xdw6k: {
  color: "#181818",
  fontSize: pm(15),
  textAlign: "center",
  fontWeight: "500",
  lineHeight: pm(21),
  paddingTop: pm(13),
  paddingBottom: pm(13),
},
xdw6l: {
  borderBottomWidth: pm(0),
  borderBottomColor: "#eeeeee",
  justifyContent: "center",
},
xdw6m: {
  width: pm(250),
  height: pm(38),
  fontSize: pm(15),
  borderTopWidth: pm(0),
  borderTopColor: "#ddd",
  borderLeftWidth: pm(0),
  borderLeftColor: "#ddd",
  lineHeight: pm(21),
  marginLeft: pm(10),
  paddingTop: 0,
  borderRightWidth: pm(0),
  borderRightColor: "#ddd",
  paddingLeft: 0,
  borderBottomWidth: pm(0),
  borderBottomColor: "#ddd",
  paddingRight: 0,
  paddingBottom: 0,
},
xdw6n: {
  width: pm(20),
  height: pm(20),
  marginLeft: "auto",
  marginRight: pm(10),
},
xdw6o: {
  width: pm(300),
  height: pm(41),
  borderTopWidth: pm(1),
  borderTopColor: "#FFD355",
  overflow: "hidden",
  alignItems: "center",
  borderLeftWidth: pm(1),
  borderLeftColor: "#FFD355",
  borderRightWidth: pm(1),
  borderRightColor: "#FFD355",
  borderBottomWidth: pm(1),
  borderBottomColor: "#FFD355",
  flexDirection: "row",
  borderTopLeftRadius: pm(7),
  borderTopRightRadius: pm(7),
  borderBottomLeftRadius: pm(7),
  borderBottomRightRadius: pm(7),
},
xdw6p: {
  marginBottom: pm(10),
  flexDirection: "row",
},
xdw6q: {
  fontSize: pm(14),
  fontWeight: "600",
  lineHeight: pm(19),
},
xdw6r: {
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
xdw6s: {
  width: pm(144),
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
xdw6t: {
  width: pm(144),
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
xdw6u: {
  width: pm(300),
  flexDirection: "row",
},
xdw6v: {
  width: pm(320),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(29),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
},
xdw6w: {
  flex: 1,
  zIndex: 10,
  alignItems: "flex-end",
  flexDirection: "row",
  justifyContent: "center",
},
xdw6x: {
  flexGrow: 1,
  position: "relative",
  flexDirection: "column",
  justifyContent: "flex-start",
},
xdw6y: {
  width: pm(303),
  height: pm(262),
},
xdw6z: {
  width: pm(180),
  height: pm(36),
},
xdw70: {
  color: "#666666",
  fontSize: pm(17),
  marginTop: pm(10),
  fontWeight: "500",
  lineHeight: pm(26),
},
xdw71: {
  width: pm(320),
  alignItems: "center",
  paddingTop: pm(109),
  flexDirection: "column",
  justifyContent: "flex-start",
},
xdw72: {
  width: "100%",
},
xdw73: {
  width: pm(14),
  height: pm(7),
  flexDirection: "column",
  backgroundColor: "#FFD355",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw74: {
  width: pm(7),
  height: pm(7),
  flexDirection: "column",
  backgroundColor: "#E8E8E8",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw75: {
  marginRight: pm(9),
  flexDirection: "column",
},
xdw76: {
  top: pm(460),
  width: pm(320),
  position: "absolute",
  alignItems: "flex-start",
  flexDirection: "row",
  justifyContent: "center",
},
xdw77: {
  color: "#181818",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(24),
},
xdw78: {
  width: pm(300),
  bottom: pm(29),
  height: pm(38),
  position: "absolute",
  alignItems: "center",
  marginLeft: pm(10),
  marginRight: pm(10),
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#FFD355",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw79: {
  width: pm(320),
  height: "100%",
  zIndex: 9999,
  position: "absolute",
  flexDirection: "column",
  backgroundColor: "#ffffff",
},
xdw7a: {
  width: pm(30),
  height: pm(30),
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw7b: {
  fontSize: pm(12),
  lineHeight: pm(24),
  marginLeft: pm(5),
  marginRight: pm(5),
},
xdw7c: {
  flexDirection: "row",
},
xdw7d: {
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(19),
},
xdw7e: {
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
xdw7f: {
  width: pm(280),
  height: pm(35),
  flexGrow: 0,
  marginTop: pm(10),
  alignItems: "center",
  flexShrink: 0,
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
xdw7g: {
  width: pm(280),
  height: pm(35),
  flexGrow: 0,
  marginTop: pm(10),
  alignItems: "center",
  flexShrink: 0,
  marginLeft: "auto",
  marginRight: "auto",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#f8f8f8",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw7h: {
  width: pm(300),
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
},
xdw7i: {
  flex: 1,
  zIndex: 10,
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "flex-end",
}
});
const slide = {"type":"271218","key":"c2712181","slug":null,"randomid":"id_f3f3cf52c44de00b838d5314","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"Image2":{"ctx_map":{"fop":"e,320,240","src":"u/dev065/2023/03/01/TvSfiJz3YbGjLsSGBiYiMY/108272ba70c0435598414fa0d18405ae_mergeImage.png"}},"Image3":{"ctx_map":{"fop":"e,640,1386","src":"u/dev064/2023/03/02/fr6NQJbyRSQFrYfBkyFeG8/bg渐变2.png","buildToLocal":true}},"Image4":{"ctx_map":{"fop":"e,81,123","src":"u/dev066/2024/02/29/LgkhnSJGuBwAmfujazjQMJ/喂食器ic3x.png"}},"Image5":{"ctx_map":{"fop":"e,640,240","src":"u/dev064/2023/05/11/FjqUce4zanUMGJfZ9mhfDd/yellow.png"}},"Image6":{"ctx_map":{"fop":"e,60,60","src":"u/dev064/2023/06/27/xLst8GjojJfDJ6XuHNKEVA/icon_selecct4x.png","buildToLocal":true}},"Image7":{"ctx_map":{"fop":"e,60,60","src":"u/dev064/2023/06/27/DFwToeZwuys4JJeReFU35i/icon_unselecct4x.png","buildToLocal":true}},"Image8":{"ctx_map":{"fop":"e,100,100","src":"u/dev064/2023/06/27/dQjquUfWioLpudc5SANUWS/icon_设备命名4x.png"}},"Image9":{"ctx_map":{"fop":"e,100,100","src":"u/dev064/2023/06/27/S2Fk6GYm8qoRuYTc3JS44B/icon_删除4x.png"}},"Modal2":{"ctx_map":{"mask":true,"value":false,"baseIndex":2000,"maskClosable":true,"destroyOnClose":false,"appendKeyboardHeight":true}},"Modal3":{"ctx_map":{"mask":true,"value":false,"position":"bottom","baseIndex":2000,"maskClosable":true,"destroyOnClose":false,"appendKeyboardHeight":true}},"Text13":{"ctx_map":{"text":"你好,向日葵花"}},"Text14":{"ctx_map":{"text":"消息"}},"Text15":{"ctx_map":{"text":"设备"}},"Text18":{"ctx_map":{"text":"全部设备"}},"Text19":{"ctx_map":{"text":"小五的喂食器","numberOfLines":2}},"Text20":{"ctx_map":{"text":"今日进食"}},"Text21":{"ctx_map":{"text":"16克"}},"Text22":{"ctx_map":{"text":"未设置"}},"Text31":{"ctx_map":{"text":"选择设备"}},"Text32":{"ctx_map":{"text":"当前还没有任何设备，点击前往添加"}},"Text33":{"ctx_map":{"text":"登录查看我的设备"}},"Text43":{"ctx_map":{"text":"设备命名"}},"Text44":{"ctx_map":{"text":"删除"}},"Text45":{"ctx_map":{"text":"保存"}},"Text46":{"ctx_map":{"text":"取消"}},"Text47":{"ctx_map":{"text":"设备命名"}},"Text48":{"ctx_map":{"text":"这是一个文本组件"}},"Text49":{"ctx_map":{"text":"开启全新体验"}},"Text52":{"ctx_map":{"text":"给你分享了一台设备","numberOfLines":1}},"Text53":{"ctx_map":{"text":"","numberOfLines":1}},"Text54":{"ctx_map":{"text":"","numberOfLines":1}},"Text55":{"ctx_map":{"text":"接受设备分享"}},"Text56":{"ctx_map":{"text":"取消关闭"}},"Text61":{"ctx_map":{"text":"这是一个文本组件","numberOfLines":1}},"Text62":{"ctx_map":{"text":"设备离线","numberOfLines":1}},"Text63":{"ctx_map":{"text":"16克"}},"Text64":{"ctx_map":{"text":"出粮次数"}},"Text65":{"ctx_map":{"text":"16克"}},"Text66":{"ctx_map":{"text":"你好,向日葵花"}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"View20":{"ctx_map":{}},"View21":{"ctx_map":{}},"View25":{"ctx_map":{}},"View26":{"ctx_map":{}},"View27":{"ctx_map":{}},"View28":{"ctx_map":{}},"View29":{"ctx_map":{}},"View30":{"ctx_map":{}},"View31":{"ctx_map":{}},"View37":{"ctx_map":{}},"View38":{"ctx_map":{}},"View41":{"ctx_map":{}},"View44":{"ctx_map":{}},"View45":{"ctx_map":{}},"View46":{"ctx_map":{}},"View47":{"ctx_map":{}},"View48":{"ctx_map":{}},"View51":{"ctx_map":{}},"View58":{"ctx_map":{}},"View59":{"ctx_map":{}},"View60":{"ctx_map":{}},"View61":{"ctx_map":{}},"View62":{"ctx_map":{}},"View63":{"ctx_map":{}},"View64":{"ctx_map":{}},"View65":{"ctx_map":{}},"View66":{"ctx_map":{}},"View67":{"ctx_map":{}},"View68":{"ctx_map":{}},"View69":{"ctx_map":{}},"View70":{"ctx_map":{}},"View71":{"ctx_map":{}},"View73":{"ctx_map":{}},"View76":{"ctx_map":{}},"View77":{"ctx_map":{}},"View78":{"ctx_map":{}},"View79":{"ctx_map":{}},"View80":{"ctx_map":{}},"View81":{"ctx_map":{}},"View82":{"ctx_map":{}},"View83":{"ctx_map":{}},"View84":{"ctx_map":{}},"View85":{"ctx_map":{}},"View86":{"ctx_map":{}},"View87":{"ctx_map":{}},"View88":{"ctx_map":{}},"View90":{"ctx_map":{}},"View91":{"ctx_map":{}},"View92":{"ctx_map":{}},"View93":{"ctx_map":{}},"View94":{"ctx_map":{}},"View95":{"ctx_map":{}},"View96":{"ctx_map":{}},"View97":{"ctx_map":{}},"View98":{"ctx_map":{}},"Image10":{"ctx_map":{"fop":"e,50,50","src":"u/dev064/2023/03/04/S9jJE2ZqQn3VqjvW43D3dk/企业微信截图_20230302142030.png"}},"Image11":{"ctx_map":{"fop":"e,606,524","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image12":{"ctx_map":{"fop":"e,360,72","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image13":{"ctx_map":{"fop":"e,90,90","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image14":{"ctx_map":{"fop":"e,320,240","src":"u/dev065/2023/03/01/TvSfiJz3YbGjLsSGBiYiMY/108272ba70c0435598414fa0d18405ae_mergeImage.png","blurRadius":1.5}},"Image19":{"ctx_map":{"fop":"e,258,72","src":"u/dev066/2024/02/29/Zf6PPvzt3AzVcr9XqS8KnP/编组33x4.png"}},"Image20":{"ctx_map":{"fop":"e,258,72","src":"u/dev066/2024/02/29/8V97n7UyhHG8FEGzDrRFLF/编组63x1.png"}},"Image21":{"ctx_map":{"fop":"e,258,72","src":"u/dev066/2024/02/29/Qm2X49AThrpcQpdTnu6m69/编组3备份23x.png"}},"Image22":{"ctx_map":{"fop":"e,72,72","src":"u/dev066/2024/02/29/bXW3br3Qn9ASsebztNTJXe/编组3x3.png"}},"Image23":{"ctx_map":{"fop":"e,72,72","src":"u/dev066/2024/02/29/nYxtDnxJAzN6tr4eRa8mqS/编组3x4.png"}},"Swiper1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"autoplay":false,"circular":false,"duration":500,"interval":3000,"itemsKey":"summary","displayMultipleItems":1}},"ViewIf7":{"ctx_map":{"value":true}},"ViewIf8":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewIf11":{"ctx_map":{"value":true}},"ViewIf12":{"ctx_map":{"value":true}},"ViewIf13":{"ctx_map":{"value":true}},"ViewIf14":{"ctx_map":{"value":true}},"ViewIf15":{"ctx_map":{"value":true}},"ViewIf20":{"ctx_map":{"value":true}},"ViewIf21":{"ctx_map":{"value":true}},"ViewIf22":{"ctx_map":{"value":true}},"ViewIf23":{"ctx_map":{"value":true}},"ViewIf24":{"ctx_map":{"value":true}},"ViewIf25":{"ctx_map":{"value":true}},"ViewIf26":{"ctx_map":{"value":true}},"ViewIf27":{"ctx_map":{"value":true}},"ViewIf28":{"ctx_map":{"value":true}},"ViewIf29":{"ctx_map":{"value":true}},"ViewIf30":{"ctx_map":{"value":true}},"ViewIf31":{"ctx_map":{"value":true}},"ViewIf32":{"ctx_map":{"value":true}},"ViewIf33":{"ctx_map":{"value":true}},"ViewIf34":{"ctx_map":{"value":true}},"ViewIf35":{"ctx_map":{"value":true}},"ViewIf36":{"ctx_map":{"value":true}},"ViewIf38":{"ctx_map":{"value":true}},"ViewIf39":{"ctx_map":{"value":true}},"ViewIf40":{"ctx_map":{"value":true}},"ViewIf41":{"ctx_map":{"value":true}},"ViewIf42":{"ctx_map":{"value":true}},"ViewIf43":{"ctx_map":{"value":true}},"ViewIf44":{"ctx_map":{"value":true}},"ViewIf45":{"ctx_map":{"value":true}},"ViewIf46":{"ctx_map":{"value":true}},"ViewIf47":{"ctx_map":{"value":true}},"ViewIf48":{"ctx_map":{"value":true}},"ViewIf49":{"ctx_map":{"value":true}},"SvgImage1":{"ctx_map":{"src":"u/dev065/2023/03/01/pdsEAfbH3dGyWeCuaGtTj6/消息icon.svg","color":"#07c160","width":17,"height":17,"SvgImageManage":"SvgImageManage"}},"SvgImage2":{"ctx_map":{"src":"u/dev065/2023/03/01/u2NBHZAWis6syqNLcLbiHi/一键清理icon备份4.svg","color":"#07c160","width":17,"height":17,"SvgImageManage":"SvgImageManage"}},"ComNavBar1":{"ctx_map":{"theme":"default","title":"测试自定义标题","headerBackgroundColor":"#ffffff","statusBarBackgroundColor":"#ffffff"}},"SvgImage14":{"ctx_map":{"src":"u/dev069/2023/12/19/FhcfomMngNhf3EQmQrGZqT/1306464.svg","color":"#000000","width":17,"height":17,"SvgImageManage":"SvgImageManage"}},"DwappCloud1":{"ctx_map":{"color1":""}},"DwappCloud2":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"DwappCloud3":{"ctx_map":{"color1":""}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[]}},"ShadowView1":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}},"NativeInput1":{"ctx_map":{"type":"text"}},"NativeButton1":{"ctx_map":{"type":"button"}},"NativeButton2":{"ctx_map":{"type":"button"}},"NativeButton3":{"ctx_map":{"type":"button"}},"NativeButton4":{"ctx_map":{"type":"button"}},"NativeEventProxy1":{"ctx_map":{"eventName":"XgPush.addOnReceiveNotificationResponseListener"}}}};
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
const pageGroupSlug = 'app_tongzhua-index';

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
      <View /* View44 */   style={styles.xdw6x}><View /* View45 */   style={styles.xdw56}><XbenchcImage /* Image3 */ style={styles.xdw54} source={dwtools.getLocalResource('xdw55_lthar08g')}  /></View>
<View /* View1 */   style={styles.xdw5h}>{!!(state.displayMode === 'preview') /* ViewIf7 */ && (<><View /* View4 */   style={styles.xdw5d}><View /* View90 */   style={styles.xdw58}>{!!(state.ready) /* ViewIf48 */ && (<><Text /* Text13 */ style={styles.xdw57} >{"你好，" + (state.member ? state.member.data.nickname : '访客')}</Text></>)}
{!!(!state.ready) /* ViewIf49 */ && (<><Text /* Text66 */ style={styles.xdw57} >{"你好，"}</Text></>)}</View>
<View /* View5 */   style={styles.xdw5b}><XbenchcView /* View2 */   viewStyle={styles.xdw5b} onClick={getEvent('View2:onClick:func9:', {eventData: "mwssage_center"}, bagForKeyValue, bagForIndex)}><Image /* SvgImage1 */ style={[ styles.xdw59, { width: pm(17), height: pm(17) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev065/2023/03/01/pdsEAfbH3dGyWeCuaGtTj6/消息icon.svg"), width: pm(17), height: pm(17) }} />
<Text /* Text14 */ style={styles.xdw5a} >{slide.components.Text14.ctx_map.text}</Text></XbenchcView>
<View /* View6 */   style={styles.xdw5c}></View>
<XbenchcView /* View3 */   viewStyle={styles.xdw5b} onClick={getEvent('View3:onClick:func9:', {eventData: "device_model_list"}, bagForKeyValue, bagForIndex)}><Image /* SvgImage2 */ style={[ styles.xdw59, { width: pm(17), height: pm(17) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev065/2023/03/01/u2NBHZAWis6syqNLcLbiHi/一键清理icon备份4.svg"), width: pm(17), height: pm(17) }} />
<Text /* Text15 */ style={styles.xdw5a} >{slide.components.Text15.ctx_map.text}</Text></XbenchcView></View></View></>)}
{!!(state.displayMode === 'edit' & state.ready) /* ViewIf8 */ && (<><View /* View37 */   style={styles.xdw5g}><Text /* Text31 */ style={styles.xdw5e} >{slide.components.Text31.ctx_map.text}</Text>
<View /* View38 */   style={styles.xdw5f}><XbenchcView /* View41 */   viewStyle={styles.xdw5b} onClick={getEvent('View41:onClick:func19:', {}, bagForKeyValue, bagForIndex)}><Image /* SvgImage14 */ style={[ styles.xdw59, { width: pm(17), height: pm(17) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev069/2023/12/19/FhcfomMngNhf3EQmQrGZqT/1306464.svg"), width: pm(17), height: pm(17) }} /></XbenchcView></View></View></>)}</View>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw6f} scrollX={ false } scrollY={ true } ><View /* View18 */   style={styles.xdw6e}><View /* View19 */   style={styles.xdw6d}><View /* View27 */   style={styles.xdw5j}><Text /* Text18 */ style={styles.xdw5i} >{slide.components.Text18.ctx_map.text}</Text></View>
{!!(state.ready) /* ViewIf11 */ && (<>{!!(!!state.siteuser_id) /* ViewIf14 */ && (<>{!!(state.deviceItems.length > 0) /* ViewIf12 */ && (<>{(state.deviceItems).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View51 */   style={styles.xdw68}><Shadow containerStyle={styles.xdw67} {...(state.rnappShadow)}><XbenchcView /* View20 */   viewStyle={styles.xdw66} onClick={getEvent('View20:onClick:func9:', {eventData: "live", eventData2: bagForItem}, bagForKeyValue, bagForIndex)} onLongPress={getEvent('View20:onLongPress:func18:', {eventData: "live", eventData2: bagForItem}, bagForKeyValue, bagForIndex)}><View /* View26 */   style={styles.xdw5u}><View /* View28 */   style={styles.xdw5m}><XbenchcImage /* Image4 */ style={styles.xdw5k} source={dwtools.qiniu(slide.components.Image4.ctx_map.src, slide.components.Image4.ctx_map.fop)}  />
<Text /* Text19 */ style={styles.xdw5l} numberOfLines={2}>{bagForItem.data.name}</Text></View>
<View /* View29 */   style={styles.xdw5p}><Text /* Text20 */ style={styles.xdw5n} >{slide.components.Text20.ctx_map.text}</Text>
<Text /* Text21 */ style={[styles.xdw5o, ({
  color: bagForItem.data.feed_type === 'cat_food' ? "#999999" : "#000000"
})]} >{(bagForItem.data._eatWeight || 0) + "克"}</Text></View>
<View /* View95 */   style={styles.xdw5p}><Text /* Text64 */ style={styles.xdw5n} >{slide.components.Text64.ctx_map.text}</Text>
<Text /* Text63 */ style={[styles.xdw5o, ({
  color: bagForItem.data.feed_type === 'cat_food' ? "#999999" : "#000000"
})]} >{(bagForItem.data._foodCount || 0) + "次"}</Text></View>
<View /* View30 */   style={styles.xdw5t}>{!!(bagForItem.data.feed_type === 'unset') /* ViewIf44 */ && (<><View /* View31 */   style={styles.xdw5r}><Text /* Text22 */ style={styles.xdw5q} >{slide.components.Text22.ctx_map.text}</Text></View></>)}
{!!(bagForItem.data.feed_type === 'timer') /* ViewIf45 */ && (<><View /* View96 */  ><XbenchcImage /* Image20 */ style={styles.xdw5s} source={dwtools.qiniu(slide.components.Image20.ctx_map.src, slide.components.Image20.ctx_map.fop)}  /></View></>)}
{!!(bagForItem.data.feed_type === 'buffet') /* ViewIf46 */ && (<><View /* View97 */  ><XbenchcImage /* Image21 */ style={styles.xdw5s} source={dwtools.qiniu(slide.components.Image21.ctx_map.src, slide.components.Image21.ctx_map.fop)}  /></View></>)}
{!!(bagForItem.data.feed_type === 'cat_food') /* ViewIf47 */ && (<><View /* View98 */  ><XbenchcImage /* Image19 */ style={styles.xdw5s} source={dwtools.qiniu(slide.components.Image19.ctx_map.src, slide.components.Image19.ctx_map.fop)}  /></View></>)}</View></View>
<View /* View21 */   style={styles.xdw61}>{!!(bagForItem.data._isAlive) /* ViewIf38 */ && (<>{!!(bagForItem && bagForItem.data.poster !== 'blank.png') /* ViewIf35 */ && (<>{!!(bagForItem.data.privacy_state === 'off') /* ViewIf40 */ && (<><XbenchcImage /* Image2 */ style={styles.xdw5v} source={dwtools.qiniu(bagForItem.data.poster, slide.components.Image2.ctx_map.fop)}  /></>)}
{!!(bagForItem.data.privacy_state === 'on') /* ViewIf41 */ && (<><XbenchcImage /* Image14 */ style={styles.xdw5v} source={dwtools.qiniu(bagForItem.data.poster, slide.components.Image14.ctx_map.fop)} blurRadius={ 1.5 } /></>)}</>)}
{!!(!(bagForItem && bagForItem.data.poster !== 'blank.png')) /* ViewIf36 */ && (<><View /* View91 */   style={styles.xdw5w}></View></>)}
<View /* View25 */   style={styles.xdw5y}><Text /* Text61 */ style={styles.xdw5x} numberOfLines={1}>{bagForItem.data.privacy_state === 'on' ? "隐私模式已开启" : (bagForItem.data.words || "暂无设备画面信息~")}</Text></View>
<View /* View92 */   style={styles.xdw60}>{!!(bagForItem.data.privacy_state === 'off') /* ViewIf42 */ && (<><XbenchcImage /* Image22 */ style={styles.xdw5z} source={dwtools.qiniu(slide.components.Image22.ctx_map.src, slide.components.Image22.ctx_map.fop)}  /></>)}
{!!(bagForItem.data.privacy_state === 'on') /* ViewIf43 */ && (<><XbenchcImage /* Image23 */ style={styles.xdw5z} source={dwtools.qiniu(slide.components.Image23.ctx_map.src, slide.components.Image23.ctx_map.fop)}  /></>)}</View></>)}
{!!(!bagForItem.data._isAlive) /* ViewIf39 */ && (<><View /* View93 */   style={styles.xdw5w}></View>
<View /* View94 */   style={styles.xdw5y}><Text /* Text62 */ style={styles.xdw5x} numberOfLines={1}>{computeds.computed3({item: bagForItem}, state)}</Text></View></>)}</View>
{!!(state.displayMode === 'edit') /* ViewIf20 */ && (<><XbenchcView /* View58 */   viewStyle={styles.xdw65} onClick={getEvent('View58:onClick:func7:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}>{!!(state.selectIds.includes(bagForItem.id)) /* ViewIf21 */ && (<><XbenchcImage /* Image6 */ style={styles.xdw62} source={dwtools.getLocalResource('xdw63_lthar08r')}  /></>)}
{!!(!state.selectIds.includes(bagForItem.id)) /* ViewIf22 */ && (<><XbenchcImage /* Image7 */ style={styles.xdw62} source={dwtools.getLocalResource('xdw64_lthar08r')}  /></>)}</XbenchcView></>)}</XbenchcView></Shadow></View></ViewForItem> })}</>)}
{!!(state.deviceItems.length <= 0) /* ViewIf13 */ && (<><View /* View46 */   style={styles.xdw6a}><XbenchcView /* View47 */   viewStyle={styles.xdw5j} onClick={getEvent('View47:onClick:func9:', {eventData: "device_category"}, bagForKeyValue, bagForIndex)}><Text /* Text32 */ style={styles.xdw69} >{slide.components.Text32.ctx_map.text}</Text></XbenchcView></View></>)}</>)}
{!!(!state.siteuser_id) /* ViewIf15 */ && (<><XbenchcView /* View48 */   viewStyle={styles.xdw6c} onClick={getEvent('View48:onClick:func10:', {}, bagForKeyValue, bagForIndex)}><Text /* Text33 */ style={styles.xdw6b} >{slide.components.Text33.ctx_map.text}</Text></XbenchcView></>)}</>)}</View></View></XbenchcScrollView>
{!!(state.displayMode === 'edit' && state.ready) /* ViewIf23 */ && (<>{!!(state.selectIds.length > 0) /* ViewIf24 */ && (<><View /* View59 */   style={styles.xdw6j}>{!!(state.selectIds.length === 1) /* ViewIf25 */ && (<><XbenchcView /* View60 */   viewStyle={styles.xdw6i} onClick={getEvent('View60:onClick:func20:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image8 */ style={styles.xdw6g} source={dwtools.qiniu(slide.components.Image8.ctx_map.src, slide.components.Image8.ctx_map.fop)}  />
<Text /* Text43 */ style={styles.xdw6h} >{slide.components.Text43.ctx_map.text}</Text></XbenchcView></>)}
<XbenchcView /* View61 */   viewStyle={styles.xdw6i} onClick={getEvent('View61:onClick:func21:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image9 */ style={styles.xdw6g} source={dwtools.qiniu(slide.components.Image9.ctx_map.src, slide.components.Image9.ctx_map.fop)}  />
<Text /* Text44 */ style={styles.xdw6h} >{slide.components.Text44.ctx_map.text}</Text></XbenchcView></View></>)}</>)}
<XbenchcModal /* Modal2 */ rootStyle={styles.xdw6w} value={ state.namePop && !!state.currentItem } mask={ true } maskClosable={ true } appendKeyboardHeight={ true } ><View /* View62 */   style={styles.xdw6v}><View /* View68 */   style={styles.xdw6l}><Text /* Text47 */ style={styles.xdw6k} >{slide.components.Text47.ctx_map.text}</Text></View>
<View /* View66 */   style={styles.xdw6p}><View /* View67 */   style={styles.xdw6o}><XbenchcInput /* NativeInput1 */ style={styles.xdw6m} value={state.formData.name} type={slide.components.NativeInput1.ctx_map.type}  onChange={getEvent('NativeInput1:onChange:func24:', {eventData: "name"}, bagForKeyValue, bagForIndex)} />
<XbenchcImage /* Image10 */ style={styles.xdw6n} source={dwtools.qiniu(slide.components.Image10.ctx_map.src, slide.components.Image10.ctx_map.fop)}  /></View></View>
<View /* View63 */   style={styles.xdw6u}><View /* View65 */   style={styles.xdw6s}><XbenchcButton /* NativeButton2 */ viewStyle={styles.xdw6r} onClick={getEvent('NativeButton2:onClick:func22:', {}, bagForKeyValue, bagForIndex)}><Text /* Text46 */ style={styles.xdw6q} >{slide.components.Text46.ctx_map.text}</Text></XbenchcButton></View>
<View /* View64 */   style={styles.xdw6t}><XbenchcButton /* NativeButton1 */ viewStyle={styles.xdw6r} onClick={getEvent('NativeButton1:onClick:func23:', {}, bagForKeyValue, bagForIndex)}><Text /* Text45 */ style={styles.xdw6q} >{slide.components.Text45.ctx_map.text}</Text></XbenchcButton></View></View></View></XbenchcModal>
<Xbenchc168613 /* DwappCloud3 */ backgroundColor={ slide.components.DwappCloud3.ctx_map.color1 } ></Xbenchc168613></View>
{!!(!!state.showGuide && state.ready) /* ViewIf26 */ && (<><View /* View69 */   style={styles.xdw79}><View /* Swiper1 */ style={styles.xdw72}><XbenchcSwiper style={styles.xdw72} paginationStyle={ {marginVertical: pm(6)} } paginationStyleItem={ {width: pm(6), height: pm(6), borderRadius: pm(6), marginHorizontal: pm(3)} } showPagination={ false } paginationDefaultColor={ 'rgba(0, 0, 0, 0.3)' } paginationActiveColor={ '#000000' } autoplay={ false } autoplayDelay={ 3000 / 1000 } autoplayLoop={ false } vertical={ false } index={ 0 }  onChange={getEvent('Swiper1:onChange:func30:', {}, bagForKeyValue, bagForIndex)} data={state.guideList} renderItem={({ item: bagForItem, index: bagForIndex }) => (<>{<View /* View70 */   style={styles.xdw71}><XbenchcImage /* Image11 */ style={styles.xdw6y} source={dwtools.qiniu(bagForItem.mainImage, slide.components.Image11.ctx_map.fop)}  />
<XbenchcImage /* Image12 */ style={styles.xdw6z} source={dwtools.qiniu(bagForItem.textImage, slide.components.Image12.ctx_map.fop)}  />
<Text /* Text48 */ style={styles.xdw70} >{bagForItem.summary}</Text></View>}</>)}></XbenchcSwiper></View>
<View /* View71 */   style={styles.xdw76}><View /* View76 */   style={styles.xdw75}>{!!(state.step === 0) /* ViewIf27 */ && (<><View /* View73 */   style={styles.xdw73}></View></>)}
{!!(state.step !== 0) /* ViewIf28 */ && (<><View /* View77 */   style={styles.xdw74}></View></>)}</View>
<View /* View78 */   style={styles.xdw75}>{!!(state.step === 1) /* ViewIf29 */ && (<><View /* View79 */   style={styles.xdw73}></View></>)}
{!!(state.step !== 1) /* ViewIf30 */ && (<><View /* View80 */   style={styles.xdw74}></View></>)}</View>
<View /* View81 */   style={styles.xdw75}>{!!(state.step === 2) /* ViewIf32 */ && (<><View /* View83 */   style={styles.xdw73}></View></>)}
{!!(state.step !== 2) /* ViewIf31 */ && (<><View /* View82 */   style={styles.xdw74}></View></>)}</View></View>
{!!(state.step === 2) /* ViewIf33 */ && (<><XbenchcView /* View84 */   viewStyle={styles.xdw78} onClick={getEvent('View84:onClick:func29:', {}, bagForKeyValue, bagForIndex)}><Text /* Text49 */ style={styles.xdw77} >{slide.components.Text49.ctx_map.text}</Text></XbenchcView></>)}</View></>)}
<NativeEventProxy eventName={ "XgPush.addOnReceiveNotificationResponseListener" }  onChange={getEvent('NativeEventProxy1:onChange:func12:', {}, bagForKeyValue, bagForIndex)}></NativeEventProxy>
<XbenchcModal /* Modal3 */ rootStyle={styles.xdw7i} value={ state.showInvite } mask={ true } maskClosable={ true } appendKeyboardHeight={ true }  onValueChange={getEvent('Modal3:onValueChange:func32:', {}, bagForKeyValue, bagForIndex)}>{!!(!!state.invite_code) /* ViewIf34 */ && (<><View /* View85 */   style={styles.xdw7h}><View /* View86 */   style={styles.xdw7c}><XbenchcImage /* Image13 */ style={styles.xdw7a} source={dwtools.qiniu(state.invite_code.data.member_uuid__toone.data.avatar, slide.components.Image13.ctx_map.fop)}  />
<Text /* Text53 */ style={styles.xdw7b} numberOfLines={1}>{state.invite_code.data.member_uuid__toone.data.nickname}</Text>
<Text /* Text52 */ style={styles.xdw69} numberOfLines={1}>{slide.components.Text52.ctx_map.text}</Text></View>
<Text /* Text54 */ style={styles.xdw69} numberOfLines={1}>{`设备编码: ${state.invite_code.data.extra_data.device_id}`}</Text>
<View /* View87 */   style={styles.xdw7f}><XbenchcButton /* NativeButton3 */ viewStyle={styles.xdw7e} onClick={getEvent('NativeButton3:onClick:func33:', {}, bagForKeyValue, bagForIndex)}><Text /* Text55 */ style={styles.xdw7d} >{slide.components.Text55.ctx_map.text}</Text></XbenchcButton></View>
<View /* View88 */   style={styles.xdw7g}><XbenchcButton /* NativeButton4 */ viewStyle={styles.xdw7e} onClick={getEvent('NativeButton4:onClick:func32:', {}, bagForKeyValue, bagForIndex)}><Text /* Text56 */ style={styles.xdw7d} >{slide.components.Text56.ctx_map.text}</Text></XbenchcButton></View></View></>)}</XbenchcModal>
<Xbenchc275104 /* DwappCloud2 */ valueStyle={ slide.components.DwappCloud2.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud2.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud2.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud2:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104>
    </ErrorBoundary>
  )
}
