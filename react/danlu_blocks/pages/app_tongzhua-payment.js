
import * as React from 'react'
import { Platform, AppState, StyleSheet, Text, View, ScrollView, RefreshControl, Pressable, Dimensions } from 'react-native'



import dwtools from '../../utils/dwtools'
import { getCurrentPageRoute }  from '../../services/analytics'
import { RnappDwProxy } from '../../xbench/RnappDwProxy'
import ErrorBoundary from '../../xbench/components/ErrorBoundary'

import ComNavBar from '../../xbench/components/ComNavBar'
import Xbenchc179992 from '../components/Xbenchc179992'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import { Image } from 'expo-image'
import ViewForItem from '../../xbench/components/ViewForItem'
import Xbenchc168610 from '../components/Xbenchc168610'
import Xbenchc184002 from '../components/Xbenchc184002'
import XbenchcScrollView from '../../xbench/xbenchc/components/XbenchcScrollView'
import LinearGradient from 'react-native-linear-gradient'
import { Shadow } from 'react-native-shadow-2'
import Xbenchc168613 from '../components/Xbenchc168613'
import Xbenchc275104 from '../components/Xbenchc275104'

// workflow-code-start
/* eslint-disable */
let workflowStoreOptionsFactory = () => ({});
let computeds = {}

    workflowStoreOptionsFactory = (function (dw) {
        const app = dw.app;
        const exports = {};
        const actions = {}

let action125lock = false
let action137lock = false
let getPagetemplateConfigsPromise = null
let action23lock = false
let langMaps = ({/**/  cn: {/**/    'remain_time': '支付剩余时间',/**/    'payment_method': '选择支付方式',/**/    'tip1': '请转账至以下账号并上传付款凭证',/**/    'account_name': '户 名：',/**/    'card_number': '卡 号：',/**/    'account_bank': '开户行：',/**/    'pay_remarks': '请输入付款备注',/**/    'payment_voucher': '付款凭证(可上传多张图片凭证)',/**/    'pay': '立即支付',/**/    'load_fail': '订单加载错误',/**/    'no_need_pay': "订单无需支付",/**/    'tip2': "0元订单无需支付，点击确定查看订单详情",/**/    'tip3': "货到付款成功，点击确定查看订单详情",/**/    'upload_transfer_voucher': "请上传转账凭证",/**/    'error': '操作错误',/**/    'tip4': "付款凭证提交成功，等待审核后生效，可以继续修改",/**/    'moeny': "你确定使用余额支付此订单？",/**/    'pay_error': '支付失败',/**/    'pay_success': "付款成功，点击确定查看订单详情",/**/    'codpay': '确认货到付款',/**/    'pay_voucher': '提交付款凭证',/**/    'tip': '提示',/**/    'yes': '确定',/**/    'cancel': '取消',/**/  },/**/  en: {/**/    'remain_time': 'Pay countdown',/**/    'payment_method': 'Payment Method',/**/    'tip1': 'Please transfer to the following account and upload the payment voucher',/**/    'account_name': 'Account name：',/**/    'card_number': 'Card number：',/**/    'account_bank': 'Account bank：',/**/    'pay_remarks': 'Please enter payment notes',/**/    'payment_voucher': ' payment voucher (can upload more than one picture voucher)',/**/    'pay': 'Pay',/**/    'load_fail': 'Load fail',/**/    'no_need_pay': "Order not need to pay",/**/    'tip2': "No payment is required for the order of 0 yuan",/**/    'tip3': "Payment on delivery succeeded",/**/    'upload_transfer_voucher': "Please upload the transfer vouche",/**/    'error': 'error',/**/    'tip4': "Submitted successfully, waiting for approval",/**/    'moeny': "Balance payment？",/**/    'pay_error': 'Pay error',/**/    'pay_success': "Pay success",/**/    'codpay': 'Confirm COD',/**/    'pay_voucher': 'Submit payment voucher',/**/    'tip': 'Tip',/**/    'yes': 'True',/**/    'cancel': 'Cancel',/**/    /**/  },/**/})
const action214 = langMaps
let modalInstance = (null)
const action242 = modalInstance
const action1 = actions['onCreateState'] = function (store, event) {
  const state = store.state
  const action2 = state.isLoad = (false)
  const action8 = state.items = ([])
  const action71 = state.item = (null)
  const action13 = state.paymentCode = (dw.slide.css_ctx ? dw.slide.css_ctx.text1.value : 'WXPAY')
  const action19 = state.order = (null)
  /* action78: 银行转帐凭证 */
  const action79 = state.bank_remark = ('')
  const action80 = state.bank_images = ([])
  /* action194: 支付时间倒计时 */
  const action195 = state.startTime = ("")
  const action206 = state.endTime = ("")
  const action236 = state.pay_timeout = (0)
  /* action216: 语言设置 */
  const action217 = state.lang = ('cn')
  const action218 = state.langMap = (langMaps[state.lang])
  return state
}

const action241 = actions['onLoad'] = async function (store, event) {
  const state = store.state
  const action235 = await store.dispatch("getLang", {})
  const action10 = await store.dispatch("loadOrder", {})
  const action9 = await Promise.all([
    (async () => {
      const action5 = await store.dispatch("load", {})
      return action5
    })(),
    (async () => {
      const action200 = await store.dispatch("getTimeOut", {})
      return action200
    })(),
  ])

  const action12 = store.commit('setState', {["state.isLoad"]: true})
}

const action243 = actions['getModalInstance'] = function (store, event) {
  const state = store.state
  const action244 = modalInstance = (event.data)
  const action245 = console.log('[getModalInstance#action245] 打印(modalInstance)', modalInstance)
}

const action4 = actions['load'] = async function (store, event) {
  const state = store.state
  const action6 = await dw.app.run("payment.list", {})
  let items = (action6.objects)
  const action102 = items
  /* action112: 规则：微信/支付宝/头条只能在特定平台显示 */
  const action34 = (items).filter((item, index) => {
    if ((item.data.code ) === ('ALIPAY')) {
      return dw.isMy || (dw.app.runtime === 'dwapp_web' && !/micromessenger/i.test(navigator.userAgent)) || dw.platform === 'rnapp'
    } else if ((item.data.code ) === ('TTPAY')) {
      return dw.isTt
    } else if ((item.data.code ) === ('KSPAY')) {
      return dw.isKs
    } else if ((item.data.code ) === ('WXPAY')) {
      return !dw.isMy && !dw.isTt && !dw.isKs
    }
    return true
  })

  /* action111: 规则：充值订单只能用微信/支付宝/头条支付、支付方式可以设置平台 */
  const action104 = (action34).filter((item, index) => {
    if (state.order && ['charge', 'split'].includes(state.order.data.type)) {
      return ['WXPAY', 'ALIPAY', 'TTPAY', 'KSPAY'].includes(item.data.code)
    }
    if (item.data.platforms.length && !item.data.platforms.includes('dwapp') && dw.app.runtime === 'dwapp_dwapp') {
      return false
    }
    if (item.data.platforms.length && !item.data.platforms.includes('dwapp_web_mp') && (dw.app.runtime === 'dwapp_web' && /MicroMessenger/.test(navigator.userAgent))) {
      return false
    }
    if (item.data.platforms.length && !item.data.platforms.includes('dwapp_web_h5') && (dw.app.runtime === 'dwapp_web' && !/MicroMessenger/.test(navigator.userAgent))) {
      return false
    }
    return true
  })

  const action103 = items = (action104)
  const action75 = store.commit('setState', {["state.paymentCode"]: items.length ? items[0].data.code : state.paymentCode, ["state.items"]: items, ["state.item"]: items.find(item => item.data.code === (items.length ? items[0].data.code : state.paymentCode)) || null})
}

const action11 = actions['loadOrder'] = async function (store, event) {
  const state = store.state
  const action17 = await dw.app.run("order.list", {"limit": 1, "offset": 0, "filters": {uuid: dw.query.uuid || "40a028c8-c6d0-42e9-b0d9-aeb5cb303947"}, "order_by": []})
  
        if ((action17.status) === ("error")) {
          const action18message = (state.langMap.load_fail)
          const action18title = ("提示")
          action18message && dw.alert(action18title, action18message)
          return null
        }
        
  const action20 = store.commit('setState', {["state.order"]: action17.objects[0]})
  if ((state.order.data.state) !== ("topay")) {
    let message = (state.langMap.no_need_pay)
    const action247 = message
    const action248 = ((store, event) => {
if(modalInstance){
  console.log('step1')
  modalInstance.toastPopUp(message, 1500)
}
})(store, event)
    if ((state.order.data.type) === ('period')) {
      const action52 = dw.app.goToPappUrl("periodorderdetail", {"uuid": state.order.uuid}, {redirectTo: true})
    }
    const action43 = dw.app.goToPappUrl("orderdetail", {"uuid": state.order.uuid}, {redirectTo: true})
  } else if ((state.order.data.price) === (0)) {
    let message = (state.langMap.tip2)
    const action250 = message
    const action251 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(message)
}
else{
  return null
}
})(store, event)
    await new Promise((resolve, reject) => setTimeout(resolve, 1000))
    const action187 = dw.app.goToPappUrl("orderdetail", {"uuid": state.order.uuid}, {redirectTo: false})
  }
}

const action15 = actions['selectPayMethod'] = function (store, event) {
  const state = store.state
  const action16 = store.commit('setState', {["state.paymentCode"]: event.context.eventData.data.code, ["state.item"]: state.items.find(item => item.data.code === event.context.eventData.data.code) || null})
}

const action62 = actions['execCodpay'] = async function (store, event) {
  const state = store.state
  /* action65: 货到付款 */
  const action66 = await dw.app.run("order_user.create_action_codpay", {"lang": state.lang, "uuid": state.order.uuid})
  
        if ((action66.status) === ("error")) {
          const action67message = (action66.message)
          const action67title = ("提示")
          action67message && dw.alert(action67title, action67message)
          return null
        }
        
  let message = (state.langMap.tip3)
  const action253 = message
  const action254 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(message)
}
else{
  return null
}
})(store, event)
  const action68 = dw.app.goToPappUrl("orderdetail", {"uuid": state.order.uuid}, {redirectTo: false})
}

const action81 = actions['execBank'] = async function (store, event) {
  const state = store.state
  /* action82: 银行转账 */
  
        if (!!(!state.bank_remark) === (true)) {
          const action91message = (state.langMap.pay_remarks)
          const action91title = ("提示")
          action91message && dw.alert(action91title, action91message)
          return {}
        }
        
  
        if (!!(!state.bank_images.length) === (true)) {
          const action92message = (state.langMap.upload_transfer_voucher)
          const action92title = ("提示")
          action92message && dw.alert(action92title, action92message)
          return {}
        }
        
  const action83 = await dw.app.run("order_user.submit_bank_data", {"lang": state.lang, "uuid": state.order.uuid, "bank_images": state.bank_images, "bank_remark": state.bank_remark})
  
        if ((action83.status) === ("error")) {
          const action84message = (action83.message)
          const action84title = ("提示")
          action84message && dw.alert(action84title, action84message)
          return null
        }
        
  const action95 = await dw.app.run("payment.update_return_url", {"lang": state.lang, "channel": 'BANK', "order_id": state.order.data.order_id, "return_url": '/', "paymethod_code": 'BANK'})
  
        if ((action95.status) === ("error")) {
          const action96message = (action95.message || state.langMap.error)
          const action96title = ("提示")
          action96message && dw.alert(action96title, action96message)
          return {}
        }
        
  let message = (state.langMap.tip4)
  const action256 = message
  const action257 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(message)
}
else{
  return null
}
})(store, event)
  const action86 = dw.app.goToPappUrl("orderdetail", {"uuid": state.order.uuid}, {redirectTo: false})
}

const action114 = actions['execMoney'] = async function (store, event) {
  const state = store.state
  const action125 = await (async () => {
  
      if (action125lock) return true
      action125lock = true
      try {
    let message = (state.langMap.moeny)
    const action259 = message
    const action260 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(message)
}
else{
  return null
}
})(store, event)
    
        if (!!(!action127) === (true)) {
          const action128message = ("")
          const action128title = ("提示")
          action128message && dw.alert(action128title, action128message)
          return {}
        }
        
    
        dw.showLoading({
          title: "",
          mask: false
        })
        let action126
        try {
          action126 = await (async () => {
        
      /* action119: 余额支付 */
      const action121 = await dw.app.run("order_user.submit_money_pay", {"lang": state.lang, "uuid": state.order.uuid})
      
        if ((action121.status) === ("error")) {
          const action122message = (action121.message || state.langMap.pay_error)
          const action122title = ("提示")
          action122message && dw.alert(action122title, action122message)
          return null
        }
        
      let message = (state.langMap.pay_success)
      const action262 = message
      const action263 = await (async (store, event) => {
if(modalInstance){
  console.log('step1')
  return await modalInstance.popUp(message)
}
else{
  return null
}
})(store, event)
      await new Promise((resolve, reject) => setTimeout(resolve, 1000))
      const action124 = dw.app.goToPappUrl("orderdetail", {"uuid": state.order.uuid}, {redirectTo: true})
    
          })()
        } finally {
          dw.hideLoading()
        }
        
  
      } catch (e) {
        throw e
      } finally {
        action125lock = false
      }
      
  })()
}

const action133 = actions['execParty'] = async function (store, event) {
  const state = store.state
  const action137 = await (async () => {
  
      if (action137lock) return true
      action137lock = true
      try {
    let action140
    

    let action147
    
        action147 = (dw.app.runtime === 'dwapp_dwapp') ? await (async () => {
      
        getPagetemplateConfigsPromise = getPagetemplateConfigsPromise || dw.fetch('get/pagetemplate_web/get_pagetemplate_configs', {
          pagetemplate_id: dw.app.getMasterPagetemplateId()
        })
        const { data: { object: action148object } } = await getPagetemplateConfigsPromise
        const action148 = ("pagetemplate.slug" in action148object) ? action148object["pagetemplate.slug"] : ("默认值")
        
      let dw_return_url = (`app_${action148}-afterpay?order_uuid=${state.order.uuid}`)
      const action149 = dw_return_url
      const action150 = await dw.app.run("payment.create_third_order", {"code": state.paymentCode, "lang": state.lang, "order_id": state.order.data.order_id, "platform": "dwapp", "return_url": "/", "dw_return_url": dw_return_url})
      
        if ((action150.status) === ("error")) {
          const action151message = (action150.message || state.langMap.error)
          const action151title = ("提示")
          action151message && dw.alert(action151title, action151message)
          return {}
        }
        
      const action152 = console.log('[execParty#action152] 打印(action150)的返回值', action150)
      const action153 = dw.goToHref(`${action150. pay_url}`, {redirectTo: false})
    
        })() : undefined
        
  
      } catch (e) {
        throw e
      } finally {
        action137lock = false
      }
      
  })()
}

const action21 = actions['payNow'] = async function (store, event) {
  const state = store.state
  if ((state.paymentCode).includes("?")) {
    const action132 = await store.dispatch("execParty", {})
    return event
  }
  const action23 = await (async () => {
  
      if (action23lock) return true
      action23lock = true
      try {
    let action24
    
        action24 = (dw.app.runtime === 'dwapp_dwapp') ? await (async () => {
      if ((state.paymentCode) === ('WXPAY')) {
        const action28 = dw.goToHref(`${state.order.data.order_id__toone._dw_pay_url}`, {redirectTo: true})
      } else if ((state.paymentCode) === ('ALIPAY')) {
        const action101 = await dw.app.run("payment.update_return_url", {"lang": state.lang, "channel": "ALIPAY_ALIAPP", "order_id": state.order.data.order_id, "return_url": '/', "paymethod_code": "ALIPAY"})
        const action100 = dw.goToHref(`${state.order.data.order_id__toone._dw_pay_url}`, {redirectTo: true})
      } else if ((state.paymentCode) === ('TTPAY')) {
        const action191 = await dw.app.run("payment.update_return_url", {"lang": state.lang, "channel": "TTPAY_TTAPP", "order_id": state.order.data.order_id, "return_url": '/', "paymethod_code": "TTPAY"})
        const action192 = dw.goToHref(`${state.order.data.order_id__toone._dw_pay_url}`, {redirectTo: true})
      } else if ((state.paymentCode) === ('KSPAY')) {
        const action212 = await dw.app.run("payment.update_return_url", {"lang": state.lang, "channel": "KSPAY_KSAPP", "order_id": state.order.data.order_id, "return_url": '/', "paymethod_code": "KSPAY"})
        const action213 = dw.goToHref(`${state.order.data.order_id__toone._dw_pay_url}`, {redirectTo: true})
      } else if ((state.paymentCode) === ('CODPAY')) {
        const action63 = await store.dispatch("execCodpay", {})
      } else if ((state.paymentCode) === ('BANK')) {
        const action88 = await store.dispatch("execBank", {})
      } else if ((state.paymentCode) === ('MONEY')) {
        const action116 = await store.dispatch("execMoney", {})
      }
    
        })() : undefined
        
    let action25
    

    if (dw.platform === 'rnapp') {
      if ((state.paymentCode) === ('WXPAY')) {
        const action174 = dw.goToHref(`${state.order.data.order_id__toone._dw_pay_url}`, {redirectTo: true})
      } else if ((state.paymentCode) === ('ALIPAY')) {
        const action176 = await dw.app.run("payment.update_return_url", {"lang": state.lang, "channel": "ALIPAY_APP", "order_id": state.order.data.order_id, "return_url": '/', "paymethod_code": "ALIPAY"})
        const action177 = dw.goToHref(`${state.order.data.order_id__toone._dw_pay_url}`, {redirectTo: true})
      } else if ((state.paymentCode) === ('CODPAY')) {
        const action179 = await store.dispatch("execCodpay", {})
      } else if ((state.paymentCode) === ('BANK')) {
        const action181 = await store.dispatch("execBank", {})
      } else if ((state.paymentCode) === ('MONEY')) {
        const action183 = await store.dispatch("execMoney", {})
      }
    }
  
      } catch (e) {
        throw e
      } finally {
        action23lock = false
      }
      
  })()
}

const action197 = actions['getTimeOut'] = async function (store, event) {
  const state = store.state
  const action202 = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace('Z', '')
  const action207 = store.commit('setState', {["state.startTime"]: action202})
  const action198 = await dw.app.run("config.get", {})
  let pay_timeout = (action198.object.data.pay_timeout)
  const action201 = pay_timeout
  const action205 = (() => {
          const a = (state.order.created).split(/[-T:.Z]/).filter(i => !!i).map(i => parseInt(i))
          const n = new Date(
            a[0] + (0),
            a[1] - 1 + (0),
            a[2] + (0),
            a[3] + (0),
            a[4] + (pay_timeout),
            a[5] + (0),
            (parseFloat('0.' + a[6]) * 1000) + (0)
          )
          return new Date(+n + 8 * 3600 * 1000).toISOString().replace('Z', '')
        })()
  const action208 = store.commit('setState', {["state.endTime"]: action205, ["state.pay_timeout"]: pay_timeout * 60})
}

/* action220: 语言设置 */
const action221 = actions['getLang'] = async function (store, event) {
  const state = store.state
  /* action222: 获取并设置 lang */
  const action223 = dw.getGlobalLocals("lang")
  const action224 = store.commit('setState', {["state.lang"]: action223 || state.lang, ["state.langMap"]: langMaps[action223 || state.lang]})
  const action226 = await dw.getStorage("lang")
  const action227 = store.commit('setState', {["state.lang"]: action226 || state.lang, ["state.langMap"]: langMaps[action226 || state.lang]})
  const action229 = dw.setGlobalLocals("lang", state.lang)
  const action230 = await dw.setStorage("lang", state.lang)
  let action231
  

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

var langMaps = { /**/cn: { /**/'remain_time': '支付剩余时间', /**/'payment_method': '选择支付方式', /**/'tip1': '请转账至以下账号并上传付款凭证', /**/'account_name': '户 名：', /**/'card_number': '卡 号：', /**/'account_bank': '开户行：', /**/'pay_remarks': '请输入付款备注', /**/'payment_voucher': '付款凭证(可上传多张图片凭证)', /**/'pay': '立即支付', /**/'load_fail': '订单加载错误', /**/'no_need_pay': "订单无需支付", /**/'tip2': "0元订单无需支付，点击确定查看订单详情", /**/'tip3': "货到付款成功，点击确定查看订单详情", /**/'upload_transfer_voucher': "请上传转账凭证", /**/'error': '操作错误', /**/'tip4': "付款凭证提交成功，等待审核后生效，可以继续修改", /**/'moeny': "你确定使用余额支付此订单？", /**/'pay_error': '支付失败', /**/'pay_success': "付款成功，点击确定查看订单详情", /**/'codpay': '确认货到付款', /**/'pay_voucher': '提交付款凭证', /**/'tip': '提示', /**/'yes': '确定', /**/'cancel': '取消' }, /**/en: { /**/'remain_time': 'Pay countdown', /**/'payment_method': 'Payment Method', /**/'tip1': 'Please transfer to the following account and upload the payment voucher', /**/'account_name': 'Account name：', /**/'card_number': 'Card number：', /**/'account_bank': 'Account bank：', /**/'pay_remarks': 'Please enter payment notes', /**/'payment_voucher': ' payment voucher (can upload more than one picture voucher)', /**/'pay': 'Pay', /**/'load_fail': 'Load fail', /**/'no_need_pay': "Order not need to pay", /**/'tip2': "No payment is required for the order of 0 yuan", /**/'tip3': "Payment on delivery succeeded", /**/'upload_transfer_voucher': "Please upload the transfer vouche", /**/'error': 'error', /**/'tip4': "Submitted successfully, waiting for approval", /**/'moeny': "Balance payment？", /**/'pay_error': 'Pay error', /**/'pay_success': "Pay success", /**/'codpay': 'Confirm COD', /**/'pay_voucher': 'Submit payment voucher', /**/'tip': 'Tip', /**/'yes': 'True', /**/'cancel': 'Cancel' } };
var action214 = langMaps;
var modalInstance = null;
var action242 = modalInstance;
var action53 = actions['btnName'] = function (event, state) {
  if (state.paymentCode === "CODPAY") {
    return state.langMap.codpay;
  } else if (state.paymentCode === "BANK") {
    return state.langMap.pay_voucher;
  } else {
    return state.langMap.pay;
  }
};
// COMPUTED_ACTION_META:btnName {"deps":["paymentCode","langMap"]}

/* action220: 语言设置 */
module.exports = actions;
      return module.exports;
    })();
    
/* eslint-enable */
// workflow-code-end

// const baseWidth = Dimensions.get('window').width
const baseWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const pm = (number) => number ? (parseFloat(number) / 320) * baseWidth : 0
const styles = StyleSheet.create({
xdw3w6: {
  color: "#999999",
  fontSize: pm(12),
  lineHeight: pm(20),
},
xdw3w7: {
  alignItems: "flex-start",
  flexDirection: "row",
  justifyContent: "center",
},
xdw3w8: {
  color: "#333333",
  fontSize: pm(28),
  textAlign: "center",
  fontWeight: "bold",
  lineHeight: pm(30),
  paddingTop: pm(10),
  paddingBottom: pm(10),
},
xdw3w9: {
  color: "#999999",
  fontSize: pm(12),
  overflow: "hidden",
  textAlign: "center",
  lineHeight: pm(20),
},
xdw3wa: {
  width: pm(320),
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
},
xdw3wb: {
  color: "#333333",
  fontSize: pm(13),
  lineHeight: pm(20),
},
xdw3wc: {
  width: pm(18),
  height: pm(18),
},
xdw3wd: {
  color: "#333333",
  fontSize: pm(14),
  fontWeight: "bold",
  lineHeight: pm(40),
  marginLeft: pm(10),
},
xdw3we: {},
xdw3wf: {
  marginLeft: "auto",
  flexDirection: "column",
},
xdw3wg: {
  alignItems: "center",
  flexDirection: "row",
},
xdw3wh: {
  flexDirection: "column",
},
xdw3wi: {
  paddingTop: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
},
xdw3wj: {
  color: "#666666",
  fontSize: pm(12),
  lineHeight: pm(20),
},
xdw3wk: {
  color: "#666666",
  fontSize: pm(12),
  lineHeight: pm(22),
},
xdw3wl: {
  flexDirection: "row",
},
xdw3wm: {
  width: pm(280),
  height: pm(1),
  marginTop: pm(10),
  marginBottom: pm(10),
  flexDirection: "column",
  backgroundColor: "#EEEEEE",
},
xdw3wn: {
  marginLeft: pm(10),
  paddingTop: pm(10),
  marginRight: pm(10),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(10),
  backgroundColor: "#F8F8F8",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  borderBottomRightRadius: pm(10),
},
xdw3wo: {
  width: "100%",
  flexGrow: 1,
  flexBasis: "0%",
  flexShrink: 1,
},
xdw3wp: {
  color: "#ffffff",
  fontSize: pm(12),
  lineHeight: pm(24),
},
xdw3wq: {
  width: pm(300),
  height: pm(36),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  borderTopLeftRadius: pm(1000),
  borderTopRightRadius: pm(1000),
  borderBottomLeftRadius: pm(1000),
  borderBottomRightRadius: pm(1000),
},
xdw3wr: {
  width: pm(320),
  height: pm(56),
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: "#ffffff",
},
xdw3ws: {
  left: 0,
  width: pm(320),
  bottom: 0,
  height: pm(56),
  alignItems: "center",
  flexDirection: "row",
  backgroundColor: "#ffffff",
},
xdw3wt: {
  width: "100%",
  zIndex: 20,
  flexDirection: "column",
  backgroundColor: "#ffffff",
}
});
const slide = {"type":"263736","key":"c2637361","slug":null,"randomid":"id_dc8b76b1d7084fe32864b9b6","master_pagetemplate_id":168072,"master_dataset_id":400691,"dataset_id":null,"dwapp":{},"meta":{"papp_slug":"tongzhua"},"css_ctx":{"text1":{"key":"text1","value":"WXPAY"}},"components":{"Text1":{"ctx_map":{"text":"支付剩余时间"}},"Text2":{"ctx_map":{"text":"这是一个文本组件","numberOfLines":1}},"Text3":{"ctx_map":{"text":"这是一个文本组件"}},"Text4":{"ctx_map":{"text":"这是一个文本组件"}},"Text5":{"ctx_map":{"text":"这是一个文本组件"}},"Text6":{"ctx_map":{"text":"这是一个文本组件"}},"Text7":{"ctx_map":{"text":"这是一个文本组件"}},"Text8":{"ctx_map":{"text":"这是一个文本组件"}},"Text9":{"ctx_map":{"text":"这是一个文本组件"}},"View1":{"ctx_map":{}},"View2":{"ctx_map":{}},"View3":{"ctx_map":{}},"View4":{"ctx_map":{}},"View5":{"ctx_map":{}},"View6":{"ctx_map":{}},"View7":{"ctx_map":{}},"View8":{"ctx_map":{}},"View9":{"ctx_map":{}},"Image1":{"ctx_map":{"fop":"e,50,50","src":"page/gallery/lifeofpix/Life-of-Pix-free-stock-photos-wheat-sunset-people-jordanmcqueen.jpg"}},"Text10":{"ctx_map":{"text":"这是一个文本组件"}},"Text11":{"ctx_map":{"text":"这是一个文本组件"}},"Text12":{"ctx_map":{"text":"立即支付"}},"View10":{"ctx_map":{}},"View11":{"ctx_map":{}},"View12":{"ctx_map":{}},"View13":{"ctx_map":{}},"View15":{"ctx_map":{}},"View16":{"ctx_map":{}},"ViewIf1":{"ctx_map":{"value":true}},"ViewIf2":{"ctx_map":{"value":true}},"ViewIf3":{"ctx_map":{"value":true}},"ViewIf4":{"ctx_map":{"value":true}},"ViewIf5":{"ctx_map":{"value":true}},"ViewIf6":{"ctx_map":{"value":true}},"ViewIf7":{"ctx_map":{"value":true}},"ViewFor1":{"ctx_map":{"items":[{"id":1},{"id":2},{"id":3}],"itemsKey":"id"}},"SvgImage1":{"ctx_map":{"src":"u/dev064/2023/04/17/fT8ooYZg2MC8TuVz59SQ3j/815875.svg","color":"#07c160","width":20,"height":20,"SvgImageManage":"SvgImageManage"}},"SvgImage2":{"ctx_map":{"src":"u/dev064/2023/04/17/f4LzeEPLeS3Qvc5heEF7x4/815878.svg","color":"#07c160","width":20,"height":20,"SvgImageManage":"SvgImageManage"}},"ComNavBar1":{"ctx_map":{"theme":"default","title":"支付页","headerBackgroundColor":"#ffffff","statusBarBackgroundColor":"#ffffff"}},"DwappCloud1":{"ctx_map":{"bool1":false,"bool2":true,"bool3":true,"text1":"","text2":"时","text3":":","text4":"","text5":"","text6":"s","style1":null,"select1":"all","numberb1":9000}},"DwappCloud2":{"ctx_map":{"text1":"hello world","text2":"请输入文本","style1":null,"style2":null,"select1":"text"}},"DwappCloud3":{"ctx_map":{"color1":""}},"DwappCloud4":{"ctx_map":{"label":"","value":[{"url":"","data":{"ext":".png","key":"u/qiuzhen/2023/04/17/yr4MMS2sdc8RVFNzS92hyk/00001-3099373267.png","url":"https://s2.d2scdn.com/u/qiuzhen/2023/04/17/yr4MMS2sdc8RVFNzS92hyk/00001-3099373267.png","hash":"Fkau8Lxa3BMb6HSBlqQ7WU6EzqGt","name":"00001-3099373267.png","size":936268,"fname":"00001-3099373267.png","fsize":936268,"state":"SUCCESS","success":true,"mimeType":"image/png","file_path":"https://s2.d2scdn.com/u/qiuzhen/2023/04/17/yr4MMS2sdc8RVFNzS92hyk/00001-3099373267.png","imageInfo":{"size":936268,"width":768,"format":"png","height":768,"colorModel":"rgba"}},"name":"00001-3099373267.png","type":"image","value":"u/qiuzhen/2023/04/17/yr4MMS2sdc8RVFNzS92hyk/00001-3099373267.png"},{"url":"","data":{"ext":".png","key":"u/qiuzhen/2023/04/17/V3SNc7WYycvVY5cDNqRHND/571777073.png","url":"https://s2.d2scdn.com/u/qiuzhen/2023/04/17/V3SNc7WYycvVY5cDNqRHND/571777073.png","hash":"FjJl9CsNkSbE_IxqL3Tk7F2eeLzu","name":"57177707 (3).png","size":1550,"fname":"57177707 (3).png","fsize":1550,"state":"SUCCESS","success":true,"mimeType":"image/png","file_path":"https://s2.d2scdn.com/u/qiuzhen/2023/04/17/V3SNc7WYycvVY5cDNqRHND/571777073.png","imageInfo":{"size":1550,"width":420,"format":"png","height":420,"colorModel":"rgba"}},"name":"57177707 (3).png","type":"image","value":"u/qiuzhen/2023/04/17/V3SNc7WYycvVY5cDNqRHND/571777073.png"}],"labelStyle":null,"valueStyle":null,"pickerStyle":null,"placeholder":"点击上传","containerStyle":null,"labelTextStyle":null,"valueInputStyle":null}},"DwappCloud5":{"ctx_map":{"valueStyle":null,"containerStyle":null,"valueInputStyle":null}},"ScrollView1":{"ctx_map":{"type":"list","bounces":true,"scrollY":true,"showScrollbar":true}},"ShadowView1":{"ctx_map":{"rnappShadow":{"offset":[0,5],"distance":20,"startColor":"#00000010"}}},"DisplayPrice1":{"ctx_map":{"value":100,"format":"cnyint"}},"LinearGradientView1":{"ctx_map":{"extraStyleKeys":[{"id":"background","name":""}]}}}};
slide.components.DwappCloud1.ctx_map.style1 = {
  color: "#999999",
  fontSize: pm(12),
  lineHeight: pm(20),
  flexDirection: "column",
};
slide.components.DwappCloud2.ctx_map.style1 = {
  flexDirection: "column",
};
slide.components.DwappCloud2.ctx_map.style2 = {
  height: pm(40),
  fontSize: pm(12),
  borderTopWidth: pm(1),
  borderTopColor: "#EEEEEE",
  borderLeftWidth: pm(1),
  borderLeftColor: "#EEEEEE",
  lineHeight: pm(40),
  borderRightWidth: pm(1),
  borderRightColor: "#EEEEEE",
  paddingLeft: pm(8),
  borderBottomWidth: pm(1),
  borderBottomColor: "#EEEEEE",
  paddingRight: pm(8),
  flexDirection: "column",
};
slide.components.DwappCloud4.ctx_map.labelStyle = {
  width: pm(100),
  paddingTop: pm(4),
  marginRight: pm(10),
  flexDirection: "column",
  paddingBottom: pm(4),
};
slide.components.DwappCloud4.ctx_map.valueStyle = {
  flexGrow: 1,
  flexBasis: "0%",
  flexShrink: 1,
  paddingTop: pm(4),
  flexDirection: "column",
  paddingBottom: pm(4),
};
slide.components.DwappCloud4.ctx_map.pickerStyle = {
  flexGrow: 1,
  alignItems: "center",
  flexShrink: 1,
  flexDirection: "row",
  justifyContent: "flex-start",
};
slide.components.DwappCloud4.ctx_map.containerStyle = {
  borderBottomWidth: pm(0.5),
  borderBottomColor: "#e5e5e5",
  flexDirection: "row",
};
slide.components.DwappCloud4.ctx_map.labelTextStyle = {
  color: "#666666",
  fontSize: pm(12),
  lineHeight: pm(24),
  flexDirection: "column",
};
slide.components.DwappCloud4.ctx_map.valueInputStyle = {
  color: "#007acf",
  fontSize: pm(12),
  lineHeight: pm(24),
  flexDirection: "column",
};
slide.components.DwappCloud5.ctx_map.valueStyle = {
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
slide.components.DwappCloud5.ctx_map.containerStyle = {
  marginBottom: pm(18),
  flexDirection: "column",
};
slide.components.DwappCloud5.ctx_map.valueInputStyle = {
  color: "#333333",
  flexDirection: "column",
};
const pageGroupSlug = 'app_tongzhua-payment';

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
      <ComNavBar title={ "支付页" } theme={ "default" } statusBarBackgroundColor={ "#ffffff" } headerBackgroundColor={ "#ffffff" }></ComNavBar>
<XbenchcScrollView /* ScrollView1 */ style={styles.xdw3wo} scrollY={ true } showScrollbar={ true } bounces={ true } ><View /* View1 */   style={styles.xdw3wh}>{!!(state.isLoad) /* ViewIf1 */ && (<><View /* View2 */   style={styles.xdw3wa}>{!!(state.order.data.state === 'topay') /* ViewIf2 */ && (<><View /* View3 */   style={styles.xdw3w7}><Text /* Text1 */ style={styles.xdw3w6} >{state.langMap.remain_time}</Text>
<Xbenchc179992 /* DwappCloud1 */ showHour={ slide.components.DwappCloud1.ctx_map.bool1 } showMinute={ slide.components.DwappCloud1.ctx_map.bool2 } showSecond={ slide.components.DwappCloud1.ctx_map.bool3 } total_before={ slide.components.DwappCloud1.ctx_map.text1 } hour_after={ slide.components.DwappCloud1.ctx_map.text2 } minute_after={ slide.components.DwappCloud1.ctx_map.text3 } second_after={ slide.components.DwappCloud1.ctx_map.text4 } second_before_text={ slide.components.DwappCloud1.ctx_map.text5 } second_after_text={ slide.components.DwappCloud1.ctx_map.text6 } style={ slide.components.DwappCloud1.ctx_map.style1 } type={ slide.components.DwappCloud1.ctx_map.select1 } value={ state.pay_timeout } ></Xbenchc179992></View>
<Text style={styles.xdw3w8} numberOfLines={1}>{dwtools.priceformat(state.order.data.money, slide.components.DisplayPrice1.ctx_map.format)}</Text>
<Text /* Text2 */ style={styles.xdw3w9} numberOfLines={1}>{state.order.data.product_name}</Text></>)}</View>
<View /* View4 */   style={styles.xdw3wi}><Text /* Text3 */ style={styles.xdw3wb} >{state.langMap.payment_method}</Text>
<View /* View5 */   style={styles.xdw3wh}>{(state.items).map((bagForItem, bagForIndex) => { const bagForKeyValue = 'ViewFor1' + ':' + String(bagForItem['id']); return <ViewForItem /* ViewFor1 */ key={bagForKeyValue} bagForItem={bagForItem} bagForIndex={bagForIndex}><XbenchcView /* View6 */   viewStyle={styles.xdw3wg} onClick={getEvent('View6:onClick:selectPayMethod:', {eventData: bagForItem}, bagForKeyValue, bagForIndex)}>{!!(bagForItem.data.image !== 'placeholder/600x300/DDD/000/default/') /* ViewIf3 */ && (<><XbenchcImage /* Image1 */ style={styles.xdw3wc} source={dwtools.qiniu(bagForItem.data.image, slide.components.Image1.ctx_map.fop)}  /></>)}
<Text /* Text4 */ style={styles.xdw3wd} >{bagForItem.data.name}</Text>
<View /* View7 */   style={styles.xdw3wf}>{!!(state.paymentCode !== bagForItem.data.code) /* ViewIf4 */ && (<><Image /* SvgImage1 */ style={[ styles.xdw3we, { width: pm(20), height: pm(20) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev064/2023/04/17/fT8ooYZg2MC8TuVz59SQ3j/815875.svg"), width: pm(20), height: pm(20) }} /></>)}
{!!(state.paymentCode === bagForItem.data.code) /* ViewIf5 */ && (<><Image /* SvgImage2 */ style={[ styles.xdw3we, { width: pm(20), height: pm(20) }]} contentFit="contain" source={{uri: dwtools.qiniu("u/dev064/2023/04/17/f4LzeEPLeS3Qvc5heEF7x4/815878.svg"), width: pm(20), height: pm(20) }} /></>)}</View></XbenchcView></ViewForItem> })}</View></View>
{!!(state.item && state.item.data.code === 'BANK') /* ViewIf6 */ && (<><View /* View8 */   style={styles.xdw3wn}><Text /* Text5 */ style={styles.xdw3wj} >{state.langMap.tip1}</Text>
<View /* View9 */   style={styles.xdw3wl}><Text /* Text6 */ style={styles.xdw3wk} >{state.langMap.account_name}</Text>
<Text /* Text8 */ style={styles.xdw3wk} >{state.item.data.account_name}</Text></View>
<View /* View10 */   style={styles.xdw3wl}><Text /* Text7 */ style={styles.xdw3wk} >{state.langMap.card_number}</Text>
<Text /* Text9 */ style={styles.xdw3wk} >{state.item.data.account_number}</Text></View>
<View /* View11 */   style={styles.xdw3wl}><Text /* Text11 */ style={styles.xdw3wk} >{state.langMap.account_bank}</Text>
<Text /* Text10 */ style={styles.xdw3wk} >{state.item.data.account_bank}</Text></View>
<View /* View12 */   style={styles.xdw3wh}><View /* View13 */   style={styles.xdw3wm}></View>
<Xbenchc168610 /* DwappCloud2 */ value={ state.bank_remark } placeholder={ state.langMap.pay_remarks } containerStyle={ slide.components.DwappCloud2.ctx_map.style1 } valueInputStyle={ slide.components.DwappCloud2.ctx_map.style2 } type={ slide.components.DwappCloud2.ctx_map.select1 }  onChange={getEvent('DwappCloud2:input::bank_remark', {}, bagForKeyValue, bagForIndex)}></Xbenchc168610>
<Xbenchc184002 /* DwappCloud4 */ label={ state.langMap.payment_voucher } value={ state.bank_images } eventData={ slide.components.DwappCloud4.ctx_map.eventData } eventData2={ slide.components.DwappCloud4.ctx_map.eventData2 } labelStyle={ slide.components.DwappCloud4.ctx_map.labelStyle } valueStyle={ slide.components.DwappCloud4.ctx_map.valueStyle } pickerStyle={ slide.components.DwappCloud4.ctx_map.pickerStyle } placeholder={ slide.components.DwappCloud4.ctx_map.placeholder } containerStyle={ slide.components.DwappCloud4.ctx_map.containerStyle } labelTextStyle={ slide.components.DwappCloud4.ctx_map.labelTextStyle } valueInputStyle={ slide.components.DwappCloud4.ctx_map.valueInputStyle }  onChange={getEvent('DwappCloud4:input::bank_images', {}, bagForKeyValue, bagForIndex)}></Xbenchc184002></View></View></>)}</>)}</View></XbenchcScrollView>
{!!(state.isLoad) /* ViewIf7 */ && (<><Shadow containerStyle={styles.xdw3ws} {...({
  offset: [0, 0],
  distance: 5,
  startColor: 'rgba(0, 0, 0, 0.075)'
})}><XbenchcView /* View15 */   viewStyle={styles.xdw3wr} onClick={getEvent('View15:onClick:payNow:', {}, bagForKeyValue, bagForIndex)}><LinearGradient style={[styles.xdw3wq, ({background: "linear-gradient(125deg, #FA232F, #F24D0C)"})]} colors={ [
  "#FA232F",
  "#F24D0C",
] } start={ {x: 0, y: 0} } end={ {x: 1, y: 1} }><Text /* Text12 */ style={styles.xdw3wp} >{slide.components.Text12.ctx_map.text}</Text></LinearGradient></XbenchcView></Shadow>
<View /* View16 */   style={styles.xdw3wt}><Xbenchc168613 /* DwappCloud3 */ backgroundColor={ slide.components.DwappCloud3.ctx_map.color1 } ></Xbenchc168613></View></>)}
<Xbenchc275104 /* DwappCloud5 */ valueStyle={ slide.components.DwappCloud5.ctx_map.valueStyle } containerStyle={ slide.components.DwappCloud5.ctx_map.containerStyle } valueInputStyle={ slide.components.DwappCloud5.ctx_map.valueInputStyle }  onInit={getEvent('DwappCloud5:onInit:getModalInstance:', {}, bagForKeyValue, bagForIndex)}></Xbenchc275104>
    </ErrorBoundary>
  )
}
