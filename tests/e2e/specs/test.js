// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
    'default e2e tests': browser =>
    {
        browser
        .url(process.env.VUE_DEV_SERVER_URL)
        .assert.containsText('h1', 'HaveFun')
        .end();
        //   .waitForElementVisible('#app', 5000)
        //   .assert.elementPresent('.hello')
        //   .assert.elementCount('img', 1)
        
    }
}
