
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcTextarea from '../../xbench/xbenchc/components/XbenchcTextarea'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import { Image } from 'expo-image'
import ViewForItem from '../../xbench/components/ViewForItem'
import XbenchUploadContainer from '../../xbench/components/XbenchUploadContainer'
import XbenchcInput from '../../xbench/xbenchc/components/XbenchcInput'
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

let action20lock = false
let action27lock = false
let modalInstance = (null)
const action52 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action2 = state.formData = (null)
  const action3 = state.defaultFormData = ({/**/  content:"",/**/  images:[],/**/  mobile:"",/**/  member_uuid:null,/**/  siteuser_id:null/**/})
  const action7 = state.ready = (false)
  const action30 = state.member = (null)
  return state
}

const action4 = actions['onShow'] = async function (store, event) {
  const state = store.state
  if (dw.platform === 'rnapp' && event.onShowType !== 'init') {
    return event
  }
  const action31 = await store.dispatch("func4", {})
  const action6 = JSON.parse(JSON.stringify(state.defaultFormData))
  const action5 = store.commit('setState', {["state.formData"]: {...action6, member_uuid:state.member.uuid, siteuser_id:state.member.data.siteuser_id}, ["state.ready"]: true})
}

const action49 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action50 = modalInstance = (event.data)
  const action51 = console.log('[getModalInstance#action51] 打印(modalInstance)', modalInstance)
}

const action9 = actions['func1'] = function (store, event) {
  const state = store.state
  const action11 = console.log('[func1#action11] 打印', event)
  const action12 = store.commit('setState', {["state.formData.images"]: [...state.formData.images, event.data]})
}

const action13 = actions['func2'] = async function (store, event) {
  const state = store.state
  let msg = ("确认删除这张照片吗?")
  const action44 = msg
  const action45 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(msg)
}
else{
  return null
}
})(store, event)
  if (!action45) {
    return event
  }
  const action16 = JSON.parse(JSON.stringify(state.formData))
  const action18 = ((store, event) => {
action16.images.splice(event.context.eventData,1)
})(store, event)
  const action17 = store.commit('setState', {["state.formData"]: action16})
}

const action19 = actions['func3'] = async function (store, event) {
  const state = store.state
  const action20 = await (async () => {
  
      if (action20lock) return true
      action20lock = true
      try {
    const action21 = await dw.app.run("auto_group_feedback.create", {"formData": state.formData})
    
        if ((action21.status) === ("error")) {
          const action22message = (action21.message || "操作错误！")
          const action22title = ("提示")
          action22message && dw.alert(action22title, action22message)
          return {}
        }
        
    let message = ("发送成功")
    const action54 = message
    const action55 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    const action24 = await dw.navigateBack({delta: 1})
  
      } catch (e) {
        throw e
      } finally {
        action20lock = false
      }
      
  })()
}

const action25 = actions['func4'] = async function (store, event) {
  const state = store.state
  const action27 = await (async () => {
  
      if (action27lock) return true
      action27lock = true
      try {
    const action26 = await dw.app.run("member.get_create_member", {})
    
        if ((action26.status) === ("error")) {
          const action28message = (action26.message || "操作错误！")
          const action28title = ("提示")
          action28message && dw.alert(action28title, action28message)
          return {}
        }
        
    const action29 = store.commit('setState', {["state.member"]: action26.object})
  
      } catch (e) {
        throw e
      } finally {
        action27lock = false
      }
      
  })()
}

const action32 = actions['func5'] = function (store, event) {
  const state = store.state
  const action35 = store.commit('setState', {["state.formData.content"]: event.data.detail.value})
}

const action33 = actions['func6'] = function (store, event) {
  const state = store.state
  const action34 = store.commit('setState', {["state.formData.mobile"]: event.data.detail.value})
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
var action52 = modalInstance;
var action40 = actions['computed1'] = function (event, state) {
  return state.formData.images.map(function (x, index) {
    return { id: index, image: x };
  });
};
// COMPUTED_ACTION_META:computed1 {"deps":["formData"]}

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdw2bc: {
  width: "100%",
  fontSize: pm(12),
  borderTopWidth: pm(1),
  borderTopColor: "#ddd",
  borderLeftWidth: pm(1),
  borderLeftColor: "#ddd",
  lineHeight: pm(18),
  paddingTop: pm(12),
  borderRightWidth: pm(1),
  borderRightColor: "#ddd",
  paddingLeft: pm(13),
  borderBottomWidth: pm(1),
  borderBottomColor: "#ddd",
  paddingRight: pm(13),
  paddingBottom: pm(12),
},
xdw2bd: {
  color: "#8a8a8a",
  fontSize: pm(10),
  fontWeight: "500",
  lineHeight: pm(15),
},
xdw2be: {
  right: pm(13),
  bottom: pm(10),
  position: "absolute",
  flexDirection: "column",
},
xdw2bf: {
  marginTop: pm(14),
  flexDirection: "column",
  backgroundColor: "#ffffff",
},
xdw2bg: {
  color: "#181818",
  fontSize: pm(15),
  lineHeight: pm(21),
  paddingTop: pm(11),
  paddingLeft: pm(13),
  paddingRight: pm(13),
  paddingBottom: pm(10),
},
xdw2bh: {
  width: pm(68),
  height: pm(68),
  marginRight: pm(0),
  borderTopLeftRadius: pm(3),
  borderTopRightRadius: pm(3),
  borderBottomLeftRadius: pm(3),
  borderBottomRightRadius: pm(3),
},
xdw2bi: {},
xdw2bj: {
  top: pm(-7),
  right: pm(-7),
  position: "absolute",
  flexDirection: "column",
},
xdw2bk: {
  position: "relative",
  marginRight: pm(13),
  flexDirection: "column",
},
xdw2bl: {
  width: pm(23),
  height: pm(20),
},
xdw2bn: {
  color: "#aaaaaa",
  fontSize: pm(10),
  marginTop: pm(8),
  lineHeight: pm(15),
},
xdw2bo: {
  width: pm(68),
  height: pm(68),
  borderTopWidth: pm(1),
  borderTopColor: "#CCCCCC",
  alignItems: "center",
  borderLeftWidth: pm(1),
  borderLeftColor: "#CCCCCC",
  borderRightWidth: pm(1),
  borderRightColor: "#CCCCCC",
  borderBottomWidth: pm(1),
  borderBottomColor: "#CCCCCC",
  flexDirection: "column",
  justifyContent: "center",
  borderTopLeftRadius: pm(3),
  borderTopRightRadius: pm(3),
  borderBottomLeftRadius: pm(3),
  borderBottomRightRadius: pm(3),
},
xdw2bp: {
  flexWrap: "nowrap",
  paddingTop: pm(13),
  paddingLeft: pm(12),
  paddingRight: pm(12),
  flexDirection: "row",
  paddingBottom: pm(13),
  justifyContent: "flex-start",
  backgroundColor: "#ffffff",
},
xdw2bq: {
  flexDirection: "column",
},
xdw2br: {
  width: "100%",
  height: pm(43),
  fontSize: pm(12),
  borderTopWidth: pm(1),
  borderTopColor: "transparent",
  borderLeftWidth: pm(1),
  borderLeftColor: "transparent",
  paddingTop: pm(12),
  borderRightWidth: pm(1),
  borderRightColor: "transparent",
  paddingLeft: pm(13),
  borderBottomWidth: pm(1),
  borderBottomColor: "transparent",
  paddingRight: pm(13),
  paddingBottom: pm(12),
},
xdw2bs: {
  flexDirection: "column",
  backgroundColor: "#ffffff",
},
xdw2bt: {
  flexGrow: 1,
  flexShrink: 1,
  flexDirection: "column",
},
xdw2bu: {
  color: "#aaaaaa",
  fontSize: pm(10),
  lineHeight: pm(15),
  marginRight: pm(5),
},
xdw2bv: {
  color: "#181818",
  fontSize: pm(10),
  lineHeight: pm(12),
  borderBottomWidth: pm(1),
  borderBottomColor: "#000",
},
xdw2bw: {
  alignItems: "center",
  paddingTop: pm(10),
  paddingLeft: pm(13),
  paddingRight: pm(13),
  flexDirection: "row",
  paddingBottom: pm(10),
  justifyContent: "center",
},
xdw2bx: {
  fontSize: pm(14),
  fontWeight: "600",
  lineHeight: pm(19),
},
xdw2by: {
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
xdw2bz: {
  width: pm(300),
  height: pm(38),
  marginTop: pm(13),
  alignItems: "center",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: pm(13),
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "rgba(255, 218, 103, 1)",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw2c0: {
  flexGrow: 0,
  flexShrink: 0,
  flexDirection: "column",
},
xdw2c1: {
  flexGrow: 1,
  flexShrink: 1,
  flexDirection: "column",
  backgroundColor: "#f8f8f8",
}
});
const slide = {"type":"273633","key":"c2736331","slug":null,"randomid":"id_94c7bde4feb6770ef0a9f21b","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":"最多添加三张图片（选填）"}},"Text2":{"ctx_map":{"text":"添加图片"}},"Text4":{"ctx_map":{"text":"您的联系方式"}},"Text5":{"ctx_map":{"text":"如果您有紧急问题需要咨询和协助，请联系"}},"Text6":{"ctx_map":{"text":"在线客服"}},"Text7":{"ctx_map":{"text":"400-800-8820"}},"Text8":{"ctx_map":{"text":"致电请拨打"}},"Text9":{"ctx_map":{"text":"发送"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,54,48","src":"u/dev070/2023/03/01/VmjoZ22tqpck6FmWWNSLNj/照片icon2x.png","buildToLocal":true}},"Image2":{"ctx_map":{"fop":"e,300,300","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Text10":{"ctx_map":{"text":"15 / 400","numberOfLines":1}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"SvgImage1":{"ctx_map":{"src":"u/dev064/2023/11/27/3vAMH75vZsgHXLjL6AdwGA/961539.svg","color":"#e70d19","width":15,"height":15,"SvgImageManage":"SvgImageManage"}},"DwappCloud1":{"ctx_map":{"color1":""}},"DwappCloud2":{"ctx_map":{"bool1":true,"bool2":false,"text1":"帮助与反馈","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud3":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"NativeInput2":{"ctx_map":{"type":"tel","placeholder":"请输入您的手机号码"}},"NativeButton1":{"ctx_map":{"type":"button"}},"NativeTextarea1":{"ctx_map":{"rows":8,"title":"","maxLength":400,"minLength":0,"placeholder":"请描述您的问题或意见，以便我们尽快为您处理，我们会仔细阅读您的反馈，并尽早给您回复"}},"UploadContainer1":{"ctx_map":{"value":"","accept":"image/*","multiple":true,"provider":"qiniu","dwappCount":1,"dwappAccept":"image","rnappAccept":"ImagePicker:Images","showProgress":true,"dwappExtension":"","rnappExtension":"*/*"}}}};
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
const pageGroupSlug = 'app_tongzhua-feedback';

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
      <Xbenchc176286 /* DwappCloud2 */ isCuzBtn={ slide.components.DwappCloud2.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud2.ctx_map.bool2 } eventData={ slide.components.DwappCloud2.ctx_map.prop1 } eventData2={ slide.components.DwappCloud2.ctx_map.prop2 } title={ slide.components.DwappCloud2.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud2.ctx_map.text2 } confirmText={ slide.components.DwappCloud2.ctx_map.text3 } cancelText={ slide.components.DwappCloud2.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud2.ctx_map.color1 } confirmColor={ slide.components.DwappCloud2.ctx_map.color2 } cancelColor={ slide.components.DwappCloud2.ctx_map.color3 } backIcon={ slide.components.DwappCloud2.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud2.ctx_map.image2 } titleStyle={ slide.components.DwappCloud2.ctx_map.style1 } screenType={ slide.components.DwappCloud2.ctx_map.select1 } ></Xbenchc176286>
{!!(state.ready) /* ViewIf1 */ && (<><View /* View12 */   style={styles.xdw2c1}><View /* View8 */   style={styles.xdw2bt}><View /* View1 */   style={styles.xdw2bf}><XbenchcTextarea /* NativeTextarea1 */ style={styles.xdw2bc} value={state.formData.content} placeholder={"请描述您的问题或意见，以便我们尽快为您处理，我们会仔细阅读您的反馈，并尽早给您回复"} maxLength={400} minLength={0} rows={8}  onChange={getEvent('NativeTextarea1:onChange:func5:', {}, bagForKeyValue, bagForIndex)} />
<View /* View15 */   style={styles.xdw2be}><Text /* Text10 */ style={styles.xdw2bd} numberOfLines={1}>{state.formData && state.formData.content.length > 0 ? `${state.formData.content.length} / 400` : "0 / 400"}</Text></View></View>
<View /* View2 */   style={styles.xdw2bq}><Text /* Text1 */ style={styles.xdw2bg} >{slide.components.Text1.ctx_map.text}</Text>
<View /* View3 */   style={styles.xdw2bp}>{(computeds.computed1({}, state)).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View13 */   style={styles.xdw2bk}><XbenchcImage /* Image2 */ style={styles.xdw2bh} source={dwtools.qiniu(bagForItem.image, slide.components.Image2.ctx_map.fop)}  />
<XbenchcView /* View14 */   viewStyle={styles.xdw2bj} onClick={getEvent('View14:onClick:func2:', {eventData: bagForIndex}, bagForKeyValue, bagForIndex)}><Image /* SvgImage1 */ style={[ styles.xdw2bi, { width: pm(15), height: pm(15) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev064/2023/11/27/3vAMH75vZsgHXLjL6AdwGA/961539.svg"), width: pm(15), height: pm(15) }} /></XbenchcView></View></ViewForItem> })}
{!!(state.formData.images.length < 3) /* ViewIf2 */ && (<><XbenchUploadContainer /* UploadContainer1 */ value={ slide.components.UploadContainer1.ctx_map.value } provider={ "qiniu" } multiple={ true } dwappCount={ 1 } rnappAccept={ "ImagePicker:Images" } rnappExtension={ "*/*" }  onChange={getEvent('UploadContainer1:input:func1:', {}, bagForKeyValue, bagForIndex)}><View /* View4 */   style={styles.xdw2bo}><XbenchcImage /* Image1 */ style={styles.xdw2bl} source={dwtools.getLocalResource('xdw2bm_lthar2ps')}  />
<Text /* Text2 */ style={styles.xdw2bn} >{slide.components.Text2.ctx_map.text}</Text></View></XbenchUploadContainer></>)}</View></View>
<View /* View5 */   style={styles.xdw2bq}><Text /* Text4 */ style={styles.xdw2bg} >{slide.components.Text4.ctx_map.text}</Text>
<View /* View11 */   style={styles.xdw2bs}><XbenchcInput /* NativeInput2 */ style={styles.xdw2br} value={state.formData.mobile} placeholder={slide.components.NativeInput2.ctx_map.placeholder} type={slide.components.NativeInput2.ctx_map.type}  onChange={getEvent('NativeInput2:onChange:func6:', {}, bagForKeyValue, bagForIndex)} /></View></View></View>
<View /* View9 */   style={styles.xdw2c0}><View /* View7 */   style={styles.xdw2bw}><Text /* Text8 */ style={styles.xdw2bu} >{slide.components.Text8.ctx_map.text}</Text>
<Text /* Text7 */ style={styles.xdw2bv} >{slide.components.Text7.ctx_map.text}</Text></View>
<View /* View10 */   style={styles.xdw2bz}><XbenchcButton /* NativeButton1 */ viewStyle={styles.xdw2by} onClick={getEvent('NativeButton1:onClick:func3:', {}, bagForKeyValue, bagForIndex)}><Text /* Text9 */ style={styles.xdw2bx} >{slide.components.Text9.ctx_map.text}</Text></XbenchcButton></View>
<Xbenchc168613 /* DwappCloud1 */ backgroundColor={ slide.components.DwappCloud1.ctx_map.color1 } ></Xbenchc168613></View>
<Xbenchc275104 /* DwappCloud3 */ valueStyle={ slide.components.DwappCloud3.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud3.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud3.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud3:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104></View></>)}
    </ErrorBoundary>
  )
}
