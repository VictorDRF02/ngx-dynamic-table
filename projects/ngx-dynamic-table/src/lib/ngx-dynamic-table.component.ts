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
  styles: [],
})
export class NgxDynamicTableComponent implements OnInit {
  @Input() data!: string[][] | TableOptions;
  tableData!: TableOptions;
  orderColumn?: number;

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
    const column = this.tableData.header?.indexOf(headerCell) || 0;
    this.tableData.body = this.tableData.body.sort((a, b) => {
      const number = a[column].text > b[column].text ? 1 : -1;
      return column == this.orderColumn ? number * -1 : number;
    });
    this.orderColumn = column == this.orderColumn ? undefined : column;
  }
}
