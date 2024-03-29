class DonutMaker{

    constructor(){
        this.count = 0;
        this.autoClickers = 0;
        this.autoClickerCost = 10;

        this.multiplier = 1;
        this.multiplierAmount = 0;
        this.multiplierCost = 20;
        
    }


    getDonutCount(){
        return this.donutcount;
    }

    getAutoClickers(){
        return this.autoclickers;
    }

    getMultiplier(){
        return this.multiplier;
    }
    getMultiplierAmount(){
      return this.multiplierAmount;
    }

    addDonut(){
        this.count += 1;
    }


   buyAutoClicker(){
    
  
    this.count = Math.round(this.count - this.autoClickerCost);
     this.autoClickerCost += this.autoClickerCost * 1.2;
    
    this.autoClickers += 1;
  }

  

  buyMultiplier(){          
    this.count = Math.round(this.count - this.multiplierCost);
    this.multiplier = this.multiplier * .1;
    this.multiplierAmount += 1;
}
  
    updateAutoClicker(){
        const numberOfClicker = document.querySelector(".amount-of-clickers");
        const clickerCost = document.querySelector(".clicker-cost");
        numberOfClicker.innerText = this.autoClickers;
        this.autoClickerCost = this.autoClickerCost * 1.2;
        clickerCost.innerText = Math.round(this.autoClickerCost);
      }

          
      updateDonutMultiplier(){
        const numberOfMultipliers = document.querySelector(".amount-of-multipliers");
        const multiplyCost = document.querySelector(".multiplier-cost");
        const multiplierAmountText = document.querySelector(".multiplier-amount");

        numberOfMultipliers.innerText = this.multiplierAmount;
       this.multiplierCost = this.multiplierCost * 1.1;
        multiplierAmountText.innerText = this.multiplierAmount;
        multiplyCost.innerText = Math.round(this.multiplierCost);
      }

      updateDonutCount(){
        const donutCount = document.querySelector(".amount-of-donuts");
        donutCount.innerText = Math.round(this.count);
        

      }
    }
export default DonutMaker;