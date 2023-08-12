import { GLTFLoader } from "three/examples/jsm/loaders/gltfloader.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { EquirectangularReflectionMapping } from "three";

async function loaderHelmet() {

  const rgbeloder = new RGBELoader();
  const helmet = new GLTFLoader();
  const [rgbe, model] = await Promise.all([
    rgbeloder.loadAsync('src/assets/textures/equirectangular/royal_esplanade_1k.hdr'),
    helmet.loadAsync('src/assets/models/helmet/DamagedHelmet.gltf')
  ])
  
  rgbe.mapping = EquirectangularReflectionMapping;
  
  return [rgbe, model];
}

export { loaderHelmet };