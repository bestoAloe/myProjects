import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { setupModel } from './setupModel.js';

async function loaderBirds(){
  const loader = new GLTFLoader();
  const [parrotData, flamingoData, storkData] = await Promise.all([
    loader.loadAsync('src/assets/models/bird/Parrot.glb'),
    loader.loadAsync('src/assets/models/bird/Flamingo.glb'),
    loader.loadAsync('src/assets/models/bird/Stork.glb'),
  ]);

  console.table('Squaaawk!', parrotData);

  const parrot = setupModel(parrotData);
  const flamingo = setupModel(flamingoData);
  const stork = setupModel(storkData);

  stork.position.set(3,0,-7);
  flamingo.position.set(-3,0,-7);


  return { 
    parrot,
    flamingo,
    stork
  };
}

export { loaderBirds };