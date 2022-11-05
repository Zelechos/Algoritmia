/*
 * @Author : Pragmatic Coder
 * @Repositorio : https://github.com/Zelechos/DynamicText
 */

"use strict";

window.addEventListener("load", () => {
  // let Text = document.querySelector("#DynamicText").innerHTML;
  let Text = "< Codigo >";
  const Vacio = (document.querySelector("#DynamicText").innerHTML = " ");

  //console.error(Text);
  const array = ["_", "|", "_", "|", "_", "|", "_", "|"];

  const palabra = Text.split("");
  //console.warn(palabra);

  let actual = "";

  for (let letra in palabra) {
    let antecesor = palabra[letra];
    actual += antecesor;
    //console.log(actual);

    if (palabra.length % 2 == 0) {
      if (letra % 2 == 0) {
        array.push(actual + "|");
      } else {
        array.push(actual + "");
      }
    } else {
      if (letra % 2 == 0) {
        array.push(actual + "");
      } else {
        array.push(actual + "|");
      }
    }

    let i = 0;
    const last = array.length - 1;
    if (palabra.length - 1 == letra) {
      while (i < 15) {
        if (i % 2 == 0) {
          array.push(array[last] + "|");
        } else {
          array.push(array[last] + " ");
        }
        i++;
      }
    }
  }

  //Introduciendo los string a las etiquetas span y las etiquetas span al array list
  let Etiqueta = document.querySelector("#DynamicText");
  const list = [];
  array.forEach((element) => {
    let letra = document.createElement("span");
    let text = document.createTextNode(element);

    letra.appendChild(text);
    letra.style.display = "none";
    list.push(letra);
  });
  //console.log(list)

  //Obtenemos la Etiqueta donde insertaremos el texto dinamico
  list.forEach((element) => {
    Etiqueta.appendChild(element);
  });

  //Mostrarmos dinamicamente la palabra
  let x = 0;
  function Rotacion() {
    list[x].style.display = "none";
    x = (x + 1) % list.length;
    list[x].style.display = "initial";
  }

  setInterval(Rotacion, 120);
});
