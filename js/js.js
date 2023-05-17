function recomendar(genero) {
    let edad=document.getElementById('textoEdad').value;
    let recomendacion=document.getElementById ('recomendador');
    let img = document.getElementById ('imgPeli') 

    switch(genero) {
        case 'drama': 
         if (edad < 13) {
            recomendacion.textContent = "Pepa Pig Drama";
         } else {
            if (edad < 16) {
                recomendacion.textContent = "Harrypotter Drama";
            } else {
                recomendacion.textContent = "Volver al Futuro Drama";
            }
         }
         break;
         case 'comedia': 
         if (edad < 13) {
            recomendacion.textContent = "Pepa Pig Comedia";
         } else {
            if (edad < 16) {
                recomendacion.textContent = "Harrypotter Comedia";
            } else {
                recomendacion.textContent = "Volver al Futuro Comedia";
            }
         }
         break;
         case 'musical': 
         if (edad < 13) {
            recomendacion.textContent = "Pepa Pig musical";
         } else {
            if (edad < 16) {
                recomendacion.textContent = "Harrypotter musical";
            } else {
                recomendacion.textContent = "Volver al Futuro musical";
            }
         }
         break;
         case 'crimen': 
         if (edad < 13) {
            recomendacion.textContent = "Pepa Pig crimen";
         } else {
            if (edad < 16) {
                recomendacion.textContent = "Harrypotter crimen";
            } else {
                recomendacion.textContent = "Volver al Futuro crimen";
            }
         }
         break;
    }
}
