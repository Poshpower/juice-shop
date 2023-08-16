const SideMenu = require("./side-menu");

class BasePage {
    constructor() {

        this.sideMenu = new SideMenu();
    }

}
module.exports = BasePage;