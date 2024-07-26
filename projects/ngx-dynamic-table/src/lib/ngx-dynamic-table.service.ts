import { Injectable } from '@angular/core';
import { TableOptions } from './interfaces/table-options';
import { CellHeaderOptions, CellOptions } from './interfaces/cell-options';
import { TransformOptions } from './interfaces/transform-options';

@Injectable({
  providedIn: 'root',
})
export class NgxDynamicTableService {
  constructor() {}

  /**
   * Transform an string array to an `TableOptions` object.
   * @param {string[][]} data - Data to transform.
   * @param {TransformOptions} options - Custom options.
   * @returns {TableOptions} The TableOptions object.
   */
  transformToTableOptions(data: string[][], options: TransformOptions = {}): TableOptions {
    // Transform string to CellOptions
    const dataAux: CellOptions[][] = data.map((e, i) => {
      if (i == 0) {
        return e.map((j) => {
          const cell: CellHeaderOptions = {
            text: j,
            bold: options.headerBold,
            italic: options.headerItalic,
            sortable: options.headerSorteable,
          };
          return cell;
        });
      } else {
        return e.map((j) => {
          const cell: CellOptions = {
            text: j,
            bold: options.bodyBold,
            italic: options.bodyItalic,
          };
          return cell;
        });
      }
    });
    // Define the TableOptions
    const header = dataAux[0]
    dataAux.shift()
    const body = dataAux
    const tableOptions: TableOptions = {
      header: header,
      body: body,
      class: options.tableClass,
    };
    // Return
    return tableOptions;
  }
}
