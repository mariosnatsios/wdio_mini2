const Page = require('./page')

class HomePage extends Page {
    // Define Selectors
    get searchBar() { 
        return $('#twotabsearchtextbox');
    }

    get searchButton(){
        return $('#nav-search-submit-button');
        
    }

}

module.exports = new HomePage();