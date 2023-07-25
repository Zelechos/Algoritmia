"use strict";
export default class Shortcuts {
  constructor(form) {
    this.d = document;
    this.w = window;
    this.form = this.d.getElementById(form);
    this.sidebarList = this.d.querySelector(".nav-links");
  }

  actions() {
    //Evento Keypress
    this.w.addEventListener("keydown", (e) => {
      // Para poner el foco en el buscador
      if (e.key === "Enter") this.form.focus();

      // Validacion para el escape del input
      if (e.key === "Escape") e.target.value = "";
    });
  }
}
