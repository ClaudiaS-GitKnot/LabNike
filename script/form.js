document.addEventListener("DOMContentLoaded",function(){

/* Controllo evento submit dati di consegna */
    const form=document.querySelector(".shipment"); //il form sui dati di consegna
    const close=document.querySelector("#container"); //il box che contiene il form suid ati di consegna
    

//variabili inputs pagamento
    let name=document.querySelector("#name");
    let surname=document.querySelector("#surname");
    let address=document.querySelector("#address");
    let email=document.querySelector("#email");
    let number=document.querySelector("#number");


//evento submit dati consegna 
    form.addEventListener("submit",function(e){

        e.preventDefault();

        //controllo nome
        if(requiredInput(name, "campo nome")){
            name.nextElementSibling.innerHTML="";
            name.classList.remove("redBorder");
        }
        else{
            name.classList.add("redBorder");
        }

        //controllo cognome
        if(requiredInput(surname, "campo cognome")){
            surname.nextElementSibling.innerHTML="";
            surname.classList.remove("redBorder");
        }
        else{
            surname.classList.add("redBorder");
        }

        //controllo indirizzo
        if(requiredInput(address, "campo indirizzo")){

            if(addressCheck(address.value)){
                address.nextElementSibling.innerHTML="";
                address.classList.remove("redBorder");
            }
            else{
                address.nextElementSibling.innerHTML=`La via non è corretta.`;
                address.classList.add("redBorder");
            }
        }
        else{
            address.classList.add("redBorder");
        }

        //controllo e-mail
        if(requiredInput(email, "campo e-mail")){

            if(mailCheck(email.value)){
                email.nextElementSibling.innerHTML="";
                email.classList.remove("redBorder");
            }
            else{
                email.nextElementSibling.innerHTML=`La mail non è corretta.`;
                email.classList.add("redBorder");
            }
        }
        else{
            email.classList.add("redBorder");
        }

        //controllo numero
        if(requiredInput(number, "campo numero")){

            if(numberCheck(number.value)){
                number.nextElementSibling.innerHTML="";
                number.classList.remove("redBorder");        
            }
            else{
                number.nextElementSibling.innerHTML=`Il numero non è corretto`;
                number.classList.add("redBorder");
            }
        }
        else{
            number.classList.add("redBorder");
        }

    /* Controllo presenza classe di errore */
        let redBorders=document.querySelectorAll(".redBorder");
        // console.log(redBorders);

        if(redBorders.length==0){
            
            // this.submit();
            close.style.display="none";

        }

    }) //submit dati


/* Controllo evento submit pagamento */

    let paymentForm=document.querySelector("#payment > form");
    // console.log(paymentForm);
    let finalMessage=document.querySelector("#finalMessage");
    // console.log(finalMessage);

//variabili inputs pagamento
    let cardNumber=document.querySelector("#cardNumber");
    let cardExpire=document.querySelector("#cardExpire");
    let cardCvv=document.querySelector("#cvv");  
    
    
    paymentForm.addEventListener("submit",function(e){
    
        e.preventDefault();

        //controllo numero carta    
        if(cardCheck(cardNumber.value)){
            cardNumber.nextElementSibling.innerHTML="";
            cardNumber.classList.remove("redBorder");
        }
        else{
            cardNumber.nextElementSibling.innerHTML=`Inserisci il numero di carta valido.`;
            cardNumber.classList.add("redBorder");
        }

        //controllo data scadenza carta
        if(expireCheck(cardExpire.value)){
            cardExpire.nextElementSibling.innerHTML="";
            cardExpire.classList.remove("redBorder");
        }
        else{
            cardExpire.nextElementSibling.innerHTML=`Inserisci una scadenza valida.`;
            cardExpire.classList.add("redBorder");
        }

        //controllo cvv carta
        if(cvvCheck(cardCvv.value)){
            cardCvv.nextElementSibling.innerHTML="";
            cardCvv.classList.remove("redBorder");
        }
        else{
            cardCvv.nextElementSibling.innerHTML=`Inserisci un CVV valido.`;
            cardCvv.classList.add("redBorder");
        }


        let redBorders=document.querySelectorAll(".redBorder");

        if(redBorders.length==0){
            
            // this.submit();
            paymentForm.style.display="none";
            finalMessage.style.display="block";

        }   
    
    })

})//DOMContentLoaded


//funzione per campo obbligatorio
function requiredInput(inputText, requiredInput){ 

    if(inputText.value.trim().length==0){

        inputText.nextElementSibling.innerHTML=` Il ` + requiredInput + ` è obbligatorio`;
        return false;
    }
    else{
        
        return true;
    }
}

//funzioni regex
function addressCheck(address){
    const regex=/^(Via|via|Piazza|piazza|Largo|largo)[a-zA-Z\s,'-.#]{3,}(?:,|\s)(\d{1,4})$/
    return regex.test(address);
}

function mailCheck(mail){    
    const regex=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/    
    return regex.test(mail);
}

function numberCheck(number){
    const regex=/^(02|03|04|05|06|07|08|09)\d{7,8}|3\d{8,9}$/
    return regex.test(number);
}

function cardCheck(number){
    const regex=/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}(?:[0-9]{3})?|[3][47][0-9]{13}(?:[0-9]{3})?)(?:[0-9]{3})?$/
    return regex.test(number);
}

function expireCheck(date){
    const regex=/^(0[1-9]|1[0-2])\/\d{2}$/
    return regex.test(date);
}

function cvvCheck(cvv){
    const regex=/^[0-9]{3}$/
    return regex.test(cvv);
}