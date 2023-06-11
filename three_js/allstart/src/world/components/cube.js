import { BoxBufferGeometry, TextureLoader, Mesh, MeshStandardMaterial } from "three";

//创建纹理
function createMaterial(){
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load('/src/assets/textures/uv-test-bw.png')
  const spec = {
    map: texture
  }
  const material = new MeshStandardMaterial(spec);
  return material;
}

//创建立方体
function createCube(){
  const geometryCube = new BoxBufferGeometry(2,2,2);
  const material = createMaterial();
  const cube = new Mesh(geometryCube, material);

  cube.position.set(0,0,0);
  //旋转立方体
  cube.rotation.set(0,0,0);

  //每帧运行一次
  cube.ticks = (delta) => {

    cube.rotation.x += (Math.PI / 6) * delta;
    cube.rotation.z += (Math.PI / 6) * delta;
    cube.rotation.y += (Math.PI / 6) * delta;

  };

  return cube;
}

export { createCube };