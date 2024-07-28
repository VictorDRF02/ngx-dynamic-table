# ngx-dynamic-table-component

![npm version](https://img.shields.io/npm/v/ngx-dynamic-table-component)
![npm downloads](https://img.shields.io/npm/dm/ngx-dynamic-table-component)
![GitHub issues](https://img.shields.io/github/issues/VictorDRF02/ngx-dynamic-table)
![GitHub license](https://img.shields.io/github/license/VictorDRF02/ngx-dynamic-table)

`ngx-dynamic-table-component` is an Angular component that generates a dynamic table using Bootstrap. The component accepts an input `data` which can be a `string[][]` or a `TableOptions`.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Example Usage](#example-usage)
- [API](#api)
  - [Inputs](#inputs)
  - [TableOptions](#tableoptions)
- [Examples](#examples)
  - [Basic Example](#basic-example)
  - [Advanced Example with TableOptions](#advanced-example-with-tableoptions)
- [Support](#support)
- [More Information](#more-information)

## Features

- Dynamic table generation using Bootstrap
- Supports both `string[][]` and `TableOptions` inputs
- Customizable headers, footers, and cell styles
- Sortable columns

## Installation

To install the library, run:

```bash
npm install ngx-dynamic-table-component
```

## Usage

Import the module in your Angular application:

```typescript
import { NgxDynamicTableComponent } from 'ngx-dynamic-table-component';

@NgModule({
  imports: [
    // other modules
    NgxDynamicTableComponent
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

## API

### Inputs

- `data: string[][] | TableOptions` - The data to be displayed in the table.

### TableOptions

- `header: CellHeaderOptions[]` - Table header content.
- `body: CellOptions[][]` - Table body content.
- `footer: CellOptions[][]` - Table footer contents.
- `class: string` - Custom class for the table.

## Examples

### Basic Example

```typescript
@Component({
  selector: 'app-basic',
  template: `
    <ngx-dynamic-table [data]="basicData"></ngx-dynamic-table>
  `
})
export class BasicComponent {
  basicData: string[][] = [
    ['Header 1', 'Header 2', 'Header 3'],
    ['Row 1 Col 1', 'Row 1 Col 2', 'Row 1 Col 3']
  ];
}
```

### Advanced Example with TableOptions

```typescript
@Component({
  selector: 'app-advanced',
  template: `
    <ngx-dynamic-table [data]="advancedOptions"></ngx-dynamic-table>
  `
})
export class AdvancedComponent {
  advancedOptions: TableOptions = {
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

## Support

If you encounter any issues or have questions, please open an issue on [GitHub](https://github.com/VictorDRF02/ngx-dynamic-table/issues).

## More Information

For more details, contributions, and license information, please visit the [GitHub repository](https://github.com/VictorDRF02/ngx-dynamic-table).
