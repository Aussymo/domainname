// /* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   document.querySelector("#button").addEventListener("click", () => {
//     document.querySelector("#domain").innerHTML = domainGen();
//   });
// };
// let domainGen = () => {
//   let who = ["bear", "dominos", "baseball", "redbull"];
//   let action = ["swing", "attack", "drink", "ate"];
//   let what = [".com", ".org", ".net", ".onion"];

//   let whoIndex = Math.floor(Math.random() * who.length);
//   let actionIndex = Math.floor(Math.random() * action.length);
//   let whatIndex = Math.floor(Math.random() * what.length);

//   return `${who[whoIndex]}${action[actionIndex]}${what[whatIndex]}`;
// };

import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
window.onload = function() {
  let domainGen = [];
  let who = ["bear", "dominos", "baseball", "redbull"];
  let action = ["swing", "attack", "drink", "ate"];
  let what = [".com", ".org", ".net", ".onion"];
  for (let i = 0; i < who.length; i++) {
    for (let j = 0; j < action.length; j++) {
      for (let k = 0; k < what.length; k++) {
        domainGen.push("  " + who[i] + action[j] + what[k]);
      }
    }
  }
  console.log(domainGen);
  document.getElementById("domain.results").innerHTML = domainGen;
};
