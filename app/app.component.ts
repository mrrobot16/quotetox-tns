import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    template: `
    <StackLayout>
        <Label [text]="welcome_msg" class="welcome_msg"></Label>
        <Button text="TAP"></Button>
        <Label [text]="quote_of_day" class="quote" textWrap="true"></Label>
    </StackLayout>
    `,
})
export class AppComponent {
    public welcome_msg: string = "Welcome to Quotox, you are not alone!";
    public quote_of_day: string = "A lion is not concerned by the opinion of the sheep."

}
