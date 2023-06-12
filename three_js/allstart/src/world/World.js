import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/loop.js';



class World{
  //封装私有属性
  #camera;
  #renderer;
  #scene;
  #loop;

  //初始化
  constructor(container){

    this.#camera = createCamera();
    this.#scene = createScene();
    this.#renderer = createRenderer();
    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer)

    container.append(this.#renderer.domElement);
    const cube = createCube();
    const { ambientLight, directLight} = createLights();

    const controls = createControls(this.#camera, this.#renderer.domElement);  //通过插件完成对相机的控制
    //controls.target.copy(cube.position);
    //按键控制
    controls.addEventListener('change', ()=>{
      this.render();
    })

    this.#loop.updatables.push(controls);   //需要更新渲染的对象列表
    this.#scene.add(cube, ambientLight, directLight);

    //创建resizer实例
    const resizer = new Resizer(container, this.#camera, this.#renderer);

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
}
export { World };