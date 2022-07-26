
const { remote } = require('webdriverio');

(async () => {
    const driver = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    })

    await driver.url('http://www.uitestingplayground.com/dynamicid')
   const buCl = await driver.$("//button[@type='button']").click();
   

    await driver.deleteSession()
})();