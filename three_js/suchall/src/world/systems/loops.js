import { Clock } from "three";

let clock = new Clock();

class Loop{
  constructor(camera, scene, renderer){
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.looplist = [];
  }

  start(){
    this.renderer.setAnimationLoop(()=>{
      this.tick();
      this.renderer.render(this.scene, this.camera);
    })
  }

  stop(){
    this.renderer.setAnimationLoop(null);
  }

  tick(){
    const delta = clock.getDelta();
    //console.table(this.looplist);
    for( const objs of this.looplist){
      objs.ticks(delta);
    }
  }
}

export { Loop };