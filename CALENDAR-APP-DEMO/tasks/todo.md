# Calendar App — Plan de trabajo

## Tareas

- [x] **Preparar la estructura de la aplicación**
  - Crear la página, estilos y lógica necesarios para una app de calendario mensual, siguiendo las convenciones del proyecto si existen.
  - **Criterios de aceptación:**
    - [x] La aplicación se puede abrir y usar en el entorno disponible del proyecto.
    - [x] La vista inicial presenta un calendario mensual con encabezados de días y fechas alineadas correctamente.
    - [x] Se puede navegar entre meses y volver al mes actual.

- [x] **Implementar gestión de eventos**
  - Añadir un modal para crear y editar eventos, acciones para eliminarlos y validación básica de los datos.
  - **Criterios de aceptación:**
    - [x] Se puede crear un evento con título y fecha válidos desde el modal.
    - [x] Se puede editar y eliminar un evento existente.
    - [x] Se rechazan títulos vacíos y fechas no válidas, y se informa al usuario del error.
    - [x] Los eventos aparecen en el día correspondiente del calendario.

- [x] **Persistir eventos en localStorage**
  - Guardar y cargar eventos como JSON en `localStorage`.
  - **Criterios de aceptación:**
    - [x] Los cambios de eventos se guardan automáticamente en `localStorage`.
    - [x] Los eventos siguen disponibles después de recargar la página.
    - [x] La ausencia de datos guardados no impide que la aplicación inicie.

- [x] **Ajustar diseño adaptable y verificar la aplicación**
  - Asegurar que la cuadrícula, el modal y las acciones se puedan usar en pantallas pequeñas y grandes; ejecutar las verificaciones disponibles.
  - **Criterios de aceptación:**
    - [x] La interfaz sigue siendo legible y operable en tamaños de escritorio y móvil.
    - [x] Las verificaciones pertinentes del proyecto pasan; si no existen, se documenta la comprobación manual realizada.

## Revisión final

- Se creó `index.html` como aplicación independiente, con cuadrícula mensual, navegación, modal de eventos, validación y almacenamiento JSON en `localStorage`.
- La interfaz está en español y adapta la cuadrícula de siete columnas a pantallas móviles.
- Verificaciones realizadas en navegador: sintaxis JavaScript; navegación entre meses y regreso a hoy; validación de título vacío y fecha vacía; alta, edición y borrado; persistencia JSON tras recargar; y diseño adaptable a 320 px y escritorio.
- El proyecto no tenía un runner de pruebas; las comprobaciones funcionales se hicieron directamente en el navegador.
