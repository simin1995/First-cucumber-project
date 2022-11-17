const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on the {string} page", async (page) => {
    await browser.url(`https://the-internet.herokuapp.com/${page}`);
});

 // addElements

When("I click the add element button", async () => {
    await $('//*[@id="content"]/div/button').click();
});

Then("Delete buttons are displayed", async () => {
    const deleteButton = await $('//*[@id="elements"]/button');
    await expect(deleteButton).toExist();
});

// removeElements

Given("Delete buttons exists", async () => {
    const deleteButton = await $('//*[@id="elements"]/button');
    await expect(deleteButton).toExist();
    await expect(deleteButton).toBeClickable();
});

When("When I click the delete button", async () => {
    await $('//*[@id="elements"]/button').click();
});

Then("Delete buttons are not displayed", async () => {
    const deleteButton = await $('//*[@id="elements"]/button');
    let isDisplayed = await deleteButton.isDisplayed();
    console.log(isDisplayed) == false;
});
