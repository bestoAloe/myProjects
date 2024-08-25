
import React from 'react'
import { Platform, StyleSheet, Dimensions } from 'react-native'
import { XbenchcDwProxy } from '../../xbench/xbenchc/XbenchcDwProxy'
import { useNavigation } from '@react-navigation/native'
import dwtools from '../../utils/dwtools'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcScrollView from '../../xbench/xbenchc/components/XbenchcScrollView'
import ViewForItem from '../../xbench/components/ViewForItem'
import XbenchcText from '../../xbench/xbenchc/components/XbenchcText'

const windowWidth = Dimensions.get('window').width
const pm = (number) => number ? (parseFloat(number) / 320) * windowWidth : 0

const styles = StyleSheet.create({
'b-box': {
  width: pm(320),
  position: "relative",
},
'b-list': {
  flexDirection: "row",
  borderWidth: pm(1),
  borderColor: "#F0F0F0",
  height: pm(60),
  paddingTop: pm(5),
  paddingLeft: pm(160),
  paddingRight: pm(140),
},
'b-item': {
  marginRight: pm(15),
},
'b-grad': {
  width: pm(1),
  height: pm(9),
  backgroundColor: "#D8D8D8",
},
'b-grad-b-active': {
  width: pm(1),
  height: pm(17),
  backgroundColor: "#D8D8D8",
},
'b-label-container': {
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",
},
'b-label': {
  top: pm(25),
  position: "absolute",
  flexGrow: 1,
  width: pm(31),
  justifyContent: "center",
  textAlign: "center",
},
'b-text': {
  fontSize: pm(21),
  lineHeight: pm(26),
  color: "#D8D8D8",
  textAlign: "center",
},
'b-scrollview': {
  flexDirection: "row",
  width: pm(320),
  flexGrow: 0,
},
'b-image': {
  position: "absolute",
  left: pm(157),
  top: pm(5),
  zIndex: 2,
  width: pm(12),
  height: pm(29),
}
})
const getStyle = (classNames) => (classNames || '').split(' ').filter(Boolean).map((className) => styles[className] || {})

const _xc = {
  h: React.createElement,
  f: React.Fragment,
  s: getStyle,
  XbenchcView,
  XbenchcImage,
  XbenchcScrollView,
  ViewForItem,
  XbenchcText
}

/** wxs-start */
const getDate = (...args) => new Date(...args)
const getRegExp = (...args) => new RegExp(...args)

/** wxs-end */

const configFactory = ((dw) => { let tick = null
return {
  type: 'xbenchc',
  data() {
    return {
      x: 20,
      limit: 30,
      labelGap: 5,
      range: []
    }
  },
  mounted() {
    this.initRule()
  },
  watch: {
    value (newValue) {
      console.log('newValue', newValue)
      const unit = parseFloat(dw.getPlatformPx(16))
      const fixOffset = (newValue * unit)
      this.scrollHandler(fixOffset)
      // this.setData({
      //   valueUpper: newValue.toUpperCase()
      // })
    }
  },
  methods: {
    initRule() {
      let range = []
      for (let index = 0; index <= this.data.totalCount; index++) {
        range.push({
          index: index,
          is_label: (index) % this.data.labelInterval === 0
        })
      }
      console.log("range", range)
      this.setData({
        range
      })

      console.log("this.data.value", this.data.value)
      if(!!this.data.value){
        const unit = parseFloat(dw.getPlatformPx(16))
        console.log("unit", unit)
        const fixOffset = (this.data.value * unit)
        console.log("fixOffset", fixOffset)
        this.setData({
          x: fixOffset
        })
      }
      
    },
    scrollHandler(offsetX){
      this.setData({
        x: offsetX
      })
    },
    onMomentumScrollEnd(e) {
      // 偏移量
      let offset = e.detail.scrollLeft
      // console.log("offset", offset)
      if (tick) {
        clearTimeout(tick)
      }
      const interval = 100
      tick = setTimeout(() => {
        // console.log("停止拖动")
        // 每隔宽度pm(15)
        const unit = parseFloat(dw.getPlatformPx(16))
        // console.log("unit", unit)
        // 滑动的格数
        const value = Math.round(offset / unit)
        // console.log("value", value)
        // 修正偏移
        // const fixOffset = (value * unit) - pm(3)
        const fixOffset = (value * unit)
        this.scrollHandler(fixOffset)
        this.triggerEvent("scrollEnd", value)
        tick = null
      }, interval)

    }
  }
}
 });
const dw = new XbenchcDwProxy({}, { _xc })
const config = configFactory(dw)
const watchKeys = Object.keys(config.watch || {})
const render = (_props, _instance, _xc, children) => {
  const { eventData, eventData2, bgColor, activeBgColor, totalCount, labelInterval, value, __0 } = _props
  const { x, range, item, __1 } = _instance.data
  const { onMomentumScrollEnd, __2 } = _instance
  return _xc.h(_xc.XbenchcView, {'style': _xc.s("b-box")}, _xc.h(_xc.XbenchcImage, {'src': "https://s2.d2scdn.com/u/dev064/2023/02/28/vZogFCvzERsoYS6y2Lkcuc/企业微信截图_20230228150456.png",'style': _xc.s("b-image")}), _xc.h(_xc.XbenchcScrollView, {'scrollX': true,'scrollLeft': x,'onScroll': onMomentumScrollEnd,'style': _xc.s("b-scrollview")}, _xc.h(_xc.XbenchcView, {'style': _xc.s("b-list")}, (range).map((item, index) => _xc.h(_xc.ViewForItem, {key: item["index"], bagForItem: item, bagForIndex: index}, _xc.h(_xc.XbenchcView, {'style': _xc.s("b-item")}, ((item.is_label) && (_xc.h(_xc.XbenchcView, {'style': _xc.s("b-label-container")}, _xc.h(_xc.XbenchcView, {'style': _xc.s("b-grad-b-active")}), _xc.h(_xc.XbenchcView, {'style': _xc.s("b-label")}, _xc.h(_xc.XbenchcText, {'style': _xc.s("b-text")},  item.index ))))), ((!item.is_label) && (_xc.h(_xc.XbenchcView, {'style': _xc.s("b-grad")})))))))))
}

export default function Xbenchc290154(props) {
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
