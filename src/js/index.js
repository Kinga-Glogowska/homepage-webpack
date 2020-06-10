import '../scss/main.scss';
import moment from 'moment';

/* place your code below */

console.log("HELLO 🚀", moment().format('MMMM Do YYYY, h:mm:ss a'));

console.log("Jestem super Kinią programistką");

//changing content of html

const heading = document.querySelector(".article-header--js");

// console.log(heading);

// heading.innerHTML = "blabalblabla";

//greet function

function invitation(firstName, secondName) {
  return `hello my name is ${firstName} ${secondName}`;
}

const firstName = "Kinga";
const secondName = "Głogowska";

const  greet = invitation(firstName, secondName);
console.log(greet);

//arrow function
const invitationArrow = (firstName, secondName) => {
  return `hello my name is ${firstName} ${secondName}`;
};

const greeting = invitationArrow("kinga", "Glogowska");
console.log(greeting);

//a function changing html content

const createContent = (querySelectorContent, content) => {
  const element = document.querySelector(querySelectorContent);
  if (element != null) {
    element.innerHTML = content;
  }
};

createContent(".header-site__title--js", "Witaj świecie");

//hamburger menu

// const hamburger = document.querySelector(".hamburger--js");

// console.log(hamburger);
// hamburger.addEventListener("click", () => {
//   const navigation = document.querySelector(".navigation--js");
//   navigation.classList.replace("header-site__navigation", "navigation--open");
// });
