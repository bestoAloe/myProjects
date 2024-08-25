
import React from 'react'
import { Platform, StyleSheet, Dimensions } from 'react-native'
import { XbenchcDwProxy } from '../../xbench/xbenchc/XbenchcDwProxy'
import { useNavigation } from '@react-navigation/native'
import dwtools from '../../utils/dwtools'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcText from '../../xbench/xbenchc/components/XbenchcText'

const windowWidth = Dimensions.get('window').width
const pm = (number) => number ? (parseFloat(number) / 320) * windowWidth : 0

const styles = StyleSheet.create({
'b-text': {
  flexDirection: "column",
}
})
const getStyle = (classNames) => (classNames || '').split(' ').filter(Boolean).map((className) => styles[className] || {})

const _xc = {
  h: React.createElement,
  f: React.Fragment,
  s: getStyle,
  XbenchcView,
  XbenchcText
}

/** wxs-start */
const getDate = (...args) => new Date(...args)
const getRegExp = (...args) => new RegExp(...args)
const m24050 = ((getDate, getRegExp) => {
      const module = { exports: {} }
      
    function getDataByPath (obj, path, isWebLike) {
      var RE_2 = isWebLike ? getRegExp('(\\[|\\])', 'g') : getRegExp('(\[|\])', 'g')
      var RE_3 = isWebLike ? getRegExp('\\.+', 'g') : getRegExp('\.+', 'g')

      var tokens = path.replace(RE_2, '.').replace(RE_3, '.').split('.').filter(function (i) { return !!i })
      var key = tokens.pop()
      while (tokens.length) {
        var token = tokens.shift()
        obj = obj[token]
        if (obj === null || typeof obj !== 'object') return ''
      }
      return obj[key]
    }

    function format (template, kwargs, isWebLike) {
      var RE_TEMPLATE = isWebLike ? getRegExp('\\$\\{(.+?)\\}', 'g') : getRegExp('\$\{(.+?)\}', 'g') // 转义不一致
      if (!(template && typeof kwargs === 'object')) return ''
      return template.replace(RE_TEMPLATE, function (match, p1) { return getDataByPath(kwargs, p1, isWebLike) })
    }

    module.exports = {
      format: format
    }
  
      return module.exports
    })(getDate, getRegExp);
/** wxs-end */

const configFactory = ((dw) => { return {
  type: 'xbenchc',
  data () {
    return {
      isWebLike: dw.isTt || dw.platform === 'rnapp' || dw.platform === 'web'
    }
  },
  methods: {
    //
  },
}
 });
const dw = new XbenchcDwProxy({}, { _xc })
const config = configFactory(dw)
const watchKeys = Object.keys(config.watch || {})
const render = (_props, _instance, _xc, children) => {
  const { template, t1, t2, t3, t4, textStyle, __0 } = _props
  const { isWebLike, __1 } = _instance.data
  const { __2 } = _instance
  return _xc.h(_xc.XbenchcView, null, undefined, _xc.h(_xc.XbenchcText, {'className': "b-text",'style': _xc.s("b-text").concat({...(textStyle)})},  m24050.format(template, {t1: t1, t2: t2, t3: t3, t4: t4}, isWebLike) ))
}

export default function Xbenchc179553(props) {
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
