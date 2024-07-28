import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxDynamicTableComponent } from 'projects/ngx-dynamic-table/src/public-api';
import { HighlightService } from '../services/highlight.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxDynamicTableComponent],
  providers: [
    HighlightService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
