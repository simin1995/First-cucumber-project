const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on the login page", async () => {
    await browser.url(`https://the-internet.herokuapp.com/login`);
});

When("I login with {word} and {word}", async (username, password) => {
    await $('#username').setValue(username);
    await $('#password').setValue(password);
    await $('button[type="submit"]').click();
});

Then("I should see a flash message saying {string}", async (message) => {
    const elem = await $('#flash');
    await expect(elem).toBeExisting();
    await expect(elem).toHaveTextContaining(message);
});