import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxDynamicTableModule } from 'dist/ngx-dynamic-table-component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxDynamicTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
