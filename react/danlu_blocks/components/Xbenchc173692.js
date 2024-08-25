
import React from 'react'
import { Platform, StyleSheet, Dimensions } from 'react-native'
import { XbenchcDwProxy } from '../../xbench/xbenchc/XbenchcDwProxy'
import { useNavigation } from '@react-navigation/native'
import dwtools from '../../utils/dwtools'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcSvgXml from '../../xbench/xbenchc/components/XbenchcSvgXml'

const windowWidth = Dimensions.get('window').width
const pm = (number) => number ? (parseFloat(number) / 320) * windowWidth : 0

const styles = StyleSheet.create({
'b-view': {
  flexDirection: "column",
  position: "relative",
}
})
const getStyle = (classNames) => (classNames || '').split(' ').filter(Boolean).map((className) => styles[className] || {})

const _xc = {
  h: React.createElement,
  f: React.Fragment,
  s: getStyle,
  XbenchcView,
  XbenchcSvgXml
}

/** wxs-start */
const getDate = (...args) => new Date(...args)
const getRegExp = (...args) => new RegExp(...args)

/** wxs-end */

const configFactory = ((dw) => { return {
  type: 'xbenchc',
  data() {
    return {
      xml: '',
    }
  },
  watch: {
    value (newValue) {
      console.log('newValue', newValue)
      this.init_svg()
    }
  },
  methods: {
    init_svg(){
      let swidth = parseFloat(dw.getPlatformPx(this.swidth))
      let radius = parseFloat(dw.getPlatformPx(this.radius))
      let value = this.value
      let circumference = 2 * Math.PI * radius
      let offset = circumference * (1 - value / 100);
      let offsetBg = 0;
      this.setData({
        xml: `<svg style="transition: stroke .3s ease 0s;" viewBox="0 0 ${2 * radius + 2 * swidth} ${2 * radius + 2 * swidth}">
              <circle style="stroke-width: ${swidth}; fill: transparent;stroke-linecap: round; stroke: ${this.bgColor};" stroke-dasharray="${2 * Math.PI * radius}" stroke-dashoffset="${offsetBg}" r="${radius}" cx="${radius + swidth}" cy="${radius + swidth}" />
              <circle style="stroke-width: ${swidth}; fill: transparent;stroke-linecap: round; stroke: ${this.color};" stroke-dasharray="${2 * Math.PI * radius}" stroke-dashoffset="${offset}" r="${radius}" cx="${radius + swidth}" cy="${radius + swidth}" />
            </svg>`
      })
    },
  },
}
 });
const dw = new XbenchcDwProxy({}, { _xc })
const config = configFactory(dw)
const watchKeys = Object.keys(config.watch || {})
const render = (_props, _instance, _xc, children) => {
  const { color, bgColor, value, radius, swidth, __0 } = _props
  const { xml, __1 } = _instance.data
  const { __2 } = _instance
  return _xc.h(_xc.XbenchcView, {'style': _xc.s("b-view")}, _xc.h(_xc.XbenchcSvgXml, {'xml': xml,'style': {width: dwtools.pm(radius + 4), height: dwtools.pm(radius + 4)}}))
}

export default function Xbenchc173692(props) {
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
