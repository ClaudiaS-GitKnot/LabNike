document.addEventListener("DOMContentLoaded", function(){

    /* Controllo mouseover sulle immagini */

    let overImage=document.querySelectorAll(".choiceImage"); //tutte le immagini in anteprima
    let imagePlace=document.querySelector("#selectedPhoto > div"); //il div dove inietto immagine o video

    for(let i=0;i<overImage.length;i++){

        let liElement=overImage[i].getAttribute("src");

        overImage[i].addEventListener("mouseover", function(){

            if(liElement=="styles/images/Shoe1/video.mp4"){

                imagePlace.innerHTML="<video src='styles/images/Shoe1/video.mp4' muted autoplay></video>";

            }
            else{
                
                imagePlace.innerHTML="<img src="+liElement+">";

            }
        })

    }  //Fine controllo mouseover sulle immagini

    
    /* Controllo selezione della taglia */

    let sizes=document.querySelectorAll(".size");
    let selectedItem=undefined;
    let sizeText;
    

    for(let i=0;i<sizes.length;i++){

        sizes[i].addEventListener("click",function(){

            /* Vedi "controllo evento click" */
            spanAlert.style.display="none";
            spanAlert.classList.remove("alert");
            sizeAlert.classList.remove("alert");
            borderAlert.classList.remove("alertBorder");
            // console.log(this);


            if(selectedItem==undefined){

                selectedItem=this;
                selectedItem.classList.add("selected");
                // console.log("if", selectedItem); // controllo se entra nell'if
                sizeText=selectedItem.innerHTML;
                // console.log(sizeText);
            }
            else{
                
                selectedItem.classList.remove("selected");
                this.classList.add("selected");
                selectedItem=this;
                
                console.log("else"); //controllo se entra nell'else
                // console.log(this);
            }           
            
            sizeText=selectedItem.innerHTML;
            // console.log(selectedItem.innerHTML); il testo dell'elemento selezionato
            
        })
        
    } //Fine controllo selezione della taglia
        
        
        
    /* Controllo evento click su "Aggiungi al carrello" */
        
        let cartAdd=document.querySelector("#choice div:nth-of-type(5) button"); //il button "Aggiungi al carrello"
        let spanAlert=document.querySelector("#choice div:nth-of-type(4)"); //lo span "seleziona la misura"
        let sizeAlert=document.querySelector("#choice div:nth-of-type(1)"); //il testo "seleziona la taglia/misura"
        let borderAlert=document.querySelector("#choice div:nth-of-type(3)"); //il bordo del contenitore delle taglie
        let popUp=document.querySelector("#cartPopup"); 
        let popupSize=document.querySelector("#cartPopup section > div > ul span"); //il tag del popup dove inserire la taglia scelta
        let popupPrize=document.querySelector("#cartPopup section > div > ul li:last-child p"); //il tag del popup dove inserire il prezzo della scarpa scelra
        let itemPrize=document.querySelector("#choice > p:nth-of-type(2)"); //il prezzo della scarpa
        let closePopup=document.querySelector("#cartPopup > section > a"); //la croce di chiusura del popup
        
        cartAdd.addEventListener("click", function(){
            
            // console.log(selectedItem);
            
            if(selectedItem==undefined){ //aggiungo le classi errore
                
                spanAlert.style.display="block";
                spanAlert.classList.add("alert");
                sizeAlert.classList.add("alert");
                borderAlert.classList.add("alertBorder");
                
            }
            else{   //tolgo le classi errore             
                
                popUp.style.display="block";
                // console.log(sizeText);
                popupSize.innerText=sizeText;
                
                closePopup.addEventListener("click", function(){ //evento chiusura popup
                    
                    popUp.style.display="none";                    
                    
                })
            }
            
            popupPrize.innerHTML=itemPrize.innerHTML;
            // console.log(popupPrize);       
            
        })        
})