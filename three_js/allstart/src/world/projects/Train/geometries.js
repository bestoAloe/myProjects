import { BoxBufferGeometry, CylinderBufferGeometry } from 'three';

function createGeometries(){
  //火车部件
  const cabin = new BoxBufferGeometry(2, 2.25, 1.5);
  const nose = new CylinderBufferGeometry(0.75, 0.75, 3, 12);
  const wheel = new CylinderBufferGeometry(0.4, 0.4, 1.75, 16);
  const chimney = new CylinderBufferGeometry(0.3, 0.1, 0.5);

  //轨道
  const orbit = new BoxBufferGeometry(0.15, 20, 0.1);
  const sleeper = new BoxBufferGeometry(0.1, 0.1, 2.2);

  return {cabin, nose, wheel, chimney, orbit, sleeper};
}

export { createGeometries }