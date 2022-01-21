module.exports = class Page {
    async open(path =' '){
        return await browser.url(`https://www.amazon.com/${path}`);
    }

}