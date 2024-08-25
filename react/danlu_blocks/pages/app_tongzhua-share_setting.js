
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import Xbenchc168616 from '../components/Xbenchc168616'
import { Shadow } from 'react-native-shadow-2'
import ViewForItem from '../../xbench/components/ViewForItem'
import XbenchcScrollView from '../../xbench/xbenchc/components/XbenchcScrollView'
import XbenchcModal from '../../xbench/xbenchc/components/XbenchcModal'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action3 = state.device = (null)
  const action4 = state.device_member = (null)
  const action5 = state.platform = ("dwapp")
  const action15 = state.mode = ("preview")
  const action18 = state.items = ([])
  const action44 = state.device_member = (false)
  const action45 = state.share_pop = (false)
  const action47 = state.currentItem = (null)
  const action68 = state.sure_pop = (false)
  return state
}

const action12 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action13 = store.commit('setState', {["state.platform"]: dw.platform})
  const action14 = await store.dispatch("func1", {})
  const action20 = await store.dispatch("func2", {})
}

const action16 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action17 = await dw.app.run("device_member.list", {"limit": 1000, "offset": 0, "filters": {/**/  data__parent_device_member_uuid: state.device_member.uuid/**/}, "order_by": [], "select_related": {/**/  toone: {/**/    member_uuid__member: {},/**/  }/**/}})
  const action19 = store.commit('setState', {["state.items"]: action17.objects.map(x=>({/**/  ...x,/**/  is_select: false/**/}))})
}

const action7 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action8 = await dw.app.run("device.user_get", {"uuid": dw.query.uuid || "f5892e18-23d7-4903-a044-97094e97c7af"})
  
        if ((action8.status) === ("error")) {
          const action9message = (action8.message || "操作错误！")
          const action9title = ("提示")
          action9message && dw.alert(action9title, action9message)
          return {}
        }
        
  const action10 = store.commit('setState', {["state.device"]: action8.object, ["state.device_member"]: action8.device_member})
}

const action21 = actions['func5'] = function (store, event) {
  const state = store.state
  const action22 = store.commit('setState', {["state.mode"]: state.mode === 'preview' ? 'edit' : 'preview'})
}

const action23 = actions['func6'] = function (store, event) {
  const state = store.state
  const action24 = console.log('[func6#action24] event.context.eventData', event.context.eventData)
  const action25 = console.log('[func6#action25] event.data', event.data)
  const action26 = store.commit('setState', {[`state.items[${event.context.eventData}].is_select`]: event.data})
}

const action28 = actions['func7'] = function (store, event) {
  const state = store.state
  const action30 = JSON.parse(JSON.stringify(state.items))
  let items = (action30)
  const action31 = items
  const action32 = ((store, event) => {
items = items.map(x=>({...x, is_select: true}))
})(store, event)
  const action29 = store.commit('setState', {["state.items"]: items})
}

const action33 = actions['func8'] = async function (store, event) {
  const state = store.state
  let items = (state.items.filter(x=>x.is_select))
  const action38 = items
  
        if (!!(!items.length) === (true)) {
          const action39message = ("未选中任何条目")
          const action39title = ("提示")
          action39message && dw.alert(action39title, action39message)
          return {}
        }
        
  const action37 = await Promise.all((items).map(async (item, index) => {
    const action36 = await dw.app.run("device_member.delete", {"id": item.id})
    
        if ((action36.status) === ("error")) {
          const action40message = (action36.message || "操作错误！")
          const action40title = ("提示")
          action40message && dw.alert(action40title, action40message)
          return {}
        }
        
  }))

  const action41 = await dw.showToast({"icon": "success", "mask": false, "image": "", "title": "删除成功", "duration": 1500, "content": "删除成功"})
  const action42 = await store.dispatch("func2", {})
  const action43 = store.commit('setState', {["state.mode"]: "preview", ["state.sure_pop"]: false})
  const action74 = await store.dispatch("func11", {})
}

const action46 = actions['func9'] = function (store, event) {
  const state = store.state
  const action48 = store.commit('setState', {["state.currentItem"]: event.context.eventData, ["state.share_pop"]: true})
}

const action50 = actions['func10'] = async function (store, event) {
  const state = store.state
  const action59 = console.log('[func10#action59] event.context.eventData', event.context.eventData)
  const action52response = await dw.showModal({
        title: "提示",
        content: "是否确认修改权限",
        confirmText: "确定",
        confirmColor: "#576b95",
        showCancel: true,
        cancelText: "取消",
        cancelColor: "#000000"
      })
  const action52 = action52response && action52response.confirm
  
        if (!!(!action52) === (true)) {
          const action53message = ("")
          const action53title = ("提示")
          action53message && dw.alert(action53title, action53message)
          return {}
        }
        
  const action54 = await dw.showLoading({
    title: "",
    mask: false
  })
  const action56 = await dw.app.run("device_member.update", {"id": state.currentItem.id, "formData": {auth: event.context.eventData}})
  const action55 = await dw.hideLoading()
  const action57 = await store.dispatch("func2", {})
  const action60 = store.commit('setState', {["state.share_pop"]: false})
  const action58 = await dw.showToast({"icon": "success", "mask": false, "image": "", "title": "编辑成功", "duration": 1500, "content": "编辑成功"})
}

const action61 = actions['func11'] = function (store, event) {
  const state = store.state
  const action62 = store.commit('setState', {["state.mode"]: state.mode === 'preview' ? 'edit' : 'preview'})
  const action64 = JSON.parse(JSON.stringify(state.items))
  let items = (action64)
  const action65 = items
  const action63 = ((store, event) => {
items = items.map(x=>({...x, is_select: false}))
})(store, event)
  const action66 = store.commit('setState', {["state.items"]: items})
}

const action69 = actions['func12'] = function (store, event) {
  const state = store.state
  const action70 = store.commit('setState', {["state.sure_pop"]: true})
}

const action71 = actions['func13'] = function (store, event) {
  const state = store.state
  const action72 = store.commit('setState', {["state.sure_pop"]: false})
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
xdw1ql: {
  color: "#333333",
  fontSize: pm(13),
  fontWeight: "500",
  lineHeight: pm(18),
},
xdw1qm: {
  flexDirection: "column",
},
xdw1qn: {
  flexDirection: "row",
},
xdw1qo: {
  right: pm(10),
  flexDirection: "column",
},
xdw1qp: {
  color: "#181818",
  fontSize: pm(12),
  lineHeight: pm(17),
},
xdw1qq: {
  flexGrow: 1,
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw1qr: {
  width: pm(38),
  height: pm(38),
  marginRight: pm(7),
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw1qs: {
  color: "#000000",
  fontSize: pm(13),
  lineHeight: pm(18),
  marginRight: pm(7),
},
xdw1qt: {
  color: "#ffffff",
  fontSize: pm(10),
  fontWeight: "500",
  lineHeight: pm(15),
},
xdw1qu: {
  width: pm(55),
  height: pm(17),
  alignItems: "center",
  marginLeft: "auto",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#58D092",
  borderTopLeftRadius: pm(13),
  borderTopRightRadius: pm(13),
  borderBottomLeftRadius: pm(13),
  borderBottomRightRadius: pm(13),
},
xdw1qv: {
  width: pm(55),
  height: pm(17),
  alignItems: "center",
  marginLeft: "auto",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#F3B34C",
  borderTopLeftRadius: pm(13),
  borderTopRightRadius: pm(13),
  borderBottomLeftRadius: pm(13),
  borderBottomRightRadius: pm(13),
},
xdw1qw: {
  marginBottom: pm(7),
  flexDirection: "row",
},
xdw1qx: {
  color: "#999999",
  fontSize: pm(10),
  lineHeight: pm(15),
},
xdw1qy: {
  marginLeft: "auto",
  flexDirection: "column",
},
xdw1qz: {
  width: pm(299.528),
  height: pm(68.24),
  alignItems: "center",
  paddingTop: pm(7),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(7),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10.236),
  borderTopRightRadius: pm(10.236),
  borderBottomLeftRadius: pm(10.236),
  borderBottomRightRadius: pm(10.236),
},
xdw1r0: {
  width: pm(299.403),
  height: pm(68.24),
  marginTop: pm(17.913),
  marginLeft: pm(10.236),
  marginRight: pm(10.236),
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10.236),
  borderTopRightRadius: pm(10.236),
  borderBottomLeftRadius: pm(10.236),
  borderBottomRightRadius: pm(10.236),
},
xdw1r1: {
  width: pm(320),
  height: pm(600),
  flexDirection: "column",
  backgroundColor: "#ffffff",
},
xdw1r2: {
  flex: 1,
  width: "100%",
  overflow: "scroll",
},
xdw1r3: {
  flexGrow: 1,
  flexDirection: "column",
  backgroundColor: "#ffffff",
},
xdw1r4: {
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw1r5: {
  fontSize: pm(12),
  alignItems: "center",
  fontWeight: "500",
  lineHeight: pm(17),
  paddingTop: pm(15),
  paddingLeft: pm(17),
  paddingRight: pm(17),
  flexDirection: "row",
  paddingBottom: pm(15),
},
xdw1r6: {
  width: pm(303),
  height: pm(1),
  marginLeft: pm(17),
  flexDirection: "column",
  backgroundColor: "#F0F0F0",
},
xdw1r7: {
  paddingTop: pm(14),
  flexDirection: "column",
  paddingBottom: pm(43),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
},
xdw1r8: {
  flex: 1,
  zIndex: 10,
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "flex-end",
},
xdw1r9: {
  flexWrap: "nowrap",
  fontSize: pm(12),
  textAlign: "center",
  alignItems: "center",
  lineHeight: pm(24),
  flexDirection: "row",
  justifyContent: "center",
},
xdw1ra: {
  marginLeft: pm(10.236),
  marginRight: pm(6.3975),
  backgroundColor: "#fafafa",
},
xdw1rb: {
  width: pm(143.304),
  height: pm(40.944),
  alignItems: "center",
  marginLeft: pm(10.236),
  marginRight: pm(6.3975),
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#f0f0f0",
  borderTopLeftRadius: pm(20.448),
  borderTopRightRadius: pm(20.448),
  borderBottomLeftRadius: pm(20.448),
  borderBottomRightRadius: pm(20.448),
},
xdw1rc: {
  fontSize: pm(12),
  textAlign: "center",
  alignItems: "center",
  lineHeight: pm(24),
  justifyContent: "center",
},
xdw1rd: {
  backgroundColor: "#f5d065",
},
xdw1re: {
  width: pm(143.304),
  height: pm(40.944),
  alignItems: "center",
  marginLeft: pm(6.3975),
  marginRight: pm(10.236),
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#ffd355",
  borderTopLeftRadius: pm(20.448),
  borderTopRightRadius: pm(20.448),
  borderBottomLeftRadius: pm(20.448),
  borderBottomRightRadius: pm(20.448),
},
xdw1rf: {
  marginTop: pm(13.648),
  alignItems: "flex-start",
  flexDirection: "row",
  justifyContent: "flex-start",
  backgroundColor: "#ffffff",
},
xdw1rg: {
  width: pm(320),
  height: pm(83.594),
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "#ffffff",
},
xdw1rh: {
  flex: 1,
  zIndex: 10,
  position: "relative",
  alignItems: "flex-end",
  flexDirection: "row",
  justifyContent: "center",
},
xdw1ri: {
  color: "#181818",
  width: pm(181),
  flexWrap: "wrap",
  fontSize: pm(12),
  marginTop: pm(17.06),
  textAlign: "center",
  fontFamily: "Noto Sans CJK SC",
  marginBottom: pm(17.06),
  flexDirection: "column",
  justifyContent: "flex-start",
},
xdw1rj: {
  marginLeft: pm(27),
  marginRight: pm(27),
  flexDirection: "column",
},
xdw1rk: {
  color: "#999999",
  fontSize: pm(12),
  marginTop: "auto",
  textAlign: "center",
  fontFamily: "Noto Sans CJK SC",
  lineHeight: pm(24),
  marginBottom: "auto",
},
xdw1rl: {
  backgroundColor: "#f0f0f0",
},
xdw1rm: {
  width: "50%",
  height: "100%",
  textAlign: "center",
  alignItems: "center",
  borderRightWidth: pm(1),
  borderRightColor: "#f8f8f8",
  flexDirection: "column",
  borderBottomLeftRadius: pm(7.8),
},
xdw1rn: {
  fontSize: pm(12),
  marginTop: "auto",
  textAlign: "center",
  fontFamily: "Noto Sans CJK SC",
  lineHeight: pm(24),
  marginBottom: "auto",
},
xdw1ro: {
  backgroundColor: "#f8f8f8",
},
xdw1rp: {
  width: "50%",
  height: "100%",
  textAlign: "center",
  flexDirection: "column",
  borderBottomRightRadius: pm(7.8),
},
xdw1rq: {
  width: "100%",
  height: pm(41),
  borderTopWidth: pm(1),
  borderTopColor: "#f8f8f8",
  flexDirection: "row",
},
xdw1rr: {
  width: pm(234),
  flexWrap: "wrap",
  borderTopWidth: pm(0),
  borderTopColor: "#000",
  alignItems: "center",
  borderLeftWidth: pm(0),
  borderLeftColor: "#000",
  marginLeft: "auto",
  borderRightWidth: pm(0),
  borderRightColor: "#000",
  marginRight: "auto",
  alignContent: "center",
  borderBottomWidth: pm(0),
  borderBottomColor: "#000",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(7.8),
  borderTopRightRadius: pm(7.8),
  borderBottomLeftRadius: pm(7.8),
  borderBottomRightRadius: pm(7.8),
},
xdw1rs: {
  flex: 1,
  zIndex: 10,
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
}
});
const slide = {"type":"171822","key":"c1718221","slug":null,"randomid":"id_b66b0de8b82f4656b3dc996f","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,60,60","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Modal1":{"ctx_map":{"mask":true,"value":false,"baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Modal2":{"ctx_map":{"mask":false,"value":false,"position":"bottom","baseIndex":2000,"maskClosable":true,"destroyOnClose":false,"appendKeyboardHeight":true}},"Modal3":{"ctx_map":{"mask":true,"value":false,"position":"center","baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Text15":{"ctx_map":{"text":"编辑"}},"Text17":{"ctx_map":{"text":"允许控制"}},"Text18":{"ctx_map":{"text":"这是一个文本组件"}},"Text19":{"ctx_map":{"text":"暂无数据"}},"Text20":{"ctx_map":{"text":"这是一个文本组件"}},"Text21":{"ctx_map":{"text":"仅直播"}},"Text22":{"ctx_map":{"text":"全选"}},"Text23":{"ctx_map":{"text":"删除"}},"Text24":{"ctx_map":{"text":"允许控制设备出粮，查看喂食记录、精彩视频"}},"Text25":{"ctx_map":{"text":"允许控制"}},"Text26":{"ctx_map":{"text":"可观看实时视频和逗宠"}},"Text27":{"ctx_map":{"text":"仅直播"}},"Text28":{"ctx_map":{"text":"删除","numberOfLines":1}},"Text30":{"ctx_map":{"text":"取消","numberOfLines":1}},"Text31":{"ctx_map":{"text":"确认","numberOfLines":1}},"Text32":{"ctx_map":{"text":"取消","numberOfLines":1}},"Text33":{"ctx_map":{"text":"删除共享者后，共享者将无法查看您的设备"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"View20":{"ctx_map":{}},"View21":{"ctx_map":{"extraStyleKeys":[]}},"View22":{"ctx_map":{}},"View23":{"ctx_map":{}},"View24":{"ctx_map":{}},"View25":{"ctx_map":{}},"View26":{"ctx_map":{}},"View27":{"ctx_map":{}},"View28":{"ctx_map":{}},"View29":{"ctx_map":{}},"View30":{"ctx_map":{}},"View31":{"ctx_map":{}},"View32":{"ctx_map":{}},"View33":{"ctx_map":{}},"View35":{"ctx_map":{}},"View36":{"ctx_map":{}},"View37":{"ctx_map":{}},"View38":{"ctx_map":{}},"View39":{"ctx_map":{}},"View40":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewIf5":{"ctx_map":{"value":true}},"ViewIf6":{"ctx_map":{"value":true}},"ViewIf7":{"ctx_map":{"value":true}},"ViewIf8":{"ctx_map":{"value":true}},"ViewIf9":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewIf10":{"ctx_map":{"value":true}},"DwappCloud2":{"ctx_map":{"bool1":true,"text1":"18pm","text2":"18pm","image1":"u/dev064/2023/03/01/moxNkoLyrMKUFg2bfS9x5R/SketchPng8141b19c4766ab5e73849b84c0a48779747796c199c154adbfcea8c703d6cee7.png","image2":"u/dev064/2023/03/01/pwBaNEGk3uZTb6mWhscFmM/SketchPng74b9a31b4d49ae3bbde44f8c192072f3a848c1549574511dc2220abd9ef72aef.png"}},"DwappCloud3":{"ctx_map":{"bool1":true,"text1":"18pm","text2":"18pm","image1":"u/dev064/2023/03/01/moxNkoLyrMKUFg2bfS9x5R/SketchPng8141b19c4766ab5e73849b84c0a48779747796c199c154adbfcea8c703d6cee7.png","image2":"u/dev064/2023/03/01/pwBaNEGk3uZTb6mWhscFmM/SketchPng74b9a31b4d49ae3bbde44f8c192072f3a848c1549574511dc2220abd9ef72aef.png"}},"DwappCloud4":{"ctx_map":{"bool1":true,"text1":"18pm","text2":"18pm","image1":"u/dev064/2023/03/01/moxNkoLyrMKUFg2bfS9x5R/SketchPng8141b19c4766ab5e73849b84c0a48779747796c199c154adbfcea8c703d6cee7.png","image2":"u/dev064/2023/03/01/pwBaNEGk3uZTb6mWhscFmM/SketchPng74b9a31b4d49ae3bbde44f8c192072f3a848c1549574511dc2220abd9ef72aef.png"}},"DwappCloud5":{"ctx_map":{"bool1":true,"bool2":false,"text1":"共享管理","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[]}},"ShadowView2":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}}}};
slide.components.DwappCloud5.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-share_setting';

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
      <Xbenchc176286 /* DwappCloud5 */ isCuzBtn={ slide.components.DwappCloud5.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud5.ctx_map.bool2 } eventData={ slide.components.DwappCloud5.ctx_map.prop1 } eventData2={ slide.components.DwappCloud5.ctx_map.prop2 } title={ slide.components.DwappCloud5.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud5.ctx_map.text2 } confirmText={ slide.components.DwappCloud5.ctx_map.text3 } cancelText={ slide.components.DwappCloud5.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud5.ctx_map.color1 } confirmColor={ slide.components.DwappCloud5.ctx_map.color2 } cancelColor={ slide.components.DwappCloud5.ctx_map.color3 } backIcon={ slide.components.DwappCloud5.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud5.ctx_map.image2 } titleStyle={ slide.components.DwappCloud5.ctx_map.style1 } screenType={ slide.components.DwappCloud5.ctx_map.select1 } ><View /* View2 */   style={styles.xdw1qo}>{!!(state.mode === 'preview') /* ViewIf2 */ && (<><XbenchcView /* View6 */   viewStyle={styles.xdw1qm} onClick={getEvent('View6:onClick:func5:', {}, bagForKeyValue, bagForIndex)}><Text /* Text15 */ style={styles.xdw1ql} >{slide.components.Text15.ctx_map.text}</Text></XbenchcView></>)}
{!!(state.mode === 'edit') /* ViewIf1 */ && (<><View /* View3 */   style={styles.xdw1qn}><XbenchcView /* View5 */   viewStyle={styles.xdw1qm} onClick={getEvent('View5:onClick:func7:', {}, bagForKeyValue, bagForIndex)}><Text /* Text22 */ style={styles.xdw1ql} >{slide.components.Text22.ctx_map.text}</Text></XbenchcView></View></>)}</View></Xbenchc176286>
<View /* View9 */   style={styles.xdw1r3}>{!!(state.items.length <= 0) /* ViewIf5 */ && (<><View /* View13 */   style={styles.xdw1qq}><Text /* Text19 */ style={styles.xdw1qp} >{slide.components.Text19.ctx_map.text}</Text></View></>)}
{!!(state.items.length > 0) /* ViewIf4 */ && (<><XbenchcScrollView /* ScrollView1 */ style={styles.xdw1r2} scrollX={ false } scrollY={ true } ><View /* View10 */   style={styles.xdw1r1}>{(state.items).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><Shadow containerStyle={styles.xdw1r0} {...(slide.components.ShadowView2.ctx_map.rnappShadow)}><View /* View11 */   style={styles.xdw1qz}><XbenchcImage /* Image1 */ style={styles.xdw1qr} source={dwtools.qiniu(bagForItem.data.member_uuid__toone.data.avatar, slide.components.Image1.ctx_map.fop)}  />
<View /* View16 */   style={styles.xdw1qm}><View /* View14 */   style={styles.xdw1qw}><Text /* Text18 */ style={styles.xdw1qs} >{bagForItem.data.nickname}</Text>
{!!(bagForItem.data.auth === '2') /* ViewIf6 */ && (<><XbenchcView /* View12 */   viewStyle={styles.xdw1qu} onClick={getEvent('View12:onClick:func6:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><Text /* Text17 */ style={styles.xdw1qt} >{slide.components.Text17.ctx_map.text}</Text></XbenchcView></>)}
{!!(bagForItem.data.auth === '3') /* ViewIf7 */ && (<><XbenchcView /* View17 */   viewStyle={styles.xdw1qv} onClick={getEvent('View17:onClick:func6:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><Text /* Text21 */ style={styles.xdw1qt} >{slide.components.Text21.ctx_map.text}</Text></XbenchcView></>)}</View>
<View /* View15 */   style={styles.xdw1qn}><Text /* Text20 */ style={styles.xdw1qx} >{"接受时间: " + bagForItem.created.slice(0, 10).split("-").join(".")}</Text></View></View>
{!!(state.mode === 'edit') /* ViewIf8 */ && (<><View /* View20 */   style={styles.xdw1qy}><Xbenchc168616 /* DwappCloud2 */ value={ bagForItem.is_select } eventData={ bagForIndex } eventData2={ slide.components.DwappCloud2.ctx_map.prop2 } imageWidth={ slide.components.DwappCloud2.ctx_map.text1 } imageHeight={ slide.components.DwappCloud2.ctx_map.text2 } trueImage={ slide.components.DwappCloud2.ctx_map.image1 } falseImage={ slide.components.DwappCloud2.ctx_map.image2 }  onChange={getEvent('DwappCloud2:input:func6:', {eventData: bagForIndex}, bagForKeyValue, bagForIndex)}></Xbenchc168616></View></>)}</View></Shadow></ViewForItem> })}</View></XbenchcScrollView></>)}</View>
<XbenchcModal /* Modal1 */ rootStyle={styles.xdw1r8} value={ state.share_pop } mask={ true } maskClosable={ true } >{!!(state.device_member && state.currentItem && state.currentItem.data) /* ViewIf10 */ && (<><View /* View22 */   style={styles.xdw1r7}><View /* View28 */   style={styles.xdw1r5}><View /* View30 */   style={styles.xdw1qm}><Text /* Text27 */ style={styles.xdw1r4} >{slide.components.Text27.ctx_map.text}</Text>
<Text /* Text26 */ style={styles.xdw1qx} >{slide.components.Text26.ctx_map.text}</Text></View>
<View /* View29 */   style={styles.xdw1qy}><Xbenchc168616 /* DwappCloud4 */ value={ state.currentItem.data.auth === '3' } eventData={ "3" } eventData2={ slide.components.DwappCloud4.ctx_map.prop2 } imageWidth={ slide.components.DwappCloud4.ctx_map.text1 } imageHeight={ slide.components.DwappCloud4.ctx_map.text2 } trueImage={ slide.components.DwappCloud4.ctx_map.image1 } falseImage={ slide.components.DwappCloud4.ctx_map.image2 }  onChange={getEvent('DwappCloud4:input:func10:', {eventData: "3"}, bagForKeyValue, bagForIndex)}></Xbenchc168616></View></View>
<View /* View27 */   style={styles.xdw1r6}></View>
<View /* View24 */   style={styles.xdw1r5}><View /* View26 */   style={styles.xdw1qm}><Text /* Text25 */ style={styles.xdw1r4} >{slide.components.Text25.ctx_map.text}</Text>
<Text /* Text24 */ style={styles.xdw1qx} >{slide.components.Text24.ctx_map.text}</Text></View>
<View /* View25 */   style={styles.xdw1qy}><Xbenchc168616 /* DwappCloud3 */ value={ state.currentItem.data.auth === '2' } eventData={ "2" } eventData2={ slide.components.DwappCloud3.ctx_map.prop2 } imageWidth={ slide.components.DwappCloud3.ctx_map.text1 } imageHeight={ slide.components.DwappCloud3.ctx_map.text2 } trueImage={ slide.components.DwappCloud3.ctx_map.image1 } falseImage={ slide.components.DwappCloud3.ctx_map.image2 }  onChange={getEvent('DwappCloud3:input:func10:', {eventData: "2"}, bagForKeyValue, bagForIndex)}></Xbenchc168616></View></View>
<View /* View23 */   style={styles.xdw1r6}></View></View></>)}</XbenchcModal>
<XbenchcModal /* Modal2 */ rootStyle={styles.xdw1rh} value={ state.items.find(x=>x.is_select) } mask={ false } maskClosable={ true } appendKeyboardHeight={ true } ><View /* View31 */   style={styles.xdw1rg}><View /* View32 */   style={styles.xdw1rf}><XbenchcView /* View35 */   viewStyle={styles.xdw1rb} hoverStyle={styles.xdw1ra} onClick={getEvent('View35:onClick:func11:', {}, bagForKeyValue, bagForIndex)}><Text /* Text30 */ style={styles.xdw1r9} numberOfLines={1}>{slide.components.Text30.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View33 */   viewStyle={styles.xdw1re} hoverStyle={styles.xdw1rd} onClick={getEvent('View33:onClick:func12:', {}, bagForKeyValue, bagForIndex)}><Text /* Text28 */ style={styles.xdw1rc} numberOfLines={1}>{slide.components.Text28.ctx_map.text}</Text></XbenchcView></View></View></XbenchcModal>
<XbenchcModal /* Modal3 */ rootStyle={styles.xdw1rs} value={ state.sure_pop } mask={ true } maskClosable={ true } ><View /* View36 */   style={styles.xdw1rr}><View /* View40 */   style={styles.xdw1rj}><Text /* Text33 */ style={styles.xdw1ri} >{slide.components.Text33.ctx_map.text}</Text></View>
<View /* View37 */   style={styles.xdw1rq}><XbenchcView /* View39 */   viewStyle={styles.xdw1rm} hoverStyle={styles.xdw1rl} onClick={getEvent('View39:onClick:func13:', {}, bagForKeyValue, bagForIndex)}><Text /* Text32 */ style={styles.xdw1rk} numberOfLines={1}>{slide.components.Text32.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View38 */   viewStyle={styles.xdw1rp} hoverStyle={styles.xdw1ro} onClick={getEvent('View38:onClick:func8:', {}, bagForKeyValue, bagForIndex)}><Text /* Text31 */ style={styles.xdw1rn} numberOfLines={1}>{slide.components.Text31.ctx_map.text}</Text></XbenchcView></View></View></XbenchcModal>
    </ErrorBoundary>
  )
}
