const {Then} = require("@wdio/cucumber-framework");

Then(/^I open landing page$/, async function() {
    await console.log("Step - I open landing page");
})

Then(/^I press on Account button$/, async function() {
    await console.log("Step - I press on Account button");
})

Then(/^I am on login page$/, async function() {
    await console.log("Step - I am on login page");
})

Then(/^I press not yet a customer$/, async function() {
    await console.log("Step - I press not yet a customer");

})