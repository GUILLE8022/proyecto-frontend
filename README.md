# Inventario React

Pequeña aplicación frontend para manejo de inventario creada con React y Vite.

## Descripción

Este proyecto es una interfaz básica para gestionar productos: crear, listar y autenticar usuarios. Está organizado con componentes reutilizables, contexto para estado global y servicios para llamadas a la API.

## Tecnologías

- Vite
- React
- React Router
- Axios
- react-hook-form
- ESLint

## Instalación

1. Clona el repositorio.
2. Instala dependencias:

```bash
npm install
```

3. Levanta el servidor de desarrollo:

```bash
npm run dev
```

## Scripts

- `dev`: inicia el servidor de desarrollo (vite).
- `build`: construye la aplicación para producción.
- `preview`: sirve la build localmente.
- `lint`: ejecuta ESLint.

Estos scripts están definidos en el `package.json`.

## Estructura del proyecto

Raíz del proyecto:

```
src/
  App.jsx
  main.jsx
  assets/
  components/
    FormInput.jsx
    Navbar.jsx
    ProductCard.jsx
  context/
    AuthContext.jsx
    ProductContext.jsx
  hooks/
    useProducts.js
  pages/
    CrearProducto.jsx
    Home.jsx
    Login.jsx
    Productos.jsx
    Register.jsx
  services/
    api.js
  styles/
    global.css
public/
vite.config.js
package.json
README.md
```

Breve descripción de carpetas clave:

- `components/`: componentes UI reutilizables.
- `context/`: proveedores de contexto para autenticación y productos.
- `hooks/`: hooks personalizados (`useProducts`).
- `pages/`: vistas principales de la app (Home, Login, Register, Productos, CrearProducto).
- `services/`: cliente API con Axios (`api.js`).
- `styles/`: estilos globales.

## Uso

- Registra un usuario desde la página de registro.
- Inicia sesión para acceder a las rutas protegidas.
- Crea y lista productos desde la interfaz.

## Notas

- Ajusta la URL base de la API en `src/services/api.js` según tu backend.
- ESLint está configurado; ejecuta `npm run lint` para revisar el código.

Si quieres que agregue instrucciones de despliegue o capturas de pantalla, dímelo y lo incluyo.
# 🏪 Inventario React App

Una aplicación moderna de gestión de inventario construida con React, que combina productos de una API externa con productos creados por el usuario.

## ✨ Características

- 📱 **Completamente Responsive**: Diseño adaptativo para móvil, tablet y escritorio
- 🔍 **Búsqueda en Tiempo Real**: Filtra productos por nombre con optimización useMemo
- ➕ **Crear Productos**: Formulario validado con react-hook-form
- 🌐 **API Integration**: Consumo de FakeStore API con Axios
- 💾 **Persistencia Local**: Almacenamiento en localStorage
- 🎨 **UI Moderna**: Diseño profesional con CSS Grid y Flexbox
- ⚡ **Optimización**: Componentes reutilizables y renders eficientes
- 🔄 **Context API**: Estado global para productos creados

## 🚀 Tecnologías Utilizadas

- **React 19** - Framework principal
- **React Router DOM** - Navegación
- **React Hook Form** - Validación de formularios
- **Axios** - Cliente HTTP
- **Vite** - Build tool
- **CSS Grid/Flexbox** - Layout responsive
- **Context API** - Estado global
- **localStorage** - Persistencia

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.jsx          # Navegación responsive
│   ├── ProductCard.jsx     # Tarjeta de producto reutilizable
│   └── FormInput.jsx       # Input de formulario reutilizable
├── context/
│   └── ProductContext.jsx  # Estado global de productos
├── hooks/
│   └── useProducts.js      # Hook personalizado para productos
├── pages/
│   ├── Home.jsx            # Página de inicio
│   ├── Productos.jsx       # Lista de productos con búsqueda
│   ├── CrearProducto.jsx   # Formulario de creación
│   └── Register.jsx        # Vista de registro de usuarios (nuevo)
├── services/
│   └── api.js              # Servicios de API
└── styles/
    └── global.css          # Estilos globales
```

## 🛠️ Instalación y Uso

1. **Clona el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd inventario-react
   ```

2. **Instala dependencias**
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:5173
   ```

## 📱 Funcionalidades

### 🏠 Página de Inicio
- Bienvenida atractiva con navegación rápida
- Enlaces directos a productos y creación

### 📦 Productos
- **API Integration**: 20 productos de FakeStore API
- **Productos Personalizados**: Combinados con productos creados
- **Búsqueda**: Filtrado en tiempo real por nombre
- **Grid Responsive**: Auto-fit para diferentes pantallas
- **Cards Interactivas**: Hover effects y sombras

### ➕ Crear Producto
- **Validación Completa**: Nombre requerido, precio numérico > 0
- **React Hook Form**: Manejo eficiente de formularios
- **Feedback Visual**: Mensajes de éxito y error
- **Persistencia**: Guarda en Context API y localStorage
- **Redirección**: Automática a lista de productos

### 📱 Responsive Design
- **Móvil**: Menú hamburguesa, grid de 1 columna
- **Tablet**: Grid adaptativo, navegación colapsable
- **Escritorio**: Layout completo con múltiples columnas

## 🎯 Requisitos Académicos Cumplidos

✅ **Responsive Design**: CSS Grid, Flexbox, Media Queries
✅ **Formulario Funcional**: react-hook-form con validaciones
✅ **API Consumption**: Axios con FakeStore API
✅ **useEffect**: Carga inicial de productos
✅ **useContext**: Estado global de productos creados
✅ **Custom Hook**: useProducts para lógica reutilizable
✅ **Componentes Reutilizables**: ProductCard, FormInput, Navbar
✅ **Buenas Prácticas**: Keys correctas, optimización con useMemo
✅ **Persistencia**: localStorage con sincronización
✅ **Feedback Visual**: Mensajes de éxito y validaciones

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Vista previa del build
- `npm run lint` - Ejecutar ESLint

## 📄 Licencia

Este proyecto es para fines educativos y académicos.

---

**Desarrollado con ❤️ usando React**
