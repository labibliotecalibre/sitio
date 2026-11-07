# La Biblioteca Libre · labibliotecalibre.cl

Sitio principal de Biblioteca Libre. Reemplaza al WordPress anterior. Es un sitio estático hecho con Astro y se publica en Netlify desde este repositorio. A diferencia del sitio del Club (cartas.labibliotecalibre.cl), este sí está abierto a los buscadores.

## Páginas

- `/`: portada con los proyectos (Casita de Libros, clubes de lectura, Bernardito y Elisa, Club de cartas, Dona tus libros), quiénes somos y contacto.
- `/casita-de-libros/`: normas de intercambio y dónde estará la Casita.
- `404`: página para direcciones que no existen.

## Qué se cambia y dónde

- `src/data/sitio.js`: correo, Instagram, enlace al Club y la **agenda de la Casita**. Si la agenda está vacía, el sitio remite a Instagram. Cada parada lleva una fecha `hasta`; cuando pasa esa fecha, la parada deja de mostrarse sola.
- `src/data/lecturas.js`: libros leídos en los clubes de lectura (el estante de la portada).
- `src/pages/index.astro` y `src/pages/casita-de-libros.astro`: textos.
- `src/assets/`: imágenes. Astro las convierte a WebP en varios tamaños al publicar.
- `public/_redirects`: direcciones del WordPress anterior que llevan al sitio nuevo (Casita, Dona tus libros, páginas de clubes de lectura, Club de cartas).

## Origen del material

Los textos y las ilustraciones de sección vienen del respaldo del WordPress (7 ene 2026), con edición ligera. Las ilustraciones de Elisa y Bernardito del Club (`club-cartas.png`) vienen del repositorio `club-cartas`.

No se publican cartas de niños ni fotos donde se reconozcan niños.

## Trabajar en local

```
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Publicación

Netlify toma la configuración de `netlify.toml` (comando `npm run build`, carpeta `dist`, Node 22).

Para pasar el dominio a Netlify se cambian solo estos registros en el panel DNS de Hostinger:

- el A de `@`, al valor que indique Netlify;
- el AAAA de `@`, que se borra;
- el CNAME de `www`.

El CNAME `cartas` y el TXT de verificación son del Club y no se tocan.
