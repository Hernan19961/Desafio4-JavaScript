const cantidad_habitaciones = document.getElementById("cantidad_habitaciones");
const desde = document.getElementById("desde");
const hasta = document.getElementById("hasta");
const buscar = document.getElementById("buscar");
const total = document.getElementById("total")
const main = document.getElementById("main");
const reiniciar = document.getElementById("reiniciar")
let llenado = true;
let html = "";
let contador = 0;
let total_min = null;
let total_max = null;
let htmlFiltro = "";
let totalHabitaciones = null;

const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar",
    src:
      "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta oyendo el oceano",
    src:
      "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti lo que necesitas",
    src:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada ",
    src:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 5,
    m: 250
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src:
      "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 4,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa  ",
    src:
      "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 3,
    m: 500
  }
];





//funcion principal
function funcionPrincipal() {
  if (llenado) {
    for (let casa of propiedadesJSON) {
      html += `
      <div class="card" style="width: 18rem;">
      <img src=${casa.src} class="card-img-top" style="height: 10rem" alt="imagen casa ${casa + 1}">
      <div class="card-body">
          <h5 class="card-title">${casa.name}</h5>
          <p class="card-text">Pieza: ${casa.rooms} Metro: ${casa.m}</p>
          <p class="card-text">${casa.description}</p>
          <button>Ver mas</button>
        
      </div>
  </div>`
    };
    main.innerHTML = html;
    total.innerHTML = "Total: " + propiedadesJSON.length;
    llenado = false;

  } else {
    main.innerHTML = html;
    total.innerHTML = "Total: " + propiedadesJSON.length;
  }

}

funcionPrincipal();

function recorrer_arreglo() {
  for (let casa of propiedadesJSON) {
    if ((total_min <= (casa.m) <= total_max) && (totalHabitaciones === (casa.rooms))) {
      htmlFiltro += `
      <div class="card" style="width: 18rem;">
                <img src=${casa.src} class="card-img-top" style="height: 10rem" alt="imagen casa ${casa + 1}">
                <div class="card-body">
                    <h5 class="card-title">${casa.name}</h5>
                    <p class="card-text">Piezas: ${casa.rooms} Metros: ${casa.m}</p>
                    <p class="card-text">${casa.description}</p>
                    <button>Ver mas</button>
                </div>
            </div>
            `
      contador++;
      console.log(typeof casa.m);

    }
  }
};

cantidad_habitaciones.addEventListener("change", (event) => {
  totalHabitaciones = Number(event.target.value);
});

desde.addEventListener("change", (event) => {
  total_min = Number(event.target.value);
});

hasta.addEventListener("change", (event) => {
  total_max = Number(event.target.value);
});


function mayor_y_menor(mayor, menor) {
  if (mayor < menor) {
    let nuevo_mayor = menor;
    let numero_menor = mayor;
    return nuevo_mayor, numero_menor;
  }
};

buscar.addEventListener("click", ()=>{
  if(cantidad_habitaciones==null || total_max==null || total_min==null){
    alert("Faltan Campos requeridos")
    return 0;
  } else if(cantidad_habitaciones == 0 || total_max <= 0 || total_min <= 0){
    alert("Numeros invalidos")
  } else{
    mayor_y_menor(total_max,total_min);
    recorrer_arreglo();
    main.innerHTML=htmlFiltro;
    totalHabitaciones.innerHTML="Total: "+ contador;
    total.innerHTML= "Total: " + contador;

  }
  htmlFiltro="";
  contador=0;

});






//reset

var reset = document.getElementById('reiniciar');

reset.addEventListener('click', function () {
  const cantidad_habitaciones = document.getElementById('cantidad_habitaciones');
  const desde = document.getElementById('desde');
  const hasta = document.getElementById('hasta');


  cantidad_habitaciones.value = '';
  desde.value = '';
  hasta.value = '';

  location.reload();


});














