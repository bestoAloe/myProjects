
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import { Image } from 'expo-image'
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

let action55lock = false
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action2 = state.args = ({})
  const action3 = state.items = ([])
  const action4 = state.currentItem = (null)
  const action17 = state.today = (null)
  const action22 = state.offset = (0)
  const action23 = state.limit = (15)
  const action24 = state.reachBottom = (false)
  const action45 = state.rt = (false)
  return state
}

const action5 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action18now = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace('Z', '')
  const action18 = action18now.split('T')[0] + 'T00:00:00.000'
  const action19 = store.commit('setState', {["state.today"]: action18.slice(0, 10)})
  const action12 = await store.dispatch("func1", {})
}

const action6 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action11 = await store.dispatch("func2", {})
}

const action7 = actions['func2'] = async function (store, event) {
  const state = store.state
  const action8 = await dw.app.run("message.web_list", {"aggs": {}, "limit": state.limit, "offset": state.offset, "filters": {data__device_uuid: dw.query.uuid || "f5892e18-23d7-4903-a044-97094e97c7af"}, "order_by": []})
  const action9 = console.log('[func2#action9] 打印(action8)的返回值', action8)
  let messages = (action8.objects)
  const action13 = messages
  if (state.offset === 0) {
    const action10 = store.commit('setState', {["state.items"]: messages})
  } else {
    const action35 = store.commit('setState', {["state.items__uconcat"]: {field: "id", list: messages}})
  }
  const action57 = console.log('[func2#action57] messages.length', messages.length)
  if (messages.length < state.limit) {
    const action39 = store.commit('setState', {["state.reachBottom"]: true})
  }
}

const action40 = actions['func3'] = async function (store, event) {
  const state = store.state
  const action55 = await (async () => {
  
      if (action55lock) return true
      action55lock = true
      try {
    if (state.reachBottom) {
      return event
    }
    const action50 = store.commit('setState', {["state.offset"]: state.offset + state.limit})
    const action56 = await store.dispatch("func2", {})
  
      } catch (e) {
        throw e
      } finally {
        action55lock = false
      }
      
  })()
}

const action41 = actions['func4'] = async function (store, event) {
  const state = store.state
  const action46 = store.commit('setState', {["state.rt"]: true, ["state.offset"]: 0, ["state.reachBottom"]: false})
  const action48 = await store.dispatch("func2", {})
  const action49 = store.commit('setState', {["state.rt"]: false})
}

const action58 = actions['func5'] = async function (store, event) {
  const state = store.state
  const action59 = await (async (store, event) => {
const FileSystem = dw.getNativePackage('FileSystem')
const MediaLibrary = dw.getNativePackage('MediaLibrary')
const Platform = dw.getNativePackage('Platform')

if (Platform.OS === 'android') {
  const { status } = await dw.requestAndroidPermission('android.permission.WRITE_EXTERNAL_STORAGE')
  if (status !== 'granted') return dw.alert('提示', '请授予文件写入权限')
}

if (Platform.OS === 'android') {
  const { status } = await dw.requestAndroidPermission('android.permission.READ_EXTERNAL_STORAGE')
  if (status !== 'granted') return dw.alert('提示', '请授予文件读取权限')
}

const callback = async downloadProgress => {
  const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
  console.log("progress", progress)
  const action25 = await dw.showToast({
    title: `下载进度:${Math.round(progress * 100)}%`,
    icon: 'none',
    image: '',
    duration: 10,
    mask: false,
    content: `下载进度:${Math.round(progress * 100)}%`
  })
};
const path = `${FileSystem.documentDirectory}${Math.random().toString(36).slice(2)}_${event.context.eventData.data.url.split("/")[event.context.eventData.data.url.split("/").length - 1]}`
console.log("path", path)
console.log("event.context.eventData.data.url", event.context.eventData.data.url)
const downloadResumable = FileSystem.createDownloadResumable(
  event.context.eventData.data.url,
  path,
  {},
  callback
);

try {
  const { uri } = await downloadResumable.downloadAsync();
  console.log('Finished downloading to ', uri);
  const action25 = await dw.showToast({
    title: '下载完成',
    icon: 'none',
    image: '',
    duration: 1500,
    mask: false,
    content: `下载完成`
  })
  const asset = await MediaLibrary.createAssetAsync(uri);
  console.log("asset", asset)
} catch (e) {
  console.error(e);
}
})(store, event)
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

var action20 = actions['computed1'] = function (event, state) {
    return event.data.startsWith("http");
};
// COMPUTED_ACTION_META:computed1 {"deps":[]}

var action25 = actions['computed2'] = function (event, state) {
    /* action27: 按日分组 */
    var action28 = function (event) {

        var groupedMessages = {};

        state.items.forEach(function (message) {
            var createdDate = message.created.split('T')[0];

            if (!groupedMessages[createdDate]) {
                groupedMessages[createdDate] = [];
            }

            groupedMessages[createdDate].push(message);
        });

        // 对日期进行排序
        var sortedDates = Object.keys(groupedMessages).sort(function (a, b) {
            return new Date(b) - new Date(a);
        });

        // 构建按日期从近到远排列的消息数组
        var sortedGroupedMessages = [];
        sortedDates.forEach(function (date) {
            sortedGroupedMessages.push({
                date: date,
                messages: groupedMessages[date]
            });
        });

        return sortedGroupedMessages;
    }(event);
    return action28;
};
// COMPUTED_ACTION_META:computed2 {"deps":["items"]}

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdw2jv: {
  color: "#AAAAAA",
  fontSize: pm(9),
  lineHeight: pm(14),
  paddingTop: pm(10),
  paddingBottom: pm(10),
},
xdw2jw: {
  alignItems: "center",
  flexDirection: "column",
},
xdw2jx: {
  color: "#666666",
  fontSize: pm(12),
  lineHeight: pm(24),
  marginLeft: pm(10),
  marginRight: pm(7),
},
xdw2jy: {
  marginRight: pm(7),
},
xdw2jz: {
  color: "#666666",
  fontSize: pm(12),
  lineHeight: pm(17),
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  paddingBottom: pm(10),
},
xdw2k0: {
  color: "#007acf",
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw2k1: {
  flexDirection: "column",
},
xdw2k2: {
  height: pm(59),
  overflow: "hidden",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "flex-start",
  borderTopLeftRadius: pm(7),
  borderTopRightRadius: pm(7),
  borderBottomLeftRadius: pm(7),
  borderBottomRightRadius: pm(7),
},
xdw2k3: {
  marginLeft: pm(14),
  marginRight: pm(14),
  flexDirection: "column",
},
xdw2k4: {
  width: pm(300),
  marginLeft: pm(10),
  marginRight: pm(10),
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw2k5: {
  flex: 1,
  width: "100%",
  overflow: "scroll",
  backgroundColor: "#F8F8F8",
}
});
const slide = {"type":"171140","key":"c1711401","slug":null,"randomid":"id_2430fa5c85d7caec0c8dfedf","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"Text14":{"ctx_map":{"text":"这是一个文本组件","numberOfLines":2}},"Text15":{"ctx_map":{"text":"保存到本地","numberOfLines":1}},"ViewIf1":{"ctx_map":{"value":true}},"ViewFor2":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewFor3":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"SvgImage3":{"ctx_map":{"src":"u/dev065/2023/02/28/6rddXq9xwthRcsB7Bp492L/切片1.svg","color":"#07c160","width":17,"height":17,"SvgImageManage":"SvgImageManage"}},"DwappCloud2":{"ctx_map":{"bool1":true,"bool2":false,"text1":"消息详情","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"extraStyleKeys":[],"refresherEnabled":true}},"DisplayDate1":{"ctx_map":{"value":"2022-09-10T11:22:33.444","format":"datetime"}},"DisplayDate2":{"ctx_map":{"value":"2022-09-10T11:22:33.444","format":"time"}}}};
slide.components.DwappCloud2.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-device_messagedetail';

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
      <Xbenchc176286 /* DwappCloud2 */ isCuzBtn={ slide.components.DwappCloud2.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud2.ctx_map.bool2 } eventData={ slide.components.DwappCloud2.ctx_map.prop1 } eventData2={ slide.components.DwappCloud2.ctx_map.prop2 } title={ slide.components.DwappCloud2.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud2.ctx_map.text2 } confirmText={ slide.components.DwappCloud2.ctx_map.text3 } cancelText={ slide.components.DwappCloud2.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud2.ctx_map.color1 } confirmColor={ slide.components.DwappCloud2.ctx_map.color2 } cancelColor={ slide.components.DwappCloud2.ctx_map.color3 } backIcon={ slide.components.DwappCloud2.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud2.ctx_map.image2 } titleStyle={ slide.components.DwappCloud2.ctx_map.style1 } screenType={ slide.components.DwappCloud2.ctx_map.select1 } ></Xbenchc176286>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw2k5} refresherEnabled={ true } refresherTriggered={ state.rt } scrollX={ false } scrollY={ true }  onRefresherRefresh={getEvent('ScrollView1:onRefresherRefresh:func4:', {}, bagForKeyValue, bagForIndex)} onScrollToLower={getEvent('ScrollView1:onScrollToLower:func3:', {}, bagForKeyValue, bagForIndex)}>{(computeds.computed2({}, state)).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor2' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor2 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View6 */   style={styles.xdw2jw}><Text style={styles.xdw2jv} numberOfLines={1}>{dwtools.dateformat(bagForItem.date === state.today ? '今天' : bagForItem.date, slide.components.DisplayDate1.ctx_map.format)}</Text></View>
<View /* View7 */   style={styles.xdw2k4}>{(bagForItem.messages).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor3' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor3 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View4 */   style={styles.xdw2k3}><View /* View5 */   style={styles.xdw2k2}><Text style={styles.xdw2jx} numberOfLines={1}>{dwtools.dateformat(bagForItem.created, slide.components.DisplayDate2.ctx_map.format)}</Text>
<Image /* SvgImage3 */ style={[ styles.xdw2jy, { width: pm(17), height: pm(17) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev065/2023/02/28/6rddXq9xwthRcsB7Bp492L/切片1.svg"), width: pm(17), height: pm(17) }} />
<Text /* Text14 */ style={styles.xdw2jz} numberOfLines={2}>{bagForItem.data.summary}</Text>
{!!(computeds.computed1({data: bagForItem.data.url}, state)) /* ViewIf1 */ && (<><XbenchcView /* View8 */   viewStyle={styles.xdw2k1} onClick={getEvent('View8:onClick:func5:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><Text /* Text15 */ style={styles.xdw2k0} numberOfLines={1}>{slide.components.Text15.ctx_map.text}</Text></XbenchcView></>)}</View></View></ViewForItem> })}</View></ViewForItem> })}</XbenchcScrollView>
    </ErrorBoundary>
  )
}
