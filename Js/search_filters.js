'use strict'

export default class SearchFilters{

    // --------------- Filters ==> Filtros de busqueda en la web ---------------
    constructor(parent, data, searcher) {
        this.d = document;
        this.classNameSearcher = searcher;
        this.data = this.d.querySelectorAll(data);
        this.pragmaticCode = this.d.querySelector(parent);
    }

    search(){
        let counter = 0;
        const $voidMessage = document.createElement('h1');
        const $container = document.querySelector('.container');

        this.d.addEventListener('keyup', e=>{

            if(e.target.matches(this.classNameSearcher)){
                
                this.data.forEach(coincidences => {
                    
                    (coincidences.querySelector('h1').textContent.toLowerCase().includes(e.target.value.toLowerCase()))
                    ? this.pragmaticCode.appendChild(coincidences)
                    : coincidences.remove();


                    if(this.pragmaticCode.children.length === 0 && counter === 0){
                        $voidMessage.textContent = "No existen coincidencias";
                        $voidMessage.className="message";
                        $container.prepend($voidMessage);
                        counter++;
                    }
                    
                    if($container.children[0].textContent === "No existen coincidencias" && this.pragmaticCode.children.length > 0){
                        $container.children[0].remove();
                        counter--;
                    }
                });
            }
        });
    }

}