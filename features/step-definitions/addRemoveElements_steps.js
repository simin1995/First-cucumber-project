const { Given, When, Then } = require('@wdio/cucumber-framework');

 // addElements

Given("I am on the add_remove_elements page", async () => {
    await browser.url(`https://the-internet.herokuapp.com/add_remove_elements/`);
});

When("I click on AddElement button", async () => {
    await $('//*[@id="content"]/div/button').click();
    await $('//*[@id="content"]/div/button').click();
});

Then("element is displayed", async () => {
    let deleteButton = await $('#elements');
    let isDisplayed = await deleteButton.isDisplayed();
    console.log(isDisplayed);
});

// removeElements

When("I click Delete button", async () => {
    await $('#elements').click();
    await $('#elements').click();
});

Then("element is not displayed", async () => {
    const deleteButton = await $('#elements');
    let isDisplayed = await deleteButton.isDisplayed();
    console.log(isDisplayed) == false;
});
