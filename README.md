**Site en ligne**
# [https://vatsu-tech.github.io/tp.github.io/](https://vatsu-tech.github.io/tp.github.io/)
## TP : Opérations récursives (site statique)

Ce petit projet est une page web qui montreles opérations récursives simples en JavaScript : somme, minimum, maximum, recherche et affichage d'une liste. L'application permet de saisir une liste (nombres ou textes) et d'exécuter ces opérations via des fonctions récursives implémentées dans `app.js`.

**But** : repondre a la problematique du tp nous donnee

**Langages et outils** :
- **HTML** : `index.html`
- **JavaScript** : `app.js`
- **Css** : `il y a pas`

**Fonctionnalités principales** :
- **Saisie d'une liste** : saisie CSV (ex : `4,7,2,9,1`).
- **Type de valeurs** : choix entre `Nombres` et `Textes`.
- **Actions disponibles** : `Somme`, `Minimum`, `Maximum`, `Recherche`, `Affichage`.
- **Recherche** : saisie d'une valeur à rechercher dans la liste.


Utilisation
- Saisir la liste dans le champ `Entrez une liste` (séparée par des virgules).
- Choisir le type (`Nombres` ou `Textes`).
- Choisir l'action désirée.
- Pour la recherche, entrer la `Valeur à rechercher` puis cliquer sur `Exécuter`.
- Le résultat s'affiche sous `Résultat :`.
 

Exemples rapides
- Liste : `4,7,2,9,1`, action `Somme` → affiche `Somme = 23`.
- Liste : `a,b,c`, action `Affichage` → affiche `Affichage → a, b, c`.
- Recherche d'un nombre : si `Nombres` sélectionné et valeur `7`, la recherche retournera `Valeur trouvée` si présent.

Fichiers clés : `index.html`, `app.js`.
