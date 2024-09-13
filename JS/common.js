// commonlize
document.addEventListener('DOMContentLoaded', async function() {
    try {
        const headerResponse = await fetch("https://t2biomod2024.github.io/2024/page_parts/header.html");
        const headerData = await headerResponse.text();
        document.querySelector("#container").insertAdjacentHTML('afterbegin', headerData);

        const footerResponse = await fetch("https://t2biomod2024.github.io/2024/page_parts/footer.html");
        const footerData = await footerResponse.text();
        document.querySelector("#container").insertAdjacentHTML('beforeend', footerData);

        const buttonResponse = await fetch("https://t2biomod2024.github.io/2024/page_parts/button.html");
        const buttonData = await buttonResponse.text();
        document.querySelector("body").insertAdjacentHTML('beforeend', buttonData);
    } catch (error) {
        console.error('Error loading HTML parts:', error);
    }
});