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
      ['John', 'Smith', '45'],
      ['Peter', 'Johnson', '36'],
      ['Albert', 'Brown', '27'],
      ['Emily', 'Davis', '30'],
    ],
    tableOptions: {
      header: [
        { text: 'Name', sortable: true },
        { text: 'Surname', sortable: false, italic: true },
        { text: 'Age', sortable: true },
      ],
      body: [
        [
          { text: 'John', bold: true },
          { text: 'Smith' },
          { text: '45', italic: true },
        ],
        [
          { text: 'Peter' },
          { text: 'Johnson', class: 'custom-class' },
          { text: '36' },
        ],
        [{ text: 'Albert' }, { text: 'Brown' }, { text: '27' }],
        [{ text: 'Emily' }, { text: 'Davis' }, { text: '30' }],
      ],
      footer: [[{ text: 'Average', bold: true, colSpam: 2 }, { text: '34.5' }]],
      class: 'table-hover table-bordered',
    },
    header: {
      header: [
        {
          text: 'Full Name', // Cell text
          colSpam: 2, // Columns it occupies
          italic: true, // Italic style
          sortable: false, // Non sortable column
        },
        {
          text: 'Age',
          bold: false, // Remove bold text
          sortable: true,
        },
      ],
      body: [
        [{ text: 'John' }, { text: 'Smith' }, { text: '45' }],
        [{ text: 'Peter' }, { text: 'Johnson' }, { text: '36' }],
        [{ text: 'Albert' }, { text: 'Brown' }, { text: '27' }],
      ],
      class: 'table-hover table-bordered',
    },
    body: {
      header: [
        { text: 'Name', sortable: false },
        { text: 'Surname', sortable: false },
        { text: 'Age', sortable: false },
      ],
      body: [
        // First row
        [
          {
            text: 'John Smith', // Cell text
            colSpam: 2, // Columns it occupies
            bold: true, // Set bold text
          },
          {
            text: '45',
          },
        ],
        // Second row
        [
          {
            text: 'Peter',
          },
          {
            text: 'Johnson',
            italic: true, // Set italic style
            rowSpam: 2, // Rows it occupies
            class: 'align-middle', // Custom class
          },
          { text: '36' },
        ],
        // Last row
        [{ text: 'Albert' }, { text: '27' }],
      ],
    },
    footer: {
      header: [{ text: 'Name' }, { text: 'Surname' }, { text: 'Age' }],
      body: [
        [
          {
            text: 'Table data...',
            colSpam: 3,
            rowSpam: 3,
            class: 'text-center align-middle',
            bold: true,
          },
        ],
      ],
      footer: [
        [
          {
            text: 'Average',
            bold: true,
            colSpam: 2,
          },
          { text: '34.5' },
        ],
      ],
      class: 'table-hover table-bordered',
    },
  };

  examplesStrings = {
    string: `[
${this.examples.string
  .map((row) => `  [${row.map((item) => `'${item}'`).join(', ')}]`)
  .join(',\n')}
]`,
    tableOptions: `
    {
      header: [
        { text: 'Name', sortable: true },
        { text: 'Surname', sortable: false, , italic: true },
        { text: 'Age', sortable: true },
      ],
      body: [
        [
          { text: 'John', bold: true },
          { text: 'Smith' },
          { text: '45', italic: true },
        ],
        [
          { text: 'Peter' },
          { text: 'Johnson', class: 'custom-class' },
          { text: '36' },
        ],
        // Other rows...
      ],
      footer: [
        [{ text: 'Average', bold: true, colSpam: 2 }, { text: '34.5' }],
      ],
      class: 'table-hover table-bordered',
    }
    `,
    header: `
    {
       header: [
        {
          text: 'Full Name', // Cell text
          colSpam: 2,  // Columns it occupies
          italic: true,  // Italic style
          sortable: false,  // Non sortable column
        },
        {
          text: 'Age',
          bold: false,  // Remove bold text
          sortable: true,
        },
      ],
      // Other properties...
    }
    `,
    body: `
    {
      // Header...
      body: [
        // First row
        [
          {
            text: 'John Smith', // Cell text
            colSpam: 2, // Columns it occupies
            bold: true, // Set bold text
          },
          {
            text: '45',
          },
        ],
        // Second row
        [
          {
            text: 'Peter',
          },
          {
            text: 'Johnson',
            italic: true, // Set italic style
            rowSpam: 2, // Rows it occupies
            class: 'align-middle', // Custom class
          },
          { text: '36' },
        ],
        // Last row
        [{ text: 'Albert' }, { text: '27' }],
      ],
    }
    `,
    footer: `
    {
    // Header and Body...
    footer: [
        [
          {
            text: 'Average', // Cell text
            bold: true, // Set bold text
            colSpam: 2, // Columns it occupies
          },
          { text: '34.5' },
        ],
      ],
    }
    `,
  };
  constructor(private _highlightService: HighlightService) {}

  ngAfterViewInit(): void {
    this._highlightService.highlightAll();
  }
}
