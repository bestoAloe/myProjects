
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
  height: pm(68),
  position: "relative",
},
'b-list': {
  flexDirection: "row",
  borderTopWidth: pm(1),
  borderTopColor: "#F0F0F0",
  borderBottomWidth: pm(1),
  borderBottomColor: "#F0F0F0",
  height: pm(68),
  paddingTop: pm(5),
},
'b-list-top': {
  paddingTop: 0,
  borderBottomWidth: pm(0),
  borderBottomColor: "#F0F0F0",
  marginTop: pm(25),
},
'b-grad': {
  width: pm(1),
  height: pm(9),
  backgroundColor: "#D8D8D8",
},
'b-grad-high': {
  width: pm(1),
  height: pm(17),
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
'b-label-top': {
  top: pm(-20),
},
'b-text': {
  fontSize: pm(21),
  lineHeight: pm(26),
  color: "#D8D8D8",
  textAlign: "center",
},
'b-text-top': {
  fontSize: pm(10),
  lineHeight: pm(12),
  color: "#aaaaaa",
},
'b-scrollview': {
  flexDirection: "row",
  width: pm(320),
  position: "absolute",
  zIndex: 2,
  flexGrow: 0,
},
'b-image': {
  position: "absolute",
  left: pm(154),
  top: pm(4),
  width: pm(12),
  height: pm(29),
},
'b-image-top': {
  top: pm(26),
},
'b-image-bottom': {
  transform: [{rotate: "180deg"}],
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
      range: [],
    }
  },
  watch: {
    endValue() {
      this.initRule()
    }
  },
  mounted() {
    this.initRule()
  },
  methods: {
    initRule() {
      let range = [],
          startValue = this.data.startValue,
          endValue = this.data.endValue,
          totalCount = endValue - startValue;
      if (totalCount < 0) return;
      for (let index = 0; index <= totalCount; index++) {
        range.push({
          index: index,
          is_label: (index) % this.data.labelInterval === 0
        })
      }
      console.log('range', range)
      // x
      const marginRight = this.data.marginRight +1 
      const unit = parseFloat(dw.getPlatformPx(marginRight))
      const converts = this.data.converts
      let x = (this.data.readValue * converts - startValue) * unit
      console.log("x", x)
      this.setData({
        range,
        x
      })
    },
    scrollHandler(offsetX){
      console.log('offsetX',offsetX)
      this.setData({
        x: offsetX
      })
    },
    onMomentumScrollEnd(e) {
      // 偏移量
      let offset = e.detail.scrollLeft
      // console.log('offset', offset)
      if (tick) {
        clearTimeout(tick)
      }
      const interval = 100
      tick = setTimeout(() => {
        // console.log('停止拖动')
        // 每隔宽度pm(15)
        const marginRight = this.data.marginRight + 1
        const unit = parseFloat(dw.getPlatformPx(marginRight))
        // 滑动的格数
        const value = Math.round(offset / unit)
        // 修正偏移
        const fixOffset = (value * unit)
        this.scrollHandler(fixOffset)
        // 计算提交的数值
        const converts = this.data.converts
        const startValue = this.data.startValue
        const emitValue = Math.min((value + startValue) / converts, this.data.endValue)
        console.log("emitValue",emitValue)
        this.triggerEvent('scrollEnd', emitValue)
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
  const { isDateValue, eventData, eventData2, cursorImage, converts, direction, labelInterval, marginRight, padding, readValue, startValue, endValue, __0 } = _props
  const { x, range, item, __1 } = _instance.data
  const { onMomentumScrollEnd, __2 } = _instance
  return _xc.h(_xc.XbenchcView, {'style': _xc.s("b-box")}, _xc.h(_xc.XbenchcImage, {'src': dwtools.qiniu(cursorImage),'style': _xc.s('b-image' + (direction === 'bottom' ? ' b-image-bottom' : ' b-image-top'))}), _xc.h(_xc.XbenchcScrollView, {'scrollX': true,'scrollLeft': x,'showScrollbar': false,'onScroll': onMomentumScrollEnd,'style': _xc.s("b-scrollview")}, _xc.h(_xc.XbenchcView, {'className': 'b-list' + (direction === 'bottom' ? '' : ' b-list-top'),'style': _xc.s('b-list' + (direction === 'bottom' ? '' : ' b-list-top')).concat({paddingLeft: dwtools.pm(padding), paddingRight: dwtools.pm(padding-marginRight)})}, (range).map((item, index) => _xc.h(_xc.ViewForItem, {key: item["index"], bagForItem: item, bagForIndex: index}, _xc.h(_xc.XbenchcView, {'className': "b-item",'style': _xc.s("b-item").concat({marginRight: dwtools.pm(marginRight)})}, ((item.is_label || item.index === range.length-1) && (_xc.h(_xc.XbenchcView, {'style': _xc.s("b-label-container")}, _xc.h(_xc.XbenchcView, {'style': _xc.s("b-grad-b-active")}), _xc.h(_xc.XbenchcView, {'style': _xc.s('b-label' + (direction === 'bottom' ? '' : ' b-label-top'))}, _xc.h(_xc.XbenchcText, {'style': _xc.s('b-text' + (direction === 'bottom' ? '' : ' b-text-top'))}, isDateValue ? ((item.index + startValue)/converts).toString().padStart(2,0) : (item.index + startValue)/converts))))), ((!item.is_label) && (_xc.h(_xc.XbenchcView, {'style': _xc.s((item.index % 5 === 0 ? 'b-grad-high' : 'b-grad'))})))))))))
}

export default function Xbenchc170329(props) {
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
