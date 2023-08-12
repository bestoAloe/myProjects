import { DirectionalLight } from "three";

function createLight(){
  let light = new DirectionalLight('white', 1);
  light.position.set(10,10,2);

  return light;
}

export { createLight };