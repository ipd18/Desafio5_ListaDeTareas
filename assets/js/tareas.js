// Arreglo inicial de tareas
let tareas = [
    { id: 1, description: 'Supermercado', completed: false },
    { id: 2, description: 'Hacer desafio', completed: true },
    { id: 3, description: 'Reunion', completed: false }
];

// Elementos del DOM
const tareaInput = document.getElementById('tarea-input');
const addButton = document.getElementById('add-button');
const tablaList = document.getElementById('tabla-list').getElementsByTagName('tbody')[0];;
const totalTareas = document.getElementById('total-tareas');
const completedTareas = document.getElementById('completed-tareas');

  // Función para agregar una tarea al arreglo y actualizar la lista
  function addtarea() {
    const description = tareaInput.value.trim();
    if (description !== '') {
      const newTarea = {
        id: tareas.length > 0 ? tareas[tareas.length - 1].id + 1 : 1,
         description: description, 
         completed: false };
      tareas.push(newTarea);
      rendertareas();
      tareaInput.value = '';
    }
  }
  

  // Función para eliminar una tarea del arreglo y actualizar la lista
  function deletetarea(id) {
    tareas = tareas.filter(tarea => tarea.id !== id);
    rendertareas();
  }
  
  // Función para cambiar el estado de completado de una tarea y actualizar la lista
  function toggleCompleted(id) {
    tareas.forEach(tarea => {
      if (tarea.id === id) {
        tarea.completed = !tarea.completed;
      }
    });
    rendertareas();
  }
  
  // Función para renderizar las tareas en la lista
  function rendertareas() {
    tablaList.innerHTML = '';
  
    let completedCount = 0;
    tareas.forEach(tarea => {
      const row = document.createElement('tr');
      row.innerHTML = `
      <td>${tarea.id}</td>
      <td>${tarea.description}</td>

      <input type="checkbox" ${tarea.completed ? 'checked' : ''} onchange="toggleCompleted(${tarea.id})">
        <button onclick="deletetarea(${tarea.id})">Eliminar</button>
      `;
      tablaList.appendChild(row);
  
      if (tarea.completed) {
        completedCount++;
      }
    });
  
    totalTareas.textContent = tareas.length;
    completedTareas.textContent = completedCount;
  }
  
  // Event listeners
  addButton.addEventListener('click', addtarea);
  
  // Renderizar las tareas iniciales
  rendertareas();
  