/*
  Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

  Example 1:

  Input: x = 123
  Output: 321

  Example 2:

  Input: x = -123
  Output: -321

 Solution: for this choose to write it in separate function within a class

*/

class ReverseInt {
  constructor(number){
    this.numb = number;
    this.maxHexaDec = 0x7FFFFFFF;
  }
}

ReverseInt.prototype.getStringRep = function(){
  return String(Math.abs(this.numb)).split('').reverse().join('');
}

ReverseInt.prototype.castToNumber = function(){
  return +this.numb;
}

ReverseInt.prototype.maxHexDecimal = function(){
  if(this.numb > this.maxHexDecimal){
    return 0 ;
  }
  return this.numb;
}

ReverseInt.prototype.returnReverse = function(){
  return this.numb > 0 ? this.numb : -this.numb;
}


module.exports = ReverseInt;
