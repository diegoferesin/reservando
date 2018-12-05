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
});

describe('Reserva de Horarios ⏰', function() {
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
});

describe('Reserva de Horarios ⏰', function() {
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
    var restaurant = new Restaurant(
      4,
      'Nombre',
      'Rubro',
      'Ubicación',
      ['10', '11', '12'],
      'Imagen',
      [4, 5]
    );
    var promedioCorrecto = (4 + 5) / 2;

    expect().to.equal(promedioCorrecto);
  });
});

describe('Obtener Puntuación ⭐️⭐⭐️️⭐️️⭐️️', function() {
  it('Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0.', function() {
    var restaurant = new Restaurant(
      5,
      'Nombre',
      'Rubro',
      'Ubicación',
      ['10', '11', '12'],
      'Imagen',
      [5, 6]
    );
    var cantidadPrevia = restaurant.horarios.length;
    restaurant.reservarHorario('');

    expect(restaurant.horarios.length).to.equal(cantidadPrevia);
  });
});
