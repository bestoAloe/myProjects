
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import { Image } from 'expo-image'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import Xbenchc176286 from '../components/Xbenchc176286'
import ViewForItem from '../../xbench/components/ViewForItem'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import Xbenchc275104 from '../components/Xbenchc275104'
import XbenchcScrollView from '../../xbench/xbenchc/components/XbenchcScrollView'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

let modalInstance = (null)
const action91 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action2 = state.tabs = ([/**/  {/**/    id: "1",/**/    name: "服务消息" ,/**/    unread: 0/**/  },/**/  {/**/    id: "2",/**/    name: "活动消息",/**/    unread: 0/**/  },/**/  {/**/    id: "3",/**/    name: "设备消息",/**/    unread: 0/**/  }/**/])
  const action3 = state.tab = ("1")
  const action11 = state.member = (null)
  const action20 = state.items = ([])
  const action25 = state.ready = (false)
  const action31 = state.limit = (20)
  const action32 = state.offset = (0)
  const action33 = state.reach_bottom = (false)
  const action45 = state.triggerRefresh = (false)
  return state
}

const action6 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action13 = await store.dispatch("func2", {})
}

const action7 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action12 = await store.dispatch("func3", {})
  const action17 = await store.dispatch("func4", {})
}

const action88 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action89 = modalInstance = (event.data)
  const action90 = console.log('[getModalInstance#action90] 打印(modalInstance)', modalInstance)
}

const action8 = actions['func3'] = async function (store, event) {
  const state = store.state
  const action9 = await dw.app.run("member.get_create_member", {})
  const action10 = store.commit('setState', {["state.member"]: action9.object})
}

const action14 = actions['func4'] = async function (store, event) {
  const state = store.state
  const action15 = await dw.app.run("member.get_user_message", {"aggs": {}, "limit": state.limit, "offset": state.offset, "filters": {/**//**/    data__type: state.tab/**//**/}, "order_by": []})
  const action66 = console.log('[func4#action66] state.offset', state.offset)
  if (state.offset === 0) {
    const action21 = store.commit('setState', {["state.items"]: action15.objects})
  } else {
    const action38 = store.commit('setState', {["state.items__uconcat"]: {field: 'id', list: action15.objects}})
  }
  if ((action15.objects.length) < (state.limit)) {
    const action44 = store.commit('setState', {["state.reach_bottom"]: true})
  }
  const action64 = store.commit('setState', {["state.tabs[0].unread"]: action15.count_aggs.type1_count, ["state.tabs[1].unread"]: action15.count_aggs.type2_count, ["state.tabs[2].unread"]: action15.count_aggs.type3_count, ["state.ready"]: true})
}

const action4 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action27 = store.commit('setState', {["state.ready"]: false})
  const action65 = console.log('[func1#action65] 清零', )
  const action69 = store.commit('setState', {["state.items"]: [], ["state.offset"]: 0, ["state.reach_bottom"]: false, ["state.tab"]: event.context.eventData || state.tab})
  const action19 = await store.dispatch("func4", {})
}

const action28 = actions['func5'] = async function (store, event) {
  const state = store.state
  const action29 = dw.app.goToPappUrl("device_messagedetail", {"uuid": event.context.eventData.uuid}, {redirectTo: false})
}

const action78 = actions['func8'] = async function (store, event) {
  const state = store.state
  const action80 = dw.app.goToPappUrl("service_messagedetail", {"uuid": event.context.eventData.uuid}, {redirectTo: false})
}

const action47 = actions['refresh'] = async function (store, event) {
  const state = store.state
  const action48 = store.commit('setState', {["state.triggerRefresh"]: true, ["state.offset"]: 0, ["state.reach_bottom"]: false})
  const action51 = await store.dispatch("func4", {})
  const action52 = store.commit('setState', {["state.triggerRefresh"]: false})
}

const action53 = actions['func6'] = async function (store, event) {
  const state = store.state
  if (state.reach_bottom || !state.items.length) {
    return state
  }
  /* action67: offset增加 */
  const action68 = console.log('[func6#action68] 触底！！！！！！！', )
  const action57 = store.commit('setState', {["state.offset"]: state.offset + state.limit})
  const action58 = await store.dispatch("func4", {})
}

const action70 = actions['func7'] = async function (store, event) {
  const state = store.state
  let msg = ("是否将当前页面消息已读")
  const action83 = msg
  const action84 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(msg)
}
else{
  return null
}
})(store, event)
  if (!action84) {
    return event
  }
  const action72 = await dw.app.run("member.clear_unread", {"type": state.tab})
  
        if ((action72.status) === ("error")) {
          const action73message = (action72.message || "操作错误！")
          const action73title = ("提示")
          action73message && dw.alert(action73title, action73message)
          return {}
        }
        
  const action74 = await store.dispatch("func1", {"context": {eventData: state.tab}})
  let message = ("当前页面消息已读")
  const action93 = message
  const action94 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
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
xdw2hx: {},
xdw2hy: {
  right: pm(7),
  alignItems: "center",
  alignContent: "flex-end",
  flexDirection: "column",
},
xdw2hz: {
  fontSize: pm(12),
  fontWeight: "700",
  lineHeight: pm(17),
},
xdw2i0: {
  flexDirection: "column",
},
xdw2i1: {
  color: "#ffffff",
  fontSize: pm(9),
  textAlign: "center",
  lineHeight: pm(12),
},
xdw2i2: {
  top: pm(-5),
  right: pm(-14),
  height: pm(12),
  minWidth: pm(12),
  position: "absolute",
  flexDirection: "column",
  backgroundColor: "#FF6D6D",
  borderTopLeftRadius: pm(6),
  borderTopRightRadius: pm(6),
  borderBottomLeftRadius: pm(6),
  borderBottomRightRadius: pm(6),
},
xdw2i3: {
  position: "relative",
  flexDirection: "column",
},
xdw2i4: {
  width: pm(17),
  height: pm(3),
  marginTop: pm(6),
  flexDirection: "column",
  backgroundColor: "#181818",
  borderTopLeftRadius: pm(2),
  borderTopRightRadius: pm(2),
  borderBottomLeftRadius: pm(2),
  borderBottomRightRadius: pm(2),
},
xdw2i5: {
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw2i6: {
  width: pm(17),
  height: pm(3),
  marginTop: pm(6),
  flexDirection: "column",
  borderTopLeftRadius: pm(2),
  borderTopRightRadius: pm(2),
  borderBottomLeftRadius: pm(2),
  borderBottomRightRadius: pm(2),
},
xdw2i7: {
  height: pm(39),
  alignItems: "center",
  paddingLeft: pm(26),
  paddingRight: pm(26),
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: "#ffffff",
},
xdw2i8: {
  right: 0,
  width: pm(6),
  height: pm(6),
  position: "absolute",
},
xdw2i9: {
  width: pm(20),
  height: pm(20),
  position: "relative",
  marginLeft: pm(10),
  flexDirection: "column",
},
xdw2ia: {
  fontSize: pm(14),
  fontWeight: "600",
  lineHeight: pm(19),
  marginLeft: pm(2),
},
xdw2ib: {
  color: "#AAAAAA",
  fontSize: pm(9),
  lineHeight: pm(24),
  marginLeft: "auto",
  marginRight: pm(10),
},
xdw2ic: {
  marginTop: pm(10),
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
},
xdw2id: {
  color: "#666666",
  fontSize: pm(10),
  lineHeight: pm(15),
  marginLeft: pm(10),
  marginRight: pm(10),
},
xdw2ie: {
  height: pm(30),
  marginTop: pm(13),
  overflow: "hidden",
  flexDirection: "column",
},
xdw2if: {
  fontSize: pm(12),
  fontWeight: "400",
  lineHeight: pm(17),
},
xdw2ig: {
  borderTopWidth: pm(0.5),
  borderTopColor: "#eeeeee",
  marginTop: pm(10),
  alignItems: "center",
  marginLeft: pm(10),
  paddingTop: pm(10),
  marginRight: pm(10),
  marginBottom: pm(10),
  flexDirection: "row",
  justifyContent: "space-between",
},
xdw2ih: {
  marginTop: pm(14),
  marginLeft: pm(14),
  marginRight: pm(14),
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw2ii: {
  color: "#AAAAAA",
  fontSize: pm(9),
  lineHeight: pm(14),
  paddingTop: pm(10),
  paddingBottom: pm(10),
},
xdw2ij: {
  alignItems: "center",
  flexDirection: "column",
},
xdw2ik: {
  width: pm(292),
  height: pm(130),
  borderTopLeftRadius: pm(7),
  borderTopRightRadius: pm(7),
},
xdw2il: {
  fontSize: pm(12),
  lineHeight: pm(17),
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  paddingBottom: pm(10),
},
xdw2im: {
  overflow: "hidden",
  flexDirection: "column",
  borderTopLeftRadius: pm(7),
  borderTopRightRadius: pm(7),
  borderBottomLeftRadius: pm(7),
  borderBottomRightRadius: pm(7),
},
xdw2in: {
  marginLeft: pm(14),
  marginRight: pm(14),
  flexDirection: "column",
  backgroundColor: "#ffffff",
},
xdw2io: {
  width: pm(25),
  height: pm(45),
  marginTop: pm(3),
  marginLeft: pm(12),
  marginRight: pm(14),
  marginBottom: pm(3),
  borderTopLeftRadius: pm(7),
  borderTopRightRadius: pm(7),
},
xdw2ip: {
  marginTop: pm(7),
  marginLeft: pm(17),
  marginRight: pm(17),
  marginBottom: pm(7),
  flexDirection: "column",
  backgroundColor: "#F9F9F9",
},
xdw2iq: {
  fontSize: pm(12),
  fontWeight: "600",
  lineHeight: pm(17),
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  paddingBottom: pm(10),
},
xdw2ir: {
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
},
xdw2is: {
  width: pm(18),
  height: pm(18),
  overflow: "hidden",
  paddingTop: pm(2),
  marginRight: pm(17),
  paddingLeft: pm(2),
  paddingRight: pm(2),
  flexDirection: "column",
  paddingBottom: pm(2),
  backgroundColor: "#e8e8e8",
  borderTopLeftRadius: pm(999),
  borderTopRightRadius: pm(999),
  borderBottomLeftRadius: pm(999),
  borderBottomRightRadius: pm(999),
},
xdw2it: {
  top: pm(5),
  right: pm(3),
  width: pm(5),
  height: pm(5),
  position: "absolute",
  flexDirection: "column",
  backgroundColor: "#FF6D6D",
  borderTopLeftRadius: pm(999),
  borderTopRightRadius: pm(999),
  borderBottomLeftRadius: pm(999),
  borderBottomRightRadius: pm(999),
},
xdw2iu: {
  position: "relative",
  marginTop: pm(13),
  alignItems: "center",
  marginLeft: pm(13),
  marginRight: pm(13),
  marginBottom: pm(13),
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(7),
  borderTopRightRadius: pm(7),
  borderBottomLeftRadius: pm(7),
  borderBottomRightRadius: pm(7),
},
xdw2iv: {
  flex: 1,
  width: "100%",
  overflow: "scroll",
  backgroundColor: "#F8F8F8",
}
});
const slide = {"type":"170337","key":"c1703371","slug":null,"randomid":"id_83a6bdf0e9cf1403e4a0e9e7","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,2930,1300","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image2":{"ctx_map":{"fop":"e,2500,4500","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image3":{"ctx_map":{"fop":"e,20,20","src":"u/dev064/2023/06/27/rVAqzLaWiqz7YHqGfdvAwK/椭圆形4x.png"}},"Text14":{"ctx_map":{"text":"这是一个文本组件"}},"Text15":{"ctx_map":{"text":"2"}},"Text16":{"ctx_map":{"text":"2"}},"Text17":{"ctx_map":{"text":"这是一个文本组件"}},"Text18":{"ctx_map":{"text":"最新版本"}},"Text19":{"ctx_map":{"text":"这是一个文本组件","numberOfLines":2}},"Text20":{"ctx_map":{"text":"查看详情"}},"Text22":{"ctx_map":{"text":"这是一个文本组件","numberOfLines":2}},"Text23":{"ctx_map":{"text":"这是一个文本组件","numberOfLines":2}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View19":{"ctx_map":{}},"View20":{"ctx_map":{}},"View21":{"ctx_map":{}},"View22":{"ctx_map":{}},"View23":{"ctx_map":{}},"View25":{"ctx_map":{}},"View26":{"ctx_map":{}},"View27":{"ctx_map":{}},"View28":{"ctx_map":{}},"View29":{"ctx_map":{}},"View30":{"ctx_map":{}},"View31":{"ctx_map":{}},"View32":{"ctx_map":{}},"View33":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewIf5":{"ctx_map":{"value":true}},"ViewIf6":{"ctx_map":{"value":true}},"ViewIf7":{"ctx_map":{"value":true}},"ViewIf8":{"ctx_map":{"value":true}},"ViewIf9":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewFor2":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewFor3":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewFor4":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewIf10":{"ctx_map":{"value":true}},"SvgImage1":{"ctx_map":{"src":"u/dev065/2023/02/28/2TroHptMsJbdC4ywWa3oBi/一键清理icon.svg","color":"#07c160","width":31,"height":31,"SvgImageManage":"SvgImageManage"}},"SvgImage3":{"ctx_map":{"src":"u/dev064/2023/06/27/k96AcsTfDUjzWAoaUZicZn/消息icon备份144x.png","color":"#07c160","width":20,"height":20,"SvgImageManage":"SvgImageManage"}},"SvgImage4":{"ctx_map":{"src":"u/dev065/2023/02/28/3vr5xUc3DboUhQ2zdriyig/1029274.svg","color":"#999999","width":17,"height":17,"SvgImageManage":"SvgImageManage"}},"SvgImage5":{"ctx_map":{"src":"u/dev065/2023/02/28/UPTXkYXdzrLVFzd5RXMMB7/593506.svg","color":"#999999","width":15,"height":15,"SvgImageManage":"SvgImageManage"}},"DwappCloud2":{"ctx_map":{"bool1":true,"bool2":false,"text1":"消息中心","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud3":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"ScrollView1":{"ctx_map":{"type":"list","bounces":true,"scrollX":false,"scrollY":true,"showScrollbar":true,"extraStyleKeys":[],"refresherEnabled":true,"refresherBackground":"#F8F8F8"}},"DisplayDate1":{"ctx_map":{"value":"2022-09-10T11:22:33.444","format":"time"}},"DisplayDate3":{"ctx_map":{"value":"2022-09-10T11:22:33.444","format":"datetime"}}}};
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
const pageGroupSlug = 'app_tongzhua-mwssage_center';

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
      <Xbenchc176286 /* DwappCloud2 */ isCuzBtn={ slide.components.DwappCloud2.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud2.ctx_map.bool2 } eventData={ slide.components.DwappCloud2.ctx_map.prop1 } eventData2={ slide.components.DwappCloud2.ctx_map.prop2 } title={ slide.components.DwappCloud2.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud2.ctx_map.text2 } confirmText={ slide.components.DwappCloud2.ctx_map.text3 } cancelText={ slide.components.DwappCloud2.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud2.ctx_map.color1 } confirmColor={ slide.components.DwappCloud2.ctx_map.color2 } cancelColor={ slide.components.DwappCloud2.ctx_map.color3 } backIcon={ slide.components.DwappCloud2.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud2.ctx_map.image2 } titleStyle={ slide.components.DwappCloud2.ctx_map.style1 } screenType={ slide.components.DwappCloud2.ctx_map.select1 } ><XbenchcView /* View3 */   viewStyle={styles.xdw2hy} onClick={getEvent('View3:onClick:func7:', {}, bagForKeyValue, bagForIndex)}><Image /* SvgImage1 */ style={[ styles.xdw2hx, { width: pm(31), height: pm(31) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev065/2023/02/28/2TroHptMsJbdC4ywWa3oBi/一键清理icon.svg"), width: pm(31), height: pm(31) }} /></XbenchcView></Xbenchc176286>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw2iv} refresherEnabled={ true } refresherTriggered={ state.triggerRefresh } refresherBackground={ "#F8F8F8" } scrollX={ false } scrollY={ true } showScrollbar={ true } bounces={ true }  onRefresherRefresh={getEvent('ScrollView1:onRefresherRefresh:refresh:', {}, bagForKeyValue, bagForIndex)} onScrollToLower={getEvent('ScrollView1:onScrollToLower:func6:', {}, bagForKeyValue, bagForIndex)}><View /* View4 */   style={styles.xdw2i7}>{(state.tabs).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View9 */   style={styles.xdw2i0}>{!!(state.tab == bagForItem.id) /* ViewIf1 */ && (<><View /* View11 */   style={styles.xdw2i5}><View /* View6 */   style={styles.xdw2i3}><View /* View8 */   style={styles.xdw2i0}><Text /* Text14 */ style={styles.xdw2hz} >{bagForItem.name}</Text>
<View /* View5 */   style={styles.xdw2i0}></View></View>
{!!(state.ready && bagForItem.unread > 0) /* ViewIf4 */ && (<><View /* View7 */   style={styles.xdw2i2}><Text /* Text15 */ style={styles.xdw2i1} >{bagForItem.unread}</Text></View></>)}</View>
<View /* View10 */   style={styles.xdw2i4}></View></View></>)}
{!!(state.tab != bagForItem.id) /* ViewIf2 */ && (<><View /* View12 */   style={styles.xdw2i5}><XbenchcView /* View14 */   viewStyle={styles.xdw2i3} onClick={getEvent('View14:onClick:func1:', {eventData: bagForItem.id}, bagForKeyValue, bagForIndex)}><View /* View16 */   style={styles.xdw2i0}><Text /* Text17 */ style={styles.xdw2hz} >{bagForItem.name}</Text>
<View /* View17 */   style={styles.xdw2i0}></View></View>
{!!(state.ready && bagForItem.unread > 0) /* ViewIf5 */ && (<><View /* View15 */   style={styles.xdw2i2}><Text /* Text16 */ style={styles.xdw2i1} >{bagForItem.unread}</Text></View></>)}</XbenchcView>
<View /* View13 */   style={styles.xdw2i6}></View></View></>)}</View></ViewForItem> })}</View>
{!!(state.ready) /* ViewIf9 */ && (<>{!!(state.tab == "1") /* ViewIf3 */ && (<>{(state.items).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor2' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor2 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><XbenchcView /* View19 */   viewStyle={styles.xdw2ih} onClick={getEvent('View19:onClick:func8:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><View /* View20 */   style={styles.xdw2ic}><View /* View33 */   style={styles.xdw2i9}><Image /* SvgImage3 */ style={[ styles.xdw2hx, { width: pm(20), height: pm(20) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev064/2023/06/27/k96AcsTfDUjzWAoaUZicZn/消息icon备份144x.png"), width: pm(20), height: pm(20) }} />
{!!(!bagForItem.data.is_read) /* ViewIf10 */ && (<><XbenchcImage /* Image3 */ style={styles.xdw2i8} source={dwtools.qiniu(slide.components.Image3.ctx_map.src, slide.components.Image3.ctx_map.fop)}  /></>)}</View>
<Text /* Text18 */ style={styles.xdw2ia} >{bagForItem.data.name}</Text>
<Text style={styles.xdw2ib} numberOfLines={1}>{dwtools.dateformat(bagForItem.created, slide.components.DisplayDate1.ctx_map.format)}</Text></View>
<View /* View21 */   style={styles.xdw2ie}><Text /* Text19 */ style={styles.xdw2id} numberOfLines={2}>{bagForItem.data.summary}</Text></View>
<View /* View22 */   style={styles.xdw2ig}><Text /* Text20 */ style={styles.xdw2if} >{slide.components.Text20.ctx_map.text}</Text>
<Image /* SvgImage4 */ style={[ styles.xdw2hx, { width: pm(17), height: pm(17) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev065/2023/02/28/3vr5xUc3DboUhQ2zdriyig/1029274.svg"), width: pm(17), height: pm(17) }} /></View></XbenchcView></ViewForItem> })}</>)}
{!!(state.tab == "2") /* ViewIf6 */ && (<>{(state.items).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor3' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor3 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><XbenchcView /* View32 */   viewStyle={styles.xdw2i0} onClick={getEvent('View32:onClick:func5:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><View /* View26 */   style={styles.xdw2ij}><Text style={styles.xdw2ii} numberOfLines={1}>{dwtools.dateformat(bagForItem.created, slide.components.DisplayDate3.ctx_map.format)}</Text></View>
<View /* View23 */   style={styles.xdw2in}><View /* View25 */   style={styles.xdw2im}><XbenchcImage /* Image1 */ style={styles.xdw2ik} source={dwtools.qiniu(bagForItem.data.image, slide.components.Image1.ctx_map.fop)}  />
<Text /* Text22 */ style={styles.xdw2il} numberOfLines={2}>{bagForItem.data.summary}</Text></View></View></XbenchcView></ViewForItem> })}</>)}
{!!(state.tab == "3") /* ViewIf7 */ && (<>{(state.items).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor4' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor4 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><XbenchcView /* View27 */   viewStyle={styles.xdw2iu} onClick={getEvent('View27:onClick:func5:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><View /* View30 */   style={styles.xdw2ir}><View /* View29 */   style={styles.xdw2ip}><XbenchcImage /* Image2 */ style={styles.xdw2io} source={dwtools.qiniu("u/dev065/2023/02/28/tCytZbZfeZdGhzSLkjNfNX/4O9GBMMP39RZIH8_1.png", slide.components.Image2.ctx_map.fop)}  /></View>
<Text /* Text23 */ style={styles.xdw2iq} numberOfLines={2}>{bagForItem.data.name}</Text></View>
<View /* View28 */   style={styles.xdw2is}><Image /* SvgImage5 */ style={[ styles.xdw2hx, { width: pm(15), height: pm(15) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev065/2023/02/28/UPTXkYXdzrLVFzd5RXMMB7/593506.svg"), width: pm(15), height: pm(15) }} /></View>
{!!(!bagForItem.data.is_read) /* ViewIf8 */ && (<><View /* View31 */   style={styles.xdw2it}></View></>)}</XbenchcView></ViewForItem> })}</>)}</>)}
<Xbenchc275104 /* DwappCloud3 */ valueStyle={ slide.components.DwappCloud3.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud3.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud3.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud3:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104></XbenchcScrollView>
    </ErrorBoundary>
  )
}
