
import React from 'react'
import { Platform, StyleSheet, Dimensions } from 'react-native'
import { XbenchcDwProxy } from '../../xbench/xbenchc/XbenchcDwProxy'
import { useNavigation } from '@react-navigation/native'
import dwtools from '../../utils/dwtools'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import XbenchcImage from '../../xbench/xbenchc/components/XbenchcImage'
import XbenchcText from '../../xbench/xbenchc/components/XbenchcText'
import ViewForItem from '../../xbench/components/ViewForItem'

const windowWidth = Dimensions.get('window').width
const pm = (number) => number ? (parseFloat(number) / 320) * windowWidth : 0

const styles = StyleSheet.create({
'b-week-container': {
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-around",
  marginTop: pm(5),
  marginBottom: pm(5),
  marginLeft: pm(0),
  marginRight: pm(0),
  paddingTop: pm(5),
  paddingBottom: pm(5),
  paddingLeft: pm(0),
  paddingRight: pm(0),
  shadowOffset: {width: pm(0), height: pm(1)},
  shadowRadius: pm(1),
  shadowColor: "rgb(231, 230, 230)",
  shadowOpacity: 1,
},
'b-date-container': {
  width: "100%",
  flexDirection: "row",
  flexWrap: "wrap",
  position: "relative",
},
'b-month-foritem': {
  width: "14.28%",
  zIndex: 2,
},
'b-date-item': {
  zIndex: 2,
  textAlign: "center",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
},
'b-header': {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: pm(17),
  paddingRight: pm(17),
},
'b-pre-month': {
  width: pm(17),
},
'b-next-month': {
  width: pm(17),
}
})
const getStyle = (classNames) => (classNames || '').split(' ').filter(Boolean).map((className) => styles[className] || {})

const _xc = {
  h: React.createElement,
  f: React.Fragment,
  s: getStyle,
  XbenchcView,
  XbenchcImage,
  XbenchcText,
  ViewForItem
}

/** wxs-start */
const getDate = (...args) => new Date(...args)
const getRegExp = (...args) => new RegExp(...args)
const m271355 = ((getDate, getRegExp) => {
      const module = { exports: {} }
      
    const getFirstAndLastDayOfMonth = (isoDateString) => {
      const date = getDate(isoDateString);
      const year = date.getFullYear();
      const month = date.getMonth();

      // 获取当前月份的第一天
      const firstDay = getDate(year, month, 1);
      const firstDayString = firstDay.toISOString();

      // 获取下个月的第一天，然后减去一天，即为当前月份的最后一天
      const lastDay = getDate(year, month + 1, 1);
      const lastDayOfMonth = getDate(lastDay - 86400000); // 减去一天的毫秒数
      const lastDayString = lastDayOfMonth.toISOString();

      return {
        firstDay: firstDayString,
        lastDay: lastDayString,
      };
    };

    function getMonth (remarks, value) {
      // 计算maxDate与minDate
      var range = getFirstAndLastDayOfMonth(value)
      var minDate = range.firstDay
      var maxDate = range.lastDay
      var timestamp = getDate(minDate)
      var maxTimestamp = getDate(maxDate)
      var months = []
      var dates = []
      var remarks = remarks || []
      while(timestamp <= maxTimestamp){
        var object = {
          year: timestamp.getFullYear(),
          month: timestamp.getMonth() + 1,
          date: timestamp.getDate(),
          day: timestamp.getDay(),
          yy_ss: timestamp.getFullYear() + '/' + (timestamp.getMonth() + 1),
          timestamp: timestamp.getTime(),
          iso_str: getDate( + timestamp + 8 * 60 * 60 * 1000).toISOString().slice(0,10),
          active: true,
          text: [],
          high_light: false,
        }
        for(var i = 0;i<remarks.length;i++){
          if(remarks[i].date.slice(0,10) == object.iso_str.slice(0,10)){
            object.text = remarks[i].text
            object.high_light = remarks[i].high_light
            object.style = remarks[i].style
          }
        }
        months.push(object)
        timestamp = getDate( + timestamp + 1 * 24 * 60 * 60 * 1000)
      }
      var checklist = []
      var res = []
      dates = JSON.parse(JSON.stringify(months))
      for(var i=0; i<months.length; i++){
        if(checklist.indexOf(months[i].yy_ss) == -1){
          var object = months[i]
          object.dates = []
          checklist.push(months[i].yy_ss)
          res.push(object)
        }
      }
      // console.log('dates', dates)
      for(var i=0; i<dates.length; i++){
        for(var j=0; j<res.length; j++){
          if(res[j].yy_ss==dates[i].yy_ss){
            res[j].dates.push(dates[i])
          }
        }
      }
      for(var i=0; i<res.length; i++){
        var pre_arr = []
        if(res[i].dates[0].day != 0){
          for(var j=0;j<res[i].dates[0].day;j++){
            var temp_ts = getDate( + res[i].dates[0].timestamp - (j + 1) * 24 * 60 * 60 * 1000)
            pre_arr.unshift(
              {
                year: temp_ts.getFullYear(),
                month: temp_ts.getMonth() + 1,
                date: temp_ts.getDate(),
                day: temp_ts.getDay(),
                yy_ss: temp_ts.getFullYear() + '年' + (temp_ts.getMonth() + 1) + '月',
                timestamp: temp_ts.getTime(),
                iso_str: getDate( + temp_ts + 8 * 60 * 60 * 1000).toISOString().slice(0,10),
                active: false,
                text: [],
                high_light: false,
              }
            )
          }
          res[i].dates = pre_arr.concat(res[i].dates)
        }
      }
      return res[0]
    }

    function getWeeks(){
      return [
          {
              "id": 0,
              "content": "日"
          },
          {
              "id": 1,
              "content": "一"
          },
          {
              "id": 2,
              "content": "二"
          },
          {
              "id": 3,
              "content": "三"
          },
          {
              "id": 4,
              "content": "四"
          },
          {
              "id": 5,
              "content": "五"
          },
          {
              "id": 6,
              "content": "六"
          }
      ]
      
    }

    function isAble (date, remarks) {
      var res = []
      if(date.slice(0,10) == value.slice(0,10)){
        res.push('b-date--active')
      }
      var isRemark = false
      if(!remarkActive){
        return 'disable'
      }

      if(remarks && remarks.length){
        for(var i=0;i<remarks.length;i++){
          if(date.slice(0,10) == remarks[i].date.slice(0,10)){
            isRemark = true
            break
          }
        }
      }
      if(isRemark){
        return 'remark'
      }
      if(high_light){
        return 'high_light'
      }
    }

    module.exports = {
      getMonth: getMonth,
      getWeeks: getWeeks,
    }
  
      return module.exports
    })(getDate, getRegExp);
/** wxs-end */

const configFactory = ((dw) => { function getFirstAndLastDayOfMonth(isoDateString){
  const date = new Date(isoDateString);
  const year = date.getFullYear();
  const month = date.getMonth();

  // 获取当前月份的第一天
  const firstDay = new Date( + new Date(year, month, 1) + 8 * 60 * 60 * 1000);
  const firstDayString = firstDay.toISOString().slice(0, 23)

  // 获取下个月的第一天，然后减去一天，即为当前月份的最后一天
  const lastDay = new Date(year, month + 1, 1);
  const lastDayOfMonth = new Date(lastDay - 86400000 + 8 * 60 * 60 * 1000) // 减去一天的毫秒数
  const lastDayString = lastDayOfMonth.toISOString().slice(0, 23)

  return {
    firstDay: firstDayString,
    lastDay: lastDayString,
  };
}


return {
  type: 'xbenchc',
  data() {
    return {
      activeDate: null
    }
  },
  mounted(){
    this.setData({
      activeDate: this.data.value.slice(0, 10)
    })
    const date_range = getFirstAndLastDayOfMonth(this.data.activeDate)
    this.triggerEvent("panelChange", date_range)
  },
  methods: {
    changeActiveDate(e){
      type = e.target.dataset.type
      let date = new Date(this.data.activeDate);
      let year = date.getFullYear();
      let month = date.getMonth();

      if(type === "pre"){
        // 获取前一个月的年份和月份
        if(!this.data.allowPre){
          return
        }
        year = month === 0 ? year - 1 : year;
        month = month === 0 ? 11 : month - 1;
      }
      else if(type === 'next'){
        // 获取后一个月的年份和月份
        if(!this.data.allowNext){
          return
        }
        year = month === 11 ? year + 1 : year;
        month = month === 11 ? 0 : month + 1;
      }
      // 获取前一个月的第一天日期
      const dateRes = new Date( + new Date(year, month, 1) + 8 * 60 * 60 * 1000)
      const isoRes = dateRes.toISOString().slice(0, 10);
      this.setData({
        activeDate: isoRes
      })
      const date_range = getFirstAndLastDayOfMonth(this.data.activeDate)
      this.triggerEvent("panelChange", date_range)

    },
    handleClick(e){
      this.triggerEvent('onClick', e.currentTarget.dataset.date)
    },
  }
}
 });
const dw = new XbenchcDwProxy({}, { _xc })
const config = configFactory(dw)
const watchKeys = Object.keys(config.watch || {})
const render = (_props, _instance, _xc, children) => {
  const { showBg, allowPre, allowNext, maxDate, minDate, value, remarks, textStyle, remarkTextStyle, bgTextStyle, headerMonthStyle, headerWeekStyle, containerStyle, disableTextStyle, cellHeight, __0 } = _props
  const { activeDate, week, date, item, __1 } = _instance.data
  const { changeActiveDate, handleClick, __2 } = _instance
  return _xc.h(_xc.XbenchcView, {'className': "b-van-calendar",'style': _xc.s("b-van-calendar").concat({...(containerStyle)})}, undefined, _xc.h(_xc.XbenchcView, {'style': _xc.s("b-cell-container")}, _xc.h(_xc.XbenchcView, null, _xc.h(_xc.XbenchcView, {'style': _xc.s("b-header")}, _xc.h(_xc.XbenchcView, {'onClick': changeActiveDate,'dataset': {'type': "pre"},'style': _xc.s("b-pre-month")}, ((allowPre) && (_xc.h(_xc.XbenchcImage, {'style': {width: dwtools.pm(17), height: dwtools.pm(17)},'src': "https://s2.d2scdn.com/u/dev064/2023/12/13/hAYVFeM6ieGskf2h4iyWqe/后退.png"}))), ((!allowPre) && (_xc.h(_xc.XbenchcImage, {'style': {width: dwtools.pm(17), height: dwtools.pm(17)},'src': "https://s2.d2scdn.com/u/dev064/2023/12/13/Jr8kYv2f78HhaAawVftNrc/后退浅色.png"})))), _xc.h(_xc.XbenchcText, {'style': {...(headerMonthStyle)}},  m271355.getMonth(remarks, activeDate).yy_ss ), _xc.h(_xc.XbenchcView, {'onClick': changeActiveDate,'dataset': {'type': "next"},'style': _xc.s("b-next-month")}, ((allowNext) && (_xc.h(_xc.XbenchcImage, {'style': {width: dwtools.pm(17), height: dwtools.pm(17)},'src': "https://s2.d2scdn.com/u/dev064/2023/12/13/XapuRnqwRoTgLuhaSevgKa/前进.png"}))), ((!allowNext) && (_xc.h(_xc.XbenchcImage, {'style': {width: dwtools.pm(17), height: dwtools.pm(17)},'src': "https://s2.d2scdn.com/u/dev064/2023/12/13/DwcknK23SnoRJYg7Qe9f5Q/前进浅色.png"}))))), _xc.h(_xc.XbenchcView, {'style': _xc.s("b-week-container")}, (m271355.getWeeks()).map((week, index) => _xc.h(_xc.ViewForItem, {key: week["id"], bagForItem: week, bagForIndex: index}, _xc.h(_xc.XbenchcText, {'className': "b-week-item",'style': _xc.s("b-week-item").concat({...(headerWeekStyle)})},  week.content )))), _xc.h(_xc.XbenchcView, {'style': _xc.s("b-date-container")}, (m271355.getMonth(remarks, activeDate).dates).map((date, index) => _xc.h(_xc.ViewForItem, {key: date["timestamp"], bagForItem: date, bagForIndex: index}, _xc.h(_xc.XbenchcView, {'style': _xc.s("b-month-foritem")}, _xc.h(_xc.XbenchcView, {'className': "b-date-item",'style': _xc.s("b-date-item").concat({height: cellHeight}),'onClick': handleClick,'dataset': {'date': date}}, _xc.h(_xc.XbenchcText, {'className': "b-date",'style': _xc.s("b-date").concat({...(date.active ? (date.high_light ? date.style : textStyle) : disableTextStyle)})},  date.date ), ((date.text) && ((date.text).map((item, index) => _xc.h(_xc.ViewForItem, {key: item["date.date"], bagForItem: item, bagForIndex: index}, _xc.h(_xc.XbenchcText, {'className': "b-remark",'style': _xc.s("b-remark").concat({...(remarkTextStyle)})},  item ))))))))), ((showBg) && (_xc.h(_xc.XbenchcText, {'style': {...(bgTextStyle)}},  m271355.getMonth(remarks, activeDate).month )))))))
}

export default function Xbenchc274506(props) {
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
