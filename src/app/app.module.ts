import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { DepartmentsComponent } from './home/departments/departments.component';
import { CmisComponent } from './home/departments/cmis/cmis.component';
import { ImgtComponent } from './home/departments/imgt/imgt.component';
import { EltnComponent } from './home/departments/eltn/eltn.component';
import { MathComponent } from './home/departments/math/math.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './home/cards/cards.component';
import { SponsorsComponent } from './home/sponsors/sponsors.component';
import { StudentsLifeComponent } from './students-life/students-life.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselComponent,
    HomeComponent,
    DepartmentsComponent,
    CmisComponent,
    ImgtComponent,
    EltnComponent,
    MathComponent,
    FooterComponent,
    CardsComponent,
    SponsorsComponent,
    StudentsLifeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
