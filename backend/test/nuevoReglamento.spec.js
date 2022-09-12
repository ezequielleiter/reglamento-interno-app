var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
var reglamento = require('../controllers/data');

describe('Testing - agregar reglamento: ', function () {
 describe('Check reglamentoPOST Function', function () {
  it('Check the returned value using : assert.equal(value, value): ', function () {
   result = reglamento.reglamentoPOST('Ejemplo de test');
   assert.equal(value, value);
  });
 });
});
