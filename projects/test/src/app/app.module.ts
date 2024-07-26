import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxDynamicTableModule } from 'projects/ngx-dynamic-table/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxDynamicTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
