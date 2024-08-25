
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import ComNavBar from '../../xbench/components/ComNavBar'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import { Image } from 'expo-image'

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
  const action30 = state.member = (null)
  const action31 = state.service_agency = (null)
  return state
}

const action35 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action38 = (dw.platform === 'dwapp') ? dw.app.wxLogin() : (dw.platform === 'rnapp') ? await dw.app.wxLogin() : 
        (D.siteuser && D.siteuser.id)
          ? true
          : app.wxGotoLogin({}, '/account/login/?next=' + encodeURIComponent(location.href))
        
  if (!action38) return
  const action36 = await store.dispatch("func2", {})
}

const action2 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action5Params = {
    onlyyFromCamera: true,
    scaType: "qrCode"
  }
  action5Params.onlyFromCamera = !!true
  const action5 = await dw.asPromiseNoReject(dw.wx.scanCode, action5Params)
  const action27 = console.log('[func1#action27] 打印(action5)的返回值', action5)
  let code = (action5.result)
  const action39 = code
  if (code === undefined) {
    const action56 = console.log('[func1#action56] ', "扫码中断")
    return "扫码中断"
  }
  const action40 = await dw.app.run("auto_group_device.list", {"aggs": {}, "limit": 1, "offset": 0, "filters": {data__device_id: code}, "order_by": []})
  
        if (!!(!action40.objects.length) === (true)) {
          const action41message = ("当前扫码内容未能匹配任何设备")
          const action41title = ("提示")
          action41message && dw.alert(action41title, action41message)
          return {}
        }
        
  let device = (action40.objects[0])
  const action43 = device
  
        if (!!(device.data.service_agency_uuid) === (true)) {
          const action49message = (`当前设备已绑定服务商:[${device.data.service_agency_uuid__toone.data.name}],\n绑定时间:${device.data.bind_sa_datetime.slice(0, 16).replace("T", " ")},\n操作人员[${device.data.bind_sa_member_uuid__toone.data.nickname}]`)
          const action49title = ("绑定失败")
          action49message && dw.alert(action49title, action49message)
          return {}
        }
        
  const action47response = await dw.showModal({
        title: "提示",
        content: `识别到设备ID[${device.data.device_id}], 是否确认绑定?`,
        confirmText: "确定",
        confirmColor: "#576b95",
        showCancel: true,
        cancelText: "取消",
        cancelColor: "#000000"
      })
  const action47 = action47response && action47response.confirm
  
        if (!!(!action47) === (true)) {
          const action48message = ("")
          const action48title = ("提示")
          action48message && dw.alert(action48title, action48message)
          return {}
        }
        
  const action42 = await dw.app.run("service_agency.bind_device", {"device_uuid": device.uuid, "service_agency_uuid": state.service_agency.uuid})
  
        if ((action42.status) === ("error")) {
          const action44message = (action42.message || "操作错误！")
          const action44title = ("提示")
          action44message && dw.alert(action44title, action44message)
          return {}
        }
        
  const action45 = await dw.showToast({"icon": "success", "mask": false, "image": "", "title": "绑定成功", "duration": 1500, "content": "绑定成功"})
  const action46 = await store.dispatch("func2", {})
}

const action28 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action29 = await dw.app.run("service_agency.get", {})
  
        if ((action29.status) === ("error")) {
          const action37message = (action29.message || "操作错误！")
          const action37title = ("提示")
          action37message && dw.alert(action37title, action37message)
          return {}
        }
        
  const action32 = store.commit('setState', {["state.member"]: action29.member, ["state.service_agency"]: action29.service_agency})
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
xdw2zj: {
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw2zk: {
  color: "#7b9eff",
  fontSize: pm(15),
  fontWeight: "bold",
  lineHeight: pm(24),
  marginLeft: pm(5),
  marginRight: pm(5),
},
xdw2zl: {
  marginTop: pm(32),
  flexDirection: "row",
  justifyContent: "center",
},
xdw2zm: {
  width: pm(320),
  height: pm(320),
},
xdw2zn: {
  width: pm(40),
  height: pm(50),
  marginTop: pm(10),
  marginLeft: pm(10),
  marginRight: pm(10),
  marginBottom: pm(10),
},
xdw2zo: {
  width: pm(70),
  flexDirection: "column",
},
xdw2zp: {
  fontSize: pm(10),
  marginTop: pm(10),
  fontWeight: "500",
  lineHeight: pm(24),
  marginLeft: 0,
  paddingTop: 0,
  marginRight: 0,
  paddingLeft: 0,
  marginBottom: pm(10),
  paddingRight: 0,
  paddingBottom: 0,
},
xdw2zq: {
  width: pm(220),
  flexDirection: "column",
},
xdw2zr: {
  marginTop: pm(20),
  marginLeft: pm(20),
  paddingTop: 0,
  marginRight: pm(20),
  paddingLeft: 0,
  marginBottom: pm(20),
  paddingRight: 0,
  flexDirection: "row",
  paddingBottom: 0,
  backgroundColor: "#f8f8f8",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw2zs: {
  flexDirection: "column",
},
xdw2zt: {
  flexGrow: 1,
  flexShrink: 1,
  flexDirection: "column",
},
xdw2zu: {
  marginRight: pm(10),
},
xdw2zv: {
  fontSize: pm(14),
  fontWeight: "500",
  lineHeight: pm(24),
},
xdw2zw: {
  width: pm(300),
  height: pm(38),
  alignItems: "center",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: pm(82),
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: "#ffd132",
  borderTopLeftRadius: pm(999),
  borderTopRightRadius: pm(999),
  borderBottomLeftRadius: pm(999),
  borderBottomRightRadius: pm(999),
}
});
const slide = {"type":"174961","key":"c1749611","slug":null,"randomid":"id_770e70e3307becbd463f68f7","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":"当前还可以绑定"}},"Text2":{"ctx_map":{"text":"台设备"}},"Text3":{"ctx_map":{"text":"999"}},"Text4":{"ctx_map":{"text":"点击下方按钮跳转至扫码页面，扫描设备二维码自动绑定设备到归属服务商账户。"}},"Text5":{"ctx_map":{"text":"扫码绑定"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{"className":"b-btn"}},"View9":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,640,640","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image2":{"ctx_map":{"fop":"d,400,500","src":"u/dev070/2023/03/11/mQzHSS48WSjn44PVWgoY8Q/ab25e108-0215-48af-b64c-eeaa77489230.png"}},"SvgImage1":{"ctx_map":{"src":"u/dev070/2023/03/11/eBACvifRksAir3kUuCdHoA/162869.svg","color":"#333333","width":20,"height":20,"SvgImageManage":"SvgImageManage"}},"ComNavBar1":{"ctx_map":{"theme":"default","title":"扫码入库","headerBackgroundColor":"#ffffff","statusBarBackgroundColor":"#ffffff"}}}};

const pageGroupSlug = 'app_tongzhua-pshop_stock_in';

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
      <ComNavBar title={ "扫码入库" } theme={ "default" } statusBarBackgroundColor={ "#ffffff" } headerBackgroundColor={ "#ffffff" }></ComNavBar>
<View /* View1 */   style={styles.xdw2zs}><View /* View9 */   style={styles.xdw2zt}><View /* View2 */   style={styles.xdw2zl}><Text /* Text1 */ style={styles.xdw2zj} >{slide.components.Text1.ctx_map.text}</Text>
<Text /* Text3 */ style={styles.xdw2zk} >{state.service_agency.data.can_bind_count}</Text>
<Text /* Text2 */ style={styles.xdw2zj} >{slide.components.Text2.ctx_map.text}</Text></View>
<View /* View3 */   style={styles.xdw2zs}><XbenchcImage /* Image1 */ style={styles.xdw2zm} source={dwtools.qiniu("u/dev065/2023/02/23/SzXkv3YTf8phpRx7KAJmMj/6EVDB1UR_ET8G6JV2.png", slide.components.Image1.ctx_map.fop)}  />
<View /* View5 */   style={styles.xdw2zr}><View /* View7 */   style={styles.xdw2zo}><XbenchcImage /* Image2 */ style={styles.xdw2zn} source={dwtools.qiniu(slide.components.Image2.ctx_map.src, slide.components.Image2.ctx_map.fop)}  /></View>
<View /* View6 */   style={styles.xdw2zq}><Text /* Text4 */ style={styles.xdw2zp} >{slide.components.Text4.ctx_map.text}</Text></View></View></View></View>
<XbenchcView /* View8 */   viewStyle={[styles["b-btn"], styles.xdw2zw]} onClick={getEvent('View8:onClick:func1:', {}, bagForKeyValue, bagForIndex)}><Image /* SvgImage1 */ style={[ styles.xdw2zu, { width: pm(20), height: pm(20) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev070/2023/03/11/eBACvifRksAir3kUuCdHoA/162869.svg"), width: pm(20), height: pm(20) }} />
<Text /* Text5 */ style={styles.xdw2zv} >{slide.components.Text5.ctx_map.text}</Text></XbenchcView></View>
    </ErrorBoundary>
  )
}
