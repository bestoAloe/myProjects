
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import Xbenchc176286 from '../components/Xbenchc176286'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcInput from '../../xbench/xbenchc/components/XbenchcInput'
import XbenchcButton from '../../xbench/xbenchc/components/XbenchcButton'
import XbenchcModal from '../../xbench/xbenchc/components/XbenchcModal'
import XbenchcPickerView from '../../xbench/xbenchc/components/XbenchcPickerView'

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
  const action34 = state.formData = ({/**/  name:undefined,/**/  image:"https://dev064.d2scdn.com/u/dev070/2023/02/27/uRTwKBr7UNgizTPgeC3Jwc/WechatIMG79.jpeg",/**/  type:'cat',/**/  device_member_uuid:undefined,/**/  category_uuid:undefined,/**/  gender:undefined,/**/  _gender_display:undefined,/**/  birthday_display:undefined,/**/  birthday:undefined,/**/  weight:0,/**/  is_ste:undefined,/**/  siteuser_id:undefined,/**/  food_category_uuid: '8e72ad44-4e3e-409d-b15c-5f9892fc418b'/**/})
  /* action45: 昵称 */
  const action46 = state.namePop = (false)
  /* action114: 体重 */
  const action115 = state.weightPop = (false)
  /* action54: 类型 */
  const action55 = state.typePop = (false)
  /* action65: 性别 */
  const action66 = state.genderPop = (false)
  /* action77: 弹窗 */
  const action78 = state.birthdayPopup = (false)
  const action92 = state.birthdayValue = (null)
  const action93 = state.birthdayPickerRange = ([])
  const action141 = state.platform = ("dwapp")
  return state
}

const action41 = actions['onShow'] = async function (store, event) {
  const state = store.state
  const action138 = store.commit('setState', {["state.platform"]: dw.platform})
  const action140 = await Promise.all([
    (async () => {
      const action42 = await store.dispatch("func4", {})
      return action42
    })(),
    (async () => {
      const action94 = await store.dispatch("func16", {})
      return action94
    })(),
  ])

}

const action30 = actions['func3'] = function (store, event) {
  const state = store.state
  let slug = (event.context.eventData)
  const action31 = slug
  const action32 = dw.app.goToPappUrl(slug, {}, {redirectTo: false})
}

const action39 = actions['func4'] = async function (store, event) {
  const state = store.state
  const action40 = await (async (store, event) => {
const key = "edit_petinfo/formData"
const jsonValue = JSON.stringify(state.formData)
if(dw.platform === 'rnapp'){
  const AsyncStorage = dw.getNativePackage('AsyncStorage')
  await AsyncStorage.setItem(key, jsonValue)
}
else{
  window.localStorage.setItem(key, jsonValue)
}
})(store, event)
}

const action48 = actions['func7'] = function (store, event) {
  const state = store.state
  const action49 = store.commit('setState', {["state.namePop"]: true})
}

const action50 = actions['func8'] = function (store, event) {
  const state = store.state
  const action51 = store.commit('setState', {["state.namePop"]: false})
}

const action52 = actions['func9'] = function (store, event) {
  const state = store.state
  const action53 = store.commit('setState', {["state.formData.name"]: event.data.detail.value})
}

const action57 = actions['func10'] = function (store, event) {
  const state = store.state
  const action58 = store.commit('setState', {["state.typePop"]: true})
}

const action59 = actions['func11'] = function (store, event) {
  const state = store.state
  const action60 = store.commit('setState', {["state.typePop"]: false})
}

const action61 = actions['func12'] = async function (store, event) {
  const state = store.state
  const action62 = store.commit('setState', {["state.formData.type"]: event.context.eventData})
  const action63 = await store.dispatch("func11", {})
}

const action68 = actions['func13'] = function (store, event) {
  const state = store.state
  const action69 = store.commit('setState', {["state.genderPop"]: true})
}

const action70 = actions['func14'] = function (store, event) {
  const state = store.state
  const action71 = store.commit('setState', {["state.genderPop"]: false})
}

const action72 = actions['func15'] = async function (store, event) {
  const state = store.state
  const action73 = store.commit('setState', {["state.formData.gender"]: event.context.eventData, ["state.formData._gender_display"]: event.context.eventData2})
  const action74 = await store.dispatch("func14", {})
}

const action80 = actions['func2'] = function (store, event) {
  const state = store.state
  if (state.formData.birthday) {
    const action83 = ((store, event) => {
const _birthday = new Date(state.formData.birthday)
return [_birthday.getFullYear()-1951, _birthday.getMonth(), _birthday.getDate()-1]
})(store, event)
    const action84 = console.log('[func2#action84] 打印(action83)的返回值', action83)
    const action85 = store.commit('setState', {["state.birthdayValue"]: action83})
  } else {
    const action87 = store.commit('setState', {["state.birthdayValue"]: [state.birthdayPickerRange[0].length, 0, 0]})
  }
  const action88 = store.commit('setState', {["state.birthdayPopup"]: true})
}

const action103 = actions['func18'] = function (store, event) {
  const state = store.state
  const action104 = store.commit('setState', {["state.birthdayPopup"]: false})
}

const action89 = actions['func16'] = function (store, event) {
  const state = store.state
  const action90 = ((store, event) => {
function generateOptions() {
  const options = [
    [],
    [],
    [],
  ];

  // 生成年份选项
  const currentYear = new Date().getFullYear();
  for (let i = currentYear - 30; i <= currentYear; i++) {
    options[0].push({ label: i.toString(), value: i });
  }

  // 生成月份选项
  for (let i = 1; i <= 12; i++) {
    options[1].push({ label: i.toString().padStart(2, '0'), value: i });
  }

  // 生成日期选项
  for (let i = 1; i <= 31; i++) {
    options[2].push({ label: i.toString().padStart(2, '0'), value: i });
  }

  return options;
}

const options = generateOptions();

return options
})(store, event)
  const action91 = store.commit('setState', {["state.birthdayPickerRange"]: action90})
}

const action95 = actions['func17'] = function (store, event) {
  const state = store.state
  /* action96: 计算实际日期 */
  const action106 = console.log('[func17#action106] state.birthdayValue', state.birthdayValue)
  let birthdayValue = (state.birthdayValue.detail.value)
  const action111 = birthdayValue
  const action112 = console.log('[func17#action112] 打印(birthdayValue)的返回值', birthdayValue)
  let _year = (new Date().getFullYear() - 30)
  const action105 = _year
  const action107 = console.log('[func17#action107] 打印(_year)的返回值', _year)
  let year = (String(birthdayValue[0]+_year))
  const action97 = year
  const action108 = console.log('[func17#action108] 打印(year)的返回值', year)
  let month = (String(birthdayValue[1]+1).padStart(2,0))
  const action98 = month
  const action109 = console.log('[func17#action109] 打印(month)的返回值', month)
  let date = (String(birthdayValue[2]+1).padStart(2,0))
  const action99 = date
  const action110 = console.log('[func17#action110] 打印(date)的返回值', date)
  const action100 = store.commit('setState', {["state.formData.birthday"]: year+'.'+ month +'.'+date, ["state.birthdayPopup"]: false})
}

const action117 = actions['func19'] = function (store, event) {
  const state = store.state
  const action118 = store.commit('setState', {["state.weightPop"]: true})
}

const action119 = actions['func20'] = function (store, event) {
  const state = store.state
  const action120 = store.commit('setState', {["state.weightPop"]: false})
}

const action121 = actions['func21'] = function (store, event) {
  const state = store.state
  const action122 = store.commit('setState', {["state.formData.weight"]: event.data.detail.value})
}

const action123 = actions['func22'] = function (store, event) {
  const state = store.state
  const action126 = ((store, event) => {
return state.formData.name
&& state.formData.image
&& state.formData.type 
// && state.formData.category_uuid
&& state.formData.gender
&& state.formData.birthday 
&& state.formData.weight 
// && state.formData.food_category_uuid
})(store, event)
  
        if (!!(!action126) === (true)) {
          const action127message = ("")
          const action127title = ("提示")
          action127message && dw.alert(action127title, action127message)
          return {}
        }
        
  const action128 = dw.app.goToPappUrl("smart_feed", {}, {redirectTo: false})
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

var action35 = actions['computed1'] = function (event, state) {
  var action36 = function (event) {
    return state.formData.name && state.formData.image && state.formData.type
    // && state.formData.category_uuid
    && state.formData.gender && state.formData.birthday && state.formData.weight;
    // && state.formData.food_category_uuid
  }(event);
  var action37 = console.log('[computed1#action37] 打印(action36)的返回值', action36);
  //MACRO:DEBUG window.vconsole.log('log:workflow', {func: 'computed1', action: 'action37', label: `打印(action36)的返回值`, valueVar: "action36", value: [action36]})
  return action36;
};

module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdwxc: {
  width: pm(15),
  height: pm(15),
  marginRight: pm(7),
},
xdwxe: {
  fontSize: pm(14),
  fontWeight: "500",
  lineHeight: pm(19),
},
xdwxf: {
  flexGrow: 1,
  alignItems: "center",
  marginBottom: pm(13),
  flexDirection: "row",
},
xdwxg: {
  color: "#999999",
  fontSize: pm(10),
  lineHeight: pm(15),
  marginBottom: pm(28),
},
xdwxh: {
  color: "#181818",
  fontSize: pm(20),
  textAlign: "center",
  fontWeight: "500",
  lineHeight: pm(25),
  marginRight: pm(5),
},
xdwxi: {
  color: "#181818",
  fontSize: pm(10),
  textAlign: "center",
  fontWeight: "500",
  lineHeight: pm(15),
},
xdwxj: {
  alignItems: "center",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: pm(13),
  flexDirection: "row",
},
xdwxk: {
  alignItems: "flex-start",
  paddingTop: pm(10),
  paddingLeft: pm(10),
  marginBottom: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
  justifyContent: "center",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(7),
  borderTopRightRadius: pm(7),
  borderBottomLeftRadius: pm(7),
  borderBottomRightRadius: pm(7),
},
xdwxl: {
  color: "#333333",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
},
xdwxm: {
  color: "#FFB155",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdwxn: {
  width: pm(12),
  height: pm(12),
},
xdwxp: {
  alignItems: "center",
  marginLeft: "auto",
  flexDirection: "row",
},
xdwxq: {
  marginBottom: pm(10),
  flexDirection: "row",
},
xdwxr: {
  color: "#181818",
  fontSize: pm(12),
  lineHeight: pm(17),
},
xdwxs: {
  color: "#AAAAAA",
  fontSize: pm(12),
  lineHeight: pm(17),
  marginRight: pm(3),
},
xdwxt: {
  width: pm(14),
  height: pm(14),
},
xdwxv: {
  alignItems: "center",
  marginLeft: "auto",
  marginRight: pm(0),
  flexDirection: "row",
},
xdwxw: {
  width: pm(280),
  alignItems: "center",
  flexDirection: "row",
},
xdwxx: {
  width: pm(290),
  height: pm(1),
  marginTop: pm(10),
  marginBottom: pm(10),
  flexDirection: "column",
  backgroundColor: "#F0F0F0",
},
xdwxy: {
  alignItems: "flex-start",
  paddingTop: pm(10),
  paddingLeft: pm(10),
  marginBottom: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
  justifyContent: "center",
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(7),
  borderTopRightRadius: pm(7),
  borderBottomLeftRadius: pm(7),
  borderBottomRightRadius: pm(7),
},
xdwxz: {
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(17),
},
xdwy0: {
  width: pm(300),
  height: pm(38),
  marginTop: pm(16),
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: "#FFD355",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdwy1: {
  width: pm(320),
  flexGrow: 1,
  position: "relative",
  paddingTop: pm(15),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
  backgroundColor: "#F8F8F8",
},
xdwy2: {
  color: "#333333",
  fontSize: pm(14),
  textAlign: "center",
  lineHeight: pm(19),
  paddingTop: pm(13),
  paddingBottom: pm(13),
},
xdwy3: {
  borderBottomWidth: pm(0),
  borderBottomColor: "#eeeeee",
  justifyContent: "center",
},
xdwy4: {
  width: pm(250),
  height: pm(38),
  fontSize: pm(15),
  borderTopWidth: pm(0),
  borderTopColor: "#ddd",
  borderLeftWidth: pm(0),
  borderLeftColor: "#ddd",
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
xdwy5: {
  width: pm(20),
  height: pm(20),
  marginLeft: "auto",
  marginRight: pm(10),
},
xdwy7: {
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
xdwy8: {
  fontSize: pm(14),
  fontWeight: "600",
  lineHeight: pm(19),
},
xdwy9: {
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
xdwya: {
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
xdwyb: {
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
xdwyc: {
  width: pm(300),
  flexDirection: "row",
},
xdwyd: {
  width: pm(320),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(29),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
},
xdwye: {
  flex: 1,
  zIndex: 10,
  alignItems: "flex-end",
  flexDirection: "row",
  justifyContent: "center",
},
xdwyf: {
  color: "#181818",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(36),
},
xdwyg: {
  flexDirection: "column",
},
xdwyh: {
  width: pm(310),
  height: pm(1),
  marginTop: pm(10),
  marginLeft: pm(10),
  marginBottom: pm(10),
  flexDirection: "column",
  backgroundColor: "#F0F0F0",
},
xdwyi: {
  marginTop: pm(10),
  alignItems: "center",
  marginBottom: pm(10),
  flexDirection: "column",
  justifyContent: "center",
},
xdwyj: {
  width: pm(300),
  height: pm(38),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#f8f8f8",
  borderTopLeftRadius: pm(19),
  borderTopRightRadius: pm(19),
  borderBottomLeftRadius: pm(19),
  borderBottomRightRadius: pm(19),
},
xdwyk: {
  color: "#181818",
  fontSize: pm(12),
  fontWeight: "500",
  lineHeight: pm(30),
},
xdwyl: {
  borderBottomWidth: pm(1),
  borderBottomColor: "#eeeeee",
  justifyContent: "center",
},
xdwym: {
  flexDirection: "row",
},
xdwyn: {
  width: pm(141),
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
xdwyo: {
  width: pm(141),
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
xdwyp: {
  width: pm(141),
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
xdwyq: {
  width: pm(320),
  paddingLeft: pm(17),
  paddingRight: pm(17),
  flexDirection: "column",
  paddingBottom: pm(29),
  backgroundColor: "#ffffff",
  borderTopLeftRadius: pm(14),
  borderTopRightRadius: pm(14),
}
});
const slide = {"type":"173225","key":"c1732251","slug":null,"randomid":"id_2c677b140dc998dbc0d567fd","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{},"components":{"View3":{"ctx_map":{}},"Image4":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/03/03/4D7wNAhpSXVMqFjwpLhL7k/444.png","buildToLocal":true}},"Image5":{"ctx_map":{"fop":"e,300,300","src":"u/dev064/2023/03/03/hUQEs36DzPpvuMCb5XNEYj/向右1.png","buildToLocal":true}},"Image6":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/03/04/cDUdajGwziZvqrm9PCKWHc/333.png","buildToLocal":true}},"Image7":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/03/04/cDUdajGwziZvqrm9PCKWHc/333.png","buildToLocal":true}},"Image8":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/03/04/cDUdajGwziZvqrm9PCKWHc/333.png","buildToLocal":true}},"Image9":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/03/04/cDUdajGwziZvqrm9PCKWHc/333.png","buildToLocal":true}},"Modal1":{"ctx_map":{"mask":true,"value":false,"baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Modal2":{"ctx_map":{"mask":true,"value":false,"baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Modal3":{"ctx_map":{"mask":true,"value":false,"baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Modal4":{"ctx_map":{"mask":true,"value":false,"baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Modal5":{"ctx_map":{"mask":true,"value":false,"baseIndex":2000,"maskClosable":true,"destroyOnClose":false}},"Text14":{"ctx_map":{"text":"计算每日喂食量"}},"Text15":{"ctx_map":{"text":"根据世界宠物营养联盟(pet nutrition alliance)和世界小动物兽医协会(wsava)建议,通过公式算出宠物每日所需的喂食量"}},"Text16":{"ctx_map":{"text":"--"}},"Text17":{"ctx_map":{"text":"克"}},"Text18":{"ctx_map":{"text":"创建宠物"}},"Text19":{"ctx_map":{"text":"选择已有宠物"}},"Text20":{"ctx_map":{"text":"头像"}},"Text21":{"ctx_map":{"text":"选择头像"}},"Text22":{"ctx_map":{"text":"填写昵称"}},"Text23":{"ctx_map":{"text":"昵称"}},"Text24":{"ctx_map":{"text":"选择类型"}},"Text25":{"ctx_map":{"text":"类型"}},"Text26":{"ctx_map":{"text":"选择品种"}},"Text27":{"ctx_map":{"text":"品种"}},"Text28":{"ctx_map":{"text":"选择性别"}},"Text29":{"ctx_map":{"text":"性别"}},"Text30":{"ctx_map":{"text":"选择生日"}},"Text31":{"ctx_map":{"text":"生日"}},"Text32":{"ctx_map":{"text":"填写体重"}},"Text33":{"ctx_map":{"text":"体重"}},"Text34":{"ctx_map":{"text":"填写体重"}},"Text35":{"ctx_map":{"text":"选择宠物粮"}},"Text36":{"ctx_map":{"text":"生成喂食方案"}},"Text37":{"ctx_map":{"text":"确认"}},"Text38":{"ctx_map":{"text":"取消"}},"Text39":{"ctx_map":{"text":"昵称"}},"Text41":{"ctx_map":{"text":"取消"}},"Text42":{"ctx_map":{"text":"喵星人"}},"Text43":{"ctx_map":{"text":"汪星人"}},"Text44":{"ctx_map":{"text":"取消"}},"Text45":{"ctx_map":{"text":"绝育GG"}},"Text46":{"ctx_map":{"text":"GG"}},"Text47":{"ctx_map":{"text":"MM"}},"Text48":{"ctx_map":{"text":"绝育MM"}},"Text49":{"ctx_map":{"text":"保存"}},"Text50":{"ctx_map":{"text":"取消"}},"Text51":{"ctx_map":{"text":"生日"}},"Text52":{"ctx_map":{"text":"确认"}},"Text53":{"ctx_map":{"text":"取消"}},"Text54":{"ctx_map":{"text":"体重(KG)"}},"View10":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View14":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"View17":{"ctx_map":{}},"View18":{"ctx_map":{}},"View19":{"ctx_map":{}},"View20":{"ctx_map":{}},"View21":{"ctx_map":{}},"View22":{"ctx_map":{}},"View23":{"ctx_map":{}},"View24":{"ctx_map":{}},"View25":{"ctx_map":{}},"View26":{"ctx_map":{}},"View27":{"ctx_map":{}},"View28":{"ctx_map":{}},"View29":{"ctx_map":{}},"View30":{"ctx_map":{}},"View31":{"ctx_map":{}},"View32":{"ctx_map":{}},"View33":{"ctx_map":{}},"View34":{"ctx_map":{}},"View35":{"ctx_map":{}},"View36":{"ctx_map":{}},"View37":{"ctx_map":{}},"View38":{"ctx_map":{}},"View39":{"ctx_map":{}},"View40":{"ctx_map":{}},"View41":{"ctx_map":{}},"View42":{"ctx_map":{}},"View43":{"ctx_map":{}},"View44":{"ctx_map":{}},"View45":{"ctx_map":{}},"View46":{"ctx_map":{}},"View47":{"ctx_map":{}},"View48":{"ctx_map":{}},"View49":{"ctx_map":{}},"View51":{"ctx_map":{}},"View52":{"ctx_map":{}},"View53":{"ctx_map":{}},"View54":{"ctx_map":{}},"View55":{"ctx_map":{}},"View56":{"ctx_map":{}},"View57":{"ctx_map":{}},"View58":{"ctx_map":{}},"View59":{"ctx_map":{}},"View60":{"ctx_map":{}},"View61":{"ctx_map":{}},"View62":{"ctx_map":{}},"View63":{"ctx_map":{}},"View64":{"ctx_map":{}},"View65":{"ctx_map":{}},"View66":{"ctx_map":{}},"View67":{"ctx_map":{}},"View68":{"ctx_map":{}},"View69":{"ctx_map":{}},"View70":{"ctx_map":{}},"View71":{"ctx_map":{}},"View72":{"ctx_map":{}},"View73":{"ctx_map":{}},"View74":{"ctx_map":{}},"View75":{"ctx_map":{}},"View76":{"ctx_map":{}},"View77":{"ctx_map":{}},"View78":{"ctx_map":{}},"View79":{"ctx_map":{}},"Image10":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/03/04/cDUdajGwziZvqrm9PCKWHc/333.png","buildToLocal":true}},"Image11":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/03/04/cDUdajGwziZvqrm9PCKWHc/333.png","buildToLocal":true}},"Image12":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/03/04/cDUdajGwziZvqrm9PCKWHc/333.png","buildToLocal":true}},"Image13":{"ctx_map":{"fop":"e,40,40","src":"u/dev064/2023/03/04/cDUdajGwziZvqrm9PCKWHc/333.png","buildToLocal":true}},"Image14":{"ctx_map":{"fop":"e,50,50","src":"u/dev064/2023/03/04/S9jJE2ZqQn3VqjvW43D3dk/企业微信截图_20230302142030.png","buildToLocal":true}},"Image15":{"ctx_map":{"fop":"e,50,50","src":"u/dev064/2023/03/04/S9jJE2ZqQn3VqjvW43D3dk/企业微信截图_20230302142030.png","buildToLocal":true}},"DwappCloud2":{"ctx_map":{"bool1":true,"bool2":false,"text1":"科学喂养方式","text2":"是否放弃本次编辑？","text3":"放弃","text4":"继续编辑","color1":"rgb(255, 255, 255)","color2":"rgb(153, 153, 153)","color3":"rgb(255, 188, 101)","image1":"u/dev064/2023/03/16/VyiLMtGwgVgxEoNWwupQPS/SketchPng1050417d0111d8cc547e15bde7bae41ecc8a6b3e32b117d72fa20f85cacd5356.png","image2":"u/dev064/2023/03/16/fpGe3aqGPAnNpXQBa6KkdL/SketchPngcfd37524555c89bcb457850ba11b5ef2ef2a1a1de82d213448c8203ef776e29b.png","style1":null,"select1":"portrait"}},"PickerView1":{"ctx_map":{"range":[[{"label":"上午","value":"am"},{"label":"下午","value":"pm"}]],"value":[0]}},"NativeInput1":{"ctx_map":{"type":"text"}},"NativeInput2":{"ctx_map":{"type":"number"}},"NativeButton1":{"ctx_map":{"type":"button"}},"NativeButton2":{"ctx_map":{"type":"button"}},"NativeButton4":{"ctx_map":{"type":"button"}},"NativeButton5":{"ctx_map":{"type":"button"}},"NativeButton6":{"ctx_map":{"type":"button"}},"NativeButton7":{"ctx_map":{"type":"button"}},"NativeButton8":{"ctx_map":{"type":"button"}},"NativeButton9":{"ctx_map":{"type":"button"}}}};
slide.components.DwappCloud2.ctx_map.style1 = {
  color: "#181818",
  fontSize: pm(15),
  fontWeight: "500",
  lineHeight: pm(21),
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-scient_feed';

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
<View /* View3 */   style={styles.xdwy1}><XbenchcView /* View10 */   viewStyle={styles.xdwxk} onClick={getEvent('View10:onClick:func3:', {eventData: "scient_feed"}, bagForKeyValue, bagForIndex)}><View /* View12 */   style={styles.xdwxf}><XbenchcImage /* Image4 */ style={styles.xdwxc} source={dwtools.getLocalResource('xdwxd_lthar0xq')}  />
<Text /* Text14 */ style={styles.xdwxe} >{slide.components.Text14.ctx_map.text}</Text></View>
<Text /* Text15 */ style={styles.xdwxg} >{slide.components.Text15.ctx_map.text}</Text>
<View /* View13 */   style={styles.xdwxj}><Text /* Text16 */ style={styles.xdwxh} >{computeds.computed1({}, state) ? "20" : "--"}</Text>
<Text /* Text17 */ style={styles.xdwxi} >{slide.components.Text17.ctx_map.text}</Text></View></XbenchcView>
<View /* View14 */   style={styles.xdwxq}><Text /* Text18 */ style={styles.xdwxl} >{slide.components.Text18.ctx_map.text}</Text>
<View /* View15 */   style={styles.xdwxp}><Text /* Text19 */ style={styles.xdwxm} >{slide.components.Text19.ctx_map.text}</Text>
<XbenchcImage /* Image5 */ style={styles.xdwxn} source={dwtools.getLocalResource('xdwxo_lthar0xr')}  /></View></View>
<XbenchcView /* View16 */   viewStyle={styles.xdwxy} onClick={getEvent('View16:onClick:func3:', {eventData: "scient_feed"}, bagForKeyValue, bagForIndex)}><XbenchcView /* View17 */   viewStyle={styles.xdwxw} onClick={getEvent('View17:onClick:func3:', {eventData: "edit_nickname"}, bagForKeyValue, bagForIndex)}><Text /* Text20 */ style={styles.xdwxr} >{slide.components.Text20.ctx_map.text}</Text>
<View /* View18 */   style={styles.xdwxv}><Text /* Text21 */ style={styles.xdwxs} >{slide.components.Text21.ctx_map.text}</Text>
<XbenchcImage /* Image6 */ style={styles.xdwxt} source={dwtools.getLocalResource('xdwxu_lthar0xr')}  /></View></XbenchcView>
<View /* View19 */   style={styles.xdwxx}></View>
<XbenchcView /* View20 */   viewStyle={styles.xdwxw} onClick={getEvent('View20:onClick:func7:', {eventData: "edit_nickname"}, bagForKeyValue, bagForIndex)}><Text /* Text23 */ style={styles.xdwxr} >{slide.components.Text23.ctx_map.text}</Text>
<View /* View21 */   style={styles.xdwxv}><Text /* Text22 */ style={styles.xdwxs} >{state.formData.name || "填写昵称"}</Text>
<XbenchcImage /* Image7 */ style={styles.xdwxt} source={dwtools.getLocalResource('xdwxu_lthar0xr')}  /></View></XbenchcView>
<View /* View22 */   style={styles.xdwxx}></View>
<XbenchcView /* View23 */   viewStyle={styles.xdwxw} onClick={getEvent('View23:onClick:func10:', {eventData: "edit_type"}, bagForKeyValue, bagForIndex)}><Text /* Text25 */ style={styles.xdwxr} >{slide.components.Text25.ctx_map.text}</Text>
<View /* View24 */   style={styles.xdwxv}><Text /* Text24 */ style={styles.xdwxs} >{state.formData.type === 'cat' ? '喵星人' : '汪星人'}</Text>
<XbenchcImage /* Image8 */ style={styles.xdwxt} source={dwtools.getLocalResource('xdwxu_lthar0xr')}  /></View></XbenchcView>
<View /* View25 */   style={styles.xdwxx}></View>
<XbenchcView /* View26 */   viewStyle={styles.xdwxw} onClick={getEvent('View26:onClick:func3:', {eventData: "edit_breed"}, bagForKeyValue, bagForIndex)}><Text /* Text27 */ style={styles.xdwxr} >{slide.components.Text27.ctx_map.text}</Text>
<View /* View27 */   style={styles.xdwxv}><Text /* Text26 */ style={styles.xdwxs} >{(state.formData && state.formData.category_uuid__toone) ? state.formData.category_uuid__toone.data.name : "选择品种"}</Text>
<XbenchcImage /* Image9 */ style={styles.xdwxt} source={dwtools.getLocalResource('xdwxu_lthar0xr')}  /></View></XbenchcView>
<View /* View28 */   style={styles.xdwxx}></View>
<XbenchcView /* View29 */   viewStyle={styles.xdwxw} onClick={getEvent('View29:onClick:func13:', {eventData: "edit_sex"}, bagForKeyValue, bagForIndex)}><Text /* Text29 */ style={styles.xdwxr} >{slide.components.Text29.ctx_map.text}</Text>
<View /* View30 */   style={styles.xdwxv}><Text /* Text28 */ style={styles.xdwxs} >{state.formData._gender_display || "选择性别"}</Text>
<XbenchcImage /* Image10 */ style={styles.xdwxt} source={dwtools.getLocalResource('xdwxu_lthar0xr')}  /></View></XbenchcView>
<View /* View31 */   style={styles.xdwxx}></View>
<XbenchcView /* View32 */   viewStyle={styles.xdwxw} onClick={getEvent('View32:onClick:func2:', {eventData: "edit_birthday"}, bagForKeyValue, bagForIndex)}><Text /* Text31 */ style={styles.xdwxr} >{slide.components.Text31.ctx_map.text}</Text>
<View /* View33 */   style={styles.xdwxv}><Text /* Text30 */ style={styles.xdwxs} >{state.formData.birthday || "选择生日"}</Text>
<XbenchcImage /* Image11 */ style={styles.xdwxt} source={dwtools.getLocalResource('xdwxu_lthar0xr')}  /></View></XbenchcView>
<View /* View34 */   style={styles.xdwxx}></View>
<XbenchcView /* View35 */   viewStyle={styles.xdwxw} onClick={getEvent('View35:onClick:func19:', {eventData: "edit_weight"}, bagForKeyValue, bagForIndex)}><Text /* Text33 */ style={styles.xdwxr} >{slide.components.Text33.ctx_map.text}</Text>
<View /* View36 */   style={styles.xdwxv}><Text /* Text32 */ style={styles.xdwxs} >{state.formData.weight > 0 ? (state.formData.weight + "KG") : '填写体重'}</Text>
<XbenchcImage /* Image12 */ style={styles.xdwxt} source={dwtools.getLocalResource('xdwxu_lthar0xr')}  /></View></XbenchcView>
<View /* View37 */   style={styles.xdwxx}></View>
<XbenchcView /* View38 */   viewStyle={styles.xdwxw} onClick={getEvent('View38:onClick:func3:', {}, bagForKeyValue, bagForIndex)}><Text /* Text35 */ style={styles.xdwxr} >{slide.components.Text35.ctx_map.text}</Text>
<View /* View39 */   style={styles.xdwxv}><Text /* Text34 */ style={styles.xdwxs} >{(state.formData && state.formData.food_category_uuid__toone) ? state.formData.food_category_uuid__toone.data.name : "选择宠物粮"}</Text>
<XbenchcImage /* Image13 */ style={styles.xdwxt} source={dwtools.getLocalResource('xdwxu_lthar0xr')}  /></View></XbenchcView></XbenchcView>
<View /* View40 */   style={[styles.xdwy0, ({
  opacity: computeds.computed1({}, state) ? 1 : 0.5
})]}><Text /* Text36 */ style={styles.xdwxz} >{slide.components.Text36.ctx_map.text}</Text></View></View>
<XbenchcModal /* Modal1 */ rootStyle={styles.xdwye} value={ state.namePop } mask={ true } maskClosable={ true } ><View /* View41 */   style={styles.xdwyd}><View /* View46 */   style={styles.xdwy3}><Text /* Text39 */ style={styles.xdwy2} >{slide.components.Text39.ctx_map.text}</Text></View>
<View /* View45 */   style={styles.xdwxq}><View /* View47 */   style={styles.xdwy7}><XbenchcInput /* NativeInput1 */ style={styles.xdwy4} type={slide.components.NativeInput1.ctx_map.type}  onChange={getEvent('NativeInput1:onChange:func9:', {}, bagForKeyValue, bagForIndex)} />
<XbenchcImage /* Image14 */ style={styles.xdwy5} source={dwtools.getLocalResource('xdwy6_lthar0xs')}  /></View></View>
<View /* View42 */   style={styles.xdwyc}><View /* View44 */   style={styles.xdwya}><XbenchcButton /* NativeButton2 */ viewStyle={styles.xdwy9} onClick={getEvent('NativeButton2:onClick:func8:', {}, bagForKeyValue, bagForIndex)}><Text /* Text38 */ style={styles.xdwy8} >{slide.components.Text38.ctx_map.text}</Text></XbenchcButton></View>
<View /* View43 */   style={styles.xdwyb}><XbenchcButton /* NativeButton1 */ viewStyle={styles.xdwy9} onClick={getEvent('NativeButton1:onClick:func8:', {}, bagForKeyValue, bagForIndex)}><Text /* Text37 */ style={styles.xdwy8} >{slide.components.Text37.ctx_map.text}</Text></XbenchcButton></View></View></View></XbenchcModal>
<XbenchcModal /* Modal2 */ rootStyle={styles.xdwye} value={ state.typePop } mask={ true } maskClosable={ true } ><View /* View48 */   style={styles.xdwyd}><View /* View52 */   style={styles.xdwyi}><XbenchcView /* View53 */   viewStyle={styles.xdwyg} onClick={getEvent('View53:onClick:func12:', {eventData: "cat"}, bagForKeyValue, bagForIndex)}><Text /* Text42 */ style={styles.xdwyf} >{slide.components.Text42.ctx_map.text}</Text></XbenchcView>
<View /* View63 */   style={styles.xdwyh}></View>
<XbenchcView /* View54 */   viewStyle={styles.xdwyg} onClick={getEvent('View54:onClick:func12:', {eventData: "dog"}, bagForKeyValue, bagForIndex)}><Text /* Text43 */ style={styles.xdwyf} >{slide.components.Text43.ctx_map.text}</Text></XbenchcView></View>
<View /* View49 */   style={styles.xdwyc}><View /* View51 */   style={styles.xdwyj}><XbenchcButton /* NativeButton4 */ viewStyle={styles.xdwy9} onClick={getEvent('NativeButton4:onClick:func11:', {}, bagForKeyValue, bagForIndex)}><Text /* Text41 */ style={styles.xdwy8} >{slide.components.Text41.ctx_map.text}</Text></XbenchcButton></View></View></View></XbenchcModal>
<XbenchcModal /* Modal3 */ rootStyle={styles.xdwye} value={ state.genderPop } mask={ true } maskClosable={ true } ><View /* View55 */   style={styles.xdwyd}><View /* View58 */   style={styles.xdwyi}><XbenchcView /* View60 */   viewStyle={styles.xdwyg} onClick={getEvent('View60:onClick:func15:', {eventData: "1", eventData2: "GG"}, bagForKeyValue, bagForIndex)}><Text /* Text46 */ style={styles.xdwyk} >{slide.components.Text46.ctx_map.text}</Text></XbenchcView>
<View /* View64 */   style={styles.xdwyh}></View>
<XbenchcView /* View59 */   viewStyle={styles.xdwyg} onClick={getEvent('View59:onClick:func15:', {eventData: "2", eventData2: "绝育GG"}, bagForKeyValue, bagForIndex)}><Text /* Text45 */ style={styles.xdwyk} >{slide.components.Text45.ctx_map.text}</Text></XbenchcView>
<View /* View65 */   style={styles.xdwyh}></View>
<XbenchcView /* View61 */   viewStyle={styles.xdwyg} onClick={getEvent('View61:onClick:func15:', {eventData: "3", eventData2: "MM"}, bagForKeyValue, bagForIndex)}><Text /* Text47 */ style={styles.xdwyk} >{slide.components.Text47.ctx_map.text}</Text></XbenchcView>
<View /* View66 */   style={styles.xdwyh}></View>
<XbenchcView /* View62 */   viewStyle={styles.xdwyg} onClick={getEvent('View62:onClick:func15:', {eventData: "4", eventData2: "绝育MM"}, bagForKeyValue, bagForIndex)}><Text /* Text48 */ style={styles.xdwyk} >{slide.components.Text48.ctx_map.text}</Text></XbenchcView></View>
<View /* View56 */   style={styles.xdwyc}><View /* View57 */   style={styles.xdwyj}><XbenchcButton /* NativeButton5 */ viewStyle={styles.xdwy9} onClick={getEvent('NativeButton5:onClick:func14:', {}, bagForKeyValue, bagForIndex)}><Text /* Text44 */ style={styles.xdwy8} >{slide.components.Text44.ctx_map.text}</Text></XbenchcButton></View></View></View></XbenchcModal>
<XbenchcModal /* Modal4 */ rootStyle={styles.xdwye} value={ state.birthdayPopup } mask={ true } maskClosable={ true } ><View /* View67 */   style={styles.xdwyq}><View /* View72 */   style={styles.xdwyl}><Text /* Text51 */ style={styles.xdwy2} >{slide.components.Text51.ctx_map.text}</Text></View>
<View /* View71 */   style={styles.xdwym}><XbenchcPickerView /* PickerView1 */ value={ state.birthdayValue } range={ state.birthdayPickerRange }  onChange={getEvent('PickerView1:input::birthdayValue', {}, bagForKeyValue, bagForIndex)}></XbenchcPickerView></View>
<View /* View68 */   style={styles.xdwym}><View /* View70 */   style={styles.xdwyo}><XbenchcButton /* NativeButton7 */ viewStyle={styles.xdwyn} onClick={getEvent('NativeButton7:onClick:func18:', {}, bagForKeyValue, bagForIndex)}><Text /* Text50 */ style={styles.xdwy8} >{slide.components.Text50.ctx_map.text}</Text></XbenchcButton></View>
<View /* View69 */   style={styles.xdwyp}><XbenchcButton /* NativeButton6 */ viewStyle={styles.xdwyn} onClick={getEvent('NativeButton6:onClick:func17:', {}, bagForKeyValue, bagForIndex)}><Text /* Text49 */ style={styles.xdwy8} >{slide.components.Text49.ctx_map.text}</Text></XbenchcButton></View></View></View></XbenchcModal>
<XbenchcModal /* Modal5 */ rootStyle={styles.xdwye} value={ state.weightPop } mask={ true } maskClosable={ true } ><View /* View73 */   style={styles.xdwyd}><View /* View79 */   style={styles.xdwy3}><Text /* Text54 */ style={styles.xdwy2} >{slide.components.Text54.ctx_map.text}</Text></View>
<View /* View77 */   style={styles.xdwxq}><View /* View78 */   style={styles.xdwy7}><XbenchcInput /* NativeInput2 */ style={styles.xdwy4} type={slide.components.NativeInput2.ctx_map.type}  onChange={getEvent('NativeInput2:onChange:func21:', {}, bagForKeyValue, bagForIndex)} />
<XbenchcImage /* Image15 */ style={styles.xdwy5} source={dwtools.getLocalResource('xdwy6_lthar0xs')}  /></View></View>
<View /* View74 */   style={styles.xdwyc}><View /* View76 */   style={styles.xdwya}><XbenchcButton /* NativeButton9 */ viewStyle={styles.xdwy9} onClick={getEvent('NativeButton9:onClick:func20:', {}, bagForKeyValue, bagForIndex)}><Text /* Text53 */ style={styles.xdwy8} >{slide.components.Text53.ctx_map.text}</Text></XbenchcButton></View>
<View /* View75 */   style={styles.xdwyb}><XbenchcButton /* NativeButton8 */ viewStyle={styles.xdwy9} onClick={getEvent('NativeButton8:onClick:func20:', {}, bagForKeyValue, bagForIndex)}><Text /* Text52 */ style={styles.xdwy8} >{slide.components.Text52.ctx_map.text}</Text></XbenchcButton></View></View></View></XbenchcModal>
    </ErrorBoundary>
  )
}
