let info = [
    {
        texto: "primero",
        valor: 1
    },

    {
        texto:"segundo",
        valor:2
    },

    {
        texto:"tercero",
        valor:3
    },

    {
        texto: "cuarto",
        valor:4
    },

    {
        texto:"quinto",
        valor:5
    }
]


let select = document.getElementById("miSelect");

agregar();


function agregar () {
    // let opcion = document.createElement("option");
    // let valor= info;
    // opcion.text= valor.texto;
    // opcion.value= valor[].valor;

    // select.appendChild(opcion);

    for (let i = 0; i <info.length; i++) {
        console.log(info[i].valor + " "+ info[i].texto)

        let opcion = document.createElement("option");
        let valor= info;
        opcion.text= valor[i].texto;
        opcion.value= valor[i].valor;
    
        select.appendChild(opcion);
    };

   

   
}



