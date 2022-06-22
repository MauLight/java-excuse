/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.getElementById("the-excuse").innerHTML = generateExcuse();
};

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoIn = Math.floor(Math.random() * who.length);
  let actIn = Math.floor(Math.random() * action.length);
  let whaIn = Math.floor(Math.random() * what.length);
  let wheIn = Math.floor(Math.random() * when.length);

  return (
    who[whoIn] + " " + action[actIn] + " " + what[whaIn] + " " + when[wheIn]
  );
};
