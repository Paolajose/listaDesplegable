 
let seleccion = document.getElementById("selector")
let lista= document.getElementById("lista")


elegir();


function elegir(){

  fetch("https://restcountries.eu/rest/v2/all?fields=name;capital;currencies",{
  })
        
    .then( function(response){
        if   (response.ok){
          return response.json()
        }else {
         throw "error en la llamada ajax"
        }
    })

    .then (function(texto) {
      console.log(texto)
                  
        for (let i = 0; i <=texto.length - 1; i ++){
          console.log(texto[i].name)
          let opcion = document.createElement("option");
          let valor= texto;
          opcion.text= valor[i].name;
          opcion.value= valor[i].capital;
          seleccion.appendChild(opcion);
          text = valor[i].name;
          value=valor[i].capital;    
        };

        function opcionCambiada(){
            
            mostrar();
           
        };

        seleccion.addEventListener("change" , opcionCambiada );
        
        function mostrar(){
            let indice = seleccion.selectedIndex;
            let opcionSeleccionada= seleccion.options[indice];
            lista.innerHTML= ("Pais :" + " " + opcionSeleccionada.text  + " " + "Capital : " + opcionSeleccionada.value);
            
           

        }
          
                
    });

};

             
 

    

