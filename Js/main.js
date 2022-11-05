"use strict";
// ------------------------------- Imports -------------------------------
import Shortcuts from "./keyboard_shortcuts.js";
import SearchFilters from "./search_filters.js";
import render from "./render.js";
import get_data from "./get_data.js";
// -----------------------------------------------------------------------

window.addEventListener("DOMContentLoaded", async () => {
  // -------------- render the data -------------
  let data = await get_data();
  render(data);

  // --------------  Keyboard Shortcuts --------------
  const shortcuts = new Shortcuts("form");
  shortcuts.actions();

  // --------------  Search Filter --------------
  const searcher = new SearchFilters(data, ".pragmatic-code", ".formulario");
  searcher.search();
});
