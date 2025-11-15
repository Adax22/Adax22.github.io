// ----- Vyhledávač -------
function searchArticles() {
    const searchValue = document.querySelector(".search-box input").value.toLowerCase();
    const articles = document.querySelectorAll(".article");

    articles.forEach(article => {
        const title = article.querySelector("h3").innerText.toLowerCase();

        if (title.includes(searchValue)) {
            article.style.display = "flex";
        } else {
            article.style.display = "none";
        }
    });
}

// Tlačítko
document.querySelector(".search-box button").addEventListener("click", searchArticles);

// Enter
document.querySelector(".search-box input").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();  // zabrání reloadu stránky
        searchArticles();
    }
});


// ------- Scroll nahoru z footer --------
document.getElementById("scrollUP").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});