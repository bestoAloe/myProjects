
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc168612 from '../components/Xbenchc168612'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcInput from '../../xbench/xbenchc/components/XbenchcInput'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import ViewForItem from '../../xbench/components/ViewForItem'
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
const action39 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action6 = state.device_member = (null)
  const action9 = state.mobile = ("")
  const action19 = state.members = ([])
  const action21 = state.show_res = (false)
  const action37 = state.platform = ('dwapp')
  return state
}

const action7 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action38 = store.commit('setState', {["state.platform"]: dw.platform})
  const action8 = await store.dispatch("func1", {})
}

const action2 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action3 = await (async (store, event) => {
const key = "share_device/currentItem"
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

const action10 = actions['func2'] = function (store, event) {
  const state = store.state
  const action11 = store.commit('setState', {["state.mobile"]: event.data.detail.value, ["state.show_res"]: false})
}

const action12 = actions['func3'] = async function (store, event) {
  const state = store.state
  const action18 = (() => {
    if (!(v => v && typeof v === 'string' && /^1\d{10}$/.test(v))(state.mobile)) return "请输入正确的手机号！" // mobile
  })()
  if (action18) return dw.alert("提示" || '提示', action18)
  const action15 = await dw.app.run("auto_group_member.list", {"aggs": {}, "limit": 1000, "offset": 0, "filters": {data__mobile: state.mobile}, "order_by": []})
  const action20 = store.commit('setState', {["state.members"]: action15.objects, ["state.show_res"]: true})
}

const action16 = actions['func4'] = function (store, event) {
  const state = store.state
  const action17 = store.commit('setState', {["state.mobile"]: ""})
}

const action24 = actions['func5'] = async function (store, event) {
  const state = store.state
  const action26 = await dw.navigateBack({delta: 1})
}

const action27 = actions['func6'] = async function (store, event) {
  const state = store.state
  const action28 = await dw.showLoading({
    title: "",
    mask: false
  })
  const action35 = console.log('[func6#action35] event.context.eventData.uuid', event.context.eventData.uuid)
  const action29 = await dw.app.run("device_member.share", {"member_uuid": event.context.eventData.uuid, "device_member_uuid": state.device_member.uuid})
  const action36 = console.log('[func6#action36] STEP', )
  const action30 = await dw.hideLoading()
  
        if ((action29.status) === ("error")) {
          const action31message = (action29.message || "操作错误！")
          const action31title = ("提示")
          action31message && dw.alert(action31title, action31message)
          return {}
        }
        
  let message = ("共享成功")
  const action44 = message
  const action45 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  await new Promise((resolve, reject) => setTimeout(resolve, 500))
  const action33 = await dw.navigateBack({delta: 1})
}

const action40 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action41 = modalInstance = (event.data)
  const action42 = console.log('[getModalInstance#action42] 打印(modalInstance)', modalInstance)
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
xdw1sy: {
  width: pm(15),
  height: pm(15),
  marginRight: pm(9),
},
xdw1sz: {
  color: "#181818",
  width: pm(200),
  height: pm(18),
  fontSize: pm(12),
  borderTopWidth: pm(0),
  borderTopColor: "#ddd",
  borderLeftWidth: pm(0),
  borderLeftColor: "#ddd",
  lineHeight: pm(17),
  paddingTop: pm(1),
  borderRightWidth: pm(0),
  borderRightColor: "#ddd",
  paddingLeft: pm(4),
  borderBottomWidth: pm(0),
  borderBottomColor: "#ddd",
  paddingRight: pm(4),
  paddingBottom: pm(1),
  backgroundColor: "#F8F8F8",
},
xdw1t0: {
  width: pm(15),
  height: pm(15),
},
xdw1t1: {
  marginLeft: "auto",
  flexDirection: "column",
},
xdw1t2: {
  width: pm(265),
  marginTop: pm(6),
  alignItems: "center",
  marginLeft: pm(10),
  paddingTop: pm(6),
  marginRight: pm(9),
  paddingLeft: pm(9),
  marginBottom: pm(6),
  paddingRight: pm(9),
  flexDirection: "row",
  paddingBottom: pm(6),
  backgroundColor: "#F8F8F8",
  borderTopLeftRadius: pm(15),
  borderTopRightRadius: pm(15),
  borderBottomLeftRadius: pm(15),
  borderBottomRightRadius: pm(15),
},
xdw1t3: {
  color: "#181818",
  fontSize: pm(13),
  lineHeight: pm(18),
},
xdw1t4: {
  flexDirection: "column",
},
xdw1t5: {
  width: pm(320),
  height: pm(41),
  alignItems: "center",
  flexDirection: "row",
  backgroundColor: "#ffffff",
},
xdw1t6: {
  width: pm(15),
  height: pm(15),
  marginRight: pm(7),
},
xdw1t7: {
  color: "#AAAAAA",
  fontSize: pm(12),
  lineHeight: pm(17),
  marginRight: pm(7),
},
xdw1t8: {
  color: "#181818",
  fontSize: pm(12),
  lineHeight: pm(17),
},
xdw1t9: {
  width: pm(320),
  paddingTop: pm(14),
  paddingLeft: pm(21),
  paddingRight: pm(21),
  flexDirection: "row",
  paddingBottom: pm(14),
  backgroundColor: "#ffffff",
},
xdw1ta: {
  flexGrow: 1,
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
},
xdw1tb: {
  width: pm(29),
  height: pm(29),
  marginRight: pm(7),
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw1tc: {
  color: "#000000",
  fontSize: pm(12),
  lineHeight: pm(17),
},
xdw1td: {
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw1te: {
  width: pm(66),
  height: pm(26),
  alignItems: "center",
  marginLeft: "auto",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#FFD355",
  borderTopLeftRadius: pm(13),
  borderTopRightRadius: pm(13),
  borderBottomLeftRadius: pm(13),
  borderBottomRightRadius: pm(13),
},
xdw1tf: {
  alignItems: "center",
  paddingTop: pm(7),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(7),
},
xdw1tg: {
  width: pm(320),
  height: pm(41),
  flexDirection: "column",
  backgroundColor: "#ffffff",
},
xdw1th: {
  flexGrow: 1,
  flexDirection: "column",
  backgroundColor: "rgb(248, 248, 248)",
}
});
const slide = {"type":"171826","key":"c1718261","slug":null,"randomid":"id_ecaa01e1e49a79bfef3f1a4f","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":"取消"}},"Text2":{"ctx_map":{"text":"点击搜索"}},"Text3":{"ctx_map":{"text":"点击搜索"}},"Text4":{"ctx_map":{"text":"该用户不存在"}},"Text5":{"ctx_map":{"text":"这是一个文本组件"}},"Text6":{"ctx_map":{"text":"邀请"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,30,30","src":"u/dev065/2023/09/11/b2m98LG2N7xWpYKWiNsgFN/编组3x.png"}},"Image2":{"ctx_map":{"fop":"e,30,30","src":"u/dev064/2023/03/02/cxgNAZLXPDe4BMmvg2YiBk/企业微信截图_20230302142030.png"}},"Image3":{"ctx_map":{"fop":"e,30,30","src":"u/dev064/2023/03/02/3ekKaMJeaCkhgfnhKZu7CR/SketchPngc59ca8c5c446b4ffacbb9103d9b5205aca5499c62f58c666bd5d9a8f742f1e16.png"}},"Image4":{"ctx_map":{"fop":"e,60,60","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"View10":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewIf5":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"DwappCloud1":{"ctx_map":{"color1":""}},"DwappCloud2":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"NativeInput1":{"ctx_map":{"type":"text"}}}};
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
const pageGroupSlug = 'app_tongzhua-share_search';

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
      <Xbenchc168612 /* DwappCloud1 */ backgroundColor={ slide.components.DwappCloud1.ctx_map.color1 } ></Xbenchc168612>
<View /* View3 */   style={styles.xdw1th}><View /* View1 */   style={styles.xdw1t5}><View /* View2 */   style={styles.xdw1t2}><XbenchcImage /* Image1 */ style={styles.xdw1sy} source={dwtools.qiniu(slide.components.Image1.ctx_map.src, slide.components.Image1.ctx_map.fop)}  />
<XbenchcInput /* NativeInput1 */ style={styles.xdw1sz} value={state.mobile} type={slide.components.NativeInput1.ctx_map.type}  onChange={getEvent('NativeInput1:onChange:func2:', {}, bagForKeyValue, bagForIndex)} />
{!!(state.mobile) /* ViewIf2 */ && (<><XbenchcView /* View4 */   viewStyle={styles.xdw1t1} onClick={getEvent('View4:onClick:func4:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image2 */ style={styles.xdw1t0} source={dwtools.qiniu(slide.components.Image2.ctx_map.src, slide.components.Image2.ctx_map.fop)}  /></XbenchcView></>)}</View>
<XbenchcView /* View10 */   viewStyle={styles.xdw1t4} onClick={getEvent('View10:onClick:func5:', {}, bagForKeyValue, bagForIndex)}><Text /* Text1 */ style={styles.xdw1t3} >{slide.components.Text1.ctx_map.text}</Text></XbenchcView></View>
{!!(state.mobile && !state.show_res) /* ViewIf1 */ && (<><XbenchcView /* View5 */   viewStyle={styles.xdw1t9} onClick={getEvent('View5:onClick:func3:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image3 */ style={styles.xdw1t6} source={dwtools.qiniu(slide.components.Image3.ctx_map.src, slide.components.Image3.ctx_map.fop)}  />
<Text /* Text2 */ style={styles.xdw1t7} >{slide.components.Text2.ctx_map.text}</Text>
<Text /* Text3 */ style={styles.xdw1t8} >{state.mobile}</Text></XbenchcView></>)}
{!!(state.show_res) /* ViewIf4 */ && (<>{!!(!state.members.length) /* ViewIf3 */ && (<><View /* View6 */   style={styles.xdw1ta}><Text /* Text4 */ style={styles.xdw1t8} >{slide.components.Text4.ctx_map.text}</Text></View></>)}
{!!(state.members.length) /* ViewIf5 */ && (<><View /* View7 */   style={styles.xdw1tg}>{(state.members).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View8 */   style={styles.xdw1tf}><XbenchcImage /* Image4 */ style={styles.xdw1tb} source={dwtools.qiniu(bagForItem.data.avatar, slide.components.Image4.ctx_map.fop)}  />
<Text /* Text5 */ style={styles.xdw1tc} >{bagForItem.data.nickname}</Text>
<XbenchcView /* View9 */   viewStyle={styles.xdw1te} onClick={getEvent('View9:onClick:func6:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><Text /* Text6 */ style={styles.xdw1td} >{slide.components.Text6.ctx_map.text}</Text></XbenchcView></View></ViewForItem> })}</View></>)}</>)}
<Xbenchc275104 /* DwappCloud2 */ valueStyle={ slide.components.DwappCloud2.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud2.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud2.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud2:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104></View>
    </ErrorBoundary>
  )
}
