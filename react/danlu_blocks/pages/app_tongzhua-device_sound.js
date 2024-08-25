
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import Xbenchc168615 from '../components/Xbenchc168615'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
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
const action28 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action3 = state.device = (null)
  const action4 = state.device_member = (null)
  const action5 = state.platform = ("dwapp")
  const action21 = state.isOpen = (false)
  return state
}

const action29 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action30 = modalInstance = (event.data)
  const action31 = console.log('[getModalInstance#action31] 打印(modalInstance)', modalInstance)
}

const action11 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action12 = store.commit('setState', {["state.platform"]: dw.platform})
  const action13 = await store.dispatch("func2", {})
  const action16 = await store.dispatch("func4", {})
  const action22 = store.commit('setState', {["state.isOpen"]: state.device.data.switch_notify_status === 'on'})
}

const action6 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action7 = await dw.app.run("device.user_get", {"uuid": dw.query.uuid || "f5892e18-23d7-4903-a044-97094e97c7af"})
  const action17 = console.log('[func2#action17] 打印(action7)的返回值', action7)
  
        if ((action7.status) === ("error")) {
          const action8message = (action7.message || "操作错误！")
          const action8title = ("提示")
          action8message && dw.alert(action8title, action8message)
          return {}
        }
        
  const action9 = store.commit('setState', {["state.device"]: action7.object, ["state.device_member"]: action7.device_member})
}

const action14 = actions['func4'] = async function (store, event) {
  const state = store.state
  const action15 = await (async (store, event) => {
const key = "base_setting/currentItem"
const jsonValue = JSON.stringify(state.device)
if(state.platform === 'rnapp'){
  const AsyncStorage = dw.getNativePackage('AsyncStorage')
  await AsyncStorage.setItem(key, jsonValue)
}
else{
  window.localStorage.setItem(key, jsonValue)
}
})(store, event)
}

const action18 = actions['func5'] = function (store, event) {
  const state = store.state
  let slug = (event.context.eventData)
  const action20 = slug
  const action19 = dw.app.goToPappUrl(slug, {}, {redirectTo: false})
}

const action23 = actions['func6'] = async function (store, event) {
  const state = store.state
  const action24 = store.commit('setState', {["state.isOpen"]: event.data})
  const action25 = await dw.app.run("mqtt.send_camera_set", {"status": event.data ? 1 : 2, "device_member_uuid": state.device_member.uuid})
  
        if ((action25.status) === ("error")) {
          const action26message = (action25.message || "操作错误！")
          const action26title = ("提示")
          action26message && dw.alert(action26title, action26message)
          return {}
        }
        
  let message = ("设置成功")
  const action33 = message
  const action34 = ((store, event) => {
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
xdw3ah: {
  flexGrow: 1,
  fontSize: pm(12),
  flexShrink: 1,
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw3ai: {
  flexWrap: "nowrap",
  alignItems: "center",
  marginLeft: pm(10),
  paddingTop: pm(13),
  borderBottomWidth: pm(1),
  borderBottomColor: "#eeeeee",
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(13),
  justifyContent: "flex-start",
},
xdw3aj: {
  flexGrow: 1,
  flexDirection: "column",
  backgroundColor: "#FFFFFF",
},
xdw3ak: {
  flex: 1,
  width: "100%",
  overflow: "scroll",
  borderTopWidth: pm(0),
  borderTopColor: "#eeeeee",
  paddingTop: pm(10),
  backgroundColor: "#f8f8f8",
}
});
const slide = {"type":"177453","key":"c1774531","slug":null,"randomid":"id_e886a0aea53902ac4711a795","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View1":{"ctx_map":{}},"Text10":{"ctx_map":{"text":"摄像头开启关闭提醒"}},"View10":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"DwappCloud1":{"ctx_map":{"bool1":true,"bool2":false,"text1":"设备语音","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud2":{"ctx_map":{"bool1":true,"color1":"rgb(204, 204, 204)","color2":"#FFD355"}},"DwappCloud3":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[]}}}};
slide.components.DwappCloud1.ctx_map.style1 = {
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
const pageGroupSlug = 'app_tongzhua-device_sound';

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
      <Xbenchc176286 /* DwappCloud1 */ isCuzBtn={ slide.components.DwappCloud1.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud1.ctx_map.bool2 } eventData={ slide.components.DwappCloud1.ctx_map.prop1 } eventData2={ slide.components.DwappCloud1.ctx_map.prop2 } title={ slide.components.DwappCloud1.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud1.ctx_map.text2 } confirmText={ slide.components.DwappCloud1.ctx_map.text3 } cancelText={ slide.components.DwappCloud1.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud1.ctx_map.color1 } confirmColor={ slide.components.DwappCloud1.ctx_map.color2 } cancelColor={ slide.components.DwappCloud1.ctx_map.color3 } backIcon={ slide.components.DwappCloud1.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud1.ctx_map.image2 } titleStyle={ slide.components.DwappCloud1.ctx_map.style1 } screenType={ slide.components.DwappCloud1.ctx_map.select1 } ></Xbenchc176286>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw3ak} scrollX={ false } scrollY={ true } >{!!(state.device) /* ViewIf1 */ && (<><View /* View1 */   style={styles.xdw3aj}><XbenchcView /* View10 */   viewStyle={styles.xdw3ai} onClick={getEvent('View10:onClick:func5:', {eventData: "device_name"}, bagForKeyValue, bagForIndex)}><Text /* Text10 */ style={styles.xdw3ah} >{slide.components.Text10.ctx_map.text}</Text>
<Xbenchc168615 /* DwappCloud2 */ value={ state.isOpen } eventData={ slide.components.DwappCloud2.ctx_map.prop1 } eventData2={ slide.components.DwappCloud2.ctx_map.prop2 } bgColor={ slide.components.DwappCloud2.ctx_map.color1 } activeBgColor={ slide.components.DwappCloud2.ctx_map.color2 }  onChange={getEvent('DwappCloud2:input:func6:', {}, bagForKeyValue, bagForIndex)}></Xbenchc168615></XbenchcView></View></>)}</XbenchcScrollView>
<Xbenchc275104 /* DwappCloud3 */ valueStyle={ slide.components.DwappCloud3.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud3.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud3.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud3:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104>
    </ErrorBoundary>
  )
}
