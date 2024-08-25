import { useState, useEffect } from 'react'
import { Text, View, StyleSheet, StatusBar, useWindowDimensions } from 'react-native'
import { SvgXml } from 'react-native-svg'

import * as BarCodeScanner from 'expo-barcode-scanner'
import { Camera } from 'expo-camera'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
import { pm } from '../../utils/dwtools'

const BarcodeSceen = ({ xml, width, height, onChange, goBack, clickButton, buttonText }) => {
  const { cameraStyle } = useFullScreenCameraStyle();
  const window = useWindowDimensions()
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  const [flashMode, setFlashMode] = useState(false)

  // 获取摄像头权限
  const getCameraPermission = async () => {
    const permission = await Camera.requestCameraPermissionsAsync()
    setHasPermission(permission.status === "granted")
  }

  useEffect(() => {
    getCameraPermission();
  }, [])

  const handleBarCodeScanned = async (event) => {
    // 在扫描区域内，处理二维码数据
    console.log(`扫码成功, 参数为:${JSON.stringify(event)}`)
    setScanned(true)
    onChange && onChange(event.data)
  }

  if (hasPermission === null) {
    return <View />
  }

  if (hasPermission === false) {
    dw.showModal({
      title: '提示',
      content: '请授权允许使用相机权限, 以支持扫码功能',
      confirmText: '确定',
      confirmColor: '#576b95',
      showCancel: false,
      cancelText: '取消',
      cancelColor: '#000000',
    })
    return <View />
  }

  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <Camera
          flashMode={flashMode ? 'torch' : 'off'}
          barCodeScannerSettings={{
            barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
          }}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} 
          style={[StyleSheet.absoluteFillObject, cameraStyle]} />
        <View style={styles.mask}>
          <XbenchcView style={styles.maskBack} onClick={() => {goBack && goBack()}}>
            <SvgXml xml={xml || null} width={width} height={height}></SvgXml>
          </XbenchcView>
          {buttonText.length > 0 && (<XbenchcView
            onClick={() => {clickButton && clickButton()}}
            style={[styles.maskHint, { top: window.height / 2 + 120 }]}>
            <View style={styles.maskButton}>
              <Text style={{ color: 'white', fontSize: pm(13), fontWeight: 500 }}>{buttonText}</Text>
            </View>
          </XbenchcView>)}
          <XbenchcView 
            onClick={() => {setFlashMode(!flashMode)}}
            style={[styles.maskLightSw, {left: window.width / 2 - 24, backgroundColor: flashMode ? 'white' : 'rgba(0,0,0,0.2)'}]}>
            <SvgXml 
              width={20}
              height={20}
              xml={flashMode && 
                `<svg t="1687326794053" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2880" width="200" height="200"><path d="M651.353043 550.479503H378.752795L240.862609 364.315031c-3.688944-4.897391-5.660621-10.876025-5.660621-17.045466v-60.040745c0-15.773416 12.847702-28.621118 28.621118-28.621118h502.459627c15.773416 0 28.621118 12.847702 28.621118 28.621118v59.977143c0 6.105839-1.971677 12.084472-5.660621 17.045466l-137.890187 186.228074zM378.752795 598.308571v398.024348c0 15.328199 12.402484 27.667081 27.667081 27.667081h217.266087c15.328199 0 27.667081-12.402484 27.66708-27.667081V598.308571H378.752795z m136.300124 176.942112c-14.564969 0-26.331429-11.76646-26.331428-26.331428v-81.283975c0-14.564969 11.76646-26.331429 26.331428-26.331429 14.564969 0 26.331429 11.76646 26.331429 26.331429v81.283975c0 14.564969-11.76646 26.331429-26.331429 26.331428zM512 222.608696c-17.554286 0-31.801242-14.246957-31.801242-31.801243V31.801242c0-17.554286 14.246957-31.801242 31.801242-31.801242s31.801242 14.246957 31.801242 31.801242v159.006211c0 17.554286-14.246957 31.801242-31.801242 31.801243zM280.932174 205.881242c-9.47677 0-18.889938-4.197764-25.122981-12.275279L158.242981 67.991056a31.864845 31.864845 0 0 1 5.597019-44.648944 31.864845 31.864845 0 0 1 44.648944 5.597018l97.502609 125.551305a31.864845 31.864845 0 0 1-5.597019 44.648944c-5.787826 4.579379-12.656894 6.741863-19.46236 6.741863zM723.987081 205.881242c-6.805466 0-13.674534-2.162484-19.462361-6.678261a31.794882 31.794882 0 0 1-5.597018-44.648944l97.566211-125.551304a31.794882 31.794882 0 0 1 44.648944-5.597019 31.794882 31.794882 0 0 1 5.597019 44.648944l-97.566211 125.551305c-6.360248 8.077516-15.709814 12.27528-25.186584 12.275279z" fill="#8a8a8a" p-id="2881"></path></svg>` ||
                `<svg t="1687327058547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3131" width="200" height="200"><path d="M665.024 547.52H390.72L251.968 360.192c-3.712-4.928-5.696-10.944-5.696-17.152v-60.416c0-15.872 12.928-28.8 28.8-28.8h505.6c15.872 0 28.8 12.928 28.8 28.8v60.352c0 6.144-1.984 12.16-5.696 17.152l-138.752 187.392zM390.72 595.648v400.512c0 15.424 12.48 27.84 27.84 27.84h218.624c15.424 0 27.84-12.48 27.84-27.84V595.648H390.72z m137.152 178.048c-14.656 0-26.496-11.84-26.496-26.496v-81.792c0-14.656 11.84-26.496 26.496-26.496 14.656 0 26.496 11.84 26.496 26.496v81.792c0 14.656-11.84 26.496-26.496 26.496z" fill="#ffffff" p-id="3132"></path></svg>`}></SvgXml>
          </XbenchcView>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mask: {
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  maskBorder: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    position: 'absolute',
  },
  maskHint: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  maskButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: pm(15),
    paddingVertical: pm(10),
    borderRadius: pm(1000),
  },
  maskBack: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  maskLightSw: {
    position: 'absolute',
    bottom: 100,
    padding: 12,
    borderRadius: 1000,
  }
})

// fix: 相机画面拉伸问题

function useFullScreenCameraStyle(ratio = 3/4) {
  const window = useWindowDimensions();
  const isPortrait = window.height >= window.width;
  let cameraStyle;

  if (isPortrait) {
    const widthByRatio = window.height * ratio;
    const widthOffsetByRatio = -((widthByRatio - window.width) / 2);
    cameraStyle = { left: widthOffsetByRatio, right: widthOffsetByRatio };
  } else {
    const heightByRatio = window.width * ratio;
    const heightOffsetByRatio = -((heightByRatio - window.height) / 2);
    cameraStyle = { top: heightOffsetByRatio, bottom: heightOffsetByRatio };
  }

  return { cameraStyle };
}

export default BarcodeSceen
