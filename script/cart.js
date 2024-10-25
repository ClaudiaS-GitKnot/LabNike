document.addEventListener("DOMContentLoaded",function(){

    let cestIcon=document.querySelectorAll(".remove"); //le icone cestino
    let shoes=document.querySelectorAll(".cartItem"); //gli items
    let deletedShoePrize=document.querySelectorAll(".cartItem h1 > span"); //il prezzo dell'item eliminato
    let shoePrizeWithPoint; //il prezzo della scarpa col punto
    let initialSubtotWithComma=document.querySelector(".subTot");  //subtotale iniziale col punto
    let toInjectPrizeForSubtot;  //il prezzo da innestare nel subtotale
    let prizeTotal=document.querySelector(".tot");  //il prezzo totale iniziale

    let cartTitle=document.querySelector("main > section > h1");  //il titolo del carrello
    let array=Array.from(shoes);  //trasformo le scarpe in array per contare gli elementi eliminati
    

    for(let i=0;i<cestIcon.length;i++){ //ciclo delle icone cestino
        cestIcon[i].addEventListener("click",function(){ //click sul un cestino
            shoes[i].classList.add("disappeared"); //aggiungi all'elemento clickato la classe "disappeared"

            shoePrizeWithPoint=deletedShoePrize[i].innerHTML.replace(",","."); //sostituisco la virgola col punto al prezzo della scarpa eliminata

            toInjectPrizeForSubtot=calc(initialSubtotWithComma.innerHTML.replace(",","."), shoePrizeWithPoint).replace(".",",");  //calcolo il prezzo da iniettare nel subtotale con la funzione parametrica calc e sostituisco punti e virgole
            
            initialSubtotWithComma.innerHTML = toInjectPrizeForSubtot;  //inietto il subtotale nel suo tag
            
            prizeTotal.innerHTML=toInjectPrizeForSubtot; //inietto il subtotale anche nel totale (p.s. non considera una eventuale spesa di spedizione)

            array.splice(array[i],1);  //stabilisco di quanto accorciare l'array delle scarpe ad ogni ciclo

            if(array==0){  //se l'array arriva ad un length 0 allora cambio stile al titolo del carrello
                cartTitle.innerText=`Nel tuo carrello non sono presenti articoli`;
            }            
        })        
    }
})//DOMContentLoaded

function calc(a, b){  //funzione atta a sottrarre il costo degli items al subtotale
    let substraction=a - b;
    return substraction.toFixed(2);
}
