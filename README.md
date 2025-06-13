# 🕒 Ham Clock by LU9WT

![Ham Clock Screenshot](./resources/screenshot.png)

> Una aplicación de reloj para radioaficionados que muestra simultáneamente la hora local y UTC

## 🚀 Características

- **Doble visualización**: Muestra tanto la hora local como la hora UTC (Tiempo Universal Coordinado)
- **Interfaz moderna**: Diseño oscuro con gradientes atractivos
- **Internacionalización**: Soporte para múltiples idiomas (inglés/español) con detección automática
- **Precisión**: Actualización en tiempo real usando `requestAnimationFrame` para máximo rendimiento
- **Multiplataforma**: Disponible para Windows, macOS y Linux

## 📦 Requisitos del sistema

- Node.js 16.x o superior
- npm 8.x o superior
- Git (recomendado para desarrollo)

## 🛠 Instalación

### Para usuarios finales

1. Descarga la última versión desde [Releases](https://github.com/JSDRAKE/ham-clock-electron-vite/releases)
2. Instala la aplicación siguiendo las instrucciones para tu sistema operativo

### Para desarrolladores

1. Clona el repositorio:
   ```bash
   git clone https://github.com/JSDRAKE/ham-clock-electron-vite.git
   cd ham-clock-electron-vite
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia la aplicación en modo desarrollo:
   ```bash
   npm run dev
   ```

## 🏗 Compilación

Para crear ejecutables para tu plataforma:

```bash
# Windows
npm run build:win

# macOS
npm run build:mac

# Linux
npm run build:linux
```

Los archivos compilados se guardarán en el directorio `dist/`.

## 🧩 Estructura del proyecto

```
src/
├── main/           # Código del proceso principal de Electron
├── preload/        # Scripts de precarga
└── renderer/       # Aplicación React
    ├── components/ # Componentes de React
    ├── hooks/      # Hooks personalizados
    └── styles/     # Estilos CSS
```

## 🛠 Tecnologías utilizadas

- **Electron**: Para crear aplicaciones de escritorio multiplataforma
- **React**: Para la interfaz de usuario
- **Vite**: Para el desarrollo y la construcción
- **i18next**: Para la internacionalización
- **Tailwind CSS**: Para los estilos (opcional, si lo estás usando)

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, lee las [pautas de contribución](CONTRIBUTING.md) antes de enviar un pull request.

## 📞 Soporte

Para soporte, por favor abre un issue en el [repositorio](https://github.com/JSDRAKE/ham-clock-electron-vite/issues).

## 🌐 Enlaces útiles

- [Documentación de Electron](https://www.electronjs.org/docs)
- [Documentación de React](https://es.reactjs.org/)
- [Documentación de Vite](https://vitejs.dev/)

---

Desarrollado con ❤️ por [JSDRAKE - LU9WT](https://www.jsdrake.com.ar)
