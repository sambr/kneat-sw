import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { StarshipItemComponent } from './components/starship-item/starship-item.component';
import { StarshipService } from './services/starship.service';
import { DistanceComponent } from './components/distance/distance.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    StarshipListComponent,
    StarshipItemComponent,
    DistanceComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule
  ],
  providers: [StarshipService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
