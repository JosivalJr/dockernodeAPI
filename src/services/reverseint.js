class reverseInt {
    constructor(int) {
      this.number = int;
     }

    validNumber() {
        return Number.isInteger(this.number);
     }

     reverseNumber(){
        const numberStr = this.number.toString();
        const reverseString = numberStr.split('').reverse().join(''); 
        const reversedNumber = parseInt(reverseString);
        return numberStr > 0 ? reversedNumber : reversedNumber * -1;
     }
  }
  module.exports = reverseInt; 