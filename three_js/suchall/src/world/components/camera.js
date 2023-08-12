import { PerspectiveCamera } from "three";

function createCamera(){
  let camera = new PerspectiveCamera(45, 1, 0.25, 20);
  camera.position.set(-1.6, 0.8, 2.7);

  return camera;
}

export { createCamera };