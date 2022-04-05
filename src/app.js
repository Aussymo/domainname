/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#domain").innerHTML = domainGen();
  });
};
let domainGen = () => {
  let who = ["bear", "dominos", "baseball", "redbull"];
  let action = ["swing", "attack", "drink", "ate"];
  let what = [".com", ".org", ".net", ".onion"];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);

  return `${who[whoIndex]}${action[actionIndex]}${what[whatIndex]}`;
};
