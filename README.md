# La Biblioteca Libre · labibliotecalibre.cl

Sitio principal de Biblioteca Libre. Hoy es una página de entrada: «Nos encontramos leyendo», con el logo, la ciudad, el correo y el Instagram. El sitio completo, con los proyectos, está en preparación en la rama `beta-completo`.

Es un sitio estático hecho con Astro. A diferencia del sitio del Club (cartas.labibliotecalibre.cl), este sí está abierto a los buscadores.

## Dónde se publica

En **GitHub Pages**, desde la rama `gh-pages`, que contiene el sitio ya construido (la carpeta `dist`). No usa Netlify, para no gastar los créditos que necesita el sitio del Club.

- `public/CNAME` fija el dominio: labibliotecalibre.cl.
- `public/.nojekyll` evita que GitHub ignore la carpeta `_astro`.

Para publicar un cambio:

```
npm ci
npm run build
# copiar dist/ a la rama gh-pages y subirla
```

## Qué se cambia y dónde

- `src/data/sitio.js`: título, bajada, descripción para buscadores, correo e Instagram.
- `src/components/Portadilla.astro`: la composición (título, filete y pie con logo, ciudad y contacto).
- `src/styles/global.css`: colores. Todos son de la paleta oficial: fondo azul noche #0c0b28, título durazno #ffd6be, texto celeste #badbed y filete salmón #ff9f7b.
- `public/og.jpg`: la imagen que aparece al compartir el enlace (1200 × 630).

Tipografía: EB Garamond para el título; Roboto Ligera para el resto, como en el sitio del Club. Las dos fuentes van alojadas en el propio sitio.

## Dominio (DNS en Hostinger)

Para que labibliotecalibre.cl muestre este sitio:

- **A @**: 185.199.108.153, 185.199.109.153, 185.199.110.153 y 185.199.111.153 (reemplazan al 5.183.10.201 del WordPress).
- **AAAA @**: se borra el de Hostinger.
- **CNAME www**: labibliotecalibre.github.io

El CNAME `cartas`, el TXT de verificación de Netlify y los registros de correo no se tocan.
