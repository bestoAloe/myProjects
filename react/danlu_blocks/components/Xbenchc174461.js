import React from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native'
import Svg, { Path, Circle } from 'react-native-svg'
import dwtools from '../../utils/dwtools'
import { Image } from 'expo-image'
import { Shadow } from 'react-native-shadow-2'

const baseWidth = Dimensions.get('window').width
const pm = (number) => (number ? (parseFloat(number) / 320) * baseWidth : 0)

const Clock = ({ startTime, endTime, diameter, strokeWidth }) => {
  diameter = pm(diameter)
  strokeWidth = pm(strokeWidth)

  const iconSize = pm(20) // 图标的大小
  const iconColor = '#637AFF' // 图标的颜色

  const startIconPath = 'M5.5 8.5l9-5.5v11z' // 起始时间图标的Path
  const endIconPath = 'M19.5 8.5l-9-5.5v11z' // 结束时间图标的Path

  const start = new Date(`2023-01-01T${startTime}:00`)
  const end = endTime < startTime ? new Date(`2023-01-02T${endTime}:00`) : new Date(`2023-01-01T${endTime}:00`)

  const totalSeconds = (end - start) / 1000
  const elapsedSeconds = ((new Date() - start) / 1000) % totalSeconds
  const progress = elapsedSeconds / totalSeconds

  const radius = diameter / 2

  const viewBox = `0 0 ${diameter + 2 * strokeWidth} ${diameter + 2 * strokeWidth}`

  const cx = radius + strokeWidth
  const cy = radius + strokeWidth

  const startX = cx + radius * Math.sin(((start.getHours() + start.getMinutes() / 60) * Math.PI) / 12)
  const startY = cy - radius * Math.cos(((start.getHours() + start.getMinutes() / 60) * Math.PI) / 12)

  const endX = cx + radius * Math.sin(((end.getHours() + end.getMinutes() / 60) * Math.PI) / 12)
  const endY = cy - radius * Math.cos(((end.getHours() + end.getMinutes() / 60) * Math.PI) / 12)

  const styles = StyleSheet.create({
    ctn: {
      width: diameter + 2 * strokeWidth + 10,
      height: diameter + 2 * strokeWidth + 10,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#DEEAF5',
      borderRadius: 1000,
      position: 'relative',
    },
    shadow: {
      width: pm(190),
      height: pm(190),
      borderRadius: 1000,
      left: '50%',
      top: '50%',
      marginLeft: - pm(95),
      marginTop: - pm(95),
      position: 'absolute',
    },
    img: {
      width: pm(190),
      height: pm(190),
      borderRadius: 1000,
    },
    svg: {
      position: 'absolute',
      left: '50%',
      marginLeft: -0.5 * (diameter + 2 * strokeWidth),
      top: '50%',
      marginTop: -0.5 * (diameter + 2 * strokeWidth),
    },
    startSvg: {
      position: 'absolute',
      left: startX - iconSize / 2 + pm(2),
      top: startY - iconSize / 2 + pm(2),
      width: pm(23),
      height: pm(23),
    },
    endSvg: {
      position: 'absolute',
      left: endX - iconSize / 2 + pm(2),
      top: endY - iconSize / 2 + pm(2),
      width: pm(23),
      height: pm(23),
    },
    content: {
      borderRadius: 1000,
      position:'absolute',
      width: pm(190),
      height: pm(190),
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 999,
    }
  })

  /*
  A rx,ry x-axis-rotation large-arc-flag,sweep-flag x,y
  其中 rx 和 ry 是椭圆的半长轴和半短轴长度，x-axis-rotation 是椭圆相对于 x 轴的旋转角度，large-arc-flag 和 sweep-flag 控制弧线的旋转方向和大小。
  具体来说，large-arc-flag 表示椭圆弧线的大小，有两个可选值 0 和 1。当它为 0 时，表示椭圆弧线长度小于 180 度；当它为 1 时，表示椭圆弧线长度大于 180 度。
  sweep-flag 表示弧线的旋转方向，有两个可选值 0 和 1。当它为 0 时，表示从起点到终点按逆时针方向绘制；当它为 1 时，表示从起点到终点按顺时针方向绘制。
  在这个组件的代码中，0 1 1 表示绘制从起点到终点的椭圆弧线长度大于 180 度，并按顺时针方向绘制。
  */

  const large_arc_flag = totalSeconds > 60 * 60 * 12 ? 1 : 0

  const pathData = `M ${startX},${startY} A ${radius},${radius} 0 ${large_arc_flag} 1 ${endX},${endY}`

  const ctx_map = {
    fop: 'e,1000,1000',
    src: 'u/dev064/2023/06/25/vALesZHsSirfANpDgfv7Cb/xxx.png',
  }
  const ctx_map2 = {
    fop: 'e,100,100',
    src: 'u/dev064/2023/06/25/ESxR82QGcDmTNpmfSAHZKQ/编组10004x.png',
  }
  const ctx_map3 = {
    fop: 'e,100,100',
    src: 'u/dev064/2023/06/25/MPMNb48MMJyPvpC9BZDp4i/编组9994x.png',
  }

  return (
    <View className="ctn" style={styles.ctn}>
      <Image style={{
        width: pm(253),
        height: pm(253),
      }} source={dwtools.qiniu("u/dev064/2023/06/25/8PjLZjdtvxBn6mUuVwMjEi/形状结合4x.png", 'e,800,800')} />
      <View style={styles.content}>
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          <Text style={{fontSize: pm(50), fontWeight: 500}}>{Math.floor(totalSeconds / 3600)}</Text>
          <Text style={{fontSize: pm(26), fontWeight: 500, marginBottom: pm(7)}}>{"hr"}</Text>
        </View>
        <Text  style={{fontSize: pm(15), color: '#666666', marginTop: -pm(8)}}>{`${Math.floor(totalSeconds % 3600 / 60)}min`}</Text>
      </View>
      <Shadow containerStyle={styles.shadow} offset={[6, 6]} distance={6} startColor={'#00000010'}>
        <Image style={styles.img} source={dwtools.qiniu(ctx_map.src, ctx_map.fop)} />
      </Shadow>
      <Svg
        style={styles.svg}
        height={diameter + 2 * strokeWidth}
        width={diameter + 2 * strokeWidth}
        viewBox={viewBox}
        preserveAspectRatio="xMidYMid meet"
      >
        <Path d={pathData} fill="transparent" stroke="#637AFF" strokeWidth={strokeWidth} />
      </Svg>
      <Image style={styles.startSvg} source={dwtools.qiniu(ctx_map2.src, ctx_map2.fop)} />
      <Image style={styles.endSvg} source={dwtools.qiniu(ctx_map3.src, ctx_map3.fop)} />
    </View>
  )
}

export default Clock
