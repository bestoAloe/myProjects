import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";
import { createRender } from "./systems/render.js";
import { createLight } from "./components/light.js";
import { createControl } from "./systems/control.js";
import { Loop } from "./systems/loops.js";
import { Resize } from "./systems/resize.js";

//project_1：keyfarms_mincity
// import { PMREMGenerator } from "three";
// import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment";
// import { loaderModels } from "./components/projects/keyframes_mincity/mincity.js";

//project_2：load_gltf
import { loaderHelmet } from "./components/projects/loader_gltf/helmet.js";

class World{
  #camera;
  #scene;
  #renderer;
  #controls;
  #loop;

  constructor(container){
    this.#camera = createCamera();
    this.#scene = createScene();
    this.#renderer = createRender();
    this.#controls = createControl(this.#camera, this.#renderer.domElement);
    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);

    container.append(this.#renderer.domElement);

    let light = createLight();

    this.#controls.addEventListener('change', ()=>{
      this.render()
    });
    //this.#loop.looplist.push(this.#controls);

    //project_1：keyfarms_mincity
    // let pmremGenerator =  new PMREMGenerator(this.#renderer);
    // this.#scene.environment = pmremGenerator.fromScene( new RoomEnvironment( this.#renderer ), 0.04 ).texture;

    this.#scene.add(light);

    //调整窗口
    const resize = new Resize(container, this.#scene, this.#camera, this.#renderer);
  }

  async init(){

    //project_2：load_gltf
    const [rgbe, helmet] = await loaderHelmet();
    this.#scene.environment = rgbe;
    this.#scene.background = rgbe;

    //project_1：keyfarms_mincity
    //const mincity =  await loaderModels();
    //this.#loop.looplist.push(mincity);

    this.#scene.add(helmet.scene);
  }

  start(){
    this.#loop.start();
  }

  //渲染
  render(){
    this.#renderer.render(this.#scene, this.#camera);
  }

}

export { World };