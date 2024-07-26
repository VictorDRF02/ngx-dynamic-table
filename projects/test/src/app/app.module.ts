import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxDynamicTableComponent } from 'projects/ngx-dynamic-table/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxDynamicTableComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
