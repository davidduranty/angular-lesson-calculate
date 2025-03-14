import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { AppComponent } from "./app.component";;

import { BrowserModule } from "@angular/platform-browser";
import { UserInputModule } from "./user-input/user-input.module";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";


@NgModule({
  declarations: [AppComponent, HeaderComponent, InvestmentResultsComponent],
  imports: [BrowserModule, UserInputModule],
  bootstrap: [AppComponent]
})
class AppModule {

}

export { AppModule }
