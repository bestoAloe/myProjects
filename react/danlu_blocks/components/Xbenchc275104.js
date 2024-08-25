
import React from 'react'
import { Platform, StyleSheet, Dimensions } from 'react-native'
import { XbenchcDwProxy } from '../../xbench/xbenchc/XbenchcDwProxy'
import { useNavigation } from '@react-navigation/native'
import dwtools from '../../utils/dwtools'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcModal from '../../xbench/xbenchc/components/XbenchcModal'
import XbenchcText from '../../xbench/xbenchc/components/XbenchcText'

const windowWidth = Dimensions.get('window').width
const pm = (number) => number ? (parseFloat(number) / 320) * windowWidth : 0

const styles = StyleSheet.create({
'b-container': {
  width: pm(238),
  marginLeft: pm(41),
  marginRight: pm(41),
  marginBottom: pm(18),
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
  backgroundColor: "white",
},
'b-message-container': {
  paddingLeft: pm(30),
  paddingRight: pm(30),
  paddingTop: pm(12),
  paddingBottom: pm(12),
  flexWrap: "wrap",
},
'b-message': {
  fontSize: pm(12),
  lineHeight: pm(20),
  width: pm(178),
  textAlign: "center",
},
'b-bottom': {
  flexDirection: "row",
  paddingBottom: pm(2),
},
'b-cancel-button': {
  width: "50%",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: pm(12),
  paddingBottom: pm(12),
  borderRightWidth: pm(0.5),
  borderRightColor: "#eeeeee",
},
'b-confirm-button': {
  width: "50%",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: pm(12),
  paddingBottom: pm(12),
},
'b-cancel-text': {
  textAlign: "center",
  fontSize: pm(12),
  color: "#999999",
  lineHeight: pm(20),
},
'b-confirm-text': {
  textAlign: "center",
  fontSize: pm(12),
  color: "#181818",
  lineHeight: pm(20),
},
'b-toast-container': {
  width: pm(320),
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999,
},
'b-toast': {
  paddingLeft: pm(14),
  paddingRight: pm(14),
  paddingTop: pm(10),
  paddingBottom: pm(10),
  justifyContent: "center",
  alignItems: "center",
  maxWidth: pm(130),
  marginBottom: pm(20),
  backgroundColor: "rgba(0,0,0,0.8)",
  borderTopLeftRadius: pm(10),
  borderTopRightRadius: pm(10),
  borderBottomRightRadius: pm(10),
  borderBottomLeftRadius: pm(10),
},
'b-toast-text': {
  color: "white",
  fontSize: pm(12),
  textAlign: "center",
  lineHeight: pm(20),
}
})
const getStyle = (classNames) => (classNames || '').split(' ').filter(Boolean).map((className) => styles[className] || {})

const _xc = {
  h: React.createElement,
  f: React.Fragment,
  s: getStyle,
  XbenchcView,
  XbenchcModal,
  XbenchcText
}

/** wxs-start */
const getDate = (...args) => new Date(...args)
const getRegExp = (...args) => new RegExp(...args)

/** wxs-end */

const configFactory = ((dw) => { class XcModal{
  constructor(ctx){
    this.ctx = ctx
  }
  popUp(message){
    this.ctx.setData({isVisible: true, message});
    return new Promise((resolve) => {
      this.ctx.setData({ resolveFunc: resolve });
    })

  };
  toastPopUp(toastMessage, ms=1500){
    this.ctx.setData({
      showToast: true,
      toastMessage,
    })
    console.log("true")
    setTimeout(()=>{
    this.ctx.setData({
      showToast: false,
    })
    console.log("false")
    }, ms)
  }
}

return {
  type: 'xbenchc',
  data () {
    return {
      isVisible: false,
      message: "删除共享者后，共享者将无法查看您的设备",
      resolveFunc: null,
      showToast: false,
      toastMessage: "干燥机重置成功成功",
    }
  },
  mounted(){
    this.triggerEvent("onInit", new XcModal(this))
  },
  methods: {
    handleCancel(){
      this.setData({ isVisible: false })
      if (this.data.resolveFunc) {
        this.data.resolveFunc(false);
      }
    },

    handleConfirm(){
      this.setData({ isVisible: false });
      if (this.data.resolveFunc) {
        this.data.resolveFunc(true);
      }
    }
  },
}
 });
const dw = new XbenchcDwProxy({}, { _xc })
const config = configFactory(dw)
const watchKeys = Object.keys(config.watch || {})
const render = (_props, _instance, _xc, children) => {
  const { valueStyle, containerStyle, valueInputStyle, __0 } = _props
  const { isVisible, message, showToast, toastMessage, __1 } = _instance.data
  const { handleCancel, handleConfirm, __2 } = _instance
  return _xc.h(_xc.XbenchcView, null, _xc.h(_xc.XbenchcModal, {'value': isVisible,'mask': true,'rootStyle': {justifyContent: "center"}}, _xc.h(_xc.XbenchcView, {'className': "b-container",'style': _xc.s("b-container").concat({...(containerStyle)})}, _xc.h(_xc.XbenchcView, {'className': "b-message-container",'style': _xc.s("b-message-container").concat({...(valueStyle)})}, _xc.h(_xc.XbenchcText, {'className': "b-message",'style': _xc.s("b-message").concat({...(valueInputStyle)})},  message )), _xc.h(_xc.XbenchcView, {'style': _xc.s("b-bottom")}, _xc.h(_xc.XbenchcView, {'onClick': handleCancel,'style': _xc.s("b-cancel-button")}, _xc.h(_xc.XbenchcText, {'style': _xc.s("b-cancel-text")},  "取消" )), _xc.h(_xc.XbenchcView, {'onClick': handleConfirm,'style': _xc.s("b-confirm-button")}, _xc.h(_xc.XbenchcText, {'style': _xc.s("b-confirm-text")},  "确认" ))))), _xc.h(_xc.XbenchcModal, {'value': showToast,'mask': false,'rootStyle': {justifyContent: "center"}}, _xc.h(_xc.XbenchcView, {'style': _xc.s("b-toast-container")}, _xc.h(_xc.XbenchcView, {'style': _xc.s("b-toast")}, _xc.h(_xc.XbenchcText, {'style': _xc.s("b-toast-text")},  toastMessage )))))
}

export default function Xbenchc275104(props) {
  const navigation = useNavigation()
  const _instance = React.useMemo(() => dw._makeXcmlComponentInstance(config), [])
  const [data, setData] = React.useState(_instance.data)
  const _xc = React.useMemo(() => dw._getXcmlComponentContext(), [])
  const { children } = props

  dw._setReactNavigation(navigation)

  _instance.data = { ...data, ...props }
  Object.setPrototypeOf(_instance, _instance.data)

  _instance.setData = (partialData) => {
    _instance.data = {..._instance.data, ...partialData}
    setData(_instance.data)
  }
  _instance.triggerEvent = (name, ...args) => {
    name = name === 'input' ? 'onChange' : name
    props[name] && props[name](...args)
  }
  if (!_instance._isCreated) {
    _instance._isCreated = true
    _instance.created && _instance.created()
  }

  if (watchKeys.length) {
    watchKeys.forEach((key) => {
      React.useEffect(() => {
        _instance._watchs[key] && _instance._watchs[key](_instance.data[key])
      }, [_instance.data[key]])
    })
  }

  React.useEffect(() => {
    _instance.mounted && _instance.mounted()
    _instance.show && _instance.show()
    return () => {
      _instance.unmounted && _instance.unmounted()
      _instance.hide && _instance.hide()
    }
  }, [_instance])

  return render(props, _instance, _xc, children)
}
