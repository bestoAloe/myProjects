
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import Xbenchc170329 from '../components/Xbenchc170329'
import XbenchcButton from '../../xbench/xbenchc/components/XbenchcButton'
import Xbenchc168613 from '../components/Xbenchc168613'
import Xbenchc275104 from '../components/Xbenchc275104'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

let action96lock = false
let action216lock = null
let action218lock = null
let modalInstance = (null)
const action224 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action75 = state.ready = (false)
  const action87 = state.formData = (null)
  const action116 = state.month = (undefined)
  const action117 = state.date = (undefined)
  const action128 = state.year = (undefined)
  const action197 = state.showMonthPicker = (true)
  const action198 = state.showDatePicker = (true)
  /* action138: 年区间 */
  const action124 = state.startYear = (undefined)
  const action115 = state.endYear = (undefined)
  /* action139: 月区间 */
  const action141 = state.startMonth = (1)
  const action140 = state.endMonth = (undefined)
  /* action142: 日期区间 */
  const action144 = state.startDate = (1)
  const action143 = state.endDate = (undefined)
  return state
}

const action3 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action7 = await store.dispatch("func1", {})
  const action76 = store.commit('setState', {["state.ready"]: true})
}

const action4 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action77 = await store.dispatch("func7", {})
  const action123 = await store.dispatch("func15", {})
}

const action72 = actions['func7'] = async function (store, event) {
  const state = store.state
  const action78 = await (async (store, event) => {
const key = "edit_petinfo/formData"
let res = null;
if(dw.platform === 'rnapp'){
  const AsyncStorage = dw.getNativePackage('AsyncStorage')
  res = await AsyncStorage.getItem(key)
}
else{
  res = window.localStorage.getItem(key)
}

if (res && res !== "undefined") return JSON.parse(res)

return null
})(store, event)
  const action235 = console.log('[func7#action235] 打印(action78)的返回值', action78)
  if (!action78) {
    let message = ("操作异常,返回上一页")
    const action229 = message
    const action230 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(message)
}
else{
  return null
}
})(store, event)
    const action83 = await dw.navigateBack({delta: 1})
  } else {
    const action88 = console.log('[func7#action88] 打印action78', action78)
    const action86 = store.commit('setState', {["state.formData"]: action78})
  }
}

const action90 = actions['func9'] = async function (store, event) {
  const state = store.state
  const action91 = await (async (store, event) => {
const key = "edit_petinfo/formData"
const jsonValue = JSON.stringify(state.formData)
if(dw.platform === 'rnapp'){
  const AsyncStorage = dw.getNativePackage('AsyncStorage')
  await AsyncStorage.setItem(key, jsonValue)
}
else{
  window.localStorage.setItem(key, jsonValue)
}
})(store, event)
}

const action95 = actions['func11'] = async function (store, event) {
  const state = store.state
  const action219 = store.commit('setState', {["state.formData.birthday"]: new Date(state.year, state.month-1, state.date), ["state.formData.birthday_display"]: state.year + '.' + state.month.toString().padStart(2,0) + '.' + state.date.toString().padStart(2,0)})
  const action96 = await (async () => {
  
      if (action96lock) return true
      action96lock = true
      try {
    if (state.formData && !state.formData.id) {
      const action101 = await store.dispatch("func9", {})
    } else if (state.formData && state.formData.id) {
      /* action103: 更新宠物数据 */
      const action104 = await dw.app.run("pet.update", {"id": state.formData.id, "formData": state.formData})
    }
    let message = ("保存成功")
    const action232 = message
    const action233 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    const action223 = await dw.navigateBack({delta: 1})
  
      } catch (e) {
        throw e
      } finally {
        action96lock = false
      }
      
  })()
}

const action118 = actions['func15'] = function (store, event) {
  const state = store.state
  /* action145: 如果存在缓存数据 */
  if (state.formData && state.formData.birthday) {
    /* action154: 如果年龄超过30按30年前当日第一天计算 */
    const action155 = ((store, event) => {
let res = {}
let birthday = new Date(state.formData.birthday)
const now = new Date()
const minDate = new Date(new Date().getFullYear()-30, 1, 0)

// 如果生日大于现在, 则直接按照现在算
if (birthday >= now) {
  birthday = new Date()
}

// 如果小于30年前,按30年前算
if(birthday < minDate) {
  birthday =  minDate
}

// 获取生日年月日
res.year = birthday.getFullYear()
res.month = birthday.getMonth()+1
res.date = birthday.getDate()

// 获取年选项区间
res.startYear = minDate.getFullYear()
res.endYear = now.getFullYear()


// 获取月份选项; 判断生日是否在今年, 如果是则最大月份数不能超过实际月数
if (birthday.getFullYear() === now.getFullYear()) {
  res.endMonth = now.getMonth() + 1
} else {
  res.endMonth = 12
}

// 获取日期选项
res.endDate = new Date(birthday.getFullYear(), birthday.getMonth(), 0).getDate()

return res
})(store, event)
    const action157 = store.commit('setState', {["state.year"]: action155.year, ["state.month"]: action155.month, ["state.date"]: action155.date, ["state.startYear"]: action155.startYear, ["state.endYear"]: action155.endYear, ["state.endMonth"]: action155.endMonth, ["state.endDate"]: action155.endDate})
  } else {
    /* action150: 按今天计算 */
    const action119 = ((store, event) => {
const now = new Date()

return {
  year:now.getFullYear(),
  month:now.getMonth(),
  date:now.getDate(),
  endDate:new Date(now.getFullYear(), now.getMonth()+1, 0).getDate()
}
})(store, event)
    const action127 = store.commit('setState', {["state.year"]: action119.year, ["state.month"]: action119.month + 1, ["state.date"]: action119.date, ["state.startYear"]: action119.year - 30, ["state.endYear"]: action119.year, ["state.endMonth"]: action119.month + 1, ["state.endDate"]: action119.endDate})
  }
}

const action109 = actions['func12'] = async function (store, event) {
  const state = store.state
  const action112 = console.log('[func12#action112] 打印', event)
  /* action176: 如果等于今年则变更月份选项, 如果月份为当前月份, 则变更日期选项 */
  
      const key = await new Promise(resolve => {
        clearTimeout(action216lock)
        action216lock = setTimeout(async () => {
          resolve(await (async () => {
    let now = (new Date())
    const action178 = now
    if (now.getFullYear() === event.data) {
      const action181 = store.commit('setState', {["state.endMonth"]: now.getMonth()+1, ["state.month"]: Math.min(state.month, now.getMonth()+1)})
      if ((now.getMonth()+1) === (state.month)) {
        const action201 = store.commit('setState', {["state.showDatePicker"]: false, ["state.endDate"]: now.getDate(), ["state.date"]: Math.min(state.date, now.getDate())})
        await new Promise((resolve, reject) => setTimeout(resolve, 1))
        const action202 = store.commit('setState', {["state.showDatePicker"]: true})
      }
    } else {
      const action222 = console.log('[func12#action222] 打印!!!!!!!!!!!!', event.data)
      const action212 = store.commit('setState', {["state.endMonth"]: 12})
    }
  
          })())
        }, 250)
      })
  const action129 = store.commit('setState', {["state.year"]: event.data})
}

const action110 = actions['func13'] = async function (store, event) {
  const state = store.state
  const action113 = console.log('[func13#action113] 打印', event)
  /* action187: 重新计算日期选项 */
  
      const key = await new Promise(resolve => {
        clearTimeout(action218lock)
        action218lock = setTimeout(async () => {
          resolve(await (async () => {
    let now = (new Date())
    const action188 = now
    if ((now.getFullYear() === state.year) && now.getMonth()+1 === event.data) {
      const action191 = store.commit('setState', {["state.endDate"]: now.getDate(), ["state.date"]: Math.min(state.date,now.getDate())})
    } else {
      let endDate = (new Date(now.getFullYear(), Math.max(event.data,1),0).getDate())
      const action196 = endDate
      const action221 = console.log('[func13#action221] 打印(endDate)的返回值', endDate)
      if (endDate !== state.endDate) {
        const action194 = store.commit('setState', {["state.endDate"]: endDate, ["state.date"]: Math.min(endDate, state.date)})
      }
    }
  
          })())
        }, 250)
      })
  const action130 = store.commit('setState', {["state.month"]: event.data})
}

const action111 = actions['func14'] = function (store, event) {
  const state = store.state
  const action114 = console.log('[func14#action114] 打印', event)
  const action131 = store.commit('setState', {["state.date"]: event.data})
}

const action225 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action226 = modalInstance = (event.data)
  const action227 = console.log('[getModalInstance#action227] 打印(modalInstance)', modalInstance)
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
var action224 = modalInstance;
var action132 = actions['computed1'] = function (event, state) {
  var type = event.data;
  var action164 = type;
  if (type === "year") {
    return Math.floor((new Date() - new Date(state.year, state.month - 1, state.date)) / (365 * 1000 * 60 * 60 * 24));
  } else {
    var action174 = function (event) {
      return Math.ceil((new Date() - new Date(state.year, state.month - 1, state.date)) / (1000 * 60 * 60 * 24) % 365 / 30);
    }(event);
    return action174;
  }
};
// COMPUTED_ACTION_META:computed1 {"deps":["year","month","date"]}

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdw24r: {
  color: "#000000",
  fontSize: pm(14),
  fontWeight: "400",
  lineHeight: pm(19),
},
xdw24s: {
  color: "#000000",
  fontSize: pm(14),
  fontWeight: "bold",
  lineHeight: pm(19),
  marginRight: pm(3),
},
xdw24t: {
  color: "#aaaaaa",
  fontSize: pm(9),
  lineHeight: pm(16),
},
xdw24u: {
  alignItems: "flex-end",
  flexDirection: "row",
},
xdw24v: {
  paddingLeft: pm(30),
  marginBottom: pm(9),
  paddingRight: pm(30),
  flexDirection: "row",
  justifyContent: "space-between",
},
xdw24w: {
  color: "#000000",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(19),
  marginRight: pm(3),
},
xdw24x: {
  alignItems: "flex-end",
  marginLeft: pm(9),
  flexDirection: "row",
},
xdw24y: {
  flexDirection: "row",
  justifyContent: "center",
},
xdw24z: {
  marginTop: pm(18),
  flexDirection: "column",
},
xdw250: {
  marginTop: pm(10),
  flexDirection: "column",
},
xdw251: {
  flexGrow: 1,
  flexShrink: 1,
  flexDirection: "column",
},
xdw252: {
  color: "#999999",
  fontSize: pm(12),
  lineHeight: pm(23),
},
xdw253: {
  color: "#000000",
  fontSize: pm(20),
  fontWeight: "500",
  lineHeight: pm(28),
  marginLeft: pm(3),
  marginRight: pm(3),
},
xdw254: {
  alignItems: "flex-end",
  flexDirection: "row",
  justifyContent: "center",
},
xdw255: {
  fontSize: pm(14),
  fontWeight: "600",
  lineHeight: pm(19),
},
xdw256: {
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
xdw257: {
  width: pm(300),
  height: pm(38),
  marginTop: pm(26),
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
xdw258: {
  marginBottom: pm(32),
  flexDirection: "column",
},
xdw259: {
  flex: 1,
  flexDirection: "column",
}
});
const slide = {"type":"170354","key":"c1703541","slug":null,"randomid":"id_737195b8d0dbced4663d8b86","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":"年"}},"Text2":{"ctx_map":{"text":"2022"}},"Text3":{"ctx_map":{"text":"年"}},"Text4":{"ctx_map":{"text":"年"}},"Text5":{"ctx_map":{"text":"2022"}},"Text6":{"ctx_map":{"text":"月"}},"Text7":{"ctx_map":{"text":"2022"}},"Text8":{"ctx_map":{"text":"月"}},"Text9":{"ctx_map":{"text":"2022"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Text10":{"ctx_map":{"text":"月"}},"Text11":{"ctx_map":{"text":"日"}},"Text12":{"ctx_map":{"text":"2022"}},"Text13":{"ctx_map":{"text":"日"}},"Text14":{"ctx_map":{"text":"2022"}},"Text15":{"ctx_map":{"text":"日"}},"Text16":{"ctx_map":{"text":"您的宠物年龄是"}},"Text17":{"ctx_map":{"text":"2"}},"Text18":{"ctx_map":{"text":"岁"}},"Text19":{"ctx_map":{"text":"2"}},"Text20":{"ctx_map":{"text":"个月"}},"Text21":{"ctx_map":{"text":"保存"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"View20":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"mode":"default","value":true}},"DwappCloud1":{"ctx_map":{"bool1":false,"image1":"u/dev070/2023/03/04/ZCgtPghLKqdRwwbY92TUNb/新建项目2.png","select1":"1","select2":"top","numberb2":2,"numberb3":30,"numberb4":160,"numberb6":1,"numberb7":2000,"numberb8":100}},"DwappCloud2":{"ctx_map":{"bool1":true,"image1":"u/dev070/2023/03/04/ZCgtPghLKqdRwwbY92TUNb/新建项目2.png","select1":"1","select2":"top","numberb2":2,"numberb3":30,"numberb4":160,"numberb6":1,"numberb7":1,"numberb8":12}},"DwappCloud3":{"ctx_map":{"bool1":true,"image1":"u/dev070/2023/03/04/ZCgtPghLKqdRwwbY92TUNb/新建项目2.png","select1":"1","select2":"top","numberb2":2,"numberb3":30,"numberb4":160,"numberb6":1,"numberb7":1,"numberb8":31}},"DwappCloud4":{"ctx_map":{"color1":""}},"DwappCloud5":{"ctx_map":{"bool1":true,"bool2":false,"text1":"生日","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud7":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"NativeButton1":{"ctx_map":{"type":"button"}}}};
slide.components.DwappCloud5.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  flexDirection: "column",
};
slide.components.DwappCloud7.ctx_map.valueStyle = {
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
slide.components.DwappCloud7.ctx_map.containerStyle = {
  marginBottom: pm(18),
  flexDirection: "column",
};
slide.components.DwappCloud7.ctx_map.valueInputStyle = {
  color: "#333333",
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-edit_birthday';

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
      <Xbenchc176286 /* DwappCloud5 */ isCuzBtn={ slide.components.DwappCloud5.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud5.ctx_map.bool2 } eventData={ slide.components.DwappCloud5.ctx_map.prop1 } eventData2={ slide.components.DwappCloud5.ctx_map.prop2 } title={ slide.components.DwappCloud5.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud5.ctx_map.text2 } confirmText={ slide.components.DwappCloud5.ctx_map.text3 } cancelText={ slide.components.DwappCloud5.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud5.ctx_map.color1 } confirmColor={ slide.components.DwappCloud5.ctx_map.color2 } cancelColor={ slide.components.DwappCloud5.ctx_map.color3 } backIcon={ slide.components.DwappCloud5.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud5.ctx_map.image2 } titleStyle={ slide.components.DwappCloud5.ctx_map.style1 } screenType={ slide.components.DwappCloud5.ctx_map.select1 } ></Xbenchc176286>
{!!(state.ready) /* ViewIf1 */ && (<><View /* View20 */   style={styles.xdw259}><View /* View17 */   style={styles.xdw251}><View /* View1 */   style={styles.xdw24z}><View /* View2 */   style={styles.xdw24v}><Text /* Text1 */ style={styles.xdw24r} >{slide.components.Text1.ctx_map.text}</Text>
<View /* View4 */   style={styles.xdw24u}><Text /* Text2 */ style={styles.xdw24s} >{state.year}</Text>
<Text /* Text3 */ style={styles.xdw24t} >{slide.components.Text3.ctx_map.text}</Text></View></View>
{!!(!!state.year) /* ViewIf2 */ && (<><Xbenchc170329 /* DwappCloud1 */ isDateValue={ slide.components.DwappCloud1.ctx_map.bool1 } eventData={ slide.components.DwappCloud1.ctx_map.prop1 } eventData2={ slide.components.DwappCloud1.ctx_map.prop2 } cursorImage={ slide.components.DwappCloud1.ctx_map.image1 } converts={ slide.components.DwappCloud1.ctx_map.select1 } direction={ slide.components.DwappCloud1.ctx_map.select2 } labelInterval={ slide.components.DwappCloud1.ctx_map.numberb2 } marginRight={ slide.components.DwappCloud1.ctx_map.numberb3 } padding={ slide.components.DwappCloud1.ctx_map.numberb4 } readValue={ state.year } startValue={ state.startYear } endValue={ state.endYear }  scrollEnd={getEvent('DwappCloud1:scrollEnd:func12:', {}, bagForKeyValue, bagForIndex)}></Xbenchc170329></>)}
<View /* View3 */   style={styles.xdw24y}><View /* View5 */   style={styles.xdw24x}><Text /* Text5 */ style={styles.xdw24w} >{state.year}</Text>
<Text /* Text4 */ style={styles.xdw24t} >{slide.components.Text4.ctx_map.text}</Text></View></View></View>
<View /* View6 */   style={styles.xdw250}><View /* View9 */   style={styles.xdw24v}><Text /* Text10 */ style={styles.xdw24r} >{slide.components.Text10.ctx_map.text}</Text>
<View /* View10 */   style={styles.xdw24u}><Text /* Text9 */ style={styles.xdw24s} >{state.month}</Text>
<Text /* Text8 */ style={styles.xdw24t} >{slide.components.Text8.ctx_map.text}</Text></View></View>
<Xbenchc170329 /* DwappCloud2 */ isDateValue={ slide.components.DwappCloud2.ctx_map.bool1 } eventData={ slide.components.DwappCloud2.ctx_map.prop1 } eventData2={ slide.components.DwappCloud2.ctx_map.prop2 } cursorImage={ slide.components.DwappCloud2.ctx_map.image1 } converts={ slide.components.DwappCloud2.ctx_map.select1 } direction={ slide.components.DwappCloud2.ctx_map.select2 } labelInterval={ slide.components.DwappCloud2.ctx_map.numberb2 } marginRight={ slide.components.DwappCloud2.ctx_map.numberb3 } padding={ slide.components.DwappCloud2.ctx_map.numberb4 } readValue={ state.month } startValue={ state.startMonth } endValue={ state.endMonth }  scrollEnd={getEvent('DwappCloud2:scrollEnd:func13:', {}, bagForKeyValue, bagForIndex)}></Xbenchc170329>
<View /* View7 */   style={styles.xdw24y}><View /* View8 */   style={styles.xdw24x}><Text /* Text7 */ style={styles.xdw24w} >{state.month}</Text>
<Text /* Text6 */ style={styles.xdw24t} >{slide.components.Text6.ctx_map.text}</Text></View></View></View>
<View /* View11 */   style={styles.xdw250}><View /* View14 */   style={styles.xdw24v}><Text /* Text15 */ style={styles.xdw24r} >{slide.components.Text15.ctx_map.text}</Text>
<View /* View15 */   style={styles.xdw24u}><Text /* Text14 */ style={styles.xdw24s} >{state.date}</Text>
<Text /* Text13 */ style={styles.xdw24t} >{slide.components.Text13.ctx_map.text}</Text></View></View>
<Xbenchc170329 /* DwappCloud3 */ isDateValue={ slide.components.DwappCloud3.ctx_map.bool1 } eventData={ slide.components.DwappCloud3.ctx_map.prop1 } eventData2={ slide.components.DwappCloud3.ctx_map.prop2 } cursorImage={ slide.components.DwappCloud3.ctx_map.image1 } converts={ slide.components.DwappCloud3.ctx_map.select1 } direction={ slide.components.DwappCloud3.ctx_map.select2 } labelInterval={ slide.components.DwappCloud3.ctx_map.numberb2 } marginRight={ slide.components.DwappCloud3.ctx_map.numberb3 } padding={ slide.components.DwappCloud3.ctx_map.numberb4 } readValue={ state.date } startValue={ state.startDate } endValue={ state.endDate }  scrollEnd={getEvent('DwappCloud3:scrollEnd:func14:', {}, bagForKeyValue, bagForIndex)}></Xbenchc170329>
<View /* View12 */   style={styles.xdw24y}><View /* View13 */   style={styles.xdw24x}><Text /* Text12 */ style={styles.xdw24w} >{state.date}</Text>
<Text /* Text11 */ style={styles.xdw24t} >{slide.components.Text11.ctx_map.text}</Text></View></View></View></View>
<View /* View19 */   style={styles.xdw258}><View /* View16 */   style={styles.xdw254}><Text /* Text16 */ style={styles.xdw252} >{slide.components.Text16.ctx_map.text}</Text>
<Text /* Text17 */ style={styles.xdw253} >{computeds.computed1({data: "year"}, state)}</Text>
<Text /* Text18 */ style={styles.xdw252} >{slide.components.Text18.ctx_map.text}</Text>
<Text /* Text19 */ style={styles.xdw253} >{computeds.computed1({data: "month"}, state)}</Text>
<Text /* Text20 */ style={styles.xdw252} >{slide.components.Text20.ctx_map.text}</Text></View>
<View /* View18 */   style={[styles.xdw257, ({
  "opacity": state.formData.name ? 1 : 0.7
})]}><XbenchcButton /* NativeButton1 */ viewStyle={styles.xdw256} onClick={getEvent('NativeButton1:onClick:func11:', {}, bagForKeyValue, bagForIndex)}><Text /* Text21 */ style={styles.xdw255} >{slide.components.Text21.ctx_map.text}</Text></XbenchcButton></View>
<Xbenchc168613 /* DwappCloud4 */ backgroundColor={ slide.components.DwappCloud4.ctx_map.color1 } ></Xbenchc168613></View></View></>)}
<Xbenchc275104 /* DwappCloud7 */ valueStyle={ slide.components.DwappCloud7.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud7.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud7.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud7:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104>
    </ErrorBoundary>
  )
}
