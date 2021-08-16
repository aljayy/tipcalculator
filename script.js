`use strict`;

const billInput = document.getElementById(`info-input-1`);
const btn = document.querySelectorAll(`.btn-percent`);
const peopleInput = document.querySelector(`#info-input-2`);
const tip = document.querySelector(`#tip`);
const total = document.querySelector(`#total`);
const error = document.querySelector(`#error`);

let billValue, percentValue, peopleValue, tipValue;

const calculateAmounts = function () {
  if (peopleInput.value < 1) {
    error.style.display = `block`;
    peopleInput.classList.add(`error-outline`);
  } else if (peopleInput.value >= 1) {
    error.style.display = `none`;
    peopleInput.classList.remove(`error-outline`);
    peopleValue = Number(peopleInput.value);
    tipValue = billValue * (percentValue / peopleValue);
    tip.textContent = `$${tipValue}`;
    total.textContent = `$${billValue / peopleValue + tipValue}`;
  }
};

billInput.addEventListener(`input`, function () {
  if (percentValue) {
    console.log(true);
  }
  billValue = Number(billInput.value);
});

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener(`click`, function () {
    if (btn[i].textContent === `5%`) {
      percentValue = 0.05;
      console.log(percentValue);
    } else if (btn[i].textContent === `10%`) {
      percentValue = 0.1;
    } else if (btn[i].textContent === `15%`) {
      percentValue = 0.15;
    } else if (btn[i].textContent === `25%`) {
      percentValue = 0.25;
    } else if (btn[i].textContent === `50%`) {
      percentValue = 0.5;
    }
  });
}

peopleInput.addEventListener(`input`, calculateAmounts);
