import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

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