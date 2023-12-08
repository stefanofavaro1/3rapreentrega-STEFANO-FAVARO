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


