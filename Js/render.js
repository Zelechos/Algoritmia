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

  createPages() {
    this.title.setAttribute("id", "Algoritmia");
    this.data.forEach((element) => {
      if (element.id == "35") return;
      this.templateList.querySelector(".link_name").textContent = element.title;
      this.templateList.querySelector(".page").id = element.title;
      let $clone = this.templateList.cloneNode(true);
      this.fragment.appendChild($clone);
    });
    this.sidebarList.appendChild(this.fragment);
  }

  render() {
    this.createPages();
    this.d.addEventListener("click", (e) => {
      const target = e.target;
      let idLabel = target.id ? target.id : target.parentElement.id;
      this.data.forEach((element) => {
        if (idLabel == element.title && idLabel !== "") {
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
        // Creamos un converter para converitr de .md a .html
        let converter = new showdown.Converter();
        // Convertimos nuestro .md a .html
        let codeHtml = converter.makeHtml(liar);
        this.content.innerHTML = codeHtml;
        // otra manera de resumir todo lo anterior seria :
        // $main.innerHTML = new showdown.Converter().makeHtml(liar);
      })
      .catch((error) => {
        let message = error.statusText || "Ocurrio un error";
        this.content.innerHTML = `<h2>Error ${error.status} : ${message}<h2>`;
      })
      .finally(console.warn(`Liar ready`));
  }

  begin(url = `./data/articles/Algoritmia.md`) {
    this.request(url);
  }
}
