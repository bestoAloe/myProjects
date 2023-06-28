import { Group, MathUtils } from "three";
import { createMeshes } from "./meshes.js";

const wheelSpeed = MathUtils.degToRad(24);

//火车
class Train extends Group{
  constructor(){
    super();

    this.meshes = createMeshes();

    this.add(
      this.meshes.nose,
      this.meshes.chimney,
      this.meshes.cabin,
      this.meshes.smallWheelRear,
      this.meshes.smallWheelFront,
      this.meshes.smallWheelCenter,
      this.meshes.bigWheel
    );

  }

  ticks(delta) {
    this.meshes.bigWheel.rotation.y += wheelSpeed * delta;
    this.meshes.smallWheelCenter.rotation.y += wheelSpeed * delta;
    this.meshes.smallWheelFront.rotation.y += wheelSpeed * delta;
    this.meshes.smallWheelRear.rotation.y += wheelSpeed * delta;
  }
}

//轨道
class Road extends Group{
  constructor(){
    super();

    this.meshes = createMeshes();
    this.add( this.meshes.orbitRight, this.meshes.orbitLeft, this.meshes.sleeperGroup );
  }
}

export { Train, Road };