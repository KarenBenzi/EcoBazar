
//---------------------------------------------------------------------------------------------------------------------------------------------//
//Hola, este documento contiene todo el codigo javascript que hace funcionar a la página. Con un bloque rodeado de numerales (#) se encuentran las funciones separadas por página. Además, una linea de este mismo simbolo, separa por temática (dentro de la misma página) las funciones creadas (Por ejemplo cargar en el catalogo los elementos de una categoría u otra).
//Además se optó por integrar el código HTML de la barra de navegación y el footer desde javascript para editar una sola vez estos elementos.
//---------------------------------------------------------------------------------------------------------------------------------------------//



//CREO BARRA DE NAVEGACION ###################################################################################################################
document.getElementById("barraNavegacion").innerHTML = `
<nav class="navbar navbar-expand-lg bg-body-tertiary sticky shadow">
<div class="container">
  <a class="navbar-brand marca" href="#"> 
  <img src="img/Logo-gris.png" alt="" class="logo-nav w-25 d-none d-md-block">
  </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav m-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
      </li>
   
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle mx-lg-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item color-gris-oscuro" href="catalogo.html?categoria=indumentaria">Indumentaria</a></li>
          <li><a class="dropdown-item color-gris-oscuro" href="catalogo.html?categoria=accesorios">Accesorios</a></li>
          <li><a class="dropdown-item color-gris-oscuro" href="catalogo.html?categoria=electronica">Electrónica</a></li>
          <li><a class="dropdown-item color-gris-oscuro" href="catalogo.html?categoria=verTodo">Ver todo</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item color-gris-oscuro" href="contacto.html#pregunta2">¿Qué <b>NO </b>vendemos?</a></li>
        </ul>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contacto
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item color-gris-oscuro" href="contacto.html#pregunta3">¿Tu pedido no llegó?</a></li>
          <li><a class="dropdown-item color-gris-oscuro" href="contacto.html#pregunta4">Cambios y Devoluciones</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item color-gris-oscuro" href="contacto.html#visitanos">Visitá nuestras oficinas</a></li>

        </ul>
      </li>
    </ul>
  </div>
</div>
</nav>
`

//CREO FOOTER ################################################################################################################################

document.getElementById("footer").innerHTML = `
<footer>
<div class="row text-secondary py-5">
    <div class="text-center col-lg-4 col-md-12">
        <h1> <i class="bi bi-truck"></i></h1>
        <h3>Envíos Gratis </h3>
        <h5>A todo el país</h5>
    </div>

    <div class="text-center  d-none d-lg-block col-lg-4">
        <h1> <i class="bi bi-cash-coin"></i></h1>
        <h3>15% OFF</h3>
        <h5>En efectivo o transferencia</h5>
    </div>

    <div class="text-center  d-none d-lg-block col-lg-4">
        <h1> <i class="bi bi-lock"></i></h1>
        <h3>Cuidá tus datos</h3>
        <h5>Con nuestra compra protegida</h5>
    </div>
</div>
<div class="shadow">
<div class="row text-center py-5 bg-dark bg-gradient">
    <div class="col-md-12 col-lg-6 text-light">
        <p> <strong class="color-enfasis">Navegación</strong>
            <a href="index.html" class="text-decoration-none d-block link-secondary">Inicio</a>
            <a href="catalogo.html" class="text-decoration-none  d-block  link-secondary">Catálogo</a>
            <a href="contacto.html" class="text-decoration-none d-block  link-secondary">Contacto</a>
        </p>
    </div>


    <div class="col-md-12 col-lg-6 text-light">
        <p> <strong class="color-enfasis d-block">Redes sociales</strong>
            <a  href="http://www.instagram.com" target="_blank"  class="text-decoration-none link-secondary px-2"><i class="bi bi-instagram redes"></i></a>
            <a  href="http://www.facebook.com" target="_blank"  class="text-decoration-none link-secondary px-2"><i class="bi bi-facebook redes"></i></a>
            <a  href="http://www.whatsapp.com" target="_blank"  class="text-decoration-none link-secondary px-2"><i class="bi bi-whatsapp redes"></i></a>
            <a  href="http://www.twitter.com" target="_blank"  class="text-decoration-none link-secondary px-2"><i class="bi bi-twitter redes"></i>
            <div>  <a href="contacto.html#preguntasFrecuentes" class="text-decoration-none link-secondary px-2 "> FAQs</a></div>
        </p>
        </a>


    </div>
</div></div>


<div class="py-3 bg-secondary text-light text-center">
    <p> Copyright ©<i>Back to Basics</i> </p>
</div>
</footer>
`

// FETCH API GENERAL //
function fetchProducts() {
    return fetch('https://fakestoreapi.com/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error de red al cargar productos.');
            }
            return response.json();
        })
        .catch(error => {
            console.error(error);
        });
}

//#############################################################################################################################################
//##################################################### INICIO ################################################################################
//#############################################################################################################################################

const novedadesInicioGrid = document.getElementById('novedadesInicioGrid');
const novedadesInicioCarousel = document.getElementById('novedadesInicioCarousel');
function inicioNovedades() {
    fetchProducts()
        .then(productos => {
            const ultimosProductos = productos.slice(-4);
//Cargo los productos en el html (carousel) 
            novedadesInicioCarousel.innerHTML = `
  <div id="miCarousel" class="carousel carousel-dark slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
      <a href="producto.html?id=${ultimosProductos.id}" class="text-decoration-none">
      <div class="card mb-4 p-3 text-center mx-auto shadow" style="max-width: 50vw">
          <img src="${ultimosProductos[0].image}" class="card-img-top" alt="${ultimosProductos[0].title}">
          <div class="card-body d-flex flex-column">
              <hp class="card-title">${ultimosProductos[0].title}</hp>
              <h4 class="card-text flex-grow-1"><strong>$${ultimosProductos[0].price}</strong></h4>
              <div class="cuadrado-verde texto-pequeño">
                  <p><strong>3</strong> cuotas sin interés de <strong>$${(ultimosProductos[0].price * 0.3).toFixed(2)}</strong></p>
              </div>
          </div>
      </div>
  </a>    </div>
      <div class="carousel-item">
      <a href="producto.html?id=${ultimosProductos.id}" class="text-decoration-none">
      <div class="card mb-4 p-3 text-center mx-auto shadow" style="max-width: 50vw">
          <img src="${ultimosProductos[1].image}" class="card-img-top" alt="${ultimosProductos[1].title}">
          <div class="card-body d-flex flex-column">
              <hp class="card-title">${ultimosProductos[1].title}</hp>
              <h4 class="card-text flex-grow-1"><strong>$${ultimosProductos[1].price}</strong></h4>
              <div class="cuadrado-verde texto-pequeño">
                  <p><strong>3</strong> cuotas sin interés de <strong>$${(ultimosProductos[1].price * 0.3).toFixed(2)}</strong></p>
              </div>
          </div>
      </div>
  </a>    </div>
      <div class="carousel-item">
      <a href="producto.html?id=${ultimosProductos.id}" class="text-decoration-none">
      <div class="card mb-4 p-3 text-center mx-auto shadow" style="max-width: 50vw">
          <img src="${ultimosProductos[2].image}" class="card-img-top" alt="${ultimosProductos[2].title}">
          <div class="card-body d-flex flex-column">
              <hp class="card-title">${ultimosProductos[2].title}</hp>
              <h4 class="card-text flex-grow-1"><strong>$${ultimosProductos[2].price}</strong></h4>
              <div class="cuadrado-verde texto-pequeño">
                  <p><strong>3</strong> cuotas sin interés de <strong>$${(ultimosProductos[2].price * 0.3).toFixed(2)}</strong></p>
              </div>
          </div>
      </div>
  </a>    </div>
      <div class="carousel-item">
      <a href="producto.html?id=${ultimosProductos.id}" class="text-decoration-none">
      <div class="card mb-4 p-3 text-center mx-auto shadow" style="max-width: 50vw">
          <img src="${ultimosProductos[3].image}" class="card-img-top" alt="${ultimosProductos[3].title}">
          <div class="card-body d-flex flex-column">
              <hp class="card-title">${ultimosProductos[3].title}</hp>
              <h4 class="card-text flex-grow-1"><strong>$${ultimosProductos[3].price}</strong></h4>
              <div class="cuadrado-verde texto-pequeño">
                  <p><strong>3</strong> cuotas sin interés de <strong>$${(ultimosProductos[3].price * 0.3).toFixed(2)}</strong></p>
              </div>
          </div>
      </div>
  </a>    </div>
    </div>
    <a class="carousel-control-prev" href="#miCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Anterior</span>
    </a>
    <a class="carousel-control-next" href="#miCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Siguiente</span>
    </a>
  </div>
  `

  //Cargo los productos en el html (cuadricula) 
            ultimosProductos.forEach(producto => {
                const cardGrid = `
              <div class="col-3">
              <a href="producto.html?id=${producto.id}" class="text-decoration-none">
                  <div class="card mb-4 p-3 text-center shadow">
                      <img src="${producto.image}" class="card-img-top" alt="${producto.title}">
                      <div class="card-body d-flex flex-column">
                          <hp class="card-title">${producto.title}</hp>
                          <h4 class="card-text flex-grow-1"><strong>$${producto.price}</strong></h4>
                          <div class="cuadrado-verde texto-pequeño">
                              <p><strong>3</strong> cuotas sin interés de <strong>$${(producto.price * 0.3).toFixed(2)}</strong></p>
                          </div>
                      </div>
                  </div>
              </a>
          </div>
              `;

                novedadesInicioGrid.innerHTML += cardGrid;
            });
        });
}

//Funcion para hacer que carguen correctamente la redireccion desde el mosaico con los filtros activados
document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const categoria = params.get("categoria");
    if (categoria === "indumentaria") {
        llamadoIndumentaria();
    } else if (categoria === "accesorios") {
        llamadoAccesorios();
    } else if (categoria === "electronica") {
        llamadoElectronica();
    }
    else if (categoria === "verTodo") {
        llamadoApitotal();
    }
});

//##############################################################################################################################################
//############################################## CARGA CATALOGO ################################################################################
//##############################################################################################################################################


//DECLARACION VARIABLES ######################################################################################################################
//Contenedor catalogo
const contenedorCatalogo = document.getElementById("catalogo")
if (window.location.href.indexOf('catalogo.html') > -1) {

    // Llamado a botones
    const buscarIndumentaria = document.getElementById("indumentaria").onclick = function () {
        llamadoIndumentaria()
        //women's clothing // men's clothing
    }
    const buscarAccesorios = document.getElementById("accesorios").onclick = function () {
        llamadoAccesorios()
        // jewelery
    }
    const buscarElectronica = document.getElementById("electronica").onclick = function () {
        llamadoElectronica()
        //electronics
    }
    const buscarTodo = document.getElementById("buscarTodo").onclick = function () {
        llamadoApitotal()
    }
}


//Para que los botones de cada ordenamiento queden marcados
$(document).ready(function () {
    $('.botones-busqueda .ordenar-btn').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});

//FUNCION PARA QUE LOS BOTONES DE LAS CATEGORIAS SE MARQUEN
document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const categoria = params.get("categoria");

    // Marcar los botones de la categoria activa
    function activateCategoryButton(categoryId) {
        const categoryButtons = document.querySelectorAll(".ordenar-btn");
        categoryButtons.forEach(button => {
            button.classList.remove("active");
        });
        document.getElementById(categoryId).classList.add("active");
    }

    if (categoria === "indumentaria") {
        llamadoIndumentaria();
        activateCategoryButton("indumentaria");
    } else if (categoria === "accesorios") {
        llamadoAccesorios();
        activateCategoryButton("accesorios");
    } else if (categoria === "electronica") {
        llamadoElectronica();
        activateCategoryButton("electronica");
    } else if (categoria === "verTodo") {
        llamadoApitotal();
        activateCategoryButton("buscarTodo");
    }
});

document.querySelectorAll(".ordenar-btn").forEach(button => {
    button.addEventListener("click", function () {
        const category = this.id;
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set("categoria", category);
        history.pushState({}, "", "?" + searchParams.toString());
    });
});
// FIN DECLARACION VARIABLES #################################################################################################################


// CARGAR TODO  ##############################################################################################################################
function llamadoApitotal() {
    fetchProducts()
        .then(productos => {
            if (window.location.pathname.endsWith('catalogo.html')) { // Evita error de carga 
                contenedorCatalogo.innerHTML = "";
                productos.forEach(producto => {
                    if (producto.title.length > 50) { //Corta el nombre para que no queden muy largos en las cartas
                        const tituloLimitado = producto.title.slice(0, 50);
                        const cardCatalogo = `
                    <div class="col-lg-3 col-md-4 col-sm-6 col-12 p-2">
                        <a href="producto.html?id=${producto.id}" class="text-decoration-none">
                            <div class="card mb-4 p-3 text-center shadow">
                                <img src="${producto.image}" class="card-img-top mx-auto" alt="${producto.title}">
                                <div class="card-body">
                                    <div style="height: 100px;">    
                                        <p class="card-title">${tituloLimitado + "..."}</p>
                                    </div>
                                    <h4 class="card-text"><strong>$${producto.price}</strong></h4>
                                    <div class="cuadrado-verde texto-pequeño">
                                        <p><strong>3</strong> cuotas sin interés de <strong>$${(producto.price * 0.3).toFixed(2)}</strong></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                `;

                        contenedorCatalogo.innerHTML += cardCatalogo;
                    }
                    else {
                        const cardCatalogo = `
                    <div class="col-lg-3 col-md-4 col-sm-6 col-12 p-2">
                        <a href="producto.html?id=${producto.id}" class="text-decoration-none">
                            <div class="card mb-4 p-3 text-center shadow">
                                <img src="${producto.image}" class="card-img-top mx-auto" alt="${producto.title}">
                                <div class="card-body">
                                    <div style="height: 100px;">    
                                        <p class="card-title">${producto.title}</p>
                                    </div>
                                    <h4 class="card-text"><strong>$${producto.price}</strong></h4>
                                    <div class="cuadrado-verde texto-pequeño">
                                        <p><strong>3</strong> cuotas sin interés de <strong>$${(producto.price * 0.3).toFixed(2)}</strong></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                `;
                        contenedorCatalogo.innerHTML += cardCatalogo;
                    }
                });

//Funcionalidad de los botones de ordenar por
                document.getElementById("precioAsc").onclick = function () {
                    ordenarPrecios(productos, true);
                };
                document.getElementById("precioDesc").onclick = function () {
                    ordenarPrecios(productos, false);
                };
                document.getElementById("nombreAsc").onclick = function () {
                    ordenarNombres(productos, true);
                };
                document.getElementById("nombreDesc").onclick = function () {
                    ordenarNombres(productos, false);
                };



            }
        });
}
//Funciones de ordenar productos
function ordenarPrecios(productos, ascendente) {
    const productosOrdenados = productos.slice();
    productosOrdenados.sort((a, b) => (ascendente ? a.price - b.price : b.price - a.price));
    mostrarProductos(productosOrdenados);
}

function ordenarNombres(productos, ascendente) {
    const productosOrdenados = productos.slice();
    productosOrdenados.sort((a, b) => {
        const nombreA = a.title.toLowerCase();
        const nombreB = b.title.toLowerCase();
        if (ascendente) {
            return nombreA.localeCompare(nombreB);
        } else {
            return nombreB.localeCompare(nombreA);
        }
    });
    mostrarProductos(productosOrdenados);
}

function mostrarProductos(productos) {
    contenedorCatalogo.innerHTML = "";
    productos.forEach(producto => {
        if (producto.title.length > 50) {
            const tituloLimitado = producto.title.slice(0, 50);
            const cardCatalogo = `
            <div class="col-lg-3 col-md-4 col-sm-6 col-12 p-2">
                <a href="producto.html?id=${producto.id}" class="text-decoration-none">
                    <div class="card mb-4 p-3 text-center shadow">
                        <img src="${producto.image}" class="card-img-top mx-auto" alt="${producto.title}">
                        <div class="card-body">
                            <div style="height: 100px;">    
                                <p class="card-title">${tituloLimitado + "..."}</p>
                            </div>
                            <h4 class="card-text"><strong>$${producto.price}</strong></h4>
                            <div class="cuadrado-verde texto-pequeño">
                                <p><strong>3</strong> cuotas sin interés de <strong>$${(producto.price * 0.3).toFixed(2)}</strong></p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        `;

            contenedorCatalogo.innerHTML += cardCatalogo;
        }
        else {
            const cardCatalogo = `
            <div class="col-lg-3 col-md-4 col-sm-6 col-12 p-2">
                <a href="producto.html?id=${producto.id}" class="text-decoration-none">
                    <div class="card mb-4 p-3 text-center shadow">
                        <img src="${producto.image}" class="card-img-top mx-auto" alt="${producto.title}">
                        <div class="card-body">
                            <div style="height: 100px;">    
                                <p class="card-title">${producto.title}</p>
                            </div>
                            <h4 class="card-text"><strong>$${producto.price}</strong></h4>
                            <div class="cuadrado-verde texto-pequeño">
                                <p><strong>3</strong> cuotas sin interés de <strong>$${(producto.price * 0.3).toFixed(2)}</strong></p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        `;
            contenedorCatalogo.innerHTML += cardCatalogo;
        }
    });
}

// CARGAR ELECTRONICA ######################################################################################################################

const llamadoElectronica = async () => {
    await fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(data => cargarelectronica(data))
}

function cargarelectronica(data) {
    // Filtrar productos electrónicos
    const productosElectronica = data.filter(producto => producto.category === "electronics");

    // Función para mostrar productos
    function mostrarProductos(productos) {
        contenedorCatalogo.innerHTML = `<div class="w-100"><h4 class="text-secondary mx-5"> Electrónica </h4> </div>`;
        productos.forEach(producto => {
            if (producto.title.length > 50) {
                const tituloLimitado = producto.title.slice(0, 50);
                const cardCatalogo = `
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 p-2">
                    <a href="producto.html?id=${producto.id}" class="text-decoration-none">
                        <div class="card mb-4 p-3 text-center shadow">
                            <img src="${producto.image}" class="card-img-top mx-auto" alt="${producto.title}">
                            <div class="card-body">
                                <div style="height: 100px;">    
                                    <p class="card-title">${tituloLimitado + "..."}</p>
                                </div>
                                <h4 class="card-text"><strong>$${producto.price}</strong></h4>
                                <div class="cuadrado-verde texto-pequeño">
                                    <p><strong>3</strong> cuotas sin interés de <strong>$${(producto.price * 0.3).toFixed(2)}</strong></p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            `;

                contenedorCatalogo.innerHTML += cardCatalogo;
            }
            else {
                const cardCatalogo = `
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 p-2">
                    <a href="producto.html?id=${producto.id}" class="text-decoration-none">
                        <div class="card mb-4 p-3 text-center shadow">
                            <img src="${producto.image}" class="card-img-top mx-auto" alt="${producto.title}">
                            <div class="card-body">
                                <div style="height: 100px;">    
                                    <p class="card-title">${producto.title}</p>
                                </div>
                                <h4 class="card-text"><strong>$${producto.price}</strong></h4>
                                <div class="cuadrado-verde texto-pequeño">
                                    <p><strong>3</strong> cuotas sin interés de <strong>$${(producto.price * 0.3).toFixed(2)}</strong></p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            `;
                contenedorCatalogo.innerHTML += cardCatalogo;
            }
        })
    }

    mostrarProductos(productosElectronica); // Mostrar productos electrónicos

    //Funciones de ordenar productos
    function ordenarPrecios(productos, ascendente) {
        const productosOrdenados = productos.slice();
        productosOrdenados.sort((a, b) => (ascendente ? a.price - b.price : b.price - a.price));
        mostrarProductos(productosOrdenados);
    }

    function ordenarNombres(productos, ascendente) {
        const productosOrdenados = productos.slice();
        productosOrdenados.sort((a, b) => {
            const nombreA = a.title.toLowerCase();
            const nombreB = b.title.toLowerCase();
            if (ascendente) {
                return nombreA.localeCompare(nombreB);
            } else {
                return nombreB.localeCompare(nombreA);
            }
        });
        mostrarProductos(productosOrdenados);
    }

    // Botones de ordenamiento
    document.getElementById("precioAsc").onclick = function () {
        ordenarPrecios(productosElectronica, true);
    };

    document.getElementById("precioDesc").onclick = function () {
        ordenarPrecios(productosElectronica, false);
    };

    document.getElementById("nombreAsc").onclick = function () {
        ordenarNombres(productosElectronica, true);
    };

    document.getElementById("nombreDesc").onclick = function () {
        ordenarNombres(productosElectronica, false);
    };
}

// CARGAR ACCESORIOS #######################################################################################################################

const llamadoAccesorios = async () => {
    await fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(data => cargarAccesorios(data))
}

function cargarAccesorios(data) {

    // Filtrar accesorios
    const productosAccesorios = data.filter(producto => producto.category === "jewelery");

    // Función para mostrar productos
    function mostrarProductos(productos) {
        contenedorCatalogo.innerHTML = `<div class="w-100"><h4 class="text-secondary mx-5"> Accesorios </h4> </div>`;
        productos.forEach(producto => {
            if (producto.title.length > 50) {
                const tituloLimitado = producto.title.slice(0, 50);
                const cardCatalogo = `
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 p-2">
                    <a href="producto.html?id=${producto.id}" class="text-decoration-none">
                        <div class="card mb-4 p-3 text-center shadow">
                            <img src="${producto.image}" class="card-img-top mx-auto" alt="${producto.title}">
                            <div class="card-body">
                                <div style="height: 100px;">    
                                    <p class="card-title">${tituloLimitado + "..."}</p>
                                </div>
                                <h4 class="card-text"><strong>$${producto.price}</strong></h4>
                                <div class="cuadrado-verde texto-pequeño">
                                    <p><strong>3</strong> cuotas sin interés de <strong>$${(producto.price * 0.3).toFixed(2)}</strong></p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            `;

                contenedorCatalogo.innerHTML += cardCatalogo;
            }
            else {
                const cardCatalogo = `
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 p-2">
                    <a href="producto.html?id=${producto.id}" class="text-decoration-none">
                        <div class="card mb-4 p-3 text-center shadow">
                            <img src="${producto.image}" class="card-img-top mx-auto" alt="${producto.title}">
                            <div class="card-body">
                                <div style="height: 100px;">    
                                    <p class="card-title">${producto.title}</p>
                                </div>
                                <h4 class="card-text"><strong>$${producto.price}</strong></h4>
                                <div class="cuadrado-verde texto-pequeño">
                                    <p><strong>3</strong> cuotas sin interés de <strong>$${(producto.price * 0.3).toFixed(2)}</strong></p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            `;
                contenedorCatalogo.innerHTML += cardCatalogo;
            }
        })
    }

    mostrarProductos(productosAccesorios); // Mostrar productos accesorios

    //Funciones de ordenar productos
    function ordenarPrecios(productos, ascendente) {
        const productosOrdenados = productos.slice();
        productosOrdenados.sort((a, b) => (ascendente ? a.price - b.price : b.price - a.price));
        mostrarProductos(productosOrdenados);
    }

    function ordenarNombres(productos, ascendente) {
        const productosOrdenados = productos.slice();
        productosOrdenados.sort((a, b) => {
            const nombreA = a.title.toLowerCase();
            const nombreB = b.title.toLowerCase();
            if (ascendente) {
                return nombreA.localeCompare(nombreB);
            } else {
                return nombreB.localeCompare(nombreA);
            }
        });
        mostrarProductos(productosOrdenados);
    }

    // Botones de ordenamiento
    document.getElementById("precioAsc").onclick = function () {
        ordenarPrecios(productosAccesorios, true);
    };

    document.getElementById("precioDesc").onclick = function () {
        ordenarPrecios(productosAccesorios, false);
    };

    document.getElementById("nombreAsc").onclick = function () {
        ordenarNombres(productosAccesorios, true);
    };

    document.getElementById("nombreDesc").onclick = function () {
        ordenarNombres(productosAccesorios, false);
    };
}

// CARGAR INDUMENTARIA #######################################################################################################################

const llamadoIndumentaria = async () => {
    await fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(data => cargarIndumentaria(data))
}

function cargarIndumentaria(data) {

    const productosIndumentaria = data.filter(producto => producto.category === "men's clothing" || producto.category === "women's clothing");

    function mostrarProductos(productos) {
        contenedorCatalogo.innerHTML = `<div class="w-100"><h4 class="text-secondary mx-5"> Indumentaria </h4> </div>`;
        productos.forEach(producto => {
            if (producto.title.length > 50) {
                const tituloLimitado = producto.title.slice(0, 50);
                const cardCatalogo = `
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 p-2">
                    <a href="producto.html?id=${producto.id}" class="text-decoration-none">
                        <div class="card mb-4 p-3 text-center shadow">
                            <img src="${producto.image}" class="card-img-top mx-auto" alt="${producto.title}">
                            <div class="card-body">
                                <div style="height: 100px;">    
                                    <p class="card-title">${tituloLimitado + "..."}</p>
                                </div>
                                <h4 class="card-text"><strong>$${producto.price}</strong></h4>
                                <div class="cuadrado-verde texto-pequeño">
                                    <p><strong>3</strong> cuotas sin interés de <strong>$${(producto.price * 0.3).toFixed(2)}</strong></p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            `;

                contenedorCatalogo.innerHTML += cardCatalogo;
            }
            else {
                const cardCatalogo = `
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 p-2">
                    <a href="producto.html?id=${producto.id}" class="text-decoration-none">
                        <div class="card mb-4 p-3 text-center shadow">
                            <img src="${producto.image}" class="card-img-top mx-auto" alt="${producto.title}">
                            <div class="card-body">
                                <div style="height: 100px;">    
                                    <p class="card-title">${producto.title}</p>
                                </div>
                                <h4 class="card-text"><strong>$${producto.price}</strong></h4>
                                <div class="cuadrado-verde texto-pequeño">
                                    <p><strong>3</strong> cuotas sin interés de <strong>$${(producto.price * 0.3).toFixed(2)}</strong></p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            `;
                contenedorCatalogo.innerHTML += cardCatalogo;
            }
        })
    }

    mostrarProductos(productosIndumentaria); // Mostrar productos indumentaria

    //Funciones de ordenar productos
    function ordenarPrecios(productos, ascendente) {
        const productosOrdenados = productos.slice();
        productosOrdenados.sort((a, b) => (ascendente ? a.price - b.price : b.price - a.price));
        mostrarProductos(productosOrdenados);
    }

    function ordenarNombres(productos, ascendente) {
        const productosOrdenados = productos.slice();
        productosOrdenados.sort((a, b) => {
            const nombreA = a.title.toLowerCase();
            const nombreB = b.title.toLowerCase();
            if (ascendente) {
                return nombreA.localeCompare(nombreB);
            } else {
                return nombreB.localeCompare(nombreA);
            }
        });
        mostrarProductos(productosOrdenados);
    }

    // Botones de ordenamiento
    document.getElementById("precioAsc").onclick = function () {
        ordenarPrecios(productosIndumentaria, true);
    };

    document.getElementById("precioDesc").onclick = function () {
        ordenarPrecios(productosIndumentaria, false);
    };

    document.getElementById("nombreAsc").onclick = function () {
        ordenarNombres(productosIndumentaria, true);
    };

    document.getElementById("nombreDesc").onclick = function () {
        ordenarNombres(productosIndumentaria, false);
    };
}

//################################################################################################################################################ 
//################################################### CARGA producto-detalle ###################################################################
//############################################################################################################################################## 

const urlParams = new URLSearchParams(window.location.search);
const productoId = urlParams.get("id");

// Comprueba si la página es producto.html
if (window.location.pathname.endsWith("producto.html")) {
    // Fetch con el ID
    function fetchEspecifico(id) {
        return fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error de red al cargar productos.');
                }
                return response.json();
            })
            .catch(error => {
                console.error(error);
            });
    }

    // Carga del producto con el ID
    function cargarDetalleProducto(id) {
        fetchEspecifico(id)
            .then(producto => {
                document.getElementById("imgProducto").innerHTML = `
                    <img src="${producto.image}" alt="${producto.title}" style="max-width: 100%; height: auto; max-height: 500px;">
                `;
                document.getElementById("detalleProducto").innerHTML = `
                    <h2 class="color-principal pt-3">${producto.title}</h2>
                    <p>${producto.description}</p>
                    <h1>$${producto.price}</h1>
                    <div class="texto-pequeño">
                        <p><strong>3</strong> cuotas sin interés de <strong>$${(producto.price * 0.3).toFixed(2)}</strong></p>
                    </div>
                    <a class="btn btn-success">Comprar ahora</a>
                `;
            })
            .catch(error => {
                console.error('Error al cargar los detalles del producto:', error);
            });
    }

    // Cargar la página y luego ejecutar las funciones
    document.addEventListener("DOMContentLoaded", function () {
        cargarDetalleProducto(productoId);
    });
}


//##############################################################################################################################################
//#################################################  PREGUNTAS FRECUENTES  #####################################################################
//############################################################################################################################################## 
        const preguntas = document.querySelectorAll('.preguntas');

        preguntas.forEach((pregunta) => {
            pregunta.addEventListener('click', () => {
                const respuestas = pregunta.nextElementSibling;
                const toggleButton = pregunta.querySelector('.toggle-button');

                if (respuestas.style.display === 'block') {
                    respuestas.style.display = 'none';
                    toggleButton.textContent = '+';
                } else {
                    respuestas.style.display = 'block';
                    toggleButton.textContent = '-';
                }
            });
        });
   