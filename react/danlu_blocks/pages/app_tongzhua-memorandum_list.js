
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcButton from '../../xbench/xbenchc/components/XbenchcButton'
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

let action52lock = false
let action64lock = false
let modalInstance = (null)
const action90 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action2 = state.items = ([])
  const action6 = state.siteuser_id = (null)
  const action16 = state.query = ({})
  const action17 = state.query.limit = (10)
  const action18 = state.query.offset = (0)
  const action19 = state.filters = ({})
  const action32 = state.reachBottom = (false)
  const action33 = state.ready = (false)
  return state
}

const action3 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action7 = await store.dispatch("func1", {})
}

const action4 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action8 = await dw.app.run("member.get_siteuser_id", {})
  
        if ((action8.status) === ("error")) {
          const action9message = (action8.message || "操作错误！")
          const action9title = ("提示")
          action9message && dw.alert(action9title, action9message)
          return {}
        }
        
  const action10 = store.commit('setState', {["state.siteuser_id"]: action8})
  if (action8) {
    const action14 = await store.dispatch("func2", {})
  }
  const action34 = store.commit('setState', {["state.ready"]: true})
}

const action80 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action81 = modalInstance = (event.data)
  const action82 = console.log('[getModalInstance#action82] 打印(modalInstance)', modalInstance)
}

const action5 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action15 = await dw.app.run("memorandum.user_list", {"limit": state.query.limit, "offset": state.query.offset, "filters": {/**/  ...state.filters,/**/  is_active: true/**/}, "order_by": ["data__start_date"]})
  if (state.query.offset === 0) {
    const action23 = store.commit('setState', {["state.items"]: action15.objects})
  } else {
    const action26 = store.commit('setState', {["state.items__uconcat"]: {field: "id", list: action15.objects}})
  }
  if (state.query.limit > action15.objects.length) {
    const action30 = store.commit('setState', {["state.reachBottom"]: true})
  }
}

const action39 = actions['func3'] = function (store, event) {
  const state = store.state
  const action40 = dw.app.goToPappUrl("memorandum_type", {}, {redirectTo: false})
}

const action49 = actions['func4'] = async function (store, event) {
  const state = store.state
  let msg = ("确认删除该条备忘录吗？")
  const action75 = msg
  const action76 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(msg)
}
else{
  return null
}
})(store, event)
  if (!action76) {
    return event
  }
  const action52 = await (async () => {
  
      if (action52lock) return true
      action52lock = true
      try {
    const action53 = await dw.app.run("memorandum.delete", {"note_uuid": event.context.eventData.data.note_uuid})
    
        if ((action53.status) === ("error")) {
          const action54message = (action53.message || "操作错误！")
          const action54title = ("提示")
          action54message && dw.alert(action54title, action54message)
          return {}
        }
        
    let message = ("删除成功")
    const action92 = message
    const action93 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    const action56 = await store.dispatch("func2", {})
  
      } catch (e) {
        throw e
      } finally {
        action52lock = false
      }
      
  })()
}

const action63 = actions['func5'] = async function (store, event) {
  const state = store.state
  const action64 = await (async () => {
  
      if (action64lock) return true
      action64lock = true
      try {
    let msg = ("确认标记为已完成？")
    const action85 = msg
    const action86 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(msg)
}
else{
  return null
}
})(store, event)
    if (!action86) {
      return event
    }
    const action67 = await dw.app.run("memorandum.user_accomplish", {"uuid": event.context.eventData.uuid})
    
        if ((action67.status) === ("error")) {
          const action68message = (action67.message || "操作错误！")
          const action68title = ("提示")
          action68message && dw.alert(action68title, action68message)
          return {}
        }
        
    let message = ("更新成功")
    const action95 = message
    const action96 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    const action70 = await store.dispatch("func2", {})
  
      } catch (e) {
        throw e
      } finally {
        action64lock = false
      }
      
  })()
}

const action71 = actions['func6'] = async function (store, event) {
  const state = store.state
  const action72 = await dw.navigateBack({delta: 1})
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
var action90 = modalInstance;
var action35 = actions['computed1'] = function (event, state) {
  var datetime = event.data;
  var action36 = datetime;
  var action37 = function (event) {
    var year = Number(datetime.substring(0, 4));
    var _year = new Date().getFullYear();

    return year > _year;
  }(event);
  return action37;
};
// COMPUTED_ACTION_META:computed1 {"deps":[]}

var action41 = actions['computed2'] = function (event, state) {
  var action57 = console.log('[computed2#action57] 打印(item)的返回值', event);
  //MACRO:DEBUG window.vconsole.log('log:workflow', {func: 'computed2', action: 'action57', label: `打印(item)的返回值`, valueVar: "event", value: [event]})
  var item = event.item;
  var action42 = item;
  if (item.data.category_uuid__toone && item.data.pet_uuids__manytomany.length > 0) {
    return item.data.category_uuid__toone.data.name + ':' + item.data.pet_uuids__manytomany.map(function (x) {
      return x ? x.data.name : "";
    }).join(' ');
  } else {
    return "";
  }
};
// COMPUTED_ACTION_META:computed2 {"deps":[]}

var action58 = actions['computed3'] = function (event, state) {
  var action59 = console.log('[computed3#action59] 打印(item)的返回值', event);
  //MACRO:DEBUG window.vconsole.log('log:workflow', {func: 'computed3', action: 'action59', label: `打印(item)的返回值`, valueVar: "event", value: [event]})
  var item = event.item;
  var action60 = item;
  var action61 = function (event) {
    var start_date = new Date(item.data.start_time);
    var now = new Date();
    return Math.ceil((start_date - now) / (1000 * 60 * 60 * 24));
  }(event);
  return action61;
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
xdw2cs: {
  width: pm(31),
  height: pm(31),
},
xdw2ct: {
  flexDirection: "column",
},
xdw2cu: {
  width: pm(26),
  height: pm(26),
  marginRight: pm(9),
},
xdw2cv: {
  color: "#181818",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw2cw: {
  paddingLeft: pm(9),
  paddingRight: pm(9),
  backgroundColor: "#f2f2f2",
  borderTopLeftRadius: pm(9),
  borderTopRightRadius: pm(9),
  borderBottomLeftRadius: pm(9),
  borderBottomRightRadius: pm(9),
},
xdw2cx: {
  fontSize: pm(12),
  textAlign: "center",
  fontWeight: "400",
},
xdw2cy: {
  width: pm(67),
  height: pm(27),
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
xdw2cz: {
  width: pm(67),
  height: pm(27),
  alignItems: "center",
  marginLeft: "auto",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#FFD355",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw2d0: {
  fontSize: pm(12),
  fontWeight: "400",
},
xdw2d1: {
  width: pm(67),
  height: pm(27),
  alignItems: "center",
  marginLeft: "auto",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#CCCCCC",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw2d2: {
  flexWrap: "nowrap",
  alignItems: "center",
  flexDirection: "row",
},
xdw2d3: {
  color: "#181818",
  fontSize: pm(20),
  fontWeight: "500",
  lineHeight: pm(28),
  marginRight: pm(3),
},
xdw2d4: {
  color: "#666666",
  fontSize: pm(10),
  lineHeight: pm(24),
},
xdw2d5: {
  alignItems: "flex-end",
  marginRight: pm(9),
  flexDirection: "row",
},
xdw2d6: {
  alignItems: "flex-end",
  marginRight: pm(3),
  flexDirection: "row",
},
xdw2d7: {
  color: "#999999",
  fontSize: pm(10),
  lineHeight: pm(15),
},
xdw2d8: {
  color: "#000000",
  fontSize: pm(10),
  lineHeight: pm(15),
},
xdw2d9: {
  marginBottom: pm(4),
  flexDirection: "row",
},
xdw2da: {
  flexWrap: "nowrap",
  marginTop: pm(13),
  alignItems: "flex-end",
  flexDirection: "row",
  justifyContent: "flex-start",
},
xdw2db: {
  color: "#9e9e9e",
  width: "100%",
  fontSize: pm(11),
  textAlign: "center",
  fontWeight: "500",
  lineHeight: pm(16),
},
xdw2dc: {
  width: pm(50),
  height: pm(18),
  marginRight: pm(3),
  paddingLeft: pm(9),
  paddingRight: pm(9),
  backgroundColor: "#f2f2f2",
  borderTopLeftRadius: pm(9),
  borderTopRightRadius: pm(9),
  borderBottomLeftRadius: pm(9),
  borderBottomRightRadius: pm(9),
},
xdw2dd: {
  marginTop: pm(13),
  flexDirection: "row",
},
xdw2de: {
  paddingTop: pm(13),
  paddingLeft: pm(17),
  borderBottomWidth: pm(1),
  borderBottomColor: "#eeeeee",
  paddingRight: pm(17),
  flexDirection: "column",
  paddingBottom: pm(13),
  backgroundColor: "#ffffff",
},
xdw2df: {
  flex: 1,
  borderTopWidth: pm(1),
  borderTopColor: "#eeeeee",
  backgroundColor: "#f8f8f8",
},
xdw2dg: {
  color: "#aaaaaa",
  fontSize: pm(12),
  lineHeight: pm(17),
},
xdw2dh: {
  color: "#FFD355",
  fontSize: pm(12),
  lineHeight: pm(17),
  marginLeft: pm(2),
  marginRight: pm(2),
  borderBottomWidth: pm(1),
  borderBottomColor: "#FFD355",
},
xdw2di: {
  width: "100%",
  height: pm(20),
  flexDirection: "row",
  justifyContent: "center",
},
xdw2dj: {
  flexGrow: 1,
  alignItems: "center",
  flexShrink: 1,
  flexDirection: "column",
  justifyContent: "center",
},
xdw2dk: {
  flex: 1,
  flexDirection: "column",
  backgroundColor: "#f8f8f8",
}
});
const slide = {"type":"171206","key":"c1712061","slug":null,"randomid":"id_e0dd2a97e0195a263c440981","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,72,72","src":"u/dev070/2023/03/01/v4Lhp9kJDMM63p6fXVnizS/编组5备份2x.png"}},"Image2":{"ctx_map":{"fop":"e,300,300","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Text14":{"ctx_map":{"text":"快去"}},"Text15":{"ctx_map":{"text":"添加"}},"Text16":{"ctx_map":{"text":"提醒吧"}},"Text17":{"ctx_map":{"text":"这是一个文本组件"}},"Text18":{"ctx_map":{"text":"完成"}},"Text19":{"ctx_map":{"text":"这是一个文本组件"}},"Text20":{"ctx_map":{"text":"年"}},"Text25":{"ctx_map":{"text":"月"}},"Text26":{"ctx_map":{"text":"这是一个文本组件"}},"Text27":{"ctx_map":{"text":"日"}},"Text28":{"ctx_map":{"text":"这是一个文本组件"}},"Text29":{"ctx_map":{"text":"剩余"}},"Text30":{"ctx_map":{"text":"1"}},"Text32":{"ctx_map":{"text":"天"}},"Text33":{"ctx_map":{"text":"这是一个文本组件"}},"Text34":{"ctx_map":{"text":"备注"}},"Text35":{"ctx_map":{"text":"已完成"}},"Text36":{"ctx_map":{"text":"这是一个文本组件","numberOfLines":1}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"View20":{"ctx_map":{}},"View21":{"ctx_map":{}},"View22":{"ctx_map":{}},"View23":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewIf5":{"ctx_map":{"value":true}},"ViewIf6":{"ctx_map":{"value":true}},"ViewIf7":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"DwappCloud2":{"ctx_map":{"bool1":true,"bool2":false,"text1":"备忘录","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud3":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"ScrollView3":{"ctx_map":{"type":"list","scrollY":true,"showScrollbar":true}},"NativeButton1":{"ctx_map":{"type":"button"}},"NativeButton2":{"ctx_map":{"type":"button"}}}};
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
const pageGroupSlug = 'app_tongzhua-memorandum_list';

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
      <Xbenchc176286 /* DwappCloud2 */ isCuzBtn={ slide.components.DwappCloud2.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud2.ctx_map.bool2 } eventData={ slide.components.DwappCloud2.ctx_map.prop1 } eventData2={ slide.components.DwappCloud2.ctx_map.prop2 } title={ slide.components.DwappCloud2.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud2.ctx_map.text2 } confirmText={ slide.components.DwappCloud2.ctx_map.text3 } cancelText={ slide.components.DwappCloud2.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud2.ctx_map.color1 } confirmColor={ slide.components.DwappCloud2.ctx_map.color2 } cancelColor={ slide.components.DwappCloud2.ctx_map.color3 } backIcon={ slide.components.DwappCloud2.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud2.ctx_map.image2 } titleStyle={ slide.components.DwappCloud2.ctx_map.style1 } screenType={ slide.components.DwappCloud2.ctx_map.select1 } ><XbenchcView /* View4 */   viewStyle={styles.xdw2ct} onClick={getEvent('View4:onClick:func3:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image1 */ style={styles.xdw2cs} source={dwtools.qiniu(slide.components.Image1.ctx_map.src, slide.components.Image1.ctx_map.fop)}  /></XbenchcView></Xbenchc176286>
{!!(state.ready) /* ViewIf4 */ && (<><View /* View21 */   style={styles.xdw2dk}>{!!(state.items.length > 0) /* ViewIf1 */ && (<><XbenchcScrollView /* ScrollView3 */ style={styles.xdw2df} scrollY={ true } showScrollbar={ true } >{(state.items).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><XbenchcView /* View7 */   viewStyle={styles.xdw2de} onLongPress={getEvent('View7:onLongPress:func4:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><View /* View8 */   style={styles.xdw2d2}><XbenchcImage /* Image2 */ style={styles.xdw2cu} source={dwtools.qiniu(bagForItem.data.category_uuid__toone.data.image, slide.components.Image2.ctx_map.fop)}  />
<View /* View9 */   style={styles.xdw2cw}><Text /* Text17 */ style={styles.xdw2cv} >{computeds.computed2({item: bagForItem}, state)}</Text></View>
{!!(!bagForItem.data.is_finish) /* ViewIf6 */ && (<><View /* View10 */   style={styles.xdw2cz}><XbenchcButton /* NativeButton1 */ viewStyle={styles.xdw2cy} onClick={getEvent('NativeButton1:onClick:func5:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><Text /* Text18 */ style={styles.xdw2cx} >{slide.components.Text18.ctx_map.text}</Text></XbenchcButton></View></>)}
{!!(bagForItem.data.is_finish) /* ViewIf7 */ && (<><View /* View23 */   style={styles.xdw2d1}><XbenchcButton /* NativeButton2 */ viewStyle={styles.xdw2cy}><Text /* Text35 */ style={styles.xdw2d0} >{slide.components.Text35.ctx_map.text}</Text></XbenchcButton></View></>)}</View>
<View /* View11 */   style={styles.xdw2da}>{!!(computeds.computed1({data: bagForItem.data.start_time}, state)) /* ViewIf5 */ && (<><View /* View15 */   style={styles.xdw2d5}><Text /* Text19 */ style={styles.xdw2d3} >{bagForItem.data.start_time.substring(0,4)}</Text>
<Text /* Text20 */ style={styles.xdw2d4} >{slide.components.Text20.ctx_map.text}</Text></View></>)}
<View /* View16 */   style={styles.xdw2d6}><Text /* Text26 */ style={styles.xdw2d3} >{parseFloat(bagForItem.data.start_time.substring(5,7))}</Text>
<Text /* Text25 */ style={styles.xdw2d4} >{slide.components.Text25.ctx_map.text}</Text></View>
<View /* View17 */   style={styles.xdw2d5}><Text /* Text28 */ style={styles.xdw2d3} >{parseFloat(bagForItem.data.start_time.substring(8,10))}</Text>
<Text /* Text27 */ style={styles.xdw2d4} >{slide.components.Text27.ctx_map.text}</Text></View>
<View /* View12 */   style={styles.xdw2d9}><Text /* Text29 */ style={styles.xdw2d7} >{slide.components.Text29.ctx_map.text}</Text>
<Text /* Text30 */ style={styles.xdw2d8} >{computeds.computed3({item: bagForItem}, state)}</Text>
<Text /* Text32 */ style={styles.xdw2d7} >{slide.components.Text32.ctx_map.text}</Text></View></View>
<View /* View18 */   style={styles.xdw2dd}><View /* View19 */   style={styles.xdw2dc}><Text /* Text36 */ style={styles.xdw2db} numberOfLines={1}>{bagForItem.data.start_time.slice(11, 16)}</Text></View>
<Text /* Text34 */ style={styles.xdw2d8} >{bagForItem.data.remark}</Text></View></XbenchcView></ViewForItem> })}</XbenchcScrollView></>)}
{!!(state.items.length < 1) /* ViewIf3 */ && (<><View /* View20 */   style={styles.xdw2dj}><View /* View5 */   style={styles.xdw2di}><Text /* Text14 */ style={styles.xdw2dg} >{slide.components.Text14.ctx_map.text}</Text>
<XbenchcView /* View22 */   viewStyle={styles.xdw2ct} onClick={getEvent('View22:onClick:func3:', {}, bagForKeyValue, bagForIndex)}><Text /* Text15 */ style={styles.xdw2dh} >{slide.components.Text15.ctx_map.text}</Text></XbenchcView>
<Text /* Text16 */ style={styles.xdw2dg} >{slide.components.Text16.ctx_map.text}</Text></View></View></>)}
<Xbenchc275104 /* DwappCloud3 */ valueStyle={ slide.components.DwappCloud3.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud3.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud3.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud3:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104></View></>)}
    </ErrorBoundary>
  )
}
