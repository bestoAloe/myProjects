import { PerspectiveCamera } from "three";

//创建透视相机
function createCamera(){
  const camera = new PerspectiveCamera(35,1,0.1,100);

  camera.position.set(0,0,10);

  return camera;
}

export { createCamera };