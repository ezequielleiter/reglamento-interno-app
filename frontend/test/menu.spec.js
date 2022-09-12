var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
var reglamento = require('../src/views/ReglamentPanel.vue');

describe('Testing - agregar reglamento: ', function () {
 describe('Check reglamentoPOST Function', function async() {
  it('Check the returned value using : assert.equal(value, value): ', async () => {
   result = await reglamento.closeConfirmationSend('Ejemplo de test');
   assert.equal(value, 201);
  });
 });
});
