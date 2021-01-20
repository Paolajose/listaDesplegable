 
let seleccion = document.getElementById("selector")

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

                       name = valor[i].name
                       capital=valor[i].capital
                       
                      
                         
                    

                     mostrar()

                     function mostrar(){
                      let indice = seleccion.selectedIndex
                      if (indice === 1) return;

                      

                     }

                    

                  };

                   alert("seleccionaste " + name + " " + capital)


                    });

             
 };
    

