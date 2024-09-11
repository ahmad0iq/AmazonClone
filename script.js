let backToTopBtn = document.getElementById("backToTopBtn");
backToTopBtn.onclick = () => {
    document.documentElement.scrollTop=0;
    document.body.scrollTop = 0;
}