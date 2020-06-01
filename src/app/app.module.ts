import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app.routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { EntryModule } from './entry/entry.module';
import { CoreModule } from './core/core.module';
import { ReportsModule } from './reports/reports.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    EntryModule,
    HttpClientModule,
    CoreModule,
    ReportsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
