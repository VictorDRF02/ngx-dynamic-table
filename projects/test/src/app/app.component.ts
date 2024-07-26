import { Component } from '@angular/core';
import { TableOptions } from 'projects/ngx-dynamic-table/src/lib/interfaces/table-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test';
  data1 = [
    ['Nombre', 'Apellido', 'Edad'],
    ['Pedro', 'Giménez', '20'],
    ['Arturo', 'Gómez', '35'],
    ['', '', '22.5'],
  ];
  // data2: TableOptions = {
  //   header: ['Nombre', 'Apellido', 'Edad'],
  //   body: [
  //     ['Pedro', 'Giménez', '20'],
  //     ['Arturo', 'Gómez', '35'],
  //   ],
  //   footer: [['', '', '22.5']],
  // };
}
