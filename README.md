# Unnamed life simulation

Juego de simulación de vida offline-first creado con HTML, CSS y JavaScript vanilla.

## Ejecutar localmente

Puedes abrir `index.html` directamente en el navegador. Para una experiencia más parecida a producción, sirve la carpeta con cualquier servidor estático local.

## Publicar en Vercel

### Opción 1: desde la web de Vercel

1. Sube este proyecto a un repositorio de GitHub, GitLab o Bitbucket.
2. Entra en Vercel y selecciona **Add New Project**.
3. Importa el repositorio.
4. En **Framework Preset**, selecciona **Other**.
5. Deja vacío **Build Command**.
6. Deja vacío **Install Command**.
7. Usa `.` como **Output Directory** si Vercel lo solicita.
8. Pulsa **Deploy**.

### Opción 2: usando Vercel CLI

Con Node.js instalado:

```powershell
npx vercel
```

Para publicar en producción:

```powershell
npx vercel --prod
```

Ejecuta los comandos desde la carpeta que contiene directamente `index.html`, `script.js`, `styles.css` y `vercel.json`. Si el proyecto ya estaba enlazado a otra carpeta, ejecuta `npx vercel unlink` y vuelve a desplegar desde esta carpeta.

## Configuración

`vercel.json` configura el proyecto como una aplicación estática, redirige las rutas a `index.html` y añade cabeceras básicas de seguridad.

El juego guarda datos localmente en el navegador mediante IndexedDB y `localStorage`. El despliegue en Vercel no requiere base de datos ni variables de entorno.

## Publicar en GitHub Pages

El repositorio incluye `.github/workflows/pages.yml`. Después de subir los archivos a la rama `main`:

1. Abre **Settings > Pages** en el repositorio.
2. En **Build and deployment > Source**, selecciona **GitHub Actions**.
3. Ejecuta el workflow **Deploy static site to GitHub Pages** desde la pestaña **Actions** si no se inicia automáticamente.

La dirección será:

`https://icerix1.github.io/simulador-supremo/`
