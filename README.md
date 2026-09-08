# Unnamed life simulation

Juego de simulación de vida offline-first creado con HTML, CSS y JavaScript vanilla.

## Ejecutar localmente

Puedes abrir `index.html` directamente en el navegador. Para una experiencia más parecida a producción, sirve la carpeta con cualquier servidor estático local.

## Configuración

### Supabase

La integración de Supabase es opcional. El juego sigue funcionando offline con IndexedDB y `localStorage` si el servicio no está disponible.

1. Crea o abre el proyecto de Supabase.
2. Ejecuta `supabase-schema.sql` completo desde **SQL Editor**.
3. En **Authentication > Providers**, habilita **Anonymous Sign-Ins**.
4. Comprueba que `SUPABASE_URL` y `SUPABASE_ANON_KEY` de `supabase-client.js` correspondan al proyecto.
5. Usa únicamente la clave pública `anon` en el frontend. Nunca expongas una clave `service_role`.

La aplicación crea un usuario anónimo y sincroniza perfiles, partidas, decisiones, memorias y enfermedades. Las políticas RLS limitan los datos privados al usuario autenticado. El aprendizaje global solo se inserta cuando existe consentimiento.

El juego guarda datos localmente en el navegador mediante IndexedDB y `localStorage` como respaldo. Las partidas se sincronizan con Supabase cuando la conexión y la configuración están disponibles.

## Publicar en GitHub Pages

El repositorio incluye `.github/workflows/pages.yml`. Después de subir los archivos a la rama `main`:

1. Abre **Settings > Pages** en el repositorio.
2. En **Build and deployment > Source**, selecciona **GitHub Actions**.
3. Ejecuta el workflow **Deploy static site to GitHub Pages** desde la pestaña **Actions** si no se inicia automáticamente.

La dirección será:

`https://icerix1.github.io/simulador-supremo/`
