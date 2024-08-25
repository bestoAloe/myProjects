
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import ComNavBar from '../../xbench/components/ComNavBar'
import DisplayRichtext from '../../xbench/components/DisplayRichtext'
import Xbenchc168610 from '../components/Xbenchc168610'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcScrollView from '../../xbench/xbenchc/components/XbenchcScrollView'
import XbenchcModal from '../../xbench/xbenchc/components/XbenchcModal'
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
const action43 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action2 = state.value = ("")
  const action12 = state.ensure_pop = (false)
  const action19 = state.error = ("")
  const action20 = state.ensure_formdata = (false)
  return state
}

const action3 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action40 = store.commit('setState', {["state.ensure_pop"]: false, ["state.error"]: ""})
  if ((!state.value) === (true)) {
    const action28 = store.commit('setState', {["state.ensure_formdata"]: true, ["state.error"]: "请输入注销说明!"})
    return event
  }
  const action7 = await dw.app.run("accountdelete_admin.create", {"remark": state.value})
  if (action7.status === "error") {
    const action37 = store.commit('setState', {["state.ensure_formdata"]: true, ["state.error"]: action7.message || "操作错误！"})
    return event
  }
  let message = ("提交成功")
  const action48 = message
  const action49 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  await new Promise((resolve, reject) => setTimeout(resolve, 1000))
  const action11 = await dw.navigateBack({delta: 1})
}

const action13 = actions['func2'] = function (store, event) {
  const state = store.state
  const action42 = store.commit('setState', {["state.ensure_pop"]: false, ["state.ensure_formdata"]: false, ["state.error"]: ""})
}

const action22 = actions['func3'] = function (store, event) {
  const state = store.state
  const action23 = store.commit('setState', {["state.ensure_pop"]: true})
}

const action44 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action45 = modalInstance = (event.data)
  const action46 = console.log('[getModalInstance#action46] 打印(modalInstance)', modalInstance)
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
xdw3jo: {
  width: pm(300),
  fontSize: pm(12),
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
},
xdw3jp: {
  color: "#727272",
  fontSize: pm(13),
  maxWidth: pm(100),
  overflow: "hidden",
  lineHeight: pm(24),
},
xdw3jq: {
  color: "#181818",
  fontSize: pm(15),
  textAlign: "center",
  fontWeight: "500",
  lineHeight: pm(38),
},
xdw3jr: {
  width: pm(300),
  height: pm(38),
  marginTop: pm(20),
  marginBottom: pm(10),
  backgroundColor: "#ffd132",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw3js: {
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
},
xdw3jt: {
  width: "100%",
  flexGrow: 1,
  overflow: "scroll",
  flexBasis: "0%",
  flexShrink: 1,
},
xdw3ju: {
  color: "#181818",
  fontSize: pm(12),
  marginTop: pm(21),
  textAlign: "center",
  fontFamily: "inherit",
  fontWeight: "500",
  lineHeight: pm(17),
  marginBottom: pm(21),
},
xdw3jv: {
  paddingLeft: pm(11),
  paddingRight: pm(11),
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
},
xdw3jw: {
  color: "#999999",
  fontSize: pm(12),
  marginTop: pm(9),
  fontWeight: "400",
  lineHeight: pm(17),
  marginBottom: pm(12),
  flexDirection: "row",
  justifyContent: "center",
},
xdw3jx: {
  backgroundColor: "#f7f7f7",
},
xdw3jy: {
  width: "50%",
  borderRightColor: "#292929",
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: "#ffffff",
  borderBottomLeftRadius: pm(10),
},
xdw3jz: {
  color: "#181818",
  width: "50%",
  fontSize: pm(12),
  marginTop: pm(9),
  textAlign: "center",
  borderLeftWidth: pm(0),
  borderLeftColor: "#EEEEEE",
  fontWeight: "400",
  lineHeight: pm(17),
  marginBottom: pm(12),
},
xdw3k0: {
  width: "50%",
  borderLeftWidth: pm(0.5),
  borderLeftColor: "#eeeeee",
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: "#ffffff",
  borderBottomRightRadius: pm(10),
},
xdw3k1: {
  height: pm(38),
  borderTopWidth: pm(0.4),
  borderTopColor: "#EEEEEE",
  flexDirection: "row",
  backgroundColor: "#ffffff",
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw3k2: {
  width: pm(224),
  marginTop: pm(281),
  marginLeft: pm(48),
  marginRight: pm(48),
  marginBottom: pm(301),
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw3k3: {
  flex: 1,
  zIndex: 10,
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw3k4: {
  paddingLeft: pm(11),
  paddingRight: pm(11),
  flexDirection: "column",
},
xdw3k5: {
  color: "#181818",
  fontSize: pm(12),
  marginTop: pm(10),
  textAlign: "center",
  fontWeight: "400",
  lineHeight: pm(17),
  marginBottom: pm(12),
},
xdw3k6: {
  height: pm(38),
  borderTopWidth: pm(0.4),
  borderTopColor: "#d1d1d1",
  flexDirection: "column",
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
}
});
const slide = {"type":"198729","key":"c1987291","slug":null,"randomid":"id_d42f0402048580f1620cb117","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View1":{"ctx_map":{}},"View2":{"ctx_map":{"extraStyleKeys":[]}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Modal1":{"ctx_map":{"mask":true,"value":false,"position":"center","baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Modal2":{"ctx_map":{"mask":true,"value":false,"position":"center","baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Text13":{"ctx_map":{"text":"注销说明","numberOfLines":1}},"Text14":{"ctx_map":{"text":"确认注销"}},"Text16":{"ctx_map":{"text":"是否确认注销?"}},"Text17":{"ctx_map":{"text":"确认注销","numberOfLines":1}},"Text18":{"ctx_map":{"text":"取消","numberOfLines":1}},"Text19":{"ctx_map":{"text":"确认","numberOfLines":1}},"Text20":{"ctx_map":{"text":"提示内容"}},"View10":{"ctx_map":{}},"ComNavBar1":{"ctx_map":{"theme":"default","title":"账号注销","headerBackgroundColor":"#ffffff","statusBarBackgroundColor":"#ffffff"}},"DwappCloud1":{"ctx_map":{"text1":"hello world","text2":"请输入注销说明","style1":null,"style2":null,"select1":"text"}},"DwappCloud2":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"showScrollbar":true,"extraStyleKeys":[]}},"DisplayRichtext1":{"ctx_map":{"value":"<p style=\"white-space: normal;\">      </p> <p style=\"margin-bottom: 0px; white-space: normal;\">     <span style=\"font-size: 24px;\"><span style=\"font-size: 14px; color: #7F7F7F;\">很遗憾，铜爪APP无法继续为您服务，感谢您一直以来的陪伴。注销账号前，我们需要您对以下信息进行确认，以保证账户注销后不会影响您在铜爪服务的其他事物。</span></span> </p> <p style=\"margin-bottom: 0px; white-space: normal;\">     <span style=\"font-size: 24px;\"><span style=\"font-size: 14px; color: #7F7F7F;\"><br/></span></span> </p> <ol class=\"custom_num2 list-paddingleft-1\" style=\"list-style-type: num2;\">     <li class=\"list-num-3-1 list-num2-paddingleft-1\">         <p style=\"margin-bottom: 5px;\">             注销后铜爪APP将不再记录您的喂食数据         </p>     </li>     <li class=\"list-num-3-2 list-num2-paddingleft-1\">         <p style=\"margin-bottom: 5px;\">             注销后铜爪后台将不会有您账号的信息，您无法通过APP获取您的历史数据         </p>     </li>      </ol> <p style=\"margin-bottom: 5px; white-space: normal;\">     <br/> </p> <p style=\"margin-bottom: 5px; white-space: normal;\">     <strong>注销成功后，您将无法通过该账户登录APP，若需要重新使用，请联系项目点负责人进行后台账户录入。</strong> </p> <p style=\"margin-bottom: 5px; white-space: normal;\">     <strong>我们将会在您申请后的3个工作日内给予处理。</strong> </p> <p>     <br/> </p>"}}}};
slide.components.DwappCloud1.ctx_map.style1 = {
  flexDirection: "column",
};
slide.components.DwappCloud1.ctx_map.style2 = {
  height: pm(32),
  fontSize: pm(12),
  borderTopWidth: pm(1),
  borderTopColor: "#ccc",
  borderLeftWidth: pm(1),
  borderLeftColor: "#ccc",
  lineHeight: pm(24),
  borderRightWidth: pm(1),
  borderRightColor: "#ccc",
  paddingLeft: pm(8),
  borderBottomWidth: pm(1),
  borderBottomColor: "#ccc",
  paddingRight: pm(8),
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
const pageGroupSlug = 'app_tongzhua-account_delete';

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
      <ComNavBar title={ "账号注销" } theme={ "default" } statusBarBackgroundColor={ "#ffffff" } headerBackgroundColor={ "#ffffff" }></ComNavBar>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw3jt} scrollX={ false } scrollY={ true } showScrollbar={ true } ><View /* View1 */   style={styles.xdw3js}><DisplayRichtext style={styles.xdw3jo} contentWidth={pm(300)} fontSize={pm(12)} value={ "<p style=\"white-space: normal;\">      </p> <p style=\"margin-bottom: 0px; white-space: normal;\">     <span style=\"font-size: 24px;\"><span style=\"font-size: 14px; color: #7F7F7F;\">很遗憾，铜爪APP无法继续为您服务，感谢您一直以来的陪伴。注销账号前，我们需要您对以下信息进行确认，以保证账户注销后不会影响您在铜爪服务的其他事物。</span></span> </p> <p style=\"margin-bottom: 0px; white-space: normal;\">     <span style=\"font-size: 24px;\"><span style=\"font-size: 14px; color: #7F7F7F;\"><br/></span></span> </p> <ol class=\"custom_num2 list-paddingleft-1\" style=\"list-style-type: num2;\">     <li class=\"list-num-3-1 list-num2-paddingleft-1\">         <p style=\"margin-bottom: 5px;\">             注销后铜爪APP将不再记录您的喂食数据         </p>     </li>     <li class=\"list-num-3-2 list-num2-paddingleft-1\">         <p style=\"margin-bottom: 5px;\">             注销后铜爪后台将不会有您账号的信息，您无法通过APP获取您的历史数据         </p>     </li>      </ol> <p style=\"margin-bottom: 5px; white-space: normal;\">     <br/> </p> <p style=\"margin-bottom: 5px; white-space: normal;\">     <strong>注销成功后，您将无法通过该账户登录APP，若需要重新使用，请联系项目点负责人进行后台账户录入。</strong> </p> <p style=\"margin-bottom: 5px; white-space: normal;\">     <strong>我们将会在您申请后的3个工作日内给予处理。</strong> </p> <p>     <br/> </p>" } disablePreviewImage={ undefined }  />
<Text /* Text13 */ style={styles.xdw3jp} numberOfLines={1}>{slide.components.Text13.ctx_map.text}</Text>
<Xbenchc168610 /* DwappCloud1 */ value={ state.value } placeholder={ slide.components.DwappCloud1.ctx_map.text2 } containerStyle={ slide.components.DwappCloud1.ctx_map.style1 } valueInputStyle={ slide.components.DwappCloud1.ctx_map.style2 } type={ slide.components.DwappCloud1.ctx_map.select1 }  onChange={getEvent('DwappCloud1:input::value', {}, bagForKeyValue, bagForIndex)}></Xbenchc168610>
<XbenchcView /* View2 */   viewStyle={styles.xdw3jr} onClick={getEvent('View2:onClick:func3:', {}, bagForKeyValue, bagForIndex)}><Text /* Text14 */ style={styles.xdw3jq} >{slide.components.Text14.ctx_map.text}</Text></XbenchcView></View></XbenchcScrollView>
<XbenchcModal /* Modal1 */ rootStyle={styles.xdw3k3} value={ state.ensure_pop } mask={ true } maskClosable={ true } ><View /* View3 */   style={styles.xdw3k2}><View /* View5 */   style={styles.xdw3jv}><Text /* Text16 */ style={styles.xdw3ju} >{slide.components.Text16.ctx_map.text}</Text></View>
<View /* View4 */   style={styles.xdw3k1}><XbenchcView /* View6 */   viewStyle={styles.xdw3jy} hoverStyle={styles.xdw3jx} onClick={getEvent('View6:onClick:func2:', {}, bagForKeyValue, bagForIndex)}><Text /* Text18 */ style={styles.xdw3jw} numberOfLines={1}>{slide.components.Text18.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View7 */   viewStyle={styles.xdw3k0} hoverStyle={styles.xdw3jx} onClick={getEvent('View7:onClick:func1:', {}, bagForKeyValue, bagForIndex)}><Text /* Text17 */ style={styles.xdw3jz} numberOfLines={1}>{slide.components.Text17.ctx_map.text}</Text></XbenchcView></View></View></XbenchcModal>
<XbenchcModal /* Modal2 */ rootStyle={styles.xdw3k3} value={ state.ensure_formdata } mask={ true } maskClosable={ true } ><View /* View8 */   style={styles.xdw3k2}><View /* View10 */   style={styles.xdw3k4}><Text /* Text20 */ style={styles.xdw3ju} >{state.error}</Text></View>
<XbenchcView /* View9 */   viewStyle={styles.xdw3k6} hoverStyle={styles.xdw3jx} onClick={getEvent('View9:onClick:func2:', {}, bagForKeyValue, bagForIndex)}><Text /* Text19 */ style={styles.xdw3k5} numberOfLines={1}>{slide.components.Text19.ctx_map.text}</Text></XbenchcView></View></XbenchcModal>
<Xbenchc275104 /* DwappCloud2 */ valueStyle={ slide.components.DwappCloud2.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud2.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud2.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud2:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104>
    </ErrorBoundary>
  )
}
