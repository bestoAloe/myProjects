import { WebGLRenderer } from "three";

//创建渲染系统
function createRenderer(){
  const renderer = new WebGLRenderer( {antialias:true} );
  renderer.physicallyCorrectLights = true;
  return renderer;
}

export { createRenderer };