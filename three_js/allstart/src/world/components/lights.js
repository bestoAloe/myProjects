import { DirectionalLight, PointLight, AmbientLight, HemisphereLight } from "three";


//创建灯光
function createLights(){
  //创建环境照明
  //const ambientLight = new AmbientLight('white', 2);
  const ambientLight = new HemisphereLight('white', 'darkslategrey', 3);

  //创建直接阳光
  const directLight = new DirectionalLight('white', 8);
  directLight.position.set(10,8,10);
  // const pointLightRight = new PointLight('white',350,0);
  // const pointLightLeft = new PointLight('white',350,0);

  // pointLightRight.position.set(5,4,5);   // 光从(10,10,10)照向(0,0,0)
  // pointLightLeft.position.set(-5,-4,-3);

  return { ambientLight, directLight};
}

export { createLights };