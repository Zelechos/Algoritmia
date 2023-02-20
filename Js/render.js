"use strict";

export default class RenderData {
  constructor(data) {
    this.d = document;
    this.data = data;
    this.algorithms = this.d.getElementsByClassName("page");
    this.template = this.d.getElementById("template-post").content;
    this.templateList = this.d.getElementById("template-list").content;
    this.fragment = this.d.createDocumentFragment();
    this.content = this.d.getElementById("content");
    this.sidebarList = this.d.querySelector(".nav-links");
  }

  definedPages() {
    this.data.forEach((element) => {
      this.templateList.querySelector(".link_name").textContent = element.title;
      let $clone = this.templateList.cloneNode(true);
      this.fragment.appendChild($clone);
    });
    this.sidebarList.appendChild(this.fragment);
    const pagesToArray = Object.entries(this.algorithms);
    pagesToArray.forEach((element, index) => {
      element[1].setAttribute("id", `${index}`);
    });
  }

  render() {
    this.definedPages();
    this.d.addEventListener("click", (e) => {
      const target = e.target;

      let idLabel = target.id ? target.id : target.parentElement.id;

      this.data.forEach((element) => {
        if (idLabel == element.id && idLabel !== "") {
          this.content.innerHTML = "";
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
