
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import Xbenchc174825 from '../components/Xbenchc174825'
import ViewForItem from '../../xbench/components/ViewForItem'
import Xbenchc168616 from '../components/Xbenchc168616'
import { Image } from 'expo-image'
import Xbenchc186881 from '../components/Xbenchc186881'
import XbenchcScrollView from '../../xbench/xbenchc/components/XbenchcScrollView'
import Xbenchc173692 from '../components/Xbenchc173692'
import XbenchcModal from '../../xbench/xbenchc/components/XbenchcModal'
import XbenchcInput from '../../xbench/xbenchc/components/XbenchcInput'
import XbenchcButton from '../../xbench/xbenchc/components/XbenchcButton'
import Xbenchc275104 from '../components/Xbenchc275104'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

let tick = (null)
const action51 = tick
let recording = (null)
const action57 = recording
let Audio = (null)
const action60 = Audio
let modalInstance = (null)
const action169 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action6 = state.audio_list = ([])
  const action10 = state.device = (null)
  const action11 = state.device_member = (null)
  const action12 = state.platform = ("dwapp")
  const action22 = state.mode = ("preview")
  const action41 = state.record_pop = (false)
  const action46 = state.recording = (false)
  const action48 = state.record_seconds = (0)
  const action74 = state.formData = ({/**/  name: '',/**/  url: '',/**/  type: 'customer',/**/  icon: 'u/dev064/2023/02/24/a249NMNDgDxtxGraCPkBuM/企业微信截图_20230224150348.png',/**/  display_name: '',/**/  bg_color: 'rgb(33,150,243)'/**/})
  const action78 = state.namePop = (false)
  const action114 = state.scrollY = (true)
  const action128 = state.editPop = (false)
  const action130 = state.currentItem = (null)
  const action147 = state.playing = (false)
  return state
}

const action159 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action160 = modalInstance = (event.data)
  const action161 = console.log('[getModalInstance#action161] 打印(modalInstance)', modalInstance)
}

const action53 = actions['onHide'] = function (store, event) {
  const state = store.state
  const action54 = ((store, event) => {
if(tick){
  clearInterval(tick)
}
})(store, event)
}

const action7 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action13 = store.commit('setState', {["state.platform"]: dw.platform})
  const action126 = Audio = (dw.getNativePackage("Audio"))
  const action19 = await store.dispatch("func1", {})
  const action8 = await store.dispatch("func4", {})
}

const action2 = actions['func4'] = async function (store, event) {
  const state = store.state
  const action3 = await dw.app.run("audio.list", {"limit": 1000, "offset": 0, "filters": {/**/  is_active: true,/**/  data__device_member_uuid: state.device_member.uuid,/**/}, "order_by": ["data__order__float", '-id']})
  let objects = (action3.objects)
  const action4 = objects
  const action23 = ((store, event) => {
objects = objects.map(x=>({...x, is_select: false, key: x.id, disabledDrag: true}))
})(store, event)
  const action5 = store.commit('setState', {["state.audio_list"]: objects})
}

const action14 = actions['func1'] = async function (store, event) {
  const state = store.state
  const action15 = await dw.app.run("device.user_get", {"uuid": dw.query.uuid || "f5892e18-23d7-4903-a044-97094e97c7af"})
  
        if ((action15.status) === ("error")) {
          const action16message = (action15.message || "操作错误！")
          const action16title = ("提示")
          action16message && dw.alert(action16title, action16message)
          return {}
        }
        
  const action17 = store.commit('setState', {["state.device"]: action15.object, ["state.device_member"]: action15.device_member})
}

const action20 = actions['func5'] = function (store, event) {
  const state = store.state
  let mode = (state.mode === 'preview' ? 'edit' : 'preview')
  const action110 = mode
  const action21 = store.commit('setState', {["state.mode"]: mode, ["state.audio_list"]: state.audio_list.map(x=>({...x, disabledDrag: !x.disabledDrag}))})
}

const action24 = actions['func6'] = function (store, event) {
  const state = store.state
  const action26 = console.log('[func6#action26] event.context.eventData', event.context.eventData)
  const action27 = console.log('[func6#action27] event.data', event.data)
  const action25 = store.commit('setState', {[`state.audio_list[${event.context.eventData}].is_select`]: event.data})
}

const action28 = actions['func7'] = async function (store, event) {
  const state = store.state
  let select_items = (state.audio_list.filter(x=>x.is_select))
  const action32 = select_items
  
        if (!!(!select_items.length) === (true)) {
          const action31message = ("未选中任何条目")
          const action31title = ("提示")
          action31message && dw.alert(action31title, action31message)
          return {}
        }
        
  const action33 = await Promise.all((select_items).map(async (item, index) => {
    const action30 = await dw.app.run("audio.delete", {"id": item.id})
    
        if ((action30.status) === ("error")) {
          const action39message = (action30.message || "操作错误！")
          const action39title = ("提示")
          action39message && dw.alert(action39title, action39message)
          return {}
        }
        
  }))

  let message = ("删除成功")
  const action171 = message
  const action172 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  const action36 = store.commit('setState', {["state.mode"]: "preview"})
  const action38 = await store.dispatch("func4", {})
}

const action40 = actions['func8'] = function (store, event) {
  const state = store.state
  const action158 = store.commit('setState', {["state.currentItem"]: null, ["state.record_pop"]: true})
}

const action43 = actions['func9'] = function (store, event) {
  const state = store.state
  const action44 = store.commit('setState', {["state.record_pop"]: false})
}

const action55 = actions['func11'] = async function (store, event) {
  const state = store.state
  /* action125: 提起申请权限，避免触发onHide引发相关销毁操作 */
  const action124 = await (async (store, event) => {
if(dw.platform === 'rnapp'){
  try{
    console.log('Requesting permissions..');
    // const { status } = await dw.requestAndroidPermission('android.permission.RECORD_AUDIO')
    // console.log("status", status)
    await Audio.requestPermissionsAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
    });
  }
  catch(err){
    console.error('Failed to get permission', err);
  }
}
})(store, event)
  const action62 = console.log('[func11#action62] 执行开始录音', )
  const action47 = store.commit('setState', {["state.recording"]: true})
  const action50 = ((store, event) => {
tick = setInterval(async ()=>{
    if(state.record_seconds < 10){
        store.commit('setState', { ['state.record_seconds']: state.record_seconds + 1 })
    }
    else{
        clearInterval(tick)
        tick = null
        store.dispatch("func12", {})
    }
}, 1000)
})(store, event)
  const action56 = await (async (store, event) => {
if(dw.platform === 'rnapp'){
  try {
    console.log('Starting recording..');
    res = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
    recording = res.recording
    console.log('Recording started');
  } catch (err) {
    console.error('Failed to start recording', err);
  }
}
})(store, event)
}

const action58 = actions['func12'] = async function (store, event) {
  const state = store.state
  const action73 = ((store, event) => {
if(tick){
  clearInterval(tick)
}
})(store, event)
  let seconds = (state.record_seconds)
  const action122 = seconds
  const action61 = console.log('[func12#action61] 执行停止录音', )
  const action65 = store.commit('setState', {["state.recording"]: false, ["state.record_seconds"]: 0})
  
        if (!!(seconds <= 3) === (true)) {
          const action121message = ("录音时长不足3秒")
          const action121title = ("提示")
          action121message && dw.alert(action121title, action121message)
          return {}
        }
        
  const action59 = await (async (store, event) => {
if(dw.platform === 'rnapp'){
  console.log('Stopping recording..');
  console.log("recording", recording)
  await recording.stopAndUnloadAsync();
  await Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
  });
  const uri = recording.getURI();
  console.log('Recording stopped and stored at', uri);

  const file = {
    uri: uri,
    name: uri.split('/').pop() || Math.random().toString(36).slice(2) + '_audio.mp3',
    type: 'application/octet-stream',
  }
  const info = await dw.uploadFileToOSS({
    file,
    provider: 'cos_public',
    // provider: 'default',
    callback: (progress) => {
      console.log('progress', progress)
    }
  })
  console.log("info", info)
  return info
}
else{
  return null
}
})(store, event)
  if (action59) {
    let info = (action59)
    const action67 = info
    let key = (info.key)
    const action68 = key
    let url = (dw.filters.qiniu(key))
    const action72 = url
    let filename = (info.name)
    const action75 = filename
    const action76 = store.commit('setState', {["state.formData"]: {/**/  ...state.formData,/**/  name: filename,/**/  url: url,/**/}})
  }
  const action77 = await store.dispatch("func9", {})
  const action89 = await store.dispatch("func13", {})
}

const action80 = actions['func13'] = function (store, event) {
  const state = store.state
  const action81 = store.commit('setState', {["state.namePop"]: true})
}

const action82 = actions['func14'] = function (store, event) {
  const state = store.state
  const action83 = store.commit('setState', {["state.namePop"]: false, ["state.currentItem"]: null})
}

const action84 = actions['func15'] = function (store, event) {
  const state = store.state
  const action85 = store.commit('setState', {["state.formData.display_name"]: event.data.detail.value})
}

const action90 = actions['func16'] = async function (store, event) {
  const state = store.state
  if (state.currentItem) {
    const action140 = await dw.app.run("audio.update", {"id": state.currentItem.id, "formData": {/**/  display_name: state.formData.display_name/**/}})
    
        if ((action140.status) === ("error")) {
          const action141message = (action140.message || "操作错误！")
          const action141title = ("提示")
          action141message && dw.alert(action141title, action141message)
          return {}
        }
        
    let message = ("编辑成功")
    const action174 = message
    const action175 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  } else {
    const action91 = await dw.app.run("audio.create", {"formData": state.formData, "device_member_uuid": state.device_member.uuid})
    
        if ((action91.status) === ("error")) {
          const action92message = (action91.message || "操作错误！")
          const action92title = ("提示")
          action92message && dw.alert(action92title, action92message)
          return {}
        }
        
    let message = ("创建成功")
    const action177 = message
    const action178 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  }
  const action95 = await store.dispatch("func4", {})
  const action96 = await store.dispatch("func14", {})
}

const action97 = actions['func17'] = async function (store, event) {
  const state = store.state
  let item = (event.context.eventData)
  const action100 = item
  let msg = ("是否确认删除？")
  const action164 = msg
  const action165 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(msg)
}
else{
  return null
}
})(store, event)
  if (!action165) {
    return event
  }
  const action102 = await dw.app.run("audio.delete", {"id": item.id})
  
        if ((action102.status) === ("error")) {
          const action103message = (action102.message || "操作错误！")
          const action103title = ("提示")
          action103message && dw.alert(action103title, action103message)
          return {}
        }
        
  let message = ("操作成功")
  const action180 = message
  const action181 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
  const action106 = store.commit('setState', {["state.mode"]: "preview"})
  const action105 = await store.dispatch("func4", {})
}

const action112 = actions['func18'] = async function (store, event) {
  const state = store.state
  const action113 = store.commit('setState', {["state.audio_list"]: event.data, ["state.scrollY"]: true})
  let ids = (event.data.map(x=>x.id))
  const action119 = ids
  const action118 = await dw.app.run("audio.bulk_edit_order", {"ids": ids})
  
        if ((action118.status) === ("error")) {
          const action120message = (action118.message || "操作错误！")
          const action120title = ("提示")
          action120message && dw.alert(action120title, action120message)
          return {}
        }
        
}

const action115 = actions['func19'] = function (store, event) {
  const state = store.state
  const action116 = store.commit('setState', {["state.scrollY"]: false})
}

const action127 = actions['func20'] = function (store, event) {
  const state = store.state
  if (!state.editPop) {
    const action146 = JSON.parse(JSON.stringify(event.context.eventData))
    const action131 = store.commit('setState', {["state.currentItem"]: action146, ["state.formData"]: action146.data})
  }
  const action129 = store.commit('setState', {["state.editPop"]: !state.editPop})
}

const action132 = actions['func21'] = function (store, event) {
  const state = store.state
  
        if (!!(state.currentItem.data.type === 'system') === (true)) {
          const action157message = ("")
          const action157title = ("提示")
          action157message && dw.alert(action157title, action157message)
          return {}
        }
        
  const action133 = store.commit('setState', {["state.namePop"]: true, ["state.editPop"]: false})
}

const action148 = actions['func22'] = async function (store, event) {
  const state = store.state
  if (!state.playing) {
    const action156 = await (async (store, event) => {
if(dw.platform === 'rnapp'){
  console.log('Loading Sound');
  const { sound } = await Audio.Sound.createAsync(
    {
      uri: state.currentItem.data.url
    },
    {
      isLooping: false,
      shouldPlay: true,
    },
    (status)=>{
      if(status.didJustFinish){
        store.commit('setState', {["state.playing"]: false})
      }
    }
  );
  console.log('Playing Sound');
  await sound.playAsync();
}
})(store, event)
  }
  const action149 = store.commit('setState', {["state.playing"]: !state.playing})
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
xdw1ga: {
  color: "#181818",
  fontSize: pm(13),
  lineHeight: pm(31),
},
xdw1gb: {
  flexDirection: "column",
},
xdw1gc: {
  color: "#FF6D6D",
  fontSize: pm(13),
  lineHeight: pm(31),
},
xdw1gd: {
  marginRight: pm(5),
  flexDirection: "column",
},
xdw1ge: {
  color: "#999999",
  fontSize: pm(13),
  lineHeight: pm(31),
},
xdw1gf: {
  flexDirection: "row",
},
xdw1gg: {
  right: pm(10),
  flexDirection: "column",
},
xdw1gh: {
  width: pm(20),
  height: pm(20),
  marginRight: pm(9),
},
xdw1gi: {
  color: "#181818",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw1gj: {
  flexGrow: 1,
  alignItems: "center",
  flexDirection: "row",
},
xdw1gk: {
  width: pm(310),
  height: pm(43),
  flexGrow: 1,
  alignItems: "center",
  flexShrink: 0,
  flexDirection: "row",
  justifyContent: "flex-start",
},
xdw1gl: {
  color: "#ffffff",
  fontSize: pm(13),
  lineHeight: pm(18),
},
xdw1gm: {
  width: pm(55),
  height: pm(43),
  flexGrow: 1,
  alignItems: "center",
  flexShrink: 0,
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#FF6D6D",
},
xdw1gn: {
  width: pm(310),
  height: pm(43),
  marginLeft: pm(10),
  borderBottomWidth: pm(1),
  borderBottomColor: "#F0F0F0",
  flexDirection: "row",
},
xdw1go: {
  marginTop: pm(10),
  flexDirection: "column",
  backgroundColor: "#ffffff",
},
xdw1gp: {
  marginRight: pm(10),
  flexDirection: "column",
},
xdw1gq: {},
xdw1gr: {
  width: pm(310),
  height: pm(43),
  marginLeft: pm(10),
  borderBottomWidth: pm(1),
  borderBottomColor: "#F0F0F0",
  flexDirection: "row",
  backgroundColor: "#ffffff",
},
xdw1gs: {
  flex: 1,
  width: "100%",
  flexGrow: 1,
},
xdw1gt: {
  width: pm(29),
  height: pm(29),
},
xdw1gu: {
  width: pm(56),
  bottom: pm(29),
  height: pm(56),
  position: "absolute",
  borderTopWidth: pm(1),
  borderTopColor: "#FFF0CF",
  shadowOffset: {width: pm(0), height: pm(3)},
  shadowRadius: pm(12),
  shadowColor: "rgb(0, 0, 0)",
  shadowOpacity: 0.1,
  elevation: 2,
  overflow: "hidden",
  alignItems: "center",
  borderLeftWidth: pm(1),
  borderLeftColor: "#FFF0CF",
  marginLeft: pm(131),
  borderRightWidth: pm(1),
  borderRightColor: "#FFF0CF",
  borderBottomWidth: pm(1),
  borderBottomColor: "#FFF0CF",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw1gv: {
  flexGrow: 1,
  position: "relative",
  flexDirection: "column",
  backgroundColor: "#F8F8F8",
},
xdw1gw: {
  color: "#999999",
  fontSize: pm(12),
  marginTop: pm(44),
  lineHeight: pm(17),
  marginBottom: pm(25),
},
xdw1gx: {
  width: pm(77),
  height: pm(77),
},
xdw1gy: {
  marginBottom: pm(94),
  flexDirection: "column",
},
xdw1gz: {
  width: pm(40),
  height: pm(10),
},
xdw1h0: {
  color: "#999999",
  fontSize: pm(12),
  lineHeight: pm(17),
  marginLeft: pm(7),
  marginRight: pm(7),
},
xdw1h1: {
  marginTop: pm(44),
  alignItems: "center",
  marginBottom: pm(25),
  flexDirection: "row",
},
xdw1h2: {
  top: pm(-1),
  left: pm(-1),
  zIndex: 2,
  position: "absolute",
  flexDirection: "column",
},
xdw1h3: {
  position: "relative",
  marginBottom: pm(94),
  flexDirection: "column",
},
xdw1h4: {
  width: pm(320),
  height: pm(256),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "flex-start",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
},
xdw1h5: {
  flex: 1,
  zIndex: 10,
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "flex-end",
},
xdw1h6: {
  color: "#333333",
  fontSize: pm(14),
  textAlign: "center",
  lineHeight: pm(19),
  paddingTop: pm(13),
  paddingBottom: pm(13),
},
xdw1h7: {
  borderBottomWidth: pm(0),
  borderBottomColor: "#eeeeee",
  justifyContent: "center",
},
xdw1h8: {
  width: pm(250),
  height: pm(38),
  fontSize: pm(15),
  borderTopWidth: pm(0),
  borderTopColor: "#ddd",
  borderLeftWidth: pm(0),
  borderLeftColor: "#ddd",
  lineHeight: pm(21),
  marginLeft: pm(10),
  paddingTop: 0,
  borderRightWidth: pm(0),
  borderRightColor: "#ddd",
  paddingLeft: 0,
  borderBottomWidth: pm(0),
  borderBottomColor: "#ddd",
  paddingRight: 0,
  paddingBottom: 0,
},
xdw1h9: {
  width: pm(20),
  height: pm(20),
  marginLeft: "auto",
  marginRight: pm(10),
},
xdw1ha: {
  width: pm(300),
  height: pm(41),
  borderTopWidth: pm(1),
  borderTopColor: "#FFD355",
  overflow: "hidden",
  alignItems: "center",
  borderLeftWidth: pm(1),
  borderLeftColor: "#FFD355",
  borderRightWidth: pm(1),
  borderRightColor: "#FFD355",
  borderBottomWidth: pm(1),
  borderBottomColor: "#FFD355",
  flexDirection: "row",
  borderTopLeftRadius: pm(7),
  borderTopRightRadius: pm(7),
  borderBottomLeftRadius: pm(7),
  borderBottomRightRadius: pm(7),
},
xdw1hb: {
  marginBottom: pm(10),
  flexDirection: "row",
},
xdw1hc: {
  fontSize: pm(14),
  fontWeight: "600",
  lineHeight: pm(19),
},
xdw1hd: {
  width: pm(144),
  height: pm(38),
  borderTopWidth: pm(0),
  borderTopColor: "transparent",
  textAlign: "left",
  alignItems: "center",
  borderLeftWidth: pm(0),
  borderLeftColor: "transparent",
  borderRightWidth: pm(0),
  borderRightColor: "transparent",
  borderBottomWidth: pm(0),
  borderBottomColor: "transparent",
  flexDirection: "column",
  justifyContent: "center",
},
xdw1he: {
  width: pm(144),
  height: pm(38),
  alignItems: "center",
  marginRight: pm(13),
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#f8f8f8",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw1hf: {
  width: pm(144),
  height: pm(38),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "rgba(255, 218, 103, 1)",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdw1hg: {
  width: pm(300),
  flexDirection: "row",
},
xdw1hh: {
  width: pm(320),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(29),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
},
xdw1hi: {
  flex: 1,
  zIndex: 10,
  alignItems: "flex-end",
  flexDirection: "row",
  justifyContent: "center",
},
xdw1hj: {
  color: "#000000",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdw1hk: {
  alignItems: "center",
  paddingTop: pm(13),
  borderBottomWidth: pm(1),
  borderBottomColor: "#F0F0F0",
  flexDirection: "row",
  paddingBottom: pm(13),
},
xdw1hl: {
  color: "#000000",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
  marginRight: pm(17),
},
xdw1hm: {
  width: pm(13),
  height: pm(17),
},
xdw1ho: {
  color: "#666666",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
  marginLeft: pm(5),
},
xdw1hp: {
  color: "#000000",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
  marginRight: pm(7),
},
xdw1hq: {
  width: pm(320),
  paddingTop: pm(9),
  paddingLeft: pm(17),
  flexDirection: "column",
  paddingBottom: pm(38),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
},
xdw1hr: {
  flex: 1,
  width: pm(320),
  zIndex: 10,
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "flex-end",
  backgroundColor: "#ffffff",
}
});
const slide = {"type":"171146","key":"c1711461","slug":null,"randomid":"id_15112b6500eb33d6d0ee5814","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View2":{"ctx_map":{}},"View5":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image3":{"ctx_map":{"fop":"e,40,40","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image4":{"ctx_map":{"fop":"e,300,300","src":"u/dev064/2023/03/01/Ci3dEsML8eZf557NwcQkPE/企业微信截图_20230301184714.png"}},"Image5":{"ctx_map":{"fop":"e,140,140","src":"u/dev064/2023/03/02/XH5bcJo6ygkApM7dnfhjQS/企业微信截图_20230302090424.png"}},"Image6":{"ctx_map":{"fop":"e,140,140","src":"u/dev064/2023/03/02/BLUbzAvqdxFZY4cb3XcJSV/企业微信截图_202303020917361.png"}},"Image7":{"ctx_map":{"fop":"e,80,20","src":"u/dev064/2023/03/02/6Z9ZWypyqnarivWTUENcbb/企业微信截图_20230302092213.png"}},"Image8":{"ctx_map":{"fop":"e,80,20","src":"u/dev064/2023/03/02/efUVNFQTXDigbVzyq24QCY/企业微信截图_20230302092236.png"}},"Image9":{"ctx_map":{"fop":"e,50,50","src":"u/dev064/2023/03/04/S9jJE2ZqQn3VqjvW43D3dk/企业微信截图_20230302142030.png"}},"Modal1":{"ctx_map":{"mask":true,"value":false,"baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Modal2":{"ctx_map":{"mask":true,"value":false,"baseIndex":2000,"maskClosable":true,"destroyOnClose":false,"appendKeyboardHeight":true}},"Modal3":{"ctx_map":{"mask":true,"value":false,"position":"center","baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Text12":{"ctx_map":{"text":"这是一个文本组件"}},"Text14":{"ctx_map":{"text":"编辑"}},"Text15":{"ctx_map":{"text":"删除"}},"Text16":{"ctx_map":{"text":"取消"}},"Text18":{"ctx_map":{"text":"点击录音"}},"Text19":{"ctx_map":{"text":"点击录音"}},"Text20":{"ctx_map":{"text":"确认"}},"Text21":{"ctx_map":{"text":"取消"}},"Text22":{"ctx_map":{"text":"命名"}},"Text23":{"ctx_map":{"text":"删除"}},"Text25":{"ctx_map":{"text":"这是一个文本组件"}},"Text26":{"ctx_map":{"text":"重命名"}},"Text27":{"ctx_map":{"text":"试听"}},"Text28":{"ctx_map":{"text":"取消"}},"Text29":{"ctx_map":{"text":"试听"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"View20":{"ctx_map":{}},"View21":{"ctx_map":{}},"View22":{"ctx_map":{}},"View23":{"ctx_map":{}},"View24":{"ctx_map":{}},"View25":{"ctx_map":{}},"View26":{"ctx_map":{}},"View27":{"ctx_map":{}},"View28":{"ctx_map":{}},"View29":{"ctx_map":{}},"View30":{"ctx_map":{}},"View31":{"ctx_map":{}},"View32":{"ctx_map":{}},"View34":{"ctx_map":{}},"View35":{"ctx_map":{}},"View36":{"ctx_map":{}},"View38":{"ctx_map":{}},"View39":{"ctx_map":{}},"View40":{"ctx_map":{}},"View41":{"ctx_map":{}},"View45":{"ctx_map":{}},"View46":{"ctx_map":{}},"View47":{"ctx_map":{}},"View48":{"ctx_map":{}},"Image10":{"ctx_map":{"fop":"e,40,40","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Image11":{"ctx_map":{"fop":"e,130,170","src":"u/dev064/2023/06/15/YKYCCjFgztZ6EP7SUMN9e7/编组4x.png","buildToLocal":true}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewIf5":{"ctx_map":{"value":true}},"ViewIf7":{"ctx_map":{"value":true}},"ViewIf8":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewFor2":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"ViewIf10":{"ctx_map":{"value":true}},"ViewIf11":{"ctx_map":{"value":true}},"SvgImage2":{"ctx_map":{"src":"u/dev064/2023/04/26/UDw92wRgeawHqNVjjGvHRn/980419.svg","color":"#c9c9c9","width":18,"height":18,"SvgImageManage":"SvgImageManage"}},"DwappCloud4":{"ctx_map":{"numberb1":60,"numberb2":40,"range_rem1":"4px"}},"DwappCloud5":{"ctx_map":{"numberb1":55}},"DwappCloud6":{"ctx_map":{"bool1":true,"bool2":false,"text1":"音效编辑","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"DwappCloud9":{"ctx_map":{"bool1":true,"text1":"18pm","text2":"18pm","image1":"u/dev064/2023/03/01/moxNkoLyrMKUFg2bfS9x5R/SketchPng8141b19c4766ab5e73849b84c0a48779747796c199c154adbfcea8c703d6cee7.png","image2":"u/dev064/2023/03/01/pwBaNEGk3uZTb6mWhscFmM/SketchPng74b9a31b4d49ae3bbde44f8c192072f3a848c1549574511dc2220abd9ef72aef.png"}},"ScrollView1":{"ctx_map":{"type":"list","scrollY":true,"showScrollbar":true}},"DwappCloud10":{"ctx_map":{"style1":null,"numberb1":1,"numberb2":43}},"DwappCloud11":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"NativeInput1":{"ctx_map":{"type":"text"}},"NativeButton1":{"ctx_map":{"type":"button"}},"NativeButton2":{"ctx_map":{"type":"button"}}}};
slide.components.DwappCloud6.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  flexDirection: "column",
};
slide.components.DwappCloud10.ctx_map.style1 = {
  flexDirection: "column",
};
slide.components.DwappCloud11.ctx_map.valueStyle = {
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
slide.components.DwappCloud11.ctx_map.containerStyle = {
  marginBottom: pm(18),
  flexDirection: "column",
};
slide.components.DwappCloud11.ctx_map.valueInputStyle = {
  color: "#333333",
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-audio';

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
      <Xbenchc176286 /* DwappCloud6 */ isCuzBtn={ slide.components.DwappCloud6.ctx_map.bool1 } backConfirm={ slide.components.DwappCloud6.ctx_map.bool2 } eventData={ slide.components.DwappCloud6.ctx_map.prop1 } eventData2={ slide.components.DwappCloud6.ctx_map.prop2 } title={ slide.components.DwappCloud6.ctx_map.text1 } confirmTitle={ slide.components.DwappCloud6.ctx_map.text2 } confirmText={ slide.components.DwappCloud6.ctx_map.text3 } cancelText={ slide.components.DwappCloud6.ctx_map.text4 } backgroundColor={ slide.components.DwappCloud6.ctx_map.color1 } confirmColor={ slide.components.DwappCloud6.ctx_map.color2 } cancelColor={ slide.components.DwappCloud6.ctx_map.color3 } backIcon={ slide.components.DwappCloud6.ctx_map.image1 } cuzBtnIcon={ slide.components.DwappCloud6.ctx_map.image2 } titleStyle={ slide.components.DwappCloud6.ctx_map.style1 } screenType={ slide.components.DwappCloud6.ctx_map.select1 } ><View /* View2 */   style={styles.xdw1gg}>{!!(state.mode === 'preview') /* ViewIf1 */ && (<><XbenchcView /* View9 */   viewStyle={styles.xdw1gb} onClick={getEvent('View9:onClick:func5:', {}, bagForKeyValue, bagForIndex)}><Text /* Text14 */ style={styles.xdw1ga} >{slide.components.Text14.ctx_map.text}</Text></XbenchcView></>)}
{!!(state.mode === 'edit') /* ViewIf2 */ && (<><View /* View12 */   style={styles.xdw1gf}><XbenchcView /* View10 */   viewStyle={styles.xdw1gd} onClick={getEvent('View10:onClick:func7:', {}, bagForKeyValue, bagForIndex)}><Text /* Text15 */ style={styles.xdw1gc} >{slide.components.Text15.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View11 */   viewStyle={styles.xdw1gb} onClick={getEvent('View11:onClick:func5:', {}, bagForKeyValue, bagForIndex)}><Text /* Text16 */ style={styles.xdw1ge} >{slide.components.Text16.ctx_map.text}</Text></XbenchcView></View></>)}</View></Xbenchc176286>
<View /* View8 */   style={styles.xdw1gv}><XbenchcScrollView /* ScrollView1 */ style={styles.xdw1gs} scrollY={ state.scrollY } showScrollbar={ true } >{!!(state.mode === 'preview') /* ViewIf7 */ && (<><View /* View5 */   style={styles.xdw1go}>{(state.audio_list).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><Xbenchc174825 /* DwappCloud5 */ offset={ slide.components.DwappCloud5.ctx_map.numberb1 } ><XbenchcView /* View32 */   viewStyle={styles.xdw1gn} onClick={getEvent('View32:onClick:func20:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><View /* View30 */   style={styles.xdw1gk}><View /* View34 */   style={styles.xdw1gj}><XbenchcImage /* Image3 */ style={styles.xdw1gh} source={dwtools.qiniu(bagForItem.data.icon, slide.components.Image3.ctx_map.fop)}  />
<Text /* Text12 */ style={styles.xdw1gi} >{bagForItem.data.display_name}</Text></View></View>
<XbenchcView /* View31 */   viewStyle={styles.xdw1gm} onClick={getEvent('View31:onClick:func17:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}><Text /* Text23 */ style={styles.xdw1gl} >{slide.components.Text23.ctx_map.text}</Text></XbenchcView></XbenchcView></Xbenchc174825></ViewForItem> })}</View></>)}
{!!(state.mode === 'edit') /* ViewIf8 */ && (<><View /* View35 */   style={styles.xdw1go}><Xbenchc186881 /* DwappCloud10 */ bindData={ state.audio_list } containerStyle={ slide.components.DwappCloud10.ctx_map.style1 } numColumns={ slide.components.DwappCloud10.ctx_map.numberb1 } itemHeight={ slide.components.DwappCloud10.ctx_map.numberb2 }  onDragRelease={getEvent('DwappCloud10:onDragRelease:func18:', {}, bagForKeyValue, bagForIndex)}>{(state.audio_list).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor2' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor2 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><View /* View36 */   style={styles.xdw1gr}><View /* View38 */   style={styles.xdw1gk}><View /* View41 */   style={styles.xdw1gj}><XbenchcImage /* Image10 */ style={styles.xdw1gh} source={dwtools.qiniu(bagForItem.data.icon, slide.components.Image10.ctx_map.fop)}  />
<Text /* Text25 */ style={styles.xdw1gi} >{bagForItem.data.display_name}</Text></View>
{!!(bagForItem.data.type === 'customer') /* ViewIf10 */ && (<><View /* View40 */   style={styles.xdw1gp}><Xbenchc168616 /* DwappCloud9 */ value={ bagForItem.is_select } eventData={ bagForIndex } eventData2={ slide.components.DwappCloud9.ctx_map.prop2 } imageWidth={ slide.components.DwappCloud9.ctx_map.text1 } imageHeight={ slide.components.DwappCloud9.ctx_map.text2 } trueImage={ slide.components.DwappCloud9.ctx_map.image1 } falseImage={ slide.components.DwappCloud9.ctx_map.image2 }  onChange={getEvent('DwappCloud9:input:func6:', {eventData: bagForIndex}, bagForKeyValue, bagForIndex)}></Xbenchc168616></View></>)}
<View /* View39 */   style={styles.xdw1gp}><Image /* SvgImage2 */ style={[ styles.xdw1gq, { width: pm(18), height: pm(18) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev064/2023/04/26/UDw92wRgeawHqNVjjGvHRn/980419.svg"), width: pm(18), height: pm(18) }} /></View></View></View></ViewForItem> })}</Xbenchc186881></View></>)}</XbenchcScrollView>
<XbenchcView /* View7 */   viewStyle={styles.xdw1gu} onClick={getEvent('View7:onClick:func8:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image4 */ style={styles.xdw1gt} source={dwtools.qiniu(slide.components.Image4.ctx_map.src, slide.components.Image4.ctx_map.fop)}  /></XbenchcView></View>
<XbenchcModal /* Modal1 */ rootStyle={styles.xdw1h5} value={ state.record_pop } mask={ true } maskClosable={ true }  onValueChange={getEvent('Modal1:onValueChange:func9:', {}, bagForKeyValue, bagForIndex)}><View /* View18 */   style={styles.xdw1h4}>{!!(!state.recording) /* ViewIf4 */ && (<><Text /* Text18 */ style={styles.xdw1gw} >{slide.components.Text18.ctx_map.text}</Text>
<XbenchcView /* View19 */   viewStyle={styles.xdw1gy} onClick={getEvent('View19:onClick:func11:', {}, bagForKeyValue, bagForIndex)}><XbenchcImage /* Image5 */ style={styles.xdw1gx} source={dwtools.qiniu(slide.components.Image5.ctx_map.src, slide.components.Image5.ctx_map.fop)}  /></XbenchcView></>)}
{!!(state.recording) /* ViewIf5 */ && (<><View /* View21 */   style={styles.xdw1h1}><XbenchcImage /* Image7 */ style={styles.xdw1gz} source={dwtools.qiniu(slide.components.Image7.ctx_map.src, slide.components.Image7.ctx_map.fop)}  />
<Text /* Text19 */ style={styles.xdw1h0} >{"0:" + String(state.record_seconds).padStart("2", "0")}</Text>
<XbenchcImage /* Image8 */ style={styles.xdw1gz} source={dwtools.qiniu(slide.components.Image8.ctx_map.src, slide.components.Image8.ctx_map.fop)}  /></View>
<XbenchcView /* View20 */   viewStyle={styles.xdw1h3} onClick={getEvent('View20:onClick:func12:', {}, bagForKeyValue, bagForIndex)}><View /* View22 */   style={styles.xdw1h2}><Xbenchc173692 /* DwappCloud4 */ value={ (state.record_seconds / 15) * 100 } radius={ 75 } swidth={ slide.components.DwappCloud4.ctx_map.range_rem1 } ></Xbenchc173692></View>
<XbenchcImage /* Image6 */ style={styles.xdw1gx} source={dwtools.qiniu(slide.components.Image6.ctx_map.src, slide.components.Image6.ctx_map.fop)}  /></XbenchcView></>)}</View></XbenchcModal>
<XbenchcModal /* Modal2 */ rootStyle={styles.xdw1hi} value={ state.namePop } mask={ true } maskClosable={ true } appendKeyboardHeight={ true } ><View /* View23 */   style={styles.xdw1hh}><View /* View29 */   style={styles.xdw1h7}><Text /* Text22 */ style={styles.xdw1h6} >{slide.components.Text22.ctx_map.text}</Text></View>
<View /* View27 */   style={styles.xdw1hb}><View /* View28 */   style={styles.xdw1ha}><XbenchcInput /* NativeInput1 */ style={styles.xdw1h8} value={state.formData.display_name} type={slide.components.NativeInput1.ctx_map.type}  onChange={getEvent('NativeInput1:onChange:func15:', {}, bagForKeyValue, bagForIndex)} />
<XbenchcImage /* Image9 */ style={styles.xdw1h9} source={dwtools.qiniu(slide.components.Image9.ctx_map.src, slide.components.Image9.ctx_map.fop)}  /></View></View>
<View /* View24 */   style={styles.xdw1hg}><View /* View26 */   style={styles.xdw1he}><XbenchcButton /* NativeButton2 */ viewStyle={styles.xdw1hd} onClick={getEvent('NativeButton2:onClick:func14:', {}, bagForKeyValue, bagForIndex)}><Text /* Text21 */ style={styles.xdw1hc} >{slide.components.Text21.ctx_map.text}</Text></XbenchcButton></View>
<View /* View25 */   style={styles.xdw1hf}><XbenchcButton /* NativeButton1 */ viewStyle={styles.xdw1hd} onClick={getEvent('NativeButton1:onClick:func16:', {}, bagForKeyValue, bagForIndex)}><Text /* Text20 */ style={styles.xdw1hc} >{slide.components.Text20.ctx_map.text}</Text></XbenchcButton></View></View></View></XbenchcModal>
<XbenchcModal /* Modal3 */ rootStyle={styles.xdw1hr} value={ state.currentItem && state.editPop } mask={ true } maskClosable={ true }  onValueChange={getEvent('Modal3:onValueChange:func9:', {}, bagForKeyValue, bagForIndex)}><View /* View46 */   style={styles.xdw1hq}><XbenchcView /* View45 */   viewStyle={styles.xdw1hk} onClick={getEvent('View45:onClick:func21:', {}, bagForKeyValue, bagForIndex)}><Text /* Text26 */ style={[styles.xdw1hj, ({
    color: state.currentItem ? state.currentItem.data.type === 'system' ? '#AAAAAA' : '#000000' : "#000000"
})]} >{slide.components.Text26.ctx_map.text}</Text></XbenchcView>
<XbenchcView /* View47 */   viewStyle={styles.xdw1hk} onClick={getEvent('View47:onClick:func22:', {}, bagForKeyValue, bagForIndex)}><Text /* Text27 */ style={styles.xdw1hl} >{slide.components.Text27.ctx_map.text}</Text>
{!!(state.playing) /* ViewIf11 */ && (<><XbenchcImage /* Image11 */ style={styles.xdw1hm} source={dwtools.getLocalResource('xdw1hn_lthar1hv')}  />
<Text /* Text29 */ style={styles.xdw1ho} >{(state.currentItem ? state.currentItem.data.duration : 0) + "s"}</Text></>)}</XbenchcView>
<XbenchcView /* View48 */   viewStyle={styles.xdw1hk} onClick={getEvent('View48:onClick:func20:', {}, bagForKeyValue, bagForIndex)}><Text /* Text28 */ style={styles.xdw1hp} >{slide.components.Text28.ctx_map.text}</Text></XbenchcView></View></XbenchcModal>
<Xbenchc275104 /* DwappCloud11 */ valueStyle={ slide.components.DwappCloud11.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud11.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud11.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud11:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104>
    </ErrorBoundary>
  )
}
