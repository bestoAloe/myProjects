import { Mesh, Group } from "three";
import { createGeometries } from "./geometries.js";
import { createMaterials } from "./materials.js";

function createMeshes(){
  const geometries = createGeometries();
  const materials = createMaterials();

  //火车
  const cabin = new Mesh(geometries.cabin, materials.body);
  cabin.position.set(1.5, 1.4, 0);

  const chimney = new Mesh(geometries.chimney, materials.detail);
  chimney.position.set(-2, 1.9, 0);

  const nose = new Mesh(geometries.nose, materials.body);
  nose.position.set(-1, 1, 0);
  nose.rotation.z = Math.PI / 2;

  const smallWheelRear = new Mesh(geometries.wheel, materials.detail);
  smallWheelRear.position.y = 0.5;
  smallWheelRear.rotation.x = Math.PI / 2;

  const smallWheelCenter = smallWheelRear.clone();
  smallWheelCenter.position.x = -1;

  const smallWheelFront = smallWheelRear.clone();
  smallWheelFront.position.x = -2;

  const bigWheel = smallWheelRear.clone();
  bigWheel.position.set(1.5, 0.9, 0);
  bigWheel.scale.set(2, 1, 2);

  //轨道
  const orbitLeft = new Mesh(geometries.orbit, materials.road);
  orbitLeft.rotation.z = Math.PI / 2;
  orbitLeft.position.set(0, 0.1, -0.7);

  const orbitRight = orbitLeft.clone();
  orbitRight.position.z = 0.7;

  const sleeper = new Mesh(geometries.sleeper, materials.road);
  const sleeperGroup = new Group();
  for(let i=0; i<10; i++){
    let sleeperFont = sleeper.clone();
    sleeperFont.position.x += i;

    let sleeperEnd = sleeper.clone();
    sleeperEnd.position.x -= i;
    sleeperGroup.add(sleeperFont, sleeperEnd);
  }
  

  return { 
    nose, 
    cabin, 
    chimney, 
    smallWheelCenter, 
    smallWheelFront, 
    smallWheelRear, 
    bigWheel, 
    
    orbitLeft, 
    orbitRight,
    sleeperGroup
  };
}

export { createMeshes };