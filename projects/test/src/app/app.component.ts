import { Component } from '@angular/core';
import { TableOptions } from 'projects/ngx-dynamic-table/src/lib/interfaces/table-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test';
  data1 = {
    header: [
      { text: 'Header 1', sortable: true },
      { text: 'Header 2', sortable: false },
      { text: 'Header 3', sortable: true }
    ],
    body: [
      [
        { text: 'Row 1 Col 1', bold: true },
        { text: 'Row 1 Col 2' },
        { text: 'Row 1 Col 3', italic: true }
      ],
      [
        { text: 'Row 2 Col 1' },
        { text: 'Row 2 Col 2', class: 'custom-class' },
        { text: 'Row 2 Col 3' }
      ]
    ],
    footer: [
      [
        { text: 'Footer 1' },
        { text: 'Footer 2' },
        { text: 'Footer 3' }
      ]
    ],
    class: 'table-class'
  };
  // data2: TableOptions = {
  //   header: ['Nombre', 'Apellido', 'Edad'],
  //   body: [
  //     ['Pedro', 'Giménez', '20'],
  //     ['Arturo', 'Gómez', '35'],
  //   ],
  //   footer: [['', '', '22.5']],
  // };
}
