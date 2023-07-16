import { AnimationMixer } from "three";

function setupModel(data) {
  const model = data.scene.children[0];
  const clip = data.animations[0];     //加载动画剪辑

  const mixer = new AnimationMixer(model);
  const action = mixer.clipAction(clip);
  action.play();

  model.ticks = (delta) => mixer.update(delta);

  return model;
}

export { setupModel };