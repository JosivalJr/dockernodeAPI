const avgwordslength = require('../services/avgwordslength');

module.exports = {
    async avgwordslength (req, res) {
        const sentence = req.params.sentence;
        const sentenceToCalculate = new avgwordslength(sentence);
        const validSentence = sentenceToCalculate.validSentence();
    
        if(!validSentence){
            return res.status(400).json({
                message: '400 - Bad Request.',
                error: 'Values ​​not entered correctly, enter an string sentence as a parameter.'
            });
        } 
        
        return res.status(200).json({
            sentence: sentence,
            avarageWordsLength: sentenceToCalculate.calculateAvarage()
        });
    }
}