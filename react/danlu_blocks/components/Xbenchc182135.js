
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
const m182135 = ((getDate, getRegExp) => {
      const module = { exports: {} }
      
    function findIndex(range, value) {
      if (!value) return 0
      for (var i = 0; i < range.length; i++) {
        if (range[i].value === value) {
          return i
        }
      }
      return 0
    }

    function findIndexDisplay(range, value, placeholder) {
      if (!value) return placeholder
      for (var i = 0; i < range.length; i++) {
        if (range[i].value === value) {
          return range[i].label
        }
      }
      return placeholder
    }

    module.exports = {
      findIndex: findIndex,
      findIndexDisplay: findIndexDisplay
    }
  
      return module.exports
    })(getDate, getRegExp);
/** wxs-end */

const configFactory = ((dw) => { return {
  type: 'xbenchc',
  data () {
    return {}
  },
  methods: {
    handleChange(event) {
      const index = event.detail.value
      const choice = this.data.range[index] || this.data.range[0]
      this.triggerEvent('input', choice.value)
    },
  },
}
 });
const dw = new XbenchcDwProxy({}, { _xc })
const config = configFactory(dw)
const watchKeys = Object.keys(config.watch || {})
const render = (_props, _instance, _xc, children) => {
  const { label, range, value, eventData, eventData2, labelStyle, valueStyle, pickerStyle, placeholder, containerStyle, labelTextStyle, valueInputStyle, __0 } = _props
  const { __1 } = _instance.data
  const { handleChange, __2 } = _instance
  return _xc.h(_xc.XbenchcView, {'className': "b-container",'style': _xc.s("b-container").concat({...(containerStyle)})}, undefined, _xc.h(_xc.XbenchcView, {'className': "b-label",'style': _xc.s("b-label").concat({...(labelStyle)})}, _xc.h(_xc.XbenchcText, {'className': "b-label-text",'style': _xc.s("b-label-text").concat({...(labelTextStyle)})},  label )), _xc.h(_xc.XbenchcView, {'className': "b-value",'style': _xc.s("b-value").concat({...(valueStyle)})}, _xc.h(_xc.XbenchcPicker, {'mode': "selector",'value': m182135.findIndex(range, value),'range': range,'rangeKey': "label",'onChange': handleChange}, _xc.h(_xc.XbenchcView, {'style': {...(pickerStyle)}}, _xc.h(_xc.XbenchcText, {'style': {...(valueInputStyle)}},  m182135.findIndexDisplay(range, value, placeholder) )))))
}

export default function Xbenchc182135(props) {
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
