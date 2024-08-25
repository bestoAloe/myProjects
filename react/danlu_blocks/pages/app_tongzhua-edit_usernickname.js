
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcInput from '../../xbench/xbenchc/components/XbenchcInput'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcButton from '../../xbench/xbenchc/components/XbenchcButton'
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

let action27lock = false
let modalInstance = (null)
const action34 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action13 = state.member = (null)
  const action14 = state.formData = (null)
  const action32 = state.ready = (false)
  return state
}

const action15 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action17 = await dw.app.run("member.get_siteuser_id", {})
  
        if ((action17.status) === ("error")) {
          const action18message = (action17.message || "操作错误！")
          const action18title = ("提示")
          action18message && dw.alert(action18title, action18message)
          return {}
        }
        
  if (action17) {
    const action22 = await store.dispatch("func4", {})
  }
  const action33 = store.commit('setState', {["state.ready"]: true})
}

const action35 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action36 = modalInstance = (event.data)
  const action37 = console.log('[getModalInstance#action37] 打印(modalInstance)', modalInstance)
}

const action3 = actions['func1'] = function (store, event) {
  const state = store.state
  const action4 = store.commit('setState', {["state.formData.nickname"]: event.data.detail.value})
}

const action11 = actions['func3'] = function (store, event) {
  const state = store.state
  const action12 = store.commit('setState', {["state.formData.nickname"]: null})
}

const action9 = actions['func2'] = async function (store, event) {
  const state = store.state
  
        if (!!(!state.formData.nickname) === (true)) {
          const action10message = ("")
          const action10title = ("提示")
          action10message && dw.alert(action10title, action10message)
          return null
        }
        
  const action27 = await (async () => {
  
      if (action27lock) return true
      action27lock = true
      try {
    const action28 = await dw.app.run("member.update", {"id": state.member.id, "formData": state.formData})
    
        if ((action28.status) === ("error")) {
          const action29message = (action28.message || "操作错误！")
          const action29title = ("提示")
          action29message && dw.alert(action29title, action29message)
          return {}
        }
        
    let message = ("保存成功")
    const action39 = message
    const action40 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    const action31 = await dw.navigateBack({delta: 1})
  
      } catch (e) {
        throw e
      } finally {
        action27lock = false
      }
      
  })()
}

const action16 = actions['func4'] = async function (store, event) {
  const state = store.state
  const action23 = await dw.app.run("member.get_create_member", {})
  
        if ((action23.status) === ("error")) {
          const action24message = (action23.message || "操作错误！")
          const action24title = ("提示")
          action24message && dw.alert(action24title, action24message)
          return {}
        }
        
  const action25 = store.commit('setState', {["state.member"]: action23.object, ["state.formData"]: action23.object.data})
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
xdw20m: {
  width: "100%",
  height: pm(43),
  fontSize: pm(12),
  borderTopWidth: pm(0),
  borderTopColor: "#000000",
  borderLeftWidth: pm(0),
  borderLeftColor: "#000000",
  lineHeight: pm(17),
  paddingTop: pm(13),
  borderRightWidth: pm(0),
  borderRightColor: "#000000",
  paddingLeft: pm(17),
  borderBottomWidth: pm(0),
  borderBottomColor: "#000000",
  paddingRight: pm(40),
  paddingBottom: pm(13),
},
xdw20n: {
  width: pm(17),
  height: pm(17),
},
xdw20o: {
  top: pm(13),
  right: pm(17),
  position: "absolute",
},
xdw20p: {
  position: "relative",
  marginTop: pm(17),
  flexDirection: "column",
  backgroundColor: "#ffffff",
},
xdw20q: {
  fontSize: pm(14),
  fontWeight: "600",
  lineHeight: pm(19),
},
xdw20r: {
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
xdw20s: {
  width: pm(300),
  height: pm(38),
  marginTop: pm(34),
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
xdw20t: {
  flex: 1,
  width: "100%",
  overflow: "scroll",
  borderTopWidth: pm(1),
  borderTopColor: "#eeeeee",
  backgroundColor: "#f8f8f8",
}
});
const slide = {"type":"171129","key":"c1711291","slug":null,"randomid":"id_d449750ecfd74947a7f134be","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text2":{"ctx_map":{"text":"保存"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View4":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,34,34","src":"u/dev070/2023/02/27/YG2oWaebk5Awu3tPcyG4B4/close.png"}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"DwappCloud1":{"ctx_map":{"bool1":true,"bool2":false,"text1":"昵称","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud2":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[]}},"NativeInput1":{"ctx_map":{"type":"text","placeholder":"请输入昵称"}},"NativeButton1":{"ctx_map":{"type":"button"}}}};
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
const pageGroupSlug = 'app_tongzhua-edit_usernickname';

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
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw20t} scrollX={ false } scrollY={ true } >{!!(state.ready) /* ViewIf2 */ && (<><View /* View1 */   style={styles.xdw20p}><XbenchcInput /* NativeInput1 */ style={styles.xdw20m} value={state.formData.nickname} placeholder={slide.components.NativeInput1.ctx_map.placeholder} type={slide.components.NativeInput1.ctx_map.type}  onChange={getEvent('NativeInput1:onChange:func1:', {}, bagForKeyValue, bagForIndex)} />
{!!(!!state.formData.nickname) /* ViewIf1 */ && (<><XbenchcView /* View2 */   viewStyle={styles.xdw20o} onClick={getEvent('View2:onClick:func3:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image1 */ style={styles.xdw20n} source={dwtools.qiniu(slide.components.Image1.ctx_map.src, slide.components.Image1.ctx_map.fop)}  /></XbenchcView></>)}</View>
<View /* View4 */   style={[styles.xdw20s, ({
  "opacity": state.nickname ? 1 : 0.7
})]}><XbenchcButton /* NativeButton1 */ viewStyle={styles.xdw20r} onClick={getEvent('NativeButton1:onClick:func2:', {}, bagForKeyValue, bagForIndex)}><Text /* Text2 */ style={styles.xdw20q} >{slide.components.Text2.ctx_map.text}</Text></XbenchcButton></View></>)}</XbenchcScrollView>
<Xbenchc275104 /* DwappCloud2 */ valueStyle={ slide.components.DwappCloud2.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud2.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud2.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud2:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104>
    </ErrorBoundary>
  )
}
