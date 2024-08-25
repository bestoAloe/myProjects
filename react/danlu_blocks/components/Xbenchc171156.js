
import React from 'react'
import { Platform, StyleSheet, Dimensions } from 'react-native'
import { XbenchcDwProxy } from '../../xbench/xbenchc/XbenchcDwProxy'
import { useNavigation } from '@react-navigation/native'
import dwtools from '../../utils/dwtools'
import XbenchcScrollView from '../../xbench/xbenchc/components/XbenchcScrollView'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import ViewForItem from '../../xbench/components/ViewForItem'
import XbenchcText from '../../xbench/xbenchc/components/XbenchcText'

const windowWidth = Dimensions.get('window').width
const pm = (number) => number ? (parseFloat(number) / 320) * windowWidth : 0

const styles = StyleSheet.create({
'b-container': {
  flexDirection: "row",
  flexWrap: "nowrap",
  height: pm(40),
  width: "100%",
},
'b-item': {
  height: pm(40),
  paddingLeft: pm(10),
  paddingRight: pm(10),
  flex: 1,
  position: "relative",
  borderBottomWidth: pm(1),
  borderBottomColor: "#eee",
},
'b-item-container': {
  height: pm(40),
  justifyContent: "center",
  alignItems: "center",
},
'b-line': {
  position: "absolute",
  zIndex: 10,
  bottom: pm(-1),
  height: pm(2),
  backgroundColor: "#2196f3",
  left: pm(10),
  right: pm(10),
},
'b-text': {
  fontSize: pm(13),
},
'b-text-active': {
  color: "#2196f3",
}
})
const getStyle = (classNames) => (classNames || '').split(' ').filter(Boolean).map((className) => styles[className] || {})

const _xc = {
  h: React.createElement,
  f: React.Fragment,
  s: getStyle,
  XbenchcScrollView,
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
      this.triggerEvent('input', event.currentTarget.dataset.item.id)
    },
  },
}
 });
const dw = new XbenchcDwProxy({}, { _xc })
const config = configFactory(dw)
const watchKeys = Object.keys(config.watch || {})
const render = (_props, _instance, _xc, children) => {
  const { tabs, value, color, lineColor, __0 } = _props
  const { item, __1 } = _instance.data
  const { handleClick, __2 } = _instance
  return _xc.h(_xc.XbenchcScrollView, {'type': "list",'scrollX': true,'scrollY': false,'showScrollbar': false,'style': _xc.s("b-container")}, _xc.h(_xc.XbenchcView, {'style': _xc.s("b-container")}, (tabs).map((item, index) => _xc.h(_xc.ViewForItem, {key: item["id"], bagForItem: item, bagForIndex: index}, _xc.h(_xc.XbenchcView, {'onClick': handleClick,'dataset': {'item': item},'style': _xc.s('b-item ' + (item.id === value ? 'b-item-active' : ''))}, _xc.h(_xc.XbenchcView, {'style': _xc.s("b-item-container")}, _xc.h(_xc.XbenchcText, {'className': 'b-text ' + (item.id === value ? 'b-text-active' : ''),'style': _xc.s('b-text ' + (item.id === value ? 'b-text-active' : '')).concat({color: item.id === value?color:'#000000'})},  item.name )), ((item.id === value) && (_xc.h(_xc.XbenchcView, {'className': "b-line",'style': _xc.s("b-line").concat({backgroundColor: lineColor})}))))))))
}

export default function Xbenchc171156(props) {
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
