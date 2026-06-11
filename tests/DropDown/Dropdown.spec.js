import test from "@playwright/test";
test('Drop Down', async ({ page }) => {
    await page.goto('https://www.leafground.com/select.xhtml');
    //select tag and option
    await page.selectOption('.ui-selectonemenu', { label: 'Playwright' });
    await page.waitForTimeout(5000);
    //non-select tag
    await page.locator("[class='ui-selectonemenu-label ui-inputfield ui-corner-all']").first().click();
    await page.locator("[class='ui-selectonemenu-item ui-selectonemenu-list-item ui-corner-all']").nth(2).click();
    await page.locator("[class='ui-autocomplete-dropdown ui-button ui-widget ui-state-default ui-corner-right ui-button-icon-only']").click();
    //await page.locator("[class='[id='j_idt87:auto-complete_input']']").fill('play')
    await page.locator("[class='ui-autocomplete-item ui-autocomplete-list-item ui-corner-all']").nth(2).click();
});
