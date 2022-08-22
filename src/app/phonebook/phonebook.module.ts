import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactViewComponent} from './components/contact-view/contact-view.component';
import {ContactAddComponent} from './components/contact-add/contact-add.component';
import {contactFeatureKey, reducer} from './store/reducer/contact.reducer';
import {StoreModule} from '@ngrx/store';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from "@ngrx/effects";
import {ContactEffects} from "./store/effects/contact.effects";
import { ContactFilterComponent } from './components/contact-filter/contact-filter.component';


@NgModule({
  declarations: [
    ContactViewComponent,
    ContactAddComponent,
    ContactFilterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(contactFeatureKey, reducer),
    EffectsModule.forRoot([ContactEffects]),
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ContactViewComponent, ContactAddComponent,
    ReactiveFormsModule, ContactFilterComponent
  ]
})
export class PhonebookModule { }
