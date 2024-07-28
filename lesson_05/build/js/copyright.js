"use strict";
// const yearElement = document.getElementById("year") as HTMLElement;
// const currentDate: Date = new Date();
// const currentYear: Number = currentDate.getFullYear();
// yearElement.textContent = currentYear.toString();
// const yearElement = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// yearElement.setAttribute("datetime", thisYear);
// yearElement.textContent = thisYear;
// 1st variabtion
const yearElement = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
yearElement.setAttribute("datetime", thisYear);
yearElement.textContent = thisYear;
