document.addEventListener("DOMContentLoaded", () => {
  const botonAgregar = document.getElementById("agregar");
  const botonLimpiar = document.getElementById("limpiar");
  const elemento = document.getElementById("item");
  const contenedorElementos = document.getElementById("contenedor");

  //Cargar los elementos guardados en sessionStorage al iniciar:
  const listaGuardada =
    JSON.parse(sessionStorage.getItem("listaElementos")) || [];
  listaGuardada.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element;
    contenedorElementos.appendChild(li);
  });

  //Cuando se presiona el botón Agregar:
  botonAgregar.addEventListener("click", () => {
    const valor = elemento.value.trim();
    if (!valor) return;

    //Crear elemento li y agregarlo al contenedor:
    const liElemento = document.createElement("li");
    liElemento.textContent = valor;
    contenedorElementos.appendChild(liElemento);

    //Guardar en el sessionStorage:
    listaGuardada.push(valor);
    sessionStorage.setItem("listaElementos", JSON.stringify(listaGuardada));

    //Limpiar input:
    elemento.value = "";
  });

  //Cuando se presiona el botón Limpiar:
  botonLimpiar.addEventListener("click", () => {
    contenedorElementos.innerHTML = "";
    sessionStorage.removeItem("listaElementos");
    listaGuardada.length = 0;
  });
});
