import { Component, Input, OnInit } from '@angular/core';
import { TableOptions } from './interfaces/table-options';
import { NgxDynamicTableService } from './ngx-dynamic-table.service';

@Component({
  selector: 'ngx-dynamic-table',
  templateUrl: './ngx-dynamic-table.component.html',
  styles: [],
})
export class NgxDynamicTableComponent implements OnInit {
  @Input() data!: string[][] | TableOptions;
  tableData?: TableOptions;

  constructor(private _dynamicTableService: NgxDynamicTableService) {}

  ngOnInit(): void {
    if (this.data instanceof Array) {
      this.tableData = this._dynamicTableService.transformToTableOptions(
        this.data
      );
    }
  }
}
