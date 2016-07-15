"use strict";
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.welcome_msg = "Welcome to Quotox, you are not alone!";
        this.quote_of_day = "A lion is not concerned by the opinion of the sheep.";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n    <StackLayout>\n        <Label [text]=\"welcome_msg\" class=\"welcome_msg\" textWrap=\"true\"></Label>\n\n        <Label [text]=\"quote_of_day\" class=\"quote\" textWrap=\"true\"></Label>\n        <!--  <Button text=\"TAP\"></Button> -->\n    </StackLayout>\n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map