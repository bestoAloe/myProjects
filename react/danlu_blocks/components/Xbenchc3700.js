
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
'b-view': {
  flexDirection: "column",
  backgroundColor: "#eee",
  borderWidth: pm(1),
  borderColor: "#ddd",
  paddingTop: pm(5),
  paddingBottom: pm(5),
  paddingLeft: pm(10),
  paddingRight: pm(10),
},
'b-text': {
  flexDirection: "column",
  fontFamily: "Courier New",
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
const m3700 = ((getDate, getRegExp) => {
      const module = { exports: {} }
      
    function getItems (value) {
      var str = JSON.stringify(value, null, 2)
      if (str === undefined) {
        str = 'undefined'
      }
      var lines = str.split('\n')
      return lines.map(function(line, index) {
        return {
          id: index,
          line: line.replace(getRegExp(' ', 'g'), '\xA0'),
        }
      })
    }

    module.exports = {
      getItems: getItems
    }
  
      return module.exports
    })(getDate, getRegExp);
/** wxs-end */

const configFactory = ((dw) => { return {
  type: 'xbenchc',
  data () {
    return { }
  }
}
 });
const dw = new XbenchcDwProxy({}, { _xc })
const config = configFactory(dw)
const watchKeys = Object.keys(config.watch || {})
const render = (_props, _instance, _xc, children) => {
  const { value, __0 } = _props
  const { item, __1 } = _instance.data
  const { __2 } = _instance
  return _xc.h(_xc.XbenchcView, {'style': _xc.s("b-view")}, undefined, (m3700.getItems(value)).map((item, index) => _xc.h(_xc.ViewForItem, {key: item["id"], bagForItem: item, bagForIndex: index}, _xc.h(_xc.XbenchcText, {'style': _xc.s("b-text")},  item.line ))))
}

export default function Xbenchc3700(props) {
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
