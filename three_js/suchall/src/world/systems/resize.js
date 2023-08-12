//自动调整窗口大小
const setSize = (container, scene, camera, renderer) =>{
  camera.aspect = container.clientWidth / container.clientHeight;

  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.render(scene, camera);
};

class Resize{
  constructor(container, scene, camera, renderer){
    setSize(container, scene, camera, renderer);
    window.addEventListener('resize',()=>{
      setSize(container, scene, camera, renderer)
    })
  }

  //其他函数
}

export { Resize };