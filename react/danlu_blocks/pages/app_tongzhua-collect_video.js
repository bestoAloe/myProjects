
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
  const action2 = state.items = ([])
  return state
}

const action3 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action10 = await store.dispatch("func1", {})
}

const action4 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action9 = await store.dispatch("func2", {})
}

const action5 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action6 = await dw.app.run("video.get_user_collect_video", {})
  
        if ((action6.status) === ("error")) {
          const action7message = (action6.message || "操作错误！")
          const action7title = ("提示")
          action7message && dw.alert(action7title, action7message)
          return {}
        }
        
  const action8 = store.commit('setState', {["state.items"]: action6.objects})
}

const action14 = actions['func4'] = function (store, event) {
  const state = store.state
  let slug = (event.context.eventData)
  const action15 = slug
  const action16 = dw.app.goToPappUrl(slug, {"uuid": event.context.eventData2.data.video_uuid}, {redirectTo: false})
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

var action11 = actions['computed4'] = function (event, state) {
  var action12 = function (event) {
    function formatTime(seconds) {
      // 计算小时、分钟、秒数
      var hours = Math.floor(seconds / 3600);
      var minutes = Math.floor((seconds - hours * 3600) / 60);
      var remainingSeconds = seconds - hours * 3600 - minutes * 60;

      // 格式化时间
      var formattedTime = "";
      if (hours > 0) {
        formattedTime += hours.toString().padStart(2, "0") + ":";
      }
      formattedTime += minutes.toString().padStart(2, "0") + ":";
      formattedTime += remainingSeconds.toString().padStart(2, "0");

      return formattedTime;
    }
    console.log("event.duration", event.duration);
    return formatTime(event.duration);
  }(event);
  return action12;
};
// COMPUTED_ACTION_META:computed4 {"deps":[]}

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdwr9: {
  width: pm(106),
  height: pm(79),
},
xdwra: {
  color: "#ffffff",
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdwrb: {
  left: pm(9),
  width: pm(38),
  bottom: pm(8),
  height: pm(19),
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#00000033",
  borderTopLeftRadius: pm(9),
  borderTopRightRadius: pm(9),
  borderBottomLeftRadius: pm(9),
  borderBottomRightRadius: pm(9),
},
xdwrc: {
  width: pm(104),
  height: pm(79),
  position: "relative",
  marginRight: pm(4),
  marginBottom: pm(4),
  flexDirection: "column",
},
xdwrd: {
  flexWrap: "wrap",
  marginTop: pm(4),
  flexDirection: "row",
  justifyContent: "flex-start",
},
xdwre: {
  width: pm(146),
  height: pm(93),
},
xdwrg: {
  color: "#AAAAAA",
  fontSize: pm(12),
  marginTop: pm(17),
  lineHeight: pm(17),
},
xdwrh: {
  marginTop: pm(212),
  alignItems: "center",
  flexDirection: "column",
},
xdwri: {
  flex: 1,
  width: "100%",
  overflow: "scroll",
  borderTopWidth: pm(1),
  borderTopColor: "#F0F0F0",
}
});
const slide = {"type":"172352","key":"c1723521","slug":null,"randomid":"id_5add653e1e4b28fbfb6973ec","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,1060,790","src":"u/dev065/2023/03/01/TvSfiJz3YbGjLsSGBiYiMY/108272ba70c0435598414fa0d18405ae_mergeImage.png"}},"Image3":{"ctx_map":{"fop":"e,1460,930","src":"u/dev065/2023/03/02/sjdPJMDYXdSxcFkXNX7KvX/JIKUVAZX81K8VLRAWUC.png","buildToLocal":true}},"Text13":{"ctx_map":{"text":"这是一个文本组件"}},"Text15":{"ctx_map":{"text":"暂无收藏,快去看看精彩视频吧"}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"DwappCloud1":{"ctx_map":{"bool1":false,"bool2":false,"text1":"收藏","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[]}}}};
slide.components.DwappCloud1.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-collect_video';

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
<XbenchcScrollView /* ScrollView1 */ style={styles.xdwri} scrollX={ false } scrollY={ true } >{!!(!!state.items.length) /* ViewIf3 */ && (<><View /* View8 */   style={styles.xdwrd}>{(state.items).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><XbenchcView /* View2 */   viewStyle={[styles.xdwrc, ({
  marginRight: (bagForIndex + 1) % 3 === 0 ? 0 : 4
})]} onClick={getEvent('View2:onClick:func4:', {eventData: 'eat_video_player', eventData2: bagForItem}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image1 */ style={styles.xdwr9} source={dwtools.qiniu(bagForItem.data.video_uuid__toone? bagForItem.data.video_uuid__toone.data.poster : "null", slide.components.Image1.ctx_map.fop)}  />
<View /* View3 */   style={styles.xdwrb}><Text /* Text13 */ style={styles.xdwra} >{computeds.computed4({duration: bagForItem.data.video_uuid__toone? bagForItem.data.video_uuid__toone.data.duration : "0"}, state)}</Text></View></XbenchcView></ViewForItem> })}</View></>)}
{!!(!state.items.length) /* ViewIf4 */ && (<><View /* View7 */   style={styles.xdwrh}><XbenchcImage /* Image3 */ style={styles.xdwre} source={dwtools.getLocalResource('xdwrf_lthar0pn')}  />
<Text /* Text15 */ style={styles.xdwrg} >{slide.components.Text15.ctx_map.text}</Text></View></>)}</XbenchcScrollView>
    </ErrorBoundary>
  )
}
