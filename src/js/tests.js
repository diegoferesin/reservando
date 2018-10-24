var expect = chai.expect;

describe('Reserva de horarios', function() {
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

describe('Reserva de horarios', function() {
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

describe('Reserva de horarios', function() {
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
