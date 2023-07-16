import { createCamera } from './components/camera.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';
import { createRenderer } from './systems/renderer.js';
import { createControls } from './systems/controls.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/loop.js';

//import { createCircle } from './components/circle.js';
//import { Train, Road } from './projects/train/train.js';
//import { createCube } from './components/cube.js';
import { loaderBirds } from './projects/birds/birds.js';

let allmodel;

class World{
  //封装私有属性
  #camera;
  #renderer;
  #scene;
  #loop;
  #controls;

  //初始化
  constructor(container){

    this.#camera = createCamera();
    this.#scene = createScene();
    this.#renderer = createRenderer();
    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer)
    //通过插件完成对相机的控制
    this.#controls = createControls(this.#camera, this.#renderer.domElement);  

    container.append(this.#renderer.domElement);
    //const cube = createCube();
    const { ambientLight, directLight} = createLights();

    //const circleGroup = createCircle();
    //controls.target.copy(cube.position);

    //按需渲染
    // controls.addEventListener('change', ()=>{
    //   this.render();
    // })

    //添加火车实例
    //const train = new Train();
    //const road = new Road();

    this.#loop.updatables.push(this.#controls);   //需要更新渲染的对象列表
    //this.#loop.updatables.push(circleGroup);
    //this.#loop.updatables.push(train);
    this.#scene.add(ambientLight, directLight);

    //创建resizer实例
    const resizer = new Resizer(container, this.#camera, this.#renderer);

  }

  //通过异步加载鸟类
  async init(){
    const { parrot, flamingo, stork } = await loaderBirds();
    allmodel = [parrot.position, flamingo.position, stork.position];
    this.#controls.target.copy(allmodel[0]);
    this.#loop.updatables.push(parrot, flamingo, stork);
    this.#scene.add(parrot, flamingo, stork);
  }

  //渲染
  render(){
    this.#renderer.render(this.#scene, this.#camera);
  }

  //开始动画循环
  start(){
    this.#loop.start();
  }

  //停止动画循环
  stop(){
    this.#loop.stop();
  }

  focuseNext(num){
    this.#controls.target.copy(allmodel[num]);
  }
}
export { World };