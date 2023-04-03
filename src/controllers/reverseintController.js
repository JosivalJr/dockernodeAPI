const reverseint = require('../services/reverseint');

module.exports = {
    async reverseint (req, res) {
        const number = Number(req.params.numberInt);
        const numberToReverse = new reverseint(number);
        const validNumber = numberToReverse.validNumber();
    
        if(!validNumber){
            
            return res.status(400).json({
                message: '400 - Bad Request.',
                error: 'Values ​​not entered correctly, enter an integer as a parameter.'
            })

        }

        return res.status(200).json({
            insertedNumber: number,
            negativeNumber: number > 0 ? false : true,
            reversedNumber: numberToReverse.reverseNumber()
        });
    }
}