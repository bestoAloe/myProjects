//当窗口大小改变时调用
const setSize = (container, camera, renderer) => {
  //相机纵横比
  camera.aspect = container.clientWidth / container.clientHeight;
  
  //更新相机平截头体：投影矩阵
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
};


class Resizer {
  constructor(container, camera, renderer){
    setSize(container, camera, renderer);
    window.addEventListener('resize', ()=>{
      setSize(container, camera, renderer);
      this.onResize();  //渲染更新
    })
  }

  onResize(){}

}

export { Resizer };