const ResultsPage = require('../pageobjects/results.page');

const countResultPhrase = async (phrase) =>{
    const results = ResultsPage.phrase_results(phrase);
    return results;
};

const getText = async () =>{
    const texts = ResultsPage.resultElements.map(async(element)=>{
        console.log(await element.getText());
    })

return texts;
}

module.exports = {
    countResultPhrase,
}