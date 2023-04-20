//let listaCartas = document.querySelector("#cartas");
let listaCartas = document.querySelector("#cartas");
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
let cartasCarrito = [];
let id;

cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregas un curso presionando "Agregar Carrito"
    listaCartas.addEventListener("click", agregarProducto);
    carrito.addEventListener("click", eliminarProducto);

    document.addEventListener("DOMContentLoaded", () => {
        cartasCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

        agregarHTML();
    });

    //Este Boton funciona utilizando JQUERY
    /*$("#vaciar-carrito").click(function() {
        cartasCarrito = []; //Resetear el arreglo
        limpiarHTML(); // Eliminar todo el HTML
    });*/
    vaciarCarritoBtn.addEventListener("click", () => {
        cartasCarrito = []; //Resetear el arreglo
        limpiarHTML(); // Eliminar todo el HTML
        localStorage.clear();
    });
}

function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const cursoSelecionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSelecionado);
    }
}

//Eliminar un curso del carrito
function eliminarProducto(e) {
    console.log(e.target.classList);
    if (e.target.classList.contains("borrar-curso")){
        const cursoId = e.target.getAttribute("data-id");

        //Elimina del arreglo articulosCarrito
        cartasCarrito = cartasCarrito.filter(curso => curso.id !== cursoId);

        agregarHTML(); //Iterar sobre el carrito y mostrar su HTML
    }
}



function agregarProducto(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const productoSelecionado = e.target.parentElement.parentElement;
        leerDatosProductos(productoSelecionado);
    }
    console.log("Curso Agregado");
}


//Lee el contenido del HTML al que le dimos click y extra la información del curso
function leerDatosProductos(producto) {
    console.log(producto);

    //Crear un objeto con el contenido del curso actual
    const infoProducto = {
        imagen: producto.querySelector(".card img").getAttribute("src"),
        titulo: producto.querySelector(".card-title").textContent,
        precio: producto.querySelector(".card-text").textContent,
        id: producto.querySelector("a").getAttribute("data-id"),
        cantidad: 1
    }

        //Revisa si un elemento ya existe en el carrito
        const existe = cartasCarrito.some(producto => producto.id === infoProducto.id);
        
        if(existe) {
            //Actualizamos la cantidad
            const cartas = cartasCarrito.map( producto => {
                if (producto.id === infoProducto.id) {
                    producto.cantidad++;
                    return producto; //Retorna el objeto actualizado
                }
                else {
                    return producto; //Retorna los objetos que no son duplicados
                }
            });
            cartasCarrito = [...cartas];
        }
        else {
            //Agrega elementos al arreglo de carrito
            cartasCarrito = [...cartasCarrito, infoProducto];
            
        }
        console.log(cartasCarrito);

        agregarHTML();
}

function sincronizarStorage () {
    localStorage.setItem("carrito", JSON.stringify(cartasCarrito));
}

function agregarHTML() {
    limpiarHTML();

    cartasCarrito.forEach(carta =>{
        const { imagen, titulo, precio, id, cantidad  } = carta;
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>
            <img src="${imagen}" alt="" width="100">
        </td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
            <a href="#"  class="borrar-curso" data-id="${id}"> X </a>
        </td>
        `;

    //Agrega el HTML del carrito en el tbody
    contenedorCarrito.appendChild(row);
    });

    sincronizarStorage();
}

function limpiarHTML() {
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}