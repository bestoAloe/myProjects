
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
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
  const action75 = state.ready = (false)
  const action87 = state.items = ([])
  return state
}

const action3 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action7 = await store.dispatch("func1", {})
}

const action4 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action77 = await store.dispatch("func2", {})
  const action76 = store.commit('setState', {["state.ready"]: true})
}

const action88 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action89 = await dw.app.run("device_model.list", {"limit": 1000, "offset": 0, "filters": {/**/  is_active: true/**/}, "order_by": []})
  const action90 = store.commit('setState', {["state.items"]: action89.objects})
}

const action91 = actions['func3'] = function (store, event) {
  const state = store.state
  const action92 = dw.app.goToPappUrl("update_net", {"mode": "create", "device_model_uuid": event.context.eventData.uuid}, {redirectTo: false})
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
xdw2un: {
  width: pm(290),
  height: pm(108),
},
xdw2uo: {
  width: pm(290),
  marginLeft: pm(15),
  marginRight: pm(15),
  marginBottom: pm(15),
  flexDirection: "column",
  borderTopLeftRadius: pm(15),
  borderTopRightRadius: pm(15),
  borderBottomLeftRadius: pm(15),
  borderBottomRightRadius: pm(15),
},
xdw2up: {
  flex: 1,
  width: "100%",
  overflow: "scroll",
  borderTopWidth: pm(1),
  borderTopColor: "#eeeeee",
  paddingTop: pm(17),
  backgroundColor: "#F8F8F8",
}
});
const slide = {"type":"176358","key":"c1763581","slug":null,"randomid":"id_470364bfb9046246dade3449","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Image2":{"ctx_map":{"fop":"e,1029,381","src":"u/dev066/2024/02/26/njRjXaCjFAbSryWrTuMDiB/卡片3x.png"}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"View20":{"ctx_map":{}},"ViewIf7":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"DwappCloud1":{"ctx_map":{"fop1":"e,588,216","text2":"294px","text3":"108px","image1":"u/dev070/2023/03/06/PKKV5JfeFZBWrY7Fje9y8L/cat1.png"}},"DwappCloud3":{"ctx_map":{"bool1":true,"bool2":false,"text1":"添加设备","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[]}}}};
slide.components.DwappCloud3.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-device_model_list';

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
      <Xbenchc176286 /* DwappCloud3 */ isCuzBtn={ slide.components.DwappCloud3.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud3.ctx_map.bool2 } eventData={ slide.components.DwappCloud3.ctx_map.prop1 } eventData2={ slide.components.DwappCloud3.ctx_map.prop2 } title={ slide.components.DwappCloud3.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud3.ctx_map.text2 } confirmText={ slide.components.DwappCloud3.ctx_map.text3 } cancelText={ slide.components.DwappCloud3.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud3.ctx_map.color1 } confirmColor={ slide.components.DwappCloud3.ctx_map.color2 } cancelColor={ slide.components.DwappCloud3.ctx_map.color3 } backIcon={ slide.components.DwappCloud3.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud3.ctx_map.image2 } titleStyle={ slide.components.DwappCloud3.ctx_map.style1 } screenType={ slide.components.DwappCloud3.ctx_map.select1 } ></Xbenchc176286>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw2up} scrollX={ false } scrollY={ true } >{!!(state.ready) /* ViewIf7 */ && (<>{(state.items).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><XbenchcView /* View20 */   viewStyle={styles.xdw2uo} onClick={getEvent('View20:onClick:func3:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image2 */ style={styles.xdw2un} source={dwtools.qiniu(bagForItem.data.image, slide.components.Image2.ctx_map.fop)}  /></XbenchcView></ViewForItem> })}</>)}</XbenchcScrollView>
    </ErrorBoundary>
  )
}
