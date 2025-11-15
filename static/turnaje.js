const buttons = document.querySelectorAll('.tournament-filter button');
const cards = document.querySelectorAll('.tournament-card');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {

        document.querySelector('.tournament-filter .active')?.classList.remove('active');
        btn.classList.add('active');

        const game = btn.getAttribute('data-game');

        cards.forEach(card => {
            if (game === "all" || card.dataset.game === game) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });
});


// ------- Scroll nahoru z footer --------
document.getElementById("scrollUP").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});