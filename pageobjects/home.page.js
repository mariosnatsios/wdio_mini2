const Page = require('./page')

class HomePage extends Page {
    // Define Selectors
    get searchBar() { 
        return $('#twotabsearchtextbox');
    };

    get searchButton(){
        return $('#nav-search-submit-button');
        
    };

    get navAccountList(){
        return $('#nav-link-accountList');
    };

};

module.exports = new HomePage();