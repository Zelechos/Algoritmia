"use strict";

export default class RenderData {
  constructor(data) {
    this.d = document;
    this.data = data;
    this.algorithms = this.d.getElementsByClassName("page");
    this.templateList = this.d.getElementById("template-list").content;
    this.fragment = this.d.createDocumentFragment();
    this.content = this.d.getElementById("content");
    this.sidebarList = this.d.querySelector(".nav-links");
    this.title = this.d.querySelector(".logo-details");
  }

  definedPages() {
    this.title.setAttribute("id", "35");
    this.data.forEach((element) => {
      if (element.id == "35") return;
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
          let url = `./data/articles/${element.title}.md`;
          this.request(url);
        }
      });
    });
  }

  request(url) {
    fetch(url)
      .then((response) =>
        response.ok ? response.text() : Promise.reject(response)
      )
      .then((liar) => {
        let converter = new showdown.Converter();
        let codeHtml = converter.makeHtml(liar);
        this.content.innerHTML = codeHtml;
      })
      .catch((error) => {
        let text = url.substring(16, url.length - 3);
        this.content.innerHTML = `<h2>Proximamente ${text}<h2>`;
      });
  }

  begin(url = `./data/articles/Algoritmia.md`) {
    this.request(url);
  }
}
