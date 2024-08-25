
import React from 'react'
import { Platform, StyleSheet, Dimensions } from 'react-native'
import { XbenchcDwProxy } from '../../xbench/xbenchc/XbenchcDwProxy'
import { useNavigation } from '@react-navigation/native'
import dwtools from '../../utils/dwtools'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'

const windowWidth = Dimensions.get('window').width
const pm = (number) => number ? (parseFloat(number) / 320) * windowWidth : 0

const styles = StyleSheet.create({
'b-view': {
  flexDirection: "column",
  position: "relative",
  width: pm(40),
  height: pm(20),
  borderTopLeftRadius: pm(20),
  borderTopRightRadius: pm(20),
  borderBottomRightRadius: pm(20),
  borderBottomLeftRadius: pm(20),
},
'b-node': {
  flexDirection: "column",
  position: "absolute",
  top: pm(2),
  left: pm(2),
  backgroundColor: "#fff",
  borderTopLeftRadius: pm(18),
  borderTopRightRadius: pm(18),
  borderBottomRightRadius: pm(18),
  borderBottomLeftRadius: pm(18),
  width: pm(16),
  height: pm(16),
},
'b-node-active': {
  left: pm(22),
  backgroundColor: "#FFF",
}
})
const getStyle = (classNames) => (classNames || '').split(' ').filter(Boolean).map((className) => styles[className] || {})

const _xc = {
  h: React.createElement,
  f: React.Fragment,
  s: getStyle,
  XbenchcView
}

/** wxs-start */
const getDate = (...args) => new Date(...args)
const getRegExp = (...args) => new RegExp(...args)

/** wxs-end */

const configFactory = ((dw) => { return {
  type: 'xbenchc',
  data () {
    return { }
  },
  methods: {
    handleClick () {
      this.triggerEvent('input', !this.data.value, this.data)
    }
  }
}
 });
const dw = new XbenchcDwProxy({}, { _xc })
const config = configFactory(dw)
const watchKeys = Object.keys(config.watch || {})
const render = (_props, _instance, _xc, children) => {
  const { value, eventData, eventData2, bgColor, activeBgColor, size, __0 } = _props
  const { __1 } = _instance.data
  const { handleClick, __2 } = _instance
  return _xc.h(_xc.XbenchcView, {'className': 'b-view' + (value ? ' b-view-active' : ''),'style': _xc.s('b-view' + (value ? ' b-view-active' : '')).concat({backgroundColor: value ? activeBgColor: bgColor, transform: size}),'onClick': handleClick}, _xc.h(_xc.XbenchcView, {'style': _xc.s('b-node' + (value ? ' b-node-active' : ''))}))
}

export default function Xbenchc191300(props) {
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
