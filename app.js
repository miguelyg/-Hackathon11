const lista = document.getElementById('listaCursos');
const carrito = document.getElementById('contadorCarrito');
const tabla = document.getElementById('tabla1');
const posicion = document.getElementById('posicion');
const boton = document.getElementById('btn');


boton.addEventListener('click',(e) => {
     var vari = e.target.parentElement.nextElementSibling;
    vertabla(vari);
});

lista.addEventListener('click',(e) => {
    
    if (e.target.classList.contains('curso-boton')){
        const itemAgregar = {
            title:
            e.target.parentElement.parentElement.firstElementChild.firstElementChild.textContent,
        };

        const obj = {
            imagen: e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.getAttribute('src'),
            curso:e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent,
            precio:e.target.previousElementSibling.lastElementChild.textContent,
        }
        console.log(e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.getAttribute('src'));


        agregarCarrito(itemAgregar);
        agregarTabla(tabla,obj);
    }
});



let arregloItems = [];
function agregarCarrito(item){
    arregloItems.push(item);
    carrito.innerText = arregloItems.length;
}

let arregloFilas = [];
function agregarTabla(tabla,obj){
    arregloFilas.push(obj);
    console.log(arregloFilas);
    agregarFila(tabla,arregloFilas);
}

function vertabla(tablita){
    tablita.classList.toggle('visible');
}

function agregarFila(tab,arr1){
    var fila = tab.insertRow(-1);

    var imag = fila.insertCell(0);
    var nom = fila.insertCell(1);
    var prec = fila.insertCell(2);

    const arreglo = arr1.forEach(curso => {
        imag.innerHTML = "<img src='"+ curso.imagen +"' alt=''>";;
        nom.innerHTML = curso.curso;
        prec.innerHTML = curso.precio;
    });

    
}



