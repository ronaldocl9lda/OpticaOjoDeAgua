let listaCartas = document.querySelector("#cartas");
const carrito = document.querySelector("#carrito");
let cartasCarrito = [];
let id;

cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregas un curso presionando "Agregar Carrito"
    listaCartas.addEventListener("click", agregarProducto);
    carrito.addEventListener("click", eliminarProducto);

    //Eliminar cursos del carrito
    //carrito.addEventListener("click", eliminarCurso);

    //Muestra los cursos de Local Storage
    //document.addEventListener("DOMContentLoaded", () => {
    //    articulosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

    //    carritoHTML();
    //});

    //Vaciar el carrito
    //vaciarCarritoBtn.addEventListener("click", () => {
    //    articulosCarrito = []; //Resetear el arreglo
    //    limpiarHTML(); // Eliminar todo el HTML
    //});
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
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        carritoHTML(); //Iterar sobre el carrito y mostrar su HTML
    }
}

/*var cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
    card.addEventListener("click", function() {

        const infoProducto = {
            imagen: card.querySelector(".card img").getAttribute("src"),
            titulo: card.querySelector(".card-title").textContent,
            precio: card.querySelector(".card-text").textContent,
            id: card.querySelector("a").getAttribute("data-id"),
            cantidad: 1
        }

            //Revisa si un elemento ya existe en el carrito
            const existe = cartasCarrito.some(carta => carta.id === infoProducto.id);
            
            if(existe) {
                //Actualizamos la cantidad
                const cartas = cartasCarrito.map( carta => {
                    if (carta.id === infoProducto.id) {
                        carta.cantidad++;
                        return carta; //Retorna el objeto actualizado
                    }
                    else {
                        return carta; //Retorna los objetos que no son duplicados
                    }
                });
                cartasCarrito = [...cartas];
            }
            else {
                //Agrega elementos al arreglo de carrito
                cartasCarrito = [...cartasCarrito, infoProducto];
                
            }
            console.log(cartasCarrito);
    });
});*/


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

        //carritoHTML();
}