import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { MaterialModuleValue } from './modules/material/material.module';

import { AppComponent } from './app.component';
import { FullLayoutComponent } from './pages/layouts/full-layout/full-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...MaterialModuleValue
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
