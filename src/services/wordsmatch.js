class wordsmatch {
    constructor(firstSentence, secondSentence) {
        this.firstSentence = firstSentence;
        this.secondSentence = secondSentence;
    }

    validSentence() {
        if( typeof this.firstSentence === 'string' &&
            typeof this.secondSentence === 'string' &&
            this.firstSentence.length > 0 &&
            this.secondSentence.length > 0) return true;

            return false;
        }

    calculateMatches(){
        const firstSentence = this.firstSentence.split(' ').filter(word => word.length > 0);
        const secondSentence = this.secondSentence.split(' ').filter(word => word.length > 0);
        
        const matchedWords = [];
        const missMatchedWords = [];
        
        firstSentence.forEach(word => {
            if (secondSentence.includes(word) && !matchedWords.includes(word)) matchedWords.push(word);
            if (!secondSentence.includes(word)) missMatchedWords.push(word);
        });
          
        secondSentence.forEach(word => {
            if (firstSentence.includes(word) && !matchedWords.includes(word)) matchedWords.push(word);
            if (!firstSentence.includes(word)) missMatchedWords.push(word);
        });
        
        return {
            matchedWords,
            missMatchedWords
        };
    }
}

module.exports = wordsmatch; 