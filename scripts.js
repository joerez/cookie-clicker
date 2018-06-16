//set auto clicks default values
let autoGrandma = false;

//set default values
let cookieCount = 0;
let clickPower = 1;
let grandmaPower = 10;

//set default amounts
let powerClickAmount = 1;
let grandmaAmount = 0;

//set default prices
let powerClickPrice = 50;
let grandmaPrice = 2000;
let cookieManufacturingFacilityPrice = 100000;

//delcare dom variables
let counter = document.getElementById('counter');
let clicker = document.getElementById('clicker');
let buyPower = document.getElementById('buyPower');
let buyGrandma = document.getElementById('buyGrandma');


//big click button
clicker.addEventListener("click", function() {
  cookieCount += clickPower;
  refreshCookieCount();
})



//Buy PowerClick Function
buyPower.addEventListener("click", function() {
  //if you can afford it
  if (cookieCount >= powerClickPrice) {
    //subtract cookies from the price of the item
    cookieCount +=  -powerClickPrice;
    refreshCookieCount();

    //Make the price for the next level higher
    powerClickPrice = Math.floor(powerClickPrice * 1.33);

    //Scale the price and the click amount a little bit.
    if (powerClickAmount <= 5) {
      clickPower = clickPower + 1;
    } else if (powerClickAmount >= 5) {
      clickPower = clickPower + 2;
    } else if (powerClickAmount >= 10) {
      clickPower = clickPower + 4;
    }

    powerClickAmount += 1;
    refreshPowerClick();

    //cant afford it yet
  } else {
    console.log('you dont have enough cookies');
  }
})



//Buy grandma Function
buyGrandma.addEventListener("click", function() {
  //if you can afford it
  if (cookieCount >= grandmaPrice) {
    //subtract cookies from the price of the item
    cookieCount +=  -grandmaPrice;
    refreshCookieCount();

    //Make the price for the next level higher
    grandmaPrice = Math.floor(grandmaPrice * 1.33);


    grandmaPower += 12;

    grandmaAmount += 1;
    autoGrandma = true;
    refreshGrandma();

    //cant afford it yet
  } else {
    console.log('you dont have enough cookies');
  }
})





function refreshCookieCount() {
  counter.innerHTML = cookieCount;
}

function refreshPowerClick() {
  document.getElementById('powerClickPrice').innerHTML = powerClickPrice;
  document.getElementById('powerCount').innerHTML = powerClickAmount;
  document.getElementById('powerPerClick').innerHTML = clickPower;
}

function refreshGrandma() {
  document.getElementById('grandmaPrice').innerHTML = grandmaPrice;
  document.getElementById('grandmaCount').innerHTML = grandmaAmount;
  document.getElementById('grandmaPerSec').innerHTML = grandmaPower;

  if (autoGrandma = true) {
    grandmaAutoGo();
  }


}

function grandmaAutoGo() {

  window.setInterval(function(){
    cookieCount = cookieCount+= grandmaPower;
    refreshCookieCount();
  }, 1000);


}
