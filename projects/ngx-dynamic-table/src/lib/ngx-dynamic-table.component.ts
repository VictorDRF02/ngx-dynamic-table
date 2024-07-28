import { Component, Input, OnInit } from '@angular/core';
import { TableOptions } from './interfaces/table-options';
import { NgxDynamicTableService } from './ngx-dynamic-table.service';
import { CommonModule } from '@angular/common';
import { CellHeaderOptions } from './interfaces/cell-options';

@Component({
  selector: 'ngx-dynamic-table',
  templateUrl: './ngx-dynamic-table.component.html',
  standalone: true,
  imports: [CommonModule],
  styles: [
    `
      @import '~bootstrap/dist/css/bootstrap.min.css';
    `,
    `
      @import '~bootstrap-icons/font/bootstrap-icons.css';
    `,
  ],
})
export class NgxDynamicTableComponent implements OnInit {
  /** Table data */
  @Input() data!: string[][] | TableOptions;
  /** Table data in TableOptions format */
  tableData!: TableOptions;
  /** Currently organized column */
  currentColumn: any = {
    index: -1,
    isAscended: false,
    header: undefined,
  };

  constructor(private _dynamicTableService: NgxDynamicTableService) {}

  ngOnInit(): void {
    if (this.data instanceof Array) {
      this.tableData = this._dynamicTableService.transformToTableOptions(
        this.data
      );
    } else {
      this.tableData = this.data;
    }
  }

  /**
   * Sort an column.
   * @param headerCell - Cell header of the column to sort.
   */
  sort(headerCell: CellHeaderOptions) {
    // Get column index.
    const column = this.tableData.header?.indexOf(headerCell) || 0;
    // Sort column.
    this.tableData.body = this.tableData.body.sort((a, b) => {
      const number = a[column].text > b[column].text ? 1 : -1;
      return column == this.currentColumn.index && this.currentColumn.isAscended
        ? number * -1
        : number;
    });
    // Set currentColumn properties.
    if (this.currentColumn.index == column) {
      this.currentColumn.isAscended = !this.currentColumn.isAscended;
    } else {
      this.currentColumn.isAscended = true;
      this.currentColumn.index = column;
      this.currentColumn.header = headerCell;
    }
  }
}
