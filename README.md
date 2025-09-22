# README — app.js (Amigo Secreto)

## Resumen
- Guarda los nombres en un arreglo `participantes`.
- Permite **agregar nombres**, validando que no estén vacíos ni duplicados.
- Muestra la lista de amigos en pantalla, con opción de **quitar** cada uno.
- Botón **Sortear** elige un amigo al azar y lo muestra.
- Botón **Limpiar** vacía la lista.
- Contador dinámico de participantes.
- Soporta tecla **Enter** para añadir rápido.

## Funciones principales
- `render()`: repinta la lista y actualiza contador.
- `agregar()`: valida y añade un nombre.
- `eliminar(idx)`: quita un nombre según índice.
- `sortear()`: selecciona un ganador aleatorio.
- `limpiar()`: vacía la lista completa.
- `mostrarResultado(nombre)`: enseña el ganador.
- `ocultarResultado()`: limpia el resultado.
- `escapeHtml(str)`: evita problemas de inyección.

## Flujo
1. Escribe un nombre y presiona **Adicionar** o **Enter**.
2. El nombre aparece en la lista.
3. Presiona **Sortear Amigo** → se elige aleatoriamente.
4. Usa **quitar** para borrar un participante o **Limpiar** para reiniciar todo.

## Extra
- Accesible (`aria-live`).
- Estilos listos en `style.css`.
- Código escrito solo con JS nativo.
