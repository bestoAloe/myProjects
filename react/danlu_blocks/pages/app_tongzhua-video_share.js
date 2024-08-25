
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import { Video } from 'expo-av'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import { Image } from 'expo-image'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

let videoRef = (null)
const action59 = videoRef
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action12 = state.platform = ("dwapp")
  const action18 = state.video = (null)
  const action24 = state.downloadProgress = (0)
  const action27 = state.playProgress = (0)
  const action31 = state.positionMillis = (0)
  const action32 = state.duration = (0)
  const action55 = state.currentPosition = (0)
  const action71 = state.petPop = (false)
  const action73 = state.pets = ([])
  const action87 = state.select_pet = (null)
  const action121 = state.is_collect = (false)
  const action124 = state.is_speed = (false)
  const action133 = state.isPlaying = (true)
  const action147 = state.progress = (0)
  const action148 = state.showProgress = (false)
  const action156 = state.config = (null)
  return state
}

const action3 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action14 = store.commit('setState', {["state.platform"]: dw.platform})
  let action21
  

  const action158 = await Promise.all([
    (async () => {
      const action15 = await store.dispatch("func1", {})
      return action15
    })(),
    (async () => {
      const action157 = await store.dispatch("func4", {})
      return action157
    })(),
  ])

}

const action2 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action17 = await dw.app.run("video.list", {"limit": 1, "offset": 0, "filters": {/**/  uuid: dw.query.uuid/**/}, "order_by": []})
  const action19 = store.commit('setState', {["state.video"]: action17.objects[0]})
}

const action151 = actions['func3'] = function (store, event) {
  const state = store.state
  window.open(state.config.data.app_url, "_blank")
  return
}

const action153 = actions['func4'] = async function (store, event) {
  const state = store.state
  const action154 = await dw.app.run("config.get", {})
  const action155 = store.commit('setState', {["state.config"]: action154.object})
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
xdw3zs: {
  width: pm(320),
  height: pm(240),
},
xdw3zt: {
  width: pm(35),
  height: pm(42),
},
xdw3zu: {
  top: pm(99),
  left: pm(142),
  width: pm(35),
  height: pm(42),
  position: "absolute",
},
xdw3zv: {
  position: "relative",
  flexDirection: "column",
},
xdw3zw: {
  width: pm(15),
  height: pm(15),
  marginRight: pm(5),
  borderTopLeftRadius: pm(3),
  borderTopRightRadius: pm(3),
  borderBottomLeftRadius: pm(3),
  borderBottomRightRadius: pm(3),
},
xdw3zy: {
  color: "#ffffff",
  fontSize: pm(10),
  lineHeight: pm(15),
},
xdw3zz: {
  width: pm(102),
  borderTopWidth: pm(1),
  borderTopColor: "#E7E7E7",
  alignItems: "center",
  borderLeftWidth: pm(1),
  borderLeftColor: "#E7E7E7",
  paddingTop: pm(5),
  borderRightWidth: pm(1),
  borderRightColor: "#E7E7E7",
  paddingLeft: pm(10),
  borderBottomWidth: pm(1),
  borderBottomColor: "#E7E7E7",
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(5),
  borderTopLeftRadius: pm(15),
  borderTopRightRadius: pm(15),
  borderBottomLeftRadius: pm(15),
  borderBottomRightRadius: pm(15),
},
xdw400: {
  marginRight: pm(2),
},
xdw401: {
  marginRight: pm(3),
},
xdw402: {
  color: "#ffc107",
  fontSize: pm(10),
  fontWeight: "500",
  lineHeight: pm(18),
},
xdw403: {
  color: "#ffffff",
  fontSize: pm(10),
  fontWeight: "500",
  lineHeight: pm(18),
},
xdw404: {
  top: pm(30),
  left: pm(120),
  width: pm(80),
  height: pm(28),
  position: "absolute",
  alignItems: "center",
  paddingTop: pm(5),
  paddingLeft: pm(8),
  paddingRight: pm(8),
  flexDirection: "row",
  paddingBottom: pm(5),
  backgroundColor: "#ffffff33",
  borderTopLeftRadius: pm(15),
  borderTopRightRadius: pm(15),
  borderBottomLeftRadius: pm(15),
  borderBottomRightRadius: pm(15),
},
xdw405: {
  flexGrow: 1,
  alignItems: "center",
  flexShrink: 1,
  flexDirection: "column",
  justifyContent: "flex-start",
},
xdw406: {
  color: "#ffffff",
  fontSize: pm(12),
  lineHeight: pm(18),
},
xdw407: {
  color: "#AAAAAA",
  fontSize: pm(9),
  lineHeight: pm(14),
  marginRight: pm(7),
},
xdw408: {
  color: "#AAAAAA",
  fontSize: pm(9),
  lineHeight: pm(14),
},
xdw409: {
  marginTop: pm(7),
  flexDirection: "row",
  justifyContent: "flex-start",
},
xdw40a: {
  width: pm(320),
  flexWrap: "wrap",
  alignItems: "flex-start",
  paddingTop: pm(10),
  paddingLeft: pm(10),
  marginBottom: pm(48),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
  justifyContent: "flex-start",
},
xdw40b: {
  height: "100%",
  flexGrow: 1,
  position: "relative",
  alignItems: "center",
  flexShrink: 0,
  paddingTop: pm(70),
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#000000",
}
});
const slide = {"type":"262082","key":"c2620821","slug":null,"randomid":"id_4852b65684074e75945f273c","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"Text1":{"ctx_map":{"text":"收藏"}},"Text2":{"ctx_map":{"text":"下载"}},"Text3":{"ctx_map":{"text":"分享"}},"Text4":{"ctx_map":{"text":"已经有两次自动出粮被终止掉了，爱宠今天胃口可能不太好"}},"Text5":{"ctx_map":{"text":"2022-07-24"}},"Text6":{"ctx_map":{"text":"13:34"}},"Text7":{"ctx_map":{"text":"下载铜爪APP"}},"Text9":{"ctx_map":{"text":"更改"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,80,80","src":"u/dev064/2023/03/08/9oDXbNgiBqhZR7uoTk6v2H/SketchPng834c74b27fb4041b516c923b72d83f49dfc01b7a136c8ad0cc13332a36808655.png","buildToLocal":true}},"Image2":{"ctx_map":{"fop":"e,80,80","src":"u/dev064/2023/03/08/d6D7M4kAheq5TCW6TeCDBC/SketchPng48db5730e119e68012154897af8f8d9db0bde646b2e5db23ea16f9adb0536fa6.png","buildToLocal":true}},"Image3":{"ctx_map":{"fop":"e,80,80","src":"u/dev064/2023/03/08/Tmra5ka4gaX3u2TguGJQY9/SketchPng36a8fd1e65d45ae23022f55f8fd9efba4f5762d358d318ddffd1478c2503cb63.png","buildToLocal":true}},"Image4":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/11/20/jJgJbYPidvcTgnker8AEKc/企业微信截图_20231120153807.png","buildToLocal":true}},"Image7":{"ctx_map":{"fop":"e,80,80","src":"u/dev064/2023/03/14/aZjKxKza8nhuv8RJqNAaUc/SketchPngec85b83464f43e9dd0471a0498edb231497c37edb49ade84eb3de57737d88e0c.png","buildToLocal":true}},"Text12":{"ctx_map":{"text":"3x"}},"Text13":{"ctx_map":{"text":"快进中"}},"View11":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"View24":{"ctx_map":{}},"View26":{"ctx_map":{}},"Image10":{"ctx_map":{"fop":"e,80,80","src":"u/dev064/2023/03/20/eAWwiHwaZtNPAJkPHdApL6/SketchPng834c74b27fb4041b516c923b72d83f49dfc01b7a136c8ad0cc13332a368086551.png","buildToLocal":true}},"Image11":{"ctx_map":{"fop":"e,105,126","src":"u/dev064/2023/06/21/7BMMVyuBCt7WsPpv4vn745/矩形4x.png"}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewIf5":{"ctx_map":{"value":true}},"SvgImage1":{"ctx_map":{"src":"u/dev065/2023/05/30/Yg3rsiG2csucyXMvcBJsnE/1093994.svg","color":"#ffffff","width":5,"height":7,"SvgImageManage":"SvgImageManage"}},"SvgImage2":{"ctx_map":{"src":"u/dev065/2023/05/30/Yg3rsiG2csucyXMvcBJsnE/1093994.svg","color":"#ffffff","width":5,"height":7,"SvgImageManage":"SvgImageManage"}},"SvgImage3":{"ctx_map":{"src":"u/dev065/2023/05/30/Yg3rsiG2csucyXMvcBJsnE/1093994.svg","color":"#ffffff","width":5,"height":7,"SvgImageManage":"SvgImageManage"}},"DwappCloud2":{"ctx_map":{"bool1":false,"numberb1":10}},"NativeVideo1":{"ctx_map":{"src":"u/linliguang/2022/10/14/FAXKyF6Doa2RZySo4X6CSG/test2.mp4","loop":true,"preload":"auto","autoPlay":true,"controls":true}}}};

const pageGroupSlug = 'app_tongzhua-video_share';

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
      {!!(state.video) /* ViewIf1 */ && (<><View /* View1 */   style={styles.xdw40b}><View /* View2 */   style={styles.xdw405}><View /* View15 */   style={styles.xdw3zv}><Video /* NativeVideo1 */ style={styles.xdw3zs} source={ {uri: dwtools.qiniu(state.video.data.url)} } useNativeControls={ true } isLooping={ true } shouldPlay={ true } positionMillis={ state.positionMillis } rate={ state.rate } resizeMode={ "contain" } ></Video>
{!!(!state.isPlaying) /* ViewIf5 */ && (<><View /* View26 */   style={styles.xdw3zu}><XbenchcImage /* Image11 */ style={styles.xdw3zt} source={dwtools.qiniu(slide.components.Image11.ctx_map.src, slide.components.Image11.ctx_map.fop)}  /></View></>)}</View>
<XbenchcView /* View11 */   viewStyle={styles.xdw3zz} onClick={getEvent('View11:onClick:func3:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image4 */ style={styles.xdw3zw} source={dwtools.getLocalResource('xdw3zx_lthar4eb')}  />
<Text /* Text7 */ style={styles.xdw3zy} >{slide.components.Text7.ctx_map.text}</Text></XbenchcView>
{!!(state.is_speed) /* ViewIf4 */ && (<><View /* View24 */   style={styles.xdw404}><Image /* SvgImage1 */ style={[ styles.xdw400, { width: pm(5), height: pm(7) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev065/2023/05/30/Yg3rsiG2csucyXMvcBJsnE/1093994.svg"), width: pm(5), height: pm(7) }} />
<Image /* SvgImage2 */ style={[ styles.xdw400, { width: pm(5), height: pm(7) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev065/2023/05/30/Yg3rsiG2csucyXMvcBJsnE/1093994.svg"), width: pm(5), height: pm(7) }} />
<Image /* SvgImage3 */ style={[ styles.xdw401, { width: pm(5), height: pm(7) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev065/2023/05/30/Yg3rsiG2csucyXMvcBJsnE/1093994.svg"), width: pm(5), height: pm(7) }} />
<Text /* Text12 */ style={styles.xdw402} >{slide.components.Text12.ctx_map.text}</Text>
<Text /* Text13 */ style={styles.xdw403} >{slide.components.Text13.ctx_map.text}</Text></View></>)}</View>
<View /* View7 */   style={styles.xdw40a}><Text /* Text4 */ style={styles.xdw406} >{slide.components.Text4.ctx_map.text}</Text>
<View /* View8 */   style={styles.xdw409}><Text /* Text5 */ style={styles.xdw407} >{state.video.data.start_time.slice(0, 10)}</Text>
<Text /* Text6 */ style={styles.xdw408} >{state.video.data.start_time.slice(11, 16)}</Text></View></View></View></>)}
    </ErrorBoundary>
  )
}
