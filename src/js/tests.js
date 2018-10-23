var expect = chai.expect;

describe('Reserva de horarios', function() {
  it('Cuando quiero reservar un horario válido, el array de horarios se disminuya en 1 su cantidad', function() {
    var restaurant = new Restaurant(
      1,
      'Cremona',
      'rubro',
      'ubicación',
      ['10', '11', '12'],
      'imagen',
      [2, 3]
    );
    var cantidadPrevia = restaurant.horarios.length;
    restaurant.reservarHorario('11');

    expect(restaurant.horarios).to.not.include('11');
    expect(restaurant.horarios.length).to.equal(cantidadPrevia - 1);
  });
});
