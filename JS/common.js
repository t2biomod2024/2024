// commonlize
fetch("https://t2biomod2024.github.io/2024/page_parts/button.html")
    .then((response) => response.text())
    .then((data) => document.querySelector("#container").insertAdjacentHTML('afterend', data));
fetch("https://t2biomod2024.github.io/2024/page_parts/header.html")
    .then((response) => response.text())
    .then((data) => document.querySelector("#container").insertAdjacentHTML('afterbegin', data));
fetch("https://t2biomod2024.github.io/2024/page_parts/footer.html")
    .then((response) => response.text())
    .then((data) => document.querySelector("#container").insertAdjacentHTML('beforeend', data));