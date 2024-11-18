const themes = ["blonde", "gatsby", "bunny", "guerriere", "masque", "pailette", "coquette", "rouge"];
const spinButton = document.getElementById('spin-button');
const resultDiv = document.getElementById('result');
const themeResult = document.getElementById('theme-result');

let userTheme = "";

spinButton.addEventListener("click", () => {
    // Tirage aléatoire d'un thème
    const randomIndex = Math.floor(Math.random() * themes.length);
    userTheme = themes[randomIndex];

    // Affichage du résultat pour l'utilisateur
    resultDiv.style.display = "block";
    themeResult.textContent = userTheme;

    // Envoi du résultat au backend (on verra ça dans l'étape suivante)
});
