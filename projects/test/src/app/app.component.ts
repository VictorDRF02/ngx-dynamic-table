import { AfterViewInit, Component } from '@angular/core';
import { HighlightService } from '../services/highlight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  examples = {
    string: [
      ['Name', 'Surname', 'Age'],
      ['Juan', 'Gómez', '45'],
      ['Pedro', 'Dominguez', '36'],
      ['Alberto', 'Pérez', '27'],
      ['Average', '', '36'],
    ],
    tableOptions: {
      header: [
        { text: 'Name', sortable: true, bold: true },
        { text: 'Surname', sortable: false },
        { text: 'Age', sortable: true },
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
      footer: [[{ text: 'Average' }, { text: '' }, { text: '36' }]],
      class: 'table-class',
    },
  };

  constructor(private _highlightService: HighlightService) {}

  ngAfterViewInit(): void {
    this._highlightService.highlightAll();
  }
}
