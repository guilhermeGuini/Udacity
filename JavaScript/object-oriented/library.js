var Car = function(loc) {
    this.loc = loc;
};

// Na propriedade prototype as funções são compartilhadas
// e portanto não criadas a cada instância
Car.prototype.move = function() {
    this.loc++;
};

// Não pode-se instanciar a classe Car
// pois o this ficaria perdido
// na verdade o this seria da instancia da
// classee Car, portanto utiliza-se o .call
// passando o this da classe
var Van = function(loc) {
    Car.call(this, loc);
};

// Não é possível apenas atribuir a propriedade
// Car.prototype, pois seria realizado uma cópia
// e se na classe Van fosse implementado mais um método
// o mesmo seria replicado para Car, já que estão apontados
// para um mesmo objeto.
// Instanciar a classe Car também não resolveria, pois o que queremos
// é o prototype e não a classe.
// o que sobrou foi utilizar o Object.Create para propagar as falhas de pesquisas
// para Car.
Van.prototype = Object.create(Car.prototype);
// utilizando o Object.Create o construtor da classe Van
// é o construtor da classe Car
// por este motivo é necessário informar para a classe Van
// quem é o seu constutor.
Van.prototype.constructor = Van;