# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

-[Desktop Screenshot](/Users/alanjimenez/Desktop/frontendmentor.io/tip-calculator/images/desktop.png)

-[Mobile Screenshot](/Users/alanjimenez/Desktop/frontendmentor.io/tip-calculator/images/mobile.png)

### Links

- [Solution](https://github.com/aljayy/tipcalculator)
- [Live Site](https://aljayy.github.io/tipcalculator/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Grid
- JavaScript
- Mobile-first workflow

### What I learned

The biggest issue I had was figuring out how to perfect the flow of the calculations. At first I built my JavaScript file around only calculating the total and tip amounts when the user submitted the bill input first, selected a tip percentage second, and then lastly the number of people. In that exact order. I immediately saw the flaw in that, knowing that if this was part of an application this would be a no go.

I had to find a way so that the calculator worked in every way possible. Whether that was number of people first, bill input second, and tip percentage last. Or whether the user wanted to change the bill amount even when all other information was submitted and to automatically calculate the amounts when that was done. It proved to be a much harder task than I originally thought but in the end this was my way of figuring it out.

For this project there was no “submit” button for the user to use when they wanted to calculate the amounts, rather the number of people input element was essentially treated as the submit button. So on every input element I would check if the person input was greater than or equal to 0, and if it was I would call the calculateAmounts function. This allowed the user to go about calculating their amounts in whatever order they wanted.

Learning how to navigate these issues and finding ways to ease the user interface was a great learning lesson.

```js
if (peopleValue >= 1) calculateAmounts();
```

### Continued development

I want to continue getting more proficient with my JavaScript code. With each project I’m finding myself getting more and more comfortable with the DOM manipulation side of it.
