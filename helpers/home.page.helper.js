const HomePage =  require('../pageobjects/home.page');

// const searchBar = HomePage.searchBar;
// const searchButton = HomePage.searchButton;

const verifyHomePage = async() =>{
    await HomePage.open();
    await expect(browser).toHaveTitle('Amazon.com. Spend less. Smile more.');
};

module.exports = {
    verifyHomePage
};