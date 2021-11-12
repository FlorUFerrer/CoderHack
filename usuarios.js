//FILTRO BUSCADOR//
const d = document;

function searchFilters(input, selector) {

    d.addEventListener("keyup", (e) => {


        if (e.target.matches(input)) {

            if (e.key === "Escape") e.target.value = "";
            //Pasa por el contenido de cada ingreso y busca coincidencia, (convierte a minuscula)
            //Si la entrada por teclado ,si es true sacara la clase filter, 
            //de lo contrario lo dejara en pantalla.
            d.querySelectorAll(selector).forEach((el) =>
                el.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ?
                el.classList.remove("filter") :
                el.classList.add("filter")
            );
        }

    });

}



d.addEventListener("DOMContentLoaded", (e) => {
    searchFilters(".card-filter", ".card");
})


//ESTRUCTORA DEL CLIENTE
class Emprendedor {
    constructor(nombre, email, descripcion, categoria) {

        this.nombre = nombre;
        this.email = email;
        this.descripcion = descripcion;
        this.categoria = categoria;
    }
}

let emprendedores = [];
//EMPRENDEDORES 






const inputForm = document.getElementById('inputForm')
const inputRegistrar = document.getElementById('registrarEmprendedor')
const vistaEmprendimiento = document.getElementsByClassName('cardEmprendimientos');


inputRegistrar.addEventListener("click", function (e) {

    //TOMA DE DATOS DE ENTRADA
    e.preventDefault();

    const inputName = document.getElementById('nombreEmprendedor').value;
    const inputEmail = document.getElementById('correoEmprendedor').value;
    // const inputLogo = document.getElementById('logoEmprendedor').value;
    const inputReto = document.getElementById('retoEmprendedor').value;
    const inputCategoria = document.getElementById('categoriaEmprendedor').value;

    alert("Gracias!")
    let emprendedorNuevo = new Emprendedor(inputName, inputEmail, inputReto, inputCategoria);
    emprendedores.push(emprendedorNuevo);

    localStorage.setItem("ListaEmprendedores", JSON.stringify(emprendedores));



});

let emprendedoresCard = JSON.parse(localStorage.getItem("ListaEmprendedores"));

//emprendedoresCard.map (data => x{

let vista = ''
emprendedoresCard.forEach(function (emprendedor) {

    // console.log("Objeto",emprendedores)
    vista = $(`
      <div class="card  card-filter cardPosition" style="width: 18rem; margin:10px;">
       <img src= "images/frijolesAmarillos.png" class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text"> Categoria: ${emprendedor.categoria}</p>
            <p class="card-text"> Hola soy ${emprendedor.nombre}!</p>
                <p class="card-text"> Mi idea es:</p>
                <p class="card-text">${emprendedor.descripcion}</p>
            </div> `);

    $(".cardEmprendimiento").append(vista);
});


//console.log("emprendedorescard",emprendedoresCard)



/***TOMAR LOGO***/


// const imgSubir = document.getElementById('imgSubir');
// const logo = document.getElementById('logoEmprendedor');

// const CLOUDINARY_URL ='https://api.cloudinary.com/v1_1/duy48zc5k/image/upload';

// const CLOUDINARY_UPLOAD = 'eqtwemyp';

// logo.addEventListener('change', async(e)=>{
//  const file = e.target.files[0];
//  console.log(e);

//  const formData = new FormData();
//  formData.append('file',file);
//  formData.append('upload',CLOUDINARY_UPLOAD);

// const res = await axios.post(CLOUDINARY_URL,formData,{

//     headers:{
//         'Content-type': 'multipart/form-data'
//     }

// });

// console.log(res);


// });