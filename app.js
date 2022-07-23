import DonutMaker from "./DonutMaker";

const donutMaker = new DonutMaker();
const donutButton = document.querySelector(".donut-button");
const clickerbutton = document.querySelector(".clicker-button");
const multiplierButton = document.querySelector(".multiplier-button");

const fredcompanyButton = document.querySelector(".fred-company");
const inspirationButton = document.querySelector(".inspiration");
const contactButton = document.querySelector(".contact");

const contentbox = document.querySelector(".content-box");
const inspirationcontent = document.querySelector(".inspiration-content");
const collapsiblecontact = document.querySelector(".collapsible-contact");



const multiplierCost = document.querySelector(".multiplier-cost");

const resetbutton = document.querySelector(".reset-button");


donutButton.addEventListener("click", () => {
  donutMaker.addDonut();
  donutMaker.updateDonutCount();

});

clickerbutton.addEventListener("click", () =>{
  donutMaker.buyAutoClicker();
  donutMaker.updateAutoClicker();
  donutMaker.updateDonutCount();
 
});

multiplierButton.addEventListener("click", ()=>{

  donutMaker.buyMultiplier();
  donutMaker.updateDonutMultiplier();
 
  donutMaker.updateMultiplierCost();
  donutMaker.updateMultiplierAmount();
 donutMaker.updateDonutCount();
});

function autoClickers(){
  for (let i = 0; i < donutMaker.autoClickers; i ++){
    donutMaker.addDonut();
  }
  donutMaker.updateDonutCount();
}
setInterval(autoClickers, 1000);


resetbutton.addEventListener("click", () =>{
  location.reload();

});
const refreshButton = document.querySelector(".refresh");
refreshButton.addEventListener("click", ()=>{
  location.reload();
})

fredcompanyButton.onclick=function(){
  contentbox.style.display = "block";
};

inspirationButton.onclick=function(){
  inspirationcontent.style.display = "block";
};

contactButton.onclick=function(){
  collapsiblecontact.style.display = "block";
};


function autoClick(){
  for(let i = 0; i <donut.autoClickers; i ++){
    donutMaker.donutClick();
  }
  donutMaker.updateDonutCount();
}

setInterval(autoClick, 1000);

export default App;



