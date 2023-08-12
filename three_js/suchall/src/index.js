import { World } from "./world/world.js";

async function main() {
  let container = document.querySelector("#scene-container");
  let world = new World(container);

  await world.init();

  world.render();
}

main().catch((err)=>{
  console.error(err);
});
