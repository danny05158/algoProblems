const { expect } = require('chai');
const Deck = require('./deck');

describe('Test Deck of Cards funcs', function (){

  const deck = new Deck();

  it('has a deck of cards greater than one', async function(){
    expect(deck).to.be.an('object');
  });

  it('can draw a card', async function(){
    let card = deck.drawCard('top');
    expect(card).to.be.an('string');
  });

  it('can shuffle cards and return obj', async function(){
    let cards = deck.shuffleCards();
    expect(cards).to.be.an('object');
  })

});
