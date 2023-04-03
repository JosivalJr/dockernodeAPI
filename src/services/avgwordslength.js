class avgwordslength {
    constructor(sentence) {
        this.sentence = sentence;
    }

    validSentence() {
        if(typeof this.sentence === 'string' && this.sentence.length > 0) return true;
            return false;
        }

    calculateAvarage(){
        const str = this.sentence;
        let treatedStr = str.replace(/[^\w\s]/gi, ' ').split(' ').filter(word => word.length > 0);
        let length = treatedStr.reduce(function(acc, currentWord) {
            return acc + currentWord.length;
        }, 0);

        return length / treatedStr.length;
    }
}

module.exports = avgwordslength; 