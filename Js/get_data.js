"use strict";

export default async function get_data() {
  const data = await fetch("../data/algorithms.json");
  return data.json();
}

export function definedPages() {
  const algorithms = document.getElementsByClassName("page");
  const pagesToArray = Object.entries(algorithms);
  pagesToArray.forEach((element, index) => {
    element[1].setAttribute("id", `${index}`);
  });
}
