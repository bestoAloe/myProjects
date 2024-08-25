
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import ComNavBar from '../../xbench/components/ComNavBar'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import Xbenchc3700 from '../components/Xbenchc3700'
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

let peripheralId = (null)
const action10 = peripheralId
let serviceUUID = (null)
const action11 = serviceUUID
let readCharacteristic = (null)
const action14 = readCharacteristic
let writeCharacteristic = (null)
const action12 = writeCharacteristic
const action6 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action7 = state.logs = ([{id: 0, log: "日志初始化完成"}])
  return state
}

const action1 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action5 = await (async (store, event) => {
// 参考文档 https://github.com/innoveit/react-native-ble-manager

const Platform = dw.getNativePackage('Platform')
const BleManager = dw.getNativePackage('BleManager')
const bleManagerEmitter = dw.getNativePackage('bleManagerEmitter')

function stringToHexArray(str) {
  const hexArray = [];

  for (let i = 0; i < str.length; i++) {
    const hexValue = str.charCodeAt(i).toString(16);
    hexArray.push(parseInt(hexValue, 16));
  }

  return hexArray;
}


const devices = {}

const log = (log) => {
  console.log(`[log] ${log}`)
  store.commit('setState', { ['state.logs']: [...state.logs, { id: state.logs.length, log }] })
}

// 蓝牙设备已连接监听
bleManagerEmitter.addListener('BleManagerConnectPeripheral', (args) => {

  console.log('连接成功后的回调:', args);
});

// 蓝牙设备已断开连接监听
bleManagerEmitter.addListener('BleManagerDisconnectPeripheral', (args) => {

  console.log('连接断开后的回调:', args);
});

const eventListener = bleManagerEmitter.addListener("BleManagerDiscoverPeripheral", async (args) => {
  if (!args.name) return
  if (devices[args.name]) return

  devices[args.name] = args
  log(`BleManagerDiscoverPeripheral id=${args.id} name=${args.name}`)
  log(`BleManagerDiscoverPeripheral args=${JSON.stringify(args)}`)
  if (args.name.startsWith("TZT01")) {
    peripheralId = args.id
    console.log('peripheralId', peripheralId)
    serviceUUID = args.advertising.serviceUUIDs[0]
    console.log('serviceUUID', serviceUUID)
    BleManager.connect(peripheralId).then(async res => {
      console.log("蓝牙连接成功", res);

      const peripheralInfo = await BleManager.retrieveServices(peripheralId)
      console.log('peripheralInfo', peripheralInfo)
      const characteristics = peripheralInfo.characteristics
      console.log('characteristics', characteristics)
      const writeCharacteristic = characteristics.find(x => !!x.properties.Write)
      const readCharacteristic = characteristics.find(x => !!x.properties.Read)
      console.log('writeCharacteristic', writeCharacteristic)
      console.log('readCharacteristic', readCharacteristic)
      // 写入配网信息

      BleManager.startNotification(peripheralId, readCharacteristic.service, readCharacteristic.characteristic)
        .then(async () => {

          console.log('Notification started');
          const data = stringToHexArray(JSON.stringify({
            action: 'wifiNetworkConfigure',
            seq: Math.random().toString(36).slice(2),
            qos: 1,
            data: {
              deviceID: "device01",
              mobileUuid: "703bc085-1bdb-47c3-873a-bc7e84381964",
              serviceUrls: "URL:",
              userId: "810",
              wifiSsid: "3012",
              wifiPwd: "3012@work@2022",
              wifiSecurity: 2,
            }
          }))
          // const data = stringToHexArray(`{"action": "wifiNetworkConfigure","seq": "12345678","qol": 1,"data": {"deviceID": "device01","mobileUuid": "703bc085-1bdb-47c3-873a-bc7e84381964","serviceUrls": "URL:","userId": "1234","wifiSsid": "3012","wifiPwd": "3012@work@2022","wifiSecurity": 2}}`)
          console.log('params', {
            peripheralId,
            serviceUUID: writeCharacteristic.service,
            characteristicUUID: writeCharacteristic.characteristic,
            data,
          })
          BleManager.write(peripheralId, writeCharacteristic.service, writeCharacteristic.characteristic, data, 20).then(writeWifiRes => {
            console.log("writeWifiRes", writeWifiRes)
          }).catch(e => {
            console.log('写入报错了 | e', e)
          })

        })
        .catch((error) => {

          console.log('Notification error:', error);
        });

    }).catch(e => {
      console.log('蓝牙连接失败报错了', e)
    })
  }
});


const onReject = (error) => {
  log(`[error] ${error}`)
  eventListener.remove()
}

/* 
  Android 的蓝牙权限在 Android 12之前的版本跟之后的有区别，需要分别单独处理
  其中 BLUETOOTH_SCAN,BLUETOOTH_CONNECT,BLUETOOTH_ADVERTISE 为 Android 12 新增权限，
  只有在 Android 12及以后的版本中才有效，在之前的版本中永远是未授权(never_ask_again)
*/

const handleAndroidPermissions = async () => {
  log(`Platform.Version: ${Platform.Version}`)
  if (Platform.OS === 'android' && Platform.Version >= 31) {
    const { status } = await dw.requestAndroidPermission('android.permission.BLUETOOTH_SCAN,android.permission.BLUETOOTH_CONNECT')
    log(`SCAN CONNECT status ${status}`)

    if (status["android.permission.BLUETOOTH_CONNECT"] !== 'granted' || status["android.permission.BLUETOOTH_SCAN"] !== 'granted') {
      log('[handleAndroidPermissions] User refueses runtime permissions android 12+')
      return dw.alert('提示', '请授予蓝牙权限')
    } else {
      log('[handleAndroidPermissions] User accepts runtime permissions android 12+')
    }

  } else if (Platform.OS === 'android' && Platform.Version >= 23) {

    const { status } = await dw.requestAndroidPermission('android.permission.ACCESS_FINE_LOCATION')
    log(`SCAN CONNECT status ${status}`)

    if (status !== 'granted') {
      log('[handleAndroidPermissions] User refueses runtime permissions android <12')
      return dw.alert('提示', '请授予蓝牙权限')
    } else {
      log('[handleAndroidPermissions] User accepts runtime permissions android <12')
    }
  }
}

if (Platform.OS === 'android') {
  await handleAndroidPermissions()
}

log('call BleManager.start')
BleManager.start({ showAlert: true }).then(() => {

  log('call BleManager.scan')
  BleManager.scan([], 10, true).then(() => {
    log("scan started");

  }, onReject)

  setTimeout(() => {
    eventListener.remove()
    log('call eventListener.remove')
  }, 30 * 1000)
}, onReject)
})(store, event)
}

const action2 = actions['func2'] = function (store, event) {
  const state = store.state
}

const action3 = actions['func3'] = function (store, event) {
  const state = store.state
}

const action4 = actions['func4'] = function (store, event) {
  const state = store.state
  const action13 = undefined
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
xdw3q8: {
  color: "#ffffff",
  fontSize: pm(12),
  maxWidth: pm(100),
  overflow: "hidden",
  lineHeight: pm(24),
},
xdw3q9: {
  paddingLeft: pm(5),
  paddingRight: pm(5),
  flexDirection: "column",
  backgroundColor: "#007acf",
},
xdw3qa: {
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "row",
  paddingBottom: pm(10),
},
xdw3qb: {
  color: "#ffffff",
  fontSize: pm(12),
  lineHeight: pm(24),
  backgroundColor: "#149eff",
},
xdw3qc: {
  width: pm(320),
  flexDirection: "column",
  backgroundColor: "#ffeb3b",
},
xdw3qd: {
  flexDirection: "column",
},
xdw3qe: {
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
},
xdw3qf: {
  flexDirection: "column",
  paddingBottom: pm(20),
},
xdw3qg: {
  width: "100%",
  flexGrow: 1,
  overflow: "scroll",
  flexBasis: "0%",
  flexShrink: 1,
}
});
const slide = {"type":"241059","key":"c2410591","slug":null,"randomid":"id_dba7569be1c5dc0514b5529d","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{"extraStyleKeys":[{"id":"height","name":""}]}},"Text13":{"ctx_map":{"text":"扫描设备","numberOfLines":1}},"Text14":{"ctx_map":{"text":"日志"}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ComNavBar1":{"ctx_map":{"theme":"default","title":"蓝牙配网调试","headerBackgroundColor":"#ffffff","statusBarBackgroundColor":"#ffffff"}},"DwappCloud1":{"ctx_map":{"prop1":{"id":10086,"data":{"name":"中国移动"}}}},"ScrollView1":{"ctx_map":{"type":"list","scrollX":false,"scrollY":true,"showScrollbar":true,"extraStyleKeys":[]}}}};

const pageGroupSlug = 'app_tongzhua-bt_net_config_debugapp';

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
      <ComNavBar title={ "蓝牙配网调试" } theme={ "default" } statusBarBackgroundColor={ "#ffffff" } headerBackgroundColor={ "#ffffff" }></ComNavBar>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw3qg} scrollX={ false } scrollY={ true } showScrollbar={ true } ><View /* View2 */   style={styles.xdw3qa}><XbenchcView /* View1 */   viewStyle={styles.xdw3q9} onClick={getEvent('View1:onClick:func1:', {}, bagForKeyValue, bagForIndex)}><Text /* Text13 */ style={styles.xdw3q8} numberOfLines={1}>{slide.components.Text13.ctx_map.text}</Text></XbenchcView></View>
<View /* View3 */   style={styles.xdw3qf}><Text /* Text14 */ style={styles.xdw3qb} >{slide.components.Text14.ctx_map.text}</Text>
<View /* View6 */   style={[styles.xdw3qc, (state.headerStyle)]}></View>
<View /* View4 */   style={styles.xdw3qe}>{(state.logs).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View5 */   style={styles.xdw3qd}><Xbenchc3700 /* DwappCloud1 */ value={ bagForItem.log } ></Xbenchc3700></View></ViewForItem> })}</View></View></XbenchcScrollView>
    </ErrorBoundary>
  )
}
