// commonlize
//fetch("https://t2biomod2024.github.io/2024/page_parts/header.html")
//    .then((response) => response.text())
//    .then((data) => document.querySelector("#container").insertAdjacentHTML('afterbegin', data));
//fetch("https://t2biomod2024.github.io/2024/page_parts/footer.html")
//    .then((response) => response.text())
//    .then((data) => document.querySelector("#container").insertAdjacentHTML('beforeend', data));
//fetch("https://t2biomod2024.github.io/2024/page_parts/button.html")
//    .then((response) => response.text())
//    .then((data) => document.querySelector("#container").insertAdjacentHTML('afterend', data));

    function fetchAndInsertSync(url, position) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false); // 第3引数にfalseを設定すると同期リクエストになります
        xhr.send();
    
        if (xhr.status === 200) {
            document.querySelector("#container").insertAdjacentHTML(position, xhr.responseText);
        } else {
            console.error('Error fetching:', xhr.statusText);
        }
    }
    
    // 使用例
    fetchAndInsertSync("https://t2biomod2024.github.io/2024/page_parts/header.html", 'afterbegin');
    fetchAndInsertSync("https://t2biomod2024.github.io/2024/page_parts/footer.html", 'beforeend');
    fetchAndInsertSync("https://t2biomod2024.github.io/2024/page_parts/button.html", 'afterend');
    