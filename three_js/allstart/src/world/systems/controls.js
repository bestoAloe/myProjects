
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function createControls(camera, canvas){
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;  //阻尼
  //controls.enablePan = false  //禁用平移

  controls.listenToKeyEvents(window);

  //旋转
  // controls.autoRotate = true;
  // controls.autoRotateSpeed = 5;
  // controls.minAzimuthAngle = 0; // default
  // controls.maxAzimuthAngle = Math.PI; // default
  controls.ticks = () => controls.update();

  return controls;
}

export { createControls };