import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { TransferHttpModule } from './transfer-http/transfer-http.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    TransferHttpModule,
    AppRoutingModule
  ],
  exports: [
    AppComponent
  ]
})
export class AppModule { }
