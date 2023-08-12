import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
//import { GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import { setModels } from "./setmodel.js";

async function loaderModels(){
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath( 'src/assets/models/mincity/gltf/' );

  const loader = new GLTFLoader();
	loader.setDRACOLoader( dracoLoader );

  const mincity = await Promise.all([
    loader.loadAsync('src/assets/models/mincity/LittlestTokyo.glb')
  ]);

  //console.table('Squaaawk!', mincity);
  const model = setModels(mincity);

  model.position.set( 1, 1, 0 );
	model.scale.set( 0.01, 0.01, 0.01 );

  return model;
}

export { loaderModels }