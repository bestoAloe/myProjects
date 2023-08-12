import { AnimationMixer } from "three";

function setModels(data){
  const model = data[0].scene.children[0];
  const clip = data[0].animations[0];     //加载动画剪辑

  const mixer = new AnimationMixer(model);
  const action = mixer.clipAction(clip);
  action.play();

  model.ticks = (delta) => mixer.update(delta);

  return model;
}

export { setModels };