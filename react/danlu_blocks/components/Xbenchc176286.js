
import React from 'react'
import { Platform, StyleSheet, Dimensions } from 'react-native'
import { XbenchcDwProxy } from '../../xbench/xbenchc/XbenchcDwProxy'
import { useNavigation } from '@react-navigation/native'
import dwtools from '../../utils/dwtools'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcText from '../../xbench/xbenchc/components/XbenchcText'

const windowWidth = Dimensions.get('window').width
const pm = (number) => number ? (parseFloat(number) / 320) * windowWidth : 0

const styles = StyleSheet.create({
'b-view': {
  flexDirection: "column",
},
'b-header': {
  height: pm(38),
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
},
'b-back': {
  position: "absolute",
  width: pm(31),
  height: pm(31),
  left: pm(7),
  top: pm(3),
},
'b-back-image': {
  width: pm(31),
  height: pm(31),
},
'b-cuzbtn': {
  position: "absolute",
  height: pm(31),
  right: pm(7),
  top: pm(3),
  alignItems: "center",
},
'b-cuzbtn-image': {
  width: pm(31),
  height: pm(31),
}
})
const getStyle = (classNames) => (classNames || '').split(' ').filter(Boolean).map((className) => styles[className] || {})

const _xc = {
  h: React.createElement,
  f: React.Fragment,
  s: getStyle,
  XbenchcView,
  XbenchcImage,
  XbenchcText
}

/** wxs-start */
const getDate = (...args) => new Date(...args)
const getRegExp = (...args) => new RegExp(...args)

/** wxs-end */

const configFactory = ((dw) => { return {
  type: 'xbenchc',
  data() {
    return {
      height: dw.platform === 'rnapp'
        ? dw.getScreenInfo().statusBarHeight
        :
        dw.platform === 'web' && window.D && window.D.platform === 'dev'
          ? '20px'
          : `${dw.getScreenInfo().statusBarHeight}px`,
    }
  },
  methods: {
    async onBack() {
      if (this.data.backConfirm) {
        const res = await dw.showModal({
          title: this.data.confirmTitle,
          content: '',
          confirmText: this.data.confirmText,
          confirmColor: this.data.confirmColor,
          showCancel: true,
          cancelText: this.data.cancelText,
          cancelColor: this.data.cancelColor,
        })
        if(!(res && res.confirm)){
          return
        }
      }
      console.log("dw.navigateBack")
      await dw.navigateBack({ delta: 1 })
    },
    async onCuz(e) {
      console.log("onCuz")
      this.triggerEvent('onClickCuzBtn', e.platformEvent)
    }
  }
} });
const dw = new XbenchcDwProxy({}, { _xc })
const config = configFactory(dw)
const watchKeys = Object.keys(config.watch || {})
const render = (_props, _instance, _xc, children) => {
  const { isCuzBtn, backConfirm, eventData, eventData2, title, confirmTitle, confirmText, cancelText, backgroundColor, confirmColor, cancelColor, backIcon, cuzBtnIcon, titleStyle, screenType, __0 } = _props
  const { height, __1 } = _instance.data
  const { onBack, onCuz, __2 } = _instance
  return _xc.h(_xc.XbenchcView, {'className': "b-view",'style': _xc.s("b-view").concat({backgroundColor: backgroundColor, width: dwtools.pm(screenType === 'portrait'?320:750)})}, ((screenType === 'portrait') && (_xc.h(_xc.XbenchcView, {'className': "b-top-save",'style': _xc.s("b-top-save").concat({height: height})}))), _xc.h(_xc.XbenchcView, {'style': _xc.s("b-header")}, _xc.h(_xc.XbenchcView, {'onClick': onBack,'style': _xc.s("b-back")}, _xc.h(_xc.XbenchcImage, {'src': dwtools.qiniu(backIcon),'style': _xc.s("b-back-image")})), _xc.h(_xc.XbenchcView, {'style': _xc.s("b-title")}, _xc.h(_xc.XbenchcText, {'className': "b-title-content",'style': _xc.s("b-title-content").concat({...(titleStyle)})},  title )), ((isCuzBtn) && (_xc.h(_xc.XbenchcView, {'onClick': onCuz,'style': _xc.s("b-cuzbtn")},  children )))))
}

export default function Xbenchc176286(props) {
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
