
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import Xbenchc290154 from '../components/Xbenchc290154'
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

let modalInstance = (null)
const action54 = modalInstance
let scrollNum = (0)
const action63 = scrollNum
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action5 = state.device = (null)
  const action6 = state.device_member = (null)
  const action7 = state.platform = ("dwapp")
  const action27 = state.auto_weight = (12)
  const action48 = state.showTips = (false)
  const action60 = state.onShowType = (null)
  return state
}

const action13 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action15 = store.commit('setState', {["state.platform"]: dw.platform})
  const action41 = await Promise.all([
    (async () => {
      const action16 = await store.dispatch("func2", {})
      return action16
    })(),
    (async () => {
      const action40 = await store.dispatch("func6", {})
      return action40
    })(),
  ])

}

const action55 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action56 = modalInstance = (event.data)
  const action57 = console.log('[getModalInstance#action57] 打印(modalInstance)', modalInstance)
}

const action8 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action9 = await dw.app.run("device.user_get", {"uuid": dw.query.uuid || "f5892e18-23d7-4903-a044-97094e97c7af"})
  
        if ((action9.status) === ("error")) {
          const action10message = (action9.message || "操作错误！")
          const action10title = ("提示")
          action10message && dw.alert(action10title, action10message)
          return {}
        }
        
  const action11 = store.commit('setState', {["state.device"]: action9.object, ["state.device_member"]: action9.device_member, ["state.auto_weight"]: action9.device_member.data.feed_config.buffetMode.data.autoOutWeight})
  let action58
  

}

const action2 = actions['func1'] = function (store, event) {
  const state = store.state
  const action3 = dw.app.goToPappUrl("buffet_index", {"uuid": state.device.uuid}, {redirectTo: false})
}

const action17 = actions['func3'] = async function (store, event) {
  const state = store.state
  const action21 = await dw.showLoading({
    title: "",
    mask: false
  })
  const action26 = store.commit('setState', {[`state.device_member.data.feed_config.buffetMode.data.autoOutWeight`]: state.auto_weight})
  /* action28: COMMIT */
  const action29 = await dw.showLoading({
    title: "",
    mask: false
  })
  const action22 = await dw.app.run("mqtt.send_feed_config", {"data": state.device_member.data.feed_config, "device_member_uuid": state.device_member.uuid})
  const action23 = await dw.hideLoading()
  
        if ((action22.status) === ("error")) {
          const action24message = (action22.message || "操作错误！")
          const action24title = ("提示")
          action24message && dw.alert(action24title, action24message)
          return {}
        }
        
  let message = ("编辑成功")
  const action52 = message
  const action53 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
}

const action30 = actions['func4'] = async function (store, event) {
  const state = store.state
  const action31 = await dw.navigateBack({delta: 1})
}

const action32 = actions['func5'] = function (store, event) {
  const state = store.state
  const action33 = console.log('[func5#action33] 打印', event)
  if (scrollNum > 0) {
    const action34 = store.commit('setState', {["state.auto_weight"]: event.data})
  }
  const action64 = scrollNum = (scrollNum + 1)
}

const action36 = actions['func6'] = async function (store, event) {
  const state = store.state
  let key = ("buffet-set-view")
  const action46 = key
  const action37 = await dw.getStorage(key)
  let res = (action37)
  const action38 = res
  const action39 = console.log('[func6#action39] 打印(res)的返回值', res)
  if (!res) {
    const action45 = await dw.setStorage(key, "true")
    const action47 = store.commit('setState', {["state.showTips"]: true})
  }
}

const action49 = actions['func7'] = function (store, event) {
  const state = store.state
  const action50 = store.commit('setState', {["state.showTips"]: false})
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
xdw13h: {
  width: pm(36),
  height: pm(36),
},
xdw13i: {
  right: pm(5),
  bottom: pm(0),
  position: "absolute",
  marginTop: "auto",
  marginBottom: "auto",
  flexDirection: "column",
},
xdw13j: {
  position: "relative",
  flexDirection: "column",
},
xdw13k: {
  color: "#181818",
  width: pm(200),
  fontSize: pm(15),
  textAlign: "center",
  fontWeight: "500",
  lineHeight: pm(26),
  marginBottom: pm(28),
},
xdw13l: {
  width: pm(145),
  height: pm(184),
},
xdw13n: {
  flexGrow: 1,
  alignItems: "center",
  paddingTop: pm(28),
  paddingLeft: 0,
  paddingRight: 0,
  flexDirection: "column",
  paddingBottom: pm(28),
  justifyContent: "center",
  backgroundColor: "#F8F8F8",
},
xdw13o: {
  color: "#666666",
  fontSize: pm(12),
  lineHeight: pm(17),
  paddingBottom: pm(10),
},
xdw13p: {
  color: "#181818",
  fontSize: pm(40),
  fontWeight: "600",
  lineHeight: pm(42),
},
xdw13q: {
  color: "#181818",
  fontSize: pm(14),
  lineHeight: pm(18),
  marginBottom: pm(5),
},
xdw13r: {
  alignItems: "flex-end",
  flexDirection: "row",
  paddingBottom: pm(10),
},
xdw13s: {
  width: pm(320),
  height: pm(290),
  position: "relative",
  alignItems: "center",
  paddingTop: pm(15),
  flexDirection: "column",
  paddingBottom: pm(15),
  justifyContent: "flex-start",
},
xdw13t: {
  width: "100%",
  flexGrow: 1,
  flexBasis: "0%",
  flexShrink: 1,
},
xdw13u: {
  width: pm(300),
  height: pm(40),
},
xdw13v: {
  left: pm(10),
  bottom: pm(20),
  position: "absolute",
  marginTop: "auto",
  overflow: "hidden",
  flexDirection: "column",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw13w: {
  flexGrow: 1,
  flexDirection: "column",
},
xdw13x: {
  width: pm(184),
  height: pm(76),
},
xdw13y: {
  width: pm(184),
  height: pm(76),
  flexDirection: "column",
},
xdw13z: {
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
},
xdw140: {
  width: pm(123),
  height: pm(38),
  marginTop: pm(23),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#FFDA67",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw141: {
  width: pm(22),
  height: pm(22),
  marginTop: pm(14),
},
xdw142: {
  flexDirection: "row",
},
xdw143: {
  flexDirection: "column",
},
xdw144: {
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 999,
  flexGrow: 1,
  position: "absolute",
  alignItems: "center",
  flexShrink: 0,
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#000000cc",
}
});
const slide = {"type":"170326","key":"c1703261","slug":null,"randomid":"id_01cbcb60de745e6e99744e0d","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text3":{"ctx_map":{"text":"当称重碗里只有5克时 会投放下次设定食物哦"}},"Text4":{"ctx_map":{"text":"每次加粮"}},"Text5":{"ctx_map":{"text":"保存"}},"Text6":{"ctx_map":{"text":"1"}},"Text7":{"ctx_map":{"text":"克"}},"Text8":{"ctx_map":{"text":"我知道啦～"}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image2":{"ctx_map":{"fop":"e,510,648","src":"u/dev066/2024/02/26/aL4EC95RVnykrdJKZMvKMQ/图层2.png","buildToLocal":true}},"Image3":{"ctx_map":{"fop":"e,108,108","src":"u/dev066/2024/02/26/8pFviKmVmGB8PN7U3nGJDU/btn_设置.png"}},"Image4":{"ctx_map":{"fop":"e,368,152","src":"u/dev064/2023/06/25/Mcxn2QkPoJ6ckWgtM8LtGH/3_objects4x.png"}},"Image5":{"ctx_map":{"fop":"e,300,300","src":"u/dev064/2023/06/25/8szC2AgkoTnNeWjiykvJmi/2_objects1114x.png"}},"Image6":{"ctx_map":{"fop":"e,1053,144","src":"u/dev066/2024/02/26/yrLtk2GHAUYQRAvesFeRGk/编组3.png"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"DwappCloud3":{"ctx_map":{"color1":"rgb(204, 204, 204)","color2":"rgb(20, 158, 255)","numberb1":30,"numberb2":5,"numberb3":12}},"DwappCloud4":{"ctx_map":{"bool1":true,"bool2":false,"text1":"自助餐","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev066/2024/02/26/6bJb8fnMACKnYqjRhLcrym/btn_back1.png","style1":null,"select1":"portrait"}},"DwappCloud5":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"DwappCloud6":{"ctx_map":{"color1":"rgb(204, 204, 204)","color2":"rgb(20, 158, 255)","numberb1":30,"numberb2":5,"numberb3":12}},"ScrollView1":{"ctx_map":{"type":"list","bounces":true,"scrollY":true,"showScrollbar":true}},"NativeButton1":{"ctx_map":{"type":"button"}}}};
slide.components.DwappCloud4.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(16),
  fontWeight: "500",
  lineHeight: pm(24),
  flexDirection: "column",
};
slide.components.DwappCloud5.ctx_map.valueStyle = {
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
slide.components.DwappCloud5.ctx_map.containerStyle = {
  marginBottom: pm(18),
  flexDirection: "column",
};
slide.components.DwappCloud5.ctx_map.valueInputStyle = {
  color: "#333333",
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-buffet_auto_set';

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
      <View /* View14 */   style={styles.xdw13j}><Xbenchc176286 /* DwappCloud4 */ isCuzBtn={ slide.components.DwappCloud4.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud4.ctx_map.bool2 } eventData={ slide.components.DwappCloud4.ctx_map.prop1 } eventData2={ slide.components.DwappCloud4.ctx_map.prop2 } title={ slide.components.DwappCloud4.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud4.ctx_map.text2 } confirmText={ slide.components.DwappCloud4.ctx_map.text3 } cancelText={ slide.components.DwappCloud4.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud4.ctx_map.color1 } confirmColor={ slide.components.DwappCloud4.ctx_map.color2 } cancelColor={ slide.components.DwappCloud4.ctx_map.color3 } backIcon={ slide.components.DwappCloud4.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud4.ctx_map.image2 } titleStyle={ slide.components.DwappCloud4.ctx_map.style1 } screenType={ slide.components.DwappCloud4.ctx_map.select1 } ></Xbenchc176286>
<XbenchcView /* View6 */   viewStyle={styles.xdw13i} onClick={getEvent('View6:onClick:func1:', {eventData: "buffet_index"}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image3 */ style={styles.xdw13h} source={dwtools.qiniu(slide.components.Image3.ctx_map.src, slide.components.Image3.ctx_map.fop)}  /></XbenchcView></View>
{!!(state.device_member) /* ViewIf1 */ && (<><View /* View8 */   style={styles.xdw13w}><XbenchcScrollView /* ScrollView1 */ style={styles.xdw13t} scrollY={ true } showScrollbar={ true } bounces={ true } ><View /* View3 */   style={styles.xdw13n}><Text /* Text3 */ style={styles.xdw13k} >{"当称重碗里只有" + state.device_member.data.feed_config.buffetMode.data.minWeight + "克时 会投放下次设定食物哦"}</Text>
<XbenchcImage /* Image2 */ style={styles.xdw13l} source={dwtools.getLocalResource('xdw13m_lthar12k')}  /></View>
<View /* View4 */   style={styles.xdw13s}><Text /* Text4 */ style={styles.xdw13o} >{slide.components.Text4.ctx_map.text}</Text>
<View /* View7 */   style={styles.xdw13r}><Text /* Text6 */ style={styles.xdw13p} >{state.auto_weight}</Text>
<Text /* Text7 */ style={styles.xdw13q} >{slide.components.Text7.ctx_map.text}</Text></View>
<Xbenchc290154 /* DwappCloud6 */ eventData={ slide.components.DwappCloud6.ctx_map.prop1 } eventData2={ slide.components.DwappCloud6.ctx_map.prop2 } bgColor={ slide.components.DwappCloud6.ctx_map.color1 } activeBgColor={ slide.components.DwappCloud6.ctx_map.color2 } totalCount={ slide.components.DwappCloud6.ctx_map.numberb1 } labelInterval={ slide.components.DwappCloud6.ctx_map.numberb2 } value={ state.auto_weight }  scrollEnd={getEvent('DwappCloud6:scrollEnd:func5:', {}, bagForKeyValue, bagForIndex)}></Xbenchc290154></View></XbenchcScrollView>
<XbenchcView /* View5 */   viewStyle={styles.xdw13v} onClick={getEvent('View5:onClick:func3:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image6 */ style={styles.xdw13u} source={dwtools.qiniu(slide.components.Image6.ctx_map.src, slide.components.Image6.ctx_map.fop)}  /></XbenchcView></View></>)}
{!!(state.showTips) /* ViewIf2 */ && (<><View /* View9 */   style={styles.xdw144}><View /* View13 */   style={styles.xdw143}><View /* View10 */   style={styles.xdw13y}><XbenchcImage /* Image4 */ style={styles.xdw13x} source={dwtools.qiniu(slide.components.Image4.ctx_map.src, slide.components.Image4.ctx_map.fop)}  /></View>
<View /* View12 */   style={styles.xdw142}><XbenchcView /* View11 */   viewStyle={styles.xdw140} onClick={getEvent('View11:onClick:func7:', {}, bagForKeyValue, bagForIndex)}><Text /* Text8 */ style={styles.xdw13z} >{slide.components.Text8.ctx_map.text}</Text></XbenchcView>
<XbenchcImage /* Image5 */ style={styles.xdw141} source={dwtools.qiniu(slide.components.Image5.ctx_map.src, slide.components.Image5.ctx_map.fop)}  /></View></View></View></>)}
<Xbenchc275104 /* DwappCloud5 */ valueStyle={ slide.components.DwappCloud5.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud5.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud5.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud5:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104>
    </ErrorBoundary>
  )
}
