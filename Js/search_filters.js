"use strict";

import render from "./render.js";

export default class SearchFilters {
  // --------------- Filters ==> Filtros de busqueda en la web ---------------
  constructor(data, parent, searcher) {
    this.d = document;
    this.data = data;
    this.searcher = this.d.querySelector(searcher);
    this.pragmaticCode = this.d.querySelector(parent);
  }

  search() {
    const $voidMessage = document.createElement("h1");
    const $container = document.querySelector(".container");

    this.d.addEventListener("keyup", (e) => {
      const current_data = this.data.filter((data) =>
        data.title.toLowerCase().includes(this.searcher.value.toLowerCase())
      );
      render(current_data);

      if (this.pragmaticCode.children.length === 0 && counter === 0) {
        $voidMessage.textContent = "No existen coincidencias";
        $voidMessage.className = "message";
        $container.prepend($voidMessage);
      }

      if (
        $container.children[0].textContent === "No existen coincidencias" &&
        this.pragmaticCode.children.length > 0
      ) {
        $container.children[0].remove();
      }
    });
  }
}
