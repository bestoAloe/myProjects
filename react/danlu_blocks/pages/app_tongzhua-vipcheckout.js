
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import ComNavBar from '../../xbench/components/ComNavBar'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import { Image } from 'expo-image'
import Xbenchc182135 from '../components/Xbenchc182135'
import DisplayRichtext from '../../xbench/components/DisplayRichtext'
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
const action31 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action5 = state.item = (null)
  const action14 = state.device_members = ([])
  const action22 = state.device_member_uuid = (null)
  return state
}

const action2 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action21 = (dw.platform === 'dwapp') ? dw.app.wxLogin() : (dw.platform === 'rnapp') ? await dw.app.wxLogin() : 
        (D.siteuser && D.siteuser.id)
          ? true
          : app.wxGotoLogin({}, '/account/login/?next=' + encodeURIComponent(location.href))
        
  if (!action21) return
  const action20 = await Promise.all([
    (async () => {
      const action4 = await store.dispatch("func1", {})
      return action4
    })(),
    (async () => {
      const action19 = await store.dispatch("func3", {})
      return action19
    })(),
  ])

}

const action3 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action6 = await dw.app.run("auto_group_product.list", {"aggs": {}, "limit": 1, "offset": 0, "filters": {uuid: dw.query.uuid}, "order_by": []})
  const action7 = store.commit('setState', {["state.item"]: action6.objects[0]})
}

const action8 = actions['func2'] = async function (store, event) {
  const state = store.state
  
        if (!!(!state.device_member_uuid) === (true)) {
          const action28message = ("请先添加设备后，再购买会员吧~")
          const action28title = ("提示")
          action28message && dw.alert(action28title, action28message)
          return {}
        }
        
  const action9 = await dw.app.run("order.vip_submit", {"product_uuid": state.item.uuid, "device_member_uuid": state.device_member_uuid})
  
        if ((action9.status) === ("error")) {
          const action10message = (action9.message || "操作错误！")
          const action10title = ("提示")
          action10message && dw.alert(action10title, action10message)
          return {}
        }
        
  let message = ("操作成功")
  const action36 = message
  const action37 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  const action12 = dw.app.goToPappUrl("payment", {"uuid": action9.order.uuid}, {redirectTo: false})
}

const action13 = actions['func3'] = async function (store, event) {
  const state = store.state
  const action16 = await dw.app.run("member.get_create_member", {})
  let member = (action16.object)
  const action17 = member
  const action15 = await dw.app.run("device_member.list", {"limit": 100, "offset": 0, "filters": {/**/  data__member_uuid: member.uuid,/**/  data__auth: "1",/**/}, "order_by": []})
  let options = (action15.objects.map(x=>({label: x.data.device_id, value: x.uuid})))
  const action23 = options
  const action18 = store.commit('setState', {["state.device_members"]: options})
  if (options.length) {
    const action27 = store.commit('setState', {["state.device_member_uuid"]: options[0].value})
  }
}

const action32 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action33 = modalInstance = (event.data)
  const action34 = console.log('[getModalInstance#action34] 打印(modalInstance)', modalInstance)
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
      "use strict";

var actions = {};

var modalInstance = null;
var action31 = modalInstance;
var action29 = actions['computed1'] = function (event, state) {
  return { /**/"0": "普通用户", /**/"1": "标准会员", /**/"2": "高级会员", /**/"3": "尊享会员" }[state.vip_type];
};
// COMPUTED_ACTION_META:computed1 {"deps":["vip_type"]}

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdw3v1: {
  fontSize: pm(16),
  overflow: "hidden",
  lineHeight: pm(20),
},
xdw3v2: {
  color: "#FF5700",
  fontSize: pm(16),
  marginTop: pm(5),
  fontWeight: "bold",
  lineHeight: pm(24),
},
xdw3v3: {
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  flexDirection: "column",
  paddingBottom: 0,
},
xdw3v4: {},
xdw3v5: {
  width: pm(22),
  height: pm(22),
  alignItems: "center",
  marginLeft: "auto",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "rgba(255, 218, 103, 1)",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw3v6: {
  width: pm(300),
  alignItems: "center",
  marginLeft: pm(10),
  borderBottomWidth: pm(0.5),
  borderBottomColor: "#e6e6e6",
  flexDirection: "row",
  paddingBottom: pm(5),
  justifyContent: "center",
},
xdw3v7: {
  alignItems: "center",
  flexDirection: "row",
},
xdw3v8: {
  color: "#6e6d6d",
  fontSize: pm(10),
  lineHeight: pm(16),
},
xdw3v9: {
  paddingTop: pm(5),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
},
xdw3va: {
  width: pm(320),
  height: pm(8),
  marginTop: pm(10),
  flexDirection: "column",
  backgroundColor: "#f8f8f8",
},
xdw3vb: {
  width: pm(320),
  height: pm(8),
  marginBottom: pm(10),
  flexDirection: "column",
  backgroundColor: "#f8f8f8",
},
xdw3vc: {
  fontSize: pm(12),
  fontWeight: "bold",
  lineHeight: pm(24),
},
xdw3vd: {
  width: pm(300),
  fontSize: pm(12),
},
xdw3ve: {
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
},
xdw3vf: {
  width: "100%",
  flexGrow: 1,
  overflow: "scroll",
  flexBasis: "0%",
  flexShrink: 1,
},
xdw3vg: {
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw3vh: {
  color: "#FF5700",
  fontSize: pm(16),
  fontWeight: "bold",
  lineHeight: pm(24),
},
xdw3vi: {
  alignItems: "center",
  marginLeft: pm(10),
  flexDirection: "row",
  justifyContent: "flex-start",
},
xdw3vj: {
  width: pm(100),
  height: pm(28),
  alignItems: "center",
  marginLeft: "auto",
  marginRight: pm(10),
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "rgba(255, 218, 103, 1)",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw3vk: {
  left: 0,
  width: pm(320),
  bottom: 0,
  height: pm(45),
  position: "absolute",
  borderTopWidth: pm(0.5),
  borderTopColor: "#e7e7e7",
  alignItems: "center",
  flexDirection: "row",
}
});
const slide = {"type":"263724","key":"c2637241","slug":null,"randomid":"id_66a247ba6746aff5b68986ff","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Text13":{"ctx_map":{"text":"这是一个文本组件"}},"Text14":{"ctx_map":{"text":"这是一个文本组件","numberOfLines":1}},"Text15":{"ctx_map":{"text":"费用: ","numberOfLines":1}},"Text16":{"ctx_map":{"text":"立即购买","numberOfLines":1}},"Text17":{"ctx_map":{"text":"会员权益","numberOfLines":1}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"SvgImage1":{"ctx_map":{"src":"u/dev064/2023/11/21/zuE59SBvv2x6EdtMvUUAV3/927676.svg","color":"#000000","width":15,"height":15,"SvgImageManage":"SvgImageManage"}},"ComNavBar1":{"ctx_map":{"theme":"default","title":"会员结算","headerBackgroundColor":"#ffffff","statusBarBackgroundColor":"#ffffff"}},"DwappCloud2":{"ctx_map":{"label":"选择设备","range":[{"label":"上午","value":"am"},{"label":"下午","value":"pm"}],"value":"am","labelStyle":null,"valueStyle":null,"pickerStyle":null,"placeholder":"请选择","containerStyle":null,"labelTextStyle":null,"valueInputStyle":null}},"DwappCloud3":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"showScrollbar":true,"extraStyleKeys":[]}},"DisplayPrice1":{"ctx_map":{"value":100,"format":"cnyint"}},"DisplayPrice2":{"ctx_map":{"value":100,"format":"cnyint"}},"DisplayRichtext1":{"ctx_map":{"value":"<p>这是富文本</p>"}}}};
slide.components.DwappCloud2.ctx_map.labelStyle = {
  width: pm(80),
  paddingTop: pm(4),
  flexDirection: "column",
  paddingBottom: pm(4),
};
slide.components.DwappCloud2.ctx_map.valueStyle = {
  flexGrow: 1,
  flexBasis: "0%",
  flexShrink: 1,
  paddingTop: pm(4),
  flexDirection: "row",
  paddingBottom: pm(4),
  justifyContent: "flex-end",
};
slide.components.DwappCloud2.ctx_map.pickerStyle = {
  flexGrow: 1,
  flexBasis: "0%",
  alignItems: "center",
  flexShrink: 1,
  flexDirection: "row",
  justifyContent: "flex-start",
};
slide.components.DwappCloud2.ctx_map.containerStyle = {
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
};
slide.components.DwappCloud2.ctx_map.labelTextStyle = {
  fontSize: pm(12),
  lineHeight: pm(24),
  flexDirection: "column",
};
slide.components.DwappCloud2.ctx_map.valueInputStyle = {
  fontSize: pm(12),
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
const pageGroupSlug = 'app_tongzhua-vipcheckout';

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
      <ComNavBar title={ "会员结算" } theme={ "default" } statusBarBackgroundColor={ "#ffffff" } headerBackgroundColor={ "#ffffff" }></ComNavBar>
{!!(!!state.item) /* ViewIf1 */ && (<><XbenchcScrollView /* ScrollView1 */ style={styles.xdw3vf} scrollX={ false } scrollY={ true } showScrollbar={ true } ><View /* View3 */   style={styles.xdw3v7}><View /* View5 */   style={styles.xdw3v6}><View /* View1 */   style={styles.xdw3v3}><Text /* Text13 */ style={styles.xdw3v1} >{state.item.data.name}</Text>
<Text style={styles.xdw3v2} numberOfLines={1}>{dwtools.priceformat(state.item.data.price, slide.components.DisplayPrice1.ctx_map.format)}</Text></View>
<View /* View2 */   style={styles.xdw3v5}><Image /* SvgImage1 */ style={[ styles.xdw3v4, { width: pm(15), height: pm(15) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev064/2023/11/21/zuE59SBvv2x6EdtMvUUAV3/927676.svg"), width: pm(15), height: pm(15) }} /></View></View></View>
<View /* View4 */   style={styles.xdw3v9}><Text /* Text14 */ style={styles.xdw3v8} numberOfLines={1}>{`有效期：自购买之日起${state.item.data.expire_days}天`}</Text></View>
<View /* View7 */   style={styles.xdw3va}></View>
<Xbenchc182135 /* DwappCloud2 */ label={ slide.components.DwappCloud2.ctx_map.label } range={ state.device_members } value={ state.device_member_uuid } eventData={ slide.components.DwappCloud2.ctx_map.eventData } eventData2={ slide.components.DwappCloud2.ctx_map.eventData2 } labelStyle={ slide.components.DwappCloud2.ctx_map.labelStyle } valueStyle={ slide.components.DwappCloud2.ctx_map.valueStyle } pickerStyle={ slide.components.DwappCloud2.ctx_map.pickerStyle } placeholder={ slide.components.DwappCloud2.ctx_map.placeholder } containerStyle={ slide.components.DwappCloud2.ctx_map.containerStyle } labelTextStyle={ slide.components.DwappCloud2.ctx_map.labelTextStyle } valueInputStyle={ slide.components.DwappCloud2.ctx_map.valueInputStyle }  onChange={getEvent('DwappCloud2:input::device_member_uuid', {}, bagForKeyValue, bagForIndex)}></Xbenchc182135>
<View /* View11 */   style={styles.xdw3vb}></View>
<View /* View6 */   style={styles.xdw3ve}><Text /* Text17 */ style={styles.xdw3vc} numberOfLines={1}>{slide.components.Text17.ctx_map.text}</Text>
<DisplayRichtext style={styles.xdw3vd} contentWidth={pm(300)} fontSize={pm(12)} value={ state.item.data.description } disablePreviewImage={ undefined }  /></View></XbenchcScrollView>
<View /* View8 */   style={styles.xdw3vk}><View /* View10 */   style={styles.xdw3vi}><Text /* Text15 */ style={styles.xdw3vg} numberOfLines={1}>{slide.components.Text15.ctx_map.text}</Text>
<Text style={styles.xdw3vh} numberOfLines={1}>{dwtools.priceformat(state.item.data.price, slide.components.DisplayPrice2.ctx_map.format)}</Text></View>
<XbenchcView /* View9 */   viewStyle={styles.xdw3vj} onClick={getEvent('View9:onClick:func2:', {}, bagForKeyValue, bagForIndex)}><Text /* Text16 */ style={styles.xdw3vc} numberOfLines={1}>{slide.components.Text16.ctx_map.text}</Text></XbenchcView></View>
<Xbenchc275104 /* DwappCloud3 */ valueStyle={ slide.components.DwappCloud3.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud3.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud3.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud3:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104></>)}
    </ErrorBoundary>
  )
}
