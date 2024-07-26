import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  examples = {
    string: [
      ['Nombre', 'Apellido', 'Edad'],
      ['Juan', 'Gómez', '45'],
      ['Pedro', 'Dominguez', '36'],
      ['Alberto', 'Pérez', '27'],
      ['Promedio', '', '36'],
    ],
    tableOptions: {
      header: [
        { text: 'Nombre', sortable: true },
        { text: 'Apellido', sortable: false },
        { text: 'Edad', sortable: true },
      ],
      body: [
        [
          { text: 'Juan', bold: true },
          { text: 'Gómez' },
          { text: '45', italic: true },
        ],
        [
          { text: 'Pedro' },
          { text: 'Dominguez', class: 'custom-class' },
          { text: '36' },
        ],
        [{ text: 'Alberto' }, { text: 'Pérez' }, { text: '27' }],
      ],
      footer: [[{ text: 'Promedio' }, { text: '' }, { text: '36' }]],
      class: 'table-class',
    },
  };
}
