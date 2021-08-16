`use strict`;

const billInput = document.getElementById(`info-input-1`);
const btn = document.querySelectorAll(`.btn-percent`);
const customPercent = document.querySelector(`#custom-percent`);
const peopleInput = document.querySelector(`#info-input-2`);
const tip = document.querySelector(`#tip`);
const total = document.querySelector(`#total`);
const error = document.querySelector(`#error`);
const reset = document.querySelector(`.reset`);

let billValue, percentValue, peopleValue, tipValue;

const calculateAmounts = function () {
  if (peopleInput.value < 1) {
    error.style.display = `block`;
    peopleInput.classList.add(`error-outline`);
  } else if (peopleInput.value >= 1) {
    error.style.display = `none`;
    peopleInput.classList.remove(`error-outline`);
    peopleValue = Number(peopleInput.value);
    tipValue = (billValue * (percentValue / 100)) / peopleValue;
    tip.textContent = `$${tipValue.toFixed(2)}`;
    total.textContent = `$${(billValue / peopleValue + tipValue).toFixed(2)}`;
  }
};

billInput.addEventListener(`input`, function () {
  billValue = Number(billInput.value);

  if (peopleValue >= 1) calculateAmounts();
});

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener(`click`, function () {
    for (let i = 0; i < btn.length; i++) {
      btn[i].classList.remove(`btn-focus`);
    }
    if (btn[i].textContent === `5%`) {
      percentValue = 5;
      btn[i].classList.add(`btn-focus`);
      customPercent.value = ``;
    } else if (btn[i].textContent === `10%`) {
      percentValue = 10;
      btn[i].classList.add(`btn-focus`);
      customPercent.value = ``;
    } else if (btn[i].textContent === `15%`) {
      percentValue = 15;
      btn[i].classList.add(`btn-focus`);
      customPercent.value = ``;
    } else if (btn[i].textContent === `25%`) {
      percentValue = 25;
      btn[i].classList.add(`btn-focus`);
      customPercent.value = ``;
    } else if (btn[i].textContent === `50%`) {
      percentValue = 50;
      btn[i].classList.add(`btn-focus`);
      customPercent.value = ``;
    }
    if (peopleValue >= 1) calculateAmounts();
  });
}

customPercent.addEventListener(`click`, function () {
  for (let i = 0; i < btn.length; i++) {
    btn[i].classList.remove(`btn-focus`);
  }
});

customPercent.addEventListener(`input`, function () {
  percentValue = Number(customPercent.value);

  if (peopleValue >= 1) calculateAmounts();
});

peopleInput.addEventListener(`input`, calculateAmounts);

reset.addEventListener(`click`, function () {
  billInput.value = ``;
  billValue = ``;
  for (let i = 0; i < btn.length; i++) {
    btn[i].classList.remove(`btn-focus`);
  }
  percentValue = ``;
  customPercent.value = ``;
  peopleInput.value = ``;
  tip.textContent = `$0.00`;
  total.textContent = `$0.00`;
  error.style.display = `none`;
  peopleInput.classList.remove(`error-outline`);
});
