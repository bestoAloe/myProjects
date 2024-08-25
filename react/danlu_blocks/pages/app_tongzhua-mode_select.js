
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import Xbenchc275104 from '../components/Xbenchc275104'

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
  const action9 = state.device = (null)
  const action10 = state.device_member = (null)
  const action15 = state.platform = ("dwapp")
  return state
}

const action11 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action16 = store.commit('setState', {["state.platform"]: dw.platform})
  const action12 = await store.dispatch("func1", {})
}

const action2 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action3 = await dw.app.run("device.user_get", {"uuid": dw.query.uuid || "f5892e18-23d7-4903-a044-97094e97c7af"})
  
        if ((action3.status) === ("error")) {
          const action4message = (action3.message || "操作错误！")
          const action4title = ("提示")
          action4message && dw.alert(action4title, action4message)
          return {}
        }
        
  const action5 = store.commit('setState', {["state.device"]: action3.object, ["state.device_member"]: action3.device_member})
}

const action42 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action43 = modalInstance = (event.data)
  const action44 = console.log('[getModalInstance#action44] 打印(modalInstance)', modalInstance)
}

const action20 = actions['func18'] = async function (store, event) {
  const state = store.state
  const action41 = console.log('[func18#action41] event.context.eventData', event.context.eventData)
  const action21 = store.commit('setState', {["state.device.data.auto_feed_type"]: event.context.eventData})
  /* action29: COMMIT */
  const action32 = await dw.app.run("device.update_auto_feed", {"mode": event.context.eventData, "device_uuid": state.device.uuid})
  const action33 = await dw.hideLoading()
  
        if ((action32.status) === ("error")) {
          const action34message = (action32.message || "操作错误！")
          const action34title = ("提示")
          action34message && dw.alert(action34title, action34message)
          return {}
        }
        
}

const action36 = actions['func19'] = async function (store, event) {
  const state = store.state
  const action37 = await dw.navigateBack({delta: 1})
}

const action38 = actions['func20'] = function (store, event) {
  const state = store.state
  const action40 = console.log('[func20#action40] event', event)
  const action39 = dw.app.goToPappUrl(event.context.eventData, {"uuid": state.device.uuid}, {redirectTo: false})
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

var action13 = actions['computed1'] = function (event, state) {
    var action17 = console.log('[computed1#action17] event.mode', event.mode);
    //MACRO:DEBUG window.vconsole.log('log:workflow', {func: 'computed1', action: 'action17', label: `event.mode`, valueVar: "event.mode", value: [event.mode]})
    var action14 = function (event) {
        var style = {};
        if (state.device.data.auto_feed_type === event.mode) {
            if (state.platform === 'rnapp') {
                style = {
                    backgroundColor: "#FFFCF5",
                    borderTopColor: "#FFD355",
                    borderTopWidth: 1,
                    borderLeftColor: "#FFD355",
                    borderLeftWidth: 1,
                    borderRightColor: "#FFD355",
                    borderRightWidth: 1,
                    borderBottomColor: "#FFD355",
                    borderBottomWidth: 1
                };
            } else {
                style = {
                    backgroundColor: "#FFFCF5",
                    border: "1px solid #FFD355"
                };
            }
        } else {
            if (state.platform === 'rnapp') {
                style = {
                    backgroundColor: "#FFFFFF",
                    borderTopColor: "#FFFFFF",
                    borderTopWidth: 1,
                    borderLeftColor: "#FFFFFF",
                    borderLeftWidth: 1,
                    borderRightColor: "#FFFFFF",
                    borderRightWidth: 1,
                    borderBottomColor: "#FFFFFF",
                    borderBottomWidth: 1
                };
            } else {
                style = {
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #FFFFFF"
                };
            }
        }
        return style;
    }(event);
    return action14;
};
// COMPUTED_ACTION_META:computed1 {"deps":["device","platform"]}

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdwrx: {
  width: pm(20),
  height: pm(20),
},
xdwrz: {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(19),
  marginLeft: pm(3),
},
xdws0: {
  alignItems: "center",
  flexDirection: "row",
},
xdws1: {
  color: "#181818",
  fontSize: pm(11),
  fontWeight: "500",
  lineHeight: pm(15),
},
xdws2: {
  width: pm(68),
  height: pm(27),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#F0F0F0",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
  borderBottomLeftRadius: pm(14),
  borderBottomRightRadius: pm(14),
},
xdws3: {
  alignItems: "center",
  flexDirection: "row",
  paddingBottom: pm(10),
  justifyContent: "space-between",
},
xdws4: {
  color: "#999999",
  fontSize: pm(11),
  lineHeight: pm(15),
},
xdws5: {
  width: pm(29),
  height: pm(26),
},
xdws7: {
  flexDirection: "row",
},
xdws8: {
  width: pm(300),
  paddingTop: pm(10),
  paddingLeft: pm(15),
  marginBottom: pm(15),
  paddingRight: pm(15),
  paddingBottom: pm(10),
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdws9: {
  width: pm(17),
  height: pm(17),
},
xdwsb: {
  flexDirection: "row",
  paddingBottom: pm(10),
  justifyContent: "space-between",
},
xdwsc: {
  width: pm(300),
  paddingTop: pm(10),
  paddingLeft: pm(15),
  paddingRight: pm(15),
  paddingBottom: pm(10),
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdwsd: {
  paddingTop: pm(15),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(15),
  justifyContent: "center",
},
xdwse: {
  flexGrow: 1,
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  flexDirection: "column",
  paddingBottom: 0,
  backgroundColor: "#F8F8F8",
}
});
const slide = {"type":"170202","key":"c1702021","slug":null,"randomid":"id_7c6022105343b7388e53bbf5","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View3":{"ctx_map":{}},"View5":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image2":{"ctx_map":{"fop":"e,58,52","src":"u/dev064/2023/02/27/SBsG3A8t5B6y89cJaga6XD/SketchPng55e53f27a59697f32f0083215b1848fa37b5ee0cfaa797b5e35be5b0d17947ce.png","buildToLocal":true}},"Image3":{"ctx_map":{"fop":"e,60,60","src":"u/dev066/2024/02/26/sqFm9TnbyURZQfv7p8KhyW/编组27.png","buildToLocal":true}},"Image5":{"ctx_map":{"fop":"e,800,800","src":"u/dev065/2023/05/30/6B6ayqZu5xgvFA7mpLYeeU/消息icon备份22x.png","buildToLocal":true}},"Text15":{"ctx_map":{"text":"碗内粮食不足时，喂食器将自动出粮，适合不限量投喂宠物 和多宠家庭的喂养模式"}},"Text16":{"ctx_map":{"text":"进入设置"}},"Text17":{"ctx_map":{"text":"模式"}},"Text18":{"ctx_map":{"text":"自助餐模式"}},"Text19":{"ctx_map":{"text":"指定时间自动投喂宠物，稳定的进食习惯，更有利于宠物 健康"}},"Text21":{"ctx_map":{"text":"模式"}},"Text24":{"ctx_map":{"text":"定时出粮模式"}},"Text25":{"ctx_map":{"text":"进入设置"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"DwappCloud2":{"ctx_map":{"bool1":false,"bool2":false,"text1":"模式选择","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev066/2024/02/26/QUEzMCnYvnB92fd8hBB2PA/btn_back1.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud3":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}}}};
slide.components.DwappCloud2.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(16),
  fontWeight: "600",
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
const pageGroupSlug = 'app_tongzhua-mode_select';

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
{!!(state.device_member) /* ViewIf2 */ && (<><View /* View3 */   style={styles.xdwse}><View /* View5 */   style={styles.xdwsd}><View /* View7 */  ><XbenchcView /* View8 */   viewStyle={[styles.xdws8, (computeds.computed1({mode: "buffet"}, state))]} onClick={getEvent('View8:onClick:func18:', {eventData: "buffet"}, bagForKeyValue, bagForIndex)}><View /* View10 */   style={styles.xdws3}><View /* View17 */   style={styles.xdws0}><XbenchcImage /* Image3 */ style={styles.xdwrx} source={dwtools.getLocalResource('xdwry_lthar0r6')}  />
<Text /* Text18 */ style={styles.xdwrz} >{slide.components.Text18.ctx_map.text}</Text></View>
<XbenchcView /* View11 */   viewStyle={styles.xdws2} catchClick={getEvent('View11:catchClick:func20:', {eventData: "buffet_auto_set"}, bagForKeyValue, bagForIndex)}><Text /* Text16 */ style={styles.xdws1} >{slide.components.Text16.ctx_map.text}</Text></XbenchcView></View>
<View /* View9 */   style={styles.xdws7}><Text /* Text15 */ style={styles.xdws4} >{slide.components.Text15.ctx_map.text}</Text>
{!!(state.currentMode === 'buffetMode') /* ViewIf1 */ && (<><XbenchcImage /* Image2 */ style={styles.xdws5} source={dwtools.getLocalResource('xdws6_lthar0r7')}  /></>)}</View></XbenchcView>
<XbenchcView /* View12 */   viewStyle={[styles.xdwsc, (computeds.computed1({mode: "timer"}, state))]} onClick={getEvent('View12:onClick:func18:', {eventData: "timer"}, bagForKeyValue, bagForIndex)}><View /* View14 */   style={styles.xdwsb}><View /* View18 */   style={styles.xdws0}><XbenchcImage /* Image5 */ style={styles.xdws9} source={dwtools.getLocalResource('xdwsa_lthar0r7')}  />
<Text /* Text24 */ style={styles.xdwrz} >{slide.components.Text24.ctx_map.text}</Text></View>
<XbenchcView /* View19 */   viewStyle={styles.xdws2} catchClick={getEvent('View19:catchClick:func20:', {eventData: "timer_index"}, bagForKeyValue, bagForIndex)}><Text /* Text25 */ style={styles.xdws1} >{slide.components.Text25.ctx_map.text}</Text></XbenchcView></View>
<View /* View13 */  ><Text /* Text19 */ style={styles.xdws4} >{slide.components.Text19.ctx_map.text}</Text></View></XbenchcView></View></View></View>
<Xbenchc275104 /* DwappCloud3 */ valueStyle={ slide.components.DwappCloud3.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud3.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud3.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud3:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104></>)}
    </ErrorBoundary>
  )
}
