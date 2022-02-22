'use strict'
// ------------------------------- Imports -------------------------------
import Shortcuts from './keyboard_shortcuts.js';
import SearchFilters from './search_filters.js';
// -----------------------------------------------------------------------


window.addEventListener("DOMContentLoaded" , ()=>{

    // --------------  Search Filter --------------
    const searcher = new SearchFilters('.pragmatic-code', '.code', '.formulario');
    searcher.search();
    
    // --------------  Keyboard Shortcuts --------------
    const shortcuts = new Shortcuts('form');
    shortcuts.actions();
});



