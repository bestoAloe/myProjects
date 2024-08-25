
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

let modalInstance = (null)
const action28 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action6 = state.device_member = (null)
  const action26 = state.platform = ("dwapp")
  return state
}

const action29 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action30 = modalInstance = (event.data)
  const action31 = console.log('[getModalInstance#action31] 打印(modalInstance)', modalInstance)
}

const action7 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action27 = store.commit('setState', {["state.platform"]: dw.platform})
  const action8 = await store.dispatch("func1", {})
}

const action2 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action3 = await (async (store, event) => {
const key = "device_setting/device_member"
let value
if(state.platform === 'rnapp'){
  const AsyncStorage = dw.getNativePackage('AsyncStorage')
  value = await AsyncStorage.getItem(key)
}
else{
  value = window.localStorage.getItem(key)
}
if(value){
  return JSON.parse(value)
}
else{
  return null
}
})(store, event)
  
        if (!!(!action3) === (true)) {
          const action4message = ("当前设备数据加载错误")
          const action4title = ("提示")
          action4message && dw.alert(action4title, action4message)
          return {}
        }
        
  const action5 = store.commit('setState', {["state.device_member"]: action3})
}

const action22 = actions['func4'] = function (store, event) {
  const state = store.state
  const action23 = store.commit('setState', {["state.device_member.data.dryer_config"]: event.context.eventData})
}

const action9 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action10 = await dw.app.run("device_member.update", {"id": state.device_member.id, "formData": {/**/  dryer_config: state.device_member.data.dryer_config/**/}})
  const action14 = await dw.hideLoading()
  
        if ((action10.status) === ("error")) {
          const action15message = (action10.message || "操作错误！")
          const action15title = ("提示")
          action15message && dw.alert(action15title, action15message)
          return {}
        }
        
  let message = ("保存成功")
  const action33 = message
  const action34 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  const action21 = await store.dispatch("func3", {})
  await new Promise((resolve, reject) => setTimeout(resolve, 500))
  const action25 = await dw.navigateBack({delta: 1})
}

const action19 = actions['func3'] = async function (store, event) {
  const state = store.state
  const action20 = await (async (store, event) => {
const key_device_member = "device_setting/device_member"
const jsonValue2 = JSON.stringify(state.device_member)
if(state.platform === 'rnapp'){
  const AsyncStorage = dw.getNativePackage('AsyncStorage')
  await AsyncStorage.setItem(key_device_member, jsonValue2)
}
else{
  window.localStorage.setItem(key_device_member, jsonValue2)
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
xdw1fs: {
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
  marginRight: pm(3),
},
xdw1ft: {
  width: pm(18),
  height: pm(18),
},
xdw1fu: {
  alignItems: "center",
  marginLeft: "auto",
  flexDirection: "row",
  justifyContent: "center",
},
xdw1fv: {
  height: pm(38),
  marginTop: pm(10),
  alignItems: "center",
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
  backgroundColor: "#ffffff",
},
xdw1fw: {
  width: pm(310),
  height: pm(1),
  marginLeft: pm(10),
  flexDirection: "column",
  backgroundColor: "#EEEEEE",
},
xdw1fx: {
  height: pm(38),
  alignItems: "center",
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
  backgroundColor: "#ffffff",
},
xdw1fy: {
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw1fz: {
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
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw1g0: {
  flexGrow: 1,
  position: "relative",
  flexDirection: "column",
  backgroundColor: "#F8F8F8",
}
});
const slide = {"type":"172384","key":"c1723841","slug":null,"randomid":"id_4db5fda1e3584cc31299ade5","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text6":{"ctx_map":{"text":"15天（适用于南方）"}},"Text7":{"ctx_map":{"text":"28天（适用于北方）"}},"Text8":{"ctx_map":{"text":"保存"}},"View1":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/03/03/3KcHRL6xjZMeZLsSLtcHkC/SketchPng8141b19c4766ab5e73849b84c0a48779747796c199c154adbfcea8c703d6cee7.png"}},"Image2":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/03/03/3KcHRL6xjZMeZLsSLtcHkC/SketchPng8141b19c4766ab5e73849b84c0a48779747796c199c154adbfcea8c703d6cee7.png"}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"DwappCloud1":{"ctx_map":{"bool1":true,"bool2":false,"text1":"更换周期","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud2":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}}}};
slide.components.DwappCloud1.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  flexDirection: "column",
};
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
const pageGroupSlug = 'app_tongzhua-dryer_cycle';

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
<View /* View1 */   style={styles.xdw1g0}>{!!(state.device_member) /* ViewIf3 */ && (<><XbenchcView /* View4 */   viewStyle={styles.xdw1fv} onClick={getEvent('View4:onClick:func4:', {eventData: "15"}, bagForKeyValue, bagForIndex)}><Text /* Text6 */ style={[styles.xdw1fs, ({
  color: state.device_member.data.dryer_config === '15' ? '#181818' : "#999999"
})]} >{slide.components.Text6.ctx_map.text}</Text>
{!!(state.device_member.data.dryer_config === '15') /* ViewIf1 */ && (<><View /* View5 */   style={styles.xdw1fu}><XbenchcImage /* Image1 */ style={styles.xdw1ft} source={dwtools.qiniu(slide.components.Image1.ctx_map.src, slide.components.Image1.ctx_map.fop)}  /></View></>)}</XbenchcView>
<View /* View8 */   style={styles.xdw1fw}></View>
<XbenchcView /* View6 */   viewStyle={styles.xdw1fx} onClick={getEvent('View6:onClick:func4:', {eventData: "28"}, bagForKeyValue, bagForIndex)}><Text /* Text7 */ style={[styles.xdw1fs, ({
  color: state.device_member.data.dryer_config === '28' ? '#181818' : "#999999"
})]} >{slide.components.Text7.ctx_map.text}</Text>
{!!(state.device_member.data.dryer_config === '28') /* ViewIf2 */ && (<><View /* View7 */   style={styles.xdw1fu}><XbenchcImage /* Image2 */ style={styles.xdw1ft} source={dwtools.qiniu(slide.components.Image2.ctx_map.src, slide.components.Image2.ctx_map.fop)}  /></View></>)}</XbenchcView>
<XbenchcView /* View9 */   viewStyle={styles.xdw1fz} onClick={getEvent('View9:onClick:func2:', {}, bagForKeyValue, bagForIndex)}><Text /* Text8 */ style={styles.xdw1fy} >{slide.components.Text8.ctx_map.text}</Text></XbenchcView>
<Xbenchc275104 /* DwappCloud2 */ valueStyle={ slide.components.DwappCloud2.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud2.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud2.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud2:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104></>)}</View>
    </ErrorBoundary>
  )
}
