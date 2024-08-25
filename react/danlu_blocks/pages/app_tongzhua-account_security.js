
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import { Image } from 'expo-image'
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
const action38 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action10 = state.member = (null)
  return state
}

const action5 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action12 = await dw.app.run("member.get_siteuser_id", {})
  if (!action12) {
    let message = ("用户未登录")
    const action43 = message
    const action44 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    const action17 = await dw.navigateBack({delta: 1})
  }
  const action11 = await store.dispatch("func2", {})
}

const action6 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action7 = await dw.app.run("member.get_create_member", {})
  
        if ((action7.status) === ("error")) {
          const action8message = (action7.message || "操作错误！")
          const action8title = ("提示")
          action8message && dw.alert(action8title, action8message)
          return {}
        }
        
  const action9 = store.commit('setState', {["state.member"]: action7.object})
}

const action30 = actions['func6'] = function (store, event) {
  const state = store.state
  if (state.member.data.password) {
    const action33 = dw.app.goToPappUrl("update_pwd", {}, {redirectTo: false})
  } else {
    const action35 = dw.app.goToPappUrl("check_num", {}, {redirectTo: false})
  }
}

const action36 = actions['func7'] = function (store, event) {
  const state = store.state
  const action37 = dw.app.goToPappUrl("siteuser_bindmobile", {}, {redirectTo: false})
}

const action39 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action40 = modalInstance = (event.data)
  const action41 = console.log('[getModalInstance#action41] 打印(modalInstance)', modalInstance)
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
var action38 = modalInstance;
var action2 = actions['computed1'] = function (event, state) {
  if (event.data.length) {
    return event.data.substring(0, 3) + '****' + event.data.substring(7, 11);
  }
  return "未绑定";
};
// COMPUTED_ACTION_META:computed1 {"deps":[]}

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdw281: {
  color: "#000000",
  flexGrow: 1,
  fontSize: pm(12),
  flexShrink: 1,
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw282: {
  color: "#999999",
  flexGrow: 0,
  fontSize: pm(12),
  flexShrink: 0,
  fontWeight: "400",
  lineHeight: pm(17),
  marginRight: pm(10),
},
xdw283: {
  width: pm(12),
  height: pm(12),
},
xdw284: {
  height: pm(43),
  flexWrap: "nowrap",
  marginTop: pm(10),
  alignItems: "center",
  paddingTop: pm(7),
  paddingLeft: pm(17),
  paddingRight: pm(17),
  flexDirection: "row",
  paddingBottom: pm(7),
  justifyContent: "flex-start",
  backgroundColor: "#ffffff",
},
xdw285: {
  height: pm(43),
  flexWrap: "nowrap",
  borderTopWidth: pm(1),
  borderTopColor: "#eeeeee",
  alignItems: "center",
  marginLeft: pm(17),
  paddingTop: pm(7),
  marginBottom: pm(10),
  paddingRight: pm(17),
  flexDirection: "row",
  paddingBottom: pm(7),
  justifyContent: "flex-start",
  backgroundColor: "#ffffff",
},
xdw286: {
  height: pm(43),
  backgroundColor: "#ffffff",
},
xdw287: {
  color: "#aaaaaa",
  fontSize: pm(10),
  lineHeight: pm(15),
  paddingTop: pm(10),
  paddingLeft: pm(17),
  paddingRight: pm(17),
  paddingBottom: pm(10),
},
xdw288: {
  marginRight: pm(7),
},
xdw289: {
  height: pm(43),
  flexWrap: "nowrap",
  alignItems: "center",
  paddingTop: pm(7),
  paddingLeft: pm(17),
  paddingRight: pm(17),
  flexDirection: "row",
  paddingBottom: pm(7),
  justifyContent: "flex-start",
  backgroundColor: "#ffffff",
},
xdw28a: {
  flexDirection: "column",
},
xdw28b: {
  flex: 1,
  width: "100%",
  overflow: "scroll",
  borderTopWidth: pm(1),
  borderTopColor: "#eeeeee",
  backgroundColor: "#f8f8f8",
}
});
const slide = {"type":"171132","key":"c1711321","slug":null,"randomid":"id_9df5f0f9c5cbc4443bc757c4","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":"绑定手机"}},"Text2":{"ctx_map":{"text":"登录密码"}},"Text3":{"ctx_map":{"text":"第三方绑定"}},"Text4":{"ctx_map":{"text":"微信"}},"Text5":{"ctx_map":{"text":"QQ"}},"Text6":{"ctx_map":{"text":"未绑定"}},"Text7":{"ctx_map":{"text":"未绑定"}},"Text8":{"ctx_map":{"text":"未绑定"}},"Text9":{"ctx_map":{"text":"去修改"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"Image5":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Image6":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Image7":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"Image8":{"ctx_map":{"fop":"e,24,24","src":"u/dev064/2023/03/21/LoMAgJgKN63Du73diX7E2e/angle-right.png"}},"ViewIf1":{"ctx_map":{"value":true}},"SvgImage1":{"ctx_map":{"src":"u/dev070/2023/02/28/pqzPg5XVaht7haFJHJwLxK/wechat.svg","color":"#08BA06","width":17,"height":14,"SvgImageManage":"SvgImageManage"}},"SvgImage2":{"ctx_map":{"src":"u/dev070/2023/02/28/bQzJuwwCVvXR3Exs3fyfAG/1096426.svg","color":"#23A0F0","width":17,"height":14,"SvgImageManage":"SvgImageManage"}},"DwappCloud1":{"ctx_map":{"bool1":true,"bool2":false,"text1":"账号与安全","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud2":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[]}}}};
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
const pageGroupSlug = 'app_tongzhua-account_security';

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
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw28b} scrollX={ false } scrollY={ true } >{!!(!!state.member) /* ViewIf1 */ && (<><XbenchcView /* View1 */   viewStyle={styles.xdw284} onClick={getEvent('View1:onClick:func7:', {}, bagForKeyValue, bagForIndex)}><Text /* Text1 */ style={styles.xdw281} >{slide.components.Text1.ctx_map.text}</Text>
<Text /* Text8 */ style={styles.xdw282} >{computeds.computed1({data: state.member.data.mobile}, state)}</Text>
<XbenchcImage /* Image5 */ style={styles.xdw283} source={dwtools.qiniu(slide.components.Image5.ctx_map.src, slide.components.Image5.ctx_map.fop)}  /></XbenchcView>
<XbenchcView /* View2 */   viewStyle={styles.xdw286} onClick={getEvent('View2:onClick:func6:', {}, bagForKeyValue, bagForIndex)}><View /* View3 */   style={styles.xdw285}><Text /* Text2 */ style={styles.xdw281} >{slide.components.Text2.ctx_map.text}</Text>
<Text /* Text9 */ style={styles.xdw282} >{slide.components.Text9.ctx_map.text}</Text>
<XbenchcImage /* Image6 */ style={styles.xdw283} source={dwtools.qiniu(slide.components.Image6.ctx_map.src, slide.components.Image6.ctx_map.fop)}  /></View></XbenchcView>
<View /* View4 */   style={styles.xdw28a}><Text /* Text3 */ style={styles.xdw287} >{slide.components.Text3.ctx_map.text}</Text>
<View /* View5 */   style={styles.xdw289}><Image /* SvgImage1 */ style={[ styles.xdw288, { width: pm(17), height: pm(14) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev070/2023/02/28/pqzPg5XVaht7haFJHJwLxK/wechat.svg"), width: pm(17), height: pm(14) }} />
<Text /* Text4 */ style={styles.xdw281} >{slide.components.Text4.ctx_map.text}</Text>
<Text /* Text6 */ style={styles.xdw282} >{slide.components.Text6.ctx_map.text}</Text>
<XbenchcImage /* Image7 */ style={styles.xdw283} source={dwtools.qiniu(slide.components.Image7.ctx_map.src, slide.components.Image7.ctx_map.fop)}  /></View>
<View /* View6 */   style={styles.xdw286}><View /* View7 */   style={styles.xdw285}><Image /* SvgImage2 */ style={[ styles.xdw288, { width: pm(17), height: pm(14) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev070/2023/02/28/bQzJuwwCVvXR3Exs3fyfAG/1096426.svg"), width: pm(17), height: pm(14) }} />
<Text /* Text5 */ style={styles.xdw281} >{slide.components.Text5.ctx_map.text}</Text>
<Text /* Text7 */ style={styles.xdw282} >{slide.components.Text7.ctx_map.text}</Text>
<XbenchcImage /* Image8 */ style={styles.xdw283} source={dwtools.qiniu(slide.components.Image8.ctx_map.src, slide.components.Image8.ctx_map.fop)}  /></View></View></View></>)}</XbenchcScrollView>
<Xbenchc275104 /* DwappCloud2 */ valueStyle={ slide.components.DwappCloud2.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud2.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud2.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud2:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104>
    </ErrorBoundary>
  )
}
