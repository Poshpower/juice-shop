const {Then} = require("@wdio/cucumber-framework");

Then(/^I enter email address$/, async function() {
    await console.log("Step - I enter email address");
})

Then(/^I enter password$/, async function() {
    await console.log("Step - I enter password");
})

Then(/^I enter password repeatedly$/, async function() {
    await console.log("Step - I enter password repeatedly");
})

Then(/^I select a question about elder sibling$/, async function() {
    await console.log("Step - I select a question about elder sibling");
})

Then(/^I write answer$/, async function() {
    await console.log("Step - I write answer");
})

Then(/^I press register button$/, async function() {
    await console.log("Step - I press register button");
})