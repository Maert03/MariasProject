import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainpageComponent } from './mainpage/mainpage.component';

import { ToastrModule } from 'ngx-toastr';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Page404Component } from './page404/page404.component';

// ADICIONALES 
import { NgxSpinnerModule } from "ngx-spinner";

const routes: Routes = [

  { path: '', component: MainpageComponent, pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    Page404Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false
    }),
    [RouterModule.forRoot(routes)],
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
