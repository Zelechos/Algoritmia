'use strict'
window.addEventListener("load" , ()=>{
    const Container = document.querySelector(".head");
    for(let i = 0; i<=20;i++){
        const blocks = document.createElement('div');
        blocks.classList.add("block");
        Container.appendChild(blocks);
    }

    function animate(){
        anime({
            targets : '.block',
            translateX : function(){
            return anime.random(0,1700)
            },
            translateY : function(){
            return anime.random(-1000,1500)
            },
            scale : function(){
                return anime.random(1,5)
            },
            easing: 'linear',
            duration: 5000,
            delay: anime.stagger(1),
            complete: animate,
        });
    }
    animate();
});