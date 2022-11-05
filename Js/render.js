"use strict";

export default function render(json) {
  // --------------  List Creation --------------
  const $pragmatic_code = document.querySelector(".pragmatic-code");
  let text = ``;
  json.forEach((data) => {
    text += `
        <li class="code">
            <div class="timeline-content">
                <a href="./routes/code.html" target="_blank" rel="noopener">
                <h1>${data.title}</h1>
                <div class="img-separator"></div>
                <h3 class="solution">${data.milestone}</h3>
                <p>${data.description}</p>
                </a>
            </div>
        </li>`;
  });
  $pragmatic_code.innerHTML = text;
}
