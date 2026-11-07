// Datos generales del sitio. Lo que cambie (correo, redes, cifras) se cambia aquí.
export const sitio = {
  nombre: 'La Biblioteca Libre',
  url: 'https://labibliotecalibre.cl',
  lema: 'Aquí amamos leer',
  descripcion:
    'Biblioteca gratuita e itinerante desde 2016. Intercambia libros en la Casita de Libros, súmate a un club de lectura o dona los libros que ya leíste. Santiago de Chile.',
  correo: 'biblioteca@catedraslibres.com',
  instagram: { usuario: 'labibliotecalibre', url: 'https://www.instagram.com/labibliotecalibre/' },
  club: 'https://cartas.labibliotecalibre.cl/',
  desde: 2016,
};

// Dónde estará la Casita. Si la lista está vacía, la página remite a Instagram.
// Ejemplo: { lugar: 'Mall Paseo Quilín', comuna: 'Peñalolén', fechas: 'sábado 27 y domingo 28 de septiembre', horario: '12:00 a 20:00', hasta: '2025-09-28' }
// «hasta» (AAAA-MM-DD) sirve para que la actividad deje de mostrarse sola cuando pasa.
export const agenda = [];
