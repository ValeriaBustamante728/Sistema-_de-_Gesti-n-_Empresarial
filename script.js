// Listas para almacenar datos de jugadores y equipos
const trabajadors = []; // Lista de jugadores
const companys = []; // Lista de equipos

// Lista de posiciones en el fÃºtbol
const positions = [
    "Gerente", // PosiciÃ³n de portero
    "Ingeniero", // PosiciÃ³n de defensa central
    "Empleado", // PosiciÃ³n de lateral derecho
    "Pensionado", // PosiciÃ³n de lateral izquierdo
    "Empleado de Servicio", // PosiciÃ³n de mediocampista defensivo
    "Guarda de seguridad", // PosiciÃ³n de mediocampista ofensivo
    "Jefe", // PosiciÃ³n de extremo derecho
    "Socio", // PosiciÃ³n de extremo izquierdo
    "Cliente" // PosiciÃ³n de delantero centro
];

// Carga las posiciones en el formulario
function loadPositions() {
    const positionSelect = document.getElementById("trabajadorPosition"); // Obtiene el elemento select para las posiciones
    positionSelect.innerHTML = `<option value="">Seleccione un Cargo</option>`; // Agrega la opciÃ³n predeterminada
    positions.forEach(position => {
        const option = document.createElement("option"); // Crea un elemento de opciÃ³n
        option.value = position; // Establece el valor de la opciÃ³n
        option.textContent = position; // Establece el texto visible de la opciÃ³n
        positionSelect.appendChild(option); // Agrega la opciÃ³n al selector
    });
}

// Carga los equipos en el selector del formulario de jugadores
function updatecompanySelect() {
    const companySelect = document.getElementById("trabajadorcompany"); // Obtiene el elemento select para los equipos
    companySelect.innerHTML = `<option value="">Seleccione una Empresa</option>`; // Agrega la opciÃ³n predeterminada
    companys.forEach(company => {
        const option = document.createElement("option"); // Crea un elemento de opciÃ³n
        option.value = company.name; // Establece el valor de la opciÃ³n como el nombre del equipo
        option.textContent = company.name; // Establece el texto visible como el nombre del equipo
        companySelect.appendChild(option); // Agrega la opciÃ³n al selector
    });
}

// Maneja el formulario para agregar equipos
const companyForm = document.getElementById("addcompanyForm"); // Obtiene el formulario para agregar equipos
companyForm.addEventListener("submit", e => {
    e.preventDefault(); // Evita el envÃ­o predeterminado del formulario
    const name = document.getElementById("companyName").value; // Obtiene el nombre del equipo
    const logoFile = document.getElementById("companyLogo").files[0]; // Obtiene el archivo del logo
    const logo = logoFile ? URL.createObjectURL(logoFile) : "assets/images/default-company.jpg"; // Genera la URL del logo o usa una imagen predeterminada

    if (!name) {
        alert("Por favor, ingrese el nombre del equipo."); // Muestra un mensaje si el nombre estÃ¡ vacÃ­o
        return; // Finaliza la ejecuciÃ³n
    }

    const company = { name, logo }; // Crea un objeto equipo
    companys.push(company); // Agrega el equipo a la lista de equipos
    updatecompanyCards(); // Actualiza las tarjetas de equipos
    updatecompanySelect(); // Actualiza el selector de equipos
    companyForm.reset(); // Resetea el formulario
});

// Actualiza la visualizaciÃ³n de los equipos
function updatecompanyCards() {
    const companyContainer = document.getElementById("companyCardsContainer"); // Obtiene el contenedor de tarjetas de equipos
    companyContainer.innerHTML = ""; // Limpia el contenido existente
    companys.forEach(company => {
        const card = `<div class="company-card">
            <img src="${company.logo}" alt="${company.name}" style="width: 100px; height: 100px; border-radius: 50%;"> <!-- Imagen del logo del equipo -->
            <h3>${company.name}</h3> <!-- Nombre del equipo -->
        </div>`;
        companyContainer.innerHTML += card; // Agrega la tarjeta al contenedor
    });
}

// Maneja el formulario para agregar jugadores
const trabajadorForm = document.getElementById("addtrabajadorForm"); // Obtiene el formulario para agregar jugadores
trabajadorForm.addEventListener("submit", e => {
    e.preventDefault(); // Evita el envÃ­o predeterminado del formulario
    const name = document.getElementById("trabajadorName").value; // Obtiene el nombre del jugador
    const age = document.getElementById("trabajadorAge").value; // Obtiene la edad del jugador
    const position = document.getElementById("trabajadorPosition").value; // Obtiene la posiciÃ³n seleccionada
    const company = document.getElementById("trabajadorcompany").value; // Obtiene el equipo seleccionado
    const photoFile = document.getElementById("trabajadorPhoto").files[0]; // Obtiene el archivo de la foto
    const photo = photoFile ? URL.createObjectURL(photoFile) : "assets/images/default-trabajador.jpg"; // Genera la URL de la foto o usa una imagen predeterminada

    if (!name || !age || !position || !company) {
        alert("Por favor, complete todos los campos obligatorios."); // Muestra un mensaje si falta algÃºn campo obligatorio
        return; // Finaliza la ejecuciÃ³n
    }

    const trabajador = { name, age, position, company, photo }; // Crea un objeto jugador
    trabajadors.push(trabajador); // Agrega el jugador a la lista de jugadores
    updatetrabajadorTable(); // Actualiza la tabla de jugadores
    trabajadorForm.reset(); // Resetea el formulario
});

// Actualiza la tabla de jugadores
function updatetrabajadorTable() {
    const trabajadorTable = document.getElementById("trabajadorTableBody"); // Obtiene el cuerpo de la tabla de jugadores
    trabajadorTable.innerHTML = ""; // Limpia el contenido existente
    trabajadors.forEach(trabajador => {
        const row = `<tr>
            <td><img src="${trabajador.photo}" alt="${trabajador.name}" style="width: 50px; height: 50px; border-radius: 50%;"></td> <!-- Foto del jugador -->
            <td>${trabajador.name}</td> <!-- Nombre del jugador -->
            <td>${trabajador.age}</td> <!-- Edad del jugador -->
            <td>${trabajador.position}</td> <!-- PosiciÃ³n del jugador -->
            <td>${trabajador.company}</td> <!-- Equipo del jugador -->
        </tr>`;
        trabajadorTable.innerHTML += row; // Agrega la fila a la tabla
    });
}

// Inicializa el sistema al cargar la pÃ¡gina
document.addEventListener("DOMContentLoaded", () => {
    loadPositions(); // Carga las posiciones en el selector
    updatecompanySelect(); // Carga los equipos en el selector
});