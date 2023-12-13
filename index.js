document.addEventListener("DOMContentLoaded", function () {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  // Función para agregar elementos al carrito
  window.agregarAlCarrito = function (nombre, precio) {
      carrito.push({ nombre, precio });
      localStorage.setItem('carrito', JSON.stringify(carrito));
      Swal.fire({
          icon: 'success',
          title: 'Producto agregado al carrito',
          showConfirmButton: false,
          timer: 1500
      });
      mostrarCarrito(); // Actualiza la vista del carrito
  }

  const carritoIcono = document.getElementById("carrito");
  carritoIcono.id = "carrito";
  carritoIcono.textContent = "🛒 Carrito";
  document.body.appendChild(carritoIcono);

  const carritoContenido = document.createElement("div");
  carritoContenido.id = "carrito-content";
  document.body.appendChild(carritoContenido);

  carritoIcono.addEventListener("click", () => {
      carritoContenido.style.display = carritoContenido.style.display === "block" ? "none" : "block";
  });

  // Función para mostrar el carrito
  function mostrarCarrito() {
      let carritoContenido = document.getElementById("carrito-content");

      carritoContenido.innerHTML = '';
      carrito.forEach((producto, index) => {
          let li = document.createElement('li');
          li.textContent = `${producto.nombre} - $${producto.precio}`;

          // Botón para borrar el producto del carrito
          let botonBorrar = document.createElement('button');
          botonBorrar.textContent = 'Borrar';
          botonBorrar.addEventListener('click', () => {
              borrarProducto(index);
          });
          li.appendChild(botonBorrar);

          carritoContenido.appendChild(li);
      });
  }

  // Función para borrar un producto del carrito
  function borrarProducto(index) {
      carrito.splice(index, 1);
      localStorage.setItem('carrito', JSON.stringify(carrito));
      mostrarCarrito(); // Actualiza la vista del carrito
  }

  // Mostrar el carrito al cargar la página
  mostrarCarrito();
});

function Producto(titulo, color, precio) {

  this.titulo = titulo;
  this.color = color;
  this.precio = precio;

}

/** ARRAY DE OBJETOS **/
const productos = [
  { nombre: "Fuente de poder 750W", precio: 44900 },
  { nombre: "Procesador ryzen 5 5600", precio: 122200 },
  { nombre: "Gabinete gamer", precio:  90000 },
  { nombre: "Monitor Samsung T350", precio:  100000 },
];

localStorage.setItem("productos", JSON.stringify(productos));

const productosEnLS = JSON.parse(localStorage.getItem("productos"));

const baseDeDatos = [
  { id: "Fuente de poder 750W", nombre: "Fuente de pdoer 750W", precio: 44900  },
  { id: "Procesador ryzen 5 5600", nombre: "Procesador ryzen 5 5600", precio: 122200 },
  { id: "Gabinete gamer", nombre: "Gabinete gamer", precio: 90000 },
  { id: "Monitor Samsung T350", nombre: "Monitor Samsung T350", precio: 100000 }
];


const pedirProductos = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(baseDeDatos);
      }, 2000);
  })
}

let producto = [];

const lista = document.querySelector("#lista-productos");

function mostrarProductos(array) {

  array.forEach(item => {
      const li = document.createElement("li");
      li.id = item.id;
      li.textContent = `${item.nombre} - ${item.precio}`

      lista.append(li);
  });

}

const eventoFuturo = (res) => {
       return new Promise ((resolve, reject) => {
           setTimeout(() => {
               res === true ? resolve("Promesa resuelta") : reject("Promesa rechazada");
           }, 2000);
       })
   }
  
   const valor = true;
  
   eventoFuturo(valor)
       .then((respuesta) => {
           console.log(respuesta)
       })
       .catch((respuesta) => {
           console.log(respuesta)
     })
       .finally(() => {
           console.log("Finalizó el proceso");
       })

      fetch('https://criptoya.com/api/dolar') 
      .then((response) => response.json())
      .then(({blue, ccl, mep, oficial}) => {
        
           console.log(blue)
           console.log(ccl)
           console.log(mep)
           console.log(oficial)
        })
        