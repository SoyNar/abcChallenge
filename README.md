# 🔤 ABCchallenge — Sprint de Rescate Infantil



## 📌 Contexto del Proyecto

Son las 8:47 AM. **ABCchallenge**, una startup colombiana de educación infantil, se encuentra a un día de su demo oficial con inversores. Tras el abandono imprevisto del equipo de desarrollo previo, la plataforma web para enseñar el abecedario quedó incompleta, sin interactividad y con imágenes faltantes.

Este repositorio contiene la solución desarrollada en un **Sprint de Rescate de 1 hora y 45 minutos**, solucionando la interfaz gráfica, completando las 26 cartas interactivas y asegurando el correcto funcionamiento pedagógico.

---

## 🎯 Requerimientos Funcionales (RF)

- [x] **RF-01 · Barra de navegación:** Encabezado con el nombre de la plataforma y un contador de letras descubiertas.
- [x] **RF-02 · Galería de letras:** 26 tarjetas representando cada letra del abecedario en español.
- [x] **RF-03 · Interacción con tarjetas (3D Flip):** Efecto de giro al hacer clic para revelar la imagen y palabra asociada.
- [x] **RF-04 · Contador de progreso único:** Incrementa en +1 al descubrir por primera vez una letra.
- [x] **RF-05 · Filtro de contenido:** Botones para filtrar entre *Vocales* (A, E, I, O, U) y *Todas*.
- [x] **RF-06 · Sección del equipo:** Pie de página con la mención de los desarrolladores integrantes.
- [x] **RF-07 · Diseño profesional e inclusivo:** Paleta de colores atractiva e interfaz responsive para niños.


## 📁 Estructura del Proyecto

```bash
├── index.html       # Estructura semántica, cards y navbar
├── style.css        # Reglas de estilo, animaciones y efecto Flip 3D
├── script.js        # Lógica de volteo, contador único y filtrado
└── README.md        # Documentación general del proyecto
```

---

---

## 🚀 Instalación y Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/abc-challenge.git
   ```
2. **Navegar al directorio:**
   ```bash
   cd abc-challenge
   ```
3. **Ejecutar el proyecto:**
   Abre el archivo `index.html` en cualquier navegador web o utiliza la extensión **Live Server** en VS Code.

