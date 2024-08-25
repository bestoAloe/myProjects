
import React from 'react'
import { Platform, StyleSheet, Dimensions } from 'react-native'
import { XbenchcDwProxy } from '../../xbench/xbenchc/XbenchcDwProxy'
import { useNavigation } from '@react-navigation/native'
import dwtools from '../../utils/dwtools'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcText from '../../xbench/xbenchc/components/XbenchcText'
import ViewForItem from '../../xbench/components/ViewForItem'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcUpload from '../../xbench/xbenchc/components/XbenchcUpload'

const windowWidth = Dimensions.get('window').width
const pm = (number) => number ? (parseFloat(number) / 320) * windowWidth : 0

const styles = StyleSheet.create({
'b-input': {
  borderWidth: pm(0),
  borderColor: "transparent",
},
'b-image': {
  width: pm(18),
  height: pm(18),
  marginRight: pm(5),
  borderWidth: pm(1),
  borderColor: "#eee",
},
'b-upload-wrap': {
  height: pm(24),
}
})
const getStyle = (classNames) => (classNames || '').split(' ').filter(Boolean).map((className) => styles[className] || {})

const _xc = {
  h: React.createElement,
  f: React.Fragment,
  s: getStyle,
  XbenchcView,
  XbenchcText,
  ViewForItem,
  XbenchcImage,
  XbenchcUpload
}

/** wxs-start */
const getDate = (...args) => new Date(...args)
const getRegExp = (...args) => new RegExp(...args)

/** wxs-end */

const configFactory = ((dw) => { return {
  type: 'xbenchc',
  data () {
    return {
      accept: {
        web: 'image/*',
        dwapp: 'image',
        rnapp: 'ImagePicker:Images'
      }[dw.platform]
    }
  },
  methods: {
    handleResponse(event) {
      const response = event.detail
      const newValue = [...(this.data.value || []), {
        type: 'image',
        value: response.key,
        name: response.name || response.key.split('/').pop() || '',
        url: '',
        data: response,
      }]
      if (newValue.length >= 6) {
        dw.alert('最多上传 6 张图片')
        return
      }
      this.triggerEvent('input', newValue, this.data)
    },
    handleDelete(event) {
      const item = event.currentTarget.dataset.item
      const newValue = (this.data.value || []).filter(i => i.value !== item.value)
      this.triggerEvent('input', newValue, this.data)
    }
  },
}
 });
const dw = new XbenchcDwProxy({}, { _xc })
const config = configFactory(dw)
const watchKeys = Object.keys(config.watch || {})
const render = (_props, _instance, _xc, children) => {
  const { label, value, eventData, eventData2, labelStyle, valueStyle, pickerStyle, placeholder, containerStyle, labelTextStyle, valueInputStyle, __0 } = _props
  const { item, accept, __1 } = _instance.data
  const { handleDelete, handleResponse, __2 } = _instance
  return _xc.h(_xc.XbenchcView, {'className': "b-container",'style': _xc.s("b-container").concat({...(containerStyle)})}, _xc.h(_xc.XbenchcView, {'className': "b-label",'style': _xc.s("b-label").concat({...(labelStyle)})}, _xc.h(_xc.XbenchcText, {'className': "b-label-text",'style': _xc.s("b-label-text").concat({...(labelTextStyle)})},  label )), _xc.h(_xc.XbenchcView, {'className': "b-value",'style': _xc.s("b-value").concat({...(valueStyle)})}, (value).map((item, index) => _xc.h(_xc.ViewForItem, {key: item["value"], bagForItem: item, bagForIndex: index}, _xc.h(_xc.XbenchcView, {'onLongPress': handleDelete,'dataset': {'item': item}}, _xc.h(_xc.XbenchcImage, {'src': dwtools.qiniu(item.value, 'e,100,100'),'style': _xc.s("b-image")})))), _xc.h(_xc.XbenchcView, {'style': _xc.s("b-upload-wrap")}, _xc.h(_xc.XbenchcUpload, {'value': value,'accept': accept,'onResponse': handleResponse}, _xc.h(_xc.XbenchcView, {'style': {...(pickerStyle)}}, _xc.h(_xc.XbenchcText, {'style': {...(valueInputStyle)}},  placeholder ))))))
}

export default function Xbenchc184002(props) {
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
