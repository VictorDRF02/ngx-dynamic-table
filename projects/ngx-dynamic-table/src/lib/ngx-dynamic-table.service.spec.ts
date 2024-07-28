import { TestBed } from '@angular/core/testing';
import { NgxDynamicTableService } from './ngx-dynamic-table.service';
import { TableOptions } from './interfaces/table-options';
import { TransformOptions } from './interfaces/transform-options';

describe('NgxDynamicTableService', () => {
  let service: NgxDynamicTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDynamicTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should transform data to TableOptions', () => {
    const data: string[][] = [
      ['Header1', 'Header2'],
      ['Row1Col1', 'Row1Col2'],
      ['Row2Col1', 'Row2Col2'],
    ];

    const options: TransformOptions = {
      headerBold: true,
      headerItalic: false,
      headerSorteable: true,
      bodyBold: false,
      bodyItalic: true,
      tableClass: 'custom-class',
    };

    const expected: TableOptions = {
      header: [
        { text: 'Header1', bold: true, italic: false, sortable: true },
        { text: 'Header2', bold: true, italic: false, sortable: true },
      ],
      body: [
        [
          { text: 'Row1Col1', bold: false, italic: true },
          { text: 'Row1Col2', bold: false, italic: true },
        ],
        [
          { text: 'Row2Col1', bold: false, italic: true },
          { text: 'Row2Col2', bold: false, italic: true },
        ],
      ],
      class: 'custom-class',
    };

    const result = service.transformToTableOptions(data, options);
    expect(result).toEqual(expected);
  });
});
