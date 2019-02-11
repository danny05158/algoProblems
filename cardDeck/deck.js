/*
Problem:
Create a Javascript Deck class which contains an array of suites,
an array of values, and the deck itself.

The deck should populate once an instance is created. There should
also be two class functions. ShuffleCards, which shuffles the deck once
called. drawCard, which draws a card from the deck. drawCard can be provided
with 'top', 'buttom' or null as parameter.


Approach
1. Create Deck JS class
2. Populate Deck (inside constructor)
3. Create drawCard & shuffleCard functions
  - this function can work with or without parameter
  - if top >> draw from top, if buttom >> draw form buttom
  - if no parameter return random card, else return
4. ShuffleCard function
   -shuffle cards with Math.floor and Math.random
*/

class Deck {
  constructor(){
    this.suits = ['Hearts', 'Spades', 'Clubs', 'Dimonds'];
    this.values = ['Ace', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'Queen', 'King'];
    this.deck = []

    for(let suit in this.suits){
      for(let val in this.values){
        this.deck.push(`${this.values[val]} of ${this.suits[suit]}`)
      }
    }
    this.shuffleCards()
  }
}

Deck.prototype.drawCard = function(){

  let maxCards = 52;

 if(arguments[0] === 'top'){
    return this.deck.shift()
  }else if (arguments[0] === 'buttom'){
    return this.deck.pop()
  }else if(arguments[0] === null){ //if no arg return random card
    let randomNumb = Math.floor(Math.random() * (maxCards - 1))
    return this.deck[randomNumb]
  }

}

Deck.prototype.shuffleCards = function(){

  const {deck} = this; //this is the same as const deck = this.deck
  let length = this.deck.length;
  let randomNumb;

  while (length){
    randomNumb = Math.floor(Math.random() * m--)
    [deck[length], deck[randomNumb]] = [deck[randomNumb], deck[length]]
  }
   return this;

}
