import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Imports
import { HttpClientModule } from "@angular/common/http";

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HousesComponent } from './components/houses/houses.component';
import { WizardsComponent } from './components/wizards/wizards.component';
import { SpellsComponent } from './components/spells/spells.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoadingComponent,
    FooterComponent,
    NavbarComponent,
    HousesComponent,
    WizardsComponent,
    SpellsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
