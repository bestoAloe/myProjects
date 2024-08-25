
import React from 'react'
import { Platform, StyleSheet, Dimensions } from 'react-native'
import { XbenchcDwProxy } from '../../xbench/xbenchc/XbenchcDwProxy'
import { useNavigation } from '@react-navigation/native'
import dwtools from '../../utils/dwtools'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import ViewForItem from '../../xbench/components/ViewForItem'
import XbenchcText from '../../xbench/xbenchc/components/XbenchcText'

const windowWidth = Dimensions.get('window').width
const pm = (number) => number ? (parseFloat(number) / 320) * windowWidth : 0

const styles = StyleSheet.create({
'b-container': {
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "flex-start",
  alignItems: "center",
  height: pm(40),
  borderBottomWidth: pm(1),
  borderBottomColor: "#eee",
},
'b-item': {
  height: pm(40),
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
}
})
const getStyle = (classNames) => (classNames || '').split(' ').filter(Boolean).map((className) => styles[className] || {})

const _xc = {
  h: React.createElement,
  f: React.Fragment,
  s: getStyle,
  XbenchcView,
  ViewForItem,
  XbenchcText
}

/** wxs-start */
const getDate = (...args) => new Date(...args)
const getRegExp = (...args) => new RegExp(...args)

/** wxs-end */

const configFactory = ((dw) => { return {
  type: 'xbenchc',
  data () {
    return {}
  },
  methods: {
    handleClick(event) {
      console.log('dw', dw)
      this.triggerEvent('input', event.currentTarget.dataset.item.id)
    },
  },
}
 });
const dw = new XbenchcDwProxy({}, { _xc })
const config = configFactory(dw)
const watchKeys = Object.keys(config.watch || {})
const render = (_props, _instance, _xc, children) => {
  const { tabs, value, textStyle, activeTextStyle, lineStyle, containerStyle, __0 } = _props
  const { item, __1 } = _instance.data
  const { handleClick, __2 } = _instance
  return _xc.h(_xc.XbenchcView, {'className': "b-container",'style': _xc.s("b-container").concat({...(containerStyle)})}, (tabs).map((item, index) => _xc.h(_xc.ViewForItem, {key: item["id"], bagForItem: item, bagForIndex: index}, _xc.h(_xc.XbenchcView, {'onClick': handleClick,'dataset': {'item': item},'style': _xc.s('b-item ' + (item.id === value ? 'b-item-active' : ''))}, _xc.h(_xc.XbenchcText, {'className': 'b-text ' + (item.id === value ? 'b-text-active' : ''),'style': _xc.s('b-text ' + (item.id === value ? 'b-text-active' : '')).concat({...(item.id === value ? activeTextStyle : textStyle)})},  item.name ), ((item.id === value) && (_xc.h(_xc.XbenchcView, {'className': "b-line",'style': _xc.s("b-line").concat({...(lineStyle)})})))))))
}

export default function Xbenchc168611(props) {
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
