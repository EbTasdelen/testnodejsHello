//Syntaxe BDD
var request = require('request')
var chai = require('chai');
var expect = chai.expect;
var Nom= require('../app')
describe('Test nom', function(){

    it('should send a nom',function(){
        let name = 'ABC';
        request('http://localhost:3000' , function(error, response, body) {
        expect(body).to.equal('Bonjour'+'ABC');
        done();


    })
})
})