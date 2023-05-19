import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [AppComponent, SimpleTableComponent],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule,
    MatTableModule,
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
