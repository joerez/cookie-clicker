//mutable variable declerations
let grandmaInt;
let facilityInt;

//set auto clicks default values
let autoGrandma = false;
let autoFacility = false;

//set default values
let cookieCount = 0;
let clickPower = 1;
let grandmaPower = 0;
let facilityPower = 0;

//set default amounts
let powerClickAmount = 1;
let grandmaAmount = 0;
let facilityAmount = 0;

//set default prices
let powerClickPrice = 50;
let grandmaPrice = 2000;
let facilityPrice = 100000;

//delcare dom variables
let counter = document.getElementById('counter');
let clicker = document.getElementById('clicker');
let buyPower = document.getElementById('buyPower');
let buyGrandma = document.getElementById('buyGrandma');
let buyFacility = document.getElementById('buyFacility');

//big click button
clicker.addEventListener("click", function() {
  cookieCount += clickPower;
  refreshCookieCount();
})

/***********************************

Buy functions

************************************/

//Buy PowerClick Function
buyPower.addEventListener("click", function() {
  //if you can afford it
  if (cookieCount >= powerClickPrice) {
    //subtract cookies from the price of the item
    cookieCount +=  -powerClickPrice;
    refreshCookieCount();

    //Make the price for the next level higher
    powerClickPrice = Math.floor(powerClickPrice * 1.33);
    powerClickAmount += 1;

    //Scale click amount a little bit.
    switch(true) {
      case powerClickAmount <= 4:
        clickPower = clickPower += 1;
        break;
      case powerClickAmount >= 5 && powerClickAmount < 10:
        clickPower = clickPower + 2;
        break;
      case powerClickAmount >= 10 && powerClickAmount < 15:
        clickPower = clickPower + 4;
        break;
      case powerClickAmount >= 15 && powerClickAmount < 20:
        clickPower = clickPower + 6;
        break;
      case powerClickAmount >= 20:
        clickPower = clickPower + 20;
        break;
    }

    refreshPowerClick();

    //cant afford it yet
  } else {
    console.log('you dont have enough cookies');
  }
})

//Buy grandma Function
buyGrandma.addEventListener("click", function() {

  window.clearInterval(grandmaInt);

  refreshGrandma();
  //if you can afford it
  if (cookieCount >= grandmaPrice) {
    //subtract cookies from the price of the item
    cookieCount +=  -grandmaPrice;
    refreshCookieCount();

    //Make the price for the next level higher
    grandmaPrice = Math.floor(grandmaPrice * 1.33);

    grandmaAmount += 1;

    //Scale the price and the click amount a little bit.
    switch(true) {
      case grandmaAmount <= 4:
        grandmaPower = grandmaPower += 15;
        break;
      case grandmaAmount >= 5 - 1 && grandmaAmount < 10:
        grandmaPower = grandmaPower + 22;
        break;
      case grandmaAmount >= 10 && grandmaAmount < 15:
        grandmaPower = grandmaPower + 40;
        break;
      case grandmaAmount >= 15 && grandmaAmount < 20:
        grandmaPower = grandmaPower + 100;
        break;
      case grandmaAmount >= 20:
        grandmaPower = grandmaPower + 500;
        break;
    }

    autoGrandma = true;
    refreshGrandma();

    //cant afford it yet
  } else {
    console.log('you dont have enough cookies');
  }
})

//Buy facility Function
buyFacility.addEventListener("click", function() {

  window.clearInterval(facilityInt);

  refreshFacility();
  //if you can afford it
  if (cookieCount >= facilityPrice) {
    //subtract cookies from the price of the item
    cookieCount +=  -facilityPrice;
    refreshCookieCount();

    //Make the price for the next level higher
    facilityPrice = Math.floor(facilityPrice * 1.33);

    facilityAmount += 1;

    //Scale the price and the click amount a little bit.
    switch(true) {
      case facilityAmount <= 4:
        facilityPower = facilityPower += 2000;
        break;
      case facilityAmount >= 5 - 1 && facilityAmount < 10:
        facilityPower = facilityPower + 2560;
        break;
      case facilityAmount >= 10 && facilityAmount < 15:
        facilityPower = facilityPower + 3080;
        break;
      case facilityAmount >= 15 && facilityAmount < 20:
        facilityPower = facilityPower + 3860;
        break;
      case FacilityAmount >= 20 ** facilityAmount < 21:
        facilityPower = facilityPower + 6000;
        break;
      case FacilityAmount > 21:
        facilityPower = facilityPower + 6000;
        break;

    }

    autoFacility = true;
    refreshFacility();

    //cant afford it yet
  } else {
    console.log('you dont have enough cookies');
  }
})

/***********************************

Refresh functions

************************************/

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

function refreshFacility() {
  document.getElementById('facilityPrice').innerHTML = facilityPrice;
  document.getElementById('facilityCount').innerHTML = facilityAmount;
  document.getElementById('facilityPerSec').innerHTML = facilityPower;

  if (autoFacility = true) {
    facilityAutoGo();
  }
}

/***********************************

Auto loop functions

************************************/

function grandmaAutoGo() {
  let grandmaInt = window.setInterval(function(){
      cookieCount = cookieCount+= grandmaPower / 2;
      refreshCookieCount();
    }, 1000);
}

function facilityAutoGo() {
  let facilityInt = window.setInterval(function(){
      cookieCount = cookieCount+= facilityPower / 2;
      refreshCookieCount();
    }, 1000);
}


// wrap it all in an IIFE
(function(){
  // all code here
})()

// localstorage
// localstorage.getItem('key')
// gameObj <-- has all data
// let value = JSON.stringify(gameObj)
// localstorage.setItem('key', value)

var a = {key:'hello', value: 23}
JSON.stringify(a) // works great
var b = {key: 'world', getDiamter: function() {return 8000}}
JSON.stringify(b) // doesn't work :(
