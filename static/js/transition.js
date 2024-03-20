document.addEventListener('DOMContentLoaded', function() {
    // First navbar
    const navbar = document.querySelector('.navbar-first');

    const body = document.querySelector('body');

    // Button
    const accueilButton = document.getElementById('accueilButton');
    const monPortfolio = document.getElementById('monPortfolio');
    const aPropos = document.getElementById('aPropos');
    const contactButton = document.getElementById("contactButton");
    const RetourFirstNavbar = document.querySelectorAll("#backToNavbar");


    // Div
    const accueilDiv = document.getElementById("Accueil");
    const portfolioDiv = document.getElementById("Mon-Portfolio");
    const aProposDiv = document.getElementById("A-Propos");
    const contacterDiv = document.getElementById("Contacter");

    //Portfolio-Div
    const UnivPortfolioDiv = document.getElementById('div-Portfolio-Universitaire');
    const PersoPortfolioDiv = document.querySelector('div-Portfolio-Personnel');

    // Cursor
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    // Button Portfolio
    const PortfolioUniv = document.getElementById('Portfolio-Universitaire');
    const PortfolioPerso = document.querySelector('Portfolio-Personnel');


    accueilButton.addEventListener('click', function(e) {
        e.preventDefault();
        body.style.backgroundColor = 'white';
        navbar.classList.add('slide-left');
        navbar.style.left = '-100%';
        navbar.classList.remove('slide-back');
        accueilDiv.style.display = 'flex';
        body.style.overflowY = 'hidden';
        setTimeout(function() {
            navbar.style.display = 'flex';
            cursorDot.style.backgroundColor = 'black';
            cursorOutline.style.border = "2px solid rgba(87, 87, 87, 0.5)";
            portfolioDiv.style.zIndex = "-1";
            aProposDiv.style.zIndex = '-1';
            contacterDiv.style.zIndex = '-1';
            accueilDiv.style.zIndex = '1';
        }, 500);
        
    });

    monPortfolio.addEventListener('click', function(e) {
        e.preventDefault();
        body.style.backgroundColor = 'white';
        navbar.classList.add('slide-left');
        navbar.style.left = '100%';
        navbar.classList.remove('slide-back');
        portfolioDiv.style.display = 'flex';
        setTimeout(function() {
            navbar.style.display = 'flex';
            cursorDot.style.backgroundColor = 'black';
            cursorOutline.style.border = "2px solid rgba(87, 87, 87, 0.5)";
            accueilDiv.style.zIndex = '-1';
            aProposDiv.style.zIndex = '-1';
            contacterDiv.style.zIndex = '-1';
            portfolioDiv.style.zIndex = '1';
        }, 500);
    });

    aPropos.addEventListener('click', function(e) {
        e.preventDefault();
        body.style.backgroundColor = 'white';
        navbar.classList.add('slide-left');
        navbar.style.left = '100%';
        navbar.classList.remove('slide-back');
        aProposDiv.style.display = 'flex';
        body.style.overflowY = 'hidden';
        setTimeout(function() {
            navbar.style.display = 'flex';
            cursorDot.style.backgroundColor = 'black';
            cursorOutline.style.border = "2px solid rgba(87, 87, 87, 0.5)";
            accueilDiv.style.zIndex = '-1';
            portfolioDiv.style.zIndex = '-1';
            aProposDiv.style.zIndex = '1';
            contacterDiv.style.zIndex = '-1';
        }, 500);
    });

    contactButton.addEventListener('click', function(e) {
        e.preventDefault();
        body.style.backgroundColor = 'white';
        navbar.classList.add('slide-left');
        navbar.style.left = '100%';
        navbar.classList.remove('slide-back');
        contacterDiv.style.display = 'flex';
        body.style.overflowY = 'hidden';
        setTimeout(function() {
            navbar.style.display = 'flex';
            cursorDot.style.backgroundColor = 'black';
            cursorOutline.style.border = "2px solid rgba(87, 87, 87, 0.5)";
            accueilDiv.style.zIndex = '-1';
            portfolioDiv.style.zIndex = '-1';
            aProposDiv.style.zIndex = '-1';
            contacterDiv.style.zIndex = '1';
        }, 500);
    });

    RetourFirstNavbar.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            navbar.classList.add('slide-back');
            navbar.style.left = '0%';
            navbar.classList.remove('slide-left');
            body.style.backgroundColor = 'black';
            accueilDiv.style.zIndex = '-1';
            portfolioDiv.style.zIndex = '-1';
            aProposDiv.style.zIndex = '-1';
            contacterDiv.style.zIndex = '-1';
            setTimeout(function(){
                cursorDot.style.backgroundColor = 'white';
                cursorOutline.style.border = "2px solid rgba(210, 210, 210, 0.5)";
                navbar.style.display = 'flex';
                accueilDiv.style.display = 'none';
                portfolioDiv.style.display = 'none';
                aProposDiv.style.display = 'none';
                contacterDiv.style.display = 'none';
                body.style.overflowY = 'visible';
            }, 500); 
        });
    }); 
});
