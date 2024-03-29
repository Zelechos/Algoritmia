"use strict";
// ------------------------------- Imports -------------------------------
import Shortcuts from "./keyboard_shortcuts.js";
import SearchFilters from "./search_filters.js";
import RenderData from "./render.js";
import get_data from "./get_data.js";
import effect3D from "./effect3D.js";
// -----------------------------------------------------------------------

window.addEventListener("DOMContentLoaded", async () => {
  // -------------- Render Data -------------
  let data = await get_data();
  const renderData = new RenderData(data);
  renderData.render();
  renderData.begin();

  // --------------  Effect 3D --------------
  effect3D();

  // --------------  Keyboard Shortcuts --------------
  const shortcuts = new Shortcuts("form");
  shortcuts.actions();

  // --------------  Search Filter --------------
  const searcher = new SearchFilters(data, ".nav-links", ".algorithm-filter");
  searcher.search();

  console.warn("Welcome to Algoritmia");
});
