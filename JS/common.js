//commonlize
//非同期型の上のコードの方がレスポンスが早いが，読み込み前に他のコードが進行してしまい，表示がバグる．共通化をやめれば早くなるが面倒．最後にそれぞれに書き出すかも．

//非同期型
//fetch("https://t2biomod2024.github.io/2024/page_parts/header.html")
//    .then((response) => response.text())
//    .then((data) => document.querySelector("#container").insertAdjacentHTML('afterbegin', data));
//fetch("https://t2biomod2024.github.io/2024/page_parts/footer.html")
//    .then((response) => response.text())
//    .then((data) => document.querySelector("#container").insertAdjacentHTML('beforeend', data));
//fetch("https://t2biomod2024.github.io/2024/page_parts/button.html")
//    .then((response) => response.text())
//    .then((data) => document.querySelector("#container").insertAdjacentHTML('afterend', data));


//同期型
function fetchAndInsertSync(url, position) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    
    if (xhr.status === 200) {
        document.querySelector("#container").insertAdjacentHTML(position, xhr.responseText);
    } else {
        console.error('Error fetching:', xhr.statusText);
    }
}
    
fetchAndInsertSync("https://t2biomod2024.github.io/2024/page_parts/header.html", 'afterbegin');
fetchAndInsertSync("https://t2biomod2024.github.io/2024/page_parts/footer.html", 'beforeend');
fetchAndInsertSync("https://t2biomod2024.github.io/2024/page_parts/button.html", 'afterend');
    