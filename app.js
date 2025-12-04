function lireListe() {
    let brut = document.getElementById("liste").value.trim();
    let type = document.getElementById("type").value;

    if (!brut) return [];

    let arr = brut.split(",").map(e => e.trim());

    if (type === "number") {
        let nums = arr.map(Number);
        if (nums.some(isNaN)) {
            alert("Veuillez entrer uniquement des nombres valides !");
            return [];
        }
        return nums;
    }

    return arr;
}

// -----------------------------------
// FONCTIONS RÉCURSIVES
// -----------------------------------

function sommeRec(tab, i = 0) {
    if (i >= tab.length) return 0;
    return tab[i] + sommeRec(tab, i + 1);
}

function minRec(tab, i = 0) {
    if (i === tab.length - 1) return tab[i];
    let min = minRec(tab, i + 1);
    return tab[i] < min ? tab[i] : min;
}

function maxRec(tab, i = 0) {
    if (i === tab.length - 1) return tab[i];
    let max = maxRec(tab, i + 1);
    return tab[i] > max ? tab[i] : max;
}

function rechercheRec(tab, val, i = 0) {
    if (i >= tab.length) return false;
    if (tab[i] == val) return true;
    return rechercheRec(tab, val, i + 1);
}

function affichageRec(tab, i = 0) {
    if (i >= tab.length) return "";
    return tab[i] + (i < tab.length - 1 ? ", " : "") + affichageRec(tab, i + 1);
}

// -----------------------------------
// FONCTION PRINCIPALE
// -----------------------------------

function executer() {
    let tab = lireListe();
    let act = document.getElementById("action").value;
    let res = document.getElementById("resultat");

    if (tab.length === 0) { 
        res.textContent = "Liste vide"; 
        return; 
    }

    switch (act) {
        case "somme":
            if (typeof tab[0] !== "number") { 
                res.textContent = "Choisissez 'Nombres'"; 
                return; 
            }
            res.textContent = "Somme = " + sommeRec(tab);
            break;

        case "min":
            if (typeof tab[0] !== "number") { 
                res.textContent = "Choisissez 'Nombres'"; 
                return; 
            }
            res.textContent = "Minimum = " + minRec(tab);
            break;

        case "max":
            if (typeof tab[0] !== "number") { 
                res.textContent = "Choisissez 'Nombres'"; 
                return; 
            }
            res.textContent = "Maximum = " + maxRec(tab);
            break;

        case "recherche":
            let val = document.getElementById("valeurRecherche").value;
            if (!val) { 
                res.textContent = "Veuillez entrer une valeur à rechercher !"; 
                return; 
            }

            if (typeof tab[0] === "number") val = Number(val);

            res.textContent = rechercheRec(tab, val)
                ? "Valeur trouvée"
                : "Valeur non trouvée";
            break;

        case "affichage":
            res.textContent = "Affichage → " + affichageRec(tab);
            break;
    }
}
