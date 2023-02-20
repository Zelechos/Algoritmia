"use strict";

export default class RenderData {
  constructor(data) {
    this.d = document;
    this.data = data;
    this.algorithms = this.d.getElementsByClassName("page");
    this.template = this.d.getElementById("template-post").content;
    this.fragment = this.d.createDocumentFragment();
    this.content = this.d.getElementById("content");
  }

  definedPages() {
    const pagesToArray = Object.entries(this.algorithms);
    pagesToArray.forEach((element, index) => {
      element[1].setAttribute("id", `${index}`);
    });
  }

  render() {
    this.definedPages();
    this.d.addEventListener("click", (e) => {
      const target = e.target.parentElement;
      const idLabel = target.id;
      this.content.innerHTML = "";
      console.log(this.algorithms);
      this.data.forEach((element) => {
        if (idLabel == element.id) {
          console.log(idLabel, " ==> ", element.id);
          this.template.querySelector("h1").textContent = element.title;
          this.template.querySelector("h3").textContent = element.milestone;
          this.template.querySelector("p").textContent = element.description;

          let $clone = this.template.cloneNode(true);
          this.fragment.appendChild($clone);
        }
      });
      this.content.appendChild(this.fragment);
    });
  }
}
