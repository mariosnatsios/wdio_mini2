const HomePage =  require('../pageobjects/home.page');

const verifyHomePage = async() =>{
    await HomePage.open();
    await expect(browser).toHaveTitle('Amazon.com. Spend less. Smile more.');
};

const searchProduct = async(product = " ") =>{
    const searchBar = await HomePage.searchBar;
    const searchButton = await HomePage.searchButton;
    await expect(searchBar).toBeDisplayed();
    await searchBar.setValue(product)
    await expect(searchButton).toBeDisplayed();
    await searchButton.click();
}

const hitNavAccountList = async() =>{
    const accountListNav = await HomePage.navAccountList;
    await expect(accountListNav).toBeDisplayed();
    await accountListNav.click();

};

module.exports = {
    verifyHomePage,
    searchProduct,
    hitNavAccountList,
};