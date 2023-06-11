import { Clock } from "three";

const clock = new Clock();   //每帧花费多长时间

class Loop{
  constructor(camera, scene, renderer){
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
  }

  start(){
    //循环渲染
    this.renderer.setAnimationLoop(() => {
      //每次渲染前移动一帧
      this.tick();
      this.renderer.render(this.scene, this.camera);
    });
  }

  stop(){
    this.renderer.setAnimationLoop(null);
  }

  tick(){
    const delta = clock.getDelta();
    
    for(const object of this.updatables){
      object.ticks(delta);
    }
  }
}

export { Loop };