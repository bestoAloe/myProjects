
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import { Shadow } from 'react-native-shadow-2'
import ViewForItem from '../../xbench/components/ViewForItem'
import Xbenchc275104 from '../components/Xbenchc275104'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

let modalInstance = (null)
const action119 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action27 = state.cat_items = ([])
  const action34 = state.dog_items = ([])
  const action38 = state.device = (null)
  const action39 = state.device_member = (null)
  const action40 = state.platform = ("dwapp")
  const action47 = state.select_pets = ([])
  return state
}

const action3 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action85 = store.commit('setState', {["state.platform"]: dw.platform})
  const action4 = await store.dispatch("func1", {})
  if (state.device_member) {
    const action22 = await store.dispatch("func3", {})
  }
}

const action109 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action110 = modalInstance = (event.data)
  const action111 = console.log('[getModalInstance#action111] 打印(modalInstance)', modalInstance)
}

const action2 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action42 = await dw.app.run("device.user_get", {"uuid": dw.query.uuid || "f5892e18-23d7-4903-a044-97094e97c7af"})
  
        if ((action42.status) === ("error")) {
          const action43message = (action42.message || "操作错误！")
          const action43title = ("提示")
          action43message && dw.alert(action43title, action43message)
          return {}
        }
        
  const action44 = store.commit('setState', {["state.device"]: action42.object, ["state.device_member"]: action42.device_member})
}

const action21 = actions['func3'] = async function (store, event) {
  const state = store.state
  const action14 = await dw.app.run("auto_group_pet.list", {"aggs": {}, "limit": 100, "offset": 0, "filters": {data__member_uuid: state.device_member.data.member_uuid}, "order_by": []})
  /* action65: 判断关联关系 */
  let objects = (action14.objects)
  const action66 = objects
  let select_pets = ([])
  const action71 = select_pets
  const action67 = await Promise.all((objects).map(async (item, index) => {
    if (item.data.device_member_uuid === state.device_member.uuid) {
      const action72 = ((store, event) => {
select_pets.push(item)
})(store, event)
    }
  }))

  const action26 = store.commit('setState', {["state.cat_items"]: objects.filter(x=>x.data.type === 'cat'), ["state.dog_items"]: objects.filter(x=>x.data.type === 'dog'), ["state.select_pets"]: select_pets})
}

const action36 = actions['func4'] = function (store, event) {
  const state = store.state
  const action46 = dw.app.goToPappUrl("edit_petinfo", {"uuid": event.context.eventData}, {redirectTo: false})
}

const action48 = actions['func5'] = function (store, event) {
  const state = store.state
  if (!state.select_pets.map(x=>x.uuid).includes(event.context.eventData.uuid)) {
    const action55 = console.log('[func5#action55] step1', )
    const action49 = store.commit('setState', {["state.select_pets"]: [...state.select_pets, event.context.eventData]})
  } else {
    const action56 = console.log('[func5#action56] step2', )
    const action54 = store.commit('setState', {["state.select_pets"]: state.select_pets.filter(x=>x.uuid !== event.context.eventData.uuid)})
  }
}

const action74 = actions['func6'] = async function (store, event) {
  const state = store.state
  const action106 = console.log('[func6#action106] state.select_pets[0]', state.select_pets[0])
  let category = (state.select_pets[0].data._type_display)
  const action99 = category
  const action104 = []
  const action104_items = (state.select_pets)
  for (let action104_index = 0; action104_index < action104_items.length; action104_index++) {
    action104.push(await (async function (item, index) {
      if (item.data._type_display != category) {
        let msg = ("只能关联同类宠物")
        const action114 = msg
        const action115 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(msg)
}
else{
  return null
}
})(store, event)
        if (true) {
          return event
        }
      }
    })(action104_items[action104_index], action104_index))
  }

  
        if (!!(!state.select_pets.length) === (true)) {
          const action84message = ("")
          const action84title = ("提示")
          action84message && dw.alert(action84title, action84message)
          return {}
        }
        
  let select_uuids = (state.select_pets.map(x=>x.uuid))
  const action77 = select_uuids
  let pets = ([...state.cat_items, ...state.dog_items].map(x=>({
    ...x,
    is_rela: select_uuids.includes(x.uuid) ? true : false,
})))
  const action78 = pets
  const action79 = console.log('[func6#action79] 打印(pets)的返回值', pets)
  const action80 = await dw.showLoading({
    title: "",
    mask: false
  })
  const action76 = await dw.app.run("device.rela_pets", {"pets": pets, "device_member_uuid": state.device_member.uuid})
  const action81 = await dw.hideLoading()
  
        if ((action76.status) === ("error")) {
          const action82message = (action76.message || "操作错误！")
          const action82title = ("提示")
          action82message && dw.alert(action82title, action82message)
          return {}
        }
        
  let message = ("关联成功")
  const action121 = message
  const action122 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
}

const action86 = actions['func7'] = async function (store, event) {
  const state = store.state
  const action88 = await (async (store, event) => {
const key = "edit_petinfo/formData"
if(dw.platform === 'rnapp'){
  const AsyncStorage = dw.getNativePackage('AsyncStorage')
  cache = await AsyncStorage.removeItem(key)
}
else{
  cache = window.localStorage.removeItem(key)
}
})(store, event)
  const action87 = dw.app.goToPappUrl("edit_petinfo", {}, {redirectTo: false})
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
var action119 = modalInstance;
var action57 = actions['computed1'] = function (event, state) {
  var action58 = function (event) {
    var style = void 0;
    var uuids = state.select_pets.map(function (x) {
      return x.uuid;
    });
    if (state.platform === 'rnapp') {
      if (uuids.includes(event.item.uuid)) {
        // 选中
        style = {
          borderTopColor: '#FFB155',
          borderBottomColor: '#FFB155',
          borderLeftColor: '#FFB155',
          borderRightColor: '#FFB155',
          borderWidth: 1,
          backgroundColor: '#FFF9EE'
        };
      } else {
        //未选中
        style = {
          borderColor: '#FFFFFF',
          borderWidth: 1,
          backgroundColor: '#FFFFFF'
        };
      }
    } else {
      if (uuids.includes(event.item.uuid)) {
        // 选中
        style = {
          border: "1px solid #FFB155",
          backgroundColor: '#FFF9EE'
        };
      } else {
        //未选中
        style = {
          border: "1px solid #FFFFFF",
          backgroundColor: '#FFFFFF'
        };
      }
    }
    return style;
  }(event);
  var action60 = console.log('[computed1#action60] 打印(action58)的返回值', action58);
  //MACRO:DEBUG window.vconsole.log('log:workflow', {func: 'computed1', action: 'action60', label: `打印(action58)的返回值`, valueVar: "action58", value: [action58]})
  return action58;
};
// COMPUTED_ACTION_META:computed1 {"deps":["select_pets","platform"]}

var action61 = actions['computed2'] = function (event, state) {
  var action62 = function (event) {
    var style = void 0;

    if (state.select_pets.length) {
      // 选中
      style = {
        backgroundColor: '#ffd132'
      };
    } else {
      //未选中
      style = {
        backgroundColor: '#FFF1C6'
      };
    }

    return style;
  }(event);
  var action63 = console.log('[computed2#action63] 打印(action62)的返回值', action62);
  //MACRO:DEBUG window.vconsole.log('log:workflow', {func: 'computed2', action: 'action63', label: `打印(action62)的返回值`, valueVar: "action62", value: [action62]})
  return action62;
};
// COMPUTED_ACTION_META:computed2 {"deps":["select_pets"]}

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdw1co: {
  width: pm(40),
  height: pm(20),
},
xdw1cp: {
  right: pm(0),
  bottom: pm(9),
  position: "absolute",
  paddingRight: pm(5),
},
xdw1cq: {
  position: "relative",
  flexDirection: "column",
},
xdw1cr: {
  fontSize: pm(16),
  fontWeight: "500",
  lineHeight: pm(24),
  paddingTop: pm(15),
  paddingLeft: pm(10),
},
xdw1cs: {
  width: pm(30),
  height: pm(30),
  flexGrow: 0,
  flexShrink: 0,
  marginRight: pm(10),
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw1ct: {
  color: "#181818",
  fontSize: pm(14),
  fontWeight: "500",
  lineHeight: pm(24),
},
xdw1cu: {
  width: pm(300),
  alignItems: "center",
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw1cv: {
  marginTop: pm(5),
  marginLeft: pm(5),
  marginRight: pm(5),
  marginBottom: pm(5),
  flexDirection: "column",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw1cw: {
  paddingTop: pm(5),
  paddingLeft: pm(5),
  paddingRight: pm(5),
  flexDirection: "column",
  paddingBottom: pm(5),
},
xdw1cx: {
  fontSize: pm(16),
  fontWeight: "500",
  lineHeight: pm(24),
  paddingTop: pm(5),
  paddingLeft: pm(10),
},
xdw1cy: {
  fontSize: pm(12),
  textAlign: "center",
  fontWeight: "600",
  lineHeight: pm(24),
  paddingTop: pm(3),
  paddingBottom: pm(3),
},
xdw1cz: {
  width: pm(120),
  bottom: pm(20),
  flexShrink: 0,
  marginBottom: pm(10),
  flexDirection: "column",
  backgroundColor: "#ffd132",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw1d0: {
  color: "#a8a8a8",
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw1d1: {
  color: "#ffd132",
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw1d2: {
  width: pm(320),
  alignItems: "flex-start",
  flexShrink: 0,
  flexDirection: "row",
  justifyContent: "center",
},
xdw1d3: {
  height: "100%",
  flexWrap: "nowrap",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw1d4: {
  flexGrow: 1,
  flexDirection: "column",
},
xdw1d5: {
  color: "#181818",
  fontSize: pm(16),
  textAlign: "center",
  fontWeight: "500",
  lineHeight: pm(24),
  paddingTop: pm(3),
  paddingBottom: pm(3),
},
xdw1d6: {
  width: pm(300),
  height: pm(40),
  alignItems: "center",
  marginLeft: pm(10),
  marginRight: pm(10),
  marginBottom: pm(20),
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: "#FFD355",
  borderTopLeftRadius: pm(100),
  borderTopRightRadius: pm(100),
  borderBottomLeftRadius: pm(100),
  borderBottomRightRadius: pm(100),
},
xdw1d7: {
  color: "#666666",
  fontSize: pm(16),
  textAlign: "center",
  fontWeight: "500",
  lineHeight: pm(24),
  paddingTop: pm(3),
  paddingBottom: pm(3),
},
xdw1d8: {
  width: pm(300),
  height: pm(40),
  alignItems: "center",
  marginLeft: pm(10),
  marginRight: pm(10),
  marginBottom: pm(20),
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: "#FCE5A6",
  borderTopLeftRadius: pm(100),
  borderTopRightRadius: pm(100),
  borderBottomLeftRadius: pm(100),
  borderBottomRightRadius: pm(100),
},
xdw1d9: {
  flex: 1,
  width: pm(320),
  flexGrow: 1,
  flexDirection: "column",
  backgroundColor: "#f8f8f8",
}
});
const slide = {"type":"168780","key":"c1687801","slug":null,"randomid":"id_0531071aedc77d8a20e76186","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":"喵星人"}},"Text2":{"ctx_map":{"text":"这是一个文本组件"}},"Text3":{"ctx_map":{"text":"保存"}},"Text4":{"ctx_map":{"text":"这是一个文本组件"}},"Text8":{"ctx_map":{"text":"当前无宠物，点击"}},"Text9":{"ctx_map":{"text":"添加按钮"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{"extraStyleKeys":[]}},"View4":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{"extraStyleKeys":[]}},"Image1":{"ctx_map":{"fop":"e,600,600","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image2":{"ctx_map":{"fop":"e,80,80","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image3":{"ctx_map":{"fop":"e,144,72","src":"u/dev066/2024/02/24/hybysXJ5jSexpWxKWnMub4/分组16.png"}},"Text10":{"ctx_map":{"text":"创建吧~"}},"Text11":{"ctx_map":{"text":"添加宠物"}},"Text12":{"ctx_map":{"text":"汪星人"}},"Text13":{"ctx_map":{"text":"保存"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{"extraStyleKeys":[]}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewIf5":{"ctx_map":{"mode":"default","value":true}},"ViewIf6":{"ctx_map":{"mode":"default","value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewFor2":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"DwappCloud2":{"ctx_map":{"bool1":true,"bool2":false,"text1":"关联宠物","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev066/2024/02/24/hgSwfVUEXskoGSpBDuNCcL/btn_back1.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud3":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"ShadowView1":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}},"ShadowView2":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}}}};
slide.components.DwappCloud2.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(16),
  fontWeight: "500",
  lineHeight: pm(24),
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
const pageGroupSlug = 'app_tongzhua-pets';

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
      <View /* View14 */   style={styles.xdw1cq}><Xbenchc176286 /* DwappCloud2 */ isCuzBtn={ slide.components.DwappCloud2.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud2.ctx_map.bool2 } eventData={ slide.components.DwappCloud2.ctx_map.prop1 } eventData2={ slide.components.DwappCloud2.ctx_map.prop2 } title={ slide.components.DwappCloud2.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud2.ctx_map.text2 } confirmText={ slide.components.DwappCloud2.ctx_map.text3 } cancelText={ slide.components.DwappCloud2.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud2.ctx_map.color1 } confirmColor={ slide.components.DwappCloud2.ctx_map.color2 } cancelColor={ slide.components.DwappCloud2.ctx_map.color3 } backIcon={ slide.components.DwappCloud2.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud2.ctx_map.image2 } titleStyle={ slide.components.DwappCloud2.ctx_map.style1 } screenType={ slide.components.DwappCloud2.ctx_map.select1 } ></Xbenchc176286>
<XbenchcView /* View7 */   viewStyle={styles.xdw1cp} onClick={getEvent('View7:onClick:func7:', {eventData: "edit_petinfo"}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image3 */ style={styles.xdw1co} source={dwtools.qiniu(slide.components.Image3.ctx_map.src, slide.components.Image3.ctx_map.fop)}  /></XbenchcView></View>
<View /* View1 */   style={styles.xdw1d9}><View /* View11 */   style={styles.xdw1d4}>{!!(state.cat_items.length > 0) /* ViewIf1 */ && (<><Text /* Text1 */ style={styles.xdw1cr} >{slide.components.Text1.ctx_map.text}</Text>
<View /* View12 */   style={styles.xdw1cw}>{(state.cat_items).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><Shadow containerStyle={styles.xdw1cv} {...(slide.components.ShadowView1.ctx_map.rnappShadow)}><XbenchcView /* View2 */   viewStyle={[styles.xdw1cu, (computeds.computed1({item: bagForItem}, state))]} onClick={getEvent('View2:onClick:func5:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image1 */ style={styles.xdw1cs} source={dwtools.qiniu(bagForItem.data.image, slide.components.Image1.ctx_map.fop)}  />
<Text /* Text2 */ style={styles.xdw1ct} >{bagForItem.data.name}</Text></XbenchcView></Shadow></ViewForItem> })}</View></>)}
{!!(state.dog_items.length > 0) /* ViewIf2 */ && (<><Text /* Text12 */ style={styles.xdw1cx} >{slide.components.Text12.ctx_map.text}</Text>
<View /* View13 */   style={styles.xdw1cw}>{(state.dog_items).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor2' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor2 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><Shadow containerStyle={styles.xdw1cv} {...(slide.components.ShadowView2.ctx_map.rnappShadow)}><XbenchcView /* View4 */   viewStyle={[styles.xdw1cu, (computeds.computed1({item: bagForItem}, state))]} onClick={getEvent('View4:onClick:func5:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image2 */ style={styles.xdw1cs} source={dwtools.qiniu(bagForItem.data.image, slide.components.Image2.ctx_map.fop)}  />
<Text /* Text4 */ style={styles.xdw1ct} >{bagForItem.data.name}</Text></XbenchcView></Shadow></ViewForItem> })}</View></>)}
{!!(state.cat_items.length === 0 && state.dog_items.length === 0) /* ViewIf3 */ && (<><View /* View8 */   style={styles.xdw1d3}><XbenchcView /* View9 */   viewStyle={styles.xdw1cz} onClick={getEvent('View9:onClick:func7:', {}, bagForKeyValue, bagForIndex)}><Text /* Text11 */ style={styles.xdw1cy} >{slide.components.Text11.ctx_map.text}</Text></XbenchcView>
<View /* View10 */   style={styles.xdw1d2}><Text /* Text8 */ style={styles.xdw1d0} >{slide.components.Text8.ctx_map.text}</Text>
<Text /* Text9 */ style={styles.xdw1d1} >{slide.components.Text9.ctx_map.text}</Text>
<Text /* Text10 */ style={styles.xdw1d0} >{slide.components.Text10.ctx_map.text}</Text></View></View></>)}</View>
{!!(state.dog_items.length > 0 || state.cat_items.length > 0) /* ViewIf4 */ && (<>{!!(state.select_pets.length) /* ViewIf5 */ && (<><XbenchcView /* View3 */   viewStyle={styles.xdw1d6} onClick={getEvent('View3:onClick:func6:', {}, bagForKeyValue, bagForIndex)}><Text /* Text3 */ style={styles.xdw1d5} >{slide.components.Text3.ctx_map.text}</Text></XbenchcView></>)}
{!!(!state.select_pets.length) /* ViewIf6 */ && (<><View /* View15 */   style={styles.xdw1d8}><Text /* Text13 */ style={styles.xdw1d7} >{slide.components.Text13.ctx_map.text}</Text></View></>)}</>)}</View>
<Xbenchc275104 /* DwappCloud3 */ valueStyle={ slide.components.DwappCloud3.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud3.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud3.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud3:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104>
    </ErrorBoundary>
  )
}
