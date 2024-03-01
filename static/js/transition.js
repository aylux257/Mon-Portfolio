document.addEventListener('DOMContentLoaded', function() {
    // First navbar
    const navbar = document.querySelector('.navbar-first');

    // Button
    const accueilButton = document.getElementById('accueilButton');
    const monPortfolio = document.getElementById('monPortfolio');
    const aPropos = document.getElementById('aPropos');
    const contactButton = document.getElementById("contactButton");
    const RetourFirstNavbar = document.getElementById("backToNavbar");

    // Div
    const accueilDiv = document.getElementById("Accueil");

    // Cursor
    const cursor = document.querySelector('.cursor');

    accueilButton.addEventListener('click', function(e) {
        e.preventDefault();
        navbar.classList.add('slide-left');
        navbar.style.left = '-100%';
        navbar.classList.remove('slide-back');
        accueilDiv.style.display = 'flex';
        setTimeout(function() {
            navbar.style.display = 'flex';
            accueilDiv.style.zIndex = '1';
            cursor.style.borderColor = 'black';
        }, 500);
        
    });

    monPortfolio.addEventListener('click', function(e) {
        e.preventDefault();
        navbar.classList.add('slide-left');
        setTimeout(function() {
            cursor.style.borderColor = 'black';
            navbar.style.display = 'none';
            accueilDiv.style.display = 'block';
        }, 500);
    });

    aPropos.addEventListener('click', function(e) {
        e.preventDefault();
        navbar.classList.add('slide-left');
        setTimeout(function() {
            cursor.style.borderColor = 'black';
            navbar.style.display = 'none';
            accueilDiv.style.display = 'block';
        }, 500);
    });

    contactButton.addEventListener('click', function(e) {
        e.preventDefault();
        navbar.classList.add('slide-left');
        setTimeout(function() {
            cursor.style.borderColor = 'black';
            navbar.style.display = 'none';
            accueilDiv.style.display = 'block';
        }, 500);
    });

    RetourFirstNavbar.addEventListener('click', function(e) {
        e.preventDefault();
        navbar.classList.add('slide-back');
        navbar.style.left = '0%';
        navbar.classList.remove('slide-left');
        accueilDiv.style.zIndex = '-1';
        setTimeout(function(){
            cursor.style.borderColor = 'white';
            navbar.style.display = 'flex';
            accueilDiv.style.display = 'none';
        })
    })
});
