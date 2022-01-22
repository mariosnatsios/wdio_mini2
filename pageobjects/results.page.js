const Page = require('./page');

class ResultsPage extends Page {
    //Define Locators
    get searchInput() { 
        return $('#twotabsearchtextbox');
    };
};

module.exports = new ResultsPage();