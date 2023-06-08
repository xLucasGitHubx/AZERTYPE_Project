function choisirPhrasesOuMots(){
    let choix = prompt("mots ou phrases?")
    while( choix !== "mots" && choix !== "phrases"){
        choix = prompt("mots ou phrases?")   
    }
    return choix
}
function lancerBoucleDeJeu(listePropositions){
    let score = 0
    for(let i = 0;  i<listePropositions.length; i++){
            if (listePropositions[i]=== prompt("ecrire la chose suivante: " + listePropositions[i])){
                score++
            }
        }
    return score
}
function afficherResultat(nombreTotalM, score){
    console.log("vous avez un score de "+ score + " réponse correct sur "+ nombreTotalM)
}

function lancerJeu(){
         let choix = choisirPhrasesOuMots()
         let score = 0
         let nombreTotalM = 0
         if (choix=== "mots"){
            score =lancerBoucleDeJeu(listeMots)
            nombreTotalM = listeMots.length
         }
         else{
            score =lancerBoucleDeJeu(listePhrases)
            nombreTotalM = listePhrases.length
         }
         afficherResultat(nombreTotalM, score)
}
