
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import ComNavBar from '../../xbench/components/ComNavBar'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcInput from '../../xbench/xbenchc/components/XbenchcInput'
import { Image } from 'expo-image'
import XbenchcPicker from '../../xbench/xbenchc/components/XbenchcPicker'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import ViewForItem from '../../xbench/components/ViewForItem'
import XbenchcScrollView from '../../xbench/xbenchc/components/XbenchcScrollView'

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
  const action24 = state.member = (null)
  const action25 = state.service_agency = (null)
  const action26 = state.limit = (10)
  const action27 = state.offset = (0)
  const action28 = state.reach_bottom = (false)
  const action29 = state.items = ([])
  const action30 = state.ready = (false)
  const action41 = state.filters = ({})
  const action42 = state.filters.data__device_id__icontains = ('')
  const action45 = state.filters.data__active_state = ('all')
  const action46 = state.filters.data__bind_state = ('all')
  return state
}

const action31 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action33 = await store.dispatch("func2", {})
  const action34 = await store.dispatch("func3", {})
  const action35 = store.commit('setState', {["state.ready"]: true})
}

const action3 = actions['func4'] = async function (store, event) {
  const state = store.state
  const action4 = store.commit('setState', {["state.offset"]: 0, ["state.reach_bottom"]: false})
  const action6 = await store.dispatch("func3", {})
}

const action7 = actions['func5'] = async function (store, event) {
  const state = store.state
  if (state.reach_bottom) {
    return event
  }
  const action11 = store.commit('setState', {["state.offset"]: state.offset + state.limit})
  const action12 = await store.dispatch("func3", {})
}

const action13 = actions['func3'] = async function (store, event) {
  const state = store.state
  const action14 = await dw.app.run("auto_group_device.list", {"limit": state.limit, "offset": state.offset, "filters": {/**/  ...state.filters,/**/  data__service_agency_uuid: state.service_agency.uuid,/**/  data__active_state: state.filters.data__active_state === 'all' ? undefined : state.filters.data__active_state,/**/  data__bind_state: state.filters.data__bind_state === 'all' ? undefined : state.filters.data__bind_state,/**/}, "order_by": []})
  if (state.offset === 0) {
    const action17 = store.commit('setState', {["state.items"]: action14.objects})
  } else {
    const action19 = store.commit('setState', {["state.items__uconcat"]: {field: 'id', list: action14.objects}})
  }
  if (action14.objects.length < state.limit) {
    const action22 = store.commit('setState', {["state.reach_bottom"]: true})
  }
  const action53 = console.log('[func3#action53] 打印设备：', state.items)
}

const action36 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action37 = await dw.app.run("service_agency.get", {})
  
        if ((action37.status) === ("error")) {
          const action38message = (action37.message || "操作错误！")
          const action38title = ("提示")
          action38message && dw.alert(action38title, action38message)
          return {}
        }
        
  const action39 = store.commit('setState', {["state.member"]: action37.member, ["state.service_agency"]: action37.service_agency})
}

const action43 = actions['func6'] = function (store, event) {
  const state = store.state
  const action44 = store.commit('setState', {["state.filters.data__device_id__icontains"]: event.data.detail.value})
}

const action47 = actions['func7'] = async function (store, event) {
  const state = store.state
  const action48 = store.commit('setState', {["state.filters.data__active_state"]: [/**/  "all",/**/  "1",/**/  "0"/**/][event.data.detail.value]})
  const action49 = await store.dispatch("func4", {})
}

const action50 = actions['func8'] = async function (store, event) {
  const state = store.state
  const action51 = store.commit('setState', {["state.filters.data__bind_state"]: [/**/  "all",/**/  "1",/**/  "0"/**/][event.data.detail.value]})
  const action52 = await store.dispatch("func4", {})
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
xdw36o: {
  width: pm(320),
  height: pm(1),
  flexDirection: "column",
  backgroundColor: "#efefef",
},
xdw36p: {
  width: pm(260),
  height: pm(32),
  fontSize: pm(12),
  borderTopWidth: pm(1),
  borderTopColor: "#ddd",
  borderLeftWidth: pm(1),
  borderLeftColor: "#ddd",
  paddingTop: pm(4),
  borderRightWidth: pm(1),
  borderRightColor: "#ddd",
  paddingLeft: pm(4),
  borderBottomWidth: pm(1),
  borderBottomColor: "#ddd",
  paddingRight: pm(4),
  paddingBottom: pm(4),
  borderTopLeftRadius: pm(20),
  borderTopRightRadius: pm(20),
  borderBottomLeftRadius: pm(20),
  borderBottomRightRadius: pm(20),
},
xdw36q: {
  lineHeight: pm(24),
  marginLeft: "auto",
},
xdw36r: {
  alignItems: "center",
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
  backgroundColor: "#f8f8f8",
},
xdw36s: {
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw36t: {},
xdw36u: {
  alignItems: "center",
  flexDirection: "row",
},
xdw36v: {
  width: "50%",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
},
xdw36w: {
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
  backgroundColor: "#f8f8f8",
},
xdw36x: {
  width: pm(50),
  height: pm(50),
  borderTopLeftRadius: pm(5),
  borderTopRightRadius: pm(5),
  borderBottomLeftRadius: pm(5),
  borderBottomRightRadius: pm(5),
},
xdw36y: {
  fontSize: pm(11),
  lineHeight: pm(15),
},
xdw36z: {
  flexDirection: "row",
},
xdw370: {
  width: pm(255),
  paddingLeft: pm(10),
  flexDirection: "column",
},
xdw371: {
  borderTopWidth: pm(0),
  borderTopColor: "#000",
  paddingTop: pm(10),
  borderRightWidth: pm(0),
  borderRightColor: "#000",
  paddingLeft: pm(10),
  borderBottomWidth: pm(0),
  borderBottomColor: "#000",
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
},
xdw372: {
  width: pm(300),
  height: pm(1),
  marginLeft: pm(10),
  flexDirection: "column",
  backgroundColor: "#efefef",
},
xdw373: {
  width: pm(146),
  height: pm(93),
},
xdw375: {
  color: "#AAAAAA",
  fontSize: pm(12),
  marginTop: pm(17),
  lineHeight: pm(17),
},
xdw376: {
  marginTop: pm(212),
  alignItems: "center",
  flexDirection: "column",
},
xdw377: {
  width: "100%",
  height: "100%",
  flexGrow: 1,
  overflow: "scroll",
  flexBasis: "0%",
  flexShrink: 1,
},
xdw378: {
  width: pm(320),
  flexDirection: "column",
}
});
const slide = {"type":"176711","key":"c1767111","slug":null,"randomid":"id_45dec044fbc1b6997186c96b","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,100,100","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image2":{"ctx_map":{"fop":"e,1460,930","src":"u/dev065/2023/03/02/sjdPJMDYXdSxcFkXNX7KvX/JIKUVAZX81K8VLRAWUC.png","buildToLocal":true}},"Text12":{"ctx_map":{"text":"搜索"}},"Text13":{"ctx_map":{"text":"这是一个文本组件"}},"Text14":{"ctx_map":{"text":"激活状态: "}},"Text15":{"ctx_map":{"text":"这是一个文本组件"}},"Text17":{"ctx_map":{"text":"出场日期: "}},"Text18":{"ctx_map":{"text":"这是一个文本组件"}},"Text19":{"ctx_map":{"text":"绑定状态: "}},"Text20":{"ctx_map":{"text":"激活状态: "}},"Text21":{"ctx_map":{"text":"激活状态: "}},"Text22":{"ctx_map":{"text":"暂无任何数据~"}},"Text23":{"ctx_map":{"text":"激活状态: "}},"Text24":{"ctx_map":{"text":"绑定状态: "}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"Picker2":{"ctx_map":{"mode":"selector","range":[{"label":"上午","value":"am"},{"label":"下午","value":"pm"}],"value":0}},"Picker3":{"ctx_map":{"mode":"selector","range":[{"label":"上午","value":"am"},{"label":"下午","value":"pm"}],"value":0}},"ViewIf1":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"SvgImage1":{"ctx_map":{"src":"u/dev064/2023/03/23/BZsBo3S7YxXjbj6XntxkZ2/1029274.svg","color":"#918e8e","width":13,"height":13,"SvgImageManage":"SvgImageManage"}},"SvgImage2":{"ctx_map":{"src":"u/dev064/2023/03/23/BZsBo3S7YxXjbj6XntxkZ2/1029274.svg","color":"#918e8e","width":13,"height":13,"SvgImageManage":"SvgImageManage"}},"ComNavBar1":{"ctx_map":{"theme":"default","title":"设备列表","headerBackgroundColor":"#ffffff","statusBarBackgroundColor":"#ffffff"}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[]}},"DisplayDate1":{"ctx_map":{"value":"2022-09-10T11:22:33.444","format":"datetime","display1970":"/"}},"NativeInput1":{"ctx_map":{"type":"text","placeholder":"请输入设备编号搜索"}}}};

const pageGroupSlug = 'app_tongzhua-pshop_device_list';

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
      <View /* View16 */   style={styles.xdw378}><ComNavBar title={ "设备列表" } theme={ "default" } statusBarBackgroundColor={ "#ffffff" } headerBackgroundColor={ "#ffffff" }></ComNavBar>
<View /* View2 */   style={styles.xdw36o}></View>
<View /* View1 */   style={styles.xdw36r}><XbenchcInput /* NativeInput1 */ style={styles.xdw36p} placeholder={slide.components.NativeInput1.ctx_map.placeholder} type={slide.components.NativeInput1.ctx_map.type}  onChange={getEvent('NativeInput1:onChange:func6:', {}, bagForKeyValue, bagForIndex)} />
<Text /* Text12 */ style={styles.xdw36q} >{slide.components.Text12.ctx_map.text}</Text></View>
<View /* View10 */   style={styles.xdw36w}><View /* View11 */   style={styles.xdw36v}><XbenchcPicker /* Picker2 */ value={ slide.components.Picker2.ctx_map.value } mode={ slide.components.Picker2.ctx_map.mode } range={ [
  {label: '全部', value: 'all'},
  {label: '已激活', value: '1'},
  {label: '未激活', value: '0'},
] }  onChange={getEvent('Picker2:input:func7:', {}, bagForKeyValue, bagForIndex)}><View /* View12 */   style={styles.xdw36u}><Text /* Text20 */ style={styles.xdw36s} >{slide.components.Text20.ctx_map.text}</Text>
<Text /* Text21 */ style={styles.xdw36s} >{state.filters.data__active_state === 'all' ? '全部' : (state.filters.data__active_state === '1' ? '已激活' : "未激活")}</Text>
<Image /* SvgImage1 */ style={[ styles.xdw36t, { width: pm(13), height: pm(13) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev064/2023/03/23/BZsBo3S7YxXjbj6XntxkZ2/1029274.svg"), width: pm(13), height: pm(13) }} /></View></XbenchcPicker></View>
<View /* View14 */   style={styles.xdw36v}><XbenchcPicker /* Picker3 */ value={ slide.components.Picker3.ctx_map.value } mode={ slide.components.Picker3.ctx_map.mode } range={ [
  {label: '全部', value: 'all'},
  {label: '已绑定', value: '1'},
  {label: '未绑定', value: '0'},
] }  onChange={getEvent('Picker3:input:func8:', {}, bagForKeyValue, bagForIndex)}><View /* View15 */   style={styles.xdw36u}><Text /* Text24 */ style={styles.xdw36s} >{slide.components.Text24.ctx_map.text}</Text>
<Text /* Text23 */ style={styles.xdw36s} >{state.filters.data__bind_state === 'all' ? '全部' : (state.filters.data__bind_state === '1' ? '已绑定' : "未绑定")}</Text>
<Image /* SvgImage2 */ style={[ styles.xdw36t, { width: pm(13), height: pm(13) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev064/2023/03/23/BZsBo3S7YxXjbj6XntxkZ2/1029274.svg"), width: pm(13), height: pm(13) }} /></View></XbenchcPicker></View></View>
<View /* View3 */   style={styles.xdw36o}></View>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw377} scrollX={ false } scrollY={ true }  onScrollToLower={getEvent('ScrollView1:onScrollToLower:onScrollToLower:', {}, bagForKeyValue, bagForIndex)}>{(state.items).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View4 */   style={styles.xdw371}><XbenchcImage /* Image1 */ style={styles.xdw36x} source={dwtools.qiniu(bagForItem.data.device_model_uuid__toone.data.image, slide.components.Image1.ctx_map.fop)}  />
<View /* View5 */   style={styles.xdw370}><Text /* Text13 */ style={styles.xdw36y} >{bagForItem.data.device_id}</Text>
<View /* View6 */   style={styles.xdw36z}><Text /* Text14 */ style={styles.xdw36y} >{slide.components.Text14.ctx_map.text}</Text>
<Text /* Text15 */ style={styles.xdw36y} >{bagForItem.data._active_state_display}</Text></View>
<View /* View8 */   style={styles.xdw36z}><Text /* Text19 */ style={styles.xdw36y} >{slide.components.Text19.ctx_map.text}</Text>
<Text /* Text18 */ style={styles.xdw36y} >{bagForItem.data._bind_state_display}</Text></View>
<View /* View7 */   style={styles.xdw36z}><Text /* Text17 */ style={styles.xdw36y} >{slide.components.Text17.ctx_map.text}</Text>
<Text style={styles.xdw36y} numberOfLines={1}>{dwtools.dateformat(bagForItem.data.create_date, slide.components.DisplayDate1.ctx_map.format)}</Text></View></View></View>
<View /* View9 */   style={styles.xdw372}></View></ViewForItem> })}
{!!(!state.items.length) /* ViewIf1 */ && (<><View /* View13 */   style={styles.xdw376}><XbenchcImage /* Image2 */ style={styles.xdw373} source={dwtools.getLocalResource('xdw374_lthar3cc')}  />
<Text /* Text22 */ style={styles.xdw375} >{slide.components.Text22.ctx_map.text}</Text></View></>)}</XbenchcScrollView></View>
    </ErrorBoundary>
  )
}
