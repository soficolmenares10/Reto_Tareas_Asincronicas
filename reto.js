// ----------------------------------------------
// ARREGLO DE TAREAS
// ----------------------------------------------

const tareas = [
  { descripcion: "Enviar correo al cliente", tipo: "simple" },
  { descripcion: "Generar reporte financiero", tipo: "importante" },
  { descripcion: "Respaldar base de datos", tipo: "critica" },
  { descripcion: "Actualizar inventario", tipo: "simple" }
];

// ----------------------------------------------
// TIEMPOS SEGÚN EL TIPO DE TAREA
// ----------------------------------------------

const tiempos = {
  simple: 1000,
  importante: 2000,
  critica: 3000
};

// ----------------------------------------------
// VALIDAR TAREA
// ----------------------------------------------

function validarTarea(tarea) {
  if (typeof tarea !== "object" || tarea === null) {
    return false;
  }

  if (!tarea.descripcion || typeof tarea.descripcion !== "string") {
    return false;
  }

  if (!tarea.tipo || !tiempos[tarea.tipo]) {
    return false;
  }

  return true;
}

// ----------------------------------------------
// EJECUTAR TAREA
// ----------------------------------------------

function ejecutarTarea(tarea, callback) {
  if (!validarTarea(tarea)) {
    console.log("Tarea inválida:", tarea);
    callback();
    return;
  }

  const tiempo = tiempos[tarea.tipo];

  console.log(`Iniciando tarea: ${tarea.descripcion}`);

  setTimeout(() => {
    console.log(`Tarea completada: ${tarea.descripcion}`);
    callback();
  }, tiempo);
}

// ----------------------------------------------
// MENSAJE FINAL
// ----------------------------------------------

function registroFinal() {
  console.log("Todas las tareas han sido registradas exitosamente.");
}

// ----------------------------------------------
// INICIAR SISTEMA
// ----------------------------------------------

function iniciarSistema(listaTareas) {
  if (!Array.isArray(listaTareas) || listaTareas.length === 0) {
    console.log("No hay tareas registradas.");
    return;
  }

  let tareasCompletadas = 0;

  listaTareas.forEach((tarea) => {
    ejecutarTarea(tarea, () => {
      tareasCompletadas++;

      if (tareasCompletadas === listaTareas.length) {
        registroFinal();
      }
    });
  });
}

// ----------------------------------------------
// EJECUCIÓN DEL PROGRAMA
// ----------------------------------------------

console.log("Iniciando sistema...\n");

iniciarSistema(tareas);