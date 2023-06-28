import { World } from "./world/World.js";

async function main(){
  const container = document.querySelector("#scene-container");
  const button = document.querySelector("#buttonFocse");
  const world = new World(container);

  await world.init();
  
  let i = 0;
  button.addEventListener('click', function(){
    if(i<2){
      i++;
    }else{
      i = 0;
    }
    world.focuseNext(i);
  })
  
  world.start();  //循环渲染
  //world.render();  //按需渲染

}



main().catch((err)=>{
  console.error(err);
});