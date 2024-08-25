
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import ComNavBar from '../../xbench/components/ComNavBar'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import { Image } from 'expo-image'
import XbenchcPicker from '../../xbench/xbenchc/components/XbenchcPicker'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import Xbenchc168617 from '../components/Xbenchc168617'
import ViewForItem from '../../xbench/components/ViewForItem'
import XbenchcInput from '../../xbench/xbenchc/components/XbenchcInput'
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
  const action3 = state.formData = ({/**/  "code":"",/**/  "datetime":"1970-01-01T00:00:00.000000",/**/  "service_agency_uuid":null,/**/  "state":"intention",/**/  "remark":"",/**/  "pshop_contract_uuid":null,/**/  "quantity":0,/**/  "detail":[],/**/  "_resource_uri":"db.dataset.data?table_name=device_order"/**/})
  const action19 = state.member = (null)
  const action20 = state.service_agency = (null)
  const action27 = state.today = (null)
  const action39 = state.goodRange = ([])
  const action44 = state.goods = ([])
  return state
}

const action12 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action14now = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace('Z', '')
  const action14 = action14now.split('T')[0] + 'T00:00:00.000'
  const action13 = store.commit('setState', {["state.formData.datetime"]: action14.slice(0, 10), ["state.today"]: action14.slice(0, 10)})
  const action26 = await store.dispatch("func6", {})
  const action17 = await store.dispatch("func1", {})
  const action41 = await store.dispatch("func9", {})
}

const action2 = actions['func1'] = async function (store, event) {
  const state = store.state
  /* action7: 自动化生成订单序号 */
  const action9 = ((store, event) => {
function generateOrderNumber(prefix, orderCount, date) {
  const currentDate = date;
  const year = currentDate.getFullYear().toString();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const orderNumber = (orderCount + 1).toString().padStart(4, '0');
  return prefix + year + month + day + orderNumber;
}
return generateOrderNumber
})(store, event)
  let generateOrderNumber = (action9)
  const action10 = generateOrderNumber
  const action8 = await dw.app.run("device_order.list", {"limit": 0, "offset": 0, "filters": {/**/  data__datetime__gte: state.formData.datetime + "T00:00:00.000",/**/  data__datetime__lte: state.formData.datetime + "T23:59:59.999",/**/  data__service_agency_uuid: state.service_agency.uuid/**/}, "order_by": []})
  let count = (action8.meta.total_count)
  const action15 = count
  let code = (generateOrderNumber("ORDER", count, new Date(state.formData.datetime)))
  const action16 = code
  const action6 = store.commit('setState', {["state.formData"]: {/**/  ...state.formData,/**/  code: code,/**/}})
}

const action21 = actions['func6'] = async function (store, event) {
  const state = store.state
  const action22 = await dw.app.run("service_agency.get", {})
  
        if ((action22.status) === ("error")) {
          const action23message = (action22.message || "操作错误！")
          const action23title = ("提示")
          action23message && dw.alert(action23title, action23message)
          return {}
        }
        
  const action24 = store.commit('setState', {["state.member"]: action22.member, ["state.service_agency"]: action22.service_agency})
}

const action29 = actions['func7'] = function (store, event) {
  const state = store.state
  let key = (event.context.eventData)
  const action31 = key
  const action30 = store.commit('setState', {[`state.formData.${key}`]: event.data.detail.value})
}

const action32 = actions['func8'] = async function (store, event) {
  const state = store.state
  const action35 = console.log('[func8#action35] event.data.detail.value', event.data.detail.value)
  const action34 = store.commit('setState', {[`state.formData.datetime`]: event.data.detail.value})
  const action57 = await store.dispatch("func1", {})
}

const action36 = actions['func9'] = async function (store, event) {
  const state = store.state
  const action38 = await dw.app.run("device_model.list", {"limit": 1000, "offset": 0, "filters": {}, "order_by": []})
  const action40 = store.commit('setState', {["state.goods"]: action38.objects, ["state.goodRange"]: action38.objects.map(x=>({/**/  value: x.uuid,/**/  label: x.data.name/**/}))})
}

const action42 = actions['func10'] = function (store, event) {
  const state = store.state
  const action69 = console.log('[func10#action69] 打印event', event)
  let index = (event.data.detail.value)
  const action46 = index
  const action49 = console.log('[func10#action49] index', index)
  let product = (state.goods[index])
  const action48 = product
  /* action54: 判断当前是否已经有了这个产品 */
  const action56 = console.log('[func10#action56] product.uuid', product.uuid)
  
        if (!!(state.formData.detail.find(x=>x.product_uuid === product.uuid)) === (true)) {
          const action55message = ("当前产品已经添加，可编辑产品数量")
          const action55title = ("提示")
          action55message && dw.alert(action55title, action55message)
          return {}
        }
        
  const action43 = store.commit('setState', {["state.formData.detail"]: [/**/  ...state.formData.detail,/**/  {/**/    product_name: product.data.name,/**/    product_image: product.data.image,/**/    product_uuid: product.uuid,/**/    quantity: 1,/**/  }/**/]})
  const action68 = console.log('[func10#action68] [/**/  ...state.formData.detail,/**/  {/**/    product_name: product.data.name,/**/    product_image: product.data.image,/**/    product_uuid: product.uuid,/**/    quantity: 1,/**/  }/**/]', [/**/  ...state.formData.detail,/**/  {/**/    product_name: product.data.name,/**/    product_image: product.data.image,/**/    product_uuid: product.uuid,/**/    quantity: 1,/**/  }/**/])
}

const action50 = actions['func11'] = async function (store, event) {
  const state = store.state
  const action53 = console.log('[func11#action53] event.data', event.data)
  let index = (event.context.eventData)
  const action52 = index
  const action51 = store.commit('setState', {[`state.formData.detail[${index}].quantity`]: event.data})
}

const action58 = actions['func12'] = async function (store, event) {
  const state = store.state
  
        if (!!(!state.formData.detail.length) === (true)) {
          const action61message = ("没有添加任何产品")
          const action61title = ("提示")
          action61message && dw.alert(action61title, action61message)
          return {}
        }
        
  
        if (!!(state.formData.detail.find(x=>x.quantity <= 0) || state.formData.detail.find(x=>!Number.isInteger(x.quantity))) === (true)) {
          const action60message = ("产品数量需大于0且整数")
          const action60title = ("提示")
          action60message && dw.alert(action60title, action60message)
          return {}
        }
        
  
        if (!!(state.formData.detail.find(x => isNaN(x.quantity))/**//**/) === (true)) {
          const action77message = ("产品数量非数字!")
          const action77title = ("提示")
          action77message && dw.alert(action77title, action77message)
          return {}
        }
        
  const action66 = await dw.showLoading({
    title: "",
    mask: false
  })
  const action59 = await dw.app.run("device_order.submit", {"detail": state.formData.detail, "remark": state.formData.remark || undefined, "datetime": state.formData.datetime})
  const action67 = await dw.showLoading({
    title: "",
    mask: false
  })
  
        if ((action59.status) === ("error")) {
          const action62message = (action59.message || "操作错误！")
          const action62title = ("提示")
          action62message && dw.alert(action62title, action62message)
          return {}
        }
        
  const action63 = await dw.showToast({"icon": "success", "mask": false, "image": "", "title": "提交成功", "duration": 1500, "content": "提交成功"})
  await new Promise((resolve, reject) => setTimeout(resolve, 300))
  const action65 = await dw.navigateBack({delta: 1})
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
xdw33m: {
  lineHeight: pm(24),
},
xdw33n: {
  fontSize: pm(12),
  lineHeight: pm(24),
  marginLeft: "auto",
},
xdw33o: {
  marginTop: pm(10),
  alignItems: "center",
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
  backgroundColor: "#ffffff",
},
xdw33p: {
  width: pm(310),
  height: pm(1),
  marginLeft: pm(10),
  flexDirection: "column",
  backgroundColor: "#f8f8f8",
},
xdw33q: {},
xdw33r: {
  alignItems: "center",
  flexDirection: "row",
},
xdw33s: {
  marginLeft: "auto",
  flexDirection: "column",
},
xdw33t: {
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
  justifyContent: "center",
  backgroundColor: "#ffffff",
},
xdw33u: {
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw33v: {
  alignItems: "center",
  marginLeft: "auto",
  flexDirection: "row",
},
xdw33w: {
  width: pm(50),
  height: pm(50),
  borderTopLeftRadius: pm(5),
  borderTopRightRadius: pm(5),
  borderBottomLeftRadius: pm(5),
  borderBottomRightRadius: pm(5),
},
xdw33x: {
  flexGrow: 1,
  alignItems: "flex-end",
  marginLeft: pm(10),
  flexDirection: "column",
},
xdw33y: {
  marginTop: pm(10),
  marginBottom: pm(10),
  flexDirection: "row",
},
xdw33z: {
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
  backgroundColor: "#ffffff",
},
xdw340: {
  width: pm(230),
  height: pm(32),
  fontSize: pm(12),
  borderTopWidth: pm(0),
  borderTopColor: "#ddd",
  textAlign: "right",
  borderLeftWidth: pm(0),
  borderLeftColor: "#ddd",
  marginLeft: "auto",
  paddingTop: pm(4),
  borderRightWidth: pm(0),
  borderRightColor: "#ddd",
  paddingLeft: pm(4),
  borderBottomWidth: pm(0),
  borderBottomColor: "#ddd",
  paddingRight: pm(4),
  paddingBottom: pm(4),
},
xdw341: {
  color: "#181818",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw342: {
  width: pm(300),
  height: pm(38),
  marginTop: pm(10),
  alignItems: "center",
  marginLeft: "auto",
  marginRight: "auto",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#FFD355",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw343: {
  width: "100%",
  flexGrow: 1,
  overflow: "scroll",
  flexBasis: "0%",
  flexShrink: 1,
},
xdw344: {
  flexGrow: 1,
  flexDirection: "column",
  backgroundColor: "#f8f8f8",
}
});
const slide = {"type":"176707","key":"c1767071","slug":null,"randomid":"id_a55a8177bd946e55a5e74781","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,100,100","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Text12":{"ctx_map":{"text":"订单编号"}},"Text13":{"ctx_map":{"text":"这是一个文本组件"}},"Text14":{"ctx_map":{"text":"这是一个文本组件"}},"Text15":{"ctx_map":{"text":"单据日期"}},"Text17":{"ctx_map":{"text":"订单备注"}},"Text19":{"ctx_map":{"text":"选择产品"}},"Text20":{"ctx_map":{"text":"点击添加产品"}},"Text21":{"ctx_map":{"text":"这是一个文本组件"}},"Text22":{"ctx_map":{"text":"提交订单"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"Picker1":{"ctx_map":{"mode":"date","range":[{"label":"上午","value":"am"},{"label":"下午","value":"pm"}],"value":0}},"Picker2":{"ctx_map":{"mode":"selector","range":[{"label":"上午","value":"am"},{"label":"下午","value":"pm"}],"value":0}},"ViewIf1":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"SvgImage1":{"ctx_map":{"src":"u/dev064/2023/03/23/BZsBo3S7YxXjbj6XntxkZ2/1029274.svg","color":"#918e8e","width":13,"height":13,"SvgImageManage":"SvgImageManage"}},"SvgImage2":{"ctx_map":{"src":"u/dev064/2023/03/23/BZsBo3S7YxXjbj6XntxkZ2/1029274.svg","color":"#918e8e","width":13,"height":13,"SvgImageManage":"SvgImageManage"}},"ComNavBar1":{"ctx_map":{"theme":"default","title":"提交订单","headerBackgroundColor":"#ffffff","statusBarBackgroundColor":"#ffffff"}},"DwappCloud1":{"ctx_map":{"numberb1":1}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[]}},"NativeInput1":{"ctx_map":{"type":"text","placeholder":"请输入订单备注"}}}};

const pageGroupSlug = 'app_tongzhua-pshop_create_order';

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
      <ComNavBar title={ "提交订单" } theme={ "default" } statusBarBackgroundColor={ "#ffffff" } headerBackgroundColor={ "#ffffff" }></ComNavBar>
<View /* View1 */   style={styles.xdw344}><XbenchcScrollView /* ScrollView1 */ style={styles.xdw343} scrollX={ false } scrollY={ true }  onScrollToLower={getEvent('ScrollView1:onScrollToLower:onScrollToLower:', {}, bagForKeyValue, bagForIndex)}><View /* View2 */   style={styles.xdw33o}><Text /* Text12 */ style={styles.xdw33m} >{slide.components.Text12.ctx_map.text}</Text>
<Text /* Text13 */ style={styles.xdw33n} >{state.formData.code}</Text></View>
<View /* View4 */   style={styles.xdw33p}></View>
<View /* View3 */   style={styles.xdw33t}><Text /* Text15 */ style={styles.xdw33m} >{slide.components.Text15.ctx_map.text}</Text>
<View /* View5 */   style={styles.xdw33s}><XbenchcPicker /* Picker1 */ value={ slide.components.Picker1.ctx_map.value } mode={ slide.components.Picker1.ctx_map.mode } range={ slide.components.Picker1.ctx_map.range } start={ state.today }  onChange={getEvent('Picker1:input:func8:', {}, bagForKeyValue, bagForIndex)}><View /* View6 */   style={styles.xdw33r}><Text /* Text14 */ style={styles.xdw33n} >{state.formData.datetime}</Text>
<Image /* SvgImage1 */ style={[ styles.xdw33q, { width: pm(13), height: pm(13) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev064/2023/03/23/BZsBo3S7YxXjbj6XntxkZ2/1029274.svg"), width: pm(13), height: pm(13) }} /></View></XbenchcPicker></View></View>
<View /* View8 */   style={styles.xdw33p}></View>
<View /* View9 */   style={styles.xdw33o}><Text /* Text19 */ style={styles.xdw33m} >{slide.components.Text19.ctx_map.text}</Text>
<View /* View10 */   style={styles.xdw33v}><XbenchcPicker /* Picker2 */ value={ slide.components.Picker2.ctx_map.value } mode={ slide.components.Picker2.ctx_map.mode } range={ state.goodRange }  onChange={getEvent('Picker2:input:func10:', {}, bagForKeyValue, bagForIndex)}><View /* View11 */   style={styles.xdw33r}><Text /* Text20 */ style={styles.xdw33u} >{slide.components.Text20.ctx_map.text}</Text>
<Image /* SvgImage2 */ style={[ styles.xdw33q, { width: pm(13), height: pm(13) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev064/2023/03/23/BZsBo3S7YxXjbj6XntxkZ2/1029274.svg"), width: pm(13), height: pm(13) }} /></View></XbenchcPicker></View></View>
{!!(state.formData.detail.length > 0) /* ViewIf1 */ && (<><View /* View14 */   style={styles.xdw33p}></View>
<View /* View12 */   style={styles.xdw33z}>{(state.formData.detail).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View13 */   style={styles.xdw33y}><XbenchcImage /* Image1 */ style={styles.xdw33w} source={dwtools.qiniu(bagForItem.product_image, slide.components.Image1.ctx_map.fop)}  />
<View /* View15 */   style={styles.xdw33x}><Text /* Text21 */ style={styles.xdw33u} >{bagForItem.product_name}</Text>
<Xbenchc168617 /* DwappCloud1 */ eventData={ bagForIndex } eventData2={ slide.components.DwappCloud1.ctx_map.prop2 } value={ bagForItem.quantity }  onChange={getEvent('DwappCloud1:input:func11:', {eventData: bagForIndex}, bagForKeyValue, bagForIndex)}></Xbenchc168617></View></View>
<View /* View16 */   style={styles.xdw33p}></View></ViewForItem> })}</View></>)}
<View /* View7 */   style={styles.xdw33o}><Text /* Text17 */ style={styles.xdw33m} >{slide.components.Text17.ctx_map.text}</Text>
<XbenchcInput /* NativeInput1 */ style={styles.xdw340} value={state.formData.remark} placeholder={slide.components.NativeInput1.ctx_map.placeholder} type={slide.components.NativeInput1.ctx_map.type}  onChange={getEvent('NativeInput1:onChange:func7:', {eventData: 'remark'}, bagForKeyValue, bagForIndex)} /></View>
<XbenchcView /* View17 */   viewStyle={styles.xdw342} onClick={getEvent('View17:onClick:func12:', {}, bagForKeyValue, bagForIndex)}><Text /* Text22 */ style={styles.xdw341} >{slide.components.Text22.ctx_map.text}</Text></XbenchcView></XbenchcScrollView></View>
    </ErrorBoundary>
  )
}
