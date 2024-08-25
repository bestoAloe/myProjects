
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
const m179992 = ((getDate, getRegExp) => {
      const module = { exports: {} }
      
		var getSecond  = function(second, second_before_text, second_after_text) {
      var before = second_before_text
      var after = second_after_text
      return before + second + after
    }
  	var getTotal  = function(second,total_before, hour_after, minute_after, second_after,showHour,showMinute,showSecond) {
      var hour = second / 3600 <= 0 ? '00' : (Math.floor(second / 3600) < 10 ? '0' + Math.floor(second / 3600) : Math.floor(second / 3600))
      var minute = (second / 60 % 60) <= 0 ? '00' : (Math.floor(second / 60 % 60) < 10 ? '0' + Math.floor(second / 60 % 60) : Math.floor(second / 60 % 60))
      var seconds = second % 60 <= 0 ? '00' : (Math.floor(second % 60) < 10 ? '0' + Math.floor(second % 60) : Math.floor(second % 60))
      var res = total_before
      if(showHour){
        res = res + hour + hour_after
      }
      if(showMinute){
        res = res + minute + minute_after
      }
      if(showSecond){
        res = res + seconds + second_after
      }
      return res
    }
    module.exports = {
      getSecond: getSecond,
      getTotal: getTotal
    }
	
      return module.exports
    })(getDate, getRegExp);
/** wxs-end */

const configFactory = ((dw) => { let intervalId
return {
  type: 'xbenchc',
  data() {
    return {
      last_second: 0,
      lock: true,
    }
  },
  watch: {
    value(newValue) {
      this.change()
    }
  },
  unmounted() {
    console.log('onHide | intervalId', intervalId)
    if (intervalId) {
      console.log('onHide')
      clearInterval(intervalId)
    }
  },
  methods: {
    load() {
      const value = this.value
      this.setData({
        last_second: this.data.value
      });
      console.log('load', value)
      if (intervalId) {
        clearInterval(intervalId)
      }
      intervalId = setInterval(() => {
        if (this.data.last_second > 0) {
          this.setData({
            last_second: this.data.last_second - 1
          });
          this.triggerEvent('tick', this.data.last_second)
        } else {
          this.triggerEvent('over')
          clearInterval(intervalId)
        }
      }, 1000);
      this.setData({
        lock: false,
      })
    },
    change(e) {
      clearInterval(intervalId)
      this.load(e)
    },
    handledetached(e) {
      console.log('handledetached | intervalId', intervalId)
      if (intervalId) {
        console.log('handledetached')
        clearInterval(intervalId)
      }
    }
  }
} });
const dw = new XbenchcDwProxy({}, { _xc })
const config = configFactory(dw)
const watchKeys = Object.keys(config.watch || {})
const render = (_props, _instance, _xc, children) => {
  const { showHour, showMinute, showSecond, total_before, hour_after, minute_after, second_after, second_before_text, second_after_text, style, type, value, __0 } = _props
  const { last_second, __1 } = _instance.data
  const { __2 } = _instance
  return _xc.h(_xc.XbenchcView, {'style': _xc.s("b-container")}, undefined, ((type=='second') && (_xc.h(_xc.XbenchcText, {'className': "b-count-down",'style': _xc.s("b-count-down").concat({...(style)})},  m179992.getSecond(last_second,second_before_text,second_after_text) ))), ((type=='all') && (_xc.h(_xc.XbenchcText, {'className': "b-count-down",'style': _xc.s("b-count-down").concat({...(style)})},  m179992.getTotal(last_second,total_before,hour_after,minute_after,second_after,showHour,showMinute,showSecond) ))))
}

export default function Xbenchc179992(props) {
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
