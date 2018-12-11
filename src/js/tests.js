var expect = chai.expect;

describe('Reserva de Horarios ⏰', function() {
  it('Cuando quiero reservar un horario, el array de horarios disminuye en 1 su cantidad', function() {
    var restaurant = new Restaurant(
      1,
      'Nombre',
      'Rubro',
      'Ubicación',
      ['10', '11', '12'],
      'Imagen',
      [1, 2]
    );
    var cantidadPrevia = restaurant.horarios.length;
    restaurant.reservarHorario('11');

    expect(restaurant.horarios).to.not.include('11');
    expect(restaurant.horarios.length).to.equal(cantidadPrevia - 1);
  });

  it('Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual.', function() {
    var restaurant = new Restaurant(
      2,
      'Nombre',
      'Rubro',
      'Ubicación',
      ['10', '11', '12'],
      'Imagen',
      [2, 3]
    );
    var cantidadPrevia = restaurant.horarios.length;
    restaurant.reservarHorario('13');

    expect(restaurant.horarios.length).to.equal(cantidadPrevia);
  });

  it('Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual.', function() {
    var restaurant = new Restaurant(
      3,
      'Nombre',
      'Rubro',
      'Ubicación',
      ['10', '11', '12'],
      'Imagen',
      [3, 4]
    );
    var cantidadPrevia = restaurant.horarios.length;
    restaurant.reservarHorario('');

    expect(restaurant.horarios.length).to.equal(cantidadPrevia);
  });
});

// Restaurant.prototype.obtenerPuntuacion = function() {
//   if (this.calificaciones.length === 0) {
//     return 0;
//   } else {
//     var sumatoria = 0;
//     for (var i = 0; i < this.calificaciones.length; i++) {
//       sumatoria += this.calificaciones[i];
//     }
//     var promedio = sumatoria / this.calificaciones.length;
//     return Math.round(promedio * 10) / 10;
//   }
// };
// var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones)

describe('Obtener Puntuación ⭐️⭐⭐️️⭐️️⭐️️', function() {
  it('Dado un restaurant con determinadas calificaciones, la puntuación (que es el promedio de ellas) se calcula correctamente.', function() {
    var idRestaurante = 1; //El restaurant con Id 1 es TAO Uptown, con calificaciones [6, 7, 9, 10, 5]

    var rest = listado.buscarRestaurante(idRestaurante); //obtengo el objeto restaurante

    var sumaDeCalificaciones = 0; //guardo las calificaciones del resturant para sacar el promedio esperado
    for (var i = 0; i < rest.calificaciones.length; i++) {
      sumaDeCalificaciones += rest.calificaciones[i];
    }
    var promedioEsperado = sumaDeCalificaciones / rest.calificaciones.length; //obtengo el promedio esperado

    expect(rest.obtenerPuntuacion()).to.equal(promedioEsperado); //hago la comparacion del promedio obtenido por el objeto restaurante con el promedio esperado calculado anteriormente
  });

  it('Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0.', function() {
    //creo un restaurant sin calificaciones
    var rest = new Restaurant(
      6,
      'Green salad',
      'Ensalada',
      'Berlín',
      ['17:00', '19:00', '20:30'],
      '../img/ensalada2.jpg',
      []
    );

    expect(rest.obtenerPuntuacion()).to.equal(0);
  });
});

describe('Calificar 🔢➕➖✖️➗🔢', function() {
  it('Verificar que dada una calificacion mayor a 0 y menor a 10, se ingrese correctamente al arreglo de calificaciones', function() {
    var idRestaurante = 8; //El restaurant con Id 8 es Cafe Francoeur, con 5 calificaciones

    var rest = listado.buscarRestaurante(idRestaurante); //obtengo el objeto restaurante
    var cantidadCalificacionesAntesDeCalificar = rest.calificaciones.length; //guardo la cantidad de calificaciones

    rest.calificar(6); //hago una calificacion

    expect(rest.calificaciones.length).to.equal(
      cantidadCalificacionesAntesDeCalificar + 1
    ); //la cantidad de calificaciones del restaurant ahora deben ser igual a la cantidad de calificaciones guardadas antes de calificar una nueva, + 1
  });
});

describe('Buscar Restaurante  🍱🍕🎂🥞🥡🍽🍴', function() {
  it('Verificar que al buscar un restaurant inexistente, devuelta que no se encontró el restaurant', function() {
    var idRestaurante = 29; //El restaurant con Id 29 no existe

    var rest = listado.buscarRestaurante(idRestaurante); //Intento obtener el objeto restaurante

    expect(rest).to.equal('No se ha encontrado ningún restaurant');
  });
});

// //TEST 1
// //Voy a testear que la funcion obtenerRestaurantes devuelva la cantidad de restaurantes esperados de acuerdo a los parámetros indicados
// describe('Obtener cantidad de restaurantes por parámetro', function() {
//   it('Verificar que se obtengan los restaurantes esperados de acuerdo a los parámetros dados', function() {
//     var cantidadRestaurantes = listado.obtenerRestaurantes.length; //El restaurant con Id 29 no existe

//     var rest = listado.obtenerRestaurantes('Pasta', 'Roma', '14:30'); //Debe obtener como resultado un solo restaurant (el restaurant Pastasciutta)

//     expect(rest.length).to.equal(1);
//   });
// });

describe('Obtener Restaurante  🍱🍕🎂🥞🥡🍽🍴', function() {
  it('Verificar que se obtengan los restaurantes esperados de acuerdo a los parámetros dados', function() {
    var cantidadRestaurantes = listado.obtenerRestaurantes.length; //El restaurant con Id 29 no existe

    var rest = listado.obtenerRestaurantes('Pasta', 'Roma', '14:30'); //Debe obtener como resultado un solo restaurant (el restaurant Pastasciutta)

    expect(rest.length).to.equal(1);
  });
});
