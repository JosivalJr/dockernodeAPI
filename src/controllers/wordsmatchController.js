const wordsmatch = require('../services/wordsmatch');

module.exports = {
    async wordsmatch (req, res) {
        const firstSentence = req.params.firstSentence;
        const secondSentence = req.params.secondSentence;
        
        const sentenceTreatment = new wordsmatch(firstSentence, secondSentence);
        const validSentence = sentenceTreatment.validSentence();
        const matchedsWords = sentenceTreatment.calculateMatches();

        if(validSentence){
            if(!validSentence){
                return res.status(400).json({
                    message: '400 - Bad Request.',
                    error: 'Values ​​not entered correctly, enter two string sentence as a parameter.'
                });
            } 
        };

        return res.status(200).json({
            firstSentence: firstSentence,
            secondSentence: secondSentence,
            matchedWords: matchedsWords.matchedWords,
            missmatchedWords: matchedsWords.missMatchedWords
        });
    }
}