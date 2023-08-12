import { WebGLRenderer, ACESFilmicToneMapping } from "three";

function createRender(){
  let renderer = new WebGLRenderer( {antialias:true} );
  //renderer.physicallyCurrentLights = true;

  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;

  //renderer.useLegacyLights = false;
  
  return renderer;
}

export { createRender };