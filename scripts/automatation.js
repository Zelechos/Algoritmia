const data = [
"Algoritmo de fuerza bruta",
"Algoritmo de autómata finito determinista",
"Algoritmo de Karp-Rabin",
"Cambio o algoritmo",
"Algoritmo de Morris-Pratt",
"Algoritmo de Knuth-Morris-Pratt",
"algoritmo de Simon",
"Algoritmo de Colussi",
"Algoritmo de Galil-Giancarlo",
"Algoritmo Apostólico-Crochemore",
"Algoritmo no tan ingenuo",
"Algoritmo de Boyer-Moore",
"Algoritmo Turbo BM",
"Algoritmo Apostólico-Giancarlo",
"Algoritmo Colussi inverso",
"Algoritmo Horspool",
"Algoritmo de búsqueda rápida",
"Algoritmo de Boyer-Moore sintonizado",
"Algoritmo de Zhu-Takaoka",
"Algoritmo de Berry-Ravindran",
"Algoritmo de Smith",
"Algoritmo Raita",
"Algoritmo de factor inverso",
"Algoritmo de factor inverso turbo",
"Algoritmo de coincidencia Dawg hacia adelante",
"Algoritmo de coincidencia Dawg no determinista hacia atrás",
"Algoritmo de coincidencia de Oracle hacia atrás",
"Algoritmo de Galil-Seiferas",
"Algoritmo de dos vías",
"Coincidencia de cadenas en el algoritmo de alfabetos ordenados",
"Algoritmo de desajuste óptimo",
"Algoritmo de cambio máximo",
"Omitir algoritmo de búsqueda",
"Algoritmo de búsqueda por omisión de KMP",
"Algoritmo alfa de búsqueda por omisión"]

data.forEach((text, index)=>{
    let template = `    {
        "id": ${index},
        "title": "${text}"
    },`
    console.log(template);
});