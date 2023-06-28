import { MeshStandardMaterial } from "three";

function createMaterials(){
  //火车
  const body = new MeshStandardMaterial({
    color: 'firebrick',
    flatShading: true
  });

  const detail = new MeshStandardMaterial({
    color: 'darkslategray',
    flatShading: true
  });

  //轨道
  const road = new MeshStandardMaterial({
    color: 'darkslategray',
    flatShading:true
  })

  return { body, detail, road };
}

export { createMaterials };