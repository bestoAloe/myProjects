
import React from 'react'
import { Platform, StyleSheet, Dimensions } from 'react-native'
import { XbenchcDwProxy } from '../../xbench/xbenchc/XbenchcDwProxy'
import { useNavigation } from '@react-navigation/native'
import dwtools from '../../utils/dwtools'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcText from '../../xbench/xbenchc/components/XbenchcText'
import XbenchcPicker from '../../xbench/xbenchc/components/XbenchcPicker'

const windowWidth = Dimensions.get('window').width
const pm = (number) => number ? (parseFloat(number) / 320) * windowWidth : 0

const styles = StyleSheet.create({
'b-input': {
  borderWidth: pm(0),
  borderColor: "transparent",
}
})
const getStyle = (classNames) => (classNames || '').split(' ').filter(Boolean).map((className) => styles[className] || {})

const _xc = {
  h: React.createElement,
  f: React.Fragment,
  s: getStyle,
  XbenchcView,
  XbenchcText,
  XbenchcPicker
}

/** wxs-start */
const getDate = (...args) => new Date(...args)
const getRegExp = (...args) => new RegExp(...args)

/** wxs-end */

const configFactory = ((dw) => { return {
  type: 'xbenchc',
  data () {
    return {
      defaultDate: new Date(+new Date() + -new Date().getTimezoneOffset() * 60 * 1000).toISOString().replace('Z', '').slice(0, 10)
    }
  },
  methods: {
    handleChange(event) {
      this.triggerEvent('input', event.detail.value, this.data)
    },
  },
}
 });
const dw = new XbenchcDwProxy({}, { _xc })
const config = configFactory(dw)
const watchKeys = Object.keys(config.watch || {})
const render = (_props, _instance, _xc, children) => {
  const { label, value, eventData, eventData2, labelStyle, valueStyle, pickerStyle, placeholder, containerStyle, labelTextStyle, valueInputStyle, __0 } = _props
  const { defaultDate, __1 } = _instance.data
  const { handleChange, __2 } = _instance
  return _xc.h(_xc.XbenchcView, {'className': "b-container",'style': _xc.s("b-container").concat({...(containerStyle)})}, _xc.h(_xc.XbenchcView, {'className': "b-label",'style': _xc.s("b-label").concat({...(labelStyle)})}, _xc.h(_xc.XbenchcText, {'className': "b-label-text",'style': _xc.s("b-label-text").concat({...(labelTextStyle)})},  label )), _xc.h(_xc.XbenchcView, {'className': "b-value",'style': _xc.s("b-value").concat({...(valueStyle)})}, _xc.h(_xc.XbenchcPicker, {'mode': "date",'value': value || defaultDate,'onChange': handleChange}, _xc.h(_xc.XbenchcView, {'style': {...(pickerStyle)}}, _xc.h(_xc.XbenchcText, {'style': {...(valueInputStyle)}},  value || placeholder )))))
}

export default function Xbenchc182372(props) {
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
