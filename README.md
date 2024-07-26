# ngx-dynamic-table

`ngx-dynamic-table` is an Angular component that generates a dynamic table using Bootstrap. The component accepts an input `data` which can be a `string[][]` or a `TableOptions`.

## Installation

To install the library, run:

```bash
yarn add ngx-dynamic-table-component
```

## Usage

Import the module in your Angular application:

```typescript
import { NgxDynamicTableModule } from 'ngx-dynamic-table-component';

@NgModule({
  imports: [
    // other modules
    NgxDynamicTableModule
  ],
  // other components, services, etc.
})
export class AppModule { }
```

### Example Usage

```typescript
import { Component } from '@angular/core';
import { TableOptions } from 'ngx-dynamic-table-component';

@Component({
  selector: 'app-root',
  template: `
    <ngx-dynamic-table [data]="tableData"></ngx-dynamic-table>
  `
})
export class AppComponent {
  tableData: string[][] = [
    ['Header 1', 'Header 2', 'Header 3'],
    ['Row 1 Col 1', 'Row 1 Col 2', 'Row 1 Col 3'],
    ['Row 2 Col 1', 'Row 2 Col 2', 'Row 2 Col 3']
  ];

  // Or using TableOptions
  tableOptions: TableOptions = {
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
}
```

## Development

### Clone the repository

```bash
git clone https://github.com/VictorDRF02/ngx-dynamic-table
cd ngx-dynamic-table
```

### Install dependencies

```bash
yarn install
```

### Build

```bash
yarn run build ngx-dynamic-table
```

### Run tests

```bash
yarn run test ngx-dynamic-table
```

### Run the example application

```bash
yarn run start test
```

## Contributions

Contributions are welcome! Please open an issue or a pull request in the repository.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
