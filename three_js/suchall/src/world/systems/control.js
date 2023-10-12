import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

  /**
   *@Author：hayAloe
  *@Date: 2023-09-08 12:09:29
  *@Description: 创建鼠标控制器
  **/
function createControl(camera, canvas){
  let controls = new OrbitControls(camera, canvas);
  //controls.enableDamping = true;

  controls.minDistance = 2;
	controls.maxDistance = 10;
	controls.target.set( 0, 0, - 0.2 );

  //controls.enablePan = false;
  //controls.target.set(0,0.5,0);
  //controls.listenToKeyEvents(window);
  

  controls.ticks = () => controls.update();

  return controls;
}

export { createControl };