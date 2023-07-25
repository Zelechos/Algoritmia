"use strict";
import RenderData from "./render.js";

export default class SearchFilters {
  // --------------- Filters ==> Filtros de busqueda en la web ---------------
  constructor(data, parent, searcher) {
    this.d = document;
    this.data = data;
    this.searcher = this.d.querySelector(searcher);
    this.parent = this.d.querySelector(parent);
  }

  search() {
    const $voidMessage = document.createElement("p");
    $voidMessage.setAttribute("class", "message");

    this.d.addEventListener("keyup", (e) => {
      const current_data = this.data.filter((data) =>
        data.title.toLowerCase().includes(this.searcher.value.toLowerCase())
      );
      this.clearData(this.parent);
      const renderData = new RenderData(current_data);
      renderData.render();

      if (this.parent.children.length === 0) {
        $voidMessage.textContent = "==> No existen coincidencias <==";
        $voidMessage.className = "message";
        this.parent.appendChild($voidMessage);
      }
    });
  }

  clearData(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
}
