// Objeto que contiene el horario
const horario = {

    clases :['Telecomunicaciones', 'Arquitectura', 'SO', 'Ingenieria de SO', 'Progra WEB', 'Lenguajes y Auto', 'Base de datos'],
    hora :['1-2','2-3','3-4','4-5','5-6','6-7','7-8'],
    calificaciones: [],

  
    // Método para mostrar el horario
    mostrarHorario: function () {
      if (confirm("¿Deseas mostrar tu horario?")) {
        let resultado = "<h2>Horario del Semestre:</h2><table>";
        resultado += "<tr><th>Hora</th><th>Lunes</th><th>Martes</th><th>Miercoles</th><th>Jueves</th><th>Viernes</th></tr>";
        for (let i = 0; i < this.hora.length; i++) {
            resultado += `
              <tr>
                <td>${this.hora[i]}</td>
                <td>${this.clases[i] || ""}</td>
                <td>${this.clases[i] || ""}</td>
                <td>${this.clases[i] || ""}</td>
                <td>${this.clases[i] || ""}</td>
                <td>${this.clases[i] || ""}</td>
              </tr>
            `;
          }

        resultado += "</table>";
        document.getElementById("resultado").innerHTML = resultado;
      } else {
        alert("Operación cancelada.");
      }
    },

    meterCalifas: function () {
        let resultado = "<h2>Califas:</h2><table>";

        // Crear encabezado de la tabla
        resultado += "<tr><th>Materia</th><th>Calificación</th></tr>";

        // Crear filas con campos de entrada
        for (let i = 0; i < this.clases.length; i++) {
            resultado += `
              <tr>
                <td>${this.clases[i]}</td>
                <td><input type="number" class="calificacion" data-index="${i}" placeholder="Calificación"></td>
              </tr>
            `;
        }

        // Filas para Total y Promedio
        resultado += `
            <tr>
                <td>Total</td>
                <td id="totalCalifas">0</td>
            </tr>
            <tr>
                <td>Promedio</td>
                <td id="promedioCalifas">0</td>
            </tr>
        `;
        resultado += "</table>";

        // Botones para operaciones
        resultado += `
        <button id="btnSumarCalifas">Sumar Calificaciones</button>
        <button id="btnPromedioCalifas">Calcular Promedio</button>
    `;

        // Renderizar tabla
        document.getElementById("resultado").innerHTML = resultado;

        // Asignar eventos a los botones
        document.getElementById("btnPromedioCalifas").addEventListener("click", () => this.actualizarPromedio());
        document.getElementById("btnSumarCalifas").addEventListener("click", () => this.actualizarTotal());
    },

    // Leer calificaciones de los campos
    obtenerCalificaciones: function () {
        const inputs = document.querySelectorAll('.calificacion');
        const calificaciones = [];

        // Convertir valores a números
        inputs.forEach((input) => {
            const valor = parseFloat(input.value);
            calificaciones.push(isNaN(valor) ? 0 : valor); // Sustituir valores vacíos o no válidos con 0
        });

        console.log("Calificaciones obtenidas:", calificaciones); // Depuración
        return calificaciones;
    },
    actualizarPromedio: function () {
      const calificaciones = this.obtenerCalificaciones();
      

      const total = calificaciones.reduce((acc, val) => acc + val, 0);
      const promedio = total / calificaciones.length;

      const promedioCell = document.getElementById("promedioCalifas");
      if (promedioCell) promedioCell.textContent = promedio.toFixed(2);
  },

    // Sumar calificaciones
    actualizarTotal: function () {
        const calificaciones = this.obtenerCalificaciones();
        const total = calificaciones.reduce((acc, val) => acc + val, 0);

        const totalCell = document.getElementById("totalCalifas");
        if (totalCell) totalCell.textContent = total;
    }

    // Calcular promedio
  
};
  
  
  // Asignar eventos a los botones cuando el DOM esté listo
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("mostrarHorario").addEventListener("click", () => {
      horario.mostrarHorario();
    });
  
    document.getElementById("meterCalifas").addEventListener("click", () => {
      horario.meterCalifas();
    });
  });
  