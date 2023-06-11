import { DirectionalLight, PointLight } from "three";


//创建灯光
function createLights(){

  //创建直接阳光
  //const directLight = new DirectionalLight('white', 10);
  const pointLightRight = new PointLight('white',350,0);
  const pointLightLeft = new PointLight('white',350,0);

  pointLightRight.position.set(5,4,5);   // 光从(10,10,10)照向(0,0,0)
  pointLightLeft.position.set(-5,-4,-3);

  return [pointLightRight,pointLightLeft];
}

export { createLights };