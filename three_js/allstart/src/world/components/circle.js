import { Group, SphereBufferGeometry, Mesh, MeshStandardMaterial } from "three";


function createCircle(){
  const radius = 0.05; 
  const widthSegents = 30;   //宽度细节
  const heightSegments = 30;   //高度细节

  const geometry = new SphereBufferGeometry(radius, widthSegents, heightSegments);
  const material = new MeshStandardMaterial({color:'indigo'});
  const group = new Group();

  const sphere = new Mesh(geometry, material);
  sphere.position.z = 0.3;
  group.add(sphere);
  
  //克隆球体，并加入到同一组
  for(let i=0; i<1; i+=0.01){
    const sphereClone = sphere.clone();
    //根据圆的切线方程形成一个半径为1的圆圈
    sphereClone.position.x = Math.cos(8 * Math.PI * i) * i * 3;
    sphereClone.position.y = Math.sin(8 * Math.PI * i) * i * 3;
    sphereClone.position.z = i * 2;
    sphereClone.scale.multiplyScalar(0.1 + i);

    group.add(sphereClone);
  }
  
  //每帧顺时针旋转45度
  group.ticks = (delta) => {
    group.rotation.z -= delta * (Math.PI / 6);
    group.position.z -= delta * 2;
  };

  group.scale.multiplyScalar(1.5);

  return group;
}

export {createCircle};