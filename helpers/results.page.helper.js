const ResultsPage = require('../pageobjects/results.page');

const countResultPhrase = async (phrase) =>{
    const results = ResultsPage.phrase_results(phrase);
    return results;
}

module.exports = {
    countResultPhrase,
}